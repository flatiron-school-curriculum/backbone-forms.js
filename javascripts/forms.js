$(function() {
    var app = {}
    window.app = app;
    var User = Backbone.Model.extend({
        schema: {
            title:      { type: 'Select', options: ['Mr', 'Mrs', 'Ms'] },
            name:       'Text',
            email:      'Text',
            birthday:   'Date',
            password:   'Password',
            notes:      { type: 'List', itemType: 'Text' }
        },

    });
    var user = new User();
    app.user = user;
    var form = new Backbone.Form({
        model: user,
        submitButton: "hello"
    });
    var FormView = Backbone.View.extend({
      template: function() {return form.render()},
      model: user,
      el: $("#root"),
      initialize: function() {
        this.render();
      },
      test: function(e) {
        e.preventDefault()
        debugger
        alert("i got called");
      },
      events: {
          "submit"                : "test"
        },
      render: function() {
        this.$el.append(this.template())
        // this.$el.append(this.template);
      }

    });
    formview = new FormView();

    app.form = form;
    $('body').append(form.el);
    // can i move this click event into a backbone view?
    // $(":submit").click(function(e) {
    //     e.preventDefault();
    //     form.commit();
    // })

    var Sample = Backbone.View.extend({
      template: "<h1>hello</h1>",
      model: user,
      initialize: function() {
        this.listenTo(this.model, "change", this.render);
      },

      render: function() {
        $("body").append(this.template);
      }

    });
    sample = new Sample();
    app.sample = sample;
})