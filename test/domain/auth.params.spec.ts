import { AuthParams } from "../../src/data/domain/auth.params";
import { faker } from "@faker-js/faker";

describe('auth params', () => {
    it('fromJson expected', () => {
        const email = faker.internet.email();
        const password = faker.internet.password();
        var authParams = new AuthParams(email, password);

        expect(authParams.fromJson()).toEqual({ "usuario_autoriza": email, "senha_autoriza": password });
    });
});