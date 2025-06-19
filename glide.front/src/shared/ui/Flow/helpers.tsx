import type { ReactElement, ReactNode } from 'react'
import { isValidElement } from 'react'

export type Renderable<T extends readonly unknown[]> =
	| ((...args: T) => ReactNode)
	| ReactNode

export function renderProps<T extends readonly unknown[]>(
	element: Renderable<T>,
	...args: T
) {
	if (typeof element === 'function') {
		return nodeToElement(element(...args))
	}

	return nodeToElement(element)
}

export function nodeToElement(item?: ReactNode): ReactElement | null {
	if (item == null) {
		return null
	}

	if (isValidElement(item)) {
		return item
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{item}</>
}

type TypeGuard<S extends T, T = unknown> = (element: T) => element is S

/**
 * Хелпер, позволяющий уточнять тип для компонента Switch-Match
 */
export function matches<S extends T, T = unknown>(
	element: T,
	predicate: TypeGuard<S, T>,
): S | false {
	return predicate(element) ? element : false
}
