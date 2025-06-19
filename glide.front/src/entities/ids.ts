import * as v from 'valibot'

export function createId<T extends string>(tag: T) {
	return v.intersect([
		v.string(),
		v.object({ __tag: v.optional(v.literal(tag)) }),
	])
}
