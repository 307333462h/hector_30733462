import {DataTypes} from 'sequelize';
import sequelize from '../config/config.js';

const contacto = sequelize.define('contacto',{
	id:{
	type:DataTypes.INTEGER.UNSIGNED,
	autoIncrement:true,
	primaryKey:true
	},
	nombre:{
		type:DataTypes.STRING,
		allowNull:false
	},
	correo:{
		type:DataTypes.STRING,
		allowNull:false,
		unique:true
	},
	mensaje:{
		type:DataTypes.STRING,
		allowNull:false
	}
},{
timestamps:true	
});

export default contacto;