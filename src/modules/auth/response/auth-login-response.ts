import { Expose, Type } from 'class-transformer';

class RoleResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    key: string;

    @Expose()
    @Type(() => PermissionResponse)
    permissions: PermissionResponse[];
}

class PermissionResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    key: string;

    @Expose()
    resource: string;
}

class UserResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    phoneNumber: string;

    @Expose()
    avatar: string;

    @Expose()
    @Type(() => RoleResponse)
    roles: RoleResponse[];
}

export class AuthLoginResponse {
    @Expose()
    accessToken: string;

    @Expose()
    @Type(() => UserResponse)
    user: UserResponse;
}
