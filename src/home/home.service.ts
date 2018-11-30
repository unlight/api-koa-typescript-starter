export class HomeService {

    async getGreetings() {
        return 'Hello World!';
    }
}

export const homeService = new HomeService();
