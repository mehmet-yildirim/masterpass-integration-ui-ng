import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {GenerateKeyService} from "./backend/generatekey.service";

declare var MFS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GenerateKeyService]
})
export class AppComponent implements OnInit, AfterContentInit {

  key: string;

  title = 'Masterpass Integration Test App';

  constructor(private titleService: Title,
              private generateKeyService: GenerateKeyService) {
    MFS.setAddress("https://www.masterpassturkiye.com:8084/v2");
    MFS.setClientId();
    this.generateKeyService.getKey().subscribe(data => this.setKey(data))
  }

  ngOnInit() {
    console.log("onInit");
    //this.generateKeyService.getKey();
  }

  ngAfterContentInit(): void {
    this.titleService.setTitle(this.title);
  }

  setKey(data) {
    this.key = data;
    console.log('got key:' + this.key);
  }
}
