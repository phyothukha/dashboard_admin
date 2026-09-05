import { Bitcoin, CreditCard, Landmark, Wallet } from "lucide-react";

import { statusTone } from "@/lib/status-colors";

export const transactionStatuses = [
  { value: "completed", label: "Completed", className: statusTone.success },
  { value: "pending", label: "Pending", className: statusTone.warning },
  { value: "failed", label: "Failed", className: statusTone.danger },
];

export const transactionTypes = [
  { value: "deposit", label: "Deposit" },
  { value: "withdraw", label: "Withdraw" },
  { value: "transfer", label: "Transfer" },
  { value: "refund", label: "Refund" },
];

export const transactionMethods = [
  { value: "card", label: "Card", icon: CreditCard },
  { value: "bank", label: "Bank Transfer", icon: Landmark },
  { value: "wallet", label: "Wallet", icon: Wallet },
  { value: "crypto", label: "Crypto", icon: Bitcoin },
];
