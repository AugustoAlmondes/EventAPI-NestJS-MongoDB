import { Injectable } from '@nestjs/common';
import { EventRepository } from '../repositories/event.repository';
import { Event } from '../Schema/events.schema';

@Injectable()
export class FindAllEventsService {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(): Promise<Event[]> {
        return this.eventRepository.findAll();
    }
}
