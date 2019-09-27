import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  
  }



  async getToken(user: string, secret:string){
    let retorno: any;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData =  {
      username:user,
      password:secret
    }

     this.http.post("http://127.0.0.1:8000/api-token-auth/" , postData)
    .subscribe( data => {
      console.log('token é',data);

        retorno =  data;
       console.log(retorno.token);
       return  retorno;
     }, error => {
      console.log(error);
    });
   
        
    
    
  }



}

