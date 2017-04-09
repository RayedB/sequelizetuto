module.exports = function(sequelize, Sequelize){
	var Post = sequelize.define('Post',{
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},
		text: {
			type: Sequelize.TEXT
		},
		published: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		}
	});

	return Post;
}