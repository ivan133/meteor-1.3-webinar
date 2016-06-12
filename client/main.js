import {Template} from 'meteor/templating';

import {Messages} from '../imports/api/messages'

import './main.html';

Template.messages.helpers(
    {
        messagesList() {
            if (Meteor.userId())
                return Messages.find({$or: [{is_private: {$ne: true}}, {is_private: true, user_id: Meteor.userId()}]},
                    {sort: {time: -1}});
            else
                return Messages.find({is_private: {$ne: true}},
                    {sort: {time: -1}});
        }
    });
Template.messages.events({
    "click #add-message" (e) {
        var mes = prompt("Please enter message", "");
        var isPrivate = $('#is-private').is(":checked");
        Messages.insert({
            message: mes, time: Date.now(),
            user_id: Meteor.userId(),
            username: Meteor.user().emails[0].address,
            is_private: isPrivate
        });
    }
});
