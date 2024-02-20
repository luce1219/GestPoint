-- CreateTable
CREATE TABLE `Apprenant` (
    `id_apprenant` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `referenciel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_apprenant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Connexion` (
    `id_connexion` INTEGER NOT NULL AUTO_INCREMENT,
    `heure_de_connexion` DATETIME(3) NOT NULL,
    `id_apprenant` INTEGER NOT NULL,

    PRIMARY KEY (`id_connexion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Administrateur` (
    `id_administrateur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_utilisateur` VARCHAR(191) NOT NULL,
    `mot_de_passe` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_administrateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Connexion` ADD CONSTRAINT `Connexion_id_apprenant_fkey` FOREIGN KEY (`id_apprenant`) REFERENCES `Apprenant`(`id_apprenant`) ON DELETE RESTRICT ON UPDATE CASCADE;
