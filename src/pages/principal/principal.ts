import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  username:string;
  password:string;
  token: any;
  userid: any;
  nome: any;
  email: any;
  constructor(private alertCtrl: AlertController,public http: HttpClient,private database: DatabaseProvider,public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  async login(){
    let retorno: any;
  //  var headers = new Headers();
  //  headers.append("Accept", 'application/json');
   // headers.append('Content-Type', 'application/json' );

    let postData =  {
      username:this.username,
      password:this.password
    }

      this.http.post("http://ec2-18-228-14-138.sa-east-1.compute.amazonaws.com:8000/api-token-auth/" , postData)
    .subscribe( data => {
      console.log('token é',data);

        retorno =  data;
       console.log(retorno.token);
       this.token = retorno.token;
       console.log('token', this.token);
       
      // headers.append('Authorization','Token '+this.token);
      // let options = new RequestOptions({headers: headers});

       const headers = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Token '+this.token
        })
      }
       this.http.get("http://ec2-18-228-14-138.sa-east-1.compute.amazonaws.com:8000/api/userid/?format=json", headers).subscribe(datax=>{
         console.log(datax);
         var id: any = datax;
         console.log(id[0].id);
         this.userid = id[0].id;
         console.log('userid', this.userid);
         this.nome = id[0].username;
         this.email = id[0].email;
         this.navCtrl.push('UserPage', {
          token: this.token,
          id: this.userid,
          nome: this.nome,
          email: this.email,
        });
               }, error => {
                 console.log(error);
               });
     
     }, error => {
      console.log(error);
      let alert = this.alertCtrl.create({
        title: 'OPS!',
        subTitle: 'Essa conta não tem acesso aos incríveis heróis da SHIELD',
        buttons: ['Dismiss']
      });
      alert.present();
      
    });
   
  }
  register(){
    this.navCtrl.push('RegisterPage');
  }
  

}
