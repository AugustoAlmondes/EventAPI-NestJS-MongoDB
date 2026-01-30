import { IEventEntity } from '../interfaces/IEventEntity';
import { CreateEventRepositorie } from './../repositories/create-event.repositorie';
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateEventService{
    constructor(
        private readonly CreateEventRepository : CreateEventRepositorie
    ){}

    async execute(event : IEventEntity) : Promise<IEventEntity> {
        // if(event.description.length < 250) throw new Error('Description must be at least 250 characters long');
        let newEvent = await this.CreateEventRepository.execute(event);

        return newEvent;
    }
}