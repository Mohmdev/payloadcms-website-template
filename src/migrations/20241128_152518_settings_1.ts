import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP INDEX IF EXISTS "assets_sizes_thumbnail_sizes_thumbnail_filename_idx";
  DROP INDEX IF EXISTS "assets_sizes_square_sizes_square_filename_idx";
  DROP INDEX IF EXISTS "assets_sizes_small_sizes_small_filename_idx";
  DROP INDEX IF EXISTS "assets_sizes_medium_sizes_medium_filename_idx";
  DROP INDEX IF EXISTS "assets_sizes_large_sizes_large_filename_idx";
  DROP INDEX IF EXISTS "assets_sizes_xlarge_sizes_xlarge_filename_idx";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_thumbnail_url";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_thumbnail_width";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_thumbnail_height";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_thumbnail_mime_type";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_thumbnail_filesize";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_thumbnail_filename";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_square_url";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_square_width";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_square_height";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_square_mime_type";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_square_filesize";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_square_filename";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_small_url";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_small_width";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_small_height";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_small_mime_type";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_small_filesize";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_small_filename";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_medium_url";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_medium_width";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_medium_height";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_medium_mime_type";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_medium_filesize";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_medium_filename";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_large_url";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_large_width";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_large_height";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_large_mime_type";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_large_filesize";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_large_filename";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_xlarge_url";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_xlarge_width";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_xlarge_height";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_xlarge_mime_type";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_xlarge_filesize";
  ALTER TABLE "assets" DROP COLUMN IF EXISTS "sizes_xlarge_filename";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "assets" ADD COLUMN "sizes_thumbnail_url" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_thumbnail_width" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_thumbnail_height" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_thumbnail_mime_type" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_thumbnail_filesize" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_thumbnail_filename" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_square_url" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_square_width" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_square_height" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_square_mime_type" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_square_filesize" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_square_filename" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_small_url" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_small_width" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_small_height" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_small_mime_type" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_small_filesize" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_small_filename" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_medium_url" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_medium_width" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_medium_height" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_medium_mime_type" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_medium_filesize" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_medium_filename" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_large_url" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_large_width" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_large_height" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_large_mime_type" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_large_filesize" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_large_filename" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_xlarge_url" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_xlarge_width" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_xlarge_height" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_xlarge_mime_type" varchar;
  ALTER TABLE "assets" ADD COLUMN "sizes_xlarge_filesize" numeric;
  ALTER TABLE "assets" ADD COLUMN "sizes_xlarge_filename" varchar;
  CREATE INDEX IF NOT EXISTS "assets_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "assets" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_square_sizes_square_filename_idx" ON "assets" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_small_sizes_small_filename_idx" ON "assets" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_medium_sizes_medium_filename_idx" ON "assets" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_large_sizes_large_filename_idx" ON "assets" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "assets_sizes_xlarge_sizes_xlarge_filename_idx" ON "assets" USING btree ("sizes_xlarge_filename");`)
}
