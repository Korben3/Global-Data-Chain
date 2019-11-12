import { APIClient } from "@liskhq/lisk-api-client";
import { nodes } from "../config/config.json";

const client = new APIClient(nodes);

export const getTransactions = options => client.transactions.get(options);
