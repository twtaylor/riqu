"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leaflet_1 = require("leaflet");
const $ = require("jquery");
class CollegeMap {
    constructor(id, url) {
        this._id = id;
        this._url = url;
        this._map = null;
    }
    initialize(stateSelected) {
        this._map = new leaflet_1.Map(this._id);
        this._map.setView([35.96, -117.53], 6);
        const tl = new leaflet_1.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(this._map);
        $.ajax({
            url: this._url + stateSelected,
            success: function (data, textStatus, jqXHR) {
                CollegeMap.createMapMarkers(this._map, data);
            }
        });
    }
    static createMapMarkers(map, data) {
        for (let pp of data) {
            let marker = new leaflet_1.Marker([pp.LATITUDE, pp.LONGITUD])
                .addTo(map);
            let tmp = '<b>' + pp.INSTNM + "</b><p />" +
                pp.ADDR + "<p />" +
                pp.CITY + ", " + pp.STABBR + " " + pp.ZIP + "<p />" +
                "<a href='//" + pp.WEBADDR + "'>" + pp.WEBADDR + "</a>" + "<p />";
            marker.bindPopup(tmp);
        }
    }
}
exports.default = CollegeMap;
//# sourceMappingURL=collegemap.js.map