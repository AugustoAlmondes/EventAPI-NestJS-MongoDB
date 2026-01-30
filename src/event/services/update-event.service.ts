import { Injectable } from '@nestjs/common';
import { EventRepository } from '../repositories/event.repository';
import { Event } from '../Schema/events.schema';
import { UpdateEventDto } from '../dto/update-event.dto';
import { IEventEntity } from '../interfaces/IEventEntity';

@Injectable()
export class UpdateEventService {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(id: string, updateEventDto: UpdateEventDto): Promise<IEventEntity | null> {
        return this.eventRepository.update(id, updateEventDto);
    }
}
