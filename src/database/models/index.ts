import { Sequelize } from "sequelize";
import { Listing } from "./Listing.js";
import { ListingDetails } from "./ListingDetails.js";

function initModels(sequelize: Sequelize) {
	Listing.initModel(sequelize);
	ListingDetails.initModel(sequelize);

	Listing.hasOne(ListingDetails, {
		as: "details",
		foreignKey: "listing_id"
	});

	ListingDetails.belongsTo(Listing, {
		as: "listing",
		foreignKey: "listing_id"
	});
}

export { initModels };
