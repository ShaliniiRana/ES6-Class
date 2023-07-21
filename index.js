//Write your code here
class API {
  url;
  method;

  #secure;

  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(url) {
    this.url = url;
    this.#secure = url.startsWith('https');
  }
}


//testing




//Do not remove this code
module.exports = { API }
