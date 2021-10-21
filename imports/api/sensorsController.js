import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

var Sensors = new Mongo.Collection("sensors");

Meteor.publish("sensors", function (params) {
    console.log("Params", params);
    return Sensors.find(params);
})

