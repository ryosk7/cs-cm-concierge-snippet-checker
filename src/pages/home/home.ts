import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Concierge } from '../../app/concierge'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  concierge: Concierge = {
    id: 1,
    content: ''
  };

  defaultContent: string = ""

  constructor(public navCtrl: NavController) {
    this.defaultContent = "<h3>みなさーーん!!</h3><br><p><b>コンシェルジュだよ！🐥</b></p><br><font color='green'>HTMLタグに対応したよ！</font>"
  }

}
