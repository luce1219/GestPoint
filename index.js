const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/***** Middleware pour logger la date de la requête */
app.use((req, res, next) => {
    const event = new Date();
    console.log('AUTH TIME:', event.toString());
    next();
  });
  

app.use('/', require('./routes/administrateur.routes'))
app.use('/', require('./routes/apprenant.routes'))
app.use('/', require('./routes/connexion.routes'))






// Démarrez le serveur
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur http://localhost:${port}`);
});
