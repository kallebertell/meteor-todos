Template.task.events({
  "click .toggle-checked"() {
    // Set the checked property to the opposite of its current value
    Meteor.call("setChecked", this._id, ! this.checked);
  },
  "click .delete"() {
    Meteor.call("deleteTask", this._id);
  },
  "click .toggle-private"() {
    Meteor.call("setPrivate", this._id, ! this.private);
  }
});

// Define a helper to check if the current user is the task owner
Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  }
});