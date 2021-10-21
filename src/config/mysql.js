import Sequelize from 'sequelize';

const host = '127.0.0.1';
const port = 3306;
const username = 'root';
const password = 'root';
const database = 'pvj';

const orm = new Sequelize(database, username, password, {
	host: host,
	dialect: 'mysql',
	logging: console.log,
	freezeTableName: true,
	timezone: '+07:00',
	pool: {
		max: 100,
		min: 0,
		idle: 200000,
		acquire: 1000000
	},
    port: port
});

export { orm }