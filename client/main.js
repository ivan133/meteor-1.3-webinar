import {Template} from 'meteor/templating';

import {Messages} from '../imports/api/messages'

import './main.html';

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
