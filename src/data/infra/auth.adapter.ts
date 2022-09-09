import { Axios } from "axios";
import { UrlAuth } from "../constants/url";
import { AuthParams } from "../domain/auth.params";
import { AuthResponse } from "../domain/auth.response";
import { IAuth } from "../interfaces/iauth";

export class AuthAdapter implements IAuth {
    constructor(private httpClient: Axios) { };

    async request(authParams: AuthParams): Promise<AuthResponse> {
        var response = await this.httpClient.post(UrlAuth.url, authParams.fromJson());

        return response.data;
    };
}
