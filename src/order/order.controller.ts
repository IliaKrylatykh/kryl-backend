import { Controller, Get } from '@nestjs/common'
import { OrderService } from './order.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetOrdersResponse } from './types'

@ApiTags('Orders')
@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@ApiOkResponse({ type: GetOrdersResponse })
	@ApiBearerAuth('JWT-auth')
	@Get()
	@Auth()
	getAll(@CurrentUser('id') userId: number) {
		return this.orderService.getAll(userId)
	}
}
