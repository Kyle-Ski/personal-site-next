import { V as require_react, Y as __toESM$1, n as require_jsx_runtime, t as require_react_dom } from "../../index.js";
import { t as clsx$1 } from "./clsx-DQoRUQAf.js";
import { $ as usePresence, G as LazyContext, H as createDOMMotionComponentProxy, Q as useIsomorphicLayoutEffect, U as loadFeatures, et as MotionConfigContext, nt as useConstant, rt as LayoutGroupContext, t as createMotionComponentFactory, tt as PresenceContext } from "./create-factory-CxyIhxdp.js";
//#region node_modules/@nextui-org/react-utils/dist/chunk-3XT5V4LF.mjs
var import_react$1 = /* @__PURE__ */ __toESM$1(require_react(), 1);
function createContext2(options = {}) {
	const { strict = true, errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider", name } = options;
	const Context = import_react$1.createContext(void 0);
	Context.displayName = name;
	function useContext2() {
		var _a;
		const context = import_react$1.useContext(Context);
		if (!context && strict) {
			const error = new Error(errorMessage);
			error.name = "ContextError";
			(_a = Error.captureStackTrace) == null || _a.call(Error, error, useContext2);
			throw error;
		}
		return context;
	}
	return [
		Context.Provider,
		useContext2,
		Context
	];
}
//#endregion
//#region node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs
function canUseDOM() {
	return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
canUseDOM();
function createDOMRef(ref) {
	return { UNSAFE_getDOMNode() {
		return ref.current;
	} };
}
//#endregion
//#region node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
function isFunction(value) {
	return typeof value === "function";
}
var dataAttr = (condition) => condition ? "true" : void 0;
//#endregion
//#region node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
function toVal(mix) {
	var k, y, str = "";
	if (typeof mix === "string" || typeof mix === "number") str += mix;
	else if (typeof mix === "object") {
		if (Array.isArray(mix)) {
			for (k = 0; k < mix.length; k++) if (mix[k]) {
				if (y = toVal(mix[k])) {
					str && (str += " ");
					str += y;
				}
			}
		} else for (k in mix) if (mix[k]) {
			str && (str += " ");
			str += k;
		}
	}
	return str;
}
function clsx(...args) {
	var i = 0, tmp, x, str = "";
	while (i < args.length) if (tmp = args[i++]) {
		if (x = toVal(tmp)) {
			str && (str += " ");
			str += x;
		}
	}
	return str;
}
//#endregion
//#region node_modules/@nextui-org/shared-utils/dist/chunk-GSANFGKG.mjs
var warningStack = {};
function warn(message, component, ...args) {
	const log = `[Next UI]${component ? ` [${component}]` : " "}: ${message}`;
	if (typeof console === "undefined") return;
	if (warningStack[log]) return;
	warningStack[log] = true;
}
//#endregion
//#region node_modules/@nextui-org/shared-utils/dist/chunk-UYSIEMEK.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: () => from[key],
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs
var require_react_production_min = __commonJS({ "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(exports) {
	"use strict";
	var l = Symbol.for("react.element");
	var n = Symbol.for("react.portal");
	var p = Symbol.for("react.fragment");
	var q = Symbol.for("react.strict_mode");
	var r = Symbol.for("react.profiler");
	var t = Symbol.for("react.provider");
	var u = Symbol.for("react.context");
	var v = Symbol.for("react.forward_ref");
	var w = Symbol.for("react.suspense");
	var x = Symbol.for("react.memo");
	var y = Symbol.for("react.lazy");
	var z = Symbol.iterator;
	function A(a) {
		if (null === a || "object" !== typeof a) return null;
		a = z && a[z] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B = {
		isMounted: function() {
			return false;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var C = Object.assign;
	var D = {};
	function E(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	E.prototype.isReactComponent = {};
	E.prototype.setState = function(a, b) {
		if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b, "setState");
	};
	E.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
	F.prototype = E.prototype;
	function G(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	var H = G.prototype = new F();
	H.constructor = G;
	C(H, E.prototype);
	H.isPureReactComponent = true;
	var I = Array.isArray;
	var J = Object.prototype.hasOwnProperty;
	var K = { current: null };
	var L = {
		key: true,
		ref: true,
		__self: true,
		__source: true
	};
	function M(a, b, e) {
		var d, c = {}, k = null, h = null;
		if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		var g = arguments.length - 2;
		if (1 === g) c.children = e;
		else if (1 < g) {
			for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
			c.children = f;
		}
		if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		return {
			$$typeof: l,
			type: a,
			key: k,
			ref: h,
			props: c,
			_owner: K.current
		};
	}
	function N(a, b) {
		return {
			$$typeof: l,
			type: a.type,
			key: b,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}
	function O(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l;
	}
	function escape(a) {
		var b = {
			"=": "=0",
			":": "=2"
		};
		return "$" + a.replace(/[=:]/g, function(a2) {
			return b[a2];
		});
	}
	var P = /\/+/g;
	function Q(a, b) {
		return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R(a, b, e, d, c) {
		var k = typeof a;
		if ("undefined" === k || "boolean" === k) a = null;
		var h = false;
		if (null === a) h = true;
		else switch (k) {
			case "string":
			case "number":
				h = true;
				break;
			case "object": switch (a.$$typeof) {
				case l:
				case n: h = true;
			}
		}
		if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
			return a2;
		})) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		h = 0;
		d = "" === d ? "." : d + ":";
		if (I(a)) for (var g = 0; g < a.length; g++) {
			k = a[g];
			var f = d + Q(k, g);
			h += R(k, b, e, f, c);
		}
		else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
		else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		return h;
	}
	function S(a, b, e) {
		if (null == a) return a;
		var d = [], c = 0;
		R(a, d, "", "", function(a2) {
			return b.call(e, a2, c++);
		});
		return d;
	}
	function T(a) {
		if (-1 === a._status) {
			var b = a._result;
			b = b();
			b.then(function(b2) {
				if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
			}, function(b2) {
				if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
			});
			-1 === a._status && (a._status = 0, a._result = b);
		}
		if (1 === a._status) return a._result.default;
		throw a._result;
	}
	var U = { current: null };
	var V = { transition: null };
	var W = {
		ReactCurrentDispatcher: U,
		ReactCurrentBatchConfig: V,
		ReactCurrentOwner: K
	};
	exports.Children = {
		map: S,
		forEach: function(a, b, e) {
			S(a, function() {
				b.apply(this, arguments);
			}, e);
		},
		count: function(a) {
			var b = 0;
			S(a, function() {
				b++;
			});
			return b;
		},
		toArray: function(a) {
			return S(a, function(a2) {
				return a2;
			}) || [];
		},
		only: function(a) {
			if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		}
	};
	exports.Component = E;
	exports.Fragment = p;
	exports.Profiler = r;
	exports.PureComponent = G;
	exports.StrictMode = q;
	exports.Suspense = w;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	exports.cloneElement = function(a, b, e) {
		if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
		if (null != b) {
			void 0 !== b.ref && (k = b.ref, h = K.current);
			void 0 !== b.key && (c = "" + b.key);
			if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
			for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		}
		var f = arguments.length - 2;
		if (1 === f) d.children = e;
		else if (1 < f) {
			g = Array(f);
			for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
			d.children = g;
		}
		return {
			$$typeof: l,
			type: a.type,
			key: c,
			ref: k,
			props: d,
			_owner: h
		};
	};
	exports.createContext = function(a) {
		a = {
			$$typeof: u,
			_currentValue: a,
			_currentValue2: a,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		};
		a.Provider = {
			$$typeof: t,
			_context: a
		};
		return a.Consumer = a;
	};
	exports.createElement = M;
	exports.createFactory = function(a) {
		var b = M.bind(null, a);
		b.type = a;
		return b;
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(a) {
		return {
			$$typeof: v,
			render: a
		};
	};
	exports.isValidElement = O;
	exports.lazy = function(a) {
		return {
			$$typeof: y,
			_payload: {
				_status: -1,
				_result: a
			},
			_init: T
		};
	};
	exports.memo = function(a, b) {
		return {
			$$typeof: x,
			type: a,
			compare: void 0 === b ? null : b
		};
	};
	exports.startTransition = function(a) {
		var b = V.transition;
		V.transition = {};
		try {
			a();
		} finally {
			V.transition = b;
		}
	};
	exports.unstable_act = function() {
		throw Error("act(...) is not supported in production builds of React.");
	};
	exports.useCallback = function(a, b) {
		return U.current.useCallback(a, b);
	};
	exports.useContext = function(a) {
		return U.current.useContext(a);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(a) {
		return U.current.useDeferredValue(a);
	};
	exports.useEffect = function(a, b) {
		return U.current.useEffect(a, b);
	};
	exports.useId = function() {
		return U.current.useId();
	};
	exports.useImperativeHandle = function(a, b, e) {
		return U.current.useImperativeHandle(a, b, e);
	};
	exports.useInsertionEffect = function(a, b) {
		return U.current.useInsertionEffect(a, b);
	};
	exports.useLayoutEffect = function(a, b) {
		return U.current.useLayoutEffect(a, b);
	};
	exports.useMemo = function(a, b) {
		return U.current.useMemo(a, b);
	};
	exports.useReducer = function(a, b, e) {
		return U.current.useReducer(a, b, e);
	};
	exports.useRef = function(a) {
		return U.current.useRef(a);
	};
	exports.useState = function(a) {
		return U.current.useState(a);
	};
	exports.useSyncExternalStore = function(a, b, e) {
		return U.current.useSyncExternalStore(a, b, e);
	};
	exports.useTransition = function() {
		return U.current.useTransition();
	};
	exports.version = "18.2.0";
} });
__toESM(__commonJS({ "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module) {
	"use strict";
	module.exports = require_react_production_min();
} })());
function objectToDeps(obj) {
	if (!obj || typeof obj !== "object") return "";
	try {
		return JSON.stringify(obj);
	} catch (e) {
		return "";
	}
}
/**
* @license React
* react.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
//#endregion
//#region node_modules/@nextui-org/react-utils/dist/chunk-CIZQCQPA.mjs
function assignRef(ref, value) {
	if (ref == null) return;
	if (isFunction(ref)) {
		ref(value);
		return;
	}
	try {
		ref.current = value;
	} catch (error) {
		throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
	}
}
function mergeRefs(...refs) {
	return (node) => {
		refs.forEach((ref) => assignRef(ref, node));
	};
}
//#endregion
//#region node_modules/@nextui-org/system/dist/chunk-Q66YAGZJ.mjs
var [ProviderContext, useProviderContext] = createContext2({
	name: "ProviderContext",
	strict: false
});
//#endregion
//#region node_modules/@react-aria/i18n/dist/utils.mjs
var $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
	"Arab",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]);
var $148a7a147e38ea7f$var$RTL_LANGS = new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
	if (Intl.Locale) {
		let locale = new Intl.Locale(localeString).maximize();
		let textInfo = typeof locale.getTextInfo === "function" ? locale.getTextInfo() : locale.textInfo;
		if (textInfo) return textInfo.direction === "rtl";
		if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
	}
	let lang = localeString.split("-")[0];
	return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}
//#endregion
//#region node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var $b5e257d569688ac6$var$defaultContext = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
};
var $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ import_react$1.createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ import_react$1.createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
	let ctx = (0, import_react$1.useContext)($b5e257d569688ac6$var$SSRContext);
	let ref = (0, import_react$1.useRef)(null);
	if (ref.current === null && !isDisabled) {
		var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = import_react$1.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
		if (currentOwner) {
			let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
			if (prevComponentValue == null) $b5e257d569688ac6$var$componentIds.set(currentOwner, {
				id: ctx.current,
				state: currentOwner.memoizedState
			});
			else if (currentOwner.memoizedState !== prevComponentValue.state) {
				ctx.current = prevComponentValue.id;
				$b5e257d569688ac6$var$componentIds.delete(currentOwner);
			}
		}
		ref.current = ++ctx.current;
	}
	return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
	let ctx = (0, import_react$1.useContext)($b5e257d569688ac6$var$SSRContext);
	if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
	let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
	let prefix = `react-aria${ctx.prefix}`;
	return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
	let id = import_react$1.useId();
	let [didSSR] = (0, import_react$1.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
	let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
	return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof import_react$1.useId === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
	return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
	return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
	return () => {};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
	if (typeof import_react$1.useSyncExternalStore === "function") return import_react$1.useSyncExternalStore($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
	return (0, import_react$1.useContext)($b5e257d569688ac6$var$IsSSRContext);
}
//#endregion
//#region node_modules/@react-aria/i18n/dist/useDefaultLocale.mjs
var $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
	let locale = typeof window !== "undefined" && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([locale]);
	} catch {
		locale = "en-US";
	}
	return {
		locale,
		direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? "rtl" : "ltr"
	};
}
var $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
var $1e5a04cdaf7d1af8$var$listeners = /* @__PURE__ */ new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
	$1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
	for (let listener of $1e5a04cdaf7d1af8$var$listeners) listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
	let isSSR = $b5e257d569688ac6$export$535bd6ca7f90a273();
	let [defaultLocale, setDefaultLocale] = (0, import_react$1.useState)($1e5a04cdaf7d1af8$var$currentLocale);
	(0, import_react$1.useEffect)(() => {
		if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
		$1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
		return () => {
			$1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
			if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
		};
	}, []);
	if (isSSR) return {
		locale: "en-US",
		direction: "ltr"
	};
	return defaultLocale;
}
//#endregion
//#region node_modules/@react-aria/i18n/dist/context.mjs
var $18f2051aff69b9bf$var$I18nContext = /* @__PURE__ */ import_react$1.createContext(null);
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
	let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
	return (0, import_react$1.useContext)($18f2051aff69b9bf$var$I18nContext) || defaultLocale;
}
//#endregion
//#region node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? import_react$1.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@react-aria/utils/dist/useEffectEvent.mjs
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
	const ref = (0, import_react$1.useRef)(null);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		ref.current = fn;
	}, [fn]);
	return (0, import_react$1.useCallback)((...args) => {
		const f = ref.current;
		return f === null || f === void 0 ? void 0 : f(...args);
	}, []);
}
//#endregion
//#region node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
	let [value, setValue] = (0, import_react$1.useState)(defaultId);
	let nextId = (0, import_react$1.useRef)(null);
	let res = $b5e257d569688ac6$export$619500959fc48b26(value);
	let updateValue = (0, import_react$1.useCallback)((val) => {
		nextId.current = val;
	}, []);
	if ($bdb11010cef70236$var$canUseDOM) if ($bdb11010cef70236$var$idsUpdaterMap.has(res) && !$bdb11010cef70236$var$idsUpdaterMap.get(res).includes(updateValue)) $bdb11010cef70236$var$idsUpdaterMap.set(res, [...$bdb11010cef70236$var$idsUpdaterMap.get(res), updateValue]);
	else $bdb11010cef70236$var$idsUpdaterMap.set(res, [updateValue]);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		let r = res;
		return () => {
			$bdb11010cef70236$var$idsUpdaterMap.delete(r);
		};
	}, [res]);
	(0, import_react$1.useEffect)(() => {
		let newId = nextId.current;
		if (newId) {
			nextId.current = null;
			setValue(newId);
		}
	});
	return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
	if (idA === idB) return idA;
	let setIdsA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
	if (setIdsA) {
		setIdsA.forEach((fn) => fn(idB));
		return idB;
	}
	let setIdsB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
	if (setIdsB) {
		setIdsB.forEach((fn) => fn(idA));
		return idA;
	}
	return idB;
}
//#endregion
//#region node_modules/@react-aria/utils/dist/chain.mjs
/**
* Calls all functions in the order they were chained with the same arguments.
*/ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
	return (...args) => {
		for (let callback of callbacks) if (typeof callback === "function") callback(...args);
	};
}
//#endregion
//#region node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
	var _el_ownerDocument;
	return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
	if (el && "window" in el && el.window === el) return el;
	return $431fbd86ca7dc216$export$b204af158042fbac(el).defaultView || window;
};
//#endregion
//#region node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
	let result = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		let props = args[i];
		for (let key in props) {
			let a = result[key];
			let b = props[key];
			if (typeof a === "function" && typeof b === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);
			else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = clsx$1(a, b);
			else if (key === "id" && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);
			else result[key] = b !== void 0 ? b : a;
		}
	}
	return result;
}
//#endregion
//#region node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var $65484d02dcb7eb3e$var$DOMPropNames = new Set(["id"]);
var $65484d02dcb7eb3e$var$labelablePropNames = new Set([
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-details"
]);
var $65484d02dcb7eb3e$var$linkPropNames = new Set([
	"href",
	"hrefLang",
	"target",
	"rel",
	"download",
	"ping",
	"referrerPolicy"
]);
var $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
	let { labelable, isLink, propNames } = opts;
	let filteredProps = {};
	for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
	return filteredProps;
}
//#endregion
//#region node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
	if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({ preventScroll: true });
	else {
		let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
		element.focus();
		$7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
	}
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
	if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
		$7215afc6de606d6b$var$supportsPreventScrollCached = false;
		try {
			document.createElement("div").focus({ get preventScroll() {
				$7215afc6de606d6b$var$supportsPreventScrollCached = true;
				return true;
			} });
		} catch {}
	}
	return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
	let parent = element.parentNode;
	let scrollableElements = [];
	let rootScrollingElement = document.scrollingElement || document.documentElement;
	while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
		if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
			element: parent,
			scrollTop: parent.scrollTop,
			scrollLeft: parent.scrollLeft
		});
		parent = parent.parentNode;
	}
	if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
		element: rootScrollingElement,
		scrollTop: rootScrollingElement.scrollTop,
		scrollLeft: rootScrollingElement.scrollLeft
	});
	return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
	for (let { element, scrollTop, scrollLeft } of scrollableElements) {
		element.scrollTop = scrollTop;
		element.scrollLeft = scrollLeft;
	}
}
//#endregion
//#region node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re) {
	var _window_navigator_userAgentData;
	if (typeof window === "undefined" || window.navigator == null) return false;
	return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
	var _window_navigator_userAgentData;
	return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
	let res = null;
	return () => {
		if (res == null) res = fn();
		return res;
	};
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
//#endregion
//#region node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
	if (typeof window === "undefined") return;
	function isTransitionEvent(event) {
		return "propertyName" in event;
	}
	let onTransitionStart = (e) => {
		if (!isTransitionEvent(e) || !e.target) return;
		let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
		if (!transitions) {
			transitions = /* @__PURE__ */ new Set();
			$bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
			e.target.addEventListener("transitioncancel", onTransitionEnd, { once: true });
		}
		transitions.add(e.propertyName);
	};
	let onTransitionEnd = (e) => {
		if (!isTransitionEvent(e) || !e.target) return;
		let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
		if (!properties) return;
		properties.delete(e.propertyName);
		if (properties.size === 0) {
			e.target.removeEventListener("transitioncancel", onTransitionEnd);
			$bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
		}
		if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
			for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
			$bbed8b41f857bcc0$var$transitionCallbacks.clear();
		}
	};
	document.body.addEventListener("transitionrun", onTransitionStart);
	document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
	requestAnimationFrame(() => {
		if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
		else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
	});
}
//#endregion
//#region node_modules/@react-aria/utils/dist/useResizeObserver.mjs
function $9daab02d461809db$var$hasResizeObserver() {
	return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
	const { ref, box, onResize } = options;
	(0, import_react$1.useEffect)(() => {
		let element = ref === null || ref === void 0 ? void 0 : ref.current;
		if (!element) return;
		if (!$9daab02d461809db$var$hasResizeObserver()) {
			window.addEventListener("resize", onResize, false);
			return () => {
				window.removeEventListener("resize", onResize, false);
			};
		} else {
			const resizeObserverInstance = new window.ResizeObserver((entries) => {
				if (!entries.length) return;
				onResize();
			});
			resizeObserverInstance.observe(element, { box });
			return () => {
				if (element) resizeObserverInstance.unobserve(element);
			};
		}
	}, [
		onResize,
		ref,
		box
	]);
}
//#endregion
//#region node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		if (context && context.ref && ref) {
			context.ref.current = ref.current;
			return () => {
				if (context.ref) context.ref.current = null;
			};
		}
	});
}
//#endregion
//#region node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
	if (event.mozInputSource === 0 && event.isTrusted) return true;
	if ($c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
	return event.detail === 0 && !event.pointerType;
}
//#endregion
//#region node_modules/@react-stately/utils/dist/useControlledState.mjs
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
	let [stateValue, setStateValue] = (0, import_react$1.useState)(value || defaultValue);
	let isControlledRef = (0, import_react$1.useRef)(value !== void 0);
	let isControlled = value !== void 0;
	(0, import_react$1.useEffect)(() => {
		let wasControlled = isControlledRef.current;
		if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
		isControlledRef.current = isControlled;
	}, [isControlled]);
	let currentValue = isControlled ? value : stateValue;
	let setValue = (0, import_react$1.useCallback)((value, ...args) => {
		let onChangeCaller = (value, ...onChangeArgs) => {
			if (onChange) {
				if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
			}
			if (!isControlled) currentValue = value;
		};
		if (typeof value === "function") {
			console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
			let updateFunction = (oldValue, ...functionArgs) => {
				let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
				onChangeCaller(interceptedValue, ...args);
				if (!isControlled) return interceptedValue;
				return oldValue;
			};
			setStateValue(updateFunction);
		} else {
			if (!isControlled) setStateValue(value);
			onChangeCaller(value, ...args);
		}
	}, [
		isControlled,
		currentValue,
		onChange
	]);
	return [currentValue, setValue];
}
//#endregion
//#region node_modules/@react-stately/utils/dist/number.mjs
/**
* Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
*/ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
	return Math.min(Math.max(value, min), max);
}
//#endregion
//#region node_modules/@react-aria/overlays/dist/calculatePosition.mjs
var $edcf132a9284368a$var$AXIS = {
	top: "top",
	bottom: "top",
	left: "left",
	right: "left"
};
var $edcf132a9284368a$var$FLIPPED_DIRECTION = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
var $edcf132a9284368a$var$CROSS_AXIS = {
	top: "left",
	left: "top"
};
var $edcf132a9284368a$var$AXIS_SIZE = {
	top: "height",
	left: "width"
};
var $edcf132a9284368a$var$TOTAL_SIZE = {
	width: "totalWidth",
	height: "totalHeight"
};
var $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {};
var $edcf132a9284368a$var$visualViewport = typeof document !== "undefined" ? window.visualViewport : null;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
	let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
	let scroll = {};
	var _visualViewport_scale;
	let isPinchZoomedIn = ((_visualViewport_scale = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.scale) !== null && _visualViewport_scale !== void 0 ? _visualViewport_scale : 1) > 1;
	if (containerNode.tagName === "BODY") {
		let documentElement = document.documentElement;
		totalWidth = documentElement.clientWidth;
		totalHeight = documentElement.clientHeight;
		var _visualViewport_width;
		width = (_visualViewport_width = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
		var _visualViewport_height;
		height = (_visualViewport_height = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
		scroll.top = documentElement.scrollTop || containerNode.scrollTop;
		scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
		if ($edcf132a9284368a$var$visualViewport) {
			top = $edcf132a9284368a$var$visualViewport.offsetTop;
			left = $edcf132a9284368a$var$visualViewport.offsetLeft;
		}
	} else {
		({width: width, height: height, top: top, left: left} = $edcf132a9284368a$var$getOffset(containerNode));
		scroll.top = containerNode.scrollTop;
		scroll.left = containerNode.scrollLeft;
		totalWidth = width;
		totalHeight = height;
	}
	if ($c87311424ea30a05$export$78551043582a6a98() && (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") && isPinchZoomedIn) {
		scroll.top = 0;
		scroll.left = 0;
		var _visualViewport_pageTop;
		top = (_visualViewport_pageTop = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.pageTop) !== null && _visualViewport_pageTop !== void 0 ? _visualViewport_pageTop : 0;
		var _visualViewport_pageLeft;
		left = (_visualViewport_pageLeft = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.pageLeft) !== null && _visualViewport_pageLeft !== void 0 ? _visualViewport_pageLeft : 0;
	}
	return {
		width,
		height,
		totalWidth,
		totalHeight,
		scroll,
		top,
		left
	};
}
function $edcf132a9284368a$var$getScroll(node) {
	return {
		top: node.scrollTop,
		left: node.scrollLeft,
		width: node.scrollWidth,
		height: node.scrollHeight
	};
}
function $edcf132a9284368a$var$getDelta(axis, offset, size, boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary) {
	var _containerDimensions_scroll_axis;
	let containerScroll = (_containerDimensions_scroll_axis = containerDimensions.scroll[axis]) !== null && _containerDimensions_scroll_axis !== void 0 ? _containerDimensions_scroll_axis : 0;
	let boundarySize = boundaryDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
	let boundaryStartEdge = boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + padding;
	let boundaryEndEdge = boundarySize + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] - padding;
	let startEdgeOffset = offset - containerScroll + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
	let endEdgeOffset = offset - containerScroll + size + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
	if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
	else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
	else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
	let style = window.getComputedStyle(node);
	return {
		top: parseInt(style.marginTop, 10) || 0,
		bottom: parseInt(style.marginBottom, 10) || 0,
		left: parseInt(style.marginLeft, 10) || 0,
		right: parseInt(style.marginRight, 10) || 0
	};
}
function $edcf132a9284368a$var$parsePlacement(input) {
	if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
	let [placement, crossPlacement] = input.split(" ");
	let axis = $edcf132a9284368a$var$AXIS[placement] || "right";
	let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
	if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = "center";
	let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
	let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
	$edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
		placement,
		crossPlacement,
		axis,
		crossAxis,
		size,
		crossSize
	};
	return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset) {
	let { placement, crossPlacement, axis, crossAxis, size, crossSize } = placementInfo;
	let position = {};
	var _childOffset_crossAxis;
	position[crossAxis] = (_childOffset_crossAxis = childOffset[crossAxis]) !== null && _childOffset_crossAxis !== void 0 ? _childOffset_crossAxis : 0;
	var _childOffset_crossSize, _overlaySize_crossSize, _childOffset_crossSize1, _overlaySize_crossSize1;
	if (crossPlacement === "center") position[crossAxis] += (((_childOffset_crossSize = childOffset[crossSize]) !== null && _childOffset_crossSize !== void 0 ? _childOffset_crossSize : 0) - ((_overlaySize_crossSize = overlaySize[crossSize]) !== null && _overlaySize_crossSize !== void 0 ? _overlaySize_crossSize : 0)) / 2;
	else if (crossPlacement !== crossAxis) position[crossAxis] += ((_childOffset_crossSize1 = childOffset[crossSize]) !== null && _childOffset_crossSize1 !== void 0 ? _childOffset_crossSize1 : 0) - ((_overlaySize_crossSize1 = overlaySize[crossSize]) !== null && _overlaySize_crossSize1 !== void 0 ? _overlaySize_crossSize1 : 0);
	position[crossAxis] += crossOffset;
	const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
	const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
	position[crossAxis] = $9446cca9a3875146$export$7d15b64cf5a3a4c4(position[crossAxis], minPosition, maxPosition);
	if (placement === axis) {
		const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];
		position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
	} else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
	return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection) {
	const containerHeight = isContainerPositioned ? containerOffsetWithBoundary.height : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE.height];
	var _position_bottom;
	let overlayTop = position.top != null ? containerOffsetWithBoundary.top + position.top : containerOffsetWithBoundary.top + (containerHeight - ((_position_bottom = position.bottom) !== null && _position_bottom !== void 0 ? _position_bottom : 0) - overlayHeight);
	var _boundaryDimensions_scroll_top, _margins_top, _margins_bottom, _boundaryDimensions_scroll_top1, _margins_top1, _margins_bottom1;
	let maxHeight = heightGrowthDirection !== "top" ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + ((_boundaryDimensions_scroll_top = boundaryDimensions.scroll.top) !== null && _boundaryDimensions_scroll_top !== void 0 ? _boundaryDimensions_scroll_top : 0) - overlayTop - (((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0) + padding)) : Math.max(0, overlayTop + overlayHeight - (boundaryDimensions.top + ((_boundaryDimensions_scroll_top1 = boundaryDimensions.scroll.top) !== null && _boundaryDimensions_scroll_top1 !== void 0 ? _boundaryDimensions_scroll_top1 : 0)) - (((_margins_top1 = margins.top) !== null && _margins_top1 !== void 0 ? _margins_top1 : 0) + ((_margins_bottom1 = margins.bottom) !== null && _margins_bottom1 !== void 0 ? _margins_bottom1 : 0) + padding));
	return Math.min(boundaryDimensions.height - padding * 2, maxHeight);
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
	let { placement, axis, size } = placementInfo;
	var _boundaryDimensions_scroll_axis, _margins_axis;
	if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - ((_boundaryDimensions_scroll_axis = boundaryDimensions.scroll[axis]) !== null && _boundaryDimensions_scroll_axis !== void 0 ? _boundaryDimensions_scroll_axis : 0) + containerOffsetWithBoundary[axis] - ((_margins_axis = margins[axis]) !== null && _margins_axis !== void 0 ? _margins_axis : 0) - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
	var _margins_axis1;
	return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - ((_margins_axis1 = margins[axis]) !== null && _margins_axis1 !== void 0 ? _margins_axis1 : 0) - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset) {
	let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
	let { size, crossAxis, crossSize, placement, crossPlacement } = placementInfo;
	let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
	let normalizedOffset = offset;
	let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
	if (flip && scrollSize[size] > space) {
		let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
		let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
		if ($edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo) > space) {
			placementInfo = flippedPlacementInfo;
			position = flippedPosition;
			normalizedOffset = offset;
		}
	}
	let heightGrowthDirection = "bottom";
	if (placementInfo.axis === "top") {
		if (placementInfo.placement === "top") heightGrowthDirection = "top";
		else if (placementInfo.placement === "bottom") heightGrowthDirection = "bottom";
	} else if (placementInfo.crossAxis === "top") {
		if (placementInfo.crossPlacement === "top") heightGrowthDirection = "bottom";
		else if (placementInfo.crossPlacement === "bottom") heightGrowthDirection = "top";
	}
	let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
	position[crossAxis] += delta;
	let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection);
	if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
	overlaySize.height = Math.min(overlaySize.height, maxHeight);
	position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
	delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
	position[crossAxis] += delta;
	let arrowPosition = {};
	let preferredArrowPosition = childOffset[crossAxis] + .5 * childOffset[crossSize] - position[crossAxis] - margins[$edcf132a9284368a$var$AXIS[crossAxis]];
	const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
	var _margins_left, _margins_right, _margins_top, _margins_bottom;
	const overlayMargin = $edcf132a9284368a$var$AXIS[crossAxis] === "left" ? ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0) : ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
	const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
	arrowPosition[crossAxis] = $9446cca9a3875146$export$7d15b64cf5a3a4c4($9446cca9a3875146$export$7d15b64cf5a3a4c4(preferredArrowPosition, childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[$edcf132a9284368a$var$AXIS[crossAxis]]), childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[$edcf132a9284368a$var$AXIS[crossAxis]])), arrowMinPosition, arrowMaxPosition);
	return {
		position,
		maxHeight,
		arrowOffsetLeft: arrowPosition.left,
		arrowOffsetTop: arrowPosition.top,
		placement: placementInfo.placement
	};
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
	let { placement, targetNode, overlayNode, scrollNode, padding, shouldFlip, boundaryElement, offset, crossOffset, maxHeight, arrowSize = 0, arrowBoundaryOffset = 0 } = opts;
	let container = overlayNode instanceof HTMLElement ? $edcf132a9284368a$var$getContainingBlock(overlayNode) : document.documentElement;
	let isViewportContainer = container === document.documentElement;
	const containerPositionStyle = window.getComputedStyle(container).position;
	let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
	let childOffset = isViewportContainer ? $edcf132a9284368a$var$getOffset(targetNode) : $edcf132a9284368a$var$getPosition(targetNode, container);
	if (!isViewportContainer) {
		let { marginTop, marginLeft } = window.getComputedStyle(targetNode);
		childOffset.top += parseInt(marginTop, 10) || 0;
		childOffset.left += parseInt(marginLeft, 10) || 0;
	}
	let overlaySize = $edcf132a9284368a$var$getOffset(overlayNode);
	let margins = $edcf132a9284368a$var$getMargins(overlayNode);
	var _margins_left, _margins_right;
	overlaySize.width += ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0);
	var _margins_top, _margins_bottom;
	overlaySize.height += ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
	let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
	let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
	let containerDimensions = $edcf132a9284368a$var$getContainerDimensions(container);
	let containerOffsetWithBoundary = boundaryElement.tagName === "BODY" ? $edcf132a9284368a$var$getOffset(container) : $edcf132a9284368a$var$getPosition(container, boundaryElement);
	if (container.tagName === "HTML" && boundaryElement.tagName === "BODY") {
		containerDimensions.scroll.top = 0;
		containerDimensions.scroll.left = 0;
	}
	return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset);
}
function $edcf132a9284368a$var$getOffset(node) {
	let { top, left, width, height } = node.getBoundingClientRect();
	let { scrollTop, scrollLeft, clientTop, clientLeft } = document.documentElement;
	return {
		top: top + scrollTop - clientTop,
		left: left + scrollLeft - clientLeft,
		width,
		height
	};
}
function $edcf132a9284368a$var$getPosition(node, parent) {
	let style = window.getComputedStyle(node);
	let offset;
	if (style.position === "fixed") {
		let { top, left, width, height } = node.getBoundingClientRect();
		offset = {
			top,
			left,
			width,
			height
		};
	} else {
		offset = $edcf132a9284368a$var$getOffset(node);
		let parentOffset = $edcf132a9284368a$var$getOffset(parent);
		let parentStyle = window.getComputedStyle(parent);
		parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
		parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
		offset.top -= parentOffset.top;
		offset.left -= parentOffset.left;
	}
	offset.top -= parseInt(style.marginTop, 10) || 0;
	offset.left -= parseInt(style.marginLeft, 10) || 0;
	return offset;
}
function $edcf132a9284368a$var$getContainingBlock(node) {
	let offsetParent = node.offsetParent;
	if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
	if (offsetParent == null) {
		offsetParent = node.parentElement;
		while (offsetParent && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = offsetParent.parentElement;
	}
	return offsetParent || document.documentElement;
}
function $edcf132a9284368a$var$isContainingBlock(node) {
	let style = window.getComputedStyle(node);
	return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || "backdropFilter" in style && style.backdropFilter !== "none" || "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}
//#endregion
//#region node_modules/@react-aria/overlays/dist/useCloseOnScroll.mjs
var $dd149f63282afbbf$export$f6211563215e3b37 = /* @__PURE__ */ new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
	let { triggerRef, isOpen, onClose } = opts;
	(0, import_react$1.useEffect)(() => {
		if (!isOpen || onClose === null) return;
		let onScroll = (e) => {
			let target = e.target;
			if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
			let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
			if (onCloseHandler) onCloseHandler();
		};
		window.addEventListener("scroll", onScroll, true);
		return () => {
			window.removeEventListener("scroll", onScroll, true);
		};
	}, [
		isOpen,
		onClose,
		triggerRef
	]);
}
//#endregion
//#region node_modules/@react-aria/overlays/dist/useOverlayPosition.mjs
var $2a41e45df1593e64$var$visualViewport = typeof document !== "undefined" ? window.visualViewport : null;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
	let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
	let { arrowSize = 0, targetRef, overlayRef, scrollRef = overlayRef, placement = "bottom", containerPadding = 12, shouldFlip = true, boundaryElement = typeof document !== "undefined" ? document.body : null, offset = 0, crossOffset = 0, shouldUpdatePosition = true, isOpen = true, onClose, maxHeight, arrowBoundaryOffset = 0 } = props;
	let [position, setPosition] = (0, import_react$1.useState)(null);
	let deps = [
		shouldUpdatePosition,
		placement,
		overlayRef.current,
		targetRef.current,
		scrollRef.current,
		containerPadding,
		shouldFlip,
		boundaryElement,
		offset,
		crossOffset,
		isOpen,
		direction,
		maxHeight,
		arrowBoundaryOffset,
		arrowSize
	];
	let lastScale = (0, import_react$1.useRef)($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale);
	(0, import_react$1.useEffect)(() => {
		if (isOpen) lastScale.current = $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale;
	}, [isOpen]);
	let updatePosition = (0, import_react$1.useCallback)(() => {
		if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
		if (($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale) !== lastScale.current) return;
		let anchor = null;
		if (scrollRef.current && scrollRef.current.contains(document.activeElement)) {
			var _document_activeElement;
			let anchorRect = (_document_activeElement = document.activeElement) === null || _document_activeElement === void 0 ? void 0 : _document_activeElement.getBoundingClientRect();
			let scrollRect = scrollRef.current.getBoundingClientRect();
			var _anchorRect_top;
			anchor = {
				type: "top",
				offset: ((_anchorRect_top = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.top) !== null && _anchorRect_top !== void 0 ? _anchorRect_top : 0) - scrollRect.top
			};
			if (anchor.offset > scrollRect.height / 2) {
				anchor.type = "bottom";
				var _anchorRect_bottom;
				anchor.offset = ((_anchorRect_bottom = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.bottom) !== null && _anchorRect_bottom !== void 0 ? _anchorRect_bottom : 0) - scrollRect.bottom;
			}
		}
		let overlay = overlayRef.current;
		if (!maxHeight && overlayRef.current) {
			var _window_visualViewport;
			overlay.style.top = "0px";
			overlay.style.bottom = "";
			var _window_visualViewport_height;
			overlay.style.maxHeight = ((_window_visualViewport_height = (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.height) !== null && _window_visualViewport_height !== void 0 ? _window_visualViewport_height : window.innerHeight) + "px";
		}
		let position = $edcf132a9284368a$export$b3ceb0cbf1056d98({
			placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
			overlayNode: overlayRef.current,
			targetNode: targetRef.current,
			scrollNode: scrollRef.current || overlayRef.current,
			padding: containerPadding,
			shouldFlip,
			boundaryElement,
			offset,
			crossOffset,
			maxHeight,
			arrowSize,
			arrowBoundaryOffset
		});
		if (!position.position) return;
		overlay.style.top = "";
		overlay.style.bottom = "";
		overlay.style.left = "";
		overlay.style.right = "";
		Object.keys(position.position).forEach((key) => overlay.style[key] = position.position[key] + "px");
		overlay.style.maxHeight = position.maxHeight != null ? position.maxHeight + "px" : "";
		if (anchor && document.activeElement && scrollRef.current) {
			let anchorRect = document.activeElement.getBoundingClientRect();
			let scrollRect = scrollRef.current.getBoundingClientRect();
			let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
			scrollRef.current.scrollTop += newOffset - anchor.offset;
		}
		setPosition(position);
	}, deps);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updatePosition, deps);
	$2a41e45df1593e64$var$useResize(updatePosition);
	$9daab02d461809db$export$683480f191c0e3ea({
		ref: overlayRef,
		onResize: updatePosition
	});
	$9daab02d461809db$export$683480f191c0e3ea({
		ref: targetRef,
		onResize: updatePosition
	});
	let isResizing = (0, import_react$1.useRef)(false);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		let timeout;
		let onResize = () => {
			isResizing.current = true;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				isResizing.current = false;
			}, 500);
			updatePosition();
		};
		let onScroll = () => {
			if (isResizing.current) onResize();
		};
		$2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 || $2a41e45df1593e64$var$visualViewport.addEventListener("resize", onResize);
		$2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 || $2a41e45df1593e64$var$visualViewport.addEventListener("scroll", onScroll);
		return () => {
			$2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 || $2a41e45df1593e64$var$visualViewport.removeEventListener("resize", onResize);
			$2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 || $2a41e45df1593e64$var$visualViewport.removeEventListener("scroll", onScroll);
		};
	}, [updatePosition]);
	let close = (0, import_react$1.useCallback)(() => {
		if (!isResizing.current) onClose === null || onClose === void 0 || onClose();
	}, [onClose, isResizing]);
	$dd149f63282afbbf$export$18fc8428861184da({
		triggerRef: targetRef,
		isOpen,
		onClose: onClose && close
	});
	var _position_maxHeight, _position_placement;
	return {
		overlayProps: { style: {
			position: "absolute",
			zIndex: 1e5,
			...position === null || position === void 0 ? void 0 : position.position,
			maxHeight: (_position_maxHeight = position === null || position === void 0 ? void 0 : position.maxHeight) !== null && _position_maxHeight !== void 0 ? _position_maxHeight : "100vh"
		} },
		placement: (_position_placement = position === null || position === void 0 ? void 0 : position.placement) !== null && _position_placement !== void 0 ? _position_placement : null,
		arrowProps: {
			"aria-hidden": "true",
			role: "presentation",
			style: {
				left: position === null || position === void 0 ? void 0 : position.arrowOffsetLeft,
				top: position === null || position === void 0 ? void 0 : position.arrowOffsetTop
			}
		},
		updatePosition
	};
}
function $2a41e45df1593e64$var$useResize(onResize) {
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		window.addEventListener("resize", onResize, false);
		return () => {
			window.removeEventListener("resize", onResize, false);
		};
	}, [onResize]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
	if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
	return position.replace("start", "left").replace("end", "right");
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/utils.mjs
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
	isDefaultPrevented() {
		return this.nativeEvent.defaultPrevented;
	}
	preventDefault() {
		this.defaultPrevented = true;
		this.nativeEvent.preventDefault();
	}
	stopPropagation() {
		this.nativeEvent.stopPropagation();
		this.isPropagationStopped = () => true;
	}
	isPropagationStopped() {
		return false;
	}
	persist() {}
	constructor(type, nativeEvent) {
		this.nativeEvent = nativeEvent;
		this.target = nativeEvent.target;
		this.currentTarget = nativeEvent.currentTarget;
		this.relatedTarget = nativeEvent.relatedTarget;
		this.bubbles = nativeEvent.bubbles;
		this.cancelable = nativeEvent.cancelable;
		this.defaultPrevented = nativeEvent.defaultPrevented;
		this.eventPhase = nativeEvent.eventPhase;
		this.isTrusted = nativeEvent.isTrusted;
		this.timeStamp = nativeEvent.timeStamp;
		this.type = type;
	}
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
	let stateRef = (0, import_react$1.useRef)({
		isFocused: false,
		observer: null
	});
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		const state = stateRef.current;
		return () => {
			if (state.observer) {
				state.observer.disconnect();
				state.observer = null;
			}
		};
	}, []);
	let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e) => {
		onBlur === null || onBlur === void 0 || onBlur(e);
	});
	return (0, import_react$1.useCallback)((e) => {
		if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
			stateRef.current.isFocused = true;
			let target = e.target;
			let onBlurHandler = (e) => {
				stateRef.current.isFocused = false;
				if (target.disabled) dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e));
				if (stateRef.current.observer) {
					stateRef.current.observer.disconnect();
					stateRef.current.observer = null;
				}
			};
			target.addEventListener("focusout", onBlurHandler, { once: true });
			stateRef.current.observer = new MutationObserver(() => {
				if (stateRef.current.isFocused && target.disabled) {
					var _stateRef_current_observer;
					(_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 || _stateRef_current_observer.disconnect();
					let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
					target.dispatchEvent(new FocusEvent("blur", { relatedTarget: relatedTargetEl }));
					target.dispatchEvent(new FocusEvent("focusout", {
						bubbles: true,
						relatedTarget: relatedTargetEl
					}));
				}
			});
			stateRef.current.observer.observe(target, {
				attributes: true,
				attributeFilter: ["disabled"]
			});
		}
	}, [dispatchBlur]);
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/useFocus.mjs
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
	let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
	const onBlur = (0, import_react$1.useCallback)((e) => {
		if (e.target === e.currentTarget) {
			if (onBlurProp) onBlurProp(e);
			if (onFocusChange) onFocusChange(false);
			return true;
		}
	}, [onBlurProp, onFocusChange]);
	const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
	const onFocus = (0, import_react$1.useCallback)((e) => {
		const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e.target);
		if (e.target === e.currentTarget && ownerDocument.activeElement === e.target) {
			if (onFocusProp) onFocusProp(e);
			if (onFocusChange) onFocusChange(true);
			onSyntheticFocus(e);
		}
	}, [
		onFocusChange,
		onFocusProp,
		onSyntheticFocus
	]);
	return { focusProps: {
		onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
		onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
	} };
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
	for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e);
}
/**
* Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
*/ function $507fabe10e71c6fb$var$isValidKey(e) {
	return !(e.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
	$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
	if ($507fabe10e71c6fb$var$isValidKey(e)) {
		$507fabe10e71c6fb$var$currentModality = "keyboard";
		$507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
	}
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
	$507fabe10e71c6fb$var$currentModality = "pointer";
	if (e.type === "mousedown" || e.type === "pointerdown") {
		$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
		$507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
	}
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
	if ($6a7db85432448f7f$export$60278871457622de(e)) {
		$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
		$507fabe10e71c6fb$var$currentModality = "virtual";
	}
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
	if (e.target === window || e.target === document) return;
	if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
		$507fabe10e71c6fb$var$currentModality = "virtual";
		$507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
	}
	$507fabe10e71c6fb$var$hasEventBeforeFocus = false;
	$507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
	$507fabe10e71c6fb$var$hasEventBeforeFocus = false;
	$507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
* Setup global event listeners to control when keyboard focus style should be visible.
*/ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
	if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
	const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
	const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
	let focus = windowObject.HTMLElement.prototype.focus;
	windowObject.HTMLElement.prototype.focus = function() {
		$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
		focus.apply(this, arguments);
	};
	documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
	windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
	windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
	if (typeof PointerEvent !== "undefined") {
		documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
	} else {
		documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
	}
	windowObject.addEventListener("beforeunload", () => {
		$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
	}, { once: true });
	$507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, { focus });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
	const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
	const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
	if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
	if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
	windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
	documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
	windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
	windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
	if (typeof PointerEvent !== "undefined") {
		documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
	} else {
		documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
	}
	$507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
	const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
	let loadListener;
	if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
	else {
		loadListener = () => {
			$507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
		};
		documentObject.addEventListener("DOMContentLoaded", loadListener);
	}
	return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
	return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
	return $507fabe10e71c6fb$var$currentModality;
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
	let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
	let state = (0, import_react$1.useRef)({ isFocusWithin: false });
	let onBlur = (0, import_react$1.useCallback)((e) => {
		if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
			state.current.isFocusWithin = false;
			if (onBlurWithin) onBlurWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(false);
		}
	}, [
		onBlurWithin,
		onFocusWithinChange,
		state
	]);
	let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
	let onFocus = (0, import_react$1.useCallback)((e) => {
		if (!state.current.isFocusWithin && document.activeElement === e.target) {
			if (onFocusWithin) onFocusWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(true);
			state.current.isFocusWithin = true;
			onSyntheticFocus(e);
		}
	}, [
		onFocusWithin,
		onFocusWithinChange,
		onSyntheticFocus
	]);
	if (isDisabled) return { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} };
	return { focusWithinProps: {
		onFocus,
		onBlur
	} };
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/useHover.mjs
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
	$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
	setTimeout(() => {
		$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
	}, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
	if (e.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
	if (typeof document === "undefined") return;
	if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
	else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
	$6179b936705e76d3$var$hoverCount++;
	return () => {
		$6179b936705e76d3$var$hoverCount--;
		if ($6179b936705e76d3$var$hoverCount > 0) return;
		if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
		else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
	};
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
	let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
	let [isHovered, setHovered] = (0, import_react$1.useState)(false);
	let state = (0, import_react$1.useRef)({
		isHovered: false,
		ignoreEmulatedMouseEvents: false,
		pointerType: "",
		target: null
	}).current;
	(0, import_react$1.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
	let { hoverProps, triggerHoverEnd } = (0, import_react$1.useMemo)(() => {
		let triggerHoverStart = (event, pointerType) => {
			state.pointerType = pointerType;
			if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
			state.isHovered = true;
			let target = event.currentTarget;
			state.target = target;
			if (onHoverStart) onHoverStart({
				type: "hoverstart",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(true);
			setHovered(true);
		};
		let triggerHoverEnd = (event, pointerType) => {
			state.pointerType = "";
			state.target = null;
			if (pointerType === "touch" || !state.isHovered) return;
			state.isHovered = false;
			let target = event.currentTarget;
			if (onHoverEnd) onHoverEnd({
				type: "hoverend",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(false);
			setHovered(false);
		};
		let hoverProps = {};
		if (typeof PointerEvent !== "undefined") {
			hoverProps.onPointerEnter = (e) => {
				if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
				triggerHoverStart(e, e.pointerType);
			};
			hoverProps.onPointerLeave = (e) => {
				if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
			};
		} else {
			hoverProps.onTouchStart = () => {
				state.ignoreEmulatedMouseEvents = true;
			};
			hoverProps.onMouseEnter = (e) => {
				if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, "mouse");
				state.ignoreEmulatedMouseEvents = false;
			};
			hoverProps.onMouseLeave = (e) => {
				if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, "mouse");
			};
		}
		return {
			hoverProps,
			triggerHoverEnd
		};
	}, [
		onHoverStart,
		onHoverChange,
		onHoverEnd,
		isDisabled,
		state
	]);
	(0, import_react$1.useEffect)(() => {
		if (isDisabled) triggerHoverEnd({ currentTarget: state.target }, state.pointerType);
	}, [isDisabled]);
	return {
		hoverProps,
		isHovered
	};
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
	let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
	let stateRef = (0, import_react$1.useRef)({
		isPointerDown: false,
		ignoreEmulatedMouseEvents: false
	});
	let onPointerDown = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e) => {
		if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
			if (onInteractOutsideStart) onInteractOutsideStart(e);
			stateRef.current.isPointerDown = true;
		}
	});
	let triggerInteractOutside = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e) => {
		if (onInteractOutside) onInteractOutside(e);
	});
	(0, import_react$1.useEffect)(() => {
		let state = stateRef.current;
		if (isDisabled) return;
		const element = ref.current;
		const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
		if (typeof PointerEvent !== "undefined") {
			let onPointerUp = (e) => {
				if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
				state.isPointerDown = false;
			};
			documentObject.addEventListener("pointerdown", onPointerDown, true);
			documentObject.addEventListener("pointerup", onPointerUp, true);
			return () => {
				documentObject.removeEventListener("pointerdown", onPointerDown, true);
				documentObject.removeEventListener("pointerup", onPointerUp, true);
			};
		} else {
			let onMouseUp = (e) => {
				if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
				else if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
				state.isPointerDown = false;
			};
			let onTouchEnd = (e) => {
				state.ignoreEmulatedMouseEvents = true;
				if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
				state.isPointerDown = false;
			};
			documentObject.addEventListener("mousedown", onPointerDown, true);
			documentObject.addEventListener("mouseup", onMouseUp, true);
			documentObject.addEventListener("touchstart", onPointerDown, true);
			documentObject.addEventListener("touchend", onTouchEnd, true);
			return () => {
				documentObject.removeEventListener("mousedown", onPointerDown, true);
				documentObject.removeEventListener("mouseup", onMouseUp, true);
				documentObject.removeEventListener("touchstart", onPointerDown, true);
				documentObject.removeEventListener("touchend", onTouchEnd, true);
			};
		}
	}, [
		ref,
		isDisabled,
		onPointerDown,
		triggerInteractOutside
	]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
	if (event.button > 0) return false;
	if (event.target) {
		const ownerDocument = event.target.ownerDocument;
		if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
		if (event.target.closest("[data-react-aria-top-layer]")) return false;
	}
	return ref.current && !ref.current.contains(event.target);
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/createEventHandler.mjs
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
	if (!handler) return void 0;
	let shouldStopPropagation = true;
	return (e) => {
		handler({
			...e,
			preventDefault() {
				e.preventDefault();
			},
			isDefaultPrevented() {
				return e.isDefaultPrevented();
			},
			stopPropagation() {
				console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
			},
			continuePropagation() {
				shouldStopPropagation = false;
			}
		});
		if (shouldStopPropagation) e.stopPropagation();
	};
}
//#endregion
//#region node_modules/@react-aria/interactions/dist/useKeyboard.mjs
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
	return { keyboardProps: props.isDisabled ? {} : {
		onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyDown),
		onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyUp)
	} };
}
//#endregion
//#region node_modules/@react-aria/focus/dist/focusSafely.mjs
function $6a99195332edec8b$export$80f3e147d781571c(element) {
	const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(element);
	if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "virtual") {
		let lastFocusedElement = ownerDocument.activeElement;
		$bbed8b41f857bcc0$export$24490316f764c430(() => {
			if (ownerDocument.activeElement === lastFocusedElement && element.isConnected) $7215afc6de606d6b$export$de79e2c695e052f3(element);
		});
	} else $7215afc6de606d6b$export$de79e2c695e052f3(element);
}
//#endregion
//#region node_modules/@react-aria/focus/dist/FocusScope.mjs
var $9bf71ea28793e738$var$activeScope = null;
var $9bf71ea28793e738$var$focusableElements = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]"
];
$9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + "";
$9bf71ea28793e738$var$focusableElements.push("[tabindex]:not([tabindex=\"-1\"]):not([disabled])");
$9bf71ea28793e738$var$focusableElements.join(":not([hidden]):not([tabindex=\"-1\"]),");
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
	if (!element) return false;
	if (!scope) return false;
	return scope.some((node) => node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
	if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
	for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))) if (s && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
	return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
	return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
var $9bf71ea28793e738$var$Tree = class $9bf71ea28793e738$var$Tree {
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(data) {
		return this.fastMap.get(data);
	}
	addTreeNode(scopeRef, parent, nodeToRestore) {
		let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
		if (!parentNode) return;
		let node = new $9bf71ea28793e738$var$TreeNode({ scopeRef });
		parentNode.addChild(node);
		node.parent = parentNode;
		this.fastMap.set(scopeRef, node);
		if (nodeToRestore) node.nodeToRestore = nodeToRestore;
	}
	addNode(node) {
		this.fastMap.set(node.scopeRef, node);
	}
	removeTreeNode(scopeRef) {
		if (scopeRef === null) return;
		let node = this.fastMap.get(scopeRef);
		if (!node) return;
		let parentNode = node.parent;
		for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
		let children = node.children;
		if (parentNode) {
			parentNode.removeChild(node);
			if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
		}
		this.fastMap.delete(node.scopeRef);
	}
	*traverse(node = this.root) {
		if (node.scopeRef != null) yield node;
		if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
	}
	clone() {
		var _node_parent;
		let newTree = new $9bf71ea28793e738$var$Tree();
		var _node_parent_scopeRef;
		for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
		return newTree;
	}
	constructor() {
		this.fastMap = /* @__PURE__ */ new Map();
		this.root = new $9bf71ea28793e738$var$TreeNode({ scopeRef: null });
		this.fastMap.set(null, this.root);
	}
};
var $9bf71ea28793e738$var$TreeNode = class {
	addChild(node) {
		this.children.add(node);
		node.parent = this;
	}
	removeChild(node) {
		this.children.delete(node);
		node.parent = void 0;
	}
	constructor(props) {
		this.children = /* @__PURE__ */ new Set();
		this.contain = false;
		this.scopeRef = props.scopeRef;
	}
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();
//#endregion
//#region node_modules/@react-aria/focus/dist/useFocusable.mjs
var $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ import_react$1.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
	let context = (0, import_react$1.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
	$e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref);
	let { ref: _, ...otherProps } = context;
	return otherProps;
}
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
	let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
	let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
	let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
	let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
	let interactionProps = props.isDisabled ? {} : domProps;
	let autoFocusRef = (0, import_react$1.useRef)(props.autoFocus);
	(0, import_react$1.useEffect)(() => {
		if (autoFocusRef.current && domRef.current) $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
		autoFocusRef.current = false;
	}, [domRef]);
	return { focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
		...interactions,
		tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
	}, interactionProps) };
}
//#endregion
//#region node_modules/@react-aria/overlays/dist/useOverlay.mjs
var $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
	let { onClose, shouldCloseOnBlur, isOpen, isDismissable = false, isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside } = props;
	(0, import_react$1.useEffect)(() => {
		if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
		return () => {
			let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
			if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
		};
	}, [isOpen, ref]);
	let onHide = () => {
		if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
	};
	let onInteractOutsideStart = (e) => {
		if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
			if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
				e.stopPropagation();
				e.preventDefault();
			}
		}
	};
	let onInteractOutside = (e) => {
		if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
			if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
				e.stopPropagation();
				e.preventDefault();
			}
			onHide();
		}
	};
	let onKeyDown = (e) => {
		if (e.key === "Escape" && !isKeyboardDismissDisabled && !e.nativeEvent.isComposing) {
			e.stopPropagation();
			e.preventDefault();
			onHide();
		}
	};
	$e0b6e0b68ec7f50f$export$872b660ac5a1ff98({
		ref,
		onInteractOutside: isDismissable && isOpen ? onInteractOutside : void 0,
		onInteractOutsideStart
	});
	let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
		isDisabled: !shouldCloseOnBlur,
		onBlurWithin: (e) => {
			if (!e.relatedTarget || $9bf71ea28793e738$export$1258395f99bf9cbf(e.relatedTarget)) return;
			if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose === null || onClose === void 0 || onClose();
		}
	});
	let onPointerDownUnderlay = (e) => {
		if (e.target === e.currentTarget) e.preventDefault();
	};
	return {
		overlayProps: {
			onKeyDown,
			...focusWithinProps
		},
		underlayProps: { onPointerDown: onPointerDownUnderlay }
	};
}
//#endregion
//#region node_modules/@react-aria/overlays/dist/useModal.mjs
var import_react_dom = /* @__PURE__ */ __toESM$1(require_react_dom(), 1);
var $f57aed4a881a3485$var$Context = /* @__PURE__ */ import_react$1.createContext(null);
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
	let { children } = props;
	let parent = (0, import_react$1.useContext)($f57aed4a881a3485$var$Context);
	let [modalCount, setModalCount] = (0, import_react$1.useState)(0);
	let context = (0, import_react$1.useMemo)(() => ({
		parent,
		modalCount,
		addModal() {
			setModalCount((count) => count + 1);
			if (parent) parent.addModal();
		},
		removeModal() {
			setModalCount((count) => count - 1);
			if (parent) parent.removeModal();
		}
	}), [parent, modalCount]);
	return /* @__PURE__ */ import_react$1.createElement($f57aed4a881a3485$var$Context.Provider, { value: context }, children);
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
	let context = (0, import_react$1.useContext)($f57aed4a881a3485$var$Context);
	return { modalProviderProps: { "aria-hidden": context && context.modalCount > 0 ? true : void 0 } };
}
/**
* Creates a root node that will be aria-hidden if there are other modals open.
*/ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
	let { modalProviderProps } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
	return /* @__PURE__ */ import_react$1.createElement("div", {
		"data-overlay-container": true,
		...props,
		...modalProviderProps
	});
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
	return /* @__PURE__ */ import_react$1.createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /* @__PURE__ */ import_react$1.createElement($f57aed4a881a3485$var$OverlayContainerDOM, props));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
	let isSSR = $b5e257d569688ac6$export$535bd6ca7f90a273();
	let { portalContainer = isSSR ? null : document.body, ...rest } = props;
	import_react$1.useEffect(() => {
		if (portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
	}, [portalContainer]);
	if (!portalContainer) return null;
	let contents = /* @__PURE__ */ import_react$1.createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
	return /* @__PURE__ */ import_react_dom.createPortal(contents, portalContainer);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var import_jsx_runtime = require_jsx_runtime();
/**
* Measurement functionality has to be within a separate component
* to leverage snapshot lifecycle.
*/
var PopChildMeasure = class extends import_react$1.Component {
	getSnapshotBeforeUpdate(prevProps) {
		const element = this.props.childRef.current;
		if (element && prevProps.isPresent && !this.props.isPresent) {
			const size = this.props.sizeRef.current;
			size.height = element.offsetHeight || 0;
			size.width = element.offsetWidth || 0;
			size.top = element.offsetTop;
			size.left = element.offsetLeft;
		}
		return null;
	}
	/**
	* Required with getSnapshotBeforeUpdate to stop React complaining.
	*/
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children, isPresent }) {
	const id = (0, import_react$1.useId)();
	const ref = (0, import_react$1.useRef)(null);
	const size = (0, import_react$1.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	});
	const { nonce } = (0, import_react$1.useContext)(MotionConfigContext);
	/**
	* We create and inject a style block so we can apply this explicit
	* sizing in a non-destructive manner by just deleting the style block.
	*
	* We can't apply size via render as the measurement happens
	* in getSnapshotBeforeUpdate (post-render), likewise if we apply the
	* styles directly on the DOM node, we might be overwriting
	* styles set via the style prop.
	*/
	(0, import_react$1.useInsertionEffect)(() => {
		const { width, height, top, left } = size.current;
		if (isPresent || !ref.current || !width || !height) return;
		ref.current.dataset.motionPopId = id;
		const style = document.createElement("style");
		if (nonce) style.nonce = nonce;
		document.head.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
		return () => {
			document.head.removeChild(style);
		};
	}, [isPresent]);
	return (0, import_jsx_runtime.jsx)(PopChildMeasure, {
		isPresent,
		childRef: ref,
		sizeRef: size,
		children: import_react$1.cloneElement(children, { ref })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
	const presenceChildren = useConstant(newChildrenMap);
	const id = (0, import_react$1.useId)();
	const memoizedOnExitComplete = (0, import_react$1.useCallback)((childId) => {
		presenceChildren.set(childId, true);
		for (const isComplete of presenceChildren.values()) if (!isComplete) return;
		onExitComplete && onExitComplete();
	}, [presenceChildren, onExitComplete]);
	const context = (0, import_react$1.useMemo)(
		() => ({
			id,
			initial,
			isPresent,
			custom,
			onExitComplete: memoizedOnExitComplete,
			register: (childId) => {
				presenceChildren.set(childId, false);
				return () => presenceChildren.delete(childId);
			}
		}),
		/**
		* If the presence of a child affects the layout of the components around it,
		* we want to make a new context value to ensure they get re-rendered
		* so they can detect that layout change.
		*/
		presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent, memoizedOnExitComplete]
	);
	(0, import_react$1.useMemo)(() => {
		presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
	}, [isPresent]);
	/**
	* If there's no `motion` components to fire exit animations, we want to remove this
	* component immediately.
	*/
	import_react$1.useEffect(() => {
		!isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
	}, [isPresent]);
	if (mode === "popLayout") children = (0, import_jsx_runtime.jsx)(PopChild, {
		isPresent,
		children
	});
	return (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
		value: context,
		children
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
	const filtered = [];
	import_react$1.Children.forEach(children, (child) => {
		if ((0, import_react$1.isValidElement)(child)) filtered.push(child);
	});
	return filtered;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
/**
* `AnimatePresence` enables the animation of components that have been removed from the tree.
*
* When adding/removing more than a single child, every child **must** be given a unique `key` prop.
*
* Any `motion` components that have an `exit` property defined will animate out when removed from
* the tree.
*
* ```jsx
* import { motion, AnimatePresence } from 'framer-motion'
*
* export const Items = ({ items }) => (
*   <AnimatePresence>
*     {items.map(item => (
*       <motion.div
*         key={item.id}
*         initial={{ opacity: 0 }}
*         animate={{ opacity: 1 }}
*         exit={{ opacity: 0 }}
*       />
*     ))}
*   </AnimatePresence>
* )
* ```
*
* You can sequence exit animations throughout a tree using variants.
*
* If a child contains multiple `motion` components with `exit` props, it will only unmount the child
* once all `motion` components have finished animating out. Likewise, any components using
* `usePresence` all need to call `safeToRemove`.
*
* @public
*/
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false }) => {
	const [isParentPresent, safeToRemove] = usePresence(propagate);
	/**
	* Filter any children that aren't ReactElements. We can only track components
	* between renders with a props.key.
	*/
	const presentChildren = (0, import_react$1.useMemo)(() => onlyElements(children), [children]);
	/**
	* Track the keys of the currently rendered children. This is used to
	* determine which children are exiting.
	*/
	const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
	/**
	* If `initial={false}` we only want to pass this to components in the first render.
	*/
	const isInitialRender = (0, import_react$1.useRef)(true);
	/**
	* A ref containing the currently present children. When all exit animations
	* are complete, we use this to re-render the component with the latest children
	* *committed* rather than the latest children *rendered*.
	*/
	const pendingPresentChildren = (0, import_react$1.useRef)(presentChildren);
	/**
	* Track which exiting children have finished animating out.
	*/
	const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
	/**
	* Save children to render as React state. To ensure this component is concurrent-safe,
	* we check for exiting children via an effect.
	*/
	const [diffedChildren, setDiffedChildren] = (0, import_react$1.useState)(presentChildren);
	const [renderedChildren, setRenderedChildren] = (0, import_react$1.useState)(presentChildren);
	useIsomorphicLayoutEffect(() => {
		isInitialRender.current = false;
		pendingPresentChildren.current = presentChildren;
		/**
		* Update complete status of exiting children.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const key = getChildKey(renderedChildren[i]);
			if (!presentKeys.includes(key)) {
				if (exitComplete.get(key) !== true) exitComplete.set(key, false);
			} else exitComplete.delete(key);
		}
	}, [
		renderedChildren,
		presentKeys.length,
		presentKeys.join("-")
	]);
	const exitingChildren = [];
	if (presentChildren !== diffedChildren) {
		let nextChildren = [...presentChildren];
		/**
		* Loop through all the currently rendered components and decide which
		* are exiting.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const child = renderedChildren[i];
			const key = getChildKey(child);
			if (!presentKeys.includes(key)) {
				nextChildren.splice(i, 0, child);
				exitingChildren.push(child);
			}
		}
		/**
		* If we're in "wait" mode, and we have exiting children, we want to
		* only render these until they've all exited.
		*/
		if (mode === "wait" && exitingChildren.length) nextChildren = exitingChildren;
		setRenderedChildren(onlyElements(nextChildren));
		setDiffedChildren(presentChildren);
		/**
		* Early return to ensure once we've set state with the latest diffed
		* children, we can immediately re-render.
		*/
		return;
	}
	/**
	* If we've been provided a forceRender function by the LayoutGroupContext,
	* we can use it to force a re-render amongst all surrounding components once
	* all components have finished animating out.
	*/
	const { forceRender } = (0, import_react$1.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
		const key = getChildKey(child);
		const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
		const onExit = () => {
			if (exitComplete.has(key)) exitComplete.set(key, true);
			else return;
			let isEveryExitComplete = true;
			exitComplete.forEach((isExitComplete) => {
				if (!isExitComplete) isEveryExitComplete = false;
			});
			if (isEveryExitComplete) {
				forceRender === null || forceRender === void 0 || forceRender();
				setRenderedChildren(pendingPresentChildren.current);
				propagate && (safeToRemove === null || safeToRemove === void 0 || safeToRemove());
				onExitComplete && onExitComplete();
			}
		};
		return (0, import_jsx_runtime.jsx)(PresenceChild, {
			isPresent,
			initial: !isInitialRender.current || initial ? void 0 : false,
			custom: isPresent ? void 0 : custom,
			presenceAffectsLayout,
			mode,
			onExitComplete: isPresent ? void 0 : onExit,
			children: child
		}, key);
	}) });
};
//#endregion
//#region node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
/**
* Used in conjunction with the `m` component to reduce bundle size.
*
* `m` is a version of the `motion` component that only loads functionality
* critical for the initial render.
*
* `LazyMotion` can then be used to either synchronously or asynchronously
* load animation and gesture support.
*
* ```jsx
* // Synchronous loading
* import { LazyMotion, m, domAnimation } from "framer-motion"
*
* function App() {
*   return (
*     <LazyMotion features={domAnimation}>
*       <m.div animate={{ scale: 2 }} />
*     </LazyMotion>
*   )
* }
*
* // Asynchronous loading
* import { LazyMotion, m } from "framer-motion"
*
* function App() {
*   return (
*     <LazyMotion features={() => import('./path/to/domAnimation')}>
*       <m.div animate={{ scale: 2 }} />
*     </LazyMotion>
*   )
* }
* ```
*
* @public
*/
function LazyMotion({ children, features, strict = false }) {
	const [, setIsLoaded] = (0, import_react$1.useState)(!isLazyBundle(features));
	const loadedRenderer = (0, import_react$1.useRef)(void 0);
	/**
	* If this is a synchronous load, load features immediately
	*/
	if (!isLazyBundle(features)) {
		const { renderer, ...loadedFeatures } = features;
		loadedRenderer.current = renderer;
		loadFeatures(loadedFeatures);
	}
	(0, import_react$1.useEffect)(() => {
		if (isLazyBundle(features)) features().then(({ renderer, ...loadedFeatures }) => {
			loadFeatures(loadedFeatures);
			loadedRenderer.current = renderer;
			setIsLoaded(true);
		});
	}, []);
	return (0, import_jsx_runtime.jsx)(LazyContext.Provider, {
		value: {
			renderer: loadedRenderer.current,
			strict
		},
		children
	});
}
function isLazyBundle(features) {
	return typeof features === "function";
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/m/proxy.mjs
var m = /* @__PURE__ */ createDOMMotionComponentProxy(/* @__PURE__ */ createMotionComponentFactory());
//#endregion
//#region node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs
function forwardRef(component) {
	return (0, import_react$1.forwardRef)(component);
}
var mapPropsVariants = (props, variantKeys, removeVariantProps = true) => {
	if (!variantKeys) return [props, {}];
	const picked = variantKeys.reduce((acc, key) => {
		if (key in props) return {
			...acc,
			[key]: props[key]
		};
		else return acc;
	}, {});
	if (removeVariantProps) return [Object.keys(props).filter((key) => !variantKeys.includes(key)).reduce((acc, key) => ({
		...acc,
		[key]: props[key]
	}), {}), picked];
	else return [props, picked];
};
//#endregion
//#region node_modules/@nextui-org/theme/dist/chunk-GIXI35A3.mjs
var COMMON_UNITS = [
	"small",
	"medium",
	"large"
];
var twMergeConfig = {
	theme: {
		opacity: ["disabled"],
		spacing: ["divider"],
		borderWidth: COMMON_UNITS,
		borderRadius: COMMON_UNITS
	},
	classGroups: {
		shadow: [{ shadow: COMMON_UNITS }],
		"font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
		"bg-image": [
			"bg-stripe-gradient-default",
			"bg-stripe-gradient-primary",
			"bg-stripe-gradient-secondary",
			"bg-stripe-gradient-success",
			"bg-stripe-gradient-warning",
			"bg-stripe-gradient-danger"
		]
	}
}, l = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, u = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, x = (e, o) => JSON.stringify(e) === JSON.stringify(o);
function i(e, o) {
	e.forEach(function(r) {
		Array.isArray(r) ? i(r, o) : o.push(r);
	});
}
function y(e) {
	let o = [];
	return i(e, o), o;
}
var a = (...e) => y(e).filter(Boolean), p = (e, o) => {
	let r = {}, c = Object.keys(e), f = Object.keys(o);
	for (let t of c) if (f.includes(t)) {
		let s = e[t], n = o[t];
		typeof s == "object" && typeof n == "object" ? r[t] = p(s, n) : Array.isArray(s) || Array.isArray(n) ? r[t] = a(n, s) : r[t] = n + " " + s;
	} else r[t] = e[t];
	for (let t of f) c.includes(t) || (r[t] = o[t]);
	return r;
}, g = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
function twJoin() {
	var index = 0;
	var argument;
	var resolvedValue;
	var string = "";
	while (index < arguments.length) if (argument = arguments[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
}
function toValue(mix) {
	if (typeof mix === "string") return mix;
	var resolvedValue;
	var string = "";
	for (var k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
	var classMap = createClassMap(config);
	var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
	function getClassGroupId(className) {
		var classParts = className.split(CLASS_PART_SEPARATOR);
		if (classParts[0] === "" && classParts.length !== 1) classParts.shift();
		return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
	}
	function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
		var conflicts = conflictingClassGroups[classGroupId] || [];
		if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
		return conflicts;
	}
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
}
function getGroupRecursive(classParts, classPartObject) {
	if (classParts.length === 0) return classPartObject.classGroupId;
	var currentClassPart = classParts[0];
	var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
	if (classGroupFromNextClassPart) return classGroupFromNextClassPart;
	if (classPartObject.validators.length === 0) return;
	var classRest = classParts.join(CLASS_PART_SEPARATOR);
	return classPartObject.validators.find(function(_ref) {
		var validator = _ref.validator;
		return validator(classRest);
	})?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
	if (arbitraryPropertyRegex.test(className)) {
		var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
		var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
		if (property) return "arbitrary.." + property;
	}
}
/**
* Exported for testing only
*/
function createClassMap(config) {
	var theme = config.theme, prefix = config.prefix;
	var classMap = {
		nextPart: /* @__PURE__ */ new Map(),
		validators: []
	};
	getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix).forEach(function(_ref2) {
		var classGroupId = _ref2[0], classGroup = _ref2[1];
		processClassesRecursively(classGroup, classMap, classGroupId, theme);
	});
	return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
	classGroup.forEach(function(classDefinition) {
		if (typeof classDefinition === "string") {
			var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
			classPartObjectToEdit.classGroupId = classGroupId;
			return;
		}
		if (typeof classDefinition === "function") {
			if (isThemeGetter(classDefinition)) {
				processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
				return;
			}
			classPartObject.validators.push({
				validator: classDefinition,
				classGroupId
			});
			return;
		}
		Object.entries(classDefinition).forEach(function(_ref3) {
			var key = _ref3[0], classGroup = _ref3[1];
			processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
		});
	});
}
function getPart(classPartObject, path) {
	var currentClassPartObject = classPartObject;
	path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
		if (!currentClassPartObject.nextPart.has(pathPart)) currentClassPartObject.nextPart.set(pathPart, {
			nextPart: /* @__PURE__ */ new Map(),
			validators: []
		});
		currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
	});
	return currentClassPartObject;
}
function isThemeGetter(func) {
	return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
	if (!prefix) return classGroupEntries;
	return classGroupEntries.map(function(_ref4) {
		return [_ref4[0], _ref4[1].map(function(classDefinition) {
			if (typeof classDefinition === "string") return prefix + classDefinition;
			if (typeof classDefinition === "object") return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
				var key = _ref5[0], value = _ref5[1];
				return [prefix + key, value];
			}));
			return classDefinition;
		})];
	});
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/lru-cache.mjs
function createLruCache(maxCacheSize) {
	if (maxCacheSize < 1) return {
		get: function get() {},
		set: function set() {}
	};
	var cacheSize = 0;
	var cache = /* @__PURE__ */ new Map();
	var previousCache = /* @__PURE__ */ new Map();
	function update(key, value) {
		cache.set(key, value);
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = /* @__PURE__ */ new Map();
		}
	}
	return {
		get: function get(key) {
			var value = cache.get(key);
			if (value !== void 0) return value;
			if ((value = previousCache.get(key)) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set: function set(key, value) {
			if (cache.has(key)) cache.set(key, value);
			else update(key, value);
		}
	};
}
function createSplitModifiers(config) {
	var separator = config.separator || ":";
	var isSeparatorSingleCharacter = separator.length === 1;
	var firstSeparatorCharacter = separator[0];
	var separatorLength = separator.length;
	return function splitModifiers(className) {
		var modifiers = [];
		var bracketDepth = 0;
		var modifierStart = 0;
		var postfixModifierPosition;
		for (var index = 0; index < className.length; index++) {
			var currentCharacter = className[index];
			if (bracketDepth === 0) {
				if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + separatorLength;
					continue;
				}
				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}
			if (currentCharacter === "[") bracketDepth++;
			else if (currentCharacter === "]") bracketDepth--;
		}
		var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
		var hasImportantModifier = baseClassNameWithImportantModifier.startsWith("!");
		return {
			modifiers,
			hasImportantModifier,
			baseClassName: hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier,
			maybePostfixModifierPosition: postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0
		};
	};
}
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
function sortModifiers(modifiers) {
	if (modifiers.length <= 1) return modifiers;
	var sortedModifiers = [];
	var unsortedModifiers = [];
	modifiers.forEach(function(modifier) {
		if (modifier[0] === "[") {
			sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
			unsortedModifiers = [];
		} else unsortedModifiers.push(modifier);
	});
	sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
	return sortedModifiers;
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/config-utils.mjs
function createConfigUtils(config) {
	return {
		cache: createLruCache(config.cacheSize),
		splitModifiers: createSplitModifiers(config),
		...createClassUtils(config)
	};
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/merge-classlist.mjs
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
	var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	var classGroupsInConflict = /* @__PURE__ */ new Set();
	return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
		var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
		var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
		var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
		if (!classGroupId) {
			if (!maybePostfixModifierPosition) return {
				isTailwindClass: false,
				originalClassName
			};
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) return {
				isTailwindClass: false,
				originalClassName
			};
			hasPostfixModifier = false;
		}
		var variantModifier = sortModifiers(modifiers).join(":");
		return {
			isTailwindClass: true,
			modifierId: hasImportantModifier ? variantModifier + "!" : variantModifier,
			classGroupId,
			originalClassName,
			hasPostfixModifier
		};
	}).reverse().filter(function(parsed) {
		if (!parsed.isTailwindClass) return true;
		var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
		var classId = modifierId + classGroupId;
		if (classGroupsInConflict.has(classId)) return false;
		classGroupsInConflict.add(classId);
		getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
			return classGroupsInConflict.add(modifierId + group);
		});
		return true;
	}).reverse().map(function(parsed) {
		return parsed.originalClassName;
	}).join(" ");
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs
function createTailwindMerge() {
	for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) createConfig[_key] = arguments[_key];
	var configUtils;
	var cacheGet;
	var cacheSet;
	var functionToCall = initTailwindMerge;
	function initTailwindMerge(classList) {
		var firstCreateConfig = createConfig[0];
		configUtils = createConfigUtils(createConfig.slice(1).reduce(function(previousConfig, createConfigCurrent) {
			return createConfigCurrent(previousConfig);
		}, firstCreateConfig()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	}
	function tailwindMerge(classList) {
		var cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		var result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	}
	return function callTailwindMerge() {
		return functionToCall(twJoin.apply(null, arguments));
	};
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
	var themeGetter = function themeGetter(theme) {
		return theme[key] || [];
	};
	themeGetter.isThemeGetter = true;
	return themeGetter;
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set([
	"px",
	"full",
	"screen"
]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
	return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
	return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isArbitrarySize(value) {
	return getIsArbitraryValue(value, "size", isNever);
}
function isArbitraryPosition(value) {
	return getIsArbitraryValue(value, "position", isNever);
}
function isArbitraryUrl(value) {
	return getIsArbitraryValue(value, "url", isUrl);
}
function isArbitraryNumber(value) {
	return getIsArbitraryValue(value, "number", isNumber);
}
function isNumber(value) {
	return !Number.isNaN(Number(value));
}
function isPercent(value) {
	return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isInteger(value) {
	return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
function isArbitraryValue(value) {
	return arbitraryValueRegex.test(value);
}
function isAny() {
	return true;
}
function isTshirtSize(value) {
	return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
	return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
	var result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return result[1] === label;
		return testValue(result[2]);
	}
	return false;
}
function isLengthOnly(value) {
	return lengthUnitRegex.test(value);
}
function isNever() {
	return false;
}
function isUrl(value) {
	return value.startsWith("url(");
}
function isIntegerOnly(value) {
	return Number.isInteger(Number(value));
}
function isShadow(value) {
	return shadowRegex.test(value);
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/default-config.mjs
function getDefaultConfig() {
	var colors = fromTheme("colors");
	var spacing = fromTheme("spacing");
	var blur = fromTheme("blur");
	var brightness = fromTheme("brightness");
	var borderColor = fromTheme("borderColor");
	var borderRadius = fromTheme("borderRadius");
	var borderSpacing = fromTheme("borderSpacing");
	var borderWidth = fromTheme("borderWidth");
	var contrast = fromTheme("contrast");
	var grayscale = fromTheme("grayscale");
	var hueRotate = fromTheme("hueRotate");
	var invert = fromTheme("invert");
	var gap = fromTheme("gap");
	var gradientColorStops = fromTheme("gradientColorStops");
	var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
	var inset = fromTheme("inset");
	var margin = fromTheme("margin");
	var opacity = fromTheme("opacity");
	var padding = fromTheme("padding");
	var saturate = fromTheme("saturate");
	var scale = fromTheme("scale");
	var sepia = fromTheme("sepia");
	var skew = fromTheme("skew");
	var space = fromTheme("space");
	var translate = fromTheme("translate");
	var getOverscroll = function getOverscroll() {
		return [
			"auto",
			"contain",
			"none"
		];
	};
	var getOverflow = function getOverflow() {
		return [
			"auto",
			"hidden",
			"clip",
			"visible",
			"scroll"
		];
	};
	var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary() {
		return [
			"auto",
			isArbitraryValue,
			spacing
		];
	};
	var getSpacingWithArbitrary = function getSpacingWithArbitrary() {
		return [isArbitraryValue, spacing];
	};
	var getLengthWithEmpty = function getLengthWithEmpty() {
		return ["", isLength];
	};
	var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
		return [
			"auto",
			isNumber,
			isArbitraryValue
		];
	};
	var getPositions = function getPositions() {
		return [
			"bottom",
			"center",
			"left",
			"left-bottom",
			"left-top",
			"right",
			"right-bottom",
			"right-top",
			"top"
		];
	};
	var getLineStyles = function getLineStyles() {
		return [
			"solid",
			"dashed",
			"dotted",
			"double",
			"none"
		];
	};
	var getBlendModes = function getBlendModes() {
		return [
			"normal",
			"multiply",
			"screen",
			"overlay",
			"darken",
			"lighten",
			"color-dodge",
			"color-burn",
			"hard-light",
			"soft-light",
			"difference",
			"exclusion",
			"hue",
			"saturation",
			"color",
			"luminosity",
			"plus-lighter"
		];
	};
	var getAlign = function getAlign() {
		return [
			"start",
			"end",
			"center",
			"between",
			"around",
			"evenly",
			"stretch"
		];
	};
	var getZeroAndEmpty = function getZeroAndEmpty() {
		return [
			"",
			"0",
			isArbitraryValue
		];
	};
	var getBreaks = function getBreaks() {
		return [
			"auto",
			"avoid",
			"all",
			"avoid-page",
			"page",
			"left",
			"right",
			"column"
		];
	};
	var getNumber = function getNumber() {
		return [isNumber, isArbitraryNumber];
	};
	var getNumberAndArbitrary = function getNumberAndArbitrary() {
		return [isNumber, isArbitraryValue];
	};
	return {
		cacheSize: 500,
		theme: {
			colors: [isAny],
			spacing: [isLength],
			blur: [
				"none",
				"",
				isTshirtSize,
				isArbitraryValue
			],
			brightness: getNumber(),
			borderColor: [colors],
			borderRadius: [
				"none",
				"",
				"full",
				isTshirtSize,
				isArbitraryValue
			],
			borderSpacing: getSpacingWithArbitrary(),
			borderWidth: getLengthWithEmpty(),
			contrast: getNumber(),
			grayscale: getZeroAndEmpty(),
			hueRotate: getNumberAndArbitrary(),
			invert: getZeroAndEmpty(),
			gap: getSpacingWithArbitrary(),
			gradientColorStops: [colors],
			gradientColorStopPositions: [isPercent, isArbitraryLength],
			inset: getSpacingWithAutoAndArbitrary(),
			margin: getSpacingWithAutoAndArbitrary(),
			opacity: getNumber(),
			padding: getSpacingWithArbitrary(),
			saturate: getNumber(),
			scale: getNumber(),
			sepia: getZeroAndEmpty(),
			skew: getNumberAndArbitrary(),
			space: getSpacingWithArbitrary(),
			translate: getSpacingWithArbitrary()
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				"video",
				isArbitraryValue
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			*/
			container: ["container"],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [isTshirtSize] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": getBreaks() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": getBreaks() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			"float": [{ "float": [
				"right",
				"left",
				"none"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: [].concat(getPositions(), [isArbitraryValue]) }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: getOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": getOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": getOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: getOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": getOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": getOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Top / Right / Bottom / Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: [inset] }],
			/**
			* Right / Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": [inset] }],
			/**
			* Top / Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": [inset] }],
			/**
			* Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			start: [{ start: [inset] }],
			/**
			* End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			end: [{ end: [inset] }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: [inset] }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: [inset] }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: [inset] }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: [inset] }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: ["auto", isInteger] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: getSpacingWithAutoAndArbitrary() }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"wrap",
				"wrap-reverse",
				"nowrap"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				"1",
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: getZeroAndEmpty() }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: getZeroAndEmpty() }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				"first",
				"last",
				"none",
				isInteger
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": [isAny] }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: [
				"auto",
				{ span: ["full", isInteger] },
				isArbitraryValue
			] }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": getNumberWithAutoAndArbitrary() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": getNumberWithAutoAndArbitrary() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": [isAny] }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: [
				"auto",
				{ span: [isInteger] },
				isArbitraryValue
			] }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": getNumberWithAutoAndArbitrary() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": getNumberWithAutoAndArbitrary() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": [
				"auto",
				"min",
				"max",
				"fr",
				isArbitraryValue
			] }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": [
				"auto",
				"min",
				"max",
				"fr",
				isArbitraryValue
			] }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: [gap] }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": [gap] }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": [gap] }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: ["normal"].concat(getAlign()) }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [
				"start",
				"end",
				"center",
				"stretch"
			] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal"].concat(getAlign(), ["baseline"]) }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				"start",
				"end",
				"center",
				"stretch",
				"baseline"
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": [].concat(getAlign(), ["baseline"]) }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: [padding] }],
			/**
			* Padding X
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: [padding] }],
			/**
			* Padding Y
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: [padding] }],
			/**
			* Padding Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: [padding] }],
			/**
			* Padding End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: [padding] }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: [padding] }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: [padding] }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: [padding] }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: [padding] }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: [margin] }],
			/**
			* Margin X
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: [margin] }],
			/**
			* Margin Y
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: [margin] }],
			/**
			* Margin Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: [margin] }],
			/**
			* Margin End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: [margin] }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: [margin] }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: [margin] }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: [margin] }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: [margin] }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/space
			*/
			"space-x": [{ "space-x": [space] }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/space
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/space
			*/
			"space-y": [{ "space-y": [space] }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/space
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				"auto",
				"min",
				"max",
				"fit",
				isArbitraryValue,
				spacing
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				"min",
				"max",
				"fit",
				isArbitraryValue,
				isLength
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				"0",
				"none",
				"full",
				"min",
				"max",
				"fit",
				"prose",
				{ screen: [isTshirtSize] },
				isTshirtSize,
				isArbitraryValue
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				isArbitraryValue,
				spacing,
				"auto",
				"min",
				"max",
				"fit"
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"min",
				"max",
				"fit",
				isArbitraryValue,
				isLength
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				isArbitraryValue,
				spacing,
				"min",
				"max",
				"fit"
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				isTshirtSize,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black",
				isArbitraryNumber
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [isAny] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest",
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				"none",
				isNumber,
				isArbitraryNumber
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose",
				isArbitraryValue,
				isLength
			] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": ["none", isArbitraryValue] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"none",
				"disc",
				"decimal",
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: [colors] }],
			/**
			* Placeholder Opacity
			* @see https://tailwindcss.com/docs/placeholder-opacity
			*/
			"placeholder-opacity": [{ "placeholder-opacity": [opacity] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: [colors] }],
			/**
			* Text Opacity
			* @see https://tailwindcss.com/docs/text-opacity
			*/
			"text-opacity": [{ "text-opacity": [opacity] }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [].concat(getLineStyles(), ["wavy"]) }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				"auto",
				"from-font",
				isLength
			] }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				"auto",
				isArbitraryValue,
				isLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: [colors] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: getSpacingWithArbitrary() }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			"break": [{ "break": [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: ["none", isArbitraryValue] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Opacity
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/background-opacity
			*/
			"bg-opacity": [{ "bg-opacity": [opacity] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: [].concat(getPositions(), [isArbitraryPosition]) }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: ["no-repeat", { repeat: [
				"",
				"x",
				"y",
				"round",
				"space"
			] }] }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: [
				"auto",
				"cover",
				"contain",
				isArbitrarySize
			] }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{ "gradient-to": [
					"t",
					"tr",
					"r",
					"br",
					"b",
					"bl",
					"l",
					"tl"
				] },
				isArbitraryUrl
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: [colors] }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: [gradientColorStopPositions] }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: [gradientColorStopPositions] }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: [gradientColorStopPositions] }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: [gradientColorStops] }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: [gradientColorStops] }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: [gradientColorStops] }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: [borderRadius] }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": [borderRadius] }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": [borderRadius] }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": [borderRadius] }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": [borderRadius] }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": [borderRadius] }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": [borderRadius] }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": [borderRadius] }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": [borderRadius] }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": [borderRadius] }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": [borderRadius] }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": [borderRadius] }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": [borderRadius] }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": [borderRadius] }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": [borderRadius] }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: [borderWidth] }],
			/**
			* Border Width X
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": [borderWidth] }],
			/**
			* Border Width Y
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": [borderWidth] }],
			/**
			* Border Width Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": [borderWidth] }],
			/**
			* Border Width End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": [borderWidth] }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": [borderWidth] }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": [borderWidth] }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": [borderWidth] }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": [borderWidth] }],
			/**
			* Border Opacity
			* @see https://tailwindcss.com/docs/border-opacity
			*/
			"border-opacity": [{ "border-opacity": [opacity] }],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [].concat(getLineStyles(), ["hidden"]) }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-x": [{ "divide-x": [borderWidth] }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-y": [{ "divide-y": [borderWidth] }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/divide-width
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Divide Opacity
			* @see https://tailwindcss.com/docs/divide-opacity
			*/
			"divide-opacity": [{ "divide-opacity": [opacity] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/divide-style
			*/
			"divide-style": [{ divide: getLineStyles() }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: [borderColor] }],
			/**
			* Border Color X
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": [borderColor] }],
			/**
			* Border Color Y
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": [borderColor] }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": [borderColor] }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": [borderColor] }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": [borderColor] }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": [borderColor] }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: [borderColor] }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [""].concat(getLineStyles()) }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [isArbitraryValue, isLength] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [isLength] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: [colors] }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/ring-width
			*/
			"ring-w": [{ ring: getLengthWithEmpty() }],
			/**
			* Ring Width Inset
			* @see https://tailwindcss.com/docs/ring-width
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/ring-color
			*/
			"ring-color": [{ ring: [colors] }],
			/**
			* Ring Opacity
			* @see https://tailwindcss.com/docs/ring-opacity
			*/
			"ring-opacity": [{ "ring-opacity": [opacity] }],
			/**
			* Ring Offset Width
			* @see https://tailwindcss.com/docs/ring-offset-width
			*/
			"ring-offset-w": [{ "ring-offset": [isLength] }],
			/**
			* Ring Offset Color
			* @see https://tailwindcss.com/docs/ring-offset-color
			*/
			"ring-offset-color": [{ "ring-offset": [colors] }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				isTshirtSize,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow-color
			*/
			"shadow-color": [{ shadow: [isAny] }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [opacity] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": getBlendModes() }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": getBlendModes() }],
			/**
			* Filter
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: ["", "none"] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: [blur] }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [brightness] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [contrast] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				isTshirtSize,
				isArbitraryValue
			] }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [grayscale] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [hueRotate] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [invert] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [saturate] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [sepia] }],
			/**
			* Backdrop Filter
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": [blur] }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [brightness] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [contrast] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [grayscale] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [hueRotate] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [invert] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [opacity] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [saturate] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [sepia] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": [borderSpacing] }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": [borderSpacing] }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": [borderSpacing] }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Tranisition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"none",
				"all",
				"",
				"colors",
				"opacity",
				"shadow",
				"transform",
				isArbitraryValue
			] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: getNumberAndArbitrary() }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"in",
				"out",
				"in-out",
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: getNumberAndArbitrary() }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				"spin",
				"ping",
				"pulse",
				"bounce",
				isArbitraryValue
			] }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				"",
				"gpu",
				"none"
			] }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: [scale] }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": [scale] }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": [scale] }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: [isInteger, isArbitraryValue] }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": [translate] }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": [translate] }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": [skew] }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": [skew] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: [
				"center",
				"top",
				"top-right",
				"right",
				"bottom-right",
				"bottom",
				"bottom-left",
				"left",
				"top-left",
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: ["auto", colors] }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: ["appearance-none"],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryValue
			] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: [colors] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["none", "auto"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"y",
				"x",
				""
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin X
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin Y
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": getSpacingWithArbitrary() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding X
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding Y
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": getSpacingWithArbitrary() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": getSpacingWithArbitrary() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"pinch-zoom",
				"manipulation",
				{ pan: [
					"x",
					"left",
					"right",
					"y",
					"up",
					"down"
				] }
			] }],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: [colors, "none"] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [isLength, isArbitraryNumber] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: [colors, "none"] }],
			/**
			* Screen Readers
			* @see https://tailwindcss.com/docs/screen-readers
			*/
			sr: ["sr-only", "not-sr-only"]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-s",
				"border-w-e",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] }
	};
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/merge-configs.mjs
/**
* @param baseConfig Config where other config will be merged into. This object will be mutated.
* @param configExtension Partial config to merge into the `baseConfig`.
*/
function mergeConfigs(baseConfig, configExtension) {
	for (var key in configExtension) mergePropertyRecursively(baseConfig, key, configExtension[key]);
	return baseConfig;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var overrideTypes = /* @__PURE__ */ new Set([
	"string",
	"number",
	"boolean"
]);
function mergePropertyRecursively(baseObject, mergeKey, mergeValue) {
	if (!hasOwnProperty.call(baseObject, mergeKey) || overrideTypes.has(typeof mergeValue) || mergeValue === null) {
		baseObject[mergeKey] = mergeValue;
		return;
	}
	if (Array.isArray(mergeValue) && Array.isArray(baseObject[mergeKey])) {
		baseObject[mergeKey] = baseObject[mergeKey].concat(mergeValue);
		return;
	}
	if (typeof mergeValue === "object" && typeof baseObject[mergeKey] === "object") {
		if (baseObject[mergeKey] === null) {
			baseObject[mergeKey] = mergeValue;
			return;
		}
		for (var nextKey in mergeValue) mergePropertyRecursively(baseObject[mergeKey], nextKey, mergeValue[nextKey]);
	}
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/extend-tailwind-merge.mjs
function extendTailwindMerge(configExtension) {
	for (var _len = arguments.length, createConfig = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) createConfig[_key - 1] = arguments[_key];
	return typeof configExtension === "function" ? createTailwindMerge.apply(void 0, [getDefaultConfig, configExtension].concat(createConfig)) : createTailwindMerge.apply(void 0, [function() {
		return mergeConfigs(getDefaultConfig(), configExtension);
	}].concat(createConfig));
}
//#endregion
//#region node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/tw-merge.mjs
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig), se = {
	twMerge: !0,
	twMergeConfig: {},
	responsiveVariants: !1
}, _ = (s) => s || void 0, N = (...s) => _(y(s).filter(Boolean).join(" ")), q = null, M = {}, F = !1, w = (...s) => (b$1) => b$1.twMerge ? ((!q || F) && (F = !1, q = u(M) ? twMerge : extendTailwindMerge(M)), _(q(N(s)))) : N(s), Z = (s, b) => {
	for (let e in b) s.hasOwnProperty(e) ? s[e] = N(s[e], b[e]) : s[e] = b[e];
	return s;
}, ie = (s, b$1) => {
	let { extend: e = null, slots: j = {}, variants: U = {}, compoundVariants: C = [], compoundSlots: V = [], defaultVariants: W = {} } = s, m = {
		...se,
		...b$1
	}, S = e != null && e.base ? N(e.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e != null && e.variants && !u(e.variants) ? p(U, e.variants) : U, A = e != null && e.defaultVariants && !u(e.defaultVariants) ? {
		...e.defaultVariants,
		...W
	} : W;
	!u(m.twMergeConfig) && !x(m.twMergeConfig, M) && (F = !0, M = m.twMergeConfig);
	let O = u(e == null ? void 0 : e.slots), $ = u(j) ? {} : {
		base: N(s == null ? void 0 : s.base, O && (e == null ? void 0 : e.base)),
		...j
	}, h$1 = O ? $ : Z({ ...e == null ? void 0 : e.slots }, u($) ? { base: s == null ? void 0 : s.base } : $), v = (l$1) => {
		if (u(g$1) && u(j) && O) return w(S, l$1 == null ? void 0 : l$1.class, l$1 == null ? void 0 : l$1.className)(m);
		if (C && !Array.isArray(C)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);
		if (V && !Array.isArray(V)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof V}`);
		let K = (t, n, a = [], i) => {
			let r = a;
			if (typeof n == "string") r = r.concat(g(n).split(" ").map((c) => `${t}:${c}`));
			else if (Array.isArray(n)) r = r.concat(n.reduce((c, f) => c.concat(`${t}:${f}`), []));
			else if (typeof n == "object" && typeof i == "string") {
				for (let c in n) if (n.hasOwnProperty(c) && c === i) {
					let f = n[c];
					if (f && typeof f == "string") {
						let o = g(f);
						r[i] ? r[i] = r[i].concat(o.split(" ").map((u) => `${t}:${u}`)) : r[i] = o.split(" ").map((u) => `${t}:${u}`);
					} else Array.isArray(f) && f.length > 0 && (r[i] = f.reduce((o, u) => o.concat(`${t}:${u}`), []));
				}
			}
			return r;
		}, z = (t, n = g$1, a$1 = null, i = null) => {
			var J;
			let r = n[t];
			if (!r || u(r)) return null;
			let c = (J = i == null ? void 0 : i[t]) != null ? J : l$1 == null ? void 0 : l$1[t];
			if (c === null) return null;
			let f = l(c), o = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, u$1 = A == null ? void 0 : A[t], d = [];
			if (typeof f == "object" && o) for (let [k, L] of Object.entries(f)) {
				let ae = r[L];
				if (k === "initial") {
					u$1 = L;
					continue;
				}
				Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(k) || (d = K(k, ae, d, a$1));
			}
			let T = r[f] || r[l(u$1)];
			return typeof d == "object" && typeof a$1 == "string" && d[a$1] ? Z(d, T) : d.length > 0 ? (d.push(T), d) : T;
		}, P = () => g$1 ? Object.keys(g$1).map((t) => z(t, g$1)) : null, p = (t, n) => {
			if (!g$1 || typeof g$1 != "object") return null;
			let a = new Array();
			for (let i in g$1) {
				let r = z(i, g$1, t, n), c = t === "base" && typeof r == "string" ? r : r && r[t];
				c && (a[a.length] = c);
			}
			return a;
		}, D = {};
		for (let t in l$1) l$1[t] !== void 0 && (D[t] = l$1[t]);
		let G = (t, n) => {
			var i;
			let a = typeof (l$1 == null ? void 0 : l$1[t]) == "object" ? { [t]: (i = l$1[t]) == null ? void 0 : i.initial } : {};
			return {
				...A,
				...D,
				...a,
				...n
			};
		}, H = (t = [], n) => {
			let a = [];
			for (let { class: i, className: r, ...c } of t) {
				let f = !0;
				for (let [o, u] of Object.entries(c)) {
					let d = G(o, n);
					if (Array.isArray(u)) {
						if (!u.includes(d[o])) {
							f = !1;
							break;
						}
					} else if (d[o] !== u) {
						f = !1;
						break;
					}
				}
				f && (i && a.push(i), r && a.push(r));
			}
			return a;
		}, I = (t) => {
			let n = H(C, t);
			return a(H(e == null ? void 0 : e.compoundVariants, t), n);
		}, ee = (t) => {
			let n = I(t);
			if (!Array.isArray(n)) return n;
			let a = {};
			for (let i of n) if (typeof i == "string" && (a.base = w(a.base, i)(m)), typeof i == "object") for (let [r, c] of Object.entries(i)) a[r] = w(a[r], c)(m);
			return a;
		}, te = (t) => {
			if (V.length < 1) return null;
			let n = {};
			for (let { slots: a = [], class: i, className: r, ...c } of V) {
				if (!u(c)) {
					let f = !0;
					for (let o of Object.keys(c)) {
						let u = G(o, t)[o];
						if (u === void 0 || (Array.isArray(c[o]) ? !c[o].includes(u) : c[o] !== u)) {
							f = !1;
							break;
						}
					}
					if (!f) continue;
				}
				for (let f of a) n[f] = n[f] || [], n[f].push([i, r]);
			}
			return n;
		};
		if (!u(j) || !O) {
			let t = {};
			if (typeof h$1 == "object" && !u(h$1)) for (let n of Object.keys(h$1)) t[n] = (a) => {
				var i, r;
				return w(h$1[n], p(n, a), ((i = ee(a)) != null ? i : [])[n], ((r = te(a)) != null ? r : [])[n], a == null ? void 0 : a.class, a == null ? void 0 : a.className)(m);
			};
			return t;
		}
		return w(S, P(), I(), l$1 == null ? void 0 : l$1.class, l$1 == null ? void 0 : l$1.className)(m);
	}, x$1 = () => {
		if (!(!g$1 || typeof g$1 != "object")) return Object.keys(g$1);
	};
	return v.variantKeys = x$1(), v.extend = e, v.base = S, v.slots = h$1, v.variants = g$1, v.defaultVariants = A, v.compoundSlots = V, v.compoundVariants = C, v;
};
//#endregion
//#region node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs
var tv = (options, config) => {
	var _a, _b, _c;
	return ie(options, {
		...config,
		twMerge: (_a = config == null ? void 0 : config.twMerge) != null ? _a : true,
		twMergeConfig: {
			...config == null ? void 0 : config.twMergeConfig,
			theme: {
				...(_b = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _b.theme,
				...twMergeConfig.theme
			},
			classGroups: {
				...(_c = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _c.classGroups,
				...twMergeConfig.classGroups
			}
		}
	});
};
//#endregion
//#region node_modules/@nextui-org/theme/dist/chunk-GH5E4FQB.mjs
var dataFocusVisibleClasses = [
	"outline-none",
	"data-[focus-visible=true]:z-10",
	"data-[focus-visible=true]:outline-2",
	"data-[focus-visible=true]:outline-focus",
	"data-[focus-visible=true]:outline-offset-2"
];
//#endregion
//#region node_modules/@nextui-org/theme/dist/chunk-GQT3YUX3.mjs
var colorVariants = {
	solid: {
		default: "bg-default text-default-foreground",
		primary: "bg-primary text-primary-foreground",
		secondary: "bg-secondary text-secondary-foreground",
		success: "bg-success text-success-foreground",
		warning: "bg-warning text-warning-foreground",
		danger: "bg-danger text-danger-foreground",
		foreground: "bg-foreground text-background"
	},
	shadow: {
		default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
		primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
		secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
		success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
		warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
		danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
		foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
	},
	bordered: {
		default: "bg-transparent border-default text-foreground",
		primary: "bg-transparent border-primary text-primary",
		secondary: "bg-transparent border-secondary text-secondary",
		success: "bg-transparent border-success text-success",
		warning: "bg-transparent border-warning text-warning",
		danger: "bg-transparent border-danger text-danger",
		foreground: "bg-transparent border-foreground text-foreground"
	},
	flat: {
		default: "bg-default/40 text-default-700",
		primary: "bg-primary/20 text-primary-600",
		secondary: "bg-secondary/20 text-secondary-600",
		success: "bg-success/20 text-success-700 dark:text-success",
		warning: "bg-warning/20 text-warning-700 dark:text-warning",
		danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
		foreground: "bg-foreground/10 text-foreground"
	},
	faded: {
		default: "border-default bg-default-100 text-default-foreground",
		primary: "border-default bg-default-100 text-primary",
		secondary: "border-default bg-default-100 text-secondary",
		success: "border-default bg-default-100 text-success",
		warning: "border-default bg-default-100 text-warning",
		danger: "border-default bg-default-100 text-danger",
		foreground: "border-default bg-default-100 text-foreground"
	},
	light: {
		default: "bg-transparent text-default-foreground",
		primary: "bg-transparent text-primary",
		secondary: "bg-transparent text-secondary",
		success: "bg-transparent text-success",
		warning: "bg-transparent text-warning",
		danger: "bg-transparent text-danger",
		foreground: "bg-transparent text-foreground"
	},
	ghost: {
		default: "border-default text-default-foreground",
		primary: "border-primary text-primary",
		secondary: "border-secondary text-secondary",
		success: "border-success text-success",
		warning: "border-warning text-warning",
		danger: "border-danger text-danger",
		foreground: "border-foreground text-foreground hover:!bg-foreground"
	}
};
//#endregion
//#region node_modules/@nextui-org/theme/dist/chunk-2QXJAGC7.mjs
var popover = tv({
	slots: {
		base: [
			"z-0",
			"relative",
			"bg-transparent",
			"before:content-['']",
			"before:hidden",
			"before:z-[-1]",
			"before:absolute",
			"before:rotate-45",
			"before:w-2.5",
			"before:h-2.5",
			"before:rounded-sm",
			"data-[arrow=true]:before:block",
			"data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
			"data-[placement=top]:before:left-1/2",
			"data-[placement=top]:before:-translate-x-1/2",
			"data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
			"data-[placement=top-start]:before:left-3",
			"data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
			"data-[placement=top-end]:before:right-3",
			"data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
			"data-[placement=bottom]:before:left-1/2",
			"data-[placement=bottom]:before:-translate-x-1/2",
			"data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
			"data-[placement=bottom-start]:before:left-3",
			"data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
			"data-[placement=bottom-end]:before:right-3",
			"data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
			"data-[placement=left]:before:top-1/2",
			"data-[placement=left]:before:-translate-y-1/2",
			"data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
			"data-[placement=left-start]:before:top-1/4",
			"data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
			"data-[placement=left-end]:before:bottom-1/4",
			"data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
			"data-[placement=right]:before:top-1/2",
			"data-[placement=right]:before:-translate-y-1/2",
			"data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
			"data-[placement=right-start]:before:top-1/4",
			"data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
			"data-[placement=right-end]:before:bottom-1/4",
			...dataFocusVisibleClasses
		],
		content: [
			"z-10",
			"px-2.5",
			"py-1",
			"w-full",
			"inline-flex",
			"flex-col",
			"items-center",
			"justify-center",
			"box-border",
			"subpixel-antialiased",
			"outline-none",
			"box-border"
		],
		trigger: ["z-10"],
		backdrop: ["hidden"],
		arrow: []
	},
	variants: {
		size: {
			sm: { content: "text-tiny" },
			md: { content: "text-small" },
			lg: { content: "text-medium" }
		},
		color: {
			default: {
				base: "before:bg-content1 before:shadow-small",
				content: "bg-content1"
			},
			foreground: {
				base: "before:bg-foreground",
				content: colorVariants.solid.foreground
			},
			primary: {
				base: "before:bg-primary",
				content: colorVariants.solid.primary
			},
			secondary: {
				base: "before:bg-secondary",
				content: colorVariants.solid.secondary
			},
			success: {
				base: "before:bg-success",
				content: colorVariants.solid.success
			},
			warning: {
				base: "before:bg-warning",
				content: colorVariants.solid.warning
			},
			danger: {
				base: "before:bg-danger",
				content: colorVariants.solid.danger
			}
		},
		radius: {
			none: { content: "rounded-none" },
			sm: { content: "rounded-small" },
			md: { content: "rounded-medium" },
			lg: { content: "rounded-large" },
			full: { content: "rounded-full" }
		},
		shadow: {
			sm: { content: "shadow-small" },
			md: { content: "shadow-medium" },
			lg: { content: "shadow-large" }
		},
		backdrop: {
			transparent: {},
			opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
			blur: { backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30" }
		},
		triggerScaleOnOpen: {
			true: { trigger: [
				"aria-expanded:scale-[0.97]",
				"aria-expanded:opacity-70",
				"subpixel-antialiased"
			] },
			false: {}
		},
		disableAnimation: { true: { base: "animate-none" } },
		isTriggerDisabled: {
			true: { trigger: "opacity-disabled pointer-events-none" },
			false: {}
		}
	},
	defaultVariants: {
		color: "default",
		radius: "lg",
		size: "md",
		shadow: "md",
		backdrop: "transparent",
		triggerScaleOnOpen: true
	},
	compoundVariants: [{
		backdrop: ["opaque", "blur"],
		class: { backdrop: "block w-full h-full fixed inset-0 -z-30" }
	}]
});
//#endregion
//#region node_modules/@nextui-org/framer-utils/dist/chunk-736YWA4T.mjs
var TRANSITION_EASINGS = {
	ease: [
		.36,
		.66,
		.4,
		1
	],
	easeIn: [
		.4,
		0,
		1,
		1
	],
	easeOut: [
		0,
		0,
		.2,
		1
	],
	easeInOut: [
		.4,
		0,
		.2,
		1
	],
	spring: [
		.155,
		1.105,
		.295,
		1.12
	],
	springOut: [
		.57,
		-.15,
		.62,
		.07
	],
	softSpring: [
		.16,
		1.11,
		.3,
		1.02
	]
};
TRANSITION_EASINGS.easeOut, TRANSITION_EASINGS.easeIn;
var TRANSITION_VARIANTS = {
	scaleSpring: {
		enter: {
			transform: "scale(1)",
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0,
				duration: .2
			}
		},
		exit: {
			transform: "scale(0.85)",
			opacity: 0,
			transition: {
				type: "easeOut",
				duration: .15
			}
		}
	},
	scaleSpringOpacity: {
		initial: {
			opacity: 0,
			transform: "scale(0.8)"
		},
		enter: {
			opacity: 1,
			transform: "scale(1)",
			transition: {
				type: "spring",
				bounce: 0,
				duration: .3
			}
		},
		exit: {
			opacity: 0,
			transform: "scale(0.96)",
			transition: {
				type: "easeOut",
				bounce: 0,
				duration: .15
			}
		}
	},
	scale: {
		enter: { scale: 1 },
		exit: { scale: .95 }
	},
	scaleFadeIn: {
		enter: {
			transform: "scale(1)",
			opacity: 1,
			transition: {
				duration: .25,
				ease: TRANSITION_EASINGS.easeIn
			}
		},
		exit: {
			transform: "scale(0.95)",
			opacity: 0,
			transition: {
				duration: .2,
				ease: TRANSITION_EASINGS.easeOut
			}
		}
	},
	scaleInOut: {
		enter: {
			transform: "scale(1)",
			opacity: 1,
			transition: {
				duration: .4,
				ease: TRANSITION_EASINGS.ease
			}
		},
		exit: {
			transform: "scale(1.03)",
			opacity: 0,
			transition: {
				duration: .3,
				ease: TRANSITION_EASINGS.ease
			}
		}
	},
	fade: {
		enter: {
			opacity: 1,
			transition: {
				duration: .4,
				ease: TRANSITION_EASINGS.ease
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: .3,
				ease: TRANSITION_EASINGS.ease
			}
		}
	},
	collapse: {
		enter: {
			opacity: 1,
			height: "auto",
			transition: {
				height: {
					type: "spring",
					bounce: 0,
					duration: .3
				},
				opacity: {
					easings: "ease",
					duration: .4
				}
			}
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				easings: "ease",
				duration: .3
			}
		}
	}
};
//#endregion
//#region node_modules/@nextui-org/aria-utils/dist/chunk-WQVQ7P2I.mjs
var getTransformOrigins = (placement) => {
	const origins = {
		top: { originY: 1 },
		bottom: { originY: 0 },
		left: { originX: 1 },
		right: { originX: 0 },
		"top-start": {
			originX: 0,
			originY: 1
		},
		"top-end": {
			originX: 1,
			originY: 1
		},
		"bottom-start": {
			originX: 0,
			originY: 0
		},
		"bottom-end": {
			originX: 1,
			originY: 0
		},
		"right-start": {
			originX: 0,
			originY: 0
		},
		"right-end": {
			originX: 0,
			originY: 1
		},
		"left-start": {
			originX: 1,
			originY: 0
		},
		"left-end": {
			originX: 1,
			originY: 1
		}
	};
	return (origins == null ? void 0 : origins[placement]) || {};
};
var toReactAriaPlacement = (placement) => {
	return {
		top: "top",
		bottom: "bottom",
		left: "left",
		right: "right",
		"top-start": "top start",
		"top-end": "top end",
		"bottom-start": "bottom start",
		"bottom-end": "bottom end",
		"left-start": "left top",
		"left-end": "left bottom",
		"right-start": "right top",
		"right-end": "right bottom"
	}[placement];
};
var getArrowPlacement = (dynamicPlacement, placement) => {
	if (placement.includes("-")) {
		const [, position] = placement.split("-");
		return `${dynamicPlacement}-${position}`;
	}
	return dynamicPlacement;
};
//#endregion
//#region node_modules/@nextui-org/use-safe-layout-effect/dist/index.mjs
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react$1.useLayoutEffect : import_react$1.useEffect;
//#endregion
//#region node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
	let [isOpen, setOpen] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(props.isOpen, props.defaultOpen || false, props.onOpenChange);
	return {
		isOpen,
		setOpen,
		open: (0, import_react$1.useCallback)(() => {
			setOpen(true);
		}, [setOpen]),
		close: (0, import_react$1.useCallback)(() => {
			setOpen(false);
		}, [setOpen]),
		toggle: (0, import_react$1.useCallback)(() => {
			setOpen(!isOpen);
		}, [setOpen, isOpen])
	};
}
//#endregion
//#region node_modules/@react-stately/tooltip/dist/useTooltipTriggerState.mjs
var $8796f90736e175cb$var$TOOLTIP_DELAY = 1500;
var $8796f90736e175cb$var$TOOLTIP_COOLDOWN = 500;
var $8796f90736e175cb$var$tooltips = {};
var $8796f90736e175cb$var$tooltipId = 0;
var $8796f90736e175cb$var$globalWarmedUp = false;
var $8796f90736e175cb$var$globalWarmUpTimeout = null;
var $8796f90736e175cb$var$globalCooldownTimeout = null;
function $8796f90736e175cb$export$4d40659c25ecb50b(props = {}) {
	let { delay = $8796f90736e175cb$var$TOOLTIP_DELAY, closeDelay = $8796f90736e175cb$var$TOOLTIP_COOLDOWN } = props;
	let { isOpen, open, close } = $fc909762b330b746$export$61c6a8c84e605fb6(props);
	let id = (0, import_react$1.useMemo)(() => `${++$8796f90736e175cb$var$tooltipId}`, []);
	let closeTimeout = (0, import_react$1.useRef)(null);
	let closeCallback = (0, import_react$1.useRef)(close);
	let ensureTooltipEntry = () => {
		$8796f90736e175cb$var$tooltips[id] = hideTooltip;
	};
	let closeOpenTooltips = () => {
		for (let hideTooltipId in $8796f90736e175cb$var$tooltips) if (hideTooltipId !== id) {
			$8796f90736e175cb$var$tooltips[hideTooltipId](true);
			delete $8796f90736e175cb$var$tooltips[hideTooltipId];
		}
	};
	let showTooltip = () => {
		if (closeTimeout.current) clearTimeout(closeTimeout.current);
		closeTimeout.current = null;
		closeOpenTooltips();
		ensureTooltipEntry();
		$8796f90736e175cb$var$globalWarmedUp = true;
		open();
		if ($8796f90736e175cb$var$globalWarmUpTimeout) {
			clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
			$8796f90736e175cb$var$globalWarmUpTimeout = null;
		}
		if ($8796f90736e175cb$var$globalCooldownTimeout) {
			clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
			$8796f90736e175cb$var$globalCooldownTimeout = null;
		}
	};
	let hideTooltip = (immediate) => {
		if (immediate || closeDelay <= 0) {
			if (closeTimeout.current) clearTimeout(closeTimeout.current);
			closeTimeout.current = null;
			closeCallback.current();
		} else if (!closeTimeout.current) closeTimeout.current = setTimeout(() => {
			closeTimeout.current = null;
			closeCallback.current();
		}, closeDelay);
		if ($8796f90736e175cb$var$globalWarmUpTimeout) {
			clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
			$8796f90736e175cb$var$globalWarmUpTimeout = null;
		}
		if ($8796f90736e175cb$var$globalWarmedUp) {
			if ($8796f90736e175cb$var$globalCooldownTimeout) clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
			$8796f90736e175cb$var$globalCooldownTimeout = setTimeout(() => {
				delete $8796f90736e175cb$var$tooltips[id];
				$8796f90736e175cb$var$globalCooldownTimeout = null;
				$8796f90736e175cb$var$globalWarmedUp = false;
			}, Math.max($8796f90736e175cb$var$TOOLTIP_COOLDOWN, closeDelay));
		}
	};
	let warmupTooltip = () => {
		closeOpenTooltips();
		ensureTooltipEntry();
		if (!isOpen && !$8796f90736e175cb$var$globalWarmUpTimeout && !$8796f90736e175cb$var$globalWarmedUp) $8796f90736e175cb$var$globalWarmUpTimeout = setTimeout(() => {
			$8796f90736e175cb$var$globalWarmUpTimeout = null;
			$8796f90736e175cb$var$globalWarmedUp = true;
			showTooltip();
		}, delay);
		else if (!isOpen) showTooltip();
	};
	(0, import_react$1.useEffect)(() => {
		closeCallback.current = close;
	}, [close]);
	(0, import_react$1.useEffect)(() => {
		return () => {
			if (closeTimeout.current) clearTimeout(closeTimeout.current);
			if ($8796f90736e175cb$var$tooltips[id]) delete $8796f90736e175cb$var$tooltips[id];
		};
	}, [id]);
	return {
		isOpen,
		open: (immediate) => {
			if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
			else showTooltip();
		},
		close: hideTooltip
	};
}
//#endregion
//#region node_modules/@react-aria/tooltip/dist/useTooltip.mjs
function $326e436e94273fe1$export$1c4b08e0eca38426(props, state) {
	let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { labelable: true });
	let { hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
		onHoverStart: () => state === null || state === void 0 ? void 0 : state.open(true),
		onHoverEnd: () => state === null || state === void 0 ? void 0 : state.close()
	});
	return { tooltipProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, hoverProps, { role: "tooltip" }) };
}
//#endregion
//#region node_modules/@react-aria/tooltip/dist/useTooltipTrigger.mjs
function $4e1b34546679e357$export$a6da6c504e4bba8b(props, state, ref) {
	let { isDisabled, trigger } = props;
	let tooltipId = $bdb11010cef70236$export$f680877a34711e37();
	let isHovered = (0, import_react$1.useRef)(false);
	let isFocused = (0, import_react$1.useRef)(false);
	let handleShow = () => {
		if (isHovered.current || isFocused.current) state.open(isFocused.current);
	};
	let handleHide = (immediate) => {
		if (!isHovered.current && !isFocused.current) state.close(immediate);
	};
	(0, import_react$1.useEffect)(() => {
		let onKeyDown = (e) => {
			if (ref && ref.current) {
				if (e.key === "Escape") {
					e.stopPropagation();
					state.close(true);
				}
			}
		};
		if (state.isOpen) {
			document.addEventListener("keydown", onKeyDown, true);
			return () => {
				document.removeEventListener("keydown", onKeyDown, true);
			};
		}
	}, [ref, state]);
	let onHoverStart = () => {
		if (trigger === "focus") return;
		if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "pointer") isHovered.current = true;
		else isHovered.current = false;
		handleShow();
	};
	let onHoverEnd = () => {
		if (trigger === "focus") return;
		isFocused.current = false;
		isHovered.current = false;
		handleHide();
	};
	let onPressStart = () => {
		isFocused.current = false;
		isHovered.current = false;
		handleHide(true);
	};
	let onFocus = () => {
		if ($507fabe10e71c6fb$export$b9b3dfddab17db27()) {
			isFocused.current = true;
			handleShow();
		}
	};
	let onBlur = () => {
		isFocused.current = false;
		isHovered.current = false;
		handleHide(true);
	};
	let { hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
		isDisabled,
		onHoverStart,
		onHoverEnd
	});
	let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c({
		isDisabled,
		onFocus,
		onBlur
	}, ref);
	return {
		triggerProps: {
			"aria-describedby": state.isOpen ? tooltipId : void 0,
			...$3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, hoverProps, {
				onPointerDown: onPressStart,
				onKeyDown: onPressStart
			})
		},
		tooltipProps: { id: tooltipId }
	};
}
//#endregion
//#region node_modules/@nextui-org/tooltip/dist/chunk-G6TJXAS5.mjs
function useTooltip(originalProps) {
	var _a, _b;
	const globalContext = useProviderContext();
	const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys);
	const { ref, as, isOpen: isOpenProp, content, children, defaultOpen, onOpenChange, isDisabled, trigger: triggerAction, shouldFlip = true, containerPadding = 12, placement: placementProp = "top", delay = 0, closeDelay = 500, showArrow = false, offset = 7, crossOffset = 0, isDismissable, shouldCloseOnBlur = true, portalContainer, isKeyboardDismissDisabled = false, updatePositionDeps = [], shouldCloseOnInteractOutside, className, onClose, motionProps, classNames, ...otherProps } = props;
	const Component = as || "div";
	const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
	const state = $8796f90736e175cb$export$4d40659c25ecb50b({
		delay,
		closeDelay,
		isDisabled,
		defaultOpen,
		isOpen: isOpenProp,
		onOpenChange: (isOpen2) => {
			onOpenChange?.(isOpen2);
			if (!isOpen2) onClose?.();
		}
	});
	const triggerRef = (0, import_react$1.useRef)(null);
	const overlayRef = (0, import_react$1.useRef)(null);
	const tooltipId = (0, import_react$1.useId)();
	const isOpen = state.isOpen && !isDisabled;
	(0, import_react$1.useImperativeHandle)(ref, () => createDOMRef(overlayRef));
	const { triggerProps, tooltipProps: triggerTooltipProps } = $4e1b34546679e357$export$a6da6c504e4bba8b({
		isDisabled,
		trigger: triggerAction
	}, state, triggerRef);
	const { tooltipProps } = $326e436e94273fe1$export$1c4b08e0eca38426({
		isOpen,
		...$3ef42575df84b30b$export$9d1611c77c2fe928(props, triggerTooltipProps)
	}, state);
	const { overlayProps: positionProps, placement, updatePosition } = $2a41e45df1593e64$export$d39e1813b3bdd0e1({
		isOpen,
		targetRef: triggerRef,
		placement: toReactAriaPlacement(placementProp),
		overlayRef,
		offset: showArrow ? offset + 3 : offset,
		crossOffset,
		shouldFlip,
		containerPadding
	});
	useSafeLayoutEffect(() => {
		if (!updatePositionDeps.length) return;
		updatePosition();
	}, updatePositionDeps);
	const { overlayProps } = $a11501f3d1d39e6c$export$ea8f71083e90600f({
		isOpen,
		onClose: state.close,
		isDismissable,
		shouldCloseOnBlur,
		isKeyboardDismissDisabled,
		shouldCloseOnInteractOutside
	}, overlayRef);
	const slots = (0, import_react$1.useMemo)(() => {
		var _a2, _b2, _c;
		return popover({
			...variantProps,
			disableAnimation,
			radius: (_a2 = originalProps == null ? void 0 : originalProps.radius) != null ? _a2 : "md",
			size: (_b2 = originalProps == null ? void 0 : originalProps.size) != null ? _b2 : "md",
			shadow: (_c = originalProps == null ? void 0 : originalProps.shadow) != null ? _c : "sm"
		});
	}, [
		objectToDeps(variantProps),
		disableAnimation,
		originalProps == null ? void 0 : originalProps.radius,
		originalProps == null ? void 0 : originalProps.size,
		originalProps == null ? void 0 : originalProps.shadow
	]);
	const getTriggerProps = (0, import_react$1.useCallback)((props2 = {}, _ref = null) => ({
		...$3ef42575df84b30b$export$9d1611c77c2fe928(triggerProps, props2),
		ref: mergeRefs(_ref, triggerRef),
		"aria-describedby": isOpen ? tooltipId : void 0
	}), [
		triggerProps,
		isOpen,
		tooltipId,
		state
	]);
	const getTooltipProps = (0, import_react$1.useCallback)(() => ({
		ref: overlayRef,
		"data-slot": "base",
		"data-open": dataAttr(isOpen),
		"data-arrow": dataAttr(showArrow),
		"data-disabled": dataAttr(isDisabled),
		"data-placement": getArrowPlacement(placement || "top", placementProp),
		...$3ef42575df84b30b$export$9d1611c77c2fe928(tooltipProps, overlayProps, otherProps),
		style: $3ef42575df84b30b$export$9d1611c77c2fe928(positionProps.style, otherProps.style, props.style),
		className: slots.base({ class: classNames == null ? void 0 : classNames.base }),
		id: tooltipId
	}), [
		slots,
		isOpen,
		showArrow,
		isDisabled,
		placement,
		placementProp,
		tooltipProps,
		overlayProps,
		otherProps,
		positionProps,
		props,
		tooltipId
	]);
	return {
		Component,
		content,
		children,
		isOpen,
		triggerRef,
		showArrow,
		portalContainer,
		placement: placementProp,
		disableAnimation,
		isDisabled,
		motionProps,
		getTooltipContentProps: (0, import_react$1.useCallback)(() => ({
			"data-slot": "content",
			"data-open": dataAttr(isOpen),
			"data-arrow": dataAttr(showArrow),
			"data-disabled": dataAttr(isDisabled),
			"data-placement": getArrowPlacement(placement || "top", placementProp),
			className: slots.content({ class: clsx(classNames == null ? void 0 : classNames.content, className) })
		}), [
			slots,
			isOpen,
			showArrow,
			isDisabled,
			placement,
			placementProp,
			classNames
		]),
		getTriggerProps,
		getTooltipProps
	};
}
//#endregion
//#region node_modules/@nextui-org/tooltip/dist/chunk-LY4WDGUU.mjs
var domAnimation = () => import("./dist-Bwm6gd8X.js").then((res) => res.default);
var Tooltip = forwardRef((props, ref) => {
	const { Component, children, content, isOpen, portalContainer, placement, disableAnimation, motionProps, getTriggerProps, getTooltipProps, getTooltipContentProps } = useTooltip({
		...props,
		ref
	});
	let trigger;
	try {
		if (import_react$1.Children.count(children) !== 1) throw new Error();
		if (!(0, import_react$1.isValidElement)(children)) trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			...getTriggerProps(),
			children
		});
		else {
			const child = children;
			trigger = (0, import_react$1.cloneElement)(child, getTriggerProps(child.props, child.ref));
		}
	} catch (error) {
		trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {});
		warn("Tooltip must have only one child node. Please, check your code.");
	}
	const { ref: tooltipRef, id, style, ...otherTooltipProps } = getTooltipProps();
	const animatedContent = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: tooltipRef,
		id,
		style,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyMotion, {
			features: domAnimation,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
				animate: "enter",
				exit: "exit",
				initial: "exit",
				variants: TRANSITION_VARIANTS.scaleSpring,
				...$3ef42575df84b30b$export$9d1611c77c2fe928(motionProps, otherTooltipProps),
				style: { ...getTransformOrigins(placement) },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
					...getTooltipContentProps(),
					children: content
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [trigger, disableAnimation && isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)($f57aed4a881a3485$export$b47c3594eab58386, {
		portalContainer,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: tooltipRef,
			id,
			style,
			...otherTooltipProps,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
				...getTooltipContentProps(),
				children: content
			})
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)($f57aed4a881a3485$export$b47c3594eab58386, {
		portalContainer,
		children: animatedContent
	}) : null })] });
});
Tooltip.displayName = "NextUI.Tooltip";
var tooltip_default = Tooltip;
//#endregion
export { useTooltip as n, tooltip_default as t };
