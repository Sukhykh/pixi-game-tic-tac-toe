export class EventManager {
	constructor() {
		this.events = {}
	}

	subscribe(event, callback, context) {
		if (!this.events[event]) {
			this.events[event] = []
		}
		this.events[event].push({ callback, context })
	}

	unsubscribe(event, callback) {
		if (this.events[event]) {
			this.events[event] = this.events[event].filter(
				subscriber => subscriber.callback !== callback
			)
		}
	}

	publish(event, ...args) {
		if (this.events[event]) {
			this.events[event].forEach(subscriber =>
				subscriber.callback.apply(subscriber.context, args)
			)
		}
	}
}
