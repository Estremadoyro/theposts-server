import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    entities: ["src/entities/**/*.ts"],
    dbName: "theposts",
    type: "postgresql",
    user: "postgres",
    password: "postgres",
    debug: !__prod__,
    // Postgres is running at 9000, change to :5432
    clientUrl: "postgresql://postgres:postgres@127.0.0.1:9000",
  });
  console.log(orm.em);
};

main();
