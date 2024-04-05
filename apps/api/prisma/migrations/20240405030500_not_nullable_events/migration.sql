/*
  Warnings:

  - Made the column `dashboardId` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `Events_dashboardId_fkey`;

-- AlterTable
ALTER TABLE `events` MODIFY `dashboardId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `Events_dashboardId_fkey` FOREIGN KEY (`dashboardId`) REFERENCES `Dashboards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
