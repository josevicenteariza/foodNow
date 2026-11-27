import { t as _asyncToGenerator } from "./asyncToGenerator-Byb5jPv1.js";
import { f as d$1, l as Y, m as h$1, p as e, v as p$1 } from "./p-CyKwPay6-YSDcboAv.js";
import { t as d$2 } from "./p-ZjP4CjeZ-B7n67IAv.js";
import { a as f$1 } from "./p-vBBGetx6-CN5pXLrh.js";
// node_modules/@ionic/core/components/p-B2T8YxDT.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var t$1;
var i = (e, o, i) => {
	const n = o.startsWith("animation") ? (r = e, void 0 === t$1 && (t$1 = void 0 === r.style.animationName && void 0 !== r.style.webkitAnimationName ? "-webkit-" : ""), t$1) : "";
	var r;
	e.style.setProperty(n + o, i);
};
var n = (e = [], o) => {
	if (void 0 !== o) {
		const t = Array.isArray(o) ? o : [o];
		return [...e, ...t];
	}
	return e;
};
var r$1 = (t) => {
	let r, a, s, d, f, l, c, v, m, u, y, p = [], g = [], A = [], b = !1, C = {}, E = [], h = [], S = {}, k = 0, w = !1, R = !1, j = !0, T = !1, D = !0, F = !1;
	const K = t, P = [], W = [], I = [], M = [], Z = [], x = [], q = [], z = [], B = [], G = [], H = [], J = "function" == typeof AnimationEffect || void 0 !== d$2 && "function" == typeof d$2.AnimationEffect, L = "function" == typeof Element && "function" == typeof Element.prototype.animate && J, N = () => H, O = (e, o) => {
		const t = o.findIndex(((o) => o.c === e));
		t > -1 && o.splice(t, 1);
	}, Q = (e, o) => (((o === null || o === void 0 ? void 0 : o.oneTimeCallback) ? W : P).push({
		c: e,
		o
	}), y), U = () => {
		L && (H.forEach(((e) => {
			e.cancel();
		})), H.length = 0);
	}, V = () => {
		x.forEach(((e) => {
			e !== null && e !== void 0 && e.parentNode && e.parentNode.removeChild(e);
		})), x.length = 0;
	}, X = () => void 0 !== f ? f : c ? c.getFill() : "both", Y = () => void 0 !== v ? v : void 0 !== l ? l : c ? c.getDirection() : "normal", $ = () => w ? "linear" : void 0 !== s ? s : c ? c.getEasing() : "linear", _ = () => R ? 0 : void 0 !== m ? m : void 0 !== a ? a : c ? c.getDuration() : 0, ee = () => void 0 !== d ? d : c ? c.getIterations() : 1, oe = () => void 0 !== u ? u : void 0 !== r ? r : c ? c.getDelay() : 0, te = () => {
		0 !== k && (k--, 0 === k && ((() => {
			B.forEach(((e) => e())), G.forEach(((e) => e()));
			const e = j ? 1 : 0, o = E, t = h, n = S;
			M.forEach(((e) => {
				const r = e.classList;
				o.forEach(((e) => r.add(e))), t.forEach(((e) => r.remove(e)));
				for (const o in n) n.hasOwnProperty(o) && i(e, o, n[o]);
			})), m = void 0, v = void 0, u = void 0, P.forEach(((o) => o.c(e, y))), W.forEach(((o) => o.c(e, y))), W.length = 0, D = !0, j && (T = !0), j = !0;
		})(), c && c.animationFinish()));
	}, ie = () => {
		(() => {
			q.forEach(((e) => e())), z.forEach(((e) => e()));
			const e = g, o = A, t = C;
			M.forEach(((n) => {
				const r = n.classList;
				e.forEach(((e) => r.add(e))), o.forEach(((e) => r.remove(e)));
				for (const e in t) t.hasOwnProperty(e) && i(n, e, t[e]);
			}));
		})(), p.length > 0 && L && (M.forEach(((e) => {
			const o = e.animate(p, {
				id: K,
				delay: oe(),
				duration: _(),
				easing: $(),
				iterations: ee(),
				fill: X(),
				direction: Y()
			});
			o.pause(), H.push(o);
		})), H.length > 0 && (H[0].onfinish = () => {
			te();
		})), b = !0;
	}, ne = (e) => {
		e = Math.min(Math.max(e, 0), .9999), L && H.forEach(((o) => {
			o.currentTime = o.effect.getComputedTiming().delay + _() * e, o.pause();
		}));
	}, re = (e) => {
		H.forEach(((e) => {
			e.effect.updateTiming({
				delay: oe(),
				duration: _(),
				easing: $(),
				iterations: ee(),
				fill: X(),
				direction: Y()
			});
		})), void 0 !== e && ne(e);
	}, ae = (e = !1, o = !0, t) => (e && Z.forEach(((i) => {
		i.update(e, o, t);
	})), L && re(t), y), se = () => {
		b && (L ? H.forEach(((e) => {
			e.pause();
		})) : M.forEach(((e) => {
			i(e, "animation-play-state", "paused");
		})), F = !0);
	}, de = (e) => new Promise(((o) => {
		e !== null && e !== void 0 && e.sync && (R = !0, Q((() => R = !1), { oneTimeCallback: !0 })), b || ie(), T && (L && (ne(0), re()), T = !1), D && (k = Z.length + 1, D = !1);
		const t = () => {
			O(i, W), o();
		}, i = () => {
			O(t, I), o();
		};
		Q(i, { oneTimeCallback: !0 }), I.push({
			c: t,
			o: { oneTimeCallback: !0 }
		}), Z.forEach(((e) => {
			e.play();
		})), L ? (H.forEach(((e) => {
			e.play();
		})), 0 !== p.length && 0 !== M.length || te()) : te(), F = !1;
	})), fe = (e, o) => {
		const t = p[0];
		return void 0 === t || void 0 !== t.offset && 0 !== t.offset ? p = [{
			offset: 0,
			[e]: o
		}, ...p] : t[e] = o, y;
	};
	return y = {
		parentAnimation: c,
		elements: M,
		childAnimations: Z,
		id: K,
		animationFinish: te,
		from: fe,
		to: (e, o) => {
			const t = p[p.length - 1];
			return void 0 === t || void 0 !== t.offset && 1 !== t.offset ? p = [...p, {
				offset: 1,
				[e]: o
			}] : t[e] = o, y;
		},
		fromTo: (e, o, t) => fe(e, o).to(e, t),
		parent: (e) => (c = e, y),
		play: de,
		pause: () => (Z.forEach(((e) => {
			e.pause();
		})), se(), y),
		stop: () => {
			Z.forEach(((e) => {
				e.stop();
			})), b && (U(), b = !1), w = !1, R = !1, D = !0, v = void 0, m = void 0, u = void 0, k = 0, T = !1, j = !0, F = !1, I.forEach(((e) => e.c(0, y))), I.length = 0;
		},
		destroy: (e) => (Z.forEach(((o) => {
			o.destroy(e);
		})), ((e) => {
			U(), e && V();
		})(e), M.length = 0, Z.length = 0, p.length = 0, P.length = 0, W.length = 0, b = !1, D = !0, y),
		keyframes: (e) => {
			const o = p !== e;
			return p = e, o && ((e) => {
				L && N().forEach(((o) => {
					const t = o.effect;
					if (t.setKeyframes) t.setKeyframes(e);
					else o.effect = new KeyframeEffect(t.target, e, t.getTiming());
				}));
			})(p), y;
		},
		addAnimation: (e) => {
			if (null != e) if (Array.isArray(e)) for (const o of e) o.parent(y), Z.push(o);
			else e.parent(y), Z.push(e);
			return y;
		},
		addElement: (o) => {
			if (null != o) if (1 === o.nodeType) M.push(o);
			else if (o.length >= 0) for (let e = 0; e < o.length; e++) M.push(o[e]);
			else h$1("createAnimation - Invalid addElement value.");
			return y;
		},
		update: ae,
		fill: (e) => (f = e, ae(!0), y),
		direction: (e) => (l = e, ae(!0), y),
		iterations: (e) => (d = e, ae(!0), y),
		duration: (e) => (L || 0 !== e || (e = 1), a = e, ae(!0), y),
		easing: (e) => (s = e, ae(!0), y),
		delay: (e) => (r = e, ae(!0), y),
		getWebAnimations: N,
		getKeyframes: () => p,
		getFill: X,
		getDirection: Y,
		getDelay: oe,
		getIterations: ee,
		getEasing: $,
		getDuration: _,
		afterAddRead: (e) => (B.push(e), y),
		afterAddWrite: (e) => (G.push(e), y),
		afterClearStyles: (e = []) => {
			for (const o of e) S[o] = "";
			return y;
		},
		afterStyles: (e = {}) => (S = e, y),
		afterRemoveClass: (e) => (h = n(h, e), y),
		afterAddClass: (e) => (E = n(E, e), y),
		beforeAddRead: (e) => (q.push(e), y),
		beforeAddWrite: (e) => (z.push(e), y),
		beforeClearStyles: (e = []) => {
			for (const o of e) C[o] = "";
			return y;
		},
		beforeStyles: (e = {}) => (C = e, y),
		beforeRemoveClass: (e) => (A = n(A, e), y),
		beforeAddClass: (e) => (g = n(g, e), y),
		onFinish: Q,
		isRunning: () => 0 !== k && !F,
		progressStart: (e = !1, o) => (Z.forEach(((t) => {
			t.progressStart(e, o);
		})), se(), w = e, b || ie(), ae(!1, !0, o), y),
		progressStep: (e) => (Z.forEach(((o) => {
			o.progressStep(e);
		})), ne(e), y),
		progressEnd: (e, o, t) => (w = !1, Z.forEach(((i) => {
			i.progressEnd(e, o, t);
		})), void 0 !== t && (m = t), T = !1, j = !0, 0 === e ? (v = "reverse" === Y() ? "normal" : "reverse", "reverse" === v && (j = !1), L ? (ae(), ne(1 - o)) : (u = (1 - o) * _() * -1, ae(!1, !1))) : 1 === e && (L ? (ae(), ne(o)) : (u = o * _() * -1, ae(!1, !1))), void 0 === e || c || de(), y)
	};
};
// node_modules/@ionic/core/components/p-BgjAK-TD.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var t = "ionViewWillEnter";
var r = "ionViewDidEnter";
var s = "ionViewWillLeave";
var c = "ionViewDidLeave";
var l = "ionViewWillUnload";
var u = (n) => {
	n.tabIndex = -1, n.focus();
};
var d = (n) => null !== n.offsetParent;
var p = "ion-last-focus";
var f = (e$1) => {
	if (e.get("focusManagerPriority", !1)) {
		const n = document.activeElement;
		null !== n && e$1 !== null && e$1 !== void 0 && e$1.contains(n) && n.setAttribute(p, "true");
	}
};
var v = (i) => {
	const a = e.get("focusManagerPriority", !1);
	if (Array.isArray(a) && !i.contains(document.activeElement)) {
		const n = i.querySelector(`[${p}]`);
		if (n && d(n)) return void u(n);
		for (const n of a) switch (n) {
			case "content":
				const a = i.querySelector("main, [role=\"main\"]");
				if (a && d(a)) return void u(a);
				break;
			case "heading":
				const o = i.querySelector("h1, [role=\"heading\"][aria-level=\"1\"]");
				if (o && d(o)) return void u(o);
				break;
			case "banner":
				const t = i.querySelector("header, [role=\"banner\"]");
				if (t && d(t)) return void u(t);
				break;
			default: d$1(`Unrecognized focus manager priority value ${n}`);
		}
		u(i);
	}
};
var w = (n) => new Promise(((e, a) => {
	Y((() => {
		const i = $(n);
		m(n, i), g(n).then(((i) => {
			i.animation && i.animation.destroy(), b(n), e(i);
		}), ((e) => {
			b(n), a(e);
		})).finally((() => {
			A(i, !1);
		}));
	}));
}));
var m = (n, e) => {
	const i = n.enteringEl, a = n.leavingEl;
	f(a), x(i, a, n.direction), A(e, !0), n.showGoBack ? i.classList.add("can-go-back") : i.classList.remove("can-go-back"), M(i, !1), i.style.setProperty("pointer-events", "none"), a && (M(a, !1), a.style.setProperty("pointer-events", "none"));
};
var g = function() {
	var _ref = _asyncToGenerator(function* (n) {
		const e = yield y(n);
		return e && p$1.isBrowser ? h(e, n) : P(n);
	});
	return function g(_x) {
		return _ref.apply(this, arguments);
	};
}();
var b = (n) => {
	const e = n.enteringEl, i = n.leavingEl;
	e.classList.remove("ion-page-invisible"), e.style.removeProperty("pointer-events"), void 0 !== i && (i.classList.remove("ion-page-invisible"), i.style.removeProperty("pointer-events")), v(e);
};
var y = function() {
	var _ref2 = _asyncToGenerator(function* (n) {
		if (n.leavingEl && n.animated && 0 !== n.duration) return n.animationBuilder ? n.animationBuilder : "ios" === n.mode ? (yield import("./standalone-jBOTbRay.js").then((n) => n.un)).iosTransitionAnimation : (yield import("./standalone-jBOTbRay.js").then((n) => n.sn)).mdTransitionAnimation;
	});
	return function y(_x2) {
		return _ref2.apply(this, arguments);
	};
}();
var h = function() {
	var _ref3 = _asyncToGenerator(function* (n, e) {
		yield k(e, !0);
		const i = n(e.baseEl, e);
		j(e.enteringEl, e.leavingEl);
		const a = yield V(i, e);
		return e.progressCallback && e.progressCallback(void 0), a && B(e.enteringEl, e.leavingEl), {
			hasCompleted: a,
			animation: i
		};
	});
	return function h(_x3, _x4) {
		return _ref3.apply(this, arguments);
	};
}();
var P = function() {
	var _ref4 = _asyncToGenerator(function* (e$2) {
		const i = e$2.enteringEl, a = e$2.leavingEl;
		return yield k(e$2, e.get("focusManagerPriority", !1)), j(i, a), B(i, a), { hasCompleted: !0 };
	});
	return function P(_x5) {
		return _ref4.apply(this, arguments);
	};
}();
var k = function() {
	var _ref5 = _asyncToGenerator(function* (n, e) {
		(void 0 !== n.deepWait ? n.deepWait : e) && (yield Promise.all([L(n.enteringEl), L(n.leavingEl)])), yield C(n.viewIsReady, n.enteringEl);
	});
	return function k(_x6, _x7) {
		return _ref5.apply(this, arguments);
	};
}();
var C = function() {
	var _ref6 = _asyncToGenerator(function* (n, e) {
		n && (yield n(e));
	});
	return function C(_x8, _x9) {
		return _ref6.apply(this, arguments);
	};
}();
var V = (n, e) => {
	const i = e.progressCallback, a = new Promise(((e) => {
		n.onFinish(((n) => e(1 === n)));
	}));
	return i ? (n.progressStart(!0), i(n)) : n.play(), a;
};
var j = (n, e) => {
	D(e, s), D(n, t);
};
var B = (n, e) => {
	D(n, r), D(e, c);
};
var D = (n, e) => {
	if (n) {
		const i = new CustomEvent(e, {
			bubbles: !1,
			cancelable: !1
		});
		n.dispatchEvent(i);
	}
};
var E = () => new Promise(((n) => f$1((() => f$1((() => n()))))));
var L = function() {
	var _ref7 = _asyncToGenerator(function* (n) {
		const e = n;
		if (e) {
			if (null != e.componentOnReady) {
				if (null != (yield e.componentOnReady())) return;
			} else if (null != e.__registerHost) {
				yield new Promise(((n) => f$1(n)));
				return;
			}
			yield Promise.all(Array.from(e.children).map(L));
		}
	});
	return function L(_x10) {
		return _ref7.apply(this, arguments);
	};
}();
var M = (n, e) => {
	e ? (n.setAttribute("aria-hidden", "true"), n.classList.add("ion-page-hidden")) : (n.hidden = !1, n.removeAttribute("aria-hidden"), n.classList.remove("ion-page-hidden"));
};
var W = (n) => (n.style.setProperty("pointer-events", "none"), () => {
	setTimeout((() => n.style.removeProperty("pointer-events")));
});
var x = (n, e, i) => {
	void 0 !== n && (n.style.zIndex = "back" === i ? "99" : "101"), void 0 !== e && (e.style.zIndex = "100");
};
var A = (n, e) => {
	if (!n) return;
	const i = "header-transitioning";
	e ? n.classList.add(i) : n.classList.remove(i);
};
var U = (n) => {
	if (n.classList.contains("ion-page")) return n;
	return n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs") || n;
};
var $ = (n) => {
	if ("ios" !== n.mode) return null;
	const e = "back" === n.direction ? n.leavingEl : n.enteringEl;
	return e ? e.querySelector("ion-header") : null;
};
export { U as a, l as c, t as d, w as f, M as i, r as l, E as n, W as o, r$1 as p, L as r, c as s, D as t, s as u };
