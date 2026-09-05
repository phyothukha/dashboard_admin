import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import {
  transactionMethods,
  transactionStatuses,
  transactionTypes,
} from "./transactions-data";

const transactions = Array.from({ length: 96 }, () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const type = faker.helpers.arrayElement(transactionTypes).value;
  const isOutflow = type === "withdraw";

  return {
    id: faker.string.uuid(),
    reference: `TXN-${faker.number.int({ min: 100000, max: 999999 })}`,
    customer: `${firstName} ${lastName}`,
    customerAvatar: faker.image.avatarGitHub(),
    type,
    method: faker.helpers.arrayElement(transactionMethods).value,
    status: faker.helpers.arrayElement(transactionStatuses).value,
    amount:
      (isOutflow ? -1 : 1) *
      faker.number.float({ min: 8, max: 4200, fractionDigits: 2 }),
    createdAt: faker.date.recent({ days: 60 }).toISOString(),
  };
});

fs.writeFileSync(
  path.join(__dirname, "transactions.json"),
  JSON.stringify(transactions, null, 2),
);

console.log("✅ Transactions generated.");
