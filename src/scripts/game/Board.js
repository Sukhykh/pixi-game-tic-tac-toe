import * as PIXI from 'pixi.js'
import { App } from '../system/App'
import { Cross } from './Cross'
import { Tile } from './Tile'
import { Zero } from './Zero'

export class Board {
	constructor() {
		this.currentPlayer = 'Zero'
		this.boardState = [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		]
		this.container = new PIXI.Container()
		this.tiles = []
		this.createTiles()
		this.container.x = App.config.board.x - this.container.width / 2
		this.container.y = App.config.board.y - this.container.height / 2
	}

	createTiles() {
		const {
			fillColor,
			fillAlpha,
			lineColor,
			lineThickness,
			cornerRadius,
			tileSize,
			gap,
		} = App.config.tiles

		for (let i = 0; i < 3; i++) {
			this.tiles[i] = []
			for (let j = 0; j < 3; j++) {
				const tile = new Tile(
					j * (tileSize + gap),
					i * (tileSize + gap),
					tileSize,
					fillColor,
					fillAlpha,
					lineColor,
					lineThickness,
					cornerRadius,
					() => {
						this.handleTileClick(i, j)
					}
				)
				this.container.addChild(tile)
				this.tiles[i][j] = tile
			}
		}
	}

	handleTileClick(row, column) {
		const symbol = this.currentPlayer === 'Zero' ? 'Zero' : 'Cross'
		const tile = this.tiles[row][column]
		if (!this.boardState[row][column]) {
			this.boardState[row][column] = symbol
			const picture = symbol === 'Zero' ? new Zero() : new Cross()
			picture.getContainer()
			tile.addChild(picture.getContainer())

			App.publish('player_move', this)
			this.currentPlayer = this.currentPlayer === 'Zero' ? 'Cross' : 'Zero'
		}
	}

	getContainer() {
		return this.container
	}
}
