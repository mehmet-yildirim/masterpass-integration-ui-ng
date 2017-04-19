import {AfterContentInit, Component} from '@angular/core';

declare var MFS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {

  constructor() {
    MFS.setAddress("https://www.masterpassturkiye.com:8084/v2");
    MFS.setClientId()
  }

  ngAfterContentInit(): void {
  }
  title = 'Masterpass Integration Test App';
}
