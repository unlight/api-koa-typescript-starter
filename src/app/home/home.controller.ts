import { inject } from 'njct';
import { HomeService } from './home.service';

export async function home(context: any) {
    const service = inject(HomeService);
    const result = await service.getGreetings();
    context.body = { data: result };
}
