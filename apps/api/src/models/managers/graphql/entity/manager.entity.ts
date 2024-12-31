import { Field, ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Manager implements RestrictProperties<Manager, ManagerType> {
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  displayName: string
  companyId: number
  uid: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
