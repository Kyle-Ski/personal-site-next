import { A as isAbsoluteOrProtocolRelativeUrl, F as toSameOriginAppPath, L as assertSafeNavigationUrl, M as normalizePathTrailingSlash, O as isUnknownRecord, P as toBrowserNavigationHref, S as routePatternParts, V as require_react, W as stripBasePath, Y as __toESM, j as isHashOnlyBrowserUrlChange, k as scrollToHashTarget, x as matchRoutePattern } from "../../index.js";
import { a as getDomainLocaleUrl, c as appendSearchParamsToUrl, i as addLocalePrefix, l as urlQueryToSearchParams, o as getLocalePathPrefix, r as getCurrentBrowserLocale, s as addQueryParam } from "./link-tMsNEX__.js";
//#region node_modules/vinext/dist/shims/internal/router-context.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Shim for next/dist/shared/lib/router-context.shared-runtime
*
* Used by: some testing utilities and older libraries.
* Provides the Pages Router context.
*/
var RouterContext = (0, import_react.createContext)(null);
//#endregion
//#region node_modules/vinext/dist/client/vinext-next-data.js
function extractVinextNextDataJson(html) {
	const assignment = /<script(?:\s[^>]*)?>\s*window\.__NEXT_DATA__\s*=\s*/.exec(html);
	if (!assignment || assignment.index === void 0) return null;
	let start = assignment.index + assignment[0].length;
	while (html[start] === " " || html[start] === "\n" || html[start] === "	" || html[start] === "\r") start++;
	if (html[start] !== "{") return null;
	let depth = 0;
	let inString = false;
	let escaped = false;
	for (let index = start; index < html.length; index++) {
		const char = html[index];
		if (inString) {
			if (escaped) escaped = false;
			else if (char === "\\") escaped = true;
			else if (char === "\"") inString = false;
			continue;
		}
		if (char === "\"") inString = true;
		else if (char === "{") depth++;
		else if (char === "}") {
			depth--;
			if (depth === 0) return html.slice(start, index + 1);
		}
	}
	return null;
}
function parseVinextNextDataJson(json) {
	const parsed = JSON.parse(json);
	if (!isBrowserVinextNextData(parsed)) throw new Error("Navigation failed: invalid __NEXT_DATA__ in response");
	return parsed;
}
function isBrowserVinextNextData(value) {
	if (!isUnknownRecord(value)) return false;
	const props = value.props;
	const page = value.page;
	const query = value.query;
	const vinext = value.__vinext;
	return isUnknownRecord(props) && typeof page === "string" && isUnknownRecord(query) && (vinext === void 0 || isUnknownRecord(vinext));
}
function applyVinextLocaleGlobals(target, nextData) {
	if (nextData.locale !== void 0) target.__VINEXT_LOCALE__ = nextData.locale;
	if (nextData.locales !== void 0) target.__VINEXT_LOCALES__ = [...nextData.locales];
	if (nextData.defaultLocale !== void 0) target.__VINEXT_DEFAULT_LOCALE__ = nextData.defaultLocale;
}
//#endregion
//#region node_modules/vinext/dist/client/validate-module-path.js
/**
* Defense-in-depth: validate module paths before passing them to dynamic import().
*
* Shared between entry.ts (initial hydration) and router.ts (client-side navigation)
* to ensure all dynamic imports of page/app modules go through the same validation.
*
* Blocks:
* - Non-string or empty values
* - Paths that don't start with `/` or `./` (e.g., `https://evil.com/...`)
* - Protocol URLs (`://`)
* - Protocol-relative URLs (`//...`)
* - Directory traversal (`..`)
*/
function isValidModulePath(p) {
	if (typeof p !== "string" || p.length === 0) return false;
	if (!p.startsWith("/") && !p.startsWith("./")) return false;
	if (p.startsWith("//")) return false;
	if (p.includes("://")) return false;
	if (p.includes("..")) return false;
	return true;
}
//#endregion
//#region node_modules/vinext/dist/client/window-next.js
/**
* Build-time replacement for the vinext package version, injected by the
* Vite plugin via `define` (see `index.ts` — `process.env.__NEXT_VERSION`
* is mirrored from `packages/vinext/package.json#version` so library
* callers that read `process.env.__NEXT_VERSION` see a real value).
*
* In environments where the define did not run (standalone unit tests
* that import this module without going through the plugin), the
* `?? "vinext"` fallback prevents a literal `undefined` from landing on
* `window.next.version`.
*/
var VINEXT_VERSION = "0.0.52";
/**
* Install `window.next` if it has not already been installed in this
* document. Subsequent calls update fields in place so both the Pages
* Router and the App Router bootstraps can call this without clobbering
* each other (e.g. for hybrid `pages/` + `app/` setups).
*
* When called a second time, `router` and `appDir` overwrite the previous
* values. This mirrors Next.js's load order: in a hybrid app the App
* Router's `app-bootstrap.ts` runs after Pages Router's `next.ts` and the
* App Router instance wins.
*
* No module-level cache: we read and write through `window.next` directly
* so that a test (or userland code) that deletes `window.next` cleanly
* resets state.
*/
function installWindowNext(fields) {
	if (typeof window === "undefined") return;
	const existing = window.next;
	if (existing) {
		if (fields.version !== void 0) existing.version = fields.version;
		if (fields.appDir !== void 0) existing.appDir = fields.appDir;
		if (fields.router !== void 0) existing.router = fields.router;
		if (fields.__pendingUrl !== void 0) existing.__pendingUrl = fields.__pendingUrl;
		if (fields.__internal_src_page !== void 0) existing.__internal_src_page = fields.__internal_src_page;
		return;
	}
	window.next = {
		version: fields.version ?? VINEXT_VERSION,
		...fields
	};
}
//#endregion
//#region node_modules/vinext/dist/shims/router.js
/**
* next/router shim
*
* Provides useRouter() hook and Router singleton for Pages Router.
* Backed by the browser History API. Supports client-side navigation
* by fetching new page data and re-rendering the React root.
*/
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath = "";
/** trailingSlash from next.config.js, injected by the plugin at build time */
var __trailingSlash = false;
function createRouterEvents() {
	const listeners = /* @__PURE__ */ new Map();
	return {
		on(event, handler) {
			if (!listeners.has(event)) listeners.set(event, /* @__PURE__ */ new Set());
			listeners.get(event).add(handler);
		},
		off(event, handler) {
			listeners.get(event)?.delete(handler);
		},
		emit(event, ...args) {
			listeners.get(event)?.forEach((handler) => handler(...args));
		}
	};
}
var routerEvents = createRouterEvents();
function resolveUrl(url) {
	if (typeof url === "string") return url;
	let result = url.pathname ?? "/";
	if (url.query) {
		const params = urlQueryToSearchParams(url.query);
		result = appendSearchParamsToUrl(result, params);
	}
	return result;
}
/**
* When `as` is provided, use it as the navigation target. This is a
* simplification: Next.js keeps `url` and `as` as separate values (url for
* data fetching, as for the browser URL). We collapse them because vinext's
* navigateClient() fetches HTML from the target URL, so `as` must be a
* server-resolvable path. Purely decorative `as` values are not supported.
*/
function resolveNavigationTarget(url, as, locale) {
	return applyNavigationLocale(as ?? resolveUrl(url), locale);
}
function getCurrentUrlLocale() {
	return getCurrentBrowserLocale({
		basePath: __basePath,
		domainLocales: getDomainLocales(),
		hostname: getCurrentHostname()
	});
}
function resolveTransitionLocale(locale) {
	if (typeof window === "undefined") return void 0;
	if (locale === false) return window.__VINEXT_DEFAULT_LOCALE__;
	return locale ?? getCurrentUrlLocale();
}
function getDomainLocales() {
	return window.__NEXT_DATA__?.domainLocales;
}
function getCurrentHostname() {
	return window.location?.hostname;
}
function getDomainLocalePath(url, locale) {
	return getDomainLocaleUrl(url, locale, {
		basePath: __basePath,
		currentHostname: getCurrentHostname(),
		domainItems: getDomainLocales()
	});
}
/**
* Apply locale prefix to a URL for client-side navigation.
* Same logic as Link's applyLocaleToHref but reads from window globals.
*/
function applyNavigationLocale(url, locale) {
	if (!locale || typeof window === "undefined") return url;
	if (isAbsoluteOrProtocolRelativeUrl(url)) return url;
	if (getLocalePathPrefix(url, window.__VINEXT_LOCALES__)) return url;
	const domainLocalePath = getDomainLocalePath(url, locale);
	if (domainLocalePath) return domainLocalePath;
	return addLocalePrefix(url, locale, window.__VINEXT_DEFAULT_LOCALE__ ?? "");
}
function isDefaultLocaleRootNavigation(url, locale) {
	if (typeof window === "undefined") return false;
	if (!locale || locale !== window.__VINEXT_DEFAULT_LOCALE__) return false;
	let parsed;
	try {
		parsed = new URL(url, window.location.href);
	} catch {
		return false;
	}
	return stripBasePath(parsed.pathname, __basePath) === "/";
}
function getPagesHtmlFetchUrl(browserUrl, locale) {
	if (!isDefaultLocaleRootNavigation(browserUrl, locale)) return browserUrl;
	const parsed = new URL(browserUrl, window.location.href);
	return normalizePathTrailingSlash(toBrowserNavigationHref(`${normalizePathTrailingSlash(`/${locale}`, __trailingSlash)}${parsed.search}${parsed.hash}`, window.location.href, __basePath), __trailingSlash);
}
/** Check if a URL is external (any URL scheme per RFC 3986, or protocol-relative) */
function isExternalUrl(url) {
	return isAbsoluteOrProtocolRelativeUrl(url);
}
/** Resolve a hash URL to a basePath-stripped app URL for event payloads */
function resolveHashUrl(url) {
	if (typeof window === "undefined") return url;
	if (url.startsWith("#")) return stripBasePath(window.location.pathname, __basePath) + window.location.search + url;
	try {
		const parsed = new URL(url, window.location.href);
		return stripBasePath(parsed.pathname, __basePath) + parsed.search + parsed.hash;
	} catch {
		return url;
	}
}
/** Check if a href is only a hash change relative to the current URL */
function isHashOnlyChange(href) {
	if (href.startsWith("#")) return true;
	if (typeof window === "undefined") return false;
	return isHashOnlyBrowserUrlChange(href, window.location.href, __basePath);
}
/** Save current scroll position into history state for back/forward restoration */
function saveScrollPosition() {
	const state = window.history.state ?? {};
	window.history.replaceState({
		...state,
		__vinext_scrollX: window.scrollX,
		__vinext_scrollY: window.scrollY
	}, "");
}
var _ssrContext = null;
var _getSSRContext = () => _ssrContext;
var _cachedClientPagesNavCtx = null;
var _cachedClientPagesNavCtxKey = null;
function _buildClientPagesNavigationContext(routePattern, resolvedPath, searchString) {
	const cacheKey = `${routePattern}|${resolvedPath}|${searchString}`;
	if (_cachedClientPagesNavCtxKey === cacheKey && _cachedClientPagesNavCtx) return _cachedClientPagesNavCtx;
	const ctx = {
		pathname: resolvedPath,
		searchParams: new URLSearchParams(searchString),
		params: routePattern ? extractRouteParamsFromPath(routePattern, resolvedPath) ?? {} : {}
	};
	_cachedClientPagesNavCtx = ctx;
	_cachedClientPagesNavCtxKey = cacheKey;
	return ctx;
}
/**
* Cross-router compat shim source for `next/navigation` hooks.
*
* Returns the current Pages Router state shaped as a navigation context so
* the App Router hooks (useParams/useSearchParams/usePathname) can act as
* compat shims when invoked inside a Pages Router render. Mirrors Next.js's
* `adaptForPathParams` and `adaptForSearchParams` in
* .nextjs-ref/packages/next/src/shared/lib/router/adapters.tsx, which Next.js
* uses to populate SearchParamsContext / PathParamsContext for the Pages
* Router (see packages/next/src/server/render.tsx and
* packages/next/src/client/index.tsx).
*
* Returns `null` when there is no Pages Router state available — e.g. App
* Router pages, RSC-only renders, or pre-router renders. Callers should
* treat null as "App Router context, use normal app-router state".
*/
function getPagesNavigationContext() {
	if (typeof window === "undefined") {
		const ssrCtx = _getSSRContext();
		if (!ssrCtx) return null;
		let searchParams;
		let resolvedPath;
		try {
			const url = new URL(ssrCtx.asPath, "http://_");
			searchParams = url.searchParams;
			resolvedPath = url.pathname;
		} catch {
			searchParams = new URLSearchParams();
			resolvedPath = ssrCtx.pathname;
		}
		const params = extractRouteParamsFromPath(ssrCtx.pathname, resolvedPath) ?? {};
		return {
			pathname: resolvedPath,
			searchParams,
			params
		};
	}
	const resolvedPath = stripBasePath(window.location.pathname, __basePath);
	return _buildClientPagesNavigationContext(window.__NEXT_DATA__?.page ?? "", resolvedPath, window.location.search);
}
/**
* Extract param names from a Next.js route pattern.
* E.g., "/posts/[id]" → ["id"], "/docs/[...slug]" → ["slug"],
* "/shop/[[...path]]" → ["path"], "/blog/[year]/[month]" → ["year", "month"]
* Also handles internal format: "/posts/:id" → ["id"], "/docs/:slug+" → ["slug"]
*/
function extractRouteParamNames(pattern) {
	const names = [];
	const bracketMatches = pattern.matchAll(/\[{1,2}(?:\.\.\.)?([^\]]+)\]{1,2}/g);
	for (const m of bracketMatches) names.push(m[1]);
	if (names.length > 0) return names;
	const colonMatches = pattern.matchAll(/:([^/+*]+)[+*]?/g);
	for (const m of colonMatches) names.push(m[1]);
	return names;
}
function splitPathSegments(pathname) {
	return pathname.split("/").filter(Boolean);
}
function extractRouteParamsFromPath(pattern, pathname) {
	return matchRoutePattern(splitPathSegments(pathname), routePatternParts(pattern));
}
function getRouteQueryFromNextData(nextData, resolvedPath) {
	const routeQuery = {};
	if (!nextData?.query || !nextData.page) return routeQuery;
	const routeParamNames = extractRouteParamNames(nextData.page);
	if (routeParamNames.length === 0) return routeQuery;
	const currentRouteParams = extractRouteParamsFromPath(nextData.page, resolvedPath);
	if (currentRouteParams) return currentRouteParams;
	for (const key of routeParamNames) {
		const value = nextData.query[key];
		if (typeof value === "string") routeQuery[key] = value;
		else if (Array.isArray(value)) routeQuery[key] = [...value];
	}
	return routeQuery;
}
function getPathnameAndQuery() {
	if (typeof window === "undefined") {
		const _ssrCtx = _getSSRContext();
		if (_ssrCtx) {
			const query = {};
			for (const [key, value] of Object.entries(_ssrCtx.query)) query[key] = Array.isArray(value) ? [...value] : value;
			return {
				pathname: _ssrCtx.pathname,
				query,
				asPath: _ssrCtx.asPath
			};
		}
		return {
			pathname: "/",
			query: {},
			asPath: "/"
		};
	}
	const resolvedPath = stripBasePath(window.location.pathname, __basePath);
	const pathname = window.__NEXT_DATA__?.page ?? resolvedPath;
	const nextData = window.__NEXT_DATA__;
	const routeQuery = getRouteQueryFromNextData(nextData, resolvedPath);
	const searchQuery = {};
	const params = new URLSearchParams(window.location.search);
	for (const [key, value] of params) addQueryParam(searchQuery, key, value);
	return {
		pathname,
		query: {
			...searchQuery,
			...routeQuery
		},
		asPath: resolvedPath + window.location.search + window.location.hash
	};
}
/**
* Error thrown when a navigation is superseded by a newer one.
* Matches Next.js's convention of an Error with `.cancelled = true`.
*/
var NavigationCancelledError = class extends Error {
	cancelled = true;
	constructor(route) {
		super(`Abort fetching component for route: "${route}"`);
		this.name = "NavigationCancelledError";
	}
};
/**
* Error thrown after queueing a hard navigation fallback for a known failure
* mode. Callers can use this to avoid scheduling the same hard navigation twice.
*/
var HardNavigationScheduledError = class extends Error {
	hardNavigationScheduled = true;
	constructor(message) {
		super(message);
		this.name = "HardNavigationScheduledError";
	}
};
/**
* Monotonically increasing ID for tracking the current navigation.
* Each call to navigateClient() increments this and captures the value.
* After each async boundary, the navigation checks whether it is still
* the active one. If a newer navigation has started, the stale one
* throws NavigationCancelledError so the caller can emit routeChangeError
* and skip routeChangeComplete.
*
* Replaces the old boolean `_navInProgress` guard which silently dropped
* the second navigation, causing URL/content mismatch.
*/
var _navigationId = 0;
/** AbortController for the in-flight fetch, so superseded navigations abort network I/O. */
var _activeAbortController = null;
function scheduleHardNavigationAndThrow(url, message) {
	if (typeof window === "undefined") throw new HardNavigationScheduledError(message);
	window.location.href = url;
	throw new HardNavigationScheduledError(message);
}
/**
* Perform client-side navigation: fetch the target page's HTML,
* extract __NEXT_DATA__, and re-render the React root.
*
* Throws NavigationCancelledError if a newer navigation supersedes this one.
* Throws on hard-navigation failures (non-OK response, missing data) so the
* caller can distinguish success from failure for event emission.
*/
async function navigateClient(url, fetchUrl = url) {
	if (typeof window === "undefined") return;
	const root = window.__VINEXT_ROOT__;
	if (!root) {
		window.location.href = url;
		return;
	}
	_activeAbortController?.abort();
	const controller = new AbortController();
	_activeAbortController = controller;
	const navId = ++_navigationId;
	/** Check if this navigation is still the active one. If not, throw. */
	function assertStillCurrent() {
		if (navId !== _navigationId) throw new NavigationCancelledError(url);
	}
	try {
		let res;
		try {
			res = await fetch(fetchUrl, {
				headers: { Accept: "text/html" },
				signal: controller.signal
			});
		} catch (err) {
			if (err instanceof DOMException && err.name === "AbortError") throw new NavigationCancelledError(url);
			throw err;
		}
		assertStillCurrent();
		if (!res.ok) scheduleHardNavigationAndThrow(url, `Navigation failed: ${res.status} ${res.statusText}`);
		const html = await res.text();
		assertStillCurrent();
		const nextDataJson = extractVinextNextDataJson(html);
		if (!nextDataJson) scheduleHardNavigationAndThrow(url, "Navigation failed: missing __NEXT_DATA__ in response");
		const nextData = parseVinextNextDataJson(nextDataJson);
		const { pageProps } = nextData.props;
		let pageModuleUrl = nextData.__vinext?.pageModuleUrl;
		if (!pageModuleUrl) {
			const moduleMatch = html.match(/import\("([^"]+)"\);\s*\n\s*const PageComponent/);
			const altMatch = html.match(/await import\("([^"]+pages\/[^"]+)"\)/);
			pageModuleUrl = moduleMatch?.[1] ?? altMatch?.[1] ?? void 0;
		}
		if (!pageModuleUrl) scheduleHardNavigationAndThrow(url, "Navigation failed: no page module URL found");
		if (!isValidModulePath(pageModuleUrl)) {
			console.error("[vinext] Blocked import of invalid page module path:", pageModuleUrl);
			scheduleHardNavigationAndThrow(url, "Navigation failed: invalid page module path");
		}
		const pageModule = await import(
			/* @vite-ignore */
			pageModuleUrl
);
		assertStillCurrent();
		const PageComponent = pageModule.default;
		if (!PageComponent) scheduleHardNavigationAndThrow(url, "Navigation failed: page module has no default export");
		const React = (await import("../../index.js").then((n) => /* @__PURE__ */ __toESM(n.V(), 1))).default;
		assertStillCurrent();
		let AppComponent = window.__VINEXT_APP__;
		const appModuleUrl = nextData.__vinext?.appModuleUrl;
		if (!AppComponent && appModuleUrl) if (!isValidModulePath(appModuleUrl)) console.error("[vinext] Blocked import of invalid app module path:", appModuleUrl);
		else try {
			AppComponent = (await import(
				/* @vite-ignore */
				appModuleUrl
)).default;
			window.__VINEXT_APP__ = AppComponent;
		} catch {}
		assertStillCurrent();
		let element;
		if (AppComponent) element = React.createElement(AppComponent, {
			Component: PageComponent,
			pageProps
		});
		else element = React.createElement(PageComponent, pageProps);
		element = wrapWithRouterContext(element);
		window.__NEXT_DATA__ = nextData;
		applyVinextLocaleGlobals(window, nextData);
		root.render(element);
	} finally {
		if (navId === _navigationId) _activeAbortController = null;
	}
}
/**
* Run navigateClient and handle errors: emit routeChangeError on failure,
* and fall back to a hard navigation for non-cancel errors so the browser
* recovers to a consistent state.
*
* Returns:
* - "completed" — navigation finished, caller should emit routeChangeComplete
* - "cancelled" — superseded by a newer navigation, caller should return true
*   without emitting routeChangeComplete (matches Next.js behaviour)
* - "failed" — genuine error, caller should return false (hard nav is already
*   scheduled as recovery)
*/
async function runNavigateClient(fullUrl, resolvedUrl, fetchUrl = fullUrl) {
	try {
		await navigateClient(fullUrl, fetchUrl);
		return "completed";
	} catch (err) {
		routerEvents.emit("routeChangeError", err, resolvedUrl, { shallow: false });
		if (err instanceof NavigationCancelledError) return "cancelled";
		if (typeof window !== "undefined" && !(err instanceof HardNavigationScheduledError)) window.location.href = fullUrl;
		return "failed";
	}
}
/**
* Build the full router value object from the current pathname, query, asPath,
* and a set of navigation methods. Shared by the Pages Router context provider
* and tests so the public router shape stays in sync.
*/
function buildRouterValue(pathname, query, asPath, methods) {
	const _ssrState = _getSSRContext();
	const nextData = typeof window !== "undefined" ? window.__NEXT_DATA__ : void 0;
	const locale = typeof window === "undefined" ? _ssrState?.locale : window.__VINEXT_LOCALE__;
	const locales = typeof window === "undefined" ? _ssrState?.locales : window.__VINEXT_LOCALES__;
	const defaultLocale = typeof window === "undefined" ? _ssrState?.defaultLocale : window.__VINEXT_DEFAULT_LOCALE__;
	const domainLocales = typeof window === "undefined" ? _ssrState?.domainLocales : nextData?.domainLocales;
	return {
		pathname,
		route: typeof window !== "undefined" ? nextData?.page ?? pathname : pathname,
		query,
		asPath,
		basePath: __basePath,
		locale,
		locales,
		defaultLocale,
		domainLocales,
		isReady: true,
		isPreview: false,
		isFallback: typeof window !== "undefined" ? nextData?.isFallback === true : _ssrState?.isFallback === true,
		...methods,
		events: routerEvents
	};
}
/** Extract the hash fragment from a URL, including the leading `#`. */
function extractHash(url) {
	const i = url.indexOf("#");
	return i === -1 ? "" : url.slice(i);
}
/** Notify in-page listeners (e.g. useRouter hooks) that navigation occurred. */
function dispatchNavigateEvent() {
	window.dispatchEvent(new CustomEvent("vinext:navigate"));
}
/**
* Update history with the new URL and refresh the hash-only-detection tracker.
* Centralises the `pushState`/`replaceState` branch so callers don't repeat it.
*/
function updateHistory(mode, url) {
	if (mode === "push") window.history.pushState({}, "", url);
	else window.history.replaceState({}, "", url);
	_lastPathnameAndSearch = window.location.pathname + window.location.search;
}
/**
* Throw the canonical "no router instance" error used when a Pages Router
* navigation method (push/replace/back/reload/prefetch/beforePopState) is
* invoked during SSR or prerendering.
*
* Mirrors Next.js's `ServerRouter.push`/`replace`/etc. which all call
* `noRouter()` in `packages/next/src/server/render.tsx`. The error message
* matches Next.js verbatim so userland error handling and docs links work
* unchanged.
*
* Ported from Next.js: packages/next/src/server/render.tsx
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/render.tsx
*/
function throwNoRouterInstance() {
	throw new Error("No router instance found. you should only use \"next/router\" inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance");
}
/**
* Shared client-side navigation flow used by both `useRouter()` and the
* `Router` singleton. The only differences between push/replace are the
* history method (`pushState` vs `replaceState`), the external-URL fallback
* (`assign` vs `replace`), and the fact that push saves scroll position for
* back/forward restoration while replace does not.
*
* `onStateUpdate` lets the hook trigger a `setState` re-render at the same
* point that hashChangeComplete/routeChangeComplete fires; the singleton
* passes no callback.
*/
async function performNavigation(url, as, options, mode, onStateUpdate) {
	if (typeof window === "undefined") throwNoRouterInstance();
	assertSafeNavigationUrl(resolveUrl(url));
	if (as !== void 0) assertSafeNavigationUrl(String(as));
	const navigationLocale = resolveTransitionLocale(options?.locale);
	let resolved = resolveNavigationTarget(url, as, navigationLocale);
	if (isExternalUrl(resolved)) {
		const localPath = toSameOriginAppPath(resolved, __basePath);
		if (localPath == null) {
			if (mode === "push") window.location.assign(resolved);
			else window.location.replace(resolved);
			return true;
		}
		resolved = localPath;
	}
	resolved = normalizePathTrailingSlash(resolved, __trailingSlash);
	const full = normalizePathTrailingSlash(toBrowserNavigationHref(resolved, window.location.href, __basePath), __trailingSlash);
	const htmlFetchUrl = getPagesHtmlFetchUrl(full, navigationLocale);
	const shallow = options?.shallow ?? false;
	const doScroll = options?.scroll !== false;
	if (isHashOnlyChange(full)) {
		const eventUrl = resolveHashUrl(full);
		routerEvents.emit("hashChangeStart", eventUrl, { shallow });
		updateHistory(mode, resolved.startsWith("#") ? resolved : full);
		if (doScroll) scrollToHashTarget(extractHash(resolved));
		onStateUpdate?.();
		routerEvents.emit("hashChangeComplete", eventUrl, { shallow });
		dispatchNavigateEvent();
		return true;
	}
	if (mode === "push") saveScrollPosition();
	routerEvents.emit("routeChangeStart", resolved, { shallow });
	routerEvents.emit("beforeHistoryChange", resolved, { shallow });
	updateHistory(mode, full);
	if (!shallow) {
		const result = await runNavigateClient(full, resolved, htmlFetchUrl);
		if (result === "cancelled") return true;
		if (result === "failed") return false;
	}
	onStateUpdate?.();
	routerEvents.emit("routeChangeComplete", resolved, { shallow });
	const hash = extractHash(resolved);
	if (doScroll) if (hash) scrollToHashTarget(hash);
	else window.scrollTo(0, 0);
	dispatchNavigateEvent();
	return true;
}
/** Inject a `<link rel="prefetch">` for the target page. */
async function prefetchUrl(url) {
	if (typeof document !== "undefined") {
		const link = document.createElement("link");
		link.rel = "prefetch";
		link.href = url;
		link.as = "document";
		document.head.appendChild(link);
	}
}
function PagesRouterProvider({ children }) {
	const [{ pathname, query, asPath }, setState] = (0, import_react.useState)(getPathnameAndQuery);
	(0, import_react.useEffect)(() => {
		const onNavigate = ((_e) => {
			setState(getPathnameAndQuery());
		});
		window.addEventListener("vinext:navigate", onNavigate);
		return () => window.removeEventListener("vinext:navigate", onNavigate);
	}, []);
	const router = (0, import_react.useMemo)(() => buildRouterValue(pathname, query, asPath, {
		push: Router.push,
		replace: Router.replace,
		back: Router.back,
		reload: Router.reload,
		prefetch: Router.prefetch,
		beforePopState: Router.beforePopState
	}), [
		pathname,
		query,
		asPath
	]);
	return (0, import_react.createElement)(RouterContext.Provider, { value: router }, children);
}
var _lastPathnameAndSearch = typeof window !== "undefined" ? window.location.pathname + window.location.search : "";
/**
* Wrap a React element in a RouterContext.Provider so that
* next/compat/router's useRouter() returns the real Pages Router value.
*
* The provider owns the reactive Pages Router snapshot so next/router and
* next/compat/router consumers share one context value instead of each hook
* installing its own global URL-change listener.
*/
function wrapWithRouterContext(element) {
	return (0, import_react.createElement)(PagesRouterProvider, null, element);
}
var Router = Object.defineProperties({
	push: (url, as, options) => {
		if (typeof window === "undefined") throwNoRouterInstance();
		return performNavigation(url, as, options, "push");
	},
	replace: (url, as, options) => {
		if (typeof window === "undefined") throwNoRouterInstance();
		return performNavigation(url, as, options, "replace");
	},
	back: () => {
		if (typeof window === "undefined") throwNoRouterInstance();
		window.history.back();
	},
	reload: () => {
		if (typeof window === "undefined") throwNoRouterInstance();
		window.location.reload();
	},
	prefetch: (url) => {
		if (typeof window === "undefined") throwNoRouterInstance();
		return prefetchUrl(url);
	},
	beforePopState: (cb) => {
		if (typeof window === "undefined") throwNoRouterInstance();
	},
	events: routerEvents
}, {
	pathname: {
		enumerable: true,
		get() {
			return getPathnameAndQuery().pathname;
		}
	},
	route: {
		enumerable: true,
		get() {
			const { pathname } = getPathnameAndQuery();
			if (typeof window === "undefined") return pathname;
			return window.__NEXT_DATA__?.page ?? pathname;
		}
	},
	query: {
		enumerable: true,
		get() {
			return getPathnameAndQuery().query;
		}
	},
	asPath: {
		enumerable: true,
		get() {
			return getPathnameAndQuery().asPath;
		}
	},
	basePath: {
		enumerable: true,
		value: __basePath,
		writable: false
	},
	locale: {
		enumerable: true,
		get() {
			if (typeof window === "undefined") return _getSSRContext()?.locale;
			return window.__VINEXT_LOCALE__;
		}
	},
	locales: {
		enumerable: true,
		get() {
			if (typeof window === "undefined") return _getSSRContext()?.locales;
			return window.__VINEXT_LOCALES__;
		}
	},
	defaultLocale: {
		enumerable: true,
		get() {
			if (typeof window === "undefined") return _getSSRContext()?.defaultLocale;
			return window.__VINEXT_DEFAULT_LOCALE__;
		}
	},
	domainLocales: {
		enumerable: true,
		get() {
			if (typeof window === "undefined") return _getSSRContext()?.domainLocales;
			return window.__NEXT_DATA__?.domainLocales;
		}
	},
	isReady: {
		enumerable: true,
		value: true,
		writable: false
	},
	isPreview: {
		enumerable: true,
		value: false,
		writable: false
	},
	isFallback: {
		enumerable: true,
		get() {
			if (typeof window === "undefined") return _getSSRContext()?.isFallback === true;
			return window.__NEXT_DATA__?.isFallback === true;
		}
	}
});
if (typeof window !== "undefined") installWindowNext({ router: Router });
var _PAGES_NAVIGATION_ACCESSOR_KEY = Symbol.for("vinext.navigation.pagesNavigationContextAccessor");
globalThis[_PAGES_NAVIGATION_ACCESSOR_KEY] = getPagesNavigationContext;
//#endregion
export { Router as default };
