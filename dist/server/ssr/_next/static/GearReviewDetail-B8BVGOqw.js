import { G as __commonJSMin, V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as ChevronLeft } from "./chevron-left-DVeC54vr.js";
import { t as ChevronRight } from "./chevron-right-ifsh_CDX.js";
import { t as X } from "./x-C5WOl0l8.js";
import { t as CodeBlock } from "./codeBlock-dnFYEFJN.js";
import SocialShare from "./SocialShare-0QiVbk1L.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as MapPin } from "./map-pin-P4U4dbUJ.js";
import { t as Calendar } from "./calendar-BHC_LtWi.js";
import { t as format } from "./format-C6isFgJB.js";
import { t as Package } from "./package-CaFHp-27.js";
import { t as Star } from "./star-Bk6eeXH7.js";
import { n as ExternalLink, t as DollarSign } from "./dollar-sign-BZr_YfaB.js";
import { t as Weight } from "./weight-D7CRzIGh.js";
import { t as Award } from "./award-DGRe30pC.js";
import { n as stegaClean, t as isRecord } from "./stegaClean-6GPOobiq.js";
import { n as dataset$1, r as projectId$1, t as apiVersion } from "./env-BhBWvmep.js";
//#region node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
	extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
		d.__proto__ = b;
	} || function(d, b) {
		for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	};
	return extendStatics(d, b);
};
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
	return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([n, v]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while (g && (g = 0, op[0] && (_ = 0)), _) try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [6, e];
			y = 0;
		} finally {
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __values(o) {
	var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	if (m) return m.call(o);
	if (o && typeof o.length === "number") return { next: function() {
		if (o && i >= o.length) o = void 0;
		return {
			value: o && o[i++],
			done: !o
		};
	} };
	throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
	return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var g = generator.apply(thisArg, _arguments || []), i, q = [];
	return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function awaitReturn(f) {
		return function(v) {
			return Promise.resolve(v).then(f, reject);
		};
	}
	function verb(n, f) {
		if (g[n]) {
			i[n] = function(v) {
				return new Promise(function(a, b) {
					q.push([
						n,
						v,
						a,
						b
					]) > 1 || resume(n, v);
				});
			};
			if (f) i[n] = f(i[n]);
		}
	}
	function resume(n, v) {
		try {
			step(g[n](v));
		} catch (e) {
			settle(q[0][3], e);
		}
	}
	function step(r) {
		r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
	}
	function fulfill(value) {
		resume("next", value);
	}
	function reject(value) {
		resume("throw", value);
	}
	function settle(f, v) {
		if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
	}
}
function __asyncValues(o) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var m = o[Symbol.asyncIterator], i;
	return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
		return this;
	}, i);
	function verb(n) {
		i[n] = o[n] && function(v) {
			return new Promise(function(resolve, reject) {
				v = o[n](v), settle(resolve, reject, v.done, v.value);
			});
		};
	}
	function settle(resolve, reject, d, v) {
		Promise.resolve(v).then(function(v) {
			resolve({
				value: v,
				done: d
			});
		}, reject);
	}
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheckBig = createLucideIcon("circle-check-big", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleX = createLucideIcon("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock = createLucideIcon("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]);
//#endregion
//#region node_modules/@portabletext/toolkit/dist/index.js
var import_jsx_runtime = require_jsx_runtime();
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function isPortableTextSpan(node) {
	return node._type === "span" && "text" in node && typeof node.text == "string" && (typeof node.marks > "u" || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark == "string"));
}
function isPortableTextBlock(node) {
	return typeof node._type == "string" && node._type[0] !== "@" && (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && node.markDefs.every((def) => typeof def._key == "string")) && "children" in node && Array.isArray(node.children) && node.children.every((child) => typeof child == "object" && "_type" in child);
}
function isPortableTextListItemBlock(block) {
	return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (typeof block.level > "u" || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
	return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
	return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
	return node._type === "@text";
}
var knownDecorators = [
	"strong",
	"em",
	"code",
	"underline",
	"strike-through"
];
function sortMarksByOccurences(span, index, blockChildren) {
	if (!isPortableTextSpan(span) || !span.marks) return [];
	if (!span.marks.length) return [];
	const marks = span.marks.slice(), occurences = {};
	return marks.forEach((mark) => {
		occurences[mark] = 1;
		for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
			const sibling = blockChildren[siblingIndex];
			if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;
			else break;
		}
	}), marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
	const aOccurences = occurences[markA], bOccurences = occurences[markB];
	if (aOccurences !== bOccurences) return bOccurences - aOccurences;
	const aKnownPos = knownDecorators.indexOf(markA), bKnownPos = knownDecorators.indexOf(markB);
	return aKnownPos !== bKnownPos ? aKnownPos - bKnownPos : markA.localeCompare(markB);
}
function buildMarksTree(block) {
	var _a, _b;
	const { children } = block, markDefs = (_a = block.markDefs) != null ? _a : [];
	if (!children || !children.length) return [];
	const sortedMarks = children.map(sortMarksByOccurences), rootNode = {
		_type: "@span",
		children: [],
		markType: "<unknown>"
	};
	let nodeStack = [rootNode];
	for (let i = 0; i < children.length; i++) {
		const span = children[i];
		if (!span) continue;
		const marksNeeded = sortedMarks[i] || [];
		let pos = 1;
		if (nodeStack.length > 1) for (; pos < nodeStack.length; pos++) {
			const mark = ((_b = nodeStack[pos]) == null ? void 0 : _b.markKey) || "", index = marksNeeded.indexOf(mark);
			if (index === -1) break;
			marksNeeded.splice(index, 1);
		}
		nodeStack = nodeStack.slice(0, pos);
		let currentNode = nodeStack[nodeStack.length - 1];
		if (currentNode) {
			for (const markKey of marksNeeded) {
				const markDef = markDefs == null ? void 0 : markDefs.find((def) => def._key === markKey), markType = markDef ? markDef._type : markKey, node = {
					_type: "@span",
					_key: span._key,
					children: [],
					markDef,
					markType,
					markKey
				};
				currentNode.children.push(node), nodeStack.push(node), currentNode = node;
			}
			if (isPortableTextSpan(span)) {
				const lines = span.text.split(`
`);
				for (let line = lines.length; line-- > 1;) lines.splice(line, 0, `
`);
				currentNode.children = currentNode.children.concat(lines.map((text) => ({
					_type: "@text",
					text
				})));
			} else currentNode.children = currentNode.children.concat(span);
		}
	}
	return rootNode.children;
}
function nestLists(blocks, mode) {
	const tree = [];
	let currentList;
	for (let i = 0; i < blocks.length; i++) {
		const block = blocks[i];
		if (block) {
			if (!isPortableTextListItemBlock(block)) {
				tree.push(block), currentList = void 0;
				continue;
			}
			if (!currentList) {
				currentList = listFromBlock(block, i, mode), tree.push(currentList);
				continue;
			}
			if (blockMatchesList(block, currentList)) {
				currentList.children.push(block);
				continue;
			}
			if ((block.level || 1) > currentList.level) {
				const newList = listFromBlock(block, i, mode);
				if (mode === "html") {
					const lastListItem = currentList.children[currentList.children.length - 1], newLastChild = _objectSpread$1(_objectSpread$1({}, lastListItem), {}, { children: [...lastListItem.children, newList] });
					currentList.children[currentList.children.length - 1] = newLastChild;
				} else currentList.children.push(newList);
				currentList = newList;
				continue;
			}
			if ((block.level || 1) < currentList.level) {
				const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, block);
				if (match) {
					currentList = match, currentList.children.push(block);
					continue;
				}
				currentList = listFromBlock(block, i, mode), tree.push(currentList);
				continue;
			}
			if (block.listItem !== currentList.listItem) {
				const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, { level: block.level || 1 });
				if (match && match.listItem === block.listItem) {
					currentList = match, currentList.children.push(block);
					continue;
				} else {
					currentList = listFromBlock(block, i, mode), tree.push(currentList);
					continue;
				}
			}
			console.warn("Unknown state encountered for block", block), tree.push(block);
		}
	}
	return tree;
}
function blockMatchesList(block, list) {
	return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
	return {
		_type: "@list",
		_key: `${block._key || `${index}`}-parent`,
		mode,
		level: block.level || 1,
		listItem: block.listItem,
		children: [block]
	};
}
function findListMatching(rootNode, matching) {
	const level = matching.level || 1, style = matching.listItem || "normal", filterOnType = typeof matching.listItem == "string";
	if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
	if (!("children" in rootNode)) return;
	const node = rootNode.children[rootNode.children.length - 1];
	return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
	let text = "";
	return span.children.forEach((current) => {
		isPortableTextToolkitTextNode(current) ? text += current.text : isPortableTextToolkitSpan(current) && (text += spanToPlainText(current));
	}), text;
}
//#endregion
//#region node_modules/@portabletext/react/dist/index.js
var _excluded = [
	"block",
	"list",
	"listItem",
	"marks",
	"types"
], _excluded2 = ["listItem"], _excluded3 = ["_key"];
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.includes(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var defaultLists = {
	number: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children }),
	bullet: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children })
}, DefaultListItem = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children }), link = ({ children, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
	href: value?.href,
	children
}), underlineStyle = { textDecoration: "underline" }, defaultMarks = {
	em: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children }),
	strong: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children }),
	code: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children }),
	underline: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: underlineStyle,
		children
	}),
	"strike-through": ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", { children }),
	link
}, getTemplate = (type, prop) => `[@portabletext/react] Unknown ${type}, specify a component for it in the \`components.${prop}\` prop`, unknownTypeWarning = (typeName) => getTemplate(`block type "${typeName}"`, "types"), unknownMarkWarning = (markType) => getTemplate(`mark type "${markType}"`, "marks"), unknownBlockStyleWarning = (blockStyle) => getTemplate(`block style "${blockStyle}"`, "block"), unknownListStyleWarning = (listStyle) => getTemplate(`list style "${listStyle}"`, "list"), unknownListItemStyleWarning = (listStyle) => getTemplate(`list item style "${listStyle}"`, "listItem");
function printWarning(message) {
	console.warn(message);
}
var hidden = { display: "none" }, DefaultUnknownType = ({ value, isInline }) => {
	const warning = unknownTypeWarning(value._type);
	return isInline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: hidden,
		children: warning
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: hidden,
		children: warning
	});
}, DefaultUnknownMark = ({ markType, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: `unknown__pt__mark__${markType}`,
	children
}), DefaultUnknownBlockStyle = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children }), DefaultUnknownList = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children }), DefaultUnknownListItem = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children }), DefaultHardBreak = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), defaultComponents = {
	types: {},
	block: {
		normal: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children }),
		blockquote: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children }),
		h1: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children }),
		h2: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children }),
		h3: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children }),
		h4: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children }),
		h5: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { children }),
		h6: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children })
	},
	marks: defaultMarks,
	list: defaultLists,
	listItem: DefaultListItem,
	hardBreak: DefaultHardBreak,
	unknownType: DefaultUnknownType,
	unknownMark: DefaultUnknownMark,
	unknownList: DefaultUnknownList,
	unknownListItem: DefaultUnknownListItem,
	unknownBlockStyle: DefaultUnknownBlockStyle
};
function mergeComponents(parent, overrides) {
	const { block, list, listItem, marks, types } = overrides, rest = _objectWithoutProperties(overrides, _excluded);
	return _objectSpread(_objectSpread({}, parent), {}, {
		block: mergeDeeply(parent, overrides, "block"),
		list: mergeDeeply(parent, overrides, "list"),
		listItem: mergeDeeply(parent, overrides, "listItem"),
		marks: mergeDeeply(parent, overrides, "marks"),
		types: mergeDeeply(parent, overrides, "types")
	}, rest);
}
function mergeDeeply(parent, overrides, key) {
	const override = overrides[key], parentVal = parent[key];
	return typeof override == "function" || override && typeof parentVal == "function" ? override : override ? _objectSpread(_objectSpread({}, parentVal), override) : parentVal;
}
function PortableText({ value: input, components: componentOverrides, listNestingMode, onMissingComponent: missingComponentHandler = printWarning }) {
	const handleMissingComponent = missingComponentHandler || noop$1, nested = nestLists(Array.isArray(input) ? input : [input], listNestingMode || "html"), components = (0, import_react.useMemo)(() => componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents, [componentOverrides]), renderNode = (0, import_react.useMemo)(() => getNodeRenderer(components, handleMissingComponent), [components, handleMissingComponent]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: nested.map((node, index) => renderNode({
		node,
		index,
		isInline: !1,
		renderNode
	})) });
}
var getNodeRenderer = (components, handleMissingComponent) => {
	function renderNode(options) {
		const { node, index, isInline } = options, key = node._key || `node-${index}`;
		return isPortableTextToolkitList(node) ? renderList(node, index, key) : isPortableTextListItemBlock(node) ? renderListItem(node, index, key) : isPortableTextToolkitSpan(node) ? renderSpan(node, index, key) : hasCustomComponentForNode(node) ? renderCustomBlock(node, index, key, isInline) : isPortableTextBlock(node) ? renderBlock(node, index, key, isInline) : isPortableTextToolkitTextNode(node) ? renderText(node, key) : renderUnknownType(node, index, key, isInline);
	}
	function hasCustomComponentForNode(node) {
		return node._type in components.types;
	}
	function renderListItem(node, index, key) {
		const tree = serializeBlock({
			node,
			index,
			isInline: !1,
			renderNode
		}), renderer = components.listItem, Li = (typeof renderer == "function" ? renderer : renderer[node.listItem]) || components.unknownListItem;
		if (Li === components.unknownListItem) {
			const style = node.listItem || "bullet";
			handleMissingComponent(unknownListItemStyleWarning(style), {
				type: style,
				nodeType: "listItemStyle"
			});
		}
		let children = tree.children;
		if (node.style && node.style !== "normal") {
			const { listItem } = node;
			children = renderNode({
				node: _objectWithoutProperties(node, _excluded2),
				index,
				isInline: !1,
				renderNode
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
			value: node,
			index,
			isInline: !1,
			renderNode,
			children
		}, key);
	}
	function renderList(node, index, key) {
		const children = node.children.map((child, childIndex) => renderNode({
			node: child._key ? child : _objectSpread(_objectSpread({}, child), {}, { _key: `li-${index}-${childIndex}` }),
			index: childIndex,
			isInline: !1,
			renderNode
		})), component = components.list, List = (typeof component == "function" ? component : component[node.listItem]) || components.unknownList;
		if (List === components.unknownList) {
			const style = node.listItem || "bullet";
			handleMissingComponent(unknownListStyleWarning(style), {
				nodeType: "listStyle",
				type: style
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			value: node,
			index,
			isInline: !1,
			renderNode,
			children
		}, key);
	}
	function renderSpan(node, _index, key) {
		const { markDef, markType, markKey } = node, Span = components.marks[markType] || components.unknownMark, children = node.children.map((child, childIndex) => renderNode({
			node: child,
			index: childIndex,
			isInline: !0,
			renderNode
		}));
		return Span === components.unknownMark && handleMissingComponent(unknownMarkWarning(markType), {
			nodeType: "mark",
			type: markType
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Span, {
			text: spanToPlainText(node),
			value: markDef,
			markType,
			markKey,
			renderNode,
			children
		}, key);
	}
	function renderBlock(node, index, key, isInline) {
		const _serializeBlock = serializeBlock({
			node,
			index,
			isInline,
			renderNode
		}), { _key } = _serializeBlock, props = _objectWithoutProperties(_serializeBlock, _excluded3), style = props.node.style || "normal", Block = (typeof components.block == "function" ? components.block : components.block[style]) || components.unknownBlockStyle;
		return Block === components.unknownBlockStyle && handleMissingComponent(unknownBlockStyleWarning(style), {
			nodeType: "blockStyle",
			type: style
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, _objectSpread(_objectSpread({}, props), {}, {
			value: props.node,
			renderNode
		}), key);
	}
	function renderText(node, key) {
		if (node.text === `
`) {
			const HardBreak = components.hardBreak;
			return HardBreak ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardBreak, {}, key) : `
`;
		}
		return node.text;
	}
	function renderUnknownType(node, index, key, isInline) {
		const nodeOptions = {
			value: node,
			isInline,
			index,
			renderNode
		};
		handleMissingComponent(unknownTypeWarning(node._type), {
			nodeType: "block",
			type: node._type
		});
		const UnknownType = components.unknownType;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnknownType, _objectSpread({}, nodeOptions), key);
	}
	function renderCustomBlock(node, index, key, isInline) {
		const nodeOptions = {
			value: node,
			isInline,
			index,
			renderNode
		}, Node = components.types[node._type];
		return Node ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, _objectSpread({}, nodeOptions), key) : null;
	}
	return renderNode;
};
function serializeBlock(options) {
	const { node, index, isInline, renderNode } = options, children = buildMarksTree(node).map((child, i) => renderNode({
		node: child,
		isInline: !0,
		index: i,
		renderNode
	}));
	return {
		_key: node._key || `block-${index}`,
		children,
		index,
		isInline,
		node
	};
}
function noop$1() {}
var GearReviewDetail_module_default = {
	container: "_container_1eer4_1",
	content: "_content_1eer4_8",
	backNav: "_backNav_1eer4_15",
	backLink: "_backLink_1eer4_19",
	header: "_header_1eer4_34",
	headerContent: "_headerContent_1eer4_42",
	brandInfo: "_brandInfo_1eer4_46",
	brand: "_brand_1eer4_46",
	model: "_model_1eer4_61",
	gearName: "_gearName_1eer4_69",
	reviewTitle: "_reviewTitle_1eer4_77",
	headerMeta: "_headerMeta_1eer4_85",
	metaInfo: "_metaInfo_1eer4_91",
	metaItem: "_metaItem_1eer4_100",
	price: "_price_1eer4_106",
	starRating: "_starRating_1eer4_113",
	small: "_small_1eer4_119",
	large: "_large_1eer4_123",
	starFilled: "_starFilled_1eer4_127",
	starEmpty: "_starEmpty_1eer4_132",
	ratingText: "_ratingText_1eer4_137",
	mainContent: "_mainContent_1eer4_150",
	leftColumn: "_leftColumn_1eer4_164",
	imageGallery: "_imageGallery_1eer4_171",
	mainImageContainer: "_mainImageContainer_1eer4_178",
	mainImage: "_mainImage_1eer4_178",
	imageCaption: "_imageCaption_1eer4_194",
	thumbnailsContainer: "_thumbnailsContainer_1eer4_206",
	thumbnails: "_thumbnails_1eer4_206",
	noLeftScroll: "_noLeftScroll_1eer4_265",
	noRightScroll: "_noRightScroll_1eer4_269",
	imageCounter: "_imageCounter_1eer4_274",
	dots: "_dots_1eer4_284",
	dot: "_dot_1eer4_284",
	active: "_active_1eer4_299",
	scrollButton: "_scrollButton_1eer4_309",
	left: "_left_1eer4_164",
	right: "_right_1eer4_340",
	imageWrapper: "_imageWrapper_1eer4_350",
	loading: "_loading_1eer4_361",
	loadingOverlay: "_loadingOverlay_1eer4_365",
	loadingSpinner: "_loadingSpinner_1eer4_378",
	spin: "_spin_1eer4_1",
	thumbnail: "_thumbnail_1eer4_206",
	thumbnailImage: "_thumbnailImage_1eer4_412",
	expandButton: "_expandButton_1eer4_421",
	modal: "_modal_1eer4_450",
	modalContent: "_modalContent_1eer4_464",
	modalHeader: "_modalHeader_1eer4_477",
	modalCounter: "_modalCounter_1eer4_487",
	closeButton: "_closeButton_1eer4_493",
	modalImageContainer: "_modalImageContainer_1eer4_514",
	modalImageWrapper: "_modalImageWrapper_1eer4_526",
	modalImage: "_modalImage_1eer4_514",
	modalNavButton: "_modalNavButton_1eer4_543",
	modalPrev: "_modalPrev_1eer4_565",
	modalNext: "_modalNext_1eer4_569",
	modalCaption: "_modalCaption_1eer4_573",
	modalThumbnails: "_modalThumbnails_1eer4_585",
	modalThumbnail: "_modalThumbnail_1eer4_585",
	modalThumbnailImage: "_modalThumbnailImage_1eer4_615",
	quickInfo: "_quickInfo_1eer4_626",
	quickInfoTitle: "_quickInfoTitle_1eer4_633",
	quickInfoGrid: "_quickInfoGrid_1eer4_640",
	quickInfoItem: "_quickInfoItem_1eer4_646",
	tagsSection: "_tagsSection_1eer4_672",
	tagGroup: "_tagGroup_1eer4_679",
	tags: "_tags_1eer4_672",
	tag: "_tag_1eer4_672",
	category: "_category_1eer4_708",
	activity: "_activity_1eer4_714",
	season: "_season_1eer4_720",
	rightColumn: "_rightColumn_1eer4_727",
	summary: "_summary_1eer4_748",
	summaryText: "_summaryText_1eer4_755",
	prosConsSection: "_prosConsSection_1eer4_763",
	prosCons: "_prosCons_1eer4_763",
	pros: "_pros_1eer4_763",
	cons: "_cons_1eer4_783",
	prosTitle: "_prosTitle_1eer4_788",
	consTitle: "_consTitle_1eer4_789",
	prosList: "_prosList_1eer4_814",
	consList: "_consList_1eer4_815",
	detailedRatings: "_detailedRatings_1eer4_846",
	ratingsGrid: "_ratingsGrid_1eer4_853",
	ratingItem: "_ratingItem_1eer4_859",
	ratingBar: "_ratingBar_1eer4_873",
	ratingFill: "_ratingFill_1eer4_882",
	ratingExcellent: "_ratingExcellent_1eer4_888",
	ratingGood: "_ratingGood_1eer4_892",
	ratingFair: "_ratingFair_1eer4_896",
	ratingPoor: "_ratingPoor_1eer4_900",
	ratingValue: "_ratingValue_1eer4_904",
	testingConditions: "_testingConditions_1eer4_914",
	reviewContent: "_reviewContent_1eer4_928",
	portableText: "_portableText_1eer4_935",
	specifications: "_specifications_1eer4_984",
	specsGrid: "_specsGrid_1eer4_991",
	specItem: "_specItem_1eer4_997",
	specLabel: "_specLabel_1eer4_1007",
	specValue: "_specValue_1eer4_1012",
	featuresList: "_featuresList_1eer4_1016",
	purchaseLinks: "_purchaseLinks_1eer4_1027",
	retailerGrid: "_retailerGrid_1eer4_1034",
	retailerLink: "_retailerLink_1eer4_1040",
	retailerInfo: "_retailerInfo_1eer4_1058",
	retailerName: "_retailerName_1eer4_1064",
	retailerPrice: "_retailerPrice_1eer4_1069",
	recommendations: "_recommendations_1eer4_1080",
	recommendedFor: "_recommendedFor_1eer4_1087",
	alternatives: "_alternatives_1eer4_1088"
};
//#endregion
//#region node_modules/@sanity/image-url/lib/node/parseAssetId.js
var require_parseAssetId = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
	function parseAssetId(ref) {
		var _a = ref.split("-"), id = _a[1], dimensionString = _a[2], format = _a[3];
		if (!id || !dimensionString || !format) throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
		var _b = dimensionString.split("x"), imgWidthStr = _b[0], imgHeightStr = _b[1];
		var width = +imgWidthStr;
		var height = +imgHeightStr;
		if (!(isFinite(width) && isFinite(height))) throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
		return {
			id,
			width,
			height,
			format
		};
	}
	exports.default = parseAssetId;
}));
//#endregion
//#region node_modules/@sanity/image-url/lib/node/parseSource.js
var require_parseSource = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __assign = exports && exports.__assign || function() {
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isInProgressUpload = void 0;
	var isRef = function(src) {
		var source = src;
		return source ? typeof source._ref === "string" : false;
	};
	var isAsset = function(src) {
		var source = src;
		return source ? typeof source._id === "string" : false;
	};
	var isAssetStub = function(src) {
		var source = src;
		return source && source.asset ? typeof source.asset.url === "string" : false;
	};
	var isInProgressUpload = function(src) {
		if (typeof src === "object" && src !== null) {
			var obj = src;
			return obj._upload && (!obj.asset || !obj.asset._ref);
		}
		return false;
	};
	exports.isInProgressUpload = isInProgressUpload;
	function parseSource(source) {
		if (!source) return null;
		var image;
		if (typeof source === "string" && isUrl(source)) image = { asset: { _ref: urlToId(source) } };
		else if (typeof source === "string") image = { asset: { _ref: source } };
		else if (isRef(source)) image = { asset: source };
		else if (isAsset(source)) image = { asset: { _ref: source._id || "" } };
		else if (isAssetStub(source)) image = { asset: { _ref: urlToId(source.asset.url) } };
		else if (typeof source.asset === "object") image = __assign({}, source);
		else return null;
		var img = source;
		if (img.crop) image.crop = img.crop;
		if (img.hotspot) image.hotspot = img.hotspot;
		return applyDefaults(image);
	}
	exports.default = parseSource;
	function isUrl(url) {
		return /^https?:\/\//.test("".concat(url));
	}
	function urlToId(url) {
		var parts = url.split("/").slice(-1);
		return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, "-$1");
	}
	function applyDefaults(image) {
		if (image.crop && image.hotspot) return image;
		var result = __assign({}, image);
		if (!result.crop) result.crop = {
			left: 0,
			top: 0,
			bottom: 0,
			right: 0
		};
		if (!result.hotspot) result.hotspot = {
			x: .5,
			y: .5,
			height: 1,
			width: 1
		};
		return result;
	}
}));
//#endregion
//#region node_modules/@sanity/image-url/lib/node/urlForImage.js
var require_urlForImage = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __assign = exports && exports.__assign || function() {
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		}
		__setModuleDefault(result, mod);
		return result;
	};
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.parseSource = exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = void 0;
	var parseAssetId_1 = __importDefault(require_parseAssetId());
	var parseSource_1 = __importStar(require_parseSource());
	exports.parseSource = parseSource_1.default;
	exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
		["width", "w"],
		["height", "h"],
		["format", "fm"],
		["download", "dl"],
		["blur", "blur"],
		["sharpen", "sharp"],
		["invert", "invert"],
		["orientation", "or"],
		["minHeight", "min-h"],
		["maxHeight", "max-h"],
		["minWidth", "min-w"],
		["maxWidth", "max-w"],
		["quality", "q"],
		["fit", "fit"],
		["crop", "crop"],
		["saturation", "sat"],
		["auto", "auto"],
		["dpr", "dpr"],
		["pad", "pad"],
		["frame", "frame"]
	];
	function urlForImage(options) {
		var spec = __assign({}, options || {});
		var source = spec.source;
		delete spec.source;
		var image = (0, parseSource_1.default)(source);
		if (!image) {
			if (source && (0, parseSource_1.isInProgressUpload)(source)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
			throw new Error("Unable to resolve image URL from source (".concat(JSON.stringify(source), ")"));
		}
		var id = image.asset._ref || image.asset._id || "";
		var asset = (0, parseAssetId_1.default)(id);
		var cropLeft = Math.round(image.crop.left * asset.width);
		var cropTop = Math.round(image.crop.top * asset.height);
		var crop = {
			left: cropLeft,
			top: cropTop,
			width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
			height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
		};
		var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
		var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
		var hotSpotCenterX = image.hotspot.x * asset.width;
		var hotSpotCenterY = image.hotspot.y * asset.height;
		var hotspot = {
			left: hotSpotCenterX - hotSpotHorizontalRadius,
			top: hotSpotCenterY - hotSpotVerticalRadius,
			right: hotSpotCenterX + hotSpotHorizontalRadius,
			bottom: hotSpotCenterY + hotSpotVerticalRadius
		};
		if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) spec = __assign(__assign({}, spec), fit({
			crop,
			hotspot
		}, spec));
		return specToImageUrl(__assign(__assign({}, spec), { asset }));
	}
	exports.default = urlForImage;
	function specToImageUrl(spec) {
		var cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, "");
		var vanityStub = spec.vanityName ? "/".concat(spec.vanityName) : "";
		var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format).concat(vanityStub);
		var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
		var params = [];
		if (spec.rect) {
			var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
			if (left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width) params.push("rect=".concat(left, ",").concat(top_1, ",").concat(width, ",").concat(height));
		}
		if (spec.bg) params.push("bg=".concat(spec.bg));
		if (spec.focalPoint) {
			params.push("fp-x=".concat(spec.focalPoint.x));
			params.push("fp-y=".concat(spec.focalPoint.y));
		}
		var flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
		if (flip) params.push("flip=".concat(flip));
		exports.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
			var specName = mapping[0], param = mapping[1];
			if (typeof spec[specName] !== "undefined") params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
			else if (typeof spec[param] !== "undefined") params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
		});
		if (params.length === 0) return baseUrl;
		return "".concat(baseUrl, "?").concat(params.join("&"));
	}
	function fit(source, spec) {
		var cropRect;
		var imgWidth = spec.width;
		var imgHeight = spec.height;
		if (!(imgWidth && imgHeight)) return {
			width: imgWidth,
			height: imgHeight,
			rect: source.crop
		};
		var crop = source.crop;
		var hotspot = source.hotspot;
		var desiredAspectRatio = imgWidth / imgHeight;
		if (crop.width / crop.height > desiredAspectRatio) {
			var height = Math.round(crop.height);
			var width = Math.round(height * desiredAspectRatio);
			var top_2 = Math.max(0, Math.round(crop.top));
			var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
			var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
			if (left < crop.left) left = crop.left;
			else if (left + width > crop.left + crop.width) left = crop.left + crop.width - width;
			cropRect = {
				left,
				top: top_2,
				width,
				height
			};
		} else {
			var width = crop.width;
			var height = Math.round(width / desiredAspectRatio);
			var left = Math.max(0, Math.round(crop.left));
			var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
			var top_3 = Math.max(0, Math.round(hotspotYCenter - height / 2));
			if (top_3 < crop.top) top_3 = crop.top;
			else if (top_3 + height > crop.top + crop.height) top_3 = crop.top + crop.height - height;
			cropRect = {
				left,
				top: top_3,
				width,
				height
			};
		}
		return {
			width: imgWidth,
			height: imgHeight,
			rect: cropRect
		};
	}
}));
//#endregion
//#region node_modules/@sanity/image-url/lib/node/builder.js
var require_builder = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __assign = exports && exports.__assign || function() {
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		}
		__setModuleDefault(result, mod);
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImageUrlBuilder = void 0;
	var urlForImage_1 = __importStar(require_urlForImage());
	var validFits = [
		"clip",
		"crop",
		"fill",
		"fillmax",
		"max",
		"scale",
		"min"
	];
	var validCrops = [
		"top",
		"bottom",
		"left",
		"right",
		"center",
		"focalpoint",
		"entropy"
	];
	var validAutoModes = ["format"];
	function isSanityModernClientLike(client) {
		return client && "config" in client ? typeof client.config === "function" : false;
	}
	function isSanityClientLike(client) {
		return client && "clientConfig" in client ? typeof client.clientConfig === "object" : false;
	}
	function rewriteSpecName(key) {
		var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
		for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
			var entry = specs_1[_i];
			var specName = entry[0], param = entry[1];
			if (key === specName || key === param) return specName;
		}
		return key;
	}
	function urlBuilder(options) {
		if (isSanityModernClientLike(options)) {
			var _a = options.config(), apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
			var apiHost = apiUrl || "https://api.sanity.io";
			return new ImageUrlBuilder(null, {
				baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
				projectId,
				dataset
			});
		}
		if (isSanityClientLike(options)) {
			var _b = options.clientConfig, apiUrl = _b.apiHost, projectId = _b.projectId, dataset = _b.dataset;
			var apiHost = apiUrl || "https://api.sanity.io";
			return new ImageUrlBuilder(null, {
				baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
				projectId,
				dataset
			});
		}
		return new ImageUrlBuilder(null, options || {});
	}
	exports.default = urlBuilder;
	var ImageUrlBuilder = function() {
		function ImageUrlBuilder(parent, options) {
			this.options = parent ? __assign(__assign({}, parent.options || {}), options || {}) : __assign({}, options || {});
		}
		ImageUrlBuilder.prototype.withOptions = function(options) {
			var baseUrl = options.baseUrl || this.options.baseUrl;
			var newOptions = { baseUrl };
			for (var key in options) if (options.hasOwnProperty(key)) {
				var specKey = rewriteSpecName(key);
				newOptions[specKey] = options[key];
			}
			return new ImageUrlBuilder(this, __assign({ baseUrl }, newOptions));
		};
		ImageUrlBuilder.prototype.image = function(source) {
			return this.withOptions({ source });
		};
		ImageUrlBuilder.prototype.dataset = function(dataset) {
			return this.withOptions({ dataset });
		};
		ImageUrlBuilder.prototype.projectId = function(projectId) {
			return this.withOptions({ projectId });
		};
		ImageUrlBuilder.prototype.bg = function(bg) {
			return this.withOptions({ bg });
		};
		ImageUrlBuilder.prototype.dpr = function(dpr) {
			return this.withOptions(dpr && dpr !== 1 ? { dpr } : {});
		};
		ImageUrlBuilder.prototype.width = function(width) {
			return this.withOptions({ width });
		};
		ImageUrlBuilder.prototype.height = function(height) {
			return this.withOptions({ height });
		};
		ImageUrlBuilder.prototype.focalPoint = function(x, y) {
			return this.withOptions({ focalPoint: {
				x,
				y
			} });
		};
		ImageUrlBuilder.prototype.maxWidth = function(maxWidth) {
			return this.withOptions({ maxWidth });
		};
		ImageUrlBuilder.prototype.minWidth = function(minWidth) {
			return this.withOptions({ minWidth });
		};
		ImageUrlBuilder.prototype.maxHeight = function(maxHeight) {
			return this.withOptions({ maxHeight });
		};
		ImageUrlBuilder.prototype.minHeight = function(minHeight) {
			return this.withOptions({ minHeight });
		};
		ImageUrlBuilder.prototype.size = function(width, height) {
			return this.withOptions({
				width,
				height
			});
		};
		ImageUrlBuilder.prototype.blur = function(blur) {
			return this.withOptions({ blur });
		};
		ImageUrlBuilder.prototype.sharpen = function(sharpen) {
			return this.withOptions({ sharpen });
		};
		ImageUrlBuilder.prototype.rect = function(left, top, width, height) {
			return this.withOptions({ rect: {
				left,
				top,
				width,
				height
			} });
		};
		ImageUrlBuilder.prototype.format = function(format) {
			return this.withOptions({ format });
		};
		ImageUrlBuilder.prototype.invert = function(invert) {
			return this.withOptions({ invert });
		};
		ImageUrlBuilder.prototype.orientation = function(orientation) {
			return this.withOptions({ orientation });
		};
		ImageUrlBuilder.prototype.quality = function(quality) {
			return this.withOptions({ quality });
		};
		ImageUrlBuilder.prototype.forceDownload = function(download) {
			return this.withOptions({ download });
		};
		ImageUrlBuilder.prototype.flipHorizontal = function() {
			return this.withOptions({ flipHorizontal: true });
		};
		ImageUrlBuilder.prototype.flipVertical = function() {
			return this.withOptions({ flipVertical: true });
		};
		ImageUrlBuilder.prototype.ignoreImageParams = function() {
			return this.withOptions({ ignoreImageParams: true });
		};
		ImageUrlBuilder.prototype.fit = function(value) {
			if (validFits.indexOf(value) === -1) throw new Error("Invalid fit mode \"".concat(value, "\""));
			return this.withOptions({ fit: value });
		};
		ImageUrlBuilder.prototype.crop = function(value) {
			if (validCrops.indexOf(value) === -1) throw new Error("Invalid crop mode \"".concat(value, "\""));
			return this.withOptions({ crop: value });
		};
		ImageUrlBuilder.prototype.saturation = function(saturation) {
			return this.withOptions({ saturation });
		};
		ImageUrlBuilder.prototype.auto = function(value) {
			if (validAutoModes.indexOf(value) === -1) throw new Error("Invalid auto mode \"".concat(value, "\""));
			return this.withOptions({ auto: value });
		};
		ImageUrlBuilder.prototype.pad = function(pad) {
			return this.withOptions({ pad });
		};
		ImageUrlBuilder.prototype.vanityName = function(value) {
			return this.withOptions({ vanityName: value });
		};
		ImageUrlBuilder.prototype.frame = function(frame) {
			if (frame !== 1) throw new Error("Invalid frame value \"".concat(frame, "\""));
			return this.withOptions({ frame });
		};
		ImageUrlBuilder.prototype.url = function() {
			return (0, urlForImage_1.default)(this.options);
		};
		ImageUrlBuilder.prototype.toString = function() {
			return this.url();
		};
		return ImageUrlBuilder;
	}();
	exports.ImageUrlBuilder = ImageUrlBuilder;
}));
//#endregion
//#region node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js
var import_node = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = (exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	})(require_builder()).default;
})))(), 1);
var e = !(typeof navigator > "u") && "ReactNative" === navigator.product, t = { timeout: e ? 6e4 : 12e4 }, r = function(r) {
	const a = {
		...t,
		..."string" == typeof r ? { url: r } : r
	};
	if (a.timeout = n$2(a.timeout), a.query) {
		const { url: t, searchParams: r } = function(t) {
			const r = t.indexOf("?");
			if (-1 === r) return {
				url: t,
				searchParams: new URLSearchParams()
			};
			const n = t.slice(0, r), a = t.slice(r + 1);
			if (!e) return {
				url: n,
				searchParams: new URLSearchParams(a)
			};
			if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
			const s = new URLSearchParams();
			for (const e of a.split("&")) {
				const [t, r] = e.split("=");
				t && s.append(o$1(t), o$1(r || ""));
			}
			return {
				url: n,
				searchParams: s
			};
		}(a.url);
		for (const [e, o] of Object.entries(a.query)) {
			if (void 0 !== o) if (Array.isArray(o)) for (const t of o) r.append(e, t);
			else r.append(e, o);
			const n = r.toString();
			n && (a.url = `${t}?${n}`);
		}
	}
	return a.method = a.body && !a.method ? "POST" : (a.method || "GET").toUpperCase(), a;
};
function o$1(e) {
	return decodeURIComponent(e.replace(/\+/g, " "));
}
function n$2(e) {
	if (!1 === e || 0 === e) return !1;
	if (e.connect || e.socket) return e;
	const r = Number(e);
	return isNaN(r) ? n$2(t.timeout) : {
		connect: r,
		socket: r
	};
}
var a$2 = /^https?:\/\//i, s$1 = function(e) {
	if (!a$2.test(e.url)) throw new Error(`"${e.url}" is not a valid URL`);
};
function c$2(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
//#endregion
//#region node_modules/get-it/dist/index.browser.js
var o = [
	"request",
	"response",
	"progress",
	"error",
	"abort"
], n$1 = [
	"processOptions",
	"validateOptions",
	"interceptRequest",
	"finalizeOptions",
	"onRequest",
	"onResponse",
	"onError",
	"onReturn",
	"onHeaders"
];
function s(r$2, a) {
	const i = [], u = n$1.reduce((e, t) => (e[t] = e[t] || [], e), {
		processOptions: [r],
		validateOptions: [s$1]
	});
	function l(e) {
		const t = o.reduce((e, t) => (e[t] = function() {
			const e = /* @__PURE__ */ Object.create(null);
			let t = 0;
			return {
				publish: function(t) {
					for (const r in e) e[r](t);
				},
				subscribe: function(r) {
					const o = t++;
					return e[o] = r, function() {
						delete e[o];
					};
				}
			};
		}(), e), {}), r = ((e) => function(t, r, ...o) {
			const n = "onError" === t;
			let s = r;
			for (let r = 0; r < e[t].length && (s = (0, e[t][r])(s, ...o), !n || s); r++);
			return s;
		})(u), n = r("processOptions", e);
		r("validateOptions", n);
		const s = {
			options: n,
			channels: t,
			applyMiddleware: r
		};
		let i;
		const l = t.request.subscribe((e) => {
			i = a(e, (o, n) => ((e, o, n) => {
				let s = e, a = o;
				if (!s) try {
					a = r("onResponse", o, n);
				} catch (e) {
					a = null, s = e;
				}
				s = s && r("onError", s, n), s ? t.error.publish(s) : a && t.response.publish(a);
			})(o, n, e));
		});
		t.abort.subscribe(() => {
			l(), i && i.abort();
		});
		const c = r("onReturn", t, s);
		return c === t && t.request.publish(s), c;
	}
	return l.use = function(e) {
		if (!e) throw new Error("Tried to add middleware that resolved to falsey value");
		if ("function" == typeof e) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
		if (e.onReturn && u.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
		return n$1.forEach((t) => {
			e[t] && u[t].push(e[t]);
		}), i.push(e), l;
	}, l.clone = () => s(i, a), r$2.forEach(l.use), l;
}
var a$1, i, u$1 = /* @__PURE__ */ c$2(function() {
	if (i) return a$1;
	i = 1;
	var e = function(e) {
		return e.replace(/^\s+|\s+$/g, "");
	}, t = function(e) {
		return "[object Array]" === Object.prototype.toString.call(e);
	};
	return a$1 = function(r) {
		if (!r) return {};
		for (var o = /* @__PURE__ */ Object.create(null), n = e(r).split("\n"), s = 0; s < n.length; s++) {
			var a = n[s], i = a.indexOf(":"), u = e(a.slice(0, i)).toLowerCase(), l = e(a.slice(i + 1));
			typeof o[u] > "u" ? o[u] = l : t(o[u]) ? o[u].push(l) : o[u] = [o[u], l];
		}
		return o;
	};
}());
var l$1 = class {
	onabort;
	onerror;
	onreadystatechange;
	ontimeout;
	readyState = 0;
	response;
	responseText = "";
	responseType = "";
	status;
	statusText;
	withCredentials;
	#e;
	#t;
	#r;
	#o = {};
	#n;
	#s = {};
	#a;
	open(e, t, r) {
		this.#e = e, this.#t = t, this.#r = "", this.readyState = 1, this.onreadystatechange?.(), this.#n = void 0;
	}
	abort() {
		this.#n && this.#n.abort();
	}
	getAllResponseHeaders() {
		return this.#r;
	}
	setRequestHeader(e, t) {
		this.#o[e] = t;
	}
	setInit(e, t = !0) {
		this.#s = e, this.#a = t;
	}
	send(e) {
		const t = "arraybuffer" !== this.responseType, r = {
			...this.#s,
			method: this.#e,
			headers: this.#o,
			body: e
		};
		"function" == typeof AbortController && this.#a && (this.#n = new AbortController(), typeof EventTarget < "u" && this.#n.signal instanceof EventTarget && (r.signal = this.#n.signal)), typeof document < "u" && (r.credentials = this.withCredentials ? "include" : "omit"), fetch(this.#t, r).then((e) => (e.headers.forEach((e, t) => {
			this.#r += `${t}: ${e}\r\n`;
		}), this.status = e.status, this.statusText = e.statusText, this.readyState = 3, this.onreadystatechange?.(), t ? e.text() : e.arrayBuffer())).then((e) => {
			"string" == typeof e ? this.responseText = e : this.response = e, this.readyState = 4, this.onreadystatechange?.();
		}).catch((e) => {
			"AbortError" !== e.name ? this.onerror?.(e) : this.onabort?.();
		});
	}
}, c$1 = "function" == typeof XMLHttpRequest ? "xhr" : "fetch", h = "xhr" === c$1 ? XMLHttpRequest : l$1, d$1 = (e, t) => {
	const r = e.options, o = e.applyMiddleware("finalizeOptions", r), n = {}, s = e.applyMiddleware("interceptRequest", void 0, {
		adapter: c$1,
		context: e
	});
	if (s) {
		const e = setTimeout(t, 0, null, s);
		return { abort: () => clearTimeout(e) };
	}
	let a = new h();
	a instanceof l$1 && "object" == typeof o.fetch && a.setInit(o.fetch, o.useAbortSignal ?? !0);
	const i = o.headers, d = o.timeout;
	let p = !1, f = !1, b = !1;
	if (a.onerror = (e) => {
		m(a instanceof l$1 ? e instanceof Error ? e : new Error(`Request error while attempting to reach is ${o.url}`, { cause: e }) : /* @__PURE__ */ new Error(`Request error while attempting to reach is ${o.url}${e.lengthComputable ? `(${e.loaded} of ${e.total} bytes transferred)` : ""}`));
	}, a.ontimeout = (e) => {
		m(/* @__PURE__ */ new Error(`Request timeout while attempting to reach ${o.url}${e.lengthComputable ? `(${e.loaded} of ${e.total} bytes transferred)` : ""}`));
	}, a.onabort = () => {
		w(!0), p = !0;
	}, a.onreadystatechange = function() {
		d && (w(), n.socket = setTimeout(() => y("ESOCKETTIMEDOUT"), d.socket)), !p && a && 4 === a.readyState && 0 !== a.status && function() {
			if (!(p || f || b)) {
				if (0 === a.status) return void m(/* @__PURE__ */ new Error("Unknown XHR error"));
				w(), f = !0, t(null, {
					body: a.response || ("" === a.responseType || "text" === a.responseType ? a.responseText : ""),
					url: o.url,
					method: o.method,
					headers: u$1(a.getAllResponseHeaders()),
					statusCode: a.status,
					statusMessage: a.statusText
				});
			}
		}();
	}, a.open(o.method, o.url, !0), a.withCredentials = !!o.withCredentials, i && a.setRequestHeader) for (const e in i) i.hasOwnProperty(e) && a.setRequestHeader(e, i[e]);
	return o.rawBody && (a.responseType = "arraybuffer"), e.applyMiddleware("onRequest", {
		options: o,
		adapter: c$1,
		request: a,
		context: e
	}), a.send(o.body || null), d && (n.connect = setTimeout(() => y("ETIMEDOUT"), d.connect)), { abort: function() {
		p = !0, a && a.abort();
	} };
	function y(t) {
		b = !0, a.abort();
		const r = /* @__PURE__ */ new Error("ESOCKETTIMEDOUT" === t ? `Socket timed out on request to ${o.url}` : `Connection timed out on request to ${o.url}`);
		r.code = t, e.channels.error.publish(r);
	}
	function w(e) {
		(e || p || a && a.readyState >= 2 && n.connect) && clearTimeout(n.connect), n.socket && clearTimeout(n.socket);
	}
	function m(e) {
		if (f) return;
		w(!0), f = !0, a = null;
		const r = e || /* @__PURE__ */ new Error(`Network error while attempting to reach ${o.url}`);
		r.isNetworkError = !0, r.request = o, t(r);
	}
}, p$1 = (e = [], t = d$1) => s(e, t);
//#endregion
//#region node_modules/get-it/dist/middleware.browser.js
function n(e) {
	return {};
}
var a, c, u, l, p, d = { exports: {} };
p || (p = 1, function(e, t) {
	t.formatArgs = function(t) {
		if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
		const s = "color: " + this.color;
		t.splice(1, 0, s, "color: inherit");
		let n = 0, r = 0;
		t[0].replace(/%[a-zA-Z%]/g, (e) => {
			"%%" !== e && (n++, "%c" === e && (r = n));
		}), t.splice(r, 0, s);
	}, t.save = function(e) {
		try {
			e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
		} catch {}
	}, t.load = function() {
		let e;
		try {
			e = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
		} catch {}
		return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
	}, t.useColors = function() {
		if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
		if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
		let e;
		return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}, t.storage = function() {
		try {
			return localStorage;
		} catch {}
	}(), t.destroy = /* @__PURE__ */ (() => {
		let e = !1;
		return () => {
			e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
		};
	})(), t.colors = [
		"#0000CC",
		"#0000FF",
		"#0033CC",
		"#0033FF",
		"#0066CC",
		"#0066FF",
		"#0099CC",
		"#0099FF",
		"#00CC00",
		"#00CC33",
		"#00CC66",
		"#00CC99",
		"#00CCCC",
		"#00CCFF",
		"#3300CC",
		"#3300FF",
		"#3333CC",
		"#3333FF",
		"#3366CC",
		"#3366FF",
		"#3399CC",
		"#3399FF",
		"#33CC00",
		"#33CC33",
		"#33CC66",
		"#33CC99",
		"#33CCCC",
		"#33CCFF",
		"#6600CC",
		"#6600FF",
		"#6633CC",
		"#6633FF",
		"#66CC00",
		"#66CC33",
		"#9900CC",
		"#9900FF",
		"#9933CC",
		"#9933FF",
		"#99CC00",
		"#99CC33",
		"#CC0000",
		"#CC0033",
		"#CC0066",
		"#CC0099",
		"#CC00CC",
		"#CC00FF",
		"#CC3300",
		"#CC3333",
		"#CC3366",
		"#CC3399",
		"#CC33CC",
		"#CC33FF",
		"#CC6600",
		"#CC6633",
		"#CC9900",
		"#CC9933",
		"#CCCC00",
		"#CCCC33",
		"#FF0000",
		"#FF0033",
		"#FF0066",
		"#FF0099",
		"#FF00CC",
		"#FF00FF",
		"#FF3300",
		"#FF3333",
		"#FF3366",
		"#FF3399",
		"#FF33CC",
		"#FF33FF",
		"#FF6600",
		"#FF6633",
		"#FF9900",
		"#FF9933",
		"#FFCC00",
		"#FFCC33"
	], t.log = console.debug || console.log || (() => {}), e.exports = (l ? u : (l = 1, u = function(e) {
		function t(e) {
			let n, r, o, i = null;
			function a(...e) {
				if (!a.enabled) return;
				const s = a, r = Number(/* @__PURE__ */ new Date());
				s.diff = r - (n || r), s.prev = n, s.curr = r, n = r, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
				let i = 0;
				e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r) => {
					if ("%%" === n) return "%";
					i++;
					const o = t.formatters[r];
					if ("function" == typeof o) {
						const t = e[i];
						n = o.call(s, t), e.splice(i, 1), i--;
					}
					return n;
				}), t.formatArgs.call(s, e), (s.log || t.log).apply(s, e);
			}
			return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = s, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
				enumerable: !0,
				configurable: !1,
				get: () => null !== i ? i : (r !== t.namespaces && (r = t.namespaces, o = t.enabled(e)), o),
				set: (e) => {
					i = e;
				}
			}), "function" == typeof t.init && t.init(a), a;
		}
		function s(e, s) {
			const n = t(this.namespace + (typeof s > "u" ? ":" : s) + e);
			return n.log = this.log, n;
		}
		function n(e, t) {
			let s = 0, n = 0, r = -1, o = 0;
			for (; s < e.length;) if (n < t.length && (t[n] === e[s] || "*" === t[n])) "*" === t[n] ? (r = n, o = s, n++) : (s++, n++);
			else {
				if (-1 === r) return !1;
				n = r + 1, o++, s = o;
			}
			for (; n < t.length && "*" === t[n];) n++;
			return n === t.length;
		}
		return t.debug = t, t.default = t, t.coerce = function(e) {
			return e instanceof Error ? e.stack || e.message : e;
		}, t.disable = function() {
			const e = [...t.names, ...t.skips.map((e) => "-" + e)].join(",");
			return t.enable(""), e;
		}, t.enable = function(e) {
			t.save(e), t.namespaces = e, t.names = [], t.skips = [];
			const s = ("string" == typeof e ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
			for (const e of s) "-" === e[0] ? t.skips.push(e.slice(1)) : t.names.push(e);
		}, t.enabled = function(e) {
			for (const s of t.skips) if (n(e, s)) return !1;
			for (const s of t.names) if (n(e, s)) return !0;
			return !1;
		}, t.humanize = function() {
			if (c) return a;
			c = 1;
			var e = 1e3, t = 60 * e, s = 60 * t, n = 24 * s, r = 7 * n;
			function o(e, t, s, n) {
				var r = t >= 1.5 * s;
				return Math.round(e / s) + " " + n + (r ? "s" : "");
			}
			return a = function(i, a) {
				a = a || {};
				var c, u, l = typeof i;
				if ("string" === l && i.length > 0) return function(o) {
					if (!((o = String(o)).length > 100)) {
						var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
						if (i) {
							var a = parseFloat(i[1]);
							switch ((i[2] || "ms").toLowerCase()) {
								case "years":
								case "year":
								case "yrs":
								case "yr":
								case "y": return 315576e5 * a;
								case "weeks":
								case "week":
								case "w": return a * r;
								case "days":
								case "day":
								case "d": return a * n;
								case "hours":
								case "hour":
								case "hrs":
								case "hr":
								case "h": return a * s;
								case "minutes":
								case "minute":
								case "mins":
								case "min":
								case "m": return a * t;
								case "seconds":
								case "second":
								case "secs":
								case "sec":
								case "s": return a * e;
								case "milliseconds":
								case "millisecond":
								case "msecs":
								case "msec":
								case "ms": return a;
								default: return;
							}
						}
					}
				}(i);
				if ("number" === l && isFinite(i)) return a.long ? (c = i, (u = Math.abs(c)) >= n ? o(c, u, n, "day") : u >= s ? o(c, u, s, "hour") : u >= t ? o(c, u, t, "minute") : u >= e ? o(c, u, e, "second") : c + " ms") : function(r) {
					var o = Math.abs(r);
					return o >= n ? Math.round(r / n) + "d" : o >= s ? Math.round(r / s) + "h" : o >= t ? Math.round(r / t) + "m" : o >= e ? Math.round(r / e) + "s" : r + "ms";
				}(i);
				throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(i));
			};
		}(), t.destroy = function() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		}, Object.keys(e).forEach((s) => {
			t[s] = e[s];
		}), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
			let s = 0;
			for (let t = 0; t < e.length; t++) s = (s << 5) - s + e.charCodeAt(t), s |= 0;
			return t.colors[Math.abs(s) % t.colors.length];
		}, t.enable(t.load()), t;
	}))(t);
	const { formatters: s } = e.exports;
	s.j = function(e) {
		try {
			return JSON.stringify(e);
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message;
		}
	};
}(d, d.exports)), d.exports;
var F = typeof Buffer > "u" ? () => !1 : (e) => Buffer.isBuffer(e);
function O(e) {
	return "[object Object]" === Object.prototype.toString.call(e);
}
function j(e) {
	if (!1 === O(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	const s = t.prototype;
	return !(!1 === O(s) || !1 === s.hasOwnProperty("isPrototypeOf"));
}
var v = [
	"boolean",
	"string",
	"number"
];
function x() {
	return { processOptions: (e) => {
		const t = e.body;
		return !t || "function" == typeof t.pipe || F(t) || -1 === v.indexOf(typeof t) && !Array.isArray(t) && !j(t) ? e : Object.assign({}, e, {
			body: JSON.stringify(e.body),
			headers: Object.assign({}, e.headers, { "Content-Type": "application/json" })
		});
	} };
}
function E(e) {
	return {
		onResponse: (s) => {
			const n = s.headers["content-type"] || "", r = e && e.force || -1 !== n.indexOf("application/json");
			return s.body && n && r ? Object.assign({}, s, { body: t(s.body) }) : s;
		},
		processOptions: (e) => Object.assign({}, e, { headers: Object.assign({ Accept: "application/json" }, e.headers) })
	};
	function t(e) {
		try {
			return JSON.parse(e);
		} catch (e) {
			throw e.message = `Failed to parsed response body as JSON: ${e.message}`, e;
		}
	}
}
var R = {};
typeof globalThis < "u" ? R = globalThis : typeof window < "u" ? R = window : typeof global < "u" ? R = global : typeof self < "u" && (R = self);
var q = R;
function A(e = {}) {
	const t = e.implementation || q.Observable;
	if (!t) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
	return { onReturn: (e, s) => new t((t) => (e.error.subscribe((e) => t.error(e)), e.progress.subscribe((e) => t.next(Object.assign({ type: "progress" }, e))), e.response.subscribe((e) => {
		t.next(Object.assign({ type: "response" }, e)), t.complete();
	}), e.request.publish(s), () => e.abort.publish())) };
}
function S() {
	return { onRequest: (e) => {
		if ("xhr" !== e.adapter) return;
		const t = e.request, s = e.context;
		function n(e) {
			return (t) => {
				const n = t.lengthComputable ? t.loaded / t.total * 100 : -1;
				s.channels.progress.publish({
					stage: e,
					percent: n,
					total: t.total,
					loaded: t.loaded,
					lengthComputable: t.lengthComputable
				});
			};
		}
		"upload" in t && "onprogress" in t.upload && (t.upload.onprogress = n("upload")), "onprogress" in t && (t.onprogress = n("download"));
	} };
}
var N = (e = {}) => {
	const t = e.implementation || Promise;
	if (!t) throw new Error("`Promise` is not available in global scope, and no implementation was passed");
	return { onReturn: (s, n) => new t((t, r) => {
		const o = n.options.cancelToken;
		o && o.promise.then((e) => {
			s.abort.publish(e), r(e);
		}), s.error.subscribe(r), s.response.subscribe((s) => {
			t(e.onlyBody ? s.body : s);
		}), setTimeout(() => {
			try {
				s.request.publish(n);
			} catch (e) {
				r(e);
			}
		}, 0);
	}) };
};
var I = class {
	__CANCEL__ = !0;
	message;
	constructor(e) {
		this.message = e;
	}
	toString() {
		return "Cancel" + (this.message ? `: ${this.message}` : "");
	}
};
var T = class T {
	promise;
	reason;
	constructor(e) {
		if ("function" != typeof e) throw new TypeError("executor must be a function.");
		let t = null;
		this.promise = new Promise((e) => {
			t = e;
		}), e((e) => {
			this.reason || (this.reason = new I(e), t(this.reason));
		});
	}
	static source = () => {
		let e;
		return {
			token: new T((t) => {
				e = t;
			}),
			cancel: e
		};
	};
};
N.Cancel = I, N.CancelToken = T, N.isCancel = (e) => !(!e || !e?.__CANCEL__);
var $ = (e, t, s) => ("GET" === s.method || "HEAD" === s.method) && (e.isNetworkError || !1);
function _(e) {
	return 100 * Math.pow(2, e) + 100 * Math.random();
}
var P = (e = {}) => ((e) => {
	const t = e.maxRetries || 5, s = e.retryDelay || _, n = e.shouldRetry;
	return { onError: (e, r) => {
		const o = r.options, i = o.maxRetries || t, a = o.retryDelay || s, c = o.shouldRetry || n, u = o.attemptNumber || 0;
		if (null !== (l = o.body) && "object" == typeof l && "function" == typeof l.pipe || !c(e, u, o) || u >= i) return e;
		var l;
		const p = Object.assign({}, r, { options: Object.assign({}, o, { attemptNumber: u + 1 }) });
		return setTimeout(() => r.channels.request.publish(p), a(u)), null;
	} };
})({
	shouldRetry: $,
	...e
});
P.shouldRetry = $;
D = n;
var D;
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
	return typeof value === "function";
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
	var _super = function(instance) {
		Error.call(instance);
		instance.stack = (/* @__PURE__ */ new Error()).stack;
	};
	var ctorFunc = createImpl(_super);
	ctorFunc.prototype = Object.create(Error.prototype);
	ctorFunc.prototype.constructor = ctorFunc;
	return ctorFunc;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
	return function UnsubscriptionErrorImpl(errors) {
		_super(this);
		this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
			return i + 1 + ") " + err.toString();
		}).join("\n  ") : "";
		this.name = "UnsubscriptionError";
		this.errors = errors;
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
	if (arr) {
		var index = arr.indexOf(item);
		0 <= index && arr.splice(index, 1);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
	function Subscription(initialTeardown) {
		this.initialTeardown = initialTeardown;
		this.closed = false;
		this._parentage = null;
		this._finalizers = null;
	}
	Subscription.prototype.unsubscribe = function() {
		var e_1, _a, e_2, _b;
		var errors;
		if (!this.closed) {
			this.closed = true;
			var _parentage = this._parentage;
			if (_parentage) {
				this._parentage = null;
				if (Array.isArray(_parentage)) try {
					for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) _parentage_1_1.value.remove(this);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				else _parentage.remove(this);
			}
			var initialFinalizer = this.initialTeardown;
			if (isFunction(initialFinalizer)) try {
				initialFinalizer();
			} catch (e) {
				errors = e instanceof UnsubscriptionError ? e.errors : [e];
			}
			var _finalizers = this._finalizers;
			if (_finalizers) {
				this._finalizers = null;
				try {
					for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
						var finalizer = _finalizers_1_1.value;
						try {
							execFinalizer(finalizer);
						} catch (err) {
							errors = errors !== null && errors !== void 0 ? errors : [];
							if (err instanceof UnsubscriptionError) errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
							else errors.push(err);
						}
					}
				} catch (e_2_1) {
					e_2 = { error: e_2_1 };
				} finally {
					try {
						if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
					} finally {
						if (e_2) throw e_2.error;
					}
				}
			}
			if (errors) throw new UnsubscriptionError(errors);
		}
	};
	Subscription.prototype.add = function(teardown) {
		var _a;
		if (teardown && teardown !== this) if (this.closed) execFinalizer(teardown);
		else {
			if (teardown instanceof Subscription) {
				if (teardown.closed || teardown._hasParent(this)) return;
				teardown._addParent(this);
			}
			(this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
		}
	};
	Subscription.prototype._hasParent = function(parent) {
		var _parentage = this._parentage;
		return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
	};
	Subscription.prototype._addParent = function(parent) {
		var _parentage = this._parentage;
		this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
	};
	Subscription.prototype._removeParent = function(parent) {
		var _parentage = this._parentage;
		if (_parentage === parent) this._parentage = null;
		else if (Array.isArray(_parentage)) arrRemove(_parentage, parent);
	};
	Subscription.prototype.remove = function(teardown) {
		var _finalizers = this._finalizers;
		_finalizers && arrRemove(_finalizers, teardown);
		if (teardown instanceof Subscription) teardown._removeParent(this);
	};
	Subscription.EMPTY = (function() {
		var empty = new Subscription();
		empty.closed = true;
		return empty;
	})();
	return Subscription;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
	return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
	if (isFunction(finalizer)) finalizer();
	else finalizer.unsubscribe();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/config.js
var config = {
	onUnhandledError: null,
	onStoppedNotification: null,
	Promise: void 0,
	useDeprecatedSynchronousErrorHandling: false,
	useDeprecatedNextContext: false
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
	setTimeout: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = timeoutProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
		return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
	},
	clearTimeout: function(handle) {
		var delegate = timeoutProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
	timeoutProvider.setTimeout(function() {
		var onUnhandledError = config.onUnhandledError;
		if (onUnhandledError) onUnhandledError(err);
		else throw err;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function() {
	return createNotification("C", void 0, void 0);
})();
function errorNotification(error) {
	return createNotification("E", void 0, error);
}
function nextNotification(value) {
	return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
	return {
		kind,
		value,
		error
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
	if (config.useDeprecatedSynchronousErrorHandling) {
		var isRoot = !context;
		if (isRoot) context = {
			errorThrown: false,
			error: null
		};
		cb();
		if (isRoot) {
			var _a = context, errorThrown = _a.errorThrown, error = _a.error;
			context = null;
			if (errorThrown) throw error;
		}
	} else cb();
}
function captureError(err) {
	if (config.useDeprecatedSynchronousErrorHandling && context) {
		context.errorThrown = true;
		context.error = err;
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
	__extends(Subscriber, _super);
	function Subscriber(destination) {
		var _this = _super.call(this) || this;
		_this.isStopped = false;
		if (destination) {
			_this.destination = destination;
			if (isSubscription(destination)) destination.add(_this);
		} else _this.destination = EMPTY_OBSERVER;
		return _this;
	}
	Subscriber.create = function(next, error, complete) {
		return new SafeSubscriber(next, error, complete);
	};
	Subscriber.prototype.next = function(value) {
		if (this.isStopped) handleStoppedNotification(nextNotification(value), this);
		else this._next(value);
	};
	Subscriber.prototype.error = function(err) {
		if (this.isStopped) handleStoppedNotification(errorNotification(err), this);
		else {
			this.isStopped = true;
			this._error(err);
		}
	};
	Subscriber.prototype.complete = function() {
		if (this.isStopped) handleStoppedNotification(COMPLETE_NOTIFICATION, this);
		else {
			this.isStopped = true;
			this._complete();
		}
	};
	Subscriber.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.isStopped = true;
			_super.prototype.unsubscribe.call(this);
			this.destination = null;
		}
	};
	Subscriber.prototype._next = function(value) {
		this.destination.next(value);
	};
	Subscriber.prototype._error = function(err) {
		try {
			this.destination.error(err);
		} finally {
			this.unsubscribe();
		}
	};
	Subscriber.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	};
	return Subscriber;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
	return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
	function ConsumerObserver(partialObserver) {
		this.partialObserver = partialObserver;
	}
	ConsumerObserver.prototype.next = function(value) {
		var partialObserver = this.partialObserver;
		if (partialObserver.next) try {
			partialObserver.next(value);
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	ConsumerObserver.prototype.error = function(err) {
		var partialObserver = this.partialObserver;
		if (partialObserver.error) try {
			partialObserver.error(err);
		} catch (error) {
			handleUnhandledError(error);
		}
		else handleUnhandledError(err);
	};
	ConsumerObserver.prototype.complete = function() {
		var partialObserver = this.partialObserver;
		if (partialObserver.complete) try {
			partialObserver.complete();
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	return ConsumerObserver;
}();
var SafeSubscriber = function(_super) {
	__extends(SafeSubscriber, _super);
	function SafeSubscriber(observerOrNext, error, complete) {
		var _this = _super.call(this) || this;
		var partialObserver;
		if (isFunction(observerOrNext) || !observerOrNext) partialObserver = {
			next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
			error: error !== null && error !== void 0 ? error : void 0,
			complete: complete !== null && complete !== void 0 ? complete : void 0
		};
		else {
			var context_1;
			if (_this && config.useDeprecatedNextContext) {
				context_1 = Object.create(observerOrNext);
				context_1.unsubscribe = function() {
					return _this.unsubscribe();
				};
				partialObserver = {
					next: observerOrNext.next && bind(observerOrNext.next, context_1),
					error: observerOrNext.error && bind(observerOrNext.error, context_1),
					complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
				};
			} else partialObserver = observerOrNext;
		}
		_this.destination = new ConsumerObserver(partialObserver);
		return _this;
	}
	return SafeSubscriber;
}(Subscriber);
function handleUnhandledError(error) {
	if (config.useDeprecatedSynchronousErrorHandling) captureError(error);
	else reportUnhandledError(error);
}
function defaultErrorHandler(err) {
	throw err;
}
function handleStoppedNotification(notification, subscriber) {
	var onStoppedNotification = config.onStoppedNotification;
	onStoppedNotification && timeoutProvider.setTimeout(function() {
		return onStoppedNotification(notification, subscriber);
	});
}
var EMPTY_OBSERVER = {
	closed: true,
	next: noop,
	error: defaultErrorHandler,
	complete: noop
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function() {
	return typeof Symbol === "function" && Symbol.observable || "@@observable";
})();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
	return x;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipe() {
	var fns = [];
	for (var _i = 0; _i < arguments.length; _i++) fns[_i] = arguments[_i];
	return pipeFromArray(fns);
}
function pipeFromArray(fns) {
	if (fns.length === 0) return identity;
	if (fns.length === 1) return fns[0];
	return function piped(input) {
		return fns.reduce(function(prev, fn) {
			return fn(prev);
		}, input);
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
	function Observable(subscribe) {
		if (subscribe) this._subscribe = subscribe;
	}
	Observable.prototype.lift = function(operator) {
		var observable = new Observable();
		observable.source = this;
		observable.operator = operator;
		return observable;
	};
	Observable.prototype.subscribe = function(observerOrNext, error, complete) {
		var _this = this;
		var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
		errorContext(function() {
			var _a = _this, operator = _a.operator, source = _a.source;
			subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
		});
		return subscriber;
	};
	Observable.prototype._trySubscribe = function(sink) {
		try {
			return this._subscribe(sink);
		} catch (err) {
			sink.error(err);
		}
	};
	Observable.prototype.forEach = function(next, promiseCtor) {
		var _this = this;
		promiseCtor = getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var subscriber = new SafeSubscriber({
				next: function(value) {
					try {
						next(value);
					} catch (err) {
						reject(err);
						subscriber.unsubscribe();
					}
				},
				error: reject,
				complete: resolve
			});
			_this.subscribe(subscriber);
		});
	};
	Observable.prototype._subscribe = function(subscriber) {
		var _a;
		return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
	};
	Observable.prototype[observable] = function() {
		return this;
	};
	Observable.prototype.pipe = function() {
		var operations = [];
		for (var _i = 0; _i < arguments.length; _i++) operations[_i] = arguments[_i];
		return pipeFromArray(operations)(this);
	};
	Observable.prototype.toPromise = function(promiseCtor) {
		var _this = this;
		promiseCtor = getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var value;
			_this.subscribe(function(x) {
				return value = x;
			}, function(err) {
				return reject(err);
			}, function() {
				return resolve(value);
			});
		});
	};
	Observable.create = function(subscribe) {
		return new Observable(subscribe);
	};
	return Observable;
}();
function getPromiseCtor(promiseCtor) {
	var _a;
	return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
	return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
	return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
	return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
	return function(source) {
		if (hasLift(source)) return source.lift(function(liftedSource) {
			try {
				return init(liftedSource, this);
			} catch (err) {
				this.error(err);
			}
		});
		throw new TypeError("Unable to lift unknown Observable type");
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
	return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
	__extends(OperatorSubscriber, _super);
	function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
		var _this = _super.call(this, destination) || this;
		_this.onFinalize = onFinalize;
		_this.shouldUnsubscribe = shouldUnsubscribe;
		_this._next = onNext ? function(value) {
			try {
				onNext(value);
			} catch (err) {
				destination.error(err);
			}
		} : _super.prototype._next;
		_this._error = onError ? function(err) {
			try {
				onError(err);
			} catch (err) {
				destination.error(err);
			} finally {
				this.unsubscribe();
			}
		} : _super.prototype._error;
		_this._complete = onComplete ? function() {
			try {
				onComplete();
			} catch (err) {
				destination.error(err);
			} finally {
				this.unsubscribe();
			}
		} : _super.prototype._complete;
		return _this;
	}
	OperatorSubscriber.prototype.unsubscribe = function() {
		var _a;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var closed_1 = this.closed;
			_super.prototype.unsubscribe.call(this);
			!closed_1 && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
		}
	};
	return OperatorSubscriber;
}(Subscriber);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
	return function ObjectUnsubscribedErrorImpl() {
		_super(this);
		this.name = "ObjectUnsubscribedError";
		this.message = "object unsubscribed";
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
	__extends(Subject, _super);
	function Subject() {
		var _this = _super.call(this) || this;
		_this.closed = false;
		_this.currentObservers = null;
		_this.observers = [];
		_this.isStopped = false;
		_this.hasError = false;
		_this.thrownError = null;
		return _this;
	}
	Subject.prototype.lift = function(operator) {
		var subject = new AnonymousSubject(this, this);
		subject.operator = operator;
		return subject;
	};
	Subject.prototype._throwIfClosed = function() {
		if (this.closed) throw new ObjectUnsubscribedError();
	};
	Subject.prototype.next = function(value) {
		var _this = this;
		errorContext(function() {
			var e_1, _a;
			_this._throwIfClosed();
			if (!_this.isStopped) {
				if (!_this.currentObservers) _this.currentObservers = Array.from(_this.observers);
				try {
					for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) _c.value.next(value);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
			}
		});
	};
	Subject.prototype.error = function(err) {
		var _this = this;
		errorContext(function() {
			_this._throwIfClosed();
			if (!_this.isStopped) {
				_this.hasError = _this.isStopped = true;
				_this.thrownError = err;
				var observers = _this.observers;
				while (observers.length) observers.shift().error(err);
			}
		});
	};
	Subject.prototype.complete = function() {
		var _this = this;
		errorContext(function() {
			_this._throwIfClosed();
			if (!_this.isStopped) {
				_this.isStopped = true;
				var observers = _this.observers;
				while (observers.length) observers.shift().complete();
			}
		});
	};
	Subject.prototype.unsubscribe = function() {
		this.isStopped = this.closed = true;
		this.observers = this.currentObservers = null;
	};
	Object.defineProperty(Subject.prototype, "observed", {
		get: function() {
			var _a;
			return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
		},
		enumerable: false,
		configurable: true
	});
	Subject.prototype._trySubscribe = function(subscriber) {
		this._throwIfClosed();
		return _super.prototype._trySubscribe.call(this, subscriber);
	};
	Subject.prototype._subscribe = function(subscriber) {
		this._throwIfClosed();
		this._checkFinalizedStatuses(subscriber);
		return this._innerSubscribe(subscriber);
	};
	Subject.prototype._innerSubscribe = function(subscriber) {
		var _this = this;
		var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
		if (hasError || isStopped) return EMPTY_SUBSCRIPTION;
		this.currentObservers = null;
		observers.push(subscriber);
		return new Subscription(function() {
			_this.currentObservers = null;
			arrRemove(observers, subscriber);
		});
	};
	Subject.prototype._checkFinalizedStatuses = function(subscriber) {
		var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
		if (hasError) subscriber.error(thrownError);
		else if (isStopped) subscriber.complete();
	};
	Subject.prototype.asObservable = function() {
		var observable = new Observable();
		observable.source = this;
		return observable;
	};
	Subject.create = function(destination, source) {
		return new AnonymousSubject(destination, source);
	};
	return Subject;
}(Observable);
var AnonymousSubject = function(_super) {
	__extends(AnonymousSubject, _super);
	function AnonymousSubject(destination, source) {
		var _this = _super.call(this) || this;
		_this.destination = destination;
		_this.source = source;
		return _this;
	}
	AnonymousSubject.prototype.next = function(value) {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
	};
	AnonymousSubject.prototype.error = function(err) {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
	};
	AnonymousSubject.prototype.complete = function() {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
	};
	AnonymousSubject.prototype._subscribe = function(subscriber) {
		var _a, _b;
		return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
	};
	return AnonymousSubject;
}(Subject);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
	now: function() {
		return (dateTimestampProvider.delegate || Date).now();
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = function(_super) {
	__extends(ReplaySubject, _super);
	function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
		if (_bufferSize === void 0) _bufferSize = Infinity;
		if (_windowTime === void 0) _windowTime = Infinity;
		if (_timestampProvider === void 0) _timestampProvider = dateTimestampProvider;
		var _this = _super.call(this) || this;
		_this._bufferSize = _bufferSize;
		_this._windowTime = _windowTime;
		_this._timestampProvider = _timestampProvider;
		_this._buffer = [];
		_this._infiniteTimeWindow = true;
		_this._infiniteTimeWindow = _windowTime === Infinity;
		_this._bufferSize = Math.max(1, _bufferSize);
		_this._windowTime = Math.max(1, _windowTime);
		return _this;
	}
	ReplaySubject.prototype.next = function(value) {
		var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
		if (!isStopped) {
			_buffer.push(value);
			!_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
		}
		this._trimBuffer();
		_super.prototype.next.call(this, value);
	};
	ReplaySubject.prototype._subscribe = function(subscriber) {
		this._throwIfClosed();
		this._trimBuffer();
		var subscription = this._innerSubscribe(subscriber);
		var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow;
		var copy = _a._buffer.slice();
		for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) subscriber.next(copy[i]);
		this._checkFinalizedStatuses(subscriber);
		return subscription;
	};
	ReplaySubject.prototype._trimBuffer = function() {
		var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
		var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
		_bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
		if (!_infiniteTimeWindow) {
			var now = _timestampProvider.now();
			var last = 0;
			for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) last = i;
			last && _buffer.splice(0, last + 1);
		}
	};
	return ReplaySubject;
}(Subject);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
	__extends(Action, _super);
	function Action(scheduler, work) {
		return _super.call(this) || this;
	}
	Action.prototype.schedule = function(state, delay) {
		if (delay === void 0) delay = 0;
		return this;
	};
	return Action;
}(Subscription);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
	setInterval: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = intervalProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
		return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
	},
	clearInterval: function(handle) {
		var delegate = intervalProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
	__extends(AsyncAction, _super);
	function AsyncAction(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		_this.pending = false;
		return _this;
	}
	AsyncAction.prototype.schedule = function(state, delay) {
		var _a;
		if (delay === void 0) delay = 0;
		if (this.closed) return this;
		this.state = state;
		var id = this.id;
		var scheduler = this.scheduler;
		if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
		this.pending = true;
		this.delay = delay;
		this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
		return this;
	};
	AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
		if (delay === void 0) delay = 0;
		return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
	};
	AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
		if (delay === void 0) delay = 0;
		if (delay != null && this.delay === delay && this.pending === false) return id;
		if (id != null) intervalProvider.clearInterval(id);
	};
	AsyncAction.prototype.execute = function(state, delay) {
		if (this.closed) return /* @__PURE__ */ new Error("executing a cancelled action");
		this.pending = false;
		var error = this._execute(state, delay);
		if (error) return error;
		else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	};
	AsyncAction.prototype._execute = function(state, _delay) {
		var errored = false;
		var errorValue;
		try {
			this.work(state);
		} catch (e) {
			errored = true;
			errorValue = e ? e : /* @__PURE__ */ new Error("Scheduled action threw falsy error");
		}
		if (errored) {
			this.unsubscribe();
			return errorValue;
		}
	};
	AsyncAction.prototype.unsubscribe = function() {
		if (!this.closed) {
			var _a = this, id = _a.id, scheduler = _a.scheduler;
			var actions = scheduler.actions;
			this.work = this.state = this.scheduler = null;
			this.pending = false;
			arrRemove(actions, this);
			if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
			this.delay = null;
			_super.prototype.unsubscribe.call(this);
		}
	};
	return AsyncAction;
}(Action);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
	function Scheduler(schedulerActionCtor, now) {
		if (now === void 0) now = Scheduler.now;
		this.schedulerActionCtor = schedulerActionCtor;
		this.now = now;
	}
	Scheduler.prototype.schedule = function(work, delay, state) {
		if (delay === void 0) delay = 0;
		return new this.schedulerActionCtor(this, work).schedule(state, delay);
	};
	Scheduler.now = dateTimestampProvider.now;
	return Scheduler;
}();
var async = new (function(_super) {
	__extends(AsyncScheduler, _super);
	function AsyncScheduler(SchedulerAction, now) {
		if (now === void 0) now = Scheduler.now;
		var _this = _super.call(this, SchedulerAction, now) || this;
		_this.actions = [];
		_this._active = false;
		return _this;
	}
	AsyncScheduler.prototype.flush = function(action) {
		var actions = this.actions;
		if (this._active) {
			actions.push(action);
			return;
		}
		var error;
		this._active = true;
		do
			if (error = action.execute(action.state, action.delay)) break;
		while (action = actions.shift());
		this._active = false;
		if (error) {
			while (action = actions.shift()) action.unsubscribe();
			throw error;
		}
	};
	return AsyncScheduler;
}(Scheduler))(AsyncAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
	return subscriber.complete();
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
	return value && isFunction(value.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
	return arr[arr.length - 1];
}
function popResultSelector(args) {
	return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
	return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
	return typeof last(args) === "number" ? args.pop() : defaultValue;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function(x) {
	return x && typeof x.length === "number" && typeof x !== "function";
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
	return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
	return isFunction(input[observable]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
	return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
	return /* @__PURE__ */ new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
	if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
	return Symbol.iterator;
}
var iterator = getSymbolIterator();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
	return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
	return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
		var reader, _a, value, done;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					reader = readableStream.getReader();
					_b.label = 1;
				case 1:
					_b.trys.push([
						1,
						,
						9,
						10
					]);
					_b.label = 2;
				case 2: return [4, __await(reader.read())];
				case 3:
					_a = _b.sent(), value = _a.value, done = _a.done;
					if (!done) return [3, 5];
					return [4, __await(void 0)];
				case 4: return [2, _b.sent()];
				case 5: return [4, __await(value)];
				case 6: return [4, _b.sent()];
				case 7:
					_b.sent();
					return [3, 2];
				case 8: return [3, 10];
				case 9:
					reader.releaseLock();
					return [7];
				case 10: return [2];
			}
		});
	});
}
function isReadableStreamLike(obj) {
	return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
	if (input instanceof Observable) return input;
	if (input != null) {
		if (isInteropObservable(input)) return fromInteropObservable(input);
		if (isArrayLike(input)) return fromArrayLike(input);
		if (isPromise(input)) return fromPromise(input);
		if (isAsyncIterable(input)) return fromAsyncIterable(input);
		if (isIterable(input)) return fromIterable(input);
		if (isReadableStreamLike(input)) return fromReadableStreamLike(input);
	}
	throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
	return new Observable(function(subscriber) {
		var obs = obj[observable]();
		if (isFunction(obs.subscribe)) return obs.subscribe(subscriber);
		throw new TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function fromArrayLike(array) {
	return new Observable(function(subscriber) {
		for (var i = 0; i < array.length && !subscriber.closed; i++) subscriber.next(array[i]);
		subscriber.complete();
	});
}
function fromPromise(promise) {
	return new Observable(function(subscriber) {
		promise.then(function(value) {
			if (!subscriber.closed) {
				subscriber.next(value);
				subscriber.complete();
			}
		}, function(err) {
			return subscriber.error(err);
		}).then(null, reportUnhandledError);
	});
}
function fromIterable(iterable) {
	return new Observable(function(subscriber) {
		var e_1, _a;
		try {
			for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
				var value = iterable_1_1.value;
				subscriber.next(value);
				if (subscriber.closed) return;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		subscriber.complete();
	});
}
function fromAsyncIterable(asyncIterable) {
	return new Observable(function(subscriber) {
		process$1(asyncIterable, subscriber).catch(function(err) {
			return subscriber.error(err);
		});
	});
}
function fromReadableStreamLike(readableStream) {
	return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process$1(asyncIterable, subscriber) {
	var asyncIterable_1, asyncIterable_1_1;
	var e_2, _a;
	return __awaiter(this, void 0, void 0, function() {
		var value, e_2_1;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					_b.trys.push([
						0,
						5,
						6,
						11
					]);
					asyncIterable_1 = __asyncValues(asyncIterable);
					_b.label = 1;
				case 1: return [4, asyncIterable_1.next()];
				case 2:
					if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
					value = asyncIterable_1_1.value;
					subscriber.next(value);
					if (subscriber.closed) return [2];
					_b.label = 3;
				case 3: return [3, 1];
				case 4: return [3, 11];
				case 5:
					e_2_1 = _b.sent();
					e_2 = { error: e_2_1 };
					return [3, 11];
				case 6:
					_b.trys.push([
						6,
						,
						9,
						10
					]);
					if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
					return [4, _a.call(asyncIterable_1)];
				case 7:
					_b.sent();
					_b.label = 8;
				case 8: return [3, 10];
				case 9:
					if (e_2) throw e_2.error;
					return [7];
				case 10: return [7];
				case 11:
					subscriber.complete();
					return [2];
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
	if (delay === void 0) delay = 0;
	if (repeat === void 0) repeat = false;
	var scheduleSubscription = scheduler.schedule(function() {
		work();
		if (repeat) parentSubscription.add(this.schedule(null, delay));
		else this.unsubscribe();
	}, delay);
	parentSubscription.add(scheduleSubscription);
	if (!repeat) return scheduleSubscription;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.next(value);
			}, delay);
		}, function() {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.complete();
			}, delay);
		}, function(err) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.error(err);
			}, delay);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		subscriber.add(scheduler.schedule(function() {
			return source.subscribe(subscriber);
		}, delay));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
	return new Observable(function(subscriber) {
		var i = 0;
		return scheduler.schedule(function() {
			if (i === input.length) subscriber.complete();
			else {
				subscriber.next(input[i++]);
				if (!subscriber.closed) this.schedule();
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
	return new Observable(function(subscriber) {
		var iterator$1;
		executeSchedule(subscriber, scheduler, function() {
			iterator$1 = input[iterator]();
			executeSchedule(subscriber, scheduler, function() {
				var _a;
				var value;
				var done;
				try {
					_a = iterator$1.next(), value = _a.value, done = _a.done;
				} catch (err) {
					subscriber.error(err);
					return;
				}
				if (done) subscriber.complete();
				else subscriber.next(value);
			}, 0, true);
		});
		return function() {
			return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
		};
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
	if (!input) throw new Error("Iterable cannot be null");
	return new Observable(function(subscriber) {
		executeSchedule(subscriber, scheduler, function() {
			var iterator = input[Symbol.asyncIterator]();
			executeSchedule(subscriber, scheduler, function() {
				iterator.next().then(function(result) {
					if (result.done) subscriber.complete();
					else subscriber.next(result.value);
				});
			}, 0, true);
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
	return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
	if (input != null) {
		if (isInteropObservable(input)) return scheduleObservable(input, scheduler);
		if (isArrayLike(input)) return scheduleArray(input, scheduler);
		if (isPromise(input)) return schedulePromise(input, scheduler);
		if (isAsyncIterable(input)) return scheduleAsyncIterable(input, scheduler);
		if (isIterable(input)) return scheduleIterable(input, scheduler);
		if (isReadableStreamLike(input)) return scheduleReadableStreamLike(input, scheduler);
	}
	throw createInvalidObservableTypeError(input);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
	return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	return from(args, popScheduler(args));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
	var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
		return errorOrErrorFactory;
	};
	var init = function(subscriber) {
		return subscriber.error(errorFactory());
	};
	return new Observable(scheduler ? function(subscriber) {
		return scheduler.schedule(init, 0, subscriber);
	} : init);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
	return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError = createErrorClass(function(_super) {
	return function EmptyErrorImpl() {
		_super(this);
		this.name = "EmptyError";
		this.message = "no elements in sequence";
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
function lastValueFrom(source, config) {
	var hasConfig = typeof config === "object";
	return new Promise(function(resolve, reject) {
		var _hasValue = false;
		var _value;
		source.subscribe({
			next: function(value) {
				_value = value;
				_hasValue = true;
			},
			error: reject,
			complete: function() {
				if (_hasValue) resolve(_value);
				else if (hasConfig) resolve(config.defaultValue);
				else reject(new EmptyError());
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function firstValueFrom(source, config) {
	var hasConfig = typeof config === "object";
	return new Promise(function(resolve, reject) {
		var subscriber = new SafeSubscriber({
			next: function(value) {
				resolve(value);
				subscriber.unsubscribe();
			},
			error: reject,
			complete: function() {
				if (hasConfig) resolve(config.defaultValue);
				else reject(new EmptyError());
			}
		});
		source.subscribe(subscriber);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
	return value instanceof Date && !isNaN(value);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
	return operate(function(source, subscriber) {
		var index = 0;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			subscriber.next(project.call(thisArg, value, index++));
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray$1 = Array.isArray;
function callOrApply(fn, args) {
	return isArray$1(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
	return map(function(args) {
		return callOrApply(fn, args);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function combineLatestInit(observables, scheduler, valueTransform) {
	if (valueTransform === void 0) valueTransform = identity;
	return function(subscriber) {
		maybeSchedule(scheduler, function() {
			var length = observables.length;
			var values = new Array(length);
			var active = length;
			var remainingFirstValues = length;
			var _loop_1 = function(i) {
				maybeSchedule(scheduler, function() {
					var source = from(observables[i], scheduler);
					var hasFirstValue = false;
					source.subscribe(createOperatorSubscriber(subscriber, function(value) {
						values[i] = value;
						if (!hasFirstValue) {
							hasFirstValue = true;
							remainingFirstValues--;
						}
						if (!remainingFirstValues) subscriber.next(valueTransform(values.slice()));
					}, function() {
						if (!--active) subscriber.complete();
					}));
				}, subscriber);
			};
			for (var i = 0; i < length; i++) _loop_1(i);
		}, subscriber);
	};
}
function maybeSchedule(scheduler, execute, subscription) {
	if (scheduler) executeSchedule(subscription, scheduler, execute);
	else execute();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
	var buffer = [];
	var active = 0;
	var index = 0;
	var isComplete = false;
	var checkComplete = function() {
		if (isComplete && !buffer.length && !active) subscriber.complete();
	};
	var outerNext = function(value) {
		return active < concurrent ? doInnerSub(value) : buffer.push(value);
	};
	var doInnerSub = function(value) {
		expand && subscriber.next(value);
		active++;
		var innerComplete = false;
		innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
			onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
			if (expand) outerNext(innerValue);
			else subscriber.next(innerValue);
		}, function() {
			innerComplete = true;
		}, void 0, function() {
			if (innerComplete) try {
				active--;
				var _loop_1 = function() {
					var bufferedValue = buffer.shift();
					if (innerSubScheduler) executeSchedule(subscriber, innerSubScheduler, function() {
						return doInnerSub(bufferedValue);
					});
					else doInnerSub(bufferedValue);
				};
				while (buffer.length && active < concurrent) _loop_1();
				checkComplete();
			} catch (err) {
				subscriber.error(err);
			}
		}));
	};
	source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
		isComplete = true;
		checkComplete();
	}));
	return function() {
		additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
	if (concurrent === void 0) concurrent = Infinity;
	if (isFunction(resultSelector)) return mergeMap(function(a, i) {
		return map(function(b, ii) {
			return resultSelector(a, b, i, ii);
		})(innerFrom(project(a, i)));
	}, concurrent);
	else if (typeof resultSelector === "number") concurrent = resultSelector;
	return operate(function(source, subscriber) {
		return mergeInternals(source, subscriber, project, concurrent);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
	if (concurrent === void 0) concurrent = Infinity;
	return mergeMap(identity, concurrent);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
	return mergeAll(1);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	return concatAll()(from(args, popScheduler(args)));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
	return new Observable(function(subscriber) {
		innerFrom(observableFactory()).subscribe(subscriber);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
	if (dueTime === void 0) dueTime = 0;
	if (scheduler === void 0) scheduler = async;
	var intervalDuration = -1;
	if (intervalOrScheduler != null) if (isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
	else intervalDuration = intervalOrScheduler;
	return new Observable(function(subscriber) {
		var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
		if (due < 0) due = 0;
		var n = 0;
		return scheduler.schedule(function() {
			if (!subscriber.closed) {
				subscriber.next(n++);
				if (0 <= intervalDuration) this.schedule(void 0, intervalDuration);
				else subscriber.complete();
			}
		}, due);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var scheduler = popScheduler(args);
	var concurrent = popNumber(args, Infinity);
	var sources = args;
	return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
var isArray = Array.isArray;
function argsOrArgArray(args) {
	return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
	return operate(function(source, subscriber) {
		var index = 0;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return predicate.call(thisArg, value, index++) && subscriber.next(value);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/catchError.js
function catchError(selector) {
	return operate(function(source, subscriber) {
		var innerSub = null;
		var syncUnsub = false;
		var handledResult;
		innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
			handledResult = innerFrom(selector(err, catchError(selector)(source)));
			if (innerSub) {
				innerSub.unsubscribe();
				innerSub = null;
				handledResult.subscribe(subscriber);
			} else syncUnsub = true;
		}));
		if (syncUnsub) {
			innerSub.unsubscribe();
			innerSub = null;
			handledResult.subscribe(subscriber);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js
function combineLatest() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var resultSelector = popResultSelector(args);
	return resultSelector ? pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs(resultSelector)) : operate(function(source, subscriber) {
		combineLatestInit(__spreadArray([source], __read(argsOrArgArray(args))))(subscriber);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js
function combineLatestWith() {
	var otherSources = [];
	for (var _i = 0; _i < arguments.length; _i++) otherSources[_i] = arguments[_i];
	return combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function finalize(callback) {
	return operate(function(source, subscriber) {
		try {
			source.subscribe(subscriber);
		} finally {
			subscriber.add(callback);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/share.js
function share(options) {
	if (options === void 0) options = {};
	var _a = options.connector, connector = _a === void 0 ? function() {
		return new Subject();
	} : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
	return function(wrapperSource) {
		var connection;
		var resetConnection;
		var subject;
		var refCount = 0;
		var hasCompleted = false;
		var hasErrored = false;
		var cancelReset = function() {
			resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
			resetConnection = void 0;
		};
		var reset = function() {
			cancelReset();
			connection = subject = void 0;
			hasCompleted = hasErrored = false;
		};
		var resetAndUnsubscribe = function() {
			var conn = connection;
			reset();
			conn === null || conn === void 0 || conn.unsubscribe();
		};
		return operate(function(source, subscriber) {
			refCount++;
			if (!hasErrored && !hasCompleted) cancelReset();
			var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
			subscriber.add(function() {
				refCount--;
				if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
			});
			dest.subscribe(subscriber);
			if (!connection && refCount > 0) {
				connection = new SafeSubscriber({
					next: function(value) {
						return dest.next(value);
					},
					error: function(err) {
						hasErrored = true;
						cancelReset();
						resetConnection = handleReset(reset, resetOnError, err);
						dest.error(err);
					},
					complete: function() {
						hasCompleted = true;
						cancelReset();
						resetConnection = handleReset(reset, resetOnComplete);
						dest.complete();
					}
				});
				innerFrom(source).subscribe(connection);
			}
		})(wrapperSource);
	};
}
function handleReset(reset, on) {
	var args = [];
	for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
	if (on === true) {
		reset();
		return;
	}
	if (on === false) return;
	var onSubscriber = new SafeSubscriber({ next: function() {
		onSubscriber.unsubscribe();
		reset();
	} });
	return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime, scheduler) {
	var _a, _b, _c;
	var bufferSize;
	var refCount = false;
	if (configOrBufferSize && typeof configOrBufferSize === "object") _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
	else bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
	return share({
		connector: function() {
			return new ReplaySubject(bufferSize, windowTime, scheduler);
		},
		resetOnError: true,
		resetOnComplete: false,
		resetOnRefCountZero: refCount
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/tap.js
function tap(observerOrNext, error, complete) {
	var tapObserver = isFunction(observerOrNext) || error || complete ? {
		next: observerOrNext,
		error,
		complete
	} : observerOrNext;
	return tapObserver ? operate(function(source, subscriber) {
		var _a;
		(_a = tapObserver.subscribe) === null || _a === void 0 || _a.call(tapObserver);
		var isUnsub = true;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			var _a;
			(_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
			subscriber.next(value);
		}, function() {
			var _a;
			isUnsub = false;
			(_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
			subscriber.complete();
		}, function(err) {
			var _a;
			isUnsub = false;
			(_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
			subscriber.error(err);
		}, function() {
			var _a, _b;
			if (isUnsub) (_a = tapObserver.unsubscribe) === null || _a === void 0 || _a.call(tapObserver);
			(_b = tapObserver.finalize) === null || _b === void 0 || _b.call(tapObserver);
		}));
	}) : identity;
}
//#endregion
//#region node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js
var DRAFTS_FOLDER = "drafts", VERSION_FOLDER = "versions", PATH_SEPARATOR = ".", DRAFTS_PREFIX = `${DRAFTS_FOLDER}${PATH_SEPARATOR}`, VERSION_PREFIX = `${VERSION_FOLDER}${PATH_SEPARATOR}`;
function isDraftId(id) {
	return id.startsWith(DRAFTS_PREFIX);
}
function isVersionId(id) {
	return id.startsWith(VERSION_PREFIX);
}
function getDraftId(id) {
	if (isVersionId(id)) return DRAFTS_PREFIX + getPublishedId(id);
	return isDraftId(id) ? id : DRAFTS_PREFIX + id;
}
function getVersionId(id, version) {
	if (version === "drafts" || version === "published") throw new Error("Version can not be \"published\" or \"drafts\"");
	return `${VERSION_PREFIX}${version}${PATH_SEPARATOR}${getPublishedId(id)}`;
}
function getVersionFromId(id) {
	if (!isVersionId(id)) return;
	const [_versionPrefix, versionId, ..._publishedId] = id.split(PATH_SEPARATOR);
	return versionId;
}
function getPublishedId(id) {
	return isVersionId(id) ? id.split(PATH_SEPARATOR).slice(2).join(PATH_SEPARATOR) : isDraftId(id) ? id.slice(DRAFTS_PREFIX.length) : id;
}
//#endregion
//#region node_modules/nanoid/index.browser.js
var random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
var customRandom = (alphabet, defaultSize, getRandom) => {
	let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
	let step = -~(1.6 * mask * defaultSize / alphabet.length);
	return (size = defaultSize) => {
		let id = "";
		while (true) {
			let bytes = getRandom(step);
			let j = step | 0;
			while (j--) {
				id += alphabet[bytes[j] & mask] || "";
				if (id.length === size) return id;
			}
		}
	};
};
var customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
//#endregion
//#region node_modules/@sanity/client/dist/index.browser.js
var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
function codeFrame(query, location2, message) {
	const lines = query.split(NEWLINE), { start, end, markerLines } = getMarkerLines({
		start: columnToLine(location2.start, lines),
		end: location2.end ? columnToLine(location2.end, lines) : void 0
	}, lines), numberMaxWidth = `${end}`.length;
	return query.split(NEWLINE, end).slice(start, end).map((line, index) => {
		const number = start + 1 + index, gutter = ` ${` ${number}`.slice(-numberMaxWidth)} |`, hasMarker = markerLines[number], lastMarkerLine = !markerLines[number + 1];
		if (!hasMarker) return ` ${gutter}${line.length > 0 ? ` ${line}` : ""}`;
		let markerLine = "";
		if (Array.isArray(hasMarker)) {
			const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " "), numberOfMarkers = hasMarker[1] || 1;
			markerLine = [
				`
 `,
				gutter.replace(/\d/g, " "),
				" ",
				markerSpacing,
				"^".repeat(numberOfMarkers)
			].join(""), lastMarkerLine && message && (markerLine += " " + message);
		}
		return [
			">",
			gutter,
			line.length > 0 ? ` ${line}` : "",
			markerLine
		].join("");
	}).join(`
`);
}
function getMarkerLines(loc, source) {
	const startLoc = { ...loc.start }, endLoc = {
		...startLoc,
		...loc.end
	}, linesBelow = 3, startLine = startLoc.line ?? -1, startColumn = startLoc.column ?? 0, endLine = endLoc.line, endColumn = endLoc.column;
	let start = Math.max(startLine - 3, 0), end = Math.min(source.length, endLine + linesBelow);
	startLine === -1 && (start = 0), endLine === -1 && (end = source.length);
	const lineDiff = endLine - startLine, markerLines = {};
	if (lineDiff) for (let i = 0; i <= lineDiff; i++) {
		const lineNumber = i + startLine;
		if (!startColumn) markerLines[lineNumber] = !0;
		else if (i === 0) markerLines[lineNumber] = [startColumn, source[lineNumber - 1].length - startColumn + 1];
		else if (i === lineDiff) markerLines[lineNumber] = [0, endColumn];
		else markerLines[lineNumber] = [0, source[lineNumber - i].length];
	}
	else startColumn === endColumn ? startColumn ? markerLines[startLine] = [startColumn, 0] : markerLines[startLine] = !0 : markerLines[startLine] = [startColumn, endColumn - startColumn];
	return {
		start,
		end,
		markerLines
	};
}
function columnToLine(column, lines) {
	let offset = 0;
	for (let i = 0; i < lines.length; i++) {
		const lineLength = lines[i].length + 1;
		if (offset + lineLength > column) return {
			line: i + 1,
			column: column - offset
		};
		offset += lineLength;
	}
	return {
		line: lines.length,
		column: lines[lines.length - 1]?.length ?? 0
	};
}
var MAX_ITEMS_IN_ERROR_MESSAGE = 5;
var ClientError = class extends Error {
	response;
	statusCode = 400;
	responseBody;
	details;
	constructor(res, context) {
		const props = extractErrorProps(res, context);
		super(props.message), Object.assign(this, props);
	}
};
var ServerError = class extends Error {
	response;
	statusCode = 500;
	responseBody;
	details;
	constructor(res) {
		const props = extractErrorProps(res);
		super(props.message), Object.assign(this, props);
	}
};
function extractErrorProps(res, context) {
	const body = res.body, props = {
		response: res,
		statusCode: res.statusCode,
		responseBody: stringifyBody(body, res),
		message: "",
		details: void 0
	};
	if (!isRecord(body)) return props.message = httpErrorMessage(res, body), props;
	const error = body.error;
	if (typeof error == "string" && typeof body.message == "string") return props.message = `${error} - ${body.message}`, props;
	if (typeof error != "object" || error === null) return typeof error == "string" ? props.message = error : typeof body.message == "string" ? props.message = body.message : props.message = httpErrorMessage(res, body), props;
	if (isMutationError(error) || isActionError(error)) {
		const allItems = error.items || [], items = allItems.slice(0, MAX_ITEMS_IN_ERROR_MESSAGE).map((item) => item.error?.description).filter(Boolean);
		let itemsStr = items.length ? `:
- ${items.join(`
- `)}` : "";
		return allItems.length > MAX_ITEMS_IN_ERROR_MESSAGE && (itemsStr += `
...and ${allItems.length - MAX_ITEMS_IN_ERROR_MESSAGE} more`), props.message = `${error.description}${itemsStr}`, props.details = body.error, props;
	}
	if (isQueryParseError(error)) {
		const tag = context?.options?.query?.tag;
		return props.message = formatQueryParseError(error, tag), props.details = body.error, props;
	}
	return "description" in error && typeof error.description == "string" ? (props.message = error.description, props.details = error, props) : (props.message = httpErrorMessage(res, body), props);
}
function isMutationError(error) {
	return "type" in error && error.type === "mutationError" && "description" in error && typeof error.description == "string";
}
function isActionError(error) {
	return "type" in error && error.type === "actionError" && "description" in error && typeof error.description == "string";
}
function isQueryParseError(error) {
	return isRecord(error) && error.type === "queryParseError" && typeof error.query == "string" && typeof error.start == "number" && typeof error.end == "number";
}
function formatQueryParseError(error, tag) {
	const { query, start, end, description } = error;
	if (!query || typeof start > "u") return `GROQ query parse error: ${description}`;
	const withTag = tag ? `

Tag: ${tag}` : "";
	return `GROQ query parse error:
${codeFrame(query, {
		start,
		end
	}, description)}${withTag}`;
}
function httpErrorMessage(res, body) {
	const details = typeof body == "string" ? ` (${sliceWithEllipsis(body, 100)})` : "", statusMessage = res.statusMessage ? ` ${res.statusMessage}` : "";
	return `${res.method}-request to ${res.url} resulted in HTTP ${res.statusCode}${statusMessage}${details}`;
}
function stringifyBody(body, res) {
	return (res.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(body, null, 2) : body;
}
function sliceWithEllipsis(str, max) {
	return str.length > max ? `${str.slice(0, max)}\u2026` : str;
}
var CorsOriginError = class extends Error {
	projectId;
	addOriginUrl;
	constructor({ projectId: projectId2 }) {
		super("CorsOriginError"), this.name = "CorsOriginError", this.projectId = projectId2;
		const url = new URL(`https://sanity.io/manage/project/${projectId2}/api`);
		if (typeof location < "u") {
			const { origin } = location;
			url.searchParams.set("cors", "add"), url.searchParams.set("origin", origin), this.addOriginUrl = url, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${url}`;
		} else this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${url}`;
	}
};
var httpError = { onResponse: (res, context) => {
	if (res.statusCode >= 500) throw new ServerError(res);
	if (res.statusCode >= 400) throw new ClientError(res, context);
	return res;
} };
function printWarnings(config = {}) {
	const seen = {}, shouldIgnoreWarning = (message) => config.ignoreWarnings === void 0 ? !1 : (Array.isArray(config.ignoreWarnings) ? config.ignoreWarnings : [config.ignoreWarnings]).some((pattern) => typeof pattern == "string" ? message.includes(pattern) : pattern instanceof RegExp ? pattern.test(message) : !1);
	return { onResponse: (res) => {
		const warn = res.headers["x-sanity-warning"], warnings = Array.isArray(warn) ? warn : [warn];
		for (const msg of warnings) !msg || seen[msg] || shouldIgnoreWarning(msg) || (seen[msg] = !0, console.warn(msg));
		return res;
	} };
}
function defineHttpRequest(envMiddleware2, config = {}) {
	return p$1([
		P({ shouldRetry }),
		...envMiddleware2,
		printWarnings(config),
		x(),
		E(),
		S(),
		httpError,
		A({ implementation: Observable })
	]);
}
function shouldRetry(err, attempt, options) {
	if (options.maxRetries === 0) return !1;
	const isSafe = options.method === "GET" || options.method === "HEAD", isQuery2 = (options.uri || options.url).startsWith("/data/query"), isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
	return (isSafe || isQuery2) && isRetriableResponse ? !0 : P.shouldRetry(err, attempt, options);
}
var BASE_URL = "https://www.sanity.io/help/";
function generateHelpUrl(slug) {
	return BASE_URL + slug;
}
var VALID_ASSET_TYPES = ["image", "file"], VALID_INSERT_LOCATIONS = [
	"before",
	"after",
	"replace"
], dataset = (name) => {
	if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
}, projectId = (id) => {
	if (!/^[-a-z0-9]+$/i.test(id)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
}, validateAssetType = (type) => {
	if (VALID_ASSET_TYPES.indexOf(type) === -1) throw new Error(`Invalid asset type: ${type}. Must be one of ${VALID_ASSET_TYPES.join(", ")}`);
}, validateObject = (op, val) => {
	if (val === null || typeof val != "object" || Array.isArray(val)) throw new Error(`${op}() takes an object of properties`);
}, validateDocumentId = (op, id) => {
	if (typeof id != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) throw new Error(`${op}(): "${id}" is not a valid document ID`);
}, requireDocumentId = (op, doc) => {
	if (!doc._id) throw new Error(`${op}() requires that the document contains an ID ("_id" property)`);
	validateDocumentId(op, doc._id);
}, validateDocumentType = (op, type) => {
	if (typeof type != "string") throw new Error(`\`${op}()\`: \`${type}\` is not a valid document type`);
}, requireDocumentType = (op, doc) => {
	if (!doc._type) throw new Error(`\`${op}()\` requires that the document contains a type (\`_type\` property)`);
	validateDocumentType(op, doc._type);
}, validateVersionIdMatch = (builtVersionId, document) => {
	if (document._id && document._id !== builtVersionId) throw new Error(`The provided document ID (\`${document._id}\`) does not match the generated version ID (\`${builtVersionId}\`)`);
}, validateInsert = (at, selector, items) => {
	const signature = "insert(at, selector, items)";
	if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
		const valid = VALID_INSERT_LOCATIONS.map((loc) => `"${loc}"`).join(", ");
		throw new Error(`${signature} takes an "at"-argument which is one of: ${valid}`);
	}
	if (typeof selector != "string") throw new Error(`${signature} takes a "selector"-argument which must be a string`);
	if (!Array.isArray(items)) throw new Error(`${signature} takes an "items"-argument which must be an array`);
}, hasDataset = (config) => {
	if (!config.dataset) throw new Error("`dataset` must be provided to perform queries");
	return config.dataset || "";
}, requestTag = (tag) => {
	if (typeof tag != "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
	return tag;
}, resourceConfig = (config) => {
	if (!config["~experimental_resource"]) throw new Error("`resource` must be provided to perform resource queries");
	const { type, id } = config["~experimental_resource"];
	switch (type) {
		case "dataset":
			if (id.split(".").length !== 2) throw new Error("Dataset resource ID must be in the format \"project.dataset\"");
			return;
		case "dashboard":
		case "media-library":
		case "canvas": return;
		default: throw new Error(`Unsupported resource type: ${type.toString()}`);
	}
}, resourceGuard = (service, config) => {
	if (config["~experimental_resource"]) throw new Error(`\`${service}\` does not support resource-based operations`);
};
function once(fn) {
	let didCall = !1, returnValue;
	return (...args) => (didCall || (returnValue = fn(...args), didCall = !0), returnValue);
}
var createWarningPrinter = (message) => once((...args) => console.warn(message.join(" "), ...args)), printCdnAndWithCredentialsWarning = createWarningPrinter(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]), printCdnWarning = createWarningPrinter([
	"Since you haven't set a value for `useCdn`, we will deliver content using our",
	"global, edge-cached API-CDN. If you wish to have content delivered faster, set",
	"`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]), printCdnPreviewDraftsWarning = createWarningPrinter(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]), printPreviewDraftsDeprecationWarning = createWarningPrinter(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]), printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${generateHelpUrl("js-client-browser-token")} for more information and how to hide this warning.`]), printCredentialedTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.", "This is no longer supported - only token will be used - remove `withCredentials: true`."]), printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", `See ${generateHelpUrl("js-client-api-version")}`]);
createWarningPrinter(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]);
var printCreateVersionWithBaseIdWarning = createWarningPrinter(["You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."]), defaultCdnHost = "apicdn.sanity.io", defaultConfig = {
	apiHost: "https://api.sanity.io",
	apiVersion: "1",
	useProjectHostname: !0,
	stega: { enabled: !1 }
}, LOCALHOSTS = [
	"localhost",
	"127.0.0.1",
	"0.0.0.0"
], isLocal = (host) => LOCALHOSTS.indexOf(host) !== -1;
function validateApiVersion(apiVersion) {
	if (apiVersion === "1" || apiVersion === "X") return;
	const apiDate = new Date(apiVersion);
	if (!(/^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0)) throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function validateApiPerspective(perspective) {
	if (Array.isArray(perspective) && perspective.length > 1 && perspective.includes("raw")) throw new TypeError("Invalid API perspective value: \"raw\". The raw-perspective can not be combined with other perspectives");
}
var initConfig = (config, prevConfig) => {
	const specifiedConfig = {
		...prevConfig,
		...config,
		stega: {
			...typeof prevConfig.stega == "boolean" ? { enabled: prevConfig.stega } : prevConfig.stega || defaultConfig.stega,
			...typeof config.stega == "boolean" ? { enabled: config.stega } : config.stega || {}
		}
	};
	specifiedConfig.apiVersion || printNoApiVersionSpecifiedWarning();
	const newConfig = {
		...defaultConfig,
		...specifiedConfig
	}, projectBased = newConfig.useProjectHostname && !newConfig["~experimental_resource"];
	if (typeof Promise > "u") {
		const helpUrl = generateHelpUrl("js-client-promise-polyfill");
		throw new Error(`No native Promise-implementation found, polyfill needed - see ${helpUrl}`);
	}
	if (projectBased && !newConfig.projectId) throw new Error("Configuration must contain `projectId`");
	if (newConfig["~experimental_resource"] && resourceConfig(newConfig), typeof newConfig.perspective < "u" && validateApiPerspective(newConfig.perspective), "encodeSourceMap" in newConfig) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
	if ("encodeSourceMapAtPath" in newConfig) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
	if (typeof newConfig.stega.enabled != "boolean") throw new Error(`stega.enabled must be a boolean, received ${newConfig.stega.enabled}`);
	if (newConfig.stega.enabled && newConfig.stega.studioUrl === void 0) throw new Error("stega.studioUrl must be defined when stega.enabled is true");
	if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl != "string" && typeof newConfig.stega.studioUrl != "function") throw new Error(`stega.studioUrl must be a string or a function, received ${newConfig.stega.studioUrl}`);
	const isBrowser = typeof window < "u" && window.location && window.location.hostname, isLocalhost = isBrowser && isLocal(window.location.hostname), hasToken = !!newConfig.token;
	newConfig.withCredentials && hasToken && (printCredentialedTokenWarning(), newConfig.withCredentials = !1), isBrowser && isLocalhost && hasToken && newConfig.ignoreBrowserTokenWarning !== !0 ? printBrowserTokenWarning() : typeof newConfig.useCdn > "u" && printCdnWarning(), projectBased && projectId(newConfig.projectId), newConfig.dataset && dataset(newConfig.dataset), "requestTagPrefix" in newConfig && (newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0), newConfig.apiVersion = `${newConfig.apiVersion}`.replace(/^v/, ""), newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost, newConfig.useCdn === !0 && newConfig.withCredentials && printCdnAndWithCredentialsWarning(), newConfig.useCdn = newConfig.useCdn !== !1 && !newConfig.withCredentials, validateApiVersion(newConfig.apiVersion);
	const hostParts = newConfig.apiHost.split("://", 2), protocol = hostParts[0], host = hostParts[1], cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
	return projectBased ? (newConfig.url = `${protocol}://${newConfig.projectId}.${host}/v${newConfig.apiVersion}`, newConfig.cdnUrl = `${protocol}://${newConfig.projectId}.${cdnHost}/v${newConfig.apiVersion}`) : (newConfig.url = `${newConfig.apiHost}/v${newConfig.apiVersion}`, newConfig.cdnUrl = newConfig.url), newConfig;
};
var ConnectionFailedError = class extends Error {
	name = "ConnectionFailedError";
};
var DisconnectError = class extends Error {
	name = "DisconnectError";
	reason;
	constructor(message, reason, options = {}) {
		super(message, options), this.reason = reason;
	}
};
var ChannelError = class extends Error {
	name = "ChannelError";
	data;
	constructor(message, data) {
		super(message), this.data = data;
	}
};
var MessageError = class extends Error {
	name = "MessageError";
	data;
	constructor(message, data, options = {}) {
		super(message, options), this.data = data;
	}
};
var MessageParseError = class extends Error {
	name = "MessageParseError";
};
var REQUIRED_EVENTS = ["channelError", "disconnect"];
function connectEventSource(initEventSource, events) {
	return defer(() => {
		const es = initEventSource();
		return isObservable(es) ? es : of(es);
	}).pipe(mergeMap((es) => connectWithESInstance(es, events)));
}
function connectWithESInstance(es, events) {
	return new Observable((observer) => {
		const emitOpen = events.includes("open"), emitReconnect = events.includes("reconnect");
		function onError(evt) {
			if ("data" in evt) {
				const [parseError, event] = parseEvent(evt);
				observer.error(parseError ? new MessageParseError("Unable to parse EventSource error message", { cause: event }) : new MessageError((event?.data).message, event));
				return;
			}
			es.readyState === es.CLOSED ? observer.error(new ConnectionFailedError("EventSource connection failed")) : emitReconnect && observer.next({ type: "reconnect" });
		}
		function onOpen() {
			observer.next({ type: "open" });
		}
		function onMessage(message) {
			const [parseError, event] = parseEvent(message);
			if (parseError) {
				observer.error(new MessageParseError("Unable to parse EventSource message", { cause: parseError }));
				return;
			}
			if (message.type === "channelError") {
				const tag = new URL(es.url).searchParams.get("tag");
				observer.error(new ChannelError(extractErrorMessage(event?.data, tag), event.data));
				return;
			}
			if (message.type === "disconnect") {
				observer.error(new DisconnectError(`Server disconnected client: ${event.data?.reason || "unknown error"}`));
				return;
			}
			observer.next({
				type: message.type,
				id: message.lastEventId,
				...event.data ? { data: event.data } : {}
			});
		}
		es.addEventListener("error", onError), emitOpen && es.addEventListener("open", onOpen);
		const cleanedEvents = [.../* @__PURE__ */ new Set([...REQUIRED_EVENTS, ...events])].filter((type) => type !== "error" && type !== "open" && type !== "reconnect");
		return cleanedEvents.forEach((type) => es.addEventListener(type, onMessage)), () => {
			es.removeEventListener("error", onError), emitOpen && es.removeEventListener("open", onOpen), cleanedEvents.forEach((type) => es.removeEventListener(type, onMessage)), es.close();
		};
	});
}
function parseEvent(message) {
	try {
		const data = typeof message.data == "string" && JSON.parse(message.data);
		return [null, {
			type: message.type,
			id: message.lastEventId,
			...isEmptyObject(data) ? {} : { data }
		}];
	} catch (err) {
		return [err, null];
	}
}
function extractErrorMessage(err, tag) {
	const error = err.error;
	return error ? isQueryParseError(error) ? formatQueryParseError(error, tag) : error.description ? error.description : typeof error == "string" ? error : JSON.stringify(error, null, 2) : err.message || "Unknown listener error";
}
function isEmptyObject(data) {
	for (const _ in data) return !1;
	return !0;
}
function getSelection(sel) {
	if (typeof sel == "string") return { id: sel };
	if (Array.isArray(sel)) return {
		query: "*[_id in $ids]",
		params: { ids: sel }
	};
	if (typeof sel == "object" && sel !== null && "query" in sel && typeof sel.query == "string") return "params" in sel && typeof sel.params == "object" && sel.params !== null ? {
		query: sel.query,
		params: sel.params
	} : { query: sel.query };
	const selectionOpts = [
		"* Document ID (<docId>)",
		"* Array of document IDs",
		"* Object containing `query`"
	].join(`
`);
	throw new Error(`Unknown selection - must be one of:

${selectionOpts}`);
}
var BasePatch = class {
	selection;
	operations;
	constructor(selection, operations = {}) {
		this.selection = selection, this.operations = operations;
	}
	/**
	* Sets the given attributes to the document. Does NOT merge objects.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	*/
	set(attrs) {
		return this._assign("set", attrs);
	}
	/**
	* Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	*/
	setIfMissing(attrs) {
		return this._assign("setIfMissing", attrs);
	}
	/**
	* Performs a "diff-match-patch" operation on the string attributes provided.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
	*/
	diffMatchPatch(attrs) {
		return validateObject("diffMatchPatch", attrs), this._assign("diffMatchPatch", attrs);
	}
	/**
	* Unsets the attribute paths provided.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attribute paths to unset.
	*/
	unset(attrs) {
		if (!Array.isArray(attrs)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
		return this.operations = Object.assign({}, this.operations, { unset: attrs }), this;
	}
	/**
	* Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	*
	* @param attrs - Object of attribute paths to increment, values representing the number to increment by.
	*/
	inc(attrs) {
		return this._assign("inc", attrs);
	}
	/**
	* Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	*
	* @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
	*/
	dec(attrs) {
		return this._assign("dec", attrs);
	}
	/**
	* Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
	*
	* @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
	* @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
	* @param items - Array of items to insert/replace
	*/
	insert(at, selector, items) {
		return validateInsert(at, selector, items), this._assign("insert", {
			[at]: selector,
			items
		});
	}
	/**
	* Append the given items to the array at the given JSONPath
	*
	* @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
	* @param items - Array of items to append to the array
	*/
	append(selector, items) {
		return this.insert("after", `${selector}[-1]`, items);
	}
	/**
	* Prepend the given items to the array at the given JSONPath
	*
	* @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
	* @param items - Array of items to prepend to the array
	*/
	prepend(selector, items) {
		return this.insert("before", `${selector}[0]`, items);
	}
	/**
	* Change the contents of an array by removing existing elements and/or adding new elements.
	*
	* @param selector - Attribute or JSONPath expression for array
	* @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
	* @param deleteCount - An integer indicating the number of old array elements to remove.
	* @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
	*/
	splice(selector, start, deleteCount, items) {
		const delAll = typeof deleteCount > "u" || deleteCount === -1, startIndex = start < 0 ? start - 1 : start, delCount = delAll ? -1 : Math.max(0, start + deleteCount), rangeSelector = `${selector}[${startIndex}:${startIndex < 0 && delCount >= 0 ? "" : delCount}]`;
		return this.insert("replace", rangeSelector, items || []);
	}
	/**
	* Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
	*
	* @param rev - Revision to lock the patch to
	*/
	ifRevisionId(rev) {
		return this.operations.ifRevisionID = rev, this;
	}
	/**
	* Return a plain JSON representation of the patch
	*/
	serialize() {
		return {
			...getSelection(this.selection),
			...this.operations
		};
	}
	/**
	* Return a plain JSON representation of the patch
	*/
	toJSON() {
		return this.serialize();
	}
	/**
	* Clears the patch of all operations
	*/
	reset() {
		return this.operations = {}, this;
	}
	_assign(op, props, merge2 = !0) {
		return validateObject(op, props), this.operations = Object.assign({}, this.operations, { [op]: Object.assign({}, merge2 && this.operations[op] || {}, props) }), this;
	}
	_set(op, props) {
		return this._assign(op, props, !1);
	}
};
var ObservablePatch = class ObservablePatch extends BasePatch {
	#client;
	constructor(selection, operations, client) {
		super(selection, operations), this.#client = client;
	}
	/**
	* Clones the patch
	*/
	clone() {
		return new ObservablePatch(this.selection, { ...this.operations }, this.#client);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
		const returnFirst = typeof this.selection == "string", opts = Object.assign({
			returnFirst,
			returnDocuments: !0
		}, options);
		return this.#client.mutate({ patch: this.serialize() }, opts);
	}
};
var Patch = class Patch extends BasePatch {
	#client;
	constructor(selection, operations, client) {
		super(selection, operations), this.#client = client;
	}
	/**
	* Clones the patch
	*/
	clone() {
		return new Patch(this.selection, { ...this.operations }, this.#client);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
		const returnFirst = typeof this.selection == "string", opts = Object.assign({
			returnFirst,
			returnDocuments: !0
		}, options);
		return this.#client.mutate({ patch: this.serialize() }, opts);
	}
};
var defaultMutateOptions = { returnDocuments: !1 };
var BaseTransaction = class {
	operations;
	trxId;
	constructor(operations = [], transactionId) {
		this.operations = operations, this.trxId = transactionId;
	}
	/**
	* Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create. Requires a `_type` property.
	*/
	create(doc) {
		return validateObject("create", doc), this._add({ create: doc });
	}
	/**
	* Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
	*/
	createIfNotExists(doc) {
		const op = "createIfNotExists";
		return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
	}
	/**
	* Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create or replace. Requires `_id` and `_type` properties.
	*/
	createOrReplace(doc) {
		const op = "createOrReplace";
		return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
	}
	/**
	* Deletes the document with the given document ID
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param documentId - Document ID to delete
	*/
	delete(documentId) {
		return validateDocumentId("delete", documentId), this._add({ delete: { id: documentId } });
	}
	transactionId(id) {
		return id ? (this.trxId = id, this) : this.trxId;
	}
	/**
	* Return a plain JSON representation of the transaction
	*/
	serialize() {
		return [...this.operations];
	}
	/**
	* Return a plain JSON representation of the transaction
	*/
	toJSON() {
		return this.serialize();
	}
	/**
	* Clears the transaction of all operations
	*/
	reset() {
		return this.operations = [], this;
	}
	_add(mut) {
		return this.operations.push(mut), this;
	}
};
var Transaction = class Transaction extends BaseTransaction {
	#client;
	constructor(operations, client, transactionId) {
		super(operations, transactionId), this.#client = client;
	}
	/**
	* Clones the transaction
	*/
	clone() {
		return new Transaction([...this.operations], this.#client, this.trxId);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
		return this.#client.mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {}));
	}
	patch(patchOrDocumentId, patchOps) {
		const isBuilder = typeof patchOps == "function", isPatch = typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof Patch, isMutationSelection = typeof patchOrDocumentId == "object" && ("query" in patchOrDocumentId || "id" in patchOrDocumentId);
		if (isPatch) return this._add({ patch: patchOrDocumentId.serialize() });
		if (isBuilder) {
			const patch = patchOps(new Patch(patchOrDocumentId, {}, this.#client));
			if (!(patch instanceof Patch)) throw new Error("function passed to `patch()` must return the patch");
			return this._add({ patch: patch.serialize() });
		}
		if (isMutationSelection) {
			const patch = new Patch(patchOrDocumentId, patchOps || {}, this.#client);
			return this._add({ patch: patch.serialize() });
		}
		return this._add({ patch: {
			id: patchOrDocumentId,
			...patchOps
		} });
	}
};
var ObservableTransaction = class ObservableTransaction extends BaseTransaction {
	#client;
	constructor(operations, client, transactionId) {
		super(operations, transactionId), this.#client = client;
	}
	/**
	* Clones the transaction
	*/
	clone() {
		return new ObservableTransaction([...this.operations], this.#client, this.trxId);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
		return this.#client.mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {}));
	}
	patch(patchOrDocumentId, patchOps) {
		const isBuilder = typeof patchOps == "function";
		if (typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof ObservablePatch) return this._add({ patch: patchOrDocumentId.serialize() });
		if (isBuilder) {
			const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, this.#client));
			if (!(patch instanceof ObservablePatch)) throw new Error("function passed to `patch()` must return the patch");
			return this._add({ patch: patch.serialize() });
		}
		return this._add({ patch: {
			id: patchOrDocumentId,
			...patchOps
		} });
	}
};
var projectHeader = "X-Sanity-Project-ID";
function requestOptions(config, overrides = {}) {
	const headers = {};
	config.headers && Object.assign(headers, config.headers);
	const token = overrides.token || config.token;
	token && (headers.Authorization = `Bearer ${token}`), !overrides.useGlobalApi && !config.useProjectHostname && config.projectId && (headers[projectHeader] = config.projectId);
	const withCredentials = !!(typeof overrides.withCredentials > "u" ? config.withCredentials : overrides.withCredentials), timeout = typeof overrides.timeout > "u" ? config.timeout : overrides.timeout;
	return Object.assign({}, overrides, {
		headers: Object.assign({}, headers, overrides.headers || {}),
		timeout: typeof timeout > "u" ? 300 * 1e3 : timeout,
		proxy: overrides.proxy || config.proxy,
		json: !0,
		withCredentials,
		fetch: typeof overrides.fetch == "object" && typeof config.fetch == "object" ? {
			...config.fetch,
			...overrides.fetch
		} : overrides.fetch || config.fetch
	});
}
var encodeQueryString = ({ query, params = {}, options = {} }) => {
	const searchParams = new URLSearchParams(), { tag, includeMutations, returnQuery, ...opts } = options;
	tag && searchParams.append("tag", tag), searchParams.append("query", query);
	for (const [key, value] of Object.entries(params)) value !== void 0 && searchParams.append(`$${key}`, JSON.stringify(value));
	for (const [key, value] of Object.entries(opts)) value && searchParams.append(key, `${value}`);
	return returnQuery === !1 && searchParams.append("returnQuery", "false"), includeMutations === !1 && searchParams.append("includeMutations", "false"), `?${searchParams}`;
}, excludeFalsey = (param, defValue) => param === !1 ? void 0 : typeof param > "u" ? defValue : param, getMutationQuery = (options = {}) => ({
	dryRun: options.dryRun,
	returnIds: !0,
	returnDocuments: excludeFalsey(options.returnDocuments, !0),
	visibility: options.visibility || "sync",
	autoGenerateArrayKeys: options.autoGenerateArrayKeys,
	skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
}), isResponse = (event) => event.type === "response", getBody = (event) => event.body, indexBy = (docs, attr) => docs.reduce((indexed, doc) => (indexed[attr(doc)] = doc, indexed), /* @__PURE__ */ Object.create(null)), getQuerySizeLimit = 11264;
function _fetch(client, httpRequest, _stega, query, _params = {}, options = {}) {
	const stega = "stega" in options ? {
		..._stega || {},
		...typeof options.stega == "boolean" ? { enabled: options.stega } : options.stega || {}
	} : _stega, params = stega.enabled ? stegaClean(_params) : _params, mapResponse = options.filterResponse === !1 ? (res) => res : (res) => res.result, { cache, next, ...opts } = {
		useAbortSignal: typeof options.signal < "u",
		resultSourceMap: stega.enabled ? "withKeyArraySelector" : options.resultSourceMap,
		...options,
		returnQuery: options.filterResponse === !1 && options.returnQuery !== !1
	}, reqOpts = typeof cache < "u" || typeof next < "u" ? {
		...opts,
		fetch: {
			cache,
			next
		}
	} : opts, $request = _dataRequest(client, httpRequest, "query", {
		query,
		params
	}, reqOpts);
	return stega.enabled ? $request.pipe(combineLatestWith(from(import("./stegaEncodeSourceMap-CqoLobnR.js").then(function(n) {
		return n.stegaEncodeSourceMap$1;
	}).then(({ stegaEncodeSourceMap }) => stegaEncodeSourceMap))), map(([res, stegaEncodeSourceMap]) => {
		const result = stegaEncodeSourceMap(res.result, res.resultSourceMap, stega);
		return mapResponse({
			...res,
			result
		});
	})) : $request.pipe(map(mapResponse));
}
function _getDocument(client, httpRequest, id, opts = {}) {
	return _requestObservable(client, httpRequest, {
		uri: _getDataUrl(client, "doc", (() => {
			if (!opts.releaseId) return id;
			const versionId = getVersionFromId(id);
			if (!versionId) {
				if (isDraftId(id)) throw new Error(`The document ID (\`${id}\`) is a draft, but \`options.releaseId\` is set as \`${opts.releaseId}\``);
				return getVersionId(id, opts.releaseId);
			}
			if (versionId !== opts.releaseId) throw new Error(`The document ID (\`${id}\`) is already a version of \`${versionId}\` release, but this does not match the provided \`options.releaseId\` (\`${opts.releaseId}\`)`);
			return id;
		})()),
		json: !0,
		tag: opts.tag,
		signal: opts.signal,
		query: opts.includeAllVersions !== void 0 ? { includeAllVersions: opts.includeAllVersions } : void 0
	}).pipe(filter(isResponse), map((event) => {
		const documents = event.body.documents;
		return documents ? opts.includeAllVersions ? documents : documents[0] : opts.includeAllVersions ? [] : void 0;
	}));
}
function _getDocuments(client, httpRequest, ids, opts = {}) {
	return _requestObservable(client, httpRequest, {
		uri: _getDataUrl(client, "doc", ids.join(",")),
		json: !0,
		tag: opts.tag,
		signal: opts.signal
	}).pipe(filter(isResponse), map((event) => {
		const indexed = indexBy(event.body.documents || [], (doc) => doc._id);
		return ids.map((id) => indexed[id] || null);
	}));
}
function _getReleaseDocuments(client, httpRequest, releaseId, opts = {}) {
	return _dataRequest(client, httpRequest, "query", {
		query: "*[sanity::partOfRelease($releaseId)]",
		params: { releaseId }
	}, opts);
}
function _createIfNotExists(client, httpRequest, doc, options) {
	return requireDocumentId("createIfNotExists", doc), _create(client, httpRequest, doc, "createIfNotExists", options);
}
function _createOrReplace(client, httpRequest, doc, options) {
	return requireDocumentId("createOrReplace", doc), _create(client, httpRequest, doc, "createOrReplace", options);
}
function _createVersion(client, httpRequest, doc, publishedId, options) {
	return requireDocumentId("createVersion", doc), requireDocumentType("createVersion", doc), printCreateVersionWithBaseIdWarning(), _action(client, httpRequest, {
		actionType: "sanity.action.document.version.create",
		publishedId,
		document: doc
	}, options);
}
function _createVersionFromBase(client, httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options) {
	if (!baseId) throw new Error("`createVersion()` requires `baseId` when no `document` is provided");
	if (!publishedId) throw new Error("`createVersion()` requires `publishedId` when `baseId` is provided");
	validateDocumentId("createVersion", baseId), validateDocumentId("createVersion", publishedId);
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.create",
		publishedId,
		baseId,
		versionId: releaseId ? getVersionId(publishedId, releaseId) : getDraftId(publishedId),
		ifBaseRevisionId
	}, options);
}
function _delete(client, httpRequest, selection, options) {
	return _dataRequest(client, httpRequest, "mutate", { mutations: [{ delete: getSelection(selection) }] }, options);
}
function _discardVersion(client, httpRequest, versionId, purge = !1, options) {
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.discard",
		versionId,
		purge
	}, options);
}
function _replaceVersion(client, httpRequest, doc, options) {
	return requireDocumentId("replaceVersion", doc), requireDocumentType("replaceVersion", doc), _action(client, httpRequest, {
		actionType: "sanity.action.document.version.replace",
		document: doc
	}, options);
}
function _unpublishVersion(client, httpRequest, versionId, publishedId, options) {
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.unpublish",
		versionId,
		publishedId
	}, options);
}
function _mutate(client, httpRequest, mutations, options) {
	let mut;
	mutations instanceof Patch || mutations instanceof ObservablePatch ? mut = { patch: mutations.serialize() } : mutations instanceof Transaction || mutations instanceof ObservableTransaction ? mut = mutations.serialize() : mut = mutations;
	return _dataRequest(client, httpRequest, "mutate", {
		mutations: Array.isArray(mut) ? mut : [mut],
		transactionId: options && options.transactionId || void 0
	}, options);
}
function _action(client, httpRequest, actions, options) {
	return _dataRequest(client, httpRequest, "actions", {
		actions: Array.isArray(actions) ? actions : [actions],
		transactionId: options && options.transactionId || void 0,
		skipCrossDatasetReferenceValidation: options && options.skipCrossDatasetReferenceValidation || void 0,
		dryRun: options && options.dryRun || void 0
	}, options);
}
function _dataRequest(client, httpRequest, endpoint, body, options = {}) {
	const isMutation = endpoint === "mutate", isAction = endpoint === "actions", isQuery2 = endpoint === "query", strQuery = isMutation || isAction ? "" : encodeQueryString(body), useGet = !isMutation && !isAction && strQuery.length < getQuerySizeLimit, stringQuery = useGet ? strQuery : "", returnFirst = options.returnFirst, { timeout, token, tag, headers, returnQuery, lastLiveEventId, cacheMode } = options, uri = _getDataUrl(client, endpoint, stringQuery);
	return _requestObservable(client, httpRequest, {
		method: useGet ? "GET" : "POST",
		uri,
		json: !0,
		body: useGet ? void 0 : body,
		query: isMutation && getMutationQuery(options),
		timeout,
		headers,
		token,
		tag,
		returnQuery,
		perspective: options.perspective,
		resultSourceMap: options.resultSourceMap,
		lastLiveEventId: Array.isArray(lastLiveEventId) ? lastLiveEventId[0] : lastLiveEventId,
		cacheMode,
		canUseCdn: isQuery2,
		signal: options.signal,
		fetch: options.fetch,
		useAbortSignal: options.useAbortSignal,
		useCdn: options.useCdn
	}).pipe(filter(isResponse), map(getBody), map((res) => {
		if (!isMutation) return res;
		const results = res.results || [];
		if (options.returnDocuments) return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
		const key = returnFirst ? "documentId" : "documentIds", ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
		return {
			transactionId: res.transactionId,
			results,
			[key]: ids
		};
	}));
}
function _create(client, httpRequest, doc, op, options = {}) {
	const mutation = { [op]: doc }, opts = Object.assign({
		returnFirst: !0,
		returnDocuments: !0
	}, options);
	return _dataRequest(client, httpRequest, "mutate", { mutations: [mutation] }, opts);
}
var hasDataConfig = (client) => client.config().dataset !== void 0 && client.config().projectId !== void 0 || client.config()["~experimental_resource"] !== void 0, isQuery = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "query")), isMutate = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "mutate")), isDoc = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "doc", "")), isListener = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "listen")), isHistory = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "history", "")), isData = (client, uri) => uri.startsWith("/data/") || isQuery(client, uri) || isMutate(client, uri) || isDoc(client, uri) || isListener(client, uri) || isHistory(client, uri);
function _requestObservable(client, httpRequest, options) {
	const uri = options.url || options.uri, config = client.config(), canUseCdn = typeof options.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && isData(client, uri) : options.canUseCdn;
	let useCdn = (options.useCdn ?? config.useCdn) && canUseCdn;
	const tag = options.tag && config.requestTagPrefix ? [config.requestTagPrefix, options.tag].join(".") : options.tag || config.requestTagPrefix;
	if (tag && options.tag !== null && (options.query = {
		tag: requestTag(tag),
		...options.query
	}), [
		"GET",
		"HEAD",
		"POST"
	].indexOf(options.method || "GET") >= 0 && isQuery(client, uri)) {
		const resultSourceMap = options.resultSourceMap ?? config.resultSourceMap;
		resultSourceMap !== void 0 && resultSourceMap !== !1 && (options.query = {
			resultSourceMap,
			...options.query
		});
		const perspectiveOption = options.perspective || config.perspective;
		typeof perspectiveOption < "u" && (perspectiveOption === "previewDrafts" && printPreviewDraftsDeprecationWarning(), validateApiPerspective(perspectiveOption), options.query = {
			perspective: Array.isArray(perspectiveOption) ? perspectiveOption.join(",") : perspectiveOption,
			...options.query
		}, (Array.isArray(perspectiveOption) && perspectiveOption.length > 0 || perspectiveOption === "previewDrafts" || perspectiveOption === "drafts") && useCdn && (useCdn = !1, printCdnPreviewDraftsWarning())), options.lastLiveEventId && (options.query = {
			...options.query,
			lastLiveEventId: options.lastLiveEventId
		}), options.returnQuery === !1 && (options.query = {
			returnQuery: "false",
			...options.query
		}), useCdn && options.cacheMode == "noStale" && (options.query = {
			cacheMode: "noStale",
			...options.query
		});
	}
	const reqOptions = requestOptions(config, Object.assign({}, options, { url: _getUrl(client, uri, useCdn) })), request = new Observable((subscriber) => httpRequest(reqOptions, config.requester).subscribe(subscriber));
	return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
}
function _request(client, httpRequest, options) {
	return _requestObservable(client, httpRequest, options).pipe(filter((event) => event.type === "response"), map((event) => event.body));
}
function _getDataUrl(client, operation, path) {
	const config = client.config();
	if (config["~experimental_resource"]) {
		resourceConfig(config);
		return `${resourceDataBase(config)}/${path !== void 0 ? `${operation}/${path}` : operation}`.replace(/\/($|\?)/, "$1");
	}
	const baseUri = `/${operation}/${hasDataset(config)}`;
	return `/data${path !== void 0 ? `${baseUri}/${path}` : baseUri}`.replace(/\/($|\?)/, "$1");
}
function _getUrl(client, uri, canUseCdn = !1) {
	const { url, cdnUrl } = client.config();
	return `${canUseCdn ? cdnUrl : url}/${uri.replace(/^\//, "")}`;
}
function _withAbortSignal(signal) {
	return (input) => new Observable((observer) => {
		const abort = () => observer.error(_createAbortError(signal));
		if (signal && signal.aborted) {
			abort();
			return;
		}
		const subscription = input.subscribe(observer);
		return signal.addEventListener("abort", abort), () => {
			signal.removeEventListener("abort", abort), subscription.unsubscribe();
		};
	});
}
var isDomExceptionSupported = !!globalThis.DOMException;
function _createAbortError(signal) {
	if (isDomExceptionSupported) return new DOMException(signal?.reason ?? "The operation was aborted.", "AbortError");
	const error = new Error(signal?.reason ?? "The operation was aborted.");
	return error.name = "AbortError", error;
}
var resourceDataBase = (config) => {
	if (!config["~experimental_resource"]) throw new Error("`resource` must be provided to perform resource queries");
	const { type, id } = config["~experimental_resource"];
	switch (type) {
		case "dataset": {
			const segments = id.split(".");
			if (segments.length !== 2) throw new Error("Dataset ID must be in the format \"project.dataset\"");
			return `/projects/${segments[0]}/datasets/${segments[1]}`;
		}
		case "canvas": return `/canvases/${id}`;
		case "media-library": return `/media-libraries/${id}`;
		case "dashboard": return `/dashboards/${id}`;
		default: throw new Error(`Unsupported resource type: ${type.toString()}`);
	}
};
function _generate(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/generate/${hasDataset(client.config())}`,
		body: request
	});
}
function _patch(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/patch/${hasDataset(client.config())}`,
		body: request
	});
}
function _prompt(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/prompt/${hasDataset(client.config())}`,
		body: request
	});
}
function _transform(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/transform/${hasDataset(client.config())}`,
		body: request
	});
}
function _translate(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/translate/${hasDataset(client.config())}`,
		body: request
	});
}
var ObservableAgentsActionClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Run an instruction to generate content in a target document.
	* @param request - instruction request
	*/
	generate(request) {
		return _generate(this.#client, this.#httpRequest, request);
	}
	/**
	* Transform a target document based on a source.
	* @param request - translation request
	*/
	transform(request) {
		return _transform(this.#client, this.#httpRequest, request);
	}
	/**
	* Translate a target document based on a source.
	* @param request - translation request
	*/
	translate(request) {
		return _translate(this.#client, this.#httpRequest, request);
	}
};
var AgentActionsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Run an instruction to generate content in a target document.
	* @param request - instruction request
	*/
	generate(request) {
		return lastValueFrom(_generate(this.#client, this.#httpRequest, request));
	}
	/**
	* Transform a target document based on a source.
	* @param request - translation request
	*/
	transform(request) {
		return lastValueFrom(_transform(this.#client, this.#httpRequest, request));
	}
	/**
	* Translate a target document based on a source.
	* @param request - translation request
	*/
	translate(request) {
		return lastValueFrom(_translate(this.#client, this.#httpRequest, request));
	}
	/**
	* Run a raw instruction and return the result either as text or json
	* @param request - prompt request
	*/
	prompt(request) {
		return lastValueFrom(_prompt(this.#client, this.#httpRequest, request));
	}
	/**
	* Patch a document using a schema aware API.
	* Does not use an LLM, but uses the schema to ensure paths and values matches the schema.
	* @param request - instruction request
	*/
	patch(request) {
		return lastValueFrom(_patch(this.#client, this.#httpRequest, request));
	}
};
var ObservableAssetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	upload(assetType, body, options) {
		return _upload(this.#client, this.#httpRequest, assetType, body, options);
	}
};
var AssetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	upload(assetType, body, options) {
		return lastValueFrom(_upload(this.#client, this.#httpRequest, assetType, body, options).pipe(filter((event) => event.type === "response"), map((event) => event.body.document)));
	}
};
function _upload(client, httpRequest, assetType, body, opts = {}) {
	validateAssetType(assetType);
	let meta = opts.extract || void 0;
	meta && !meta.length && (meta = ["none"]);
	const config = client.config(), options = optionsFromFile(opts, body), { tag, label, title, description, creditLine, filename, source } = options, query = {
		label,
		title,
		description,
		filename,
		meta,
		creditLine
	};
	return source && (query.sourceId = source.id, query.sourceName = source.name, query.sourceUrl = source.url), _requestObservable(client, httpRequest, {
		tag,
		method: "POST",
		timeout: options.timeout || 0,
		uri: buildAssetUploadUrl(config, assetType),
		headers: options.contentType ? { "Content-Type": options.contentType } : {},
		query,
		body
	});
}
function buildAssetUploadUrl(config, assetType) {
	const assetTypeEndpoint = assetType === "image" ? "images" : "files";
	if (config["~experimental_resource"]) {
		const { type, id } = config["~experimental_resource"];
		switch (type) {
			case "dataset": throw new Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");
			case "canvas": return `/canvases/${id}/assets/${assetTypeEndpoint}`;
			case "media-library": return `/media-libraries/${id}/upload`;
			case "dashboard": return `/dashboards/${id}/assets/${assetTypeEndpoint}`;
			default: throw new Error(`Unsupported resource type: ${type.toString()}`);
		}
	}
	return `assets/${assetTypeEndpoint}/${hasDataset(config)}`;
}
function optionsFromFile(opts, file) {
	return typeof File > "u" || !(file instanceof File) ? opts : Object.assign({
		filename: opts.preserveFilename === !1 ? void 0 : file.name,
		contentType: file.type
	}, opts);
}
var defaults = (obj, defaults2) => Object.keys(defaults2).concat(Object.keys(obj)).reduce((target, prop) => (target[prop] = typeof obj[prop] > "u" ? defaults2[prop] : obj[prop], target), {});
var pick = (obj, props) => props.reduce((selection, prop) => (typeof obj[prop] > "u" || (selection[prop] = obj[prop]), selection), {}), eventSourcePolyfill = defer(() => import("./browser-CYnbn9tS.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1))).pipe(map(({ default: EventSource2 }) => EventSource2), shareReplay(1));
function reconnectOnConnectionFailure() {
	return function(source) {
		return source.pipe(catchError((err, caught) => err instanceof ConnectionFailedError ? concat(of({ type: "reconnect" }), timer(1e3).pipe(mergeMap(() => caught))) : throwError(() => err)));
	};
}
var MAX_URL_LENGTH = 14800, possibleOptions = [
	"includePreviousRevision",
	"includeResult",
	"includeMutations",
	"includeAllVersions",
	"visibility",
	"effectFormat",
	"tag"
], defaultOptions = { includeResult: !0 };
function _listen(query, params, opts = {}) {
	const { url, token, withCredentials, requestTagPrefix, headers: configHeaders } = this.config(), tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag, options = {
		...defaults(opts, defaultOptions),
		tag
	}, qs = encodeQueryString({
		query,
		params,
		options: {
			tag,
			...pick(options, possibleOptions)
		}
	}), uri = `${url}${_getDataUrl(this, "listen", qs)}`;
	if (uri.length > MAX_URL_LENGTH) return throwError(() => /* @__PURE__ */ new Error("Query too large for listener"));
	const listenFor = options.events ? options.events : ["mutation"], esOptions = {};
	return withCredentials && (esOptions.withCredentials = !0), (token || configHeaders) && (esOptions.headers = {}, token && (esOptions.headers.Authorization = `Bearer ${token}`), configHeaders && Object.assign(esOptions.headers, configHeaders)), connectEventSource(() => (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(uri, esOptions))), listenFor).pipe(reconnectOnConnectionFailure(), filter((event) => listenFor.includes(event.type)), map((event) => ({
		type: event.type,
		..."data" in event ? event.data : {}
	})));
}
function shareReplayLatest(configOrPredicate, config) {
	return _shareReplayLatest(typeof configOrPredicate == "function" ? {
		predicate: configOrPredicate,
		...config
	} : configOrPredicate);
}
function _shareReplayLatest(config) {
	return (source) => {
		let latest, emitted = !1;
		const { predicate, ...shareConfig } = config;
		return merge(source.pipe(tap((value) => {
			config.predicate(value) && (emitted = !0, latest = value);
		}), finalize(() => {
			emitted = !1, latest = void 0;
		}), share(shareConfig)), new Observable((subscriber) => {
			emitted && subscriber.next(latest), subscriber.complete();
		}));
	};
}
var requiredApiVersion = "2021-03-25";
var LiveClient = class {
	#client;
	constructor(client) {
		this.#client = client;
	}
	/**
	* Requires `apiVersion` to be `2021-03-25` or later.
	*/
	events({ includeDrafts = !1, tag: _tag } = {}) {
		resourceGuard("live", this.#client.config());
		const { projectId: projectId2, apiVersion: _apiVersion, token, withCredentials, requestTagPrefix, headers: configHeaders } = this.#client.config(), apiVersion = _apiVersion.replace(/^v/, "");
		if (apiVersion !== "X" && apiVersion < requiredApiVersion) throw new Error(`The live events API requires API version ${requiredApiVersion} or later. The current API version is ${apiVersion}. Please update your API version to use this feature.`);
		if (includeDrafts && !token && !withCredentials) throw new Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
		const path = _getDataUrl(this.#client, "live/events"), url = new URL(this.#client.getUrl(path, !1)), tag = _tag && requestTagPrefix ? [requestTagPrefix, _tag].join(".") : _tag;
		tag && url.searchParams.set("tag", tag), includeDrafts && url.searchParams.set("includeDrafts", "true");
		const esOptions = {};
		includeDrafts && withCredentials && (esOptions.withCredentials = !0), (includeDrafts && token || configHeaders) && (esOptions.headers = {}, includeDrafts && token && (esOptions.headers.Authorization = `Bearer ${token}`), configHeaders && Object.assign(esOptions.headers, configHeaders));
		const key = `${url.href}::${JSON.stringify(esOptions)}`, existing = eventsCache.get(key);
		if (existing) return existing;
		const events = connectEventSource(() => (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(url.href, esOptions))), [
			"message",
			"restart",
			"welcome",
			"reconnect",
			"goaway"
		]), checkCors = fetchObservable(url, {
			method: "OPTIONS",
			mode: "cors",
			credentials: esOptions.withCredentials ? "include" : "omit",
			headers: esOptions.headers
		}).pipe(catchError(() => {
			throw new CorsOriginError({ projectId: projectId2 });
		})), observable2 = events.pipe(reconnectOnConnectionFailure(), mergeMap((event) => event.type === "reconnect" ? checkCors.pipe(mergeMap(() => of(event))) : of(event)), catchError((err) => checkCors.pipe(mergeMap(() => {
			throw err;
		}))), map((event) => {
			if (event.type === "message") {
				const { data, ...rest } = event;
				return {
					...rest,
					tags: data.tags
				};
			}
			return event;
		})).pipe(finalize(() => eventsCache.delete(key)), shareReplayLatest({ predicate: (event) => event.type === "welcome" }));
		return eventsCache.set(key, observable2), observable2;
	}
};
function fetchObservable(url, init) {
	return new Observable((observer) => {
		const controller = new AbortController(), signal = controller.signal;
		return fetch(url, {
			...init,
			signal: controller.signal
		}).then((response) => {
			observer.next(response), observer.complete();
		}, (err) => {
			signal.aborted || observer.error(err);
		}), () => controller.abort();
	});
}
var eventsCache = /* @__PURE__ */ new Map();
var ObservableDatasetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Create a new dataset with the given name
	*
	* @param name - Name of the dataset to create
	* @param options - Options for the dataset
	*/
	create(name, options) {
		return _modify(this.#client, this.#httpRequest, "PUT", name, options);
	}
	/**
	* Edit a dataset with the given name
	*
	* @param name - Name of the dataset to edit
	* @param options - New options for the dataset
	*/
	edit(name, options) {
		return _modify(this.#client, this.#httpRequest, "PATCH", name, options);
	}
	/**
	* Delete a dataset with the given name
	*
	* @param name - Name of the dataset to delete
	*/
	delete(name) {
		return _modify(this.#client, this.#httpRequest, "DELETE", name);
	}
	/**
	* Fetch a list of datasets for the configured project
	*/
	list() {
		resourceGuard("dataset", this.#client.config());
		const config = this.#client.config(), projectId2 = config.projectId;
		let uri = "/datasets";
		return config.useProjectHostname === !1 && (uri = `/projects/${projectId2}/datasets`), _request(this.#client, this.#httpRequest, {
			uri,
			tag: null
		});
	}
};
var DatasetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Create a new dataset with the given name
	*
	* @param name - Name of the dataset to create
	* @param options - Options for the dataset
	*/
	create(name, options) {
		return resourceGuard("dataset", this.#client.config()), lastValueFrom(_modify(this.#client, this.#httpRequest, "PUT", name, options));
	}
	/**
	* Edit a dataset with the given name
	*
	* @param name - Name of the dataset to edit
	* @param options - New options for the dataset
	*/
	edit(name, options) {
		return resourceGuard("dataset", this.#client.config()), lastValueFrom(_modify(this.#client, this.#httpRequest, "PATCH", name, options));
	}
	/**
	* Delete a dataset with the given name
	*
	* @param name - Name of the dataset to delete
	*/
	delete(name) {
		return resourceGuard("dataset", this.#client.config()), lastValueFrom(_modify(this.#client, this.#httpRequest, "DELETE", name));
	}
	/**
	* Fetch a list of datasets for the configured project
	*/
	list() {
		resourceGuard("dataset", this.#client.config());
		const config = this.#client.config(), projectId2 = config.projectId;
		let uri = "/datasets";
		return config.useProjectHostname === !1 && (uri = `/projects/${projectId2}/datasets`), lastValueFrom(_request(this.#client, this.#httpRequest, {
			uri,
			tag: null
		}));
	}
};
function _modify(client, httpRequest, method, name, options) {
	return resourceGuard("dataset", client.config()), dataset(name), _request(client, httpRequest, {
		method,
		uri: `/datasets/${name}`,
		body: options,
		tag: null
	});
}
var ObservableMediaLibraryVideoClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Get video playback information for a media library asset
	*
	* @param assetIdentifier - Asset instance identifier (GDR, video-prefixed ID, or container ID)
	* @param options - Options for transformations and expiration
	*/
	getPlaybackInfo(assetIdentifier, options = {}) {
		const configMediaLibraryId = this.#client.config()["~experimental_resource"]?.id, { instanceId, libraryId } = parseAssetInstanceId(assetIdentifier), effectiveLibraryId = libraryId || configMediaLibraryId;
		if (!effectiveLibraryId) throw new Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
		const uri = buildVideoPlaybackInfoUrl(instanceId, effectiveLibraryId), queryParams = buildQueryParams(options);
		return _request(this.#client, this.#httpRequest, {
			method: "GET",
			uri,
			query: queryParams
		});
	}
};
var MediaLibraryVideoClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Get video playback information for a media library asset
	*
	* @param assetIdentifier - Asset instance identifier (GDR, video-prefixed ID, or container ID)
	* @param options - Options for transformations and expiration
	*/
	getPlaybackInfo(assetIdentifier, options = {}) {
		return lastValueFrom(new ObservableMediaLibraryVideoClient(this.#client.observable, this.#httpRequest).getPlaybackInfo(assetIdentifier, options));
	}
};
var ML_GDR_PATTERN = /^media-library:(ml[^:]+):([^:]+)$/;
function isSanityReference(assetIdentifier) {
	return typeof assetIdentifier == "object" && "_ref" in assetIdentifier;
}
function parseAssetInstanceId(assetIdentifier) {
	const ref = isSanityReference(assetIdentifier) ? assetIdentifier._ref : assetIdentifier, match = ML_GDR_PATTERN.exec(ref);
	if (match) {
		const [, libraryId, instanceId] = match;
		return {
			libraryId,
			instanceId
		};
	}
	if (typeof assetIdentifier == "string" && assetIdentifier.startsWith("video-")) return { instanceId: assetIdentifier };
	throw new Error(`Invalid video asset instance identifier "${ref}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`);
}
function buildVideoPlaybackInfoUrl(instanceId, libraryId) {
	return `/media-libraries/${libraryId}/video/${instanceId}/playback-info`;
}
function buildQueryParams(options) {
	const params = {};
	if (options.transformations) {
		const { thumbnail, animated, storyboard } = options.transformations;
		thumbnail && (thumbnail.width && (params.thumbnailWidth = thumbnail.width), thumbnail.height && (params.thumbnailHeight = thumbnail.height), thumbnail.time !== void 0 && (params.thumbnailTime = thumbnail.time), thumbnail.fit && (params.thumbnailFit = thumbnail.fit), thumbnail.format && (params.thumbnailFormat = thumbnail.format)), animated && (animated.width && (params.animatedWidth = animated.width), animated.height && (params.animatedHeight = animated.height), animated.start !== void 0 && (params.animatedStart = animated.start), animated.end !== void 0 && (params.animatedEnd = animated.end), animated.fps && (params.animatedFps = animated.fps), animated.format && (params.animatedFormat = animated.format)), storyboard && storyboard.format && (params.storyboardFormat = storyboard.format);
	}
	return options.expiration && (params.expiration = options.expiration), params;
}
var ObservableProjectsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	list(options) {
		const query = {};
		return options?.includeMembers === !1 && (query.includeMembers = "false"), options?.organizationId && (query.organizationId = options.organizationId), _request(this.#client, this.#httpRequest, {
			uri: "/projects",
			query
		});
	}
	/**
	* Fetch a project by project ID
	*
	* @param projectId - ID of the project to fetch
	*/
	getById(projectId2) {
		return _request(this.#client, this.#httpRequest, { uri: `/projects/${projectId2}` });
	}
};
var ProjectsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	list(options) {
		const query = {};
		return options?.includeMembers === !1 && (query.includeMembers = "false"), options?.organizationId && (query.organizationId = options.organizationId), lastValueFrom(_request(this.#client, this.#httpRequest, {
			uri: "/projects",
			query
		}));
	}
	/**
	* Fetch a project by project ID
	*
	* @param projectId - ID of the project to fetch
	*/
	getById(projectId2) {
		return lastValueFrom(_request(this.#client, this.#httpRequest, { uri: `/projects/${projectId2}` }));
	}
};
var generateReleaseId = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8), getDocumentVersionId = (publishedId, releaseId) => releaseId ? getVersionId(publishedId, releaseId) : getDraftId(publishedId);
function deriveDocumentVersionId(op, { releaseId, publishedId, document }) {
	if (publishedId && document._id) {
		const versionId = getDocumentVersionId(publishedId, releaseId);
		return validateVersionIdMatch(versionId, document), versionId;
	}
	if (document._id) {
		const isDraft = isDraftId(document._id), isVersion = isVersionId(document._id);
		if (!isDraft && !isVersion) throw new Error(`\`${op}()\` requires a document with an \`_id\` that is a version or draft ID`);
		if (releaseId) {
			if (isDraft) throw new Error(`\`${op}()\` was called with a document ID (\`${document._id}\`) that is a draft ID, but a release ID (\`${releaseId}\`) was also provided.`);
			const builtVersionId = getVersionFromId(document._id);
			if (builtVersionId !== releaseId) throw new Error(`\`${op}()\` was called with a document ID (\`${document._id}\`) that is a version ID, but the release ID (\`${releaseId}\`) does not match the document's version ID (\`${builtVersionId}\`).`);
		}
		return document._id;
	}
	if (publishedId) return getDocumentVersionId(publishedId, releaseId);
	throw new Error(`\`${op}()\` requires either a publishedId or a document with an \`_id\``);
}
var getArgs = (releaseOrOptions, maybeOptions) => {
	if (typeof releaseOrOptions == "object" && releaseOrOptions !== null && ("releaseId" in releaseOrOptions || "metadata" in releaseOrOptions)) {
		const { releaseId = generateReleaseId(), metadata = {} } = releaseOrOptions;
		return [
			releaseId,
			metadata,
			maybeOptions
		];
	}
	return [
		generateReleaseId(),
		{},
		releaseOrOptions
	];
}, createRelease = (releaseOrOptions, maybeOptions) => {
	const [releaseId, metadata, options] = getArgs(releaseOrOptions, maybeOptions);
	return {
		action: {
			actionType: "sanity.action.release.create",
			releaseId,
			metadata: {
				...metadata,
				releaseType: metadata.releaseType || "undecided"
			}
		},
		options
	};
};
var ObservableReleasesClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* @public
	*
	* Retrieve a release by id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to retrieve.
	* @param options - Additional query options including abort signal and query tag.
	* @returns An observable that resolves to the release document {@link ReleaseDocument}.
	*
	* @example Retrieving a release by id
	* ```ts
	* client.observable.releases.get({releaseId: 'my-release'}).pipe(
	*   tap((release) => console.log(release)),
	*   // {
	*   //   _id: '_.releases.my-release',
	*   //   name: 'my-release'
	*   //   _type: 'system.release',
	*   //   metadata: {releaseType: 'asap'},
	*   //   _createdAt: '2021-01-01T00:00:00.000Z',
	*   //   ...
	*   // }
	* ).subscribe()
	* ```
	*/
	get({ releaseId }, options) {
		return _getDocument(this.#client, this.#httpRequest, `_.releases.${releaseId}`, options);
	}
	create(releaseOrOptions, maybeOptions) {
		const { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
		return _action(this.#client, this.#httpRequest, action, options).pipe(map((actionResult) => ({
			...actionResult,
			releaseId,
			metadata
		})));
	}
	/**
	* @public
	*
	* Edits an existing release, updating the metadata.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to edit.
	*   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	edit({ releaseId, patch }, options) {
		const editAction = {
			actionType: "sanity.action.release.edit",
			releaseId,
			patch
		};
		return _action(this.#client, this.#httpRequest, editAction, options);
	}
	/**
	* @public
	*
	* Publishes all documents in a release at once. For larger releases the effect of the publish
	* will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
	* documents and creation of the corresponding published documents with the new content may
	* take some time.
	*
	* During this period both the source and target documents are locked and cannot be
	* modified through any other means.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to publish.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	publish({ releaseId }, options) {
		const publishAction = {
			actionType: "sanity.action.release.publish",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, publishAction, options);
	}
	/**
	* @public
	*
	* An archive action removes an active release. The documents that comprise the release
	* are deleted and therefore no longer queryable.
	*
	* While the documents remain in retention the last version can still be accessed using document history endpoint.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to archive.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	archive({ releaseId }, options) {
		const archiveAction = {
			actionType: "sanity.action.release.archive",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, archiveAction, options);
	}
	/**
	* @public
	*
	* An unarchive action restores an archived release and all documents
	* with the content they had just prior to archiving.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unarchive.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	unarchive({ releaseId }, options) {
		const unarchiveAction = {
			actionType: "sanity.action.release.unarchive",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, unarchiveAction, options);
	}
	/**
	* @public
	*
	* A schedule action queues a release for publishing at the given future time.
	* The release is locked such that no documents in the release can be modified and
	* no documents that it references can be deleted as this would make the publish fail.
	* At the given time, the same logic as for the publish action is triggered.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to schedule.
	*   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	schedule({ releaseId, publishAt }, options) {
		const scheduleAction = {
			actionType: "sanity.action.release.schedule",
			releaseId,
			publishAt
		};
		return _action(this.#client, this.#httpRequest, scheduleAction, options);
	}
	/**
	* @public
	*
	* An unschedule action stops a release from being published.
	* The documents in the release are considered unlocked and can be edited again.
	* This may fail if another release is scheduled to be published after this one and
	* has a reference to a document created by this one.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unschedule.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	unschedule({ releaseId }, options) {
		const unscheduleAction = {
			actionType: "sanity.action.release.unschedule",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, unscheduleAction, options);
	}
	/**
	* @public
	*
	* A delete action removes a published or archived release.
	* The backing system document will be removed from the dataset.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to delete.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	delete({ releaseId }, options) {
		const deleteAction = {
			actionType: "sanity.action.release.delete",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, deleteAction, options);
	}
	/**
	* @public
	*
	* Fetch the documents in a release by release id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to fetch documents for.
	* @param options - Additional mutation options {@link BaseMutationOptions}.
	* @returns An observable that resolves to the documents in the release.
	*/
	fetchDocuments({ releaseId }, options) {
		return _getReleaseDocuments(this.#client, this.#httpRequest, releaseId, options);
	}
};
var ReleasesClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* @public
	*
	* Retrieve a release by id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to retrieve.
	* @param options - Additional query options including abort signal and query tag.
	* @returns A promise that resolves to the release document {@link ReleaseDocument}.
	*
	* @example Retrieving a release by id
	* ```ts
	* const release = await client.releases.get({releaseId: 'my-release'})
	* console.log(release)
	* // {
	* //   _id: '_.releases.my-release',
	* //   name: 'my-release'
	* //   _type: 'system.release',
	* //   metadata: {releaseType: 'asap'},
	* //   _createdAt: '2021-01-01T00:00:00.000Z',
	* //   ...
	* // }
	* ```
	*/
	get({ releaseId }, options) {
		return lastValueFrom(_getDocument(this.#client, this.#httpRequest, `_.releases.${releaseId}`, options));
	}
	async create(releaseOrOptions, maybeOptions) {
		const { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
		return {
			...await lastValueFrom(_action(this.#client, this.#httpRequest, action, options)),
			releaseId,
			metadata
		};
	}
	/**
	* @public
	*
	* Edits an existing release, updating the metadata.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to edit.
	*   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	edit({ releaseId, patch }, options) {
		const editAction = {
			actionType: "sanity.action.release.edit",
			releaseId,
			patch
		};
		return lastValueFrom(_action(this.#client, this.#httpRequest, editAction, options));
	}
	/**
	* @public
	*
	* Publishes all documents in a release at once. For larger releases the effect of the publish
	* will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
	* documents and creation of the corresponding published documents with the new content may
	* take some time.
	*
	* During this period both the source and target documents are locked and cannot be
	* modified through any other means.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to publish.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	publish({ releaseId }, options) {
		const publishAction = {
			actionType: "sanity.action.release.publish",
			releaseId
		};
		return lastValueFrom(_action(this.#client, this.#httpRequest, publishAction, options));
	}
	/**
	* @public
	*
	* An archive action removes an active release. The documents that comprise the release
	* are deleted and therefore no longer queryable.
	*
	* While the documents remain in retention the last version can still be accessed using document history endpoint.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to archive.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	archive({ releaseId }, options) {
		const archiveAction = {
			actionType: "sanity.action.release.archive",
			releaseId
		};
		return lastValueFrom(_action(this.#client, this.#httpRequest, archiveAction, options));
	}
	/**
	* @public
	*
	* An unarchive action restores an archived release and all documents
	* with the content they had just prior to archiving.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unarchive.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	unarchive({ releaseId }, options) {
		const unarchiveAction = {
			actionType: "sanity.action.release.unarchive",
			releaseId
		};
		return lastValueFrom(_action(this.#client, this.#httpRequest, unarchiveAction, options));
	}
	/**
	* @public
	*
	* A schedule action queues a release for publishing at the given future time.
	* The release is locked such that no documents in the release can be modified and
	* no documents that it references can be deleted as this would make the publish fail.
	* At the given time, the same logic as for the publish action is triggered.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to schedule.
	*   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	schedule({ releaseId, publishAt }, options) {
		const scheduleAction = {
			actionType: "sanity.action.release.schedule",
			releaseId,
			publishAt
		};
		return lastValueFrom(_action(this.#client, this.#httpRequest, scheduleAction, options));
	}
	/**
	* @public
	*
	* An unschedule action stops a release from being published.
	* The documents in the release are considered unlocked and can be edited again.
	* This may fail if another release is scheduled to be published after this one and
	* has a reference to a document created by this one.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unschedule.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	unschedule({ releaseId }, options) {
		const unscheduleAction = {
			actionType: "sanity.action.release.unschedule",
			releaseId
		};
		return lastValueFrom(_action(this.#client, this.#httpRequest, unscheduleAction, options));
	}
	/**
	* @public
	*
	* A delete action removes a published or archived release.
	* The backing system document will be removed from the dataset.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to delete.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	delete({ releaseId }, options) {
		const deleteAction = {
			actionType: "sanity.action.release.delete",
			releaseId
		};
		return lastValueFrom(_action(this.#client, this.#httpRequest, deleteAction, options));
	}
	/**
	* @public
	*
	* Fetch the documents in a release by release id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to fetch documents for.
	* @param options - Additional mutation options {@link BaseMutationOptions}.
	* @returns A promise that resolves to the documents in the release.
	*/
	fetchDocuments({ releaseId }, options) {
		return lastValueFrom(_getReleaseDocuments(this.#client, this.#httpRequest, releaseId, options));
	}
};
var ObservableUsersClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Fetch a user by user ID
	*
	* @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	*/
	getById(id) {
		return _request(this.#client, this.#httpRequest, { uri: `/users/${id}` });
	}
};
var UsersClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Fetch a user by user ID
	*
	* @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	*/
	getById(id) {
		return lastValueFrom(_request(this.#client, this.#httpRequest, { uri: `/users/${id}` }));
	}
};
var ObservableSanityClient = class ObservableSanityClient {
	assets;
	datasets;
	live;
	mediaLibrary;
	projects;
	users;
	agent;
	releases;
	/**
	* Private properties
	*/
	#clientConfig;
	#httpRequest;
	/**
	* Instance properties
	*/
	listen = _listen;
	constructor(httpRequest, config = defaultConfig) {
		this.config(config), this.#httpRequest = httpRequest, this.assets = new ObservableAssetsClient(this, this.#httpRequest), this.datasets = new ObservableDatasetsClient(this, this.#httpRequest), this.live = new LiveClient(this), this.mediaLibrary = { video: new ObservableMediaLibraryVideoClient(this, this.#httpRequest) }, this.projects = new ObservableProjectsClient(this, this.#httpRequest), this.users = new ObservableUsersClient(this, this.#httpRequest), this.agent = { action: new ObservableAgentsActionClient(this, this.#httpRequest) }, this.releases = new ObservableReleasesClient(this, this.#httpRequest);
	}
	/**
	* Clone the client - returns a new instance
	*/
	clone() {
		return new ObservableSanityClient(this.#httpRequest, this.config());
	}
	config(newConfig) {
		if (newConfig === void 0) return { ...this.#clientConfig };
		if (this.#clientConfig && this.#clientConfig.allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
		return this.#clientConfig = initConfig(newConfig, this.#clientConfig || {}), this;
	}
	/**
	* Clone the client with a new (partial) configuration.
	*
	* @param newConfig - New client configuration properties, shallowly merged with existing configuration
	*/
	withConfig(newConfig) {
		const thisConfig = this.config();
		return new ObservableSanityClient(this.#httpRequest, {
			...thisConfig,
			...newConfig,
			stega: {
				...thisConfig.stega || {},
				...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
			}
		});
	}
	fetch(query, params, options) {
		return _fetch(this, this.#httpRequest, this.#clientConfig.stega, query, params, options);
	}
	getDocument(id, options) {
		if (options?.includeAllVersions === !0) return _getDocument(this, this.#httpRequest, id, {
			...options,
			includeAllVersions: !0
		});
		const opts = {
			signal: options?.signal,
			tag: options?.tag,
			releaseId: options?.releaseId,
			...options && "includeAllVersions" in options ? { includeAllVersions: !1 } : {}
		};
		return _getDocument(this, this.#httpRequest, id, opts);
	}
	/**
	* Fetch multiple documents in one request.
	* Should be used sparingly - performing a query is usually a better option.
	* The order/position of documents is preserved based on the original array of IDs.
	* If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	*
	* @param ids - Document IDs to fetch
	* @param options - Request options
	*/
	getDocuments(ids, options) {
		return _getDocuments(this, this.#httpRequest, ids, options);
	}
	create(document, options) {
		return _create(this, this.#httpRequest, document, "create", options);
	}
	createIfNotExists(document, options) {
		return _createIfNotExists(this, this.#httpRequest, document, options);
	}
	createOrReplace(document, options) {
		return _createOrReplace(this, this.#httpRequest, document, options);
	}
	createVersion({ document, publishedId, releaseId, baseId, ifBaseRevisionId }, options) {
		if (!document) return _createVersionFromBase(this, this.#httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options);
		const documentVersionId = deriveDocumentVersionId("createVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		}, versionPublishedId = publishedId || getPublishedId(document._id);
		return _createVersion(this, this.#httpRequest, documentVersion, versionPublishedId, options);
	}
	delete(selection, options) {
		return _delete(this, this.#httpRequest, selection, options);
	}
	/**
	* @public
	*
	* Deletes the draft or release version of a document.
	*
	* @remarks
	* * Discarding a version with no `releaseId` will discard the draft version of the published document.
	* * If the draft or release version does not exist, any error will throw.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to discard the document from.
	*   - `publishedId` - The published ID of the document to discard.
	* @param purge - if `true` the document history is also discarded.
	* @param options - Additional action options.
	* @returns an observable that resolves to the `transactionId`.
	*
	* @example Discarding a release version of a document
	* ```ts
	* client.observable.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be discarded.
	* ```
	*
	* @example Discarding a draft version of a document
	* ```ts
	* client.observable.discardVersion({publishedId: 'myDocument'})
	* // The document with the ID `drafts.myDocument` will be discarded.
	* ```
	*/
	discardVersion({ releaseId, publishedId }, purge, options) {
		const documentVersionId = getDocumentVersionId(publishedId, releaseId);
		return _discardVersion(this, this.#httpRequest, documentVersionId, purge, options);
	}
	replaceVersion({ document, publishedId, releaseId }, options) {
		const documentVersionId = deriveDocumentVersionId("replaceVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		};
		return _replaceVersion(this, this.#httpRequest, documentVersion, options);
	}
	/**
	* @public
	*
	* Used to indicate when a document within a release should be unpublished when
	* the release is run.
	*
	* @remarks
	* * If the published document does not exist, an error will be thrown.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to unpublish the document from.
	*   - `publishedId` - The published ID of the document to unpublish.
	* @param options - Additional action options.
	* @returns an observable that resolves to the `transactionId`.
	*
	* @example Unpublishing a release version of a published document
	* ```ts
	* client.observable.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
	* ```
	*/
	unpublishVersion({ releaseId, publishedId }, options) {
		const versionId = getVersionId(publishedId, releaseId);
		return _unpublishVersion(this, this.#httpRequest, versionId, publishedId, options);
	}
	mutate(operations, options) {
		return _mutate(this, this.#httpRequest, operations, options);
	}
	/**
	* Create a new buildable patch of operations to perform
	*
	* @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	* @param operations - Optional object of patch operations to initialize the patch instance with
	* @returns Patch instance - call `.commit()` to perform the operations defined
	*/
	patch(selection, operations) {
		return new ObservablePatch(selection, operations, this);
	}
	/**
	* Create a new transaction of mutations
	*
	* @param operations - Optional array of mutation operations to initialize the transaction instance with
	*/
	transaction(operations) {
		return new ObservableTransaction(operations, this);
	}
	/**
	* Perform action operations against the configured dataset
	*
	* @param operations - Action operation(s) to execute
	* @param options - Action options
	*/
	action(operations, options) {
		return _action(this, this.#httpRequest, operations, options);
	}
	/**
	* Perform an HTTP request against the Sanity API
	*
	* @param options - Request options
	*/
	request(options) {
		return _request(this, this.#httpRequest, options);
	}
	/**
	* Get a Sanity API URL for the URI provided
	*
	* @param uri - URI/path to build URL for
	* @param canUseCdn - Whether or not to allow using the API CDN for this route
	*/
	getUrl(uri, canUseCdn) {
		return _getUrl(this, uri, canUseCdn);
	}
	/**
	* Get a Sanity API URL for the data operation and path provided
	*
	* @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	* @param path - Path to append after the operation
	*/
	getDataUrl(operation, path) {
		return _getDataUrl(this, operation, path);
	}
};
var SanityClient = class SanityClient {
	assets;
	datasets;
	live;
	mediaLibrary;
	projects;
	users;
	agent;
	releases;
	/**
	* Observable version of the Sanity client, with the same configuration as the promise-based one
	*/
	observable;
	/**
	* Private properties
	*/
	#clientConfig;
	#httpRequest;
	/**
	* Instance properties
	*/
	listen = _listen;
	constructor(httpRequest, config = defaultConfig) {
		this.config(config), this.#httpRequest = httpRequest, this.assets = new AssetsClient(this, this.#httpRequest), this.datasets = new DatasetsClient(this, this.#httpRequest), this.live = new LiveClient(this), this.mediaLibrary = { video: new MediaLibraryVideoClient(this, this.#httpRequest) }, this.projects = new ProjectsClient(this, this.#httpRequest), this.users = new UsersClient(this, this.#httpRequest), this.agent = { action: new AgentActionsClient(this, this.#httpRequest) }, this.releases = new ReleasesClient(this, this.#httpRequest), this.observable = new ObservableSanityClient(httpRequest, config);
	}
	/**
	* Clone the client - returns a new instance
	*/
	clone() {
		return new SanityClient(this.#httpRequest, this.config());
	}
	config(newConfig) {
		if (newConfig === void 0) return { ...this.#clientConfig };
		if (this.#clientConfig && this.#clientConfig.allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
		return this.observable && this.observable.config(newConfig), this.#clientConfig = initConfig(newConfig, this.#clientConfig || {}), this;
	}
	/**
	* Clone the client with a new (partial) configuration.
	*
	* @param newConfig - New client configuration properties, shallowly merged with existing configuration
	*/
	withConfig(newConfig) {
		const thisConfig = this.config();
		return new SanityClient(this.#httpRequest, {
			...thisConfig,
			...newConfig,
			stega: {
				...thisConfig.stega || {},
				...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
			}
		});
	}
	fetch(query, params, options) {
		return lastValueFrom(_fetch(this, this.#httpRequest, this.#clientConfig.stega, query, params, options));
	}
	getDocument(id, options) {
		if (options?.includeAllVersions === !0) return lastValueFrom(_getDocument(this, this.#httpRequest, id, {
			...options,
			includeAllVersions: !0
		}));
		const opts = {
			signal: options?.signal,
			tag: options?.tag,
			releaseId: options?.releaseId,
			...options && "includeAllVersions" in options ? { includeAllVersions: !1 } : {}
		};
		return lastValueFrom(_getDocument(this, this.#httpRequest, id, opts));
	}
	/**
	* Fetch multiple documents in one request.
	* Should be used sparingly - performing a query is usually a better option.
	* The order/position of documents is preserved based on the original array of IDs.
	* If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	*
	* @param ids - Document IDs to fetch
	* @param options - Request options
	*/
	getDocuments(ids, options) {
		return lastValueFrom(_getDocuments(this, this.#httpRequest, ids, options));
	}
	create(document, options) {
		return lastValueFrom(_create(this, this.#httpRequest, document, "create", options));
	}
	createIfNotExists(document, options) {
		return lastValueFrom(_createIfNotExists(this, this.#httpRequest, document, options));
	}
	createOrReplace(document, options) {
		return lastValueFrom(_createOrReplace(this, this.#httpRequest, document, options));
	}
	createVersion({ document, publishedId, releaseId, baseId, ifBaseRevisionId }, options) {
		if (!document) return firstValueFrom(_createVersionFromBase(this, this.#httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options));
		const documentVersionId = deriveDocumentVersionId("createVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		}, versionPublishedId = publishedId || getPublishedId(document._id);
		return firstValueFrom(_createVersion(this, this.#httpRequest, documentVersion, versionPublishedId, options));
	}
	delete(selection, options) {
		return lastValueFrom(_delete(this, this.#httpRequest, selection, options));
	}
	/**
	* @public
	*
	* Deletes the draft or release version of a document.
	*
	* @remarks
	* * Discarding a version with no `releaseId` will discard the draft version of the published document.
	* * If the draft or release version does not exist, any error will throw.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to discard the document from.
	*   - `publishedId` - The published ID of the document to discard.
	* @param purge - if `true` the document history is also discarded.
	* @param options - Additional action options.
	* @returns a promise that resolves to the `transactionId`.
	*
	* @example Discarding a release version of a document
	* ```ts
	* client.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be discarded.
	* ```
	*
	* @example Discarding a draft version of a document
	* ```ts
	* client.discardVersion({publishedId: 'myDocument'})
	* // The document with the ID `drafts.myDocument` will be discarded.
	* ```
	*/
	discardVersion({ releaseId, publishedId }, purge, options) {
		const documentVersionId = getDocumentVersionId(publishedId, releaseId);
		return lastValueFrom(_discardVersion(this, this.#httpRequest, documentVersionId, purge, options));
	}
	replaceVersion({ document, publishedId, releaseId }, options) {
		const documentVersionId = deriveDocumentVersionId("replaceVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		};
		return firstValueFrom(_replaceVersion(this, this.#httpRequest, documentVersion, options));
	}
	/**
	* @public
	*
	* Used to indicate when a document within a release should be unpublished when
	* the release is run.
	*
	* @remarks
	* * If the published document does not exist, an error will be thrown.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to unpublish the document from.
	*   - `publishedId` - The published ID of the document to unpublish.
	* @param options - Additional action options.
	* @returns a promise that resolves to the `transactionId`.
	*
	* @example Unpublishing a release version of a published document
	* ```ts
	* await client.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
	* ```
	*/
	unpublishVersion({ releaseId, publishedId }, options) {
		const versionId = getVersionId(publishedId, releaseId);
		return lastValueFrom(_unpublishVersion(this, this.#httpRequest, versionId, publishedId, options));
	}
	mutate(operations, options) {
		return lastValueFrom(_mutate(this, this.#httpRequest, operations, options));
	}
	/**
	* Create a new buildable patch of operations to perform
	*
	* @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	* @param operations - Optional object of patch operations to initialize the patch instance with
	* @returns Patch instance - call `.commit()` to perform the operations defined
	*/
	patch(documentId, operations) {
		return new Patch(documentId, operations, this);
	}
	/**
	* Create a new transaction of mutations
	*
	* @param operations - Optional array of mutation operations to initialize the transaction instance with
	*/
	transaction(operations) {
		return new Transaction(operations, this);
	}
	/**
	* Perform action operations against the configured dataset
	* Returns a promise that resolves to the transaction result
	*
	* @param operations - Action operation(s) to execute
	* @param options - Action options
	*/
	action(operations, options) {
		return lastValueFrom(_action(this, this.#httpRequest, operations, options));
	}
	/**
	* Perform a request against the Sanity API
	* NOTE: Only use this for Sanity API endpoints, not for your own APIs!
	*
	* @param options - Request options
	* @returns Promise resolving to the response body
	*/
	request(options) {
		return lastValueFrom(_request(this, this.#httpRequest, options));
	}
	/**
	* Perform an HTTP request a `/data` sub-endpoint
	* NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
	*
	* @deprecated - Use `request()` or your own HTTP library instead
	* @param endpoint - Endpoint to hit (mutate, query etc)
	* @param body - Request body
	* @param options - Request options
	* @internal
	*/
	dataRequest(endpoint, body, options) {
		return lastValueFrom(_dataRequest(this, this.#httpRequest, endpoint, body, options));
	}
	/**
	* Get a Sanity API URL for the URI provided
	*
	* @param uri - URI/path to build URL for
	* @param canUseCdn - Whether or not to allow using the API CDN for this route
	*/
	getUrl(uri, canUseCdn) {
		return _getUrl(this, uri, canUseCdn);
	}
	/**
	* Get a Sanity API URL for the data operation and path provided
	*
	* @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	* @param path - Path to append after the operation
	*/
	getDataUrl(operation, path) {
		return _getDataUrl(this, operation, path);
	}
};
function defineCreateClientExports(envMiddleware2, ClassConstructor) {
	return {
		requester: defineHttpRequest(envMiddleware2),
		createClient: (config) => {
			const clientRequester = defineHttpRequest(envMiddleware2, { ignoreWarnings: config.ignoreWarnings });
			return new ClassConstructor((options, requester2) => (requester2 || clientRequester)({
				maxRedirects: 0,
				maxRetries: config.maxRetries,
				retryDelay: config.retryDelay,
				lineage: config.lineage,
				...options
			}), config);
		}
	};
}
var exp = defineCreateClientExports([], SanityClient);
exp.requester;
var createClient = exp.createClient;
//#endregion
//#region sanity/lib/client.ts
var client = createClient({
	projectId: projectId$1,
	dataset: dataset$1,
	apiVersion,
	useCdn: true
});
//#endregion
//#region utils/portableTextComponents.tsx
var builder = (0, import_node.default)(client);
function urlFor(source) {
	return builder.image(source).url();
}
var extractText = (children) => {
	if (!children) return "";
	if (typeof children === "string" || typeof children === "number") return String(children);
	if (Array.isArray(children)) return children.map(extractText).join("");
	if (typeof children === "object" && children.props) {
		const { children: nestedChildren } = children.props;
		const tagName = children.type;
		if (tagName === "br") return "<br />";
		if ([
			"strong",
			"em",
			"u",
			"b",
			"i"
		].includes(tagName)) return `<${tagName}>${extractText(nestedChildren)}</${tagName}>`;
		return extractText(nestedChildren);
	}
	return "";
};
var portableTextComponents = {
	types: {
		image: ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "my-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					src: urlFor(value),
					alt: value.alt || "Blog post image",
					width: 800,
					height: 500,
					className: "object-contain mx-auto rounded-md w-full h-auto",
					loading: "lazy"
				})
			}), (value.caption || value.credit) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-center",
				children: [value.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground italic mb-1",
					children: value.caption
				}), value.credit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground/80",
					children: value.credit.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: value.credit.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-green-600 dark:hover:text-green-400 transition-colors underline decoration-1 underline-offset-2",
						children: value.credit.name
					}) : value.credit.name || value.credit
				})]
			})]
		}),
		code: ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			code: value.code,
			language: value.language
		})
	},
	block: {
		normal: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 mb-2 text-lg sm:text-base leading-relaxed",
			children
		}),
		blockquote: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
			style: {
				borderLeft: "4px solid #D1D5DB",
				paddingLeft: "1rem",
				marginTop: "1rem"
			},
			className: "mt-6 mb-6 pl-4 border-l-4 border-gray-300 italic text-gray-600 dark:border-gray-700 dark:text-gray-300",
			children
		}),
		h1: ({ children }) => {
			const textContent = extractText(children);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				id: textContent.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
				className: "text-4xl font-bold mt-8 mb-4 scroll-mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), textContent]
				})
			});
		},
		h2: ({ children }) => {
			const textContent = extractText(children);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: textContent.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
				className: "text-3xl font-semibold mt-6 mb-4 scroll-mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), textContent]
				})
			});
		},
		h3: ({ children }) => {
			const textContent = extractText(children);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				id: textContent.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
				className: "text-2xl font-medium mt-4 mb-3 scroll-mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), textContent]
				})
			});
		},
		h4: ({ children }) => {
			const textContent = extractText(children);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				id: textContent.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
				className: "text-xl font-medium mt-3 mb-2 scroll-mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), textContent]
				})
			});
		}
	},
	list: {
		bullet: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			style: { listStyleType: "disc" },
			className: "list-disc ml-6 space-y-2 my-4",
			children
		}),
		number: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "list-decimal ml-6 space-y-2 my-4",
			children
		})
	},
	listItem: {
		bullet: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "leading-relaxed",
			children
		}),
		number: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "leading-relaxed",
			children
		})
	},
	marks: {
		strong: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-semibold",
			children
		}),
		em: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
			className: "italic",
			children
		}),
		code: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono",
			children
		}),
		link: ({ children, value }) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				href: value?.href || "#",
				target: "_blank",
				rel: "noopener noreferrer",
				children
			});
		},
		underline: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "underline decoration-1",
			children
		})
	}
};
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Expand = createLucideIcon("expand", [
	["path", {
		d: "m15 15 6 6",
		key: "1s409w"
	}],
	["path", {
		d: "m15 9 6-6",
		key: "ko1vev"
	}],
	["path", {
		d: "M21 16v5h-5",
		key: "1ck2sf"
	}],
	["path", {
		d: "M21 8V3h-5",
		key: "1qoq8a"
	}],
	["path", {
		d: "M3 16v5h5",
		key: "1t08am"
	}],
	["path", {
		d: "m3 21 6-6",
		key: "wwnumi"
	}],
	["path", {
		d: "M3 8V3h5",
		key: "1ln10m"
	}],
	["path", {
		d: "M9 9 3 3",
		key: "v551iv"
	}]
]);
//#endregion
//#region components/gear/ImageGallery.tsx
function ImageGallery({ images, gearName, optimizeImageUrl }) {
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [loadedImages, setLoadedImages] = (0, import_react.useState)(new Set([0]));
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const modalRef = (0, import_react.useRef)(null);
	const preloadImage = (0, import_react.useCallback)((index) => {
		if (loadedImages.has(index) || index < 0 || index >= images.length) return;
		const img = new window.Image();
		img.src = optimizeImageUrl(images[index].url, 800);
		img.onload = () => {
			setLoadedImages((prev) => new Set(prev).add(index));
		};
	}, [
		images,
		loadedImages,
		optimizeImageUrl
	]);
	(0, import_react.useEffect)(() => {
		preloadImage(selectedIndex - 1);
		preloadImage(selectedIndex + 1);
	}, [selectedIndex, preloadImage]);
	const handleImageSelect = (0, import_react.useCallback)((index) => {
		if (index === selectedIndex) return;
		setIsLoading(true);
		setSelectedIndex(index);
		if (loadedImages.has(index)) setIsLoading(false);
		else {
			const img = new window.Image();
			img.src = optimizeImageUrl(images[index].url, 800);
			img.onload = () => {
				setLoadedImages((prev) => new Set(prev).add(index));
				setIsLoading(false);
			};
			img.onerror = () => setIsLoading(false);
		}
	}, [
		selectedIndex,
		loadedImages,
		images,
		optimizeImageUrl
	]);
	const navigateModal = (0, import_react.useCallback)((direction) => {
		handleImageSelect(direction === "prev" ? Math.max(0, selectedIndex - 1) : Math.min(images.length - 1, selectedIndex + 1));
	}, [
		selectedIndex,
		images.length,
		handleImageSelect
	]);
	(0, import_react.useEffect)(() => {
		if (!isModalOpen) return;
		const handleKeyDown = (e) => {
			switch (e.key) {
				case "Escape":
					setIsModalOpen(false);
					break;
				case "ArrowLeft":
					e.preventDefault();
					navigateModal("prev");
					break;
				case "ArrowRight":
					e.preventDefault();
					navigateModal("next");
					break;
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isModalOpen, navigateModal]);
	(0, import_react.useEffect)(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
			modalRef.current?.focus();
		} else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isModalOpen]);
	if (!images.length) return null;
	const currentImage = images[selectedIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl p-3 box-border",
		style: {
			background: "var(--color-bg-secondary)",
			border: "1px solid var(--color-bg-tertiary)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-lg overflow-hidden mb-3 group cursor-pointer",
				style: {
					width: "100%",
					height: "250px",
					maxWidth: "100%",
					background: "var(--color-bg-primary)"
				},
				onClick: () => setIsModalOpen(true),
				children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 animate-pulse rounded-lg",
						style: {
							width: "100%",
							height: "100%",
							background: "var(--color-bg-tertiary)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						src: optimizeImageUrl(currentImage.url, 600),
						alt: currentImage.alt,
						fill: true,
						className: `object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`,
						sizes: "(max-width: 640px) 100vw, 50vw",
						priority: selectedIndex === 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200",
						onClick: (e) => {
							e.stopPropagation();
							setIsModalOpen(true);
						},
						"aria-label": "Expand image",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { size: 14 })
					}),
					images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium",
						children: [
							selectedIndex + 1,
							" of ",
							images.length
						]
					})
				]
			}),
			currentImage.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-gray-600 dark:text-gray-400 text-center mb-3 italic px-1",
				style: {
					maxWidth: "100%",
					wordWrap: "break-word"
				},
				children: currentImage.caption
			}),
			images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				style: {
					width: "100%",
					maxWidth: "100%"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex overflow-x-auto pb-1",
					style: {
						gap: "4px",
						scrollbarWidth: "thin",
						msOverflowStyle: "auto"
					},
					children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleImageSelect(index),
						className: `flex-shrink-0 relative rounded overflow-hidden border transition-all duration-200 ${index === selectedIndex ? "border-blue-500" : "border-gray-200 dark:border-gray-600 hover:border-gray-300"}`,
						style: {
							width: "40px",
							height: "30px",
							minWidth: "40px",
							minHeight: "30px"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: optimizeImageUrl(image.url, 80),
							alt: image.alt,
							fill: true,
							className: "object-cover",
							sizes: "40px"
						})
					}, index))
				})
			})
		]
	}), isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: modalRef,
		className: "fixed inset-0 z-50 bg-black/90 flex flex-col",
		onClick: () => setIsModalOpen(false),
		tabIndex: -1,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center p-3 text-white flex-shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-medium text-sm pr-3",
					style: {
						maxWidth: "calc(100% - 60px)",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap"
					},
					children: [
						selectedIndex + 1,
						" of ",
						images.length,
						" - ",
						gearName
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsModalOpen(false),
					className: "p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0",
					"aria-label": "Close modal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 relative flex items-center justify-center p-3",
				onClick: (e) => e.stopPropagation(),
				children: [
					selectedIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigateModal("prev"),
						className: "absolute left-2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors",
						"aria-label": "Previous image",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
					}),
					selectedIndex < images.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigateModal("next"),
						className: "absolute right-2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors",
						"aria-label": "Next image",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						style: {
							width: "100%",
							height: "100%",
							maxWidth: "90vw",
							maxHeight: "70vh"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: optimizeImageUrl(currentImage.url, 1200),
							alt: currentImage.alt,
							fill: true,
							className: "object-contain",
							sizes: "90vw",
							priority: true
						})
					})
				]
			}),
			currentImage.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3 bg-black/50 text-white text-center flex-shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs",
					style: {
						maxWidth: "100%",
						wordWrap: "break-word"
					},
					children: currentImage.caption
				})
			}),
			images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3 bg-black/50 flex-shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center overflow-x-auto",
					style: { gap: "4px" },
					children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							handleImageSelect(index);
						},
						className: `flex-shrink-0 relative rounded overflow-hidden border transition-all ${index === selectedIndex ? "border-white" : "border-gray-400 hover:border-gray-200"}`,
						style: {
							width: "32px",
							height: "24px",
							minWidth: "32px",
							minHeight: "24px"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: optimizeImageUrl(image.url, 64),
							alt: image.alt,
							fill: true,
							className: "object-cover",
							sizes: "32px"
						})
					}, index))
				})
			})
		]
	})] });
}
//#endregion
//#region components/gear/GearReviewDetail.tsx
var createUnifiedTags = (review) => {
	const categoryActivityTags = [];
	const seasonTags = [];
	if (review.gearCategories?.length > 0) review.gearCategories.forEach((category) => {
		categoryActivityTags.push({
			text: category.title,
			original: category.title
		});
	});
	if (review.activities && review.activities?.length > 0) review.activities.forEach((activity) => {
		categoryActivityTags.push({
			text: activity.replace("-", " "),
			original: activity
		});
	});
	if (review.seasons && review.seasons?.length > 0) review.seasons.forEach((season) => {
		seasonTags.push({
			text: season,
			original: season
		});
	});
	return {
		categoryActivityTags: categoryActivityTags.filter((tag, index, self) => {
			const normalizedText = tag.text.toLowerCase().trim();
			return index === self.findIndex((t) => t.text.toLowerCase().trim() === normalizedText);
		}).map((tag) => ({
			...tag,
			text: tag.text.charAt(0).toUpperCase() + tag.text.slice(1).toLowerCase()
		})).sort((a, b) => a.text.localeCompare(b.text)),
		seasonTags: seasonTags.filter((tag, index, self) => {
			const normalizedText = tag.text.toLowerCase().trim();
			return index === self.findIndex((t) => t.text.toLowerCase().trim() === normalizedText);
		}).map((tag) => ({
			...tag,
			text: tag.text.charAt(0).toUpperCase() + tag.text.slice(1).toLowerCase()
		})).sort((a, b) => a.text.localeCompare(b.text))
	};
};
var UnifiedTagsSection = ({ review }) => {
	const { categoryActivityTags, seasonTags } = createUnifiedTags(review);
	if (categoryActivityTags.length === 0 && seasonTags.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: GearReviewDetail_module_default.tagsSection,
		children: [categoryActivityTags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: GearReviewDetail_module_default.tagGroup,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Categories & Activities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: GearReviewDetail_module_default.tags,
				children: categoryActivityTags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `${GearReviewDetail_module_default.tag} ${GearReviewDetail_module_default.category}`,
					children: tag.text
				}, `category-activity-${tag.original}-${index}`))
			})]
		}), seasonTags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: GearReviewDetail_module_default.tagGroup,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Seasons" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: GearReviewDetail_module_default.tags,
				children: seasonTags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `${GearReviewDetail_module_default.tag} ${GearReviewDetail_module_default.season}`,
					children: tag.text
				}, `season-${tag.original}-${index}`))
			})]
		})]
	});
};
function GearReviewDetail({ review }) {
	const [selectedImageIndex, setSelectedImageIndex] = (0, import_react.useState)(0);
	const [loadedImages, setLoadedImages] = (0, import_react.useState)(new Set([0]));
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const renderStars = (rating, size = "medium") => {
		const starSize = size === "small" ? 14 : size === "medium" ? 18 : 24;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `${GearReviewDetail_module_default.starRating} ${GearReviewDetail_module_default[size]}`,
			children: [[
				1,
				2,
				3,
				4,
				5
			].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size: starSize,
				className: star <= rating ? GearReviewDetail_module_default.starFilled : GearReviewDetail_module_default.starEmpty
			}, star)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: GearReviewDetail_module_default.ratingText,
				children: [
					"(",
					rating,
					"/5)"
				]
			})]
		});
	};
	const optimizeImageUrl = (url, width = 600) => {
		if (url.includes("cdn.sanity.io")) return `${url}?w=${width}&auto=format&q=75`;
		return url;
	};
	const formatTimeUsed = (timeUsed) => {
		return {
			"<1-month": "Less than 1 month",
			"1-6-months": "1-6 months",
			"6-12-months": "6 months - 1 year",
			"1-2-years": "1-2 years",
			"2+-years": "2+ years"
		}[timeUsed] || timeUsed;
	};
	const allImages = [{
		url: review.mainImage,
		alt: review.gearName,
		caption: "Main product image"
	}, ...(review.gallery || []).map((img) => ({
		url: img.asset.url,
		alt: img.alt || review.gearName,
		caption: img.caption || ""
	}))].filter((img) => img.url);
	(0, import_react.useEffect)(() => {
		const preloadImage = (index) => {
			if (index >= 0 && index < allImages.length && !loadedImages.has(index)) {
				const img = new window.Image();
				img.src = optimizeImageUrl(allImages[index].url);
				img.onload = () => {
					setLoadedImages((prev) => new Set(prev).add(index));
				};
			}
		};
		preloadImage(selectedImageIndex);
		preloadImage(selectedImageIndex + 1);
		preloadImage(selectedImageIndex - 1);
	}, [
		selectedImageIndex,
		allImages,
		loadedImages
	]);
	const getRatingColorClasses = (rating) => {
		if (rating >= 4) return "bg-green-600";
		if (rating >= 3) return "bg-lime-600";
		if (rating >= 2) return "bg-yellow-500";
		return "bg-red-600";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: GearReviewDetail_module_default.container,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: GearReviewDetail_module_default.content,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: GearReviewDetail_module_default.backNav,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						href: "/gear/reviews",
						className: GearReviewDetail_module_default.backLink,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), "Back to Gear Reviews"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: GearReviewDetail_module_default.header,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: GearReviewDetail_module_default.headerContent,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.brandInfo,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: GearReviewDetail_module_default.brand,
									children: review.brand
								}), review.model && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: GearReviewDetail_module_default.model,
									children: review.model
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: GearReviewDetail_module_default.gearName,
								children: review.gearName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: GearReviewDetail_module_default.reviewTitle,
								children: review.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.headerMeta,
								children: [
									renderStars(review.overallRating, "large"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviewDetail_module_default.metaInfo,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: GearReviewDetail_module_default.metaItem,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: format(new Date(review.publishedAt), "MMMM d, yyyy") })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: GearReviewDetail_module_default.metaItem,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["By ", review.author.name] })
											}),
											review.price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: GearReviewDetail_module_default.metaItem,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: GearReviewDetail_module_default.price,
													children: ["$", review.price]
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialShare, {
										url: `https://kyle.czajkowski.tech/gear/reviews/${review.slug}`,
										title: `${review.brand} ${review.gearName} Review`,
										variant: "buttons"
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearReviewDetail_module_default.mainContent,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: GearReviewDetail_module_default.leftColumn,
						children: [
							allImages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageGallery, {
								images: allImages,
								gearName: review.gearName,
								optimizeImageUrl
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.quickInfo,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: GearReviewDetail_module_default.quickInfoTitle,
									children: "Quick Info"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviewDetail_module_default.quickInfoGrid,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.quickInfoItem,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 16 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Overall Rating" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [review.overallRating, "/5"] })
											]
										}),
										review.timeUsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.quickInfoItem,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 16 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Time Tested" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: formatTimeUsed(review.timeUsed) })
											]
										}),
										review.specifications?.weight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.quickInfoItem,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weight, { size: 16 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Weight" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: review.specifications.weight })
											]
										}),
										review.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.quickInfoItem,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { size: 16 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Price" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["$", review.price] })
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnifiedTagsSection, { review })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: GearReviewDetail_module_default.rightColumn,
						children: [
							review.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.summary,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Summary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: GearReviewDetail_module_default.summaryText,
									children: review.excerpt
								})]
							}),
							(review.pros?.length || review.cons?.length) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.prosConsSection,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Pros & Cons" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviewDetail_module_default.prosCons,
									children: [review.pros && review.pros.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviewDetail_module_default.pros,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
											className: GearReviewDetail_module_default.prosTitle,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 18 }), "Pros"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: GearReviewDetail_module_default.prosList,
											children: review.pros.map((pro, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pro }, index))
										})]
									}), review.cons && review.cons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviewDetail_module_default.cons,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
											className: GearReviewDetail_module_default.consTitle,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { size: 18 }), "Cons"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: GearReviewDetail_module_default.consList,
											children: review.cons.map((con, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: con }, index))
										})]
									})]
								})]
							}),
							review.detailedRatings && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2",
									children: "Detailed Ratings"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4",
									children: [
										review.detailedRatings.durability && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm",
												children: "Durability"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.durability)}`,
														style: { width: `${review.detailedRatings.durability / 5 * 100}%` }
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.durability)}`,
													children: [review.detailedRatings.durability, "/5"]
												})]
											})]
										}),
										review.detailedRatings.comfort && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm",
												children: "Comfort"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.comfort)}`,
														style: { width: `${review.detailedRatings.comfort / 5 * 100}%` }
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.comfort)}`,
													children: [review.detailedRatings.comfort, "/5"]
												})]
											})]
										}),
										review.detailedRatings.performance && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm",
												children: "Performance"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.performance)}`,
														style: { width: `${review.detailedRatings.performance / 5 * 100}%` }
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.performance)}`,
													children: [review.detailedRatings.performance, "/5"]
												})]
											})]
										}),
										review.detailedRatings.valueForMoney && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm",
												children: "Value for Money"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.valueForMoney)}`,
														style: { width: `${review.detailedRatings.valueForMoney / 5 * 100}%` }
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.valueForMoney)}`,
													children: [review.detailedRatings.valueForMoney, "/5"]
												})]
											})]
										})
									]
								})]
							}),
							review.testingConditions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.testingConditions,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), "Testing Conditions"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: review.testingConditions })]
							}),
							review.body && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.reviewContent,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Detailed Review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: GearReviewDetail_module_default.portableText,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortableText, {
										value: review.body,
										components: portableTextComponents
									})
								})]
							}),
							review.specifications && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.specifications,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 18 }), "Technical Specifications"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviewDetail_module_default.specsGrid,
									children: [
										review.specifications.weight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.specItem,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.specLabel,
												children: "Weight"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.specValue,
												children: review.specifications.weight
											})]
										}),
										review.specifications.dimensions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.specItem,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.specLabel,
												children: "Dimensions"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.specValue,
												children: review.specifications.dimensions
											})]
										}),
										review.specifications.materials && review.specifications.materials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.specItem,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.specLabel,
												children: "Materials"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.specValue,
												children: review.specifications.materials.join(", ")
											})]
										}),
										review.specifications.features && review.specifications.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.specItem,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.specLabel,
												children: "Key Features"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: GearReviewDetail_module_default.featuresList,
												children: review.specifications.features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: feature }, index))
											})]
										})
									]
								})]
							}),
							review.purchaseLinks && review.purchaseLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.purchaseLinks,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Where to Buy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: GearReviewDetail_module_default.retailerGrid,
									children: review.purchaseLinks.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: link.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: GearReviewDetail_module_default.retailerLink,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviewDetail_module_default.retailerInfo,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: GearReviewDetail_module_default.retailerName,
												children: link.retailer
											}), link.currentPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: GearReviewDetail_module_default.retailerPrice,
												children: ["$", link.currentPrice]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 })]
									}, index))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviewDetail_module_default.recommendations,
								children: [review.recommendedFor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviewDetail_module_default.recommendedFor,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Recommended For" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: review.recommendedFor })]
								}), review.alternatives && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviewDetail_module_default.alternatives,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Alternatives to Consider" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: review.alternatives })]
								})]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { GearReviewDetail as default };
