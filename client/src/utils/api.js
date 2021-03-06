import { APIClient } from "@liskhq/lisk-api-client";
import { nodes } from "../config/config.json";

const client = new APIClient(nodes);

export const getTransactions = options => client.transactions.get(options);

// get latest accounts, preferred way is only retrieve accounts with a valid operator asset
export const getAccounts = options => client.accounts.get(options);
