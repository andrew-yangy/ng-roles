import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Rx";

@Injectable()
export class RolesService {
    private rolesSource: any;
    constructor() {
        this.rolesSource = new BehaviorSubject<string[]>([]);
    }
    public loadRoles(roles: string[]) {
        this.rolesSource.next(roles)
    }
    public getRoles() {
        return this.rolesSource.asObservable();
    }
}
