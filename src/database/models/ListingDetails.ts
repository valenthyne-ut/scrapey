import { Association, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { Listing } from "./Listing.js";

class ListingDetails extends Model<InferAttributes<ListingDetails>, InferCreationAttributes<ListingDetails>> {
	declare id: CreationOptional<number>;
	declare listing_id: number;
	declare latitude: { type: "Point"; coordinates: number[] };
	declare longitude: { type: "Point"; coordinates: number[] };
	declare accuracy_radius: number;
	declare days_booked_in_year: number;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	declare listing?: NonAttribute<Listing>;
	declare getListing: BelongsToGetAssociationMixin<Listing>;
	declare setListing: BelongsToSetAssociationMixin<Listing, number>;
	declare createListing: BelongsToCreateAssociationMixin<Listing>;

	declare static associations: {
		listing: Association<ListingDetails, Listing>;
	};

	static initModel(sequelize: Sequelize) {
		ListingDetails.init({
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			listing_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			latitude: {
				type: DataTypes.GEOMETRY,
				allowNull: false
			},
			longitude: {
				type: DataTypes.GEOMETRY,
				allowNull: false
			},
			accuracy_radius: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			days_booked_in_year: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			createdAt: {
				type: DataTypes.DATE
			},
			updatedAt: {
				type: DataTypes.DATE
			}
		}, { sequelize });

		return ListingDetails;
	}
}

export { ListingDetails };
