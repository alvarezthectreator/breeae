! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a80968ef-46d6-4148-a480-e8f24ee7b599", e._sentryDebugIdIdentifier = "sentry-dbid-a80968ef-46d6-4148-a480-e8f24ee7b599")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4680], {
        4680: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => c
            });
            var a = r(23798),
                l = r(76616),
                n = r(96023),
                i = r(73078),
                s = r(19053);
            r(83413), r(80158);
            let c = e => {
                let {
                    id: t,
                    anchor: r,
                    content: {
                        description: c = "",
                        style: {
                            color: o = "foreground",
                            variant: d,
                            align: u
                        } = {}
                    }
                } = e, h = (0, i.M2)({
                    customReplace: i.vr
                })(c);
                return (0, a.jsx)(l.j, {
                    className: "text-block",
                    id: null != r ? r : t,
                    "data-blockid": t,
                    color: o,
                    marginY: 0,
                    children: (0, a.jsx)(n.E, {
                        className: "_1d64b430",
                        textAlign: {
                            all: "start",
                            md: "left" === u ? "start" : u
                        },
                        use: (0, s.Kg)(h) ? "p" : "div",
                        variant: "h6" === d ? "subtitle1" : d,
                        children: h
                    })
                })
            }
        },
        73078: (e, t, r) => {
            "use strict";
            r.d(t, {
                cK: () => p,
                vr: () => N,
                HL: () => k,
                M2: () => g,
                lI: () => y
            });
            var a = r(23798),
                l = r(21462),
                n = r(32586),
                i = r(49914),
                s = r(81370),
                c = r(23478),
                o = r(33584),
                d = r(75077),
                u = r(51266),
                h = r(62403),
                f = r(1402),
                b = r(80510),
                m = r(27691);
            r(72779);
            var p = function(e) {
                return e.A = "a", e.B = "b", e.Blockquote = "blockquote", e.Br = "br", e.Em = "em", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.I = "i", e.Li = "li", e.Ol = "ol", e.P = "p", e.S = "s", e.Small = "small", e.Strong = "strong", e.Table = "table", e.Tbody = "tbody", e.Td = "td", e.Th = "th", e.Thead = "thead", e.Tr = "tr", e.U = "u", e.Ul = "ul", e
            }({});
            let x = (e, t) => {
                    let {
                        attribs: r
                    } = e;
                    return r && (r[t] || r[t.toLowerCase()])
                },
                j = e => {
                    let {
                        locale: t,
                        defaultLocale: r,
                        customReplace: i,
                        allowedTags: s = Object.values(p),
                        trim: c = !0,
                        linkClassName: o,
                        tagClassNames: u
                    } = e;
                    return function(e) {
                        let f = e.name,
                            p = e.children && (0, h.zd)(e.children, {
                                trim: c,
                                replace: j({
                                    locale: t,
                                    defaultLocale: r,
                                    customReplace: i,
                                    allowedTags: s,
                                    trim: c,
                                    linkClassName: o,
                                    tagClassNames: u
                                })
                            }),
                            g = (0, d.cn)("ez4kjs4", o);
                        if (i) {
                            let t = i(e, p);
                            if (t) return t
                        }
                        if ("text" !== String(e.type)) {
                            if (!s.includes(f)) return (0, a.jsx)(a.Fragment, {
                                children: p
                            });
                            if (e.attribs && "a" === f) {
                                var v, y, N;
                                if ((null == (v = e.attribs.href) ? void 0 : v.toLowerCase().startsWith("javascript:")) || (null == (y = e.attribs.href) ? void 0 : y.toLowerCase().startsWith("data:"))) return (0, a.jsx)(a.Fragment, {
                                    children: p
                                });
                                if (null == (N = e.attribs.href) ? void 0 : N.startsWith("mailto:")) return (0, a.jsx)(n.N, {
                                    className: g,
                                    href: e.attribs.href,
                                    children: p
                                });
                                let l = x(e, "data-location-type"),
                                    i = x(e, "data-location-legalDocumentId"),
                                    s = x(e, "data-location-locationId"),
                                    c = x(e, "data-location-variantSlug"),
                                    o = x(e, "data-location-anchor"),
                                    d = x(e, "data-location-locale");
                                if (l === m.iF.Legal && i) return (0, a.jsx)(b.I, {
                                    value: {
                                        type: m.iF.Legal,
                                        legalDocumentId: i,
                                        anchor: o
                                    },
                                    children: (0, a.jsx)(n.N, {
                                        className: g,
                                        rel: "noopener",
                                        target: "_blank",
                                        children: p
                                    })
                                });
                                if (l === m.iF.Internal && s) return (0, a.jsx)(b.I, {
                                    value: {
                                        type: m.iF.Internal,
                                        locationId: s,
                                        locale: t,
                                        anchor: o
                                    },
                                    children: (0, a.jsx)(n.N, {
                                        className: g,
                                        children: p
                                    })
                                });
                                if (l === m.iF.Variant && s && c) return (0, a.jsx)(b.I, {
                                    value: {
                                        type: m.iF.Variant,
                                        locationId: s,
                                        variantSlug: c,
                                        anchor: o
                                    },
                                    children: (0, a.jsx)(n.N, {
                                        className: g,
                                        children: p
                                    })
                                });
                                if (l === m.iF.CurrentPage) return (0, a.jsx)(b.I, {
                                    value: {
                                        type: m.iF.CurrentPage,
                                        anchor: o
                                    },
                                    children: (0, a.jsx)(n.N, {
                                        className: g,
                                        children: p
                                    })
                                });
                                if (l === m.iF.Variable) return (0, a.jsx)(b.I, {
                                    value: {
                                        type: m.iF.External,
                                        uri: e.attribs.href
                                    },
                                    children: (0, a.jsx)(n.N, {
                                        className: g,
                                        children: p
                                    })
                                });
                                if (l === m.iF.External) {
                                    let {
                                        href: l
                                    } = e.attribs, i = t && t === r ? "" : t, s = new URL(l), c = s.href.replace(s.origin, "".concat(s.origin).concat("true" === d && i ? "/".concat(i) : ""));
                                    return (0, a.jsx)(b.I, {
                                        value: {
                                            type: m.iF.External,
                                            uri: c
                                        },
                                        children: (0, a.jsx)(n.N, {
                                            className: g,
                                            rel: "noopener",
                                            target: "_blank",
                                            children: p
                                        })
                                    })
                                }
                                return (0, a.jsx)(n.N, {
                                    className: g,
                                    href: e.attribs.href,
                                    rel: "noopener",
                                    target: "_self",
                                    children: p
                                })
                            }
                            return Array.isArray(p) && 0 === p.length ? (0, l.createElement)(f) : (0, l.createElement)(f, (null == u ? void 0 : u[f]) ? {
                                className: u[f]
                            } : null, p)
                        }
                    }
                },
                g = function() {
                    let {
                        allowedTags: e,
                        customReplace: t,
                        trim: r = !0,
                        linkClassName: a,
                        tagClassNames: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        defaultLocale: i,
                        locale: s
                    } = (0, f.useRouter)();
                    return (0, l.useCallback)(l => l ? (0, h.Ay)(l, {
                        trim: r,
                        replace: j({
                            locale: s,
                            defaultLocale: i,
                            customReplace: t,
                            allowedTags: e,
                            trim: r,
                            linkClassName: a,
                            tagClassNames: n
                        })
                    }) : null, [r, s, i, t, e, a, n])
                },
                v = /<a\s+href="/,
                y = e => {
                    let {
                        text: t = ""
                    } = e, {
                        defaultLocale: r,
                        locale: a
                    } = (0, f.useRouter)();
                    return (0, l.useMemo)(() => v.test(t) ? (0, h.Ay)(t, {
                        trim: !0,
                        replace: j({
                            locale: a,
                            defaultLocale: r
                        })
                    }) : t, [r, a, t])
                },
                N = (e, t) => {
                    let r = e.name;
                    if ("table" === r) return (0, a.jsx)(i.a, {
                        className: "ez4kjs2",
                        use: r,
                        minWidth: "100%",
                        children: t
                    });
                    if ("thead" === r) return (0, a.jsx)(i.a, {
                        className: "ez4kjs3",
                        use: r,
                        children: t
                    });
                    if ("tbody" === r || "th" === r) return (0, a.jsx)(i.a, {
                        use: r,
                        children: t
                    });
                    if ("td" === r) {
                        let r = e.attribs.width,
                            l = e.attribs.height;
                        return (0, a.jsx)("td", {
                            className: "ez4kjs5",
                            style: (0, u.D)({
                                "var(--ez4kjs0)": r ? "".concat(r, "px") : "auto",
                                "var(--ez4kjs1)": l ? "".concat(l, "px") : "auto"
                            }),
                            colSpan: e.attribs.colspan ? Number(e.attribs.colspan) : void 0,
                            rowSpan: e.attribs.rowspan ? Number(e.attribs.rowspan) : void 0,
                            children: t
                        })
                    }
                },
                k = (e, t) => {
                    let r = e.name,
                        l = e.parentNode,
                        n = null == l ? void 0 : l.name;
                    return "ul" === r || "ol" === r ? (0, a.jsx)(i.a, {
                        use: "div",
                        children: (0, a.jsx)(s.EY, {
                            use: r,
                            display: "inline-block",
                            textAlign: "start",
                            pl: "ol" === r ? "sp500" : "0",
                            children: t
                        })
                    }) : "li" === r && "ul" === n ? (0, a.jsxs)(c.z, {
                        use: "li",
                        mb: "sp200",
                        children: [(0, a.jsx)(o.I, {
                            mt: "sp100",
                            mr: "sp300",
                            name: "CheckSuccess",
                            size: {
                                all: 20,
                                xxl: 28
                            },
                            style: {
                                flexShrink: 0
                            },
                            use: "span"
                        }), (0, a.jsx)(s.EY, {
                            lineHeight: {
                                all: "1.6rem",
                                xxl: "2rem"
                            },
                            children: t
                        })]
                    }) : "li" === r && "ol" === n ? (0, a.jsx)(s.EY, {
                        use: "li",
                        mb: "sp200",
                        lineHeight: {
                            all: "1.6rem",
                            xxl: "2rem"
                        },
                        children: (0, a.jsx)(i.a, {
                            pl: "sp300",
                            children: t
                        })
                    }) : void 0
                }
        },
        80158: () => {},
        83413: () => {}
    }
]);
//# sourceMappingURL=4680.a55c51abd414689d.js.map