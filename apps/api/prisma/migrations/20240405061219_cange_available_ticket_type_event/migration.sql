/*
  Warnings:

  - You are about to alter the column `AvailableTicket` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `AvailableTicket` INTEGER NOT NULL;
