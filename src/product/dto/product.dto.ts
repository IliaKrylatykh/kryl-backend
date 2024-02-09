import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { ArrayMinSize, IsNumber, IsOptional, IsString } from 'class-validator'

export class ProductDto implements Prisma.ProductUpdateInput {
	@ApiProperty({ example: 'string' })
	@IsString()
	name: string

	@ApiProperty({ example: 1 })
	@IsNumber()
	price: number

	@ApiProperty({ example: 'string' })
	@IsOptional()
	@IsString()
	description: string

	@ApiProperty({ example: 'string // TODO' })
	@IsString({ each: true })
	@ArrayMinSize(1)
	images: string[]

	@ApiProperty({ example: 1 })
	@IsNumber()
	categoryId: number
}
