import { Component, OnInit } from '@angular/core';
declare var jquery: any; declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  onClick() {
    console.log('onclick');
  }
  ngOnInit() {
    $('#img').click();
  }
}
