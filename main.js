var derby = require('derby');
derby.use(require('./ui'));
var app = derby.createApp(module);

app.ready(function(model) {
  // model.on('set','dbName',function(path,object){
  // });
  model.on('set','collectionBox', function(path,obj){
    // console.log(app.page);
    app.page.render();
  });
  model.on('set','collections',function(path,obj){
    // console.log('!',model.get('collections'), app);
    app.page.render();
  });

  app.changeDatabase = function(e, element, next) {
    // console.log('!', element, typeof element); //.find('a').attr('data-value'));
    app.model.set('dbName', $(element).find('a').attr('data-value')); //TODO: e.target.dataset.value
    // console.log(app.model.get('dbName'));
    next();
  };
  app.changeCollection = function (e, element, next){
    //app.model === model YAY!
    app.model.set('collectionName',e.target.dataset.value);
    next();
  }
});
