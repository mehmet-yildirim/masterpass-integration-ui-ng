import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'button-demo',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonDemo {
  isDisabled: boolean = false;
  clickCounter: number = 0;
}
