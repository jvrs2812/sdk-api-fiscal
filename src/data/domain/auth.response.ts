export class AuthResponse {
    cnpj: string;
    access: string;

    constructor(cnpj: string, access: string) {
        this.access = access;
        this.cnpj = cnpj;
    }
}
