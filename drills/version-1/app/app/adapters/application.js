import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  urlForFindAll(modelName, snapshot){
    return "listings.json";
  }
});
