import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "assets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" varchar,
  	"prefix" varchar DEFAULT 'assets',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "site_info" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar,
  	"site_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "graphics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_logo_id" integer,
  	"favicon_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "contact_information" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_name" varchar,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_address" varchar,
  	"social_media_facebook" varchar,
  	"social_media_twitter" varchar,
  	"social_media_instagram" varchar,
  	"social_media_linkedin" varchar,
  	"social_media_youtube" varchar,
  	"social_media_whatsapp" varchar,
  	"social_media_telegram" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "assets_id" integer;
  DO $$ BEGIN
   ALTER TABLE "graphics" ADD CONSTRAINT "graphics_site_logo_id_assets_id_fk" FOREIGN KEY ("site_logo_id") REFERENCES "public"."assets"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "graphics" ADD CONSTRAINT "graphics_favicon_id_assets_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."assets"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "assets_updated_at_idx" ON "assets" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "assets_created_at_idx" ON "assets" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "assets_filename_idx" ON "assets" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "assets" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_square_sizes_square_filename_idx" ON "assets" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_small_sizes_small_filename_idx" ON "assets" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_medium_sizes_medium_filename_idx" ON "assets" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_large_sizes_large_filename_idx" ON "assets" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_xlarge_sizes_xlarge_filename_idx" ON "assets" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "graphics_site_logo_idx" ON "graphics" USING btree ("site_logo_id");
  CREATE INDEX IF NOT EXISTS "graphics_favicon_idx" ON "graphics" USING btree ("favicon_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_assets_fk" FOREIGN KEY ("assets_id") REFERENCES "public"."assets"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_assets_id_idx" ON "payload_locked_documents_rels" USING btree ("assets_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "assets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "graphics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_information" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "assets" CASCADE;
  DROP TABLE "site_info" CASCADE;
  DROP TABLE "graphics" CASCADE;
  DROP TABLE "contact_information" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_assets_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_assets_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "assets_id";`)
}
