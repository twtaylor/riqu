import { NextFunction, Request, Response, Router } from "express";
import { BaseApiRoute } from "./base";
import { IModel } from '../orm/models';
import { IIcModel } from '../orm/models/ic';

/**
 * /api/ic route
 *
 * @class IC API
 */
export class IcRoute extends BaseApiRoute {

    /**
     * Create the routes.
     *
     * @class IcRoute
     * @method create 
     * @static
     */
    public static create(router: Router, model: IModel) {
      //log
      console.log("[IcRoute::create] Creating ic route.");

      var icRoute = new IcRoute(model);

      // add all ics route
      router.get("/api/ics", (req: Request, res: Response, next: NextFunction) => {
        icRoute.renderAllIcs(req, res, next);
      });

      console.log("[IcRoute::create] Creating ic by query route.");

      // hds by state route
      router.get("/api/ic", (req: Request, res: Response, next: NextFunction) => {
        icRoute.renderByQuery(req, res, next);
      }); 
    }
  
    /**
     * Constructor
     *
     * @class IcRoute
     * @constructor
     */
    constructor(model:IModel) {
      super(model);
    }
  
    /**
     * All ics api route
     *
     * @class IcRoute
     * @method renderAllIcs
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public renderAllIcs(req: Request, res: Response, next: NextFunction) {
      this.renderModelWithParams<IIcModel>(req, res, next, {}, 'Error in fetching all ICs');
    }

    /**
     * Hds by query route
     *
     * @class IcRoute
     * @method renderByQuery
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public renderByQuery(req: Request, res: Response, next: NextFunction) {
      var unitId:String = '';

      // process our state from the request
      if (req.query.id) {
        unitId = String(req.query.id);
      }

      this.renderModelWithParams<IIcModel>(req, res, next, { 'UNITID': unitId }, 'Error in fetching unit id for ic');
    }
}