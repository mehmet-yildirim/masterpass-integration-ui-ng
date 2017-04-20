import {Component, Input} from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'step-check-msisdn',
  templateUrl: 'step-check-msisdn.component.html',
  styleUrls: ['step-check-msisdn.component.scss']
})
export class StepCheckMsisdnComponent {

  @Input()
  MFS: any;

  @Input()
  key: string;

  progressing = false;

  submitMsisdn() {
    this.progressing = true;
    console.log("test");
  }

  onSubmit() {
    console.log("test2");
  }
}
