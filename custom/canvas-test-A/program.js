/**
[header]
@author Beatrice Brown-Mulry
@title  
@desc   
*/

export const settings = {
	renderer : 'canvas',
	canvasSize : {
		width : 400,
		height : 400
	},
	backgroundColor : 'pink',
	color : 'black'
};

// This is the main loop.
// Character coordinates are passed in coord {x, y, index}.
// The function must return a single character or, alternatively, an object:
// {char, color, background, weight}.
export function main() {
	return {
		char : Math.random() < 0.5 ? '╭' : '╯',
		color : `rgb(255,102,112)`
	}
}
