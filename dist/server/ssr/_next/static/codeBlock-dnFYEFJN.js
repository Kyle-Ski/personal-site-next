import { G as __commonJSMin, J as __toCommonJS, K as __esmMin, V as require_react, Y as __toESM, n as require_jsx_runtime, q as __exportAll } from "../../index.js";
import { t as _extends } from "./extends-DrH2PCIy.js";
import { t as _typeof } from "./typeof-KEtdrNHU.js";
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region node_modules/react-syntax-highlighter/dist/esm/create-element.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function powerSetPermutations(arr) {
	var arrLength = arr.length;
	if (arrLength === 0 || arrLength === 1) return arr;
	if (arrLength === 2) return [
		arr[0],
		arr[1],
		"".concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[1], ".").concat(arr[0])
	];
	if (arrLength === 3) return [
		arr[0],
		arr[1],
		arr[2],
		"".concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[0], ".").concat(arr[2]),
		"".concat(arr[1], ".").concat(arr[0]),
		"".concat(arr[1], ".").concat(arr[2]),
		"".concat(arr[2], ".").concat(arr[0]),
		"".concat(arr[2], ".").concat(arr[1]),
		"".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]),
		"".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]),
		"".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]),
		"".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]),
		"".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])
	];
	if (arrLength >= 4) return [
		arr[0],
		arr[1],
		arr[2],
		arr[3],
		"".concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[0], ".").concat(arr[2]),
		"".concat(arr[0], ".").concat(arr[3]),
		"".concat(arr[1], ".").concat(arr[0]),
		"".concat(arr[1], ".").concat(arr[2]),
		"".concat(arr[1], ".").concat(arr[3]),
		"".concat(arr[2], ".").concat(arr[0]),
		"".concat(arr[2], ".").concat(arr[1]),
		"".concat(arr[2], ".").concat(arr[3]),
		"".concat(arr[3], ".").concat(arr[0]),
		"".concat(arr[3], ".").concat(arr[1]),
		"".concat(arr[3], ".").concat(arr[2]),
		"".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]),
		"".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]),
		"".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]),
		"".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]),
		"".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]),
		"".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]),
		"".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]),
		"".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]),
		"".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]),
		"".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]),
		"".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]),
		"".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]),
		"".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]),
		"".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]),
		"".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]),
		"".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]),
		"".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]),
		"".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]),
		"".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]),
		"".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]),
		"".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]),
		"".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]),
		"".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]),
		"".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]),
		"".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]),
		"".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]),
		"".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]),
		"".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]),
		"".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]),
		"".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]),
		"".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]),
		"".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]),
		"".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]),
		"".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]),
		"".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]),
		"".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]),
		"".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]),
		"".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]),
		"".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]),
		"".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]),
		"".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]),
		"".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]),
		"".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]),
		"".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]),
		"".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])
	];
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
	if (classNames.length === 0 || classNames.length === 1) return classNames;
	var key = classNames.join(".");
	if (!classNameCombinations[key]) classNameCombinations[key] = powerSetPermutations(classNames);
	return classNameCombinations[key];
}
function createStyleObject(classNames) {
	var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
	return getClassNameCombinations(classNames.filter(function(className) {
		return className !== "token";
	})).reduce(function(styleObject, className) {
		return _objectSpread$1(_objectSpread$1({}, styleObject), stylesheet[className]);
	}, elementStyle);
}
function createClassNameString(classNames) {
	return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
	var childrenCount = 0;
	return function(children) {
		childrenCount += 1;
		return children.map(function(child, i) {
			return createElement({
				node: child,
				stylesheet,
				useInlineStyles,
				key: "code-segment-".concat(childrenCount, "-").concat(i)
			});
		});
	};
}
function createElement(_ref) {
	var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
	var properties = node.properties, type = node.type, TagName = node.tagName, value = node.value;
	if (type === "text") return value;
	else if (TagName) {
		var childrenCreator = createChildren(stylesheet, useInlineStyles);
		var props;
		if (!useInlineStyles) props = _objectSpread$1(_objectSpread$1({}, properties), {}, { className: createClassNameString(properties.className) });
		else {
			var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
				selector.split(".").forEach(function(className) {
					if (!classes.includes(className)) classes.push(className);
				});
				return classes;
			}, []);
			var startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [];
			var className = properties.className && startingClassName.concat(properties.className.filter(function(className) {
				return !allStylesheetSelectors.includes(className);
			}));
			props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
				className: createClassNameString(className) || void 0,
				style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
			});
		}
		var children = childrenCreator(node.children);
		return /* @__PURE__ */ import_react.createElement(TagName, _extends({ key }, props), children);
	}
}
//#endregion
//#region node_modules/react-syntax-highlighter/dist/esm/checkForListedLanguage.js
var checkForListedLanguage_default = (function(astGenerator, language) {
	return astGenerator.listLanguages().indexOf(language) !== -1;
});
//#endregion
//#region node_modules/react-syntax-highlighter/dist/esm/highlight.js
var _excluded = [
	"language",
	"children",
	"style",
	"customStyle",
	"codeTagProps",
	"useInlineStyles",
	"showLineNumbers",
	"showInlineLineNumbers",
	"startingLineNumber",
	"lineNumberContainerStyle",
	"lineNumberStyle",
	"wrapLines",
	"wrapLongLines",
	"lineProps",
	"renderer",
	"PreTag",
	"CodeTag",
	"code",
	"astGenerator"
];
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
var newLineRegex = /\n/g;
function getNewLines(str) {
	return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
	var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style = _ref.style;
	return lines.map(function(_, i) {
		var number = i + startingLineNumber;
		return /* @__PURE__ */ import_react.createElement("span", {
			key: "line-".concat(i),
			className: "react-syntax-highlighter-line-number",
			style: typeof style === "function" ? style(number) : style
		}, "".concat(number, "\n"));
	});
}
function AllLineNumbers(_ref2) {
	var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? {
		"float": "left",
		paddingRight: "10px"
	} : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
	return /* @__PURE__ */ import_react.createElement("code", { style: Object.assign({}, codeStyle, containerStyle) }, getAllLineNumbers({
		lines: codeString.replace(/\n$/, "").split("\n"),
		style: numberStyle,
		startingLineNumber
	}));
}
function getEmWidthOfNumber(num) {
	return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
	return {
		type: "element",
		tagName: "span",
		properties: {
			key: "line-number--".concat(lineNumber),
			className: [
				"comment",
				"linenumber",
				"react-syntax-highlighter-line-number"
			],
			style: inlineLineNumberStyle
		},
		children: [{
			type: "text",
			value: lineNumber
		}]
	};
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
	var defaultLineNumberStyle = {
		display: "inline-block",
		minWidth: getEmWidthOfNumber(largestLineNumber),
		paddingRight: "1em",
		textAlign: "right",
		userSelect: "none"
	};
	var customLineNumberStyle = typeof lineNumberStyle === "function" ? lineNumberStyle(lineNumber) : lineNumberStyle;
	return _objectSpread(_objectSpread({}, defaultLineNumberStyle), customLineNumberStyle);
}
function createLineElement(_ref3) {
	var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines, _ref3$wrapLines = _ref3.wrapLines;
	var properties = (_ref3$wrapLines === void 0 ? false : _ref3$wrapLines) ? _objectSpread({}, typeof lineProps === "function" ? lineProps(lineNumber) : lineProps) : {};
	properties["className"] = properties["className"] ? [].concat(_toConsumableArray(properties["className"].trim().split(/\s+/)), _toConsumableArray(className)) : className;
	if (lineNumber && showInlineLineNumbers) {
		var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
		children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
	}
	if (wrapLongLines & showLineNumbers) properties.style = _objectSpread({ display: "flex" }, properties.style);
	return {
		type: "element",
		tagName: "span",
		properties,
		children
	};
}
function flattenCodeTree(tree) {
	var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
	for (var i = 0; i < tree.length; i++) {
		var node = tree[i];
		if (node.type === "text") newTree.push(createLineElement({
			children: [node],
			className: _toConsumableArray(new Set(className))
		}));
		else if (node.children) {
			var classNames = className.concat(node.properties.className);
			flattenCodeTree(node.children, classNames).forEach(function(i) {
				return newTree.push(i);
			});
		}
	}
	return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
	var _ref4;
	var tree = flattenCodeTree(codeTree.value);
	var newTree = [];
	var lastLineBreakIndex = -1;
	var index = 0;
	function createWrappedLine(children, lineNumber) {
		return createLineElement({
			children,
			lineNumber,
			lineNumberStyle,
			largestLineNumber,
			showInlineLineNumbers,
			lineProps,
			className: arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
			showLineNumbers,
			wrapLongLines,
			wrapLines
		});
	}
	function createUnwrappedLine(children, lineNumber) {
		if (showLineNumbers && lineNumber && showInlineLineNumbers) {
			var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
			children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
		}
		return children;
	}
	function createLine(children, lineNumber) {
		var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
		return wrapLines || className.length > 0 ? createWrappedLine(children, lineNumber, className) : createUnwrappedLine(children, lineNumber);
	}
	var _loop = function _loop() {
		var node = tree[index];
		var value = node.children[0].value;
		if (getNewLines(value)) {
			var splitValue = value.split("\n");
			splitValue.forEach(function(text, i) {
				var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
				var newChild = {
					type: "text",
					value: "".concat(text, "\n")
				};
				if (i === 0) {
					var _line = createLine(tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
						children: [newChild],
						className: node.properties.className
					})), lineNumber);
					newTree.push(_line);
				} else if (i === splitValue.length - 1) {
					var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
					var lastLineInPreviousSpan = {
						type: "text",
						value: "".concat(text)
					};
					if (stringChild) {
						var newElem = createLineElement({
							children: [lastLineInPreviousSpan],
							className: node.properties.className
						});
						tree.splice(index + 1, 0, newElem);
					} else {
						var _line2 = createLine([lastLineInPreviousSpan], lineNumber, node.properties.className);
						newTree.push(_line2);
					}
				} else {
					var _line3 = createLine([newChild], lineNumber, node.properties.className);
					newTree.push(_line3);
				}
			});
			lastLineBreakIndex = index;
		}
		index++;
	};
	while (index < tree.length) _loop();
	if (lastLineBreakIndex !== tree.length - 1) {
		var children = tree.slice(lastLineBreakIndex + 1, tree.length);
		if (children && children.length) {
			var line = createLine(children, showLineNumbers && newTree.length + startingLineNumber);
			newTree.push(line);
		}
	}
	return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
	var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
	return rows.map(function(node, i) {
		return createElement({
			node,
			stylesheet,
			useInlineStyles,
			key: "code-segement".concat(i)
		});
	});
}
function isHighlightJs(astGenerator) {
	return astGenerator && typeof astGenerator.highlightAuto !== "undefined";
}
function getCodeTree(_ref6) {
	var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
	if (isHighlightJs(astGenerator)) {
		var hasLanguage = checkForListedLanguage_default(astGenerator, language);
		if (language === "text") return {
			value: defaultCodeValue,
			language: "text"
		};
		else if (hasLanguage) return astGenerator.highlight(language, code);
		else return astGenerator.highlightAuto(code);
	}
	try {
		return language && language !== "text" ? { value: astGenerator.highlight(code, language) } : { value: defaultCodeValue };
	} catch (e) {
		return { value: defaultCodeValue };
	}
}
function highlight_default(defaultAstGenerator, defaultStyle) {
	return function SyntaxHighlighter(_ref7) {
		var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? {
			className: language ? "language-".concat(language) : void 0,
			style: _objectSpread(_objectSpread({}, style["code[class*=\"language-\"]"]), style["code[class*=\"language-".concat(language, "\"]")])
		} : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || "" : _ref7$code, astGenerator = _ref7.astGenerator, rest = _objectWithoutProperties(_ref7, _excluded);
		astGenerator = astGenerator || defaultAstGenerator;
		var allLineNumbers = showLineNumbers ? /* @__PURE__ */ import_react.createElement(AllLineNumbers, {
			containerStyle: lineNumberContainerStyle,
			codeStyle: codeTagProps.style || {},
			numberStyle: lineNumberStyle,
			startingLineNumber,
			codeString: code
		}) : null;
		var defaultPreStyle = style.hljs || style["pre[class*=\"language-\"]"] || { backgroundColor: "#fff" };
		var generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs";
		var preProps = useInlineStyles ? Object.assign({}, rest, { style: Object.assign({}, defaultPreStyle, customStyle) }) : Object.assign({}, rest, {
			className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
			style: Object.assign({}, customStyle)
		});
		if (wrapLongLines) codeTagProps.style = _objectSpread({ whiteSpace: "pre-wrap" }, codeTagProps.style);
		else codeTagProps.style = _objectSpread({ whiteSpace: "pre" }, codeTagProps.style);
		if (!astGenerator) return /* @__PURE__ */ import_react.createElement(PreTag, preProps, allLineNumbers, /* @__PURE__ */ import_react.createElement(CodeTag, codeTagProps, code));
		if (wrapLines === void 0 && renderer || wrapLongLines) wrapLines = true;
		renderer = renderer || defaultRenderer;
		var defaultCodeValue = [{
			type: "text",
			value: code
		}];
		var codeTree = getCodeTree({
			astGenerator,
			language,
			code,
			defaultCodeValue
		});
		if (codeTree.language === null) codeTree.value = defaultCodeValue;
		var lineCount = codeTree.value.length;
		if (lineCount === 1 && codeTree.value[0].type === "text") lineCount = codeTree.value[0].value.split("\n").length;
		var largestLineNumber = lineCount + startingLineNumber;
		var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
		return /* @__PURE__ */ import_react.createElement(PreTag, preProps, /* @__PURE__ */ import_react.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
			rows,
			stylesheet: style,
			useInlineStyles
		})));
	};
}
//#endregion
//#region node_modules/xtend/immutable.js
var require_immutable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = extend;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function extend() {
		var target = {};
		for (var i = 0; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var require_schema = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Schema;
	var proto = Schema.prototype;
	proto.space = null;
	proto.normal = {};
	proto.property = {};
	function Schema(property, normal, space) {
		this.property = property;
		this.normal = normal;
		if (space) this.space = space;
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/merge.js
var require_merge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var xtend = require_immutable();
	var Schema = require_schema();
	module.exports = merge;
	function merge(definitions) {
		var length = definitions.length;
		var property = [];
		var normal = [];
		var index = -1;
		var info;
		var space;
		while (++index < length) {
			info = definitions[index];
			property.push(info.property);
			normal.push(info.normal);
			space = info.space;
		}
		return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
	}
}));
//#endregion
//#region node_modules/property-information/normalize.js
var require_normalize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = normalize;
	function normalize(value) {
		return value.toLowerCase();
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/info.js
var require_info = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Info;
	var proto = Info.prototype;
	proto.space = null;
	proto.attribute = null;
	proto.property = null;
	proto.boolean = false;
	proto.booleanish = false;
	proto.overloadedBoolean = false;
	proto.number = false;
	proto.commaSeparated = false;
	proto.spaceSeparated = false;
	proto.commaOrSpaceSeparated = false;
	proto.mustUseProperty = false;
	proto.defined = false;
	function Info(property, attribute) {
		this.property = property;
		this.attribute = attribute;
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/types.js
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	var powers = 0;
	exports.boolean = increment();
	exports.booleanish = increment();
	exports.overloadedBoolean = increment();
	exports.number = increment();
	exports.spaceSeparated = increment();
	exports.commaSeparated = increment();
	exports.commaOrSpaceSeparated = increment();
	function increment() {
		return Math.pow(2, ++powers);
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var require_defined_info = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Info = require_info();
	var types = require_types();
	module.exports = DefinedInfo;
	DefinedInfo.prototype = new Info();
	DefinedInfo.prototype.defined = true;
	var checks = [
		"boolean",
		"booleanish",
		"overloadedBoolean",
		"number",
		"commaSeparated",
		"spaceSeparated",
		"commaOrSpaceSeparated"
	];
	var checksLength = checks.length;
	function DefinedInfo(property, attribute, mask, space) {
		var index = -1;
		var check;
		mark(this, "space", space);
		Info.call(this, property, attribute);
		while (++index < checksLength) {
			check = checks[index];
			mark(this, check, (mask & types[check]) === types[check]);
		}
	}
	function mark(values, key, value) {
		if (value) values[key] = value;
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/create.js
var require_create = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var normalize = require_normalize();
	var Schema = require_schema();
	var DefinedInfo = require_defined_info();
	module.exports = create;
	function create(definition) {
		var space = definition.space;
		var mustUseProperty = definition.mustUseProperty || [];
		var attributes = definition.attributes || {};
		var props = definition.properties;
		var transform = definition.transform;
		var property = {};
		var normal = {};
		var prop;
		var info;
		for (prop in props) {
			info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space);
			if (mustUseProperty.indexOf(prop) !== -1) info.mustUseProperty = true;
			property[prop] = info;
			normal[normalize(prop)] = prop;
			normal[normalize(info.attribute)] = prop;
		}
		return new Schema(property, normal, space);
	}
}));
//#endregion
//#region node_modules/property-information/lib/xlink.js
var require_xlink = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_create()({
		space: "xlink",
		transform: xlinkTransform,
		properties: {
			xLinkActuate: null,
			xLinkArcRole: null,
			xLinkHref: null,
			xLinkRole: null,
			xLinkShow: null,
			xLinkTitle: null,
			xLinkType: null
		}
	});
	function xlinkTransform(_, prop) {
		return "xlink:" + prop.slice(5).toLowerCase();
	}
}));
//#endregion
//#region node_modules/property-information/lib/xml.js
var require_xml = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_create()({
		space: "xml",
		transform: xmlTransform,
		properties: {
			xmlLang: null,
			xmlBase: null,
			xmlSpace: null
		}
	});
	function xmlTransform(_, prop) {
		return "xml:" + prop.slice(3).toLowerCase();
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
var require_case_sensitive_transform = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = caseSensitiveTransform;
	function caseSensitiveTransform(attributes, attribute) {
		return attribute in attributes ? attributes[attribute] : attribute;
	}
}));
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
var require_case_insensitive_transform = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var caseSensitiveTransform = require_case_sensitive_transform();
	module.exports = caseInsensitiveTransform;
	function caseInsensitiveTransform(attributes, property) {
		return caseSensitiveTransform(attributes, property.toLowerCase());
	}
}));
//#endregion
//#region node_modules/property-information/lib/xmlns.js
var require_xmlns = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_create()({
		space: "xmlns",
		attributes: { xmlnsxlink: "xmlns:xlink" },
		transform: require_case_insensitive_transform(),
		properties: {
			xmlns: null,
			xmlnsXLink: null
		}
	});
}));
//#endregion
//#region node_modules/property-information/lib/aria.js
var require_aria = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var types = require_types();
	var create = require_create();
	var booleanish = types.booleanish;
	var number = types.number;
	var spaceSeparated = types.spaceSeparated;
	module.exports = create({
		transform: ariaTransform,
		properties: {
			ariaActiveDescendant: null,
			ariaAtomic: booleanish,
			ariaAutoComplete: null,
			ariaBusy: booleanish,
			ariaChecked: booleanish,
			ariaColCount: number,
			ariaColIndex: number,
			ariaColSpan: number,
			ariaControls: spaceSeparated,
			ariaCurrent: null,
			ariaDescribedBy: spaceSeparated,
			ariaDetails: null,
			ariaDisabled: booleanish,
			ariaDropEffect: spaceSeparated,
			ariaErrorMessage: null,
			ariaExpanded: booleanish,
			ariaFlowTo: spaceSeparated,
			ariaGrabbed: booleanish,
			ariaHasPopup: null,
			ariaHidden: booleanish,
			ariaInvalid: null,
			ariaKeyShortcuts: null,
			ariaLabel: null,
			ariaLabelledBy: spaceSeparated,
			ariaLevel: number,
			ariaLive: null,
			ariaModal: booleanish,
			ariaMultiLine: booleanish,
			ariaMultiSelectable: booleanish,
			ariaOrientation: null,
			ariaOwns: spaceSeparated,
			ariaPlaceholder: null,
			ariaPosInSet: number,
			ariaPressed: booleanish,
			ariaReadOnly: booleanish,
			ariaRelevant: null,
			ariaRequired: booleanish,
			ariaRoleDescription: spaceSeparated,
			ariaRowCount: number,
			ariaRowIndex: number,
			ariaRowSpan: number,
			ariaSelected: booleanish,
			ariaSetSize: number,
			ariaSort: null,
			ariaValueMax: number,
			ariaValueMin: number,
			ariaValueNow: number,
			ariaValueText: null,
			role: null
		}
	});
	function ariaTransform(_, prop) {
		return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
	}
}));
//#endregion
//#region node_modules/property-information/lib/html.js
var require_html$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var types = require_types();
	var create = require_create();
	var caseInsensitiveTransform = require_case_insensitive_transform();
	var boolean = types.boolean;
	var overloadedBoolean = types.overloadedBoolean;
	var booleanish = types.booleanish;
	var number = types.number;
	var spaceSeparated = types.spaceSeparated;
	var commaSeparated = types.commaSeparated;
	module.exports = create({
		space: "html",
		attributes: {
			acceptcharset: "accept-charset",
			classname: "class",
			htmlfor: "for",
			httpequiv: "http-equiv"
		},
		transform: caseInsensitiveTransform,
		mustUseProperty: [
			"checked",
			"multiple",
			"muted",
			"selected"
		],
		properties: {
			abbr: null,
			accept: commaSeparated,
			acceptCharset: spaceSeparated,
			accessKey: spaceSeparated,
			action: null,
			allow: null,
			allowFullScreen: boolean,
			allowPaymentRequest: boolean,
			allowUserMedia: boolean,
			alt: null,
			as: null,
			async: boolean,
			autoCapitalize: null,
			autoComplete: spaceSeparated,
			autoFocus: boolean,
			autoPlay: boolean,
			capture: boolean,
			charSet: null,
			checked: boolean,
			cite: null,
			className: spaceSeparated,
			cols: number,
			colSpan: null,
			content: null,
			contentEditable: booleanish,
			controls: boolean,
			controlsList: spaceSeparated,
			coords: number | commaSeparated,
			crossOrigin: null,
			data: null,
			dateTime: null,
			decoding: null,
			default: boolean,
			defer: boolean,
			dir: null,
			dirName: null,
			disabled: boolean,
			download: overloadedBoolean,
			draggable: booleanish,
			encType: null,
			enterKeyHint: null,
			form: null,
			formAction: null,
			formEncType: null,
			formMethod: null,
			formNoValidate: boolean,
			formTarget: null,
			headers: spaceSeparated,
			height: number,
			hidden: boolean,
			high: number,
			href: null,
			hrefLang: null,
			htmlFor: spaceSeparated,
			httpEquiv: spaceSeparated,
			id: null,
			imageSizes: null,
			imageSrcSet: commaSeparated,
			inputMode: null,
			integrity: null,
			is: null,
			isMap: boolean,
			itemId: null,
			itemProp: spaceSeparated,
			itemRef: spaceSeparated,
			itemScope: boolean,
			itemType: spaceSeparated,
			kind: null,
			label: null,
			lang: null,
			language: null,
			list: null,
			loading: null,
			loop: boolean,
			low: number,
			manifest: null,
			max: null,
			maxLength: number,
			media: null,
			method: null,
			min: null,
			minLength: number,
			multiple: boolean,
			muted: boolean,
			name: null,
			nonce: null,
			noModule: boolean,
			noValidate: boolean,
			onAbort: null,
			onAfterPrint: null,
			onAuxClick: null,
			onBeforePrint: null,
			onBeforeUnload: null,
			onBlur: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onContextMenu: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFormData: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLanguageChange: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadEnd: null,
			onLoadStart: null,
			onMessage: null,
			onMessageError: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRejectionHandled: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onSecurityPolicyViolation: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onSlotChange: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnhandledRejection: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onWheel: null,
			open: boolean,
			optimum: number,
			pattern: null,
			ping: spaceSeparated,
			placeholder: null,
			playsInline: boolean,
			poster: null,
			preload: null,
			readOnly: boolean,
			referrerPolicy: null,
			rel: spaceSeparated,
			required: boolean,
			reversed: boolean,
			rows: number,
			rowSpan: number,
			sandbox: spaceSeparated,
			scope: null,
			scoped: boolean,
			seamless: boolean,
			selected: boolean,
			shape: null,
			size: number,
			sizes: null,
			slot: null,
			span: number,
			spellCheck: booleanish,
			src: null,
			srcDoc: null,
			srcLang: null,
			srcSet: commaSeparated,
			start: number,
			step: null,
			style: null,
			tabIndex: number,
			target: null,
			title: null,
			translate: null,
			type: null,
			typeMustMatch: boolean,
			useMap: null,
			value: booleanish,
			width: number,
			wrap: null,
			align: null,
			aLink: null,
			archive: spaceSeparated,
			axis: null,
			background: null,
			bgColor: null,
			border: number,
			borderColor: null,
			bottomMargin: number,
			cellPadding: null,
			cellSpacing: null,
			char: null,
			charOff: null,
			classId: null,
			clear: null,
			code: null,
			codeBase: null,
			codeType: null,
			color: null,
			compact: boolean,
			declare: boolean,
			event: null,
			face: null,
			frame: null,
			frameBorder: null,
			hSpace: number,
			leftMargin: number,
			link: null,
			longDesc: null,
			lowSrc: null,
			marginHeight: number,
			marginWidth: number,
			noResize: boolean,
			noHref: boolean,
			noShade: boolean,
			noWrap: boolean,
			object: null,
			profile: null,
			prompt: null,
			rev: null,
			rightMargin: number,
			rules: null,
			scheme: null,
			scrolling: booleanish,
			standby: null,
			summary: null,
			text: null,
			topMargin: number,
			valueType: null,
			version: null,
			vAlign: null,
			vLink: null,
			vSpace: number,
			allowTransparency: null,
			autoCorrect: null,
			autoSave: null,
			disablePictureInPicture: boolean,
			disableRemotePlayback: boolean,
			prefix: null,
			property: null,
			results: number,
			security: null,
			unselectable: null
		}
	});
}));
//#endregion
//#region node_modules/property-information/html.js
var require_html$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var merge = require_merge();
	var xlink = require_xlink();
	module.exports = merge([
		require_xml(),
		xlink,
		require_xmlns(),
		require_aria(),
		require_html$2()
	]);
}));
//#endregion
//#region node_modules/property-information/find.js
var require_find = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var normalize = require_normalize();
	var DefinedInfo = require_defined_info();
	var Info = require_info();
	var data = "data";
	module.exports = find;
	var valid = /^data[-\w.:]+$/i;
	var dash = /-[a-z]/g;
	var cap = /[A-Z]/g;
	function find(schema, value) {
		var normal = normalize(value);
		var prop = value;
		var Type = Info;
		if (normal in schema.normal) return schema.property[schema.normal[normal]];
		if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
			if (value.charAt(4) === "-") prop = datasetToProperty(value);
			else value = datasetToAttribute(value);
			Type = DefinedInfo;
		}
		return new Type(prop, value);
	}
	function datasetToProperty(attribute) {
		var value = attribute.slice(5).replace(dash, camelcase);
		return data + value.charAt(0).toUpperCase() + value.slice(1);
	}
	function datasetToAttribute(property) {
		var value = property.slice(4);
		if (dash.test(value)) return property;
		value = value.replace(cap, kebab);
		if (value.charAt(0) !== "-") value = "-" + value;
		return data + value;
	}
	function kebab($0) {
		return "-" + $0.toLowerCase();
	}
	function camelcase($0) {
		return $0.charAt(1).toUpperCase();
	}
}));
//#endregion
//#region node_modules/hast-util-parse-selector/index.js
var require_hast_util_parse_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = parse;
	var search = /[#.]/g;
	function parse(selector, defaultTagName) {
		var value = selector || "";
		var name = defaultTagName || "div";
		var props = {};
		var start = 0;
		var subvalue;
		var previous;
		var match;
		while (start < value.length) {
			search.lastIndex = start;
			match = search.exec(value);
			subvalue = value.slice(start, match ? match.index : value.length);
			if (subvalue) {
				if (!previous) name = subvalue;
				else if (previous === "#") props.id = subvalue;
				else if (props.className) props.className.push(subvalue);
				else props.className = [subvalue];
				start += subvalue.length;
			}
			if (match) {
				previous = match[0];
				start++;
			}
		}
		return {
			type: "element",
			tagName: name,
			properties: props,
			children: []
		};
	}
}));
//#endregion
//#region node_modules/space-separated-tokens/index.js
var require_space_separated_tokens = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.parse = parse;
	exports.stringify = stringify;
	var empty = "";
	var space = " ";
	var whiteSpace = /[ \t\n\r\f]+/g;
	function parse(value) {
		var input = String(value || empty).trim();
		return input === empty ? [] : input.split(whiteSpace);
	}
	function stringify(values) {
		return values.join(space).trim();
	}
}));
//#endregion
//#region node_modules/comma-separated-tokens/index.js
var require_comma_separated_tokens = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.parse = parse;
	exports.stringify = stringify;
	var comma = ",";
	var space = " ";
	var empty = "";
	function parse(value) {
		var values = [];
		var input = String(value || empty);
		var index = input.indexOf(comma);
		var lastIndex = 0;
		var end = false;
		var val;
		while (!end) {
			if (index === -1) {
				index = input.length;
				end = true;
			}
			val = input.slice(lastIndex, index).trim();
			if (val || !end) values.push(val);
			lastIndex = index + 1;
			index = input.indexOf(comma, lastIndex);
		}
		return values;
	}
	function stringify(values, options) {
		var settings = options || {};
		var left = settings.padLeft === false ? empty : space;
		var right = settings.padRight ? space : empty;
		if (values[values.length - 1] === empty) values = values.concat(empty);
		return values.join(right + comma + left).trim();
	}
}));
//#endregion
//#region node_modules/hastscript/factory.js
var require_factory = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var find = require_find();
	var normalize = require_normalize();
	var parseSelector = require_hast_util_parse_selector();
	var spaces = require_space_separated_tokens().parse;
	var commas = require_comma_separated_tokens().parse;
	module.exports = factory;
	var own = {}.hasOwnProperty;
	function factory(schema, defaultTagName, caseSensitive) {
		var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
		return h;
		function h(selector, properties) {
			var node = parseSelector(selector, defaultTagName);
			var children = Array.prototype.slice.call(arguments, 2);
			var name = node.tagName.toLowerCase();
			var property;
			node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name;
			if (properties && isChildren(properties, node)) {
				children.unshift(properties);
				properties = null;
			}
			if (properties) for (property in properties) addProperty(node.properties, property, properties[property]);
			addChild(node.children, children);
			if (node.tagName === "template") {
				node.content = {
					type: "root",
					children: node.children
				};
				node.children = [];
			}
			return node;
		}
		function addProperty(properties, key, value) {
			var info;
			var property;
			var result;
			if (value === null || value === void 0 || value !== value) return;
			info = find(schema, key);
			property = info.property;
			result = value;
			if (typeof result === "string") {
				if (info.spaceSeparated) result = spaces(result);
				else if (info.commaSeparated) result = commas(result);
				else if (info.commaOrSpaceSeparated) result = spaces(commas(result).join(" "));
			}
			if (property === "style" && typeof value !== "string") result = style(result);
			if (property === "className" && properties.className) result = properties.className.concat(result);
			properties[property] = parsePrimitives(info, property, result);
		}
	}
	function isChildren(value, node) {
		return typeof value === "string" || "length" in value || isNode(node.tagName, value);
	}
	function isNode(tagName, value) {
		var type = value.type;
		if (tagName === "input" || !type || typeof type !== "string") return false;
		if (typeof value.children === "object" && "length" in value.children) return true;
		type = type.toLowerCase();
		if (tagName === "button") return type !== "menu" && type !== "submit" && type !== "reset" && type !== "button";
		return "value" in value;
	}
	function addChild(nodes, value) {
		var index;
		var length;
		if (typeof value === "string" || typeof value === "number") {
			nodes.push({
				type: "text",
				value: String(value)
			});
			return;
		}
		if (typeof value === "object" && "length" in value) {
			index = -1;
			length = value.length;
			while (++index < length) addChild(nodes, value[index]);
			return;
		}
		if (typeof value !== "object" || !("type" in value)) throw new Error("Expected node, nodes, or string, got `" + value + "`");
		nodes.push(value);
	}
	function parsePrimitives(info, name, value) {
		var index;
		var length;
		var result;
		if (typeof value !== "object" || !("length" in value)) return parsePrimitive(info, name, value);
		length = value.length;
		index = -1;
		result = [];
		while (++index < length) result[index] = parsePrimitive(info, name, value[index]);
		return result;
	}
	function parsePrimitive(info, name, value) {
		var result = value;
		if (info.number || info.positiveNumber) {
			if (!isNaN(result) && result !== "") result = Number(result);
		} else if (info.boolean || info.overloadedBoolean) {
			if (typeof result === "string" && (result === "" || normalize(value) === normalize(name))) result = true;
		}
		return result;
	}
	function style(value) {
		var result = [];
		var key;
		for (key in value) result.push([key, value[key]].join(": "));
		return result.join("; ");
	}
	function createAdjustMap(values) {
		var length = values.length;
		var index = -1;
		var result = {};
		var value;
		while (++index < length) {
			value = values[index];
			result[value.toLowerCase()] = value;
		}
		return result;
	}
}));
//#endregion
//#region node_modules/hastscript/html.js
var require_html = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var schema = require_html$1();
	var html = require_factory()(schema, "div");
	html.displayName = "html";
	module.exports = html;
}));
//#endregion
//#region node_modules/hastscript/index.js
var require_hastscript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_html();
}));
//#endregion
//#region node_modules/character-entities-legacy/index.json
var character_entities_legacy_exports = /* @__PURE__ */ __exportAll({
	AElig: () => "Æ",
	AMP: () => "&",
	Aacute: () => "Á",
	Acirc: () => "Â",
	Agrave: () => "À",
	Aring: () => "Å",
	Atilde: () => "Ã",
	Auml: () => "Ä",
	COPY: () => "©",
	Ccedil: () => "Ç",
	ETH: () => "Ð",
	Eacute: () => "É",
	Ecirc: () => "Ê",
	Egrave: () => "È",
	Euml: () => "Ë",
	GT: () => ">",
	Iacute: () => "Í",
	Icirc: () => "Î",
	Igrave: () => "Ì",
	Iuml: () => "Ï",
	LT: () => "<",
	Ntilde: () => "Ñ",
	Oacute: () => "Ó",
	Ocirc: () => "Ô",
	Ograve: () => "Ò",
	Oslash: () => "Ø",
	Otilde: () => "Õ",
	Ouml: () => "Ö",
	QUOT: () => "\"",
	REG: () => "®",
	THORN: () => "Þ",
	Uacute: () => "Ú",
	Ucirc: () => "Û",
	Ugrave: () => "Ù",
	Uuml: () => "Ü",
	Yacute: () => "Ý",
	aacute: () => "á",
	acirc: () => "â",
	acute: () => "´",
	aelig: () => "æ",
	agrave: () => "à",
	amp: () => "&",
	aring: () => "å",
	atilde: () => "ã",
	auml: () => "ä",
	brvbar: () => "¦",
	ccedil: () => "ç",
	cedil: () => "¸",
	cent: () => "¢",
	copy: () => "©",
	curren: () => "¤",
	default: () => character_entities_legacy_default,
	deg: () => "°",
	divide: () => "÷",
	eacute: () => "é",
	ecirc: () => "ê",
	egrave: () => "è",
	eth: () => "ð",
	euml: () => "ë",
	frac12: () => "½",
	frac14: () => "¼",
	frac34: () => "¾",
	gt: () => ">",
	iacute: () => "í",
	icirc: () => "î",
	iexcl: () => "¡",
	igrave: () => "ì",
	iquest: () => "¿",
	iuml: () => "ï",
	laquo: () => "«",
	lt: () => "<",
	macr: () => "¯",
	micro: () => "µ",
	middot: () => "·",
	nbsp: () => "\xA0",
	not: () => "¬",
	ntilde: () => "ñ",
	oacute: () => "ó",
	ocirc: () => "ô",
	ograve: () => "ò",
	ordf: () => "ª",
	ordm: () => "º",
	oslash: () => "ø",
	otilde: () => "õ",
	ouml: () => "ö",
	para: () => "¶",
	plusmn: () => "±",
	pound: () => "£",
	quot: () => "\"",
	raquo: () => "»",
	reg: () => "®",
	sect: () => "§",
	shy: () => "­",
	sup1: () => "¹",
	sup2: () => "²",
	sup3: () => "³",
	szlig: () => "ß",
	thorn: () => "þ",
	times: () => "×",
	uacute: () => "ú",
	ucirc: () => "û",
	ugrave: () => "ù",
	uml: () => "¨",
	uuml: () => "ü",
	yacute: () => "ý",
	yen: () => "¥",
	yuml: () => "ÿ"
}), character_entities_legacy_default;
var init_character_entities_legacy = __esmMin(() => {
	character_entities_legacy_default = {
		AElig: "Æ",
		AMP: "&",
		Aacute: "Á",
		Acirc: "Â",
		Agrave: "À",
		Aring: "Å",
		Atilde: "Ã",
		Auml: "Ä",
		COPY: "©",
		Ccedil: "Ç",
		ETH: "Ð",
		Eacute: "É",
		Ecirc: "Ê",
		Egrave: "È",
		Euml: "Ë",
		GT: ">",
		Iacute: "Í",
		Icirc: "Î",
		Igrave: "Ì",
		Iuml: "Ï",
		LT: "<",
		Ntilde: "Ñ",
		Oacute: "Ó",
		Ocirc: "Ô",
		Ograve: "Ò",
		Oslash: "Ø",
		Otilde: "Õ",
		Ouml: "Ö",
		QUOT: "\"",
		REG: "®",
		THORN: "Þ",
		Uacute: "Ú",
		Ucirc: "Û",
		Ugrave: "Ù",
		Uuml: "Ü",
		Yacute: "Ý",
		aacute: "á",
		acirc: "â",
		acute: "´",
		aelig: "æ",
		agrave: "à",
		amp: "&",
		aring: "å",
		atilde: "ã",
		auml: "ä",
		brvbar: "¦",
		ccedil: "ç",
		cedil: "¸",
		cent: "¢",
		copy: "©",
		curren: "¤",
		deg: "°",
		divide: "÷",
		eacute: "é",
		ecirc: "ê",
		egrave: "è",
		eth: "ð",
		euml: "ë",
		frac12: "½",
		frac14: "¼",
		frac34: "¾",
		gt: ">",
		iacute: "í",
		icirc: "î",
		iexcl: "¡",
		igrave: "ì",
		iquest: "¿",
		iuml: "ï",
		laquo: "«",
		lt: "<",
		macr: "¯",
		micro: "µ",
		middot: "·",
		nbsp: "\xA0",
		not: "¬",
		ntilde: "ñ",
		oacute: "ó",
		ocirc: "ô",
		ograve: "ò",
		ordf: "ª",
		ordm: "º",
		oslash: "ø",
		otilde: "õ",
		ouml: "ö",
		para: "¶",
		plusmn: "±",
		pound: "£",
		quot: "\"",
		raquo: "»",
		reg: "®",
		sect: "§",
		shy: "­",
		sup1: "¹",
		sup2: "²",
		sup3: "³",
		szlig: "ß",
		thorn: "þ",
		times: "×",
		uacute: "ú",
		ucirc: "û",
		ugrave: "ù",
		uml: "¨",
		uuml: "ü",
		yacute: "ý",
		yen: "¥",
		yuml: "ÿ"
	};
});
//#endregion
//#region node_modules/character-reference-invalid/index.json
var character_reference_invalid_exports = /* @__PURE__ */ __exportAll({ default: () => character_reference_invalid_default });
var character_reference_invalid_default;
var init_character_reference_invalid = __esmMin(() => {
	character_reference_invalid_default = {
		"0": "�",
		"128": "€",
		"130": "‚",
		"131": "ƒ",
		"132": "„",
		"133": "…",
		"134": "†",
		"135": "‡",
		"136": "ˆ",
		"137": "‰",
		"138": "Š",
		"139": "‹",
		"140": "Œ",
		"142": "Ž",
		"145": "‘",
		"146": "’",
		"147": "“",
		"148": "”",
		"149": "•",
		"150": "–",
		"151": "—",
		"152": "˜",
		"153": "™",
		"154": "š",
		"155": "›",
		"156": "œ",
		"158": "ž",
		"159": "Ÿ"
	};
});
//#endregion
//#region node_modules/is-decimal/index.js
var require_is_decimal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = decimal;
	function decimal(character) {
		var code = typeof character === "string" ? character.charCodeAt(0) : character;
		return code >= 48 && code <= 57;
	}
}));
//#endregion
//#region node_modules/is-hexadecimal/index.js
var require_is_hexadecimal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = hexadecimal;
	function hexadecimal(character) {
		var code = typeof character === "string" ? character.charCodeAt(0) : character;
		return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
	}
}));
//#endregion
//#region node_modules/is-alphabetical/index.js
var require_is_alphabetical = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = alphabetical;
	function alphabetical(character) {
		var code = typeof character === "string" ? character.charCodeAt(0) : character;
		return code >= 97 && code <= 122 || code >= 65 && code <= 90;
	}
}));
//#endregion
//#region node_modules/is-alphanumerical/index.js
var require_is_alphanumerical = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var alphabetical = require_is_alphabetical();
	var decimal = require_is_decimal();
	module.exports = alphanumerical;
	function alphanumerical(character) {
		return alphabetical(character) || decimal(character);
	}
}));
//#endregion
//#region node_modules/character-entities/index.json
var character_entities_exports = /* @__PURE__ */ __exportAll({
	AEli: () => "Æ",
	AElig: () => "Æ",
	AM: () => "&",
	AMP: () => "&",
	Aacut: () => "Á",
	Aacute: () => "Á",
	Abreve: () => "Ă",
	Acir: () => "Â",
	Acirc: () => "Â",
	Acy: () => "А",
	Afr: () => Afr,
	Agrav: () => "À",
	Agrave: () => "À",
	Alpha: () => "Α",
	Amacr: () => "Ā",
	And: () => "⩓",
	Aogon: () => "Ą",
	Aopf: () => Aopf,
	ApplyFunction: () => "⁡",
	Arin: () => "Å",
	Aring: () => "Å",
	Ascr: () => Ascr,
	Assign: () => "≔",
	Atild: () => "Ã",
	Atilde: () => "Ã",
	Aum: () => "Ä",
	Auml: () => "Ä",
	Backslash: () => "∖",
	Barv: () => "⫧",
	Barwed: () => "⌆",
	Bcy: () => "Б",
	Because: () => "∵",
	Bernoullis: () => "ℬ",
	Beta: () => "Β",
	Bfr: () => Bfr,
	Bopf: () => Bopf,
	Breve: () => "˘",
	Bscr: () => "ℬ",
	Bumpeq: () => "≎",
	CHcy: () => "Ч",
	COP: () => "©",
	COPY: () => "©",
	Cacute: () => "Ć",
	Cap: () => "⋒",
	CapitalDifferentialD: () => "ⅅ",
	Cayleys: () => "ℭ",
	Ccaron: () => "Č",
	Ccedi: () => "Ç",
	Ccedil: () => "Ç",
	Ccirc: () => "Ĉ",
	Cconint: () => "∰",
	Cdot: () => "Ċ",
	Cedilla: () => "¸",
	CenterDot: () => "·",
	Cfr: () => "ℭ",
	Chi: () => "Χ",
	CircleDot: () => "⊙",
	CircleMinus: () => "⊖",
	CirclePlus: () => "⊕",
	CircleTimes: () => "⊗",
	ClockwiseContourIntegral: () => "∲",
	CloseCurlyDoubleQuote: () => "”",
	CloseCurlyQuote: () => "’",
	Colon: () => "∷",
	Colone: () => "⩴",
	Congruent: () => "≡",
	Conint: () => "∯",
	ContourIntegral: () => "∮",
	Copf: () => "ℂ",
	Coproduct: () => "∐",
	CounterClockwiseContourIntegral: () => "∳",
	Cross: () => "⨯",
	Cscr: () => Cscr,
	Cup: () => "⋓",
	CupCap: () => "≍",
	DD: () => "ⅅ",
	DDotrahd: () => "⤑",
	DJcy: () => "Ђ",
	DScy: () => "Ѕ",
	DZcy: () => "Џ",
	Dagger: () => "‡",
	Darr: () => "↡",
	Dashv: () => "⫤",
	Dcaron: () => "Ď",
	Dcy: () => "Д",
	Del: () => "∇",
	Delta: () => "Δ",
	Dfr: () => Dfr,
	DiacriticalAcute: () => "´",
	DiacriticalDot: () => "˙",
	DiacriticalDoubleAcute: () => "˝",
	DiacriticalGrave: () => "`",
	DiacriticalTilde: () => "˜",
	Diamond: () => "⋄",
	DifferentialD: () => "ⅆ",
	Dopf: () => Dopf,
	Dot: () => "¨",
	DotDot: () => "⃜",
	DotEqual: () => "≐",
	DoubleContourIntegral: () => "∯",
	DoubleDot: () => "¨",
	DoubleDownArrow: () => "⇓",
	DoubleLeftArrow: () => "⇐",
	DoubleLeftRightArrow: () => "⇔",
	DoubleLeftTee: () => "⫤",
	DoubleLongLeftArrow: () => "⟸",
	DoubleLongLeftRightArrow: () => "⟺",
	DoubleLongRightArrow: () => "⟹",
	DoubleRightArrow: () => "⇒",
	DoubleRightTee: () => "⊨",
	DoubleUpArrow: () => "⇑",
	DoubleUpDownArrow: () => "⇕",
	DoubleVerticalBar: () => "∥",
	DownArrow: () => "↓",
	DownArrowBar: () => "⤓",
	DownArrowUpArrow: () => "⇵",
	DownBreve: () => "̑",
	DownLeftRightVector: () => "⥐",
	DownLeftTeeVector: () => "⥞",
	DownLeftVector: () => "↽",
	DownLeftVectorBar: () => "⥖",
	DownRightTeeVector: () => "⥟",
	DownRightVector: () => "⇁",
	DownRightVectorBar: () => "⥗",
	DownTee: () => "⊤",
	DownTeeArrow: () => "↧",
	Downarrow: () => "⇓",
	Dscr: () => Dscr,
	Dstrok: () => "Đ",
	ENG: () => "Ŋ",
	ET: () => "Ð",
	ETH: () => "Ð",
	Eacut: () => "É",
	Eacute: () => "É",
	Ecaron: () => "Ě",
	Ecir: () => "Ê",
	Ecirc: () => "Ê",
	Ecy: () => "Э",
	Edot: () => "Ė",
	Efr: () => Efr,
	Egrav: () => "È",
	Egrave: () => "È",
	Element: () => "∈",
	Emacr: () => "Ē",
	EmptySmallSquare: () => "◻",
	EmptyVerySmallSquare: () => "▫",
	Eogon: () => "Ę",
	Eopf: () => Eopf,
	Epsilon: () => "Ε",
	Equal: () => "⩵",
	EqualTilde: () => "≂",
	Equilibrium: () => "⇌",
	Escr: () => "ℰ",
	Esim: () => "⩳",
	Eta: () => "Η",
	Eum: () => "Ë",
	Euml: () => "Ë",
	Exists: () => "∃",
	ExponentialE: () => "ⅇ",
	Fcy: () => "Ф",
	Ffr: () => Ffr,
	FilledSmallSquare: () => "◼",
	FilledVerySmallSquare: () => "▪",
	Fopf: () => Fopf,
	ForAll: () => "∀",
	Fouriertrf: () => "ℱ",
	Fscr: () => "ℱ",
	G: () => ">",
	GJcy: () => "Ѓ",
	GT: () => ">",
	Gamma: () => "Γ",
	Gammad: () => "Ϝ",
	Gbreve: () => "Ğ",
	Gcedil: () => "Ģ",
	Gcirc: () => "Ĝ",
	Gcy: () => "Г",
	Gdot: () => "Ġ",
	Gfr: () => Gfr,
	Gg: () => "⋙",
	Gopf: () => Gopf,
	GreaterEqual: () => "≥",
	GreaterEqualLess: () => "⋛",
	GreaterFullEqual: () => "≧",
	GreaterGreater: () => "⪢",
	GreaterLess: () => "≷",
	GreaterSlantEqual: () => "⩾",
	GreaterTilde: () => "≳",
	Gscr: () => Gscr,
	Gt: () => "≫",
	HARDcy: () => "Ъ",
	Hacek: () => "ˇ",
	Hat: () => "^",
	Hcirc: () => "Ĥ",
	Hfr: () => "ℌ",
	HilbertSpace: () => "ℋ",
	Hopf: () => "ℍ",
	HorizontalLine: () => "─",
	Hscr: () => "ℋ",
	Hstrok: () => "Ħ",
	HumpDownHump: () => "≎",
	HumpEqual: () => "≏",
	IEcy: () => "Е",
	IJlig: () => "Ĳ",
	IOcy: () => "Ё",
	Iacut: () => "Í",
	Iacute: () => "Í",
	Icir: () => "Î",
	Icirc: () => "Î",
	Icy: () => "И",
	Idot: () => "İ",
	Ifr: () => "ℑ",
	Igrav: () => "Ì",
	Igrave: () => "Ì",
	Im: () => "ℑ",
	Imacr: () => "Ī",
	ImaginaryI: () => "ⅈ",
	Implies: () => "⇒",
	Int: () => "∬",
	Integral: () => "∫",
	Intersection: () => "⋂",
	InvisibleComma: () => "⁣",
	InvisibleTimes: () => "⁢",
	Iogon: () => "Į",
	Iopf: () => Iopf,
	Iota: () => "Ι",
	Iscr: () => "ℐ",
	Itilde: () => "Ĩ",
	Iukcy: () => "І",
	Ium: () => "Ï",
	Iuml: () => "Ï",
	Jcirc: () => "Ĵ",
	Jcy: () => "Й",
	Jfr: () => Jfr,
	Jopf: () => Jopf,
	Jscr: () => Jscr,
	Jsercy: () => "Ј",
	Jukcy: () => "Є",
	KHcy: () => "Х",
	KJcy: () => "Ќ",
	Kappa: () => "Κ",
	Kcedil: () => "Ķ",
	Kcy: () => "К",
	Kfr: () => Kfr,
	Kopf: () => Kopf,
	Kscr: () => Kscr,
	L: () => "<",
	LJcy: () => "Љ",
	LT: () => "<",
	Lacute: () => "Ĺ",
	Lambda: () => "Λ",
	Lang: () => "⟪",
	Laplacetrf: () => "ℒ",
	Larr: () => "↞",
	Lcaron: () => "Ľ",
	Lcedil: () => "Ļ",
	Lcy: () => "Л",
	LeftAngleBracket: () => "⟨",
	LeftArrow: () => "←",
	LeftArrowBar: () => "⇤",
	LeftArrowRightArrow: () => "⇆",
	LeftCeiling: () => "⌈",
	LeftDoubleBracket: () => "⟦",
	LeftDownTeeVector: () => "⥡",
	LeftDownVector: () => "⇃",
	LeftDownVectorBar: () => "⥙",
	LeftFloor: () => "⌊",
	LeftRightArrow: () => "↔",
	LeftRightVector: () => "⥎",
	LeftTee: () => "⊣",
	LeftTeeArrow: () => "↤",
	LeftTeeVector: () => "⥚",
	LeftTriangle: () => "⊲",
	LeftTriangleBar: () => "⧏",
	LeftTriangleEqual: () => "⊴",
	LeftUpDownVector: () => "⥑",
	LeftUpTeeVector: () => "⥠",
	LeftUpVector: () => "↿",
	LeftUpVectorBar: () => "⥘",
	LeftVector: () => "↼",
	LeftVectorBar: () => "⥒",
	Leftarrow: () => "⇐",
	Leftrightarrow: () => "⇔",
	LessEqualGreater: () => "⋚",
	LessFullEqual: () => "≦",
	LessGreater: () => "≶",
	LessLess: () => "⪡",
	LessSlantEqual: () => "⩽",
	LessTilde: () => "≲",
	Lfr: () => Lfr,
	Ll: () => "⋘",
	Lleftarrow: () => "⇚",
	Lmidot: () => "Ŀ",
	LongLeftArrow: () => "⟵",
	LongLeftRightArrow: () => "⟷",
	LongRightArrow: () => "⟶",
	Longleftarrow: () => "⟸",
	Longleftrightarrow: () => "⟺",
	Longrightarrow: () => "⟹",
	Lopf: () => Lopf,
	LowerLeftArrow: () => "↙",
	LowerRightArrow: () => "↘",
	Lscr: () => "ℒ",
	Lsh: () => "↰",
	Lstrok: () => "Ł",
	Lt: () => "≪",
	Map: () => "⤅",
	Mcy: () => "М",
	MediumSpace: () => " ",
	Mellintrf: () => "ℳ",
	Mfr: () => Mfr,
	MinusPlus: () => "∓",
	Mopf: () => Mopf,
	Mscr: () => "ℳ",
	Mu: () => "Μ",
	NJcy: () => "Њ",
	Nacute: () => "Ń",
	Ncaron: () => "Ň",
	Ncedil: () => "Ņ",
	Ncy: () => "Н",
	NegativeMediumSpace: () => "​",
	NegativeThickSpace: () => "​",
	NegativeThinSpace: () => "​",
	NegativeVeryThinSpace: () => "​",
	NestedGreaterGreater: () => "≫",
	NestedLessLess: () => "≪",
	NewLine: () => "\n",
	Nfr: () => Nfr,
	NoBreak: () => "⁠",
	NonBreakingSpace: () => "\xA0",
	Nopf: () => "ℕ",
	Not: () => "⫬",
	NotCongruent: () => "≢",
	NotCupCap: () => "≭",
	NotDoubleVerticalBar: () => "∦",
	NotElement: () => "∉",
	NotEqual: () => "≠",
	NotEqualTilde: () => NotEqualTilde,
	NotExists: () => "∄",
	NotGreater: () => "≯",
	NotGreaterEqual: () => "≱",
	NotGreaterFullEqual: () => NotGreaterFullEqual,
	NotGreaterGreater: () => NotGreaterGreater,
	NotGreaterLess: () => "≹",
	NotGreaterSlantEqual: () => NotGreaterSlantEqual,
	NotGreaterTilde: () => "≵",
	NotHumpDownHump: () => NotHumpDownHump,
	NotHumpEqual: () => NotHumpEqual,
	NotLeftTriangle: () => "⋪",
	NotLeftTriangleBar: () => NotLeftTriangleBar,
	NotLeftTriangleEqual: () => "⋬",
	NotLess: () => "≮",
	NotLessEqual: () => "≰",
	NotLessGreater: () => "≸",
	NotLessLess: () => NotLessLess,
	NotLessSlantEqual: () => NotLessSlantEqual,
	NotLessTilde: () => "≴",
	NotNestedGreaterGreater: () => NotNestedGreaterGreater,
	NotNestedLessLess: () => NotNestedLessLess,
	NotPrecedes: () => "⊀",
	NotPrecedesEqual: () => NotPrecedesEqual,
	NotPrecedesSlantEqual: () => "⋠",
	NotReverseElement: () => "∌",
	NotRightTriangle: () => "⋫",
	NotRightTriangleBar: () => NotRightTriangleBar,
	NotRightTriangleEqual: () => "⋭",
	NotSquareSubset: () => NotSquareSubset,
	NotSquareSubsetEqual: () => "⋢",
	NotSquareSuperset: () => NotSquareSuperset,
	NotSquareSupersetEqual: () => "⋣",
	NotSubset: () => NotSubset,
	NotSubsetEqual: () => "⊈",
	NotSucceeds: () => "⊁",
	NotSucceedsEqual: () => NotSucceedsEqual,
	NotSucceedsSlantEqual: () => "⋡",
	NotSucceedsTilde: () => NotSucceedsTilde,
	NotSuperset: () => NotSuperset,
	NotSupersetEqual: () => "⊉",
	NotTilde: () => "≁",
	NotTildeEqual: () => "≄",
	NotTildeFullEqual: () => "≇",
	NotTildeTilde: () => "≉",
	NotVerticalBar: () => "∤",
	Nscr: () => Nscr,
	Ntild: () => "Ñ",
	Ntilde: () => "Ñ",
	Nu: () => "Ν",
	OElig: () => "Œ",
	Oacut: () => "Ó",
	Oacute: () => "Ó",
	Ocir: () => "Ô",
	Ocirc: () => "Ô",
	Ocy: () => "О",
	Odblac: () => "Ő",
	Ofr: () => Ofr,
	Ograv: () => "Ò",
	Ograve: () => "Ò",
	Omacr: () => "Ō",
	Omega: () => "Ω",
	Omicron: () => "Ο",
	Oopf: () => Oopf,
	OpenCurlyDoubleQuote: () => "“",
	OpenCurlyQuote: () => "‘",
	Or: () => "⩔",
	Oscr: () => Oscr,
	Oslas: () => "Ø",
	Oslash: () => "Ø",
	Otild: () => "Õ",
	Otilde: () => "Õ",
	Otimes: () => "⨷",
	Oum: () => "Ö",
	Ouml: () => "Ö",
	OverBar: () => "‾",
	OverBrace: () => "⏞",
	OverBracket: () => "⎴",
	OverParenthesis: () => "⏜",
	PartialD: () => "∂",
	Pcy: () => "П",
	Pfr: () => Pfr,
	Phi: () => "Φ",
	Pi: () => "Π",
	PlusMinus: () => "±",
	Poincareplane: () => "ℌ",
	Popf: () => "ℙ",
	Pr: () => "⪻",
	Precedes: () => "≺",
	PrecedesEqual: () => "⪯",
	PrecedesSlantEqual: () => "≼",
	PrecedesTilde: () => "≾",
	Prime: () => "″",
	Product: () => "∏",
	Proportion: () => "∷",
	Proportional: () => "∝",
	Pscr: () => Pscr,
	Psi: () => "Ψ",
	QUO: () => "\"",
	QUOT: () => "\"",
	Qfr: () => Qfr,
	Qopf: () => "ℚ",
	Qscr: () => Qscr,
	RBarr: () => "⤐",
	RE: () => "®",
	REG: () => "®",
	Racute: () => "Ŕ",
	Rang: () => "⟫",
	Rarr: () => "↠",
	Rarrtl: () => "⤖",
	Rcaron: () => "Ř",
	Rcedil: () => "Ŗ",
	Rcy: () => "Р",
	Re: () => "ℜ",
	ReverseElement: () => "∋",
	ReverseEquilibrium: () => "⇋",
	ReverseUpEquilibrium: () => "⥯",
	Rfr: () => "ℜ",
	Rho: () => "Ρ",
	RightAngleBracket: () => "⟩",
	RightArrow: () => "→",
	RightArrowBar: () => "⇥",
	RightArrowLeftArrow: () => "⇄",
	RightCeiling: () => "⌉",
	RightDoubleBracket: () => "⟧",
	RightDownTeeVector: () => "⥝",
	RightDownVector: () => "⇂",
	RightDownVectorBar: () => "⥕",
	RightFloor: () => "⌋",
	RightTee: () => "⊢",
	RightTeeArrow: () => "↦",
	RightTeeVector: () => "⥛",
	RightTriangle: () => "⊳",
	RightTriangleBar: () => "⧐",
	RightTriangleEqual: () => "⊵",
	RightUpDownVector: () => "⥏",
	RightUpTeeVector: () => "⥜",
	RightUpVector: () => "↾",
	RightUpVectorBar: () => "⥔",
	RightVector: () => "⇀",
	RightVectorBar: () => "⥓",
	Rightarrow: () => "⇒",
	Ropf: () => "ℝ",
	RoundImplies: () => "⥰",
	Rrightarrow: () => "⇛",
	Rscr: () => "ℛ",
	Rsh: () => "↱",
	RuleDelayed: () => "⧴",
	SHCHcy: () => "Щ",
	SHcy: () => "Ш",
	SOFTcy: () => "Ь",
	Sacute: () => "Ś",
	Sc: () => "⪼",
	Scaron: () => "Š",
	Scedil: () => "Ş",
	Scirc: () => "Ŝ",
	Scy: () => "С",
	Sfr: () => Sfr,
	ShortDownArrow: () => "↓",
	ShortLeftArrow: () => "←",
	ShortRightArrow: () => "→",
	ShortUpArrow: () => "↑",
	Sigma: () => "Σ",
	SmallCircle: () => "∘",
	Sopf: () => Sopf,
	Sqrt: () => "√",
	Square: () => "□",
	SquareIntersection: () => "⊓",
	SquareSubset: () => "⊏",
	SquareSubsetEqual: () => "⊑",
	SquareSuperset: () => "⊐",
	SquareSupersetEqual: () => "⊒",
	SquareUnion: () => "⊔",
	Sscr: () => Sscr,
	Star: () => "⋆",
	Sub: () => "⋐",
	Subset: () => "⋐",
	SubsetEqual: () => "⊆",
	Succeeds: () => "≻",
	SucceedsEqual: () => "⪰",
	SucceedsSlantEqual: () => "≽",
	SucceedsTilde: () => "≿",
	SuchThat: () => "∋",
	Sum: () => "∑",
	Sup: () => "⋑",
	Superset: () => "⊃",
	SupersetEqual: () => "⊇",
	Supset: () => "⋑",
	THOR: () => "Þ",
	THORN: () => "Þ",
	TRADE: () => "™",
	TSHcy: () => "Ћ",
	TScy: () => "Ц",
	Tab: () => "	",
	Tau: () => "Τ",
	Tcaron: () => "Ť",
	Tcedil: () => "Ţ",
	Tcy: () => "Т",
	Tfr: () => Tfr,
	Therefore: () => "∴",
	Theta: () => "Θ",
	ThickSpace: () => ThickSpace,
	ThinSpace: () => " ",
	Tilde: () => "∼",
	TildeEqual: () => "≃",
	TildeFullEqual: () => "≅",
	TildeTilde: () => "≈",
	Topf: () => Topf,
	TripleDot: () => "⃛",
	Tscr: () => Tscr,
	Tstrok: () => "Ŧ",
	Uacut: () => "Ú",
	Uacute: () => "Ú",
	Uarr: () => "↟",
	Uarrocir: () => "⥉",
	Ubrcy: () => "Ў",
	Ubreve: () => "Ŭ",
	Ucir: () => "Û",
	Ucirc: () => "Û",
	Ucy: () => "У",
	Udblac: () => "Ű",
	Ufr: () => Ufr,
	Ugrav: () => "Ù",
	Ugrave: () => "Ù",
	Umacr: () => "Ū",
	UnderBar: () => "_",
	UnderBrace: () => "⏟",
	UnderBracket: () => "⎵",
	UnderParenthesis: () => "⏝",
	Union: () => "⋃",
	UnionPlus: () => "⊎",
	Uogon: () => "Ų",
	Uopf: () => Uopf,
	UpArrow: () => "↑",
	UpArrowBar: () => "⤒",
	UpArrowDownArrow: () => "⇅",
	UpDownArrow: () => "↕",
	UpEquilibrium: () => "⥮",
	UpTee: () => "⊥",
	UpTeeArrow: () => "↥",
	Uparrow: () => "⇑",
	Updownarrow: () => "⇕",
	UpperLeftArrow: () => "↖",
	UpperRightArrow: () => "↗",
	Upsi: () => "ϒ",
	Upsilon: () => "Υ",
	Uring: () => "Ů",
	Uscr: () => Uscr,
	Utilde: () => "Ũ",
	Uum: () => "Ü",
	Uuml: () => "Ü",
	VDash: () => "⊫",
	Vbar: () => "⫫",
	Vcy: () => "В",
	Vdash: () => "⊩",
	Vdashl: () => "⫦",
	Vee: () => "⋁",
	Verbar: () => "‖",
	Vert: () => "‖",
	VerticalBar: () => "∣",
	VerticalLine: () => "|",
	VerticalSeparator: () => "❘",
	VerticalTilde: () => "≀",
	VeryThinSpace: () => " ",
	Vfr: () => Vfr,
	Vopf: () => Vopf,
	Vscr: () => Vscr,
	Vvdash: () => "⊪",
	Wcirc: () => "Ŵ",
	Wedge: () => "⋀",
	Wfr: () => Wfr,
	Wopf: () => Wopf,
	Wscr: () => Wscr,
	Xfr: () => Xfr,
	Xi: () => "Ξ",
	Xopf: () => Xopf,
	Xscr: () => Xscr,
	YAcy: () => "Я",
	YIcy: () => "Ї",
	YUcy: () => "Ю",
	Yacut: () => "Ý",
	Yacute: () => "Ý",
	Ycirc: () => "Ŷ",
	Ycy: () => "Ы",
	Yfr: () => Yfr,
	Yopf: () => Yopf,
	Yscr: () => Yscr,
	Yuml: () => "Ÿ",
	ZHcy: () => "Ж",
	Zacute: () => "Ź",
	Zcaron: () => "Ž",
	Zcy: () => "З",
	Zdot: () => "Ż",
	ZeroWidthSpace: () => "​",
	Zeta: () => "Ζ",
	Zfr: () => "ℨ",
	Zopf: () => "ℤ",
	Zscr: () => Zscr,
	aacut: () => "á",
	aacute: () => "á",
	abreve: () => "ă",
	ac: () => "∾",
	acE: () => acE,
	acd: () => "∿",
	acir: () => "â",
	acirc: () => "â",
	acut: () => "´",
	acute: () => "´",
	acy: () => "а",
	aeli: () => "æ",
	aelig: () => "æ",
	af: () => "⁡",
	afr: () => afr,
	agrav: () => "à",
	agrave: () => "à",
	alefsym: () => "ℵ",
	aleph: () => "ℵ",
	alpha: () => "α",
	am: () => "&",
	amacr: () => "ā",
	amalg: () => "⨿",
	amp: () => "&",
	and: () => "∧",
	andand: () => "⩕",
	andd: () => "⩜",
	andslope: () => "⩘",
	andv: () => "⩚",
	ang: () => "∠",
	ange: () => "⦤",
	angle: () => "∠",
	angmsd: () => "∡",
	angmsdaa: () => "⦨",
	angmsdab: () => "⦩",
	angmsdac: () => "⦪",
	angmsdad: () => "⦫",
	angmsdae: () => "⦬",
	angmsdaf: () => "⦭",
	angmsdag: () => "⦮",
	angmsdah: () => "⦯",
	angrt: () => "∟",
	angrtvb: () => "⊾",
	angrtvbd: () => "⦝",
	angsph: () => "∢",
	angst: () => "Å",
	angzarr: () => "⍼",
	aogon: () => "ą",
	aopf: () => aopf,
	ap: () => "≈",
	apE: () => "⩰",
	apacir: () => "⩯",
	ape: () => "≊",
	apid: () => "≋",
	apos: () => "'",
	approx: () => "≈",
	approxeq: () => "≊",
	arin: () => "å",
	aring: () => "å",
	ascr: () => ascr,
	ast: () => "*",
	asymp: () => "≈",
	asympeq: () => "≍",
	atild: () => "ã",
	atilde: () => "ã",
	aum: () => "ä",
	auml: () => "ä",
	awconint: () => "∳",
	awint: () => "⨑",
	bNot: () => "⫭",
	backcong: () => "≌",
	backepsilon: () => "϶",
	backprime: () => "‵",
	backsim: () => "∽",
	backsimeq: () => "⋍",
	barvee: () => "⊽",
	barwed: () => "⌅",
	barwedge: () => "⌅",
	bbrk: () => "⎵",
	bbrktbrk: () => "⎶",
	bcong: () => "≌",
	bcy: () => "б",
	bdquo: () => "„",
	becaus: () => "∵",
	because: () => "∵",
	bemptyv: () => "⦰",
	bepsi: () => "϶",
	bernou: () => "ℬ",
	beta: () => "β",
	beth: () => "ℶ",
	between: () => "≬",
	bfr: () => bfr,
	bigcap: () => "⋂",
	bigcirc: () => "◯",
	bigcup: () => "⋃",
	bigodot: () => "⨀",
	bigoplus: () => "⨁",
	bigotimes: () => "⨂",
	bigsqcup: () => "⨆",
	bigstar: () => "★",
	bigtriangledown: () => "▽",
	bigtriangleup: () => "△",
	biguplus: () => "⨄",
	bigvee: () => "⋁",
	bigwedge: () => "⋀",
	bkarow: () => "⤍",
	blacklozenge: () => "⧫",
	blacksquare: () => "▪",
	blacktriangle: () => "▴",
	blacktriangledown: () => "▾",
	blacktriangleleft: () => "◂",
	blacktriangleright: () => "▸",
	blank: () => "␣",
	blk12: () => "▒",
	blk14: () => "░",
	blk34: () => "▓",
	block: () => "█",
	bne: () => bne,
	bnequiv: () => bnequiv,
	bnot: () => "⌐",
	bopf: () => bopf,
	bot: () => "⊥",
	bottom: () => "⊥",
	bowtie: () => "⋈",
	boxDL: () => "╗",
	boxDR: () => "╔",
	boxDl: () => "╖",
	boxDr: () => "╓",
	boxH: () => "═",
	boxHD: () => "╦",
	boxHU: () => "╩",
	boxHd: () => "╤",
	boxHu: () => "╧",
	boxUL: () => "╝",
	boxUR: () => "╚",
	boxUl: () => "╜",
	boxUr: () => "╙",
	boxV: () => "║",
	boxVH: () => "╬",
	boxVL: () => "╣",
	boxVR: () => "╠",
	boxVh: () => "╫",
	boxVl: () => "╢",
	boxVr: () => "╟",
	boxbox: () => "⧉",
	boxdL: () => "╕",
	boxdR: () => "╒",
	boxdl: () => "┐",
	boxdr: () => "┌",
	boxh: () => "─",
	boxhD: () => "╥",
	boxhU: () => "╨",
	boxhd: () => "┬",
	boxhu: () => "┴",
	boxminus: () => "⊟",
	boxplus: () => "⊞",
	boxtimes: () => "⊠",
	boxuL: () => "╛",
	boxuR: () => "╘",
	boxul: () => "┘",
	boxur: () => "└",
	boxv: () => "│",
	boxvH: () => "╪",
	boxvL: () => "╡",
	boxvR: () => "╞",
	boxvh: () => "┼",
	boxvl: () => "┤",
	boxvr: () => "├",
	bprime: () => "‵",
	breve: () => "˘",
	brvba: () => "¦",
	brvbar: () => "¦",
	bscr: () => bscr,
	bsemi: () => "⁏",
	bsim: () => "∽",
	bsime: () => "⋍",
	bsol: () => "\\",
	bsolb: () => "⧅",
	bsolhsub: () => "⟈",
	bull: () => "•",
	bullet: () => "•",
	bump: () => "≎",
	bumpE: () => "⪮",
	bumpe: () => "≏",
	bumpeq: () => "≏",
	cacute: () => "ć",
	cap: () => "∩",
	capand: () => "⩄",
	capbrcup: () => "⩉",
	capcap: () => "⩋",
	capcup: () => "⩇",
	capdot: () => "⩀",
	caps: () => caps,
	caret: () => "⁁",
	caron: () => "ˇ",
	ccaps: () => "⩍",
	ccaron: () => "č",
	ccedi: () => "ç",
	ccedil: () => "ç",
	ccirc: () => "ĉ",
	ccups: () => "⩌",
	ccupssm: () => "⩐",
	cdot: () => "ċ",
	cedi: () => "¸",
	cedil: () => "¸",
	cemptyv: () => "⦲",
	cen: () => "¢",
	cent: () => "¢",
	centerdot: () => "·",
	cfr: () => cfr,
	chcy: () => "ч",
	check: () => "✓",
	checkmark: () => "✓",
	chi: () => "χ",
	cir: () => "○",
	cirE: () => "⧃",
	circ: () => "ˆ",
	circeq: () => "≗",
	circlearrowleft: () => "↺",
	circlearrowright: () => "↻",
	circledR: () => "®",
	circledS: () => "Ⓢ",
	circledast: () => "⊛",
	circledcirc: () => "⊚",
	circleddash: () => "⊝",
	cire: () => "≗",
	cirfnint: () => "⨐",
	cirmid: () => "⫯",
	cirscir: () => "⧂",
	clubs: () => "♣",
	clubsuit: () => "♣",
	colon: () => ":",
	colone: () => "≔",
	coloneq: () => "≔",
	comma: () => ",",
	commat: () => "@",
	comp: () => "∁",
	compfn: () => "∘",
	complement: () => "∁",
	complexes: () => "ℂ",
	cong: () => "≅",
	congdot: () => "⩭",
	conint: () => "∮",
	cop: () => "©",
	copf: () => copf,
	coprod: () => "∐",
	copy: () => "©",
	copysr: () => "℗",
	crarr: () => "↵",
	cross: () => "✗",
	cscr: () => cscr,
	csub: () => "⫏",
	csube: () => "⫑",
	csup: () => "⫐",
	csupe: () => "⫒",
	ctdot: () => "⋯",
	cudarrl: () => "⤸",
	cudarrr: () => "⤵",
	cuepr: () => "⋞",
	cuesc: () => "⋟",
	cularr: () => "↶",
	cularrp: () => "⤽",
	cup: () => "∪",
	cupbrcap: () => "⩈",
	cupcap: () => "⩆",
	cupcup: () => "⩊",
	cupdot: () => "⊍",
	cupor: () => "⩅",
	cups: () => cups,
	curarr: () => "↷",
	curarrm: () => "⤼",
	curlyeqprec: () => "⋞",
	curlyeqsucc: () => "⋟",
	curlyvee: () => "⋎",
	curlywedge: () => "⋏",
	curre: () => "¤",
	curren: () => "¤",
	curvearrowleft: () => "↶",
	curvearrowright: () => "↷",
	cuvee: () => "⋎",
	cuwed: () => "⋏",
	cwconint: () => "∲",
	cwint: () => "∱",
	cylcty: () => "⌭",
	dArr: () => "⇓",
	dHar: () => "⥥",
	dagger: () => "†",
	daleth: () => "ℸ",
	darr: () => "↓",
	dash: () => "‐",
	dashv: () => "⊣",
	dbkarow: () => "⤏",
	dblac: () => "˝",
	dcaron: () => "ď",
	dcy: () => "д",
	dd: () => "ⅆ",
	ddagger: () => "‡",
	ddarr: () => "⇊",
	ddotseq: () => "⩷",
	de: () => "°",
	default: () => character_entities_default,
	deg: () => "°",
	delta: () => "δ",
	demptyv: () => "⦱",
	dfisht: () => "⥿",
	dfr: () => dfr,
	dharl: () => "⇃",
	dharr: () => "⇂",
	diam: () => "⋄",
	diamond: () => "⋄",
	diamondsuit: () => "♦",
	diams: () => "♦",
	die: () => "¨",
	digamma: () => "ϝ",
	disin: () => "⋲",
	div: () => "÷",
	divid: () => "÷",
	divide: () => "÷",
	divideontimes: () => "⋇",
	divonx: () => "⋇",
	djcy: () => "ђ",
	dlcorn: () => "⌞",
	dlcrop: () => "⌍",
	dollar: () => "$",
	dopf: () => dopf,
	dot: () => "˙",
	doteq: () => "≐",
	doteqdot: () => "≑",
	dotminus: () => "∸",
	dotplus: () => "∔",
	dotsquare: () => "⊡",
	doublebarwedge: () => "⌆",
	downarrow: () => "↓",
	downdownarrows: () => "⇊",
	downharpoonleft: () => "⇃",
	downharpoonright: () => "⇂",
	drbkarow: () => "⤐",
	drcorn: () => "⌟",
	drcrop: () => "⌌",
	dscr: () => dscr,
	dscy: () => "ѕ",
	dsol: () => "⧶",
	dstrok: () => "đ",
	dtdot: () => "⋱",
	dtri: () => "▿",
	dtrif: () => "▾",
	duarr: () => "⇵",
	duhar: () => "⥯",
	dwangle: () => "⦦",
	dzcy: () => "џ",
	dzigrarr: () => "⟿",
	eDDot: () => "⩷",
	eDot: () => "≑",
	eacut: () => "é",
	eacute: () => "é",
	easter: () => "⩮",
	ecaron: () => "ě",
	ecir: () => "ê",
	ecirc: () => "ê",
	ecolon: () => "≕",
	ecy: () => "э",
	edot: () => "ė",
	ee: () => "ⅇ",
	efDot: () => "≒",
	efr: () => efr,
	eg: () => "⪚",
	egrav: () => "è",
	egrave: () => "è",
	egs: () => "⪖",
	egsdot: () => "⪘",
	el: () => "⪙",
	elinters: () => "⏧",
	ell: () => "ℓ",
	els: () => "⪕",
	elsdot: () => "⪗",
	emacr: () => "ē",
	empty: () => "∅",
	emptyset: () => "∅",
	emptyv: () => "∅",
	emsp: () => " ",
	emsp13: () => " ",
	emsp14: () => " ",
	eng: () => "ŋ",
	ensp: () => " ",
	eogon: () => "ę",
	eopf: () => eopf,
	epar: () => "⋕",
	eparsl: () => "⧣",
	eplus: () => "⩱",
	epsi: () => "ε",
	epsilon: () => "ε",
	epsiv: () => "ϵ",
	eqcirc: () => "≖",
	eqcolon: () => "≕",
	eqsim: () => "≂",
	eqslantgtr: () => "⪖",
	eqslantless: () => "⪕",
	equals: () => "=",
	equest: () => "≟",
	equiv: () => "≡",
	equivDD: () => "⩸",
	eqvparsl: () => "⧥",
	erDot: () => "≓",
	erarr: () => "⥱",
	escr: () => "ℯ",
	esdot: () => "≐",
	esim: () => "≂",
	et: () => "ð",
	eta: () => "η",
	eth: () => "ð",
	eum: () => "ë",
	euml: () => "ë",
	euro: () => "€",
	excl: () => "!",
	exist: () => "∃",
	expectation: () => "ℰ",
	exponentiale: () => "ⅇ",
	fallingdotseq: () => "≒",
	fcy: () => "ф",
	female: () => "♀",
	ffilig: () => "ﬃ",
	fflig: () => "ﬀ",
	ffllig: () => "ﬄ",
	ffr: () => ffr,
	filig: () => "ﬁ",
	fjlig: () => "fj",
	flat: () => "♭",
	fllig: () => "ﬂ",
	fltns: () => "▱",
	fnof: () => "ƒ",
	fopf: () => fopf,
	forall: () => "∀",
	fork: () => "⋔",
	forkv: () => "⫙",
	fpartint: () => "⨍",
	frac1: () => "¼",
	frac12: () => "½",
	frac13: () => "⅓",
	frac14: () => "¼",
	frac15: () => "⅕",
	frac16: () => "⅙",
	frac18: () => "⅛",
	frac23: () => "⅔",
	frac25: () => "⅖",
	frac3: () => "¾",
	frac34: () => "¾",
	frac35: () => "⅗",
	frac38: () => "⅜",
	frac45: () => "⅘",
	frac56: () => "⅚",
	frac58: () => "⅝",
	frac78: () => "⅞",
	frasl: () => "⁄",
	frown: () => "⌢",
	fscr: () => fscr,
	g: () => ">",
	gE: () => "≧",
	gEl: () => "⪌",
	gacute: () => "ǵ",
	gamma: () => "γ",
	gammad: () => "ϝ",
	gap: () => "⪆",
	gbreve: () => "ğ",
	gcirc: () => "ĝ",
	gcy: () => "г",
	gdot: () => "ġ",
	ge: () => "≥",
	gel: () => "⋛",
	geq: () => "≥",
	geqq: () => "≧",
	geqslant: () => "⩾",
	ges: () => "⩾",
	gescc: () => "⪩",
	gesdot: () => "⪀",
	gesdoto: () => "⪂",
	gesdotol: () => "⪄",
	gesl: () => gesl,
	gesles: () => "⪔",
	gfr: () => gfr,
	gg: () => "≫",
	ggg: () => "⋙",
	gimel: () => "ℷ",
	gjcy: () => "ѓ",
	gl: () => "≷",
	glE: () => "⪒",
	gla: () => "⪥",
	glj: () => "⪤",
	gnE: () => "≩",
	gnap: () => "⪊",
	gnapprox: () => "⪊",
	gne: () => "⪈",
	gneq: () => "⪈",
	gneqq: () => "≩",
	gnsim: () => "⋧",
	gopf: () => gopf,
	grave: () => "`",
	gscr: () => "ℊ",
	gsim: () => "≳",
	gsime: () => "⪎",
	gsiml: () => "⪐",
	gt: () => ">",
	gtcc: () => "⪧",
	gtcir: () => "⩺",
	gtdot: () => "⋗",
	gtlPar: () => "⦕",
	gtquest: () => "⩼",
	gtrapprox: () => "⪆",
	gtrarr: () => "⥸",
	gtrdot: () => "⋗",
	gtreqless: () => "⋛",
	gtreqqless: () => "⪌",
	gtrless: () => "≷",
	gtrsim: () => "≳",
	gvertneqq: () => gvertneqq,
	gvnE: () => gvnE,
	hArr: () => "⇔",
	hairsp: () => " ",
	half: () => "½",
	hamilt: () => "ℋ",
	hardcy: () => "ъ",
	harr: () => "↔",
	harrcir: () => "⥈",
	harrw: () => "↭",
	hbar: () => "ℏ",
	hcirc: () => "ĥ",
	hearts: () => "♥",
	heartsuit: () => "♥",
	hellip: () => "…",
	hercon: () => "⊹",
	hfr: () => hfr,
	hksearow: () => "⤥",
	hkswarow: () => "⤦",
	hoarr: () => "⇿",
	homtht: () => "∻",
	hookleftarrow: () => "↩",
	hookrightarrow: () => "↪",
	hopf: () => hopf,
	horbar: () => "―",
	hscr: () => hscr,
	hslash: () => "ℏ",
	hstrok: () => "ħ",
	hybull: () => "⁃",
	hyphen: () => "‐",
	iacut: () => "í",
	iacute: () => "í",
	ic: () => "⁣",
	icir: () => "î",
	icirc: () => "î",
	icy: () => "и",
	iecy: () => "е",
	iexc: () => "¡",
	iexcl: () => "¡",
	iff: () => "⇔",
	ifr: () => ifr,
	igrav: () => "ì",
	igrave: () => "ì",
	ii: () => "ⅈ",
	iiiint: () => "⨌",
	iiint: () => "∭",
	iinfin: () => "⧜",
	iiota: () => "℩",
	ijlig: () => "ĳ",
	imacr: () => "ī",
	image: () => "ℑ",
	imagline: () => "ℐ",
	imagpart: () => "ℑ",
	imath: () => "ı",
	imof: () => "⊷",
	imped: () => "Ƶ",
	incare: () => "℅",
	infin: () => "∞",
	infintie: () => "⧝",
	inodot: () => "ı",
	int: () => "∫",
	intcal: () => "⊺",
	integers: () => "ℤ",
	intercal: () => "⊺",
	intlarhk: () => "⨗",
	intprod: () => "⨼",
	iocy: () => "ё",
	iogon: () => "į",
	iopf: () => iopf,
	iota: () => "ι",
	iprod: () => "⨼",
	iques: () => "¿",
	iquest: () => "¿",
	iscr: () => iscr,
	isin: () => "∈",
	isinE: () => "⋹",
	isindot: () => "⋵",
	isins: () => "⋴",
	isinsv: () => "⋳",
	isinv: () => "∈",
	it: () => "⁢",
	itilde: () => "ĩ",
	iukcy: () => "і",
	ium: () => "ï",
	iuml: () => "ï",
	jcirc: () => "ĵ",
	jcy: () => "й",
	jfr: () => jfr,
	jmath: () => "ȷ",
	jopf: () => jopf,
	jscr: () => jscr,
	jsercy: () => "ј",
	jukcy: () => "є",
	kappa: () => "κ",
	kappav: () => "ϰ",
	kcedil: () => "ķ",
	kcy: () => "к",
	kfr: () => kfr,
	kgreen: () => "ĸ",
	khcy: () => "х",
	kjcy: () => "ќ",
	kopf: () => kopf,
	kscr: () => kscr,
	l: () => "<",
	lAarr: () => "⇚",
	lArr: () => "⇐",
	lAtail: () => "⤛",
	lBarr: () => "⤎",
	lE: () => "≦",
	lEg: () => "⪋",
	lHar: () => "⥢",
	lacute: () => "ĺ",
	laemptyv: () => "⦴",
	lagran: () => "ℒ",
	lambda: () => "λ",
	lang: () => "⟨",
	langd: () => "⦑",
	langle: () => "⟨",
	lap: () => "⪅",
	laqu: () => "«",
	laquo: () => "«",
	larr: () => "←",
	larrb: () => "⇤",
	larrbfs: () => "⤟",
	larrfs: () => "⤝",
	larrhk: () => "↩",
	larrlp: () => "↫",
	larrpl: () => "⤹",
	larrsim: () => "⥳",
	larrtl: () => "↢",
	lat: () => "⪫",
	latail: () => "⤙",
	late: () => "⪭",
	lates: () => lates,
	lbarr: () => "⤌",
	lbbrk: () => "❲",
	lbrace: () => "{",
	lbrack: () => "[",
	lbrke: () => "⦋",
	lbrksld: () => "⦏",
	lbrkslu: () => "⦍",
	lcaron: () => "ľ",
	lcedil: () => "ļ",
	lceil: () => "⌈",
	lcub: () => "{",
	lcy: () => "л",
	ldca: () => "⤶",
	ldquo: () => "“",
	ldquor: () => "„",
	ldrdhar: () => "⥧",
	ldrushar: () => "⥋",
	ldsh: () => "↲",
	le: () => "≤",
	leftarrow: () => "←",
	leftarrowtail: () => "↢",
	leftharpoondown: () => "↽",
	leftharpoonup: () => "↼",
	leftleftarrows: () => "⇇",
	leftrightarrow: () => "↔",
	leftrightarrows: () => "⇆",
	leftrightharpoons: () => "⇋",
	leftrightsquigarrow: () => "↭",
	leftthreetimes: () => "⋋",
	leg: () => "⋚",
	leq: () => "≤",
	leqq: () => "≦",
	leqslant: () => "⩽",
	les: () => "⩽",
	lescc: () => "⪨",
	lesdot: () => "⩿",
	lesdoto: () => "⪁",
	lesdotor: () => "⪃",
	lesg: () => lesg,
	lesges: () => "⪓",
	lessapprox: () => "⪅",
	lessdot: () => "⋖",
	lesseqgtr: () => "⋚",
	lesseqqgtr: () => "⪋",
	lessgtr: () => "≶",
	lesssim: () => "≲",
	lfisht: () => "⥼",
	lfloor: () => "⌊",
	lfr: () => lfr,
	lg: () => "≶",
	lgE: () => "⪑",
	lhard: () => "↽",
	lharu: () => "↼",
	lharul: () => "⥪",
	lhblk: () => "▄",
	ljcy: () => "љ",
	ll: () => "≪",
	llarr: () => "⇇",
	llcorner: () => "⌞",
	llhard: () => "⥫",
	lltri: () => "◺",
	lmidot: () => "ŀ",
	lmoust: () => "⎰",
	lmoustache: () => "⎰",
	lnE: () => "≨",
	lnap: () => "⪉",
	lnapprox: () => "⪉",
	lne: () => "⪇",
	lneq: () => "⪇",
	lneqq: () => "≨",
	lnsim: () => "⋦",
	loang: () => "⟬",
	loarr: () => "⇽",
	lobrk: () => "⟦",
	longleftarrow: () => "⟵",
	longleftrightarrow: () => "⟷",
	longmapsto: () => "⟼",
	longrightarrow: () => "⟶",
	looparrowleft: () => "↫",
	looparrowright: () => "↬",
	lopar: () => "⦅",
	lopf: () => lopf,
	loplus: () => "⨭",
	lotimes: () => "⨴",
	lowast: () => "∗",
	lowbar: () => "_",
	loz: () => "◊",
	lozenge: () => "◊",
	lozf: () => "⧫",
	lpar: () => "(",
	lparlt: () => "⦓",
	lrarr: () => "⇆",
	lrcorner: () => "⌟",
	lrhar: () => "⇋",
	lrhard: () => "⥭",
	lrm: () => "‎",
	lrtri: () => "⊿",
	lsaquo: () => "‹",
	lscr: () => lscr,
	lsh: () => "↰",
	lsim: () => "≲",
	lsime: () => "⪍",
	lsimg: () => "⪏",
	lsqb: () => "[",
	lsquo: () => "‘",
	lsquor: () => "‚",
	lstrok: () => "ł",
	lt: () => "<",
	ltcc: () => "⪦",
	ltcir: () => "⩹",
	ltdot: () => "⋖",
	lthree: () => "⋋",
	ltimes: () => "⋉",
	ltlarr: () => "⥶",
	ltquest: () => "⩻",
	ltrPar: () => "⦖",
	ltri: () => "◃",
	ltrie: () => "⊴",
	ltrif: () => "◂",
	lurdshar: () => "⥊",
	luruhar: () => "⥦",
	lvertneqq: () => lvertneqq,
	lvnE: () => lvnE,
	mDDot: () => "∺",
	mac: () => "¯",
	macr: () => "¯",
	male: () => "♂",
	malt: () => "✠",
	maltese: () => "✠",
	map: () => "↦",
	mapsto: () => "↦",
	mapstodown: () => "↧",
	mapstoleft: () => "↤",
	mapstoup: () => "↥",
	marker: () => "▮",
	mcomma: () => "⨩",
	mcy: () => "м",
	mdash: () => "—",
	measuredangle: () => "∡",
	mfr: () => mfr,
	mho: () => "℧",
	micr: () => "µ",
	micro: () => "µ",
	mid: () => "∣",
	midast: () => "*",
	midcir: () => "⫰",
	middo: () => "·",
	middot: () => "·",
	minus: () => "−",
	minusb: () => "⊟",
	minusd: () => "∸",
	minusdu: () => "⨪",
	mlcp: () => "⫛",
	mldr: () => "…",
	mnplus: () => "∓",
	models: () => "⊧",
	mopf: () => mopf,
	mp: () => "∓",
	mscr: () => mscr,
	mstpos: () => "∾",
	mu: () => "μ",
	multimap: () => "⊸",
	mumap: () => "⊸",
	nGg: () => nGg,
	nGt: () => nGt,
	nGtv: () => nGtv,
	nLeftarrow: () => "⇍",
	nLeftrightarrow: () => "⇎",
	nLl: () => nLl,
	nLt: () => nLt,
	nLtv: () => nLtv,
	nRightarrow: () => "⇏",
	nVDash: () => "⊯",
	nVdash: () => "⊮",
	nabla: () => "∇",
	nacute: () => "ń",
	nang: () => nang,
	nap: () => "≉",
	napE: () => napE,
	napid: () => napid,
	napos: () => "ŉ",
	napprox: () => "≉",
	natur: () => "♮",
	natural: () => "♮",
	naturals: () => "ℕ",
	nbs: () => "\xA0",
	nbsp: () => "\xA0",
	nbump: () => nbump,
	nbumpe: () => nbumpe,
	ncap: () => "⩃",
	ncaron: () => "ň",
	ncedil: () => "ņ",
	ncong: () => "≇",
	ncongdot: () => ncongdot,
	ncup: () => "⩂",
	ncy: () => "н",
	ndash: () => "–",
	ne: () => "≠",
	neArr: () => "⇗",
	nearhk: () => "⤤",
	nearr: () => "↗",
	nearrow: () => "↗",
	nedot: () => nedot,
	nequiv: () => "≢",
	nesear: () => "⤨",
	nesim: () => nesim,
	nexist: () => "∄",
	nexists: () => "∄",
	nfr: () => nfr,
	ngE: () => ngE,
	nge: () => "≱",
	ngeq: () => "≱",
	ngeqq: () => ngeqq,
	ngeqslant: () => ngeqslant,
	nges: () => nges,
	ngsim: () => "≵",
	ngt: () => "≯",
	ngtr: () => "≯",
	nhArr: () => "⇎",
	nharr: () => "↮",
	nhpar: () => "⫲",
	ni: () => "∋",
	nis: () => "⋼",
	nisd: () => "⋺",
	niv: () => "∋",
	njcy: () => "њ",
	nlArr: () => "⇍",
	nlE: () => nlE,
	nlarr: () => "↚",
	nldr: () => "‥",
	nle: () => "≰",
	nleftarrow: () => "↚",
	nleftrightarrow: () => "↮",
	nleq: () => "≰",
	nleqq: () => nleqq,
	nleqslant: () => nleqslant,
	nles: () => nles,
	nless: () => "≮",
	nlsim: () => "≴",
	nlt: () => "≮",
	nltri: () => "⋪",
	nltrie: () => "⋬",
	nmid: () => "∤",
	no: () => "¬",
	nopf: () => nopf,
	not: () => "¬",
	notin: () => "∉",
	notinE: () => notinE,
	notindot: () => notindot,
	notinva: () => "∉",
	notinvb: () => "⋷",
	notinvc: () => "⋶",
	notni: () => "∌",
	notniva: () => "∌",
	notnivb: () => "⋾",
	notnivc: () => "⋽",
	npar: () => "∦",
	nparallel: () => "∦",
	nparsl: () => nparsl,
	npart: () => npart,
	npolint: () => "⨔",
	npr: () => "⊀",
	nprcue: () => "⋠",
	npre: () => npre,
	nprec: () => "⊀",
	npreceq: () => npreceq,
	nrArr: () => "⇏",
	nrarr: () => "↛",
	nrarrc: () => nrarrc,
	nrarrw: () => nrarrw,
	nrightarrow: () => "↛",
	nrtri: () => "⋫",
	nrtrie: () => "⋭",
	nsc: () => "⊁",
	nsccue: () => "⋡",
	nsce: () => nsce,
	nscr: () => nscr,
	nshortmid: () => "∤",
	nshortparallel: () => "∦",
	nsim: () => "≁",
	nsime: () => "≄",
	nsimeq: () => "≄",
	nsmid: () => "∤",
	nspar: () => "∦",
	nsqsube: () => "⋢",
	nsqsupe: () => "⋣",
	nsub: () => "⊄",
	nsubE: () => nsubE,
	nsube: () => "⊈",
	nsubset: () => nsubset,
	nsubseteq: () => "⊈",
	nsubseteqq: () => nsubseteqq,
	nsucc: () => "⊁",
	nsucceq: () => nsucceq,
	nsup: () => "⊅",
	nsupE: () => nsupE,
	nsupe: () => "⊉",
	nsupset: () => nsupset,
	nsupseteq: () => "⊉",
	nsupseteqq: () => nsupseteqq,
	ntgl: () => "≹",
	ntild: () => "ñ",
	ntilde: () => "ñ",
	ntlg: () => "≸",
	ntriangleleft: () => "⋪",
	ntrianglelefteq: () => "⋬",
	ntriangleright: () => "⋫",
	ntrianglerighteq: () => "⋭",
	nu: () => "ν",
	num: () => "#",
	numero: () => "№",
	numsp: () => " ",
	nvDash: () => "⊭",
	nvHarr: () => "⤄",
	nvap: () => nvap,
	nvdash: () => "⊬",
	nvge: () => nvge,
	nvgt: () => nvgt,
	nvinfin: () => "⧞",
	nvlArr: () => "⤂",
	nvle: () => nvle,
	nvlt: () => nvlt,
	nvltrie: () => nvltrie,
	nvrArr: () => "⤃",
	nvrtrie: () => nvrtrie,
	nvsim: () => nvsim,
	nwArr: () => "⇖",
	nwarhk: () => "⤣",
	nwarr: () => "↖",
	nwarrow: () => "↖",
	nwnear: () => "⤧",
	oS: () => "Ⓢ",
	oacut: () => "ó",
	oacute: () => "ó",
	oast: () => "⊛",
	ocir: () => "ô",
	ocirc: () => "ô",
	ocy: () => "о",
	odash: () => "⊝",
	odblac: () => "ő",
	odiv: () => "⨸",
	odot: () => "⊙",
	odsold: () => "⦼",
	oelig: () => "œ",
	ofcir: () => "⦿",
	ofr: () => ofr,
	ogon: () => "˛",
	ograv: () => "ò",
	ograve: () => "ò",
	ogt: () => "⧁",
	ohbar: () => "⦵",
	ohm: () => "Ω",
	oint: () => "∮",
	olarr: () => "↺",
	olcir: () => "⦾",
	olcross: () => "⦻",
	oline: () => "‾",
	olt: () => "⧀",
	omacr: () => "ō",
	omega: () => "ω",
	omicron: () => "ο",
	omid: () => "⦶",
	ominus: () => "⊖",
	oopf: () => oopf,
	opar: () => "⦷",
	operp: () => "⦹",
	oplus: () => "⊕",
	or: () => "∨",
	orarr: () => "↻",
	ord: () => "º",
	order: () => "ℴ",
	orderof: () => "ℴ",
	ordf: () => "ª",
	ordm: () => "º",
	origof: () => "⊶",
	oror: () => "⩖",
	orslope: () => "⩗",
	orv: () => "⩛",
	oscr: () => "ℴ",
	oslas: () => "ø",
	oslash: () => "ø",
	osol: () => "⊘",
	otild: () => "õ",
	otilde: () => "õ",
	otimes: () => "⊗",
	otimesas: () => "⨶",
	oum: () => "ö",
	ouml: () => "ö",
	ovbar: () => "⌽",
	par: () => "¶",
	para: () => "¶",
	parallel: () => "∥",
	parsim: () => "⫳",
	parsl: () => "⫽",
	part: () => "∂",
	pcy: () => "п",
	percnt: () => "%",
	period: () => ".",
	permil: () => "‰",
	perp: () => "⊥",
	pertenk: () => "‱",
	pfr: () => pfr,
	phi: () => "φ",
	phiv: () => "ϕ",
	phmmat: () => "ℳ",
	phone: () => "☎",
	pi: () => "π",
	pitchfork: () => "⋔",
	piv: () => "ϖ",
	planck: () => "ℏ",
	planckh: () => "ℎ",
	plankv: () => "ℏ",
	plus: () => "+",
	plusacir: () => "⨣",
	plusb: () => "⊞",
	pluscir: () => "⨢",
	plusdo: () => "∔",
	plusdu: () => "⨥",
	pluse: () => "⩲",
	plusm: () => "±",
	plusmn: () => "±",
	plussim: () => "⨦",
	plustwo: () => "⨧",
	pm: () => "±",
	pointint: () => "⨕",
	popf: () => popf,
	poun: () => "£",
	pound: () => "£",
	pr: () => "≺",
	prE: () => "⪳",
	prap: () => "⪷",
	prcue: () => "≼",
	pre: () => "⪯",
	prec: () => "≺",
	precapprox: () => "⪷",
	preccurlyeq: () => "≼",
	preceq: () => "⪯",
	precnapprox: () => "⪹",
	precneqq: () => "⪵",
	precnsim: () => "⋨",
	precsim: () => "≾",
	prime: () => "′",
	primes: () => "ℙ",
	prnE: () => "⪵",
	prnap: () => "⪹",
	prnsim: () => "⋨",
	prod: () => "∏",
	profalar: () => "⌮",
	profline: () => "⌒",
	profsurf: () => "⌓",
	prop: () => "∝",
	propto: () => "∝",
	prsim: () => "≾",
	prurel: () => "⊰",
	pscr: () => pscr,
	psi: () => "ψ",
	puncsp: () => " ",
	qfr: () => qfr,
	qint: () => "⨌",
	qopf: () => qopf,
	qprime: () => "⁗",
	qscr: () => qscr,
	quaternions: () => "ℍ",
	quatint: () => "⨖",
	quest: () => "?",
	questeq: () => "≟",
	quo: () => "\"",
	quot: () => "\"",
	rAarr: () => "⇛",
	rArr: () => "⇒",
	rAtail: () => "⤜",
	rBarr: () => "⤏",
	rHar: () => "⥤",
	race: () => race,
	racute: () => "ŕ",
	radic: () => "√",
	raemptyv: () => "⦳",
	rang: () => "⟩",
	rangd: () => "⦒",
	range: () => "⦥",
	rangle: () => "⟩",
	raqu: () => "»",
	raquo: () => "»",
	rarr: () => "→",
	rarrap: () => "⥵",
	rarrb: () => "⇥",
	rarrbfs: () => "⤠",
	rarrc: () => "⤳",
	rarrfs: () => "⤞",
	rarrhk: () => "↪",
	rarrlp: () => "↬",
	rarrpl: () => "⥅",
	rarrsim: () => "⥴",
	rarrtl: () => "↣",
	rarrw: () => "↝",
	ratail: () => "⤚",
	ratio: () => "∶",
	rationals: () => "ℚ",
	rbarr: () => "⤍",
	rbbrk: () => "❳",
	rbrace: () => "}",
	rbrack: () => "]",
	rbrke: () => "⦌",
	rbrksld: () => "⦎",
	rbrkslu: () => "⦐",
	rcaron: () => "ř",
	rcedil: () => "ŗ",
	rceil: () => "⌉",
	rcub: () => "}",
	rcy: () => "р",
	rdca: () => "⤷",
	rdldhar: () => "⥩",
	rdquo: () => "”",
	rdquor: () => "”",
	rdsh: () => "↳",
	re: () => "®",
	real: () => "ℜ",
	realine: () => "ℛ",
	realpart: () => "ℜ",
	reals: () => "ℝ",
	rect: () => "▭",
	reg: () => "®",
	rfisht: () => "⥽",
	rfloor: () => "⌋",
	rfr: () => rfr,
	rhard: () => "⇁",
	rharu: () => "⇀",
	rharul: () => "⥬",
	rho: () => "ρ",
	rhov: () => "ϱ",
	rightarrow: () => "→",
	rightarrowtail: () => "↣",
	rightharpoondown: () => "⇁",
	rightharpoonup: () => "⇀",
	rightleftarrows: () => "⇄",
	rightleftharpoons: () => "⇌",
	rightrightarrows: () => "⇉",
	rightsquigarrow: () => "↝",
	rightthreetimes: () => "⋌",
	ring: () => "˚",
	risingdotseq: () => "≓",
	rlarr: () => "⇄",
	rlhar: () => "⇌",
	rlm: () => "‏",
	rmoust: () => "⎱",
	rmoustache: () => "⎱",
	rnmid: () => "⫮",
	roang: () => "⟭",
	roarr: () => "⇾",
	robrk: () => "⟧",
	ropar: () => "⦆",
	ropf: () => ropf,
	roplus: () => "⨮",
	rotimes: () => "⨵",
	rpar: () => ")",
	rpargt: () => "⦔",
	rppolint: () => "⨒",
	rrarr: () => "⇉",
	rsaquo: () => "›",
	rscr: () => rscr,
	rsh: () => "↱",
	rsqb: () => "]",
	rsquo: () => "’",
	rsquor: () => "’",
	rthree: () => "⋌",
	rtimes: () => "⋊",
	rtri: () => "▹",
	rtrie: () => "⊵",
	rtrif: () => "▸",
	rtriltri: () => "⧎",
	ruluhar: () => "⥨",
	rx: () => "℞",
	sacute: () => "ś",
	sbquo: () => "‚",
	sc: () => "≻",
	scE: () => "⪴",
	scap: () => "⪸",
	scaron: () => "š",
	sccue: () => "≽",
	sce: () => "⪰",
	scedil: () => "ş",
	scirc: () => "ŝ",
	scnE: () => "⪶",
	scnap: () => "⪺",
	scnsim: () => "⋩",
	scpolint: () => "⨓",
	scsim: () => "≿",
	scy: () => "с",
	sdot: () => "⋅",
	sdotb: () => "⊡",
	sdote: () => "⩦",
	seArr: () => "⇘",
	searhk: () => "⤥",
	searr: () => "↘",
	searrow: () => "↘",
	sec: () => "§",
	sect: () => "§",
	semi: () => ";",
	seswar: () => "⤩",
	setminus: () => "∖",
	setmn: () => "∖",
	sext: () => "✶",
	sfr: () => sfr,
	sfrown: () => "⌢",
	sh: () => "­",
	sharp: () => "♯",
	shchcy: () => "щ",
	shcy: () => "ш",
	shortmid: () => "∣",
	shortparallel: () => "∥",
	shy: () => "­",
	sigma: () => "σ",
	sigmaf: () => "ς",
	sigmav: () => "ς",
	sim: () => "∼",
	simdot: () => "⩪",
	sime: () => "≃",
	simeq: () => "≃",
	simg: () => "⪞",
	simgE: () => "⪠",
	siml: () => "⪝",
	simlE: () => "⪟",
	simne: () => "≆",
	simplus: () => "⨤",
	simrarr: () => "⥲",
	slarr: () => "←",
	smallsetminus: () => "∖",
	smashp: () => "⨳",
	smeparsl: () => "⧤",
	smid: () => "∣",
	smile: () => "⌣",
	smt: () => "⪪",
	smte: () => "⪬",
	smtes: () => smtes,
	softcy: () => "ь",
	sol: () => "/",
	solb: () => "⧄",
	solbar: () => "⌿",
	sopf: () => sopf,
	spades: () => "♠",
	spadesuit: () => "♠",
	spar: () => "∥",
	sqcap: () => "⊓",
	sqcaps: () => sqcaps,
	sqcup: () => "⊔",
	sqcups: () => sqcups,
	sqsub: () => "⊏",
	sqsube: () => "⊑",
	sqsubset: () => "⊏",
	sqsubseteq: () => "⊑",
	sqsup: () => "⊐",
	sqsupe: () => "⊒",
	sqsupset: () => "⊐",
	sqsupseteq: () => "⊒",
	squ: () => "□",
	square: () => "□",
	squarf: () => "▪",
	squf: () => "▪",
	srarr: () => "→",
	sscr: () => sscr,
	ssetmn: () => "∖",
	ssmile: () => "⌣",
	sstarf: () => "⋆",
	star: () => "☆",
	starf: () => "★",
	straightepsilon: () => "ϵ",
	straightphi: () => "ϕ",
	strns: () => "¯",
	sub: () => "⊂",
	subE: () => "⫅",
	subdot: () => "⪽",
	sube: () => "⊆",
	subedot: () => "⫃",
	submult: () => "⫁",
	subnE: () => "⫋",
	subne: () => "⊊",
	subplus: () => "⪿",
	subrarr: () => "⥹",
	subset: () => "⊂",
	subseteq: () => "⊆",
	subseteqq: () => "⫅",
	subsetneq: () => "⊊",
	subsetneqq: () => "⫋",
	subsim: () => "⫇",
	subsub: () => "⫕",
	subsup: () => "⫓",
	succ: () => "≻",
	succapprox: () => "⪸",
	succcurlyeq: () => "≽",
	succeq: () => "⪰",
	succnapprox: () => "⪺",
	succneqq: () => "⪶",
	succnsim: () => "⋩",
	succsim: () => "≿",
	sum: () => "∑",
	sung: () => "♪",
	sup: () => "⊃",
	sup1: () => "¹",
	sup2: () => "²",
	sup3: () => "³",
	supE: () => "⫆",
	supdot: () => "⪾",
	supdsub: () => "⫘",
	supe: () => "⊇",
	supedot: () => "⫄",
	suphsol: () => "⟉",
	suphsub: () => "⫗",
	suplarr: () => "⥻",
	supmult: () => "⫂",
	supnE: () => "⫌",
	supne: () => "⊋",
	supplus: () => "⫀",
	supset: () => "⊃",
	supseteq: () => "⊇",
	supseteqq: () => "⫆",
	supsetneq: () => "⊋",
	supsetneqq: () => "⫌",
	supsim: () => "⫈",
	supsub: () => "⫔",
	supsup: () => "⫖",
	swArr: () => "⇙",
	swarhk: () => "⤦",
	swarr: () => "↙",
	swarrow: () => "↙",
	swnwar: () => "⤪",
	szli: () => "ß",
	szlig: () => "ß",
	target: () => "⌖",
	tau: () => "τ",
	tbrk: () => "⎴",
	tcaron: () => "ť",
	tcedil: () => "ţ",
	tcy: () => "т",
	tdot: () => "⃛",
	telrec: () => "⌕",
	tfr: () => tfr,
	there4: () => "∴",
	therefore: () => "∴",
	theta: () => "θ",
	thetasym: () => "ϑ",
	thetav: () => "ϑ",
	thickapprox: () => "≈",
	thicksim: () => "∼",
	thinsp: () => " ",
	thkap: () => "≈",
	thksim: () => "∼",
	thor: () => "þ",
	thorn: () => "þ",
	tilde: () => "˜",
	time: () => "×",
	times: () => "×",
	timesb: () => "⊠",
	timesbar: () => "⨱",
	timesd: () => "⨰",
	tint: () => "∭",
	toea: () => "⤨",
	top: () => "⊤",
	topbot: () => "⌶",
	topcir: () => "⫱",
	topf: () => topf,
	topfork: () => "⫚",
	tosa: () => "⤩",
	tprime: () => "‴",
	trade: () => "™",
	triangle: () => "▵",
	triangledown: () => "▿",
	triangleleft: () => "◃",
	trianglelefteq: () => "⊴",
	triangleq: () => "≜",
	triangleright: () => "▹",
	trianglerighteq: () => "⊵",
	tridot: () => "◬",
	trie: () => "≜",
	triminus: () => "⨺",
	triplus: () => "⨹",
	trisb: () => "⧍",
	tritime: () => "⨻",
	trpezium: () => "⏢",
	tscr: () => tscr,
	tscy: () => "ц",
	tshcy: () => "ћ",
	tstrok: () => "ŧ",
	twixt: () => "≬",
	twoheadleftarrow: () => "↞",
	twoheadrightarrow: () => "↠",
	uArr: () => "⇑",
	uHar: () => "⥣",
	uacut: () => "ú",
	uacute: () => "ú",
	uarr: () => "↑",
	ubrcy: () => "ў",
	ubreve: () => "ŭ",
	ucir: () => "û",
	ucirc: () => "û",
	ucy: () => "у",
	udarr: () => "⇅",
	udblac: () => "ű",
	udhar: () => "⥮",
	ufisht: () => "⥾",
	ufr: () => ufr,
	ugrav: () => "ù",
	ugrave: () => "ù",
	uharl: () => "↿",
	uharr: () => "↾",
	uhblk: () => "▀",
	ulcorn: () => "⌜",
	ulcorner: () => "⌜",
	ulcrop: () => "⌏",
	ultri: () => "◸",
	um: () => "¨",
	umacr: () => "ū",
	uml: () => "¨",
	uogon: () => "ų",
	uopf: () => uopf,
	uparrow: () => "↑",
	updownarrow: () => "↕",
	upharpoonleft: () => "↿",
	upharpoonright: () => "↾",
	uplus: () => "⊎",
	upsi: () => "υ",
	upsih: () => "ϒ",
	upsilon: () => "υ",
	upuparrows: () => "⇈",
	urcorn: () => "⌝",
	urcorner: () => "⌝",
	urcrop: () => "⌎",
	uring: () => "ů",
	urtri: () => "◹",
	uscr: () => uscr,
	utdot: () => "⋰",
	utilde: () => "ũ",
	utri: () => "▵",
	utrif: () => "▴",
	uuarr: () => "⇈",
	uum: () => "ü",
	uuml: () => "ü",
	uwangle: () => "⦧",
	vArr: () => "⇕",
	vBar: () => "⫨",
	vBarv: () => "⫩",
	vDash: () => "⊨",
	vangrt: () => "⦜",
	varepsilon: () => "ϵ",
	varkappa: () => "ϰ",
	varnothing: () => "∅",
	varphi: () => "ϕ",
	varpi: () => "ϖ",
	varpropto: () => "∝",
	varr: () => "↕",
	varrho: () => "ϱ",
	varsigma: () => "ς",
	varsubsetneq: () => varsubsetneq,
	varsubsetneqq: () => varsubsetneqq,
	varsupsetneq: () => varsupsetneq,
	varsupsetneqq: () => varsupsetneqq,
	vartheta: () => "ϑ",
	vartriangleleft: () => "⊲",
	vartriangleright: () => "⊳",
	vcy: () => "в",
	vdash: () => "⊢",
	vee: () => "∨",
	veebar: () => "⊻",
	veeeq: () => "≚",
	vellip: () => "⋮",
	verbar: () => "|",
	vert: () => "|",
	vfr: () => vfr,
	vltri: () => "⊲",
	vnsub: () => vnsub,
	vnsup: () => vnsup,
	vopf: () => vopf,
	vprop: () => "∝",
	vrtri: () => "⊳",
	vscr: () => vscr,
	vsubnE: () => vsubnE,
	vsubne: () => vsubne,
	vsupnE: () => vsupnE,
	vsupne: () => vsupne,
	vzigzag: () => "⦚",
	wcirc: () => "ŵ",
	wedbar: () => "⩟",
	wedge: () => "∧",
	wedgeq: () => "≙",
	weierp: () => "℘",
	wfr: () => wfr,
	wopf: () => wopf,
	wp: () => "℘",
	wr: () => "≀",
	wreath: () => "≀",
	wscr: () => wscr,
	xcap: () => "⋂",
	xcirc: () => "◯",
	xcup: () => "⋃",
	xdtri: () => "▽",
	xfr: () => xfr,
	xhArr: () => "⟺",
	xharr: () => "⟷",
	xi: () => "ξ",
	xlArr: () => "⟸",
	xlarr: () => "⟵",
	xmap: () => "⟼",
	xnis: () => "⋻",
	xodot: () => "⨀",
	xopf: () => xopf,
	xoplus: () => "⨁",
	xotime: () => "⨂",
	xrArr: () => "⟹",
	xrarr: () => "⟶",
	xscr: () => xscr,
	xsqcup: () => "⨆",
	xuplus: () => "⨄",
	xutri: () => "△",
	xvee: () => "⋁",
	xwedge: () => "⋀",
	yacut: () => "ý",
	yacute: () => "ý",
	yacy: () => "я",
	ycirc: () => "ŷ",
	ycy: () => "ы",
	ye: () => "¥",
	yen: () => "¥",
	yfr: () => yfr,
	yicy: () => "ї",
	yopf: () => yopf,
	yscr: () => yscr,
	yucy: () => "ю",
	yum: () => "ÿ",
	yuml: () => "ÿ",
	zacute: () => "ź",
	zcaron: () => "ž",
	zcy: () => "з",
	zdot: () => "ż",
	zeetrf: () => "ℨ",
	zeta: () => "ζ",
	zfr: () => zfr,
	zhcy: () => "ж",
	zigrarr: () => "⇝",
	zopf: () => zopf,
	zscr: () => zscr,
	zwj: () => "‍",
	zwnj: () => "‌"
}), Afr, Aopf, Ascr, Bfr, Bopf, Cscr, Dfr, Dopf, Dscr, Efr, Eopf, Ffr, Fopf, Gfr, Gopf, Gscr, Iopf, Jfr, Jopf, Jscr, Kfr, Kopf, Kscr, Lfr, Lopf, Mfr, Mopf, Nfr, NotEqualTilde, NotGreaterFullEqual, NotGreaterGreater, NotGreaterSlantEqual, NotHumpDownHump, NotHumpEqual, NotLeftTriangleBar, NotLessLess, NotLessSlantEqual, NotNestedGreaterGreater, NotNestedLessLess, NotPrecedesEqual, NotRightTriangleBar, NotSquareSubset, NotSquareSuperset, NotSubset, NotSucceedsEqual, NotSucceedsTilde, NotSuperset, Nscr, Ofr, Oopf, Oscr, Pfr, Pscr, Qfr, Qscr, Sfr, Sopf, Sscr, Tfr, ThickSpace, Topf, Tscr, Ufr, Uopf, Uscr, Vfr, Vopf, Vscr, Wfr, Wopf, Wscr, Xfr, Xopf, Xscr, Yfr, Yopf, Yscr, Zscr, acE, afr, aopf, ascr, bfr, bne, bnequiv, bopf, bscr, caps, cfr, copf, cscr, cups, dfr, dopf, dscr, efr, eopf, ffr, fopf, fscr, gesl, gfr, gopf, gvertneqq, gvnE, hfr, hopf, hscr, ifr, iopf, iscr, jfr, jopf, jscr, kfr, kopf, kscr, lates, lesg, lfr, lopf, lscr, lvertneqq, lvnE, mfr, mopf, mscr, nGg, nGt, nGtv, nLl, nLt, nLtv, nang, napE, napid, nbump, nbumpe, ncongdot, nedot, nesim, nfr, ngE, ngeqq, ngeqslant, nges, nlE, nleqq, nleqslant, nles, nopf, notinE, notindot, nparsl, npart, npre, npreceq, nrarrc, nrarrw, nsce, nscr, nsubE, nsubset, nsubseteqq, nsucceq, nsupE, nsupset, nsupseteqq, nvap, nvge, nvgt, nvle, nvlt, nvltrie, nvrtrie, nvsim, ofr, oopf, pfr, popf, pscr, qfr, qopf, qscr, race, rfr, ropf, rscr, sfr, smtes, sopf, sqcaps, sqcups, sscr, tfr, topf, tscr, ufr, uopf, uscr, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vfr, vnsub, vnsup, vopf, vscr, vsubnE, vsubne, vsupnE, vsupne, wfr, wopf, wscr, xfr, xopf, xscr, yfr, yopf, yscr, zfr, zopf, zscr, character_entities_default;
var init_character_entities = __esmMin(() => {
	Afr = "𝔄";
	Aopf = "𝔸";
	Ascr = "𝒜";
	Bfr = "𝔅";
	Bopf = "𝔹";
	Cscr = "𝒞";
	Dfr = "𝔇";
	Dopf = "𝔻";
	Dscr = "𝒟";
	Efr = "𝔈";
	Eopf = "𝔼";
	Ffr = "𝔉";
	Fopf = "𝔽";
	Gfr = "𝔊";
	Gopf = "𝔾";
	Gscr = "𝒢";
	Iopf = "𝕀";
	Jfr = "𝔍";
	Jopf = "𝕁";
	Jscr = "𝒥";
	Kfr = "𝔎";
	Kopf = "𝕂";
	Kscr = "𝒦";
	Lfr = "𝔏";
	Lopf = "𝕃";
	Mfr = "𝔐";
	Mopf = "𝕄";
	Nfr = "𝔑";
	NotEqualTilde = "≂̸";
	NotGreaterFullEqual = "≧̸";
	NotGreaterGreater = "≫̸";
	NotGreaterSlantEqual = "⩾̸";
	NotHumpDownHump = "≎̸";
	NotHumpEqual = "≏̸";
	NotLeftTriangleBar = "⧏̸";
	NotLessLess = "≪̸";
	NotLessSlantEqual = "⩽̸";
	NotNestedGreaterGreater = "⪢̸";
	NotNestedLessLess = "⪡̸";
	NotPrecedesEqual = "⪯̸";
	NotRightTriangleBar = "⧐̸";
	NotSquareSubset = "⊏̸";
	NotSquareSuperset = "⊐̸";
	NotSubset = "⊂⃒";
	NotSucceedsEqual = "⪰̸";
	NotSucceedsTilde = "≿̸";
	NotSuperset = "⊃⃒";
	Nscr = "𝒩";
	Ofr = "𝔒";
	Oopf = "𝕆";
	Oscr = "𝒪";
	Pfr = "𝔓";
	Pscr = "𝒫";
	Qfr = "𝔔";
	Qscr = "𝒬";
	Sfr = "𝔖";
	Sopf = "𝕊";
	Sscr = "𝒮";
	Tfr = "𝔗";
	ThickSpace = "  ";
	Topf = "𝕋";
	Tscr = "𝒯";
	Ufr = "𝔘";
	Uopf = "𝕌";
	Uscr = "𝒰";
	Vfr = "𝔙";
	Vopf = "𝕍";
	Vscr = "𝒱";
	Wfr = "𝔚";
	Wopf = "𝕎";
	Wscr = "𝒲";
	Xfr = "𝔛";
	Xopf = "𝕏";
	Xscr = "𝒳";
	Yfr = "𝔜";
	Yopf = "𝕐";
	Yscr = "𝒴";
	Zscr = "𝒵";
	acE = "∾̳";
	afr = "𝔞";
	aopf = "𝕒";
	ascr = "𝒶";
	bfr = "𝔟";
	bne = "=⃥";
	bnequiv = "≡⃥";
	bopf = "𝕓";
	bscr = "𝒷";
	caps = "∩︀";
	cfr = "𝔠";
	copf = "𝕔";
	cscr = "𝒸";
	cups = "∪︀";
	dfr = "𝔡";
	dopf = "𝕕";
	dscr = "𝒹";
	efr = "𝔢";
	eopf = "𝕖";
	ffr = "𝔣";
	fopf = "𝕗";
	fscr = "𝒻";
	gesl = "⋛︀";
	gfr = "𝔤";
	gopf = "𝕘";
	gvertneqq = "≩︀";
	gvnE = "≩︀";
	hfr = "𝔥";
	hopf = "𝕙";
	hscr = "𝒽";
	ifr = "𝔦";
	iopf = "𝕚";
	iscr = "𝒾";
	jfr = "𝔧";
	jopf = "𝕛";
	jscr = "𝒿";
	kfr = "𝔨";
	kopf = "𝕜";
	kscr = "𝓀";
	lates = "⪭︀";
	lesg = "⋚︀";
	lfr = "𝔩";
	lopf = "𝕝";
	lscr = "𝓁";
	lvertneqq = "≨︀";
	lvnE = "≨︀";
	mfr = "𝔪";
	mopf = "𝕞";
	mscr = "𝓂";
	nGg = "⋙̸";
	nGt = "≫⃒";
	nGtv = "≫̸";
	nLl = "⋘̸";
	nLt = "≪⃒";
	nLtv = "≪̸";
	nang = "∠⃒";
	napE = "⩰̸";
	napid = "≋̸";
	nbump = "≎̸";
	nbumpe = "≏̸";
	ncongdot = "⩭̸";
	nedot = "≐̸";
	nesim = "≂̸";
	nfr = "𝔫";
	ngE = "≧̸";
	ngeqq = "≧̸";
	ngeqslant = "⩾̸";
	nges = "⩾̸";
	nlE = "≦̸";
	nleqq = "≦̸";
	nleqslant = "⩽̸";
	nles = "⩽̸";
	nopf = "𝕟";
	notinE = "⋹̸";
	notindot = "⋵̸";
	nparsl = "⫽⃥";
	npart = "∂̸";
	npre = "⪯̸";
	npreceq = "⪯̸";
	nrarrc = "⤳̸";
	nrarrw = "↝̸";
	nsce = "⪰̸";
	nscr = "𝓃";
	nsubE = "⫅̸";
	nsubset = "⊂⃒";
	nsubseteqq = "⫅̸";
	nsucceq = "⪰̸";
	nsupE = "⫆̸";
	nsupset = "⊃⃒";
	nsupseteqq = "⫆̸";
	nvap = "≍⃒";
	nvge = "≥⃒";
	nvgt = ">⃒";
	nvle = "≤⃒";
	nvlt = "<⃒";
	nvltrie = "⊴⃒";
	nvrtrie = "⊵⃒";
	nvsim = "∼⃒";
	ofr = "𝔬";
	oopf = "𝕠";
	pfr = "𝔭";
	popf = "𝕡";
	pscr = "𝓅";
	qfr = "𝔮";
	qopf = "𝕢";
	qscr = "𝓆";
	race = "∽̱";
	rfr = "𝔯";
	ropf = "𝕣";
	rscr = "𝓇";
	sfr = "𝔰";
	smtes = "⪬︀";
	sopf = "𝕤";
	sqcaps = "⊓︀";
	sqcups = "⊔︀";
	sscr = "𝓈";
	tfr = "𝔱";
	topf = "𝕥";
	tscr = "𝓉";
	ufr = "𝔲";
	uopf = "𝕦";
	uscr = "𝓊";
	varsubsetneq = "⊊︀";
	varsubsetneqq = "⫋︀";
	varsupsetneq = "⊋︀";
	varsupsetneqq = "⫌︀";
	vfr = "𝔳";
	vnsub = "⊂⃒";
	vnsup = "⊃⃒";
	vopf = "𝕧";
	vscr = "𝓋";
	vsubnE = "⫋︀";
	vsubne = "⊊︀";
	vsupnE = "⫌︀";
	vsupne = "⊋︀";
	wfr = "𝔴";
	wopf = "𝕨";
	wscr = "𝓌";
	xfr = "𝔵";
	xopf = "𝕩";
	xscr = "𝓍";
	yfr = "𝔶";
	yopf = "𝕪";
	yscr = "𝓎";
	zfr = "𝔷";
	zopf = "𝕫";
	zscr = "𝓏";
	character_entities_default = {
		AEli: "Æ",
		AElig: "Æ",
		AM: "&",
		AMP: "&",
		Aacut: "Á",
		Aacute: "Á",
		Abreve: "Ă",
		Acir: "Â",
		Acirc: "Â",
		Acy: "А",
		Afr,
		Agrav: "À",
		Agrave: "À",
		Alpha: "Α",
		Amacr: "Ā",
		And: "⩓",
		Aogon: "Ą",
		Aopf,
		ApplyFunction: "⁡",
		Arin: "Å",
		Aring: "Å",
		Ascr,
		Assign: "≔",
		Atild: "Ã",
		Atilde: "Ã",
		Aum: "Ä",
		Auml: "Ä",
		Backslash: "∖",
		Barv: "⫧",
		Barwed: "⌆",
		Bcy: "Б",
		Because: "∵",
		Bernoullis: "ℬ",
		Beta: "Β",
		Bfr,
		Bopf,
		Breve: "˘",
		Bscr: "ℬ",
		Bumpeq: "≎",
		CHcy: "Ч",
		COP: "©",
		COPY: "©",
		Cacute: "Ć",
		Cap: "⋒",
		CapitalDifferentialD: "ⅅ",
		Cayleys: "ℭ",
		Ccaron: "Č",
		Ccedi: "Ç",
		Ccedil: "Ç",
		Ccirc: "Ĉ",
		Cconint: "∰",
		Cdot: "Ċ",
		Cedilla: "¸",
		CenterDot: "·",
		Cfr: "ℭ",
		Chi: "Χ",
		CircleDot: "⊙",
		CircleMinus: "⊖",
		CirclePlus: "⊕",
		CircleTimes: "⊗",
		ClockwiseContourIntegral: "∲",
		CloseCurlyDoubleQuote: "”",
		CloseCurlyQuote: "’",
		Colon: "∷",
		Colone: "⩴",
		Congruent: "≡",
		Conint: "∯",
		ContourIntegral: "∮",
		Copf: "ℂ",
		Coproduct: "∐",
		CounterClockwiseContourIntegral: "∳",
		Cross: "⨯",
		Cscr,
		Cup: "⋓",
		CupCap: "≍",
		DD: "ⅅ",
		DDotrahd: "⤑",
		DJcy: "Ђ",
		DScy: "Ѕ",
		DZcy: "Џ",
		Dagger: "‡",
		Darr: "↡",
		Dashv: "⫤",
		Dcaron: "Ď",
		Dcy: "Д",
		Del: "∇",
		Delta: "Δ",
		Dfr,
		DiacriticalAcute: "´",
		DiacriticalDot: "˙",
		DiacriticalDoubleAcute: "˝",
		DiacriticalGrave: "`",
		DiacriticalTilde: "˜",
		Diamond: "⋄",
		DifferentialD: "ⅆ",
		Dopf,
		Dot: "¨",
		DotDot: "⃜",
		DotEqual: "≐",
		DoubleContourIntegral: "∯",
		DoubleDot: "¨",
		DoubleDownArrow: "⇓",
		DoubleLeftArrow: "⇐",
		DoubleLeftRightArrow: "⇔",
		DoubleLeftTee: "⫤",
		DoubleLongLeftArrow: "⟸",
		DoubleLongLeftRightArrow: "⟺",
		DoubleLongRightArrow: "⟹",
		DoubleRightArrow: "⇒",
		DoubleRightTee: "⊨",
		DoubleUpArrow: "⇑",
		DoubleUpDownArrow: "⇕",
		DoubleVerticalBar: "∥",
		DownArrow: "↓",
		DownArrowBar: "⤓",
		DownArrowUpArrow: "⇵",
		DownBreve: "̑",
		DownLeftRightVector: "⥐",
		DownLeftTeeVector: "⥞",
		DownLeftVector: "↽",
		DownLeftVectorBar: "⥖",
		DownRightTeeVector: "⥟",
		DownRightVector: "⇁",
		DownRightVectorBar: "⥗",
		DownTee: "⊤",
		DownTeeArrow: "↧",
		Downarrow: "⇓",
		Dscr,
		Dstrok: "Đ",
		ENG: "Ŋ",
		ET: "Ð",
		ETH: "Ð",
		Eacut: "É",
		Eacute: "É",
		Ecaron: "Ě",
		Ecir: "Ê",
		Ecirc: "Ê",
		Ecy: "Э",
		Edot: "Ė",
		Efr,
		Egrav: "È",
		Egrave: "È",
		Element: "∈",
		Emacr: "Ē",
		EmptySmallSquare: "◻",
		EmptyVerySmallSquare: "▫",
		Eogon: "Ę",
		Eopf,
		Epsilon: "Ε",
		Equal: "⩵",
		EqualTilde: "≂",
		Equilibrium: "⇌",
		Escr: "ℰ",
		Esim: "⩳",
		Eta: "Η",
		Eum: "Ë",
		Euml: "Ë",
		Exists: "∃",
		ExponentialE: "ⅇ",
		Fcy: "Ф",
		Ffr,
		FilledSmallSquare: "◼",
		FilledVerySmallSquare: "▪",
		Fopf,
		ForAll: "∀",
		Fouriertrf: "ℱ",
		Fscr: "ℱ",
		GJcy: "Ѓ",
		G: ">",
		GT: ">",
		Gamma: "Γ",
		Gammad: "Ϝ",
		Gbreve: "Ğ",
		Gcedil: "Ģ",
		Gcirc: "Ĝ",
		Gcy: "Г",
		Gdot: "Ġ",
		Gfr,
		Gg: "⋙",
		Gopf,
		GreaterEqual: "≥",
		GreaterEqualLess: "⋛",
		GreaterFullEqual: "≧",
		GreaterGreater: "⪢",
		GreaterLess: "≷",
		GreaterSlantEqual: "⩾",
		GreaterTilde: "≳",
		Gscr,
		Gt: "≫",
		HARDcy: "Ъ",
		Hacek: "ˇ",
		Hat: "^",
		Hcirc: "Ĥ",
		Hfr: "ℌ",
		HilbertSpace: "ℋ",
		Hopf: "ℍ",
		HorizontalLine: "─",
		Hscr: "ℋ",
		Hstrok: "Ħ",
		HumpDownHump: "≎",
		HumpEqual: "≏",
		IEcy: "Е",
		IJlig: "Ĳ",
		IOcy: "Ё",
		Iacut: "Í",
		Iacute: "Í",
		Icir: "Î",
		Icirc: "Î",
		Icy: "И",
		Idot: "İ",
		Ifr: "ℑ",
		Igrav: "Ì",
		Igrave: "Ì",
		Im: "ℑ",
		Imacr: "Ī",
		ImaginaryI: "ⅈ",
		Implies: "⇒",
		Int: "∬",
		Integral: "∫",
		Intersection: "⋂",
		InvisibleComma: "⁣",
		InvisibleTimes: "⁢",
		Iogon: "Į",
		Iopf,
		Iota: "Ι",
		Iscr: "ℐ",
		Itilde: "Ĩ",
		Iukcy: "І",
		Ium: "Ï",
		Iuml: "Ï",
		Jcirc: "Ĵ",
		Jcy: "Й",
		Jfr,
		Jopf,
		Jscr,
		Jsercy: "Ј",
		Jukcy: "Є",
		KHcy: "Х",
		KJcy: "Ќ",
		Kappa: "Κ",
		Kcedil: "Ķ",
		Kcy: "К",
		Kfr,
		Kopf,
		Kscr,
		LJcy: "Љ",
		L: "<",
		LT: "<",
		Lacute: "Ĺ",
		Lambda: "Λ",
		Lang: "⟪",
		Laplacetrf: "ℒ",
		Larr: "↞",
		Lcaron: "Ľ",
		Lcedil: "Ļ",
		Lcy: "Л",
		LeftAngleBracket: "⟨",
		LeftArrow: "←",
		LeftArrowBar: "⇤",
		LeftArrowRightArrow: "⇆",
		LeftCeiling: "⌈",
		LeftDoubleBracket: "⟦",
		LeftDownTeeVector: "⥡",
		LeftDownVector: "⇃",
		LeftDownVectorBar: "⥙",
		LeftFloor: "⌊",
		LeftRightArrow: "↔",
		LeftRightVector: "⥎",
		LeftTee: "⊣",
		LeftTeeArrow: "↤",
		LeftTeeVector: "⥚",
		LeftTriangle: "⊲",
		LeftTriangleBar: "⧏",
		LeftTriangleEqual: "⊴",
		LeftUpDownVector: "⥑",
		LeftUpTeeVector: "⥠",
		LeftUpVector: "↿",
		LeftUpVectorBar: "⥘",
		LeftVector: "↼",
		LeftVectorBar: "⥒",
		Leftarrow: "⇐",
		Leftrightarrow: "⇔",
		LessEqualGreater: "⋚",
		LessFullEqual: "≦",
		LessGreater: "≶",
		LessLess: "⪡",
		LessSlantEqual: "⩽",
		LessTilde: "≲",
		Lfr,
		Ll: "⋘",
		Lleftarrow: "⇚",
		Lmidot: "Ŀ",
		LongLeftArrow: "⟵",
		LongLeftRightArrow: "⟷",
		LongRightArrow: "⟶",
		Longleftarrow: "⟸",
		Longleftrightarrow: "⟺",
		Longrightarrow: "⟹",
		Lopf,
		LowerLeftArrow: "↙",
		LowerRightArrow: "↘",
		Lscr: "ℒ",
		Lsh: "↰",
		Lstrok: "Ł",
		Lt: "≪",
		Map: "⤅",
		Mcy: "М",
		MediumSpace: " ",
		Mellintrf: "ℳ",
		Mfr,
		MinusPlus: "∓",
		Mopf,
		Mscr: "ℳ",
		Mu: "Μ",
		NJcy: "Њ",
		Nacute: "Ń",
		Ncaron: "Ň",
		Ncedil: "Ņ",
		Ncy: "Н",
		NegativeMediumSpace: "​",
		NegativeThickSpace: "​",
		NegativeThinSpace: "​",
		NegativeVeryThinSpace: "​",
		NestedGreaterGreater: "≫",
		NestedLessLess: "≪",
		NewLine: "\n",
		Nfr,
		NoBreak: "⁠",
		NonBreakingSpace: "\xA0",
		Nopf: "ℕ",
		Not: "⫬",
		NotCongruent: "≢",
		NotCupCap: "≭",
		NotDoubleVerticalBar: "∦",
		NotElement: "∉",
		NotEqual: "≠",
		NotEqualTilde,
		NotExists: "∄",
		NotGreater: "≯",
		NotGreaterEqual: "≱",
		NotGreaterFullEqual,
		NotGreaterGreater,
		NotGreaterLess: "≹",
		NotGreaterSlantEqual,
		NotGreaterTilde: "≵",
		NotHumpDownHump,
		NotHumpEqual,
		NotLeftTriangle: "⋪",
		NotLeftTriangleBar,
		NotLeftTriangleEqual: "⋬",
		NotLess: "≮",
		NotLessEqual: "≰",
		NotLessGreater: "≸",
		NotLessLess,
		NotLessSlantEqual,
		NotLessTilde: "≴",
		NotNestedGreaterGreater,
		NotNestedLessLess,
		NotPrecedes: "⊀",
		NotPrecedesEqual,
		NotPrecedesSlantEqual: "⋠",
		NotReverseElement: "∌",
		NotRightTriangle: "⋫",
		NotRightTriangleBar,
		NotRightTriangleEqual: "⋭",
		NotSquareSubset,
		NotSquareSubsetEqual: "⋢",
		NotSquareSuperset,
		NotSquareSupersetEqual: "⋣",
		NotSubset,
		NotSubsetEqual: "⊈",
		NotSucceeds: "⊁",
		NotSucceedsEqual,
		NotSucceedsSlantEqual: "⋡",
		NotSucceedsTilde,
		NotSuperset,
		NotSupersetEqual: "⊉",
		NotTilde: "≁",
		NotTildeEqual: "≄",
		NotTildeFullEqual: "≇",
		NotTildeTilde: "≉",
		NotVerticalBar: "∤",
		Nscr,
		Ntild: "Ñ",
		Ntilde: "Ñ",
		Nu: "Ν",
		OElig: "Œ",
		Oacut: "Ó",
		Oacute: "Ó",
		Ocir: "Ô",
		Ocirc: "Ô",
		Ocy: "О",
		Odblac: "Ő",
		Ofr,
		Ograv: "Ò",
		Ograve: "Ò",
		Omacr: "Ō",
		Omega: "Ω",
		Omicron: "Ο",
		Oopf,
		OpenCurlyDoubleQuote: "“",
		OpenCurlyQuote: "‘",
		Or: "⩔",
		Oscr,
		Oslas: "Ø",
		Oslash: "Ø",
		Otild: "Õ",
		Otilde: "Õ",
		Otimes: "⨷",
		Oum: "Ö",
		Ouml: "Ö",
		OverBar: "‾",
		OverBrace: "⏞",
		OverBracket: "⎴",
		OverParenthesis: "⏜",
		PartialD: "∂",
		Pcy: "П",
		Pfr,
		Phi: "Φ",
		Pi: "Π",
		PlusMinus: "±",
		Poincareplane: "ℌ",
		Popf: "ℙ",
		Pr: "⪻",
		Precedes: "≺",
		PrecedesEqual: "⪯",
		PrecedesSlantEqual: "≼",
		PrecedesTilde: "≾",
		Prime: "″",
		Product: "∏",
		Proportion: "∷",
		Proportional: "∝",
		Pscr,
		Psi: "Ψ",
		QUO: "\"",
		QUOT: "\"",
		Qfr,
		Qopf: "ℚ",
		Qscr,
		RBarr: "⤐",
		RE: "®",
		REG: "®",
		Racute: "Ŕ",
		Rang: "⟫",
		Rarr: "↠",
		Rarrtl: "⤖",
		Rcaron: "Ř",
		Rcedil: "Ŗ",
		Rcy: "Р",
		Re: "ℜ",
		ReverseElement: "∋",
		ReverseEquilibrium: "⇋",
		ReverseUpEquilibrium: "⥯",
		Rfr: "ℜ",
		Rho: "Ρ",
		RightAngleBracket: "⟩",
		RightArrow: "→",
		RightArrowBar: "⇥",
		RightArrowLeftArrow: "⇄",
		RightCeiling: "⌉",
		RightDoubleBracket: "⟧",
		RightDownTeeVector: "⥝",
		RightDownVector: "⇂",
		RightDownVectorBar: "⥕",
		RightFloor: "⌋",
		RightTee: "⊢",
		RightTeeArrow: "↦",
		RightTeeVector: "⥛",
		RightTriangle: "⊳",
		RightTriangleBar: "⧐",
		RightTriangleEqual: "⊵",
		RightUpDownVector: "⥏",
		RightUpTeeVector: "⥜",
		RightUpVector: "↾",
		RightUpVectorBar: "⥔",
		RightVector: "⇀",
		RightVectorBar: "⥓",
		Rightarrow: "⇒",
		Ropf: "ℝ",
		RoundImplies: "⥰",
		Rrightarrow: "⇛",
		Rscr: "ℛ",
		Rsh: "↱",
		RuleDelayed: "⧴",
		SHCHcy: "Щ",
		SHcy: "Ш",
		SOFTcy: "Ь",
		Sacute: "Ś",
		Sc: "⪼",
		Scaron: "Š",
		Scedil: "Ş",
		Scirc: "Ŝ",
		Scy: "С",
		Sfr,
		ShortDownArrow: "↓",
		ShortLeftArrow: "←",
		ShortRightArrow: "→",
		ShortUpArrow: "↑",
		Sigma: "Σ",
		SmallCircle: "∘",
		Sopf,
		Sqrt: "√",
		Square: "□",
		SquareIntersection: "⊓",
		SquareSubset: "⊏",
		SquareSubsetEqual: "⊑",
		SquareSuperset: "⊐",
		SquareSupersetEqual: "⊒",
		SquareUnion: "⊔",
		Sscr,
		Star: "⋆",
		Sub: "⋐",
		Subset: "⋐",
		SubsetEqual: "⊆",
		Succeeds: "≻",
		SucceedsEqual: "⪰",
		SucceedsSlantEqual: "≽",
		SucceedsTilde: "≿",
		SuchThat: "∋",
		Sum: "∑",
		Sup: "⋑",
		Superset: "⊃",
		SupersetEqual: "⊇",
		Supset: "⋑",
		THOR: "Þ",
		THORN: "Þ",
		TRADE: "™",
		TSHcy: "Ћ",
		TScy: "Ц",
		Tab: "	",
		Tau: "Τ",
		Tcaron: "Ť",
		Tcedil: "Ţ",
		Tcy: "Т",
		Tfr,
		Therefore: "∴",
		Theta: "Θ",
		ThickSpace,
		ThinSpace: " ",
		Tilde: "∼",
		TildeEqual: "≃",
		TildeFullEqual: "≅",
		TildeTilde: "≈",
		Topf,
		TripleDot: "⃛",
		Tscr,
		Tstrok: "Ŧ",
		Uacut: "Ú",
		Uacute: "Ú",
		Uarr: "↟",
		Uarrocir: "⥉",
		Ubrcy: "Ў",
		Ubreve: "Ŭ",
		Ucir: "Û",
		Ucirc: "Û",
		Ucy: "У",
		Udblac: "Ű",
		Ufr,
		Ugrav: "Ù",
		Ugrave: "Ù",
		Umacr: "Ū",
		UnderBar: "_",
		UnderBrace: "⏟",
		UnderBracket: "⎵",
		UnderParenthesis: "⏝",
		Union: "⋃",
		UnionPlus: "⊎",
		Uogon: "Ų",
		Uopf,
		UpArrow: "↑",
		UpArrowBar: "⤒",
		UpArrowDownArrow: "⇅",
		UpDownArrow: "↕",
		UpEquilibrium: "⥮",
		UpTee: "⊥",
		UpTeeArrow: "↥",
		Uparrow: "⇑",
		Updownarrow: "⇕",
		UpperLeftArrow: "↖",
		UpperRightArrow: "↗",
		Upsi: "ϒ",
		Upsilon: "Υ",
		Uring: "Ů",
		Uscr,
		Utilde: "Ũ",
		Uum: "Ü",
		Uuml: "Ü",
		VDash: "⊫",
		Vbar: "⫫",
		Vcy: "В",
		Vdash: "⊩",
		Vdashl: "⫦",
		Vee: "⋁",
		Verbar: "‖",
		Vert: "‖",
		VerticalBar: "∣",
		VerticalLine: "|",
		VerticalSeparator: "❘",
		VerticalTilde: "≀",
		VeryThinSpace: " ",
		Vfr,
		Vopf,
		Vscr,
		Vvdash: "⊪",
		Wcirc: "Ŵ",
		Wedge: "⋀",
		Wfr,
		Wopf,
		Wscr,
		Xfr,
		Xi: "Ξ",
		Xopf,
		Xscr,
		YAcy: "Я",
		YIcy: "Ї",
		YUcy: "Ю",
		Yacut: "Ý",
		Yacute: "Ý",
		Ycirc: "Ŷ",
		Ycy: "Ы",
		Yfr,
		Yopf,
		Yscr,
		Yuml: "Ÿ",
		ZHcy: "Ж",
		Zacute: "Ź",
		Zcaron: "Ž",
		Zcy: "З",
		Zdot: "Ż",
		ZeroWidthSpace: "​",
		Zeta: "Ζ",
		Zfr: "ℨ",
		Zopf: "ℤ",
		Zscr,
		aacut: "á",
		aacute: "á",
		abreve: "ă",
		ac: "∾",
		acE,
		acd: "∿",
		acir: "â",
		acirc: "â",
		acut: "´",
		acute: "´",
		acy: "а",
		aeli: "æ",
		aelig: "æ",
		af: "⁡",
		afr,
		agrav: "à",
		agrave: "à",
		alefsym: "ℵ",
		aleph: "ℵ",
		alpha: "α",
		amacr: "ā",
		amalg: "⨿",
		am: "&",
		amp: "&",
		and: "∧",
		andand: "⩕",
		andd: "⩜",
		andslope: "⩘",
		andv: "⩚",
		ang: "∠",
		ange: "⦤",
		angle: "∠",
		angmsd: "∡",
		angmsdaa: "⦨",
		angmsdab: "⦩",
		angmsdac: "⦪",
		angmsdad: "⦫",
		angmsdae: "⦬",
		angmsdaf: "⦭",
		angmsdag: "⦮",
		angmsdah: "⦯",
		angrt: "∟",
		angrtvb: "⊾",
		angrtvbd: "⦝",
		angsph: "∢",
		angst: "Å",
		angzarr: "⍼",
		aogon: "ą",
		aopf,
		ap: "≈",
		apE: "⩰",
		apacir: "⩯",
		ape: "≊",
		apid: "≋",
		apos: "'",
		approx: "≈",
		approxeq: "≊",
		arin: "å",
		aring: "å",
		ascr,
		ast: "*",
		asymp: "≈",
		asympeq: "≍",
		atild: "ã",
		atilde: "ã",
		aum: "ä",
		auml: "ä",
		awconint: "∳",
		awint: "⨑",
		bNot: "⫭",
		backcong: "≌",
		backepsilon: "϶",
		backprime: "‵",
		backsim: "∽",
		backsimeq: "⋍",
		barvee: "⊽",
		barwed: "⌅",
		barwedge: "⌅",
		bbrk: "⎵",
		bbrktbrk: "⎶",
		bcong: "≌",
		bcy: "б",
		bdquo: "„",
		becaus: "∵",
		because: "∵",
		bemptyv: "⦰",
		bepsi: "϶",
		bernou: "ℬ",
		beta: "β",
		beth: "ℶ",
		between: "≬",
		bfr,
		bigcap: "⋂",
		bigcirc: "◯",
		bigcup: "⋃",
		bigodot: "⨀",
		bigoplus: "⨁",
		bigotimes: "⨂",
		bigsqcup: "⨆",
		bigstar: "★",
		bigtriangledown: "▽",
		bigtriangleup: "△",
		biguplus: "⨄",
		bigvee: "⋁",
		bigwedge: "⋀",
		bkarow: "⤍",
		blacklozenge: "⧫",
		blacksquare: "▪",
		blacktriangle: "▴",
		blacktriangledown: "▾",
		blacktriangleleft: "◂",
		blacktriangleright: "▸",
		blank: "␣",
		blk12: "▒",
		blk14: "░",
		blk34: "▓",
		block: "█",
		bne,
		bnequiv,
		bnot: "⌐",
		bopf,
		bot: "⊥",
		bottom: "⊥",
		bowtie: "⋈",
		boxDL: "╗",
		boxDR: "╔",
		boxDl: "╖",
		boxDr: "╓",
		boxH: "═",
		boxHD: "╦",
		boxHU: "╩",
		boxHd: "╤",
		boxHu: "╧",
		boxUL: "╝",
		boxUR: "╚",
		boxUl: "╜",
		boxUr: "╙",
		boxV: "║",
		boxVH: "╬",
		boxVL: "╣",
		boxVR: "╠",
		boxVh: "╫",
		boxVl: "╢",
		boxVr: "╟",
		boxbox: "⧉",
		boxdL: "╕",
		boxdR: "╒",
		boxdl: "┐",
		boxdr: "┌",
		boxh: "─",
		boxhD: "╥",
		boxhU: "╨",
		boxhd: "┬",
		boxhu: "┴",
		boxminus: "⊟",
		boxplus: "⊞",
		boxtimes: "⊠",
		boxuL: "╛",
		boxuR: "╘",
		boxul: "┘",
		boxur: "└",
		boxv: "│",
		boxvH: "╪",
		boxvL: "╡",
		boxvR: "╞",
		boxvh: "┼",
		boxvl: "┤",
		boxvr: "├",
		bprime: "‵",
		breve: "˘",
		brvba: "¦",
		brvbar: "¦",
		bscr,
		bsemi: "⁏",
		bsim: "∽",
		bsime: "⋍",
		bsol: "\\",
		bsolb: "⧅",
		bsolhsub: "⟈",
		bull: "•",
		bullet: "•",
		bump: "≎",
		bumpE: "⪮",
		bumpe: "≏",
		bumpeq: "≏",
		cacute: "ć",
		cap: "∩",
		capand: "⩄",
		capbrcup: "⩉",
		capcap: "⩋",
		capcup: "⩇",
		capdot: "⩀",
		caps,
		caret: "⁁",
		caron: "ˇ",
		ccaps: "⩍",
		ccaron: "č",
		ccedi: "ç",
		ccedil: "ç",
		ccirc: "ĉ",
		ccups: "⩌",
		ccupssm: "⩐",
		cdot: "ċ",
		cedi: "¸",
		cedil: "¸",
		cemptyv: "⦲",
		cen: "¢",
		cent: "¢",
		centerdot: "·",
		cfr,
		chcy: "ч",
		check: "✓",
		checkmark: "✓",
		chi: "χ",
		cir: "○",
		cirE: "⧃",
		circ: "ˆ",
		circeq: "≗",
		circlearrowleft: "↺",
		circlearrowright: "↻",
		circledR: "®",
		circledS: "Ⓢ",
		circledast: "⊛",
		circledcirc: "⊚",
		circleddash: "⊝",
		cire: "≗",
		cirfnint: "⨐",
		cirmid: "⫯",
		cirscir: "⧂",
		clubs: "♣",
		clubsuit: "♣",
		colon: ":",
		colone: "≔",
		coloneq: "≔",
		comma: ",",
		commat: "@",
		comp: "∁",
		compfn: "∘",
		complement: "∁",
		complexes: "ℂ",
		cong: "≅",
		congdot: "⩭",
		conint: "∮",
		copf,
		coprod: "∐",
		cop: "©",
		copy: "©",
		copysr: "℗",
		crarr: "↵",
		cross: "✗",
		cscr,
		csub: "⫏",
		csube: "⫑",
		csup: "⫐",
		csupe: "⫒",
		ctdot: "⋯",
		cudarrl: "⤸",
		cudarrr: "⤵",
		cuepr: "⋞",
		cuesc: "⋟",
		cularr: "↶",
		cularrp: "⤽",
		cup: "∪",
		cupbrcap: "⩈",
		cupcap: "⩆",
		cupcup: "⩊",
		cupdot: "⊍",
		cupor: "⩅",
		cups,
		curarr: "↷",
		curarrm: "⤼",
		curlyeqprec: "⋞",
		curlyeqsucc: "⋟",
		curlyvee: "⋎",
		curlywedge: "⋏",
		curre: "¤",
		curren: "¤",
		curvearrowleft: "↶",
		curvearrowright: "↷",
		cuvee: "⋎",
		cuwed: "⋏",
		cwconint: "∲",
		cwint: "∱",
		cylcty: "⌭",
		dArr: "⇓",
		dHar: "⥥",
		dagger: "†",
		daleth: "ℸ",
		darr: "↓",
		dash: "‐",
		dashv: "⊣",
		dbkarow: "⤏",
		dblac: "˝",
		dcaron: "ď",
		dcy: "д",
		dd: "ⅆ",
		ddagger: "‡",
		ddarr: "⇊",
		ddotseq: "⩷",
		de: "°",
		deg: "°",
		delta: "δ",
		demptyv: "⦱",
		dfisht: "⥿",
		dfr,
		dharl: "⇃",
		dharr: "⇂",
		diam: "⋄",
		diamond: "⋄",
		diamondsuit: "♦",
		diams: "♦",
		die: "¨",
		digamma: "ϝ",
		disin: "⋲",
		div: "÷",
		divid: "÷",
		divide: "÷",
		divideontimes: "⋇",
		divonx: "⋇",
		djcy: "ђ",
		dlcorn: "⌞",
		dlcrop: "⌍",
		dollar: "$",
		dopf,
		dot: "˙",
		doteq: "≐",
		doteqdot: "≑",
		dotminus: "∸",
		dotplus: "∔",
		dotsquare: "⊡",
		doublebarwedge: "⌆",
		downarrow: "↓",
		downdownarrows: "⇊",
		downharpoonleft: "⇃",
		downharpoonright: "⇂",
		drbkarow: "⤐",
		drcorn: "⌟",
		drcrop: "⌌",
		dscr,
		dscy: "ѕ",
		dsol: "⧶",
		dstrok: "đ",
		dtdot: "⋱",
		dtri: "▿",
		dtrif: "▾",
		duarr: "⇵",
		duhar: "⥯",
		dwangle: "⦦",
		dzcy: "џ",
		dzigrarr: "⟿",
		eDDot: "⩷",
		eDot: "≑",
		eacut: "é",
		eacute: "é",
		easter: "⩮",
		ecaron: "ě",
		ecir: "ê",
		ecirc: "ê",
		ecolon: "≕",
		ecy: "э",
		edot: "ė",
		ee: "ⅇ",
		efDot: "≒",
		efr,
		eg: "⪚",
		egrav: "è",
		egrave: "è",
		egs: "⪖",
		egsdot: "⪘",
		el: "⪙",
		elinters: "⏧",
		ell: "ℓ",
		els: "⪕",
		elsdot: "⪗",
		emacr: "ē",
		empty: "∅",
		emptyset: "∅",
		emptyv: "∅",
		emsp13: " ",
		emsp14: " ",
		emsp: " ",
		eng: "ŋ",
		ensp: " ",
		eogon: "ę",
		eopf,
		epar: "⋕",
		eparsl: "⧣",
		eplus: "⩱",
		epsi: "ε",
		epsilon: "ε",
		epsiv: "ϵ",
		eqcirc: "≖",
		eqcolon: "≕",
		eqsim: "≂",
		eqslantgtr: "⪖",
		eqslantless: "⪕",
		equals: "=",
		equest: "≟",
		equiv: "≡",
		equivDD: "⩸",
		eqvparsl: "⧥",
		erDot: "≓",
		erarr: "⥱",
		escr: "ℯ",
		esdot: "≐",
		esim: "≂",
		eta: "η",
		et: "ð",
		eth: "ð",
		eum: "ë",
		euml: "ë",
		euro: "€",
		excl: "!",
		exist: "∃",
		expectation: "ℰ",
		exponentiale: "ⅇ",
		fallingdotseq: "≒",
		fcy: "ф",
		female: "♀",
		ffilig: "ﬃ",
		fflig: "ﬀ",
		ffllig: "ﬄ",
		ffr,
		filig: "ﬁ",
		fjlig: "fj",
		flat: "♭",
		fllig: "ﬂ",
		fltns: "▱",
		fnof: "ƒ",
		fopf,
		forall: "∀",
		fork: "⋔",
		forkv: "⫙",
		fpartint: "⨍",
		frac1: "¼",
		frac12: "½",
		frac13: "⅓",
		frac14: "¼",
		frac15: "⅕",
		frac16: "⅙",
		frac18: "⅛",
		frac23: "⅔",
		frac25: "⅖",
		frac3: "¾",
		frac34: "¾",
		frac35: "⅗",
		frac38: "⅜",
		frac45: "⅘",
		frac56: "⅚",
		frac58: "⅝",
		frac78: "⅞",
		frasl: "⁄",
		frown: "⌢",
		fscr,
		gE: "≧",
		gEl: "⪌",
		gacute: "ǵ",
		gamma: "γ",
		gammad: "ϝ",
		gap: "⪆",
		gbreve: "ğ",
		gcirc: "ĝ",
		gcy: "г",
		gdot: "ġ",
		ge: "≥",
		gel: "⋛",
		geq: "≥",
		geqq: "≧",
		geqslant: "⩾",
		ges: "⩾",
		gescc: "⪩",
		gesdot: "⪀",
		gesdoto: "⪂",
		gesdotol: "⪄",
		gesl,
		gesles: "⪔",
		gfr,
		gg: "≫",
		ggg: "⋙",
		gimel: "ℷ",
		gjcy: "ѓ",
		gl: "≷",
		glE: "⪒",
		gla: "⪥",
		glj: "⪤",
		gnE: "≩",
		gnap: "⪊",
		gnapprox: "⪊",
		gne: "⪈",
		gneq: "⪈",
		gneqq: "≩",
		gnsim: "⋧",
		gopf,
		grave: "`",
		gscr: "ℊ",
		gsim: "≳",
		gsime: "⪎",
		gsiml: "⪐",
		g: ">",
		gt: ">",
		gtcc: "⪧",
		gtcir: "⩺",
		gtdot: "⋗",
		gtlPar: "⦕",
		gtquest: "⩼",
		gtrapprox: "⪆",
		gtrarr: "⥸",
		gtrdot: "⋗",
		gtreqless: "⋛",
		gtreqqless: "⪌",
		gtrless: "≷",
		gtrsim: "≳",
		gvertneqq,
		gvnE,
		hArr: "⇔",
		hairsp: " ",
		half: "½",
		hamilt: "ℋ",
		hardcy: "ъ",
		harr: "↔",
		harrcir: "⥈",
		harrw: "↭",
		hbar: "ℏ",
		hcirc: "ĥ",
		hearts: "♥",
		heartsuit: "♥",
		hellip: "…",
		hercon: "⊹",
		hfr,
		hksearow: "⤥",
		hkswarow: "⤦",
		hoarr: "⇿",
		homtht: "∻",
		hookleftarrow: "↩",
		hookrightarrow: "↪",
		hopf,
		horbar: "―",
		hscr,
		hslash: "ℏ",
		hstrok: "ħ",
		hybull: "⁃",
		hyphen: "‐",
		iacut: "í",
		iacute: "í",
		ic: "⁣",
		icir: "î",
		icirc: "î",
		icy: "и",
		iecy: "е",
		iexc: "¡",
		iexcl: "¡",
		iff: "⇔",
		ifr,
		igrav: "ì",
		igrave: "ì",
		ii: "ⅈ",
		iiiint: "⨌",
		iiint: "∭",
		iinfin: "⧜",
		iiota: "℩",
		ijlig: "ĳ",
		imacr: "ī",
		image: "ℑ",
		imagline: "ℐ",
		imagpart: "ℑ",
		imath: "ı",
		imof: "⊷",
		imped: "Ƶ",
		"in": "∈",
		incare: "℅",
		infin: "∞",
		infintie: "⧝",
		inodot: "ı",
		int: "∫",
		intcal: "⊺",
		integers: "ℤ",
		intercal: "⊺",
		intlarhk: "⨗",
		intprod: "⨼",
		iocy: "ё",
		iogon: "į",
		iopf,
		iota: "ι",
		iprod: "⨼",
		iques: "¿",
		iquest: "¿",
		iscr,
		isin: "∈",
		isinE: "⋹",
		isindot: "⋵",
		isins: "⋴",
		isinsv: "⋳",
		isinv: "∈",
		it: "⁢",
		itilde: "ĩ",
		iukcy: "і",
		ium: "ï",
		iuml: "ï",
		jcirc: "ĵ",
		jcy: "й",
		jfr,
		jmath: "ȷ",
		jopf,
		jscr,
		jsercy: "ј",
		jukcy: "є",
		kappa: "κ",
		kappav: "ϰ",
		kcedil: "ķ",
		kcy: "к",
		kfr,
		kgreen: "ĸ",
		khcy: "х",
		kjcy: "ќ",
		kopf,
		kscr,
		lAarr: "⇚",
		lArr: "⇐",
		lAtail: "⤛",
		lBarr: "⤎",
		lE: "≦",
		lEg: "⪋",
		lHar: "⥢",
		lacute: "ĺ",
		laemptyv: "⦴",
		lagran: "ℒ",
		lambda: "λ",
		lang: "⟨",
		langd: "⦑",
		langle: "⟨",
		lap: "⪅",
		laqu: "«",
		laquo: "«",
		larr: "←",
		larrb: "⇤",
		larrbfs: "⤟",
		larrfs: "⤝",
		larrhk: "↩",
		larrlp: "↫",
		larrpl: "⤹",
		larrsim: "⥳",
		larrtl: "↢",
		lat: "⪫",
		latail: "⤙",
		late: "⪭",
		lates,
		lbarr: "⤌",
		lbbrk: "❲",
		lbrace: "{",
		lbrack: "[",
		lbrke: "⦋",
		lbrksld: "⦏",
		lbrkslu: "⦍",
		lcaron: "ľ",
		lcedil: "ļ",
		lceil: "⌈",
		lcub: "{",
		lcy: "л",
		ldca: "⤶",
		ldquo: "“",
		ldquor: "„",
		ldrdhar: "⥧",
		ldrushar: "⥋",
		ldsh: "↲",
		le: "≤",
		leftarrow: "←",
		leftarrowtail: "↢",
		leftharpoondown: "↽",
		leftharpoonup: "↼",
		leftleftarrows: "⇇",
		leftrightarrow: "↔",
		leftrightarrows: "⇆",
		leftrightharpoons: "⇋",
		leftrightsquigarrow: "↭",
		leftthreetimes: "⋋",
		leg: "⋚",
		leq: "≤",
		leqq: "≦",
		leqslant: "⩽",
		les: "⩽",
		lescc: "⪨",
		lesdot: "⩿",
		lesdoto: "⪁",
		lesdotor: "⪃",
		lesg,
		lesges: "⪓",
		lessapprox: "⪅",
		lessdot: "⋖",
		lesseqgtr: "⋚",
		lesseqqgtr: "⪋",
		lessgtr: "≶",
		lesssim: "≲",
		lfisht: "⥼",
		lfloor: "⌊",
		lfr,
		lg: "≶",
		lgE: "⪑",
		lhard: "↽",
		lharu: "↼",
		lharul: "⥪",
		lhblk: "▄",
		ljcy: "љ",
		ll: "≪",
		llarr: "⇇",
		llcorner: "⌞",
		llhard: "⥫",
		lltri: "◺",
		lmidot: "ŀ",
		lmoust: "⎰",
		lmoustache: "⎰",
		lnE: "≨",
		lnap: "⪉",
		lnapprox: "⪉",
		lne: "⪇",
		lneq: "⪇",
		lneqq: "≨",
		lnsim: "⋦",
		loang: "⟬",
		loarr: "⇽",
		lobrk: "⟦",
		longleftarrow: "⟵",
		longleftrightarrow: "⟷",
		longmapsto: "⟼",
		longrightarrow: "⟶",
		looparrowleft: "↫",
		looparrowright: "↬",
		lopar: "⦅",
		lopf,
		loplus: "⨭",
		lotimes: "⨴",
		lowast: "∗",
		lowbar: "_",
		loz: "◊",
		lozenge: "◊",
		lozf: "⧫",
		lpar: "(",
		lparlt: "⦓",
		lrarr: "⇆",
		lrcorner: "⌟",
		lrhar: "⇋",
		lrhard: "⥭",
		lrm: "‎",
		lrtri: "⊿",
		lsaquo: "‹",
		lscr,
		lsh: "↰",
		lsim: "≲",
		lsime: "⪍",
		lsimg: "⪏",
		lsqb: "[",
		lsquo: "‘",
		lsquor: "‚",
		lstrok: "ł",
		l: "<",
		lt: "<",
		ltcc: "⪦",
		ltcir: "⩹",
		ltdot: "⋖",
		lthree: "⋋",
		ltimes: "⋉",
		ltlarr: "⥶",
		ltquest: "⩻",
		ltrPar: "⦖",
		ltri: "◃",
		ltrie: "⊴",
		ltrif: "◂",
		lurdshar: "⥊",
		luruhar: "⥦",
		lvertneqq,
		lvnE,
		mDDot: "∺",
		mac: "¯",
		macr: "¯",
		male: "♂",
		malt: "✠",
		maltese: "✠",
		map: "↦",
		mapsto: "↦",
		mapstodown: "↧",
		mapstoleft: "↤",
		mapstoup: "↥",
		marker: "▮",
		mcomma: "⨩",
		mcy: "м",
		mdash: "—",
		measuredangle: "∡",
		mfr,
		mho: "℧",
		micr: "µ",
		micro: "µ",
		mid: "∣",
		midast: "*",
		midcir: "⫰",
		middo: "·",
		middot: "·",
		minus: "−",
		minusb: "⊟",
		minusd: "∸",
		minusdu: "⨪",
		mlcp: "⫛",
		mldr: "…",
		mnplus: "∓",
		models: "⊧",
		mopf,
		mp: "∓",
		mscr,
		mstpos: "∾",
		mu: "μ",
		multimap: "⊸",
		mumap: "⊸",
		nGg,
		nGt,
		nGtv,
		nLeftarrow: "⇍",
		nLeftrightarrow: "⇎",
		nLl,
		nLt,
		nLtv,
		nRightarrow: "⇏",
		nVDash: "⊯",
		nVdash: "⊮",
		nabla: "∇",
		nacute: "ń",
		nang,
		nap: "≉",
		napE,
		napid,
		napos: "ŉ",
		napprox: "≉",
		natur: "♮",
		natural: "♮",
		naturals: "ℕ",
		nbs: "\xA0",
		nbsp: "\xA0",
		nbump,
		nbumpe,
		ncap: "⩃",
		ncaron: "ň",
		ncedil: "ņ",
		ncong: "≇",
		ncongdot,
		ncup: "⩂",
		ncy: "н",
		ndash: "–",
		ne: "≠",
		neArr: "⇗",
		nearhk: "⤤",
		nearr: "↗",
		nearrow: "↗",
		nedot,
		nequiv: "≢",
		nesear: "⤨",
		nesim,
		nexist: "∄",
		nexists: "∄",
		nfr,
		ngE,
		nge: "≱",
		ngeq: "≱",
		ngeqq,
		ngeqslant,
		nges,
		ngsim: "≵",
		ngt: "≯",
		ngtr: "≯",
		nhArr: "⇎",
		nharr: "↮",
		nhpar: "⫲",
		ni: "∋",
		nis: "⋼",
		nisd: "⋺",
		niv: "∋",
		njcy: "њ",
		nlArr: "⇍",
		nlE,
		nlarr: "↚",
		nldr: "‥",
		nle: "≰",
		nleftarrow: "↚",
		nleftrightarrow: "↮",
		nleq: "≰",
		nleqq,
		nleqslant,
		nles,
		nless: "≮",
		nlsim: "≴",
		nlt: "≮",
		nltri: "⋪",
		nltrie: "⋬",
		nmid: "∤",
		nopf,
		no: "¬",
		not: "¬",
		notin: "∉",
		notinE,
		notindot,
		notinva: "∉",
		notinvb: "⋷",
		notinvc: "⋶",
		notni: "∌",
		notniva: "∌",
		notnivb: "⋾",
		notnivc: "⋽",
		npar: "∦",
		nparallel: "∦",
		nparsl,
		npart,
		npolint: "⨔",
		npr: "⊀",
		nprcue: "⋠",
		npre,
		nprec: "⊀",
		npreceq,
		nrArr: "⇏",
		nrarr: "↛",
		nrarrc,
		nrarrw,
		nrightarrow: "↛",
		nrtri: "⋫",
		nrtrie: "⋭",
		nsc: "⊁",
		nsccue: "⋡",
		nsce,
		nscr,
		nshortmid: "∤",
		nshortparallel: "∦",
		nsim: "≁",
		nsime: "≄",
		nsimeq: "≄",
		nsmid: "∤",
		nspar: "∦",
		nsqsube: "⋢",
		nsqsupe: "⋣",
		nsub: "⊄",
		nsubE,
		nsube: "⊈",
		nsubset,
		nsubseteq: "⊈",
		nsubseteqq,
		nsucc: "⊁",
		nsucceq,
		nsup: "⊅",
		nsupE,
		nsupe: "⊉",
		nsupset,
		nsupseteq: "⊉",
		nsupseteqq,
		ntgl: "≹",
		ntild: "ñ",
		ntilde: "ñ",
		ntlg: "≸",
		ntriangleleft: "⋪",
		ntrianglelefteq: "⋬",
		ntriangleright: "⋫",
		ntrianglerighteq: "⋭",
		nu: "ν",
		num: "#",
		numero: "№",
		numsp: " ",
		nvDash: "⊭",
		nvHarr: "⤄",
		nvap,
		nvdash: "⊬",
		nvge,
		nvgt,
		nvinfin: "⧞",
		nvlArr: "⤂",
		nvle,
		nvlt,
		nvltrie,
		nvrArr: "⤃",
		nvrtrie,
		nvsim,
		nwArr: "⇖",
		nwarhk: "⤣",
		nwarr: "↖",
		nwarrow: "↖",
		nwnear: "⤧",
		oS: "Ⓢ",
		oacut: "ó",
		oacute: "ó",
		oast: "⊛",
		ocir: "ô",
		ocirc: "ô",
		ocy: "о",
		odash: "⊝",
		odblac: "ő",
		odiv: "⨸",
		odot: "⊙",
		odsold: "⦼",
		oelig: "œ",
		ofcir: "⦿",
		ofr,
		ogon: "˛",
		ograv: "ò",
		ograve: "ò",
		ogt: "⧁",
		ohbar: "⦵",
		ohm: "Ω",
		oint: "∮",
		olarr: "↺",
		olcir: "⦾",
		olcross: "⦻",
		oline: "‾",
		olt: "⧀",
		omacr: "ō",
		omega: "ω",
		omicron: "ο",
		omid: "⦶",
		ominus: "⊖",
		oopf,
		opar: "⦷",
		operp: "⦹",
		oplus: "⊕",
		or: "∨",
		orarr: "↻",
		ord: "º",
		order: "ℴ",
		orderof: "ℴ",
		ordf: "ª",
		ordm: "º",
		origof: "⊶",
		oror: "⩖",
		orslope: "⩗",
		orv: "⩛",
		oscr: "ℴ",
		oslas: "ø",
		oslash: "ø",
		osol: "⊘",
		otild: "õ",
		otilde: "õ",
		otimes: "⊗",
		otimesas: "⨶",
		oum: "ö",
		ouml: "ö",
		ovbar: "⌽",
		par: "¶",
		para: "¶",
		parallel: "∥",
		parsim: "⫳",
		parsl: "⫽",
		part: "∂",
		pcy: "п",
		percnt: "%",
		period: ".",
		permil: "‰",
		perp: "⊥",
		pertenk: "‱",
		pfr,
		phi: "φ",
		phiv: "ϕ",
		phmmat: "ℳ",
		phone: "☎",
		pi: "π",
		pitchfork: "⋔",
		piv: "ϖ",
		planck: "ℏ",
		planckh: "ℎ",
		plankv: "ℏ",
		plus: "+",
		plusacir: "⨣",
		plusb: "⊞",
		pluscir: "⨢",
		plusdo: "∔",
		plusdu: "⨥",
		pluse: "⩲",
		plusm: "±",
		plusmn: "±",
		plussim: "⨦",
		plustwo: "⨧",
		pm: "±",
		pointint: "⨕",
		popf,
		poun: "£",
		pound: "£",
		pr: "≺",
		prE: "⪳",
		prap: "⪷",
		prcue: "≼",
		pre: "⪯",
		prec: "≺",
		precapprox: "⪷",
		preccurlyeq: "≼",
		preceq: "⪯",
		precnapprox: "⪹",
		precneqq: "⪵",
		precnsim: "⋨",
		precsim: "≾",
		prime: "′",
		primes: "ℙ",
		prnE: "⪵",
		prnap: "⪹",
		prnsim: "⋨",
		prod: "∏",
		profalar: "⌮",
		profline: "⌒",
		profsurf: "⌓",
		prop: "∝",
		propto: "∝",
		prsim: "≾",
		prurel: "⊰",
		pscr,
		psi: "ψ",
		puncsp: " ",
		qfr,
		qint: "⨌",
		qopf,
		qprime: "⁗",
		qscr,
		quaternions: "ℍ",
		quatint: "⨖",
		quest: "?",
		questeq: "≟",
		quo: "\"",
		quot: "\"",
		rAarr: "⇛",
		rArr: "⇒",
		rAtail: "⤜",
		rBarr: "⤏",
		rHar: "⥤",
		race,
		racute: "ŕ",
		radic: "√",
		raemptyv: "⦳",
		rang: "⟩",
		rangd: "⦒",
		range: "⦥",
		rangle: "⟩",
		raqu: "»",
		raquo: "»",
		rarr: "→",
		rarrap: "⥵",
		rarrb: "⇥",
		rarrbfs: "⤠",
		rarrc: "⤳",
		rarrfs: "⤞",
		rarrhk: "↪",
		rarrlp: "↬",
		rarrpl: "⥅",
		rarrsim: "⥴",
		rarrtl: "↣",
		rarrw: "↝",
		ratail: "⤚",
		ratio: "∶",
		rationals: "ℚ",
		rbarr: "⤍",
		rbbrk: "❳",
		rbrace: "}",
		rbrack: "]",
		rbrke: "⦌",
		rbrksld: "⦎",
		rbrkslu: "⦐",
		rcaron: "ř",
		rcedil: "ŗ",
		rceil: "⌉",
		rcub: "}",
		rcy: "р",
		rdca: "⤷",
		rdldhar: "⥩",
		rdquo: "”",
		rdquor: "”",
		rdsh: "↳",
		real: "ℜ",
		realine: "ℛ",
		realpart: "ℜ",
		reals: "ℝ",
		rect: "▭",
		re: "®",
		reg: "®",
		rfisht: "⥽",
		rfloor: "⌋",
		rfr,
		rhard: "⇁",
		rharu: "⇀",
		rharul: "⥬",
		rho: "ρ",
		rhov: "ϱ",
		rightarrow: "→",
		rightarrowtail: "↣",
		rightharpoondown: "⇁",
		rightharpoonup: "⇀",
		rightleftarrows: "⇄",
		rightleftharpoons: "⇌",
		rightrightarrows: "⇉",
		rightsquigarrow: "↝",
		rightthreetimes: "⋌",
		ring: "˚",
		risingdotseq: "≓",
		rlarr: "⇄",
		rlhar: "⇌",
		rlm: "‏",
		rmoust: "⎱",
		rmoustache: "⎱",
		rnmid: "⫮",
		roang: "⟭",
		roarr: "⇾",
		robrk: "⟧",
		ropar: "⦆",
		ropf,
		roplus: "⨮",
		rotimes: "⨵",
		rpar: ")",
		rpargt: "⦔",
		rppolint: "⨒",
		rrarr: "⇉",
		rsaquo: "›",
		rscr,
		rsh: "↱",
		rsqb: "]",
		rsquo: "’",
		rsquor: "’",
		rthree: "⋌",
		rtimes: "⋊",
		rtri: "▹",
		rtrie: "⊵",
		rtrif: "▸",
		rtriltri: "⧎",
		ruluhar: "⥨",
		rx: "℞",
		sacute: "ś",
		sbquo: "‚",
		sc: "≻",
		scE: "⪴",
		scap: "⪸",
		scaron: "š",
		sccue: "≽",
		sce: "⪰",
		scedil: "ş",
		scirc: "ŝ",
		scnE: "⪶",
		scnap: "⪺",
		scnsim: "⋩",
		scpolint: "⨓",
		scsim: "≿",
		scy: "с",
		sdot: "⋅",
		sdotb: "⊡",
		sdote: "⩦",
		seArr: "⇘",
		searhk: "⤥",
		searr: "↘",
		searrow: "↘",
		sec: "§",
		sect: "§",
		semi: ";",
		seswar: "⤩",
		setminus: "∖",
		setmn: "∖",
		sext: "✶",
		sfr,
		sfrown: "⌢",
		sharp: "♯",
		shchcy: "щ",
		shcy: "ш",
		shortmid: "∣",
		shortparallel: "∥",
		sh: "­",
		shy: "­",
		sigma: "σ",
		sigmaf: "ς",
		sigmav: "ς",
		sim: "∼",
		simdot: "⩪",
		sime: "≃",
		simeq: "≃",
		simg: "⪞",
		simgE: "⪠",
		siml: "⪝",
		simlE: "⪟",
		simne: "≆",
		simplus: "⨤",
		simrarr: "⥲",
		slarr: "←",
		smallsetminus: "∖",
		smashp: "⨳",
		smeparsl: "⧤",
		smid: "∣",
		smile: "⌣",
		smt: "⪪",
		smte: "⪬",
		smtes,
		softcy: "ь",
		sol: "/",
		solb: "⧄",
		solbar: "⌿",
		sopf,
		spades: "♠",
		spadesuit: "♠",
		spar: "∥",
		sqcap: "⊓",
		sqcaps,
		sqcup: "⊔",
		sqcups,
		sqsub: "⊏",
		sqsube: "⊑",
		sqsubset: "⊏",
		sqsubseteq: "⊑",
		sqsup: "⊐",
		sqsupe: "⊒",
		sqsupset: "⊐",
		sqsupseteq: "⊒",
		squ: "□",
		square: "□",
		squarf: "▪",
		squf: "▪",
		srarr: "→",
		sscr,
		ssetmn: "∖",
		ssmile: "⌣",
		sstarf: "⋆",
		star: "☆",
		starf: "★",
		straightepsilon: "ϵ",
		straightphi: "ϕ",
		strns: "¯",
		sub: "⊂",
		subE: "⫅",
		subdot: "⪽",
		sube: "⊆",
		subedot: "⫃",
		submult: "⫁",
		subnE: "⫋",
		subne: "⊊",
		subplus: "⪿",
		subrarr: "⥹",
		subset: "⊂",
		subseteq: "⊆",
		subseteqq: "⫅",
		subsetneq: "⊊",
		subsetneqq: "⫋",
		subsim: "⫇",
		subsub: "⫕",
		subsup: "⫓",
		succ: "≻",
		succapprox: "⪸",
		succcurlyeq: "≽",
		succeq: "⪰",
		succnapprox: "⪺",
		succneqq: "⪶",
		succnsim: "⋩",
		succsim: "≿",
		sum: "∑",
		sung: "♪",
		sup: "⊃",
		sup1: "¹",
		sup2: "²",
		sup3: "³",
		supE: "⫆",
		supdot: "⪾",
		supdsub: "⫘",
		supe: "⊇",
		supedot: "⫄",
		suphsol: "⟉",
		suphsub: "⫗",
		suplarr: "⥻",
		supmult: "⫂",
		supnE: "⫌",
		supne: "⊋",
		supplus: "⫀",
		supset: "⊃",
		supseteq: "⊇",
		supseteqq: "⫆",
		supsetneq: "⊋",
		supsetneqq: "⫌",
		supsim: "⫈",
		supsub: "⫔",
		supsup: "⫖",
		swArr: "⇙",
		swarhk: "⤦",
		swarr: "↙",
		swarrow: "↙",
		swnwar: "⤪",
		szli: "ß",
		szlig: "ß",
		target: "⌖",
		tau: "τ",
		tbrk: "⎴",
		tcaron: "ť",
		tcedil: "ţ",
		tcy: "т",
		tdot: "⃛",
		telrec: "⌕",
		tfr,
		there4: "∴",
		therefore: "∴",
		theta: "θ",
		thetasym: "ϑ",
		thetav: "ϑ",
		thickapprox: "≈",
		thicksim: "∼",
		thinsp: " ",
		thkap: "≈",
		thksim: "∼",
		thor: "þ",
		thorn: "þ",
		tilde: "˜",
		time: "×",
		times: "×",
		timesb: "⊠",
		timesbar: "⨱",
		timesd: "⨰",
		tint: "∭",
		toea: "⤨",
		top: "⊤",
		topbot: "⌶",
		topcir: "⫱",
		topf,
		topfork: "⫚",
		tosa: "⤩",
		tprime: "‴",
		trade: "™",
		triangle: "▵",
		triangledown: "▿",
		triangleleft: "◃",
		trianglelefteq: "⊴",
		triangleq: "≜",
		triangleright: "▹",
		trianglerighteq: "⊵",
		tridot: "◬",
		trie: "≜",
		triminus: "⨺",
		triplus: "⨹",
		trisb: "⧍",
		tritime: "⨻",
		trpezium: "⏢",
		tscr,
		tscy: "ц",
		tshcy: "ћ",
		tstrok: "ŧ",
		twixt: "≬",
		twoheadleftarrow: "↞",
		twoheadrightarrow: "↠",
		uArr: "⇑",
		uHar: "⥣",
		uacut: "ú",
		uacute: "ú",
		uarr: "↑",
		ubrcy: "ў",
		ubreve: "ŭ",
		ucir: "û",
		ucirc: "û",
		ucy: "у",
		udarr: "⇅",
		udblac: "ű",
		udhar: "⥮",
		ufisht: "⥾",
		ufr,
		ugrav: "ù",
		ugrave: "ù",
		uharl: "↿",
		uharr: "↾",
		uhblk: "▀",
		ulcorn: "⌜",
		ulcorner: "⌜",
		ulcrop: "⌏",
		ultri: "◸",
		umacr: "ū",
		um: "¨",
		uml: "¨",
		uogon: "ų",
		uopf,
		uparrow: "↑",
		updownarrow: "↕",
		upharpoonleft: "↿",
		upharpoonright: "↾",
		uplus: "⊎",
		upsi: "υ",
		upsih: "ϒ",
		upsilon: "υ",
		upuparrows: "⇈",
		urcorn: "⌝",
		urcorner: "⌝",
		urcrop: "⌎",
		uring: "ů",
		urtri: "◹",
		uscr,
		utdot: "⋰",
		utilde: "ũ",
		utri: "▵",
		utrif: "▴",
		uuarr: "⇈",
		uum: "ü",
		uuml: "ü",
		uwangle: "⦧",
		vArr: "⇕",
		vBar: "⫨",
		vBarv: "⫩",
		vDash: "⊨",
		vangrt: "⦜",
		varepsilon: "ϵ",
		varkappa: "ϰ",
		varnothing: "∅",
		varphi: "ϕ",
		varpi: "ϖ",
		varpropto: "∝",
		varr: "↕",
		varrho: "ϱ",
		varsigma: "ς",
		varsubsetneq,
		varsubsetneqq,
		varsupsetneq,
		varsupsetneqq,
		vartheta: "ϑ",
		vartriangleleft: "⊲",
		vartriangleright: "⊳",
		vcy: "в",
		vdash: "⊢",
		vee: "∨",
		veebar: "⊻",
		veeeq: "≚",
		vellip: "⋮",
		verbar: "|",
		vert: "|",
		vfr,
		vltri: "⊲",
		vnsub,
		vnsup,
		vopf,
		vprop: "∝",
		vrtri: "⊳",
		vscr,
		vsubnE,
		vsubne,
		vsupnE,
		vsupne,
		vzigzag: "⦚",
		wcirc: "ŵ",
		wedbar: "⩟",
		wedge: "∧",
		wedgeq: "≙",
		weierp: "℘",
		wfr,
		wopf,
		wp: "℘",
		wr: "≀",
		wreath: "≀",
		wscr,
		xcap: "⋂",
		xcirc: "◯",
		xcup: "⋃",
		xdtri: "▽",
		xfr,
		xhArr: "⟺",
		xharr: "⟷",
		xi: "ξ",
		xlArr: "⟸",
		xlarr: "⟵",
		xmap: "⟼",
		xnis: "⋻",
		xodot: "⨀",
		xopf,
		xoplus: "⨁",
		xotime: "⨂",
		xrArr: "⟹",
		xrarr: "⟶",
		xscr,
		xsqcup: "⨆",
		xuplus: "⨄",
		xutri: "△",
		xvee: "⋁",
		xwedge: "⋀",
		yacut: "ý",
		yacute: "ý",
		yacy: "я",
		ycirc: "ŷ",
		ycy: "ы",
		ye: "¥",
		yen: "¥",
		yfr,
		yicy: "ї",
		yopf,
		yscr,
		yucy: "ю",
		yum: "ÿ",
		yuml: "ÿ",
		zacute: "ź",
		zcaron: "ž",
		zcy: "з",
		zdot: "ż",
		zeetrf: "ℨ",
		zeta: "ζ",
		zfr,
		zhcy: "ж",
		zigrarr: "⇝",
		zopf,
		zscr,
		zwj: "‍",
		zwnj: "‌"
	};
});
//#endregion
//#region node_modules/parse-entities/decode-entity.js
var require_decode_entity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var characterEntities = (init_character_entities(), __toCommonJS(character_entities_exports).default);
	module.exports = decodeEntity;
	var own = {}.hasOwnProperty;
	function decodeEntity(characters) {
		return own.call(characterEntities, characters) ? characterEntities[characters] : false;
	}
}));
//#endregion
//#region node_modules/parse-entities/index.js
var require_parse_entities = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var legacy = (init_character_entities_legacy(), __toCommonJS(character_entities_legacy_exports).default);
	var invalid = (init_character_reference_invalid(), __toCommonJS(character_reference_invalid_exports).default);
	var decimal = require_is_decimal();
	var hexadecimal = require_is_hexadecimal();
	var alphanumerical = require_is_alphanumerical();
	var decodeEntity = require_decode_entity();
	module.exports = parseEntities;
	var own = {}.hasOwnProperty;
	var fromCharCode = String.fromCharCode;
	var noop = Function.prototype;
	var defaults = {
		warning: null,
		reference: null,
		text: null,
		warningContext: null,
		referenceContext: null,
		textContext: null,
		position: {},
		additional: null,
		attribute: false,
		nonTerminated: true
	};
	var tab = 9;
	var lineFeed = 10;
	var formFeed = 12;
	var space = 32;
	var ampersand = 38;
	var semicolon = 59;
	var lessThan = 60;
	var equalsTo = 61;
	var numberSign = 35;
	var uppercaseX = 88;
	var lowercaseX = 120;
	var replacementCharacter = 65533;
	var name = "named";
	var hexa = "hexadecimal";
	var deci = "decimal";
	var bases = {};
	bases[hexa] = 16;
	bases[deci] = 10;
	var tests = {};
	tests[name] = alphanumerical;
	tests[deci] = decimal;
	tests[hexa] = hexadecimal;
	var namedNotTerminated = 1;
	var numericNotTerminated = 2;
	var namedEmpty = 3;
	var numericEmpty = 4;
	var namedUnknown = 5;
	var numericDisallowed = 6;
	var numericProhibited = 7;
	var messages = {};
	messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
	messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
	messages[namedEmpty] = "Named character references cannot be empty";
	messages[numericEmpty] = "Numeric character references cannot be empty";
	messages[namedUnknown] = "Named character references must be known";
	messages[numericDisallowed] = "Numeric character references cannot be disallowed";
	messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
	function parseEntities(value, options) {
		var settings = {};
		var option;
		var key;
		if (!options) options = {};
		for (key in defaults) {
			option = options[key];
			settings[key] = option === null || option === void 0 ? defaults[key] : option;
		}
		if (settings.position.indent || settings.position.start) {
			settings.indent = settings.position.indent || [];
			settings.position = settings.position.start;
		}
		return parse(value, settings);
	}
	function parse(value, settings) {
		var additional = settings.additional;
		var nonTerminated = settings.nonTerminated;
		var handleText = settings.text;
		var handleReference = settings.reference;
		var handleWarning = settings.warning;
		var textContext = settings.textContext;
		var referenceContext = settings.referenceContext;
		var warningContext = settings.warningContext;
		var pos = settings.position;
		var indent = settings.indent || [];
		var length = value.length;
		var index = 0;
		var lines = -1;
		var column = pos.column || 1;
		var line = pos.line || 1;
		var queue = "";
		var result = [];
		var entityCharacters;
		var namedEntity;
		var terminated;
		var characters;
		var character;
		var reference;
		var following;
		var warning;
		var reason;
		var output;
		var entity;
		var begin;
		var start;
		var type;
		var test;
		var prev;
		var next;
		var diff;
		var end;
		if (typeof additional === "string") additional = additional.charCodeAt(0);
		prev = now();
		warning = handleWarning ? parseError : noop;
		index--;
		length++;
		while (++index < length) {
			if (character === lineFeed) column = indent[lines] || 1;
			character = value.charCodeAt(index);
			if (character === ampersand) {
				following = value.charCodeAt(index + 1);
				if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
					queue += fromCharCode(character);
					column++;
					continue;
				}
				start = index + 1;
				begin = start;
				end = start;
				if (following === numberSign) {
					end = ++begin;
					following = value.charCodeAt(end);
					if (following === uppercaseX || following === lowercaseX) {
						type = hexa;
						end = ++begin;
					} else type = deci;
				} else type = name;
				entityCharacters = "";
				entity = "";
				characters = "";
				test = tests[type];
				end--;
				while (++end < length) {
					following = value.charCodeAt(end);
					if (!test(following)) break;
					characters += fromCharCode(following);
					if (type === name && own.call(legacy, characters)) {
						entityCharacters = characters;
						entity = legacy[characters];
					}
				}
				terminated = value.charCodeAt(end) === semicolon;
				if (terminated) {
					end++;
					namedEntity = type === name ? decodeEntity(characters) : false;
					if (namedEntity) {
						entityCharacters = characters;
						entity = namedEntity;
					}
				}
				diff = 1 + end - start;
				if (!terminated && !nonTerminated) {} else if (!characters) {
					if (type !== name) warning(numericEmpty, diff);
				} else if (type === name) {
					if (terminated && !entity) warning(namedUnknown, 1);
					else {
						if (entityCharacters !== characters) {
							end = begin + entityCharacters.length;
							diff = 1 + end - begin;
							terminated = false;
						}
						if (!terminated) {
							reason = entityCharacters ? namedNotTerminated : namedEmpty;
							if (settings.attribute) {
								following = value.charCodeAt(end);
								if (following === equalsTo) {
									warning(reason, diff);
									entity = null;
								} else if (alphanumerical(following)) entity = null;
								else warning(reason, diff);
							} else warning(reason, diff);
						}
					}
					reference = entity;
				} else {
					if (!terminated) warning(numericNotTerminated, diff);
					reference = parseInt(characters, bases[type]);
					if (prohibited(reference)) {
						warning(numericProhibited, diff);
						reference = fromCharCode(replacementCharacter);
					} else if (reference in invalid) {
						warning(numericDisallowed, diff);
						reference = invalid[reference];
					} else {
						output = "";
						if (disallowed(reference)) warning(numericDisallowed, diff);
						if (reference > 65535) {
							reference -= 65536;
							output += fromCharCode(reference >>> 10 | 55296);
							reference = 56320 | reference & 1023;
						}
						reference = output + fromCharCode(reference);
					}
				}
				if (reference) {
					flush();
					prev = now();
					index = end - 1;
					column += end - start + 1;
					result.push(reference);
					next = now();
					next.offset++;
					if (handleReference) handleReference.call(referenceContext, reference, {
						start: prev,
						end: next
					}, value.slice(start - 1, end));
					prev = next;
				} else {
					characters = value.slice(start - 1, end);
					queue += characters;
					column += characters.length;
					index = end - 1;
				}
			} else {
				if (character === 10) {
					line++;
					lines++;
					column = 0;
				}
				if (character === character) {
					queue += fromCharCode(character);
					column++;
				} else flush();
			}
		}
		return result.join("");
		function now() {
			return {
				line,
				column,
				offset: index + (pos.offset || 0)
			};
		}
		function parseError(code, offset) {
			var position = now();
			position.column += offset;
			position.offset += offset;
			handleWarning.call(warningContext, messages[code], position, code);
		}
		function flush() {
			if (queue) {
				result.push(queue);
				if (handleText) handleText.call(textContext, queue, {
					start: prev,
					end: now()
				});
				queue = "";
			}
		}
	}
	function prohibited(code) {
		return code >= 55296 && code <= 57343 || code > 1114111;
	}
	function disallowed(code) {
		return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
	}
}));
//#endregion
//#region node_modules/prismjs/components/prism-core.js
var require_prism_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Prism: Lightweight, robust, elegant syntax highlighting
	*
	* @license MIT <https://opensource.org/licenses/MIT>
	* @author Lea Verou <https://lea.verou.me>
	* @namespace
	* @public
	*/
	var Prism = function(_self) {
		var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
		var uniqueId = 0;
		var plainTextGrammar = {};
		var _ = {
			/**
			* By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
			* current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
			* additional languages or plugins yourself.
			*
			* By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
			*
			* You obviously have to change this value before the automatic highlighting started. To do this, you can add an
			* empty Prism object into the global scope before loading the Prism script like this:
			*
			* ```js
			* window.Prism = window.Prism || {};
			* Prism.manual = true;
			* // add a new <script> to load Prism's script
			* ```
			*
			* @default false
			* @type {boolean}
			* @memberof Prism
			* @public
			*/
			manual: _self.Prism && _self.Prism.manual,
			/**
			* By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
			* `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
			* own worker, you don't want it to do this.
			*
			* By setting this value to `true`, Prism will not add its own listeners to the worker.
			*
			* You obviously have to change this value before Prism executes. To do this, you can add an
			* empty Prism object into the global scope before loading the Prism script like this:
			*
			* ```js
			* window.Prism = window.Prism || {};
			* Prism.disableWorkerMessageHandler = true;
			* // Load Prism's script
			* ```
			*
			* @default false
			* @type {boolean}
			* @memberof Prism
			* @public
			*/
			disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
			/**
			* A namespace for utility methods.
			*
			* All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
			* change or disappear at any time.
			*
			* @namespace
			* @memberof Prism
			*/
			util: {
				encode: function encode(tokens) {
					if (tokens instanceof Token) return new Token(tokens.type, encode(tokens.content), tokens.alias);
					else if (Array.isArray(tokens)) return tokens.map(encode);
					else return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				/**
				* Returns the name of the type of the given value.
				*
				* @param {any} o
				* @returns {string}
				* @example
				* type(null)      === 'Null'
				* type(undefined) === 'Undefined'
				* type(123)       === 'Number'
				* type('foo')     === 'String'
				* type(true)      === 'Boolean'
				* type([1, 2])    === 'Array'
				* type({})        === 'Object'
				* type(String)    === 'Function'
				* type(/abc+/)    === 'RegExp'
				*/
				type: function(o) {
					return Object.prototype.toString.call(o).slice(8, -1);
				},
				/**
				* Returns a unique number for the given object. Later calls will still return the same number.
				*
				* @param {Object} obj
				* @returns {number}
				*/
				objId: function(obj) {
					if (!obj["__id"]) Object.defineProperty(obj, "__id", { value: ++uniqueId });
					return obj["__id"];
				},
				/**
				* Creates a deep clone of the given object.
				*
				* The main intended use of this function is to clone language definitions.
				*
				* @param {T} o
				* @param {Record<number, any>} [visited]
				* @returns {T}
				* @template T
				*/
				clone: function deepClone(o, visited) {
					visited = visited || {};
					var clone;
					var id;
					switch (_.util.type(o)) {
						case "Object":
							id = _.util.objId(o);
							if (visited[id]) return visited[id];
							clone = {};
							visited[id] = clone;
							for (var key in o) if (o.hasOwnProperty(key)) clone[key] = deepClone(o[key], visited);
							return clone;
						case "Array":
							id = _.util.objId(o);
							if (visited[id]) return visited[id];
							clone = [];
							visited[id] = clone;
							o.forEach(function(v, i) {
								clone[i] = deepClone(v, visited);
							});
							return clone;
						default: return o;
					}
				},
				/**
				* Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
				*
				* If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
				*
				* @param {Element} element
				* @returns {string}
				*/
				getLanguage: function(element) {
					while (element) {
						var m = lang.exec(element.className);
						if (m) return m[1].toLowerCase();
						element = element.parentElement;
					}
					return "none";
				},
				/**
				* Sets the Prism `language-xxxx` class of the given element.
				*
				* @param {Element} element
				* @param {string} language
				* @returns {void}
				*/
				setLanguage: function(element, language) {
					element.className = element.className.replace(RegExp(lang, "gi"), "");
					element.classList.add("language-" + language);
				},
				/**
				* Returns the script element that is currently executing.
				*
				* This does __not__ work for line script element.
				*
				* @returns {HTMLScriptElement | null}
				*/
				currentScript: function() {
					if (typeof document === "undefined") return null;
					if ("currentScript" in document && true) return document.currentScript;
					try {
						throw new Error();
					} catch (err) {
						var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
						if (src) {
							var scripts = document.getElementsByTagName("script");
							for (var i in scripts) if (scripts[i].src == src) return scripts[i];
						}
						return null;
					}
				},
				/**
				* Returns whether a given class is active for `element`.
				*
				* The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
				* if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
				* given class is just the given class with a `no-` prefix.
				*
				* Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
				* closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
				* ancestors have the given class or the negated version of it, then the default activation will be returned.
				*
				* In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
				* version of it, the class is considered active.
				*
				* @param {Element} element
				* @param {string} className
				* @param {boolean} [defaultActivation=false]
				* @returns {boolean}
				*/
				isActive: function(element, className, defaultActivation) {
					var no = "no-" + className;
					while (element) {
						var classList = element.classList;
						if (classList.contains(className)) return true;
						if (classList.contains(no)) return false;
						element = element.parentElement;
					}
					return !!defaultActivation;
				}
			},
			/**
			* This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
			*
			* @namespace
			* @memberof Prism
			* @public
			*/
			languages: {
				/**
				* The grammar for plain, unformatted text.
				*/
				plain: plainTextGrammar,
				plaintext: plainTextGrammar,
				text: plainTextGrammar,
				txt: plainTextGrammar,
				/**
				* Creates a deep copy of the language with the given id and appends the given tokens.
				*
				* If a token in `redef` also appears in the copied language, then the existing token in the copied language
				* will be overwritten at its original position.
				*
				* ## Best practices
				*
				* Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
				* doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
				* understand the language definition because, normally, the order of tokens matters in Prism grammars.
				*
				* Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
				* Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
				*
				* @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
				* @param {Grammar} redef The new tokens to append.
				* @returns {Grammar} The new language created.
				* @public
				* @example
				* Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
				*     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
				*     // at its original position
				*     'comment': { ... },
				*     // CSS doesn't have a 'color' token, so this token will be appended
				*     'color': /\b(?:red|green|blue)\b/
				* });
				*/
				extend: function(id, redef) {
					var lang = _.util.clone(_.languages[id]);
					for (var key in redef) lang[key] = redef[key];
					return lang;
				},
				/**
				* Inserts tokens _before_ another token in a language definition or any other grammar.
				*
				* ## Usage
				*
				* This helper method makes it easy to modify existing languages. For example, the CSS language definition
				* not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
				* in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
				* appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
				* this:
				*
				* ```js
				* Prism.languages.markup.style = {
				*     // token
				* };
				* ```
				*
				* then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
				* before existing tokens. For the CSS example above, you would use it like this:
				*
				* ```js
				* Prism.languages.insertBefore('markup', 'cdata', {
				*     'style': {
				*         // token
				*     }
				* });
				* ```
				*
				* ## Special cases
				*
				* If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
				* will be ignored.
				*
				* This behavior can be used to insert tokens after `before`:
				*
				* ```js
				* Prism.languages.insertBefore('markup', 'comment', {
				*     'comment': Prism.languages.markup.comment,
				*     // tokens after 'comment'
				* });
				* ```
				*
				* ## Limitations
				*
				* The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
				* properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
				* differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
				* deleting properties which is necessary to insert at arbitrary positions.
				*
				* To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
				* Instead, it will create a new object and replace all references to the target object with the new one. This
				* can be done without temporarily deleting properties, so the iteration order is well-defined.
				*
				* However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
				* you hold the target object in a variable, then the value of the variable will not change.
				*
				* ```js
				* var oldMarkup = Prism.languages.markup;
				* var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
				*
				* assert(oldMarkup !== Prism.languages.markup);
				* assert(newMarkup === Prism.languages.markup);
				* ```
				*
				* @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
				* object to be modified.
				* @param {string} before The key to insert before.
				* @param {Grammar} insert An object containing the key-value pairs to be inserted.
				* @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
				* object to be modified.
				*
				* Defaults to `Prism.languages`.
				* @returns {Grammar} The new grammar object.
				* @public
				*/
				insertBefore: function(inside, before, insert, root) {
					root = root || _.languages;
					var grammar = root[inside];
					/** @type {Grammar} */
					var ret = {};
					for (var token in grammar) if (grammar.hasOwnProperty(token)) {
						if (token == before) {
							for (var newToken in insert) if (insert.hasOwnProperty(newToken)) ret[newToken] = insert[newToken];
						}
						if (!insert.hasOwnProperty(token)) ret[token] = grammar[token];
					}
					var old = root[inside];
					root[inside] = ret;
					_.languages.DFS(_.languages, function(key, value) {
						if (value === old && key != inside) this[key] = ret;
					});
					return ret;
				},
				DFS: function DFS(o, callback, type, visited) {
					visited = visited || {};
					var objId = _.util.objId;
					for (var i in o) if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
						var property = o[i];
						var propertyType = _.util.type(property);
						if (propertyType === "Object" && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === "Array" && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			},
			plugins: {},
			/**
			* This is the most high-level function in Prism’s API.
			* It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
			* each one of them.
			*
			* This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
			*
			* @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
			* @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
			* @memberof Prism
			* @public
			*/
			highlightAll: function(async, callback) {
				_.highlightAllUnder(document, async, callback);
			},
			/**
			* Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
			* {@link Prism.highlightElement} on each one of them.
			*
			* The following hooks will be run:
			* 1. `before-highlightall`
			* 2. `before-all-elements-highlight`
			* 3. All hooks of {@link Prism.highlightElement} for each element.
			*
			* @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
			* @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
			* @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
			* @memberof Prism
			* @public
			*/
			highlightAllUnder: function(container, async, callback) {
				var env = {
					callback,
					container,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				_.hooks.run("before-highlightall", env);
				env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
				_.hooks.run("before-all-elements-highlight", env);
				for (var i = 0, element; element = env.elements[i++];) _.highlightElement(element, async === true, env.callback);
			},
			/**
			* Highlights the code inside a single element.
			*
			* The following hooks will be run:
			* 1. `before-sanity-check`
			* 2. `before-highlight`
			* 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
			* 4. `before-insert`
			* 5. `after-highlight`
			* 6. `complete`
			*
			* Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
			* the element's language.
			*
			* @param {Element} element The element containing the code.
			* It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
			* @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
			* to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
			* [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
			*
			* Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
			* asynchronous highlighting to work. You can build your own bundle on the
			* [Download page](https://prismjs.com/download.html).
			* @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
			* Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
			* @memberof Prism
			* @public
			*/
			highlightElement: function(element, async, callback) {
				var language = _.util.getLanguage(element);
				var grammar = _.languages[language];
				_.util.setLanguage(element, language);
				var parent = element.parentElement;
				if (parent && parent.nodeName.toLowerCase() === "pre") _.util.setLanguage(parent, language);
				var env = {
					element,
					language,
					grammar,
					code: element.textContent
				};
				function insertHighlightedCode(highlightedCode) {
					env.highlightedCode = highlightedCode;
					_.hooks.run("before-insert", env);
					env.element.innerHTML = env.highlightedCode;
					_.hooks.run("after-highlight", env);
					_.hooks.run("complete", env);
					callback && callback.call(env.element);
				}
				_.hooks.run("before-sanity-check", env);
				parent = env.element.parentElement;
				if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) parent.setAttribute("tabindex", "0");
				if (!env.code) {
					_.hooks.run("complete", env);
					callback && callback.call(env.element);
					return;
				}
				_.hooks.run("before-highlight", env);
				if (!env.grammar) {
					insertHighlightedCode(_.util.encode(env.code));
					return;
				}
				if (async && _self.Worker) {
					var worker = new Worker(_.filename);
					worker.onmessage = function(evt) {
						insertHighlightedCode(evt.data);
					};
					worker.postMessage(JSON.stringify({
						language: env.language,
						code: env.code,
						immediateClose: true
					}));
				} else insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			},
			/**
			* Low-level function, only use if you know what you’re doing. It accepts a string of text as input
			* and the language definitions to use, and returns a string with the HTML produced.
			*
			* The following hooks will be run:
			* 1. `before-tokenize`
			* 2. `after-tokenize`
			* 3. `wrap`: On each {@link Token}.
			*
			* @param {string} text A string with the code to be highlighted.
			* @param {Grammar} grammar An object containing the tokens to use.
			*
			* Usually a language definition like `Prism.languages.markup`.
			* @param {string} language The name of the language definition passed to `grammar`.
			* @returns {string} The highlighted HTML.
			* @memberof Prism
			* @public
			* @example
			* Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
			*/
			highlight: function(text, grammar, language) {
				var env = {
					code: text,
					grammar,
					language
				};
				_.hooks.run("before-tokenize", env);
				if (!env.grammar) throw new Error("The language \"" + env.language + "\" has no grammar.");
				env.tokens = _.tokenize(env.code, env.grammar);
				_.hooks.run("after-tokenize", env);
				return Token.stringify(_.util.encode(env.tokens), env.language);
			},
			/**
			* This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
			* and the language definitions to use, and returns an array with the tokenized code.
			*
			* When the language definition includes nested tokens, the function is called recursively on each of these tokens.
			*
			* This method could be useful in other contexts as well, as a very crude parser.
			*
			* @param {string} text A string with the code to be highlighted.
			* @param {Grammar} grammar An object containing the tokens to use.
			*
			* Usually a language definition like `Prism.languages.markup`.
			* @returns {TokenStream} An array of strings and tokens, a token stream.
			* @memberof Prism
			* @public
			* @example
			* let code = `var foo = 0;`;
			* let tokens = Prism.tokenize(code, Prism.languages.javascript);
			* tokens.forEach(token => {
			*     if (token instanceof Prism.Token && token.type === 'number') {
			*         console.log(`Found numeric literal: ${token.content}`);
			*     }
			* });
			*/
			tokenize: function(text, grammar) {
				var rest = grammar.rest;
				if (rest) {
					for (var token in rest) grammar[token] = rest[token];
					delete grammar.rest;
				}
				var tokenList = new LinkedList();
				addAfter(tokenList, tokenList.head, text);
				matchGrammar(text, tokenList, grammar, tokenList.head, 0);
				return toArray(tokenList);
			},
			/**
			* @namespace
			* @memberof Prism
			* @public
			*/
			hooks: {
				all: {},
				/**
				* Adds the given callback to the list of callbacks for the given hook.
				*
				* The callback will be invoked when the hook it is registered for is run.
				* Hooks are usually directly run by a highlight function but you can also run hooks yourself.
				*
				* One callback function can be registered to multiple hooks and the same hook multiple times.
				*
				* @param {string} name The name of the hook.
				* @param {HookCallback} callback The callback function which is given environment variables.
				* @public
				*/
				add: function(name, callback) {
					var hooks = _.hooks.all;
					hooks[name] = hooks[name] || [];
					hooks[name].push(callback);
				},
				/**
				* Runs a hook invoking all registered callbacks with the given environment variables.
				*
				* Callbacks will be invoked synchronously and in the order in which they were registered.
				*
				* @param {string} name The name of the hook.
				* @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
				* @public
				*/
				run: function(name, env) {
					var callbacks = _.hooks.all[name];
					if (!callbacks || !callbacks.length) return;
					for (var i = 0, callback; callback = callbacks[i++];) callback(env);
				}
			},
			Token
		};
		_self.Prism = _;
		/**
		* Creates a new token.
		*
		* @param {string} type See {@link Token#type type}
		* @param {string | TokenStream} content See {@link Token#content content}
		* @param {string|string[]} [alias] The alias(es) of the token.
		* @param {string} [matchedStr=""] A copy of the full string this token was created from.
		* @class
		* @global
		* @public
		*/
		function Token(type, content, alias, matchedStr) {
			/**
			* The type of the token.
			*
			* This is usually the key of a pattern in a {@link Grammar}.
			*
			* @type {string}
			* @see GrammarToken
			* @public
			*/
			this.type = type;
			/**
			* The strings or tokens contained by this token.
			*
			* This will be a token stream if the pattern matched also defined an `inside` grammar.
			*
			* @type {string | TokenStream}
			* @public
			*/
			this.content = content;
			/**
			* The alias(es) of the token.
			*
			* @type {string|string[]}
			* @see GrammarToken
			* @public
			*/
			this.alias = alias;
			this.length = (matchedStr || "").length | 0;
		}
		/**
		* A token stream is an array of strings and {@link Token Token} objects.
		*
		* Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
		* them.
		*
		* 1. No adjacent strings.
		* 2. No empty strings.
		*
		*    The only exception here is the token stream that only contains the empty string and nothing else.
		*
		* @typedef {Array<string | Token>} TokenStream
		* @global
		* @public
		*/
		/**
		* Converts the given token or token stream to an HTML representation.
		*
		* The following hooks will be run:
		* 1. `wrap`: On each {@link Token}.
		*
		* @param {string | Token | TokenStream} o The token or token stream to be converted.
		* @param {string} language The name of current language.
		* @returns {string} The HTML representation of the token or token stream.
		* @memberof Token
		* @static
		*/
		Token.stringify = function stringify(o, language) {
			if (typeof o == "string") return o;
			if (Array.isArray(o)) {
				var s = "";
				o.forEach(function(e) {
					s += stringify(e, language);
				});
				return s;
			}
			var env = {
				type: o.type,
				content: stringify(o.content, language),
				tag: "span",
				classes: ["token", o.type],
				attributes: {},
				language
			};
			var aliases = o.alias;
			if (aliases) if (Array.isArray(aliases)) Array.prototype.push.apply(env.classes, aliases);
			else env.classes.push(aliases);
			_.hooks.run("wrap", env);
			var attributes = "";
			for (var name in env.attributes) attributes += " " + name + "=\"" + (env.attributes[name] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + env.tag + " class=\"" + env.classes.join(" ") + "\"" + attributes + ">" + env.content + "</" + env.tag + ">";
		};
		/**
		* @param {RegExp} pattern
		* @param {number} pos
		* @param {string} text
		* @param {boolean} lookbehind
		* @returns {RegExpExecArray | null}
		*/
		function matchPattern(pattern, pos, text, lookbehind) {
			pattern.lastIndex = pos;
			var match = pattern.exec(text);
			if (match && lookbehind && match[1]) {
				var lookbehindLength = match[1].length;
				match.index += lookbehindLength;
				match[0] = match[0].slice(lookbehindLength);
			}
			return match;
		}
		/**
		* @param {string} text
		* @param {LinkedList<string | Token>} tokenList
		* @param {any} grammar
		* @param {LinkedListNode<string | Token>} startNode
		* @param {number} startPos
		* @param {RematchOptions} [rematch]
		* @returns {void}
		* @private
		*
		* @typedef RematchOptions
		* @property {string} cause
		* @property {number} reach
		*/
		function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
			for (var token in grammar) {
				if (!grammar.hasOwnProperty(token) || !grammar[token]) continue;
				var patterns = grammar[token];
				patterns = Array.isArray(patterns) ? patterns : [patterns];
				for (var j = 0; j < patterns.length; ++j) {
					if (rematch && rematch.cause == token + "," + j) return;
					var patternObj = patterns[j];
					var inside = patternObj.inside;
					var lookbehind = !!patternObj.lookbehind;
					var greedy = !!patternObj.greedy;
					var alias = patternObj.alias;
					if (greedy && !patternObj.pattern.global) {
						var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
						patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
					}
					/** @type {RegExp} */
					var pattern = patternObj.pattern || patternObj;
					for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
						if (rematch && pos >= rematch.reach) break;
						var str = currentNode.value;
						if (tokenList.length > text.length) return;
						if (str instanceof Token) continue;
						var removeCount = 1;
						var match;
						if (greedy) {
							match = matchPattern(pattern, pos, text, lookbehind);
							if (!match || match.index >= text.length) break;
							var from = match.index;
							var to = match.index + match[0].length;
							var p = pos;
							p += currentNode.value.length;
							while (from >= p) {
								currentNode = currentNode.next;
								p += currentNode.value.length;
							}
							p -= currentNode.value.length;
							pos = p;
							if (currentNode.value instanceof Token) continue;
							for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
								removeCount++;
								p += k.value.length;
							}
							removeCount--;
							str = text.slice(pos, p);
							match.index -= pos;
						} else {
							match = matchPattern(pattern, 0, str, lookbehind);
							if (!match) continue;
						}
						var from = match.index;
						var matchStr = match[0];
						var before = str.slice(0, from);
						var after = str.slice(from + matchStr.length);
						var reach = pos + str.length;
						if (rematch && reach > rematch.reach) rematch.reach = reach;
						var removeFrom = currentNode.prev;
						if (before) {
							removeFrom = addAfter(tokenList, removeFrom, before);
							pos += before.length;
						}
						removeRange(tokenList, removeFrom, removeCount);
						var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
						currentNode = addAfter(tokenList, removeFrom, wrapped);
						if (after) addAfter(tokenList, currentNode, after);
						if (removeCount > 1) {
							/** @type {RematchOptions} */
							var nestedRematch = {
								cause: token + "," + j,
								reach
							};
							matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
							if (rematch && nestedRematch.reach > rematch.reach) rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
		/**
		* @typedef LinkedListNode
		* @property {T} value
		* @property {LinkedListNode<T> | null} prev The previous node.
		* @property {LinkedListNode<T> | null} next The next node.
		* @template T
		* @private
		*/
		/**
		* @template T
		* @private
		*/
		function LinkedList() {
			/** @type {LinkedListNode<T>} */
			var head = {
				value: null,
				prev: null,
				next: null
			};
			/** @type {LinkedListNode<T>} */
			var tail = {
				value: null,
				prev: head,
				next: null
			};
			head.next = tail;
			/** @type {LinkedListNode<T>} */
			this.head = head;
			/** @type {LinkedListNode<T>} */
			this.tail = tail;
			this.length = 0;
		}
		/**
		* Adds a new node with the given value to the list.
		*
		* @param {LinkedList<T>} list
		* @param {LinkedListNode<T>} node
		* @param {T} value
		* @returns {LinkedListNode<T>} The added node.
		* @template T
		*/
		function addAfter(list, node, value) {
			var next = node.next;
			var newNode = {
				value,
				prev: node,
				next
			};
			node.next = newNode;
			next.prev = newNode;
			list.length++;
			return newNode;
		}
		/**
		* Removes `count` nodes after the given node. The given node will not be removed.
		*
		* @param {LinkedList<T>} list
		* @param {LinkedListNode<T>} node
		* @param {number} count
		* @template T
		*/
		function removeRange(list, node, count) {
			var next = node.next;
			for (var i = 0; i < count && next !== list.tail; i++) next = next.next;
			node.next = next;
			next.prev = node;
			list.length -= i;
		}
		/**
		* @param {LinkedList<T>} list
		* @returns {T[]}
		* @template T
		*/
		function toArray(list) {
			var array = [];
			var node = list.head.next;
			while (node !== list.tail) {
				array.push(node.value);
				node = node.next;
			}
			return array;
		}
		if (!_self.document) {
			if (!_self.addEventListener) return _;
			if (!_.disableWorkerMessageHandler) _self.addEventListener("message", function(evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;
				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) _self.close();
			}, false);
			return _;
		}
		var script = _.util.currentScript();
		if (script) {
			_.filename = script.src;
			if (script.hasAttribute("data-manual")) _.manual = true;
		}
		function highlightAutomaticallyCallback() {
			if (!_.manual) _.highlightAll();
		}
		if (!_.manual) {
			var readyState = document.readyState;
			if (readyState === "loading" || readyState === "interactive" && script && script.defer) document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
			else if (window.requestAnimationFrame) window.requestAnimationFrame(highlightAutomaticallyCallback);
			else window.setTimeout(highlightAutomaticallyCallback, 16);
		}
		return _;
	}(typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {});
	if (typeof module !== "undefined" && module.exports) module.exports = Prism;
	if (typeof global !== "undefined") global.Prism = Prism;
}));
/**
* The expansion of a simple `RegExp` literal to support additional properties.
*
* @typedef GrammarToken
* @property {RegExp} pattern The regular expression of the token.
* @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
* behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
* @property {boolean} [greedy=false] Whether the token is greedy.
* @property {string|string[]} [alias] An optional alias or list of aliases.
* @property {Grammar} [inside] The nested grammar of this token.
*
* The `inside` grammar will be used to tokenize the text value of each token of this kind.
*
* This can be used to make nested and even recursive language definitions.
*
* Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
* each another.
* @global
* @public
*/
/**
* @typedef Grammar
* @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
* @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
* @global
* @public
*/
/**
* A function which will invoked after an element was successfully highlighted.
*
* @callback HighlightCallback
* @param {Element} element The element successfully highlighted.
* @returns {void}
* @global
* @public
*/
/**
* @callback HookCallback
* @param {Object<string, any>} env The environment variables of the hook.
* @returns {void}
* @global
* @public
*/
//#endregion
//#region node_modules/refractor/lang/markup.js
var require_markup = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = markup;
	markup.displayName = "markup";
	markup.aliases = [
		"html",
		"mathml",
		"svg",
		"xml",
		"ssml",
		"atom",
		"rss"
	];
	function markup(Prism) {
		Prism.languages.markup = {
			comment: {
				pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
				greedy: true
			},
			prolog: {
				pattern: /<\?[\s\S]+?\?>/,
				greedy: true
			},
			doctype: {
				pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
				greedy: true,
				inside: {
					"internal-subset": {
						pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
						lookbehind: true,
						greedy: true,
						inside: null
					},
					string: {
						pattern: /"[^"]*"|'[^']*'/,
						greedy: true
					},
					punctuation: /^<!|>$|[[\]]/,
					"doctype-tag": /^DOCTYPE/i,
					name: /[^\s<>'"]+/
				}
			},
			cdata: {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				greedy: true
			},
			tag: {
				pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
				greedy: true,
				inside: {
					tag: {
						pattern: /^<\/?[^\s>\/]+/,
						inside: {
							punctuation: /^<\/?/,
							namespace: /^[^\s>\/:]+:/
						}
					},
					"special-attr": [],
					"attr-value": {
						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
						inside: { punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/] }
					},
					punctuation: /\/?>/,
					"attr-name": {
						pattern: /[^\s>\/]+/,
						inside: { namespace: /^[^\s>\/:]+:/ }
					}
				}
			},
			entity: [{
				pattern: /&[\da-z]{1,8};/i,
				alias: "named-entity"
			}, /&#x?[\da-f]{1,8};/i]
		};
		Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
		Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
		Prism.hooks.add("wrap", function(env) {
			if (env.type === "entity") env.attributes["title"] = env.content.value.replace(/&amp;/, "&");
		});
		Object.defineProperty(Prism.languages.markup.tag, "addInlined", { 
		/**
		* Adds an inlined language to markup.
		*
		* An example of an inlined language is CSS with `<style>` tags.
		*
		* @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
		* case insensitive.
		* @param {string} lang The language key.
		* @example
		* addInlined('style', 'css');
		*/
value: function addInlined(tagName, lang) {
			var includedCdataInside = {};
			includedCdataInside["language-" + lang] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: true,
				inside: Prism.languages[lang]
			};
			includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
			var inside = { "included-cdata": {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			} };
			inside["language-" + lang] = {
				pattern: /[\s\S]+/,
				inside: Prism.languages[lang]
			};
			var def = {};
			def[tagName] = {
				pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
					return tagName;
				}), "i"),
				lookbehind: true,
				greedy: true,
				inside
			};
			Prism.languages.insertBefore("markup", "cdata", def);
		} });
		Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { 
		/**
		* Adds an pattern to highlight languages embedded in HTML attributes.
		*
		* An example of an inlined language is CSS with `style` attributes.
		*
		* @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
		* case insensitive.
		* @param {string} lang The language key.
		* @example
		* addAttribute('style', 'css');
		*/
value: function(attrName, lang) {
			Prism.languages.markup.tag.inside["special-attr"].push({
				pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
				lookbehind: true,
				inside: {
					"attr-name": /^[^\s=]+/,
					"attr-value": {
						pattern: /=[\s\S]+/,
						inside: {
							value: {
								pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
								lookbehind: true,
								alias: [lang, "language-" + lang],
								inside: Prism.languages[lang]
							},
							punctuation: [{
								pattern: /^=/,
								alias: "attr-equals"
							}, /"|'/]
						}
					}
				}
			});
		} });
		Prism.languages.html = Prism.languages.markup;
		Prism.languages.mathml = Prism.languages.markup;
		Prism.languages.svg = Prism.languages.markup;
		Prism.languages.xml = Prism.languages.extend("markup", {});
		Prism.languages.ssml = Prism.languages.xml;
		Prism.languages.atom = Prism.languages.xml;
		Prism.languages.rss = Prism.languages.xml;
	}
}));
//#endregion
//#region node_modules/refractor/lang/css.js
var require_css = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = css;
	css.displayName = "css";
	css.aliases = [];
	function css(Prism) {
		(function(Prism) {
			var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
			Prism.languages.css = {
				comment: /\/\*[\s\S]*?\*\//,
				atrule: {
					pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
					inside: {
						rule: /^@[\w-]+/,
						"selector-function-argument": {
							pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
							lookbehind: true,
							alias: "selector"
						},
						keyword: {
							pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
							lookbehind: true
						}
					}
				},
				url: {
					pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
					greedy: true,
					inside: {
						function: /^url/i,
						punctuation: /^\(|\)$/,
						string: {
							pattern: RegExp("^" + string.source + "$"),
							alias: "url"
						}
					}
				},
				selector: {
					pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + string.source + ")*(?=\\s*\\{)"),
					lookbehind: true
				},
				string: {
					pattern: string,
					greedy: true
				},
				property: {
					pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
					lookbehind: true
				},
				important: /!important\b/i,
				function: {
					pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
					lookbehind: true
				},
				punctuation: /[(){};:,]/
			};
			Prism.languages.css["atrule"].inside.rest = Prism.languages.css;
			var markup = Prism.languages.markup;
			if (markup) {
				markup.tag.addInlined("style", "css");
				markup.tag.addAttribute("style", "css");
			}
		})(Prism);
	}
}));
//#endregion
//#region node_modules/refractor/lang/clike.js
var require_clike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = clike;
	clike.displayName = "clike";
	clike.aliases = [];
	function clike(Prism) {
		Prism.languages.clike = {
			comment: [{
				pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
				lookbehind: true,
				greedy: true
			}, {
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true,
				greedy: true
			}],
			string: {
				pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			"class-name": {
				pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
				lookbehind: true,
				inside: { punctuation: /[.\\]/ }
			},
			keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
			boolean: /\b(?:false|true)\b/,
			function: /\b\w+(?=\()/,
			number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
			operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
			punctuation: /[{}[\];(),.:]/
		};
	}
}));
//#endregion
//#region node_modules/refractor/lang/javascript.js
var require_javascript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = javascript;
	javascript.displayName = "javascript";
	javascript.aliases = ["js"];
	function javascript(Prism) {
		Prism.languages.javascript = Prism.languages.extend("clike", {
			"class-name": [Prism.languages.clike["class-name"], {
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
				lookbehind: true
			}],
			keyword: [{
				pattern: /((?:^|\})\s*)catch\b/,
				lookbehind: true
			}, {
				pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
				lookbehind: true
			}],
			function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
			number: {
				pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
				lookbehind: true
			},
			operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
		});
		Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
		Prism.languages.insertBefore("javascript", "keyword", {
			regex: {
				pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
				lookbehind: true,
				greedy: true,
				inside: {
					"regex-source": {
						pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
						lookbehind: true,
						alias: "language-regex",
						inside: Prism.languages.regex
					},
					"regex-delimiter": /^\/|\/$/,
					"regex-flags": /^[a-z]+$/
				}
			},
			"function-variable": {
				pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
				alias: "function"
			},
			parameter: [
				{
					pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
					lookbehind: true,
					inside: Prism.languages.javascript
				}
			],
			constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
		});
		Prism.languages.insertBefore("javascript", "string", {
			hashbang: {
				pattern: /^#!.*/,
				greedy: true,
				alias: "comment"
			},
			"template-string": {
				pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
				greedy: true,
				inside: {
					"template-punctuation": {
						pattern: /^`|`$/,
						alias: "string"
					},
					interpolation: {
						pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
						lookbehind: true,
						inside: {
							"interpolation-punctuation": {
								pattern: /^\$\{|\}$/,
								alias: "punctuation"
							},
							rest: Prism.languages.javascript
						}
					},
					string: /[\s\S]+/
				}
			},
			"string-property": {
				pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
				lookbehind: true,
				greedy: true,
				alias: "property"
			}
		});
		Prism.languages.insertBefore("javascript", "operator", { "literal-property": {
			pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
			lookbehind: true,
			alias: "property"
		} });
		if (Prism.languages.markup) {
			Prism.languages.markup.tag.addInlined("script", "javascript");
			Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
		}
		Prism.languages.js = Prism.languages.javascript;
	}
}));
//#endregion
//#region node_modules/react-syntax-highlighter/dist/esm/prism-light.js
var import_core = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	// istanbul ignore next - Don't allow Prism to run on page load in browser or
	var ctx = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
	var restore = capture();
	ctx.Prism = {
		manual: true,
		disableWorkerMessageHandler: true
	};
	var h = require_hastscript();
	var decode = require_parse_entities();
	var Prism = require_prism_core();
	var markup = require_markup();
	var css = require_css();
	var clike = require_clike();
	var js = require_javascript();
	restore();
	var own = {}.hasOwnProperty;
	function Refractor() {}
	Refractor.prototype = Prism;
	var refract = new Refractor();
	module.exports = refract;
	refract.highlight = highlight;
	refract.register = register;
	refract.alias = alias;
	refract.registered = registered;
	refract.listLanguages = listLanguages;
	register(markup);
	register(css);
	register(clike);
	register(js);
	refract.util.encode = encode;
	refract.Token.stringify = stringify;
	function register(grammar) {
		if (typeof grammar !== "function" || !grammar.displayName) throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
		if (refract.languages[grammar.displayName] === void 0) grammar(refract);
	}
	function alias(name, alias) {
		var languages = refract.languages;
		var map = name;
		var key;
		var list;
		var length;
		var index;
		if (alias) {
			map = {};
			map[name] = alias;
		}
		for (key in map) {
			list = map[key];
			list = typeof list === "string" ? [list] : list;
			length = list.length;
			index = -1;
			while (++index < length) languages[list[index]] = languages[key];
		}
	}
	function highlight(value, name) {
		var sup = Prism.highlight;
		var grammar;
		if (typeof value !== "string") throw new Error("Expected `string` for `value`, got `" + value + "`");
		if (refract.util.type(name) === "Object") {
			grammar = name;
			name = null;
		} else {
			if (typeof name !== "string") throw new Error("Expected `string` for `name`, got `" + name + "`");
			if (own.call(refract.languages, name)) grammar = refract.languages[name];
			else throw new Error("Unknown language: `" + name + "` is not registered");
		}
		return sup.call(this, value, grammar, name);
	}
	function registered(language) {
		if (typeof language !== "string") throw new Error("Expected `string` for `language`, got `" + language + "`");
		return own.call(refract.languages, language);
	}
	function listLanguages() {
		var languages = refract.languages;
		var list = [];
		var language;
		for (language in languages) if (own.call(languages, language) && typeof languages[language] === "object") list.push(language);
		return list;
	}
	function stringify(value, language, parent) {
		var env;
		if (typeof value === "string") return {
			type: "text",
			value
		};
		if (refract.util.type(value) === "Array") return stringifyAll(value, language);
		env = {
			type: value.type,
			content: refract.Token.stringify(value.content, language, parent),
			tag: "span",
			classes: ["token", value.type],
			attributes: {},
			language,
			parent
		};
		if (value.alias) env.classes = env.classes.concat(value.alias);
		refract.hooks.run("wrap", env);
		return h(env.tag + "." + env.classes.join("."), attributes(env.attributes), env.content);
	}
	function stringifyAll(values, language) {
		var result = [];
		var length = values.length;
		var index = -1;
		var value;
		while (++index < length) {
			value = values[index];
			if (value !== "" && value !== null && value !== void 0) result.push(value);
		}
		index = -1;
		length = result.length;
		while (++index < length) {
			value = result[index];
			result[index] = refract.Token.stringify(value, language, result);
		}
		return result;
	}
	function encode(tokens) {
		return tokens;
	}
	function attributes(attrs) {
		var key;
		for (key in attrs) attrs[key] = decode(attrs[key]);
		return attrs;
	}
	function capture() {
		var defined = "Prism" in ctx;
		/* istanbul ignore next */
		var current = defined ? ctx.Prism : void 0;
		return restore;
		function restore() {
			/* istanbul ignore else - Clean leaks after Prism. */
			if (defined) ctx.Prism = current;
			else delete ctx.Prism;
			defined = void 0;
			current = void 0;
		}
	}
})))());
var SyntaxHighlighter = highlight_default(import_core.default, {});
SyntaxHighlighter.registerLanguage = function(_, language) {
	return import_core.default.register(language);
};
SyntaxHighlighter.alias = function(name, aliases) {
	return import_core.default.alias(name, aliases);
};
//#endregion
//#region node_modules/refractor/lang/sql.js
var require_sql = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = sql;
	sql.displayName = "sql";
	sql.aliases = [];
	function sql(Prism) {
		Prism.languages.sql = {
			comment: {
				pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
				lookbehind: true
			},
			variable: [{
				pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
				greedy: true
			}, /@[\w.$]+/],
			string: {
				pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
				greedy: true,
				lookbehind: true
			},
			identifier: {
				pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
				greedy: true,
				lookbehind: true,
				inside: { punctuation: /^`|`$/ }
			},
			function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
			keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
			boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
			number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
			operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
			punctuation: /[;[\]()`,.]/
		};
	}
}));
//#endregion
//#region node_modules/refractor/lang/bash.js
var require_bash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = bash;
	bash.displayName = "bash";
	bash.aliases = ["shell"];
	function bash(Prism) {
		(function(Prism) {
			var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
			var commandAfterHeredoc = {
				pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
				lookbehind: true,
				alias: "punctuation",
				inside: null
			};
			var insideString = {
				bash: commandAfterHeredoc,
				environment: {
					pattern: RegExp("\\$" + envVars),
					alias: "constant"
				},
				variable: [
					{
						pattern: /\$?\(\([\s\S]+?\)\)/,
						greedy: true,
						inside: {
							variable: [{
								pattern: /(^\$\(\([\s\S]+)\)\)/,
								lookbehind: true
							}, /^\$\(\(/],
							number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
							operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
							punctuation: /\(\(?|\)\)?|,|;/
						}
					},
					{
						pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
						greedy: true,
						inside: { variable: /^\$\(|^`|\)$|`$/ }
					},
					{
						pattern: /\$\{[^}]+\}/,
						greedy: true,
						inside: {
							operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
							punctuation: /[\[\]]/,
							environment: {
								pattern: RegExp("(\\{)" + envVars),
								lookbehind: true,
								alias: "constant"
							}
						}
					},
					/\$(?:\w+|[#?*!@$])/
				],
				entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
			};
			Prism.languages.bash = {
				shebang: {
					pattern: /^#!\s*\/.*/,
					alias: "important"
				},
				comment: {
					pattern: /(^|[^"{\\$])#.*/,
					lookbehind: true
				},
				"function-name": [{
					pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
					lookbehind: true,
					alias: "function"
				}, {
					pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
					alias: "function"
				}],
				"for-or-select": {
					pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
					alias: "variable",
					lookbehind: true
				},
				"assign-left": {
					pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
					inside: { environment: {
						pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
						lookbehind: true,
						alias: "constant"
					} },
					alias: "variable",
					lookbehind: true
				},
				string: [
					{
						pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
						lookbehind: true,
						greedy: true,
						inside: insideString
					},
					{
						pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
						lookbehind: true,
						greedy: true,
						inside: { bash: commandAfterHeredoc }
					},
					{
						pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
						lookbehind: true,
						greedy: true,
						inside: insideString
					},
					{
						pattern: /(^|[^$\\])'[^']*'/,
						lookbehind: true,
						greedy: true
					},
					{
						pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
						greedy: true,
						inside: { entity: insideString.entity }
					}
				],
				environment: {
					pattern: RegExp("\\$?" + envVars),
					alias: "constant"
				},
				variable: insideString.variable,
				function: {
					pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
					lookbehind: true
				},
				keyword: {
					pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
					lookbehind: true
				},
				builtin: {
					pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
					lookbehind: true,
					alias: "class-name"
				},
				boolean: {
					pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
					lookbehind: true
				},
				"file-descriptor": {
					pattern: /\B&\d\b/,
					alias: "important"
				},
				operator: {
					pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
					inside: { "file-descriptor": {
						pattern: /^\d/,
						alias: "important"
					} }
				},
				punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
				number: {
					pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
					lookbehind: true
				}
			};
			commandAfterHeredoc.inside = Prism.languages.bash;
			var toBeCopied = [
				"comment",
				"function-name",
				"for-or-select",
				"assign-left",
				"string",
				"environment",
				"function",
				"keyword",
				"builtin",
				"boolean",
				"file-descriptor",
				"operator",
				"punctuation",
				"number"
			];
			var inside = insideString.variable[1].inside;
			for (var i = 0; i < toBeCopied.length; i++) inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
			Prism.languages.shell = Prism.languages.bash;
		})(Prism);
	}
}));
//#endregion
//#region node_modules/refractor/lang/typescript.js
var require_typescript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typescript;
	typescript.displayName = "typescript";
	typescript.aliases = ["ts"];
	function typescript(Prism) {
		(function(Prism) {
			Prism.languages.typescript = Prism.languages.extend("javascript", {
				"class-name": {
					pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
					lookbehind: true,
					greedy: true,
					inside: null
				},
				builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
			});
			Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
			delete Prism.languages.typescript["parameter"];
			delete Prism.languages.typescript["literal-property"];
			var typeInside = Prism.languages.extend("typescript", {});
			delete typeInside["class-name"];
			Prism.languages.typescript["class-name"].inside = typeInside;
			Prism.languages.insertBefore("typescript", "function", {
				decorator: {
					pattern: /@[$\w\xA0-\uFFFF]+/,
					inside: {
						at: {
							pattern: /^@/,
							alias: "operator"
						},
						function: /^[\s\S]+/
					}
				},
				"generic-function": {
					pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
					greedy: true,
					inside: {
						function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
						generic: {
							pattern: /<[\s\S]+/,
							alias: "class-name",
							inside: typeInside
						}
					}
				}
			});
			Prism.languages.ts = Prism.languages.typescript;
		})(Prism);
	}
}));
//#endregion
//#region node_modules/refractor/lang/json.js
var require_json = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = json;
	json.displayName = "json";
	json.aliases = ["webmanifest"];
	function json(Prism) {
		Prism.languages.json = {
			property: {
				pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
				lookbehind: true,
				greedy: true
			},
			string: {
				pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
				lookbehind: true,
				greedy: true
			},
			comment: {
				pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
				greedy: true
			},
			number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
			punctuation: /[{}[\],]/,
			operator: /:/,
			boolean: /\b(?:false|true)\b/,
			null: {
				pattern: /\bnull\b/,
				alias: "keyword"
			}
		};
		Prism.languages.webmanifest = Prism.languages.json;
	}
})), material_dark_default = {
	"code[class*=\"language-\"]": {
		"textAlign": "left",
		"whiteSpace": "pre",
		"wordSpacing": "normal",
		"wordBreak": "normal",
		"wordWrap": "normal",
		"color": "#eee",
		"background": "#2f2f2f",
		"fontFamily": "Roboto Mono, monospace",
		"fontSize": "1em",
		"lineHeight": "1.5em",
		"MozTabSize": "4",
		"OTabSize": "4",
		"tabSize": "4",
		"WebkitHyphens": "none",
		"MozHyphens": "none",
		"msHyphens": "none",
		"hyphens": "none"
	},
	"pre[class*=\"language-\"]": {
		"textAlign": "left",
		"whiteSpace": "pre",
		"wordSpacing": "normal",
		"wordBreak": "normal",
		"wordWrap": "normal",
		"color": "#eee",
		"background": "#2f2f2f",
		"fontFamily": "Roboto Mono, monospace",
		"fontSize": "1em",
		"lineHeight": "1.5em",
		"MozTabSize": "4",
		"OTabSize": "4",
		"tabSize": "4",
		"WebkitHyphens": "none",
		"MozHyphens": "none",
		"msHyphens": "none",
		"hyphens": "none",
		"overflow": "auto",
		"position": "relative",
		"margin": "0.5em 0",
		"padding": "1.25em 1em"
	},
	"code[class*=\"language-\"]::-moz-selection": { "background": "#363636" },
	"pre[class*=\"language-\"]::-moz-selection": { "background": "#363636" },
	"code[class*=\"language-\"] ::-moz-selection": { "background": "#363636" },
	"pre[class*=\"language-\"] ::-moz-selection": { "background": "#363636" },
	"code[class*=\"language-\"]::selection": { "background": "#363636" },
	"pre[class*=\"language-\"]::selection": { "background": "#363636" },
	"code[class*=\"language-\"] ::selection": { "background": "#363636" },
	"pre[class*=\"language-\"] ::selection": { "background": "#363636" },
	":not(pre) > code[class*=\"language-\"]": {
		"whiteSpace": "normal",
		"borderRadius": "0.2em",
		"padding": "0.1em"
	},
	".language-css > code": { "color": "#fd9170" },
	".language-sass > code": { "color": "#fd9170" },
	".language-scss > code": { "color": "#fd9170" },
	"[class*=\"language-\"] .namespace": { "Opacity": "0.7" },
	"atrule": { "color": "#c792ea" },
	"attr-name": { "color": "#ffcb6b" },
	"attr-value": { "color": "#a5e844" },
	"attribute": { "color": "#a5e844" },
	"boolean": { "color": "#c792ea" },
	"builtin": { "color": "#ffcb6b" },
	"cdata": { "color": "#80cbc4" },
	"char": { "color": "#80cbc4" },
	"class": { "color": "#ffcb6b" },
	"class-name": { "color": "#f2ff00" },
	"comment": { "color": "#616161" },
	"constant": { "color": "#c792ea" },
	"deleted": { "color": "#ff6666" },
	"doctype": { "color": "#616161" },
	"entity": { "color": "#ff6666" },
	"function": { "color": "#c792ea" },
	"hexcode": { "color": "#f2ff00" },
	"id": {
		"color": "#c792ea",
		"fontWeight": "bold"
	},
	"important": {
		"color": "#c792ea",
		"fontWeight": "bold"
	},
	"inserted": { "color": "#80cbc4" },
	"keyword": { "color": "#c792ea" },
	"number": { "color": "#fd9170" },
	"operator": { "color": "#89ddff" },
	"prolog": { "color": "#616161" },
	"property": { "color": "#80cbc4" },
	"pseudo-class": { "color": "#a5e844" },
	"pseudo-element": { "color": "#a5e844" },
	"punctuation": { "color": "#89ddff" },
	"regex": { "color": "#f2ff00" },
	"selector": { "color": "#ff6666" },
	"string": { "color": "#a5e844" },
	"symbol": { "color": "#c792ea" },
	"tag": { "color": "#ff6666" },
	"unit": { "color": "#fd9170" },
	"url": { "color": "#ff6666" },
	"variable": { "color": "#ff6666" }
}, material_light_default = {
	"code[class*=\"language-\"]": {
		"textAlign": "left",
		"whiteSpace": "pre",
		"wordSpacing": "normal",
		"wordBreak": "normal",
		"wordWrap": "normal",
		"color": "#90a4ae",
		"background": "#fafafa",
		"fontFamily": "Roboto Mono, monospace",
		"fontSize": "1em",
		"lineHeight": "1.5em",
		"MozTabSize": "4",
		"OTabSize": "4",
		"tabSize": "4",
		"WebkitHyphens": "none",
		"MozHyphens": "none",
		"msHyphens": "none",
		"hyphens": "none"
	},
	"pre[class*=\"language-\"]": {
		"textAlign": "left",
		"whiteSpace": "pre",
		"wordSpacing": "normal",
		"wordBreak": "normal",
		"wordWrap": "normal",
		"color": "#90a4ae",
		"background": "#fafafa",
		"fontFamily": "Roboto Mono, monospace",
		"fontSize": "1em",
		"lineHeight": "1.5em",
		"MozTabSize": "4",
		"OTabSize": "4",
		"tabSize": "4",
		"WebkitHyphens": "none",
		"MozHyphens": "none",
		"msHyphens": "none",
		"hyphens": "none",
		"overflow": "auto",
		"position": "relative",
		"margin": "0.5em 0",
		"padding": "1.25em 1em"
	},
	"code[class*=\"language-\"]::-moz-selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	"pre[class*=\"language-\"]::-moz-selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	"code[class*=\"language-\"] ::-moz-selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	"pre[class*=\"language-\"] ::-moz-selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	"code[class*=\"language-\"]::selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	"pre[class*=\"language-\"]::selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	"code[class*=\"language-\"] ::selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	"pre[class*=\"language-\"] ::selection": {
		"background": "#cceae7",
		"color": "#263238"
	},
	":not(pre) > code[class*=\"language-\"]": {
		"whiteSpace": "normal",
		"borderRadius": "0.2em",
		"padding": "0.1em"
	},
	".language-css > code": { "color": "#f76d47" },
	".language-sass > code": { "color": "#f76d47" },
	".language-scss > code": { "color": "#f76d47" },
	"[class*=\"language-\"] .namespace": { "Opacity": "0.7" },
	"atrule": { "color": "#7c4dff" },
	"attr-name": { "color": "#39adb5" },
	"attr-value": { "color": "#f6a434" },
	"attribute": { "color": "#f6a434" },
	"boolean": { "color": "#7c4dff" },
	"builtin": { "color": "#39adb5" },
	"cdata": { "color": "#39adb5" },
	"char": { "color": "#39adb5" },
	"class": { "color": "#39adb5" },
	"class-name": { "color": "#6182b8" },
	"comment": { "color": "#aabfc9" },
	"constant": { "color": "#7c4dff" },
	"deleted": { "color": "#e53935" },
	"doctype": { "color": "#aabfc9" },
	"entity": { "color": "#e53935" },
	"function": { "color": "#7c4dff" },
	"hexcode": { "color": "#f76d47" },
	"id": {
		"color": "#7c4dff",
		"fontWeight": "bold"
	},
	"important": {
		"color": "#7c4dff",
		"fontWeight": "bold"
	},
	"inserted": { "color": "#39adb5" },
	"keyword": { "color": "#7c4dff" },
	"number": { "color": "#f76d47" },
	"operator": { "color": "#39adb5" },
	"prolog": { "color": "#aabfc9" },
	"property": { "color": "#39adb5" },
	"pseudo-class": { "color": "#f6a434" },
	"pseudo-element": { "color": "#f6a434" },
	"punctuation": { "color": "#39adb5" },
	"regex": { "color": "#6182b8" },
	"selector": { "color": "#e53935" },
	"string": { "color": "#f6a434" },
	"symbol": { "color": "#7c4dff" },
	"tag": { "color": "#e53935" },
	"unit": { "color": "#f76d47" },
	"url": { "color": "#e53935" },
	"variable": { "color": "#e53935" }
}, M = (e, i, s, u, m, a, l, h) => {
	let d = document.documentElement, w = ["light", "dark"];
	function p(n) {
		(Array.isArray(e) ? e : [e]).forEach((y) => {
			let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
			k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
		}), R(n);
	}
	function R(n) {
		h && w.includes(n) && (d.style.colorScheme = n);
	}
	function c() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	if (u) p(u);
	else try {
		let n = localStorage.getItem(i) || s;
		p(l && n === "system" ? c() : n);
	} catch (n) {}
}, x = import_react.createContext(void 0), U = {
	setTheme: (e) => {},
	themes: []
}, z = () => {
	var e;
	return (e = import_react.useContext(x)) != null ? e : U;
};
import_react.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
	let p = JSON.stringify([
		s,
		i,
		a,
		e,
		h,
		l,
		u,
		m
	]).slice(1, -1);
	return import_react.createElement("script", {
		...w,
		suppressHydrationWarning: !0,
		nonce: typeof window == "undefined" ? d : "",
		dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` }
	});
});
var javascript_default = (/* @__PURE__ */ __toESM(require_javascript())).default;
var typescript_default = (/* @__PURE__ */ __toESM(require_typescript())).default;
var json_default = (/* @__PURE__ */ __toESM(require_json())).default;
var markup_default = (/* @__PURE__ */ __toESM(require_markup())).default;
var css_default = (/* @__PURE__ */ __toESM(require_css())).default;
var bash_default = (/* @__PURE__ */ __toESM(require_bash())).default;
var sql_default = (/* @__PURE__ */ __toESM(require_sql())).default;
//#endregion
//#region utils/codeBlock.tsx
var codeBlock_exports = /* @__PURE__ */ __exportAll({ default: () => CodeBlock });
var import_jsx_runtime = require_jsx_runtime();
SyntaxHighlighter.registerLanguage("javascript", javascript_default);
SyntaxHighlighter.registerLanguage("typescript", typescript_default);
SyntaxHighlighter.registerLanguage("json", json_default);
SyntaxHighlighter.registerLanguage("html", markup_default);
SyntaxHighlighter.registerLanguage("css", css_default);
SyntaxHighlighter.registerLanguage("bash", bash_default);
SyntaxHighlighter.registerLanguage("sql", sql_default);
function CodeBlock({ code, language = "javascript" }) {
	const { resolvedTheme } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-6 overflow-auto rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SyntaxHighlighter, {
			language,
			style: resolvedTheme === "dark" ? material_dark_default : material_light_default,
			showLineNumbers: true,
			wrapLines: false,
			codeTagProps: { style: { backgroundColor: "transparent" } },
			customStyle: {
				backgroundColor: "transparent",
				padding: "1rem",
				margin: 0
			},
			children: code
		})
	});
}
//#endregion
export { codeBlock_exports as n, CodeBlock as t };
