! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d7bc344f-af89-4fe2-9d24-e8793b4b7c46", e._sentryDebugIdIdentifier = "sentry-dbid-d7bc344f-af89-4fe2-9d24-e8793b4b7c46")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7625], {
        11242: () => {},
        16448: () => {},
        34992: () => {},
        43038: () => {},
        45862: () => {},
        53601: (e, n, t) => {
            "use strict";
            t.d(n, {
                B6: () => a,
                G1: () => i,
                LJ: () => c,
                N1: () => r,
                Tl: () => s,
                qr: () => u,
                qu: () => l
            });
            let a = 3e3,
                s = 1500,
                r = 1500,
                l = .42,
                i = .82,
                c = "Page loading",
                u = "https://assets.revolut.com/published-assets-v3/bc17337f-22ac-421e-9516-6545c7ce2270/9989cdff-bfc9-42cd-9a58-cdb23996b6c5.png"
        },
        58386: (e, n, t) => {
            "use strict";
            t.d(n, {
                $: () => g
            });
            var a = t(23798),
                s = t(21462),
                r = t(17779),
                l = t(75077),
                i = t(94191),
                c = t(19053),
                u = t(80510),
                o = t(14140),
                d = t(23601);
            let h = {
                    default: !0,
                    text: !0,
                    primary: !0,
                    secondary: !0
                },
                g = (0, s.forwardRef)((e, n) => {
                    let {
                        gaEvent: t,
                        link: s,
                        query: g,
                        onClick: f,
                        children: x,
                        height: p,
                        maxWidth: m,
                        width: v,
                        className: j,
                        ...b
                    } = e, {
                        trackLink: N
                    } = (0, i.st)(), w = e => {
                        (0, c.Tn)(f) && f(e), N(e, t, s)
                    }, y = (0, l.cn)(o.ne, d.e, (0, d.z0)({
                        height: void 0 === p ? "default" : "custom",
                        width: void 0 === v ? "default" : "custom",
                        maxWidth: void 0 === m ? "default" : "custom"
                    }), (e => (e => "string" == typeof e && e in h)(e) ? (0, d.uZ)({
                        variant: e
                    }) : void 0 === e ? (0, d.uZ)() : void 0)(b.variant), j);
                    return s ? (0, a.jsx)(u.I, {
                        value: s,
                        query: g,
                        children: (0, a.jsx)(r.$, {
                            use: "a",
                            size: "sm",
                            ref: n,
                            onClick: w,
                            className: y,
                            height: p,
                            width: v,
                            maxWidth: m,
                            ...b,
                            children: x
                        })
                    }) : (0, a.jsx)(r.$, {
                        size: "sm",
                        ref: n,
                        onClick: w,
                        className: y,
                        height: p,
                        width: v,
                        maxWidth: m,
                        ...b,
                        children: x
                    })
                });
            g.displayName = "Button"
        },
        61043: () => {},
        66048: () => {},
        67359: () => {},
        67625: (e, n, t) => {
            "use strict";
            t.d(n, {
                Y: () => eE,
                g: () => eq
            });
            var a = t(23798),
                s = t(21462),
                r = t(49914),
                l = t(33584),
                i = t(75077),
                c = t(51266),
                u = t(61143),
                o = t.n(u),
                d = t(1402),
                h = t(16898),
                g = t(33514),
                f = t(37348),
                x = t(54434),
                p = t(72767),
                m = t(24434),
                v = t(54643),
                j = t(48858),
                b = t(53819),
                N = t(35257),
                w = t(36344),
                y = t(44799);
            let C = (0, s.createContext)(null);

            function k() {
                let e = (0, s.useContext)(C);
                if (null === e) throw Error("You can access `NavigationContext` only in components inside `Navigation` component");
                return e
            }
            var _ = t(22973),
                q = t(78522),
                E = t(67605),
                L = t(26783),
                F = t(48966),
                I = t(34244),
                B = t(37456),
                M = t(81370),
                S = t(20784),
                R = t(27691),
                T = t(14140),
                D = t(86206),
                P = t(96023);
            t(66048);
            var X = t(83065),
                A = (0, X.c)({
                    defaultClassName: "_1c0faq61",
                    variantClassNames: {
                        spanToExtraCategory: {
                            true: "_1c0faq62",
                            false: "_1c0faq63"
                        }
                    },
                    defaultVariants: {
                        spanToExtraCategory: !1
                    },
                    compoundVariants: []
                });
            let O = e => {
                var n;
                let {
                    groupLocationId: t,
                    locationId: r
                } = e, {
                    getLocationProps: i,
                    getLocationLink: c
                } = (0, S.jq)(), {
                    setIsMenuOpen: u,
                    trackMenuLinkClick: o
                } = k(), {
                    title: d
                } = null != (n = i(r)) ? n : {}, h = c(r), g = (0, s.useCallback)(() => {
                    o(r, t), u(!1)
                }, [t, r, u, o]);
                return d && h ? (0, a.jsxs)(j.N, {
                    className: "_1c0faq68",
                    value: h,
                    onClick: g,
                    children: [(0, a.jsx)(P.E, {
                        variant: "secondary",
                        children: d
                    }), (0, a.jsx)("span", {
                        className: "_1c0faq67",
                        children: (0, a.jsx)(l.I, {
                            name: "ArrowThinRight",
                            size: {
                                all: "s-16",
                                xxl: "s-20"
                            }
                        })
                    })]
                }) : null
            };
            t(34992);
            let W = e => {
                    let {
                        locationId: n,
                        title: t,
                        isLast: c
                    } = e, {
                        getSitemapLocationsByParentId: u
                    } = (0, E.e)(), {
                        incrementMenuSectionOpenCount: o
                    } = k(), d = (0, s.useMemo)(() => u(n).filter(e => {
                        let {
                            scope: n
                        } = e;
                        return n.includes(L.S.Menu)
                    }).map(e => {
                        let {
                            locationId: t
                        } = e;
                        return (0, a.jsx)(O, {
                            groupLocationId: n,
                            locationId: t
                        }, t)
                    }), [u, n]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.a, {
                            hide: "md-*",
                            color: "white",
                            children: (0, a.jsx)(F.l, {
                                children: e => {
                                    let {
                                        state: n,
                                        toggle: s
                                    } = e;
                                    return (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(I.u, {
                                            className: "c81ti80",
                                            onClick: () => {
                                                o(), s()
                                            },
                                            children: (0, a.jsxs)(B.s, {
                                                use: "span",
                                                alignItems: "center",
                                                children: [(0, a.jsx)(M.EY, {
                                                    use: "h6",
                                                    my: "sp300",
                                                    className: (0, i.cn)("c81ti84", T.Gw),
                                                    children: t
                                                }), (0, a.jsx)(l.I, {
                                                    name: n ? "16/ChevronUpSmall" : "16/ChevronDownSmall",
                                                    size: 16
                                                })]
                                            })
                                        }), (0, a.jsx)(D.D, { in: n,
                                            children: (0, a.jsx)(r.a, {
                                                className: "c81ti81",
                                                children: d
                                            })
                                        }), n && !c && (0, a.jsx)(r.a, {
                                            className: "c81ti83"
                                        })]
                                    })
                                }
                            })
                        }), (0, a.jsxs)(r.a, {
                            hide: "*-md",
                            className: "c81ti82",
                            children: [(0, a.jsx)(M.EY, {
                                use: "h4",
                                className: (0, i.cn)("c81ti85", T.Gw),
                                children: t
                            }), d]
                        }, n)]
                    })
                },
                z = e => {
                    let {
                        locationId: n
                    } = e, {
                        getLocationLink: t
                    } = (0, S.jq)();
                    return t(n) ? (0, a.jsx)(O, {
                        locationId: n,
                        groupLocationId: ""
                    }, n) : null
                },
                $ = e => {
                    var n;
                    let {
                        sitemapLocation: {
                            locationId: t
                        },
                        isLast: s
                    } = e, {
                        getLocationProps: r
                    } = (0, S.jq)(), {
                        type: l,
                        title: i
                    } = null != (n = r(t)) ? n : {};
                    return i ? l === R.iF.Section ? (0, a.jsx)(W, {
                        locationId: t,
                        title: i,
                        isLast: s
                    }) : (0, a.jsx)(z, {
                        locationId: t
                    }) : null
                };
            t(85907);
            var V = (0, X.c)({
                defaultClassName: "_1e84pmd0",
                variantClassNames: {
                    prefersColumns: {
                        true: "_1e84pmd1",
                        false: "_1e84pmd2"
                    },
                    hasExtraCategory: {
                        true: "_1e84pmd3",
                        false: "_1e84pmd4"
                    }
                },
                defaultVariants: {
                    prefersColumns: !1,
                    hasExtraCategory: !1
                },
                compoundVariants: [
                    [{
                        prefersColumns: !0,
                        hasExtraCategory: !0
                    }, "_1e84pmd5"],
                    [{
                        prefersColumns: !0,
                        hasExtraCategory: !1
                    }, "_1e84pmd6"]
                ]
            });
            let U = e => {
                var n;
                let {
                    prefersColumns: t,
                    sitemapLocation: {
                        items: s
                    },
                    hasExtraCategory: l,
                    isLast: i
                } = e, {
                    getSitemapLocation: c
                } = (0, E.e)(), u = null != (n = null == s ? void 0 : s.map(e => c(e)).filter(e => !!(null == e ? void 0 : e.scope.includes(L.S.Menu)))) ? n : [];
                if (0 === u.length) return null;
                let o = u[u.length - 1];
                return (0, a.jsx)(r.a, {
                    className: V({
                        prefersColumns: t,
                        hasExtraCategory: l
                    }),
                    children: u.map(e => (0, a.jsx)($, {
                        sitemapLocation: e,
                        isLast: e.locationId === o.locationId && i
                    }, e.locationId))
                })
            };
            var G = t(11944);
            let Y = e => {
                var n;
                let {
                    locationId: t,
                    spanToExtraCategory: u
                } = e, {
                    getLocationProps: o,
                    getLocationLink: d
                } = (0, S.jq)(), {
                    title: h,
                    type: g
                } = null != (n = o(t)) ? n : {}, {
                    setIsMenuOpen: f,
                    trackMenuLinkClick: x
                } = k(), p = (0, G.W)(), m = (0, s.useCallback)(() => {
                    x(t), f(!1)
                }, [t, f, x]);
                return g !== R.iF.Internal ? null : (0, a.jsx)(r.a, {
                    className: A({
                        spanToExtraCategory: u
                    }),
                    children: (0, a.jsxs)(j.N, {
                        className: (0, i.cn)("_1c0faq65", T.Q),
                        value: d(t),
                        onClick: m,
                        children: [h, (0, a.jsx)(r.a, {
                            className: "_1c0faq66",
                            style: (0, c.D)({
                                "var(--_1c0faq60)": p ? "translateX(-4px)" : "translateX(4px)"
                            }),
                            children: (0, a.jsx)(l.I, {
                                name: "ArrowThinRight",
                                size: {
                                    all: "s-16",
                                    xl: "s-20"
                                }
                            })
                        })]
                    })
                })
            };
            var H = t(23478),
                Z = t(58386),
                J = t(23438),
                K = t(93392),
                Q = t(98565),
                ee = t(94746),
                en = t(89752),
                et = t(3653);

            function ea(e, n, t) {
                switch (e) {
                    case "down":
                        return n + t;
                    case "up":
                    case "initial":
                        return t;
                    default:
                        return (0, et.XB)(e)
                }
            }

            function es() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.FP.TransparentDefault;
                switch (e) {
                    case en.FP.TransparentLight:
                    case en.FP.SolidLight:
                    case en.FP.Default:
                    case en.FP.TransparentDefault:
                        return q.o.color.foreground;
                    case en.FP.TransparentDark:
                    case en.FP.SolidDark:
                    default:
                        return q.o.color.white
                }
            }

            function er(e, n) {
                return n ? q.o.color.foreground : es(e)
            }
            t(16448);
            let el = (0, s.forwardRef)((e, n) => {
                let {
                    children: t,
                    isOpen: s
                } = e;
                return s && (0, a.jsx)(r.a, {
                    className: "mcekfq0",
                    ref: n,
                    children: t
                })
            });
            el.displayName = "NavigationSignUpButtonsContainer";
            let ei = () => {
                let e = (0, g.c)(),
                    {
                        loginLink: n,
                        signupLink: t,
                        getStartedLink: s
                    } = function() {
                        let {
                            isBusiness: e,
                            isRevolutUnder18: n,
                            isPeople: t,
                            isRevolutX: a
                        } = (0, K.S)();
                        return t ? {
                            loginLink: {
                                uri: Q.M4.PeopleWebAppLogin,
                                type: R.iF.External
                            },
                            getStartedLink: {
                                uri: Q.M4.PeopleWebAppGetStarted,
                                type: R.iF.External
                            }
                        } : a ? {
                            loginLink: {
                                uri: Q.M4.RevolutRevolutXWebApp,
                                type: R.iF.External
                            },
                            signupLink: {
                                uri: Q.M4.RevolutRevolutXOpenApp,
                                type: R.iF.External
                            }
                        } : e ? {
                            loginLink: {
                                uri: Q.M4.BusinessWebAppLogin,
                                type: R.iF.External
                            },
                            signupLink: {
                                uri: Q.M4.BusinessWebAppSignUp,
                                type: R.iF.External
                            }
                        } : n ? {
                            loginLink: void 0,
                            signupLink: {
                                uri: Q.M4.RevolutUnder18GetTheApp,
                                type: R.iF.External
                            }
                        } : {
                            loginLink: {
                                uri: Q.M4.RetailWebAppLogin,
                                type: R.iF.External
                            },
                            signupLink: {
                                uri: Q.M4.RetailOpenApp,
                                type: R.iF.External
                            }
                        }
                    }(),
                    {
                        setIsMenuOpen: r,
                        navigationThemeMode: l,
                        currentMenuStyle: i
                    } = k(),
                    c = e("shared.button.login"),
                    u = e("shared.button.signUp"),
                    o = e("shared.button.getStarted"),
                    d = (0, p.P)("lg");
                return (0, a.jsx)(J.HP, {
                    mode: l,
                    children: (0, a.jsxs)(H.z, {
                        space: "sp400",
                        children: [n && c && (0, a.jsx)(Z.$, {
                            link: n,
                            variant: d ? "text" : "default",
                            color: es(i),
                            children: c
                        }), t && u && (0, a.jsx)(Z.$, {
                            "data-blockid": "signup-button",
                            link: t,
                            variant: "primary",
                            onClick: () => r(!1),
                            children: e("shared.button.signUp")
                        }), s && o && (0, a.jsx)(Z.$, {
                            "data-blockid": "get-started-button",
                            link: s,
                            variant: "primary",
                            onClick: () => r(!1),
                            children: o
                        })]
                    })
                })
            };
            var ec = t(10849);
            t(61043);
            var eu = (0, X.c)({
                    defaultClassName: "_8sxmtqa",
                    variantClassNames: {
                        hasExtraCategory: {
                            true: "_8sxmtqb",
                            false: "_8sxmtqc"
                        }
                    },
                    defaultVariants: {
                        hasExtraCategory: !1
                    },
                    compoundVariants: []
                }),
                eo = (0, X.c)({
                    defaultClassName: "_8sxmtq1",
                    variantClassNames: {
                        isOpen: {
                            true: "_8sxmtq2",
                            false: "_8sxmtq3"
                        }
                    },
                    defaultVariants: {
                        isOpen: !1
                    },
                    compoundVariants: []
                }),
                ed = (0, X.c)({
                    defaultClassName: "_8sxmtq7",
                    variantClassNames: {
                        hasContent: {
                            true: "_8sxmtq8",
                            false: "_8sxmtq9"
                        }
                    },
                    defaultVariants: {
                        hasContent: !1
                    },
                    compoundVariants: []
                });
            let eh = e => {
                let {
                    children: n
                } = e, {
                    menuItems: t,
                    isMenuOpen: s,
                    navigationMenuRef: i,
                    isMenuMultiLevel: u,
                    maxScrollableHeight: o,
                    headerWidth: d,
                    setIsMenuOpen: h,
                    indexLink: f
                } = k(), x = (0, g.c)(), m = !(0, p.P)("lg"), v = null == t ? void 0 : t[0], N = t.length > 1 && u, w = u ? t.map((e, n) => (0, a.jsx)(U, {
                    hasExtraCategory: N,
                    sitemapLocation: e,
                    prefersColumns: 0 === n,
                    isLast: n === t.length - 1
                }, e.locationId)) : (0, a.jsx)(r.a, {
                    className: "_1c0faq64",
                    children: t.map((e, n) => (0, a.jsx)($, {
                        sitemapLocation: e,
                        isLast: n === t.length - 1
                    }, e.locationId))
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.a, {
                        className: "_8sxmtqd"
                    }), (0, a.jsxs)(r.a, {
                        use: "nav",
                        role: "navigation",
                        className: eo({
                            isOpen: s
                        }),
                        style: (0, c.D)({
                            "var(--_8sxmtq0)": null != d ? "".concat(d + ec.Bg, "px") : "auto"
                        }),
                        ref: i,
                        maxHeight: o,
                        children: [(0, a.jsxs)(r.a, {
                            className: "_8sxmtq4",
                            children: [(0, a.jsx)(j.N, {
                                value: f,
                                title: "Revolut",
                                children: (0, a.jsx)(b.X, {
                                    color: "white"
                                })
                            }), (0, a.jsx)(l.I, {
                                use: "button",
                                onClick: () => h(!1),
                                "aria-label": x("shared.button.close"),
                                name: "Cross",
                                color: "white"
                            })]
                        }), (0, a.jsx)(r.a, {
                            className: "_8sxmtq5",
                            children: (0, a.jsx)(r.a, {
                                className: ed({
                                    hasContent: !!(t && t.length > 0)
                                }),
                                children: (0, a.jsxs)(a.Fragment, {
                                    children: [n && (0, a.jsx)(r.a, {
                                        hide: "lg-*",
                                        mb: "sp400",
                                        ml: _._.negate(q.o.space.sp200),
                                        children: n
                                    }), u && v && (0, a.jsx)(Y, {
                                        spanToExtraCategory: N,
                                        locationId: v.locationId
                                    }), (0, a.jsx)(r.a, {
                                        className: eu({
                                            hasExtraCategory: N
                                        }),
                                        children: w
                                    })]
                                })
                            })
                        }), m && (0, a.jsx)(r.a, {
                            className: "_8sxmtq6",
                            children: (0, a.jsx)(ei, {})
                        })]
                    })]
                })
            };
            t(67359);
            var eg = "_3jquhb3";
            let ef = e => {
                    let {
                        children: n,
                        isRightAlign: t
                    } = e;
                    return (0, a.jsx)(r.a, {
                        className: (0, i.cn)("_3jquhb6", t && "_3jquhb7"),
                        children: n
                    })
                },
                ex = (0, s.forwardRef)((e, n) => {
                    let {
                        isDesktop: t,
                        children: r,
                        ...l
                    } = e, {
                        getLocationProps: u,
                        getLocationLink: o,
                        locationId: d
                    } = (0, S.jq)(), {
                        getSitemapLocation: h
                    } = (0, E.e)(), g = (0, x.K)(), {
                        changeSelectedLocationId: f,
                        incrementMenuSectionOpenCount: p,
                        indexLocations: m,
                        isMenuDesktopStyle: v,
                        isMenuOpen: j,
                        selectedLocationId: b,
                        setIsMenuOpen: N,
                        currentMenuStyle: w,
                        overLocationId: y,
                        setOverLocationId: C
                    } = k(), {
                        getSitemapLocationsByParentId: _
                    } = (0, E.e)(), q = (0, s.useMemo)(() => m.reduce((e, n) => {
                        var t;
                        return (null == (t = n.style) ? void 0 : t.align) === "right" ? e[1].push(n) : e[0].push(n), e
                    }, [
                        [],
                        []
                    ]), [m]), L = q[0].length, F = q.flat(), I = d && h(d) || void 0, T = (0, s.useRef)(!1), D = (0, i.cn)(eg, "_3jquhb4"), P = (0, i.cn)(eg, "_3jquhb5"), X = (0, c.D)({
                        "var(--_3jquhb0)": es(w),
                        "var(--_3jquhb1)": function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.FP.TransparentDefault;
                            switch (e) {
                                case en.FP.TransparentLight:
                                case en.FP.TransparentDefault:
                                case en.FP.SolidLight:
                                case en.FP.Default:
                                    return ee.n.navigationButtonBackground;
                                case en.FP.TransparentDark:
                                case en.FP.SolidDark:
                                default:
                                    return ee.n.navigationButtonHoverBackground
                            }
                        }(w)
                    });
                    return (0, a.jsx)(B.s, {
                        className: "_3jquhb2",
                        ...l,
                        ref: n,
                        children: F.map((e, n) => {
                            var l, i, c;
                            let {
                                locationId: d
                            } = e, {
                                title: h,
                                type: x
                            } = null != (i = u(d)) ? i : {}, m = _(d), w = b === d, k = n === L, q = m[0], {
                                type: E
                            } = null != (c = u(null == q ? void 0 : q.locationId)) ? c : {}, F = (null == q || null == (l = q.items) ? void 0 : l.length) && E !== R.iF.Section ? q : void 0, B = null == F ? void 0 : F.resourceId, S = B && B === (null == I ? void 0 : I.resourceId), A = () => {
                                (g || v) && y !== d && (C(d), f(d), p())
                            }, O = () => {
                                C(void 0)
                            };
                            return x === R.iF.Section && F && t ? (0, a.jsxs)(s.Fragment, {
                                children: [(0, a.jsx)(ef, {
                                    isRightAlign: k,
                                    children: (0, a.jsx)(Z.$, {
                                        className: D,
                                        style: X,
                                        "aria-current": j && w ? "page" : void 0,
                                        link: o(F.locationId),
                                        onTouchStart: () => T.current = !0,
                                        onClick: e => {
                                            T.current || S ? (e.preventDefault(), e.stopPropagation()) : N(!1)
                                        },
                                        onFocus: () => f(d),
                                        onMouseEnter: A,
                                        onMouseLeave: O,
                                        children: h
                                    })
                                }), w && r]
                            }, d) : x === R.iF.Section ? (0, a.jsxs)(s.Fragment, {
                                children: [(0, a.jsx)(ef, {
                                    isRightAlign: k,
                                    children: (0, a.jsx)(Z.$, {
                                        className: P,
                                        style: X,
                                        "aria-current": j && w ? "page" : void 0,
                                        onClick: () => {
                                            f(d), p()
                                        },
                                        onFocus: () => f(d),
                                        onMouseEnter: A,
                                        onMouseLeave: O,
                                        children: (0, a.jsx)(M.EY, {
                                            style: {
                                                pointerEvents: "none"
                                            },
                                            children: h
                                        })
                                    })
                                }), w && r]
                            }, d) : (0, a.jsxs)(s.Fragment, {
                                children: [(0, a.jsx)(ef, {
                                    isRightAlign: k,
                                    children: (0, a.jsx)(Z.$, {
                                        className: D,
                                        style: X,
                                        link: o(d),
                                        onMouseEnter: () => v && N(!1),
                                        onFocus: () => v && N(!1),
                                        onClick: () => N(!1),
                                        children: h
                                    })
                                }), w && r]
                            }, d)
                        })
                    })
                });
            ex.displayName = "NavigationTopLevel";
            var ep = t(13922),
                em = t(78992);
            t(11242);
            var ev = "gdhgct2",
                ej = t(98187),
                eb = t(53601);

            function eN(e) {
                switch (e) {
                    case "revealing":
                        return e;
                    case "off":
                    case "pending":
                        return "revealing";
                    default:
                        return (0, et.XB)(e)
                }
            }
            t(43038);
            var ew = "xcnqt45";
            let ey = e => {
                    let {
                        children: n
                    } = e, {
                        setNavigationRef: t
                    } = (0, em.nC)(), {
                        bannersOffset: l
                    } = (0, N.W)(), {
                        scrolled: u,
                        scrollDirection: o
                    } = k(), d = (0, s.useCallback)(e => {
                        t(e)
                    }, [t]), h = ea(o, -y.Zv, l), g = ea(o, -y.pw, l), f = ea(o, -y.MD, l);
                    return (0, a.jsx)(r.a, {
                        "data-blockid": "navigation",
                        use: "header",
                        className: (0, i.cn)("xcnqt43", u && "xcnqt44"),
                        style: (0, c.D)({
                            "var(--xcnqt40)": "".concat(h, "px"),
                            "var(--xcnqt41)": "".concat(g, "px"),
                            "var(--xcnqt42)": "".concat(f, "px")
                        }),
                        ref: d,
                        children: n
                    })
                },
                eC = e => {
                    let {
                        children: n
                    } = e;
                    return (0, a.jsxs)(r.a, {
                        className: "xcnqt47",
                        width: n ? "100%" : "auto",
                        children: [n, (0, a.jsx)(ei, {})]
                    })
                },
                ek = e => {
                    let {
                        children: n
                    } = e, t = (0, g.c)(), s = k(), i = (0, ep.c)(), {
                        menuStyle: c
                    } = (0, f.n)();
                    return (0, a.jsxs)(r.a, {
                        hide: "lg-*",
                        children: [(0, a.jsx)(l.I, {
                            use: "button",
                            onClick: () => s.setIsMenuOpen(e => !e),
                            ref: s.navigationButtonMenuRef,
                            "aria-label": t(s.isMenuOpen ? "shared.button.close" : "shared.button.openMenu"),
                            name: s.isMenuOpen ? "Cross" : "Menu",
                            color: er(c, i.hasToResetStyle)
                        }), n]
                    })
                },
                e_ = e => {
                    let {
                        children: n
                    } = e, t = (0, ep.c)(), l = (0, x.K)(), {
                        menuStyle: c
                    } = (0, f.n)(), u = (0, p.P)("lg"), {
                        setHeaderWidth: o,
                        isMenuOpen: d,
                        setIsMenuOpen: h
                    } = t, {
                        ref: g,
                        width: v
                    } = (0, m.w)(), {
                        className: N,
                        spacerRef: w,
                        contentStyle: y
                    } = function() {
                        let e = (0, ej.q4)(),
                            n = null == e ? void 0 : e.state,
                            [t, a] = (0, s.useState)(() => (function(e) {
                                if (!e) return "off";
                                switch (e) {
                                    case "pending":
                                        return "pending";
                                    case "enlarging":
                                    case "fading":
                                    case "revealed":
                                        return "off";
                                    default:
                                        return (0, et.XB)(e)
                                }
                            })(null == e ? void 0 : e.state)),
                            r = (0, s.useRef)(null),
                            [l, c] = (0, s.useState)(0);
                        (0, s.useEffect)(() => {
                            if (!e) return void a("off");
                            let n = function(e) {
                                switch (e) {
                                    case "pending":
                                        return "pending";
                                    case "enlarging":
                                    case "fading":
                                    case "revealed":
                                        return "revealing";
                                    default:
                                        return (0, et.XB)(e)
                                }
                            }(e.state);
                            switch (n) {
                                case "pending":
                                    a("pending");
                                    return;
                                case "revealing":
                                    a(eN);
                                    return;
                                default:
                                    return (0, et.XB)(n)
                            }
                        }, [e, n]), (0, s.useEffect)(() => {
                            if (! function(e) {
                                    switch (e) {
                                        case "revealing":
                                            return !0;
                                        case "off":
                                        case "pending":
                                            return !1;
                                        default:
                                            return (0, et.XB)(e)
                                    }
                                }(t)) return;
                            let e = setTimeout(() => a("off"), eb.N1);
                            return () => clearTimeout(e)
                        }, [t]);
                        let u = function(e) {
                            switch (e) {
                                case "off":
                                    return !1;
                                case "pending":
                                case "revealing":
                                    return !0;
                                default:
                                    return (0, et.XB)(e)
                            }
                        }(t);
                        switch ((0, s.useLayoutEffect)(() => {
                            if (!u) return void c(0);
                            let e = r.current;
                            if (!e) return;
                            let n = () => {
                                c(e.getBoundingClientRect().top)
                            };
                            n();
                            let t = new ResizeObserver(n);
                            return t.observe(document.body), t.observe(e), window.addEventListener("resize", n), window.addEventListener("scroll", n, {
                                passive: !0
                            }), () => {
                                t.disconnect(), window.removeEventListener("resize", n), window.removeEventListener("scroll", n)
                            }
                        }, [u, t]), t) {
                            case "off":
                                return {
                                    className: void 0,
                                    spacerRef: r,
                                    contentStyle: void 0
                                };
                            case "pending":
                            case "revealing":
                                return {
                                    className: function(e) {
                                        switch (e) {
                                            case "pending":
                                                return (0, i.cn)(ev, "gdhgct5");
                                            case "revealing":
                                                return (0, i.cn)(ev, "gdhgct6");
                                            default:
                                                return (0, et.XB)(e)
                                        }
                                    }(t),
                                    spacerRef: r,
                                    contentStyle: {
                                        marginTop: l
                                    }
                                };
                            default:
                                return (0, et.XB)(t)
                        }
                    }();
                    (0, s.useEffect)(() => {
                        null == o || o(v)
                    }, [v, o]);
                    let k = () => {
                            !l && d && h(!1)
                        },
                        _ = (0, a.jsx)(ey, {
                            children: (0, a.jsxs)(r.a, {
                                className: ew,
                                ref: g,
                                onMouseLeave: k,
                                onBlur: e => {
                                    let n = e.currentTarget;
                                    requestAnimationFrame(() => {
                                        n.contains(document.activeElement) || k()
                                    })
                                },
                                children: [(0, a.jsxs)(r.a, {
                                    className: "xcnqt46",
                                    children: [(0, a.jsx)(j.N, {
                                        value: t.indexLink,
                                        title: "Revolut",
                                        children: (0, a.jsx)(b.X, {
                                            color: er(c, t.hasToResetStyle)
                                        })
                                    }), n]
                                }), u && (0, a.jsx)(eh, {})]
                            })
                        });
                    return (0, a.jsxs)(C.Provider, {
                        value: t,
                        children: [N ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                ref: w,
                                className: "gdhgct3",
                                "aria-hidden": !0
                            }), (0, a.jsx)("div", {
                                className: N,
                                children: (0, a.jsx)("div", {
                                    className: "gdhgct4",
                                    style: y,
                                    children: _
                                })
                            })]
                        }) : _, (l || u) && (0, a.jsx)(el, {
                            isOpen: t.isMenuOpen,
                            ref: t.navigationSignUpButtonsRef,
                            children: (0, a.jsx)(ei, {})
                        })]
                    })
                },
                eq = () => {
                    let e = (0, p.P)("lg");
                    return (0, a.jsxs)(e_, {
                        children: [(0, a.jsx)(eC, {
                            children: (0, a.jsx)(ex, {
                                isDesktop: !0
                            })
                        }), (0, a.jsx)(ek, {
                            children: !e && (0, a.jsx)(eh, {
                                children: (0, a.jsx)(ex, {
                                    isDesktop: !1
                                })
                            })
                        })]
                    })
                };
            eq.Layout = e_, eq.Menu = ex, eq.Desktop = eC, eq.Mobile = ek;
            let eE = e => {
                let {
                    logoColor: n
                } = e, t = (0, ep.c)(), {
                    locale: s
                } = (0, d.useRouter)(), {
                    region: l
                } = (0, v.Wx)(s), i = w.eo.has(l), c = "https://www.".concat(h.WF, "/"), u = (0, f.n)(), g = null != n ? n : es(u.menuStyle);
                return (0, a.jsx)(C.Provider, {
                    value: t,
                    children: (0, a.jsx)(ey, {
                        children: (0, a.jsx)(r.a, {
                            className: ew,
                            children: i ? (0, a.jsx)(b.X, {
                                color: g
                            }) : (0, a.jsx)(o(), {
                                href: c,
                                title: "Revolut",
                                prefetch: !1,
                                children: (0, a.jsx)(b.X, {
                                    color: g
                                })
                            })
                        })
                    })
                })
            }
        },
        81133: (e, n, t) => {
            "use strict";
            t.d(n, {
                $I: () => l,
                DN: () => s,
                mL: () => i,
                pb: () => r,
                rw: () => u,
                sO: () => c
            });
            var a = t(3653);

            function s(e) {
                switch (e) {
                    case "revealed":
                        return !0;
                    case "pending":
                    case "enlarging":
                    case "fading":
                        return !1;
                    default:
                        return (0, a.XB)(e)
                }
            }

            function r(e) {
                switch (e) {
                    case "pending":
                        return !1;
                    case "enlarging":
                    case "fading":
                    case "revealed":
                        return !0;
                    default:
                        return (0, a.XB)(e)
                }
            }

            function l(e) {
                switch (e) {
                    case "pending":
                    case "enlarging":
                        return !1;
                    case "fading":
                    case "revealed":
                        return !0;
                    default:
                        return (0, a.XB)(e)
                }
            }

            function i(e) {
                switch (e) {
                    case "pending":
                        return "enlarging";
                    case "enlarging":
                    case "fading":
                    case "revealed":
                        return e;
                    default:
                        return (0, a.XB)(e)
                }
            }

            function c(e) {
                switch (e) {
                    case "pending":
                    case "enlarging":
                        return "fading";
                    case "fading":
                    case "revealed":
                        return e;
                    default:
                        return (0, a.XB)(e)
                }
            }

            function u(e) {
                switch (e) {
                    case "pending":
                    case "enlarging":
                    case "fading":
                        return "revealed";
                    case "revealed":
                        return e;
                    default:
                        return (0, a.XB)(e)
                }
            }
        },
        85907: () => {},
        98187: (e, n, t) => {
            "use strict";
            t.d(n, {
                UN: () => j,
                q4: () => b
            });
            var a = t(23798),
                s = t(21462),
                r = t(53601),
                l = t(81133),
                i = t(71142),
                c = t(37456),
                u = t(75077),
                o = t(18847),
                d = t(3653);
            t(45862);
            var h = "_1a37bnhd",
                g = t(49914),
                f = t(9636);

            function x(e) {
                let {
                    enlarging: n = !1,
                    fading: t = !1
                } = e;
                return (0, a.jsx)(g.a, {
                    className: (0, u.cn)("_1a37bnh8", n && "_1a37bnh9"),
                    "data-testid": "page-loader-logo",
                    children: (0, a.jsx)(g.a, {
                        className: (0, u.cn)("_1a37bnha", t && "_1a37bnhb"),
                        children: (0, a.jsxs)(g.a, {
                            className: "_1a37bnhc",
                            children: [(0, a.jsx)(f._, {
                                className: (0, u.cn)(h, "_1a37bnhe"),
                                src: r.qr,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1
                            }), (0, a.jsx)(f._, {
                                className: (0, u.cn)(h, "_1a37bnhf"),
                                src: r.qr,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1
                            })]
                        })
                    })
                })
            }

            function p(e) {
                switch (e) {
                    case "visible":
                        return "exiting";
                    case "exiting":
                    case "idle":
                        return e;
                    default:
                        return (0, d.XB)(e)
                }
            }

            function m(e) {
                let {
                    open: n,
                    logoEnlarging: t = !1,
                    logoFading: l = !1
                } = e, [h, g] = (0, s.useState)(n ? "visible" : "idle");
                (0, s.useEffect)(() => {
                    if (n) return void g("visible");
                    g(p)
                }, [n]);
                let f = function(e) {
                    switch (e) {
                        case "idle":
                            return {
                                kind: "hidden"
                            };
                        case "visible":
                            return {
                                kind: "shown",
                                blackExiting: !1,
                                busy: !0
                            };
                        case "exiting":
                            return {
                                kind: "shown",
                                blackExiting: !0,
                                busy: !1
                            };
                        default:
                            return (0, d.XB)(e)
                    }
                }(h);
                switch (f.kind) {
                    case "hidden":
                        return null;
                    case "shown":
                        {
                            let e = l || f.blackExiting;
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(i.Dv, {
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    zIndex: o.M8,
                                    role: "progressbar",
                                    "aria-busy": f.busy,
                                    "aria-label": r.LJ,
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    className: (0, u.cn)("_1a37bnh5", f.blackExiting && "_1a37bnh6"),
                                    onAnimationEnd: e => {
                                        e.target === e.currentTarget && f.blackExiting && g("idle")
                                    }
                                }), (0, a.jsx)(i.Dv, {
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    zIndex: o.G_,
                                    color: "white",
                                    className: "_1a37bnh7",
                                    children: (0, a.jsx)(c.s, {
                                        height: "100%",
                                        width: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: (0, a.jsx)(x, {
                                            enlarging: t,
                                            fading: e
                                        })
                                    })
                                })]
                            })
                        }
                    default:
                        return (0, d.XB)(f)
                }
            }
            let v = (0, s.createContext)(null);

            function j(e) {
                let {
                    children: n,
                    initialLoading: t = !1,
                    readyTimeoutMs: i = r.B6
                } = e, [c, u] = (0, s.useState)(+!!t), [o, d] = (0, s.useState)(t ? "pending" : "revealed"), h = (0, s.useRef)(+!!t), g = (0, s.useRef)(t ? "pending" : "revealed"), f = (0, s.useCallback)(e => {
                    h.current = e, u(e)
                }, []), x = (0, s.useCallback)(e => {
                    g.current = e, d(e)
                }, []), p = (0, s.useCallback)(() => {
                    x((0, l.mL)(g.current))
                }, [x]), j = (0, s.useCallback)(() => {
                    x((0, l.sO)(g.current))
                }, [x]), b = (0, s.useCallback)(() => {
                    x((0, l.rw)(g.current)), f(0)
                }, [f, x]), N = (0, s.useCallback)(() => {
                    f(h.current + 1)
                }, [f]), w = (0, s.useCallback)(() => {
                    let e = Math.max(0, h.current - 1);
                    f(e), 0 === e && x("revealed")
                }, [f, x]), y = (0, s.useCallback)(e => {
                    if (e) {
                        x("pending"), f(Math.max(1, h.current));
                        return
                    }
                    b()
                }, [b, f, x]), C = (0, s.useCallback)(async e => {
                    N();
                    try {
                        return await e
                    } finally {
                        w()
                    }
                }, [w, N]);
                (0, s.useEffect)(() => {
                    if (!t) return;
                    let e = setTimeout(() => b(), i);
                    return () => {
                        clearTimeout(e)
                    }
                }, [t, b, i]), (0, s.useEffect)(() => () => {
                    h.current = 0
                }, []);
                let k = (0, s.useMemo)(() => ({
                    isLoading: c > 0,
                    state: o,
                    enlargeLogo: p,
                    fadeLogo: j,
                    markReady: b,
                    show: N,
                    hide: w,
                    setLoading: y,
                    withLoader: C
                }), [c, p, j, w, b, y, N, o, C]);
                return (0, a.jsxs)(v.Provider, {
                    value: k,
                    children: [n, (0, a.jsx)(m, {
                        open: k.isLoading,
                        logoEnlarging: (0, l.pb)(o),
                        logoFading: (0, l.$I)(o)
                    })]
                })
            }

            function b() {
                return (0, s.useContext)(v)
            }
        }
    }
]);
//# sourceMappingURL=7625-92e8a840e163353a.js.map