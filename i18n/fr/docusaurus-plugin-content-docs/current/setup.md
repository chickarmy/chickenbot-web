---
sidebar_position: 2
---

# Installation du bot

Cette documentation du bot vous aide à installer l'application bot sur votre poste de travail.

## Télécharger le bot

Accédez à la page d'accueil de ce site Web pour télécharger la dernière version du chicken-bot.

➡️ https://chickarmy.github.io/chickenbot-web/

## Premier démarrage du Chicken-bot

Une fois le fichier exécutable localisé sur votre poste de travail, démarrez-le !

```bash
chicken-bot.exe
```

- ➡️ cf. Avis sur les performances
- ➡️ cf. Avis sur la sécurité

Une popup d'application de bureau doit apparaître. Vous y êtes !

Continuez en lisant  **[le guide d'utilisation du bot](/docs/category/user-guide)**.

Pour obtenir des conseils plus avancés sur la configuration, cf. [cette page](./setup-advanced.md).

### Avis sur les performances
Cette application est une application de bureau [ElectronJS](https://www.electronjs.org/) qui intègre le navigateur Chromium et peut prendre beaucoup de temps à apparaître surtout la première fois. Soyez patient.

### Avis de sécurité général
Comme cette application est un exécutable, vous devez être averti de ces règles communes de sécurité :
- vous devez toujours récupérer les binaires officiels à partir des sites Web officiels. Pour chicken-bot, la ressource officielle est chickenbot-web/release : https://github.com/chickarmy/chickenbot-web/releases. Ce site de ressources est utilisé par [site Web officiel](https://chickarmy.github.io/chickenbot-web/fr/).
- vous devez toujours revérifier les binaires AVANT de les exécuter à partir de votre application antivirus / anti-malware locale et services en ligne de confiance. Une bonne façon de le faire est de déposer tous les fichiers téléchargés sur le site Web https://virustotal.com et d'attendre une analyse complète de différents fournisseurs de sécurité.
- ➡️ Vous remarquerez peut-être que chicken-bot exe produit un faux positif du fournisseur de sécurité `Bkav pro` (cf. ticket [#49](https://github.com/chickarmy/chickenbot-web/issues/49)).

### Avis de sécurité MS Windows
Comme l'exécutable chicken-bot ne provient PAS d'une source fiable de Microsoft, Windows produira des popups pour vous avertir. Vous devez les accepter pour lancer l'application.


![windowsProtect.JPG](../../../../static/img/windowsProtect.JPG)

➡️ cliquez sur "Informations complémentaires"


![windowsProtect2.JPG](../../../../static/img/windowsProtect2.JPG)

➡️ cliquez sur "Exécuter quand même" (uniquement lorsque vous êtes sûr de l'analyse de sécurité).



