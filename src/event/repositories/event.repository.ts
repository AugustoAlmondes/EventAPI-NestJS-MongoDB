import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";
import { UpdateEventDto } from "../dto/update-event.dto";

@Injectable()
export class EventRepository {
    constructor(
        @InjectModel(Event.name) private eventModel: Model<EventDocument>
    ) { }

    async create(event: IEventEntity): Promise<IEventEntity> {
        const createdEvent = new this.eventModel(event);
        await createdEvent.save();
        return createdEvent.toObject();
    }

    async findAll(): Promise<Event[]> {
        return this.eventModel.find().exec();
    }

    async findOne(id: string): Promise<IEventEntity | null> {
        return this.eventModel.findById(id).exec();
    }

    async update(id: string, updateEventDto: UpdateEventDto): Promise<IEventEntity | null> {
        return this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true }).exec();
    }

    async remove(id: string): Promise<void> {
        await this.eventModel.findByIdAndDelete(id).exec();
    }
}
