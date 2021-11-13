
module.exports= function (sequelize,DataTypes){
    const User = sequelize.define("user_tables",{
        Name:{
            type:DataTypes.STRING
        },
        Mobile:{
            type:DataTypes.STRING
        }
    });
    return User;
};