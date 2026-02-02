import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventService } from './services/create-event.service';
import { FindAllEventsService } from './services/findAll-event.service';
import { FindOneEventService } from './services/findOne-event.service';
import { UpdateEventService } from './services/update-event.service';
import { DeleteEventService } from './services/delete-event.service';
import { IEventEntity } from './interfaces/IEventEntity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Event')
@Controller('event')
export class EventController {
    constructor(
        private readonly createEventService: CreateEventService,
        private readonly findAllEventsService: FindAllEventsService,
        private readonly findOneEventService: FindOneEventService,
        private readonly updateEventService: UpdateEventService,
        private readonly deleteEventService: DeleteEventService,
    ) { }

    @Post('create')
    async create(@Body() createEventDto: CreateEventDto): Promise<IEventEntity> {
        return await this.createEventService.execute(createEventDto);
    }

    @Get('all')
    async findAll(): Promise<IEventEntity[]> {
        return await this.findAllEventsService.execute();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IEventEntity | null> {
        return await this.findOneEventService.execute(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto): Promise<IEventEntity | null> {
        return await this.updateEventService.execute(id, updateEventDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return await this.deleteEventService.execute(id);
    }
}
