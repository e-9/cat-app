
var cb = new Codebird;
cb.setConsumerKey("8yzY7Zgs01XjibpG7XceBQ", "IDjsaIM6Q34M2OIwIHm8Bc9KEQHBRxDqoAEB81IgQuk");
cb.setToken("88465140-dPpEMQXl9n5wBFZTLVhLRR21XL4YHT7frDlrSQ46I", "XaeolpyyfydVTTlhQygZofJyCsA8rnWc3MwZmNDxNM");
cb.__call(
    "statuses_mentionsTimeline",
    {},
    function (reply) {
        console.log(reply);

        var App = Ember.Application.create();
        App.ApplicationRoute = Ember.Route.extend({
          model: function() {
            return reply;
          }
        });
    }
);


$(document).ready(function() {
  
});