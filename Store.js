// store.js
class Store {
    constructor(reducer, initialState) {
      this.reducer = reducer;
      this.state = initialState;
      this.listeners = [];
    }

    getState() {
        return this.state;
      }
   
    dispatch(action) {
      this.state = this.reducer(this.state, action);
      this.listeners.forEach((listener) => listener(this.state));
    }