/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VisiteSchema = new Schema({
    type : {
        type : String,
        default : "Consultation"
    },
    dateVisite : {
        type : Date
    },
    medecin : {
        type : String
    }
});


var individuSchema = new Schema({
    name : {
        type : String,
        required:[true, 'l attribut nom est requis']
    },
    lastName : {
        type : String
    },
    dateOfBirth : {
        type : Date        
    },
    visite : VisiteSchema
});    

var Individu = mongoose.model('individu', individuSchema);

module.exports = Individu;
