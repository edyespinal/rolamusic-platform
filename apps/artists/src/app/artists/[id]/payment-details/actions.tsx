"use server";

import { stripe } from "@rola/services/stripe";
import { ArtistPayment } from "@rola/services/schemas";
import { AddBankAccountFormValues, CreateAccountFormValues } from "./data";

async function createStripeAccount(
  id: string,
  payload: CreateAccountFormValues & { ip: string }
) {
  return stripe.accounts.createAccount({
    business_type: "individual",
    business_profile: {
      mcc: "7929",
      url: payload.website,
    },
    capabilities: {
      transfers: {
        requested: true,
      },
      card_payments: {
        requested: true,
      },
    },
    controller: {
      fees: {
        payer: "application",
      },
      losses: {
        payments: "application",
      },
      stripe_dashboard: {
        type: "none",
      },
      requirement_collection: "application",
    },
    individual: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      address: {
        country: "ES",
        line1: payload.address.street,
        line2: payload.address.line2,
        city: payload.address.city,
        state: payload.address.state,
        postal_code: payload.address.postalCode,
      },
      dob: {
        day: new Date(payload.dateOfBirth).getDate(),
        month: new Date(payload.dateOfBirth).getMonth() + 1,
        year: new Date(payload.dateOfBirth).getFullYear(),
      },
      id_number: payload.documentNumber,
      phone: `${payload.phone.countryCode}${payload.phone.number}`,
    },
    country: "ES",
    email: payload.email,
    metadata: {
      artistId: id,
      documentType: payload.documentType,
    },
    default_currency: "eur",
    tos_acceptance: {
      service_agreement: "full",
      ip: payload.ip,
      date: Math.floor(Date.now() / 1000),
    },
  });
}

async function addBankAccount(
  stripeAccountId: string,
  payload: AddBankAccountFormValues
) {
  return stripe.accounts.createBankAccount(stripeAccountId, {
    external_account: {
      object: "bank_account",
      account_number: payload.accountNumber,
      account_holder_name: payload.accountHolderName,
      account_holder_type: "individual",
      currency: "eur",
      country: "ES",
    },
    metadata: {
      bank_name: payload.bankName,
    },
  });
}

async function updateStripeAccounts(
  stripeAccountId: string,
  bankAccountId: string,
  payload: ArtistPayment
) {
  const account = await stripe.accounts.updateAccount(stripeAccountId, {
    individual: {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      address: {
        country: "ES",
        line1: payload.address.street,
        line2: payload.address.line2,
        city: payload.address.city,
        state: payload.address.state,
        postal_code: payload.address.postalCode,
      },
      id_number: payload.document.number,
      phone: `${payload.phone?.countryCode}${payload.phone?.number}`,
    },
    email: payload.email,
    metadata: {
      documentType: payload.document.type,
    },
  });

  const bankAccount = await stripe.accounts.updateBankAccount(
    stripeAccountId,
    bankAccountId,
    {
      account_holder_name: payload.paymentPreferences?.bank?.accountHolder,
    }
  );

  return {
    account,
    bankAccount,
  };
}

export { createStripeAccount, addBankAccount, updateStripeAccounts };
