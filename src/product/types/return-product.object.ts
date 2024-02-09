import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/types/return-category.object'
import { returnReviewObject } from 'src/review/types/return-review.object'

export const returnProductObject: Prisma.ProductSelect = {
	id: true,
	name: true,
	description: true,
	price: true,
	images: true,
	createdAt: true,
	slug: true
}

export const returnProductObjectFullest: Prisma.ProductSelect = {
	...returnProductObject,
	reviews: {
		select: returnReviewObject
	},
	category: { select: returnCategoryObject }
}
