import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddressFormComponent } from "./address-form/address-form.component";

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'address-form',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'address-form',
        component: AddressFormComponent,
    },
];
