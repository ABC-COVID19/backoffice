import { NgModule } from '@angular/core';
import { IcamBackOfficeSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { RoundCardComponent } from './round-card/round-card.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [IcamBackOfficeSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective, RoundCardComponent],
  entryComponents: [LoginModalComponent],
  exports: [IcamBackOfficeSharedLibsModule, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective]
})
export class IcamBackOfficeSharedModule {}
