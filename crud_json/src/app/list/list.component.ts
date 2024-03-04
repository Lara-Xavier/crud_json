import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from '../list/model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public id!:number;
  employeeform!:FormGroup;
 //data:undefined | datamodel[];
 data: datamodel[] = [];
 //data: datamodel[] = [];
 
 

constructor(private formbuilder:FormBuilder,private api:ApiService,private httpClient:HttpClient){

}

ngOnInit(): void{
  this.employeeform=this.formbuilder.group({
    name:['',Validators.required],
    city:['',Validators.required],
    email:['',Validators.required],
    postcode:['',Validators.required],
    cnumber:['',Validators.required],

  })
this.getemployee()


}
AddEmployee(data:datamodel){
//console.log(data)
this.api.addemployee(data).subscribe((res=>{
  this.employeeform.reset()
}))
this.getemployee();
}



getemployee(){
  this.api.getemployee().subscribe(res=>{
    this.data = res;
 
  })
}
deleteemployee(id:number){
  
    this.api.deleteemployee(id)
  .subscribe(res=>{
    alert('employee deleted')
     
})
}

//let endPoints = "/posts/1"
//this.httpClient.delete("http://localhost:3000/posts" + endPoints).subscribe(data => {
 // console.log(data);

//}) }





}

