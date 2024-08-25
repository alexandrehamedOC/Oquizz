# image node.js adaptée pour mon projet
FROM node:lts-alpine

#repertoire de travail du conteneur
WORKDIR /app

# Copie package.json et package-lock.json dans le répertoir de travail
COPY package*.json ./

RUN npm install

COPY . .


# Expose le port que l'application va utiliser
EXPOSE 3000

# Définit la commande pour démarrer l'application
CMD ["npm", "run", "dev"]