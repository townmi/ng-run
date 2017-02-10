import {Component, OnInit} from '@angular/core';
import {HEROES} from './hero';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  names = ['Mr. IQ', '   ', '  Bombasto'];

  constructor() {
  }

  ngOnInit() {
  }

}
