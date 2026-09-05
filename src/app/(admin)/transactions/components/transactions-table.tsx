"use client";

import { DataTable } from "@/components/data-table";
import { Transaction } from "@/data/schema";
import {
  transactionMethods,
  transactionStatuses,
  transactionTypes,
} from "@/data/transactions-data";
import { columns } from "./column";

export function TransactionsTable({ data }: { data: Transaction[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="customer"
      searchPlaceholder="Search transactions..."
      itemLabel="Transactions"
      addNewLabel="Add New Transaction"
      filters={[
        { column: "status", title: "Status", options: transactionStatuses },
        { column: "type", title: "Type", options: transactionTypes },
        { column: "method", title: "Method", options: transactionMethods },
      ]}
    />
  );
}
