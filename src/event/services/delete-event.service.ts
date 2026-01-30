import { Injectable } from '@nestjs/common';
import { EventRepository } from '../repositories/event.repository';

@Injectable()
export class DeleteEventService {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(id: string): Promise<void> {
        await this.eventRepository.remove(id);
    }
}
