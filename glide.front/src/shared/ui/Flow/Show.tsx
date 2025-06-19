import type { ReactNode } from 'react'

import type { Renderable } from './helpers'
import { nodeToElement, renderProps } from './helpers'

type ShowProps<T> = {
	when: T | undefined | null | false
	children: Renderable<[item: NonNullable<T>]>
	fallback?: ReactNode
}

export const Show = <T,>({ when, fallback = null, children }: ShowProps<T>) => {
	if (when) return renderProps(children, when)

	return nodeToElement(fallback)
}
