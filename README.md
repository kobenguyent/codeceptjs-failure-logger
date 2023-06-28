[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)
[![GitHub tag](https://img.shields.io/github/tag/kobenguyent/codeceptjs-failure-logger?include_prereleases=&sort=semver&color=green)](https://github.com/kobenguyent/codeceptjs-loggers-plugin/releases/)

## CodeceptJS Failure Logger

The CodeceptJS Failure Logger is a module that captures and logs test failures in CodeceptJS. When a test fails, the module appends the relevant information to a specified output file.

### Installation

To install the CodeceptJS Failure Logger module, you can use npm:

```bash
npm install codeceptjs-failure-logger
```

### Configuration

The CodeceptJS Failure Logger module can be configured by passing an object with the following properties:

- `outputDir` (optional): The directory where the output file will be stored. If not provided, it uses the CodeceptJS default output directory.
- `fileName` (optional): The name of the output file. If not provided, it defaults to 'failures.txt'. The file extension should be '.txt'.

Example usage with configuration:

```
{
...
   plugins: {
     Logger: {
      require: 'codeceptjs-failure-logger',
      enabled: true,
      outputDir: './logs',
      fileName: 'test_failures.txt'
    }
   }
...
}
```

Now, whenever a test fails, the failure details will be appended to the 'test_failures.txt' file in the 'logs' directory.

Example failed logs:
````
{
  "testID": "pirmvXE0bV2xfL2OLACy3w",
  "startedAt": "Wed Jun 28 2023 11:00:01 GMT+0200 (Central European Summer Time)",
  "testTitle": "Input a text in the input box and after search validate one of the book title",
  "error": {
    "params": {
      "jar": "web application",
      "customMessage": "",
      "type": "to include",
      "needle": "123",
      "haystack": "Über Google\nStore\nGmailBilder\nAnmelden\n \nDeutschland\nWerbeprogramme\nUnternehmen\nWie funktioniert die Google Suche?\nCO₂-neutral seit 2007\nDatenschutzerklärung\nNutzungsbedingungen\nEinstellungen\nDE\nAnmelden\nBevor Sie zu Google weitergehen\nWir verwenden Cookies und Daten, um\nGoogle-Dienste anzubieten und zu betreiben\nAusfälle zu prüfen und Maßnahmen gegen Spam, Betrug und Missbrauch zu ergreifen\nDaten zu Zielgruppeninteraktionen und Websitestatistiken zu erheben. Mit den gewonnenen Informationen möchten wir verstehen, wie unsere Dienste verwendet werden, und die Qualität dieser Dienste verbessern.\nWenn Sie „Alle akzeptieren“ auswählen, verwenden wir Cookies und Daten auch, um\nneue Dienste zu entwickeln und zu verbessern\nWerbung auszuliefern und ihre Wirkung zu messen\npersonalisierte Inhalte anzuzeigen, abhängig von Ihren Einstellungen\npersonalisierte Werbung anzuzeigen, abhängig von Ihren Einstellungen\nWenn Sie „Alle ablehnen“ auswählen, verwenden wir Cookies nicht für diese zusätzlichen Zwecke.\nNicht personalisierte Inhalte werden u. a. von Inhalten, die Sie sich gerade ansehen, Aktivitäten in Ihrer aktiven Suchsitzung und Ihrem Standort beeinflusst. Nicht personalisierte Werbung wird von den Inhalten, die Sie sich gerade ansehen, und Ihrem allgemeinen Standort beeinflusst. Personalisierte Inhalte und Werbung können auch relevantere Ergebnisse, Empfehlungen und individuelle Werbung enthalten, die auf früheren Aktivitäten in diesem Browser, etwa Suchanfragen bei Google, beruhen. Sofern relevant, verwenden wir Cookies und Daten außerdem, um Inhalte und Werbung altersgerecht zu gestalten.\nWählen Sie „Weitere Optionen“ aus, um sich zusätzliche Informationen anzusehen, einschließlich Details zum Verwalten Ihrer Datenschutzeinstellungen. Sie können auch jederzeit g.co/privacytools besuchen.\nAlle ablehnen\nAlle akzeptieren\nWeitere Optionen\nDatenschutz\n·\nNutzungsbedingungen"
    },
    "template": "{{customMessage}}expected {{jar}} {{type}} \"{{needle}}\"",
    "showDiff": true,
    "actual": "Über Google\nStore\nGmailBilder\nAnmelden\n \nDeutschland\nWerbeprogramme\nUnternehmen\nWie funktioniert die Google Suche?\nCO₂-neutral seit 2007\n--( 24 lines more )---",
    "expected": "123",
    "message": ""
  }
}
 ============== 
````

