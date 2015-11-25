import Ember from 'ember';

const {
  Controller,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Controller.extend({
  rule: '',

  dynamicStylesheet: service(),

  actions: {
    addStyle() {
      const rule = get(this, 'rule');

      get(this, 'dynamicStylesheet').insertRule(rule);
    },

    removeStyle() {
      const rule = get(this, 'rule');

      get(this, 'dynamicStylesheet').deleteRule(rule);
    }
  }
});
