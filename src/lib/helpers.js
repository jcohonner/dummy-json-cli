const dummyjson = require('dummy-json');

module.exports = {
    randomItem(array) {
        if (!Array.isArray(array)) {
            throw new Error('randomItem expects an array as first argument, you may also consider default random helper');
        }

        return dummyjson.utils.randomArrayItem(array);
    }
}