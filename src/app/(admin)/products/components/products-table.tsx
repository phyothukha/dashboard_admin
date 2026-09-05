"use client";

import { DataTable } from "@/components/data-table";
import { Product } from "@/data/schema";
import {
  productCategories,
  productStatuses,
  mapOptions,
} from "@/data/features-data";
import { columns } from "./column";
import { ProductCard } from "./product-card";

export function ProductsTable({ data }: { data: Product[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="name"
      searchPlaceholder="Search products..."
      itemLabel="Products"
      addNewLabel="Add New Product"
      renderGridItem={(row) => <ProductCard row={row} />}
      filters={[
        {
          column: "status",
          title: "Status",
          options: mapOptions(productStatuses),
        },
        {
          column: "category",
          title: "Category",
          options: mapOptions(productCategories),
        },
      ]}
    />
  );
}
