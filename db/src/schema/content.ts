import { createInsertSchema } from "drizzle-zod";
import {
  boolean,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const contentSectionSchema = z.object({
  key: z.string(),
  heading: z.string(),
  body: z.string(),
  imageUrl: z.string().nullable(),
  enabled: z.boolean(),
  sortOrder: z.number().int(),
});

export type ContentSection = z.infer<typeof contentSectionSchema>;

export const pagesTable = pgTable(
  "site_pages",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    metaTitle: text("meta_title").notNull().default(""),
    metaDescription: text("meta_description").notNull().default(""),
    published: boolean("published").notNull().default(false),
    sections: jsonb("sections")
      .$type<ContentSection[]>()
      .notNull()
      .default([]),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex("site_pages_slug_idx").on(table.slug)],
);

export const insertPageSchema = createInsertSchema(pagesTable).omit({
  id: true,
  updatedAt: true,
});

export type Page = typeof pagesTable.$inferSelect;
export type InsertPage = z.infer<typeof insertPageSchema>;
