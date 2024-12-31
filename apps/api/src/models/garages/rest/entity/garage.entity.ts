import { Garage } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GarageEntity implements RestrictProperties<GarageEntity, Garage> {
  @IsOptional()
  description: string
  @IsOptional()
  displayName: string
  images: string[]
  id: number
  createdAt: Date
  updatedAt: Date
  companyId: number
}
