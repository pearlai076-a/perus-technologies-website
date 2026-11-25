import { createInsertSchema } from "drizzle-zod";
import {
  boolean,
  doublePrecision,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const productStatusEnum = pgEnum("product_status", [
  "in-development",
  "coming-soon",
  "available",
  "discontinued",
]);

export const productCategoriesTable = pgTable(
  "product_categories",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    description: text("description").notNull().default(""),
    published: boolean("published").notNull().default(true),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex("product_categories_slug_idx").on(table.slug)],
);

export const productMediaSchema = z.object({
  url: z.string().min(1),
  alt: z.string(),
  kind: z.enum(["logo", "image", "screenshot", "video"]),
});

export type ProductMedia = z.infer<typeof productMediaSchema>;

export const productsTable = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    categoryId: integer("category_id").references(
      () => productCategoriesTable.id,
      { onDelete: "set null" },
    ),
    summary: text("summary").notNull().default(""),
    description: text("description").notNull().default(""),
    features: jsonb("features").$type<string[]>().notNull().default([]),
    benefits: jsonb("benefits").$type<string[]>().notNull().default([]),
    media: jsonb("media").$type<ProductMedia[]>().notNull().default([]),
    status: productStatusEnum("status").notNull().default("coming-soon"),
    price: doublePrecision("price"),
    currency: text("currency").notNull().default("USD"),
    websiteUrl: text("website_url"),
    downloadUrl: text("download_url"),
    ctaLabel: text("cta_label").notNull().default("Learn more"),
    featured: boolean("featured").notNull().default(false),
    published: boolean("published").notNull().default(false),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex("products_slug_idx").on(table.slug)],
);

export const insertProductCategorySchema = createInsertSchema(
  productCategoriesTable,
).omit({ id: true, createdAt: true, updatedAt: true });
export const insertProductSchema = createInsertSchema(productsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type ProductCategory = typeof productCategoriesTable.$inferSelect;
export type InsertProductCategory = z.infer<typeof insertProductCategorySchema>;
export type Product = typeof productsTable.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
