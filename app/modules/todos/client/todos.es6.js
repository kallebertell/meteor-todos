Meteor.subscribe("tasks");

Template.todos.helpers({
  tasks() {
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  },
  
  hideCompleted() {
    return Session.get("hideCompleted");
  },

  incompleteCount() {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});

Template.todos.events({
  "change .hide-completed input"(event) {
    Session.set("hideCompleted", event.target.checked);
  },

  "submit .new-task"(event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    Meteor.call("addTask", text);

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});



