import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RunappComponent } from "./runapp/runapp.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "", component: AppComponent },
  { path: "runapp", component: RunappComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
