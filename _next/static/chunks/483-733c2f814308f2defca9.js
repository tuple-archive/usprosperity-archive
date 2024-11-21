'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [483],
  {
    72421: function (e, r, t) {
      var n = t(92809),
        i = (t(67294), t(53290)),
        o = t(85893);
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      r.Z = function (e) {
        return (0, o.jsx)(
          i.Z,
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? c(Object(t), !0).forEach(function (r) {
                    (0, n.Z)(e, r, t[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : c(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    );
                  });
            }
            return e;
          })({ height: '1px', backgroundColor: 'purple020' }, e)
        );
      };
    },
    77359: function (e, r, t) {
      var n = t(92809),
        i = t(10219),
        o = t(58804),
        c = t(37947),
        a = t(56755),
        s = t.n(a),
        l = t(27361),
        p = t.n(l),
        u = (t(67294), t(53290)),
        d = t(79968),
        f = t(8880),
        h = t(40984),
        j = t(25770),
        O = t(97023),
        b = t(89358),
        g = t(84272),
        y = t(68608),
        w = t(48860),
        v = t(85893),
        m = ['asset', 'getTitle'];
      function Z(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function P(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Z(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      r.Z = function (e) {
        var r = e.asset,
          t = e.getTitle,
          n = void 0 === t ? d.S : t,
          o = (0, i.Z)(e, m),
          a = r.downloadDescription,
          l = r.downloadImage,
          f = r.size,
          Z = r.url,
          S = r.kind,
          k = p()(l, [0]),
          C = { href: Z, target: '_blank', display: 'block' };
        return (0, v.jsxs)(
          j.Z,
          P(
            P(
              {
                display: 'flex',
                alignItems: [null, null, 'center'],
                rowGap: 5,
              },
              o
            ),
            {},
            {
              children: [
                (0, v.jsxs)(O.Z, {
                  width: [0.25, 0.25, 2 / 7],
                  children: [
                    k &&
                      (0, v.jsx)(g.Z, {
                        asset: k,
                        variant: 'imageDownloadVariant',
                        borderRadius: 1,
                      }),
                    !k &&
                      (0, v.jsx)(u.Z, {
                        paddingBottom: '133.333333%',
                        backgroundColor: 'purple020',
                        position: 'relative',
                        borderRadius: 1,
                        children: (0, v.jsx)(x, {
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          color: 'purple050',
                          fontWeight: 'medium',
                          children: S.toUpperCase(),
                        }),
                      }),
                  ],
                }),
                (0, v.jsxs)(O.Z, {
                  width: [0.75, 0.75, 5 / 7],
                  children: [
                    (0, v.jsx)(w.Z, { variant: 'heading', children: n(r) }),
                    (0, v.jsx)(
                      D,
                      P(
                        P({}, C),
                        {},
                        {
                          $_css: (0, c.ZP)({
                            color: 'purple070',
                            '&:hover': { color: 'purple090' },
                          }),
                          children: (0, v.jsxs)(u.Z, {
                            display: 'flex',
                            alignItems: 'center',
                            children: [
                              (0, v.jsx)(h.Z, { marginRight: 3 }),
                              (0, v.jsxs)(w.Z, {
                                fontSize: 1,
                                fontWeight: 'medium',
                                lineHeight: 2,
                                children: [
                                  'Download ',
                                  S.toUpperCase(),
                                  ' ',
                                  (0, v.jsxs)(b.Z, {
                                    children: ['(', s()(f), ')'],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }
                      )
                    ),
                    a && (0, v.jsx)(y.Z, { rawHtml: a, marginTop: 7 }),
                  ],
                }),
              ],
            }
          )
        );
      };
      var x = (0, o.ZP)(w.Z).withConfig({
          displayName: 'Download___StyledText',
          componentId: 'sc-11esowo-0',
        })({ transform: 'translate(-50%, -50%)', userSelect: 'none' }),
        D = (0, o.ZP)(f.Z).withConfig({
          displayName: 'Download___StyledAnchor',
          componentId: 'sc-11esowo-1',
        })(['', ''], function (e) {
          return e.$_css;
        });
    },
    40984: function (e, r, t) {
      var n = t(92809),
        i = (t(67294), t(53290)),
        o = t(85893);
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function s(e) {
        return (0, o.jsx)(
          i.Z,
          a(
            a({ width: '1.375rem', height: '1.375rem' }, e),
            {},
            {
              children: (0, o.jsxs)('svg', {
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 22 22',
                children: [
                  (0, o.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M6.29289 10.2929c.39053-.39053 1.02369-.39053 1.41422 0L11 13.5858l3.2929-3.2929c.3905-.39053 1.0237-.39053 1.4142 0 .3905.3905.3905 1.0237 0 1.4142l-4 4c-.3905.3905-1.0237.3905-1.4142 0l-4.00001-4c-.39052-.3905-.39052-1.0237 0-1.4142z',
                    fill: 'currentColor',
                  }),
                  (0, o.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M11 2c-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9 4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9zM0 11C0 4.92487 4.92487 0 11 0c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11-6.07513 0-11-4.9249-11-11z',
                    fill: 'currentColor',
                  }),
                  (0, o.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M11 6c.5523 0 1 .44772 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.55228.4477-1 1-1z',
                    fill: 'currentColor',
                  }),
                ],
              }),
            }
          )
        );
      }
      (s.defaultProps = {}), (r.Z = s);
    },
    4117: function (e, r, t) {
      var n = t(92809),
        i = t(10219),
        o = t(67294),
        c = t(97023),
        a = t(25770),
        s = t(85893),
        l = ['children'];
      function p(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      r.Z = function (e) {
        var r = e.children,
          t = (0, i.Z)(e, l);
        return (0, s.jsx)(
          a.Z,
          u(
            u({ rowGap: 5 }, t),
            {},
            {
              children: o.Children.map(r, function (e, r) {
                return (0,
                s.jsx)(c.Z, { width: [1, 1, 7 / 9], children: e }, r);
              }),
            }
          )
        );
      };
    },
    89358: function (e, r, t) {
      t(67294);
      var n = t(58804).ZP.span.withConfig({
        displayName: 'NoWrap',
        componentId: 'sc-14ydv6x-0',
      })(['white-space:nowrap;']);
      r.Z = n;
    },
    84272: function (e, r, t) {
      var n = t(92809),
        i = t(10219),
        o = (t(67294), t(53290)),
        c = t(25675),
        a = t(85893),
        s = ['asset', 'variant', 'className', 'priority', 'quality', 'wrap'];
      function l(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var u = {
        imageDownloadVariant: 4 / 3,
        imageSquareVariant: 1,
        imageWidescreenVariant: 9 / 16,
      };
      function d(e) {
        var r = e.src;
        e.width, e.quality;
        return r.replace(
          'https://usprosperity.vercel.app/_s3/',
          'https://usprosperity.vercel.app/_s3/'
        );
      }
      r.Z = function (e) {
        var r,
          t = e.asset,
          n = e.variant,
          l = (e.className, e.priority),
          f = e.quality,
          h = void 0 === f ? 100 : f,
          j = e.wrap,
          O = void 0 === j || j,
          b = (0, i.Z)(e, s);
        if (!t) return null;
        var g = t.title,
          y = t.width,
          w = t.height,
          v = t.focalPoint,
          m = void 0 === v ? [0.5, 0.5] : v,
          Z = t.mimeType,
          P = null !== (r = u[n]) && void 0 !== r ? r : w / y,
          x = t.url.replace(
            'legatuminstitute-uspiwebsite.s3',
            'legatuminstitute-uspiwebsite-2.s3'
          ),
          D = 'image/svg+xml' === Z || 'image/svg' === Z;
        D && (O = !1);
        var S = D
            ? { width: y, height: w, unoptimized: !0 }
            : { layout: 'fill', objectFit: 'cover' },
          k = (0, a.jsx)(
            c.default,
            p(
              p(
                {
                  src: x,
                  alt: g,
                  objectPosition: m
                    .map(function (e) {
                      return ''.concat(100 * e, '%');
                    })
                    .join(' '),
                  priority: l,
                  quality: h,
                },
                S
              ),
              {},
              { loader: d }
            )
          );
        return O
          ? (0, a.jsx)(
              o.Z,
              p(
                p(
                  {
                    position: 'relative',
                    paddingBottom: ''.concat(100 * P, '%'),
                    overflow: 'hidden',
                  },
                  b
                ),
                {},
                { children: k }
              )
            )
          : k;
      };
    },
    5872: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return K;
        },
      });
      var n = t(92809),
        i = t(10219),
        o = t(27361),
        c = t.n(o),
        a = (t(67294), t(77359)),
        s = t(4117),
        l = t(58804),
        p = t(53290),
        u = t(85893),
        d = (0, l.ZP)(p.Z).withConfig({
          displayName: 'Embed__VideoWrapper',
          componentId: 'sc-1ubugb-0',
        })(
          [
            'position:relative;padding-top:',
            ';& > *{position:absolute;top:0;left:0;width:100%;height:100%;}',
          ],
          function (e) {
            return e.paddingTop;
          }
        ),
        f = function (e) {
          var r = e.width,
            t = e.height,
            n = e.code,
            i = e.type;
          if (n)
            switch (i) {
              case 'video':
                return (0, u.jsx)(d, {
                  paddingTop: (t / r) * 100 + '%',
                  dangerouslySetInnerHTML: { __html: n },
                });
              default:
                return (0, u.jsx)('div', {
                  dangerouslySetInnerHTML: { __html: n },
                });
            }
          return '';
        },
        h = t(25770),
        j = t(97023),
        O = t(68608),
        b = t(72421),
        g = t(57294),
        y = t(84272),
        w = t(46066),
        v = ['children'];
      function m(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function Z(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? m(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var P = (0, l.ZP)(w.Z).withConfig({
          displayName: 'Carousel__StyledSlider',
          componentId: 'sc-ysd9vt-0',
        })(['']),
        x = function (e) {
          var r = e.children,
            t = Z({ arrows: !1, fade: !0 }, (0, i.Z)(e, v));
          return (0, u.jsx)(P, Z(Z({}, t), {}, { children: r }));
        };
      function D(e) {
        var r = e.block,
          t = r.images,
          n = r.layout;
        if (t.length > 1)
          return (0, u.jsx)(S, {
            layout: n,
            children: (0, u.jsx)(x, {
              children: t.map(function (e, r) {
                var t = e.imageCaption;
                return (0,
                u.jsx)(p.Z, { children: (0, u.jsxs)(h.Z, { rowGap: 4, children: [(0, u.jsx)(j.Z, { children: (0, u.jsx)(y.Z, { asset: e, variant: 'imageStandardVariant' }) }), t && (0, u.jsx)(j.Z, { children: (0, u.jsx)(O.Z, { rawHtml: t, color: 'purple060' }) })] }) }, r);
              }),
            }),
          });
        var i = (0, g.Z)(t),
          o = i.imageCaption;
        return (0, u.jsxs)(S, {
          layout: n,
          children: [
            (0, u.jsx)(y.Z, { asset: i, variant: 'imageStandardVariant' }),
            o &&
              (0, u.jsx)(j.Z, {
                children: (0, u.jsx)(O.Z, { rawHtml: o, color: 'purple060' }),
              }),
          ],
        });
      }
      function S(e) {
        var r = e.layout,
          t = void 0 === r ? 'full' : r,
          n = e.children;
        return 'constrained' === t
          ? (0, u.jsx)(h.Z, {
              children: (0, u.jsx)(j.Z, {
                width: [1, 0.75, 6 / 9],
                children: n,
              }),
            })
          : n;
      }
      D.defaultProps = {};
      var k = D,
        C = t(41664),
        N = t(8880),
        M = t(60222),
        I = t(37947),
        _ = t(48860),
        E = ['title', 'personJobTitle', 'slug'];
      function A(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function T(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? A(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var H = (0, l.ZP)(N.Z).withConfig({
          displayName: 'PersonLink__PersonAnchor',
          componentId: 'sc-1o79vea-0',
        })(
          (0, I.ZP)({
            display: 'inline-block',
            color: 'purple050',
            '&:hover': { color: 'purple070' },
          })
        ),
        R = function (e) {
          var r = e.title,
            t = e.personJobTitle,
            n = e.slug,
            o = (0, i.Z)(e, E);
          return (0, u.jsx)(
            p.Z,
            T(
              T({}, o),
              {},
              {
                children: (0, u.jsx)(C.default, {
                  href: '/people/[slug]',
                  as: '/people/'.concat(n),
                  passHref: !0,
                  children: (0, u.jsxs)(H, {
                    children: [
                      (0, u.jsx)(_.Z, {
                        fontWeight: 'medium',
                        color: 'purple170',
                        children: r,
                      }),
                      (0, u.jsx)(_.Z, {
                        fontWeight: 'medium',
                        color: 'purple080',
                        children: t,
                      }),
                      (0, u.jsxs)(p.Z, {
                        display: 'flex',
                        marginTop: [3, 3, 5],
                        fontWeight: 'medium',
                        children: [
                          (0, u.jsx)(p.Z, {
                            marginRight: 2,
                            children: 'View profile',
                          }),
                          (0, u.jsx)(M.Z, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              }
            )
          );
        },
        V = ['blocks', 'prependDivider'],
        W = ['typeHandle'];
      function z(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function G(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? z(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var L = function (e) {
          var r = e.typeHandle,
            t = (0, i.Z)(e, W);
          switch (r) {
            case 'text':
              return (0, u.jsx)(h.Z, {
                children: (0, u.jsx)(j.Z, {
                  width: [1, 0.75, 6 / 9],
                  children: (0, u.jsx)(O.Z, { rawHtml: t.text }),
                }),
              });
            case 'images':
              return (0, u.jsx)(k, { block: t });
            case 'embed':
              return (0, u.jsx)(f, G({}, t.embedUrl));
            case 'people':
              return (0, u.jsx)(h.Z, {
                children: (0, u.jsx)(j.Z, {
                  width: [1, 1, 6 / 9],
                  children: (0, u.jsx)(h.Z, {
                    rowGap: [4, 5, 7],
                    children: t.people.map(function (e) {
                      return (0,
                      u.jsx)(j.Z, { width: [1, 0.5], children: (0, u.jsx)(R, G({}, e)) }, e.id);
                    }),
                  }),
                }),
              });
            case 'downloads':
              return (0, u.jsx)(s.Z, {
                children: t.downloads.map(function (e) {
                  return (0, u.jsx)(a.Z, { asset: e }, e.id);
                }),
              });
            case 'divider':
              return (0, u.jsx)(b.Z, {});
          }
        },
        K = function (e) {
          var r = e.blocks,
            t = e.prependDivider,
            n = void 0 !== t && t,
            o = (0, i.Z)(e, V),
            a = c()(r, [0, 'typeHandle']),
            s = n && !['images', 'embed', 'divider'].includes(a);
          return (0, u.jsxs)(
            h.Z,
            G(
              G({}, o),
              {},
              {
                rowGap: [5, 5, 8],
                children: [
                  s && (0, u.jsx)(j.Z, { children: (0, u.jsx)(b.Z, {}) }),
                  r.map(function (e) {
                    return (0, u.jsx)(j.Z, { children: L(e) }, e.id);
                  }),
                ],
              }
            )
          );
        };
    },
    93493: function (e, r, t) {
      t(67294);
      var n = t(25770),
        i = t(97023),
        o = t(22328),
        c = t(85893);
      function a(e) {
        var r = e.title,
          t = e.sidebar,
          a = e.children;
        return (0, c.jsx)(o.Z, {
          paddingY: [7, 10, 13],
          children: (0, c.jsxs)(n.Z, {
            rowGap: [5, 5, 8],
            children: [
              r && (0, c.jsx)(i.Z, { children: r }),
              (0, c.jsx)(i.Z, {
                children: (0, c.jsxs)(n.Z, {
                  children: [
                    (0, c.jsx)(i.Z, {
                      width: [1, 1, 0.25],
                      display: ['none', null, 'block'],
                      children: t,
                    }),
                    (0, c.jsx)(i.Z, { width: [1, 1, 0.75], children: a }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      (a.defaultProps = {}), (r.Z = a);
    },
    60222: function (e, r, t) {
      var n = t(92809),
        i = (t(67294), t(64381)),
        o = t(85893);
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      r.Z = function (e) {
        return (0, o.jsx)(
          i.Z,
          a(
            a({ width: '0.375em', height: '0.625rem' }, e),
            {},
            {
              children: (0, o.jsx)('svg', {
                viewBox: '0 0 6 10',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, o.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d:
                    'M.292893.292893c.390524-.3905241 1.023687-.3905241 1.414217 0l4 3.999997c.39052.39053.39052 1.02369 0 1.41422l-4 4c-.39053.39049-1.023693.39049-1.414217 0-.3905241-.39053-.3905241-1.02369 0-1.41422L3.58579 5 .292893 1.70711c-.3905241-.39053-.3905241-1.023693 0-1.414217z',
                  fill: 'currentColor',
                }),
              }),
            }
          )
        );
      };
    },
    79968: function (e, r, t) {
      t.d(r, {
        S: function () {
          return i;
        },
        v: function () {
          return o;
        },
      });
      var n = {
          AL: 'Alabama',
          AK: 'Alaska',
          AS: 'American Samoa',
          AZ: 'Arizona',
          AR: 'Arkansas',
          CA: 'California',
          CO: 'Colorado',
          CT: 'Connecticut',
          DE: 'Delaware',
          DC: 'District Of Columbia',
          FM: 'Federated States Of Micronesia',
          FL: 'Florida',
          GA: 'Georgia',
          GU: 'Guam',
          HI: 'Hawaii',
          ID: 'Idaho',
          IL: 'Illinois',
          IN: 'Indiana',
          IA: 'Iowa',
          KS: 'Kansas',
          KY: 'Kentucky',
          LA: 'Louisiana',
          ME: 'Maine',
          MH: 'Marshall Islands',
          MD: 'Maryland',
          MA: 'Massachusetts',
          MI: 'Michigan',
          MN: 'Minnesota',
          MS: 'Mississippi',
          MO: 'Missouri',
          MT: 'Montana',
          NE: 'Nebraska',
          NV: 'Nevada',
          NH: 'New Hampshire',
          NJ: 'New Jersey',
          NM: 'New Mexico',
          NY: 'New York',
          NC: 'North Carolina',
          ND: 'North Dakota',
          MP: 'Northern Mariana Islands',
          OH: 'Ohio',
          OK: 'Oklahoma',
          OR: 'Oregon',
          PW: 'Palau',
          PA: 'Pennsylvania',
          PR: 'Puerto Rico',
          RI: 'Rhode Island',
          SC: 'South Carolina',
          SD: 'South Dakota',
          TN: 'Tennessee',
          TX: 'Texas',
          UT: 'Utah',
          VT: 'Vermont',
          VI: 'Virgin Islands',
          VA: 'Virginia',
          WA: 'Washington',
          WV: 'West Virginia',
          WI: 'Wisconsin',
          WY: 'Wyoming',
        },
        i = function (e) {
          return e.title;
        },
        o = function (e) {
          var r = e.filename
            .replace(/\.(.+)$/, '')
            .replace(/([a-z\d])-([a-z\d])/gi, '$1 $2')
            .replace(/_/g, ' ')
            .replace(/\s+/g, ' ');
          return (
            Object.values(n).forEach(function (e) {
              r = r.replace('-'.concat(e), ' - '.concat(e));
            }),
            (r = r.replace(/De Soto/g, 'DeSoto'))
          );
        };
    },
    57294: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var n = t(1469),
        i = t.n(n),
        o = t(8804),
        c = t.n(o);
      function a(e) {
        return i()(e) ? c()(e) : e;
      }
    },
    79630: function (e, r, t) {
      t.r(r),
        t.d(r, {
          __N_SSG: function () {
            return c;
          },
        });
      t(67294);
      var n = t(22328),
        i = t(48860),
        o = t(85893);
      var c = !0;
      r.default = function () {
        return (0, o.jsxs)(n.Z, {
          paddingY: [7, 10, 13],
          children: [
            (0, o.jsx)(i.Z, {
              as: 'h1',
              variant: 'largeHeading',
              children: '404',
            }),
            (0, o.jsx)(i.Z, {
              as: 'h1',
              variant: 'heading',
              color: 'purple070',
              children: 'Page not found',
            }),
          ],
        });
      };
    },
  },
]);
