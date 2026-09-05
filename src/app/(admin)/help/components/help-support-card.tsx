import { Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HelpSupportCard() {
  return (
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
  );
}
