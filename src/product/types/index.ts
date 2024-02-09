import { ApiProperty } from '@nestjs/swagger'
import { GetCategoryResponse } from 'src/category/types'
import { GetReviewResponse } from 'src/review/types'

export class ProductResponse {
	@ApiProperty({ example: 1 })
	id: number

	@ApiProperty({ example: 'string' })
	createdAt: string

	@ApiProperty({ example: 'string' })
	updatedAt: string

	@ApiProperty({ example: 'string' })
	name: string

	@ApiProperty({ example: 'string' })
	slug: string

	@ApiProperty({
		example: 'string'
	})
	description: string

	@ApiProperty({ example: 1 })
	price: number

	@ApiProperty({
		example: ['string'],
		type: [String]
	})
	images: string[]

	@ApiProperty({ example: 1 })
	categoryId: number

	@ApiProperty({ example: 1, nullable: true })
	userId: number | null
}

export class FullestProductResponse extends ProductResponse {
	@ApiProperty({
		type: [GetReviewResponse],
		description: 'Array of product reviews'
	})
	reviews: GetReviewResponse[]

	@ApiProperty({ type: GetCategoryResponse, description: 'Product category' })
	category: GetCategoryResponse
}

export class GetProductsResponse {
	@ApiProperty({ type: [ProductResponse], description: 'string' })
	products: ProductResponse[]

	@ApiProperty({ example: 1 })
	length: number
}
