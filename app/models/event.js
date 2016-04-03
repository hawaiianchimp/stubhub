import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  eventInfoUrl: DS.attr('string'),
  dateLocal: DS.attr('date'),
  dateUTC: DS.attr('date'),
  venue: DS.attr('venue'),
  ticketInfo: DS.attr('ticket'),
  distance: DS.attr('number'),
  categories: DS.attr('categories'),
  groupings: DS.attr('groupings'),
  performers: DS.attr('performers'),
  geos: DS.attr('geos'),
});
