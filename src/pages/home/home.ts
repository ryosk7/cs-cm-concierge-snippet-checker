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

  constructor(public navCtrl: NavController) {
  }

}
