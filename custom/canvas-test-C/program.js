/**
[header]
@author Beatrice Brown-Mulry
@title  
@desc   
*/

// const pattern = 'ABCxyz01═|+:. ';
// const pattern = '█▉▊▋▌▍▎▏';
// const pattern = '●◉◎○';
const pattern = '#Wabc:+-. ';

const color1 = `rgb(218,248,227)`;
const color2 = `rgb(151,235,219)`;
const color3 = `rgb(0,194,199)`;
const color4 = `rgb(0,134,173)`;
const colorArray = Array(
	color1, color1, color1,
	color2, color2, color2,
	color3, color3, color3,
	color4, color4, color4
);

export const settings = {
	renderer : 'canvas',
	canvasSize : {
		width : 400,
		height : 400
	},
	backgroundColor : `rgb(0,85,130)`,
	color : 'black',
	fps : 30
};

// This is the main loop.
// Character coordinates are passed in coord {x, y, index}.
// The function must return a single character or, alternatively, an object:
// {char, color, background, weight}.

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.0003;
	const x = coord.x;
	const y = coord.y;
	const o = Math.sin(y * Math.cos(t) * 0.2 + x * 0.04 - t) * 20;
	const i = Math.round(Math.abs(x + y + o)) % pattern.length;
	return {
		char   : pattern[i],
		fontWeight : 'bold', // or 'light', 'bold', '400'
		color : colorArray[i]//`rgb(255,139,148)`,
	}
}

// export function main() {
// 	return {
// 		char : Math.random() < 0.5 ? '╭' : '╯',
		
// 	}
// }
