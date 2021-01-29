import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childVar="";
  constructor(private myService:MyserviceService) { }

  ngOnInit(): void {
   // this.childVar=this.myService.serviceVar;
    //console.log("childVar initially is:"+this.childVar);
  }

  getServiceVar(){
     this.childVar=this.myService.serviceVar;
     console.log("childVar initially is:"+this.childVar);
  }

  sendChildVal(test:string){
    this.myService.serviceVar=test;
    console.log("New serviceVar set by the child is:"+this.myService.serviceVar);
  }



}
