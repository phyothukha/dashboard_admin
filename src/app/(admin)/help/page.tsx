import type { Metadata } from "next";
import {
  CreditCard,
  LifeBuoy,
  Mail,
  MessageCircle,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Search our knowledge base or browse a help category.",
};

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

const faqs = [
  {
    question: "How do I invite a new team member?",
    answer:
      'Go to Users, click "Add New User", and enter their email address. They\'ll receive an invitation link to join your workspace.',
  },
  {
    question: "Can I change my subscription plan?",
    answer:
      "Yes, open Settings and go to the Billing section to upgrade, downgrade, or cancel your plan at any time.",
  },
  {
    question: "How do I reset a forgotten password?",
    answer:
      'Use the "Forgot password" link on the sign-in page. A reset link will be sent to your registered email address.',
  },
  {
    question: "Is my data backed up automatically?",
    answer:
      "All workspace data is backed up daily and retained for 30 days, so you can restore recent changes if needed.",
  },
];

const HelpPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-8">
      <div className="rounded-xl border bg-gradient-to-br from-primary to-blue-700 px-6 py-10 text-center text-primary-foreground">
        <h2 className="text-2xl font-bold tracking-tight">
          How can we help you?
        </h2>
        <p className="mt-1 text-primary-foreground/80">
          Search our knowledge base or browse a category below.
        </p>
        <div className="relative mx-auto mt-5 max-w-md">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for articles..."
            className="h-11 border-0 bg-white pl-9 text-foreground shadow-sm"
          />
        </div>
      </div>

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

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Frequently asked questions</CardTitle>
            <CardDescription>
              Quick answers to the most common questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="divide-y">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                <p className="font-medium">{faq.question}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Still need help?</CardTitle>
            <CardDescription>
              Our support team usually replies within a few hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-2" variant="outline">
              <MessageCircle className="size-4" />
              Start a live chat
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Mail className="size-4" />
              Email support
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default HelpPage;
