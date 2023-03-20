import { AppService } from './app.service';
export declare class AppControllerNest {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
