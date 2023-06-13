class API {
    constructor(url, method = 'GET') {
      this.url = url;
      this.method = method;
      this.#updateSecure();
    }
  
    #secure = false;
  
    #updateSecure() {
      this.#secure = this.url.startsWith('https');
    }
  
    isSecure() {
      return this.#secure;
    }
  
    updateURL(newURL) {
      this.url = newURL;
      this.#updateSecure();
    }
  }
  