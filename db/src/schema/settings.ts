import { createInsertSchema } from "drizzle-zod";
import { jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const siteSettingsTable = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull().default("PERUS TECHNOLOGIES"),
  domain: text("domain").notNull().default("perus.tech"),
  aiDomain: text("ai_domain").notNull().default("perus.ai"),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
  logoUrl: text("logo_url"),
  faviconUrl: text("favicon_url"),
  socialLinks: jsonb("social_links")
    .$type<Record<string, string>>()
    .notNull()
    .default({}),
  seoTitle: text("seo_title")
    .notNull()
    .default("PERUS TECHNOLOGIES — Technology. Intelligence. Innovation."),
  seoDescription: text("seo_description")
    .notNull()
    .default(
      "PERUS TECHNOLOGIES builds intelligent digital products, platforms and experiences.",
    ),
  footerText: text("footer_text")
    .notNull()
    .default("Technology. Intelligence. Innovation."),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const insertSiteSettingsSchema = createInsertSchema(
  siteSettingsTable,
).omit({ id: true, updatedAt: true });

export type SiteSettings = typeof siteSettingsTable.$inferSelect;
export type InsertSiteSettings = z.infer<typeof insertSiteSettingsSchema>;
