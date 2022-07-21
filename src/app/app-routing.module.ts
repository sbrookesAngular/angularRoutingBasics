import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//you are accessing the associated components
import { HomeComponent } from './home/home.component';
import { I3Component } from './i3/i3.component';
import { I5Component } from './i5/i5.component';
import { I7Component } from './i7/i7.component';
import { I9Component } from './i9/i9.component';

//decalring the routes in an array; these are all the page views
const routes: Routes = [

    {path: 'home', component: HomeComponent },
    {path: 'i3', component: I3Component},
    {path: 'i5', component: I5Component},
    {path: 'i7', component: I7Component},
    {path: 'i9', component: I9Component},

    //the empty path will be redirected to the home component
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    
    /*  
    this path: '**', is called a 'wildcard' and redirects to the home component is someone tries to but something like
    /sdfkjsd;kjfhsdjkf;sdf
    you can redirect home or direct to a 404
    It must be at bottom/end of the array!!!
    */
    {path: '**', redirectTo: '/home', pathMatch: 'full'} 

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }

//export the components; to the app.module.ts file
export const routingComponents = [HomeComponent, I3Component, I5Component, I7Component, I9Component]