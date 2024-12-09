import { getAccounts } from "./getAccounts";
import { getAccount } from "./getAccount";
import { getBalance } from "./getBalance";
import { createAccount } from "./createAccount";
import { updateAccount } from "./updateAccount";
import { createBankAccount } from "./createBankAccount";
import { updateBankAccount } from "./updateBankAccount";

const accountsServices = {
  getAccounts,
  getAccount,
  getBalance,
  createAccount,
  updateAccount,
  createBankAccount,
  updateBankAccount,
};

export { accountsServices };
