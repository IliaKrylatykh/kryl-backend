import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'

const prisma = new PrismaClient()

async function main() {
	const newUser = await prisma.user.create({
		data: {
			email: faker.internet.email(),
			name: faker.person.firstName(),
			password: await hash(faker.internet.password()),
			avatarPath: faker.image.avatar(),
			phone: faker.phone.number()
		}
	})

	const newProduct = await prisma.product.create({
		data: {
			name: faker.commerce.productName(),
			slug: faker.lorem.slug(),
			description: faker.commerce.productDescription(),
			price: +faker.commerce.price(),
			images: Array.from({ length: faker.number.int({ min: 2, max: 6 }) }).map(
				() => faker.image.urlLoremFlickr()
			),
			category: {
				create: {
					name: faker.commerce.productMaterial(),
					slug: faker.lorem.slug()
				}
			},
			reviews: {
				create: [
					{
						rating: faker.number.int({ min: 1, max: 5 }),
						text: faker.lorem.paragraph(),
						user: {
							connect: {
								id: 1
							}
						}
					}
				]
			}
		}
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
