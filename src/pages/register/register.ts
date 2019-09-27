import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:string;
  username:string;
  password:string;
  constructor(private alertCtrl: AlertController,public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  cadastrar(){


    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    


    let postData =  {
    username:this.username,
    password:this.password,
    email: this.email
 }

    this.http.post("http://ec2-18-228-14-138.sa-east-1.compute.amazonaws.com:8000/api/register/" , postData)
      .subscribe(data => {
        console.log('cadastrado',data);
        let alert = this.alertCtrl.create({
          title: 'Cadastro',
          subTitle: 'Cadastrado com Sucesso!',
          buttons: ['Dismiss']
        });
        alert.present(); 
        this.navCtrl.push('Login1Page'); 

       }, error => {
        console.log(error);
        let alert = this.alertCtrl.create({
          title: 'Cadastro',
          subTitle: 'Tente novamente!',
          buttons: ['Dismiss']
        });
        alert.present();  
      });
  }


}
