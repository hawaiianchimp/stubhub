import DS from 'ember-data';

export default DS.Model.extend({
  minPrice: DS.attr('number'),
  maxPrice: DS.attr('number'),
  totalTickets: DS.attr('number'),
  totalPostings: DS.attr('number'),
  totalListings: DS.attr('number'),
  currencyCode: DS.attr('string')
});
