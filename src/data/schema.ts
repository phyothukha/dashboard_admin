import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  avatar: z.string(),
  role: z.string(),
  status: z.string(),
  source: z.string(),
  lastActive: z.string(),
  createdAt: z.string(),
});

export type UserRow = z.infer<typeof userSchema>;

export const contentItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  genre: z.string(),
  status: z.string(),
  views: z.number(),
  duration: z.string(),
  releaseDate: z.string(),
});

export type ContentItem = z.infer<typeof contentItemSchema>;

export const bannerItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  linkTo: z.string(),
  status: z.string(),
  position: z.number(),
  startDate: z.string(),
  endDate: z.string(),
});

export type BannerItem = z.infer<typeof bannerItemSchema>;

export const displayItemSchema = z.object({
  id: z.string(),
  section: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  position: z.number(),
  visible: z.boolean(),
  updatedAt: z.string(),
});

export type DisplayItem = z.infer<typeof displayItemSchema>;

export const recordItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  action: z.string(),
  actor: z.string(),
  actorAvatar: z.string(),
  createdAt: z.string(),
});

export type RecordItem = z.infer<typeof recordItemSchema>;

export const transactionSchema = z.object({
  id: z.string(),
  reference: z.string(),
  customer: z.string(),
  customerAvatar: z.string(),
  type: z.string(),
  method: z.string(),
  status: z.string(),
  amount: z.number(),
  createdAt: z.string(),
});

export type Transaction = z.infer<typeof transactionSchema>;
