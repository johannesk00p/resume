
import { TabsPage } from './../tabs/tabs';
import { CvPage } from './../cv/cv';
import { ExtraPage } from './../extra/extra';
import { AboutPage } from './../about/about';
import { ProjectPage } from './../project/project';
import { ContactPage } from './../contact/contact';
import { WelcomePage } from './../welcome/welcome';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'About', pageName: 'AboutPage', tabComponent: 'AboutPage', index: 0, icon: 'people' },
    { title: 'CV', pageName: 'CvPage', tabComponent: 'CvPage', index: 1, icon: 'briefcase' },
    { title: 'Project Work', pageName: 'ProjectPage', tabComponent: 'ProjectPage', index: 2, icon: 'school' },
    { title: 'Extra Curricular Activities', pageName: 'ExtraPage', tabComponent: 'ExtraPage', index: 3, icon: 'heart-outline' },
    { title: 'Contact', pageName: 'ContactPage', tabComponent: 'ContactPage', index: 4, icon: 'call' },
    
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  signOut() {
  	this.navCtrl.push(WelcomePage);}
 
}