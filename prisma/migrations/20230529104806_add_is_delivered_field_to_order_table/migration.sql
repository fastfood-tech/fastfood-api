/*
  Warnings:

  - Added the required column `isDelivered` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isDelivered" BOOLEAN NOT NULL;
