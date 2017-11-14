export class Permission {
    key: string
    accessOnly?: string | string[]
    accessExcept?: string | string[]
    accessOnlyOr?: string[]
    accessExceptOr?: string[]
}
