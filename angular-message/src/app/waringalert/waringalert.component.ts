import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waringalert',
  templateUrl: './waringalert.component.html',
  styleUrls: ['./waringalert.component.css']
})
export class WaringalertComponent implements OnInit {

  constructor() {
  }

  btnWarning() {
    alert("This is a Warning")
    console.log("This is a Warning");
  }

  ngOnInit(): void {
  }

}
