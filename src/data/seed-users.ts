import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import { userRoles, userSources, userStatuses } from "./users-data";

const users = Array.from({ length: 87 }, () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    avatar: faker.image.avatarGitHub(),
    role: faker.helpers.arrayElement([...userRoles.keys()]),
    status: faker.helpers.arrayElement([...userStatuses.keys()]),
    source: faker.helpers.arrayElement([...userSources.keys()]),
    lastActive: faker.date.recent({ days: 30 }).toISOString(),
    createdAt: faker.date.past({ years: 1 }).toISOString(),
  };
});

fs.writeFileSync(
  path.join(__dirname, "users.json"),
  JSON.stringify(users, null, 2),
);

console.log("✅ Users data generated.");
