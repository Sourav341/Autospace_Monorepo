import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { User } from '../../graphql/entity/user.entity'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  @IsOptional()
  image: string
  uid: string
  createdAt: Date
  updatedAt: Date
  @IsOptional()
  name: string
}
