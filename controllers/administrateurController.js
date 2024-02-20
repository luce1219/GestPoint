const prisma = require('../prisma/prismaClient')

const getAdministrateur = async (req, res) => {
    try {
      const administrateur = await prisma.administrateur.findMany();
      res.json(administrateur);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des apprenants');
    }
  }; 


 
 // Route pour créer un nouvel administrateur
 const postAdministrateur = async (req, res) => {
    try {
      const { nom_utilisateur, mot_de_passe } = req.body;
  
      const nouvelleAdministrateur = await prisma.administrateur.create({
        data: {
            nom_utilisateur,
            mot_de_passe,
        },
      });
  
      console.log('Nouvelle administrateur créée :', nouvelleAdministrateur);
      res.json(nouvelleAdministrateur);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la création de l/administrateur');
    }
  }; 



  const putAdministrateur = async (req, res) => {
    try {
      const administrateurId = parseInt(req.params.id);
      const { nom_utilisateur, mot_de_passe } = req.body;
  
      // Mettez à jour l'administrateur en utilisant l'ID correct
      const administrateurMiseAJour = await prisma.administrateur.update({
        where: { id_administrateur: administrateurId },
        data: {
          nom_utilisateur,
          mot_de_passe,
        },
      });
  
      console.log('Administrateur mis à jour :', administrateurMiseAJour);
      res.json(administrateurMiseAJour);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la mise à jour de l\'administrateur');
    }
  };



  
  const deleteAdministrateur = async (req, res) => {
    try {
      const administrateurId = parseInt(req.params.id);
  
      // Supprimez l'administrateur en utilisant l'ID
      const administrateurSupprime = await prisma.administrateur.delete({
        where: { id_administrateur: administrateurId },
      });
  
      console.log('Administrateur supprimé :', administrateurSupprime);
      res.json({ message: 'Administrateur supprimé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la suppression de l\'administrateur');
    }
  };


  module.exports = {
    getAdministrateur,
    postAdministrateur,
    putAdministrateur,
    deleteAdministrateur
  }


  