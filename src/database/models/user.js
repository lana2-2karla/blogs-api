const userSchema = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
    }, { timestamps: false })

    userTable.associate = (models) => {
        userTable.hasMany(models.BlogPost, 
            { foreignKey: 'userId', as: 'BlogPosts'});
    };

    return userTable;
}

module.exports = userSchema;