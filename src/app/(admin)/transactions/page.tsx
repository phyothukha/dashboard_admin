import React from "react";
import { z } from "zod";
import { transactionSchema } from "@/data/schema";
import transactions from "@/data/transactions.json";
import { TransactionsTable } from "./components/transactions-table";

async function getTransactions() {
  return z.array(transactionSchema).parse(transactions);
}

const TransactionsPage = async () => {
  const data = await getTransactions();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Transactions</h2>
        <p className="text-muted-foreground">
          Track payments, withdrawals, and transfers across your platform.
        </p>
      </div>

      <TransactionsTable data={data} />
    </main>
  );
};

export default TransactionsPage;
