import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

declare var google: any;

@Component({
    selector: 'page-modal-autocomplete-items',
    templateUrl: 'modal-autocomplete-items.html'
})
export class ModalAutocompleteItems implements OnInit{

    autocompleteItems: any;
    autocomplete: any;
    acService:any;
    placesService: any;

    constructor(public viewCtrl: ViewController) {
    }

    ngOnInit() {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    chooseItem(item: any) {
        this.viewCtrl.dismiss(item);
    }

    updateSearch() {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let self = this;
        let config = {
            types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: { country: 'US' }
        }
        this.acService.getPlacePredictions(config, function (predictions, status) {
            self.autocompleteItems = [];
            if (predictions != null) {
              predictions.forEach(function (prediction) {
                  self.autocompleteItems.push(prediction);
              });
            }
        });
    }

}
