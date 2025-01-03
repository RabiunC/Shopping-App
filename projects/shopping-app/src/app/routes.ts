import { Route, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { CartDetailsComponent } from "./components/cart-details/cart-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

let homeRoute:Route = { path : "", component:HomeComponent }// default route
let productDetailsRoute:Route = { path : "product-details/:id", component:ProductDetailsComponent}
let cartDetailsRoute:Route = { path : "cart-details", component:CartDetailsComponent }
let notFoundRoute: Route = { path : "**", component:NotFoundComponent}

let appRoutes: Routes = [ homeRoute, productDetailsRoute, cartDetailsRoute, notFoundRoute];

export { appRoutes };

