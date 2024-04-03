/*
  Warnings:

  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `samples`;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'customers',
    `referrallCode` VARCHAR(191) NOT NULL,
    `points` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Users_id_key`(`id`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Discounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `discountCategory` VARCHAR(191) NOT NULL DEFAULT 'point',
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expriredAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Discounts_id_key`(`id`),
    UNIQUE INDEX `Discounts_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `ticketId` INTEGER NOT NULL,
    `transactionDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `total` INTEGER NOT NULL,

    UNIQUE INDEX `Transactions_id_key`(`id`),
    UNIQUE INDEX `Transactions_ticketId_key`(`ticketId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `ticketType` VARCHAR(191) NOT NULL DEFAULT 'reguler',
    `price` INTEGER NOT NULL,
    `sold` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Tickets_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dashboards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `eventCount` INTEGER NOT NULL,
    `attendeeCount` INTEGER NOT NULL,
    `transactionCount` INTEGER NOT NULL,

    UNIQUE INDEX `Dashboards_id_key`(`id`),
    UNIQUE INDEX `Dashboards_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dashboardId` INTEGER NOT NULL,
    `eventName` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `AvailableTicket` VARCHAR(191) NOT NULL,
    `soldQuantity` INTEGER NOT NULL,
    `eventType` VARCHAR(191) NOT NULL DEFAULT 'paid',
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `Events_id_key`(`id`),
    UNIQUE INDEX `Events_dashboardId_key`(`dashboardId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `discount` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endDate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Promotions_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 5,
    `feedBack` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Reviews_eventId_key`(`eventId`),
    UNIQUE INDEX `Reviews_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Discounts` ADD CONSTRAINT `Discounts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Tickets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tickets` ADD CONSTRAINT `Tickets_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dashboards` ADD CONSTRAINT `Dashboards_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `Events_dashboardId_fkey` FOREIGN KEY (`dashboardId`) REFERENCES `Dashboards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `Events_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categorys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotions` ADD CONSTRAINT `Promotions_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
