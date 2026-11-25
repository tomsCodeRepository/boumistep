# Boumistep

Application web développée avec **Symfony** (PHP) et **npm** pour la gestion des assets front.

## Prérequis

### Exécution locale

- PHP >= 8.1
- Composer
- Node.js et npm
- Symfony CLI

### Exécution avec Docker

- Docker
- Docker Compose

---

## Installation

```bash
git clone git@github.com:tomsCodeRepository/boumistep.git
cd boumistep
```

---

## Configuration

Le fichier `.env` contient des valeurs par défaut non sensibles. Pour vos valeurs réelles, créez un fichier `.env.local` (ignoré par Git) :

```dotenv
APP_SECRET=votre_secret
DATABASE_URL="mysql://utilisateur:mot_de_passe@127.0.0.1:3306/app?serverVersion=8&charset=utf8mb4"
MAILER_DSN=smtp://USERNAME:PASSWORD@sandbox.smtp.mailtrap.io:2525?encryption=tls&auth_mode=login
```

Générer un `APP_SECRET` :

```bash
php -r "echo bin2hex(random_bytes(16));"
```

---

## Lancement en local (Symfony CLI)

### Installer les dépendances

```bash
composer install
npm install
```

### Initialiser la base de données

```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

### Compiler les assets

```bash
npm run build
```

### Exécuter le build Composer

```bash
composer build
```

### Démarrer l'application

```bash
symfony serve
```

L'application est alors accessible à l'adresse :

```text
https://127.0.0.1:8000
```

Pour le développement, vous pouvez utiliser :

```bash
npm run watch
```

ou

```bash
npm run dev
```

afin de recompiler automatiquement les assets lors des modifications.

---

## Lancement avec Docker

Construire et démarrer l'environnement :

```bash
docker compose up -d --build
```

Vérifier l'état des conteneurs :

```bash
docker compose ps
```

Afficher les logs :

```bash
docker compose logs -f
```

Arrêter l'environnement :

```bash
docker compose down
```

---

## Structure du projet

```text
├── assets/         # JavaScript et CSS source
├── config/         # Configuration Symfony
├── migrations/     # Migrations Doctrine
├── public/         # Point d'entrée web
├── src/            # Contrôleurs, entités et services
├── templates/      # Vues Twig
└── tests/          # Tests
```

---

## Tests

```bash
php bin/phpunit
```

---

## Sécurité

Ne commitez jamais de secrets dans le dépôt.

Les valeurs sensibles doivent être placées dans :

- `.env.local`
- les variables d'environnement du serveur
- les secrets de votre plateforme d'hébergement

---

## Licence

Projet publié à titre de démonstration.
Tous droits réservés.
