import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
//#region node_modules/vinext/dist/shims/dynamic.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* next/dynamic shim
*
* SSR-safe dynamic imports. On the server, uses React.lazy + Suspense so that
* renderToReadableStream suspends until the dynamically-imported component is
* available. On the client, also uses React.lazy for code splitting.
*
* Works in RSC, SSR, and client environments:
* - RSC: Uses React.lazy + Suspense (available in React 19.x react-server).
*   Falls back to async component pattern if a future React version
*   strips lazy from react-server.
* - SSR: React.lazy + Suspense (renderToReadableStream suspends)
* - Client: React.lazy + Suspense (standard code splitting)
*
* Supports:
* - dynamic(import('./Component'))
* - dynamic(() => import('./Component'))
* - dynamic({ loader })
* - dynamic(() => import('./Component'), { loading: () => <Spinner /> })
* - dynamic(() => import('./Component'), { ssr: false })
*/
var noopRetry = () => {};
function createDynamicLoadingProps(overrides = {}) {
	return {
		error: null,
		isLoading: true,
		pastDelay: true,
		retry: noopRetry,
		timedOut: false,
		...overrides
	};
}
function hasDefaultExport(mod) {
	return (typeof mod === "object" || typeof mod === "function") && mod !== null && "default" in mod;
}
function normalizeLoader(loader) {
	if (typeof loader === "function") return loader;
	return () => loader;
}
function normalizeDynamicOptions(dynamicInput, options) {
	let normalizedOptions;
	if (dynamicInput instanceof Promise || typeof dynamicInput === "function") normalizedOptions = { loader: normalizeLoader(dynamicInput) };
	else normalizedOptions = dynamicInput;
	return {
		...normalizedOptions,
		...options
	};
}
function createLazyComponent(loader) {
	return import_react.lazy(async () => {
		const mod = await loader();
		if (hasDefaultExport(mod)) return mod;
		return { default: mod };
	});
}
function useRetryableLazyComponent(loader, initialLazyComponent) {
	const [LazyComponent, setLazyComponent] = import_react.useState(() => initialLazyComponent);
	const [retryKey, setRetryKey] = import_react.useState(0);
	return {
		LazyComponent,
		retry: import_react.useCallback(() => {
			setLazyComponent(() => createLazyComponent(loader));
			setRetryKey((key) => key + 1);
		}, [loader]),
		retryKey
	};
}
/**
* Lightweight error boundary that renders the loading component with the error
* when a dynamic() loader rejects. Without this, loader failures would propagate
* uncaught through React's rendering — this preserves the Next.js behavior where
* the `loading` component can display errors.
*
* Lazily created because React.Component is not available in the RSC environment
* (server components use a slimmed-down React that doesn't include class components).
*/
var DynamicErrorBoundary;
function getDynamicErrorBoundary() {
	if (DynamicErrorBoundary) return DynamicErrorBoundary;
	if (!import_react.Component) return null;
	DynamicErrorBoundary = class extends import_react.Component {
		constructor(props) {
			super(props);
			this.state = {
				error: null,
				resetKey: props.resetKey
			};
		}
		static getDerivedStateFromProps(props, state) {
			if (props.resetKey !== state.resetKey) return {
				error: null,
				resetKey: props.resetKey
			};
			return null;
		}
		static getDerivedStateFromError(error) {
			return { error: error instanceof Error ? error : new Error(String(error)) };
		}
		render() {
			if (this.state.error) return import_react.createElement(this.props.fallback, createDynamicLoadingProps({
				isLoading: false,
				error: this.state.error,
				retry: this.props.retry
			}));
			return this.props.children;
		}
	};
	return DynamicErrorBoundary;
}
var isServer = typeof window === "undefined";
function dynamic(dynamicInput, options) {
	const { loader: dynamicLoader, loading: LoadingComponent, ssr = true } = normalizeDynamicOptions(dynamicInput, options);
	const loader = dynamicLoader ? normalizeLoader(dynamicLoader) : () => Promise.resolve(() => null);
	if (!ssr) {
		if (isServer) {
			const SSRFalse = (_props) => LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ pastDelay: false })) : null;
			SSRFalse.displayName = "DynamicSSRFalse";
			return SSRFalse;
		}
		const InitialLazyComponent = createLazyComponent(loader);
		const ClientSSRFalse = (props) => {
			const [mounted, setMounted] = import_react.useState(false);
			const { LazyComponent, retry, retryKey } = useRetryableLazyComponent(loader, InitialLazyComponent);
			import_react.useEffect(() => setMounted(true), []);
			if (!mounted) return LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ retry })) : null;
			const fallback = LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ retry })) : null;
			const lazyElement = import_react.createElement(LazyComponent, props);
			let content = lazyElement;
			if (LoadingComponent) {
				const ErrorBoundary = getDynamicErrorBoundary();
				if (ErrorBoundary) content = import_react.createElement(ErrorBoundary, {
					fallback: LoadingComponent,
					retry,
					resetKey: retryKey
				}, lazyElement);
			}
			return import_react.createElement(import_react.Suspense, { fallback }, content);
		};
		ClientSSRFalse.displayName = "DynamicClientSSRFalse";
		return ClientSSRFalse;
	}
	if (isServer) {
		if (typeof import_react.lazy !== "function") {
			const AsyncServerDynamic = async (props) => {
				const mod = await loader();
				const Component = "default" in mod ? mod.default : mod;
				return import_react.createElement(Component, props);
			};
			AsyncServerDynamic.displayName = "DynamicAsyncServer";
			return AsyncServerDynamic;
		}
		const LazyServer = createLazyComponent(loader);
		const ServerDynamic = (props) => {
			const fallback = LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps()) : null;
			const lazyElement = import_react.createElement(LazyServer, props);
			let content = lazyElement;
			if (LoadingComponent) {
				const ErrorBoundary = getDynamicErrorBoundary();
				if (ErrorBoundary) content = import_react.createElement(ErrorBoundary, {
					fallback: LoadingComponent,
					retry: noopRetry,
					resetKey: 0
				}, lazyElement);
			}
			return import_react.createElement(import_react.Suspense, { fallback }, content);
		};
		ServerDynamic.displayName = "DynamicServer";
		return ServerDynamic;
	}
	const InitialLazyComponent = createLazyComponent(loader);
	const ClientDynamic = (props) => {
		const { LazyComponent, retry, retryKey } = useRetryableLazyComponent(loader, InitialLazyComponent);
		const fallback = LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ retry })) : null;
		const lazyElement = import_react.createElement(LazyComponent, props);
		let content = lazyElement;
		if (LoadingComponent) {
			const ErrorBoundary = getDynamicErrorBoundary();
			if (ErrorBoundary) content = import_react.createElement(ErrorBoundary, {
				fallback: LoadingComponent,
				retry,
				resetKey: retryKey
			}, lazyElement);
		}
		return import_react.createElement(import_react.Suspense, { fallback }, content);
	};
	ClientDynamic.displayName = "DynamicClient";
	return ClientDynamic;
}
//#endregion
//#region app/studio/[[...tool]]/StudioClient.tsx
var import_jsx_runtime = require_jsx_runtime();
var NextStudio = dynamic(() => Promise.all([import("./studio-BZU7jn1p.js"), import("./sanity.config-CBgJMha6.js")]).then(([{ NextStudio }, { default: config }]) => {
	return function Studio() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextStudio, { config });
	};
}), { ssr: false });
function StudioClient() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextStudio, {});
}
//#endregion
export { StudioClient as default };
