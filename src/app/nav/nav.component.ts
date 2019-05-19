import { Component, OnInit } from "@angular/core";
import { EventEmitterService } from "../event-emitter.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  myApp: string = "Fizz Buzz App";

  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit() {}

  firstComponentFunction() {
    this.eventEmitterService.onFirstComponentButtonClick();
  }
}
