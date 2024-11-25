import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "graphics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_logo_id" integer,
  	"favicon_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "site_info" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar,
  	"site_description" varchar,
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
  
  ALTER TABLE "settings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "settings" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "graphics_id" integer;
  DO $$ BEGIN
   ALTER TABLE "graphics" ADD CONSTRAINT "graphics_site_logo_id_graphics_id_fk" FOREIGN KEY ("site_logo_id") REFERENCES "public"."graphics"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "graphics" ADD CONSTRAINT "graphics_favicon_id_graphics_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."graphics"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "graphics_site_logo_idx" ON "graphics" USING btree ("site_logo_id");
  CREATE INDEX IF NOT EXISTS "graphics_favicon_idx" ON "graphics" USING btree ("favicon_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_graphics_fk" FOREIGN KEY ("graphics_id") REFERENCES "public"."graphics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_graphics_id_idx" ON "payload_locked_documents_rels" USING btree ("graphics_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar,
  	"site_description" varchar,
  	"site_logo_id" integer,
  	"favicon_id" integer,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_address" varchar,
  	"social_facebook" varchar,
  	"social_twitter" varchar,
  	"social_instagram" varchar,
  	"social_linkedin" varchar,
  	"social_youtube" varchar,
  	"social_whatsapp" varchar,
  	"social_telegram" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "graphics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_information" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "graphics" CASCADE;
  DROP TABLE "site_info" CASCADE;
  DROP TABLE "contact_information" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_graphics_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_graphics_id_idx";
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_site_logo_id_media_id_fk" FOREIGN KEY ("site_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings" ADD CONSTRAINT "settings_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "settings_site_logo_idx" ON "settings" USING btree ("site_logo_id");
  CREATE INDEX IF NOT EXISTS "settings_favicon_idx" ON "settings" USING btree ("favicon_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "graphics_id";`)
}
