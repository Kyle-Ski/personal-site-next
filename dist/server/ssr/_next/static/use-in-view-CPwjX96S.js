import { V as require_react, Y as __toESM } from "../../index.js";
import { c as resolveElements, n as hasReducedMotionListener, r as prefersReducedMotion, t as initPrefersReducedMotion } from "./reduced-motion-BwTkl3MH.js";
//#region node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
*
* This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
* `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
*
* It will actively respond to changes and re-render your components with the latest setting.
*
* ```jsx
* export function Sidebar({ isOpen }) {
*   const shouldReduceMotion = useReducedMotion()
*   const closedX = shouldReduceMotion ? 0 : "-100%"
*
*   return (
*     <motion.div animate={{
*       opacity: isOpen ? 1 : 0,
*       x: isOpen ? 0 : closedX
*     }} />
*   )
* }
* ```
*
* @return boolean
*
* @public
*/
function useReducedMotion() {
	/**
	* Lazy initialisation of prefersReducedMotion
	*/
	!hasReducedMotionListener.current && initPrefersReducedMotion();
	const [shouldReduceMotion] = (0, import_react.useState)(prefersReducedMotion.current);
	/**
	* TODO See if people miss automatically updating shouldReduceMotion setting
	*/
	return shouldReduceMotion;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var thresholds = {
	some: 0,
	all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
	const elements = resolveElements(elementOrSelector);
	const activeIntersections = /* @__PURE__ */ new WeakMap();
	const onIntersectionChange = (entries) => {
		entries.forEach((entry) => {
			const onEnd = activeIntersections.get(entry.target);
			/**
			* If there's no change to the intersection, we don't need to
			* do anything here.
			*/
			if (entry.isIntersecting === Boolean(onEnd)) return;
			if (entry.isIntersecting) {
				const newOnEnd = onStart(entry);
				if (typeof newOnEnd === "function") activeIntersections.set(entry.target, newOnEnd);
				else observer.unobserve(entry.target);
			} else if (typeof onEnd === "function") {
				onEnd(entry);
				activeIntersections.delete(entry.target);
			}
		});
	};
	const observer = new IntersectionObserver(onIntersectionChange, {
		root,
		rootMargin,
		threshold: typeof amount === "number" ? amount : thresholds[amount]
	});
	elements.forEach((element) => observer.observe(element));
	return () => observer.disconnect();
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-in-view.mjs
function useInView(ref, { root, margin, amount, once = false } = {}) {
	const [isInView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!ref.current || once && isInView) return;
		const onEnter = () => {
			setInView(true);
			return once ? void 0 : () => setInView(false);
		};
		const options = {
			root: root && root.current || void 0,
			margin,
			amount
		};
		return inView(ref.current, onEnter, options);
	}, [
		root,
		ref,
		margin,
		once,
		amount
	]);
	return isInView;
}
//#endregion
export { useReducedMotion as n, useInView as t };
