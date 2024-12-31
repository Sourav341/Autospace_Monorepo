import { Module } from '@nestjs/common'
import { BookingTimelinesService } from './graphql/booking-time-lines.service'
import { BookingTimelinesResolver } from './graphql/booking-time-lines.resolver'
import { BookingTimelinesController } from './rest/booking-time-lines.controller'

@Module({
  providers: [BookingTimelinesResolver, BookingTimelinesService],
  exports: [BookingTimelinesService],
  controllers: [BookingTimelinesController],
})
export class BookingTimelinesModule {}
