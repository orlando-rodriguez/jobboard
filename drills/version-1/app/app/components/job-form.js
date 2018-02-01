import Component from '@ember/component';

export default Component.extend({
  tagName: "aside",
  elementId: "side-bar",
  actions: {
    add(event){
      event.preventDefault();
      this.sendAction("add", {
        title: this.get("title"),
        pay: this.get("pay"),
        description: this.get("description")
      });
    }
  }
});
