const {Sequelize} = require('sequelize'); //instantiez conexiunea la bd

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "./sqlite/test.db",
    define: {
		timestamps: false
	}
});

//activez sincronizarea pe entitatea de sequelize
/*
sequelize
    .sync({ 
        alter:true 
    })
    .then( () => { 
    //alter:true - verifica daca exista o tabela identica din sesiuni anterioare (recomandat)
    //force:true - sterge tabela daca aceasta exista la pornirea server.ului
    console.log("All models were syncronized successfully");    
    });
*/
module.exports = sequelize;

