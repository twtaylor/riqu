// something.ts

export default class Map {
    // constructor(id, url, leafletJs) {
    //   this._id = id;
    //   this._url = url;
    //   this._ljs = leafletJs;
  
    //   this._map = null;
    // }
  
    // get map() {
    //   return this._map;
    // }
  
    // set map(m) {
    //   this._map = m;
    // }
  
    // initialize(stateSelected) {
    //     // create our map - e.g. california 
    //     this._map = new this._ljs.Map(this._id);
        
    //     this._map.setView([35.96, -117.53], 6);
  
    //     const tl = this._ljs.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', 
    //         maxZoom: 18,
    //         id: 'mapbox.streets'
    //     }).addTo(this._map)
  
    //     // pull down markers
    //     const self = this;
    //     $.ajax({
    //       url: self._url + stateSelected,
    //         success: function(data, textStatus, jqXHR) {
    //           Map.createMapMarkers(self._map, data, self._ljs);
    //         }
    //     });
    //  }
  
    // static createMapMarkers(map, data, L) {
    //   for (let pp of data) {
    //     let marker = L.marker([pp.LATITUDE, pp.LONGITUD])
    //       .addTo(map);
  
    //     // create a template for data
    //     let tmp = '<b>' + pp.INSTNM + "</b><p />" +   
    //       pp.ADDR + "<p />" + 
    //       pp.CITY + ", " + pp.STABBR + " " + pp.ZIP + "<p />" + 
    //       "<a href='//" + pp.WEBADDR + "'>" + pp.WEBADDR + "</a>" + "<p />";
  
    //     marker.bindPopup(tmp);  
    //   }
    // }
  }