import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';import { CvPage } from './../cv/cv';
import { ExtraPage } from './../extra/extra';
import { AboutPage } from './../about/about';
import { ProjectPage } from './../project/project';
import { ContactPage } from './../contact/contact';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'AboutPage';
  tab2Root: any = 'CvPage';
  tab3Root: any = 'ProjectPage';
  tab4Root: any = 'ExtraPage';
  tab5Root: any = 'ContactPage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}