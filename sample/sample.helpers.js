//Important : Require from the main app context
const dummyjson = require.main.require('dummy-json');

module.exports = {
    direction() {
        // Use randomArrayItem() to ensure the seeded random number generator is used
        return dummyjson.utils.randomArrayItem(['North', 'South', 'East', 'West']);
    }
}
