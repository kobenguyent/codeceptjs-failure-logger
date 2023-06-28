import { event } from 'codeceptjs';
import { resolve } from 'path';
const fs = require('fs');
const json = require('format-json');

import { config as codeceptjsConfig } from 'codeceptjs';
let outputDir;
let fileName;

interface IConfig {
  outputDir?: string,
  fileName?: string,
}

export = (config: IConfig) => {
  outputDir = config?.outputDir || codeceptjsConfig.get().output;
  fileName = config?.fileName ? fileNameValidation(config?.fileName) : 'failures.txt';

  event.dispatcher.on(event.test.failed, async (test, err) => {
    const data = {
      testID: test.uid,
      startedAt: (new Date(test.startedAt)).toString(),
      testTitle: test.title,
      error: err
    }

    fs.appendFile(resolve(outputDir, fileName), `${json.plain(data)}\n ============== \n`, function (err) {
      if (err) return console.log(err);
    });
  });
  return this;
}

function fileNameValidation (fileName: string) {
  if (!fileName.toLowerCase().includes('.txt')) return fileName + '.txt';
}