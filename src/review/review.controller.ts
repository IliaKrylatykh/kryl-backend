import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ReviewService } from './review.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ReviewDto } from './dto/review.dto'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetReviewResponse, CreateReviewResponse } from './types'

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@ApiOkResponse({ type: GetReviewResponse })
	@UsePipes(new ValidationPipe())
	@Get()
	async getAll() {
		return this.reviewService.getAll()
	}

	@ApiOkResponse({ type: CreateReviewResponse })
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('leave/:productId')
	@ApiBearerAuth('JWT-auth')
	@Auth()
	async leaveReview(
		@CurrentUser('id') id: number,
		@Param('productId') productId: string,
		@Body() dto: ReviewDto
	) {
		return this.reviewService.create(id, +productId, dto)
	}
}
