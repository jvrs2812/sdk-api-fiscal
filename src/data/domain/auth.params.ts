export class AuthParams {

    constructor(private email: string, private senha: string) { }

    fromJson(): Object {
        return {
            "usuario_autoriza": this.email,
            "senha_autoriza": this.senha
        };
    }
}