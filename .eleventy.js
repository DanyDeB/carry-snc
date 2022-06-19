const { DateTime } = require("luxon");

module.exports = function(elventyConfig) {

    elventyConfig.addPassthroughCopy('./src/style.css');
    elventyConfig.addPassthroughCopy('./src/assets');
    elventyConfig.addPassthroughCopy('./src/admin'); 
    
    elventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}