import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
import * as PIXI from 'pixi.js'
import { EventManager } from './EventManager'
import { Loader } from './Loader'
import { ScenesManager } from './ScenesManager'

class Application {
	constructor() {
		this.eventManager = new EventManager()
	}

	run(config) {
		gsap.registerPlugin(PixiPlugin)
		PixiPlugin.registerPIXI(PIXI)

		this.config = config

		this.app = new PIXI.Application({ resizeTo: window })
		document.body.appendChild(this.app.view)

		this.loader = new Loader(this.app.loader, this.config)
		this.loader.preload().then(() => this.start())

		this.scenes = new ScenesManager()
		this.app.stage.addChild(this.scenes.container)
	}

	res(key) {
		return this.loader.resources[key].texture
	}

	sprite(key) {
		return new PIXI.Sprite(this.res(key))
	}

	publish(event, ...args) {
		this.eventManager.publish(event, ...args)
	}

	subscribe(event, callback, context) {
		this.eventManager.subscribe(event, callback, context)
	}

	unsubscribe(event, callback) {
		this.eventManager.unsubscribe(event, callback)
	}

	start() {
		this.scenes.start('Menu')
	}
}

export const App = new Application()
