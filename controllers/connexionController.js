const prisma = require('../prisma/prismaClient')



  //les routes de la table connexion

 // Route pour récupérer toutes les connexion
 const getConnexion = async (req, res) => {
    try {
      const connexion = await prisma.connexion.findMany();
      res.json(connexion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des apprenants');
    }
  }; 


   // Route pour créer un nouvel apprenant
   const postConnexion = async (req, res) => {
    try {
      const { heure_de_connexion, id_apprenant, apprenant } = req.body;
  
      // Créez la connexion en utilisant la relation vers Apprenant
      const nouvelleConnexion = await prisma.connexion.create({
        data: {
          heure_de_connexion,
          apprenant: {
            connect: { id_apprenant },
          },
        },
      });
  
      console.log('Nouvelle connexion créée :', nouvelleConnexion);
      res.json(nouvelleConnexion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la création de la connexion');
    }
  };


  const putConnexion = async (req, res) => {
    try {
      const connexionId = parseInt(req.params.id);
      const { heure_de_connexion, id_apprenant, apprenant } = req.body;
  
      // Mettez à jour la connexion en utilisant l'ID
      const connexionMiseAJour = await prisma.connexion.update({
        where: { id_connexion: connexionId },
        data: {
          heure_de_connexion,
          apprenant: {
            connect: { id_apprenant },
          },
        },
      });
  
      console.log('Connexion mise à jour :', connexionMiseAJour);
      res.json(connexionMiseAJour);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la mise à jour de la connexion');
    }
  };

  const deleteConnexion = async (req, res) => {
    try {
      const connexionId = parseInt(req.params.id);
  
      // Supprimez la connexion en utilisant l'ID
      const connexionSupprimee = await prisma.connexion.delete({
        where: { id_connexion: connexionId },
      });
  
      console.log('Connexion supprimée :', connexionSupprimee);
      res.json({ message: 'Connexion supprimée avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la suppression de la connexion');
    }
  };


  module.exports = {
    getConnexion,
    postConnexion,
    putConnexion,
    deleteConnexion
  }



  