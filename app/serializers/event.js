import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let dataset = payload.dataset;

    return {
      data: {
        id: dataset.id,
        type: primaryModelClass.modelName,
        attributes: {
          title: dataset.title,
          description: dataset.description,
          eventInfoUrl: dataset.eventInfoUrl,
        }
      }
    };
  }
});
