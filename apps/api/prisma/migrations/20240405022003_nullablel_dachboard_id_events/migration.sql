-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `Events_dashboardId_fkey`;

-- AlterTable
ALTER TABLE `events` MODIFY `dashboardId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `Events_dashboardId_fkey` FOREIGN KEY (`dashboardId`) REFERENCES `Dashboards`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
