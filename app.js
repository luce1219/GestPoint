const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function creerApprenant() {
  const nouvelApprenant = await prisma.apprenant.create({
    data: {
      prenom: 'John',
      nom: 'Doe',
      referenciel: 'Informatique'
    },
  });

  console.log('Nouvel apprenant créé :', nouvelApprenant);
}

creerApprenant()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
