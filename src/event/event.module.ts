import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventRepository } from './repositories/event.repository';
import { CreateEventService } from './services/create-event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './Schema/events.schema';
import { FindAllEventsService } from './services/findAll-event.service';
import { FindOneEventService } from './services/findOne-event.service';
import { UpdateEventService } from './services/update-event.service';
import { DeleteEventService } from './services/delete-event.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Event.name, schema: EventSchema}])],
  controllers: [EventController],
  providers: [
    EventRepository,
    CreateEventService,
    FindAllEventsService,
    FindOneEventService,
    UpdateEventService,
    DeleteEventService
  ],
  exports: [
    EventRepository,
    CreateEventService,
    FindAllEventsService,
    FindOneEventService,
    UpdateEventService,
    DeleteEventService
  ],
})
export class EventModule {}
