const prisma = require('../prisma/prismaClient')


// Route pour récupérer tous les apprenants
const getApprenant = async (req, res) => {
    try {
      const apprenants = await prisma.apprenant.findMany();
      res.json(apprenants);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des apprenants');
    }
  };

  // Route pour créer un nouvel apprenant
const postApprenant = async (req, res) => {
    try {
      const { prenom, nom, referenciel } = req.body;
      const nouvelApprenant = await prisma.apprenant.create({
        data: {
          prenom,
          nom,
          referenciel,
        },
      });
      console.log('Nouveau apprenant créé :', nouvelApprenant);
      res.json(nouvelApprenant);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la création de l\'apprenant');
    }
  };


  // Route pour mettre à jour un apprenant
const putApprenant = async (req, res) => {
    try {
      const { id } = req.params;
      const { prenom, nom, referenciel } = req.body;
  
      const apprenantMisAJour = await prisma.apprenant.update({
        where: { id_apprenant: parseInt(id) },  // Convertir l'ID en entier si nécessaire
        data: {
          prenom,
          nom,
          referenciel,
        },
      });
      console.log('Nouveau apprenant mis à jour :', apprenantMisAJour);
      res.json(apprenantMisAJour);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la mise à jour de l\'apprenant');
    }
  };


// Route pour supprimer un apprenant
const deleteApprenant = async (req, res) => {
    try {
      const { id } = req.params;
  
      const apprenantSupprime = await prisma.apprenant.delete({
        where: { id_apprenant: parseInt(id) },  // Convertir l'ID en entier si nécessaire
      });
      console.log('Nouveau apprenant supprimé :', apprenantSupprime);
      res.json({ message: 'Apprenant supprimé avec succès', apprenantSupprime });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la suppression de l\'apprenant');
    }
  };

  
  module.exports = {
    getApprenant,
    postApprenant,
    putApprenant,
    deleteApprenant
  }