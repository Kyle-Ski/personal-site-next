import { A as isAbsoluteOrProtocolRelativeUrl, B as AppElementsWire, C as decodeMatchedParams, D as registerNavigationRuntimeFunctions, E as hasAppNavigationRuntime, F as toSameOriginAppPath, H as VINEXT_MOUNTED_SLOTS_HEADER, I as withBasePath$1, M as normalizePathTrailingSlash, N as resolveRelativeHref, P as toBrowserNavigationHref, R as isDangerousScheme, T as getNavigationRuntime, U as hasBasePath, V as require_react, W as stripBasePath, Y as __toESM, _ as createRscRequestUrl, a as getMountedSlotsHeader, b as APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL, c as getPrefetchedUrls, d as prefetchRscResponse, g as createRscRequestHeaders, n as require_jsx_runtime, o as getPrefetchCache, q as __exportAll, s as getPrefetchInterceptionContext, u as navigateClientSide, v as stripRscCacheBustingSearchParam, w as normalizePathnameForRouteMatch, y as stripRscSuffix, z as reportBlockedDangerousNavigation } from "../../index.js";
//#region node_modules/vinext/dist/routing/route-trie.js
function createNode() {
	return {
		staticChildren: /* @__PURE__ */ new Map(),
		dynamicChild: null,
		catchAllChild: null,
		optionalCatchAllChild: null,
		route: null
	};
}
/**
* Build a trie from pre-sorted routes.
*
* Routes must have a `patternParts` property (string[] of URL segments).
* Pattern segment conventions:
*   - `:name`  — dynamic segment
*   - `:name+` — catch-all (1+ segments)
*   - `:name*` — optional catch-all (0+ segments)
*   - anything else — static segment
*
* First route to claim a terminal position wins (routes are pre-sorted
* by precedence, so insertion order preserves correct priority).
*/
function buildRouteTrie(routes) {
	const root = createNode();
	for (const route of routes) {
		const parts = route.patternParts;
		if (parts.length === 0) {
			if (root.route === null) root.route = route;
			continue;
		}
		let node = root;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part.endsWith("+") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.catchAllChild === null) node.catchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.endsWith("*") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.optionalCatchAllChild === null) node.optionalCatchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.startsWith(":")) {
				const paramName = part.slice(1);
				if (node.dynamicChild === null) node.dynamicChild = {
					paramName,
					node: createNode()
				};
				node = node.dynamicChild.node;
				if (i === parts.length - 1) {
					if (node.route === null) node.route = route;
				}
				continue;
			}
			let child = node.staticChildren.get(part);
			if (!child) {
				child = createNode();
				node.staticChildren.set(part, child);
			}
			node = child;
			if (i === parts.length - 1) {
				if (node.route === null) node.route = route;
			}
		}
	}
	return root;
}
/**
* Match a URL against the trie.
*
* Returns decoded param values — `decodeURIComponent` is applied to
* individual param entries so that `%2F` → `/`, `%23` → `#`, etc.
* Segment boundaries (the original `/` splits) are preserved by the
* upstream normalization layer; this step only decodes the captured
* param strings the caller sees.
*
* Mirrors Next.js route-matcher.ts:25-27.
*
* @param root - Trie root built by `buildRouteTrie`
* @param urlParts - Pre-split URL segments (no empty strings)
* @returns Match result with route and extracted params, or null
*/
function trieMatch(root, urlParts) {
	const result = match(root, urlParts, 0);
	if (result) decodeMatchedParams(result.params);
	return result;
}
function createParams() {
	return Object.create(null);
}
function match(node, urlParts, index) {
	if (index === urlParts.length) {
		if (node.route !== null) return {
			route: node.route,
			params: createParams()
		};
		if (node.optionalCatchAllChild !== null) return {
			route: node.optionalCatchAllChild.route,
			params: createParams()
		};
		return null;
	}
	const segment = urlParts[index];
	const staticChild = node.staticChildren.get(segment);
	if (staticChild) {
		const result = match(staticChild, urlParts, index + 1);
		if (result !== null) return result;
	}
	if (node.dynamicChild !== null) {
		const result = match(node.dynamicChild.node, urlParts, index + 1);
		if (result !== null) {
			result.params[node.dynamicChild.paramName] = segment;
			return result;
		}
	}
	if (node.catchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.catchAllChild.paramName] = remaining;
		return {
			route: node.catchAllChild.route,
			params
		};
	}
	if (node.optionalCatchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.optionalCatchAllChild.paramName] = remaining;
		return {
			route: node.optionalCatchAllChild.route,
			params
		};
	}
	return null;
}
//#endregion
//#region node_modules/vinext/dist/routing/route-matching.js
/**
* Shared route-match preamble used by both Pages Router and App Router.
*
* Both routers normalize URLs and call `trieMatch` with nearly-identical
* preamble: strip query, trailing-slash normalize, run
* `normalizePathnameForRouteMatch`, split into url parts, then look up via a
* per-routes-array trie cache. This module factors that out so each router
* just calls `matchRouteWithTrie(url, routes)`.
*/
function createRouteTrieCache() {
	return /* @__PURE__ */ new WeakMap();
}
function getOrBuildTrie(cache, routes) {
	let trie = cache.get(routes);
	if (!trie) {
		trie = buildRouteTrie(routes);
		cache.set(routes, trie);
	}
	return trie;
}
/**
* Match a URL path against a list of routes via the shared preamble:
*   1. strip query string
*   2. trailing-slash normalize (preserving root "/")
*   3. run `normalizePathnameForRouteMatch`
*   4. split into url parts and look up via the (cached) trie
*
* Generic over the route shape; both Pages `Route` and App `AppRoute`
* satisfy `{ patternParts: string[] }`.
*/
function matchRouteWithTrie(url, routes, cache) {
	const pathname = url.split("?")[0];
	let normalizedUrl = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
	normalizedUrl = normalizePathnameForRouteMatch(normalizedUrl);
	const urlParts = normalizedUrl.split("/").filter(Boolean);
	return trieMatch(getOrBuildTrie(cache, routes), urlParts);
}
//#endregion
//#region node_modules/vinext/dist/utils/query.js
function setOwnQueryValue(obj, key, value) {
	Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		writable: true,
		configurable: true
	});
}
function addQueryParam(obj, key, value) {
	if (Object.hasOwn(obj, key)) {
		const current = obj[key];
		setOwnQueryValue(obj, key, Array.isArray(current) ? current.concat(value) : [current, value]);
	} else setOwnQueryValue(obj, key, value);
}
/**
* Convert a Next.js-style query object into URLSearchParams while preserving
* repeated keys for array values.
*
* Ported from Next.js `urlQueryToSearchParams()`:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/shared/lib/router/utils/querystring.ts
*/
function stringifyUrlQueryParam(param) {
	if (typeof param === "string") return param;
	if (typeof param === "number" && !isNaN(param) || typeof param === "boolean") return String(param);
	return "";
}
function urlQueryToSearchParams(query) {
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(query)) {
		if (Array.isArray(value)) {
			for (const item of value) params.append(key, stringifyUrlQueryParam(item));
			continue;
		}
		params.set(key, stringifyUrlQueryParam(value));
	}
	return params;
}
/**
* Append query parameters to a URL while preserving any existing query string
* and fragment identifier.
*/
function appendSearchParamsToUrl(url, params) {
	const hashIndex = url.indexOf("#");
	const beforeHash = hashIndex === -1 ? url : url.slice(0, hashIndex);
	const hash = hashIndex === -1 ? "" : url.slice(hashIndex);
	const queryIndex = beforeHash.indexOf("?");
	const base = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex);
	const existingQuery = queryIndex === -1 ? "" : beforeHash.slice(queryIndex + 1);
	const merged = new URLSearchParams(existingQuery);
	for (const [key, value] of params) merged.append(key, value);
	const search = merged.toString();
	return `${base}${search ? `?${search}` : ""}${hash}`;
}
//#endregion
//#region node_modules/vinext/dist/utils/domain-locale.js
function normalizeDomainHostname(hostname) {
	if (!hostname) return void 0;
	return hostname.split(",", 1)[0]?.trim().split(":", 1)[0]?.toLowerCase() || void 0;
}
/**
* Match a configured domain either by hostname or locale.
* When both are provided, the checks intentionally use OR semantics so the
* same helper can cover Next.js's hostname lookup and preferred-locale lookup.
* If both are passed, the first domain matching either input wins, so callers
* should pass hostname or detectedLocale, not both.
*/
function detectDomainLocale(domainItems, hostname, detectedLocale) {
	if (!domainItems?.length) return void 0;
	const normalizedHostname = normalizeDomainHostname(hostname);
	const normalizedLocale = detectedLocale?.toLowerCase();
	for (const item of domainItems) if (normalizedHostname === normalizeDomainHostname(item.domain) || normalizedLocale === item.defaultLocale.toLowerCase() || item.locales?.some((locale) => locale.toLowerCase() === normalizedLocale)) return item;
}
function addLocalePrefix(path, locale, localeDefault) {
	const normalizedLocale = locale.toLowerCase();
	if (normalizedLocale === localeDefault.toLowerCase()) return path;
	const pathWithLeadingSlash = path.startsWith("/") ? path : `/${path}`;
	const normalizedPathname = (pathWithLeadingSlash.split(/[?#]/, 1)[0] ?? pathWithLeadingSlash).toLowerCase();
	const localePrefix = `/${normalizedLocale}`;
	if (normalizedPathname === localePrefix || normalizedPathname.startsWith(`${localePrefix}/`)) return path.startsWith("/") ? path : pathWithLeadingSlash;
	return `/${locale}${pathWithLeadingSlash}`;
}
function getLocalePathPrefix(path, locales) {
	if (!locales?.length) return void 0;
	const pathWithLeadingSlash = path.startsWith("/") ? path : `/${path}`;
	const firstSegment = (pathWithLeadingSlash.split(/[?#]/, 1)[0] ?? pathWithLeadingSlash).split("/").find(Boolean);
	if (!firstSegment) return void 0;
	const normalizedSegment = firstSegment.toLowerCase();
	return locales.find((locale) => locale.toLowerCase() === normalizedSegment);
}
function withBasePath(path, basePath = "") {
	if (!basePath) return path;
	return basePath + path;
}
function getDomainLocaleUrl(url, locale, { basePath, currentHostname, domainItems }) {
	if (!domainItems?.length) return void 0;
	const targetDomain = detectDomainLocale(domainItems, void 0, locale);
	if (!targetDomain) return void 0;
	const currentDomain = detectDomainLocale(domainItems, currentHostname ?? void 0);
	const localizedPath = addLocalePrefix(url, locale, targetDomain.defaultLocale);
	if (currentDomain && normalizeDomainHostname(currentDomain.domain) === normalizeDomainHostname(targetDomain.domain)) return;
	return `${`http${targetDomain.http ? "" : "s"}://`}${targetDomain.domain}${withBasePath(localizedPath, basePath)}`;
}
//#endregion
//#region node_modules/vinext/dist/shims/client-locale.js
function getCurrentBrowserLocale({ basePath, domainLocales, hostname }) {
	if (typeof window === "undefined") return void 0;
	const pathnameLocale = getLocalePathPrefix(stripBasePath(window.location.pathname, basePath), window.__VINEXT_LOCALES__);
	if (pathnameLocale) return pathnameLocale;
	return detectDomainLocale(domainLocales, hostname ?? void 0)?.defaultLocale ?? window.__VINEXT_DEFAULT_LOCALE__ ?? window.__VINEXT_LOCALE__;
}
//#endregion
//#region node_modules/vinext/dist/client/pages-router-link-navigation.js
async function navigatePagesRouterLink(router, { href, replace, scroll, shallow, locale }) {
	const routerOptions = {
		scroll,
		locale
	};
	if (shallow !== void 0) routerOptions.shallow = shallow;
	if (replace) await router.replace(href, void 0, routerOptions);
	else await router.push(href, void 0, routerOptions);
}
//#endregion
//#region node_modules/vinext/dist/shims/i18n-context.js
var _getI18nContext = () => {
	if (globalThis.__VINEXT_DEFAULT_LOCALE__ == null && globalThis.__VINEXT_LOCALE__ == null) return null;
	return {
		locale: globalThis.__VINEXT_LOCALE__,
		locales: globalThis.__VINEXT_LOCALES__,
		defaultLocale: globalThis.__VINEXT_DEFAULT_LOCALE__,
		domainLocales: globalThis.__VINEXT_DOMAIN_LOCALES__,
		hostname: globalThis.__VINEXT_HOSTNAME__
	};
};
function getI18nContext() {
	return _getI18nContext();
}
//#endregion
//#region node_modules/vinext/dist/shims/link-prefetch.js
function canLinkPrefetch(input) {
	return input.nodeEnv === "production" && input.prefetch !== false && !input.isDangerous;
}
function canLinkIntentPrefetch(input) {
	if (input.nodeEnv !== "production" || input.isDangerous) return false;
	return input.routerMode === "pages" || input.prefetch !== false;
}
/**
* Normalize absolute and protocol-relative Link hrefs to app-relative paths
* that are eligible for prefetching. Non-absolute relative hrefs are returned
* unchanged; callers must resolve them against the current browser URL before
* constructing a concrete fetch target.
*/
function getLinkPrefetchHref(input) {
	const { href, basePath, currentOrigin } = input;
	if (!isAbsoluteOrProtocolRelativeUrl(href)) return href;
	if (currentOrigin === void 0) return null;
	try {
		const current = new URL(currentOrigin);
		const parsed = href.startsWith("//") ? new URL(href, current.origin) : new URL(href);
		if (parsed.origin !== current.origin) return null;
		if (!basePath) return parsed.pathname + parsed.search + parsed.hash;
		if (!hasBasePath(parsed.pathname, basePath)) return null;
		return stripBasePath(parsed.pathname, basePath) + parsed.search + parsed.hash;
	} catch {
		return null;
	}
}
//#endregion
//#region node_modules/vinext/dist/shims/link.js
var link_exports = /* @__PURE__ */ __exportAll({
	default: () => Link,
	resolveAutoAppRoutePrefetch: () => resolveAutoAppRoutePrefetch,
	resolveLinkPrefetchMode: () => resolveLinkPrefetchMode
});
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
/**
* next/link shim
*
* Renders an <a> tag with client-side navigation support.
* On click, prevents full page reload and triggers client-side
* page swap via the router's navigation system.
*/
var LinkStatusContext = (0, import_react.createContext)({ pending: false });
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath = "";
/** trailingSlash from next.config.js, injected by the plugin at build time */
var __trailingSlash = false;
var linkPrefetchRouteTrieCache = createRouteTrieCache();
function resolveHref(href) {
	if (typeof href === "string") return href;
	let url = href.pathname ?? "/";
	if (href.query) {
		const params = urlQueryToSearchParams(href.query);
		url = appendSearchParamsToUrl(url, params);
	}
	return url;
}
function resolveLinkPrefetchMode(prefetchProp, isDangerous) {
	if (isDangerous || prefetchProp === false) return "disabled";
	if (prefetchProp === true) return "full";
	return "auto";
}
function toSameOriginRouteHref(href) {
	if (typeof window === "undefined") return null;
	let url;
	try {
		url = new URL(href, window.location.href);
	} catch {
		return null;
	}
	if (url.origin !== window.location.origin) return null;
	return `${stripBasePath(url.pathname, __basePath)}${url.search}`;
}
function getLinkPrefetchRouterMode() {
	return hasAppNavigationRuntime() ? "app" : "pages";
}
function resolveAutoAppRoutePrefetch(href) {
	if (typeof window === "undefined") return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	const routes = window.__VINEXT_LINK_PREFETCH_ROUTES__;
	if (!routes) return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	const routeHref = toSameOriginRouteHref(href);
	if (routeHref === null) return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	const match = matchRouteWithTrie(routeHref, routes, linkPrefetchRouteTrieCache);
	if (!match) return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	return {
		cacheForNavigation: !match.route.isDynamic,
		shouldPrefetch: !match.route.isDynamic || match.route.canPrefetchLoadingShell
	};
}
/**
* Prefetch a URL for faster navigation.
*
* For App Router (RSC): fetches the .rsc payload in the background and
* stores it in an in-memory cache for instant use during navigation.
* For Pages Router: injects a <link rel="prefetch"> for the page module.
*
* Uses `requestIdleCallback` (or `setTimeout` fallback) to avoid blocking
* the main thread during initial page load.
*/
function prefetchUrl(href, mode, priority = "low") {
	if (typeof window === "undefined") return;
	const prefetchHref = getLinkPrefetchHref({
		href,
		basePath: __basePath,
		currentOrigin: window.location.origin
	});
	if (prefetchHref == null) return;
	const fullHref = toBrowserNavigationHref(prefetchHref, window.location.href, __basePath);
	(window.requestIdleCallback ?? ((fn) => setTimeout(fn, 100)))(() => {
		(async () => {
			if (hasAppNavigationRuntime()) {
				const autoPrefetch = mode === "auto" ? resolveAutoAppRoutePrefetch(prefetchHref) : {
					cacheForNavigation: true,
					shouldPrefetch: true
				};
				if (!autoPrefetch.shouldPrefetch) return;
				const interceptionContext = getPrefetchInterceptionContext(fullHref);
				const mountedSlotsHeader = getMountedSlotsHeader();
				const isOptimisticRouteShellPrefetch = !autoPrefetch.cacheForNavigation;
				if (isOptimisticRouteShellPrefetch && interceptionContext !== null) return;
				const headers = createRscRequestHeaders({
					interceptionContext,
					renderMode: isOptimisticRouteShellPrefetch ? APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL : void 0
				});
				if (mountedSlotsHeader) headers.set(VINEXT_MOUNTED_SLOTS_HEADER, mountedSlotsHeader);
				const rscUrl = await createRscRequestUrl(fullHref, headers);
				const cacheKey = AppElementsWire.encodeCacheKey(rscUrl, interceptionContext);
				const prefetched = getPrefetchedUrls();
				if (prefetched.has(cacheKey)) {
					if (autoPrefetch.cacheForNavigation) {
						const existing = getPrefetchCache().get(cacheKey);
						if (existing?.cacheForNavigation === false) existing.cacheForNavigation = true;
					}
					return;
				}
				prefetched.add(cacheKey);
				prefetchRscResponse(rscUrl, fetch(rscUrl, {
					headers,
					credentials: "include",
					priority,
					purpose: "prefetch"
				}), interceptionContext, mountedSlotsHeader, void 0, {
					cacheForNavigation: autoPrefetch.cacheForNavigation,
					optimisticRouteShell: isOptimisticRouteShellPrefetch
				});
			} else if (window.__NEXT_DATA__?.__vinext?.pageModuleUrl) {
				const link = document.createElement("link");
				link.rel = "prefetch";
				link.href = fullHref;
				link.as = "document";
				document.head.appendChild(link);
			}
		})().catch((error) => {
			console.error("[vinext] RSC prefetch setup error:", error);
		});
	});
}
function promotePrefetchEntriesForNavigation(href) {
	if (typeof window === "undefined") return;
	let target;
	try {
		target = new URL(toBrowserNavigationHref(href, window.location.href, __basePath), window.location.href);
	} catch {
		return;
	}
	for (const [cacheKey, entry] of getPrefetchCache()) {
		if (entry.optimisticRouteShell === true) continue;
		const [rscUrl] = cacheKey.split("\0", 1);
		let cached;
		try {
			cached = new URL(rscUrl, window.location.href);
		} catch {
			continue;
		}
		stripRscCacheBustingSearchParam(cached);
		if (stripRscSuffix(cached.pathname) === target.pathname && cached.search === target.search) entry.cacheForNavigation = true;
	}
}
/**
* Shared IntersectionObserver for viewport-based prefetching.
* All Link elements use the same observer to minimize resource usage.
*/
var sharedObserver = null;
var observedLinkPrefetches = /* @__PURE__ */ new WeakMap();
var visibleLinkPrefetches = /* @__PURE__ */ new Set();
function setVisibleLinkPrefetch(instance, isVisible) {
	instance.isVisible = isVisible;
	if (isVisible) {
		visibleLinkPrefetches.add(instance);
		if (instance.routerMode === "pages" && instance.viewportPrefetched) return;
		prefetchUrl(instance.href, instance.mode, "low");
		instance.viewportPrefetched = true;
	} else visibleLinkPrefetches.delete(instance);
}
function registerVisibleLinkPing() {
	if (typeof window === "undefined") return;
	registerNavigationRuntimeFunctions({ pingVisibleLinks: pingVisibleLinkPrefetches });
}
function pingVisibleLinkPrefetches() {
	for (const instance of visibleLinkPrefetches) if (instance.isVisible && instance.routerMode === "app") prefetchUrl(instance.href, instance.mode, "low");
}
function getSharedObserver() {
	if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return null;
	if (sharedObserver) return sharedObserver;
	sharedObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const instance = observedLinkPrefetches.get(entry.target);
			if (!instance) continue;
			setVisibleLinkPrefetch(instance, entry.isIntersecting || entry.intersectionRatio > 0);
		}
	}, { rootMargin: "250px" });
	return sharedObserver;
}
function getDefaultLocale() {
	if (typeof window !== "undefined") return window.__VINEXT_DEFAULT_LOCALE__;
	return getI18nContext()?.defaultLocale;
}
function getCurrentLocale() {
	if (typeof window !== "undefined") return getCurrentBrowserLocale({
		basePath: __basePath,
		domainLocales: getDomainLocales(),
		hostname: getCurrentHostname()
	});
	return getI18nContext()?.locale;
}
function getDomainLocales() {
	if (typeof window !== "undefined") return window.__NEXT_DATA__?.domainLocales;
	return getI18nContext()?.domainLocales;
}
function getCurrentHostname() {
	if (typeof window !== "undefined") return window.location.hostname;
	return getI18nContext()?.hostname;
}
function getDomainLocaleHref(href, locale) {
	return getDomainLocaleUrl(href, locale, {
		basePath: __basePath,
		currentHostname: getCurrentHostname(),
		domainItems: getDomainLocales()
	});
}
function addLocalePrefixForRoot(href, locale) {
	if (href !== "/" && !href.startsWith("/?") && !href.startsWith("/#")) return;
	let parsed;
	try {
		parsed = new URL(href, "http://vinext.local");
	} catch {
		return;
	}
	if (parsed.origin !== "http://vinext.local" || parsed.pathname !== "/") return;
	return `/${locale}${parsed.search}${parsed.hash}`;
}
/**
* Apply locale prefix to a URL path based on the locale prop.
* - locale="fr" → prepend /fr (unless it already has a locale prefix)
* - locale={false} → use the href as-is (no locale prefix, link to default)
* - locale=undefined → use current locale (href as-is in most cases)
*/
function applyLocaleToHref(href, locale) {
	if (locale === false) return href;
	const resolvedLocale = locale ?? getCurrentLocale();
	if (resolvedLocale === void 0) return href;
	if (isAbsoluteOrProtocolRelativeUrl(href)) return href;
	const domainLocaleHref = getDomainLocaleHref(href, resolvedLocale);
	if (domainLocaleHref) return domainLocaleHref;
	const defaultLocale = getDefaultLocale() ?? "";
	if (resolvedLocale.toLowerCase() === defaultLocale.toLowerCase()) {
		const localeRootHref = addLocalePrefixForRoot(href, resolvedLocale);
		if (localeRootHref) return localeRootHref;
	}
	return addLocalePrefix(href, resolvedLocale, defaultLocale);
}
var Link = (0, import_react.forwardRef)(function Link({ href, as, replace = false, prefetch: prefetchProp, scroll = true, shallow = false, children, onClick, onMouseEnter, onTouchStart, onNavigate, unstable_dynamicOnHover = false, ...rest }, forwardedRef) {
	const { locale, ...restWithoutLocale } = rest;
	const resolvedHref = as ?? resolveHref(href);
	const isDangerous = typeof resolvedHref === "string" && isDangerousScheme(resolvedHref);
	const normalizedHref = normalizePathTrailingSlash(applyLocaleToHref(isDangerous ? "/" : resolvedHref, locale), __trailingSlash);
	const fullHref = normalizePathTrailingSlash(withBasePath$1(normalizedHref, __basePath), __trailingSlash);
	const [pending, setPending] = (0, import_react.useState)(false);
	const mountedRef = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);
	const internalRef = (0, import_react.useRef)(null);
	const prefetchMode = resolveLinkPrefetchMode(prefetchProp, isDangerous);
	const shouldViewportPrefetch = canLinkPrefetch({
		nodeEnv: "production",
		prefetch: prefetchProp,
		isDangerous
	});
	const setRefs = (0, import_react.useCallback)((node) => {
		internalRef.current = node;
		if (typeof forwardedRef === "function") forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	}, [forwardedRef]);
	(0, import_react.useEffect)(() => {
		if (!shouldViewportPrefetch || typeof window === "undefined") return;
		const node = internalRef.current;
		if (!node) return;
		const hrefToPrefetch = getLinkPrefetchHref({
			href: normalizedHref,
			basePath: __basePath,
			currentOrigin: window.location.origin
		});
		if (hrefToPrefetch == null) return;
		const observer = getSharedObserver();
		if (!observer) return;
		registerVisibleLinkPing();
		const instance = {
			href: hrefToPrefetch,
			isVisible: false,
			mode: prefetchMode,
			routerMode: getLinkPrefetchRouterMode(),
			viewportPrefetched: false
		};
		observedLinkPrefetches.set(node, instance);
		observer.observe(node);
		return () => {
			observer.unobserve(node);
			observedLinkPrefetches.delete(node);
			visibleLinkPrefetches.delete(instance);
		};
	}, [
		shouldViewportPrefetch,
		prefetchMode,
		normalizedHref
	]);
	const prefetchOnIntent = (0, import_react.useCallback)(() => {
		if (!canLinkIntentPrefetch({
			nodeEnv: "production",
			prefetch: prefetchProp,
			isDangerous,
			routerMode: getLinkPrefetchRouterMode()
		})) return;
		const intentMode = unstable_dynamicOnHover ? "full" : prefetchMode;
		if (unstable_dynamicOnHover && internalRef.current) {
			const instance = observedLinkPrefetches.get(internalRef.current);
			if (instance) instance.mode = "full";
			promotePrefetchEntriesForNavigation(normalizedHref);
		}
		prefetchUrl(normalizedHref, intentMode, "high");
	}, [
		prefetchProp,
		isDangerous,
		prefetchMode,
		normalizedHref,
		unstable_dynamicOnHover
	]);
	const handleMouseEnter = (0, import_react.useCallback)((e) => {
		onMouseEnter?.(e);
		prefetchOnIntent();
	}, [onMouseEnter, prefetchOnIntent]);
	const handleTouchStart = (0, import_react.useCallback)((e) => {
		onTouchStart?.(e);
		prefetchOnIntent();
	}, [onTouchStart, prefetchOnIntent]);
	const handleClick = async (e) => {
		if (onClick) onClick(e);
		if (e.defaultPrevented) return;
		if (e.currentTarget.hasAttribute("download")) return;
		if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		if (e.currentTarget.target && e.currentTarget.target !== "_self") return;
		let navigateHref = normalizedHref;
		if (isAbsoluteOrProtocolRelativeUrl(resolvedHref)) {
			const localPath = toSameOriginAppPath(resolvedHref, __basePath);
			if (localPath == null) {
				if (replace) {
					e.preventDefault();
					window.location.replace(resolvedHref);
				}
				return;
			}
			navigateHref = localPath;
		}
		e.preventDefault();
		const absoluteHref = resolveRelativeHref(navigateHref, window.location.href, __basePath);
		const absoluteFullHref = toBrowserNavigationHref(navigateHref, window.location.href, __basePath);
		if (onNavigate) try {
			const navUrl = new URL(absoluteFullHref, window.location.origin);
			let prevented = false;
			const navEvent = {
				url: navUrl,
				preventDefault() {
					prevented = true;
				},
				get defaultPrevented() {
					return prevented;
				}
			};
			onNavigate(navEvent);
			if (navEvent.defaultPrevented) return;
		} catch {}
		if (getNavigationRuntime()?.functions.navigate) {
			setPending(true);
			import_react.startTransition(() => {
				navigateClientSide(navigateHref, replace ? "replace" : "push", scroll, true).finally(() => {
					if (mountedRef.current) setPending(false);
				});
			});
			return;
		} else try {
			const Router = (await import("./router-CBZ80RmA.js")).default;
			await navigatePagesRouterLink(Router, {
				href: absoluteHref,
				replace,
				scroll,
				shallow,
				locale
			});
		} catch {
			if (replace) window.history.replaceState({}, "", absoluteFullHref);
			else window.history.pushState({}, "", absoluteFullHref);
			window.dispatchEvent(new PopStateEvent("popstate"));
		}
	};
	const { passHref: _p, ...anchorProps } = restWithoutLocale;
	const linkStatusValue = import_react.useMemo(() => ({ pending }), [pending]);
	if (isDangerous) {
		const handleDangerousClick = (event) => {
			if (onClick) onClick(event);
			reportBlockedDangerousNavigation();
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkStatusContext.Provider, {
			value: linkStatusValue,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				ref: setRefs,
				onClick: handleDangerousClick,
				onMouseEnter: handleMouseEnter,
				onTouchStart: handleTouchStart,
				...anchorProps,
				children
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkStatusContext.Provider, {
		value: linkStatusValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			ref: setRefs,
			href: fullHref,
			onClick: (event) => {
				handleClick(event);
			},
			onMouseEnter: handleMouseEnter,
			onTouchStart: handleTouchStart,
			...anchorProps,
			children
		})
	});
});
//#endregion
export { getDomainLocaleUrl as a, appendSearchParamsToUrl as c, addLocalePrefix as i, urlQueryToSearchParams as l, link_exports as n, getLocalePathPrefix as o, getCurrentBrowserLocale as r, addQueryParam as s, Link as t };
