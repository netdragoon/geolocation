interface IGeoOptions 
{    
    enableHighAccuracy: boolean;  
    timeout: any;  
    maximumAge: number;
}

interface ICoordinate
{
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;            
}

interface IGeoLocation
{
    coordinate: ICoordinate;
}

class GeoOptions implements IGeoOptions
{    
    constructor(public enableHighAccuracy: boolean = true, public timeout: any = Infinity, public maximumAge: number = 0)
    {        
    }
}

class Coordinate implements ICoordinate
{    
    constructor(public latitude?: number, public longitude?: number, public accuracy?: number, public altitude?: number, public altitudeAccuracy?: number)
    {    
    }
}


class GeoLocation implements IGeoLocation 
{    
    
    coordinate: ICoordinate;
    
    constructor(public options: IGeoOptions)
    {        
        if (!navigator.geolocation) 
        {        
                    
        }
    }
    
    call(success_callBack, errors_callBack = null)
    {   
        navigator.geolocation.getCurrentPosition(success_callBack, errors_callBack, this.options);
    }
    
}

var options = new GeoOptions(true, Infinity, 0);
var geoLocation = new GeoLocation(options);

geoLocation.call(function(position)
{
   var c = position.coords; 
   var coordinate = new Coordinate(c.latitude, c.longitude, c.accuracy, c.altitude, c.altitudeAccuracy);
   console.log(coordinate);
});
