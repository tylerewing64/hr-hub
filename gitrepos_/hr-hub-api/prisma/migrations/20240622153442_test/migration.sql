/*
  Warnings:

  - Added the required column `bio` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `absent_rate` INTEGER NULL,
    ADD COLUMN `bio` VARCHAR(191) NOT NULL,
    ADD COLUMN `customer_helped` INTEGER NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `emergancy_contact` VARCHAR(191) NULL,
    ADD COLUMN `ot` INTEGER NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `prod_rate` INTEGER NULL;

-- CreateTable
CREATE TABLE `timeOffRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fromDate` DATETIME(3) NOT NULL,
    `toDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NULL DEFAULT 'not approved',
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `timeOffRequest` ADD CONSTRAINT `timeOffRequest_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
