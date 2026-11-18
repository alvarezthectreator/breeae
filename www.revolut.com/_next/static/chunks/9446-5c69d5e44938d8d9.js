! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f8969688-9f33-41cc-b854-81b7c6f440b3", e._sentryDebugIdIdentifier = "sentry-dbid-f8969688-9f33-41cc-b854-81b7c6f440b3")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9446], {
        134: () => {},
        3258: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => s
            });
            var l = n(23798),
                r = n(21462),
                a = n(883),
                o = n(13876),
                i = n(3653);
            let s = (0, r.memo)(function(e) {
                let {
                    countryCode: t,
                    ...n
                } = e, r = t ? (0, i.xg)(t) : void 0;
                return (0, l.jsx)(o.A, {
                    display: "inline-block",
                    src: r,
                    size: 24,
                    borderRadius: a.T.ROUND,
                    alt: null != t ? t : "Country flag",
                    ...n
                })
            })
        },
        13876: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var l = n(23798),
                r = n(21462),
                a = n(9636),
                o = n(883),
                i = n(19053);
            n(134);
            let s = (0, r.memo)(function(e) {
                let {
                    src: t,
                    alt: n,
                    size: r = 24,
                    ...s
                } = e;
                return (0, l.jsx)(a._, {
                    className: "rba3cx0",
                    image: t ? {
                        default: t,
                        "1x": [t, (null == t ? void 0 : t.endsWith(".webp")) ? t.replace(/.webp$/, ".png") : void 0].filter(i.zz)
                    } : void 0,
                    display: "inline-block",
                    borderRadius: o.T.ROUND,
                    alt: null != n ? n : "",
                    size: r,
                    minWidth: r,
                    ...s
                })
            })
        },
        23582: (e, t, n) => {
            "use strict";
            n.d(t, {
                RR: () => u,
                hP: () => s,
                qe: () => c,
                sH: () => d
            });
            var l = n(23798),
                r = n(21462);
            let a = {
                    enabled: !1,
                    mode: void 0
                },
                o = (0, r.createContext)(a),
                i = (0, r.createContext)({
                    setViewportAnimation: () => void 0
                }),
                s = e => {
                    let {
                        children: t
                    } = e, [n, s] = (0, r.useState)(a), u = (0, r.useCallback)(e => {
                        s(t => t.enabled === e.enabled && t.mode === e.mode ? t : e)
                    }, []), c = (0, r.useMemo)(() => ({
                        setViewportAnimation: u
                    }), [u]);
                    return (0, l.jsx)(i.Provider, {
                        value: c,
                        children: (0, l.jsx)(o.Provider, {
                            value: n,
                            children: t
                        })
                    })
                },
                u = () => (0, r.useContext)(o),
                c = e => {
                    let {
                        enabled: t,
                        mode: n
                    } = e, {
                        setViewportAnimation: l
                    } = (0, r.useContext)(i);
                    (0, r.useLayoutEffect)(() => {
                        t && l({
                            enabled: !0,
                            mode: n
                        })
                    }, [t, n, l]), (0, r.useEffect)(() => {
                        if (t) return () => {
                            l({
                                enabled: !1,
                                mode: void 0
                            })
                        }
                    }, [t, l])
                },
                d = () => {
                    let {
                        enabled: e,
                        mode: t
                    } = u();
                    if (e && t) return {
                        "data-theme-viewport-animation": "true"
                    }
                }
        },
        35442: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => w
            });
            var l = n(23798),
                r = n(21462),
                a = n(13689),
                o = n(49914),
                i = n(90036);
            let s = e => {
                e ? document.documentElement.setAttribute("data-theme-change-animation", "true") : document.documentElement.removeAttribute("data-theme-change-animation")
            };
            var u = n(23582),
                c = n(23438),
                d = n(87094),
                m = n(21236),
                h = n(79933),
                p = n(61683),
                v = n(1402),
                f = n(54643),
                x = n(7415),
                g = n(54434);
            async function j(e) {
                try {
                    let t = await fetch(e);
                    if (!t.ok) return [];
                    let n = await t.json();
                    if (n && Array.isArray(n)) return n;
                    return []
                } catch (e) {
                    return []
                }
            }
            let b = [],
                w = e => {
                    var t, n;
                    let {
                        blocks: w
                    } = e, y = function(e) {
                        let t = function() {
                                var e;
                                let t = (0, v.useRouter)(),
                                    {
                                        region: n
                                    } = (0, f.Wx)(t.locale),
                                    l = ((0, g.K)(), n !== window.initialFlagsRegion || void 0 === window.initialFlags),
                                    r = n === window.initialFlagsRegion && null != (e = window.initialFlags) ? e : b,
                                    {
                                        data: a
                                    } = (0, p.Ay)(null, j, {
                                        fallbackData: r,
                                        revalidateOnMount: l,
                                        revalidateOnFocus: !1,
                                        shouldRetryOnError: !0,
                                        keepPreviousData: !0,
                                        onErrorRetry: (e, t, n, l, r) => {
                                            let {
                                                retryCount: a
                                            } = r;
                                            if (a > 3) return void(0, x.H)("UI Flags", e);
                                            setTimeout(() => l({
                                                retryCount: a
                                            }), 40 * Math.pow(5, a))
                                        }
                                    });
                                return a
                            }(),
                            [n, l] = (0, r.useState)(null != e ? e : []);
                        return (0, r.useEffect)(() => {
                            var n;
                            l(null != (n = null == e ? void 0 : e.filter(e => {
                                let n = e.feature;
                                return !n || (t.includes(n.name) ? "active" === n.state : "inactive" === n.state)
                            })) ? n : [])
                        }, [t, e]), n
                    }(w), R = (0, d.G)(y), {
                        backgroundColor: C,
                        backgroundImage: k
                    } = (0, m.i)(), N = !!C || !!k, L = (0, r.useMemo)(() => (0, d.y)(R), [R]), I = L.some(e => e.animated), S = (0, r.useMemo)(() => R.map(() => (0, r.createRef)()), [R]), _ = (0, r.useMemo)(() => R.map((e, t) => ({
                        mode: e.themeMode,
                        ref: S[t],
                        themeChangeAnimation: e.themeChangeAnimation
                    })), [R, S]), {
                        activeMode: F,
                        activeSectionIndex: E
                    } = (e => {
                        let {
                            enabled: t,
                            sections: n,
                            initialMode: l
                        } = e, [a, o] = (0, r.useState)(l), [i, u] = (0, r.useState)(0), c = (0, r.useRef)(a), d = (0, r.useRef)(0);
                        return c.current = a, (0, r.useEffect)(() => t ? (s(!1), () => {
                            s(!1)
                        }) : void s(!1), [t]), (0, r.useLayoutEffect)(() => {
                            if (c.current = l, d.current = 0, o(l), u(0), !t || 0 === n.length) return;
                            let e = null,
                                r = !1,
                                a = () => {
                                    (e => {
                                        var t, a;
                                        let i = d.current,
                                            m = null != (a = null == (t = n[e]) ? void 0 : t.mode) ? a : l;
                                        if (m === c.current && e === i) {
                                            r = !0;
                                            return
                                        }
                                        r && ((e, t, n) => {
                                            var l;
                                            return t !== n && !!(null == (l = e[Math.max(t, n)]) ? void 0 : l.themeChangeAnimation)
                                        })(n, i, e) ? s(!0) : (s(!1), document.documentElement.offsetHeight), d.current = e, c.current = m, r = !0, u(e), o(m)
                                    })(((e, t) => {
                                        if (0 === e.length) return t;
                                        let n = .4 * window.innerHeight;
                                        for (let t = 0; t < e.length; t++) {
                                            let l = e[t].ref.current;
                                            if (!l) continue;
                                            let {
                                                top: r,
                                                bottom: a
                                            } = l.getBoundingClientRect();
                                            if (!(a - r < 1) && r <= n && a > n) return t
                                        }
                                        let l = t;
                                        for (let t = 0; t < e.length; t++) {
                                            let r = e[t].ref.current;
                                            r && r.getBoundingClientRect().top <= n && (l = t)
                                        }
                                        return l
                                    })(n, d.current)), e = null
                                },
                                i = () => {
                                    null === e && (e = requestAnimationFrame(a))
                                };
                            a();
                            let m = window.setTimeout(a, 0);
                            return window.addEventListener("scroll", i, {
                                passive: !0
                            }), window.addEventListener("resize", i, {
                                passive: !0
                            }), () => {
                                window.removeEventListener("scroll", i), window.removeEventListener("resize", i), window.clearTimeout(m), null !== e && cancelAnimationFrame(e)
                            }
                        }, [t, n, l]), {
                            activeMode: a,
                            activeSectionIndex: i
                        }
                    })({
                        enabled: I && R.length > 0,
                        sections: _,
                        initialMode: null != (n = null == (t = R[0]) ? void 0 : t.themeMode) ? n : "light"
                    });
                    (0, u.qe)({
                        enabled: I,
                        mode: F
                    });
                    let M = (e, t, n) => {
                        var r;
                        return (0, l.jsx)(c.HP, {
                            mode: e.themeMode,
                            backgroundColor: N ? void 0 : "background",
                            sectionRef: t,
                            children: null == (r = e.blocks) ? void 0 : r.map(e => (0, l.jsx)(i.$, { ...e
                            }, e.id))
                        }, n)
                    };
                    return I ? (0, l.jsx)(l.Fragment, {
                        children: L.map(e => {
                            if (!e.animated) {
                                let t = R[e.startIndex];
                                return (0, l.jsx)("div", {
                                    ref: S[e.startIndex],
                                    className: h.N,
                                    children: M(t)
                                }, e.startIndex)
                            }
                            let t = R[Math.min(e.endIndex, Math.max(e.startIndex, E))].themeMode,
                                n = 1 === L.length ? h.oS : h.XL;
                            return (0, l.jsx)("div", {
                                className: h.Rs,
                                children: (0, l.jsx)(a.N, {
                                    mode: t,
                                    children: (0, l.jsx)(o.a, {
                                        className: n,
                                        backgroundColor: "background",
                                        color: "foreground",
                                        width: "100%",
                                        children: (0, l.jsx)(c.sp, {
                                            children: R.slice(e.startIndex, e.endIndex + 1).map((t, n) => {
                                                let l = e.startIndex + n;
                                                return M(t, S[l], l)
                                            })
                                        })
                                    })
                                })
                            }, e.startIndex)
                        })
                    }) : (0, l.jsx)(l.Fragment, {
                        children: R.map((e, t) => M(e, void 0, t))
                    })
                }
        },
        38724: () => {},
        43180: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => w
            });
            var l = n(23798),
                r = n(21452),
                a = n(23079),
                o = n(43542),
                i = n(99547),
                s = n(73031),
                u = n(23478),
                c = n(81370),
                d = n(12206),
                m = n(9636),
                h = n(21462),
                p = n(3258),
                v = n(16898),
                f = n(36344),
                x = n(64513),
                g = n(42412),
                j = n(33514);
            let b = Array.from(f.Fg),
                w = e => {
                    let {
                        isOpen: t,
                        onClose: n,
                        analyticsComponent: f
                    } = e, w = (0, g.k)(), [y, R] = (0, h.useState)(""), C = (0, h.useDeferredValue)(y), k = (0, j.c)(), N = (0, x.N)(f), L = (0, h.useMemo)(() => b.filter(e => w(e).toLowerCase().includes(C.toLowerCase())).map(e => ({
                        countryCode: e,
                        countryName: w(e)
                    })).sort((e, t) => e.countryName.localeCompare(t.countryName)), [w, C]), I = (0, h.useCallback)(() => {
                        n(), R("")
                    }, [R, n]), S = (0, h.useCallback)(async e => {
                        I(), await N(e)
                    }, [N, I]);
                    return (0, l.jsxs)(r.z, {
                        open: t,
                        onClose: I,
                        "aria-label": k("shared.labelSearch"),
                        labelButtonClose: k("shared.button.close"),
                        variant: "bottom-sheet",
                        shouldKeepMaxHeight: !0,
                        children: [(0, l.jsx)(a.Y, {
                            variant: "bottom-sheet",
                            children: (0, l.jsx)(a.Y.Sticky, {
                                children: (0, l.jsx)(o.v, {
                                    placeholder: k("shared.labelSearch"),
                                    value: y,
                                    onChange: R
                                })
                            })
                        }), L.length > 0 ? (0, l.jsx)(i.Y, {
                            children: L.map(e => {
                                let {
                                    countryCode: t,
                                    countryName: n
                                } = e;
                                return (0, l.jsx)(s.q, {
                                    onClick: () => S(t),
                                    use: "button",
                                    children: (0, l.jsxs)(u.z, {
                                        use: "span",
                                        space: "sp300",
                                        align: "center",
                                        children: [(0, l.jsx)(p.J, {
                                            countryCode: t
                                        }), (0, l.jsx)(c.EY, {
                                            variant: "primary",
                                            children: n
                                        })]
                                    })
                                }, t)
                            })
                        }) : (0, l.jsxs)(d.T, {
                            space: "sp300",
                            align: "center",
                            children: [(0, l.jsx)(m._, {
                                size: 104,
                                alt: k("shared.search.noResult"),
                                src: "".concat(v.Hh, "/assets/3d-images-v2/3D086.png"),
                                srcSet: "".concat(v.Hh, "/assets/3d-images-v2/3D086@2x.png 2x, ").concat(v.Hh, "/assets-v2/3d-images/3D086@3x.png 3x")
                            }), (0, l.jsx)(c.EY, {
                                variant: "primary",
                                children: k("shared.search.noResult")
                            })]
                        })]
                    })
                }
        },
        47691: () => {},
        51345: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => m
            });
            var l = n(86450),
                r = n(21462),
                a = n(72834),
                o = n(72733),
                i = n(55752),
                s = n(72194),
                u = n(98618),
                c = n(95672),
                d = function(e) {
                    return e ? "dropdown-" + e : void 0
                };

            function m(e) {
                void 0 === e && (e = {});
                var t = (0, i.e)(e),
                    n = t[0],
                    m = t[1],
                    h = (0, r.useRef)(null),
                    p = (0, o.B)(),
                    v = (0, r.useCallback)(function(e) {
                        return void 0 === e && (e = c.n), (0, l._P)({}, e, {
                            "aria-expanded": n || void 0,
                            "aria-controls": n ? d(p) : void 0,
                            ref: (0, a.Px)(h, e.ref),
                            onClick: (0, s.kg)(function() {
                                return m()
                            }, e.onClick)
                        })
                    }, [p, n, m]),
                    f = (0, r.useCallback)(function(e) {
                        return void 0 === e && (e = c.n), (0, l._P)({}, e, {
                            anchorRef: h,
                            id: d(p),
                            open: (0, u.Lm)(e.open) ? e.open && n : n,
                            onClose: (0, s.kg)(m.off, e.onClose)
                        })
                    }, [p, n, m]);
                return {
                    state: n,
                    toggle: m,
                    getAnchorProps: v,
                    getTargetProps: f
                }
            }
        },
        53418: () => {},
        61422: () => {},
        64513: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => p
            });
            var l = n(21462),
                r = n(1402),
                a = n(36344),
                o = n(40961),
                i = n(94059),
                s = n(54643),
                u = n(91898),
                c = n(94191),
                d = n(65332),
                m = n(93392),
                h = n(5515);

            function p(e) {
                let [, t, n] = (0, d.G)(o.eT.NextLocale), {
                    asPath: p,
                    query: v,
                    push: f,
                    locale: x
                } = (0, r.useRouter)(), {
                    trackEvent: g
                } = (0, c.st)(), {
                    language: j,
                    region: b
                } = (0, s.Wx)(x), {
                    isBusiness: w
                } = (0, m.S)(), y = (0, l.useCallback)((e, l) => l ? t(e) : n(), [t, n]);
                return (0, l.useCallback)(async t => {
                    let n = a.Fg.has(t),
                        l = n ? (0, a.we)(t) : a.Nm,
                        r = (0, s.RR)(l, t);
                    g({
                        action: "Locale_Change",
                        component_name: e,
                        vertical: w ? "Business" : "Retail",
                        payload: {
                            previousLocale: (0, s.RR)(j, b),
                            nextLocale: r
                        }
                    }), g({
                        action: "location_change",
                        component_name: e,
                        send_to: h.$R,
                        vertical: w ? "Business" : "Retail",
                        payload: {
                            previousLocale: (0, s.RR)(j, b),
                            nextLocale: r
                        }
                    }), y(r, n);
                    let o = (0, u.Lm)(p, v, {
                        [i.MP.FallbackToIndex]: ""
                    });
                    await f(o, void 0, {
                        locale: r
                    })
                }, [e, p, w, j, f, v, b, y, g])
            }
        },
        83413: () => {},
        91799: () => {},
        98333: () => {},
        99446: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => ei
            });
            var l = n(23798),
                r = n(21462),
                a = n(13689),
                o = n(21458),
                i = n(1402),
                s = n(35442),
                u = n(36344),
                c = n(54643),
                d = n(89752),
                m = n(54434),
                h = n(11944),
                p = n(42412),
                v = n(3653),
                f = n(13876),
                x = n(43180),
                g = n(73210),
                j = n(75077),
                b = n(14140);
            n(53418);
            let w = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, l.jsx)(g.r, { ...r,
                    ref: t,
                    className: (0, j.cn)(b.U0, "l5pm5y0", n)
                })
            });
            w.displayName = "FooterSelectButton";
            let y = () => {
                let [e, t] = (0, r.useState)(!1), n = (0, h.W)(), a = (0, p.k)(), {
                    locale: o
                } = (0, i.useRouter)(), {
                    region: s
                } = (0, c.Wx)(o), u = a(s), d = (0, v.xg)(s), m = (0, l.jsx)(f.A, {
                    src: d,
                    size: 14,
                    alt: s
                });
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(w, {
                        onClick: () => t(!0),
                        useIcon: n ? void 0 : m,
                        useEndIcon: n ? m : void 0,
                        children: (0, l.jsx)("span", {
                            translate: "no",
                            children: u
                        })
                    }), (0, l.jsx)(x.v, {
                        isOpen: e,
                        onClose: () => t(!1),
                        analyticsComponent: "footer"
                    })]
                })
            };
            var R = n(51345),
                C = n(67223),
                k = n(19053),
                N = n(94191),
                L = n(93392),
                I = n(5515),
                S = n(65332),
                _ = n(40961),
                F = n(16898);
            let E = c.eo.reduce((e, t) => {
                    let {
                        language: n,
                        title: l
                    } = t;
                    return { ...e,
                        [n]: {
                            label: l,
                            value: n
                        }
                    }
                }, {}),
                M = () => {
                    let e = (0, i.useRouter)(),
                        {
                            language: t,
                            region: n
                        } = (0, c.Wx)(e.locale),
                        a = (0, R.B)(),
                        o = function() {
                            let {
                                asPath: e,
                                locale: t,
                                push: n,
                                query: {
                                    slug: l,
                                    ...a
                                } = {}
                            } = (0, i.useRouter)(), {
                                region: o
                            } = (0, c.Wx)(t), [, s] = (0, S.G)(_.eT.NextLocale);
                            return (0, r.useCallback)(async (t, l) => {
                                let r = new URL(e, "https://".concat(F.WF, "/")),
                                    i = {
                                        pathname: r.pathname,
                                        query: a,
                                        hash: r.hash.replace("#", "")
                                    },
                                    u = (0, c.RR)(t, null != l ? l : o);
                                u && (s(u), await n(i, i, {
                                    locale: u
                                }))
                            }, [e, a, o, s, n])
                        }(),
                        {
                            trackEvent: s
                        } = (0, N.st)(),
                        {
                            isBusiness: d
                        } = (0, L.S)(),
                        m = (0, r.useMemo)(() => n ? (0, u.uX)(n).map(e => E[e]).filter(k.zz) : [], [n]),
                        h = (0, r.useCallback)(async e => {
                            a.toggle(!1), s({
                                action: "Locale_Change",
                                component_name: "footer",
                                vertical: d ? "Business" : "Retail",
                                payload: {
                                    previousLocale: (0, c.RR)(t, n),
                                    nextLocale: (0, c.RR)(e, n)
                                }
                            }), s({
                                action: "language_change",
                                component_name: "footer",
                                send_to: I.$R,
                                vertical: d ? "Business" : "Retail",
                                payload: {
                                    previousLocale: (0, c.RR)(t, n),
                                    nextLocale: (0, c.RR)(e, n)
                                }
                            }), await o(e)
                        }, [a, o, t, n, s, d]);
                    if (!t || m.length <= 1 || "JP" !== n && e.pathname.startsWith("/careers")) return null;
                    let p = t in E ? E[t].label : "Unknown";
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(w, { ...a.getAnchorProps(),
                            useIcon: "Language",
                            "aria-label": p,
                            children: (0, l.jsx)("span", {
                                translate: "no",
                                children: p
                            })
                        }), (0, l.jsx)(C.m, { ...a.getTargetProps(),
                            maxWidth: 240,
                            placement: "bottom-start",
                            width: "100%",
                            children: m.map(e => {
                                let {
                                    value: t,
                                    label: n
                                } = e;
                                return (0, l.jsx)(C.m.Item, {
                                    use: "button",
                                    value: t,
                                    onClick: () => h(t),
                                    children: n
                                }, t)
                            })
                        })]
                    })
                };
            var z = n(76616);
            n(83413);
            let A = e => (0, l.jsx)(z.j, {
                className: "e1hc720",
                ...e
            });
            var B = n(37456),
                D = n(49914),
                P = n(26783),
                T = n(27691),
                W = n(20784),
                q = n(67605),
                H = n(48858);
            n(91799);
            let Y = e => {
                let {
                    children: t = "",
                    value: n,
                    title: r,
                    className: a,
                    ...o
                } = e, i = r;
                return !i && (0, k.Kg)(t) && (i = t), (0, l.jsx)(H.N, {
                    className: (0, j.cn)("_12954u40", a),
                    color: "grey-20",
                    display: "block",
                    py: "sp100",
                    title: i,
                    value: n,
                    variant: "small",
                    ...o,
                    children: t
                })
            };
            n(61422);
            let U = () => {
                var e, t;
                let {
                    getLocation: n,
                    getLocationLink: r,
                    getLocationTitle: a
                } = (0, W.jq)(), {
                    getSitemapLocationsByScope: o
                } = (0, q.e)(), i = null == (t = o([P.S.Legal])) || null == (e = t.find(e => {
                    var t;
                    let {
                        locationId: l
                    } = e;
                    return (null == (t = n(l)) ? void 0 : t.type) === T.iF.Section
                })) ? void 0 : e.items;
                return (0, l.jsx)(B.s, {
                    className: "wu2d3r0",
                    use: "ul",
                    children: null == i ? void 0 : i.map(e => {
                        let t = a(e),
                            n = r(e);
                        return t && n ? (0, l.jsx)(D.a, {
                            use: "li",
                            marginRight: "sp600",
                            children: (0, l.jsx)(Y, {
                                value: n,
                                children: t
                            })
                        }, e) : null
                    })
                })
            };
            var O = n(70003),
                G = n(78522),
                X = n(48966),
                $ = n(34244),
                K = n(23478),
                J = n(81370),
                V = n(33584),
                Q = n(86206);
            n(98333);
            let Z = e => {
                let {
                    sitemapLocation: t
                } = e, {
                    getLocationTitle: n,
                    getLocationLink: a,
                    getLocationProps: o
                } = (0, W.jq)(), i = n(t.locationId), s = (0, r.useMemo)(() => {
                    var e;
                    return null == (e = t.items) ? void 0 : e.map(e => {
                        let t = o(e),
                            r = n(e),
                            i = a(e);
                        return (null == t ? void 0 : t.scope.includes(P.S.Footer)) && i ? (0, l.jsx)(Y, {
                            className: "qe9cfy1",
                            value: i,
                            children: r
                        }, e) : null
                    })
                }, [t.items, o, n, a]);
                return i ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(D.a, {
                        hide: "md-*",
                        mb: "sp200",
                        children: (0, l.jsx)(X.l, {
                            children: e => {
                                let {
                                    state: t,
                                    toggle: n
                                } = e;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)($.u, {
                                        className: "qe9cfy0",
                                        onClick: () => n(),
                                        children: (0, l.jsxs)(K.z, {
                                            use: "div",
                                            py: "sp200",
                                            children: [(0, l.jsx)(J.EY, {
                                                use: "h2",
                                                color: "white",
                                                variant: "caption",
                                                marginRight: "auto",
                                                children: i
                                            }), (0, l.jsx)(V.I, {
                                                name: t ? "16/ChevronUpSmall" : "16/ChevronDownSmall",
                                                color: "white",
                                                size: 16,
                                                "aria-label": i
                                            })]
                                        })
                                    }), (0, l.jsx)(Q.D, { in: t,
                                        children: s
                                    })]
                                })
                            }
                        })
                    }), (0, l.jsxs)(D.a, {
                        hide: "*-md",
                        overflow: "hidden",
                        flex: 1,
                        pb: "sp200",
                        pr: "sp400",
                        children: [(0, l.jsx)(J.EY, {
                            use: "h2",
                            py: "sp200",
                            color: "white",
                            variant: "caption",
                            children: i
                        }), s]
                    })]
                }) : null
            };

            function ee(e) {
                var t, n;
                return (null != (n = null == (t = e.items) ? void 0 : t.length) ? n : 0) + 1
            }
            n(38724);
            let et = () => {
                let e = function() {
                        let {
                            getLocation: e
                        } = (0, W.jq)(), {
                            isBusiness: t
                        } = (0, L.S)(), {
                            getSitemapLocation: n,
                            getSitemapIndexLocations: l,
                            getSitemapLocationsByParentId: a
                        } = (0, q.e)();
                        return (0, r.useMemo)(() => {
                            var r, o;
                            let i = l(),
                                s = t ? null == i || null == (r = i[1]) ? void 0 : r.locationId : null == i || null == (o = i[0]) ? void 0 : o.locationId;
                            return s ? a(s).reduce((t, l) => {
                                let r = l.items || [];
                                if (!r.length) return t;
                                if (r.some(t => {
                                        var n;
                                        return (null == (n = e(t)) ? void 0 : n.type) === T.iF.Section
                                    })) return [...t, ...r.map(e => n(e)).filter(k.zz)];
                                if (1 === r.length) {
                                    var o;
                                    let l = null == (o = n(r[0])) ? void 0 : o.scope;
                                    if (l && l.includes(P.S.SectionLink) && !l.includes(P.S.Footer)) return [...t, ...r.flatMap(t => a(t).filter(t => {
                                        var n;
                                        return (null == (n = e(t.locationId)) ? void 0 : n.type) === T.iF.Section
                                    }))]
                                }
                                return [...t, l]
                            }, []).filter(e => e.scope.includes(P.S.Footer)) : []
                        }, [e, n, l, a, t])
                    }(),
                    t = (0, O.N)(G.o.media.lg),
                    n = (0, O.N)(G.o.media.xxl);
                if (!e.flatMap(e => e.locationId).length) return null;
                let a = function(e, t) {
                    let n = Math.min(t.length, e),
                        l = Array.from({
                            length: n
                        }).map(() => []);
                    if (t.length <= n) return t.forEach((e, t) => l[t].push(e)), l;
                    let r = Array.from({
                        length: n
                    }).map(() => 0);
                    return [...t].sort((e, t) => ee(t) - ee(e)).forEach(e => {
                        let t = ee(e),
                            a = n - 1,
                            o = 1 / 0;
                        for (let e = n - 1; e >= 0; e--) r[e] < o && (a = e, o = r[e]);
                        l[a].push(e), r[a] += t
                    }), l
                }(n ? 8 : t ? 6 : 4, e);
                return (0, l.jsx)(B.s, {
                    className: "xz40b0",
                    children: a.map((e, t) => (0, l.jsx)(D.a, {
                        width: "100%",
                        children: e.map(e => (0, l.jsx)(Z, {
                            sitemapLocation: e
                        }, e.locationId))
                    }, "".concat(t, "-").concat(a.length, "-column")))
                })
            };
            var en = n(53819),
                el = n(13922),
                er = n(15874);
            n(47691);
            var ea = "_1ndd7mh1";
            let eo = () => {
                    let e = (0, el.c)(),
                        t = (0, er.g)();
                    return (0, l.jsxs)(K.z, {
                        use: "ul",
                        marginY: "sp1000",
                        paddingBottom: "sp200",
                        borderBottom: "1px solid",
                        borderBottomColor: "white-10",
                        space: "sp200",
                        paddingX: {
                            all: "sp500",
                            lg: 0
                        },
                        children: [(0, l.jsx)(D.a, {
                            className: ea,
                            use: "li",
                            width: "100%",
                            children: (0, l.jsx)(H.N, {
                                value: e.indexLink,
                                children: (0, l.jsx)(en.X, {
                                    color: G.o.color.white,
                                    variant: "small",
                                    title: "Revolut"
                                })
                            })
                        }), t.filter(e => e.icon).map(e => {
                            let {
                                url: t,
                                icon: n,
                                name: r
                            } = e;
                            return (0, l.jsx)(D.a, {
                                className: ea,
                                use: "li",
                                children: (0, l.jsx)(H.N, {
                                    className: "_1ndd7mh0",
                                    target: "_blank",
                                    rel: "noopener",
                                    "aria-label": r,
                                    href: t,
                                    children: (0, l.jsx)(V.I, {
                                        name: n,
                                        size: 16
                                    })
                                })
                            }, t)
                        })]
                    })
                },
                ei = e => {
                    let {
                        blocks: t = [],
                        isSitemapHidden: n = !1
                    } = e, h = (0, m.K)(), {
                        locale: p
                    } = (0, i.useRouter)(), {
                        region: v
                    } = (0, c.Wx)(p), f = u.eo.has(v), x = null == p ? void 0 : p.toLowerCase(), g = !!(x && u.$r.has(x)), j = (0, r.useMemo)(() => g ? null == t ? void 0 : t.filter(e => {
                        let {
                            type: t
                        } = e;
                        return t === d.kc.Text
                    }) : t, [g, t]);
                    return (0, l.jsx)(a.N, {
                        mode: "dark",
                        attributes: "child",
                        children: (0, l.jsxs)(A, {
                            use: "footer",
                            role: "contentinfo",
                            children: [(0, l.jsx)(s.z, {
                                blocks: j
                            }), n || h || g || (0, l.jsx)(et, {}), (0, l.jsx)(eo, {}), h || f || (0, l.jsxs)(o.x, {
                                columnGap: "sp800",
                                columns: "auto auto 1fr",
                                marginBottom: "sp1000",
                                paddingX: {
                                    all: "sp500",
                                    lg: 0
                                },
                                rowGap: "sp300",
                                children: [(0, l.jsx)(y, {}), (0, l.jsx)(M, {}), g || (0, l.jsx)(U, {})]
                            })]
                        })
                    })
                }
        }
    }
]);
//# sourceMappingURL=9446-5c69d5e44938d8d9.js.map