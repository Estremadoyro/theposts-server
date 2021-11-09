"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: ["src/entities/**/*.ts"],
        dbName: "theposts",
        type: "postgresql",
        user: "postgres",
        password: "postgres",
        debug: !constants_1.__prod__,
        clientUrl: "postgresql://postgres:postgres@127.0.0.1:9000",
    });
    console.log(orm.em);
};
main();
//# sourceMappingURL=index.js.map