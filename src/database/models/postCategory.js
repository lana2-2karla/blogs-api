const postCategoriesSchema = (sequelize, DataTypes) => {
    const postCategoriesTable = sequelize.define('PostCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER
    },
    { timestamps: false, tableName: 'PostCategories' }
    );

    postCategoriesTable.associate = (models) => {

        models.BlogPost.belongsToMany(models.Category, {
            through: postCategoriesTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
            as: 'categories'
        });
        
        models.Category.belongsToMany(models.BlogPost, {
            through: postCategoriesTable,
            foreignKey: 'categoryId',
            otherKey: "postId",
            as: 'blogPost'
        });
    }
    return postCategoriesTable;
};

module.exports = postCategoriesSchema;

// relacionamento entre tabelas - referência: https://tableless.com.br/sequelize-a-solu%C3%A7%C3%A3o-para-seus-relacionamentos/