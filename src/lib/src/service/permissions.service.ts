import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Permission} from "../model/permisssion";
import {RolesService} from "./roles.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class PermissionsService {
    private permissionSource: any;
    constructor(private rolesService: RolesService) {
        this.permissionSource = new BehaviorSubject<Permission[]>([]);
    }
    public loadPermissions(permissions: Permission[]) {
        this.permissionSource.next(permissions)
    }
    public getPermissions() {
        return this.permissionSource.asObservable();
    }
    public getPermission(key: string) {
        const filterPermission = (permissions: Permission[]): Permission => {
            return permissions && permissions.filter(permission => permission.Key === key)[0]
        }
        return this.getPermissions()
            .map(filterPermission)
    }
    public validateKey(accessKey: string): Observable<boolean> {
        const subject = new BehaviorSubject<boolean>(false);
        Observable.combineLatest(
            this.getPermission(accessKey),
            this.rolesService.getRoles()
        ).subscribe(([permission, roles]) => {
            if (!permission) {
                subject.next(true);
            } else {
                let accessRoles = permission.AccessRoles ? permission.AccessRoles.some(role => roles.includes(role)) : true;
                let accessRolesAll = permission.AccessRolesAll ? permission.AccessRolesAll.every(role => roles.includes(role)) : true;              
                subject.next(accessRoles && accessRolesAll);
            }
        });
        return subject.asObservable();
    }
}
