import { G as __commonJSMin, V as require_react, Y as __toESM, h as useServerInsertedHTML, n as require_jsx_runtime } from "../../index.js";
import { t as _extends } from "./extends-DrH2PCIy.js";
import { n as NextStudioNoScript, t as NextStudioLayout } from "./NextStudioNoScript-RySHa0Rb.js";
import * as m$1 from "stream";
import { Studio } from "sanity";
//#region node_modules/history/index.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Actions represent the type of change to a location value.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
*/
var Action;
(function(Action) {
	/**
	* A POP indicates a change to an arbitrary index in the history stack, such
	* as a back or forward navigation. It does not describe the direction of the
	* navigation, only that the current index changed.
	*
	* Note: This is the default action for newly created history objects.
	*/
	Action["Pop"] = "POP";
	/**
	* A PUSH indicates a new entry being added to the history stack, such as when
	* a link is clicked and a new page loads. When this happens, all subsequent
	* entries in the stack are lost.
	*/
	Action["Push"] = "PUSH";
	/**
	* A REPLACE indicates the entry at the current index in the history stack
	* being replaced by a new one.
	*/
	Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
	return obj;
};
var BeforeUnloadEventType = "beforeunload";
var HashChangeEventType = "hashchange";
var PopStateEventType = "popstate";
/**
* Hash history stores the location in window.location.hash. This makes it ideal
* for situations where you don't want to send the location to the server for
* some reason, either because you do cannot configure it or the URL space is
* reserved for something else.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
*/
function createHashHistory(options) {
	if (options === void 0) options = {};
	var _options2$window = options.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
	var globalHistory = window.history;
	function getIndexAndLocation() {
		var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? "" : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
		var state = globalHistory.state || {};
		return [state.idx, readOnly({
			pathname,
			search,
			hash,
			state: state.usr || null,
			key: state.key || "default"
		})];
	}
	var blockedPopTx = null;
	function handlePop() {
		if (blockedPopTx) {
			blockers.call(blockedPopTx);
			blockedPopTx = null;
		} else {
			var nextAction = Action.Pop;
			var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
			if (blockers.length) {
				if (nextIndex != null) {
					var delta = index - nextIndex;
					if (delta) {
						blockedPopTx = {
							action: nextAction,
							location: nextLocation,
							retry: function retry() {
								go(delta * -1);
							}
						};
						go(delta);
					}
				}
			} else applyTx(nextAction);
		}
	}
	window.addEventListener(PopStateEventType, handlePop);
	window.addEventListener(HashChangeEventType, function() {
		var nextLocation = getIndexAndLocation()[1];
		if (createPath(nextLocation) !== createPath(location)) handlePop();
	});
	var action = Action.Pop;
	var _getIndexAndLocation6 = getIndexAndLocation(), index = _getIndexAndLocation6[0], location = _getIndexAndLocation6[1];
	var listeners = createEvents();
	var blockers = createEvents();
	if (index == null) {
		index = 0;
		globalHistory.replaceState(_extends({}, globalHistory.state, { idx: index }), "");
	}
	function getBaseHref() {
		var base = document.querySelector("base");
		var href = "";
		if (base && base.getAttribute("href")) {
			var url = window.location.href;
			var hashIndex = url.indexOf("#");
			href = hashIndex === -1 ? url : url.slice(0, hashIndex);
		}
		return href;
	}
	function createHref(to) {
		return getBaseHref() + "#" + (typeof to === "string" ? to : createPath(to));
	}
	function getNextLocation(to, state) {
		if (state === void 0) state = null;
		return readOnly(_extends({
			pathname: location.pathname,
			hash: "",
			search: ""
		}, typeof to === "string" ? parsePath(to) : to, {
			state,
			key: createKey()
		}));
	}
	function getHistoryStateAndUrl(nextLocation, index) {
		return [{
			usr: nextLocation.state,
			key: nextLocation.key,
			idx: index
		}, createHref(nextLocation)];
	}
	function allowTx(action, location, retry) {
		return !blockers.length || (blockers.call({
			action,
			location,
			retry
		}), false);
	}
	function applyTx(nextAction) {
		action = nextAction;
		var _getIndexAndLocation7 = getIndexAndLocation();
		index = _getIndexAndLocation7[0];
		location = _getIndexAndLocation7[1];
		listeners.call({
			action,
			location
		});
	}
	function push(to, state) {
		var nextAction = Action.Push;
		var nextLocation = getNextLocation(to, state);
		function retry() {
			push(to, state);
		}
		if (allowTx(nextAction, nextLocation, retry)) {
			var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1];
			try {
				globalHistory.pushState(historyState, "", url);
			} catch (error) {
				window.location.assign(url);
			}
			applyTx(nextAction);
		}
	}
	function replace(to, state) {
		var nextAction = Action.Replace;
		var nextLocation = getNextLocation(to, state);
		function retry() {
			replace(to, state);
		}
		if (allowTx(nextAction, nextLocation, retry)) {
			var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1];
			globalHistory.replaceState(historyState, "", url);
			applyTx(nextAction);
		}
	}
	function go(delta) {
		globalHistory.go(delta);
	}
	return {
		get action() {
			return action;
		},
		get location() {
			return location;
		},
		createHref,
		push,
		replace,
		go,
		back: function back() {
			go(-1);
		},
		forward: function forward() {
			go(1);
		},
		listen: function listen(listener) {
			return listeners.push(listener);
		},
		block: function block(blocker) {
			var unblock = blockers.push(blocker);
			if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
			return function() {
				unblock();
				if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
			};
		}
	};
}
function promptBeforeUnload(event) {
	event.preventDefault();
	event.returnValue = "";
}
function createEvents() {
	var handlers = [];
	return {
		get length() {
			return handlers.length;
		},
		push: function push(fn) {
			handlers.push(fn);
			return function() {
				handlers = handlers.filter(function(handler) {
					return handler !== fn;
				});
			};
		},
		call: function call(arg) {
			handlers.forEach(function(fn) {
				return fn && fn(arg);
			});
		}
	};
}
function createKey() {
	return Math.random().toString(36).substr(2, 8);
}
/**
* Creates a string URL path from the given pathname, search, and hash components.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
*/
function createPath(_ref) {
	var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
	if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	return pathname;
}
/**
* Parses a string URL path into its separate pathname, search, and hash components.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
*/
function parsePath(path) {
	var parsedPath = {};
	if (path) {
		var hashIndex = path.indexOf("#");
		if (hashIndex >= 0) {
			parsedPath.hash = path.substr(hashIndex);
			path = path.substr(0, hashIndex);
		}
		var searchIndex = path.indexOf("?");
		if (searchIndex >= 0) {
			parsedPath.search = path.substr(searchIndex);
			path = path.substr(0, searchIndex);
		}
		if (path) parsedPath.pathname = path;
	}
	return parsedPath;
}
//#endregion
//#region node_modules/styled-components/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
//#endregion
//#region node_modules/shallowequal/index.js
var require_shallowequal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
		var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
		if (ret !== void 0) return !!ret;
		if (objA === objB) return true;
		if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return false;
		var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
		for (var idx = 0; idx < keysA.length; idx++) {
			var key = keysA[idx];
			if (!bHasOwnProperty(key)) return false;
			var valueA = objA[key];
			var valueB = objB[key];
			ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
			if (ret === false || ret === void 0 && valueA !== valueB) return false;
		}
		return true;
	};
}));
//#endregion
//#region node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
//#endregion
//#region node_modules/stylis/src/Utility.js
/**
* @param {number}
* @return {number}
*/
var abs = Math.abs;
/**
* @param {number}
* @return {string}
*/
var from = String.fromCharCode;
/**
* @param {object}
* @return {object}
*/
var assign = Object.assign;
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length) {
	return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @param {number} position
* @return {number}
*/
function indexof(value, search, position) {
	return value.indexOf(search, position);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}
/**
* @param {string[]} array
* @param {RegExp} pattern
* @return {string[]}
*/
function filter(array, pattern) {
	return array.filter(function(value) {
		return !match(value, pattern);
	});
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {object[]} siblings
* @param {number} length
*/
function node(value, root, parent, type, props, children, length, siblings) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length,
		return: "",
		siblings
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
/**
* @param {object} root
*/
function lift(root) {
	while (root.root) root = copy(root.root, { children: [root] });
	append(root, root.siblings);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;
	while (scanning) switch (previous = character, character = next()) {
		case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
			if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters += delimit(character);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters += whitespace(previous);
			break;
		case 92:
			characters += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
					break;
				default: characters += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters = replace(characters, /\f/g, "");
					if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1, declarations) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2, declarations), declarations);
					break;
				case 59: characters += ";";
				default:
					append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
					if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
					else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
							break;
						default: parse(characters, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
			break;
		case 58: length = 1 + strlen(characters), property = previous;
		default:
			if (variable < 1) {
				if (character == 123) --variable;
				else if (character == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters += from(character), character * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters += delimit(next());
					atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
					break;
				case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @param {object[]} siblings
* @return {object}
*/
function comment(value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function declaration(value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
//#endregion
//#region node_modules/stylis/src/Prefixer.js
/**
* @param {string} value
* @param {number} length
* @param {object[]} children
* @return {string}
*/
function prefix(value, length, children) {
	switch (hash(value, length)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 4789: return MOZ + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 5936: switch (charat(value, length + 11)) {
			case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
			case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
			case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
		}
		case 6828:
		case 4268:
		case 2903: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length) + value;
			break;
		case 2592:
		case 3360: return MS + replace(value, "template-", "") + value;
		case 4384:
		case 3616:
			if (children && children.some(function(element, index) {
				return length = index, match(element.props, /grid-\w+-end/);
			})) return ~indexof(value + (children = children[length].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
			return MS + replace(value, "-start", "") + value;
		case 4896:
		case 4128: return children && children.some(function(element) {
			return match(element.props, /grid-\w+-start/);
		}) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
				case 109: if (charat(value, length + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length, children) + value : value;
			}
			break;
		case 5152:
		case 5920: return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
			return MS + a + ":" + b + f + (c ? MS + a + "-span:" + (d ? e : +e - +b) + f : "") + value;
		});
		case 4949:
			if (charat(value, length + 6) === 121) return replace(value, ":", ":" + WEBKIT) + value;
			break;
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				case 120: return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
				case 100: return replace(value, ":", ":" + MS) + value;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391: return replace(value, "scroll-", "scroll-snap-") + value;
	}
	return value;
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: if (!strlen(element.value = element.props.join(","))) return "";
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
*/
function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element.return) switch (element.type) {
			case DECLARATION:
				element.return = prefix(element.value, element.length, children);
				return;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(children = element.props, function(value) {
				switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write":
						lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
						break;
					case "::placeholder":
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
						break;
				}
				return "";
			});
		}
	}
}
//#endregion
//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var import_shallowequal = /* @__PURE__ */ __toESM(require_shallowequal());
var unitlessKeys = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
//#endregion
//#region builtin:esm-external-require-stream
var require_builtin_esm_external_require_stream = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = m$1.default;
})), f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", m = "active", y = "data-styled-version", v = "6.1.19", g = "/*!sc*/\n", S = "undefined" != typeof window && "undefined" != typeof document, w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : false), _ = Object.freeze([]), C = Object.freeze({});
function I(e, t, n) {
	return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = new Set([
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"big",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"track",
	"u",
	"ul",
	"use",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"text",
	"tspan"
]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
function R(e) {
	return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi, k = 52, j = function(e) {
	return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x(e) {
	var t, n = "";
	for (t = Math.abs(e); t > k; t = t / k | 0) n = j(t % k) + n;
	return (j(t % k) + n).replace(T, "$1-$2");
}
var V, F = 5381, z = function(e, t) {
	for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
	return e;
}, M = function(e) {
	return z(F, e);
};
function $(e) {
	return x(M(e) >>> 0);
}
function B(e) {
	return e.displayName || e.name || "Component";
}
function G(e) {
	return "string" == typeof e && true;
}
var L = "function" == typeof Symbol && Symbol.for, Y = L ? Symbol.for("react.memo") : 60115, q = L ? Symbol.for("react.forward_ref") : 60112, W = {
	childContextTypes: !0,
	contextType: !0,
	contextTypes: !0,
	defaultProps: !0,
	displayName: !0,
	getDefaultProps: !0,
	getDerivedStateFromError: !0,
	getDerivedStateFromProps: !0,
	mixins: !0,
	propTypes: !0,
	type: !0
}, H = {
	name: !0,
	length: !0,
	prototype: !0,
	caller: !0,
	callee: !0,
	arguments: !0,
	arity: !0
}, U = {
	$$typeof: !0,
	compare: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0,
	type: !0
}, J = ((V = {})[q] = {
	$$typeof: !0,
	render: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0
}, V[Y] = U, V);
function X(e) {
	return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : W;
	var t;
}
var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
function oe(e, t, n) {
	if ("string" != typeof t) {
		if (ne) {
			var o = te(t);
			o && o !== ne && oe(e, o, n);
		}
		var r = K(t);
		Q && (r = r.concat(Q(t)));
		for (var s = X(e), i = X(t), a = 0; a < r.length; ++a) {
			var c = r[a];
			if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
				var l = ee(t, c);
				try {
					Z(e, c, l);
				} catch (e) {}
			}
		}
	}
	return e;
}
function re(e) {
	return "function" == typeof e;
}
function se(e) {
	return "object" == typeof e && "styledComponentId" in e;
}
function ie(e, t) {
	return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
	if (0 === e.length) return "";
	for (var n = e[0], o = 1; o < e.length; o++) n += t ? t + e[o] : e[o];
	return n;
}
function ce(e) {
	return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
	if (void 0 === n && (n = !1), !n && !ce(e) && !Array.isArray(e)) return t;
	if (Array.isArray(t)) for (var o = 0; o < t.length; o++) e[o] = le(e[o], t[o]);
	else if (ce(t)) for (var o in t) e[o] = le(e[o], t[o]);
	return e;
}
function ue(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
function he(t) {
	for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
	return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : ""));
}
var fe = function() {
	function e(e) {
		this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
	}
	return e.prototype.indexOfGroup = function(e) {
		for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
		return t;
	}, e.prototype.insertRules = function(e, t) {
		if (e >= this.groupSizes.length) {
			for (var n = this.groupSizes, o = n.length, r = o; e >= r;) if ((r <<= 1) < 0) throw he(16, "".concat(e));
			this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
			for (var s = o; s < r; s++) this.groupSizes[s] = 0;
		}
		for (var i = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
	}, e.prototype.clearGroup = function(e) {
		if (e < this.length) {
			var t = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t;
			this.groupSizes[e] = 0;
			for (var r = n; r < o; r++) this.tag.deleteRule(n);
		}
	}, e.prototype.getGroup = function(e) {
		var t = "";
		if (e >= this.length || 0 === this.groupSizes[e]) return t;
		for (var n = this.groupSizes[e], o = this.indexOfGroup(e), r = o + n, s = o; s < r; s++) t += "".concat(this.tag.getRule(s)).concat(g);
		return t;
	}, e;
}(), ye = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ge = 1, Se = function(e) {
	if (ye.has(e)) return ye.get(e);
	for (; ve.has(ge);) ge++;
	var t = ge++;
	return ye.set(e, t), ve.set(t, e), t;
}, we = function(e, t) {
	ge = t + 1, ye.set(e, t), ve.set(t, e);
}, be = "style[".concat(f, "][").concat(y, "=\"").concat(v, "\"]"), Ee = new RegExp("^".concat(f, "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)")), Ne = function(e, t, n) {
	for (var o, r = n.split(","), s = 0, i = r.length; s < i; s++) (o = r[s]) && e.registerName(t, o);
}, Pe = function(e, t) {
	for (var n, o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o.length; s < i; s++) {
		var a = o[s].trim();
		if (a) {
			var c = a.match(Ee);
			if (c) {
				var l = 0 | parseInt(c[1], 10), u = c[2];
				0 !== l && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
			} else r.push(a);
		}
	}
}, _e = function(e) {
	for (var t = document.querySelectorAll(be), n = 0, o = t.length; n < o; n++) {
		var r = t[n];
		r && r.getAttribute(f) !== m && (Pe(e, r), r.parentNode && r.parentNode.removeChild(r));
	}
};
function Ce() {
	return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie = function(e) {
	var t = document.head, n = e || t, o = document.createElement("style"), r = function(e) {
		var t = Array.from(e.querySelectorAll("style[".concat(f, "]")));
		return t[t.length - 1];
	}(n), s = void 0 !== r ? r.nextSibling : null;
	o.setAttribute(f, m), o.setAttribute(y, v);
	var i = Ce();
	return i && o.setAttribute("nonce", i), n.insertBefore(o, s), o;
}, Ae = function() {
	function e(e) {
		this.element = Ie(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
			if (e.sheet) return e.sheet;
			for (var t = document.styleSheets, n = 0, o = t.length; n < o; n++) {
				var r = t[n];
				if (r.ownerNode === e) return r;
			}
			throw he(17);
		}(this.element), this.length = 0;
	}
	return e.prototype.insertRule = function(e, t) {
		try {
			return this.sheet.insertRule(t, e), this.length++, !0;
		} catch (e) {
			return !1;
		}
	}, e.prototype.deleteRule = function(e) {
		this.sheet.deleteRule(e), this.length--;
	}, e.prototype.getRule = function(e) {
		var t = this.sheet.cssRules[e];
		return t && t.cssText ? t.cssText : "";
	}, e;
}(), Oe = function() {
	function e(e) {
		this.element = Ie(e), this.nodes = this.element.childNodes, this.length = 0;
	}
	return e.prototype.insertRule = function(e, t) {
		if (e <= this.length && e >= 0) {
			var n = document.createTextNode(t);
			return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
		}
		return !1;
	}, e.prototype.deleteRule = function(e) {
		this.element.removeChild(this.nodes[e]), this.length--;
	}, e.prototype.getRule = function(e) {
		return e < this.length ? this.nodes[e].textContent : "";
	}, e;
}(), De = function() {
	function e(e) {
		this.rules = [], this.length = 0;
	}
	return e.prototype.insertRule = function(e, t) {
		return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
	}, e.prototype.deleteRule = function(e) {
		this.rules.splice(e, 1), this.length--;
	}, e.prototype.getRule = function(e) {
		return e < this.length ? this.rules[e] : "";
	}, e;
}(), Re = S, Te = {
	isServer: !S,
	useCSSOMInjection: !w
}, ke = function() {
	function e(e, n, o) {
		void 0 === e && (e = C), void 0 === n && (n = {});
		var r = this;
		this.options = __assign(__assign({}, Te), e), this.gs = n, this.names = new Map(o), this.server = !!e.isServer, !this.server && S && Re && (Re = !1, _e(this)), ue(this, function() {
			return function(e) {
				for (var t = e.getTag(), n = t.length, o = "", r = function(n) {
					var r = function(e) {
						return ve.get(e);
					}(n);
					if (void 0 === r) return "continue";
					var s = e.names.get(r), i = t.getGroup(n);
					if (void 0 === s || !s.size || 0 === i.length) return "continue";
					var a = "".concat(f, ".g").concat(n, "[id=\"").concat(r, "\"]"), c = "";
					void 0 !== s && s.forEach(function(e) {
						e.length > 0 && (c += "".concat(e, ","));
					}), o += "".concat(i).concat(a, "{content:\"").concat(c, "\"}").concat(g);
				}, s = 0; s < n; s++) r(s);
				return o;
			}(r);
		});
	}
	return e.registerId = function(e) {
		return Se(e);
	}, e.prototype.rehydrate = function() {
		!this.server && S && _e(this);
	}, e.prototype.reconstructWithOptions = function(n, o) {
		return void 0 === o && (o = !0), new e(__assign(__assign({}, this.options), n), this.gs, o && this.names || void 0);
	}, e.prototype.allocateGSInstance = function(e) {
		return this.gs[e] = (this.gs[e] || 0) + 1;
	}, e.prototype.getTag = function() {
		return this.tag || (this.tag = (e = function(e) {
			var t = e.useCSSOMInjection, n = e.target;
			return e.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
		}(this.options), new fe(e)));
		var e;
	}, e.prototype.hasNameForId = function(e, t) {
		return this.names.has(e) && this.names.get(e).has(t);
	}, e.prototype.registerName = function(e, t) {
		if (Se(e), this.names.has(e)) this.names.get(e).add(t);
		else {
			var n = /* @__PURE__ */ new Set();
			n.add(t), this.names.set(e, n);
		}
	}, e.prototype.insertRules = function(e, t, n) {
		this.registerName(e, t), this.getTag().insertRules(Se(e), n);
	}, e.prototype.clearNames = function(e) {
		this.names.has(e) && this.names.get(e).clear();
	}, e.prototype.clearRules = function(e) {
		this.getTag().clearGroup(Se(e)), this.clearNames(e);
	}, e.prototype.clearTag = function() {
		this.tag = void 0;
	}, e;
}(), je = /&/g, xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
	return e.map(function(e) {
		return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(e) {
			return "".concat(t, " ").concat(e);
		})), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Ve(e.children, t)), e;
	});
}
function Fe(e) {
	var t, n, o, r = void 0 === e ? C : e, s = r.options, i = void 0 === s ? C : s, a = r.plugins, c = void 0 === a ? _ : a, l = function(e, o, r) {
		return r.startsWith(n) && r.endsWith(n) && r.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
	}, u = c.slice();
	u.push(function(e) {
		e.type === "rule" && e.value.includes("&") && (e.props[0] = e.props[0].replace(je, n).replace(o, l));
	}), i.prefix && u.push(prefixer), u.push(stringify);
	var p = function(e, r, s, a) {
		void 0 === r && (r = ""), void 0 === s && (s = ""), void 0 === a && (a = "&"), t = a, n = r, o = new RegExp("\\".concat(n, "\\b"), "g");
		var c = e.replace(xe, ""), l = compile(s || r ? "".concat(s, " ").concat(r, " { ").concat(c, " }") : c);
		i.namespace && (l = Ve(l, i.namespace));
		var p = [];
		return serialize(l, middleware(u.concat(rulesheet(function(e) {
			return p.push(e);
		})))), p;
	};
	return p.hash = c.length ? c.reduce(function(e, t) {
		return t.name || he(15), z(e, t.name);
	}, F).toString() : "", p;
}
var ze = new ke(), Me = Fe(), $e = import_react.createContext({
	shouldForwardProp: void 0,
	styleSheet: ze,
	stylis: Me
});
$e.Consumer;
var Ge = import_react.createContext(void 0);
function Le() {
	return (0, import_react.useContext)($e);
}
function Ye(e) {
	var t = (0, import_react.useState)(e.stylisPlugins), n = t[0], r = t[1], c = Le().styleSheet, l = (0, import_react.useMemo)(function() {
		var t = c;
		return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
	}, [
		e.disableCSSOMInjection,
		e.sheet,
		e.target,
		c
	]), u = (0, import_react.useMemo)(function() {
		return Fe({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: n
		});
	}, [
		e.enableVendorPrefixes,
		e.namespace,
		n
	]);
	(0, import_react.useEffect)(function() {
		(0, import_shallowequal.default)(n, e.stylisPlugins) || r(e.stylisPlugins);
	}, [e.stylisPlugins]);
	var d = (0, import_react.useMemo)(function() {
		return {
			shouldForwardProp: e.shouldForwardProp,
			styleSheet: l,
			stylis: u
		};
	}, [
		e.shouldForwardProp,
		l,
		u
	]);
	return import_react.createElement($e.Provider, { value: d }, import_react.createElement(Ge.Provider, { value: u }, e.children));
}
var qe = function() {
	function e(e, t) {
		var n = this;
		this.inject = function(e, t) {
			void 0 === t && (t = Me);
			var o = n.name + t.hash;
			e.hasNameForId(n.id, o) || e.insertRules(n.id, o, t(n.rules, o, "@keyframes"));
		}, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ue(this, function() {
			throw he(12, String(n.name));
		});
	}
	return e.prototype.getName = function(e) {
		return void 0 === e && (e = Me), this.name + e.hash;
	}, e;
}(), We = function(e) {
	return e >= "A" && e <= "Z";
};
function He(e) {
	for (var t = "", n = 0; n < e.length; n++) {
		var o = e[n];
		if (1 === n && "-" === o && "-" === e[0]) return e;
		We(o) ? t += "-" + o.toLowerCase() : t += o;
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function(e) {
	return null == e || !1 === e || "" === e;
}, Je = function(t) {
	var n, o, r = [];
	for (var s in t) {
		var i = t[s];
		t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || re(i) ? r.push("".concat(He(s), ":"), i, ";") : ce(i) ? r.push.apply(r, __spreadArray(__spreadArray(["".concat(s, " {")], Je(i), !1), ["}"], !1)) : r.push("".concat(He(s), ": ").concat((n = s, null == (o = i) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || n in unitlessKeys || n.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
	}
	return r;
};
function Xe(e, t, n, o) {
	if (Ue(e)) return [];
	if (se(e)) return [".".concat(e.styledComponentId)];
	if (re(e)) {
		if (!re(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
		return Xe(e(t), t, n, o);
	}
	var s;
	return e instanceof qe ? n ? (e.inject(n, o), [e.getName(o)]) : [e] : ce(e) ? Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e) {
		return Xe(e, t, n, o);
	})) : [e.toString()];
}
function Ze(e) {
	for (var t = 0; t < e.length; t += 1) {
		var n = e[t];
		if (re(n) && !se(n)) return !1;
	}
	return !0;
}
var Ke = M(v), Qe = function() {
	function e(e, t, n) {
		this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && Ze(e), this.componentId = t, this.baseHash = z(Ke, t), this.baseStyle = n, ke.registerId(t);
	}
	return e.prototype.generateAndInjectStyles = function(e, t, n) {
		var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
		if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = ie(o, this.staticRulesId);
		else {
			var r = ae(Xe(this.rules, e, t, n)), s = x(z(this.baseHash, r) >>> 0);
			if (!t.hasNameForId(this.componentId, s)) {
				var i = n(r, ".".concat(s), void 0, this.componentId);
				t.insertRules(this.componentId, s, i);
			}
			o = ie(o, s), this.staticRulesId = s;
		}
		else {
			for (var a = z(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
				var u = this.rules[l];
				if ("string" == typeof u) c += u;
				else if (u) {
					var p = ae(Xe(u, e, t, n));
					a = z(a, p + l), c += p;
				}
			}
			if (c) {
				var d = x(a >>> 0);
				t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), o = ie(o, d);
			}
		}
		return o;
	}, e;
}(), et = import_react.createContext(void 0);
et.Consumer;
var rt = {};
function it(e, r, s) {
	var i = se(e), a = e, c = !G(e), p = r.attrs, d = void 0 === p ? _ : p, h = r.componentId, f = void 0 === h ? function(e, t) {
		var n = "string" != typeof e ? "sc" : R(e);
		rt[n] = (rt[n] || 0) + 1;
		var o = "".concat(n, "-").concat($(v + n + rt[n]));
		return t ? "".concat(t, "-").concat(o) : o;
	}(r.displayName, r.parentComponentId) : h, m = r.displayName, y = void 0 === m ? function(e) {
		return G(e) ? "styled.".concat(e) : "Styled(".concat(B(e), ")");
	}(e) : m, g = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f, S = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, w = r.shouldForwardProp;
	if (i && a.shouldForwardProp) {
		var b = a.shouldForwardProp;
		if (r.shouldForwardProp) {
			var E = r.shouldForwardProp;
			w = function(e, t) {
				return b(e, t) && E(e, t);
			};
		} else w = b;
	}
	var N = new Qe(s, g, i ? a.componentStyle : void 0);
	function O(e, r) {
		return function(e, r, s) {
			var i = e.attrs, a = e.componentStyle, c = e.defaultProps, p = e.foldedComponentIds, d = e.styledComponentId, h = e.target, f = import_react.useContext(et), m = Le(), y = e.shouldForwardProp || m.shouldForwardProp;
			var v = I(r, f, c) || C, g = function(e, n, o) {
				for (var r, s = __assign(__assign({}, n), {
					className: void 0,
					theme: o
				}), i = 0; i < e.length; i += 1) {
					var a = re(r = e[i]) ? r(s) : r;
					for (var c in a) s[c] = "className" === c ? ie(s[c], a[c]) : "style" === c ? __assign(__assign({}, s[c]), a[c]) : a[c];
				}
				return n.className && (s.className = ie(s.className, n.className)), s;
			}(i, r, v), S = g.as || h, w = {};
			for (var b in g) void 0 === g[b] || "$" === b[0] || "as" === b || "theme" === b && g.theme === v || ("forwardedAs" === b ? w.as = g.forwardedAs : y && !y(b, S) || (w[b] = g[b]));
			var E = function(e, t) {
				var n = Le();
				return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
			}(a, g);
			var N = ie(p, d);
			return E && (N += " " + E), g.className && (N += " " + g.className), w[G(S) && !A.has(S) ? "class" : "className"] = N, s && (w.ref = s), (0, import_react.createElement)(S, w);
		}(D, e, r);
	}
	O.displayName = y;
	var D = import_react.forwardRef(O);
	return D.attrs = S, D.componentStyle = N, D.displayName = y, D.shouldForwardProp = w, D.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = g, D.target = i ? a.target : e, Object.defineProperty(D, "defaultProps", {
		get: function() {
			return this._foldedDefaultProps;
		},
		set: function(e) {
			this._foldedDefaultProps = i ? function(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				for (var o = 0, r = t; o < r.length; o++) le(e, r[o], !0);
				return e;
			}({}, a.defaultProps, e) : e;
		}
	}), ue(D, function() {
		return ".".concat(D.styledComponentId);
	}), c && oe(D, e, {
		attrs: !0,
		componentStyle: !0,
		displayName: !0,
		foldedComponentIds: !0,
		shouldForwardProp: !0,
		styledComponentId: !0,
		target: !0
	}), D;
}
function at(e, t) {
	for (var n = [e[0]], o = 0, r = t.length; o < r; o += 1) n.push(t[o], e[o + 1]);
	return n;
}
var ct = function(e) {
	return Object.assign(e, { isCss: !0 });
};
function lt(t) {
	for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
	if (re(t) || ce(t)) return ct(Xe(at(_, __spreadArray([t], n, !0))));
	var r = t;
	return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Xe(r) : ct(Xe(at(r, n)));
}
function ut(n, o, r) {
	if (void 0 === r && (r = C), !o) throw he(1, o);
	var s = function(t) {
		for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
		return n(o, r, lt.apply(void 0, __spreadArray([t], s, !1)));
	};
	return s.attrs = function(e) {
		return ut(n, o, __assign(__assign({}, r), { attrs: Array.prototype.concat(r.attrs, e).filter(Boolean) }));
	}, s.withConfig = function(e) {
		return ut(n, o, __assign(__assign({}, r), e));
	}, s;
}
var pt = function(e) {
	return ut(it, e);
}, dt = pt;
A.forEach(function(e) {
	dt[e] = pt(e);
});
(function() {
	function e(e, t) {
		this.rules = e, this.componentId = t, this.isStatic = Ze(e), ke.registerId(this.componentId + 1);
	}
	return e.prototype.createStyles = function(e, t, n, o) {
		var r = o(ae(Xe(this.rules, t, n, o)), ""), s = this.componentId + e;
		n.insertRules(s, s, r);
	}, e.prototype.removeStyles = function(e, t) {
		t.clearRules(this.componentId + e);
	}, e.prototype.renderStyles = function(e, t, n, o) {
		e > 2 && ke.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, o);
	}, e;
})();
var vt = /^\s*<\/[a-z]/i, gt = function() {
	function e() {
		var e = this;
		this._emitSheetCSS = function() {
			var t = e.instance.toString();
			if (!t) return "";
			var n = Ce(), o = ae([
				n && "nonce=\"".concat(n, "\""),
				"".concat(f, "=\"true\""),
				"".concat(y, "=\"").concat(v, "\"")
			].filter(Boolean), " ");
			return "<style ".concat(o, ">").concat(t, "</style>");
		}, this.getStyleTags = function() {
			if (e.sealed) throw he(2);
			return e._emitSheetCSS();
		}, this.getStyleElement = function() {
			var n;
			if (e.sealed) throw he(2);
			var r = e.instance.toString();
			if (!r) return [];
			var s = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = { __html: r }, n), i = Ce();
			return i && (s.nonce = i), [import_react.createElement("style", __assign({}, s, { key: "sc-0-0" }))];
		}, this.seal = function() {
			e.sealed = !0;
		}, this.instance = new ke({ isServer: !0 }), this.sealed = !1;
	}
	return e.prototype.collectStyles = function(e) {
		if (this.sealed) throw he(2);
		return import_react.createElement(Ye, { sheet: this.instance }, e);
	}, e.prototype.interleaveWithNodeStream = function(e) {
		if (S) throw he(3);
		if (this.sealed) throw he(2);
		this.seal();
		var t = require_builtin_esm_external_require_stream().Transform, n = e, o = this.instance, r = this._emitSheetCSS, s = new t({ transform: function(e, t, n) {
			var s = e.toString(), i = r();
			if (o.clearTag(), vt.test(s)) {
				var a = s.indexOf(">") + 1, c = s.slice(0, a), l = s.slice(a);
				this.push(c + i + l);
			} else this.push(i + s);
			n();
		} });
		return n.on("error", function(e) {
			s.emit("error", e);
		}), n.pipe(s);
	}, e;
}();
"__sc-".concat(f, "__");
//#endregion
//#region node_modules/next-sanity/dist/_chunks-es/NextStudio.js
function createHashHistoryForStudio() {
	const history = createHashHistory();
	return {
		get action() {
			return history.action;
		},
		get location() {
			return history.location;
		},
		get createHref() {
			return history.createHref;
		},
		get push() {
			return history.push;
		},
		get replace() {
			return history.replace;
		},
		get go() {
			return history.go;
		},
		get back() {
			return history.back;
		},
		get forward() {
			return history.forward;
		},
		get block() {
			return history.block;
		},
		listen(listener) {
			return history.listen(({ location }) => {
				listener(location);
			});
		}
	};
}
function StyledComponentsRegistry({ children, isMounted }) {
	const [styledComponentsStyleSheet] = (0, import_react.useState)(() => new gt());
	return useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		return styledComponentsStyleSheet.instance.clearTag(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: styles });
	}), isMounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ye, {
		sheet: styledComponentsStyleSheet.instance,
		children
	});
}
function useIsMounted() {
	return (0, import_react.useSyncExternalStore)(emptySubscribe, () => !0, () => !1);
}
var emptySubscribe = () => () => {};
function NextStudioComponent({ children, config, unstable__noScript = !0, scheme, history, ...props }) {
	const isMounted = useIsMounted(), unstableHistory = (0, import_react.useMemo)(() => {
		if (props.unstable_history && history) throw new Error("Cannot use both `unstable_history` and `history` props at the same time");
		return isMounted && history === "hash" ? createHashHistoryForStudio() : props.unstable_history;
	}, [
		history,
		isMounted,
		props.unstable_history
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [unstable__noScript && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextStudioNoScript, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledComponentsRegistry, {
		isMounted,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextStudioLayout, { children: history === "hash" && !isMounted ? null : children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {
			config,
			scheme,
			unstable_globalStyles: !0,
			...props,
			unstable_history: unstableHistory
		}) })
	})] });
}
//#endregion
export { NextStudioComponent as default };
