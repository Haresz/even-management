/*
  Warnings:

  - You are about to drop the column `ticketId` on the `transactions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Transactions_ticketId_key` ON `transactions`;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `ticketId`;
