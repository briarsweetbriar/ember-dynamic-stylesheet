import Ember from 'ember';

const {
  Service,
  computed,
  get,
  on,
  set
} = Ember;

export default Service.extend({
  rulesheets: computed(() => Ember.A()),

  initializeStylesheet: on('init', function() {
    const style = document.createElement("style");

  	document.head.appendChild(style);

    set(this, 'stylesheet', style.sheet);
  }),

  deleteRule(rule) {
    const rulesheets = get(this, 'rulesheets');
    const index = rulesheets.indexOf(rule);

    if (index < 0) { return; }

    rulesheets.removeAt(index);
    get(this, 'stylesheet').deleteRule(index);
  },

  insertRule(rule) {
    get(this, 'rulesheets').unshiftObject(rule);
    get(this, 'stylesheet').insertRule(rule, 0);
  }
});
