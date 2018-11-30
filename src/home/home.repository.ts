export class HomeRepository {

    static readonly getInstance = () => new HomeRepository();
    static readonly token = 'home.repository';

    async getRemoteGreets() {
        return 'Hello from repository';
    }
}
