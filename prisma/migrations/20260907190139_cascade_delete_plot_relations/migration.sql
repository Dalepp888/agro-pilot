-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_plotId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_plotId_fkey";

-- DropForeignKey
ALTER TABLE "WeatherCache" DROP CONSTRAINT "WeatherCache_plotId_fkey";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeatherCache" ADD CONSTRAINT "WeatherCache_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
