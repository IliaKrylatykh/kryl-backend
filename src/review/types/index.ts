import { ApiProperty } from '@nestjs/swagger'
import { UserResponse } from 'src/user/types'

export class GetReviewResponse {
	@ApiProperty({ example: 1 })
	id: number

	@ApiProperty({ example: 'string' })
	name: string

	@ApiProperty({ example: 'string' })
	slug: string

	@ApiProperty({ type: UserResponse })
	user: UserResponse

	@ApiProperty({ example: 'string' })
	createdAt: Date

	@ApiProperty({ example: 1 })
	rating?: number

	@ApiProperty({ example: 'string' })
	text?: string
}

export class CreateReviewResponse {
	@ApiProperty({ example: 1 })
	id: number

	@ApiProperty({ example: 'string' })
	createdAt: string

	@ApiProperty({ example: 'string' })
	updatedAt: string

	@ApiProperty({ example: 1 })
	rating: number

	@ApiProperty({ example: 'string' })
	text: string

	@ApiProperty({ example: 1 })
	userId: number

	@ApiProperty({ example: 1 })
	productId: number
}
