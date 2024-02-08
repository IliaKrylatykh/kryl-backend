import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetCategoryResponse } from './types'
import { CategoryDto } from './dto/category.dto'

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@ApiOkResponse({ type: [GetCategoryResponse] })
	@Get()
	async getAll() {
		return this.categoryService.getAll()
	}

	@ApiOkResponse({ type: GetCategoryResponse })
	@ApiBearerAuth('JWT-auth')
	@Auth()
	@Get('by-slug/:slug')
	async getById(@Param('slug') slug: string) {
		return this.categoryService.bySlug(slug)
	}

	@ApiOkResponse({ type: GetCategoryResponse })
	@ApiBearerAuth('JWT-auth')
	@Auth()
	@Get(':id')
	async getBySlug(@Param('id') id: string) {
		return this.categoryService.byId(+id)
	}

	@ApiOkResponse({ type: GetCategoryResponse })
	@ApiBearerAuth('JWT-auth')
	@HttpCode(200)
	@Auth()
	@Post()
	async create(@Body() dto: CategoryDto) {
		return this.categoryService.create(dto)
	}

	@ApiOkResponse({ type: GetCategoryResponse })
	@ApiBearerAuth('JWT-auth')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: CategoryDto) {
		return this.categoryService.update(+id, dto)
	}

	@ApiOkResponse({ type: GetCategoryResponse }) // TODO: Add schema for delete
	@ApiBearerAuth('JWT-auth')
	@Auth()
	@HttpCode(200)
	@Delete(':id')
	async toggleFavorite(@Param('id') id: string) {
		return this.categoryService.delete(+id)
	}
}
