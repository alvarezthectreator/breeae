"use strict";
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a0adaf87-13b2-42f6-9071-0a1dbf183d9d", e._sentryDebugIdIdentifier = "sentry-dbid-a0adaf87-13b2-42f6-9071-0a1dbf183d9d")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2676, 8376], {
        8859: (e, t, r) => {
            r.d(t, {
                a: () => i
            });
            var o = r(23798),
                n = r(13689),
                a = r(23582);
            let i = e => {
                let {
                    children: t
                } = e, {
                    enabled: r,
                    mode: i
                } = (0, a.RR)();
                return r && i ? (0, o.jsx)(n.N, {
                    mode: i,
                    children: t
                }) : (0, o.jsx)(o.Fragment, {
                    children: t
                })
            }
        },
        12417: (e, t, r) => {
            r.d(t, {
                l: () => n
            });
            var o = r(16898);
            let n = (e, t) => "in" === t ? "https://in.".concat(o.WF).concat(e) : e
        },
        26406: (e, t, r) => {
            r.d(t, {
                N: () => i
            });
            var o = r(30295),
                n = r(94059),
                a = r(7415);
            let i = e => {
                let {
                    hasMobileStore: t,
                    promoCode: r,
                    urlQuery: i = ""
                } = e;
                return async e => {
                    let {
                        captchaToken: l,
                        getAppUrl: s,
                        phone: c
                    } = e, d = r || function() {
                        try {
                            let e = new URL(window.location.href).searchParams.get(n.MP.PromoCode);
                            if (e && e.length > 50) return (0, a.H)("GetTheApp", TypeError("Promo code too long")), null;
                            return e || null
                        } catch (e) {
                            return null
                        }
                    }() || o.yz, u = t && d ? void 0 : s;
                    return (0, o.Wq)({
                        component: o.Fm.GetTheApp,
                        promoCode: d,
                        captchaToken: l,
                        getAppUrl: u,
                        phone: c,
                        urlQuery: i
                    })
                }
            }
        },
        29882: (e, t, r) => {
            r.d(t, {
                hu: () => l
            });
            var o = r(57996),
                n = r.n(o);
            let a = n()(() => Promise.all([r.e(5957), r.e(8010), r.e(8359), r.e(2876), r.e(4330), r.e(2525), r.e(4273)]).then(r.bind(r, 4273)).then(e => e.PhoneFormControlled), {
                    loadableGenerated: {
                        webpack: () => [4273]
                    }
                }),
                i = n()(() => r.e(2188).then(r.bind(r, 92188)).then(e => e.PhoneFormPopup), {
                    loadableGenerated: {
                        webpack: () => [92188]
                    },
                    ssr: !1
                }),
                l = Object.assign(n()(() => Promise.all([r.e(5957), r.e(8010), r.e(8359), r.e(2876), r.e(4330), r.e(2525), r.e(4273)]).then(r.bind(r, 4273)).then(e => e.PhoneForm), {
                    loadableGenerated: {
                        webpack: () => [4273]
                    },
                    ssr: !0
                }), {
                    Controlled: a,
                    Popup: i
                })
        },
        30295: (e, t, r) => {
            r.d(t, {
                Fm: () => u,
                Wq: () => s,
                qM: () => l,
                yz: () => i
            });
            var o = r(70605),
                n = r(7415),
                a = r(12417);
            let i = "WEBSITE19",
                l = async e => {
                    let {
                        apiRegion: t,
                        component: r,
                        phone: i,
                        referralCode: l,
                        inviteId: s,
                        captchaToken: c,
                        token: d
                    } = e;
                    try {
                        if (!l || !c && !d) return {
                            status: "error"
                        };
                        let e = await fetch((0, a.l)("/api/v2/invitation/accept", t), {
                            method: "post",
                            headers: { ...d && {
                                    [o.c.Authorization]: "Basic ".concat(d)
                                },
                                ...c && {
                                    [o.c.CaptchaToken]: c
                                }
                            },
                            body: JSON.stringify({
                                phone: i,
                                referralCode: l,
                                ...s && {
                                    inviteId: s
                                }
                            })
                        });
                        if (e.ok) return {
                            status: "success"
                        };
                        try {
                            let t = await e.clone().text(),
                                r = JSON.parse(t);
                            if ((null == r ? void 0 : r.code) === 120999) return {
                                status: "success"
                            }
                        } catch (e) {
                            return {
                                status: "error",
                                event: "json-parse-error"
                            }
                        }
                        return await p(r, e, l)
                    } catch (e) {
                        return (0, n.H)(r, e, {
                            extra: {
                                promoCode: l
                            }
                        }), {
                            status: "error"
                        }
                    }
                },
                s = async e => {
                    let {
                        component: t,
                        phone: r,
                        urlQuery: a,
                        promoCode: i,
                        captchaToken: l,
                        getAppUrl: s
                    } = e;
                    try {
                        let e = await fetch("/api/promotion", {
                            method: "POST",
                            headers: { ...l && {
                                    [o.c.CaptchaToken]: l
                                },
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify({
                                phone: r,
                                urlQuery: a,
                                promoCode: i,
                                ...s && {
                                    getAppUrl: s
                                }
                            })
                        });
                        if (e.ok) return {
                            status: "success"
                        };
                        return await p(t, e, i)
                    } catch (e) {
                        return (0, n.H)(t, e, {
                            extra: {
                                promoCode: i
                            }
                        }), {
                            status: "error"
                        }
                    }
                };
            var c = function(e) {
                return e[e.PromotionExpired = 1100] = "PromotionExpired", e[e.PromotionExhausted = 1101] = "PromotionExhausted", e[e.PromotionNotFound = 1102] = "PromotionNotFound", e[e.ReferralCodeNotFound = 1103] = "ReferralCodeNotFound", e[e.AnotherPromotionUsed = 1104] = "AnotherPromotionUsed", e[e.PromotionNotApplicable = 1105] = "PromotionNotApplicable", e[e.PromotionInactive = 1106] = "PromotionInactive", e[e.IgnoredPromotionNotAllowed = 1110] = "IgnoredPromotionNotAllowed", e[e.ParticipationTerminated = 1002] = "ParticipationTerminated", e[e.ReferralUserOnWaitingList = 120999] = "ReferralUserOnWaitingList", e
            }({});
            let d = Object.fromEntries(Object.entries(c).map(e => {
                let [t, r] = e;
                return [r, t]
            }));
            var u = function(e) {
                return e.GetTheApp = "get-the-app", e.Invitation = "invitation", e.Waitlist = "expansion-waitlist-referral", e
            }({});
            let p = async (e, t, r) => {
                let o;
                if (429 === t.status) return {
                    status: "error",
                    event: "too-many-requests"
                };
                let a = await t.text();
                try {
                    o = JSON.parse(a)
                } catch (e) {
                    return {
                        status: "error",
                        event: "json-parse-error"
                    }
                }
                return o && (e => {
                    let {
                        code: t
                    } = e;
                    return Object.values(c).includes(t)
                })(o) ? (r === i && 1100 === o.code && (0, n.H)(e, "".concat(i, " code expired, update it as soon as possible"), {
                    extra: {
                        promoCode: r,
                        ...o
                    }
                }, "fatal", {
                    "default-promo-code-expired": i
                }), {
                    status: "error",
                    event: "promo-code-error",
                    extra: {
                        promoCode: r,
                        error: "".concat(o.code, " ").concat(d[o.code]),
                        errorMessage: o.message
                    }
                }) : ((0, n.H)(e, Error("Unhandled server response for ".concat(t.url, " [").concat(t.status, "]")), {
                    extra: {
                        promoCode: r,
                        ...o
                    }
                }), {
                    status: "error"
                })
            }
        },
        42960: (e, t, r) => {
            r.d(t, {
                B: () => d
            });
            var o = r(21462),
                n = r(94191),
                a = r(40769),
                i = r(50268),
                l = r(66985),
                s = r(98565),
                c = r(1402);
            let d = function() {
                let {
                    blockId: e,
                    link: t = s.M4.RetailOpenApp,
                    promoCode: r
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [d, u] = (0, o.useState)({
                    status: "idle"
                }), {
                    phone: p,
                    phoneCode: h,
                    setPhone: m,
                    setPhoneCode: f
                } = (0, i.i)(), {
                    getResourceBlockContext: g
                } = (0, l.Xm)(), x = g(e);
                return ! function(e) {
                    let {
                        status: t,
                        redirectUrl: r
                    } = e, {
                        link: i
                    } = (0, n.OQ)(r), l = (0, o.useRef)(), s = (0, a.dx)();
                    (0, o.useEffect)(() => {
                        s && "idle" === t && "success" === l.current && (l.current = t, window.location.href = i), l.current !== t && (l.current = t)
                    }, [t, r, s, i])
                }({
                    status: d.status,
                    redirectUrl: t
                }), ! function(e) {
                    let {
                        formState: t,
                        countryCode: r,
                        context: a,
                        componentName: i,
                        featureToggle: s,
                        position: d,
                        promoCode: u
                    } = e, {
                        locale: p
                    } = (0, c.useRouter)(), {
                        trackEvent: h
                    } = (0, n.st)(), m = (0, o.useRef)("idle"), f = t.status, g = "error" === t.status && t.event || "error", x = (0, o.useMemo)(() => ({
                        phoneCountryCode: r,
                        locale: p,
                        context: a,
                        position: d
                    }), [a, r, p, d]);
                    (0, o.useEffect)(() => {
                        i !== l.Dh.componentName && h({
                            action: "Signup_Start",
                            component_name: i,
                            feature_toggle: s,
                            vertical: "Retail",
                            payload: x,
                            ...u && {
                                promo_code: u
                            }
                        })
                    }, [i]), (0, o.useEffect)(() => {
                        if (i !== l.Dh.componentName && m.current !== f) {
                            if (m.current = f, "loading" === f) return void h({
                                action: "Phone_Enter",
                                component_name: i,
                                feature_toggle: s,
                                vertical: "Retail",
                                payload: x,
                                ...u && {
                                    promo_code: u
                                }
                            });
                            if ("success" === f) return void h({
                                action: "Phone_Submit",
                                component_name: i,
                                feature_toggle: s,
                                vertical: "Retail",
                                payload: x,
                                ...u && {
                                    promo_code: u
                                }
                            });
                            if ("error" === f) {
                                let e = t.extra,
                                    r = (null == e ? void 0 : e.promoCode) || u;
                                h({
                                    action: "Phone_Fail",
                                    component_name: i,
                                    feature_toggle: s,
                                    vertical: "Retail",
                                    ...r && {
                                        promo_code: r
                                    },
                                    ...(null == e ? void 0 : e.error) && {
                                        error: e.error
                                    },
                                    payload: { ...x,
                                        error: g,
                                        ...(null == e ? void 0 : e.errorMessage) && {
                                            error: e.errorMessage
                                        }
                                    }
                                });
                                return
                            }
                        }
                    }, [i, s, g, t, x, f, h, u])
                }({
                    formState: d,
                    countryCode: h,
                    promoCode: r,
                    ...x
                }), {
                    countryCode: h,
                    formState: d,
                    link: t,
                    phoneNumber: p,
                    handlePopupExit: (0, o.useCallback)(() => {
                        u({
                            status: "idle"
                        }), m("")
                    }, [u, m]),
                    setCountryCode: f,
                    setFormState: u,
                    setPhoneNumber: m
                }
            }
        },
        49114: (e, t, r) => {
            r.d(t, {
                z: () => p
            });
            var o = r(23798),
                n = r(8314),
                a = r(55364),
                i = r(56874),
                l = r(21452),
                s = r(33514),
                c = r(72767),
                d = r(23582),
                u = r(94746);
            let p = e => {
                let {
                    open: t,
                    onClose: r,
                    children: p,
                    ...h
                } = e, m = (0, s.c)(), f = (0, c.P)("md"), g = (0, d.sH)();
                return f ? (0, o.jsxs)(n.h, {
                    open: !!t,
                    display: "flex",
                    onClose: r,
                    ...h,
                    ...g,
                    role: "dialog",
                    children: [(0, o.jsx)(a.L, { in: !!t,
                        offsetX: 0,
                        offsetY: -24,
                        children: (0, o.jsx)(i.x, {
                            bg: u.n.groupedBackground,
                            radius: "popup",
                            maxWidth: {
                                all: "500px",
                                xxl: "700px"
                            },
                            width: {
                                all: "500px",
                                xxl: "700px"
                            },
                            m: "auto",
                            children: p
                        })
                    }), (0, o.jsx)(n.h.CloseButton, {
                        "aria-label": m("shared.button.close"),
                        onClick: r
                    })]
                }) : (0, o.jsx)(l.z, {
                    open: t,
                    onClose: r,
                    "aria-label": "Modal",
                    ...h,
                    ...g,
                    variant: "bottom-sheet",
                    children: p
                })
            }
        },
        53678: (e, t, r) => {
            r.d(t, {
                b: () => P
            });
            var o = r(23798),
                n = r(21462),
                a = r(37456),
                i = r(12206),
                l = r(49914),
                s = r(28065),
                c = r(29882),
                d = r(68924),
                u = r(96023),
                p = r(33514),
                h = r(93392),
                m = r(40769),
                f = r(94191),
                g = r(98565),
                x = r(71658),
                v = r(58386),
                b = r(27691),
                y = r(26406);
            let P = e => {
                var t;
                let {
                    phoneFormControl: r,
                    promoCode: P
                } = e, w = (0, p.c)(), {
                    isRevolutUnder18: C,
                    isRevolutInvest: A,
                    isRevolutRevolutX: j
                } = (0, h.S)(), {
                    vertical: _
                } = (0, s.pF)(), k = "RevolutX" === _ || j, R = (0, m.dx)(), {
                    urlQuery: E
                } = (0, x.c)(), T = (0, n.useMemo)(() => (0, y.N)({
                    promoCode: P,
                    hasMobileStore: R,
                    urlQuery: E
                }), [P, R, E]), {
                    link: I
                } = (0, f.OQ)(null != (t = null == r ? void 0 : r.link) ? t : g.M4.RetailOpenApp, {
                    type: "SMS",
                    data: {
                        qr_code: !0
                    }
                }), [N] = [C && g.M4.RevolutUnder18GetTheApp, A && g.M4.RevolutInvestGetTheApp, k && g.M4.RevolutRevolutXOpenApp, I].filter(Boolean), F = "".concat(g.M4.QRCodeLink, "?link=").concat(encodeURIComponent(N)), O = !(C || A || k) && r;
                return (0, o.jsxs)(a.s, {
                    role: "group",
                    p: "sp1000",
                    alignItems: {
                        all: "stretch",
                        sm: "center"
                    },
                    flexDirection: "column",
                    children: [(0, o.jsx)(u.E, {
                        use: "h2",
                        variant: "h3",
                        textAlign: "center",
                        children: w(k ? "widget.getTheAppPopup.revolutX.title" : "widget.getTheAppPopup.title")
                    }), (0, o.jsx)(u.E, {
                        variant: "subtitle1",
                        use: "p",
                        textAlign: "center",
                        mt: "sp400",
                        children: w("widget.getTheAppPopup.QRCodeDescription")
                    }), (0, o.jsx)(a.s, {
                        alignItems: "center",
                        flexDirection: "column",
                        mt: "sp600",
                        children: (0, o.jsx)(d.r, {
                            value: F,
                            style: {
                                width: "100%",
                                maxWidth: "160px"
                            }
                        })
                    }), k && (0, o.jsxs)(i.T, {
                        align: "center",
                        space: "sp600",
                        children: [(0, o.jsx)(u.E, {
                            variant: "subtitle1",
                            use: "p",
                            textAlign: "center",
                            mt: "sp600",
                            children: w("widget.getTheApp.or")
                        }), (0, o.jsx)(v.$, {
                            link: {
                                uri: g.M4.RevolutRevolutXWebApp,
                                type: b.iF.External
                            },
                            variant: "primary",
                            size: "sm",
                            children: w("widget.getTheApp.visitRevolutX")
                        })]
                    }), O && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(u.E, {
                            variant: "subtitle1",
                            use: "p",
                            textAlign: "center",
                            mt: "sp600",
                            children: w("widget.getTheAppPopup.phoneDescription")
                        }), (0, o.jsx)(l.a, {
                            maxWidth: {
                                all: "",
                                sm: "370px"
                            },
                            mt: "sp600",
                            children: (0, o.jsx)(c.hu.Controlled, { ...r,
                                layout: P ? "text-button" : "default",
                                requestFunc: T,
                                __tuneCountryListExp: !0
                            })
                        })]
                    })]
                })
            }
        },
        56874: (e, t, r) => {
            r.d(t, {
                x: () => h
            });
            var o = r(15612),
                n = r(60482),
                a = r(78522),
                i = r(49914),
                l = r(28275),
                s = r(23143),
                c = r(16463),
                d = r(67392),
                u = r(81598),
                p = (0, d.h)(i.a),
                h = (0, o.Ay)(p).attrs(function(e) {
                    var t, r = e.bg,
                        o = void 0 === r ? a.o.color.widgetBackground : r,
                        n = e.color,
                        i = void 0 === n ? a.o.color.foreground : n,
                        s = e.radius,
                        c = void 0 === s ? a.o.radius.widget : s,
                        d = e.display;
                    return (t = {
                        bg: o,
                        color: i,
                        radius: c,
                        display: void 0 === d ? "block" : d,
                        "data-rui": "widget"
                    })[l.Qi] = l.tN.WIDGET, t
                }).withConfig({
                    displayName: "Widget",
                    componentId: "rui__sc-1nl0vyl-0"
                })(["", " ", " & &{background-color:", ";}", ""], s.e, (0, c.OG)(u.l.TABLE_ROW_X_BORDER_WIDTH, "1px"), a.o.color.greyTone5, n.yW)
        },
        68924: (e, t, r) => {
            r.d(t, {
                r: () => l
            });
            var o = r(23798),
                n = r(21462),
                a = r(64759),
                i = r.n(a);
            let l = e => {
                let {
                    value: t,
                    padding: r = 1,
                    ...a
                } = e, {
                    children: l,
                    size: s
                } = (0, n.useMemo)(() => {
                    let {
                        modules: e,
                        moduleCount: r
                    } = i()(t), n = [];
                    return e.forEach((e, t) => e.forEach((e, r) => {
                        e && n.push((0, o.jsx)("rect", {
                            x: t,
                            y: r,
                            width: "1",
                            height: "1",
                            shapeRendering: "crispEdges",
                            strokeWidth: "0",
                            fill: "currentColor",
                            stroke: "currentColor"
                        }, "".concat(t, ":").concat(r)))
                    })), {
                        children: n,
                        size: r
                    }
                }, [t]), c = (0, n.useMemo)(() => {
                    let [e, t] = [-1 * r, s + 2 * r];
                    return [e, e, t, t].join(" ")
                }, [s, r]);
                return (0, o.jsx)("svg", {
                    "aria-label": "qr-code",
                    viewBox: c,
                    ...a,
                    children: l
                })
            }
        },
        70605: (e, t, r) => {
            r.d(t, {
                c: () => o
            });
            var o = function(e) {
                return e.BrowserApplication = "x-browser-application", e.CaptchaToken = "X-Captcha-Token", e.ClientVersion = "x-client-version", e.DeviceId = "x-device-id", e.GeoLocation = "x-client-geo-location", e.UserAgent = "user-agent", e.Authorization = "Authorization", e
            }({})
        },
        88376: (e, t, r) => {
            r.r(t), r.d(t, {
                GetTheAppPopup: () => u
            });
            var o = r(23798),
                n = r(21462),
                a = r(42960),
                i = r(29882),
                l = r(53678),
                s = r(49114),
                c = r(8859),
                d = r(28065);
            let u = () => {
                let [e, t] = (0, d.FS)(), r = (0, d.pF)(), u = (0, a.B)({
                    blockId: r.blockId,
                    link: r.link
                }), p = u.formState.status;
                return (0, n.useEffect)(() => {
                    ("error" === p || "success" === p) && t(!1)
                }, [p, t]), (0, o.jsxs)(c.a, {
                    children: [(0, o.jsx)(s.z, {
                        open: e,
                        onClose: () => t(!1),
                        children: (0, o.jsx)(l.b, {
                            phoneFormControl: u
                        }, r.key)
                    }), (0, o.jsx)(i.hu.Popup, { ...u
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=8376.78c3fbc5d0119e93.js.map