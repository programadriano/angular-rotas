import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from "app/pages/home-page/home-page.component";
import { AboutPageComponent } from "app/pages/about-page/about-page.component";


const routes: Routes = [
    //home
    {
        path: '',
        component: HomePageComponent
    },
    //Products
    {
        path: 'about',
        component: AboutPageComponent
    }   
];

export const RoutingModule = RouterModule.forRoot(routes);