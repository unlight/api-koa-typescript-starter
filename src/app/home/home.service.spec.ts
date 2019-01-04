import { HomeService } from './home.service';
import * as expect from 'expect';
import * as universalMock from 'universal-mock';
import { injector } from 'njct';
import { HomeRepository } from './home.repository';
import { Mock } from '../../types';

describe('home.service', () => {

    let repository: Mock<HomeRepository> = universalMock;
    let service: HomeService;

    before(() => {
        injector.mock(HomeRepository, () => repository);
    });

    after(() => {
        injector.clear();
    });

    beforeEach(() => {
        service = new HomeService();
    });

    it('hello must be in message', async () => {
        expect(await service.getGreetings()).toContain('Hello');
    });

    it('test mock', async () => {
        repository.getRemoteGreets = async () => 'Hello from remote 1';
        expect(await service.getRemoteGreets()).toContain('Hello from remote 1');
    });
});
