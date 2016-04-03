import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('event', {
      name: 'warriors',
      _type: 'json',
    });
  }
});
