import { createInsertSchema } from "drizzle-zod";
import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const enquiryStatusEnum = pgEnum("enquiry_status", [
  "pending",
  "reviewed",
  "resolved",
]);
export const enquiryTypeEnum = pgEnum("enquiry_type", [
  "general",
  "partnership",
  "product",
  "support",
  "collaboration",
  "investor",
  "other",
]);

export const enquiriesTable = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  type: enquiryTypeEnum("type").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  status: enquiryStatusEnum("status").notNull().default("pending"),
  internalNote: text("internal_note"),
  notificationStatus: text("notification_status")
    .notNull()
    .default("not-configured"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const insertEnquirySchema = createInsertSchema(enquiriesTable).omit({
  id: true,
  status: true,
  internalNote: true,
  notificationStatus: true,
  createdAt: true,
  updatedAt: true,
});

export type Enquiry = typeof enquiriesTable.$inferSelect;
export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;
