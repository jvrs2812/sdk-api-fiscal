import { AuthParams } from "../domain/auth.params";
import { AuthResponse } from "../domain/auth.response";

export interface IAuth {
    request(authParams: AuthParams): Promise<AuthResponse>;
}
