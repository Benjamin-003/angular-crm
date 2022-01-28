import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: PageSignInComponent },
  { path: 'signup', component: PageSignUpComponent },
  { path: 'resetpassword', component: PageResetPasswordComponent },
  { path: 'forgotpassword', component: PageForgotPasswordComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m =>m.ClientsModule)},
  { path: 'page-not-found', loadChildren: () => import('./page-note-found/page-note-found.module').then(m => m.PageNoteFoundModule)},
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
