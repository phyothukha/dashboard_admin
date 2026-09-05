import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import { bannerStatuses, contentStatuses, recordActions } from "./content-data";

const DIR = path.join(__dirname, "content");
fs.mkdirSync(DIR, { recursive: true });

interface VerticalConfig {
  key: string;
  genres: string[];
  sections: string[];
  titleWords: string[];
  durationKind: "movie" | "episodes" | "short";
}

const verticals: VerticalConfig[] = [
  {
    key: "movie",
    genres: ["Action", "Drama", "Comedy", "Horror", "Sci-Fi", "Romance"],
    sections: ["Trending Now", "New Releases", "Top Rated", "Editor's Pick"],
    titleWords: [
      "Shadow",
      "Crimson",
      "Silent",
      "Last",
      "Midnight",
      "Eternal",
      "Broken",
      "Hidden",
    ],
    durationKind: "movie",
  },
  {
    key: "series",
    genres: ["Drama", "Thriller", "Fantasy", "Comedy", "Crime", "Mystery"],
    sections: [
      "Continue Watching",
      "Trending Series",
      "New Episodes",
      "Staff Picks",
    ],
    titleWords: [
      "Chronicles of",
      "The Rise of",
      "Legends of",
      "Tales from",
      "Whispers of",
      "The Fall of",
    ],
    durationKind: "episodes",
  },
  {
    key: "programs",
    genres: [
      "Talk Show",
      "Reality",
      "Documentary",
      "Game Show",
      "News",
      "Cooking",
    ],
    sections: ["Live Now", "Weekly Highlights", "Popular Programs", "Featured"],
    titleWords: [
      "The Daily",
      "Around the",
      "Inside",
      "Behind the",
      "The Great",
      "World of",
    ],
    durationKind: "episodes",
  },
  {
    key: "short-video",
    genres: ["Comedy", "Dance", "Music", "Food", "Travel", "DIY"],
    sections: ["For You", "Trending Shorts", "Fresh Drops", "Creator Picks"],
    titleWords: [
      "Quick",
      "Viral",
      "Behind",
      "Everyday",
      "Weekend",
      "Late Night",
    ],
    durationKind: "short",
  },
];

function randomDuration(kind: VerticalConfig["durationKind"]) {
  if (kind === "movie") {
    return `${faker.number.int({ min: 1, max: 2 })}h ${faker.number.int({ min: 0, max: 59 })}m`;
  }
  if (kind === "episodes") {
    return `${faker.number.int({ min: 6, max: 24 })} episodes`;
  }
  return `${faker.number.int({ min: 15, max: 90 })}s`;
}

function thumbnail() {
  return faker.image.urlPicsumPhotos({ width: 400, height: 225 });
}

for (const vertical of verticals) {
  const items = Array.from({ length: 42 }, () => ({
    id: faker.string.uuid(),
    title:
      `${faker.helpers.arrayElement(vertical.titleWords)} ${faker.word.words({ count: { min: 1, max: 2 } })}`.replace(
        /(^\w|\s\w)/g,
        (m) => m.toUpperCase(),
      ),
    thumbnail: thumbnail(),
    genre: faker.helpers.arrayElement(vertical.genres),
    status: faker.helpers.arrayElement(contentStatuses).value,
    views: faker.number.int({ min: 120, max: 980_000 }),
    duration: randomDuration(vertical.durationKind),
    releaseDate: faker.date.past({ years: 2 }).toISOString(),
  }));

  const banners = Array.from({ length: 8 }, (_, i) => {
    const start = faker.date.recent({ days: 20 });
    const end = faker.date.soon({ days: 20, refDate: start });
    return {
      id: faker.string.uuid(),
      title: `${faker.helpers.arrayElement(vertical.titleWords)} Banner Campaign`,
      image: thumbnail(),
      linkTo: `/${vertical.key}/${faker.helpers.slugify(faker.word.words(2)).toLowerCase()}`,
      status: faker.helpers.arrayElement(bannerStatuses).value,
      position: i + 1,
      startDate: start.toISOString(),
      endDate: end.toISOString(),
    };
  });

  const display = Array.from({ length: 24 }, (_, i) => ({
    id: faker.string.uuid(),
    section: faker.helpers.arrayElement(vertical.sections),
    title:
      `${faker.helpers.arrayElement(vertical.titleWords)} ${faker.word.words({ count: { min: 1, max: 2 } })}`.replace(
        /(^\w|\s\w)/g,
        (m) => m.toUpperCase(),
      ),
    thumbnail: thumbnail(),
    position: (i % 8) + 1,
    visible: faker.datatype.boolean({ probability: 0.75 }),
    updatedAt: faker.date.recent({ days: 30 }).toISOString(),
  }));

  const records = Array.from({ length: 60 }, () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      id: faker.string.uuid(),
      title:
        `${faker.helpers.arrayElement(vertical.titleWords)} ${faker.word.words({ count: { min: 1, max: 2 } })}`.replace(
          /(^\w|\s\w)/g,
          (m) => m.toUpperCase(),
        ),
      action: faker.helpers.arrayElement(recordActions).value,
      actor: `${firstName} ${lastName}`,
      actorAvatar: faker.image.avatarGitHub(),
      createdAt: faker.date.recent({ days: 45 }).toISOString(),
    };
  });

  fs.writeFileSync(
    path.join(DIR, `${vertical.key}-items.json`),
    JSON.stringify(items, null, 2),
  );
  fs.writeFileSync(
    path.join(DIR, `${vertical.key}-banners.json`),
    JSON.stringify(banners, null, 2),
  );
  fs.writeFileSync(
    path.join(DIR, `${vertical.key}-display.json`),
    JSON.stringify(display, null, 2),
  );
  fs.writeFileSync(
    path.join(DIR, `${vertical.key}-records.json`),
    JSON.stringify(records, null, 2),
  );

  console.log(`✅ ${vertical.key} content generated.`);
}

const genres = Array.from(new Set(verticals.flatMap((v) => v.genres))).map(
  (name) => ({
    id: faker.string.uuid(),
    name,
    itemCount: faker.number.int({ min: 4, max: 180 }),
    createdAt: faker.date.past({ years: 2 }).toISOString(),
  }),
);

fs.writeFileSync(
  path.join(__dirname, "genres.json"),
  JSON.stringify(genres, null, 2),
);

console.log("✅ Genres generated.");
