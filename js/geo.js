var GeoOptions = (function () {
    function GeoOptions(enableHighAccuracy, timeout, maximumAge) {
        if (typeof enableHighAccuracy === "undefined") { enableHighAccuracy = true; }
        if (typeof timeout === "undefined") { timeout = Infinity; }
        if (typeof maximumAge === "undefined") { maximumAge = 0; }
        this.enableHighAccuracy = enableHighAccuracy;
        this.timeout = timeout;
        this.maximumAge = maximumAge;
    }
    return GeoOptions;
})();

var Coordinate = (function () {
    function Coordinate(latitude, longitude, accuracy, altitude, altitudeAccuracy) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.accuracy = accuracy;
        this.altitude = altitude;
        this.altitudeAccuracy = altitudeAccuracy;
    }
    return Coordinate;
})();

var GeoLocation = (function () {
    function GeoLocation(options) {
        this.options = options;
        if (!navigator.geolocation) {
        }
    }
    GeoLocation.prototype.call = function (success_callBack, errors_callBack) {
        if (typeof errors_callBack === "undefined") { errors_callBack = null; }
        navigator.geolocation.getCurrentPosition(success_callBack, errors_callBack, this.options);
    };
    return GeoLocation;
})();

var options = new GeoOptions(true, Infinity, 0);
var geoLocation = new GeoLocation(options);

geoLocation.call(function (position) {
    var c = position.coords;
    var coordinate = new Coordinate(c.latitude, c.longitude, c.accuracy, c.altitude, c.altitudeAccuracy);
    console.log(coordinate);
});
