import { Component } from '@angular/core';
import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IoT-Security-Guidelines';
  
  ngAfterViewInit() {
    mediumZoom('img');
  }
}
