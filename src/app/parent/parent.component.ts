import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentVar="";

  constructor(private myService:MyserviceService) { }

  ngOnInit(): void {



  }

  parentFunc(test:any){
    console.log("Value in textbox is:"+test);
    this.myService.serviceVar=test;
  }

  showcurrentServiceVar(){
    this.parentVar=this.myService.serviceVar;
    console.log("The current Value of ServiceVar is:"+this.myService.serviceVar);
  }

}
