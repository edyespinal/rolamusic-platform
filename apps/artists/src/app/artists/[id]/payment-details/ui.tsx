"use client";

import React from "react";
import { Artist, ArtistPayment } from "@rola/services/schemas";
import { Container, Title } from "@rola/ui/components";
import { useArtistPaymentDetailsData } from "./data";
import { AddBankAccount } from "./_components/AddBankAccount";
import { CreateAccount } from "./_components/CreateAccount";
import { EditPaymentDetails } from "./_components/EditPaymentDetails";

function ArtistPaymentDetailsUI({
  artist,
  payment,
}: {
  artist: Artist;
  payment: ArtistPayment | null;
}) {
  const {
    isLoading,
    step,
    createAccountForm,
    addBankAccountForm,
    paymentDetailsForm,
    handleCreateAccount,
    handleAddBankAccount,
    handleUpdatePaymentDetails,
  } = useArtistPaymentDetailsData(artist.id, payment);

  return (
    <Container className="pb-24">
      <Container className="pb-12">
        <Title order={2} align="left" underline>
          Datos bancarios y fiscales
        </Title>
      </Container>

      {step === "create-account" && (
        <CreateAccount
          loading={isLoading}
          form={createAccountForm}
          handleCreateAccount={handleCreateAccount}
        />
      )}

      {step === "add-bank" && (
        <Container>
          <AddBankAccount
            loading={isLoading}
            form={addBankAccountForm}
            handleAddBankAccount={handleAddBankAccount}
          />
        </Container>
      )}

      {step === "edit" && (
        <Container>
          <EditPaymentDetails
            loading={isLoading}
            form={paymentDetailsForm}
            handleUpdatePaymentDetails={handleUpdatePaymentDetails}
          />
        </Container>
      )}
    </Container>
  );
}

export { ArtistPaymentDetailsUI };
