import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Soccer = new Mongo.Collection("soccer");

console.log("Soccer controller");

let countries = [
    'Perú', 'Brazil', 'Uruguay', 'Argentina', 'Ecuador'
]

Meteor.methods({
    'soccer.countries': function(){
        console.log("Hello");
        return countries;
    }
});