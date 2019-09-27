import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
/**
 * Generated class for the HeroesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {
  token:any;
  email:any;
  nome:any;
  userid:any;
  heroes:any;

  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  async ionViewDidLoad() {
    this.token =  await  this.navParams.get('token');
    this.userid = await  this.navParams.get('id');
    this.nome =   await  this.navParams.get('nome');
    this.email =  await  this.navParams.get('email');
    console.log('ionViewDidLoad HeroesPage');
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token '+this.token
      })
    }
    this.http.get("http://ec2-18-228-14-138.sa-east-1.compute.amazonaws.com:8000/api/heroes/?format=json", headers).subscribe(datax=>{
     this.heroes = datax;
     console.log(datax);
     console.log(this.heroes);
    }, error => {
       console.log(error);
      });
  
  }

}
