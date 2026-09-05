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

export const goalSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  ownerName: z.string(),
  ownerAvatar: z.string(),
  progress: z.number(),
  targetDate: z.string(),
  status: z.string(),
});

export type Goal = z.infer<typeof goalSchema>;

export const appSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  category: z.string(),
  developer: z.string(),
  status: z.string(),
  rating: z.number(),
  installs: z.number(),
});

export type App = z.infer<typeof appSchema>;

export const chatSchema = z.object({
  id: z.string(),
  contactName: z.string(),
  contactAvatar: z.string(),
  lastMessage: z.string(),
  unreadCount: z.number(),
  channel: z.string(),
  status: z.string(),
  lastActiveAt: z.string(),
});

export type Chat = z.infer<typeof chatSchema>;

export const calendarEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  date: z.string(),
  attendees: z.number(),
  location: z.string(),
  status: z.string(),
});

export type CalendarEvent = z.infer<typeof calendarEventSchema>;

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  thumbnail: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.number(),
  status: z.string(),
  sales: z.number(),
});

export type Product = z.infer<typeof productSchema>;

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  ownerName: z.string(),
  ownerAvatar: z.string(),
  status: z.string(),
  progress: z.number(),
  dueDate: z.string(),
  teamSize: z.number(),
});

export type Project = z.infer<typeof projectSchema>;
