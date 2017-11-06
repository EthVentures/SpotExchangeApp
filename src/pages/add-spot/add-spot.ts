import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';

declare var google:any;

@Component({
  selector: 'page-add-spot',
  templateUrl: 'add-spot.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AddSpotPage implements OnInit {
  address:any = {
      place: '',
      set: false,
  };
  placesService:any;
  map: any;
  markers = [];
  placedetails: any;
  showSpinner:any;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
    this.showSpinner = false;
  }

  ngOnInit() {
      this.initMap();
      this.initPlacedetails();
  }

  create() {
    this.showSpinner = true;
    var self = this;
    setTimeout(function(){
      self.navCtrl.pop();
    }, 2000);
  }

  showModal() {
      // reset
      this.reset();
      let modal = this.modalCtrl.create(ModalAutocompleteItems);
      modal.onDidDismiss(data => {
          if(data){
              this.address.place = data.description;
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

  private getPlaceDetail(place_id:string):void {
      var self = this;
      var request = {
          placeId: place_id
      };
      this.placesService = new google.maps.places.PlacesService(this.map);
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
              self.map.setCenter(place.geometry.location);
              self.createMapMarker(place);

          }else{

          }
      }
      self.address.set = true;
  }

  private initMap() {
      var point = {lat: 41.890713, lng: -87.624325};
      let divMap = (<HTMLInputElement>document.getElementById('maptop'));
      this.map = new google.maps.Map(divMap, {
          center: point,
          zoom: 15,
          disableDefaultUI: true,
          draggable: false,
          zoomControl: true
      });
  }

  private createMapMarker(place:any):void {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: this.map,
        position: placeLoc
      });
      this.markers.push(marker);
  }

  private initPlacedetails() {
      this.placedetails = {
          address: '',
          lat: '',
          lng: '',
          components: {
              route: { set: false, short:'', long:'' },                           // calle
              street_number: { set: false, short:'', long:'' },                   // numero
              sublocality_level_1: { set: false, short:'', long:'' },             // barrio
              locality: { set: false, short:'', long:'' },                        // localidad, ciudad
              administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido
              administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia
              country: { set: false, short:'', long:'' },                         // pais
              postal_code: { set: false, short:'', long:'' },                     // codigo postal
              postal_code_suffix: { set: false, short:'', long:'' },              // codigo postal - sufijo
          }
      };
  }
}
