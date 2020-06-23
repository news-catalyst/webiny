module.exports = {
    template: "@webiny/cwp-template-full@4.2.0",
    projectName: "webiny-tinynews",
    cli: {
        plugins: [
            require("@webiny/cli-plugin-deploy-components")(),
            require("@webiny/cwp-template-full/hooks/api")(),
            require("@webiny/cwp-template-full/hooks/apps")(),
            require("@webiny/cli-plugin-scaffold"),
            require("@webiny/cli-plugin-scaffold-graphql-service"),
            require("@webiny/cli-plugin-scaffold-lambda")
        ]
    }
};
