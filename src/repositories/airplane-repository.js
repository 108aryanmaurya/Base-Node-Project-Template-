const CrudRepository=require("./crud-repository")
const {Airplane}=require('../models')

class AirplaneRepositiry extends CrudRepository{
    constructor()
    {
super(Airplane);
    }

}

module.exports=AirplaneRepositiry