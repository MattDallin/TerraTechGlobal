var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.data = {};
  // Set locals
  locals.section = 'about';

  view.on('init', function(next) {

    var q = keystone.list('User').model.find();

    q.exec(function(err, results) {
      locals.data.users = results;
      next(err);
    });

  });


  view.render('about');

};
