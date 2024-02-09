import { ApiProperty } from '@nestjs/swagger'

export class GetProfileResponse {
	@ApiProperty({ example: 1 })
	id: number

	@ApiProperty({ example: 'test@test.ru' })
	email: string

	@ApiProperty({ example: 'string' })
	name: string

	@ApiProperty({ example: 'string' })
	avatarPath: string

	@ApiProperty({ example: 'string' })
	phone: string

	@ApiProperty({ example: [] })
	favorites: string[]
}

export class UpdateProfileResponse {
	@ApiProperty({ example: 1 })
	id: number

	@ApiProperty({ example: 'string' })
	createdAt: string

	@ApiProperty({ example: 'string' })
	updatedAt: string

	@ApiProperty({ example: 'test@test.ru' })
	email: string

	@ApiProperty({ example: 'hash' })
	password: string

	@ApiProperty({ example: 'string' })
	name: string

	@ApiProperty({ example: 'string' })
	avatarPath: string

	@ApiProperty({ example: 'string' })
	phone: string

	@ApiProperty({ example: [] })
	favorites: string[]
}

export class ToggleFavoriteResponse {
	@ApiProperty({ example: 'Success' })
	message: string
}

export class UserResponse {
	@ApiProperty({ example: 1 })
	id: number

	@ApiProperty({ example: 'test@test.ru' })
	email: string

	@ApiProperty({ example: 'string' })
	name: string

	@ApiProperty({ example: 'string' })
	avatarPath: string

	@ApiProperty({ example: 'string' })
	phone: string
}
