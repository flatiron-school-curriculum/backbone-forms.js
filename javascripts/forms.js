$(function() {
    var app = {}
    window.app = app;
    var User = Backbone.Model.extend({
        schema: {
            title:      { type: 'Select', options: ['Mr', 'Mrs', 'Ms'] },
            name:       'Text',
            email:      { validators: ['required', 'email'] },
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
    }).render();
    app.form = form;
    $('body').append(form.el);
    $(":submit").click(function(e) {
        e.preventDefault();
        form.commit();
    })

    var Sample = Backbone.View.extend({

      className: "document-row",
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