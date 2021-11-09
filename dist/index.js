"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        dbName: 'lireddir',
        type: 'postgresql',
        debug: process.env.NODE_ENV !== 'production',
    });
};
//# sourceMappingURL=index.js.map