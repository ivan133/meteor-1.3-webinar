import {Meteor} from 'meteor/meteor'
import {Messages} from '../messages.js'

Meteor.publish('messages', function messages() {
    return Messages.find({
        $or: [{user_id: this.userId},
            {is_private: {$ne: true}}]
    });
});
