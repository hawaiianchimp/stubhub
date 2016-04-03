import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://api.stubhub.com',
  namespace: 'search/catalog/events/v3',

  /**
   * Find Record
   * @param store
   * @param type
   * @param id
   * @param snapshot
   * @returns {*|Promise}
   */
  findRecord(store, type, id, snapshot) {
    // Do your thing here
    return this.ajax(this.buildURL(type.typeKey, id), 'GET');
  },

  /**
   * Finds All
   * @param store
   * @param type
   * @param sinceToken
   * @param snapshotRecordArray
   * @returns {*|Promise}
   */
  findAll(store, type, sinceToken, snapshotRecordArray) {
    // Do your thing here
    var query;

    if (sinceToken) {
      query = { since: sinceToken };
    }

    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: query });
  },

  /**
   * Run a Query
   * @param store
   * @param type
   * @param query
   * @param recordArray
   * @returns {*|Promise}
   */
  query(store, type, query, recordArray) {
    // Do your thing here
    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: query });
  },
});
