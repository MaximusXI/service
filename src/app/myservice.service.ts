import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 serviceVar="Yet To Set";


  constructor() { }

  serviceFunc(test:any){
     this.serviceVar=test;
     return this.serviceVar;
  }
}
