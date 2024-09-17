import { Account } from "./Account";

export interface Transaction {
    id: number; // Corresponds to the Integer id in Java
    account: Account; // Assuming you have an Account interface matching the Account entity
    createdAt: Date; // Corresponds to the Date creationDate in Java
    description: string; // Corresponds to the String description in Java
    debit?: number; // Corresponds to the Double debit in Java, marked optional if nullable
    credit?: number; // Corresponds to the Double credit in Java, marked optional if nullable
    balanceAfter: number; // Corresponds to the Double balanceAfter in Java
  }