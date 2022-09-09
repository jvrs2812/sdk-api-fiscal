import { AuthParams } from "../domain/auth.params";
import { AuthResponse } from "../domain/auth.response";
import { IAuth } from "../interfaces/iauth";

export class Auth {
    auth: IAuth;

    constructor(auth: IAuth) {
        this.auth = auth;
    }

    async authentication(authParams: AuthParams): Promise<AuthResponse> {
        return await this.auth.request(authParams);
    }
}