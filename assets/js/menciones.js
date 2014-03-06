var cb = new Codebird;
cb.setConsumerKey("¨{vlaue}", "{vlaue}");
cb.setToken("{vlaue}", "{vlaue}");
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

function assignCase (value) {
  
}
