import { IEventEntity } from './interfaces/IEventEntity';
import { CreateEventService } from './services/create-event.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('event')
export class EventController {
    constructor(
        private readonly CreateeventService: CreateEventService
    ) { }

    @Post('create')
    async createEvent(@Body() event: IEventEntity): Promise<IEventEntity> {
        return await this.CreateeventService.execute(event);
    }
}
