import { Association, CreationOptional, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { Listing } from "./Listing.js";

class SurveyArea extends Model<InferAttributes<SurveyArea>, InferCreationAttributes<SurveyArea>> {
	declare id: CreationOptional<number>;
	declare nePoint: { type: "Point"; coordinates: number[] };
	declare swPoint: { type: "Point"; coordinates: number[] };
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	declare listings?: NonAttribute<Listing[]>;
	declare getListings: HasManyGetAssociationsMixin<Listing>;
	declare setListings: HasManySetAssociationsMixin<Listing, number>;
	declare addListing: HasManyAddAssociationMixin<Listing, number>;
	declare addListings: HasManyAddAssociationsMixin<Listing, number>;
	declare createListing: HasManyCreateAssociationMixin<Listing>;
	declare removeListing: HasManyRemoveAssociationMixin<Listing, number>;
	declare removeListings: HasManyRemoveAssociationsMixin<Listing, number>;
	declare hasListing: HasManyHasAssociationMixin<Listing, number>;
	declare hasListings: HasManyHasAssociationsMixin<Listing, number>;
	declare countListings: HasManyCountAssociationsMixin;

	declare static associations: {
		listings: Association<SurveyArea, Listing>;
	};

	static initModel(sequelize: Sequelize) {
		SurveyArea.init({
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nePoint: {
				type: DataTypes.GEOMETRY,
				allowNull: false
			},
			swPoint: {
				type: DataTypes.GEOMETRY,
				allowNull: false
			},
			createdAt: {
				type: DataTypes.DATE
			},
			updatedAt: {
				type: DataTypes.DATE
			}
		}, { sequelize });

		return SurveyArea;
	}

	toParams() {
		const params = new URLSearchParams();
		params.set("ne_lat", this.nePoint.coordinates[1].toString());
		params.set("ne_lon", this.nePoint.coordinates[0].toString());
		params.set("sw_lat", this.swPoint.coordinates[1].toString());
		params.set("sw_lon", this.swPoint.coordinates[0].toString());
		return params;
	}
}

export { SurveyArea };
