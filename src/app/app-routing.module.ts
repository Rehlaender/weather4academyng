import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeViewComponent } from "./containers/home-view/home-view.component";
import { DetailsComponent } from './containers/details/details.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeViewComponent },
  { path: "detail", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
