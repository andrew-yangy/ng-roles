import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {PermissionsService} from "../service/permissions.service";

@Directive({selector: '[accesskey]'})
export class RolesDirective implements OnInit, OnDestroy {
    @Input() accesskey: string;
    initValidateSubscription: Subscription;
    constructor(
        private permissionsService: PermissionsService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }
    ngOnInit(): void {
        this.initValidateSubscription = this.validatePermissions();
    }
    private validatePermissions(): Subscription {
        return this.permissionsService.validateKey(this.accesskey)
            .subscribe(this.handlePermission.bind(this))
    }
    private handlePermission(ifAuthorised: boolean) {
        this.viewContainer.clear();
        if (ifAuthorised) this.viewContainer.createEmbeddedView(this.templateRef);
    }
    ngOnDestroy(): void {
        if (this.initValidateSubscription) this.initValidateSubscription.unsubscribe();
    }
}
