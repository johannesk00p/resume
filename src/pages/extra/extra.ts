import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExtraPage page.
 *
 * Created by Johannes Koop. 1601795.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
  }

}
