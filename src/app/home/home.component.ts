import { Component, OnInit, ViewChild } from "@angular/core";
import { EventEmitterService } from "../event-emitter.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit() {
    // if (this.eventEmitterService.subsVar == undefined) {
    //   this.eventEmitterService.subsVar = this.eventEmitterService.invokeFirstComponentFunction.subscribe(
    //     (name: string) => {
    //       this.outputFizzBuzz();
    //     }
    //   );
    // }
  }
}
