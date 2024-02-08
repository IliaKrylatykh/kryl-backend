import {
	Controller,
	Get,
	Put,
	UsePipes,
	ValidationPipe,
	HttpCode,
	Body,
	Patch,
	Param
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserDto } from './dto/user.dto'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetProfileResponse, PutProfileResponse } from './types'

@ApiTags('Users')
@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOkResponse({ type: GetProfileResponse })
	@ApiBearerAuth('JWT-auth')
	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.byId(id)
	}

	@ApiOkResponse({ type: PutProfileResponse })
	@ApiBearerAuth('JWT-auth')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('profile')
	async updateProfile(@CurrentUser('id') id: number, @Body() dto: UserDto) {
		return this.userService.updateProfile(id, dto)
	}

	// @ApiOkResponse({ type: AuthResponse })
	@ApiBearerAuth('JWT-auth')
	@Auth()
	@HttpCode(200)
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') id: number,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorite(id, +productId)
	}
}
