import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-runapp",
  templateUrl: "./runapp.component.html",
  styleUrls: ["./runapp.component.css"]
})
export class RunappComponent implements OnInit {
  fizzResult = [];

  constructor() {}

  ngOnInit() {}

  fizzBuzz() {
    let x = [];
    for (let i = 1; i <= 36; i++) {
      let retVal = "";
      let notDivBy3 = false;
      let notDivBy5 = false;

      if (i % 3 == 0) {
        retVal += "Fizz";
        notDivBy3 = true;
        x.push(retVal); //This
      }

      if (i % 5 == 0) {
        retVal += " Buzz";
        retVal = retVal.trim();
        notDivBy5 = true;
        x.push(retVal); //And this create a bug where for 15 and 30 you get Fizz AND Fizz Buzz
      }

      if (notDivBy3 == false && notDivBy5 == false) {
        x.push(i);
      }
    }
    return x;
  }

  outputFizzBuzz() {
    this.fizzResult = this.fizzBuzz();
  }
}

//Git keeps source history so no need to leave old code commented out, just blast it
// fizzBuzz(i) {
//   let retVal = "";
//   let notDivBy3 = false;
//   let notDivBy5 = false;

//   if (i % 3 == 0) {
//     retVal += "Fizz";
//     notDivBy3 = true;
//   }

//   if (i % 5 == 0) {
//     retVal += " Buzz";
//     retVal = retVal.trim();
//     notDivBy5 = true;
//   }

//   if (notDivBy3 == false && notDivBy5 == false) {
//     return i;
//   }
//   return retVal;
// }

// outputFizzBuzz() {
//   for (let i = 1; i <= 36; i++) {
//     let fResults = this.fizzBuzz(i);
//     this.fizzResult += fResults + " ";
//     console.log(fResults);
//   }
// }
