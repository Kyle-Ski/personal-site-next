import { V as require_react, Y as __toESM, r as useScriptNonce, t as require_react_dom } from "../../index.js";
//#region node_modules/vinext/dist/shims/head.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Tags allowed inside <head>. Anything else is silently dropped.
* This prevents injection of dangerous elements like <iframe>, <object>, etc.
*/
var ALLOWED_HEAD_TAGS = new Set([
	"title",
	"meta",
	"link",
	"style",
	"script",
	"base",
	"noscript"
]);
Array.from(ALLOWED_HEAD_TAGS).join(", ");
/**
* Escape content that will be placed inside a raw <script> or <style> tag
* during SSR. The HTML parser treats `<\/script>` (or `</style>`) as the end
* of the block regardless of JavaScript string context, so any occurrence
* of `</` followed by the tag name must be escaped.
*
* We replace `<\/script` and `</style` (case-insensitive) with `<\/script`
* and `<\/style` respectively. The `<\/` form is harmless in JS/CSS string
* context but prevents the HTML parser from seeing a closing tag.
*/
function escapeInlineContent(content, tag) {
	const pattern = new RegExp(`<\\/(${tag})`, "gi");
	return content.replace(pattern, "<\\/$1");
}
//#endregion
//#region node_modules/vinext/dist/shims/script.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
/**
* next/script shim
*
* Provides the <Script> component for loading third-party scripts with
* configurable loading strategies.
*
* Strategies:
*   - "beforeInteractive": rendered as a <script> tag in SSR output
*   - "afterInteractive" (default): loaded client-side after hydration
*   - "lazyOnload": deferred until window.load + requestIdleCallback
*   - "worker": sets type="text/partytown" (requires Partytown setup)
*/
var loadedScripts = /* @__PURE__ */ new Set();
var loadingScripts = /* @__PURE__ */ new Map();
function getClientAutoNonce() {
	if (typeof document === "undefined") return void 0;
	const existingNonceElement = document.querySelector("[nonce]");
	if (!(existingNonceElement instanceof HTMLElement)) return;
	return existingNonceElement.nonce || existingNonceElement.getAttribute("nonce") || void 0;
}
function resolveScriptNonce(explicitNonce, contextualNonce) {
	if (typeof explicitNonce === "string" && explicitNonce.length > 0) return explicitNonce;
	if (typeof window === "undefined") return contextualNonce;
	return getClientAutoNonce();
}
function buildBeforeInteractiveScriptProps(options) {
	const scriptProps = { ...options.rest };
	if (options.src) scriptProps.src = options.src;
	if (options.id) scriptProps.id = options.id;
	if (options.resolvedNonce) scriptProps.nonce = options.resolvedNonce;
	if (options.dangerouslySetInnerHTML) scriptProps.dangerouslySetInnerHTML = { __html: escapeInlineContent(options.dangerouslySetInnerHTML.__html, "script") };
	return scriptProps;
}
function setBooleanScriptAttribute(el, attr, value) {
	const enabled = value !== false && value !== "false" && Boolean(value);
	switch (attr) {
		case "async":
			el.async = enabled;
			break;
		case "defer":
			el.defer = enabled;
			break;
		case "noModule":
		case "nomodule":
			el.noModule = enabled;
			break;
		default: return false;
	}
	if (!enabled) {
		el.setAttribute(attr, "");
		el.removeAttribute(attr);
	}
	return true;
}
function setScriptAttributes(el, rest) {
	for (const [attr, value] of Object.entries(rest)) {
		if (attr === "dangerouslySetInnerHTML") continue;
		if (value === void 0) continue;
		if (setBooleanScriptAttribute(el, attr, value)) continue;
		if (attr === "className" && typeof value === "string") el.setAttribute("class", value);
		else if (typeof value === "string") el.setAttribute(attr, value);
		else if (typeof value === "boolean" && value) el.setAttribute(attr, "");
	}
}
function loadClientScript(props, options) {
	const { src, id, onLoad, onReady, onError, strategy = "afterInteractive", children, dangerouslySetInnerHTML, ...rest } = props;
	if (typeof window === "undefined") return;
	const key = id ?? src ?? "";
	if (key && loadedScripts.has(key)) {
		if (options.fireReadyWhenAlreadyLoaded) onReady?.();
		return;
	}
	if (src) {
		const existingLoad = loadingScripts.get(src);
		if (existingLoad) {
			existingLoad.then((event) => {
				if (key) loadedScripts.add(key);
				onLoad?.(event);
				onReady?.();
			}, (event) => onError?.(event));
			return;
		}
	}
	const el = document.createElement("script");
	if (src) el.src = src;
	if (id) el.id = id;
	setScriptAttributes(el, rest);
	if (options.resolvedNonce && !el.getAttribute("nonce")) el.setAttribute("nonce", options.resolvedNonce);
	if (strategy === "worker") el.setAttribute("type", "text/partytown");
	const markLoaded = () => {
		if (key) loadedScripts.add(key);
		onReady?.();
	};
	if (dangerouslySetInnerHTML?.__html) {
		el.innerHTML = dangerouslySetInnerHTML.__html;
		markLoaded();
	} else if (children && typeof children === "string") {
		el.textContent = children;
		markLoaded();
	} else if (src) {
		const loadPromise = new Promise((resolve, reject) => {
			el.addEventListener("load", (event) => {
				resolve(event);
				if (key) loadedScripts.add(key);
				onLoad?.(event);
				onReady?.();
			});
			el.addEventListener("error", (event) => {
				reject(event);
				onError?.(event);
			});
		});
		loadPromise.catch(() => void 0).finally(() => loadingScripts.delete(src));
		loadingScripts.set(src, loadPromise);
	}
	document.body.appendChild(el);
}
function Script(props) {
	const { src, id, strategy = "afterInteractive", onLoad, onReady, onError, children, dangerouslySetInnerHTML, ...rest } = props;
	const hasMounted = (0, import_react.useRef)(false);
	const key = id ?? src ?? "";
	const contextualNonce = useScriptNonce();
	const resolvedNonce = resolveScriptNonce(rest.nonce, contextualNonce);
	(0, import_react.useEffect)(() => {
		if (hasMounted.current) return;
		hasMounted.current = true;
		if (strategy === "beforeInteractive") return;
		if (key && loadedScripts.has(key)) {
			onReady?.();
			return;
		}
		const load = () => {
			if (key && loadedScripts.has(key)) {
				onReady?.();
				return;
			}
			loadClientScript({
				src,
				id,
				strategy,
				onLoad,
				onReady,
				onError,
				children,
				dangerouslySetInnerHTML,
				...rest
			}, {
				resolvedNonce,
				fireReadyWhenAlreadyLoaded: true
			});
		};
		if (strategy === "lazyOnload") if (document.readyState === "complete") if (typeof requestIdleCallback === "function") requestIdleCallback(load);
		else setTimeout(load, 1);
		else window.addEventListener("load", () => {
			if (typeof requestIdleCallback === "function") requestIdleCallback(load);
			else setTimeout(load, 1);
		});
		else load();
	}, [
		src,
		id,
		strategy,
		onLoad,
		onReady,
		onError,
		children,
		dangerouslySetInnerHTML,
		key,
		resolvedNonce,
		rest
	]);
	if (typeof window === "undefined") {
		if (src && typeof import_react_dom.preload === "function" && (strategy === "afterInteractive" || strategy === "beforeInteractive")) {
			const integrity = typeof rest.integrity === "string" ? rest.integrity : void 0;
			const preloadOptions = {
				as: "script",
				crossOrigin: rest.crossOrigin === "anonymous" || rest.crossOrigin === "use-credentials" ? rest.crossOrigin : void 0
			};
			if (resolvedNonce !== void 0) preloadOptions.nonce = resolvedNonce;
			if (integrity !== void 0) preloadOptions.integrity = integrity;
			import_react_dom.preload(src, preloadOptions);
		}
		if (strategy === "beforeInteractive") return import_react.createElement("script", buildBeforeInteractiveScriptProps({
			src,
			id,
			rest,
			resolvedNonce,
			dangerouslySetInnerHTML
		}), children);
		return null;
	}
	if (strategy === "beforeInteractive") return import_react.createElement("script", buildBeforeInteractiveScriptProps({
		src,
		id,
		rest,
		resolvedNonce,
		dangerouslySetInnerHTML
	}), children);
	return null;
}
//#endregion
export { Script as default };
