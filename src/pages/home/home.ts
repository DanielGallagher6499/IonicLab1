import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openUlsterPage(){
    this.navCtrl.push('UlsterPage');

  }//Ulster Page

  openMunsterPage(){

    this.navCtrl.push('MunsterPage');

  }//Munster Page

  openConnaughtPage(){

    this.navCtrl.push('ConnaughtPage');

  }//Connaught Page

  openLeinsterPage(){

    this.navCtrl.push('LeinsterPage');

  }//Connaught Page

}
