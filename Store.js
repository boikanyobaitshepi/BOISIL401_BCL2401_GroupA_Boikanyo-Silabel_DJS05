// store.js
class Store {
    constructor(reducer, initialState) {
      this.reducer = reducer;
      this.state = initialState;
