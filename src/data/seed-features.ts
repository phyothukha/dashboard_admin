import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import {
  appCategories,
  appStatuses,
  calendarEventStatuses,
  calendarEventTypes,
  chatChannels,
  chatStatuses,
  goalCategories,
  goalStatuses,
  productCategories,
  productStatuses,
  projectStatuses,
} from "./features-data";

function person() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    name: `${firstName} ${lastName}`,
    avatar: faker.image.avatarGitHub(),
  };
}

// Goals
const goals = Array.from({ length: 32 }, () => {
  const owner = person();
  return {
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    category: faker.helpers.arrayElement([...goalCategories.keys()]),
    ownerName: owner.name,
    ownerAvatar: owner.avatar,
    progress: faker.number.int({ min: 0, max: 100 }),
    targetDate: faker.date.soon({ days: 90 }).toISOString(),
    status: faker.helpers.arrayElement([...goalStatuses.keys()]),
  };
});

// Apps
const apps = Array.from({ length: 28 }, () => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  icon: faker.image.urlPicsumPhotos({ width: 80, height: 80 }),
  category: faker.helpers.arrayElement([...appCategories.keys()]),
  developer: faker.company.name(),
  status: faker.helpers.arrayElement([...appStatuses.keys()]),
  rating: faker.number.float({ min: 3, max: 5, fractionDigits: 1 }),
  installs: faker.number.int({ min: 120, max: 980_000 }),
}));

// Chats
const chats = Array.from({ length: 36 }, () => {
  const contact = person();
  return {
    id: faker.string.uuid(),
    contactName: contact.name,
    contactAvatar: contact.avatar,
    lastMessage: faker.lorem.sentence({ min: 4, max: 10 }),
    unreadCount: faker.number.int({ min: 0, max: 12 }),
    channel: faker.helpers.arrayElement([...chatChannels.keys()]),
    status: faker.helpers.arrayElement([...chatStatuses.keys()]),
    lastActiveAt: faker.date.recent({ days: 14 }).toISOString(),
  };
});

// Calendar events
const calendarEvents = Array.from({ length: 40 }, () => ({
  id: faker.string.uuid(),
  title: faker.company.catchPhrase(),
  type: faker.helpers.arrayElement([...calendarEventTypes.keys()]),
  date: faker.date.soon({ days: 45 }).toISOString(),
  attendees: faker.number.int({ min: 1, max: 24 }),
  location: faker.helpers.arrayElement([
    "Conference Room A",
    "Conference Room B",
    "Zoom",
    "Google Meet",
    "HQ Auditorium",
  ]),
  status: faker.helpers.arrayElement([...calendarEventStatuses.keys()]),
}));

// Products
const products = Array.from({ length: 44 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  thumbnail: faker.image.urlPicsumPhotos({ width: 400, height: 225 }),
  category: faker.helpers.arrayElement([...productCategories.keys()]),
  price: faker.number.float({ min: 9, max: 899, fractionDigits: 2 }),
  stock: faker.number.int({ min: 0, max: 500 }),
  status: faker.helpers.arrayElement([...productStatuses.keys()]),
  sales: faker.number.int({ min: 0, max: 12_000 }),
}));

// Projects
const projects = Array.from({ length: 26 }, () => {
  const owner = person();
  return {
    id: faker.string.uuid(),
    name: `${faker.hacker.noun()} ${faker.hacker.ingverb()}`.replace(
      /(^\w|\s\w)/g,
      (m) => m.toUpperCase(),
    ),
    ownerName: owner.name,
    ownerAvatar: owner.avatar,
    status: faker.helpers.arrayElement([...projectStatuses.keys()]),
    progress: faker.number.int({ min: 0, max: 100 }),
    dueDate: faker.date.soon({ days: 120 }).toISOString(),
    teamSize: faker.number.int({ min: 2, max: 18 }),
  };
});

const DIR = path.join(__dirname);
fs.writeFileSync(path.join(DIR, "goals.json"), JSON.stringify(goals, null, 2));
fs.writeFileSync(path.join(DIR, "apps.json"), JSON.stringify(apps, null, 2));
fs.writeFileSync(path.join(DIR, "chats.json"), JSON.stringify(chats, null, 2));
fs.writeFileSync(
  path.join(DIR, "calendar-events.json"),
  JSON.stringify(calendarEvents, null, 2),
);
fs.writeFileSync(
  path.join(DIR, "products.json"),
  JSON.stringify(products, null, 2),
);
fs.writeFileSync(
  path.join(DIR, "projects.json"),
  JSON.stringify(projects, null, 2),
);

console.log(
  "✅ Goals, Apps, Chats, Calendar events, Products, Projects generated.",
);
