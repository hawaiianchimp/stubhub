import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  venueInfoUrl: DS.attr('string'),
  venueEventsUrl: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  timezone: DS.attr('string'),
  address1: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipCode: DS.attr('number'),
  country: DS.attr('string')
});
