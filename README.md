# Dummy JSON CLI

Dummy JSON CLI is cli tool for [Dummy JSON](https://github.com/webroo/dummy-json) by [Matt Sweetman](https://github.com/webroo). It extends the default cli proposed by Dummy JSON to enable the use of custom data and custom helpers directly from the cli.

## install

> npm install dummy-json-cli -g

## Command line

Basic usage
> generatejson template.hbs

Save to file
> generatejson template.hbs -o output.json

Extra help is available
> generatejson -h 

## Templates, custom data and custom helpers

Based on the template filepath, the script will automatically lookup for a JSON custom data file (template name.data.json) and a JS module that exports custom helpers (template name.helpers.js).

Look at sample.hbs, sample.data.json, sample.helpers.js

## External Documentation

* [Dummy JSON Generator](https://github.com/webroo/dummy-json) documentation
* [HBS Templates](https://handlebarsjs.com/) documentation

## built-in (extra) Helpers

See [Dummy JSON Generator](https://github.com/webroo/dummy-json) documentation for default helpers

### randomItem

    const myMockdata = {
      animals: ['fox', 'badger', 'crow']
    };
    const template = '{{#randomItem animals}}';
    const result = dummyjson.parse(template, { mockdata: myMockdata }); // Returns one of "fox", "badger" or "crow"

## Custom Data

You can feed your template with custom data using a JSON file (should be an object with each key as the variable name).

Either create a file with same name as the template and `.data.json` as extenion or use `-d` option to specify the filepath.

See sample/sample.data.json

### Repeat

A global nbRepeat variable will be set in addition to your custom data. You can override it in your custom data or using `-r` option

## Custom Helpers

You can add custom helpers by creating a JavaScript module.

Either create a file with same name as the template and `.helpers.js` as extenion or use `-f` option to specify the filepath.