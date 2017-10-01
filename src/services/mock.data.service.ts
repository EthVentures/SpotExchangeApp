import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Http, Response } from '@angular/http';
import { AppConfig } from '../config/app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class MockDataService {


  constructor(public zone: NgZone,public http:Http,public appConfig:AppConfig) {

  }

  public parkwhizSpot(lat,long) {
    return this.http.get('http://api.parkwhiz.com/v4/quotes/?q=coordinates:'+lat+','+long+'&start_time=2017-12-23T12:00&end_time=2017-12-23T20:00&api_key=' + this.appConfig.PARKWHIZ_API_KEY).map(res => res.json());
  }

  public getSpots() {

    var data = [
      {"spotid":"1","geo":
        [{'lat':41.89052,'lng':-87.62655}, {'lat':41.89082,'lng':-87.62655},{'lat':41.89084,'lng':-87.62542},{'lat':41.89024,'lng':-87.6254},{'lat':41.89024,'lng':-87.6257},{'lat':41.89053,'lng':-87.6257}]
      }
    ];
    return data;
  }

  /*
  {"spotid":"2","geo":
    [{'lat':,'lng':} new google.maps.LatLng(41.89052,-87.62655),{'lat':,'lng':} new google.maps.LatLng(41.89082,-87.62655),{'lat':,'lng':} new google.maps.LatLng(41.89084,-87.62542),{'lat':,'lng':} new google.maps.LatLng(41.89024,-87.6254),{'lat':,'lng':} new google.maps.LatLng(41.89024,-87.6257), new google.maps.LatLng(41.89053,-87.6257)]
  },
  {"spotid":"3","geo":
    [new google.maps.LatLng(41.88969,-87.62899), new google.maps.LatLng(41.89,-87.62899), new google.maps.LatLng(41.89,-87.62863), new google.maps.LatLng(41.88987,-87.62861), new google.maps.LatLng(41.88976,-87.62862), new google.maps.LatLng(41.88969,-87.62865)]
  },
  {"spotid":"4","geo":
    [new google.maps.LatLng(41.89028,-87.62267), new google.maps.LatLng(41.89086,-87.62267), new google.maps.LatLng(41.89086,-87.62212), new google.maps.LatLng(41.89054,-87.6221), new google.maps.LatLng(41.89028,-87.62209), new google.maps.LatLng(41.89028,-87.62233)]
  },
  {"spotid":"5","geo":
    [new google.maps.LatLng(41.89043,-87.62147), new google.maps.LatLng(41.89088,-87.62146), new google.maps.LatLng(41.89088,-87.62051), new google.maps.LatLng(41.89063,-87.62046), new google.maps.LatLng(41.89045,-87.62051), new google.maps.LatLng(41.89043,-87.62105)]
  },
  {"spotid":"6","geo":
    [new google.maps.LatLng(41.89188,-87.62091), new google.maps.LatLng(41.89253,-87.62094), new google.maps.LatLng(41.89254,-87.62034), new google.maps.LatLng(41.89229,-87.6203), new google.maps.LatLng(41.89212,-87.62034), new google.maps.LatLng(41.8919,-87.62033)]
  },
  {"spotid":"7","geo":
    [new google.maps.LatLng(41.89185,-87.62252), new google.maps.LatLng(41.89214,-87.62254), new google.maps.LatLng(41.89213,-87.62179), new google.maps.LatLng(41.892,-87.62179), new google.maps.LatLng(41.89204,-87.62178), new google.maps.LatLng(41.89186,-87.62177)]
  },
  {"spotid":"8","geo":
    [new google.maps.LatLng(41.89255,-87.6324), new google.maps.LatLng(41.89314,-87.63241), new google.maps.LatLng(41.89313,-87.63185), new google.maps.LatLng(41.89282,-87.63181), new google.maps.LatLng(41.89301,-87.63187), new google.maps.LatLng(41.89255,-87.63187)]
  },
  {"spotid":"9","geo":
    [new google.maps.LatLng(41.88519,-87.62618), new google.maps.LatLng(41.88537,-87.62619), new google.maps.LatLng(41.88536,-87.62562), new google.maps.LatLng(41.88527,-87.62561), new google.maps.LatLng(41.8852,-87.62564), new google.maps.LatLng(41.88518,-87.62593)]
  },
  {"spotid":"10","geo":
    [new google.maps.LatLng(41.8894,-87.62785), new google.maps.LatLng(41.88965,-87.62787), new google.maps.LatLng(41.88967,-87.62679), new google.maps.LatLng(41.88946,-87.62679), new google.maps.LatLng(41.88941,-87.62694), new google.maps.LatLng(41.8894,-87.62761)]
  }*/
}
