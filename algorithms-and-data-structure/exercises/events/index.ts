/**
 * Create an 'eventing' library out of the
 * Events class.  The Events class should
 * have methods 'on', 'trigger', and 'off'.
 */
class Events {
  private eventList: { [key: string]: any[] } = {}

  // Register an event handler
  on(eventName: string, callback: () => void) {
    if (this.eventList[eventName]) {
      this.eventList[eventName].push(callback)
    } else {
      this.eventList[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName: string) {
    this.eventList[eventName]?.map(cb => cb())
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName: string) {
    delete this.eventList[eventName]
  }
}

export { Events }
