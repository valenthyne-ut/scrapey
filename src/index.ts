import { database } from "./database/index.js";
import { initModels } from "./database/models/index.js";

void (async () => {
	/* const mapArea = new Square(
		41.25001034180876, -8.623341057375654, // North-eastern corner
		41.169255067342434, -8.701688589978033 // South-western corner
	);

	const response = await fetch(`https://www.airbnb.com/s/_/homes?${mapArea.toParams()}`);
	const responseText = await response.text();

	const $ = load(responseText);
	const deferredData = JSON.parse($("#data-deferred-state-0").contents().text()) as object;

	if(!("niobeMinimalClientData" in deferredData)) { return; }

	const dataObject = (deferredData.niobeMinimalClientData as Array<Array<unknown>>)[0][1] as object;
	if(!("data" in dataObject)) { return; }

	const data = dataObject.data as object;
	console.log(data); */

	initModels(database);
	await database.sync();
})();
