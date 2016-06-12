var Messages = new Meteor.Collection("messages");
if (Meteor.isClient) {
    Template.messages.helpers(
        {
            messagesList: function () {
                return Messages.find({},
                    {sort: {time: -1}});
            }
        });
    Template.messages.events = {
        "click #add-message": function (e) {
            var mes = prompt("Please enter message", "");
            Messages.insert({
                message: mes, time: Date.now()
            });
        }
    }
}