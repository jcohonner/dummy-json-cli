//const cliProgress = require('cli-progress');
const fs = require('fs');
const path = require("path");
const dummyjson = require('dummy-json');
const extraHelper = require('./lib/helpers.js');

module.exports = class GenerateJSON {

    constructor(template,{repeat, output, data, functions, seed}) {
        this.template = template;
        this.repeat = repeat;
        this.output = output;
        this.data = data || this.template.replace('.hbs', '.data.json');
        this.helpers = functions || this.template.replace('.hbs', '.helpers.js');
        this.seed = seed;
    }

    run() {
        //Template
        if (!fs.existsSync(this.template)) {
            throw new Error('Template file not found');
        }

        const template = fs.readFileSync(this.template, { encoding: 'utf8' });
        
        //MockData
        let mockdata = {nbRepeat: this.repeat};
        if (fs.existsSync(this.data)) {
            const data = fs.readFileSync(this.data, { encoding: 'utf8' });
            Object.assign(mockdata, JSON.parse(data));
        }
        
        //Helpers
        let helpers = extraHelper;
        if (fs.existsSync(this.helpers)) {   
            Object.assign(helpers, require.main.require(path.resolve(this.helpers)));
        }

        //Seed
        if (this.seed) {
            dummyjson.seed = this.seed;
        }

        //Generate
        const result = dummyjson.parse(template,{ mockdata, helpers });

        //Write to file or output to console
        this.output ? fs.writeFileSync(this.output, result): console.log(result);
    }
}