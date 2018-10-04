import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-show-map',
    templateUrl: 'show-map.html'
})
export class ShowMapPage {
    public location: string = '';

    constructor(private navParams: NavParams, private viewCtrl: ViewController) {
        this.location = this.navParams.get('location');
    }

    ionViewDidLoad() {
        var html = '<iframe style="height: 90vh;" width="100%" height="99%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBoh0qH9lH2ULZ5M_3FT7KdpIBu0R0seOg&q=' + this.location + '" allowfullscreen></iframe>';
        document.getElementById('map').innerHTML = html;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}