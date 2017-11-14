import {ModuleWithProviders, NgModule} from '@angular/core';
import {RolesDirective} from "./directive/roles.directive";
import {RolesService} from "./service/roles.service";
import {PermissionsService} from "./service/permissions.service";

@NgModule({
  imports: [],
  declarations: [RolesDirective],
  exports: [RolesDirective],
})
export class RolesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RolesModule,
      providers: [
        PermissionsService,
        RolesService
      ]
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: RolesModule,
      providers: [
        PermissionsService,
        RolesService
      ]
    };
  }
}
