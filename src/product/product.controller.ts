import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ProductService } from './product.service'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetAllProductsDto } from './dto/get-all-products.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ProductDto } from './dto/product.dto'
import { FullestProductResponse, GetProductsResponse } from './types'
import { CurrentUser } from 'src/auth/decorators/user.decorator'

@ApiTags('Products')
@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@ApiOkResponse({ type: GetProductsResponse })
	@UsePipes(new ValidationPipe())
	@Get()
	async getAll(@Query() queryDto: GetAllProductsDto) {
		return this.productService.getAll(queryDto)
	}

	@ApiOkResponse({ type: FullestProductResponse })
	@Get('similar/:id')
	async getSimilar(@Param('id') id: string) {
		return this.productService.getSimilar(+id)
	}

	@ApiOkResponse({ type: FullestProductResponse })
	@Get('by-slug/:slug')
	async getProductBySlug(@Param('slug') slug: string) {
		return this.productService.bySlug(slug)
	}

	@ApiOkResponse({ type: GetProductsResponse })
	@Get('by-category/:categorySlug')
	async getProductByCategory(@Param('categorySlug') categorySlug: string) {
		return this.productService.byCategory(categorySlug)
	}

	@ApiOkResponse({ type: FullestProductResponse })
	@ApiBearerAuth('JWT-auth')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post()
	async createProduct(
		@Body() dto: ProductDto,
		@CurrentUser('id') userId: number
	) {
		return this.productService.create(userId, dto)
	}

	@ApiOkResponse({ type: FullestProductResponse })
	@ApiBearerAuth('JWT-auth')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateProduct(@Param('id') id: string, @Body() dto: ProductDto) {
		return this.productService.update(+id, dto)
	}

	@ApiOkResponse({ type: FullestProductResponse }) // TODO: Add schema for delete
	@ApiBearerAuth('JWT-auth')
	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteProduct(@Param('id') id: string) {
		return this.productService.delete(+id)
	}

	@ApiOkResponse({ type: FullestProductResponse })
	@ApiBearerAuth('JWT-auth')
	@Get(':id')
	@Auth()
	async getProduct(@Param('id') id: string) {
		return this.productService.byId(+id)
	}
}
