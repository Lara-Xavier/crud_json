import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/model';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //addemployee
  addemployee(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/posts",data)
  }
  //get employee
  getemployee(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }

  deleteemployee(id:number){
    return this.http.delete<number>("http://localhost:3000/posts/"+id)
  }


//********** */ or other ways of  delete code ******************

// delete(id: any): Observable<any> {
//   var API_URL = `${"http://localhost:3000/posts"}/${id}`;
//   return this.http.delete(API_URL).pipe(
//   )
// }

  //fetch data

  fetchdata(id:number){
    return this.http.get<datamodel>("http://localhost:3000/posts/"+id)

  }
  updateemployee(data:datamodel,id:number){

    return this.http.put<datamodel>("http://localhost:3000/posts/"+id,data)
  }

}
