import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
userid:number;
token: any;
nome: any;
email: any;
//http://ec2-18-228-14-138.sa-east-1.compute.amazonaws.com:8000
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.token = this.navParams.get('token');
    this.userid = this.navParams.get('id');
    this.nome = this.navParams.get('nome');
    this.email = this.navParams.get('email');
    console.log(this.email,this.navParams,this.userid);
    
  
  }

heroes(){

  this.navCtrl.push('HeroesPage', {
    userid: this.userid,
    token:  this.token ,
    nome:   this.nome  ,
    email:  this.email ,
    
  });

}
  

}
