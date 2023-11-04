module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
