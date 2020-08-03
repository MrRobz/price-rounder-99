const AMAZON_CONFIG = {
  'ca': {
    locale: 'en-CA',
    currency: 'CDN$'
  },
  'co.uk': {
    locale: 'en-GB',
    currency: '£'
  },
  'fr': {
    locale: 'FR',
    currency: '€'
  },
  'de': {
    locale: null,
    currency: '€'
  },
  'es': {
    locale: null,
    currency: '€'
  },
  'it': {
    locale: null,
    currency: '€'
  },
  'au': {
    locale: 'en-au',
    currency: '$'
  },
  'co.jp': {
    locale: 'ja-jp',
    currency: '￥'
  },
  'cn': {
    locale: 'zh-cn',
    currency: '￥'
  },
  'mx': {
    locale: 'es-mx',
    currency: '$'
  },
  'com': {
    locale: 'en-US',
    currency: '$'
  },
  'in': {
    locale: 'en-IN',
    currency: '₹'
  }
}

export const getAmazonConfig = (code) => {
  return AMAZON_CONFIG[code];
}