class PickerClass {

  constructor (options) {
    this._eventListeners = {}
  }

  on (eventType, handler) {
    let handlerArray = []
    let index
    if (typeof handler !== 'function') {
      handlerArray = handler
    } else {
      handlerArray = [handler]
    }
    if (this._eventListeners[eventType]) {
      for (index = 0; index < handlerArray.length; index++) {
        this._eventListeners[eventType].push(handlerArray[index])
      }
    } else {
      this._eventListeners[eventType] = handlerArray
    }
    return this
  }

  once (eventType, handler) {
    const that = this
    const proxyHandler = function (...args) {
      handler(...args)
      that.off(eventType, proxyHandler)
    }
    return this.on(eventType, proxyHandler)
  }

  emit(eventType) {
    let args = [...arguments]
    args.splice(0, 1)
    const handlers = this._eventListeners[eventType]
    if (handlers && handlers.length) {
      handlers.forEach(handler => {
        handler(...args)
      })
    }
    return this
  }

  off (eventType, handler) {
    let handlers = this._eventListeners[eventType]
    if (handlers.length === 0) {
      return
    }
    if (typeof handler === 'function') {
      for (let index = 0; index < handlers.length; index++) {
        if (handlers[index] === handler) {
          handlers.splice(index, 1)
        }
      }
    } else {
      this._eventListeners[eventType] = []
    }
    return this
  }
}

export default PickerClass