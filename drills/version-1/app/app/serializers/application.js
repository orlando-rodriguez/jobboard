import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
    const normalizedPayload = {};
    normalizedPayload[primaryModelClass.modelName] = payload;
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  }
});
