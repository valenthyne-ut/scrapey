import { Sequelize } from "sequelize";
import { Listing } from "./Listing.js";
import { ListingDetails } from "./ListingDetails.js";
import { SurveyArea } from "./SurveyArea.js";
import { AccessKey } from "./AccessKey.js";

function initModels(sequelize: Sequelize) {
	Listing.initModel(sequelize);
	ListingDetails.initModel(sequelize);
	SurveyArea.initModel(sequelize);
	AccessKey.initModel(sequelize);

	SurveyArea.hasMany(Listing, {
		as: "listings",
		foreignKey: "surveyAreaId"
	});

	Listing.belongsTo(SurveyArea, {
		as: "surveyarea",
		foreignKey: "surveyAreaId"
	});

	Listing.hasOne(ListingDetails, {
		as: "details",
		foreignKey: "listingId"
	});

	ListingDetails.belongsTo(Listing, {
		as: "listing",
		foreignKey: "listingId"
	});
}

export { initModels };
