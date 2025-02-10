-- CreateTable
CREATE TABLE "WeddingHall" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tags" TEXT[],
    "images" TEXT[],
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "locationType" TEXT[],
    "hallType" TEXT[],
    "weddingTime" TEXT[],
    "weddingHalls" JSONB NOT NULL,
    "mealType" JSONB NOT NULL,
    "minGuarantee" INTEGER NOT NULL,
    "parking" INTEGER NOT NULL,
    "weddingInterval" INTEGER NOT NULL,
    "maxCapacity" INTEGER NOT NULL,
    "photoTable" TEXT NOT NULL,
    "specialDirecting" TEXT[],
    "weddingSupplies" TEXT[],
    "concierge" TEXT[],
    "flower" TEXT[],
    "flowerPrice" JSONB NOT NULL,
    "snapPhoto" JSONB NOT NULL,
    "pyeback" JSONB NOT NULL,
    "flowerWrapping" JSONB NOT NULL,
    "flowerShower" JSONB NOT NULL,
    "photoBooth" JSONB NOT NULL,
    "officiant" JSONB NOT NULL,
    "mc" JSONB NOT NULL,
    "weddingSong" JSONB NOT NULL,
    "benefit" BOOLEAN NOT NULL,
    "other" JSONB[],
    "address" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "homePage" TEXT NOT NULL,
    "publicTransport" TEXT NOT NULL,

    CONSTRAINT "WeddingHall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);
