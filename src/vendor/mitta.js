'use strict';

const Mitt = (function () {
  // Get or create a named handler list
  function list(type, all) {
    let t = type.toLowerCase();
    return all[t] || (all[t] = []);
  }

  /** 
   * Mitt: Tiny functional event emitter / pubsub.
   */
  return class Mitt {
    constructor() {
      this._all = Object.create(null);
    }

    /**
     * expose all
     * @returns {Object}
     */
    all() {
      return this._all;
    }

    /**
     * Register an event handler for the given type.
     * @param {String} type		Type of event to listen for, or `"*"` for all events
     * @param {Function} handler	Function to call in response to the given event
     */
    on(type, handler) {
      list(type, this._all).push(handler);
    }

    /** 
     * Remove an event handler for the given type.
     * @param {String} type		Type of event to unregister `handler` from, or `"*"`
     * @param {Function} handler	Handler function to remove
     */
    off(type, handler) {
      let e = list(type, this._all),
        i = e.indexOf(handler);
      if (~i) e.splice(i, 1);
    }

    /** 
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked prior to type-matched handlers.
     * @param {String} type	The event type to invoke
     * @param {Any} [event]	An event object, passed to each handler
     */
    emit(type, ...event) {
      list('*', this._all).concat(list(type, this._all)).forEach(f => { f(...event); });
    }
  };
})();

export default Mitt;