import DS from 'ember-data';

export default DS.Model.extend({
  venues: DS.hasMany('venue'),
});
