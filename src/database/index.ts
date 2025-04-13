import config from "@/config/index.js";
import { Sequelize } from "sequelize";

const database = new Sequelize("scrapey", config.DATABASE_USERNAME, config.DATABASE_PASSWORD, {
	dialect: "mariadb",
	host: config.DATABASE_HOST,
	logging: false
});

export { database };
