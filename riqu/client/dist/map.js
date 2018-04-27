"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leaflet_1 = require("leaflet");
class default_1 {
    constructor(id, url) {
        this._id = id;
        this._url = url;
        this._map = null;
    }
    get map() {
        return this._map;
    }
    set map(m) {
        this._map = m;
    }
    initialize(stateSelected) {
        this._map = new leaflet_1.Map(this._id);
        this._map.setView([35.96, -117.53], 6);
        const tl = this._ljs.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(this._map);
        const self = this;
        $.ajax({
            url: self._url + stateSelected,
            success: function (data, textStatus, jqXHR) {
                leaflet_1.Map.createMapMarkers(self._map, data, self._ljs);
            }
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=map.js.map