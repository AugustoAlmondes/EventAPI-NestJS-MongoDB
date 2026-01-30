import { Injectable } from '@nestjs/common';
import { EventRepository } from '../repositories/event.repository';
import { Event } from '../Schema/events.schema';
import { IEventEntity } from '../interfaces/IEventEntity';

@Injectable()
export class FindOneEventService {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(id: string): Promise<IEventEntity | null> {
        return this.eventRepository.findOne(id);
    }
}
