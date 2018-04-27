// From the example at: http://brianflove.com/2016/11/11/typescript-2-express-mongoose-mocha-chai/ 
// TT 1-7-2018 

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

// require - we don't don't have TS for this
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import mongoose = require("mongoose"); 

import graphqlHTTP = require('express-graphql');
import { buildSchema } from 'graphql';

// routes
import { IndexRoute } from './routes/index';
import { HdRoute } from './api/hd';
import { IcRoute } from './api/ic';

//models
import { IModel } from "./orm/models"; //import IModel
import { IHdModel } from "./orm/models/hd"; 
import { IIcModel } from "./orm/models/ic"; 

// schemas
import { hdSchema } from "./orm/schemas/hd"; 
import { icSchema } from "./orm/schemas/ic"; 

/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public app: express.Application;
  
    private model: IModel; //an instance of IModel
  
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
      return new Server();
    }
  
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
      //instance defaults
      this.model = Object(); //initialize this to an empty object
  
      //create expressjs application
      this.app = express();
  
      //configure application
      this.config();
  
      //add routes
      this.routes();
  
      //add api
      this.api();
    }

    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    public api() {
        let router: express.Router;
        router = express.Router();

         // ApiRoutes
         HdRoute.create(router, this.model);
         IcRoute.create(router, this.model);

        //use router middleware
        this.app.use(router);
    }

    /**
     * Create and return Router.
     *
     * @class Server
     * @method config
     * @return void
     */
    private routes() {
        let router: express.Router;
        router = express.Router();

        //IndexRoute
        IndexRoute.create(router);
       
        //use router middleware
        this.app.use(router);
    }

  
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
      // TODO: put in a config file at some pt
      const MONGODB_CONNECTION: string = "mongodb://localhost:27017/riqu";
  
      // add static paths
      this.app.use(express.static(path.join(__dirname, '..', '..', "wwwroot")));

      // configure pug
      this.app.set("views", path.join(__dirname, "views"));
      this.app.set("view engine", "pug");
   
      // mount logger
      this.app.use(logger("dev")); 
  
      // mount json form parser
      this.app.use(bodyParser.json());
  
      //mount query string parser
      this.app.use(bodyParser.urlencoded({
        extended: true
      }));
  
      // mount cookie parker
      this.app.use(cookieParser("SECRET_GOES_HERE"));
  
      // mount override
      this.app.use(methodOverride());
  
      //use q promises
      global.Promise = require("q").Promise;
      mongoose.Promise = global.Promise;
  
      //connect to mongoose
      let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
  
      //create models
      this.model.hd = connection.model<IHdModel>("hd", hdSchema, "hd2016");
      this.model.ic = connection.model<IIcModel>("ic", hdSchema, "ic2016_ay");
  
      // catch 404 and forward to error handler
      this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
          err.status = 404;
          next(err);
      });
  
      //error handling
      this.app.use(errorHandler());
    }
  }
