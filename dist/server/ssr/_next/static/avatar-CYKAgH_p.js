import { V as require_react, Y as __toESM, n as require_jsx_runtime, t as require_react_dom } from "../../index.js";
import { t as cn } from "./utils-CEeuMo-q.js";
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = (props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		};
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope) {
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		return [Provider, useContext2];
	}
	const createScope = () => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		};
	};
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = () => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		};
	};
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function useCallbackRef(callback) {
	const callbackRef = import_react.useRef(callback);
	import_react.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var useLayoutEffect2 = Boolean(globalThis?.document) ? import_react.useLayoutEffect : () => {};
require_react_dom();
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
var Slot = import_react.forwardRef((props, forwardedRef) => {
	const { children, ...slotProps } = props;
	const childrenArray = import_react.Children.toArray(children);
	const slottable = childrenArray.find(isSlottable);
	if (slottable) {
		const newElement = slottable.props.children;
		const newChildren = childrenArray.map((child) => {
			if (child === slottable) {
				if (import_react.Children.count(newElement) > 1) return import_react.Children.only(null);
				return import_react.isValidElement(newElement) ? newElement.props.children : null;
			} else return child;
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, {
			...slotProps,
			ref: forwardedRef,
			children: import_react.isValidElement(newElement) ? import_react.cloneElement(newElement, void 0, newChildren) : null
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, {
		...slotProps,
		ref: forwardedRef,
		children
	});
});
Slot.displayName = "Slot";
var SlotClone = import_react.forwardRef((props, forwardedRef) => {
	const { children, ...slotProps } = props;
	if (import_react.isValidElement(children)) {
		const childrenRef = getElementRef(children);
		const props2 = mergeProps(slotProps, children.props);
		if (children.type !== import_react.Fragment) props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
		return import_react.cloneElement(children, props2);
	}
	return import_react.Children.count(children) > 1 ? import_react.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
};
function isSlottable(child) {
	return import_react.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				childPropValue(...args);
				slotPropValue(...args);
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
//#endregion
//#region node_modules/@radix-ui/react-avatar/dist/index.mjs
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAvatar, ...avatarProps } = props;
	const [imageLoadingStatus, setImageLoadingStatus] = import_react.useState("idle");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarProvider, {
		scope: __scopeAvatar,
		imageLoadingStatus,
		onImageLoadingStatusChange: setImageLoadingStatus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			...avatarProps,
			ref: forwardedRef
		})
	});
});
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAvatar, src, onLoadingStatusChange = () => {}, ...imageProps } = props;
	const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
	const imageLoadingStatus = useImageLoadingStatus(src, imageProps.referrerPolicy);
	const handleLoadingStatusChange = useCallbackRef((status) => {
		onLoadingStatusChange(status);
		context.onImageLoadingStatusChange(status);
	});
	useLayoutEffect2(() => {
		if (imageLoadingStatus !== "idle") handleLoadingStatusChange(imageLoadingStatus);
	}, [imageLoadingStatus, handleLoadingStatusChange]);
	return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.img, {
		...imageProps,
		ref: forwardedRef,
		src
	}) : null;
});
AvatarImage$1.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAvatar, delayMs, ...fallbackProps } = props;
	const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
	const [canRender, setCanRender] = import_react.useState(delayMs === void 0);
	import_react.useEffect(() => {
		if (delayMs !== void 0) {
			const timerId = window.setTimeout(() => setCanRender(true), delayMs);
			return () => window.clearTimeout(timerId);
		}
	}, [delayMs]);
	return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...fallbackProps,
		ref: forwardedRef
	}) : null;
});
AvatarFallback$1.displayName = FALLBACK_NAME;
function useImageLoadingStatus(src, referrerPolicy) {
	const [loadingStatus, setLoadingStatus] = import_react.useState("idle");
	useLayoutEffect2(() => {
		if (!src) {
			setLoadingStatus("error");
			return;
		}
		let isMounted = true;
		const image = new window.Image();
		const updateStatus = (status) => () => {
			if (!isMounted) return;
			setLoadingStatus(status);
		};
		setLoadingStatus("loading");
		image.onload = updateStatus("loaded");
		image.onerror = updateStatus("error");
		image.src = src;
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		return () => {
			isMounted = false;
		};
	}, [src, referrerPolicy]);
	return loadingStatus;
}
var Root = Avatar$1;
var Image = AvatarImage$1;
var Fallback = AvatarFallback$1;
//#endregion
//#region components/ui/avatar.tsx
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Root.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = Image.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fallback, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = Fallback.displayName;
//#endregion
export { Avatar, AvatarFallback, AvatarImage };
