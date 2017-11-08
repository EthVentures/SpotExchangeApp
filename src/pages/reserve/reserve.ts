import { Component, ViewChild, ElementRef, ApplicationRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MockDataService } from '../../services/mock.data.service';
import { DetailsPage } from '../details/details';
import { AppConfig } from '../../config/app.config';
import { AuthService } from '../../services/auth.service';
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';

 import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {

    //@ViewChild('map') mapElement: ElementRef;
    //map: any;

    lat: number = 41.890713;
    lng: number = -87.624325;
    zoom: number = 16;
    markers:any;
    polys:any;
    loaded: boolean = false;
    paths:any;
    searchQuery:any;
    isRunningGEO:any;
    placedetails: any;
    address:any = {
        place: '',
        set: false,
    };
    placesService:any;

    constructor(public modalCtrl: ModalController,public authService:AuthService,public navCtrl: NavController, public geolocation: Geolocation, public mockdata:MockDataService,public appConfig:AppConfig) {
      this.markers = [];
      this.polys = mockdata.getSpots();
      //console.log(this.polys);
      this.searchQuery = '';
      this.isRunningGEO = false;
    }

    search(event) {
      console.log(event);
    }

    showModal() {
        // reset
        this.reset();
        let modal = this.modalCtrl.create(ModalAutocompleteItems);
        modal.onDidDismiss(data => {
            if(data){
                this.searchQuery = data.description;
                this.getPlaceDetail(data.place_id);
            }
        })
        modal.present();
    }

    private reset() {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;
    }

    private initPlacedetails() {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short:'', long:'' },
                street_number: { set: false, short:'', long:'' },
                sublocality_level_1: { set: false, short:'', long:'' },
                locality: { set: false, short:'', long:'' },
                administrative_area_level_2: { set: false, short:'', long:'' },
                administrative_area_level_1: { set: false, short:'', long:'' },
                country: { set: false, short:'', long:'' },
                postal_code: { set: false, short:'', long:'' },
                postal_code_suffix: { set: false, short:'', long:'' },
            }
        };
    }

    location() {

      this.isRunningGEO = true;
      if(navigator.geolocation){
      this.geolocation.getCurrentPosition().then((position) => {
        this.isRunningGEO = false;
        console.log(position);
        this.markers = [];
        var corrs = position.coords;
        this.lat = corrs.latitude;
        this.lng = corrs.longitude;

        this.mockdata.parkwhizSpot(this.lat, this.lng).subscribe(data => {
            for (var i = 0; i < data.length; i++) {
              var base = data[i];
              var item = base._embedded['pw:location'];
              var location = item.entrances[0].coordinates;

              var price = 0;
              var purchase = base.purchase_options;
              if (purchase.length > 0) {
                price = parseFloat(purchase[0].price.USD);
              }

              var itemLatLng = {lat: location[0], lng: location[1], icon:'assets/images/theirs.png',rate:price, address:item.address1, name:item.name };
              itemLatLng['covered'] = false;
              itemLatLng['valet'] = false;
              itemLatLng['covered'] = false;
              itemLatLng['selfPark'] = false;
              itemLatLng['inOutAllowed'] = false;
              itemLatLng['handicapAccessible'] = false;
              this.markers.push(itemLatLng);
            }
            //console.log(this.markers);
            this.loaded = true;
          });

        if (this.appConfig.NO_FAKE_SWITCH) {

        this.authService.getSpots().subscribe(
          data => {
            //console.log(data);
            if (data.success) {
              var spots = data.spots;
              for (var i = 0; i < spots.length; i++) {
                //console.log(spots[i]);
                var cords = spots[i];
                var item = JSON.parse(cords.coordinates);
                item['icon'] = 'assets/images/ours.png';
                item['name'] = '';
                item['address'] = cords.address.street + ' ' + cords.address.city + ' ' + cords.address.state ;
                item['rate'] = cords.ratePerHour;
                item['valet'] = cords.features.valet;
                item['covered'] = cords.features.covered;
                item['selfPark'] = cords.features.selfPark;
                item['inOutAllowed'] = cords.features.inOutAllowed;
                item['handicapAccessible'] = cords.features.handicapAccessible;
                this.markers.push(item);
              }
            }
          },
          err => {
            this.isRunningGEO = false;
            console.log(err);
          },
          () => console.log('')
        );
        }


      },
      err => {
        this.isRunningGEO = false;
        alert("Location could not be found!");
      });
    }
  }

    ionViewDidLoad(){
      //this.loadMap();
      this.mockdata.parkwhizSpot(this.lat, this.lng).subscribe(data => {
          for (var i = 0; i < data.length; i++) {
            var base = data[i];
            var item = base._embedded['pw:location'];
            var location = item.entrances[0].coordinates;

            var price = 0;
            var purchase = base.purchase_options;
            if (purchase.length > 0) {
              price = parseFloat(purchase[0].price.USD);
            }

            var itemLatLng = {lat: location[0], lng: location[1], icon:'assets/images/theirs.png',rate:price, address:item.address1, name:item.name };
            itemLatLng['covered'] = false;
            itemLatLng['valet'] = false;
            itemLatLng['covered'] = false;
            itemLatLng['selfPark'] = false;
            itemLatLng['inOutAllowed'] = false;
            itemLatLng['handicapAccessible'] = false;
            this.markers.push(itemLatLng);
          }
          //console.log(this.markers);
          this.loaded = true;
      });

      if (this.appConfig.NO_FAKE_SWITCH) {

      this.authService.getSpots().subscribe(
        data => {
          //console.log(data);
          if (data.success) {
            var spots = data.spots;
            for (var i = 0; i < spots.length; i++) {
              //console.log(spots[i]);
              var cords = spots[i];
              var item = JSON.parse(cords.coordinates);
              item['icon'] = 'assets/images/ours.png';
              item['name'] = '';
              item['address'] = cords.address.street + ' ' + cords.address.city + ' ' + cords.address.state ;
              item['rate'] = cords.ratePerHour;
              item['valet'] = cords.features.valet;
              item['covered'] = cords.features.covered;
              item['selfPark'] = cords.features.selfPark;
              item['inOutAllowed'] = cords.features.inOutAllowed;
              item['handicapAccessible'] = cords.features.handicapAccessible;
              this.markers.push(item);
            }
          }
        },
        err => {
          console.log(err);
        },
        () => console.log('')
      );

      }
    }

    reload() {
      this.mockdata.parkwhizSpot(this.lat, this.lng).subscribe(data => {
          for (var i = 0; i < data.length; i++) {
            var base = data[i];
            var item = base._embedded['pw:location'];
            var location = item.entrances[0].coordinates;

            var price = 0;
            var purchase = base.purchase_options;
            if (purchase.length > 0) {
              price = parseFloat(purchase[0].price.USD);
            }

            var itemLatLng = {lat: location[0], lng: location[1], icon:'assets/images/theirs.png',rate:price, address:item.address1, name:item.name };
            itemLatLng['covered'] = false;
            itemLatLng['valet'] = false;
            itemLatLng['covered'] = false;
            itemLatLng['selfPark'] = false;
            itemLatLng['inOutAllowed'] = false;
            itemLatLng['handicapAccessible'] = false;
            this.markers.push(itemLatLng);
          }
          //console.log(this.markers);
          this.loaded = true;
      });

      if (this.appConfig.NO_FAKE_SWITCH) {

      this.authService.getSpots().subscribe(
        data => {
          //console.log(data);
          if (data.success) {
            var spots = data.spots;
            for (var i = 0; i < spots.length; i++) {
              //console.log(spots[i]);
              var cords = spots[i];
              var item = JSON.parse(cords.coordinates);
              item['icon'] = 'assets/images/ours.png';
              item['name'] = '';
              item['address'] = cords.address.street + ' ' + cords.address.city + ' ' + cords.address.state ;
              item['rate'] = cords.ratePerHour;
              item['valet'] = cords.features.valet;
              item['covered'] = cords.features.covered;
              item['selfPark'] = cords.features.selfPark;
              item['inOutAllowed'] = cords.features.inOutAllowed;
              item['handicapAccessible'] = cords.features.handicapAccessible;
              this.markers.push(item);
            }
          }
        },
        err => {
          console.log(err);
        },
        () => console.log('')
      );

      }
    }

    private getPlaceDetail(place_id:string):void {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                for (var i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];
                    let values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    }
                    if(self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }
                }
                self.lat = self.placedetails['lat'];
                self.lng = self.placedetails['lng'];
                self.reload();
            } else {

            }
        }

    }

    markerClick(item) {
      //console.log(item);

      this.navCtrl.push(DetailsPage, { location: item });
    }

    polyClick(item) {
      //console.log(item.geo[0]);
      this.navCtrl.push(DetailsPage, { location: item.geo[0] });
    }


    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }

    /*

    addToMap(spot) {
      var color = this.getRandomColor();
      var poly = new google.maps.Polygon({
        paths: spot,
        draggable: false,
        editable: false,
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35
      });

      poly.setMap(this.map);
      var self = this.navCtrl;
      google.maps.event.addListener(poly, 'click', function (event) {
        console.log(event);
        var obj = event.latLng;
        console.log(obj.lat() + "," + obj.lng());
        self.push(DetailsPage, { location: obj });
      });
    }

    loadSpots() {
      var data = this.mockdata.getSpots();
      for (var i = 0; i < data.length; i++) {
        this.addToMap(data[i].geo);
      }
    }

    loadMap(){
      console.log("Loading...");
      //this.geolocation.getCurrentPosition().then((position) => {
        var position  = { "latitude":41.890713, "longitude":-87.624325 }

        this.mockdata.parkwhizSpot(position.latitude, position.longitude).subscribe(data => {
            for (var i = 0; i < data.length; i++) {
              var item = data[i]._embedded['pw:location'];
              var location = item.entrances[0].coordinates;
              var itemLatLng = {lat: location[0], lng: location[1]};
              var marker = new google.maps.Marker({
                position: itemLatLng,
                map: this.map,
                title: item.name
              });
              var self = this.navCtrl;
              google.maps.event.addListener(marker, 'click', function (event) {
                var obj = event.latLng;
                console.log(obj.lat() + "," + obj.lng());
                self.push(DetailsPage, { location: obj });
              });
            }
        });
        console.log("Position");
        console.log(position);
        //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let latLng = new google.maps.LatLng(position.latitude, position.longitude);

        //let latLng = new google.maps.LatLng(41,-‎87.623177);

        let mapOptions = {
          center: latLng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


      //}, (err) => {
        //console.log(err);
      //});

        this.loadSpots();
    }*/

}
