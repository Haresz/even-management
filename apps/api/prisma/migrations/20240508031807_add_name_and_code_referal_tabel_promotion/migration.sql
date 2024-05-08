/*
  Warnings:

  - Added the required column `codeReferal` to the `Promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Promotions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `promotions` ADD COLUMN `codeReferal` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
