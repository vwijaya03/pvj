import Sequelize from 'sequelize';

import { orm } from '../config/mysql';

const Staff = orm.define('staffs', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: Sequelize.STRING, allowNull: false
    },
    phone: {
        type: Sequelize.STRING, allowNull: false
    },
    email: {
        type: Sequelize.STRING, allowNull: false
    },
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
});

export default Staff