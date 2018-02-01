import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findAll("job");
  },
  actions: {
    addJob(job){
      this.store.createRecord("job", job);
    }
  }
});
