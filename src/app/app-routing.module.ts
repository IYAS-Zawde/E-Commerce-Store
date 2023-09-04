import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

/**
 * Router Configuration
 * Purpose: defining how your application should handle and respond to different URLs
 * How: by specifying which component should be displayed when a particular URL or route is accessed
 * what it is: an array of route objects.
 * 
 * Router object
 * Purpose: Specifies the URL path and the component that should be displayed when that path is matched.
 * Properties (some of them, for full doc:https://angular.io/api/router/Route#description )
 * --- title: Used to define a page title for the route.
 * --- path: The path to match against
 * --- pathMatch ('prefix' | 'full'): The path-matching strategy, one of 'prefix' or 'full'. Default is 'prefix'.
 * --- redirectTo: A URL to redirect to when the path matches.
 *  */
const routes: Routes = [
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent
  },
  { //default router
    title: 'Home',
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  //RouterModule.forRoot(): method to configure the router with the defined routes.
  imports: [RouterModule.forRoot(routes)],
  //export the RouterModule from your routing module so that it can be used in other parts of your application.
  exports: [RouterModule]
})
export class AppRoutingModule { }
