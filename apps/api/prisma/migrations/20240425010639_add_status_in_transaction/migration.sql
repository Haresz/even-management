-- AlterTable
ALTER TABLE `transactions` ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending';
