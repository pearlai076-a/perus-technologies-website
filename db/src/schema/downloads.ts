import { createInsertSchema } from "drizzle-zod";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { productsTable } from "./products";
import { z } from "zod/v4";

export const downloadPlatformEnum = pgEnum("download_platform", [
  "desktop",
  "android",
  "ios",
  "document",
  "resource",
  "other",
]);

export const downloadsTable = pgTable(
  "downloads",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull().default(""),
    productId: integer("product_id").references(() => productsTable.id, {
      onDelete: "set null",
    }),
    platform: downloadPlatformEnum("platform").notNull().default("resource"),
    version: text("version").notNull().default("1.0.0"),
    releaseDate: text("release_date"),
    fileSizeBytes: integer("file_size_bytes"),
    supportedOperatingSystems: text("supported_operating_systems")
      .array()
      .notNull()
      .default([]),
    objectPath: text("object_path"),
    externalUrl: text("external_url"),
    published: boolean("published").notNull().default(false),
    downloadCount: integer("download_count").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex("downloads_slug_idx").on(table.slug)],
);

export const insertDownloadSchema = createInsertSchema(downloadsTable).omit({
  id: true,
  downloadCount: true,
  createdAt: true,
  updatedAt: true,
});

export type Download = typeof downloadsTable.$inferSelect;
export type InsertDownload = z.infer<typeof insertDownloadSchema>;
