export default {
  minLen: 1,
  wait: 500,
  timeout: null,

  isUpdateItems (text) {
    if(text){
      if (text.length >= this.minLen) {
        return true
      }
    }
    else
      return false
  },

  callUpdateItems (text, cb) {
    clearTimeout(this.timeout)
    if (this.isUpdateItems(text)) {
      this.timeout = setTimeout(cb, this.wait)
    }
  },

  findItem (items, text, autoSelectOneResult) {
    if (!text) return
    if (autoSelectOneResult && items.length == 1) {
      return items[0]
    }
  }

}
