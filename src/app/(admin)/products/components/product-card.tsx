import Image from "next/image";
import { Row } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/schema";
import { productCategories, productStatuses } from "@/data/features-data";
import { cn } from "@/lib/utils";

export function ProductCard({ row }: { row: Row<Product> }) {
  const product = row.original;
  const category = productCategories.get(product.category);
  const status = productStatuses.get(product.status);

  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-xl border bg-card">
      <div className="relative aspect-video w-full bg-muted">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover"
          unoptimized
        />
        {status && (
          <Badge
            className={cn(
              "absolute right-2 top-2 rounded-md border-0 font-medium",
              status.className,
            )}
          >
            {status.label}
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-2 px-4 pb-4">
        <span className="truncate font-medium">{product.name}</span>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <Badge variant="outline">{category?.label}</Badge>
          <span>{product.stock} in stock</span>
        </div>
        <div className="flex items-center justify-between border-t pt-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground">
            {product.sales.toLocaleString()} sold
          </span>
        </div>
      </div>
    </div>
  );
}
