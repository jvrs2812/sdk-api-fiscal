import { AuthParams } from "../../src/data/domain/auth.params";

import { Auth } from "../../src/data/usecases/authentication";
import { AuthAdapter } from "../../src/data/external/auth.adapter";

import { faker } from "@faker-js/faker";
import { AuthResponse } from "../../src/data/domain/auth.response";
import axios, { Axios } from "axios";

jest.mock('../../src/data/external/auth.adapter.ts');
jest.mock('axios');

describe('authentication', () => {
    it('call post method', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        const authAdapter = new AuthAdapter(mockedAxios);
        var auth = new Auth(authAdapter);

        const response = new AuthResponse(faker.company.bsNoun(), faker.random.alphaNumeric());

        (authAdapter.request as jest.Mock).mockReturnValue(response);

        await auth.authentication(new AuthParams(faker.internet.email(), faker.internet.password()));

        expect(authAdapter.request).toBeCalledTimes(1);
    });
});








