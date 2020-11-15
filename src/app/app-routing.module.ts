import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formvalidation',   /// login
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'prospects',
    loadChildren: () => import('./prospects/prospects.module').then( m => m.ProspectsPageModule)
  },
  {
    path: 'facaltydashboard',
    loadChildren: () => import('./facaltydashboard/facaltydashboard.module').then( m => m.FacaltydashboardPageModule)
  },
  {
    path: 'studentdashboard',
    loadChildren: () => import('./studentdashboard/studentdashboard.module').then( m => m.StudentdashboardPageModule)
  },
  {
    path: 'gustdashboard',
    loadChildren: () => import('./gustdashboard/gustdashboard.module').then( m => m.GustdashboardPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.module').then( m => m.TestimonialsPageModule)
  },
  {
    path: 'programs',
    loadChildren: () => import('./programs/programs.module').then( m => m.ProgramsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'galary',
    loadChildren: () => import('./galary/galary.module').then( m => m.GalaryPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'birthdays',
    loadChildren: () => import('./birthdays/birthdays.module').then( m => m.BirthdaysPageModule)
  },
  {
    path: 'formvalidation',
    loadChildren: () => import('./formvalidation/formvalidation.module').then( m => m.FormvalidationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
