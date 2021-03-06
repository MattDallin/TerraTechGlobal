var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
  locals.data = {};

  view.on('init', function(next) {

    var q = keystone.list('Project').model.find().where('state', 'published').sort('-publishedDate').limit('2');

    q.exec(function(err, results) {
      locals.data.projects = results;
      console.log(locals);

      next(err);
    });

  });
  // Render the view
	view.render('index');
	
};
