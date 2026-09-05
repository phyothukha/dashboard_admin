import React from "react";
import { z } from "zod";
import { productSchema } from "@/data/schema";
import products from "@/data/products.json";
import { ProductsTable } from "./components/products-table";

async function getProducts() {
  return z.array(productSchema).parse(products);
}

const ProductsPage = async () => {
  const data = await getProducts();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
        <p className="text-muted-foreground">
          Manage your product catalog and inventory.
        </p>
      </div>
      <ProductsTable data={data} />
    </main>
  );
};

export default ProductsPage;
