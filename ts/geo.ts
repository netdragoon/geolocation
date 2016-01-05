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
        if (navigator.geolocation) 
        {        
            navigator.geolocation.getCurrentPosition(this.success, this.errors, this.options);           
        }
    }
    
    success(position)
    {   
        this.coordinate = new Coordinate(position.coords.latitude,position.coords.longitude,position.coords.accuracy,position.coords.altitude, position.coords.altitudeAccuracy);
        console.log(this.coordinate);        
    }
    
    errors(error)  
    {  
        switch (error.code)  
        {  
            case error.PERMISSION_DENIED: 
                {
                    alert("User denied the request");  
                    break;  
                }
            case error.POSITION_UNAVAILABLE: 
                {
                    alert("Location information Not available.");  
                    break;
                }  
            case error.TIMEOUT: 
                {
                    alert("Request time out");  
                    break;
                }  
            case error.UNKNOWN_ERROR:
                {
                    alert("Unknown error ");
                    break;    
                }
        }  
    }   
    
}

var options = new GeoOptions(true, Infinity, 0);
var geoLocation = new GeoLocation(options);
