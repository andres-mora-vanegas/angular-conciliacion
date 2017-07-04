import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  employs:Array<Object>;
  constructor( private http:Http) { }

  ngOnInit() {

    this.allEmploy();
  }

  allEmploy():void{
    this.http.request('https://conciliacion-spring.herokuapp.com/v1/employ')
    .subscribe((res:Response)=>{
      this.employs =res.json();
    })
  }

}
