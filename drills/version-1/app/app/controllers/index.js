import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {sort} from '@ember/object/computed';

export default Controller.extend({
  sortKey: ["id:asc"],
  jobListings: sort("model", "sortKey"),
  actions: {
    add(job){
      this.send("addJob", job);
    }
  }
});
