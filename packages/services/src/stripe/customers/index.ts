import { createCustomer } from "./createCustomer";
import { getCustomer } from "./getCustomers";
import { searchCustomers } from "./searchCustomers";

const customersServices = {
  createCustomer,
  getCustomer,
  searchCustomers,
};

export { customersServices };
