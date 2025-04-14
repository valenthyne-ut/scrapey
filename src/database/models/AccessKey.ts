import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

// For the web access gui
class AccessKey extends Model<InferAttributes<AccessKey>, InferCreationAttributes<AccessKey>> {
	declare id: CreationOptional<number>;
	declare key: string;
	// ro = read-only, rw = read & write
	declare permissions: "ro" | "rw";
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	static initModel(sequelize: Sequelize) {
		AccessKey.init({
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			key: {
				type: DataTypes.STRING,
				allowNull: false
			},
			permissions: {
				type: DataTypes.ENUM("ro", "rw"),
				allowNull: false
			},
			createdAt: {
				type: DataTypes.DATE
			},
			updatedAt: {
				type: DataTypes.DATE
			}
		}, { sequelize });

		return AccessKey;
	}
}

export { AccessKey };
