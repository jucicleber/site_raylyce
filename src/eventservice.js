var callbacks = [];

class EventService {
  addCallback(key, callback) {
    if (!key || !callback) {
      return;
    }
    var keyCallbacks = this.getCallback(key);
    if (!keyCallbacks) {
      keyCallbacks = { key: key, callbacks: [] };
      callbacks.push(keyCallbacks);
    }
    keyCallbacks.callbacks.push(callback);
  }

  callback(key) {
    if (!key) {
      return;
    }
    var keyCallbacks = this.getCallback(key);
    if (!keyCallbacks) {
      return;
    }
    for (var callback of keyCallbacks.callbacks) {
      try {
        callback();
      } catch (e) {
        console.log(e);
      }
    }
  }

  getCallback(key) {
    if (!key) {
      return null;
    }
    return callbacks.find((value) => value.key === key);
  }
}

const eventService = new EventService();

export default eventService;
