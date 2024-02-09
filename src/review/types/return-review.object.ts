import { Prisma } from '@prisma/client'
import { returnUserObject } from 'src/user/types/return-user.object'

export const returnReviewObject: Prisma.ReviewSelect = {
	id: true,
	user: {
		select: returnUserObject
	},
	createdAt: true,
	rating: true,
	text: true
}
