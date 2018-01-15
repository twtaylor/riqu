import { NextFunction, Request, Response, Router } from "express";
import { BaseApiRoute } from "./base";
import { IModel } from '../orm/models';
import { IHdModel } from '../orm/models/hd';

/**
 * /api/hd route
 *
 * @class Hd API
 */
export class HdRoute extends BaseApiRoute {

  protected model: IModel;

    /**
     * Create the routes.
     *
     * @class HdRoute
     * @method create
     * @static
     */
    public static create(router: Router, model: IModel) {
      //log
      console.log("[IndexRoute::create] Creating hd route.");

      let hdRoute = new HdRoute(model);
  
      //add all hds route
      router.get("/api/hds", (req: Request, res: Response, next: NextFunction) => {
        hdRoute.renderAllHds(req, res, next);
      });

      //add hds route
      router.get("/api/hd:hdId", (req: Request, res: Response, next: NextFunction) => {
        hdRoute.renderHd(req, res, next);
      });
    }
  
    /**
     * Constructor
     *
     * @class HdRoute
     * @constructor
     */
    constructor(model: IModel) {
      super();

      this.model = model;
    }
  
    /**
     * All hds api route
     *
     * @class HdRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public renderAllHds(req: Request, res: Response, next: NextFunction) {
      // retrieve all hds from our repository
      this.model.hd.find(function(err: any, res:IHdModel[]){
          // render returned objects
          let body:any = 'error detected';

          if (!err) {
            body = res;
          }

          // render out our json
          this.renderJson(req, res, body);
      }); 
  
      
    }

    /**
     * All hds api route
     *
     * @class HdRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public renderHd(req: Request, res: Response, next: NextFunction) {
        // retrieve all hds from our repository
        
    
        //render template
        // this.renderJson(req, res, "index", options);
      }
  }