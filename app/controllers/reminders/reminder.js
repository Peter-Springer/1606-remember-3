import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  isEditable: false,

  actions: {
    editReminder() {
      this.set('isEditing', true);
    },
    saveChanges() {
      this.set('isEditing', false);
    }
  }
});
