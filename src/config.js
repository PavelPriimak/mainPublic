const LIST_TYPES = {
	BACKLOG: 'backlog',
    Ready: 'ready',
	IN_PROGRESS: 'inProgress',
	Finished: 'finished',
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.Ready]: 'ready',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.Finished]: 'finished',
}

const LIST_COLORS = {
	[LIST_TYPES.BACKLOG]: '#b95959',
    [LIST_TYPES.Ready]: '#b95959',
	[LIST_TYPES.IN_PROGRESS]: '#4b69b1',
	[LIST_TYPES.Finished]: '#a0b959',
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }