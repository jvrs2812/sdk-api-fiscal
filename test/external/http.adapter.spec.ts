import { AuthParams } from "../../src/data/domain/auth.params";
import { AuthResponse } from "../../src/data/domain/auth.response";
import { AuthAdapter } from "../../src/data/external/auth.adapter";
import { faker } from "@faker-js/faker";
import Axios from 'axios';

jest.mock('../../src/data/external/auth.adapter.ts');
jest.mock('Axios');

describe('authadapter', () => {
    it('call post response', async () => {
        const mockedAxios = Axios as jest.Mocked<typeof Axios>;
        const authAdapter = new AuthAdapter(mockedAxios);

        const response = new AuthResponse(faker.company.bsNoun(), faker.random.alphaNumeric());

        (authAdapter.request as jest.Mock).mockReturnValue(response);

        const apiresponse = await authAdapter.request(new AuthParams(faker.internet.email(), faker.internet.password()));

        expect(apiresponse).toEqual(response);
    });

    it('call post method', async () => {
        const mockedAxios = Axios as jest.Mocked<typeof Axios>;

        const authAdapter = new AuthAdapter(mockedAxios);

        const response = new AuthResponse(faker.company.bsNoun(), faker.random.alphaNumeric());

        (mockedAxios.post as jest.Mock).mockReturnValue(response);

        await authAdapter.request(new AuthParams(faker.internet.email(), faker.internet.password()));

        expect(mockedAxios.post).toBeCalledTimes(1);
    });
});