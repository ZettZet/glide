import type { ReactNode } from 'react'
import { Fragment, isValidElement } from 'react'

import type { Renderable } from './helpers'
import { nodeToElement } from './helpers'

type ForProps<T> = {
	each: T[] | undefined | null
	children: Renderable<[item: T, index: number]>
	fallback?: ReactNode
}

export const For = <T,>({ children, each, fallback = null }: ForProps<T>) => {
	if (!Array.isArray(each) || !each.length || children == null) {
		return nodeToElement(fallback)
	}

	if (typeof children === 'function') {
		return each.map((item, index) => {
			const child = children(item, index)
			if (isValidElement(child) && !child.key) {
				return <Fragment key={index}>{child}</Fragment>
			}

			return child
		})
	}

	return Array.from({ length: each.length }, (_, index) => (
		<Fragment key={index}>{children}</Fragment>
	))
}
