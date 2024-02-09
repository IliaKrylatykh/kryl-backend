import { ApiProperty } from '@nestjs/swagger'

export class GetMainStatisticsResponse {
	@ApiProperty({
		type: 'array',
		items: {
			type: 'object',
			properties: {
				name: { type: 'string' },
				value: { type: 'number' }
			}
		},
		example: [
			{ name: 'Orders', value: 1 },
			{ name: 'Reviews', value: 1 },
			{ name: 'Favorites', value: 1 }
		],
		description: 'Array of main statistics'
	})
	statistics: Array<{ name: string; value: number }>
}
