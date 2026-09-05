import { MoreHorizontal, Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { statusTextTone } from "@/lib/status-colors";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "#83009",
    name: "Hybrid Active Noise Cancelling Headphones",
    sold: "2,310 sold",
    revenue: 124839,
    revenueUp: true,
    rating: 5.0,
  },
  {
    id: "#83001",
    name: "Casio G-Shock Shock Resistant Watch",
    sold: "1,230 sold",
    revenue: 92662,
    revenueUp: false,
    rating: 4.8,
  },
  {
    id: "#83004",
    name: "SAMSUNG Galaxy S25 Ultra",
    sold: "812 sold",
    revenue: 74048,
    revenueUp: false,
    rating: 4.7,
  },
  {
    id: "#83002",
    name: "Xbox Wireless Gaming Controller",
    sold: "645 sold",
    revenue: 62820,
    revenueUp: true,
    rating: 4.5,
  },
  {
    id: "#83006",
    name: "Timex Men's Easy Reader Watch",
    sold: "572 sold",
    revenue: 48724,
    revenueUp: true,
    rating: 4.5,
  },
];

export function BestSellingProducts() {
  return (
    <Card className="py-5">
      <CardHeader className="px-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Best Selling Products
          </CardTitle>
          <Button variant="ghost" size="icon" className="size-7">
            <MoreHorizontal className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-5">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-xs text-muted-foreground">
                ID
              </TableHead>
              <TableHead className="text-xs text-muted-foreground">
                NAME
              </TableHead>
              <TableHead className="text-xs text-muted-foreground">
                SOLD
              </TableHead>
              <TableHead className="text-xs text-muted-foreground">
                REVENUE
              </TableHead>
              <TableHead className="text-right text-xs text-muted-foreground">
                RATING
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="text-sm text-muted-foreground">
                  {product.id}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-sm">
                      🛍️
                    </span>
                    <span className="max-w-[220px] truncate text-sm font-medium">
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {product.sold}
                </TableCell>
                <TableCell
                  className={cn(
                    "text-sm font-medium",
                    product.revenueUp
                      ? statusTextTone.get("success")!
                      : statusTextTone.get("danger")!,
                  )}
                >
                  ${product.revenue.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-sm">
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    {product.rating.toFixed(1)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
