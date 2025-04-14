import { Association, CreationOptional, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { ListingDetails } from "./ListingDetails.js";

class Listing extends Model<InferAttributes<Listing>, InferCreationAttributes<Listing>> {
	declare id: CreationOptional<number>;
	declare id_airbnb: string;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	declare listingDetails?: NonAttribute<ListingDetails>;
	declare getListingDetails: HasOneGetAssociationMixin<ListingDetails>;
	declare setListingDetails: HasOneSetAssociationMixin<ListingDetails, number>;
	declare createListingDetails: HasOneCreateAssociationMixin<ListingDetails>;

	declare static associations: {
		listingDetails: Association<Listing, ListingDetails>;
	};

	static initModel(sequelize: Sequelize) {
		Listing.init({
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			id_airbnb: {
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
