import { Association, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { Listing } from "./Listing.js";

class ListingDetails extends Model<InferAttributes<ListingDetails>, InferCreationAttributes<ListingDetails>> {
	declare id: CreationOptional<number>;
	declare listingId: number;
	declare point: { type: "Point"; coordinates: number[] };
	declare accuracyRadius: number;
	declare daysBookedInYear: number;
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
			listingId: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			point: {
				type: DataTypes.GEOMETRY,
				allowNull: false
			},
			accuracyRadius: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			daysBookedInYear: {
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
