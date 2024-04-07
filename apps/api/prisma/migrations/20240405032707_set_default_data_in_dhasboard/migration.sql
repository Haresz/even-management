-- AlterTable
ALTER TABLE `dashboards` MODIFY `eventCount` INTEGER NOT NULL DEFAULT 0,
    MODIFY `attendeeCount` INTEGER NOT NULL DEFAULT 0,
    MODIFY `transactionCount` INTEGER NOT NULL DEFAULT 0;
