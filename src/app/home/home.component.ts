import { Component, OnInit } from "@angular/core";
import { EventEmitterService } from "../event-emitter.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit() {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeFirstComponentFunction.subscribe(
        (name: string) => {
          this.outputFizzBuzz();
        }
      );
    }
  }

  fizzBuzz(i) {
    let retVal = "";
    let notDivBy3 = false;
    let notDivBy5 = false;

    if (i % 3 == 0) {
      retVal += "Fizz";
      notDivBy3 = true;
    }

    if (i % 5 == 0) {
      retVal += " Buzz";
      retVal = retVal.trim();
      notDivBy5 = true;
    }

    if (notDivBy3 == false && notDivBy5 == false) {
      return i;
    }
    return retVal;
  }

  outputFizzBuzz() {
    for (let i = 1; i <= 36; i++) {
      console.log(this.fizzBuzz(i));
    }
  }
}
