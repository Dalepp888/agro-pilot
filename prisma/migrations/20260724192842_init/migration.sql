-- CreateEnum
CREATE TYPE "PlotStatus" AS ENUM ('ACTIVA', 'COSECHADA');

-- CreateEnum
CREATE TYPE "MessageRole" AS ENUM ('USUARIO', 'ASSISTENTE');

-- CreateTable
CREATE TABLE "Plot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cropName" TEXT NOT NULL,
    "variety" TEXT,
    "status" "PlotStatus" NOT NULL DEFAULT 'ACTIVA',
    "area" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "plantingDate" TIMESTAMP(3),
    "notes" TEXT,
    "archivedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "plotId" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "plotId" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "role" "MessageRole" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeatherCache" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "plotId" TEXT NOT NULL,

    CONSTRAINT "WeatherCache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Task_plotId_idx" ON "Task"("plotId");

-- CreateIndex
CREATE INDEX "Notification_plotId_idx" ON "Notification"("plotId");

-- CreateIndex
CREATE INDEX "WeatherCache_plotId_idx" ON "WeatherCache"("plotId");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeatherCache" ADD CONSTRAINT "WeatherCache_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
