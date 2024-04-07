/*
  Warnings:

  - Added the required column `AvailableTicket` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `AvailableTicket` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `tickets` ADD COLUMN `AvailableTicket` INTEGER NOT NULL;
