import { OmitType } from '@nestjs/swagger'
import { BookingTimelineEntity } from '../entity/booking-time-line.entity'

export class CreateBookingTimeline extends OmitType(BookingTimelineEntity, [
  'id',
]) {}
