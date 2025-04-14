import { database } from "./database/index.js";
import { initModels } from "./database/models/index.js";

void (async () => {
	initModels(database);
	await database.sync();
})();
