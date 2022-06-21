const blogPostSchema = (sequelize, DataTypes) => {
    const blogPostTable = sequelize.define('BlogPost', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE
    },
    { tableName: 'BlogPosts'});
    
    blogPostTable.associate = (models) => {
        blogPostTable.belongsTo(models.User, 
            { foreignKey: 'userId', as: 'Users'});
    };

    return blogPostTable;
};

module.exports = blogPostSchema;