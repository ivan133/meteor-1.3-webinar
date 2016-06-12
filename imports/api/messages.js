import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection("messages");

Messages.allow({
    insert(userid, message){
        if (message.user_id && message.user_id != userid) {
            throw new Meteor.Error('incorrect user');
        }
        return true
    }
});