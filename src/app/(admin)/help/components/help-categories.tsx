import {
  CreditCard,
  LifeBuoy,
  Puzzle,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Set up your workspace and invite your team.",
    articles: 12,
  },
  {
    icon: CreditCard,
    title: "Billing & Plans",
    description: "Manage subscriptions, invoices, and payment methods.",
    articles: 8,
  },
  {
    icon: Users,
    title: "Users & Teams",
    description: "Roles, permissions, and member management.",
    articles: 15,
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Two-factor auth, sessions, and access logs.",
    articles: 6,
  },
  {
    icon: Puzzle,
    title: "Integrations",
    description: "Connect third-party apps and API access.",
    articles: 10,
  },
  {
    icon: LifeBuoy,
    title: "Troubleshooting",
    description: "Common issues and how to resolve them.",
    articles: 9,
  },
];

export function HelpCategories() {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold tracking-tight">
        Browse by category
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card
            key={category.title}
            className="cursor-pointer transition-colors hover:bg-muted/50"
          >
            <CardHeader>
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <category.icon className="size-5" />
              </div>
              <CardTitle className="mt-2 flex items-center justify-between text-base">
                {category.title}
                <Badge variant="secondary" className="font-normal">
                  {category.articles} articles
                </Badge>
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
