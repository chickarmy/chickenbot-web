---
sidebar_position: 4
---
# Configuration du bot (avancé)

Cette documentation du bot vous aide à personnaliser [l'installation de base du bot](./setup.md).

## Journaux applicatifs

Les journaux de logs de l'application se trouvent dans `C:\Users\<user>\AppData\Roaming\<appName>\logs`.

### Activer les journaux de débogage
Afin d'augmenter les journaux avec les journaux applicatifs de débogage : mettez à jour la variable d'environnement `CHICKEN_BOT_VERBOSE`
````bash
set CHICKEN_BOT_VERBOSE=true
# ou
export CHICKEN_BOT_VERBOSE=true
````

### Activer les journaux des statistiques d'utilisation

Afin d'augmenter les journaux avec les journaux des statistiques d'utilisation : définissez la variable d'environnement `CHICKEN_BOT_VERBOSE_ANALYTICS` avec la valeur `true`.

### Activer davantage de journaux d'erreurs

Afin d'augmenter les journaux d'erreurs, ajoutez `--trace-warnings` à la commande de démarrage.

Une autre façon d'afficher les journaux (dans une fenêtre contextuelle dédiée) est de lancer exe en utilisant cet argument ` --enable-logging`.