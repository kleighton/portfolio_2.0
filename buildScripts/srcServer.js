import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import favicon from 'serve-favicon';

/*eslint-disable no-console*/

const port = 3001;
const app = express();
app.use(express.static('dist'));
app.use(express.static('src/assets'));

webpack(config).run((err) => {
    if (err) {
      console.log(err);
      return 1;
    }
    return 0;
  });

  app.use(favicon(path.join(__dirname , '../src/assets/favicon.png')));
  
  app.get('/',function(req,res){
      res.sendFile(path.join(__dirname,'../dist/index.html'));
  });
  app.get('/dashboard',function(req,res){
      res.sendFile(path.join(__dirname,'../dist/index.html'));
  });
  app.get('/settings',function(req,res){
      res.sendFile(path.join(__dirname,'../dist/index.html'));
  });
  app.get('/fundraisers',function(req,res){
      res.sendFile(path.join(__dirname,'../dist/index.html'));
  });
  app.get('/people',function(req,res){
      res.sendFile(path.join(__dirname,'../dist/index.html'));
  });

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});