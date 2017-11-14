import {Component} from '@angular/core';
import {RolesService} from "../../lib/src/service/roles.service";
import {PermissionsService} from "../../lib/src/service/permissions.service";

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private rolesService: RolesService,
                private permissionsService: PermissionsService) {
        const permissions = [
            {
                key: "CREATE",
                accessOnly: ["ADMIN"]
            },
            {
                key: "SEARCH_CONSIST_ADM",
                accessOnly: ["USER"]
            }
        ]
        this.permissionsService.loadPermissions(permissions);
        this.rolesService.loadRoles(['ADMIN']);
    }
}
