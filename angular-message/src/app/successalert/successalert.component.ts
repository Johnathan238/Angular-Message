import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  btnSuccess() {
    alert("This is a Success!")
    console.log("This is a Success!");
  }

  ngOnInit(): void {
  }

}
