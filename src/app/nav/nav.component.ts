import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  isDarkTheme: boolean = false;
  major: number = 1;
  minor: number = 23;
  toggle() {
    this.major++;
    this.minor = 0;
  }
}
