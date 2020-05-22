const config = {
  'amazon.in': {
    findDomElements: (document) => {
      return document.querySelectorAll && document.querySelectorAll("[class*='price'],[id*='price']");
    }
  }
}

export default config;