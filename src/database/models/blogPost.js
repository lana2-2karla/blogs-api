const blogPostSchema = (sequelize, DataTypes) => {
    const blogPostTable = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE
    },
    { tableName: 'BlogPosts', timestamps: false });
    
    blogPostTable.associate = (models) => {
        blogPostTable.belongsTo(models.User, 
            { foreignKey: 'userId', as: 'user'});
    };

    return blogPostTable;
};

module.exports = blogPostSchema;