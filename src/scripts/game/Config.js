import { Tools } from '../system/Tools'
import { Game } from './Game'
import { Menu } from './Menu'
import { Win } from './Win'
import { Par } from './Par'

export const Config = {
	loader: Tools.massiveRequire(
		require['context']('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)
	),
	newGame: {
		x: window.innerWidth / 2,
		y: window.innerHeight / 2,
		anchor: 0.5,
		style: {
			fontFamily: 'Verdana',
			fontWeight: 'bold',
			fontStyle: 'italic',
			fontSize: 44,
			fill: ['#808000'],
		},
	},
	background: {
		width: window.innerWidth,
		height: window.innerHeight,
	},
	tiles: {
		fillColor: 0xffffff,
		fillAlpha: 0.5,
		lineColor: 0x808000,
		lineThickness: 2,
		cornerRadius: 10,
		tileSize: 100,
		gap: 10,
	},
	board: {
		x: window.innerWidth / 2,
		y: window.innerHeight / 2,
	},
	startScene: Menu,
	scenes: {
		Menu: Menu,
		Game: Game,
		Win: Win,
		Par: Par,
	},
}
