# Boumistep

Application web développée avec **Symfony** (PHP) et **npm** pour la gestion des assets front.

## Prérequis

- PHP >= 8.1 (avec les extensions `ctype`, `iconv`)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) et npm
- [Symfony CLI](https://symfony.com/download)


## Installation

```bash
# Cloner le dépôt
git clone git@github.com:tomsCodeRepository/boumistep.git
cd boumistep

# Installer les dépendances PHP
composer install

# Installer les dépendances JavaScript
npm install
```

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

## Base de données

```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

## Lancement

```bash
# Compiler les assets front
npm run build

# Exécuter le script de build Composer
composer build

# Démarrer le serveur local
symfony serve
```

L'application est ensuite accessible sur https://127.0.0.1:8000.

Pour le développement, `npm run watch` (ou `npm run dev`) recompile les assets automatiquement.

## Structure du projet

```
├── assets/        # JavaScript et CSS source
├── config/        # Configuration Symfony
├── migrations/    # Migrations Doctrine
├── public/        # Point d'entrée web
├── src/           # Code PHP (contrôleurs, entités, services)
├── templates/     # Vues Twig
└── tests/         # Tests
```

## Tests

```bash
php bin/phpunit
```

## Sécurité

Ne commitez jamais de secrets : les valeurs réelles vont dans `.env.local` ou dans les variables d'environnement du serveur.

## Licence

Code publié à titre de démonstration. Tous droits réservés.

