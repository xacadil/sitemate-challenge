import { Model, DataTypes } from 'sequelize';
import db from '../config/database'; // Adjust based on your config

class Issue extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: string;
}

Issue.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db,
    tableName: 'issues',
});

export default Issue;
