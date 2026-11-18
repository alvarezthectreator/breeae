"use strict";
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "65cbd137-d8aa-4bc9-8477-de9b6eee9294", e._sentryDebugIdIdentifier = "sentry-dbid-65cbd137-d8aa-4bc9-8477-de9b6eee9294")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6276], {
        8859: (e, a, t) => {
            t.d(a, {
                a: () => s
            });
            var n = t(23798),
                l = t(13689),
                i = t(23582);
            let s = e => {
                let {
                    children: a
                } = e, {
                    enabled: t,
                    mode: s
                } = (0, i.RR)();
                return t && s ? (0, n.jsx)(l.N, {
                    mode: s,
                    children: a
                }) : (0, n.jsx)(n.Fragment, {
                    children: a
                })
            }
        },
        96276: (e, a, t) => {
            t.r(a), t.d(a, {
                ExpansionWaitlistPopup: () => y
            });
            var n = t(23798),
                l = t(21462),
                i = t(21452),
                s = t(23079),
                d = t(95780),
                o = t(9699),
                c = t(94191),
                r = t(28065),
                b = t(79993),
                p = t(23582),
                u = t(8859),
                f = t(97501);
            let y = () => {
                let {
                    isOpen: e,
                    setIsOpen: a
                } = (0, f.LU)(), [, t] = (0, r.FS)(), {
                    step: y
                } = (0, d.bp)(), k = (0, d.Kf)(), h = (0, f.fz)(), {
                    trackEvent: g
                } = (0, c.st)(), w = (0, p.sH)(), C = (0, l.useCallback)(() => a(!1), [a]), x = (0, l.useCallback)(() => k({
                    step: b.yH.Initial
                }), [k]), _ = (0, l.useCallback)(() => {
                    t(!0), C()
                }, [t, C]);
                return (0, l.useEffect)(() => {
                    e && g({
                        action: "Waitlist_Start",
                        component_name: "expansion-waitlist-widget",
                        vertical: "Retail",
                        payload: {
                            mode: "popup"
                        }
                    })
                }, [g, e]), (0, n.jsx)(u.a, {
                    children: (0, n.jsxs)(i.z, {
                        "aria-label": "wide-modal",
                        closeOnOverlayClick: !1,
                        "data-blockid": h.blockId,
                        onClose: C,
                        open: e,
                        variant: "modal-view",
                        ...w,
                        children: [y !== b.yH.Done && y !== b.yH.Already && (0, n.jsxs)(s.Y, {
                            variant: "compact",
                            children: [y === b.yH.Initial && (0, n.jsx)(s.Y.CloseButton, {
                                onClick: C
                            }), y === b.yH.Otp && (0, n.jsx)(s.Y.BackButton, {
                                onClick: x
                            })]
                        }), (0, n.jsx)(o.p, {
                            onClose: C,
                            navigateToGetTheApp: _
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=6276.ef731ba19ae073cb.js.map