import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.enableCors()

	const config = new DocumentBuilder()
		.setTitle('Krylshop')
		.setDescription('api documentation')
		.setVersion('1.0')
		.addBearerAuth(
			{
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT',
				name: 'JWT',
				description: 'Enter JWT token',
				in: 'header'
			},
			'JWT-auth'
		)
		.build()
	const document = SwaggerModule.createDocument(app, config)
	const options = {
		swaggerOptions: {
			docExpansion: 'none'
		}
	}
	SwaggerModule.setup('api', app, document, options)

	await app.listen(4200)
}
bootstrap()
