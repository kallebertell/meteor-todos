if (!Meteor.isClient) {
  return;
}

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});