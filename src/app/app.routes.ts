import { Routes } from '@angular/router';
import { Mycomp1Component } from './pages/mycomp1/mycomp1.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ChartComponent } from 'ng-apexcharts';
import { Newchart2Component } from './pages/newchart2/newchart2.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Mycomp1Component,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        title: 'Employee',
      },
      {
        path: 'chart',
        component: ChartComponent,
      },
      {
        path: 'newchart2',
        component: Newchart2Component,
      },
    ],
  },
];
