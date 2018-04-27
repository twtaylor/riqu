import { Map, TileLayer, Marker } from 'leaflet';
import * as $ from 'jquery';

export default class CollegeMap {
    _id: string;
    _url: string;
    _map: Map;
    
    constructor(id:string, url:string) {
      this._id = id;
      this._url = url;
  
      this._map = null;
    }
  
    initialize(stateSelected:string) {
        // create our map - e.g. california 
        this._map = new Map(this._id);
        
        this._map.setView([35.96, -117.53], 6);
  
        const tl = new TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', 
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(this._map)
  
        // pull down markers
        $.ajax({
          url: this._url + stateSelected,
            success: function(data, textStatus, jqXHR) {
              CollegeMap.createMapMarkers(this._map, data);
            }
        });
     }
  
    static createMapMarkers(map:Map, data:any) {
      for (let pp of data) {
        let marker = new Marker([pp.LATITUDE, pp.LONGITUD])
          .addTo(map);
  
        // create a template for data
        let tmp = '<b>' + pp.INSTNM + "</b><p />" +   
          pp.ADDR + "<p />" + 
          pp.CITY + ", " + pp.STABBR + " " + pp.ZIP + "<p />" + 
          "<a href='//" + pp.WEBADDR + "'>" + pp.WEBADDR + "</a>" + "<p />";
  
        marker.bindPopup(tmp);  
      }
    }
  }