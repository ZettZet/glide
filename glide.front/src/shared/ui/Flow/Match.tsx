import type { Renderable } from './helpers'
import { renderProps } from './helpers'

type MatchProps<T> = {
	when: T | undefined | null | false
	children: Renderable<[item: NonNullable<T>]>
}

export const Match = <T,>({ when, children }: MatchProps<T>) => {
	if (when) {
		return renderProps(children, when)
	}

	return null
}
