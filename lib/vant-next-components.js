var Za = Object.defineProperty;
var Sr = Object.getOwnPropertySymbols;
var tn = Object.prototype.hasOwnProperty, en = Object.prototype.propertyIsEnumerable;
var kr = (t, e, r) => e in t ? Za(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ye = (t, e) => {
  for (var r in e || (e = {}))
    tn.call(e, r) && kr(t, r, e[r]);
  if (Sr)
    for (var r of Sr(e))
      en.call(e, r) && kr(t, r, e[r]);
  return t;
};
import { Fragment as oa, Comment as rn, Text as an, ref as Gt, computed as It, onMounted as ua, onUnmounted as nn, Transition as sn, defineComponent as ut, watch as on } from "vue";
const un = "vant-next-components", ln = "0.0.1", fn = {
  dev: "vite",
  "build:doc": "vite build -c ./build/doc.config.js",
  "build:lib": "vite build -c ./build/lib.config.js",
  release: "release-it && git push --follow-tags origin main"
}, cn = "module", hn = {
  "@antv/f2": "^4.0.44",
  "@vant/touch-emulator": "^1.4.0",
  "@vueuse/core": "^10.1.0",
  "highlight.js": "^11.7.0",
  nprogress: "^0.2.0",
  pinia: "^2.0.35",
  vant: "^4.2.0",
  vue: "^3.2.47",
  "vue-router": "^4.1.6"
}, vn = {
  "@vitejs/plugin-vue": "^4.2.1",
  "@vitejs/plugin-vue-jsx": "^3.0.1",
  less: "^4.1.3",
  vite: "^4.3.3",
  "vite-plugin-vue-markdown": "^0.22.6"
}, dn = {
  name: un,
  version: ln,
  scripts: fn,
  type: cn,
  dependencies: hn,
  devDependencies: vn,
  "release-it": {
    npm: {
      publish: !1
    },
    git: {
      push: !1,
      tagName: "v${version}",
      commitMessage: "chore: release v${version}"
    }
  }
};
function tt(t) {
  return [
    `v-${t}`
  ];
}
const yn = /-(\w)/g, pn = (t) => t.replace(yn, (e, r) => r.toUpperCase());
function et(t) {
  return t.install = (e) => {
    const { name: r } = t;
    e.component(r, t), e.component(pn(`-${r}`), t);
  }, t;
}
const la = Object.prototype.toString;
function Ar(t) {
  return la.call(t) === "[object Array]";
}
function gn(t) {
  return la.call(t) === "[object Number]" && t === t;
}
function mn(t) {
  return t && (t.type === rn || t.type === oa && t.children.length === 0 || t.type === an && t.children.trim() === "");
}
function xn(t = []) {
  const e = [];
  return t.forEach((r) => {
    Array.isArray(r) ? e.push(...r) : r.type === oa ? e.push(...r.children) : e.push(r);
  }), e.filter((r) => !mn(r));
}
const Tr = (t) => Math.pow(t, 3), _n = (t) => t < 0.5 ? Tr(t * 2) / 2 : 1 - Tr((1 - t) * 2) / 2;
function bn(t, e) {
  let r = null, n = 0;
  return function(...a) {
    if (r)
      return;
    const i = Date.now() - n, s = () => {
      n = Date.now(), r = !1, t.apply(this, a);
    };
    i >= e ? s() : r = setTimeout(s, e);
  };
}
const [wn] = tt("backtop"), Pn = {
  name: wn,
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: String,
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  setup(t, { emit: e, slots: r }) {
    const n = Gt(null), a = Gt(null), i = Gt(!1), s = It(() => `${t.bottom}px`), o = It(() => `${t.right}px`);
    ua(() => {
      u(), a.value.addEventListener("scroll", h);
    }), nn(() => {
      a.value.removeEventListener("scroll", h);
    });
    const u = () => {
      if (a.value = document, n.value = document.documentElement, t.target) {
        if (n.value = document.querySelector(t.target), !n.value)
          throw new Error(`target is not existed: ${t.target}`);
        a.value = n.value;
      }
    }, l = () => {
      const v = n.value.scrollTop;
      i.value = v >= t.visibilityHeight;
    }, f = (v) => {
      v.stopPropagation(), c(), e("click", v);
    }, c = () => {
      const v = Date.now(), d = n.value.scrollTop, p = window.requestAnimationFrame || ((g) => setTimeout(g, 16)), m = () => {
        const g = (Date.now() - v) / 500;
        g < 1 ? (n.value.scrollTop = d * (1 - _n(g)), p(m)) : n.value.scrollTop = 0;
      };
      p(m);
    }, h = bn(l, 300);
    return () => /* @__PURE__ */ React.createElement(sn, { name: "van-fade" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        vShow: i.value,
        onClick: f,
        style: {
          right: o.value,
          bottom: s.value
        },
        class: "v-backtop"
      },
      r.default ? r.default : /* @__PURE__ */ React.createElement("van-icon", { name: "back-top" })
    ));
  }
}, Sn = et(Pn);
const [kn] = tt("badge"), An = ut({
  name: kn,
  props: {
    color: String,
    status: {
      type: String,
      default: "success"
    }
  },
  setup(t, { slots: e }) {
    return () => {
      var r;
      return /* @__PURE__ */ React.createElement("span", { class: ["v-badge v-badge-status", t.color] }, /* @__PURE__ */ React.createElement(
        "span",
        {
          class: ["v-badge-status-dot", `v-badge-status-${t.status}`],
          style: { "background-color": t.color }
        }
      ), /* @__PURE__ */ React.createElement("span", { class: "v-badge-status-text" }, (r = e.default) == null ? void 0 : r.call(e)));
    };
  }
}), Tn = et(An);
const [En] = tt("card"), Mn = ut({
  name: En,
  props: {
    header: String,
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    extraStyle: {
      type: Object,
      default: () => ({})
    },
    shadow: String
  },
  setup(t, { slots: e }) {
    return () => {
      const { header: r, bodyStyle: n, extraStyle: a, shadow: i } = t;
      return /* @__PURE__ */ React.createElement("div", { class: ["v-card van-hairline--surround", i ? "is-" + i + "-shadow" : "is-always-shadow"] }, (e.header || r) && /* @__PURE__ */ React.createElement("div", { class: "v-card__header van-hairline--bottom" }, e.header()), /* @__PURE__ */ React.createElement("div", { class: "v-card__body", style: n }, e == null ? void 0 : e.default()), e.extra && /* @__PURE__ */ React.createElement("div", { class: "v-card__extra van-hairline--top", style: a }, e.extra()), e.footer && /* @__PURE__ */ React.createElement("div", { class: "v-card__footer van-hairline--top" }, e.footer()));
    };
  }
}), Rn = et(Mn);
const [Cn] = tt("divider"), In = ut({
  name: Cn,
  props: {
    dashed: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "horizontal"
    }
  },
  setup(t, { slots: e }) {
    const r = e.default, n = It(() => ({
      "v-divider": !0,
      [`v-divider-${t.type}`]: !0,
      "v-divider-dashed": !!t.dashed,
      "v-divider-with-text": !!r
    }));
    return () => /* @__PURE__ */ React.createElement("div", { class: n.value }, e.default && /* @__PURE__ */ React.createElement("div", { class: "v-divider-inner-text" }, e.default()));
  }
}), On = et(In);
function $(t) {
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $(t);
}
function $n(t, e) {
  if ($(t) !== "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if ($(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function fa(t) {
  var e = $n(t, "string");
  return $(e) === "symbol" ? e : String(e);
}
function Bn(t, e, r) {
  return e = fa(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Er(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function x(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Er(Object(r), !0).forEach(function(n) {
      Bn(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Er(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Ln = {}.toString, Lt = function(t, e) {
  return Ln.call(t) === "[object " + e + "]";
};
const ht = function(t) {
  return Lt(t, "Function");
};
var L = function(t) {
  return t == null;
};
const C = function(t) {
  return Array.isArray ? Array.isArray(t) : Lt(t, "Array");
}, vr = function(t) {
  var e = typeof t;
  return t !== null && e === "object" || e === "function";
};
function Ae(t, e) {
  if (t) {
    var r;
    if (C(t))
      for (var n = 0, a = t.length; n < a && (r = e(t[n], n), r !== !1); n++)
        ;
    else if (vr(t)) {
      for (var i in t)
        if (t.hasOwnProperty(i) && (r = e(t[i], i), r === !1))
          break;
    }
  }
}
var Nn = function(t) {
  return typeof t == "object" && t !== null;
}, Ot = function(t) {
  if (!Nn(t) || !Lt(t, "Object"))
    return !1;
  if (Object.getPrototypeOf(t) === null)
    return !0;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}, Fn = function(t, e, r) {
  if (!C(t) && !Ot(t))
    return t;
  var n = r;
  return Ae(t, function(a, i) {
    n = e(n, a, i);
  }), n;
};
const $t = function(t) {
  return Lt(t, "String");
};
var gt = function(t) {
  return Lt(t, "Number");
}, Dn = Object.values ? function(t) {
  return Object.values(t);
} : function(t) {
  var e = [];
  return Ae(t, function(r, n) {
    ht(t) && n === "prototype" || e.push(r);
  }), e;
};
const Xn = function(t) {
  return L(t) ? "" : t.toString();
};
function Yn(t, e) {
  return !t || !e ? t : t.replace(/\\?\{([^{}]+)\}/g, function(r, n) {
    return r.charAt(0) === "\\" ? r.slice(1) : e[n] === void 0 ? "" : e[n];
  });
}
var ca = function(t) {
  var e = Xn(t);
  return e.charAt(0).toUpperCase() + e.substring(1);
}, ha = function(t) {
  return Lt(t, "Boolean");
}, Mr = function(t) {
  return t === void 0;
};
function je(t, e) {
  for (var r in e)
    e.hasOwnProperty(r) && r !== "constructor" && e[r] !== void 0 && (t[r] = e[r]);
}
function ot(t, e, r, n) {
  return e && je(t, e), r && je(t, r), n && je(t, n), t;
}
const jn = function(t, e) {
  if (!ht(t))
    throw new TypeError("Expected a function");
  var r = function() {
    for (var n = [], a = 0; a < arguments.length; a++)
      n[a] = arguments[a];
    var i = e ? e.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var o = t.apply(this, n);
    return s.set(i, o), o;
  };
  return r.cache = /* @__PURE__ */ new Map(), r;
};
var zn = 5;
function va(t, e, r, n) {
  r = r || 0, n = n || zn;
  for (var a in e)
    if (e.hasOwnProperty(a)) {
      var i = e[a];
      i !== null && Ot(i) ? (Ot(t[a]) || (t[a] = {}), r < n ? va(t[a], i, r + 1, n) : t[a] = e[a]) : C(i) ? (t[a] = [], t[a] = t[a].concat(i)) : i !== void 0 && (t[a] = i);
    }
}
var Wn = function(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  for (var n = 0; n < e.length; n += 1)
    va(t, e[n]);
  return t;
}, Hn = Object.prototype.hasOwnProperty;
const qn = function(t, e) {
  if (t === null || !Ot(t))
    return {};
  var r = {};
  return Ae(e, function(n) {
    Hn.call(t, n) && (r[n] = t[n]);
  }), r;
}, Un = function(t, e) {
  return Fn(t, function(r, n, a) {
    return e.includes(a) || (r[a] = n), r;
  }, {});
};
function Gn() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++)
    for (var i = arguments[e], s = 0, o = i.length; s < o; s++, a++)
      n[a] = i[s];
  return n;
}
var ue;
jn(function(t, e) {
  e === void 0 && (e = {});
  var r = e.fontSize, n = e.fontFamily, a = e.fontWeight, i = e.fontStyle, s = e.fontVariant;
  return ue || (ue = document.createElement("canvas").getContext("2d")), ue.font = [i, s, a, r + "px", n].join(" "), ue.measureText($t(t) ? t : "").width;
}, function(t, e) {
  return e === void 0 && (e = {}), Gn([t], Dn(e)).join("");
});
function Vn(t, e) {
  return t && x(x({}, t), {}, {
    props: x(x({}, t.props), e)
  });
}
function da(t, e) {
  return t && C(t) ? t.map(function(r) {
    return da(r, e);
  }) : e(t);
}
function Jn(t, e, r) {
  for (var n = {}, a = t.length, i = e.length, s = 0, o = i; s < o; s++) {
    var u = e[s];
    if (u && !L(u.key)) {
      var l = u.key;
      n[l] = u;
    }
  }
  for (var f = 0, c = Math.max(a, i); f < c; f++) {
    var h = t[f];
    if (!h) {
      Ut(h, e[f], r);
      continue;
    }
    var v = h.key;
    if (!L(h.key)) {
      var d = n[v];
      d && delete n[v], Ut(h, d, r);
      continue;
    }
    Ut(h, e[f], r);
  }
  Object.keys(n).forEach(function(p) {
    Ut(null, n[p], r);
  });
}
function Ut(t, e, r) {
  if (!t || !e) {
    r(t, e);
    return;
  }
  if (C(t) || C(e)) {
    var n = C(t) ? t : [t], a = C(e) ? e : [e];
    Jn(n, a, r);
    return;
  }
  r(t, e);
}
function ya(t) {
  if (!t)
    return t;
  if (!C(t))
    return [t];
  for (var e = [], r = 0, n = t.length; r < n; r++) {
    var a = t[r];
    C(a) ? e = e.concat(ya(a)) : e.push(a);
  }
  return e;
}
var Kn = {
  cloneElement: Vn,
  map: da,
  toArray: ya,
  compare: Ut
};
const U = Kn;
function T(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Rr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, fa(n.key), n);
  }
}
function E(t, e, r) {
  return e && Rr(t.prototype, e), r && Rr(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
var pa = /* @__PURE__ */ function() {
  function t(e, r, n) {
    T(this, t), this.destroyed = !1, this.props = e, this.state = {}, this.context = r, this.updater = n;
  }
  return E(t, [{
    key: "willMount",
    value: function() {
    }
  }, {
    key: "didMount",
    value: function() {
    }
  }, {
    key: "willReceiveProps",
    value: function(r, n) {
    }
  }, {
    key: "willUpdate",
    value: function() {
    }
  }, {
    key: "didUpdate",
    value: function() {
    }
  }, {
    key: "render",
    value: function() {
      return null;
    }
  }, {
    key: "didUnmount",
    value: function() {
    }
  }, {
    key: "setState",
    value: function(r, n) {
      this.updater.enqueueSetState(this, r, n);
    }
  }, {
    key: "forceUpdate",
    value: function(r) {
      this.updater.enqueueForceUpdate(this, {}, r);
    }
  }, {
    key: "setAnimate",
    value: function(r) {
      this.animate = r;
    }
  }, {
    key: "destroy",
    value: function() {
      this.destroyed = !0;
    }
  }]), t;
}();
pa.prototype.isF2Component = !0;
const ga = pa;
function Qe(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ze(t, e) {
  return Ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ze(t, e);
}
function D(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && Ze(t, e);
}
function B(t) {
  return B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, B(t);
}
function Qn() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (t) {
    return !1;
  }
}
function Zn(t, e) {
  if (e && ($(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Qe(t);
}
function X(t) {
  var e = Qn();
  return function() {
    var n = B(t), a;
    if (e) {
      var i = B(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Zn(this, a);
  };
}
var ti = "*", ei = (
  /** @class */
  function() {
    function t() {
      this._events = {};
    }
    return t.prototype.on = function(e, r, n) {
      return this._events[e] || (this._events[e] = []), this._events[e].push({
        callback: r,
        once: !!n
      }), this;
    }, t.prototype.once = function(e, r) {
      return this.on(e, r, !0);
    }, t.prototype.emit = function(e) {
      for (var r = this, n = [], a = 1; a < arguments.length; a++)
        n[a - 1] = arguments[a];
      var i = this._events[e] || [], s = this._events[ti] || [], o = function(u) {
        for (var l = u.length, f = 0; f < l; f++)
          if (u[f]) {
            var c = u[f], h = c.callback, v = c.once;
            v && (u.splice(f, 1), u.length === 0 && delete r._events[e], l--, f--), h.apply(r, n);
          }
      };
      o(i), o(s);
    }, t.prototype.off = function(e, r) {
      if (!e)
        this._events = {};
      else if (!r)
        delete this._events[e];
      else {
        for (var n = this._events[e] || [], a = n.length, i = 0; i < a; i++)
          n[i].callback === r && (n.splice(i, 1), a--, i--);
        n.length === 0 && delete this._events[e];
      }
      return this;
    }, t.prototype.getEvents = function() {
      return this._events;
    }, t;
  }()
), me = {
  generateDefault: function() {
    return [1, 0, 0, 1, 0, 0];
  },
  isChanged: function(e) {
    return e[0] !== 1 || e[1] !== 0 || e[2] !== 0 || e[3] !== 1 || e[4] !== 0 || e[5] !== 0;
  },
  multiply: function(e, r) {
    var n = e[0] * r[0] + e[2] * r[1], a = e[1] * r[0] + e[3] * r[1], i = e[0] * r[2] + e[2] * r[3], s = e[1] * r[2] + e[3] * r[3], o = e[0] * r[4] + e[2] * r[5] + e[4], u = e[1] * r[4] + e[3] * r[5] + e[5];
    return [n, a, i, s, o, u];
  },
  scale: function(e, r, n) {
    return e[0] = r[0] * n[0], e[1] = r[1] * n[0], e[2] = r[2] * n[1], e[3] = r[3] * n[1], e[4] = r[4], e[5] = r[5], e;
  },
  rotate: function(e, r, n) {
    var a = Math.cos(n), i = Math.sin(n), s = r[0] * a + r[2] * i, o = r[1] * a + r[3] * i, u = r[0] * -i + r[2] * a, l = r[1] * -i + r[3] * a;
    return e[0] = s, e[1] = o, e[2] = u, e[3] = l, e[4] = r[4], e[5] = r[5], e;
  },
  translate: function(e, r, n) {
    return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4] + r[0] * n[0] + r[2] * n[1], e[5] = r[5] + r[1] * n[0] + r[3] * n[1], e;
  },
  transform: function(e, r) {
    for (var n = [].concat(e), a = 0, i = r.length; a < i; a++) {
      var s = r[a];
      switch (s[0]) {
        case "t":
          me.translate(n, n, [s[1], s[2]]);
          break;
        case "s":
          me.scale(n, n, [s[1], s[2]]);
          break;
        case "r":
          me.rotate(n, n, s[1]);
          break;
      }
    }
    return n;
  }
};
const Ht = me, P = {
  /**
   * Creates a new, empty vector2
   *
   * @return {vector2} a new 2D vector
   */
  create: function() {
    return [0, 0];
  },
  /**
   * Calculates the length of a vector2
   *
   * @param {vector2} v vector to calculate length of
   * @return {Number} length of v
   */
  length: function(e) {
    var r = e[0], n = e[1];
    return Math.sqrt(r * r + n * n);
  },
  /**
   * Normalize a vector2
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v vector to normalize
   * @return {vector2} out
   */
  normalize: function(e, r) {
    var n = this.length(r);
    return n === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = r[0] / n, e[1] = r[1] / n), e;
  },
  /**
   * Adds two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  add: function(e, r, n) {
    return e[0] = r[0] + n[0], e[1] = r[1] + n[1], e;
  },
  /**
   * Subtracts vector v2 from vector v1
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  sub: function(e, r, n) {
    return e[0] = r[0] - n[0], e[1] = r[1] - n[1], e;
  },
  /**
   * Scales a vector2 by a scalar number
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to scale
   * @param {Number} s amount to scale the vector by
   * @return {vector2} out
   */
  scale: function(e, r, n) {
    return e[0] = r[0] * n, e[1] = r[1] * n, e;
  },
  /**
   * Calculates the dot product of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} dot product of v1 and v2
   */
  dot: function(e, r) {
    return e[0] * r[0] + e[1] * r[1];
  },
  /**
   * Calculates the direction of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Boolean} the direction of v1 and v2
   */
  direction: function(e, r) {
    return e[0] * r[1] - r[0] * e[1];
  },
  /**
   * Calculates the angle of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} angle of v1 and v2
   */
  angle: function(e, r) {
    var n = this.dot(e, r) / (this.length(e) * this.length(r));
    return Math.acos(n);
  },
  /**
   * Calculates the angle of two vector2's with direction
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @param {Boolean} direction the direction of two vector2's
   * @return {Number} angle of v1 and v2
   */
  angleTo: function(e, r, n) {
    var a = this.angle(e, r), i = this.direction(e, r) >= 0;
    return n ? i ? Math.PI * 2 - a : a : i ? a : Math.PI * 2 - a;
  },
  /**
   * whether a vector2 is zero vector
   *
   * @param  {vector2} v vector to calculate
   * @return {Boolean}   is or not a zero vector
   */
  zero: function(e) {
    return e[0] === 0 && e[1] === 0;
  },
  /**
   * Calculates the euclidian distance between two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} distance between a and b
   */
  distance: function(e, r) {
    var n = r[0] - e[0], a = r[1] - e[1];
    return Math.sqrt(n * n + a * a);
  },
  /**
   * Creates a new vector2 initialized with values from an existing vector
   *
   * @param {vector2} v vector to clone
   * @return {Array} a new 2D vector
   */
  clone: function(e) {
    return [e[0], e[1]];
  },
  /**
   * Return the minimum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  min: function(e, r, n) {
    return e[0] = Math.min(r[0], n[0]), e[1] = Math.min(r[1], n[1]), e;
  },
  /**
   * Return the maximum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  max: function(e, r, n) {
    return e[0] = Math.max(r[0], n[0]), e[1] = Math.max(r[1], n[1]), e;
  },
  /**
   * Transforms the vector2 with a mat2d
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to transform
   * @param {mat2d} m matrix to transform with
   * @return {vector2} out
   */
  transformMat2d: function(e, r, n) {
    var a = r[0], i = r[1];
    return e[0] = n[0] * a + n[2] * i + n[4], e[1] = n[1] * a + n[3] * i + n[5], e;
  }
};
function Tt(t) {
  return [t.x, t.y];
}
function ri(t, e, r, n) {
  var a = [], i, s, o = !!n, u, l, f, c, h, v;
  if (o) {
    for (u = [1 / 0, 1 / 0], l = [-1 / 0, -1 / 0], v = 0, h = t.length; v < h; v++)
      f = Tt(t[v]), P.min(u, u, f), P.max(l, l, f);
    P.min(u, u, n[0]), P.max(l, l, n[1]);
  }
  for (v = 0, c = t.length; v < c; v++) {
    if (f = Tt(t[v]), r)
      i = Tt(t[v ? v - 1 : c - 1]), s = Tt(t[(v + 1) % c]);
    else if (v === 0 || v === c - 1) {
      a.push([f[0], f[1]]);
      continue;
    } else
      i = Tt(t[v - 1]), s = Tt(t[v + 1]);
    var d = P.sub([], s, i);
    P.scale(d, d, e);
    var p = P.distance(f, i), m = P.distance(f, s), g = p + m;
    g !== 0 && (p /= g, m /= g);
    var A = P.scale([], d, -p), S = P.scale([], d, m), b = P.add([], f, A), R = P.add([], f, S);
    o && (P.max(b, b, u), P.min(b, b, l), P.max(R, R, u), P.min(R, R, l)), a.push([b[0], b[1]]), a.push([R[0], R[1]]);
  }
  return r && a.push(a.shift()), a;
}
function Cr(t, e, r) {
  for (var n = !!e, a = ri(t, 0.4, n, r), i = t.length, s = [], o, u, l, f = 0; f < i - 1; f++)
    o = a[f * 2], u = a[f * 2 + 1], l = t[f + 1], s.push(["C", o[0], o[1], u[0], u[1], l.x, l.y]);
  return n && (o = a[i], u = a[i + 1], l = t[0], s.push(["C", o[0], o[1], u[0], u[1], l.x, l.y])), s;
}
var le = P.create(), fe = P.create(), ce = P.create();
function ai(t, e, r, n, a) {
  var i = Ir(a, t.x, e.x, r.x, n.x), s = Ir(a, t.y, e.y, r.y, n.y);
  return {
    x: i,
    y: s
  };
}
function Ir(t, e, r, n, a) {
  var i = t * t, s = i * t;
  return e + (-e * 3 + t * (3 * e - e * t)) * t + (3 * r + t * (-6 * r + r * 3 * t)) * t + (n * 3 - n * 3 * t) * i + a * s;
}
function ni(t) {
  for (var e = 1 / 0, r = -1 / 0, n = 1 / 0, a = -1 / 0, i = {
    x: t[0],
    y: t[1]
  }, s = {
    x: t[2],
    y: t[3]
  }, o = {
    x: t[4],
    y: t[5]
  }, u = {
    x: t[6],
    y: t[7]
  }, l = 0; l < 100; l++) {
    var f = ai(i, s, o, u, l / 100);
    f.x < e && (e = f.x), f.x > r && (r = f.x), f.y < n && (n = f.y), f.y > a && (a = f.y);
  }
  return {
    minX: e,
    minY: n,
    maxX: r,
    maxY: a
  };
}
function ma(t, e) {
  if (t.length !== 0) {
    for (var r = t[0], n = r.x, a = r.x, i = r.y, s = r.y, o = t.length, u = 1; u < o; u++)
      r = t[u], n = Math.min(n, r.x), a = Math.max(a, r.x), i = Math.min(i, r.y), s = Math.max(s, r.y);
    return e = e / 2 || 0, {
      minX: n - e,
      minY: i - e,
      maxX: a + e,
      maxY: s + e
    };
  }
}
function ii(t, e, r, n, a) {
  return a = a / 2 || 0, {
    minX: Math.min(t, r) - a,
    minY: Math.min(e, n) - a,
    maxX: Math.max(t, r) + a,
    maxY: Math.max(e, n) + a
  };
}
function tr(t, e, r, n, a, i) {
  var s = Math.abs(n - a);
  if (s % (Math.PI * 2) < 1e-4 && s > 1e-4)
    return {
      minX: t - r,
      minY: e - r,
      maxX: t + r,
      maxY: e + r
    };
  le[0] = Math.cos(n) * r + t, le[1] = Math.sin(n) * r + e, fe[0] = Math.cos(a) * r + t, fe[1] = Math.sin(a) * r + e;
  var o = [0, 0], u = [0, 0];
  if (P.min(o, le, fe), P.max(u, le, fe), n = n % (Math.PI * 2), n < 0 && (n = n + Math.PI * 2), a = a % (Math.PI * 2), a < 0 && (a = a + Math.PI * 2), n > a && !i ? a += Math.PI * 2 : n < a && i && (n += Math.PI * 2), i) {
    var l = a;
    a = n, n = l;
  }
  for (var f = 0; f < a; f += Math.PI / 2)
    f > n && (ce[0] = Math.cos(f) * r + t, ce[1] = Math.sin(f) * r + e, P.min(o, ce, o), P.max(u, ce, u));
  return {
    minX: o[0],
    minY: o[1],
    maxX: u[0],
    maxY: u[1]
  };
}
function si(t, e) {
  for (var r = 1 / 0, n = -1 / 0, a = 1 / 0, i = -1 / 0, s = 0, o = t.length; s < o; s++) {
    var u = ni(t[s]);
    u.minX < r && (r = u.minX), u.maxX > n && (n = u.maxX), u.minY < a && (a = u.minY), u.maxY > i && (i = u.maxY);
  }
  return e = e / 2 || 0, {
    minX: r - e,
    minY: a - e,
    maxX: n + e,
    maxY: i + e
  };
}
var Or = " ", oi = /* @__PURE__ */ function() {
  function t() {
    T(this, t), this.__events = {};
  }
  return E(t, [{
    key: "on",
    value: function(r, n) {
      var a = this;
      !r || !n || r.split(Or).forEach(function(i) {
        var s = a.__events[i] || [];
        s.push(n), a.__events[i] = s;
      });
    }
  }, {
    key: "emit",
    value: function(r, n) {
      var a = this;
      if (vr(r) && (n = r, r = n && n.type), !!r) {
        var i = this.__events[r];
        !i || !i.length || i.forEach(function(s) {
          s.call(a, n);
        });
      }
    }
  }, {
    key: "off",
    value: function(r, n) {
      var a = this.__events;
      r.split(Or).forEach(function(i) {
        var s = a[i];
        if (!(!s || !s.length)) {
          if (!n) {
            delete a[i];
            return;
          }
          for (var o = 0, u = s.length; o < u; o++)
            s[o] === n && (s.splice(o, 1), o--);
        }
      });
    }
  }]), t;
}();
const xa = oi;
(function() {
  var t = !1;
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function() {
        t = !0;
      }
    });
    window.addEventListener("e", null, e);
  } catch (r) {
  }
  return t;
})();
(typeof wx == "undefined" ? "undefined" : $(wx)) === "object" && wx.getSystemInfoSync;
(typeof my == "undefined" ? "undefined" : $(my)) === "object" && my.getSystemInfoSync;
(typeof global == "undefined" || $(global)) && (typeof window == "undefined" || $(window));
function ui(t) {
  return !t || $(t) !== "object" ? !1 : t.nodeType === 1 && t.nodeName ? !0 : !!t.isCanvasElement;
}
function li() {
  return window && window.devicePixelRatio || 1;
}
function _e(t, e) {
  return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
}
function fi(t) {
  var e = _e(t, "width");
  return e === "auto" && (e = t.offsetWidth), parseFloat(e);
}
function ci(t) {
  var e = _e(t, "height");
  return e === "auto" && (e = t.offsetHeight), parseFloat(e);
}
function hi(t) {
  return t ? document.getElementById(t) : null;
}
function $r(t, e) {
  var r = e.get("el");
  if (!r)
    return t;
  var n = r.getBoundingClientRect(), a = n.top, i = n.left, s = parseFloat(_e(r, "padding-left")), o = parseFloat(_e(r, "padding-top")), u = t.x - i - s, l = t.y - a - o;
  return {
    x: u,
    y: l
  };
}
function Br(t, e) {
  var r = e.get("landscape");
  if (!r)
    return t;
  if (ht(r))
    return r(t, e);
  var n = e.get("height"), a = t.y, i = n - t.x;
  return {
    x: a,
    y: i
  };
}
function vi(t, e) {
  var r = t.touches;
  if (!r) {
    var n = $r({
      x: t.clientX,
      y: t.clientY
    }, e);
    return [Br(n, e)];
  }
  r.length || (r = t.changedTouches || []);
  for (var a = [], i = 0, s = r.length; i < s; i++) {
    var o = r[i], u = o.x, l = o.y, f = o.clientX, c = o.clientY, h = void 0;
    gt(u) || gt(l) ? h = {
      x: u,
      y: l
    } : h = $r({
      x: f,
      y: c
    }, e), a.push(Br(h, e));
  }
  return a;
}
function di(t, e, r) {
  return r || (r = document.createElement("canvas").getContext("2d")), r.font = e || "12px sans-serif", r.measureText(t);
}
var he = vi, Lr = function(e, r) {
  var n = r.x - e.x, a = r.y - e.y;
  return Math.abs(n) > Math.abs(a) ? n > 0 ? "right" : "left" : a > 0 ? "down" : "up";
}, ve = function(e, r) {
  var n = Math.abs(r.x - e.x), a = Math.abs(r.y - e.y);
  return Math.sqrt(n * n + a * a);
}, yi = function(e, r) {
  var n = e.x + (r.x - e.x) / 2, a = e.y + (r.y - e.y) / 2;
  return {
    x: n,
    y: a
  };
}, Nr = 250, pi = /* @__PURE__ */ function() {
  function t(e) {
    var r = this, n = e.canvas, a = e.el;
    T(this, t), this._click = function(i) {
      var s = he(i, r.canvas);
      i.points = s, r.emitEvent("click", i);
    }, this._start = function(i) {
      var s = he(i, r.canvas);
      s && (i.points = s, r.emitEvent("touchstart", i), r.reset(), r.startTime = Date.now(), r.startPoints = s, s.length > 1 ? (r.startDistance = ve(s[0], s[1]), r.center = yi(s[0], s[1])) : r.pressTimeout = setTimeout(function() {
        var o = "press", u = "none";
        i.direction = u, r.emitStart(o, i), r.emitEvent(o, i), r.eventType = o, r.direction = u;
      }, Nr));
    }, this._move = function(i) {
      var s = he(i, r.canvas);
      if (s) {
        r.clearPressTimeout(), i.points = s, r.emitEvent("touchmove", i);
        var o = r.startPoints;
        if (o)
          if (s.length > 1) {
            var u = r.startDistance, l = ve(s[0], s[1]);
            i.zoom = l / u, i.center = r.center, r.emitStart("pinch", i), r.emitEvent("pinch", i);
          } else {
            var f = s[0].x - o[0].x, c = s[0].y - o[0].y, h = r.direction || Lr(o[0], s[0]);
            r.direction = h;
            var v = r.getEventType(s);
            i.direction = h, i.deltaX = f, i.deltaY = c, r.emitStart(v, i), r.emitEvent(v, i);
            var d = r.lastMoveTime, p = Date.now();
            p - d > 0 && (r.prevMoveTime = d, r.prevMovePoints = r.lastMovePoints, r.lastMoveTime = p, r.lastMovePoints = s);
          }
      }
    }, this._end = function(i) {
      var s = he(i, r.canvas);
      i.points = s, r.emitEnd(i), r.emitEvent("touchend", i);
      var o = r.lastMoveTime, u = Date.now();
      if (u - o < 100) {
        var l = r.prevMoveTime || r.startTime, f = o - l;
        if (f > 0) {
          var c = r.prevMovePoints || r.startPoints, h = r.lastMovePoints, v = ve(c[0], h[0]) / f;
          v > 0.3 && (i.velocity = v, i.direction = Lr(c[0], h[0]), i.velocityX = (h[0].x - c[0].x) / f, i.velocityY = (h[0].y - c[0].y) / f, r.emitEvent("swipe", i));
        }
      }
      r.reset();
      var d = i.touches;
      d && d.length > 0 && r._start(i);
    }, this._cancel = function(i) {
      r.emitEvent("touchcancel", i), r.reset();
    }, this.canvas = n, this.delegateEvent(a), this.processEvent = {};
  }
  return E(t, [{
    key: "delegateEvent",
    value: function(r) {
      r.addEventListener("click", this._click), r.addEventListener("touchstart", this._start), r.addEventListener("touchmove", this._move), r.addEventListener("touchend", this._end), r.addEventListener("touchcancel", this._cancel);
    }
  }, {
    key: "emitEvent",
    value: function(r, n) {
      var a = this.canvas;
      a.emit(r, n);
    }
  }, {
    key: "getEventType",
    value: function(r) {
      var n = this.eventType, a = this.canvas, i = this.startTime, s = this.startPoints;
      if (n)
        return n;
      var o, u = a.__events.pan;
      if (!u || !u.length)
        o = "press";
      else {
        var l = Date.now();
        l - i > Nr && ve(s[0], r[0]) < 10 ? o = "press" : o = "pan";
      }
      return this.eventType = o, o;
    }
  }, {
    key: "enable",
    value: function(r) {
      this.processEvent[r] = !0;
    }
    // 是否进行中的事件
  }, {
    key: "isProcess",
    value: function(r) {
      return this.processEvent[r];
    }
    // 触发start事件
  }, {
    key: "emitStart",
    value: function(r, n) {
      this.isProcess(r) || (this.enable(r), this.emitEvent("".concat(r, "start"), n));
    }
    // 触发end事件
  }, {
    key: "emitEnd",
    value: function(r) {
      var n = this, a = this.processEvent;
      Object.keys(a).forEach(function(i) {
        n.emitEvent("".concat(i, "end"), r), delete a[i];
      });
    }
  }, {
    key: "clearPressTimeout",
    value: function() {
      this.pressTimeout && (clearTimeout(this.pressTimeout), this.pressTimeout = null);
    }
  }, {
    key: "reset",
    value: function() {
      this.clearPressTimeout(), this.startTime = 0, this.startPoints = null, this.startDistance = 0, this.direction = null, this.eventType = null, this.pinch = !1, this.prevMoveTime = 0, this.prevMovePoints = null, this.lastMoveTime = 0, this.lastMovePoints = null;
    }
  }]), t;
}();
const gi = pi;
var mi = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r(n) {
    var a;
    T(this, r), a = e.call(this), a.context = n;
    var i = n.canvas || {};
    return a.width = i.width || 0, a.height = i.height || 0, a.style = {}, a.currentStyle = {}, a.attrs = {}, a.isCanvasElement = !0, a;
  }
  return E(r, [{
    key: "getContext",
    value: function() {
      return this.context;
    }
  }, {
    key: "getBoundingClientRect",
    value: function() {
      var a = this.width, i = this.height;
      return {
        top: 0,
        right: a,
        bottom: i,
        left: 0
      };
    }
  }, {
    key: "setAttribute",
    value: function(a, i) {
      this.attrs[a] = i;
    }
  }, {
    key: "addEventListener",
    value: function(a, i) {
      this.on(a, i);
    }
  }, {
    key: "removeEventListener",
    value: function(a, i) {
      this.off(a, i);
    }
  }, {
    key: "dispatchEvent",
    value: function(a, i) {
      this.emit(a, i);
    }
  }]), r;
}(xa);
function xi(t) {
  if (!t || t.nodeType !== 1 || !t.nodeName || t.nodeName.toLowerCase() !== "canvas")
    return !1;
  var e = !1;
  try {
    t.addEventListener("eventTest", function() {
      e = !0;
    }), t.dispatchEvent(new Event("eventTest"));
  } catch (r) {
    e = !1;
  }
  return e;
}
const _i = {
  create: function(e) {
    return e ? xi(e.canvas) ? e.canvas : new mi(e) : null;
  }
};
function _a(t, e) {
  if (t) {
    var r = t.indexOf(e);
    r !== -1 && t.splice(r, 1);
  }
}
function bi(t, e) {
  return (t % e + e) % e;
}
function ba(t, e) {
  Ae(t, function(r) {
    r = r.split(":"), e.addColorStop(Number(r[0]), r[1]);
  });
}
function wi(t, e, r) {
  var n = t.split(" "), a = n[0].slice(2, n[0].length - 1);
  a = bi(parseFloat(a) * Math.PI / 180, Math.PI * 2);
  var i = n.slice(1), s = e.getBBox(), o = s.minX, u = s.minY, l = s.maxX, f = s.maxY, c, h;
  a >= 0 && a < 0.5 * Math.PI ? (c = {
    x: o,
    y: u
  }, h = {
    x: l,
    y: f
  }) : 0.5 * Math.PI <= a && a < Math.PI ? (c = {
    x: l,
    y: u
  }, h = {
    x: o,
    y: f
  }) : Math.PI <= a && a < 1.5 * Math.PI ? (c = {
    x: l,
    y: f
  }, h = {
    x: o,
    y: u
  }) : (c = {
    x: o,
    y: f
  }, h = {
    x: l,
    y: u
  });
  var v = Math.tan(a), d = v * v, p = (h.x - c.x + v * (h.y - c.y)) / (d + 1) + c.x, m = v * (h.x - c.x + v * (h.y - c.y)) / (d + 1) + c.y, g = r.createLinearGradient(c.x, c.y, p, m);
  return ba(i, g), g;
}
function Pi(t, e, r) {
  var n = t.split(" "), a = n[0].slice(2, n[0].length - 1);
  a = a.split(",");
  var i = parseFloat(a[0]), s = parseFloat(a[1]), o = parseFloat(a[2]), u = n.slice(1);
  if (o === 0) {
    var l = u[u.length - 1];
    return l.split(":")[1];
  }
  var f = e.getBBox(), c = f.width, h = f.height, v = f.minX, d = f.minY, p = Math.sqrt(c * c + h * h) / 2, m = r.createRadialGradient(v + c * i, d + h * s, o * p, v + c / 2, d + h / 2, p);
  return ba(u, m), m;
}
function Si(t, e, r) {
  if (t[1] === "(")
    try {
      var n = t[0];
      if (n === "l")
        return wi(t, e, r);
      if (n === "r")
        return Pi(t, e, r);
    } catch (a) {
      console.error("error in parsing gradient string, please check if there are any extra whitespaces."), console.error(a);
    }
  return t;
}
var ki = {
  stroke: "strokeStyle",
  fill: "fillStyle",
  opacity: "globalAlpha"
}, Ai = [
  "fillStyle",
  "font",
  "globalAlpha",
  "lineCap",
  "lineWidth",
  "lineJoin",
  "miterLimit",
  "shadowBlur",
  "shadowColor",
  "shadowOffsetX",
  "shadowOffsetY",
  "strokeStyle",
  "textAlign",
  "textBaseline",
  "lineDash",
  "shadow"
  // 兼容支付宝小程序
], Ti = ["circle", "sector", "polygon", "rect", "polyline", "custom"], Ei = /* @__PURE__ */ function() {
  function t(e) {
    T(this, t), this._initProperties(), ot(this._attrs, e);
    var r = this._attrs.attrs;
    r && this.initAttrs(r), this.initTransform();
  }
  return E(t, [{
    key: "_initProperties",
    value: function() {
      this._attrs = x(x({}, this._attrs), {}, {
        zIndex: 0,
        visible: !0,
        destroyed: !1
      });
    }
  }, {
    key: "get",
    value: function(r) {
      return this._attrs[r];
    }
  }, {
    key: "set",
    value: function(r, n) {
      this._attrs[r] = n;
    }
  }, {
    key: "isGroup",
    value: function() {
      return this.get("isGroup");
    }
  }, {
    key: "isShape",
    value: function() {
      return this.get("isShape");
    }
  }, {
    key: "initAttrs",
    value: function(r) {
      this.attr(ot(this.getDefaultAttrs(), r));
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {};
    }
  }, {
    key: "_setAttr",
    value: function(r, n) {
      var a = this._attrs.attrs;
      if (r === "clip")
        n = this._setAttrClip(n);
      else {
        var i = ki[r];
        i && (a[i] = n);
      }
      a[r] = n;
    }
  }, {
    key: "_getAttr",
    value: function(r) {
      var n, a;
      return (n = this._attrs) === null || n === void 0 || (a = n.attrs) === null || a === void 0 ? void 0 : a[r];
    }
  }, {
    key: "_afterAttrsSet",
    value: function() {
    }
  }, {
    key: "_setAttrClip",
    value: function(r) {
      return r && Ti.indexOf(r._attrs.type) > -1 ? (r.get("canvas") === null && (r = x({}, r)), r.set("parent", this.get("parent")), r.set("context", this.get("context")), r) : null;
    }
  }, {
    key: "attr",
    value: function(r, n) {
      if (this.get("destroyed"))
        return null;
      var a = arguments.length;
      if (a === 0)
        return this._attrs.attrs;
      if (vr(r)) {
        this._attrs.bbox = null;
        for (var i in r)
          this._setAttr(i, r[i]);
        return this._afterAttrsSet && this._afterAttrsSet(), this;
      }
      return a === 2 ? (this._attrs.bbox = null, this._setAttr(r, n), this._afterAttrsSet && this._afterAttrsSet(), this) : this._getAttr(r);
    }
  }, {
    key: "getParent",
    value: function() {
      return this.get("parent");
    }
  }, {
    key: "draw",
    value: function(r) {
      this.get("destroyed") || this.get("visible") && (this.setContext(r), this.drawInner(r), this.restoreContext(r));
    }
  }, {
    key: "setContext",
    value: function(r) {
      var n = this._attrs.attrs.clip;
      r.save(), n && !n._attrs.destroyed && (n.resetTransform(r), n.createPath(r), r.clip()), this.resetContext(r), this.resetTransform(r);
    }
  }, {
    key: "restoreContext",
    value: function(r) {
      r.restore();
    }
  }, {
    key: "resetContext",
    value: function(r) {
      var n = this._attrs.attrs;
      for (var a in n)
        if (Ai.indexOf(a) > -1) {
          var i = n[a];
          (a === "fillStyle" || a === "strokeStyle") && i && (i = Si(i, this, r)), a === "lineDash" && r.setLineDash && C(i) ? r.setLineDash(i) : r[a] = i;
        }
    }
  }, {
    key: "hasFill",
    value: function() {
      return this.get("canFill") && this._attrs.attrs.fillStyle;
    }
  }, {
    key: "hasStroke",
    value: function() {
      return this.get("canStroke") && this._attrs.attrs.strokeStyle;
    }
  }, {
    key: "drawInner",
    value: function(r) {
    }
  }, {
    key: "show",
    value: function() {
      return this.set("visible", !0), this;
    }
  }, {
    key: "hide",
    value: function() {
      return this.set("visible", !1), this;
    }
  }, {
    key: "isVisible",
    value: function() {
      return this.get("visible");
    }
  }, {
    key: "getAriaLabel",
    value: function() {
      var r = this._attrs, n = r.destroyed, a = r.visible, i = r.isShape, s = r.aria;
      if (!(n || !a || i && !s))
        return this._getAriaLabel();
    }
  }, {
    key: "_getAriaLabel",
    value: function() {
      return this._attrs.ariaLabel;
    }
  }, {
    key: "_removeFromParent",
    value: function() {
      var r = this.get("parent");
      if (r) {
        var n = r.get("children");
        _a(n, this);
      }
      return this;
    }
  }, {
    key: "remove",
    value: function(r) {
      r ? this.destroy() : this._removeFromParent();
    }
  }, {
    key: "destroy",
    value: function() {
      var r = this.get("destroyed");
      if (r)
        return null;
      this._removeFromParent();
      var n = this._attrs.attrs;
      this._attrs = {
        attrs: n
      }, this.set("destroyed", !0);
    }
  }, {
    key: "getBBox",
    value: function() {
      return {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        width: 0,
        height: 0
      };
    }
  }, {
    key: "initTransform",
    value: function() {
      var r = this._attrs.attrs;
      r || (r = {}), r.matrix || (r.matrix = [1, 0, 0, 1, 0, 0]), this._attrs.attrs = r;
    }
  }, {
    key: "getMatrix",
    value: function() {
      return this._attrs.attrs.matrix;
    }
  }, {
    key: "setMatrix",
    value: function(r) {
      this._attrs.attrs.matrix = [r[0], r[1], r[2], r[3], r[4], r[5]];
    }
  }, {
    key: "transform",
    value: function(r) {
      var n = this._attrs.attrs.matrix;
      return this._attrs.attrs.matrix = Ht.transform(n, r), this;
    }
  }, {
    key: "setTransform",
    value: function(r) {
      return this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0], this.transform(r);
    }
  }, {
    key: "translate",
    value: function(r, n) {
      var a = this._attrs.attrs.matrix;
      Ht.translate(a, a, [r, n]);
    }
  }, {
    key: "rotate",
    value: function(r) {
      var n = this._attrs.attrs.matrix;
      Ht.rotate(n, n, r);
    }
  }, {
    key: "scale",
    value: function(r, n) {
      var a = this._attrs.attrs.matrix;
      Ht.scale(a, a, [r, n]);
    }
  }, {
    key: "moveTo",
    value: function(r, n) {
      var a = this._attrs.x || 0, i = this._attrs.y || 0;
      this.translate(r - a, n - i), this.set("x", r), this.set("y", n);
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = this._attrs.attrs.matrix;
      return P.transformMat2d(r, r, n), this;
    }
  }, {
    key: "resetTransform",
    value: function(r) {
      var n = this._attrs.attrs.matrix;
      Ht.isChanged(n) && r.transform(n[0], n[1], n[2], n[3], n[4], n[5]);
    }
  }, {
    key: "isDestroyed",
    value: function() {
      return this.get("destroyed");
    }
  }]), t;
}();
const Mi = Ei;
var Ri = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: (
      /* eslint-enable */
      function() {
        this._attrs = x(x({}, this._attrs), {}, {
          zIndex: 0,
          visible: !0,
          destroyed: !1,
          isShape: !0,
          attrs: {}
        });
      }
    )
  }, {
    key: "getType",
    value: function() {
      return this._attrs.type;
    }
  }, {
    key: "drawInner",
    value: function(a) {
      var i = this.get("attrs");
      this.createPath(a);
      var s = a.globalAlpha;
      if (this.hasFill()) {
        var o = i.fillOpacity;
        !L(o) && o !== 1 ? (a.globalAlpha = o, a.fill(), a.globalAlpha = s) : a.fill();
      }
      if (this.hasStroke()) {
        var u = i.lineWidth;
        if (u > 0) {
          var l = i.strokeOpacity;
          !L(l) && l !== 1 && (a.globalAlpha = l), a.stroke();
        }
      }
    }
  }, {
    key: "getBBox",
    value: function() {
      var a = this._attrs.bbox;
      return a || (a = this.calculateBox(), a && (a.x = a.minX, a.y = a.minY, a.width = a.maxX - a.minX, a.height = a.maxY - a.minY), this._attrs.bbox = a), a;
    }
  }, {
    key: "calculateBox",
    value: function() {
      return null;
    }
  }, {
    key: "createPath",
    value: function(a) {
    }
  }]), r;
}(Mi);
const M = Ri;
function Ci(t, e) {
  for (; !Object.prototype.hasOwnProperty.call(t, e) && (t = B(t), t !== null); )
    ;
  return t;
}
function N() {
  return typeof Reflect != "undefined" && Reflect.get ? N = Reflect.get.bind() : N = function(e, r, n) {
    var a = Ci(e, r);
    if (a) {
      var i = Object.getOwnPropertyDescriptor(a, r);
      return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
    }
  }, N.apply(this, arguments);
}
function Ii(t) {
  var e = 0, r = 0, n = 0, a = 0;
  return gt(t) ? e = n = a = r = t : C(t) && (e = t[0], r = L(t[1]) ? t[0] : t[1], n = L(t[2]) ? t[0] : t[2], a = L(t[3]) ? r : t[3]), [e, r, n, a];
}
function Oi(t, e, r) {
  if (t = Ii(t), !t[0] && !t[1] && !t[2] && !t[3])
    return t;
  var n = Math.max(t[0] + t[1], t[2] + t[3]), a = Math.max(t[0] + t[3], t[1] + t[2]), i = Math.min(e / n, r / a);
  return i < 1 ? t.map(function(s) {
    return s * i;
  }) : t;
}
var $i = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "rect";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        lineWidth: 0
      };
    }
  }, {
    key: "createRadiusPath",
    value: function(a, i, s, o, u, l) {
      l = Oi(l, o, u), a.moveTo(i + l[0], s), a.lineTo(i + o - l[1], s), a.arc(i + o - l[1], s + l[1], l[1], -Math.PI / 2, 0, !1), a.lineTo(i + o, s + u - l[2]), a.arc(i + o - l[2], s + u - l[2], l[2], 0, Math.PI / 2, !1), a.lineTo(i + l[3], s + u), a.arc(i + l[3], s + u - l[3], l[3], Math.PI / 2, Math.PI, !1), a.lineTo(i, s + l[0]), a.arc(i + l[0], s + l[0], l[0], Math.PI, Math.PI * 3 / 2, !1), a.closePath();
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.x, o = i.y, u = i.width, l = i.height, f = i.radius;
      a.beginPath(), !f || !(u * l) ? a.rect(s, o, u, l) : this.createRadiusPath(a, s, o, u, l, f);
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.x, s = a.y, o = a.width, u = a.height;
      return {
        minX: i,
        minY: s,
        maxX: i + o,
        maxY: s + u
      };
    }
  }]), r;
}(M);
const dr = $i;
var ze = {}, Bi = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !1, this._attrs.canStroke = !1, this._attrs.loading = !1, this._attrs.image = null, this._attrs.type = "image";
    }
  }, {
    key: "draw",
    value: function(a) {
      var i = this;
      if (!this.get("loading")) {
        var s = this.get("image");
        if (s) {
          N(B(r.prototype), "draw", this).call(this, a);
          return;
        }
        var o = this.get("attrs"), u = o.src, l = o.img;
        if (l) {
          this.set("image", l), N(B(r.prototype), "draw", this).call(this, a);
          return;
        }
        if (u) {
          var f = this.get("cacheImage");
          if (f && ze[u]) {
            this.set("image", ze[u]), this.draw(a);
            return;
          }
          var c = null, h = this.get("canvas");
          if (h && h.get("createImage")) {
            var v = h.get("createImage");
            c = v();
          } else
            window.Image && (c = new Image());
          c && (this.set("loading", !0), c.crossOrigin = "", c.onload = function() {
            i.set("loading", !1), i.set("image", c), h.draw();
          }, c.src = u, f && (ze[u] = c));
        }
      }
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("image");
      this.drawImage(a, i);
    }
  }, {
    key: "drawImage",
    value: function(a, i) {
      var s = this._attrs, o = s.attrs, u = s.destroyed;
      if (!u) {
        var l = o.x, f = o.y, c = o.width, h = o.height, v = o.sx, d = o.sy, p = o.swidth, m = o.sheight, g = o.radius, A = o.fillOpacity;
        g && (a.save(), this.createRadiusPath(a, l, f, c, h, g), a.clip());
        var S = a.globalAlpha;
        L(A) || (a.globalAlpha = A), !L(v) && !L(d) && !L(p) && !L(m) ? a.drawImage(i, v, d, p, m, l, f, c, h) : a.drawImage(i, l, f, c, h), a.globalAlpha = S, g && a.restore();
      }
    }
  }]), r;
}(dr);
const Li = Bi;
var Ni = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "circle";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        x: 0,
        y: 0,
        r: 0,
        lineWidth: 0
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.x, o = i.y, u = i.r;
      a.beginPath(), a.arc(s, o, u, 0, Math.PI * 2, !1), a.closePath();
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.x, s = a.y, o = a.r;
      return {
        minX: i - o,
        maxX: i + o,
        minY: s - o,
        maxY: s + o
      };
    }
  }]), r;
}(M);
const Fi = Ni;
var Di = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canStroke = !0, this._attrs.type = "line";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        lineWidth: 1
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.x1, o = i.y1, u = i.x2, l = i.y2;
      a.beginPath(), a.moveTo(s, o), a.lineTo(u, l);
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.x1, s = a.y1, o = a.x2, u = a.y2, l = a.lineWidth;
      return ii(i, s, o, u, l);
    }
  }]), r;
}(M);
const Xi = Di;
var Yi = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polygon";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        points: null,
        lineWidth: 0
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.points;
      a.beginPath();
      for (var o = 0, u = s.length; o < u; o++) {
        var l = s[o];
        o === 0 ? a.moveTo(l.x, l.y) : a.lineTo(l.x, l.y);
      }
      a.closePath();
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.points;
      return ma(i);
    }
  }]), r;
}(M);
const ji = Yi;
function Fr(t) {
  for (var e = [], r = 0, n = t.length; r < n; r++) {
    var a = t[r];
    !isNaN(a.x) && !isNaN(a.y) && e.push(a);
  }
  return e;
}
var zi = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polyline";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        points: null,
        lineWidth: 1,
        smooth: !1
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.points, o = i.smooth, u = Fr(s);
      if (a.beginPath(), u.length)
        if (a.moveTo(u[0].x, u[0].y), o)
          for (var l = [[0, 0], [1, 1]], f = Cr(u, !1, l), c = 0, h = f.length; c < h; c++) {
            var v = f[c];
            a.bezierCurveTo(v[1], v[2], v[3], v[4], v[5], v[6]);
          }
        else {
          var d, p;
          for (d = 1, p = u.length - 1; d < p; d++)
            a.lineTo(u[d].x, u[d].y);
          a.lineTo(u[p].x, u[p].y);
        }
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.points, s = a.smooth, o = a.lineWidth, u = Fr(i);
      if (s) {
        for (var l = [], f = [[0, 0], [1, 1]], c = Cr(u, !1, f), h = 0, v = c.length; h < v; h++) {
          var d = c[h];
          if (h === 0)
            l.push([u[0].x, u[0].y, d[1], d[2], d[3], d[4], d[5], d[6]]);
          else {
            var p = c[h - 1];
            l.push([p[5], p[6], d[1], d[2], d[3], d[4], d[5], d[6]]);
          }
        }
        return si(l, o);
      }
      return ma(u, o);
    }
  }]), r;
}(M);
const Wi = zi;
var Hi = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, this._attrs.type = "arc";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        x: 0,
        y: 0,
        r: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: !1,
        lineWidth: 1
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.x, o = i.y, u = i.r, l = i.startAngle, f = i.endAngle, c = i.anticlockwise;
      a.beginPath(), l !== f && a.arc(s, o, u, l, f, c);
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.x, s = a.y, o = a.r, u = a.startAngle, l = a.endAngle, f = a.anticlockwise;
      return tr(i, s, o, u, l, f);
    }
  }]), r;
}(M);
const qi = Hi;
var Ui = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "sector";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        x: 0,
        y: 0,
        lineWidth: 0,
        r: 0,
        r0: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: !1
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.x, o = i.y, u = i.startAngle, l = i.r, f = i.r0, c = i.anticlockwise, h = Math.min(i.endAngle, u + Math.PI * 2);
      a.beginPath();
      var v = Math.cos(u), d = Math.sin(u);
      a.moveTo(v * f + s, d * f + o), a.lineTo(v * l + s, d * l + o), (Math.abs(h - u) > 1e-4 || u === 0 && h < 0) && (a.arc(s, o, l, u, h, c), a.lineTo(Math.cos(h) * f + s, Math.sin(h) * f + o), f !== 0 && a.arc(s, o, f, h, u, !c)), a.closePath();
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.x, s = a.y, o = a.r, u = a.r0, l = a.startAngle, f = a.endAngle, c = a.anticlockwise, h = tr(i, s, o, l, f, c), v = tr(i, s, u, l, f, c);
      return {
        minX: Math.min(h.minX, v.minX),
        minY: Math.min(h.minY, v.minY),
        maxX: Math.max(h.maxX, v.maxX),
        maxY: Math.max(h.maxY, v.maxY)
      };
    }
  }]), r;
}(M);
const Gi = Ui;
var Vi = {
  calcRotatedBox: function(e) {
    var r = e.width, n = e.height, a = e.rotate, i = Math.abs(a);
    return {
      width: Math.abs(r * Math.cos(i) + n * Math.sin(i)),
      height: Math.abs(n * Math.cos(i) + r * Math.sin(i))
    };
  }
};
const Ji = Vi;
var Dr = di, We = 0, de = {}, Ki = 5e3, Qi = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "text";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        lineWidth: 0,
        lineCount: 1,
        fontSize: 12,
        fontFamily: "",
        fontStyle: "normal",
        fontWeight: "normal",
        fontVariant: "normal",
        textAlign: "start",
        textBaseline: "bottom",
        lineHeight: null,
        textArr: null
      };
    }
  }, {
    key: "_getFontStyle",
    value: function() {
      var a = this._attrs.attrs, i = a.fontSize, s = a.fontFamily, o = a.fontWeight, u = a.fontStyle, l = a.fontVariant;
      return "".concat(u, " ").concat(l, " ").concat(o, " ").concat(i, "px ").concat(s);
    }
  }, {
    key: "_afterAttrsSet",
    value: function() {
      var a = this._attrs.attrs;
      if (a.font = this._getFontStyle(), a.text) {
        var i = a.text, s = null, o = 1;
        $t(i) && i.indexOf(`
`) !== -1 && (s = i.split(`
`), o = s.length), a.lineCount = o, a.textArr = s;
      }
      this.set("attrs", a);
    }
  }, {
    key: "_getTextHeight",
    value: function() {
      var a = this._attrs.attrs;
      if (a.height)
        return a.height;
      var i = a.lineCount, s = a.fontSize * 1;
      if (i > 1) {
        var o = this._getSpaceingY();
        return s * i + o * (i - 1);
      }
      return s;
    }
  }, {
    key: "_getSpaceingY",
    value: function() {
      var a = this._attrs.attrs, i = a.lineHeight, s = a.fontSize * 1;
      return i ? i - s : s * 0.14;
    }
  }, {
    key: "drawInner",
    value: function(a) {
      var i = this._attrs.attrs, s = i.text, o = i.x, u = i.y;
      if (!(L(s) || isNaN(o) || isNaN(u))) {
        var l = i.textArr, f = i.fontSize * 1, c = this._getSpaceingY();
        i.rotate && (a.translate(o, u), a.rotate(i.rotate), o = 0, u = 0);
        var h = i.textBaseline, v;
        l && (v = this._getTextHeight());
        var d;
        if (this.hasFill()) {
          var p = i.fillOpacity;
          if (!L(p) && p !== 1 && (a.globalAlpha = p), l)
            for (var m = 0, g = l.length; m < g; m++) {
              var A = l[m];
              d = u + m * (c + f) - v + f, h === "middle" && (d += v - f - (v - f) / 2), h === "top" && (d += v - f), a.fillText(A, o, d);
            }
          else
            a.fillText(s, o, u);
        }
        if (this.hasStroke())
          if (l)
            for (var S = 0, b = l.length; S < b; S++) {
              var R = l[S];
              d = u + S * (c + f) - v + f, h === "middle" && (d += v - f - (v - f) / 2), h === "top" && (d += v - f), a.strokeText(R, o, d);
            }
          else
            a.strokeText(s, o, u);
      }
    }
  }, {
    key: "_getAriaLabel",
    value: function() {
      return this._attrs.attrs.text;
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this._attrs.attrs, i = a.x, s = a.y, o = a.textAlign, u = a.textBaseline, l = this._getTextWidth();
      if (!l)
        return {
          minX: i,
          minY: s,
          maxX: i,
          maxY: s
        };
      var f = this._getTextHeight();
      if (a.rotate) {
        var c = Ji.calcRotatedBox({
          width: l,
          height: f,
          rotate: a.rotate
        });
        l = c.width, f = c.height;
      }
      var h = {
        x: i,
        y: s - f
      };
      return o && (o === "end" || o === "right" ? h.x -= l : o === "center" && (h.x -= l / 2)), u && (u === "top" ? h.y += f : u === "middle" && (h.y += f / 2)), {
        minX: h.x,
        minY: h.y,
        maxX: h.x + l,
        maxY: h.y + f
      };
    }
  }, {
    key: "_getTextWidth",
    value: function() {
      var a = this._attrs.attrs;
      if (a.width)
        return a.width;
      var i = a.text, s = this.get("context");
      if (!L(i)) {
        var o = a.font, u = a.textArr, l = i + "" + o;
        if (de[l])
          return de[l];
        var f = 0;
        if (u)
          for (var c = 0, h = u.length; c < h; c++) {
            var v = u[c];
            f = Math.max(f, Dr(v, o, s).width);
          }
        else
          f = Dr(i, o, s).width;
        return We > Ki && (We = 0, de = {}), We++, de[l] = f, f;
      }
    }
  }]), r;
}(M);
const Zi = Qi;
var ts = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.createPath = null, this._attrs.type = "custom";
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("createPath");
      i && i.call(this, a);
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("calculateBox");
      return a && a.call(this);
    }
  }]), r;
}(M);
const es = ts;
var rs = {
  circle: function(e, r, n, a) {
    a.arc(e, r, n, 0, Math.PI * 2, !1);
  },
  square: function(e, r, n, a) {
    a.moveTo(e - n, r - n), a.lineTo(e + n, r - n), a.lineTo(e + n, r + n), a.lineTo(e - n, r + n), a.closePath();
  }
}, as = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: function() {
      N(B(r.prototype), "_initProperties", this).call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "marker";
    }
  }, {
    key: "getDefaultAttrs",
    value: function() {
      return {
        x: 0,
        y: 0,
        lineWidth: 0
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs"), s = i.x, o = i.y, u = i.radius, l = i.symbol || "circle", f;
      ht(l) ? f = l : f = rs[l], a.beginPath(), f(s, o, u, a, this);
    }
  }, {
    key: "calculateBox",
    value: function() {
      var a = this.get("attrs"), i = a.x, s = a.y, o = a.radius;
      return {
        minX: i - o,
        minY: s - o,
        maxX: i + o,
        maxY: s + o
      };
    }
  }]), r;
}(M);
const ns = as;
M.Rect = dr;
M.Image = Li;
M.Circle = Fi;
M.Line = Xi;
M.Polygon = ji;
M.Polyline = Wi;
M.Arc = qi;
M.Sector = Gi;
M.Text = Zi;
M.Custom = es;
M.Marker = ns;
var Xr = {}, er = "_INDEX";
function is(t) {
  return function(e, r) {
    var n = t(e, r);
    return n === 0 ? e[er] - r[er] : n;
  };
}
const wa = {
  getGroupClass: function() {
  },
  getChildren: function() {
    return this.get("children");
  },
  addShape: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Xr[e];
    n || (n = ca(e), Xr[e] = n);
    var a = new M[n](r);
    return this.add(a), a;
  },
  addGroup: function(e) {
    var r = this.getGroupClass(), n = new r(e);
    return this.add(n), n;
  },
  contain: function(e) {
    var r = this.get("children");
    return r.indexOf(e) > -1;
  },
  sort: function() {
    for (var e = this.get("children"), r = 0, n = e.length; r < n; r++) {
      var a = e[r];
      a[er] = r;
    }
    return e.sort(is(function(i, s) {
      return i.get("zIndex") - s.get("zIndex");
    })), this;
  },
  drawChildren: function(e) {
    this.sort();
    for (var r = this.get("children"), n = 0, a = r.length; n < a; n++) {
      var i = r[n];
      i.draw(e);
    }
    return this;
  },
  clear: function() {
    for (var e = this.get("children") || []; e.length !== 0; )
      e[e.length - 1].remove(!0);
    return this;
  },
  add: function(e) {
    var r = this.get("children");
    r || (r = [], this.set("children", r)), C(e) || (e = [e]);
    for (var n = 0, a = e.length; n < a; n++) {
      var i = e[n], s = i.get("parent");
      if (s) {
        var o = s.get("children");
        _a(o, i);
      }
      this._setEvn(i), r.push(i);
    }
    return this;
  },
  _setEvn: function(e) {
    var r, n, a = this._attrs, i = a.context, s = a.canvas, o = a.aria, u = e._attrs, l = u.isGroup, f = u.type;
    e._attrs.parent = this, e._attrs.context = i, e._attrs.canvas = s, o && e._attrs.aria !== !1 && (e._attrs.aria = o), f === "text" && s && s.get("fontFamily") && !(!((r = e._attrs.attrs) === null || r === void 0) && r.fontFamily) && e.attr("fontFamily", s.get("fontFamily"));
    var c = (n = e._attrs.attrs) === null || n === void 0 ? void 0 : n.clip;
    if (c && (c._attrs.parent = this, c._attrs.context = i, c._attrs.canvas = s), l)
      for (var h = e._attrs.children, v = 0, d = h.length; v < d; v++)
        e._setEvn(h[v]);
  },
  _getAriaLabel: function() {
    var e = this._attrs, r = e.aria, n = e.ariaLabel, a = e.children;
    if (r) {
      var i = [];
      if (a && a.length)
        for (var s = 0, o = a.length; s < o; s++) {
          var u = a[s].getAriaLabel();
          u && i.push(u);
        }
      var l = i.join(" ");
      return n && l ? "".concat(n, " ").concat(l, " ") : n || l;
    }
  }
};
var rr = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r() {
    return T(this, r), e.apply(this, arguments);
  }
  return E(r, [{
    key: "_initProperties",
    value: (
      /* eslint-enable */
      function() {
        this._attrs = {
          type: "group",
          zIndex: 0,
          visible: !0,
          destroyed: !1,
          isGroup: !0,
          canFill: !0,
          canStroke: !0,
          children: [],
          attrs: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            lineWidth: 0
          }
        };
      }
    )
  }, {
    key: "getBBox",
    value: function() {
      for (var a = 1 / 0, i = -1 / 0, s = 1 / 0, o = -1 / 0, u = this.get("children"), l = 0, f = u.length; l < f; l++) {
        var c = u[l];
        if (c.get("visible")) {
          var h = c.getBBox();
          if (!h)
            continue;
          var v = [h.minX, h.minY], d = [h.minX, h.maxY], p = [h.maxX, h.minY], m = [h.maxX, h.maxY], g = c.attr("matrix");
          P.transformMat2d(v, v, g), P.transformMat2d(d, d, g), P.transformMat2d(p, p, g), P.transformMat2d(m, m, g), a = Math.min(v[0], d[0], p[0], m[0], a), i = Math.max(v[0], d[0], p[0], m[0], i), s = Math.min(v[1], d[1], p[1], m[1], s), o = Math.max(v[1], d[1], p[1], m[1], o);
        }
      }
      return {
        minX: a,
        minY: s,
        maxX: i,
        maxY: o,
        x: a,
        y: s,
        width: i - a,
        height: o - s
      };
    }
  }, {
    key: "createPath",
    value: function(a) {
      var i = this.get("attrs");
      !i.fillStyle && !i.strokeStyle || N(B(r.prototype), "createPath", this).call(this, a);
    }
  }, {
    key: "drawInner",
    value: function(a) {
      N(B(r.prototype), "drawInner", this).call(this, a), this.drawChildren(a);
    }
  }, {
    key: "destroy",
    value: function() {
      this.get("destroyed") || (this.clear(), N(B(r.prototype), "destroy", this).call(this));
    }
  }]), r;
}(dr);
ot(rr.prototype, wa, {
  getGroupClass: function() {
    return rr;
  }
});
const Pa = rr;
var ss = (typeof window == "undefined" ? "undefined" : $(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
  return setTimeout(t, 16);
};
const Yr = {
  general: {
    title: "这是一个图表，",
    withTitle: "这是一个关于“{title}”的图表。"
  },
  coord: {
    cartesian: "X轴是{xLabel}Y轴是{yLabel}"
    // polar: '弧度是{xLabel}半径是{yLabel}'
  },
  scale: {
    linear: "数值型，数据最小值为{min}，最大值为{max}；",
    cat: "分类型, 分类类型有：{values}；",
    timeCat: "时间型，时间范围从{start}到{end}；"
  },
  geometry: {
    prefix: "共有{count}种分类组成，",
    oneData: "第{index}类是{name}，数据是{values};",
    partData: "第{index}类是{name}，共有{count}项数据，前{part}项是{values};",
    allData: "第{index}类是{name}，有{count}项数据，分别是{values};"
  },
  legend: {
    prefix: "图例分类有："
  }
};
var os = li, us = hi, ls = fi, fs = ci, cs = ui, Sa = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r(n) {
    var a;
    T(this, r), a = e.call(this);
    var i = n.title, s = i ? Yn(Yr.general.withTitle, {
      title: i
    }) : Yr.general.title;
    return a._attrs = ot({
      type: "canvas",
      children: [],
      ariaLabel: s
    }, n), a._initPixelRatio(), a._initCanvas(), a;
  }
  return E(r, [{
    key: "get",
    value: (
      /* eslint-enable */
      function(a) {
        return this._attrs[a];
      }
    )
  }, {
    key: "set",
    value: function(a, i) {
      this._attrs[a] = i;
    }
  }, {
    key: "_initPixelRatio",
    value: function() {
      var a = this.get("pixelRatio");
      a || this.set("pixelRatio", os());
    }
  }, {
    key: "beforeDraw",
    value: function() {
      var a = this._attrs.context, i = this._attrs.el;
      a && a.clearRect && a.clearRect(0, 0, i.width, i.height);
    }
  }, {
    key: "_initCanvas",
    value: function() {
      var a = this.get("el"), i = this.get("context");
      if (!a && !i)
        throw new Error("Please specify the id, el or context of the chart!");
      var s;
      a ? s = $t(a) ? us(a) : a : s = _i.create(i), i && s && !s.getContext && (s.getContext = function() {
        return i;
      });
      var o = this.get("width") || ls(s) || s.width, u = this.get("height") || fs(s) || s.height;
      this.set("canvas", this), this.set("el", s), this.set("context", i || s.getContext("2d")), this.changeSize(o, u);
      var l = new gi({
        canvas: this,
        el: s
      });
      this.set("eventController", l);
    }
  }, {
    key: "changeSize",
    value: function(a, i) {
      var s = this.get("pixelRatio"), o = this.get("el");
      if (o.style && (o.style.width = a + "px", o.style.height = i + "px"), cs(o) && (o.width = a * s, o.height = i * s, s !== 1)) {
        var u = this.get("context");
        u.scale(s, s);
      }
      this.set("width", a), this.set("height", i);
    }
  }, {
    key: "getWidth",
    value: function() {
      var a = this.get("pixelRatio"), i = this.get("width");
      return i * a;
    }
  }, {
    key: "getHeight",
    value: function() {
      var a = this.get("pixelRatio"), i = this.get("height");
      return i * a;
    }
  }, {
    key: "getPointByClient",
    value: function(a, i) {
      var s = this.get("el"), o = s.getBoundingClientRect(), u = o.right - o.left, l = o.bottom - o.top;
      return {
        x: (a - o.left) * (s.width / u),
        y: (i - o.top) * (s.height / l)
      };
    }
  }, {
    key: "_beginDraw",
    value: function() {
      this._attrs.toDraw = !0;
    }
  }, {
    key: "_endDraw",
    value: function() {
      this._attrs.toDraw = !1, this.emit("afterdraw", {});
    }
  }, {
    key: "draw",
    value: function() {
      var a = this, i = function s() {
        a.set("animateHandler", ss(function() {
          a.set("animateHandler", void 0), a.get("toDraw") && s();
        })), a.beforeDraw();
        try {
          var o = a._attrs.context;
          a.drawChildren(o), o.draw && o.draw(), a.setAriaLabel();
        } catch (u) {
          console.warn("error in draw canvas, detail as:"), console.warn(u), a._endDraw();
        }
        a._endDraw();
      };
      this.get("destroyed") || (this.get("animateHandler") ? this._beginDraw() : i());
    }
    // 设置无障碍文本
  }, {
    key: "setAriaLabel",
    value: function() {
      var a = this._attrs.el, i = this._getAriaLabel();
      i && a.setAttribute && a.setAttribute("aria-label", i);
    }
  }, {
    key: "destroy",
    value: function() {
      if (!this.get("destroyed")) {
        var a = this.get("el");
        a.width = 0, a.height = 0, this.clear(), this._attrs = {}, this.set("destroyed", !0);
      }
    }
  }, {
    key: "isDestroyed",
    value: function() {
      return this.get("destroyed");
    }
  }]), r;
}(xa);
ot(Sa.prototype, wa, {
  getGroupClass: function() {
    return Pa;
  }
});
const hs = Sa;
var vs = {};
function ds(t) {
  var e = vs[t];
  return e || {
    Canvas: hs,
    Group: Pa,
    Shape: M
  };
}
function ys(t) {
  var e = t.renderer, r = ds(e);
  return new r.Canvas(t);
}
function ps(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Nt(t, e) {
  if (t == null)
    return {};
  var r = ps(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
var ar;
try {
  ar = parseInt(document.documentElement.style.fontSize, 10) || 50;
} catch (t) {
  ar = 50;
}
var gs = ar / 100;
function ms(t) {
  return t ? Number((t * gs).toFixed(1)) : 0;
}
function xs(t) {
  if (gt(t))
    return [t, t, t, t];
  var e = t[0], r = gt(t[1]) ? t[1] : t[0], n = gt(t[2]) ? t[2] : e, a = gt(t[3]) ? t[3] : r;
  return [e, r, n, a];
}
function ka(t) {
  var e = function r(n) {
    if ($t(n) && /^-?\d+(\.\d+)?px$/.test(n)) {
      var a = n.substr(0, n.length - 2);
      return t(Number(a));
    }
    if (C(n))
      return n.map(function(l) {
        return r(l);
      });
    if (Ot(n)) {
      var i = {};
      for (var s in n)
        if (n.hasOwnProperty(s)) {
          var o = r(n[s]);
          if (!o) {
            i[s] = o;
            continue;
          }
          if (s === "padding" || s === "margin") {
            var u = xs(o);
            i[s] = u, i["".concat(s, "Top")] = u[0], i["".concat(s, "Right")] = u[1], i["".concat(s, "Bottom")] = u[2], i["".concat(s, "Left")] = u[3];
            continue;
          }
          i[s] = o;
        }
      return i;
    }
    return n;
  };
  return e;
}
function Aa(t, e) {
  if (!t)
    return t;
  if (!C(t))
    return [e(t)];
  for (var r = [], n = 0; n < t.length; n++) {
    var a = t[n];
    C(a) ? r = r.concat(Aa(a, e)) : a && r.push(e(a));
  }
  return r;
}
var Ta = ka(ms), ye, jr = "inherit", Ea = "ltr", _s = "rtl", mt = "row", Vt = "row-reverse", ct = "column", nr = "column-reverse", zr = "flex-start", Wr = "center", bs = "flex-end", ws = "space-between", Ps = "space-around", He = "flex-start", qe = "center", Hr = "flex-end", qt = "stretch", nt = "relative", Ue = "absolute", j = {
  row: "left",
  "row-reverse": "right",
  column: "top",
  "column-reverse": "bottom"
}, K = {
  row: "right",
  "row-reverse": "left",
  column: "bottom",
  "column-reverse": "top"
}, V = {
  row: "left",
  "row-reverse": "right",
  column: "top",
  "column-reverse": "bottom"
}, _ = {
  row: "width",
  "row-reverse": "width",
  column: "height",
  "column-reverse": "height"
};
function Ma(t) {
  return (!t.layout || t.isDirty) && (t.layout = {
    width: void 0,
    height: void 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }), t.style || (t.style = {}), t.children || (t.children = []), t.children.forEach(Ma), t;
}
function rt(t) {
  return t === void 0;
}
function _t(t) {
  return t === mt || t === Vt;
}
function Ss(t) {
  return t === ct || t === nr;
}
function pt(t, e) {
  if (t.style.marginStart !== void 0 && _t(e))
    return t.style.marginStart;
  var r = null;
  switch (e) {
    case "row":
      r = t.style.marginLeft;
      break;
    case "row-reverse":
      r = t.style.marginRight;
      break;
    case "column":
      r = t.style.marginTop;
      break;
    case "column-reverse":
      r = t.style.marginBottom;
      break;
  }
  return r !== void 0 ? r : t.style.margin !== void 0 ? t.style.margin : 0;
}
function xe(t, e) {
  if (t.style.marginEnd !== void 0 && _t(e))
    return t.style.marginEnd;
  var r = null;
  switch (e) {
    case "row":
      r = t.style.marginRight;
      break;
    case "row-reverse":
      r = t.style.marginLeft;
      break;
    case "column":
      r = t.style.marginBottom;
      break;
    case "column-reverse":
      r = t.style.marginTop;
      break;
  }
  return r != null ? r : t.style.margin !== void 0 ? t.style.margin : 0;
}
function ks(t, e) {
  if (t.style.paddingStart !== void 0 && t.style.paddingStart >= 0 && _t(e))
    return t.style.paddingStart;
  var r = null;
  switch (e) {
    case "row":
      r = t.style.paddingLeft;
      break;
    case "row-reverse":
      r = t.style.paddingRight;
      break;
    case "column":
      r = t.style.paddingTop;
      break;
    case "column-reverse":
      r = t.style.paddingBottom;
      break;
  }
  return r != null && r >= 0 ? r : t.style.padding !== void 0 && t.style.padding >= 0 ? t.style.padding : 0;
}
function As(t, e) {
  if (t.style.paddingEnd !== void 0 && t.style.paddingEnd >= 0 && _t(e))
    return t.style.paddingEnd;
  var r = null;
  switch (e) {
    case "row":
      r = t.style.paddingRight;
      break;
    case "row-reverse":
      r = t.style.paddingLeft;
      break;
    case "column":
      r = t.style.paddingBottom;
      break;
    case "column-reverse":
      r = t.style.paddingTop;
      break;
  }
  return r != null && r >= 0 ? r : t.style.padding !== void 0 && t.style.padding >= 0 ? t.style.padding : 0;
}
function be(t, e) {
  if (t.style.borderStartWidth !== void 0 && t.style.borderStartWidth >= 0 && _t(e))
    return t.style.borderStartWidth;
  var r = null;
  switch (e) {
    case "row":
      r = t.style.borderLeftWidth;
      break;
    case "row-reverse":
      r = t.style.borderRightWidth;
      break;
    case "column":
      r = t.style.borderTopWidth;
      break;
    case "column-reverse":
      r = t.style.borderBottomWidth;
      break;
  }
  return r != null && r >= 0 ? r : t.style.borderWidth !== void 0 && t.style.borderWidth >= 0 ? t.style.borderWidth : 0;
}
function Ra(t, e) {
  if (t.style.borderEndWidth !== void 0 && t.style.borderEndWidth >= 0 && _t(e))
    return t.style.borderEndWidth;
  var r = null;
  switch (e) {
    case "row":
      r = t.style.borderRightWidth;
      break;
    case "row-reverse":
      r = t.style.borderLeftWidth;
      break;
    case "column":
      r = t.style.borderBottomWidth;
      break;
    case "column-reverse":
      r = t.style.borderTopWidth;
      break;
  }
  return r != null && r >= 0 ? r : t.style.borderWidth !== void 0 && t.style.borderWidth >= 0 ? t.style.borderWidth : 0;
}
function ir(t, e) {
  return ks(t, e) + be(t, e);
}
function Ca(t, e) {
  return As(t, e) + Ra(t, e);
}
function Ts(t, e) {
  return be(t, e) + Ra(t, e);
}
function J(t, e) {
  return pt(t, e) + xe(t, e);
}
function z(t, e) {
  return ir(t, e) + Ca(t, e);
}
function Es(t) {
  return t.style.justifyContent ? t.style.justifyContent : "flex-start";
}
function Ms(t) {
  return t.style.alignContent ? t.style.alignContent : "flex-start";
}
function Ge(t, e) {
  return e.style.alignSelf ? e.style.alignSelf : t.style.alignItems ? t.style.alignItems : "stretch";
}
function sr(t, e) {
  if (e === _s) {
    if (t === mt)
      return Vt;
    if (t === Vt)
      return mt;
  }
  return t;
}
function Rs(t, e) {
  var r;
  return t.style.direction ? r = t.style.direction : r = jr, r === jr && (r = e === void 0 ? Ea : e), r;
}
function Cs(t) {
  return t.style.flexDirection ? t.style.flexDirection : ct;
}
function Is(t, e) {
  return Ss(t) ? sr(mt, e) : ct;
}
function H(t) {
  return t.style.position ? t.style.position : "relative";
}
function qr(t) {
  return H(t) === nt && t.style.flex > 0;
}
function Os(t) {
  return t.style.flexWrap === "wrap";
}
function Et(t, e) {
  return t.layout[_[e]] + J(t, e);
}
function it(t, e) {
  return t.style[_[e]] !== void 0 && t.style[_[e]] >= 0;
}
function ft(t, e) {
  return t.style[e] !== void 0;
}
function $s(t) {
  return t.style.measure !== void 0;
}
function st(t, e) {
  return t.style[e] !== void 0 ? t.style[e] : 0;
}
function q(t, e, r) {
  var n = {
    row: t.style.minWidth,
    "row-reverse": t.style.minWidth,
    column: t.style.minHeight,
    "column-reverse": t.style.minHeight
  }[e], a = {
    row: t.style.maxWidth,
    "row-reverse": t.style.maxWidth,
    column: t.style.maxHeight,
    "column-reverse": t.style.maxHeight
  }[e], i = r;
  return a !== void 0 && a >= 0 && i > a && (i = a), n !== void 0 && n >= 0 && i < n && (i = n), i;
}
function Y(t, e) {
  return t > e ? t : e;
}
function Ur(t, e) {
  t.layout[_[e]] === void 0 && it(t, e) && (t.layout[_[e]] = Y(q(t, e, t.style[_[e]]), z(t, e)));
}
function Mt(t, e, r) {
  e.layout[K[r]] = t.layout[_[r]] - e.layout[_[r]] - e.layout[V[r]];
}
function pe(t, e) {
  return t.style[j[e]] !== void 0 ? st(t, j[e]) : -st(t, K[e]);
}
function Bs(t, e, r) {
  var n = Rs(t, r), a = sr(Cs(t), n), i = Is(a, n), s = sr(mt, n);
  Ur(t, a), Ur(t, i), t.layout.direction = n, t.layout[j[a]] += pt(t, a) + pe(t, a), t.layout[K[a]] += xe(t, a) + pe(t, a), t.layout[j[i]] += pt(t, i) + pe(t, i), t.layout[K[i]] += xe(t, i) + pe(t, i);
  var o = t.children.length, u = z(t, s);
  if ($s(t)) {
    var l = !rt(t.layout[_[s]]), f = ye;
    it(t, s) ? f = t.style.width : l ? f = t.layout[_[s]] : f = e - J(t, s), f -= u;
    var c = !it(t, s) && !l, h = !it(t, ct) && rt(t.layout[_[ct]]);
    if (c || h) {
      var v = t.style.measure(
        /*(c)!node->context,*/
        /*(java)!layoutContext.measureOutput,*/
        f
      );
      c && (t.layout.width = v.width + u), h && (t.layout.height = v.height + z(t, ct));
    }
    if (o === 0)
      return;
  }
  var d = Os(t), p = Es(t), m = ir(t, a), g = ir(t, i), A = z(t, a), S = z(t, i), b = !rt(t.layout[_[a]]), R = !rt(t.layout[_[i]]), wt = _t(a), k, F, y, w, Te = null, I = null, Ee = ye;
  b && (Ee = t.layout[_[a]] - A);
  for (var ee = 0, Ft = 0, Me = 0, Pt = 0, Re = 0, Dt = 0; Ft < o; ) {
    var Xt = 0, Yt = 0, re = 0, jt = 0, ae = b && p === zr || !b && p !== Wr, mr = ae ? o : ee, Ce = !0, xr = o, ne = null, O = null, St = m, kt = 0, lt;
    for (k = ee; k < o; ++k) {
      y = t.children[k], y.lineIndex = Dt, y.nextAbsoluteChild = null, y.nextFlexChild = null;
      var vt = Ge(t, y);
      if (vt === qt && H(y) === nt && R && !it(y, i))
        y.layout[_[i]] = Y(
          q(y, i, t.layout[_[i]] - S - J(y, i)),
          // You never want to go smaller than padding
          z(y, i)
        );
      else if (H(y) === Ue)
        for (Te === null && (Te = y), I !== null && (I.nextAbsoluteChild = y), I = y, F = 0; F < 2; F++)
          w = F !== 0 ? mt : ct, !rt(t.layout[_[w]]) && !it(y, w) && ft(y, j[w]) && ft(y, K[w]) && (y.layout[_[w]] = Y(
            q(y, w, t.layout[_[w]] - z(t, w) - J(y, w) - st(y, j[w]) - st(y, K[w])),
            // You never want to go smaller than padding
            z(y, w)
          ));
      var ie = 0;
      if (b && qr(y) ? (Yt++, re += y.style.flex, ne === null && (ne = y), O !== null && (O.nextFlexChild = y), O = y, ie = z(y, a) + J(y, a)) : (lt = ye, wt || (it(t, s) ? lt = t.layout[_[s]] - u : lt = e - J(t, s) - u), Me === 0 && or(
        /*(java)!layoutContext, */
        y,
        lt,
        n
      ), H(y) === nt && (jt++, ie = Et(y, a))), d && b && Xt + ie > Ee && // If there's only one element, then it's bigger than the content
      // and needs its own line
      k !== ee) {
        jt--, Me = 1;
        break;
      }
      ae && (H(y) !== nt || qr(y)) && (ae = !1, mr = k), Ce && (H(y) !== nt || vt !== qt && vt !== He || rt(y.layout[_[i]])) && (Ce = !1, xr = k), ae && (y.layout[V[a]] += St, b && Mt(t, y, a), St += Et(y, a), kt = Y(kt, q(y, i, Et(y, i)))), Ce && (y.layout[V[i]] += Pt + g, R && Mt(t, y, i)), Me = 0, Xt += ie, Ft = k + 1;
    }
    var se = 0, zt = 0, G = 0;
    if (b ? G = Ee - Xt : G = Y(Xt, 0) - Xt, Yt !== 0) {
      var Wt = G / re, Ie, Oe;
      for (O = ne; O !== null; )
        Ie = Wt * O.style.flex + z(O, a), Oe = q(O, a, Ie), Ie !== Oe && (G -= Oe, re -= O.style.flex), O = O.nextFlexChild;
      for (Wt = G / re, Wt < 0 && (Wt = 0), O = ne; O !== null; )
        O.layout[_[a]] = q(O, a, Wt * O.style.flex + z(O, a)), lt = ye, it(t, s) ? lt = t.layout[_[s]] - u : wt || (lt = e - J(t, s) - u), or(
          /*(java)!layoutContext, */
          O,
          lt,
          n
        ), y = O, O = O.nextFlexChild, y.nextFlexChild = null;
    } else
      p !== zr && (p === Wr ? se = G / 2 : p === bs ? se = G : p === ws ? (G = Y(G, 0), Yt + jt - 1 !== 0 ? zt = G / (Yt + jt - 1) : zt = 0) : p === Ps && (zt = G / (Yt + jt), se = zt / 2));
    for (St += se, k = mr; k < Ft; ++k)
      y = t.children[k], H(y) === Ue && ft(y, j[a]) ? y.layout[V[a]] = st(y, j[a]) + be(t, a) + pt(y, a) : (y.layout[V[a]] += St, b && Mt(t, y, a), H(y) === nt && (St += zt + Et(y, a), kt = Y(kt, q(y, i, Et(y, i)))));
    var $e = t.layout[_[i]];
    for (R || ($e = Y(
      // For the cross dim, we add both sides at the end because the value
      // is aggregate via a max function. Intermediate negative values
      // can mess this computation otherwise
      q(t, i, kt + S),
      S
    )), k = xr; k < Ft; ++k)
      if (y = t.children[k], H(y) === Ue && ft(y, j[i]))
        y.layout[V[i]] = st(y, j[i]) + be(t, i) + pt(y, i);
      else {
        var Be = g;
        if (H(y) === nt) {
          var vt = Ge(t, y);
          if (vt === qt)
            rt(y.layout[_[i]]) && (y.layout[_[i]] = Y(
              q(y, i, $e - S - J(y, i)),
              // You never want to go smaller than padding
              z(y, i)
            ));
          else if (vt !== He) {
            var _r = $e - S - Et(y, i);
            vt === qe ? Be += _r / 2 : Be += _r;
          }
        }
        y.layout[V[i]] += Pt + Be, R && Mt(t, y, i);
      }
    Pt += kt, Re = Y(Re, St), Dt += 1, ee = Ft;
  }
  if (Dt > 1 && R) {
    var br = t.layout[_[i]] - S, Le = br - Pt, wr = 0, dt = g, Ne = Ms(t);
    Ne === Hr ? dt += Le : Ne === qe ? dt += Le / 2 : Ne === qt && br > Pt && (wr = Le / Dt);
    var Fe = 0;
    for (k = 0; k < Dt; ++k) {
      var Pr = Fe, At = 0;
      for (F = Pr; F < o; ++F)
        if (y = t.children[F], H(y) === nt) {
          if (y.lineIndex !== k)
            break;
          rt(y.layout[_[i]]) || (At = Y(At, y.layout[_[i]] + J(y, i)));
        }
      for (Fe = F, At += wr, F = Pr; F < Fe; ++F)
        if (y = t.children[F], H(y) === nt) {
          var oe = Ge(t, y);
          if (oe === He)
            y.layout[V[i]] = dt + pt(y, i);
          else if (oe === Hr)
            y.layout[V[i]] = dt + At - xe(y, i) - y.layout[_[i]];
          else if (oe === qe) {
            var Qa = y.layout[_[i]];
            y.layout[V[i]] = dt + (At - Qa) / 2;
          } else
            oe === qt && (y.layout[V[i]] = dt + pt(y, i));
        }
      dt += At;
    }
  }
  var De = !1, Xe = !1;
  if (b || (t.layout[_[a]] = Y(
    // We're missing the last padding at this point to get the final
    // dimension
    q(t, a, Re + Ca(t, a)),
    // We can never assign a width smaller than the padding and borders
    A
  ), (a === Vt || a === nr) && (De = !0)), R || (t.layout[_[i]] = Y(
    // For the cross dim, we add both sides at the end because the value
    // is aggregate via a max function. Intermediate negative values
    // can mess this computation otherwise
    q(t, i, Pt + S),
    S
  ), (i === Vt || i === nr) && (Xe = !0)), De || Xe)
    for (k = 0; k < o; ++k)
      y = t.children[k], De && Mt(t, y, a), Xe && Mt(t, y, i);
  for (I = Te; I !== null; ) {
    for (F = 0; F < 2; F++)
      w = F !== 0 ? mt : ct, !rt(t.layout[_[w]]) && !it(I, w) && ft(I, j[w]) && ft(I, K[w]) && (I.layout[_[w]] = Y(
        q(I, w, t.layout[_[w]] - Ts(t, w) - J(I, w) - st(I, j[w]) - st(I, K[w])),
        // You never want to go smaller than padding
        z(I, w)
      )), ft(I, K[w]) && !ft(I, j[w]) && (I.layout[j[w]] = t.layout[_[w]] - I.layout[_[w]] - st(I, K[w]));
    y = I, I = I.nextAbsoluteChild, y.nextAbsoluteChild = null;
  }
}
function Ls(t) {
  var e = t.style, r = {};
  [
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft"
    // 只支持marginLeft
  ].forEach(function(n) {
    var a = e[n];
    a && /^-?\d+%$/.test(a) && (r[n] = a, e[n] = 0);
  }), t.margin = r;
}
function Ns(t) {
  var e = Number(t.substr(0, t.length - 1));
  return e / 100;
}
function Fs(t) {
  var e = t.margin, r = t.layout;
  Object.keys(e).forEach(function(n) {
    var a = Ns(e[n]);
    (n === "marginLeft" || n === "marginRight") && r.width ? r.left += r.width * a : (n === "marginTop" || n === "marginBottom") && r.height && (r.top += r.height * a);
  });
}
function or(t, e, r) {
  t.shouldUpdate = !0, Ls(t);
  var n = t.style.direction || Ea, a = !t.isDirty && t.lastLayout && t.lastLayout.requestedHeight === t.layout.height && t.lastLayout.requestedWidth === t.layout.width && t.lastLayout.parentMaxWidth === e && t.lastLayout.direction === n;
  a ? (t.layout.width = t.lastLayout.width, t.layout.height = t.lastLayout.height, t.layout.top = t.lastLayout.top, t.layout.left = t.lastLayout.left) : (t.lastLayout || (t.lastLayout = {}), t.lastLayout.requestedWidth = t.layout.width, t.lastLayout.requestedHeight = t.layout.height, t.lastLayout.parentMaxWidth = e, t.lastLayout.direction = n, t.children.forEach(function(i) {
    i.layout.width = void 0, i.layout.height = void 0, i.layout.top = 0, i.layout.left = 0;
  }), Bs(t, e, r), t.lastLayout.width = t.layout.width, t.lastLayout.height = t.layout.height, t.lastLayout.top = t.layout.top, t.lastLayout.left = t.layout.left), Fs(t);
}
function Ia(t) {
  if (!t)
    return t;
  var e = t.style, r = t.children;
  if (e)
    return Ma(t), or(t, null, null), t;
  if (r && r.length)
    for (var n = 0, a = r.length; n < a; n++)
      Ia(r[n]);
  return t;
}
const ur = function(t) {
  var e = t.left, r = t.top, n = t.width, a = t.height;
  return {
    x: e,
    y: r,
    width: n,
    height: a
  };
}, Ds = function(t) {
  var e = t.left, r = t.top, n = t.width, a = t.height;
  return {
    x1: e,
    y1: r,
    x2: e + n,
    y2: r + a
  };
}, Xs = function(t) {
  var e = t.height, r = t.left, n = t.top;
  return {
    x: r,
    y: n + e / 2,
    // 通过middle + top 才能比较好的实现文本对齐
    textBaseline: "middle"
  };
}, Ys = function(t) {
  var e = t.left, r = t.top, n = t.width, a = n / 2;
  return {
    x: e + a,
    y: r + a,
    r: a
  };
}, js = function(t) {
  var e = t.left, r = t.top, n = t.width, a = n / 2;
  return {
    x: e + a,
    y: r,
    radius: a
  };
};
var zs = {
  rect: ur,
  line: Ds,
  text: Xs,
  circle: Ys,
  marker: js,
  group: ur
};
const Ws = function(t, e) {
  if (!e)
    return null;
  var r = zs[t] || ur;
  return r(e);
};
var Hs = "appear", Jt = "update", bt = "delete";
function Oa(t, e) {
  return new M[ca(t)](e);
}
const qs = function(t, e, r, n) {
  if (!e)
    return null;
  var a = t.get("status"), i = e.clip, s = e.start, o = e.end, u = e.easing, l = e.delay, f = e.duration, c = ht(i) ? i(t._attrs.attrs) : i;
  if (c) {
    var h = c.type, v = c.attrs, d = c.start, p = Oa(h, {
      attrs: x(x({}, v), d)
    });
    c.easing = c.easing || u, c.delay = typeof c.delay == "number" ? c.delay : l, c.duration = c.duration || f, c.element = p;
  }
  var m = t.getDefaultAttrs();
  return x(x({}, e), {}, {
    clip: c,
    start: x(x(x({}, m), n), s),
    end: x(x({}, a === bt ? null : r), o)
  });
};
function $a(t, e, r) {
  var n = t.key, a = t.ref, i = t._cache, s = t.type, o = t.props, u = t.status, l = t.animation, f = Aa(o.children, function(g) {
    return $a(g, e, r);
  }), c = r(o.style), h = r(o.attrs);
  if (s === "text") {
    var v = e.addShape(s, {
      attrs: x({
        x: 0,
        y: 0
      }, h)
    }), d = v.getBBox(), p = d.width, m = d.height;
    c = x({
      width: p,
      height: m
    }, c), v.remove(!0);
  }
  return {
    key: n,
    ref: a,
    _cache: i,
    type: s,
    props: o,
    children: f,
    status: u,
    animation: l,
    // 处理px2hd之后的配置
    style: c,
    attrs: h
  };
}
function Us(t, e) {
  if (!t || !e)
    return e;
  var r = t.left, n = t.top, a = e.left, i = e.top;
  return x(x({}, e), {}, {
    left: r + a,
    top: n + i
  });
}
function Ba(t, e, r, n) {
  var a = t._cache, i = a === void 0 ? {} : a, s = t.ref, o = t.type, u = t.props, l = t.attrs, f = t.layout, c = t.renderChildren, h = t.children, v = t.status, d = t.animation, p = Us(r, f), m = i.attrs, g = x(x(x({}, Ws(o, p)), v === bt ? m : null), l);
  if (i.attrs = g, g.clip) {
    var A = g.clip, S = ht(A) ? A(g) : A;
    g.clip = Oa(S.type, S);
  }
  var b;
  if (o === "group") {
    b = e.addGroup(x(x({}, Un(u, ["children"])), {}, {
      status: v,
      attrs: g
    }));
    var R = c || h;
    if (R && R.length)
      for (var wt = 0, k = R.length; wt < k; wt++)
        Ba(R[wt], b, p, n);
  } else
    b = e.addShape(o, x(x({}, u), {}, {
      status: v,
      attrs: g
    }));
  return n !== !1 && b.set("animation", qs(b, d, g, m)), s && (s.current = b), b;
}
function La(t) {
  var e = t.status, r = t.children;
  if (e === bt)
    return null;
  if (!r || !r.length)
    return t;
  var n = r.filter(function(a) {
    return !!La(a);
  });
  return t.children = n, t.renderChildren = r, t;
}
function Gr(t, e, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ta;
  if (t) {
    var a = $a(t, e, n), i = La(a);
    return Ia(i), Ba(a, e, null, r);
  }
}
function lr(t, e, r) {
  if (!t)
    return t;
  var n = t, a = n.type, i = n.key, s = n.ref, o = n.props, u = n._cache, l = u === void 0 ? {} : u, f = U.map(o.children, function(h) {
    return lr(h, e, r);
  });
  if (t = {
    type: a,
    key: i,
    ref: s,
    _cache: l,
    props: x(x({}, o), {}, {
      children: f
    })
  }, typeof a == "function") {
    var c = a(t.props, e, r);
    return c && lr(x(x({}, c), {}, {
      // 保留原始的key和ref
      key: i !== void 0 ? i : c.key,
      ref: s !== void 0 ? s : c.ref
    }), e, r);
  }
  return t;
}
const Gs = function(t, e, r) {
  return lr(t, e, r);
};
var Vs = ["children", "animation"], Js = ["children", "animation"], Ks = ["children", "animation"], Qs = ["animation"], Zs = ["animation"];
function xt(t) {
  var e = !1, r = U.map(t, function(n) {
    if (!n)
      return n;
    var a = n.ref, i = n.key, s = n.type, o = n.props, u = n._cache, l = o.children, f = o.animation, c = Nt(o, Vs), h = bt, v = f && f.leave, d = xt(l);
    return !d && !v ? null : (e = !0, {
      ref: a,
      key: i,
      type: s,
      props: x(x({}, c), {}, {
        children: d
      }),
      _cache: u,
      animation: v,
      status: h
    });
  });
  return e ? r : null;
}
function Bt(t) {
  return U.map(t, function(e) {
    if (!e)
      return e;
    var r = e.ref, n = e.key, a = e.type, i = e.props, s = e._cache, o = i.children, u = i.animation, l = Nt(i, Js), f = Hs, c = u && u.appear, h = Bt(o);
    return {
      ref: r,
      key: n,
      type: a,
      props: x(x({}, l), {}, {
        children: h
      }),
      _cache: s,
      animation: c,
      status: f
    };
  });
}
function to(t, e) {
  var r = t.ref, n = t.key, a = t.type, i = t._cache, s = t.props, o = e._cache, u = e.props, l = s.children, f = s.animation, c = Nt(s, Ks), h = u.children, v = Rt(l, h), d = ot(i, o), p = f && f.update;
  return {
    ref: r,
    key: n,
    type: a,
    props: x(x({}, c), {}, {
      children: v
    }),
    _cache: d,
    animation: p,
    status: Jt
  };
}
function Na(t, e) {
  return [xt(e), Bt(t)];
}
function eo(t, e) {
  var r = t.key, n = t.type, a = t.ref, i = t.props, s = t._cache, o = e.type, u = e._cache, l = i.children, f = U.map(l, function(c) {
    if (!c)
      return c;
    var h = c.key, v = c.ref, d = c.type, p = c.props, m = c._cache;
    if (d !== o)
      return Na(c, e);
    var g = p.animation, A = Nt(p, Qs), S = g && g.update;
    return {
      ref: v,
      key: h,
      type: d,
      props: A,
      _cache: ot(m, u),
      animation: S,
      status: Jt
    };
  });
  return {
    key: r,
    type: n,
    ref: a,
    props: x(x({}, i), {}, {
      children: f
    }),
    _cache: s,
    status: Jt
  };
}
function ro(t, e) {
  var r = t.ref, n = t.key, a = t.type, i = t.props, s = t._cache, o = e.type, u = e.props, l = i.animation, f = Nt(i, Zs), c = u.children, h = l && l.update;
  if (!h)
    return [xt(e), Bt[t]];
  var v = null, d = U.map(c, function(m) {
    if (!m)
      return m;
    var g = m.type, A = m._cache;
    return g !== a ? xt(m) : (v || (v = m), {
      type: a,
      props: i,
      _cache: A,
      animation: h,
      status: Jt
    });
  });
  if (!v)
    return [xt(e), Bt(t)];
  var p = {
    ref: r,
    key: n,
    type: a,
    props: f,
    _cache: ot(s, v._cache),
    animation: h,
    status: Jt
  };
  return [{
    type: o,
    props: x(x({}, u), {}, {
      children: d
    }),
    status: bt
  }, p];
}
function ao(t, e) {
  var r = t.type, n = e.type;
  return r === "group" ? eo(t, e) : n === "group" ? ro(t, e) : Na(t, e);
}
function no(t, e) {
  for (var r = {}, n = t.length, a = e.length, i = 0; i < a; i++) {
    var s = e[i];
    if (s && !L(s.key)) {
      var o = s.key;
      r[o] = s;
    }
  }
  for (var u = Math.max(n, a), l = [], f = 0; f < u; f++) {
    var c = t[f];
    if (!c) {
      l.push(Rt(c, e[f]));
      continue;
    }
    var h = c.key;
    if (!L(h)) {
      var v = r[h];
      v && delete r[h], l.push(Rt(c, v));
      continue;
    }
    l.push(Rt(c, e[f]));
  }
  return Object.keys(r).forEach(function(d) {
    l.push(Rt(null, r[d]));
  }), l;
}
function Rt(t, e) {
  if (!t && !e)
    return null;
  if (!e)
    return Bt(t);
  if (!t)
    return xt(e);
  if (C(t) || C(e)) {
    var r = C(t) ? t : [t], n = C(e) ? e : [e];
    return no(r, n);
  }
  var a = t.key, i = t.type, s = e.key, o = e.type;
  return !L(a) && a !== s ? [xt(e), Bt(t)] : i !== o ? ao(t, e) : to(t, e);
}
function Vr(t) {
  return Object.prototype.toString.call(t);
}
function Jr(t) {
  return Object.keys(t);
}
function we(t, e) {
  if (t === e)
    return !0;
  if ($(t) !== $(e) || t == null || e == null)
    return !1;
  if (Number.isNaN(t) && Number.isNaN(e))
    return !0;
  if (Vr(t) !== Vr(e))
    return !1;
  if (ht(t))
    return !0;
  if ($(t) !== "object")
    return !1;
  if (C(t)) {
    if (t.length !== e.length)
      return !1;
    for (var r = t.length - 1; r >= 0; r--)
      if (!we(t[r], e[r]))
        return !1;
    return !0;
  }
  if (!Ot(t))
    return !1;
  var n = Jr(t), a = Jr(e);
  if (n.length !== a.length)
    return !1;
  n.sort(), a.sort();
  for (var i = n.length - 1; i >= 0; i--)
    if (n[i] != a[i])
      return !1;
  for (var s = n.length - 1; s >= 0; s--) {
    var o = n[s];
    if (!we(t[o], e[o]))
      return !1;
  }
  return !0;
}
var io = ["transformFrom"];
function so(t) {
  return t && U.map(t, function(e) {
    return e && qn(e, ["key", "ref", "type", "props"]);
  });
}
function oo(t, e, r) {
  var n = t.container, a = t.context, i = t.updater, s = t.__lastElement, o = t.transformFrom, u = t.animate;
  n.clear(), r = ha(r) ? r : u;
  var l = a.px2hd, f = s || o && o.__lastElement, c = Gs(e, a, i);
  t.__lastElement = c;
  var h = r !== !1 ? Rt(c, f) : c;
  return h ? C(h) ? h.map(function(v) {
    return Gr(v, n, r, l);
  }) : Gr(h, n, r, l) : null;
}
function uo(t, e) {
  var r = e.animate;
  if (r === !1) {
    t.animate = !1;
    return;
  }
  var n = t.props, a = n.animate;
  t.animate = ha(a) ? a : r;
}
function Fa(t) {
  if (!t)
    return null;
  var e = t.__lastElement, r = t.children;
  if (e)
    return t;
  if (!r)
    return null;
  var n = null;
  return U.map(r, function(a) {
    if (!n && a) {
      var i = Fa(a.component);
      i && (n = i);
    }
  }), n;
}
function lo(t) {
  if (!t || !t.current)
    return null;
  var e = t.current;
  return Fa(e);
}
function fo(t, e) {
  var r = e.type, n = e.props, a = e.ref, i = t.container, s = t.context, o = t.updater, u = t.transformFrom, l = n.transformFrom, f = Nt(n, io), c;
  if (r.prototype && r.prototype.isF2Component ? c = new r(f, s, o) : (c = new ga(f, s, o), c.render = function() {
    return r(this.props, s, o);
  }), a && (a.current = c), u && (c.transformFrom = u), l) {
    var h = l ? lo(l) : null;
    c.transformFrom = h;
  }
  var v = n.zIndex;
  return c.container = i.addGroup({
    zIndex: v
  }), c.context = s, c.updater = o, c;
}
function Da(t) {
  U.map(t, function(e) {
    var r = e.children, n = Mr(r);
    n ? e.willMount && e.willMount() : e.willUpdate && e.willUpdate();
  }), U.map(t, function(e) {
    var r = e.children, n = Mr(r), a = e.render();
    Ya(e, a, r), n ? e.didMount && e.didMount() : e.didUpdate && e.didUpdate();
  });
}
function Pe(t) {
  U.map(t, function(e) {
    if (e) {
      var r = e.component;
      if (r) {
        r.willUnmount && r.willUnmount(), Pe(r.children);
        var n = r.container;
        n.remove(!0), r.didUnmount && r.didUnmount(), r.destroy();
      }
    }
  });
}
function co(t, e, r) {
  if (!e && !r)
    return null;
  if (!e && r)
    return Pe(r), null;
  if (e && !r)
    return e;
  var n = e.type, a = e.props, i = r.type, s = r.props, o = r.component;
  return n !== i ? (Pe(r), e) : (e.component = o, we(a, s) && o.context === t.context ? null : e);
}
function ho(t, e, r) {
  var n = [];
  U.compare(e, r, function(s, o) {
    var u = co(t, s, o);
    u && (n = n.concat(U.toArray(u).filter(Boolean)));
  });
  var a = n.filter(function(s) {
    var o = s.component, u = s.props;
    return o ? !(o.shouldUpdate && o.shouldUpdate(u) === !1) : !0;
  }), i = a.map(function(s) {
    var o = s.component;
    if (!o)
      o = fo(t, s);
    else {
      var u = s.props;
      o.willReceiveProps && o.willReceiveProps(u, t.context);
      var l = u.zIndex;
      o.container.set("zIndex", l), o.props = u, o.context = t.context;
    }
    return s.component = o, uo(o, t), o;
  });
  return Da(i), n.forEach(function(s) {
    var o = s.component, u = t.container;
    u.add(o.container);
  }), e;
}
function Xa(t) {
  if (!t)
    return !1;
  if (!C(t)) {
    var e = t.type;
    return typeof e == "function";
  }
  for (var r = 0, n = t.length; r < n; r++)
    if (Xa(t[r]))
      return !0;
  return !1;
}
function Ya(t, e, r) {
  return e = so(e), t.children = e, Xa(e) ? e = ho(t, e, r) : oo(t, e), e;
}
function vo(t) {
  if (Array.isArray(t))
    return t;
}
function yo(t, e) {
  var r = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, s, o = [], u = !0, l = !1;
    try {
      if (i = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = i.call(r)).done) && (o.push(n.value), o.length !== e); u = !0)
          ;
    } catch (f) {
      l = !0, a = f;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw a;
      }
    }
    return o;
  }
}
function Kr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function po(t, e) {
  if (t) {
    if (typeof t == "string")
      return Kr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Kr(t, e);
  }
}
function go() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mo(t, e) {
  return vo(t) || yo(t, e) || po(t, e) || go();
}
var xo = /* @__PURE__ */ function() {
  function t(e) {
    T(this, t), this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.update(e);
  }
  return E(t, [{
    key: "update",
    value: function(r) {
      ot(this, r);
      var n = this.left, a = this.top, i = this.width, s = this.height;
      return this.right = n + i, this.bottom = a + s, this;
    }
  }, {
    key: "padding",
    value: function(r) {
      if (!r)
        return this;
      var n = r.top, a = n === void 0 ? 0 : n, i = r.right, s = i === void 0 ? 0 : i, o = r.bottom, u = o === void 0 ? 0 : o, l = r.left, f = l === void 0 ? 0 : l, c = this.top, h = this.right, v = this.bottom, d = this.left;
      return this.top = c + a, this.right = h - s, this.bottom = v - u, this.left = d + f, this.width = this.right - this.left, this.height = this.bottom - this.top, this;
    }
  }, {
    key: "clone",
    value: function() {
      var r = this.left, n = this.top, a = this.width, i = this.height;
      return new t({
        left: r,
        top: n,
        width: a,
        height: i
      });
    }
  }], [{
    key: "fromStyle",
    value: function(r) {
      var n = r.left, a = r.top, i = r.width, s = r.height, o = r.padding, u = mo(o, 4), l = u[0], f = u[1], c = u[2], h = u[3];
      return new t({
        left: n + h,
        top: a + l,
        width: i - h - f,
        height: s - l - c
      });
    }
  }]), t;
}();
const _o = xo;
function bo(t) {
  var e = [], r = [], n = [];
  function a() {
    for (var u; u = e.shift(); ) {
      var l = u, f = l.state, c = l.component, h = l.callback;
      c.destroyed || (c.prevState || (c.prevState = Object.assign({}, c.state)), typeof f == "function" ? Object.assign(c.state, f(c.prevState, c.props)) : Object.assign(c.state, f), c.prevState = c.state, typeof h == "function" && n.push({
        callback: h,
        component: c
      }));
    }
    var v = [].concat(r);
    t.renderComponents(v), s(), r.length = 0, n.length = 0;
  }
  function i(u, l, f) {
    e.length === 0 && setTimeout(a, 0), e.push({
      component: u,
      state: l,
      callback: f
    }), r.indexOf(u) < 0 && r.push(u);
  }
  function s() {
    for (var u = 0; u < n.length; u++) {
      var l = n[u], f = l.callback, c = l.component;
      f.call(c);
    }
  }
  var o = {
    // isMounted: function(publicInstance) {
    //   return false;
    // },
    enqueueForceUpdate: i,
    // enqueueReplaceState: function(publicInstance, completeState) {
    // },
    enqueueSetState: i
  };
  return o;
}
var wo = {
  labelOffset: "15px",
  line: {
    stroke: "#E8E8E8",
    lineWidth: "1px"
  },
  label: {
    fill: "#808080",
    fontSize: "20px"
  },
  grid: {
    stroke: "#E8E8E8",
    lineWidth: "1px",
    lineDash: ["4px"]
  }
}, Po = {
  line: {
    style: {
      stroke: "#a3a3a3",
      lineWidth: 1
    },
    offsetX: 0,
    offsetY: 0
  },
  text: {
    style: {
      fill: "#787878",
      // textAlign: 'center',
      textBaseline: "middle"
    },
    offsetX: 0,
    offsetY: 0
  },
  rect: {
    style: {
      fill: "#fafafa"
    }
  },
  arc: {
    style: {
      stroke: "#a3a3a3"
    }
  },
  html: {
    offsetX: 0,
    offsetY: 0,
    alignX: "center",
    alignY: "middle"
  },
  tag: {
    offsetX: 0,
    offsetY: 0,
    side: 4,
    background: {
      padding: 5,
      radius: 2,
      fill: "#1890FF"
    },
    textStyle: {
      fontSize: 12,
      fill: "#fff",
      textAlign: "center",
      textBaseline: "middle"
    }
  },
  point: {
    offsetX: 0,
    offsetY: 0,
    style: {
      fill: "#fff",
      r: 3,
      lineWidth: 2,
      stroke: "#1890ff"
    }
  }
}, So = {
  padding: ["30px", "30px", "30px", "30px"]
}, ko = {
  fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif',
  pixelRatio: 1,
  padding: [0, 0, 0, 0],
  chart: So,
  colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"],
  shapes: {
    line: ["line", "dash", "smooth"],
    point: ["circle", "hollowCircle", "rect"],
    area: ["area", "smooth"],
    interval: ["rect", "pyramid", "funnel"]
  },
  sizes: ["4px", "6px", "8px", "10px", "12px"],
  shape: {
    line: {
      default: {
        lineWidth: "4px",
        lineJoin: "round",
        lineCap: "round"
      },
      smooth: {
        smooth: !0
      },
      dash: {
        lineDash: ["8px", "8px"]
      }
    },
    point: {
      default: {
        size: "6px"
      },
      hollowCircle: {
        lineWidth: "2px"
      }
    },
    area: {
      default: {
        fillOpacity: 0.1
      }
    },
    interval: {
      default: {}
    }
  },
  axis: wo,
  guide: Po
};
const Ao = ko;
var Qr = (typeof window == "undefined" ? "undefined" : $(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
  return setTimeout(t, 16);
}, To = (typeof window == "undefined" ? "undefined" : $(window)) === "object" && window.cancelAnimationFrame ? window.cancelAnimationFrame : function(t) {
  return clearTimeout(t);
}, Zr = (typeof performance == "undefined" ? "undefined" : $(performance)) === "object" && performance.now ? performance : Date, Eo = /* @__PURE__ */ function() {
  function t() {
    T(this, t), this.playing = !1, this.paused = !1, this.pausedTime = 0;
  }
  return E(t, [{
    key: "play",
    value: function(r, n, a) {
      var i = this;
      if (r <= 0) {
        a();
        return;
      }
      if (!this.playing) {
        this.duration = r, this.onUpdate = n, this.onEnd = a;
        var s = this.paused, o = this.pausedTime;
        this.playing = !0;
        var u = Zr.now();
        s && o && (u = u - o, this.paused = !1, this.pausedTime = 0);
        var l = function f() {
          var c = Zr.now(), h = c - u;
          if (h >= r) {
            n(r), a(), i.playing = !1;
            return;
          }
          if (i.paused) {
            n(h), i.pausedTime = h, i.playing = !1;
            return;
          }
          n(h), i.animationFrameNumber = Qr(f);
        };
        this.animationFrameNumber = Qr(l);
      }
    }
  }, {
    key: "pause",
    value: function() {
      this.paused = !0;
    }
  }, {
    key: "stop",
    value: function() {
      this.playing = !1;
    }
  }, {
    key: "end",
    value: function() {
      this.playing && (this.abort(), this.onUpdate(this.duration), this.onEnd());
    }
  }, {
    key: "abort",
    value: function() {
      this.animationFrameNumber && (To(this.animationFrameNumber), this.playing = !1, this.animationFrameNumber = null);
    }
  }]), t;
}();
const Mo = Eo;
function yr(t, e, r) {
  t.prototype = e.prototype = r, r.constructor = t;
}
function ja(t, e) {
  var r = Object.create(t.prototype);
  for (var n in e)
    r[n] = e[n];
  return r;
}
function te() {
}
var Kt = 0.7, Se = 1 / Kt, Ct = "\\s*([+-]?\\d+)\\s*", Qt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", Z = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ro = /^#([0-9a-f]{3,8})$/, Co = new RegExp("^rgb\\(" + [Ct, Ct, Ct] + "\\)$"), Io = new RegExp("^rgb\\(" + [Z, Z, Z] + "\\)$"), Oo = new RegExp("^rgba\\(" + [Ct, Ct, Ct, Qt] + "\\)$"), $o = new RegExp("^rgba\\(" + [Z, Z, Z, Qt] + "\\)$"), Bo = new RegExp("^hsl\\(" + [Qt, Z, Z] + "\\)$"), Lo = new RegExp("^hsla\\(" + [Qt, Z, Z, Qt] + "\\)$"), ta = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
yr(te, Zt, {
  copy: function(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: ea,
  // Deprecated! Use color.formatHex.
  formatHex: ea,
  formatHsl: No,
  formatRgb: ra,
  toString: ra
});
function ea() {
  return this.rgb().formatHex();
}
function No() {
  return za(this).formatHsl();
}
function ra() {
  return this.rgb().formatRgb();
}
function Zt(t) {
  var e, r;
  return t = (t + "").trim().toLowerCase(), (e = Ro.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? aa(e) : r === 3 ? new W(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? ge(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? ge(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Co.exec(t)) ? new W(e[1], e[2], e[3], 1) : (e = Io.exec(t)) ? new W(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Oo.exec(t)) ? ge(e[1], e[2], e[3], e[4]) : (e = $o.exec(t)) ? ge(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Bo.exec(t)) ? sa(e[1], e[2] / 100, e[3] / 100, 1) : (e = Lo.exec(t)) ? sa(e[1], e[2] / 100, e[3] / 100, e[4]) : ta.hasOwnProperty(t) ? aa(ta[t]) : t === "transparent" ? new W(NaN, NaN, NaN, 0) : null;
}
function aa(t) {
  return new W(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ge(t, e, r, n) {
  return n <= 0 && (t = e = r = NaN), new W(t, e, r, n);
}
function Fo(t) {
  return t instanceof te || (t = Zt(t)), t ? (t = t.rgb(), new W(t.r, t.g, t.b, t.opacity)) : new W();
}
function fr(t, e, r, n) {
  return arguments.length === 1 ? Fo(t) : new W(t, e, r, n == null ? 1 : n);
}
function W(t, e, r, n) {
  this.r = +t, this.g = +e, this.b = +r, this.opacity = +n;
}
yr(W, fr, ja(te, {
  brighter: function(e) {
    return e = e == null ? Se : Math.pow(Se, e), new W(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? Kt : Math.pow(Kt, e), new W(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: na,
  // Deprecated! Use color.formatHex.
  formatHex: na,
  formatRgb: ia,
  toString: ia
}));
function na() {
  return "#" + Ve(this.r) + Ve(this.g) + Ve(this.b);
}
function ia() {
  var t = this.opacity;
  return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t === 1 ? ")" : ", " + t + ")");
}
function Ve(t) {
  return t = Math.max(0, Math.min(255, Math.round(t) || 0)), (t < 16 ? "0" : "") + t.toString(16);
}
function sa(t, e, r, n) {
  return n <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Q(t, e, r, n);
}
function za(t) {
  if (t instanceof Q)
    return new Q(t.h, t.s, t.l, t.opacity);
  if (t instanceof te || (t = Zt(t)), !t)
    return new Q();
  if (t instanceof Q)
    return t;
  t = t.rgb();
  var e = t.r / 255, r = t.g / 255, n = t.b / 255, a = Math.min(e, r, n), i = Math.max(e, r, n), s = NaN, o = i - a, u = (i + a) / 2;
  return o ? (e === i ? s = (r - n) / o + (r < n) * 6 : r === i ? s = (n - e) / o + 2 : s = (e - r) / o + 4, o /= u < 0.5 ? i + a : 2 - i - a, s *= 60) : o = u > 0 && u < 1 ? 0 : s, new Q(s, o, u, t.opacity);
}
function Do(t, e, r, n) {
  return arguments.length === 1 ? za(t) : new Q(t, e, r, n == null ? 1 : n);
}
function Q(t, e, r, n) {
  this.h = +t, this.s = +e, this.l = +r, this.opacity = +n;
}
yr(Q, Do, ja(te, {
  brighter: function(e) {
    return e = e == null ? Se : Math.pow(Se, e), new Q(this.h, this.s, this.l * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? Kt : Math.pow(Kt, e), new Q(this.h, this.s, this.l * e, this.opacity);
  },
  rgb: function() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * r, i = 2 * n - a;
    return new W(Je(e >= 240 ? e - 240 : e + 120, i, a), Je(e, i, a), Je(e < 120 ? e + 240 : e - 120, i, a), this.opacity);
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function() {
    var e = this.opacity;
    return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (e === 1 ? ")" : ", " + e + ")");
  }
}));
function Je(t, e, r) {
  return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255;
}
const pr = function(t) {
  return function() {
    return t;
  };
};
function Xo(t, e) {
  return function(r) {
    return t + r * e;
  };
}
function Yo(t, e, r) {
  return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(n) {
    return Math.pow(t + n * e, r);
  };
}
function jo(t) {
  return (t = +t) == 1 ? Wa : function(e, r) {
    return r - e ? Yo(e, r, t) : pr(isNaN(e) ? r : e);
  };
}
function Wa(t, e) {
  var r = e - t;
  return r ? Xo(t, r) : pr(isNaN(t) ? e : t);
}
const cr = function t(e) {
  var r = jo(e);
  function n(a, i) {
    var s = r((a = fr(a)).r, (i = fr(i)).r), o = r(a.g, i.g), u = r(a.b, i.b), l = Wa(a.opacity, i.opacity);
    return function(f) {
      return a.r = s(f), a.g = o(f), a.b = u(f), a.opacity = l(f), a + "";
    };
  }
  return n.gamma = t, n;
}(1);
function Ha(t, e) {
  e || (e = []);
  var r = t ? Math.min(e.length, t.length) : 0, n = e.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a)
      n[a] = t[a] * (1 - i) + e[a] * i;
    return n;
  };
}
function zo(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Wo(t, e) {
  var r = e ? e.length : 0, n = t ? Math.min(r, t.length) : 0, a = new Array(n), i = new Array(r), s;
  for (s = 0; s < n; ++s)
    a[s] = Ua(t[s], e[s]);
  for (; s < r; ++s)
    i[s] = e[s];
  return function(o) {
    for (s = 0; s < n; ++s)
      i[s] = a[s](o);
    return i;
  };
}
function Ho(t, e) {
  var r = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(n) {
    return r.setTime(t * (1 - n) + e * n), r;
  };
}
function ke(t, e) {
  return t = +t, e = +e, function(r) {
    return t * (1 - r) + e * r;
  };
}
function qa(t, e) {
  var r = {}, n = {}, a;
  (t === null || $(t) !== "object") && (t = {}), (e === null || $(e) !== "object") && (e = {});
  for (a in e)
    a in t ? r[a] = Ua(t[a], e[a]) : n[a] = e[a];
  return function(i) {
    for (a in r)
      n[a] = r[a](i);
    return n;
  };
}
var hr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ke = new RegExp(hr.source, "g");
function qo(t) {
  return function() {
    return t;
  };
}
function Uo(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Go(t, e) {
  var r = hr.lastIndex = Ke.lastIndex = 0, n, a, i, s = -1, o = [], u = [];
  for (t = t + "", e = e + ""; (n = hr.exec(t)) && (a = Ke.exec(e)); )
    (i = a.index) > r && (i = e.slice(r, i), o[s] ? o[s] += i : o[++s] = i), (n = n[0]) === (a = a[0]) ? o[s] ? o[s] += a : o[++s] = a : (o[++s] = null, u.push({
      i: s,
      x: ke(n, a)
    })), r = Ke.lastIndex;
  return r < e.length && (i = e.slice(r), o[s] ? o[s] += i : o[++s] = i), o.length < 2 ? u[0] ? Uo(u[0].x) : qo(e) : (e = u.length, function(l) {
    for (var f = 0, c; f < e; ++f)
      o[(c = u[f]).i] = c.x(l);
    return o.join("");
  });
}
function Ua(t, e) {
  var r = $(e), n;
  return e == null || r === "boolean" ? pr(e) : (r === "number" ? ke : r === "string" ? (n = Zt(e)) ? (e = n, cr) : Go : e instanceof Zt ? cr : e instanceof Date ? Ho : zo(e) ? Ha : Array.isArray(e) ? Wo : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? qa : ke)(t, e);
}
function Vo(t, e) {
  var r = t ? t.length : 0, n = e ? e.length : 0, a = Math.max(n, r), i = new Array(a), s = new Array(a), o;
  for (o = 0; o < a; o++) {
    var u = o < r ? (t || [])[o] : (t || [])[r - 1], l = o < n ? (e || [])[o] : (e || [])[n - 1];
    s[o] = qa(u, l);
  }
  return function(f) {
    if (f >= 1)
      return e;
    for (o = 0; o < a; ++o)
      i[o] = s[o](f);
    return i;
  };
}
const Jo = function(t, e) {
  return typeof e == "string" ? cr(t, e) : Array.isArray(e) ? typeof e[0] != "number" ? Vo(t, e) : Ha(t, e) : ke(t, e);
};
function Ga(t) {
  return t;
}
function Ko(t) {
  return t * t;
}
function Qo(t) {
  return t * (2 - t);
}
function Zo(t) {
  return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
}
function tu(t) {
  return t * t * t;
}
function eu(t) {
  return --t * t * t + 1;
}
function ru(t) {
  return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
}
function au(t) {
  return t * t * t * t;
}
function nu(t) {
  return 1 - t * t * t * t;
}
function iu(t) {
  return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
}
function su(t) {
  return t * t * t * t * t;
}
function ou(t) {
  return --t * t * t * t * t + 1;
}
function uu(t) {
  return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function lu(t) {
  return t === 0 ? 0 : Math.pow(1024, t - 1);
}
function fu(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function cu(t) {
  var e, r = 0.1, n = 0.4;
  return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)));
}
function hu(t) {
  var e, r = 0.1, n = 0.4;
  return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
}
function vu(t) {
  var e, r = 0.1, n = 0.4;
  return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), (t *= 2) < 1 ? -0.5 * (r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * 0.5 + 1);
}
function du(t) {
  var e = 1.70158;
  return t * t * ((e + 1) * t - e);
}
function yu(t) {
  var e = 1.70158;
  return (t = t - 1) * t * ((e + 1) * t + e) + 1;
}
function pu(t) {
  var e = 2.5949095;
  return (t *= 2) < 1 ? 0.5 * (t * t * ((e + 1) * t - e)) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
}
function Va(t) {
  return 1 - gr(1 - t);
}
function gr(t) {
  return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
}
function gu(t) {
  return t < 0.5 ? Va(t * 2) * 0.5 : gr(t * 2 - 1) * 0.5 + 0.5;
}
const mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  backIn: du,
  backInOut: pu,
  backOut: yu,
  bounceIn: Va,
  bounceInOut: gu,
  bounceOut: gr,
  cubicIn: tu,
  cubicInOut: ru,
  cubicOut: eu,
  elasticIn: cu,
  elasticInOut: vu,
  elasticOut: hu,
  exponentialIn: lu,
  exponentialOut: fu,
  linear: Ga,
  quadraticIn: Ko,
  quadraticInOut: Zo,
  quadraticOut: Qo,
  quarticIn: au,
  quarticInOut: iu,
  quarticOut: nu,
  quinticIn: su,
  quinticInOut: uu,
  quinticOut: ou
}, Symbol.toStringTag, { value: "Module" }));
var xu = /* @__PURE__ */ function() {
  function t(e, r) {
    T(this, t), this.isClip = !1, this.end = !1, this.element = e, this.animation = r;
    var n = r.property, a = n === void 0 ? [] : n, i = r.easing, s = r.duration, o = r.delay, u = o === void 0 ? 0 : o, l = r.start, f = r.end, c = r.onFrame, h = r.isClip, v = a.map(function(d) {
      if ($t(d))
        return Jo(l[d], f[d]);
      if (d.interpolate)
        return d.interpolate(l, f);
    });
    this.easing = typeof i == "function" ? i : mu[i] || Ga, this.property = a, this.interpolates = v, this.duration = s, this.delay = u, this.onFrame = c, this.totalDuration = s + u, this.isClip = h, this.update(0, 0);
  }
  return E(t, [{
    key: "to",
    value: function(r) {
      var n = this.duration, a = this.delay, i = this.totalDuration, s = this.easing, o = this.end;
      if (!o && !(r <= a || !n)) {
        var u = r >= i ? 1 : (r - a) / n;
        this.update(s(u), r), u === 1 && this.onEnd();
      }
    }
  }, {
    key: "update",
    value: function(r, n) {
      for (var a = this.element, i = this.interpolates, s = this.property, o = this.onFrame, u = {}, l = s.length - 1; l >= 0; l--) {
        var f = s[l];
        $t(f) ? u[f] = i[l](r) : u[f.name] = i[l](r);
      }
      o && (u = x(x({}, u), this.onFrame(r, n))), a.attr(u);
    }
  }, {
    key: "onEnd",
    value: function() {
      var r = this.animation, n = this.isClip, a = this.element, i = r.onEnd;
      i && i.call(this), n && a.remove(!0), a._attrs.status === bt && a.remove(!0), a.set("animation", null), this.end = !0;
    }
  }]), t;
}();
const _u = xu;
function Ja(t, e) {
  e(t);
  var r = t.get("children");
  if (r && r.length)
    for (var n = 0, a = r.length; n < a; n++) {
      var i = r[n];
      Ja(i, e);
    }
}
var bu = /* @__PURE__ */ function() {
  function t(e) {
    T(this, t), this.timeline = new Mo(), this.canvas = e;
  }
  return E(t, [{
    key: "createAnimator",
    value: function(r, n) {
      var a = n.duration, i = n.property, s = n.onFrame;
      if (!(!a || (!i || !i.length) && !s))
        return new _u(r, n);
    }
  }, {
    key: "play",
    value: function(r, n) {
      var a = this, i = this.canvas, s = [], o = 0, u = [];
      Ja(r, function(v) {
        var d = v._attrs, p = d.animation, m = d.status;
        if (!p) {
          m === bt && u.push(v);
          return;
        }
        var g = a.createAnimator(v, p);
        g && (o = Math.max(o, g.totalDuration), s.push(g));
        var A = p.clip;
        if (A) {
          A.isClip = !0;
          var S = A.element, b = a.createAnimator(S, A);
          b && (o = Math.max(o, b.totalDuration), v.attr("clip", S), s.push(b));
        }
      });
      for (var l = 0, f = u.length; l < f; l++) {
        var c = u[l], h = c._attrs.children;
        (!h || !h.length) && c.remove(!0);
      }
      this.timeline.play(o, function(v) {
        for (var d = 0, p = s.length; d < p; d++) {
          var m = s[d];
          m.to(v);
        }
        v < o && i.draw();
      }, function() {
        for (var v = 0, d = u.length; v < d; v++) {
          var p = u[v];
          p.remove(!0);
        }
        i.draw(), n && n();
      });
    }
    // 直接跳到动画最终态
  }, {
    key: "end",
    value: function() {
      this.timeline.end();
    }
  }, {
    key: "abort",
    value: function() {
      this.timeline.abort();
    }
  }]), t;
}();
const wu = bu;
function Pu(t, e) {
  return function(r, n) {
    var a = n || {}, i = a.fontSize, s = a.fontFamily, o = a.fontStyle, u = a.fontWeight, l = a.fontVariant, f = t.addShape("text", {
      attrs: {
        x: 0,
        y: 0,
        fontSize: e(i),
        fontFamily: s,
        fontStyle: o,
        fontWeight: u,
        fontVariant: l,
        text: r
      }
    }), c = f.getBBox(), h = c.width, v = c.height;
    return f.remove(!0), {
      width: h,
      height: v
    };
  };
}
var Su = /* @__PURE__ */ function(t) {
  D(r, t);
  var e = X(r);
  function r(n) {
    var a;
    T(this, r), a = e.call(this, n);
    var i = n.context, s = n.pixelRatio, o = n.width, u = n.height, l = n.animate, f = l === void 0 ? !0 : l, c = n.px2hd, h = n.theme;
    n.style;
    var v = n.createImage, d = n.landscape, p = ht(c) ? ka(c) : Ta, m = p(Wn({}, Ao, h)), g = ys({
      context: i,
      pixelRatio: s,
      fontFamily: m.fontFamily,
      width: o,
      height: u,
      createImage: v,
      landscape: d
    }), A = bo(Qe(a)), S = {
      root: Qe(a),
      ctx: i,
      canvas: g,
      theme: m,
      px2hd: p,
      measureText: Pu(g, p)
    }, b = new wu(g);
    return g.on("afterdraw", function() {
      var R = a.props.onAfterDraw;
      R && R();
    }), a.canvas = g, a.container = g, a.context = S, a.updater = A, a.animate = f, a.animation = b, a.theme = m, a._ee = new ei(), a.updateLayout(n), a;
  }
  return E(r, [{
    key: "renderComponents",
    value: function(a) {
      !a || !a.length || (Da(a), this.draw());
    }
  }, {
    key: "update",
    value: function(a) {
      var i = this.props;
      we(a, i) || (this.props = a, this.render());
    }
  }, {
    key: "resize",
    value: function(a, i) {
      var s = this.canvas._attrs, o = s.width, u = s.height;
      this.canvas.changeSize(a || o, i || u), this.updateLayout(x(x({}, this.props), {}, {
        width: a,
        height: i
      })), this.render();
    }
  }, {
    key: "updateLayout",
    value: function(a) {
      var i = this.canvas._attrs, s = i.width, o = i.height, u = this.context.px2hd(x({
        left: 0,
        top: 0,
        width: (a == null ? void 0 : a.width) || s,
        height: (a == null ? void 0 : a.height) || o,
        padding: this.theme.padding
      }, a.style));
      this.layout = _o.fromStyle(u), this.context = x(x({}, this.context), {}, {
        left: this.layout.left,
        top: this.layout.top,
        width: this.layout.width,
        height: this.layout.height
      });
    }
  }, {
    key: "draw",
    value: function() {
      var a = this.canvas, i = this.animate;
      if (i === !1) {
        a.draw();
        return;
      }
      this.play();
    }
  }, {
    key: "play",
    value: function() {
      var a = this, i = this.canvas, s = this.animation;
      s.abort(), s.play(i, function() {
        a.emit("animationEnd");
      });
    }
  }, {
    key: "render",
    value: function() {
      var a = this.children, i = this.props, s = i.children;
      return Ya(this, s, a), this.draw(), null;
    }
  }, {
    key: "destroy",
    value: function() {
      var a = this.canvas, i = this.children;
      Pe(i), a.destroy();
    }
  }, {
    key: "on",
    value: function(a, i) {
      this._ee.on(a, i);
    }
  }, {
    key: "emit",
    value: function(a, i) {
      this._ee.emit(a, i);
    }
  }, {
    key: "off",
    value: function(a, i) {
      this._ee.off(a, i);
    }
  }]), r;
}(ga);
const ku = Su, [Au] = tt("f2"), Tu = ut({
  name: Au,
  props: {
    onRender: Function
  },
  setup(t) {
    const e = Gt(null);
    return ua(() => {
      const n = e.value.getContext("2d"), a = t.onRender();
      console.log(a), new ku({
        // 已经有高清方案，这里默认用1
        pixelRatio: window.devicePixelRatio || 1,
        // context 内部创建，不能被覆盖
        context: n,
        children: a
      }).render();
    }), () => /* @__PURE__ */ React.createElement(
      "canvas",
      {
        ref: e,
        style: "width: 100%; height: 100%; display:block; padding:0; margin:0;"
      }
    );
  }
}), Eu = et(Tu);
const [Mu] = tt("price"), Ru = ut({
  name: Mu,
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: !0
    },
    symbol: {
      type: String,
      default: "&yen;"
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "before"
    }
  },
  setup(t) {
    const e = It(() => t.needSymbol ? t.symbol : ""), r = (i) => String(i).indexOf(".") > 0, n = (i = 0) => (r(i) ? (i = Number(i).toFixed(t.decimalDigits), i = typeof i.split(".") == "string" ? i.split(".") : i.split(".")[0]) : i = i.toString(), t.thousands ? (i || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : i), a = (i = 0) => {
      r(i) ? (i = Number(i).toFixed(t.decimalDigits), i = typeof i.split(".") == "string" ? 0 : i.split(".")[1]) : i = i.toString();
      const s = "0." + i, o = Number(s).toFixed(t.decimalDigits);
      return String(o).substring(2, o.length);
    };
    return () => /* @__PURE__ */ React.createElement("div", { class: "v-price" }, t.needSymbol && t.position === "before" && /* @__PURE__ */ React.createElement("div", { class: "v-price--symbol", innerHTML: e.value }), /* @__PURE__ */ React.createElement("div", { class: "v-price--big" }, n(t.price)), /* @__PURE__ */ React.createElement("div", { class: "v-price--point" }, "."), /* @__PURE__ */ React.createElement("div", { class: "v-price--small" }, a(t.price)), t.needSymbol && t.position === "after" && /* @__PURE__ */ React.createElement("div", { class: "v-price--symbol", innerHTML: e.value }));
  }
}), Cu = et(Ru);
const [at] = tt("segmented"), Iu = ut({
  name: at,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    columns: {
      type: Array,
      default: () => [],
      required: !0
    },
    columnsFieldNames: {
      type: Object,
      default: () => ({ text: "text", value: "value" })
    },
    block: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "middle"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { slots: e, emit: r }) {
    const n = Gt([]);
    return on(() => t.columns, () => {
      const { columns: i, columnsFieldNames: s } = t, { text: o, value: u } = s;
      n.value = i.map((l) => Ye({
        text: l[o],
        value: l[u]
      }, l));
    }, { immediate: !0 }), () => /* @__PURE__ */ React.createElement(
      "div",
      {
        class: [
          at,
          {
            [`${at}-block`]: t.block,
            [`${at}-sm`]: t.size === "small",
            [`${at}-lg`]: t.size === "large"
          }
        ]
      },
      n.value.map((i, s) => /* @__PURE__ */ React.createElement(
        "div",
        {
          class: [
            at + "-item",
            {
              [at + "-item-selected"]: t.modelValue === i.value,
              [at + "-item-disabled"]: t.disabled || i.disabled
            }
          ],
          onClick: () => {
            t.disabled || i.disabled || (r("update:modelValue", i.value), r("change", i.value, s));
          }
        },
        /* @__PURE__ */ React.createElement("div", { class: { [at + "-item-label"]: !0 } }, e.default ? e.default({ item: i, index: s, checked: t.modelValue === i.value }) : i.text)
      ))
    );
  }
}), Ou = et(Iu);
const [yt] = tt("space"), $u = ut({
  name: yt,
  props: {
    align: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: "small"
    },
    wrap: {
      type: Boolean,
      default: !1
    },
    fill: {
      type: Boolean
    }
  },
  setup(t, { slots: e }) {
    const r = It(
      () => {
        var s;
        return (s = t.align) != null ? s : t.direction === "horizontal" ? "center" : "";
      }
    ), n = It(() => [
      yt,
      {
        [`${yt}-${t.direction}`]: t.direction,
        [`${yt}-align-${r.value}`]: r.value,
        [`${yt}-wrap`]: t.wrap,
        [`${yt}-fill`]: t.fill
      }
    ]), a = (s) => {
      if (gn(s))
        return s;
      switch (s) {
        case "mini":
          return 4;
        case "small":
          return 8;
        case "medium":
          return 16;
        case "large":
          return 24;
        default:
          return 8;
      }
    }, i = (s, o) => {
      const u = {}, l = `${a(
        Ar(t.size) ? t.size[0] : t.size
      )}px`, f = `${a(
        Ar(t.size) ? t.size[1] : t.size
      )}px`;
      return o ? t.wrap ? { marginBottom: f } : {} : (t.direction === "horizontal" && (u.marginRight = l), (t.direction === "vertical" || t.wrap) && (u.marginBottom = f), u);
    };
    return () => {
      var u;
      const s = xn((u = e.default) == null ? void 0 : u.call(e)), o = s.length === 1;
      return /* @__PURE__ */ React.createElement("div", { class: n.value }, s.map((l, f) => /* @__PURE__ */ React.createElement(
        "div",
        {
          key: f,
          class: `${yt}-item`,
          style: i(f, o)
        },
        l
      )));
    };
  }
}), Bu = et($u);
const [Lu] = tt("svg-icon"), Nu = ut({
  name: Lu,
  props: {
    name: String,
    classPrefix: String,
    size: [String, Number]
  },
  setup(t) {
    const { name: e, classPrefix: r, size: n } = t, a = (s) => i(s) ? `${s}px` : String(s), i = (s) => typeof s == "number" || /^\d+(\.\d+)?$/.test(s);
    return () => /* @__PURE__ */ React.createElement("svg", { class: [r, "iconfont"], style: { fontSize: a(n) }, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("use", { xlinkHref: `#${e}` }));
  }
}), Fu = et(Nu);
const [Du] = tt("table"), Xu = ut({
  name: Du,
  props: {
    bordered: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Array,
      default: () => [],
      required: !0
    },
    data: {
      type: Array,
      default: () => []
    },
    showSummary: {
      type: Boolean,
      default: !1
    },
    summary: String,
    striped: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, { slots: e }) {
    const r = (u) => ({
      "v-table__main__head__tr--border": t.bordered,
      [`v-table__main__head__tr--align${u.align ? u.align : ""}`]: !0
    }), n = (u) => t.columns.filter((l) => l.key === u)[0], a = () => /* @__PURE__ */ React.createElement("div", { class: "v-table__main__head" }, /* @__PURE__ */ React.createElement("div", { class: "v-table__main__head__tr" }, t.columns.map((u) => /* @__PURE__ */ React.createElement("div", { class: ["v-table__main__head__tr__th", r(u)] }, /* @__PURE__ */ React.createElement("div", { class: "cell" }, u.label))))), i = () => /* @__PURE__ */ React.createElement("div", { class: "v-table__main__body" }, t.data.map((u) => /* @__PURE__ */ React.createElement("div", { class: "v-table__main__body__tr" }, Object.keys(u).map((l) => /* @__PURE__ */ React.createElement("div", { class: ["v-table__main__body__tr__td", r(n(l))] }, /* @__PURE__ */ React.createElement("div", { class: "cell" }, e[n(l).key] ? e[n(l).key]({ scope: u }) : u[l])))))), s = () => /* @__PURE__ */ React.createElement("div", { class: "v-table__summary" }, e.summary ? e.summary() : /* @__PURE__ */ React.createElement("span", { class: "v-table__summary__text" }, t.summary)), o = () => /* @__PURE__ */ React.createElement("div", { class: "v-table__nodata" }, /* @__PURE__ */ React.createElement("div", { class: ["v-table__nodata", { "v-table__nodata--border": t.bordered }] }, e.nodata ? e.nodata() : /* @__PURE__ */ React.createElement("div", { class: "v-table__nodata__text" }, "暂无数据")));
    return () => /* @__PURE__ */ React.createElement("div", { class: "v-table" }, /* @__PURE__ */ React.createElement("div", { class: ["v-table__main", { "v-table__main--striped": t.striped }] }, a(), i()), !t.data.length && o(), t.showSummary && s());
  }
}), Yu = et(Xu), { version: ju } = dn, Ka = [
  Sn,
  Tn,
  Rn,
  On,
  Eu,
  Cu,
  Ou,
  Bu,
  Fu,
  Yu
], zu = (t) => {
  Ka.map((e) => {
    e.install ? t.use(e) : e.name && t.component(e.name, e);
  });
}, qu = Ye({
  version: ju,
  install: zu
}, Ka);
export {
  qu as default
};
