const userSchema = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
    })

    userTable.associate = (models) => {
        userTable.hasMany(models.BlogPost, 
            { foreignKey: 'userId', as: 'BlogPosts'});
    };

    return userTable;
}

module.exports = userSchema;