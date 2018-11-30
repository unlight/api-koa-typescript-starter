import { homeService } from './home.service';
import * as expect from 'expect';

describe('home.service', () => {

    it('Hello must be in message', async () => {
        expect(await homeService.getGreetings()).toContain('Hello');
    });
});
