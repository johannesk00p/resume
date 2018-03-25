import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; 

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the ExtraPage page.
 *
 * Created by Johannes Koop. 1601795.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn() {
  	this.navCtrl.push(LoginPage);
  }

  register() {
  	this.navCtrl.push(RegisterPage);
  }


}