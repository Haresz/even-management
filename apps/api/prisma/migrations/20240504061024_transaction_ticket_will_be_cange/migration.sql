/*
  Warnings:

  - Added the required column `count` to the `TicketsTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ticketstransaction` ADD COLUMN `count` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `Events_dashboardId_idx` ON `Events`(`dashboardId`);
