import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

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
