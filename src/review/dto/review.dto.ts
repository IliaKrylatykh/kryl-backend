import { ApiProperty } from '@nestjs/swagger'
import { IsString, Max, Min } from 'class-validator'

export class ReviewDto {
	@ApiProperty({ example: 1 })
	@Min(1)
	@Max(5)
	rating: number

	@ApiProperty({ example: 'string' })
	@IsString()
	text: string
}
