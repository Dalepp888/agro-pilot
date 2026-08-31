/*
  Warnings:

  - A unique constraint covering the columns `[plotId]` on the table `WeatherCache` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "WeatherCache_plotId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "WeatherCache_plotId_key" ON "WeatherCache"("plotId");
