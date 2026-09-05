import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export function HelpFaq() {
  return (
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
            <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
