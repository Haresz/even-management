/*
  Warnings:

  - You are about to drop the column `AvailableTicket` on the `events` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Events_id_key` ON `events`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `AvailableTicket`,
    ADD COLUMN `availableTicket` INTEGER NOT NULL DEFAULT 0;
