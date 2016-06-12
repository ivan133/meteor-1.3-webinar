import {Template} from 'meteor/templating';
import './main.html';

var Messages = new Meteor.Collection("messages");

Template.messages.helpers(
    {
        messagesList() {
            return Messages.find({},
                {sort: {time: -1}});
        }
    });
Template.messages.events({
    "click #add-message" (e) {
        var mes = prompt("Please enter message", "");
        Messages.insert({
            message: mes, time: Date.now()
        });
    }
});
