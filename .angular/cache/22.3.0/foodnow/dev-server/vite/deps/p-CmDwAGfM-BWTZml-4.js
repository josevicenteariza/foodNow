import { n as o, t as d } from "./p-ZjP4CjeZ-B7n67IAv.js";
import { a as h$1, s as l$1, t as a } from "./p-BumInQYT-DSMd5tM_.js";
import { S as r, d as n, i as d$1, r as c } from "./p-vBBGetx6-CN5pXLrh.js";
import { n as t, t as e } from "./p-BMPN55of-0t_GvYd8.js";
import { t as _asyncToGenerator } from "./asyncToGenerator-Byb5jPv1.js";
// node_modules/@ionic/core/components/p-CmDwAGfM.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var l = /* @__PURE__ */ new WeakMap();
var f = (o, t, n, i = 0, e = !1) => {
	l.has(o) !== n && (n ? w(o, t, i, e) : p(o, t));
};
var w = (o, t, n, i = !1) => {
	const e = t.parentNode, a = t.cloneNode(!1);
	a.classList.add("cloned-input"), a.tabIndex = -1, i && (a.disabled = !0);
	const r$1 = r(o);
	a.style.insetInlineStart = r$1 ? e.offsetWidth - t.offsetLeft - t.offsetWidth + "px" : `${t.offsetLeft}px`, e.appendChild(a), l.set(o, a);
	const s = r$1 ? 9999 : -9999;
	o.style.pointerEvents = "none", t.style.transform = `translate3d(${s}px,${n}px,0) scale(0)`;
};
var p = (o, t) => {
	const n = l.get(o);
	n && (l.delete(o), n.remove()), o.style.pointerEvents = "", t.style.transform = "";
};
var m = "input, textarea, [no-blur], [contenteditable]";
var h = "$ionPaddingTimer";
var b = (o, t, n) => {
	const i = o[h];
	i && clearTimeout(i), t > 0 ? o.style.setProperty("--keyboard-offset", `${t}px`) : o[h] = setTimeout((() => {
		o.style.setProperty("--keyboard-offset", "0px"), n && n();
	}), 120);
};
var y = (o, t, n) => {
	o.addEventListener("focusout", (() => {
		t && b(t, 0, n);
	}), { once: !0 });
};
var S = 0;
var D = "data-ionic-skip-scroll-assist";
var x = (o) => {
	var _document$activeEleme;
	if (document.activeElement === o) return;
	const t = o.getAttribute("id"), n = o.closest(`label[for="${t}"]`), i = (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.closest(`label[for="${t}"]`);
	null !== n && n === i || (o.setAttribute(D, "true"), o.focus());
};
var M = function() {
	var _ref2 = _asyncToGenerator(function* (o, t, e, a$2, r, s, d = !1, c = 0, u = !0) {
		if (!e && !a$2) return;
		const l = ((o, t, n, i) => {
			var _o$closest;
			return ((o, t, n, i) => {
				const e = o.top, a = o.bottom, r = t.top, s = r + 15, d = Math.min(t.bottom, i - n) - 50 - a, c = s - e, u = Math.round(d < 0 ? -d : c > 0 ? -c : 0), l = Math.min(u, e - r);
				return {
					scrollAmount: l,
					scrollDuration: Math.min(400, Math.max(150, Math.abs(l) / .3)),
					scrollPadding: n,
					inputSafeY: 4 - (e - s)
				};
			})(((_o$closest = o.closest("ion-item,[ion-item]")) !== null && _o$closest !== void 0 ? _o$closest : o).getBoundingClientRect(), t.getBoundingClientRect(), n, i);
		})(o, e || a$2, r, c);
		if (e && Math.abs(l.scrollAmount) < 4) return x(t), void (s && null !== e && (b(e, S), y(t, e, (() => S = 0))));
		if (f(o, t, !0, l.inputSafeY, d), x(t), s && e && (S = l.scrollPadding, b(e, S)), "undefined" != typeof window) {
			let a$1;
			const r = function() {
				var _ref = _asyncToGenerator(function* () {
					void 0 !== a$1 && clearTimeout(a$1), window.removeEventListener("ionKeyboardDidShow", d), window.removeEventListener("ionKeyboardDidShow", r), e && (yield h$1(e, 0, l.scrollAmount, l.scrollDuration)), f(o, t, !1, l.inputSafeY), document.activeElement === t && x(t), s && y(t, e, (() => S = 0));
				});
				return function r() {
					return _ref.apply(this, arguments);
				};
			}(), d = () => {
				window.removeEventListener("ionKeyboardDidShow", d), window.addEventListener("ionKeyboardDidShow", r);
			};
			if (e) {
				const o = yield a(e);
				if (u && l.scrollAmount > o.scrollHeight - o.clientHeight - o.scrollTop) return "password" === t.type ? (l.scrollAmount += 50, window.addEventListener("ionKeyboardDidShow", d)) : window.addEventListener("ionKeyboardDidShow", r), void (a$1 = setTimeout(r, 1e3));
			}
			r();
		}
	});
	return function M(_x, _x2, _x3, _x4, _x5, _x6) {
		return _ref2.apply(this, arguments);
	};
}();
var K = function() {
	var _ref5 = _asyncToGenerator(function* (n$2, i) {
		if (void 0 === o) return;
		const u = "ios" === i, l = "android" === i, w = n$2.getNumber("keyboardHeight", 290), p = n$2.getBoolean("scrollAssist", !0), h = n$2.getBoolean("hideCaretOnScroll", u), b = n$2.getBoolean("inputBlurring", !1), y = n$2.getBoolean("scrollPadding", !0), S = Array.from(o.querySelectorAll("ion-input, ion-textarea")), x = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), v = yield e.getResizeMode(), j = function() {
			var _ref4 = _asyncToGenerator(function* (t$2) {
				yield new Promise(((o) => n(t$2, o)));
				const n$1 = t$2.shadowRoot || t$2, i = n$1.querySelector("input") || n$1.querySelector("textarea"), c$1 = l$1(t$2), u = c$1 ? null : t$2.closest("ion-footer");
				if (i) {
					if (c$1 && h && !x.has(t$2)) {
						const o = ((o, t, n) => {
							if (!n || !t) return () => {};
							const i = (n) => {
								var i;
								(i = t) === i.getRootNode().activeElement && f(o, t, n);
							}, e = () => f(o, t, !1), s = () => i(!0), d = () => i(!1);
							return d$1(n, "ionScrollStart", s), d$1(n, "ionScrollEnd", d), t.addEventListener("blur", e), () => {
								c(n, "ionScrollStart", s), c(n, "ionScrollEnd", d), t.removeEventListener("blur", e);
							};
						})(t$2, i, c$1);
						x.set(t$2, o);
					}
					if ("date" !== i.type && "datetime-local" !== i.type && (c$1 || u) && p && !K.has(t$2)) {
						const n = ((t$1, n, i, e, a, r, s, c = !1) => {
							const u = r && (void 0 === s || s.mode === t.None);
							let l = !1;
							const f = void 0 !== d ? d.innerHeight : 0, w = (o) => {
								!1 !== l ? M(t$1, n, i, e, o.detail.keyboardHeight, u, c, f, !1) : l = !0;
							}, p = () => {
								l = !1, d === null || d === void 0 || d.removeEventListener("ionKeyboardDidShow", w), t$1.removeEventListener("focusout", p);
							}, m = function() {
								var _ref3 = _asyncToGenerator(function* () {
									n.hasAttribute(D) ? n.removeAttribute(D) : (M(t$1, n, i, e, a, u, c, f), d === null || d === void 0 || d.addEventListener("ionKeyboardDidShow", w), t$1.addEventListener("focusout", p));
								});
								return function m() {
									return _ref3.apply(this, arguments);
								};
							}();
							return t$1.addEventListener("focusin", m), () => {
								t$1.removeEventListener("focusin", m), d === null || d === void 0 || d.removeEventListener("ionKeyboardDidShow", w), t$1.removeEventListener("focusout", p);
							};
						})(t$2, i, c$1, u, w, y, v, l);
						K.set(t$2, n);
					}
				}
			});
			return function j(_x7) {
				return _ref4.apply(this, arguments);
			};
		}();
		b && (() => {
			let o = !0, t = !1;
			const n = document;
			d$1(n, "ionScrollStart", (() => {
				t = !0;
			})), n.addEventListener("focusin", (() => {
				o = !0;
			}), !0), n.addEventListener("touchend", ((i) => {
				if (t) return void (t = !1);
				const e = n.activeElement;
				if (!e) return;
				if (e.matches(m)) return;
				const a = i.target;
				a !== e && (a.matches(m) || a.closest(m) || (o = !1, setTimeout((() => {
					o || e.blur();
				}), 50)));
			}), !1);
		})();
		for (const o of S) j(o);
		o.addEventListener("ionInputDidLoad", ((o) => {
			j(o.detail);
		})), o.addEventListener("ionInputDidUnload", ((o) => {
			((o) => {
				if (h) {
					const t = x.get(o);
					t && t(), x.delete(o);
				}
				if (p) {
					const t = K.get(o);
					t && t(), K.delete(o);
				}
			})(o.detail);
		}));
	});
	return function K(_x8, _x9) {
		return _ref5.apply(this, arguments);
	};
}();
export { K as startInputShims };
