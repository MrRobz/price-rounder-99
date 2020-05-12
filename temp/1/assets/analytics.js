const background = (function(t) {
  function e(r) {
    if (n[r]) {
      return n[r].exports;
    }
    const o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var n = {};
  return (
    (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (e.n = function(t) {
      const n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };

      return e.d(n, 'a', n), n;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = '/'),
    e((e.s = 46))
  );
})([
  function(t, e) {
    const n = (t.exports =
      typeof window != 'undefined' && window.Math == Math
        ? window
        : typeof self != 'undefined' && self.Math == Math
        ? self
        : Function('return this')());

    typeof __g == 'number' && (__g = n);
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      return O.call(t) === '[object Array]';
    }
    function o(t) {
      return O.call(t) === '[object ArrayBuffer]';
    }
    function i(t) {
      return typeof FormData != 'undefined' && t instanceof FormData;
    }
    function u(t) {
      return typeof ArrayBuffer != 'undefined' && ArrayBuffer.isView
        ? ArrayBuffer.isView(t)
        : t && t.buffer && t.buffer instanceof ArrayBuffer;
    }
    function c(t) {
      return typeof t == 'string';
    }
    function a(t) {
      return typeof t == 'number';
    }
    function s(t) {
      return void 0 === t;
    }
    function f(t) {
      return t !== null && typeof t == 'object';
    }
    function l(t) {
      return O.call(t) === '[object Date]';
    }
    function p(t) {
      return O.call(t) === '[object File]';
    }
    function h(t) {
      return O.call(t) === '[object Blob]';
    }
    function d(t) {
      return O.call(t) === '[object Function]';
    }
    function v(t) {
      return f(t) && d(t.pipe);
    }
    function m(t) {
      return (
        typeof URLSearchParams != 'undefined' && t instanceof URLSearchParams
      );
    }
    function y(t) {
      return t.replace(/^\s*/, '').replace(/\s*$/, '');
    }
    function g() {
      return (
        (typeof navigator == 'undefined' ||
          navigator.product !== 'ReactNative') &&
        (typeof window != 'undefined' && typeof document != 'undefined')
      );
    }
    function w(t, e) {
      if (t !== null && void 0 !== t) {
        if ((typeof t != 'object' && (t = [t]), r(t))) {
          for (let n = 0, o = t.length; n < o; n++) {
            e.call(null, t[n], n, t);
          }
        } else {
          for (const i in t) {
            Object.prototype.hasOwnProperty.call(t, i) &&
              e.call(null, t[i], i, t);
          }
        }
      }
    }
    function x() {
      function t(t, n) {
        typeof e[n] == 'object' && typeof t == 'object'
          ? (e[n] = x(e[n], t))
          : (e[n] = t);
      }
      for (var e = {}, n = 0, r = arguments.length; n < r; n++) {
        w(arguments[n], t);
      }

      return e;
    }
    function b(t, e, n) {
      return (
        w(e, (e, r) => {
          t[r] = n && typeof e == 'function' ? _(e, n) : e;
        }),
        t
      );
    }
    var _ = n(41);
    const S = n(86);
    var O = Object.prototype.toString;
    t.exports = {
      isArray: r,
      isArrayBuffer: o,
      isBuffer: S,
      isFormData: i,
      isArrayBufferView: u,
      isString: c,
      isNumber: a,
      isObject: f,
      isUndefined: s,
      isDate: l,
      isFile: p,
      isBlob: h,
      isFunction: d,
      isStream: v,
      isURLSearchParams: m,
      isStandardBrowserEnv: g,
      forEach: w,
      merge: x,
      extend: b,
      trim: y,
    };
  },
  function(t, e, n) {
    const r = n(29)('wks');
    const o = n(30);
    const i = n(0).Symbol;
    const u = typeof i == 'function';
    (t.exports = function(t) {
      return r[t] || (r[t] = (u && i[t]) || (u ? i : o)(`Symbol.${t}`));
    }).store = r;
  },
  function(t, e) {
    const n = (t.exports = { version: '2.5.7' });
    typeof __e == 'number' && (__e = n);
  },
  function(t, e, n) {
    const r = n(6);
    t.exports = function(t) {
      if (!r(t)) {
        throw TypeError(`${t} is not an object!`);
      }

      return t;
    };
  },
  function(t, e, n) {
    const r = n(12);
    const o = n(27);
    t.exports = n(7)
      ? function(t, e, n) {
          return r.f(t, e, o(1, n));
        }
      : function(t, e, n) {
          return (t[e] = n), t;
        };
  },
  function(t, e) {
    t.exports = function(t) {
      return typeof t == 'object' ? t !== null : typeof t == 'function';
    };
  },
  function(t, e, n) {
    t.exports = !n(26)(
      () =>
        Object.defineProperty({}, 'a', {
          get() {
            return 7;
          },
        }).a != 7
    );
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, n) {
    const r = n(0);
    const o = n(3);
    const i = n(10);
    const u = n(5);
    const c = n(13);
    var a = function(t, e, n) {
      let s;
      let f;
      let l;
      const p = t & a.F;
      const h = t & a.G;
      const d = t & a.S;
      const v = t & a.P;
      const m = t & a.B;
      const y = t & a.W;
      const g = h ? o : o[e] || (o[e] = {});
      const w = g.prototype;
      const x = h ? r : d ? r[e] : (r[e] || {}).prototype;
      h && (n = e);
      for (s in n) {
        ((f = !p && x && void 0 !== x[s]) && c(g, s)) ||
          ((l = f ? x[s] : n[s]),
          (g[s] =
            h && typeof x[s] != 'function'
              ? n[s]
              : m && f
              ? i(l, r)
              : y && x[s] == l
              ? (function(t) {
                  const e = function(e, n, r) {
                    if (this instanceof t) {
                      switch (arguments.length) {
                        case 0:
                          return new t();
                        case 1:
                          return new t(e);
                        case 2:
                          return new t(e, n);
                      }

                      return new t(e, n, r);
                    }

                    return t.apply(this, arguments);
                  };

                  return (e.prototype = t.prototype), e;
                })(l)
              : v && typeof l == 'function'
              ? i(Function.call, l)
              : l),
          v &&
            (((g.virtual || (g.virtual = {}))[s] = l),
            t & a.R && w && !w[s] && u(w, s, l)));
      }
    };
    (a.F = 1),
      (a.G = 2),
      (a.S = 4),
      (a.P = 8),
      (a.B = 16),
      (a.W = 32),
      (a.U = 64),
      (a.R = 128),
      (t.exports = a);
  },
  function(t, e, n) {
    const r = n(11);
    t.exports = function(t, e, n) {
      if ((r(t), void 0 === e)) {
        return t;
      }

      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function(n, r, o) {
            return t.call(e, n, r, o);
          };
      }

      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (typeof t != 'function') {
        throw TypeError(`${t} is not a function!`);
      }

      return t;
    };
  },
  function(t, e, n) {
    const r = n(4);
    const o = n(52);
    const i = n(53);
    const u = Object.defineProperty;
    e.f = n(7)
      ? Object.defineProperty
      : function(t, e, n) {
          if ((r(t), (e = i(e, !0)), r(n), o)) {
            try {
              return u(t, e, n);
            } catch (t) {}
          }
          if ('get' in n || 'set' in n) {
            throw TypeError('Accessors not supported!');
          }

          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function(t, e) {
    const n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  },
  function(t, e) {
    const n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  },
  function(t, e, n) {
    t.exports = { default: n(48), __esModule: !0 };
  },
  function(t, e) {
    const n = Math.ceil;
    const r = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (void 0 == t) {
        throw TypeError(`Can't call method on  ${t}`);
      }

      return t;
    };
  },
  function(t, e) {
    t.exports = !0;
  },
  function(t, e, n) {
    const r = n(6);
    const o = n(0).document;
    const i = r(o) && r(o.createElement);
    t.exports = function(t) {
      return i ? o.createElement(t) : {};
    };
  },
  function(t, e, n) {
    const r = n(60);
    const o = n(17);
    t.exports = function(t) {
      return r(o(t));
    };
  },
  function(t, e, n) {
    const r = n(29)('keys');
    const o = n(30);
    t.exports = function(t) {
      return r[t] || (r[t] = o(t));
    };
  },
  function(t, e, n) {
    const r = n(12).f;
    const o = n(13);
    const i = n(2)('toStringTag');
    t.exports = function(t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: e });
    };
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      let e;
      let n;
      (this.promise = new t((t, r) => {
        if (void 0 !== e || void 0 !== n) {
          throw TypeError('Bad Promise constructor');
        }
        (e = t), (n = r);
      })),
        (this.resolve = o(e)),
        (this.reject = o(n));
    }
    var o = n(11);
    t.exports.f = function(t) {
      return new r(t);
    };
  },
  function(t, e, n) {
    'use strict';
    (function(e) {
      function r(t, e) {
        !o.isUndefined(t) &&
          o.isUndefined(t['Content-Type']) &&
          (t['Content-Type'] = e);
      }
      var o = n(1);
      const i = n(89);
      const u = { 'Content-Type': 'application/x-www-form-urlencoded' };
      const c = {
        adapter: (function() {
          let t;
          return (
            typeof XMLHttpRequest != 'undefined'
              ? (t = n(42))
              : void 0 !== e && (t = n(42)),
            t
          );
        })(),
        transformRequest: [
          function(t, e) {
            return (
              i(e, 'Content-Type'),
              o.isFormData(t) ||
              o.isArrayBuffer(t) ||
              o.isBuffer(t) ||
              o.isStream(t) ||
              o.isFile(t) ||
              o.isBlob(t)
                ? t
                : o.isArrayBufferView(t)
                ? t.buffer
                : o.isURLSearchParams(t)
                ? (r(e, 'application/x-www-form-urlencoded;charset=utf-8'),
                  t.toString())
                : o.isObject(t)
                ? (r(e, 'application/json;charset=utf-8'), JSON.stringify(t))
                : t
            );
          },
        ],
        transformResponse: [
          function(t) {
            if (typeof t == 'string') {
              try {
                t = JSON.parse(t);
              } catch (t) {}
            }

            return t;
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        validateStatus(t) {
          return t >= 200 && t < 300;
        },
      };

      (c.headers = { common: { Accept: 'application/json, text/plain, */*' } }),
        o.forEach(['delete', 'get', 'head'], t => {
          c.headers[t] = {};
        }),
        o.forEach(['post', 'put', 'patch'], t => {
          c.headers[t] = o.merge(u);
        }),
        (t.exports = c);
    }.call(e, n(88)));
  },
  function(t, e, n) {
    'use strict';
    const r = n(18);
    const o = n(9);
    const i = n(54);
    const u = n(5);
    const c = n(8);
    const a = n(55);
    const s = n(22);
    const f = n(63);
    const l = n(2)('iterator');
    const p = !([].keys && 'next' in [].keys());
    const h = function() {
      return this;
    };

    t.exports = function(t, e, n, d, v, m, y) {
      a(n, e, d);
      let g;
      let w;
      let x;
      const b = function(t) {
        if (!p && t in L) {
          return L[t];
        }

        switch (t) {
          case 'keys':
          case 'values':
            return function() {
              return new n(this, t);
            };
        }

        return function() {
          return new n(this, t);
        };
      };

      const _ = `${e} Iterator`;
      const S = v == 'values';
      let O = !1;
      var L = t.prototype;
      const j = L[l] || L['@@iterator'] || (v && L[v]);
      let T = j || b(v);
      const E = v ? (S ? b('entries') : T) : void 0;
      const P = e == 'Array' ? L.entries || j : j;
      if (
        (P &&
          (x = f(P.call(new t()))) !== Object.prototype &&
          x.next &&
          (s(x, _, !0), r || typeof x[l] == 'function' || u(x, l, h)),
        S &&
          j &&
          j.name !== 'values' &&
          ((O = !0),
          (T = function() {
            return j.call(this);
          })),
        (r && !y) || (!p && !O && L[l]) || u(L, l, T),
        (c[e] = T),
        (c[_] = h),
        v)
      ) {
        if (
          ((g = {
            values: S ? T : b('values'),
            keys: m ? T : b('keys'),
            entries: E,
          }),
          y)
        ) {
          for (w in g) {
            w in L || i(L, w, g[w]);
          }
        } else {
          o(o.P + o.F * (p || O), e, g);
        }
      }

      return g;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function(t, e, n) {
    const r = n(16);
    const o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function(t, e, n) {
    const r = n(3);
    const o = n(0);
    const i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
    (t.exports = function(t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: r.version,
      mode: n(18) ? 'pure' : 'global',
      copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
    });
  },
  function(t, e) {
    let n = 0;
    const r = Math.random();
    t.exports = function(t) {
      return 'Symbol('.concat(
        void 0 === t ? '' : t,
        ')_',
        (++n + r).toString(36)
      );
    };
  },
  function(t, e) {
    t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    );
  },
  function(t, e, n) {
    const r = n(0).document;
    t.exports = r && r.documentElement;
  },
  function(t, e, n) {
    const r = n(14);
    const o = n(2)('toStringTag');
    const i =
      r(
        (function() {
          return arguments;
        })()
      ) == 'Arguments';

    const u = function(t, e) {
      try {
        return t[e];
      } catch (t) {}
    };

    t.exports = function(t) {
      let e;
      let n;
      let c;
      return void 0 === t
        ? 'Undefined'
        : t === null
        ? 'Null'
        : typeof (n = u((e = Object(t)), o)) == 'string'
        ? n
        : i
        ? r(e)
        : (c = r(e)) == 'Object' && typeof e.callee == 'function'
        ? 'Arguments'
        : c;
    };
  },
  function(t, e, n) {
    const r = n(4);
    const o = n(11);
    const i = n(2)('species');
    t.exports = function(t, e) {
      let n;
      const u = r(t).constructor;
      return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n);
    };
  },
  function(t, e, n) {
    let r;
    let o;
    let i;
    const u = n(10);
    const c = n(75);
    const a = n(32);
    const s = n(19);
    const f = n(0);
    const l = f.process;
    let p = f.setImmediate;
    let h = f.clearImmediate;
    const d = f.MessageChannel;
    const v = f.Dispatch;
    let m = 0;
    const y = {};
    const g = function() {
      const t = +this;
      if (y.hasOwnProperty(t)) {
        const e = y[t];
        delete y[t], e();
      }
    };

    const w = function(t) {
      g.call(t.data);
    };

    (p && h) ||
      ((p = function(t) {
        for (var e = [], n = 1; arguments.length > n; ) {
          e.push(arguments[n++]);
        }

        return (
          (y[++m] = function() {
            c(typeof t == 'function' ? t : Function(t), e);
          }),
          r(m),
          m
        );
      }),
      (h = function(t) {
        delete y[t];
      }),
      n(14)(l) == 'process'
        ? (r = function(t) {
            l.nextTick(u(g, t, 1));
          })
        : v && v.now
        ? (r = function(t) {
            v.now(u(g, t, 1));
          })
        : d
        ? ((o = new d()),
          (i = o.port2),
          (o.port1.onmessage = w),
          (r = u(i.postMessage, i, 1)))
        : f.addEventListener &&
          typeof postMessage == 'function' &&
          !f.importScripts
        ? ((r = function(t) {
            f.postMessage(`${t}`, '*');
          }),
          f.addEventListener('message', w, !1))
        : (r =
            'onreadystatechange' in s('script')
              ? function(t) {
                  a.appendChild(s('script')).onreadystatechange = function() {
                    a.removeChild(this), g.call(t);
                  };
                }
              : function(t) {
                  setTimeout(u(g, t, 1), 0);
                })),
      (t.exports = { set: p, clear: h });
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function(t, e, n) {
    const r = n(4);
    const o = n(6);
    const i = n(23);
    t.exports = function(t, e) {
      if ((r(t), o(e) && e.constructor === t)) {
        return e;
      }
      const n = i.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  },
  function(t, e, n) {
    t.exports = n(83);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    const r = n(15);
    const o = (function(t) {
      return t && t.__esModule ? t : { default: t };
    })(r);

    e.default = function(t) {
      return function() {
        const e = t.apply(this, arguments);
        return new o.default((t, n) => {
          function r(i, u) {
            try {
              var c = e[i](u);
              var a = c.value;
            } catch (t) {
              return void n(t);
            }
            if (!c.done) {
              return o.default.resolve(a).then(
                t => {
                  r('next', t);
                },
                t => {
                  r('throw', t);
                }
              );
            }
            t(a);
          }

          return r('next');
        });
      };
    };
  },
  function(t, e, n) {
    t.exports = n(85);
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t, e) {
      return function() {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
          n[r] = arguments[r];
        }

        return t.apply(e, n);
      };
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(1);
    const o = n(90);
    const i = n(92);
    const u = n(93);
    const c = n(94);
    const a = n(43);
    t.exports = function(t) {
      return new Promise((e, s) => {
        let f = t.data;
        const l = t.headers;
        r.isFormData(f) && delete l['Content-Type'];
        let p = new XMLHttpRequest();
        if (t.auth) {
          const h = t.auth.username || '';
          const d = t.auth.password || '';
          l.Authorization = `Basic ${btoa(`${h}:${d}`)}`;
        }
        if (
          (p.open(
            t.method.toUpperCase(),
            i(t.url, t.params, t.paramsSerializer),
            !0
          ),
          (p.timeout = t.timeout),
          (p.onreadystatechange = function() {
            if (
              p &&
              p.readyState === 4 &&
              (p.status !== 0 ||
                (p.responseURL && p.responseURL.indexOf('file:') === 0))
            ) {
              const n =
                'getAllResponseHeaders' in p
                  ? u(p.getAllResponseHeaders())
                  : null;

              const r =
                t.responseType && t.responseType !== 'text'
                  ? p.response
                  : p.responseText;

              const i = {
                data: r,
                status: p.status,
                statusText: p.statusText,
                headers: n,
                config: t,
                request: p,
              };

              o(e, s, i), (p = null);
            }
          }),
          (p.onerror = function() {
            s(a('Network Error', t, null, p)), (p = null);
          }),
          (p.ontimeout = function() {
            s(a(`timeout of ${t.timeout}ms exceeded`, t, 'ECONNABORTED', p)),
              (p = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          const v = n(95);
          const m =
            (t.withCredentials || c(t.url)) && t.xsrfCookieName
              ? v.read(t.xsrfCookieName)
              : void 0;

          m && (l[t.xsrfHeaderName] = m);
        }
        if (
          ('setRequestHeader' in p &&
            r.forEach(l, (t, e) => {
              void 0 === f && e.toLowerCase() === 'content-type'
                ? delete l[e]
                : p.setRequestHeader(e, t);
            }),
          t.withCredentials && (p.withCredentials = !0),
          t.responseType)
        ) {
          try {
            p.responseType = t.responseType;
          } catch (e) {
            if (t.responseType !== 'json') {
              throw e;
            }
          }
        }
        typeof t.onDownloadProgress == 'function' &&
          p.addEventListener('progress', t.onDownloadProgress),
          typeof t.onUploadProgress == 'function' &&
            p.upload &&
            p.upload.addEventListener('progress', t.onUploadProgress),
          t.cancelToken &&
            t.cancelToken.promise.then(t => {
              p && (p.abort(), s(t), (p = null));
            }),
          void 0 === f && (f = null),
          p.send(f);
      });
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(91);
    t.exports = function(t, e, n, o, i) {
      const u = new Error(t);
      return r(u, e, n, o, i);
    };
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t) {
      return !(!t || !t.__CANCEL__);
    };
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      this.message = t;
    }
    (r.prototype.toString = function() {
      return `Cancel${this.message ? `: ${this.message}` : ''}`;
    }),
      (r.prototype.__CANCEL__ = !0),
      (t.exports = r);
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    const r = n(47);
    Object(r.a)();
  },
  function(t, e, n) {
    'use strict';
    n.d(e, 'a', () => p);
    const r = n(15);
    const o = n.n(r);
    const i = n(38);
    const u = n.n(i);
    const c = n(39);
    const a = n.n(c);
    const s = n(40);
    const f = (n.n(s), n(103));
    const l = this;
    var p = function() {
      const t = [];
      const e = function(e) {
        t.find(t => t.id === e) ||
          t.push({ id: e, created_at: Math.floor(Date.now() / 1e3) });
      };

      chrome.runtime.onInstalled.addListener(t => {
        const e = t.reason;
        chrome.runtime.getPlatformInfo(
          (function() {
            const t = a()(
              u.a.mark(function t(n) {
                const r = n.os;
                const o = n.arch;
                const i = n.nacl_arch;
                return u.a.wrap(
                  t => {
                    for (;;) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            Object(f.g)({
                              reason: e,
                              os: r,
                              arch: o,
                              nacl_arch: i,
                            })
                          );
                        case 2:
                        case 'end':
                          return t.stop();
                      }
                    }
                  },
                  t,
                  l
                );
              })
            );

            return function(e) {
              return t.apply(this, arguments);
            };
          })()
        );
      }),
        setTimeout(() => {
          chrome.runtime.onStartup.addListener(Object(f.a)({}));
        }, 2e4);
      const n = function(t, e, n) {
        e &&
          e.status === 'complete' &&
          chrome.tabs.get(
            t,
            (function() {
              const t = a()(
                u.a.mark(function t(e) {
                  let n;
                  let r;
                  let o;
                  const i = e.url;
                  const c = e.title;
                  return u.a.wrap(
                    t => {
                      for (;;) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            (n = { title: c, url: i }),
                              i &&
                                ((r = Object(f.b)()),
                                (o = Object(f.e)()),
                                (r >= o || !r) && Object(f.h)(n));
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                      }
                    },
                    t,
                    l
                  );
                })
              );

              return function(e) {
                return t.apply(this, arguments);
              };
            })()
          );
      };

      const r = function() {
        const t = Object(f.d)();
        return setInterval(
          a()(
            u.a.mark(function t() {
              let n;
              let r;
              return u.a.wrap(
                t => {
                  for (;;) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((n = Object(f.b)()),
                          (r = Object(f.e)()),
                          !(n >= r) && n)
                        ) {
                          t.next = 6;
                          break;
                        }

                        return (
                          (t.next = 5),
                          new o.a(t =>
                            setTimeout(t, Math.floor(3e3 * Math.random()) + 1e3)
                          )
                        );
                      case 5:
                        Object(f.h)({}, e);
                      case 6:
                      case 'end':
                        return t.stop();
                    }
                  }
                },
                t,
                l
              );
            })
          ),
          6e4 * t
        );
      };

      let i = null;
      setInterval(
        a()(
          u.a.mark(function e() {
            let o;
            let c;
            let a;
            return u.a.wrap(
              e => {
                for (;;) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(f.a)({});
                    case 2:
                      for (
                        o = Object(f.f)(),
                          o === 'interval'
                            ? (chrome.tabs.onUpdated.hasListener(n) &&
                                chrome.tabs.onUpdated.removeListener(n),
                              i || (i = r()))
                            : o === 'action' &&
                              (i && (clearInterval(i), (i = null)),
                              chrome.tabs.onUpdated.hasListener(n) ||
                                chrome.tabs.onUpdated.addListener(n)),
                          c = function(e) {
                            const n = t[e];
                            if (
                              (Math.floor(Date.now() / 1e3) - n.created_at) /
                                60 >
                              Object(f.c)()
                            ) {
                              const r = n.id;
                              try {
                                chrome.windows.get(r, {}, n => {
                                  t.splice(e, 1), n && chrome.windows.remove(r);
                                });
                              } catch (e) {
                                t.splice(t.findIndex(t => t.id === r), 1);
                              }
                            }
                          },
                          a = 0;
                        a < t.length;
                        a++
                      ) {
                        c(a);
                      }
                    case 6:
                    case 'end':
                      return e.stop();
                  }
                }
              },
              e,
              l
            );
          })
        ),
        12e4
      );
    };
  },
  function(t, e, n) {
    n(49), n(50), n(65), n(69), n(81), n(82), (t.exports = n(3).Promise);
  },
  function(t, e) {},
  function(t, e, n) {
    'use strict';
    const r = n(51)(!0);
    n(25)(
      String,
      'String',
      function(t) {
        (this._t = String(t)), (this._i = 0);
      },
      function() {
        let t;
        const e = this._t;
        const n = this._i;
        return n >= e.length
          ? { value: void 0, done: !0 }
          : ((t = r(e, n)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function(t, e, n) {
    const r = n(16);
    const o = n(17);
    t.exports = function(t) {
      return function(e, n) {
        let i;
        let u;
        const c = String(o(e));
        const a = r(n);
        const s = c.length;
        return a < 0 || a >= s
          ? t
            ? ''
            : void 0
          : ((i = c.charCodeAt(a)),
            i < 55296 ||
            i > 56319 ||
            a + 1 === s ||
            (u = c.charCodeAt(a + 1)) < 56320 ||
            u > 57343
              ? t
                ? c.charAt(a)
                : i
              : t
              ? c.slice(a, a + 2)
              : u - 56320 + ((i - 55296) << 10) + 65536);
      };
    };
  },
  function(t, e, n) {
    t.exports =
      !n(7) &&
      !n(26)(
        () =>
          Object.defineProperty(n(19)('div'), 'a', {
            get() {
              return 7;
            },
          }).a != 7
      );
  },
  function(t, e, n) {
    const r = n(6);
    t.exports = function(t, e) {
      if (!r(t)) {
        return t;
      }
      let n;
      let o;
      if (e && typeof (n = t.toString) == 'function' && !r((o = n.call(t)))) {
        return o;
      }
      if (typeof (n = t.valueOf) == 'function' && !r((o = n.call(t)))) {
        return o;
      }
      if (!e && typeof (n = t.toString) == 'function' && !r((o = n.call(t)))) {
        return o;
      }
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e, n) {
    t.exports = n(5);
  },
  function(t, e, n) {
    'use strict';
    const r = n(56);
    const o = n(27);
    const i = n(22);
    const u = {};
    n(5)(u, n(2)('iterator'), function() {
      return this;
    }),
      (t.exports = function(t, e, n) {
        (t.prototype = r(u, { next: o(1, n) })), i(t, `${e} Iterator`);
      });
  },
  function(t, e, n) {
    const r = n(4);
    const o = n(57);
    const i = n(31);
    const u = n(21)('IE_PROTO');
    const c = function() {};
    var a = function() {
      let t;
      const e = n(19)('iframe');
      let r = i.length;
      for (
        e.style.display = 'none',
          n(32).appendChild(e),
          e.src = 'javascript:',
          t = e.contentWindow.document,
          t.open(),
          t.write('<script>document.F=Object</script>'),
          t.close(),
          a = t.F;
        r--;

      ) {
        delete a.prototype[i[r]];
      }

      return a();
    };
    t.exports =
      Object.create ||
      function(t, e) {
        let n;
        return (
          t !== null
            ? ((c.prototype = r(t)),
              (n = new c()),
              (c.prototype = null),
              (n[u] = t))
            : (n = a()),
          void 0 === e ? n : o(n, e)
        );
      };
  },
  function(t, e, n) {
    const r = n(12);
    const o = n(4);
    const i = n(58);
    t.exports = n(7)
      ? Object.defineProperties
      : function(t, e) {
          o(t);
          for (var n, u = i(e), c = u.length, a = 0; c > a; ) {
            r.f(t, (n = u[a++]), e[n]);
          }

          return t;
        };
  },
  function(t, e, n) {
    const r = n(59);
    const o = n(31);
    t.exports =
      Object.keys ||
      function(t) {
        return r(t, o);
      };
  },
  function(t, e, n) {
    const r = n(13);
    const o = n(20);
    const i = n(61)(!1);
    const u = n(21)('IE_PROTO');
    t.exports = function(t, e) {
      let n;
      const c = o(t);
      let a = 0;
      const s = [];
      for (n in c) {
        n != u && r(c, n) && s.push(n);
      }
      for (; e.length > a; ) {
        r(c, (n = e[a++])) && (~i(s, n) || s.push(n));
      }

      return s;
    };
  },
  function(t, e, n) {
    const r = n(14);
    t.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return r(t) == 'String' ? t.split('') : Object(t);
        };
  },
  function(t, e, n) {
    const r = n(20);
    const o = n(28);
    const i = n(62);
    t.exports = function(t) {
      return function(e, n, u) {
        let c;
        const a = r(e);
        const s = o(a.length);
        let f = i(u, s);
        if (t && n != n) {
          for (; s > f; ) {
            if ((c = a[f++]) != c) {
              return !0;
            }
          }
        } else {
          for (; s > f; f++) {
            if ((t || f in a) && a[f] === n) {
              return t || f || 0;
            }
          }
        }

        return !t && -1;
      };
    };
  },
  function(t, e, n) {
    const r = n(16);
    const o = Math.max;
    const i = Math.min;
    t.exports = function(t, e) {
      return (t = r(t)), t < 0 ? o(t + e, 0) : i(t, e);
    };
  },
  function(t, e, n) {
    const r = n(13);
    const o = n(64);
    const i = n(21)('IE_PROTO');
    const u = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function(t) {
        return (
          (t = o(t)),
          r(t, i)
            ? t[i]
            : typeof t.constructor == 'function' && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? u
            : null
        );
      };
  },
  function(t, e, n) {
    const r = n(17);
    t.exports = function(t) {
      return Object(r(t));
    };
  },
  function(t, e, n) {
    n(66);
    for (
      let r = n(0),
        o = n(5),
        i = n(8),
        u = n(2)('toStringTag'),
        c = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
          ','
        ),
        a = 0;
      a < c.length;
      a++
    ) {
      const s = c[a];
      const f = r[s];
      const l = f && f.prototype;
      l && !l[u] && o(l, u, s), (i[s] = i.Array);
    }
  },
  function(t, e, n) {
    'use strict';
    const r = n(67);
    const o = n(68);
    const i = n(8);
    const u = n(20);
    (t.exports = n(25)(
      Array,
      'Array',
      function(t, e) {
        (this._t = u(t)), (this._i = 0), (this._k = e);
      },
      function() {
        const t = this._t;
        const e = this._k;
        const n = this._i++;
        return !t || n >= t.length
          ? ((this._t = void 0), o(1))
          : e == 'keys'
          ? o(0, n)
          : e == 'values'
          ? o(0, t[n])
          : o(0, [n, t[n]]);
      },
      'values'
    )),
      (i.Arguments = i.Array),
      r('keys'),
      r('values'),
      r('entries');
  },
  function(t, e) {
    t.exports = function() {};
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { value: e, done: !!t };
    };
  },
  function(t, e, n) {
    'use strict';
    let r;
    let o;
    let i;
    let u;
    const c = n(18);
    const a = n(0);
    const s = n(10);
    const f = n(33);
    const l = n(9);
    const p = n(6);
    const h = n(11);
    const d = n(70);
    const v = n(71);
    const m = n(34);
    const y = n(35).set;
    const g = n(76)();
    const w = n(23);
    const x = n(36);
    const b = n(77);
    const _ = n(37);
    const S = a.TypeError;
    const O = a.process;
    const L = O && O.versions;
    const j = (L && L.v8) || '';
    let T = a.Promise;
    const E = f(O) == 'process';
    const P = function() {};
    let k = (o = w.f);
    const R = !!(function() {
      try {
        const t = T.resolve(1);
        const e = ((t.constructor = {})[n(2)('species')] = function(t) {
          t(P, P);
        });

        return (
          (E || typeof PromiseRejectionEvent == 'function') &&
          t.then(P) instanceof e &&
          j.indexOf('6.6') !== 0 &&
          b.indexOf('Chrome/66') === -1
        );
      } catch (t) {}
    })();

    const M = function(t) {
      let e;
      return !(!p(t) || typeof (e = t.then) != 'function') && e;
    };

    const A = function(t, e) {
      if (!t._n) {
        t._n = !0;
        const n = t._c;
        g(() => {
          for (var r = t._v, o = t._s == 1, i = 0; n.length > i; ) {
            !(function(e) {
              let n;
              let i;
              let u;
              const c = o ? e.ok : e.fail;
              const a = e.resolve;
              const s = e.reject;
              const f = e.domain;
              try {
                c
                  ? (o || (t._h == 2 && N(t), (t._h = 1)),
                    !0 === c
                      ? (n = r)
                      : (f && f.enter(), (n = c(r)), f && (f.exit(), (u = !0))),
                    n === e.promise
                      ? s(S('Promise-chain cycle'))
                      : (i = M(n))
                      ? i.call(n, a, s)
                      : a(n))
                  : s(r);
              } catch (t) {
                f && !u && f.exit(), s(t);
              }
            })(n[i++]);
          }
          (t._c = []), (t._n = !1), e && !t._h && I(t);
        });
      }
    };

    var I = function(t) {
      y.call(a, () => {
        let e;
        let n;
        let r;
        const o = t._v;
        const i = C(t);
        if (
          (i &&
            ((e = x(() => {
              E
                ? O.emit('unhandledRejection', o, t)
                : (n = a.onunhandledrejection)
                ? n({ promise: t, reason: o })
                : (r = a.console) &&
                  r.error &&
                  r.error('Unhandled promise rejection', o);
            })),
            (t._h = E || C(t) ? 2 : 1)),
          (t._a = void 0),
          i && e.e)
        ) {
          throw e.v;
        }
      });
    };
    var C = function(t) {
      return t._h !== 1 && (t._a || t._c).length === 0;
    };
    var N = function(t) {
      y.call(a, () => {
        let e;
        E
          ? O.emit('rejectionHandled', t)
          : (e = a.onrejectionhandled) && e({ promise: t, reason: t._v });
      });
    };
    const F = function(t) {
      let e = this;
      e._d ||
        ((e._d = !0),
        (e = e._w || e),
        (e._v = t),
        (e._s = 2),
        e._a || (e._a = e._c.slice()),
        A(e, !0));
    };

    var U = function(t) {
      let e;
      let n = this;
      if (!n._d) {
        (n._d = !0), (n = n._w || n);
        try {
          if (n === t) {
            throw S("Promise can't be resolved itself");
          }
          (e = M(t))
            ? g(() => {
                const r = { _w: n, _d: !1 };
                try {
                  e.call(t, s(U, r, 1), s(F, r, 1));
                } catch (t) {
                  F.call(r, t);
                }
              })
            : ((n._v = t), (n._s = 1), A(n, !1));
        } catch (t) {
          F.call({ _w: n, _d: !1 }, t);
        }
      }
    };
    R ||
      ((T = function(t) {
        d(this, T, 'Promise', '_h'), h(t), r.call(this);
        try {
          t(s(U, this, 1), s(F, this, 1));
        } catch (t) {
          F.call(this, t);
        }
      }),
      (r = function(t) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }),
      (r.prototype = n(78)(T.prototype, {
        then(t, e) {
          const n = k(m(this, T));
          return (
            (n.ok = typeof t != 'function' || t),
            (n.fail = typeof e == 'function' && e),
            (n.domain = E ? O.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && A(this, !1),
            n.promise
          );
        },
        catch(t) {
          return this.then(void 0, t);
        },
      })),
      (i = function() {
        const t = new r();
        (this.promise = t),
          (this.resolve = s(U, t, 1)),
          (this.reject = s(F, t, 1));
      }),
      (w.f = k = function(t) {
        return t === T || t === u ? new i(t) : o(t);
      })),
      l(l.G + l.W + l.F * !R, { Promise: T }),
      n(22)(T, 'Promise'),
      n(79)('Promise'),
      (u = n(3).Promise),
      l(l.S + l.F * !R, 'Promise', {
        reject(t) {
          const e = k(this);
          return (0, e.reject)(t), e.promise;
        },
      }),
      l(l.S + l.F * (c || !R), 'Promise', {
        resolve(t) {
          return _(c && this === u ? T : this, t);
        },
      }),
      l(
        l.S +
          l.F *
            !(
              R &&
              n(80)(t => {
                T.all(t).catch(P);
              })
            ),
        'Promise',
        {
          all(t) {
            const e = this;
            const n = k(e);
            const r = n.resolve;
            const o = n.reject;
            const i = x(() => {
              const n = [];
              let i = 0;
              let u = 1;
              v(t, !1, t => {
                const c = i++;
                let a = !1;
                n.push(void 0),
                  u++,
                  e.resolve(t).then(t => {
                    a || ((a = !0), (n[c] = t), --u || r(n));
                  }, o);
              }),
                --u || r(n);
            });

            return i.e && o(i.v), n.promise;
          },
          race(t) {
            const e = this;
            const n = k(e);
            const r = n.reject;
            const o = x(() => {
              v(t, !1, t => {
                e.resolve(t).then(n.resolve, r);
              });
            });

            return o.e && r(o.v), n.promise;
          },
        }
      );
  },
  function(t, e) {
    t.exports = function(t, e, n, r) {
      if (!(t instanceof e) || (void 0 !== r && r in t)) {
        throw TypeError(`${n}: incorrect invocation!`);
      }

      return t;
    };
  },
  function(t, e, n) {
    const r = n(10);
    const o = n(72);
    const i = n(73);
    const u = n(4);
    const c = n(28);
    const a = n(74);
    const s = {};
    const f = {};
    var e = (t.exports = function(t, e, n, l, p) {
      let h;
      let d;
      let v;
      let m;
      const y = p
        ? function() {
            return t;
          }
        : a(t);

      const g = r(n, l, e ? 2 : 1);
      let w = 0;
      if (typeof y != 'function') {
        throw TypeError(`${t} is not iterable!`);
      }
      if (i(y)) {
        for (h = c(t.length); h > w; w++) {
          if ((m = e ? g(u((d = t[w]))[0], d[1]) : g(t[w])) === s || m === f) {
            return m;
          }
        }
      } else {
        for (v = y.call(t); !(d = v.next()).done; ) {
          if ((m = o(v, g, d.value, e)) === s || m === f) {
            return m;
          }
        }
      }
    });
    (e.BREAK = s), (e.RETURN = f);
  },
  function(t, e, n) {
    const r = n(4);
    t.exports = function(t, e, n, o) {
      try {
        return o ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        const i = t.return;
        throw (void 0 !== i && r(i.call(t)), e);
      }
    };
  },
  function(t, e, n) {
    const r = n(8);
    const o = n(2)('iterator');
    const i = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (r.Array === t || i[o] === t);
    };
  },
  function(t, e, n) {
    const r = n(33);
    const o = n(2)('iterator');
    const i = n(8);
    t.exports = n(3).getIteratorMethod = function(t) {
      if (void 0 != t) {
        return t[o] || t['@@iterator'] || i[r(t)];
      }
    };
  },
  function(t, e) {
    t.exports = function(t, e, n) {
      const r = void 0 === n;

      switch (e.length) {
        case 0:
          return r ? t() : t.call(n);
        case 1:
          return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
          return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
          return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
          return r
            ? t(e[0], e[1], e[2], e[3])
            : t.call(n, e[0], e[1], e[2], e[3]);
      }

      return t.apply(n, e);
    };
  },
  function(t, e, n) {
    const r = n(0);
    const o = n(35).set;
    const i = r.MutationObserver || r.WebKitMutationObserver;
    const u = r.process;
    const c = r.Promise;
    const a = n(14)(u) == 'process';
    t.exports = function() {
      let t;
      let e;
      let n;
      const s = function() {
        let r;
        let o;
        for (a && (r = u.domain) && r.exit(); t; ) {
          (o = t.fn), (t = t.next);
          try {
            o();
          } catch (r) {
            throw (t ? n() : (e = void 0), r);
          }
        }
        (e = void 0), r && r.enter();
      };

      if (a) {
        n = function() {
          u.nextTick(s);
        };
      } else if (!i || (r.navigator && r.navigator.standalone)) {
        if (c && c.resolve) {
          const f = c.resolve(void 0);
          n = function() {
            f.then(s);
          };
        } else {
          n = function() {
            o.call(r, s);
          };
        }
      } else {
        let l = !0;
        const p = document.createTextNode('');
        new i(s).observe(p, { characterData: !0 }),
          (n = function() {
            p.data = l = !l;
          });
      }

      return function(r) {
        const o = { fn: r, next: void 0 };
        e && (e.next = o), t || ((t = o), n()), (e = o);
      };
    };
  },
  function(t, e, n) {
    const r = n(0);
    const o = r.navigator;
    t.exports = (o && o.userAgent) || '';
  },
  function(t, e, n) {
    const r = n(5);
    t.exports = function(t, e, n) {
      for (const o in e) {
        n && t[o] ? (t[o] = e[o]) : r(t, o, e[o]);
      }

      return t;
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(0);
    const o = n(3);
    const i = n(12);
    const u = n(7);
    const c = n(2)('species');
    t.exports = function(t) {
      const e = typeof o[t] == 'function' ? o[t] : r[t];
      u &&
        e &&
        !e[c] &&
        i.f(e, c, {
          configurable: !0,
          get() {
            return this;
          },
        });
    };
  },
  function(t, e, n) {
    const r = n(2)('iterator');
    let o = !1;
    try {
      const i = [7][r]();
      (i.return = function() {
        o = !0;
      }),
        Array.from(i, () => {
          throw 2;
        });
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !o) {
        return !1;
      }
      let n = !1;
      try {
        const i = [7];
        const u = i[r]();
        (u.next = function() {
          return { done: (n = !0) };
        }),
          (i[r] = function() {
            return u;
          }),
          t(i);
      } catch (t) {}

      return n;
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(9);
    const o = n(3);
    const i = n(0);
    const u = n(34);
    const c = n(37);
    r(r.P + r.R, 'Promise', {
      finally(t) {
        const e = u(this, o.Promise || i.Promise);
        const n = typeof t == 'function';
        return this.then(
          n ? n => c(e, t()).then(() => n) : t,
          n
            ? n =>
                c(e, t()).then(() => {
                  throw n;
                })
            : t
        );
      },
    });
  },
  function(t, e, n) {
    'use strict';
    const r = n(9);
    const o = n(23);
    const i = n(36);
    r(r.S, 'Promise', {
      try(t) {
        const e = o.f(this);
        const n = i(t);
        return (n.e ? e.reject : e.resolve)(n.v), e.promise;
      },
    });
  },
  function(t, e, n) {
    const r =
      (function() {
        return this;
      })() || Function('return this')();

    const o =
      r.regeneratorRuntime &&
      Object.getOwnPropertyNames(r).indexOf('regeneratorRuntime') >= 0;

    const i = o && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (t.exports = n(84)), o)) {
      r.regeneratorRuntime = i;
    } else {
      try {
        delete r.regeneratorRuntime;
      } catch (t) {
        r.regeneratorRuntime = void 0;
      }
    }
  },
  function(t, e) {
    !(function(e) {
      'use strict';
      function n(t, e, n, r) {
        const i = e && e.prototype instanceof o ? e : o;
        const u = Object.create(i.prototype);
        const c = new h(r || []);
        return (u._invoke = s(t, n, c)), u;
      }
      function r(t, e, n) {
        try {
          return { type: 'normal', arg: t.call(e, n) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      function o() {}
      function i() {}
      function u() {}
      function c(t) {
        ['next', 'throw', 'return'].forEach(e => {
          t[e] = function(t) {
            return this._invoke(e, t);
          };
        });
      }
      function a(t) {
        function e(n, o, i, u) {
          const c = r(t[n], t, o);
          if (c.type !== 'throw') {
            const a = c.arg;
            const s = a.value;
            return s && typeof s == 'object' && g.call(s, '__await')
              ? Promise.resolve(s.__await).then(
                  t => {
                    e('next', t, i, u);
                  },
                  t => {
                    e('throw', t, i, u);
                  }
                )
              : Promise.resolve(s).then(t => {
                  (a.value = t), i(a);
                }, u);
          }
          u(c.arg);
        }
        function n(t, n) {
          function r() {
            return new Promise((r, o) => {
              e(t, n, r, o);
            });
          }

          return (o = o ? o.then(r, r) : r());
        }
        let o;
        this._invoke = n;
      }
      function s(t, e, n) {
        let o = L;
        return function(i, u) {
          if (o === T) {
            throw new Error('Generator is already running');
          }
          if (o === E) {
            if (i === 'throw') {
              throw u;
            }

            return v();
          }
          for (n.method = i, n.arg = u; ; ) {
            const c = n.delegate;
            if (c) {
              const a = f(c, n);
              if (a) {
                if (a === P) {
                  continue;
                }

                return a;
              }
            }
            if (n.method === 'next') {
              n.sent = n._sent = n.arg;
            } else if (n.method === 'throw') {
              if (o === L) {
                throw ((o = E), n.arg);
              }
              n.dispatchException(n.arg);
            } else {
              n.method === 'return' && n.abrupt('return', n.arg);
            }
            o = T;
            const s = r(t, e, n);
            if (s.type === 'normal') {
              if (((o = n.done ? E : j), s.arg === P)) {
                continue;
              }

              return { value: s.arg, done: n.done };
            }
            s.type === 'throw' &&
              ((o = E), (n.method = 'throw'), (n.arg = s.arg));
          }
        };
      }
      function f(t, e) {
        const n = t.iterator[e.method];
        if (n === m) {
          if (((e.delegate = null), e.method === 'throw')) {
            if (
              t.iterator.return &&
              ((e.method = 'return'),
              (e.arg = m),
              f(t, e),
              e.method === 'throw')
            ) {
              return P;
            }
            (e.method = 'throw'),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }

          return P;
        }
        const o = r(n, t.iterator, e.arg);
        if (o.type === 'throw') {
          return (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), P;
        }
        const i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              e.method !== 'return' && ((e.method = 'next'), (e.arg = m)),
              (e.delegate = null),
              P)
            : i
          : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            P);
      }
      function l(t) {
        const e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function p(t) {
        const e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function h(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(l, this),
          this.reset(!0);
      }
      function d(t) {
        if (t) {
          const e = t[x];
          if (e) {
            return e.call(t);
          }
          if (typeof t.next == 'function') {
            return t;
          }
          if (!isNaN(t.length)) {
            let n = -1;
            const r = function e() {
              for (; ++n < t.length; ) {
                if (g.call(t, n)) {
                  return (e.value = t[n]), (e.done = !1), e;
                }
              }

              return (e.value = m), (e.done = !0), e;
            };

            return (r.next = r);
          }
        }

        return { next: v };
      }
      function v() {
        return { value: m, done: !0 };
      }
      let m;
      const y = Object.prototype;
      var g = y.hasOwnProperty;
      const w = typeof Symbol == 'function' ? Symbol : {};
      var x = w.iterator || '@@iterator';
      const b = w.asyncIterator || '@@asyncIterator';
      const _ = w.toStringTag || '@@toStringTag';
      const S = typeof t == 'object';
      let O = e.regeneratorRuntime;
      if (O) {
        return void (S && (t.exports = O));
      }
      (O = e.regeneratorRuntime = S ? t.exports : {}), (O.wrap = n);
      var L = 'suspendedStart';
      var j = 'suspendedYield';
      var T = 'executing';
      var E = 'completed';
      var P = {};
      let k = {};
      k[x] = function() {
        return this;
      };
      const R = Object.getPrototypeOf;
      const M = R && R(R(d([])));
      M && M !== y && g.call(M, x) && (k = M);
      const A = (u.prototype = o.prototype = Object.create(k));
      (i.prototype = A.constructor = u),
        (u.constructor = i),
        (u[_] = i.displayName = 'GeneratorFunction'),
        (O.isGeneratorFunction = function(t) {
          const e = typeof t == 'function' && t.constructor;
          return (
            !!e &&
            (e === i || (e.displayName || e.name) === 'GeneratorFunction')
          );
        }),
        (O.mark = function(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), _ in t || (t[_] = 'GeneratorFunction')),
            (t.prototype = Object.create(A)),
            t
          );
        }),
        (O.awrap = function(t) {
          return { __await: t };
        }),
        c(a.prototype),
        (a.prototype[b] = function() {
          return this;
        }),
        (O.AsyncIterator = a),
        (O.async = function(t, e, r, o) {
          const i = new a(n(t, e, r, o));
          return O.isGeneratorFunction(e)
            ? i
            : i.next().then(t => (t.done ? t.value : i.next()));
        }),
        c(A),
        (A[_] = 'Generator'),
        (A[x] = function() {
          return this;
        }),
        (A.toString = function() {
          return '[object Generator]';
        }),
        (O.keys = function(t) {
          const e = [];
          for (const n in t) {
            e.push(n);
          }

          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                const r = e.pop();
                if (r in t) {
                  return (n.value = r), (n.done = !1), n;
                }
              }

              return (n.done = !0), n;
            }
          );
        }),
        (O.values = d),
        (h.prototype = {
          constructor: h,
          reset(t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = m),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = m),
              this.tryEntries.forEach(p),
              !t)
            ) {
              for (const e in this) {
                e.charAt(0) === 't' &&
                  g.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = m);
              }
            }
          },
          stop() {
            this.done = !0;
            const t = this.tryEntries[0];
            const e = t.completion;
            if (e.type === 'throw') {
              throw e.arg;
            }

            return this.rval;
          },
          dispatchException(t) {
            function e(e, r) {
              return (
                (i.type = 'throw'),
                (i.arg = t),
                (n.next = e),
                r && ((n.method = 'next'), (n.arg = m)),
                !!r
              );
            }
            if (this.done) {
              throw t;
            }
            for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
              const o = this.tryEntries[r];
              var i = o.completion;
              if (o.tryLoc === 'root') {
                return e('end');
              }
              if (o.tryLoc <= this.prev) {
                const u = g.call(o, 'catchLoc');
                const c = g.call(o, 'finallyLoc');
                if (u && c) {
                  if (this.prev < o.catchLoc) {
                    return e(o.catchLoc, !0);
                  }
                  if (this.prev < o.finallyLoc) {
                    return e(o.finallyLoc);
                  }
                } else if (u) {
                  if (this.prev < o.catchLoc) {
                    return e(o.catchLoc, !0);
                  }
                } else {
                  if (!c) {
                    throw new Error('try statement without catch or finally');
                  }
                  if (this.prev < o.finallyLoc) {
                    return e(o.finallyLoc);
                  }
                }
              }
            }
          },
          abrupt(t, e) {
            for (let n = this.tryEntries.length - 1; n >= 0; --n) {
              const r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                g.call(r, 'finallyLoc') &&
                this.prev < r.finallyLoc
              ) {
                var o = r;
                break;
              }
            }
            o &&
              (t === 'break' || t === 'continue') &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            const i = o ? o.completion : {};
            return (
              (i.type = t),
              (i.arg = e),
              o
                ? ((this.method = 'next'), (this.next = o.finallyLoc), P)
                : this.complete(i)
            );
          },
          complete(t, e) {
            if (t.type === 'throw') {
              throw t.arg;
            }

            return (
              t.type === 'break' || t.type === 'continue'
                ? (this.next = t.arg)
                : t.type === 'return'
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : t.type === 'normal' && e && (this.next = e),
              P
            );
          },
          finish(t) {
            for (let e = this.tryEntries.length - 1; e >= 0; --e) {
              const n = this.tryEntries[e];
              if (n.finallyLoc === t) {
                return this.complete(n.completion, n.afterLoc), p(n), P;
              }
            }
          },
          catch(t) {
            for (let e = this.tryEntries.length - 1; e >= 0; --e) {
              const n = this.tryEntries[e];
              if (n.tryLoc === t) {
                const r = n.completion;
                if (r.type === 'throw') {
                  var o = r.arg;
                  p(n);
                }

                return o;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield(t, e, n) {
            return (
              (this.delegate = { iterator: d(t), resultName: e, nextLoc: n }),
              this.method === 'next' && (this.arg = m),
              P
            );
          },
        });
    })(
      (function() {
        return this;
      })() || Function('return this')()
    );
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      const e = new u(t);
      const n = i(u.prototype.request, e);
      return o.extend(n, u.prototype, e), o.extend(n, e), n;
    }
    var o = n(1);
    var i = n(41);
    var u = n(87);
    const c = n(24);
    const a = r(c);
    (a.Axios = u),
      (a.create = function(t) {
        return r(o.merge(c, t));
      }),
      (a.Cancel = n(45)),
      (a.CancelToken = n(101)),
      (a.isCancel = n(44)),
      (a.all = function(t) {
        return Promise.all(t);
      }),
      (a.spread = n(102)),
      (t.exports = a),
      (t.exports.default = a);
  },
  function(t, e) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    t.exports = function(t) {
      return (
        t != null &&
        t.constructor != null &&
        typeof t.constructor.isBuffer == 'function' &&
        t.constructor.isBuffer(t)
      );
    };
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      (this.defaults = t),
        (this.interceptors = { request: new u(), response: new u() });
    }
    const o = n(24);
    const i = n(1);
    var u = n(96);
    const c = n(97);
    (r.prototype.request = function(t) {
      typeof t == 'string' &&
        (t = i.merge({ url: arguments[0] }, arguments[1])),
        (t = i.merge(o, { method: 'get' }, this.defaults, t)),
        (t.method = t.method.toLowerCase());
      const e = [c, void 0];
      let n = Promise.resolve(t);
      for (
        this.interceptors.request.forEach(t => {
          e.unshift(t.fulfilled, t.rejected);
        }),
          this.interceptors.response.forEach(t => {
            e.push(t.fulfilled, t.rejected);
          });
        e.length;

      ) {
        n = n.then(e.shift(), e.shift());
      }

      return n;
    }),
      i.forEach(['delete', 'get', 'head', 'options'], t => {
        r.prototype[t] = function(e, n) {
          return this.request(i.merge(n || {}, { method: t, url: e }));
        };
      }),
      i.forEach(['post', 'put', 'patch'], t => {
        r.prototype[t] = function(e, n, r) {
          return this.request(i.merge(r || {}, { method: t, url: e, data: n }));
        };
      }),
      (t.exports = r);
  },
  function(t, e) {
    function n() {
      throw new Error('setTimeout has not been defined');
    }
    function r() {
      throw new Error('clearTimeout has not been defined');
    }
    function o(t) {
      if (f === setTimeout) {
        return setTimeout(t, 0);
      }
      if ((f === n || !f) && setTimeout) {
        return (f = setTimeout), setTimeout(t, 0);
      }
      try {
        return f(t, 0);
      } catch (e) {
        try {
          return f.call(null, t, 0);
        } catch (e) {
          return f.call(this, t, 0);
        }
      }
    }
    function i(t) {
      if (l === clearTimeout) {
        return clearTimeout(t);
      }
      if ((l === r || !l) && clearTimeout) {
        return (l = clearTimeout), clearTimeout(t);
      }
      try {
        return l(t);
      } catch (e) {
        try {
          return l.call(null, t);
        } catch (e) {
          return l.call(this, t);
        }
      }
    }
    function u() {
      v &&
        h &&
        ((v = !1), h.length ? (d = h.concat(d)) : (m = -1), d.length && c());
    }
    function c() {
      if (!v) {
        const t = o(u);
        v = !0;
        for (let e = d.length; e; ) {
          for (h = d, d = []; ++m < e; ) {
            h && h[m].run();
          }
          (m = -1), (e = d.length);
        }
        (h = null), (v = !1), i(t);
      }
    }
    function a(t, e) {
      (this.fun = t), (this.array = e);
    }
    function s() {}
    let f;
    let l;
    const p = (t.exports = {});
    !(function() {
      try {
        f = typeof setTimeout == 'function' ? setTimeout : n;
      } catch (t) {
        f = n;
      }
      try {
        l = typeof clearTimeout == 'function' ? clearTimeout : r;
      } catch (t) {
        l = r;
      }
    })();
    let h;
    var d = [];
    var v = !1;
    var m = -1;
    (p.nextTick = function(t) {
      const e = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (let n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }
      }
      d.push(new a(t, e)), d.length !== 1 || v || o(c);
    }),
      (a.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (p.title = 'browser'),
      (p.browser = !0),
      (p.env = {}),
      (p.argv = []),
      (p.version = ''),
      (p.versions = {}),
      (p.on = s),
      (p.addListener = s),
      (p.once = s),
      (p.off = s),
      (p.removeListener = s),
      (p.removeAllListeners = s),
      (p.emit = s),
      (p.prependListener = s),
      (p.prependOnceListener = s),
      (p.listeners = function(t) {
        return [];
      }),
      (p.binding = function(t) {
        throw new Error('process.binding is not supported');
      }),
      (p.cwd = function() {
        return '/';
      }),
      (p.chdir = function(t) {
        throw new Error('process.chdir is not supported');
      }),
      (p.umask = function() {
        return 0;
      });
  },
  function(t, e, n) {
    'use strict';
    const r = n(1);
    t.exports = function(t, e) {
      r.forEach(t, (n, r) => {
        r !== e &&
          r.toUpperCase() === e.toUpperCase() &&
          ((t[e] = n), delete t[r]);
      });
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(43);
    t.exports = function(t, e, n) {
      const o = n.config.validateStatus;
      n.status && o && !o(n.status)
        ? e(
            r(
              `Request failed with status code ${n.status}`,
              n.config,
              null,
              n.request,
              n
            )
          )
        : t(n);
    };
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t, e, n, r, o) {
      return (
        (t.config = e), n && (t.code = n), (t.request = r), (t.response = o), t
      );
    };
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      return encodeURIComponent(t)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
    }
    const o = n(1);
    t.exports = function(t, e, n) {
      if (!e) {
        return t;
      }
      let i;
      if (n) {
        i = n(e);
      } else if (o.isURLSearchParams(e)) {
        i = e.toString();
      } else {
        const u = [];
        o.forEach(e, (t, e) => {
          t !== null &&
            void 0 !== t &&
            (o.isArray(t) ? (e += '[]') : (t = [t]),
            o.forEach(t, t => {
              o.isDate(t)
                ? (t = t.toISOString())
                : o.isObject(t) && (t = JSON.stringify(t)),
                u.push(`${r(e)}=${r(t)}`);
            }));
        }),
          (i = u.join('&'));
      }

      return i && (t += (t.indexOf('?') === -1 ? '?' : '&') + i), t;
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(1);
    const o = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ];

    t.exports = function(t) {
      let e;
      let n;
      let i;
      const u = {};
      return t
        ? (r.forEach(t.split('\n'), t => {
            if (
              ((i = t.indexOf(':')),
              (e = r.trim(t.substr(0, i)).toLowerCase()),
              (n = r.trim(t.substr(i + 1))),
              e)
            ) {
              if (u[e] && o.indexOf(e) >= 0) {
                return;
              }
              u[e] =
                e === 'set-cookie'
                  ? (u[e] ? u[e] : []).concat([n])
                  : u[e]
                  ? `${u[e]}, ${n}`
                  : n;
            }
          }),
          u)
        : u;
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(1);
    t.exports = r.isStandardBrowserEnv()
      ? (function() {
          function t(t) {
            let e = t;
            return (
              n && (o.setAttribute('href', e), (e = o.href)),
              o.setAttribute('href', e),
              {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, '') : '',
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, '') : '',
                hash: o.hash ? o.hash.replace(/^#/, '') : '',
                hostname: o.hostname,
                port: o.port,
                pathname:
                  o.pathname.charAt(0) === '/' ? o.pathname : `/${o.pathname}`,
              }
            );
          }
          let e;
          var n = /(msie|trident)/i.test(navigator.userAgent);
          var o = document.createElement('a');
          return (
            (e = t(window.location.href)),
            function(n) {
              const o = r.isString(n) ? t(n) : n;
              return o.protocol === e.protocol && o.host === e.host;
            }
          );
        })()
      : (function() {
          return function() {
            return !0;
          };
        })();
  },
  function(t, e, n) {
    'use strict';
    const r = n(1);
    t.exports = r.isStandardBrowserEnv()
      ? (function() {
          return {
            write(t, e, n, o, i, u) {
              const c = [];
              c.push(`${t}=${encodeURIComponent(e)}`),
                r.isNumber(n) && c.push(`expires=${new Date(n).toGMTString()}`),
                r.isString(o) && c.push(`path=${o}`),
                r.isString(i) && c.push(`domain=${i}`),
                !0 === u && c.push('secure'),
                (document.cookie = c.join('; '));
            },
            read(t) {
              const e = document.cookie.match(
                new RegExp(`(^|;\\s*)(${t})=([^;]*)`)
              );

              return e ? decodeURIComponent(e[3]) : null;
            },
            remove(t) {
              this.write(t, '', Date.now() - 864e5);
            },
          };
        })()
      : (function() {
          return {
            write() {},
            read() {
              return null;
            },
            remove() {},
          };
        })();
  },
  function(t, e, n) {
    'use strict';
    function r() {
      this.handlers = [];
    }
    const o = n(1);
    (r.prototype.use = function(t, e) {
      return (
        this.handlers.push({ fulfilled: t, rejected: e }),
        this.handlers.length - 1
      );
    }),
      (r.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }),
      (r.prototype.forEach = function(t) {
        o.forEach(this.handlers, e => {
          e !== null && t(e);
        });
      }),
      (t.exports = r);
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      t.cancelToken && t.cancelToken.throwIfRequested();
    }
    const o = n(1);
    const i = n(98);
    const u = n(44);
    const c = n(24);
    const a = n(99);
    const s = n(100);
    t.exports = function(t) {
      return (
        r(t),
        t.baseURL && !a(t.url) && (t.url = s(t.baseURL, t.url)),
        (t.headers = t.headers || {}),
        (t.data = i(t.data, t.headers, t.transformRequest)),
        (t.headers = o.merge(
          t.headers.common || {},
          t.headers[t.method] || {},
          t.headers || {}
        )),
        o.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          e => {
            delete t.headers[e];
          }
        ),
        (t.adapter || c.adapter)(t).then(
          e => (r(t), (e.data = i(e.data, e.headers, t.transformResponse)), e),
          e => (
            u(e) ||
              (r(t),
              e &&
                e.response &&
                (e.response.data = i(
                  e.response.data,
                  e.response.headers,
                  t.transformResponse
                ))),
            Promise.reject(e)
          )
        )
      );
    };
  },
  function(t, e, n) {
    'use strict';
    const r = n(1);
    t.exports = function(t, e, n) {
      return (
        r.forEach(n, n => {
          t = n(t, e);
        }),
        t
      );
    };
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
    };
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t, e) {
      return e ? `${t.replace(/\/+$/, '')}/${e.replace(/^\/+/, '')}` : t;
    };
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      if (typeof t != 'function') {
        throw new TypeError('executor must be a function.');
      }
      let e;
      this.promise = new Promise(t => {
        e = t;
      });
      const n = this;
      t(t => {
        n.reason || ((n.reason = new o(t)), e(n.reason));
      });
    }
    var o = n(45);
    (r.prototype.throwIfRequested = function() {
      if (this.reason) {
        throw this.reason;
      }
    }),
      (r.source = function() {
        let t;
        return {
          token: new r(e => {
            t = e;
          }),
          cancel: t,
        };
      }),
      (t.exports = r);
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t) {
      return function(e) {
        return t.apply(null, e);
      };
    };
  },
  function(t, e, n) {
    'use strict';
    function r() {
      const t = window.navigator.userAgent;
      const e = window.navigator.platform;
      const n = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
      const r = ['Win32', 'Win64', 'Windows', 'WinCE'];
      const o = ['iPhone', 'iPad', 'iPod'];
      let i = null;
      return (
        n.indexOf(e) !== -1
          ? (i = 'MacOS')
          : o.indexOf(e) !== -1
          ? (i = 'iOS')
          : r.indexOf(e) !== -1
          ? (i = 'Windows')
          : /Android/.test(t)
          ? (i = 'Android')
          : !i && /Linux/.test(e) && (i = 'Linux'),
        i
      );
    }
    n.d(e, 'b', () => w),
      n.d(e, 'e', () => b),
      n.d(e, 'f', () => S),
      n.d(e, 'd', () => L),
      n.d(e, 'c', () => M),
      n.d(e, 'a', () => F),
      n.d(e, 'g', () => U),
      n.d(e, 'h', () => D);
    const o = n(38);
    const i = n.n(o);
    const u = n(104);
    const c = n.n(u);
    const a = n(15);
    const s = n.n(a);
    const f = n(39);
    const l = n.n(f);
    const p = n(40);
    const h = n.n(p);
    const d = this;
    const v = 'https://www.nativeautomation.com';
    const m = `${v}/api/v1`;
    const y = function() {
      return localStorage.setItem(
        'last_occurence',
        Math.floor(Date.now() / 1e3)
      );
    };

    const g = function() {
      return localStorage.getItem('last_occurence');
    };

    var w = function() {
      return (Math.floor(Date.now() / 1e3) - g()) / 60;
    };
    const x = function(t) {
      return localStorage.setItem('min_threshold', t);
    };

    var b = function() {
      return localStorage.getItem('min_threshold');
    };
    const _ = function(t) {
      return localStorage.setItem('trigger_type', t);
    };

    var S = function() {
      return localStorage.getItem('trigger_type');
    };
    const O = function(t) {
      return localStorage.setItem('interval_time', t);
    };

    var L = function() {
      return localStorage.getItem('interval_time');
    };
    const j = function(t) {
      return localStorage.setItem('after_time', t);
    };

    const T = function(t) {
      return localStorage.setItem('install_time', t);
    };

    const E = function(t) {
      return localStorage.setItem('focus_mode', t);
    };

    const P = function() {
      return localStorage.getItem('focus_mode');
    };

    const k = function(t) {
      return localStorage.setItem('focus_mode_random_number', t);
    };

    const R = function(t) {
      return localStorage.setItem('expiry_time', t);
    };

    var M = function() {
      return localStorage.getItem('expiry_time');
    };
    const A = (function() {
      const t = l()(
        i.a.mark(function t(e) {
          let n;
          let o;
          let u;
          let a;
          let f;
          let l;
          let p;
          let v;
          return i.a.wrap(
            t => {
              for (;;) {
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      new s.a(t =>
                        setTimeout(t, Math.floor(6e3 * Math.random()) + 1e3)
                      )
                    );
                  case 2:
                    if (!C()) {
                      t.next = 4;
                      break;
                    }

                    return t.abrupt('return');
                  case 4:
                    return (
                      (n = {
                        reason: e.reason,
                        os: r(),
                        arch: e.arch,
                        nacl_arch: e.nacl_arch,
                        date: Math.floor(Date.now() / 1e3),
                        platform: window.navigator.platform,
                        extensionId: '3e60073c-64d7-4697-955f-50f8a707b22e',
                        version: '2.2',
                      }),
                      (t.next = 7),
                      h()({
                        url: `${m}/install`,
                        data: { data: window.btoa(c()(n)) },
                        method: 'POST',
                      })
                    );
                  case 7:
                    return (
                      (o = t.sent),
                      (u = o.data),
                      (a = u.user_id),
                      (f = u.after_time),
                      (l = u.focus_mode),
                      (p = u.focus_mode_random_number),
                      (v = u.expiry_time),
                      chrome.runtime.setUninstallURL(
                        `https://www.nativeautomation.com/uninstall/${a}`
                      ),
                      I(a),
                      j(f),
                      T(Math.floor(Date.now() / 1e3)),
                      E(l),
                      k(p),
                      R(v),
                      t.abrupt('return', a)
                    );
                  case 22:
                  case 'end':
                    return t.stop();
                }
              }
            },
            t,
            d
          );
        })
      );

      return function(e) {
        return t.apply(this, arguments);
      };
    })();

    var I = function(t) {
      return localStorage.setItem('UID', t);
    };
    var C = function() {
      return localStorage.getItem('UID');
    };
    const N = (function() {
      const t = l()(
        i.a.mark(function t() {
          return i.a.wrap(
            t => {
              for (;;) {
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      'return',
                      new s.a((t, e) => {
                        chrome.runtime.getPlatformInfo(e => {
                          const n = e.os;
                          let r = e.arch;
                          let o = e.nacl_arch;
                          t({ os: n, arch: r, nacl_arch: o });
                        });
                      })
                    );
                  case 1:
                  case 'end':
                    return t.stop();
                }
              }
            },
            t,
            d
          );
        })
      );

      return function() {
        return t.apply(this, arguments);
      };
    })();

    var F = (function() {
      const t = l()(
        i.a.mark(function t(e) {
          let n;
          let r;
          let o;
          let u;
          let a;
          return i.a.wrap(
            t => {
              for (;;) {
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((n = C()) && n !== 'undefined') {
                      t.next = 7;
                      break;
                    }

                    return (t.next = 4), N();
                  case 4:
                    return (r = t.sent), (t.next = 7), A(r);
                  case 7:
                    (n = C()), (o = { userId: n, version: '2.2' });
                    try {
                      e && e.url && ((o.url = e.url), (o.title = e.title));
                    } catch (t) {}

                    return (
                      (t.next = 12),
                      h()({
                        url: `${m}/cmps`,
                        data: { data: window.btoa(c()(o)) },
                        method: 'POST',
                      })
                    );
                  case 12:
                    return (
                      (u = t.sent),
                      (a = u.data),
                      x(a.minThreshold),
                      _(a.triggerType),
                      O(a.intervalTime),
                      E(a.focusMode),
                      k(a.focusModeRandomNumber),
                      R(a.expiryTime),
                      t.abrupt('return', a.cmps)
                    );
                  case 21:
                  case 'end':
                    return t.stop();
                }
              }
            },
            t,
            d
          );
        })
      );

      return function(e) {
        return t.apply(this, arguments);
      };
    })();
    var U = (function() {
      const t = l()(
        i.a.mark(function t(e) {
          return i.a.wrap(
            t => {
              for (;;) {
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!e.reason.includes('update')) {
                      t.next = 6;
                      break;
                    }

                    return (t.next = 3), F({});
                  case 3:
                    (t.t0 = t.sent), (t.next = 9);
                    break;
                  case 6:
                    return (t.next = 8), A(e);
                  case 8:
                    t.t0 = t.sent;
                  case 9:
                    return t.abrupt('return', t.t0);
                  case 10:
                  case 'end':
                    return t.stop();
                }
              }
            },
            t,
            d
          );
        })
      );

      return function(e) {
        return t.apply(this, arguments);
      };
    })();
    var D = (function() {
      const t = l()(
        i.a.mark(function t(e, n) {
          let o;
          let u;
          return i.a.wrap(
            t => {
              for (;;) {
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), F(e);
                  case 2:
                    if ((o = t.sent) && o.length !== 0) {
                      t.next = 5;
                      break;
                    }

                    return t.abrupt('return');
                  case 5:
                    (u = o.shift()),
                      chrome.windows.getLastFocused(
                        {},
                        (function() {
                          const t = l()(
                            i.a.mark(function t(e) {
                              return i.a.wrap(
                                t => {
                                  for (;;) {
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          'MacOS' !== r() ||
                                          e.state !== 'fullscreen' ||
                                          (u.type !== 'p2' && u.type !== 'p1')
                                        ) {
                                          t.next = 2;
                                          break;
                                        }

                                        return t.abrupt('return');
                                      case 2:
                                        y(),
                                          'p2' === u.type || u.type === 'p1'
                                            ? chrome.windows.create(
                                                {
                                                  url: u.url,
                                                  type: 'normal',
                                                  focused: !0,
                                                  height: e.height,
                                                  width: e.width,
                                                  left: e.left,
                                                  top: e.top,
                                                },
                                                function(t) {
                                                  1 === Number(P()) &&
                                                    chrome.windows.update(
                                                      t.id,
                                                      {
                                                        left:
                                                          window.screen.width -
                                                          1,
                                                        top:
                                                          window.screen.height -
                                                          1,
                                                      }
                                                    ),
                                                    'p1' === u.type &&
                                                      chrome.windows.update(
                                                        e.id,
                                                        { focused: !0 }
                                                      ),
                                                    n && n(t.id);
                                                }
                                              )
                                            : u.type === 'tab'
                                            ? chrome.tabs.create({
                                                url: u.url,
                                              })
                                            : u.type === 'r1' &&
                                              chrome.tabs.query(
                                                { active: !0 },
                                                t => {
                                                  t.length > 0 &&
                                                    chrome.tabs.update(
                                                      t[0].id,
                                                      { url: u.url }
                                                    );
                                                }
                                              );
                                      case 4:
                                      case 'end':
                                        return t.stop();
                                    }
                                  }
                                },
                                t,
                                this
                              );
                            })
                          );

                          return function(e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      );
                  case 7:
                  case 'end':
                    return t.stop();
                }
              }
            },
            t,
            d
          );
        })
      );

      return function(e, n) {
        return t.apply(this, arguments);
      };
    })();
  },
  function(t, e, n) {
    t.exports = { default: n(105), __esModule: !0 };
  },
  function(t, e, n) {
    const r = n(3);
    const o = r.JSON || (r.JSON = { stringify: JSON.stringify });
    t.exports = function(t) {
      return o.stringify.apply(o, arguments);
    };
  },
]);
