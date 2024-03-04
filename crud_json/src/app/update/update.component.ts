import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router,Params,ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../list/model';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public dataId!:number;
  public employee!:datamodel;
  


  constructor (private activatedRoute:ActivatedRoute,private router:Router,private api:ApiService,private fb: FormBuilder){

  }

 

  ngOnInit(): void {
   
   this.activatedRoute.paramMap.subscribe((param:Params)=>{
      this.dataId=param['get']("id");
     
      console.log("data id is",this.dataId)

    })
    this.api.fetchdata(this.dataId).subscribe((data:datamodel)=>{
      this.employee = data;
    })

   

  // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
   // this.dataId = paramMap.get('id') || '';
  //  console.log('data id is', this.dataId);
 // });
  }

  update(){
    this.api.updateemployee(this.employee,this.dataId).subscribe((res:datamodel)=>{
      this.router.navigate(["/"])
    })
  }

}
