import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage({name: 'welcome-page'})
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  nextPage = 'HomePage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }


  goTo() {
  	this.navCtrl.push(HomePage);
  }
}
