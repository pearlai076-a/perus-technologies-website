import { createInsertSchema } from "drizzle-zod";
import {
  boolean,
  doublePrecision,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { productsTable } from "./products";
import { z } from "zod/v4";

export const promotionsTable = pgTable(
  "promotions",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull().default(""),
    productId: integer("product_id").references(() => productsTable.id, {
      onDelete: "set null",
    }),
    discountPercent: doublePrecision("discount_percent"),
    couponCode: text("coupon_code"),
    startsAt: timestamp("starts_at", { withTimezone: true }).notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    featured: boolean("featured").notNull().default(false),
    active: boolean("active").notNull().default(false),
    published: boolean("published").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex("promotions_slug_idx").on(table.slug)],
);

export const announcementsTable = pgTable(
  "announcements",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull().default(""),
    body: text("body").notNull().default(""),
    featured: boolean("featured").notNull().default(false),
    published: boolean("published").notNull().default(false),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex("announcements_slug_idx").on(table.slug)],
);

export const insertPromotionSchema = createInsertSchema(promotionsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const insertAnnouncementSchema = createInsertSchema(
  announcementsTable,
).omit({ id: true, createdAt: true, updatedAt: true });

export type Promotion = typeof promotionsTable.$inferSelect;
export type InsertPromotion = z.infer<typeof insertPromotionSchema>;
export type Announcement = typeof announcementsTable.$inferSelect;
export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;
