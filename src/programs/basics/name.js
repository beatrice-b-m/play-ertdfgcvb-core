/**
@author No1
@title  Name
@desc   Write your name
[header]
*/

const TAU = Math.PI * 2

export const settings = {
		background : 'black',
		color : 'white',
		weight : '700'
}

export function main(coord, context){
	const a = context.frame * 0.05
	const f = Math.floor((1-Math.cos(a)) * 10) + 1
	const g = Math.floor(a / TAU) % 10 + 1
	const i = coord.index % (coord.y * g + 1) % (f % context.cols)
	return 'Ada'[i]
}