import { IEventEntity } from '../interfaces/IEventEntity';
import { EventRepository } from '../repositories/event.repository';
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateEventService{
    constructor(
        private readonly eventRepository : EventRepository
    ){}

    async execute(event : IEventEntity) : Promise<IEventEntity> {
        // if(event.description.length < 250) throw new Error('Description must be at least 250 characters long');
        let newEvent = await this.eventRepository.create(event);

        return newEvent;
    }
}