-- AlterTable
ALTER TABLE "Extra" ADD COLUMN     "orderedProductId" INTEGER;

-- CreateTable
CREATE TABLE "OrderedProduct" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "annotations" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "OrderedProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_orderedProductId_fkey" FOREIGN KEY ("orderedProductId") REFERENCES "OrderedProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedProduct" ADD CONSTRAINT "OrderedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
