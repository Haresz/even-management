-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_ticketId_fkey`;

-- AlterTable
ALTER TABLE `events` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `transactions` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `TicketsTransaction` (
    `ticketId` INTEGER NOT NULL,
    `transactionId` INTEGER NOT NULL,

    PRIMARY KEY (`ticketId`, `transactionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TicketsTransaction` ADD CONSTRAINT `TicketsTransaction_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Tickets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TicketsTransaction` ADD CONSTRAINT `TicketsTransaction_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
