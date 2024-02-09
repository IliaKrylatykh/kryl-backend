import { Controller, Get } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetMainStatisticsResponse } from './types'

@ApiTags('Statistics')
@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@ApiOkResponse({ type: GetMainStatisticsResponse })
	@ApiBearerAuth('JWT-auth')
	@Get('main')
	@Auth()
	getMainStatistics(@CurrentUser('id') id: number) {
		return this.statisticsService.getMain(id)
	}
}
