import { createTV } from 'tailwind-variants'

import { twMergeConfig } from '@/utils/cn'

export type { ClassValue, VariantProps } from 'tailwind-variants'

export const tv = createTV({
	twMergeConfig,
})
