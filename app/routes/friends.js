import Ember from 'ember';

export default Ember.Route.extend({
  actions: { 
    save: function(){
      console.log("+--- sve action bubbled up to friends route");
      return true;
    },
    cancel: function(){
      console.log("+--- cancel action bubbled up to friends route");
      return true;
    }
  }
});
