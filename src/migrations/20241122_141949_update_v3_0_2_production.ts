import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages_blocks_media_block" DROP COLUMN IF EXISTS "position";
  ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN IF EXISTS "position";
  DROP TYPE "public"."enum_pages_blocks_media_block_position";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_position";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_media_block_position" AS ENUM('default', 'fullscreen');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
  ALTER TABLE "pages_blocks_media_block" ADD COLUMN "position" "enum_pages_blocks_media_block_position" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "position" "enum__pages_v_blocks_media_block_position" DEFAULT 'default';`)
}
