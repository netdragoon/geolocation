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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.success, this.errors, this.options);
        }
    }
    GeoLocation.prototype.success = function (position) {
        this.coordinate = new Coordinate(position.coords.latitude, position.coords.longitude, position.coords.accuracy, position.coords.altitude, position.coords.altitudeAccuracy);
        console.log(this.coordinate);
    };

    GeoLocation.prototype.errors = function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED: {
                alert("User denied the request");
                break;
            }
            case error.POSITION_UNAVAILABLE: {
                alert("Location information Not available.");
                break;
            }
            case error.TIMEOUT: {
                alert("Request time out");
                break;
            }
            case error.UNKNOWN_ERROR: {
                alert("Unknown error ");
                break;
            }
        }
    };
    return GeoLocation;
})();

var options = new GeoOptions(true, Infinity, 0);
var geoLocation = new GeoLocation(options);
