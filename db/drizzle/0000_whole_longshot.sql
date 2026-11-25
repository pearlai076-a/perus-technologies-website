CREATE TYPE "public"."download_platform" AS ENUM('desktop', 'android', 'ios', 'document', 'resource', 'other');--> statement-breakpoint
CREATE TYPE "public"."enquiry_status" AS ENUM('pending', 'reviewed', 'resolved');--> statement-breakpoint
CREATE TYPE "public"."enquiry_type" AS ENUM('general', 'partnership', 'product', 'support', 'collaboration', 'investor', 'other');--> statement-breakpoint
CREATE TYPE "public"."product_status" AS ENUM('in-development', 'coming-soon', 'available', 'discontinued');--> statement-breakpoint
CREATE TABLE "activity_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"actor_id" text,
	"action" text NOT NULL,
	"entity_type" text NOT NULL,
	"entity_id" integer,
	"summary" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "admin_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_user_id" text NOT NULL,
	"email" text NOT NULL,
	"role" text DEFAULT 'admin' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "site_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"meta_title" text DEFAULT '' NOT NULL,
	"meta_description" text DEFAULT '' NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"sections" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "downloads" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"product_id" integer,
	"platform" "download_platform" DEFAULT 'resource' NOT NULL,
	"version" text DEFAULT '1.0.0' NOT NULL,
	"release_date" text,
	"file_size_bytes" integer,
	"supported_operating_systems" text[] DEFAULT '{}' NOT NULL,
	"object_path" text,
	"external_url" text,
	"published" boolean DEFAULT false NOT NULL,
	"download_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "enquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"type" "enquiry_type" NOT NULL,
	"subject" text,
	"message" text NOT NULL,
	"status" "enquiry_status" DEFAULT 'pending' NOT NULL,
	"internal_note" text,
	"notification_status" text DEFAULT 'not-configured' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "announcements" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"summary" text DEFAULT '' NOT NULL,
	"body" text DEFAULT '' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "promotions" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"product_id" integer,
	"discount_percent" double precision,
	"coupon_code" text,
	"starts_at" timestamp with time zone NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"active" boolean DEFAULT false NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"published" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"category_id" integer,
	"summary" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"features" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"benefits" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"media" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"status" "product_status" DEFAULT 'coming-soon' NOT NULL,
	"price" double precision,
	"currency" text DEFAULT 'USD' NOT NULL,
	"website_url" text,
	"download_url" text,
	"cta_label" text DEFAULT 'Learn more' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "site_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_name" text DEFAULT 'PERUS TECHNOLOGIES' NOT NULL,
	"domain" text DEFAULT 'perus.tech' NOT NULL,
	"ai_domain" text DEFAULT 'perus.ai' NOT NULL,
	"contact_email" text,
	"contact_phone" text,
	"logo_url" text,
	"favicon_url" text,
	"social_links" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"seo_title" text DEFAULT 'PERUS TECHNOLOGIES — Technology. Intelligence. Innovation.' NOT NULL,
	"seo_description" text DEFAULT 'PERUS TECHNOLOGIES builds intelligent digital products, platforms and experiences.' NOT NULL,
	"footer_text" text DEFAULT 'Technology. Intelligence. Innovation.' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "downloads" ADD CONSTRAINT "downloads_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_product_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "admin_users_clerk_user_id_idx" ON "admin_users" USING btree ("clerk_user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "site_pages_slug_idx" ON "site_pages" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "downloads_slug_idx" ON "downloads" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "announcements_slug_idx" ON "announcements" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "promotions_slug_idx" ON "promotions" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "product_categories_slug_idx" ON "product_categories" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "products_slug_idx" ON "products" USING btree ("slug");