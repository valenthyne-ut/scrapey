import { Association, CreationOptional, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { ListingDetails } from "./ListingDetails.js";
import { SurveyArea } from "./SurveyArea.js";

class Listing extends Model<InferAttributes<Listing>, InferCreationAttributes<Listing>> {
	declare id: CreationOptional<number>;
	declare surveyAreaId: number;
	declare airbnbId: string;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	declare surveyArea: NonAttribute<SurveyArea>;
	declare getSurveyArea: HasOneGetAssociationMixin<SurveyArea>;
	declare setSurveyArea: HasOneSetAssociationMixin<SurveyArea, number>;

	declare listingDetails?: NonAttribute<ListingDetails>;
	declare getListingDetails: HasOneGetAssociationMixin<ListingDetails>;
	declare setListingDetails: HasOneSetAssociationMixin<ListingDetails, number>;
	declare createListingDetails: HasOneCreateAssociationMixin<ListingDetails>;

	declare static associations: {
		surveyArea: Association<Listing, SurveyArea>;
		listingDetails: Association<Listing, ListingDetails>;
	};

	static initModel(sequelize: Sequelize) {
		Listing.init({
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			surveyAreaId: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			airbnbId: {
				type: DataTypes.STRING(48),
				allowNull: false
			},
			createdAt: {
				type: DataTypes.DATE
			},
			updatedAt: {
				type: DataTypes.DATE
			}
		}, { sequelize });

		return Listing;
	}
}

export { Listing };
