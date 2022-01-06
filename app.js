#!/usr/bin/env node
const { program, Option  } = require('commander');
const GenerateJSON = require('./src/GenerateJSON');

program.version('0.0.1')
    .argument('<template>', 'template file')
    .option('-r, --repeat <int>', 'repeat', 10)
    .option('-d, --data <filepath>', 'JSON data file, default to <template file name>.data.json')
    .option('-f, --functions <filepath>', 'helper functions, default to <template file name>.helpers.js')
    .option('-s, --seed <key>', 'seed for random number generator')
    .option('-o, --output <filepath>','output file');

program.parse(process.argv);

try {
    const generate = new GenerateJSON(program.args[0],program.opts());
    generate.run();
} catch (e) {
    console.error(`Error : ${e.message}`);
}

