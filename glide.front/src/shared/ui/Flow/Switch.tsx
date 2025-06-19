import type { FC, PropsWithChildren, ReactNode } from 'react'
import { Children, isValidElement } from 'react'

import { nodeToElement } from './helpers'
import { isDefined } from 'shared/guards'

type SwitchProps = {
	fallback?: ReactNode
}

export const Switch: FC<PropsWithChildren<SwitchProps>> = ({
	children,
	fallback,
}) => {
	for (const child of Children.toArray(children)) {
		if (
			isValidElement(child) &&
			typeof child.props === 'object' &&
			isDefined(child.props) &&
			'when' in child.props &&
			child.props.when
		) {
			return child
		}
	}

	return nodeToElement(fallback)
}
