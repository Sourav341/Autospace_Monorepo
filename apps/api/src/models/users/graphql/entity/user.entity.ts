import { ObjectType, Field } from '@nestjs/graphql'
import { $Enums, User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field({ nullable: true })
  image: string
  @Field({ nullable: true })
  name: string
  uid: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class AuthProvider {
  uid: string
  @Field(() => $Enums.AuthProviderType)
  type: $Enums.AuthProviderType
}
