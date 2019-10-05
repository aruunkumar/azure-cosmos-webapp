var config = {}

config.host = process.env.HOST || "https://aruunk-umlprj-db.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "aQoucC8u3dFkSfmdNGpiaPENNP9yvQhbMltNzCzmtM5bNgcXlkcvP3QXhvtEP7jcG4PPTy5Y9BsuhKCd9yKeUw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
