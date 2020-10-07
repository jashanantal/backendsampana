import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";
import Db from './app';
import catalogModel from "./entity/catalog";
import { Catalog } from "./entity/catalog";

const db = new Db();
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); 
//app.use( express.static( "public" ) );
app.use('/static', express.static('public'))

app.use(bodyParser.json());
app.set('view engine', 'ejs');
AppRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});
app.get('/messages', function (req, res) {
    var id = req.query.id;
    catalogModel.find({ '_id': id.trim() }, function(err, data) {
        // note that data is an array of objects, not a single object!
	console.log(data[0]);
        res.render('messages.ejs', {
            practice: data[0]
        });
    });
    
  
});

app.get('/song', function (req, res) {
    var id = req.query.id;
    catalogModel.find({ '_id': id.trim() }, function(err, data) {
        // note that data is an array of objects, not a single object!
        res.render('index.ejs', {
            practice: data[0]
        });
    });

    
});




app.listen(3002);
console.log("Express application is up and running on port 3000");


