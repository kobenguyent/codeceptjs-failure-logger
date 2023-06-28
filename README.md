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



