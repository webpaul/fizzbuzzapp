import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { RunappComponent } from "./runapp/runapp.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, NavComponent, RunappComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],

  bootstrap: [AppComponent]
})
export class AppModule {}
