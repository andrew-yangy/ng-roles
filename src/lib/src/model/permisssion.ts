export class Permission {
    Key: string
    AccessRoles?: string | string[]
    accessExcept?: string | string[]
    AccessRolesAll?: string[]
    accessExceptAll?: string[]
}
