import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
  title: DS.attr(),
  pay: DS.attr(),
  description: DS.attr(),
  interested: DS.attr(),
  numberInterested: computed("interested", function(){
    return this.get("interested") ? this.get("interested").length : 0;
  })
});
