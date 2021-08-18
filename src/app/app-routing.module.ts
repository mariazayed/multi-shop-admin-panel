import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';

const contentRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'products',
        loadChildren: () => import('../app/components/products/products.module').then(m => m.ProductsModule),
        data: {
            breadcrumb: 'Products',
        },
    },
    {
        path: 'sales',
        loadChildren: () => import('../app/components/sales/sales.module').then(m => m.SalesModule),
        data: {
            breadcrumb: 'Sales',
        },
    },
    {
        path: 'coupons',
        loadChildren: () => import('../app/components/coupons/coupons.module').then(m => m.CouponsModule),
        data: {
            breadcrumb: 'Coupons',
        },
    },
    {
        path: 'pages',
        loadChildren: () => import('../app/components/pages/pages.module').then(m => m.PagesModule),
        data: {
            breadcrumb: 'Pages',
        },
    },
    {
        path: 'media',
        loadChildren: () => import('../app/components/media/media.module').then(m => m.MediaModule),
    },
    {
        path: 'menus',
        loadChildren: () => import('../app/components/menus/menus.module').then(m => m.MenusModule),
        data: {
            breadcrumb: 'Menus',
        },
    },
    {
        path: 'users',
        loadChildren: () => import('../app/components/users/users.module').then(m => m.UsersModule),
        data: {
            breadcrumb: 'Users',
        },
    },
    {
        path: 'vendors',
        loadChildren: () => import('../app/components/vendors/vendors.module').then(m => m.VendorsModule),
        data: {
            breadcrumb: 'Vendors',
        },
    },
    {
        path: 'localization',
        loadChildren: () => import('../app/components/localization/localization.module').then(m => m.LocalizationModule),
        data: {
            breadcrumb: 'Localization',
        },
    },
    {
        path: 'reports',
        loadChildren: () => import('../app/components/reports/reports.module').then(m => m.ReportsModule),
    },
    {
        path: 'settings',
        loadChildren: () => import('../app/components/setting/setting.module').then(m => m.SettingModule),
        data: {
            breadcrumb: 'Settings',
        },
    },
    {
        path: 'invoice',
        loadChildren: () => import('../app/components/invoice/invoice.module').then(m => m.InvoiceModule),
        data: {
            breadcrumb: 'Invoice',
        },
    },
];
const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full',
    },
    {
        path: '',
        component: ContentLayoutComponent,
        children: contentRoutes,
    },
    {
        path: 'auth/login',
        component: LoginComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'legacy',
        }),
    ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
