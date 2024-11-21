(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    31024: function (C, V, H) {
      'use strict';
      H(67294);
      var l = H(53290),
        t = H(48860),
        L = H(30381),
        B = H.n(L),
        i = H(8804),
        a = H.n(i),
        Z = H(84272),
        s = H(41664),
        M = H(57294),
        p = H(58804),
        e = H(37947),
        d = H(85893);
      var r = p.ZP.a.withConfig({
          displayName: 'Article__ArticleWrapper',
          componentId: 'sc-gunusp-0',
        })([
          '@supports (display:flex){display:flex;flex-direction:column;flex-grow:1;min-height:100%;}',
        ]),
        f = p.ZP.div.withConfig({
          displayName: 'Article__ArticleText',
          componentId: 'sc-gunusp-1',
        })(
          [
            '',
            ';@supports (display:flex){display:flex;flex-direction:column;flex-grow:1;}',
          ],
          (0, e.ZP)({
            backgroundColor: 'white',
            padding: 7,
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
          })
        );
      V.Z = function (C) {
        var V = C.title,
          H = C.slug,
          L = C.postDate,
          i = C.articleCategory,
          p = C.metaImage,
          e = C.metaDescription,
          h = a()(i);
        return (0, d.jsx)(d.Fragment, {
          children: (0, d.jsx)(s.default, {
            href: '/articles/article/[slug]',
            as: '/articles/article/'.concat(H),
            passHref: !0,
            children: (0, d.jsxs)(r, {
              children: [
                (0, d.jsx)(Z.Z, {
                  asset: (0, M.Z)(p),
                  variant: 'imageWidescreenVariant',
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  backgroundColor: 'purple030',
                }),
                (0, d.jsxs)(f, {
                  children: [
                    (0, d.jsx)(t.Z, { variant: 'heading', children: V }),
                    (0, d.jsx)(t.Z, {
                      marginBottom: 10,
                      color: 'purple070',
                      flexGrow: 1,
                      children: e,
                    }),
                    (0, d.jsxs)(l.Z, {
                      display: 'flex',
                      color: 'purple070',
                      children: [
                        (0, d.jsx)(t.Z, {
                          fontSize: 1,
                          children: B()(L).format('LL'),
                        }),
                        (0, d.jsx)(t.Z, {
                          variant: 'eyebrow',
                          fontSize: 1,
                          marginLeft: 'auto',
                          children:
                            null === h || void 0 === h ? void 0 : h.title,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    91785: function (C, V, H) {
      'use strict';
      var l = H(67294),
        t = H(25770),
        L = H(97023),
        B = H(85893);
      function i(C) {
        var V = C.children;
        return (0, B.jsx)(t.Z, {
          rowGap: [3, 5, 6],
          children: l.Children.map(V, function (C, V) {
            return (0, B.jsx)(L.Z, { width: [1, 0.5, 1 / 3], children: C }, V);
          }),
        });
      }
      (i.defaultProps = {}), (V.Z = i);
    },
    58676: function (C, V, H) {
      'use strict';
      var l = H(92809),
        t = H(10219),
        L = (H(67294), H(53290)),
        B = H(22328),
        i = H(85893),
        a = ['children'];
      function Z(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function s(C) {
        for (var V = 1; V < arguments.length; V++) {
          var H = null != arguments[V] ? arguments[V] : {};
          V % 2
            ? Z(Object(H), !0).forEach(function (V) {
                (0, l.Z)(C, V, H[V]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(H))
            : Z(Object(H)).forEach(function (V) {
                Object.defineProperty(
                  C,
                  V,
                  Object.getOwnPropertyDescriptor(H, V)
                );
              });
        }
        return C;
      }
      V.Z = function (C) {
        var V = C.children,
          H = (0, t.Z)(C, a);
        return (0, i.jsx)(
          L.Z,
          s(
            s({ backgroundColor: 'purple020', paddingY: [10, 10, 13] }, H),
            {},
            { children: (0, i.jsx)(B.Z, { children: V }) }
          )
        );
      };
    },
    74388: function (C, V, H) {
      'use strict';
      H.d(V, {
        Z: function () {
          return m;
        },
      });
      var l = H(92809),
        t = (H(67294), H(48860)),
        L = H(53290),
        B = (H(41664), H(22328)),
        i = H(97023),
        a = H(25770),
        Z = H(68608),
        s = H(84272),
        M = H(58804),
        p = H(75980),
        e = (H(8880), H(1469), H(57294)),
        d = H(10219),
        r = H(72912),
        f = H(40694),
        h = H(85893),
        j = ['typeHandle', 'text', 'entry', 'externalUrl'];
      function x(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function n(C) {
        for (var V = 1; V < arguments.length; V++) {
          var H = null != arguments[V] ? arguments[V] : {};
          V % 2
            ? x(Object(H), !0).forEach(function (V) {
                (0, l.Z)(C, V, H[V]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(H))
            : x(Object(H)).forEach(function (V) {
                Object.defineProperty(
                  C,
                  V,
                  Object.getOwnPropertyDescriptor(H, V)
                );
              });
        }
        return C;
      }
      var o = function (C) {
        C.typeHandle;
        var V = C.text,
          H = C.entry,
          l = C.externalUrl,
          t = (0, d.Z)(C, j);
        if (H) {
          var L = (0, e.Z)(H).uri;
          return (0, h.jsx)(r.Z, {
            href: '/'.concat(L),
            children: (0, h.jsx)(
              f.Z,
              n(n({ as: 'div' }, t), {}, { children: V })
            ),
          });
        }
        return (0, h.jsx)(r.Z, {
          href: l,
          target: '_blank',
          children: (0, h.jsx)(
            f.Z,
            n(n({ as: 'div' }, t), {}, { children: V })
          ),
        });
      };
      function c(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function u(C) {
        for (var V = 1; V < arguments.length; V++) {
          var H = null != arguments[V] ? arguments[V] : {};
          V % 2
            ? c(Object(H), !0).forEach(function (V) {
                (0, l.Z)(C, V, H[V]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(H))
            : c(Object(H)).forEach(function (V) {
                Object.defineProperty(
                  C,
                  V,
                  Object.getOwnPropertyDescriptor(H, V)
                );
              });
        }
        return C;
      }
      var b = (0, M.ZP)(L.Z).withConfig({
          displayName: 'Banner__BannerWrapper',
          componentId: 'sc-41tkuv-0',
        })(
          (0, p.bU)({
            variants: {
              oldGloryBlue: {
                color: 'purple010',
                backgroundColor: 'purple100',
              },
              white: { backgroundColor: 'white' },
            },
          })
        ),
        g = function (C) {
          var V = C.bannerHeading,
            H = C.bannerText,
            l = C.bannerButton,
            M = C.bannerTheme,
            p = C.bannerImage;
          return (0, h.jsx)(b, {
            variant: M,
            textAlign: ['center', 'center', 'left'],
            position: 'relative',
            paddingY: [5, 8, 10],
            children: (0, h.jsx)(B.Z, {
              children: (0, h.jsxs)(a.Z, {
                rowGap: 0,
                children: [
                  (0, h.jsx)(i.Z, {
                    width: [1, 1, 0.5],
                    display: 'flex',
                    alignItems: 'center',
                    children: (0, h.jsx)(a.Z, {
                      justifyContent: ['start', 'center', 'start'],
                      children: (0, h.jsx)(i.Z, {
                        width: [1, 8 / 12, 5 / 6],
                        children: (0, h.jsxs)(L.Z, {
                          paddingY: [8, 8, 10],
                          children: [
                            (0, h.jsx)(t.Z, {
                              variant: 'title',
                              marginBottom: 4,
                              children: V,
                            }),
                            (0, h.jsx)(Z.Z, { rawHtml: H }),
                            (0, h.jsx)(
                              o,
                              u(
                                u({}, (0, e.Z)(l)),
                                {},
                                {
                                  marginTop: 7,
                                  variant: 'white' === M ? 'purple' : 'white',
                                }
                              )
                            ),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, h.jsx)(i.Z, {
                    width: [1, 1, 0.5],
                    display: 'flex',
                    alignItems: 'center',
                    children: (0, h.jsx)(L.Z, {
                      width: '100%',
                      children: (0, h.jsx)(s.Z, {
                        asset: (0, e.Z)(p),
                        variant: 'imageStandardVariant',
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      function y(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function O(C) {
        var V = C.banners;
        return (0, h.jsx)(h.Fragment, {
          children: [].concat(V).map(function (C) {
            return (0, h.jsx)(
              g,
              (function (C) {
                for (var V = 1; V < arguments.length; V++) {
                  var H = null != arguments[V] ? arguments[V] : {};
                  V % 2
                    ? y(Object(H), !0).forEach(function (V) {
                        (0, l.Z)(C, V, H[V]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        C,
                        Object.getOwnPropertyDescriptors(H)
                      )
                    : y(Object(H)).forEach(function (V) {
                        Object.defineProperty(
                          C,
                          V,
                          Object.getOwnPropertyDescriptor(H, V)
                        );
                      });
                }
                return C;
              })({}, C),
              C.id
            );
          }),
        });
      }
      O.defaultProps = {};
      var m = O;
    },
    40694: function (C, V, H) {
      'use strict';
      var l = H(92809),
        t = H(10219),
        L = H(67294),
        B = H(48860),
        i = H(53290),
        a = H(58804),
        Z = H(75980),
        s = H(85893),
        M = ['children'];
      function p(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function e(C) {
        for (var V = 1; V < arguments.length; V++) {
          var H = null != arguments[V] ? arguments[V] : {};
          V % 2
            ? p(Object(H), !0).forEach(function (V) {
                (0, l.Z)(C, V, H[V]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(H))
            : p(Object(H)).forEach(function (V) {
                Object.defineProperty(
                  C,
                  V,
                  Object.getOwnPropertyDescriptor(H, V)
                );
              });
        }
        return C;
      }
      var d = (0, L.forwardRef)(function (C, V) {
        var H = C.children,
          l = (0, t.Z)(C, M);
        return (0,
        s.jsx)(r, e(e({ ref: V }, l), {}, { children: (0, s.jsx)(B.Z, { variant: 'eyebrow', children: H }) }));
      });
      d.defaultProps = {
        as: 'a',
        display: 'inline-block',
        paddingY: 4,
        paddingX: 6,
        borderRadius: 1,
        variant: 'purple',
      };
      var r = (0, a.ZP)(i.Z).withConfig({
        displayName: 'Button__Wrapper',
        componentId: 'sc-opf8cr-0',
      })(
        ['', ''],
        (0, Z.bU)({
          variants: {
            purple: {
              color: 'purple010',
              backgroundColor: 'purple100',
              '&:hover': { backgroundColor: 'purple090' },
            },
            white: {
              color: 'purple100',
              backgroundColor: 'purple010',
              '&:hover': { backgroundColor: 'purple020' },
            },
            muted: {
              backgroundColor: 'purple020',
              '&:hover': { backgroundColor: 'purple030' },
            },
          },
        })
      );
      V.Z = d;
    },
    84272: function (C, V, H) {
      'use strict';
      var l = H(92809),
        t = H(10219),
        L = (H(67294), H(53290)),
        B = H(25675),
        i = H(85893),
        a = ['asset', 'variant', 'className', 'priority', 'quality', 'wrap'];
      function Z(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function s(C) {
        for (var V = 1; V < arguments.length; V++) {
          var H = null != arguments[V] ? arguments[V] : {};
          V % 2
            ? Z(Object(H), !0).forEach(function (V) {
                (0, l.Z)(C, V, H[V]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(H))
            : Z(Object(H)).forEach(function (V) {
                Object.defineProperty(
                  C,
                  V,
                  Object.getOwnPropertyDescriptor(H, V)
                );
              });
        }
        return C;
      }
      var M = {
        imageDownloadVariant: 4 / 3,
        imageSquareVariant: 1,
        imageWidescreenVariant: 9 / 16,
      };
      function p(C) {
        var V = C.src;
        C.width, C.quality;
        return V.replace(
          'https://usprosperity.vercel.app/_s3/',
          'https://usprosperity.vercel.app/_s3/'
        );
      }
      V.Z = function (C) {
        var V,
          H = C.asset,
          l = C.variant,
          Z = (C.className, C.priority),
          e = C.quality,
          d = void 0 === e ? 100 : e,
          r = C.wrap,
          f = void 0 === r || r,
          h = (0, t.Z)(C, a);
        if (!H) return null;
        var j = H.title,
          x = H.width,
          n = H.height,
          o = H.focalPoint,
          c = void 0 === o ? [0.5, 0.5] : o,
          u = H.mimeType,
          b = null !== (V = M[l]) && void 0 !== V ? V : n / x,
          g = H.url.replace(
            'legatuminstitute-uspiwebsite.s3',
            'legatuminstitute-uspiwebsite-2.s3'
          ),
          y = 'image/svg+xml' === u || 'image/svg' === u;
        y && (f = !1);
        var O = y
            ? { width: x, height: n, unoptimized: !0 }
            : { layout: 'fill', objectFit: 'cover' },
          m = (0, i.jsx)(
            B.default,
            s(
              s(
                {
                  src: g,
                  alt: j,
                  objectPosition: c
                    .map(function (C) {
                      return ''.concat(100 * C, '%');
                    })
                    .join(' '),
                  priority: Z,
                  quality: d,
                },
                O
              ),
              {},
              { loader: p }
            )
          );
        return f
          ? (0, i.jsx)(
              L.Z,
              s(
                s(
                  {
                    position: 'relative',
                    paddingBottom: ''.concat(100 * b, '%'),
                    overflow: 'hidden',
                  },
                  h
                ),
                {},
                { children: m }
              )
            )
          : m;
      };
    },
    57294: function (C, V, H) {
      'use strict';
      H.d(V, {
        Z: function () {
          return i;
        },
      });
      var l = H(1469),
        t = H.n(l),
        L = H(8804),
        B = H.n(L);
      function i(C) {
        return t()(C) ? B()(C) : C;
      }
    },
    55188: function (C, V, H) {
      'use strict';
      H.r(V),
        H.d(V, {
          __N_SSG: function () {
            return D;
          },
          default: function () {
            return _;
          },
        });
      var l = H(92809),
        t = (H(67294), H(85893));
      function L() {
        return (0, t.jsxs)('svg', {
          viewBox: '0 0 865 227',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, t.jsx)('path', {
              d:
                'M513.125 63.2303H518.227L526.523 76.1241L534.821 63.2303H539.922V90.4956H535.133V70.9429L526.523 83.7966H526.368L517.84 71.0211V90.4956H513.125V63.2303',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d: 'M549.346 63.2303H554.134V90.4956H549.346V63.2303Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M563.469 63.2303H568.261V86.1335H582.594V90.4956H563.469V63.2303Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M589.219 63.2303H594.01V76.9411L606.98 63.2303H612.862L601.526 74.9541L613.367 90.4956H607.564L598.255 78.2254L594.01 82.5885V90.4956H589.219V63.2303',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M619.561 63.2303H639.776V67.5152H624.352V74.6042H638.022V78.8891H624.352V86.2107H639.969V90.4956H619.561V63.2303Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M647.879 63.2303H652.32L666.927 82.0822V63.2303H671.639V90.4956H667.627L652.594 71.0983V90.4956H647.879V63.2303Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M692.887 76.9412V76.863C692.887 69.1133 698.689 62.7632 706.946 62.7632C711.97 62.7632 715.01 64.5156 717.618 67.008L714.543 70.554C712.361 68.5278 710.024 67.1644 706.908 67.1644C701.688 67.1644 697.91 71.4503 697.91 76.7848V76.863C697.91 82.1996 701.688 86.5627 706.908 86.5627C710.256 86.5627 712.399 85.1992 714.736 83.0177L717.815 86.1336C714.972 89.0931 711.856 90.9629 706.752 90.9629C698.808 90.9629 692.887 84.7691 692.887 76.9412Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M724.676 63.2303H744.889V67.5152H729.465V74.6042H743.137V78.8891H729.465V86.2107H745.084V90.4956H724.676V63.2303',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M752.992 63.2303H757.431L772.038 82.0822V63.2303H776.751V90.4956H772.738L757.705 71.0983V90.4956H752.992V63.2303',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M792.062 67.6715H783.414V63.2303H805.537V67.6715H796.889V90.4956H792.062V67.6715Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M812.197 63.2303H832.413V67.5152H816.988V74.6042H830.661V78.8891H816.988V86.2107H832.61V90.4956H812.197V63.2303',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M852.318 76.7466C855.745 76.7466 857.926 74.9541 857.926 72.189V72.1108C857.926 69.1894 855.824 67.5934 852.279 67.5934H845.306V76.7466H852.318ZM840.518 63.2303H852.669C856.097 63.2303 858.784 64.2438 860.536 65.9572C861.976 67.4369 862.794 69.4631 862.794 71.8381V71.9174C862.794 76.3957 860.107 79.0836 856.291 80.1744L863.651 90.4956H858.005L851.306 80.9924H851.227H845.306V90.4956H840.518V63.2303',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M513.014 116.983H510.807V113.652H513.014V112.401C513.014 110.454 513.51 109.005 514.434 108.08C515.357 107.158 516.641 106.696 518.355 106.696C519.741 106.696 520.698 106.894 521.586 107.158V110.52C520.796 110.257 520.104 110.092 519.247 110.092C517.729 110.092 516.94 110.916 516.94 112.73V113.685H521.554V116.983H517.005V130.963H513.014V116.983',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M538.02 122.356V122.291C538.02 119.225 535.812 116.687 532.68 116.687C529.482 116.687 527.437 119.191 527.437 122.225V122.291C527.437 125.325 529.646 127.896 532.745 127.896C535.976 127.896 538.02 125.358 538.02 122.356V122.356ZM523.449 122.356V122.291C523.449 117.312 527.404 113.192 532.745 113.192C538.086 113.192 542.011 117.247 542.011 122.225V122.291C542.011 127.237 538.053 131.359 532.68 131.359C527.371 131.359 523.449 127.302 523.449 122.356',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M546.113 113.554H550.103V117.478C551.191 114.872 553.2 113.092 556.267 113.225V117.445H556.038C552.542 117.445 550.103 119.719 550.103 124.335V130.963H546.113V113.554Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M584.703 120.965L580.351 110.897L576.036 120.965H584.703ZM578.372 105.611H582.472L593.548 130.963H588.874L586.321 124.885H574.417L571.828 130.963H567.297L578.372 105.611Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M607.892 126.934C613.178 126.934 616.631 123.374 616.631 118.448V118.377C616.631 113.45 613.178 109.818 607.892 109.818H602.931V126.934H607.892ZM598.506 105.79H607.892C615.803 105.79 621.269 111.22 621.269 118.304V118.377C621.269 125.46 615.803 130.963 607.892 130.963H598.506V105.79',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M623.744 105.79H628.636L636.224 125.136L643.773 105.79H648.556L638.094 131.143H634.209L623.744 105.79',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M666.105 120.965L661.754 110.897L657.438 120.965H666.105ZM659.775 105.611H663.875L674.951 130.963H670.277L667.724 124.885H655.82L653.232 130.963H648.699L659.775 105.611Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M679.908 105.79H684.009L697.495 123.194V105.79H701.846V130.963H698.142L684.26 113.054V130.963H679.908V105.79',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M708.102 118.448V118.376C708.102 111.22 713.459 105.359 721.085 105.359C725.722 105.359 728.528 106.978 730.935 109.279L728.095 112.551C726.081 110.681 723.924 109.422 721.046 109.422C716.229 109.422 712.739 113.378 712.739 118.304V118.376C712.739 123.302 716.229 127.33 721.046 127.33C724.14 127.33 726.119 126.073 728.276 124.058L731.116 126.934C728.492 129.668 725.614 131.394 720.904 131.394C713.567 131.394 708.102 125.676 708.102 118.448',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d: 'M736.527 105.79H740.951V130.963H736.527V105.79',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M748.537 105.79H752.638L766.121 123.194V105.79H770.473V130.963H766.769L752.889 113.054V130.963H748.537V105.79',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M776.725 118.448V118.376C776.725 111.328 782.12 105.359 789.708 105.359C794.095 105.359 796.791 106.581 799.381 108.775L796.574 112.119C794.634 110.466 792.728 109.422 789.528 109.422C784.889 109.422 781.363 113.485 781.363 118.304V118.376C781.363 123.554 784.779 127.367 789.924 127.367C792.296 127.367 794.454 126.611 796.001 125.46V120.75H789.563V116.902H800.281V127.475C797.799 129.595 794.237 131.394 789.78 131.394C781.905 131.394 776.725 125.784 776.725 118.448',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M815.808 126.149V116.983H813.6V113.554H815.808V108.773H819.798V113.554H824.481V116.983H819.798V125.521C819.798 127.071 820.588 127.699 821.942 127.699C822.832 127.699 823.623 127.5 824.415 127.104V130.369C823.426 130.929 822.305 131.258 820.821 131.258C817.886 131.258 815.808 129.973 815.808 126.149Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M828.537 106.894H832.525V116.257C833.645 114.609 835.261 113.192 837.966 113.192C841.888 113.192 844.163 115.83 844.163 119.884V130.963H840.175V121.071C840.175 118.368 838.822 116.818 836.45 116.818C834.14 116.818 832.525 118.433 832.525 121.137V130.963H828.537V106.894',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M861.039 121.038C860.778 118.467 859.26 116.456 856.623 116.456C854.182 116.456 852.467 118.334 852.104 121.038H861.039ZM848.148 122.324V122.258C848.148 117.28 851.678 113.192 856.656 113.192C862.196 113.192 864.997 117.543 864.997 122.555C864.997 122.918 864.965 123.281 864.932 123.675H852.14C852.567 126.511 854.579 128.094 857.15 128.094C859.096 128.094 860.479 127.368 861.865 126.016L864.205 128.094C862.557 130.072 860.282 131.359 857.085 131.359C852.038 131.359 848.148 127.699 848.148 122.324',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M528.104 161.43L523.753 151.362L519.437 161.43H528.104ZM521.776 146.076H525.874L536.952 171.427H532.275L529.723 165.35H517.819L515.231 171.427H510.699L521.776 146.076',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M540.877 146.254H545.589L553.248 158.159L560.907 146.254H565.619V171.427H561.197V153.375L553.248 165.242H553.103L545.229 153.448V171.427H540.877V146.254Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M572.986 146.254H591.649V150.212H577.409V156.756H590.031V160.711H577.409V167.472H591.829V171.427H572.986V146.254',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M608.819 158.734C611.981 158.734 613.996 157.079 613.996 154.525V154.455C613.996 151.757 612.055 150.282 608.783 150.282H602.346V158.734H608.819ZM597.922 146.254H609.141C612.306 146.254 614.789 147.19 616.407 148.773C617.734 150.139 618.492 152.009 618.492 154.201V154.274C618.492 158.41 616.011 160.891 612.487 161.898L619.281 171.427H614.067L607.884 162.654H607.81H602.346V171.427H597.922V146.254',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d: 'M625.582 146.254H630.008V171.427H625.582V146.254Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M636.195 158.913V158.841C636.195 151.684 641.556 145.823 649.179 145.823C653.818 145.823 656.621 147.442 659.033 149.744L656.19 153.016C654.178 151.146 652.02 149.888 649.143 149.888C644.325 149.888 640.836 153.843 640.836 158.77V158.841C640.836 163.767 644.325 167.795 649.143 167.795C652.234 167.795 654.213 166.536 656.37 164.523L659.21 167.4C656.586 170.133 653.711 171.858 648.999 171.858C641.663 171.858 636.195 166.141 636.195 158.913',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M677.81 161.43L673.458 151.362L669.143 161.43H677.81ZM671.479 146.076H675.58L686.654 171.427H681.98L679.428 165.35H667.524L664.936 171.427H660.404L671.479 146.076Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M691.436 146.254H695.536L709.019 163.661V146.254H713.37V171.427H709.667L695.788 153.519V171.427H691.436V146.254Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M741.039 167.4C746.325 167.4 749.776 163.839 749.776 158.913V158.841C749.776 153.915 746.325 150.282 741.039 150.282H736.075V167.4H741.039ZM731.652 146.254H741.039C748.948 146.254 754.415 151.684 754.415 158.77V158.841C754.415 165.925 748.948 171.427 741.039 171.427H731.652V146.254Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M770.28 158.734C773.444 158.734 775.459 157.079 775.459 154.525V154.455C775.459 151.757 773.515 150.282 770.242 150.282H763.806V158.734H770.28ZM759.383 146.254H770.604C773.768 146.254 776.249 147.19 777.866 148.773C779.197 150.139 779.951 152.009 779.951 154.201V154.274C779.951 158.41 777.472 160.891 773.947 161.898L780.744 171.427H775.529L769.344 162.654H769.273H763.806V171.427H759.383V146.254',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M786.146 146.254H804.809V150.212H790.569V156.756H803.191V160.711H790.569V167.472H804.989V171.427H786.146V146.254Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M826.541 161.43L822.189 151.362L817.876 161.43H826.541ZM820.213 146.076H824.312L835.389 171.427H830.712L828.159 165.35H816.258L813.666 171.427H809.137L820.213 146.076',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M840.166 146.254H844.878L852.536 158.159L860.195 146.254H864.907V171.427H860.482V153.375L852.536 165.242H852.391L844.516 153.448V171.427H840.166V146.254Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M400.687 198.784V198.684H400.487V198.584H400.186V198.483H399.986V198.383H399.785V198.283H399.484V198.183H399.284V198.082H399.083V197.982H398.783V197.882H398.582V197.782H398.381V197.681H398.081V197.581H397.88V197.481H397.579V197.381H397.379V197.28H397.178V197.18H396.878V197.08H396.677V196.98H396.477V196.879H396.176V196.779H395.975V196.679H395.775V196.579H395.474V196.478H395.274V196.378H394.973V196.278H394.772V196.178H394.572V196.077H394.271V195.977H394.071V195.877H393.87V195.777H393.569V195.676H393.369V195.576H393.068V195.476H392.867V195.376H392.667V195.275H392.366V195.175H392.166V195.075H391.965V194.974H391.664V194.874H391.464V194.774H391.263V194.674H390.963V194.573H390.762V194.473H390.461V194.373H390.261V194.273H390.06V194.172H389.76V194.072H389.559V193.972H389.359V193.872H389.058V193.771H388.857V193.671H388.556V193.571H388.356V193.471H388.155V193.37H387.855V193.27H387.654V193.17H387.454V193.07H387.153V192.969H386.952V192.869H386.752V192.769H386.451V192.669H386.251V192.568H385.95V192.468H385.749V192.368H385.549V192.268H385.449V192.167H385.348V136.025H385.449V135.924H385.549V135.824H385.649V135.724H385.749V135.624H385.85V135.523H386.05V135.423H386.15V135.323H386.251V135.222H386.351V135.122H386.451V135.022H386.652V134.922H386.752V134.821H386.852V134.721H386.952V134.621H387.053V134.521H387.153V134.42H387.353V134.32H387.454V134.22H387.554V134.12H387.654V134.019H387.754V133.919H387.855V133.819H388.055V133.719H388.155V133.618H388.256V133.518H388.356V133.418H388.456V133.318H388.556V133.217H388.657V133.117H388.857V133.017H388.958V132.917H389.058V132.816H389.158V132.716H389.258V132.616H389.359V132.516H389.559V132.415H389.659V132.315H389.76V132.215H389.86V132.115H389.96V132.014H390.06V131.914H390.161V131.814H390.261V131.714H390.361V131.613H390.461V131.513H390.662V131.413H390.762V131.313H390.862V131.212H390.963V131.112H391.063V131.012H391.163V130.912H391.263V130.811H391.364V130.711H391.464V130.611H391.564V130.511H391.664V130.41H391.865V130.31H391.965V130.21H392.065V130.109H392.166V130.009H392.266V129.909H392.366V129.809H392.466V129.708H392.567V129.608H392.667V129.508H392.767V129.408H392.867V129.307H393.068V129.207H393.168V129.107H393.268V129.007H393.369V128.906H393.469V128.806H393.569V128.706H393.67V128.606H393.77V128.505H393.87V128.405H393.97V128.305H394.071V128.205H394.171V128.104H394.271V128.004H394.371V127.904H394.472V127.804H394.572V127.703H394.672V127.603H394.772V127.503H394.873V127.403H394.973V127.302H395.073V127.202H395.173V127.102H395.274V127.002H395.374V126.901H395.474V126.801H395.574V126.701H395.675V126.601H395.775V126.5H395.875V126.4H395.975V126.3H396.076V126.2H396.176V126.099H396.276V125.999H396.376V125.899H396.577V125.799H396.677V125.698H396.777V125.598H396.878V125.498H396.978V125.397H397.078V125.297H397.178V125.197H397.279V125.097H397.379V124.896H397.479V124.796H397.579V124.696H397.68V124.595H397.78V124.495H397.88V124.395H397.98V124.295H398.081V124.194H398.181V124.094H398.281V123.994H398.381V123.894H398.482V123.793H398.582V123.693H398.682V123.593H398.783V123.493H398.883V123.392H398.983V123.292H399.083V123.192H399.184V123.092H399.284V122.991H399.384V122.891H399.484V122.791H399.585V122.691H399.685V122.59H399.785V122.49H399.885V122.39H399.986V122.189H400.086V122.089H400.186V121.989H400.286V121.889H400.387V121.788H400.487V121.688H400.587V121.588H400.687V121.488H400.888V121.387H401.289V121.488H401.489V121.588H401.59V121.688H401.69V198.483H401.59V198.584H401.489V198.684H401.389V198.784H400.687ZM410.111 198.784V198.684H410.011V198.584H409.911V198.483H409.811V110.76H409.911V110.56H410.011V110.359H410.111V110.259H410.212V110.159H410.312V109.958H410.412V109.858H410.512V109.758H410.613V109.657H410.713V109.457H410.813V109.357H410.913V109.256H411.014V109.056H411.114V108.956H411.214V108.755H411.314V108.655H411.415V108.555H411.515V108.354H411.615V108.254H411.715V108.154H411.816V107.953H411.916V107.853H412.016V107.652H412.116V107.552H412.217V107.452H412.317V107.251H412.417V107.151H412.517V107.051H412.618V106.85H412.718V106.75H412.818V106.55H412.918V106.449H413.019V106.349H413.119V106.149H413.219V106.048H413.319V105.848H413.42V105.748H413.52V105.647H413.62V105.447H413.721V105.346H413.821V105.246H413.921V105.046H414.021V104.945H414.122V104.745H414.222V104.645H414.322V104.444H414.422V104.344H414.523V104.143H414.623V104.043H414.723V103.843H414.823V103.742H414.924V103.542H415.024V103.442H415.124V103.241H415.224V103.141H415.325V102.94H415.425V102.84H415.525V102.64H415.625V102.539H415.726V102.439H415.826V102.239H415.926V102.138H416.026V101.938H416.127V101.838H416.227V101.637H416.327V101.537H416.427V101.336H416.528V101.236H416.628V101.036H416.728V100.935H416.828V100.735H416.929V100.635H417.029V100.434H417.129V100.334H417.229V100.133H417.33V100.033H417.43V99.8325H417.53V99.7322H417.63V99.5317H417.731V99.4314H417.831V99.2309H417.931V99.1307H418.031V98.9302H418.132V98.8299H418.232V98.6294H418.332V98.4289H418.432V98.3286H418.533V98.1281H418.633V97.9276H418.733V97.8274H418.834V97.6269H418.934V97.5266H419.034V97.3261H419.134V97.1256H419.235V97.0253H419.335V96.8248H419.435V96.6243H419.535V96.5241H419.636V96.3235H419.736V96.2233H419.836V96.0228H419.936V95.8223H420.037V95.722H420.137V95.5215H420.237V95.321H420.337V95.2207H420.438V95.0202H420.538V94.92H420.638V94.7195H420.738V94.519H420.839V94.4187H420.939V94.2182H421.039V94.0177H421.139V93.9174H421.24V93.7169H421.34V93.6167H421.44V93.4161H421.54V93.2156H421.641V93.1154H421.741V92.9149H421.841V92.7144H421.941V92.5139H422.042V92.4136H422.142V92.2131H422.242V92.0126H422.342V91.8121H422.443V91.7118H422.543V91.5113H422.643V91.3108H422.743V91.1103H422.844V91.01H422.944V90.8095H423.044V90.609H423.144V90.4085H423.245V90.3082H423.345V90.1077H423.445V89.9072H423.545V89.7067H423.646V89.6065H423.746V89.4059H423.846V89.2054H423.947V89.0049H424.047V88.9047H424.147V88.7042H424.247V88.5036H424.348V88.3031H424.448V88.1026H424.548V87.9021H424.648V87.8019H424.749V87.6014H424.849V87.4008H424.949V87.2003H425.049V86.9998H425.15V86.8996H425.35V86.7993H425.952V86.8996H426.052V86.9998H426.152V87.2003H426.252V173.921H426.353V174.021H426.453V174.121H427.054V174.021H427.255V173.921H427.556V173.821H427.756V173.72H427.957V173.62H428.257V173.52H428.458V173.42H428.759V173.319H428.959V173.219H429.16V173.119H429.461V173.019H429.661V172.918H429.862V172.818H430.162V172.718H430.363V172.618H430.563V172.517H430.864V172.417H431.065V172.317H431.365V172.217H431.566V172.116H431.766V172.016H432.067V171.916H432.268V171.816H432.468V171.715H432.769V171.615H432.969V171.515H433.27V171.415H433.471V171.314H433.671V171.214H433.972V171.114H434.173V171.014H434.373V170.913H434.674V170.813H434.874V170.713H435.075V170.613H435.376V170.512H435.576V170.412H435.877V170.312H436.077V170.211H436.278V170.111H436.579V170.011H436.779V169.911H436.98V169.81H437.28V169.71H437.481V169.61H437.681V169.51H437.982V169.409H438.183V169.309H438.483V169.209H438.684V169.109H438.885V169.008H439.185V168.908H439.386V168.808H439.586V168.708H439.887V168.607H440.088V168.507H440.288V168.407H440.589V168.307H440.789V168.206H441.09V168.106H441.291V168.006H441.491V167.906H441.792V167.805H441.992V167.705H442.193V167.605H442.494V167.505H442.694V167.404H442.995V167.304H443.195V167.204H443.396V167.104H443.697V167.003H443.897V166.903H444.098V166.803H444.399V166.703H444.599V166.602H444.8V166.502H445.1V166.402H445.301V166.302H445.602V166.201H445.802V166.101H446.003V166.001H446.303V165.901H446.504V165.8H446.704V165.7H447.005V165.6H447.206V165.5H447.406V165.399H447.707V165.299H447.907V165.199H448.208V165.098H448.409V164.998H448.609V164.898H448.91V164.798H449.111V164.697H449.311V164.597H449.612V164.497H449.812V164.397H450.113V164.296H450.314V164.196H450.514V164.096H450.815V163.996H451.015V163.895H451.216V163.795H451.517V163.695H451.717V163.595H451.918V163.494H452.218V163.394H452.419V163.294H452.72V163.194H452.92V163.093H453.121V162.993H453.421V162.893H453.622V162.793H453.823V162.692H454.123V162.592H454.324V162.492H454.524V162.392H454.825V162.291H455.026V162.191H455.326V162.091H455.527V161.991H455.727V161.89H456.028V161.79H456.229V161.69H456.429V161.59H456.73V161.489H456.93V161.389H457.231V161.289H457.432V161.189H457.632V161.088H457.933V160.988H458.133V160.888H458.334V160.788H458.635V160.687H458.835V160.587H459.036V160.487H459.337V160.387H459.537V160.286H459.838V160.186H460.038V160.086H460.239V159.985H460.54V159.885H460.74V159.785H460.941V159.685H461.241V159.584H461.442V159.484H461.642V159.384H461.943V159.284H462.144V159.183H462.444V159.083H462.645V158.983H462.845V158.883H463.146V158.782H463.347V158.682H463.547V158.582H463.848V158.482H464.049V158.381H464.349V158.281H464.55V158.181H464.75V158.081H465.051V157.98H465.252V157.88H465.452V157.78H465.753V157.68H465.953V157.579H466.154V157.479H466.455V157.379H466.655V157.279H466.956V157.178H467.156V157.078H467.357V156.978H467.658V156.878H467.858V156.777H468.059V156.677H468.359V156.577H468.56V156.477H468.761V156.376H469.061V156.276H469.262V156.176H469.563V156.076H469.763V155.975H469.964V155.875H470.264V155.775H470.465V155.675H470.665V155.574H470.966V155.474H471.167V155.374H471.367V155.273H471.668V155.173H471.868V155.073H472.169V154.973H472.37V154.872H472.57V154.772H472.871V154.672H473.071V154.572H473.272V154.471H473.573V154.371H473.773V154.271H474.074V154.171H474.275V154.07H474.475V153.97H474.776V153.87H474.976V153.77H475.177V153.669H475.478V153.569H475.678V153.469H475.879V153.369H476.179V153.268H476.38V153.168H476.681V153.068H476.881V152.968H477.082V152.867H477.382V152.767H477.583V152.667H477.783V152.567H478.084V152.466H478.285V152.366H478.485V152.266H478.786V152.166H478.987V152.065H479.287V151.965H479.488V151.865H479.688V151.765H479.989V151.664H480.19V151.564H480.39V151.464H480.691V151.364H480.891V151.263H481.192V151.163H481.393V151.063H481.593V150.963H481.894V150.862H482.094V150.762H482.295V150.662H482.596V150.562H482.796V150.461H482.997V150.361H483.297V150.261H483.498V150.16H483.799V150.06H483.999V149.96H484.2V149.86H484.501V149.759H484.701V149.659H484.902V149.559H485.202V149.459H485.804V149.559H485.904V149.659H486.004V149.759H486.105V166.803H486.004V166.903H485.904V167.003H485.804V167.104H485.603V167.204H485.403V167.304H485.102V167.404H484.902V167.505H484.701V167.605H484.4V167.705H484.2V167.805H483.999V167.906H483.699V168.006H483.498V168.106H483.297V168.206H482.997V168.307H482.796V168.407H482.495V168.507H482.295V168.607H482.094V168.708H481.794V168.808H481.593V168.908H481.393V169.008H481.092V169.109H480.891V169.209H480.591V169.309H480.39V169.409H480.19V169.51H479.889V169.61H479.688V169.71H479.488V169.81H479.187V169.911H478.987V170.011H478.786V170.111H478.485V170.211H478.285V170.312H477.984V170.412H477.783V170.512H477.583V170.613H477.282V170.713H477.082V170.813H476.881V170.913H476.58V171.014H476.38V171.114H476.079V171.214H475.879V171.314H475.678V171.415H475.377V171.515H475.177V171.615H474.976V171.715H474.676V171.816H474.475V171.916H474.275V172.016H473.974V172.116H473.773V172.217H473.472V172.317H473.272V172.417H473.071V172.517H472.771V172.618H472.57V172.718H472.37V172.818H472.069V172.918H471.868V173.019H471.568V173.119H471.367V173.219H471.167V173.319H470.866V173.42H470.665V173.52H470.465V173.62H470.164V173.72H469.964V173.821H469.763V173.921H469.462V174.021H469.262V174.121H468.961V174.222H468.761V174.322H468.56V174.422H468.259V174.522H468.059V174.623H467.858V174.723H467.557V174.823H467.357V174.923H467.156V175.024H466.856V175.124H466.655V175.224H466.354V175.325H466.154V175.425H465.953V175.525H465.653V175.625H465.452V175.726H465.252V175.826H464.951V175.926H464.75V176.026H464.45V176.127H464.249V176.227H464.049V176.327H463.748V176.427H463.547V176.528H463.347V176.628H463.046V176.728H462.845V176.828H462.645V176.929H462.344V177.029H462.144V177.129H461.843V177.229H461.642V177.33H461.442V177.43H461.141V177.53H460.941V177.63H460.74V177.731H460.439V177.831H460.239V177.931H459.938V178.031H459.738V178.132H459.537V178.232H459.236V178.332H459.036V178.432H458.835V178.533H458.534V178.633H458.334V178.733H458.133V178.833H457.833V178.934H457.632V179.034H457.331V179.134H457.131V179.234H456.93V179.335H456.63V179.435H456.429V179.535H456.229V179.635H455.928V179.736H455.727V179.836H455.427V179.936H455.226V180.036H455.026V180.137H454.725V180.237H454.524V180.337H454.324V180.438H454.023V180.538H453.823V180.638H453.622V180.738H453.321V180.839H453.121V180.939H452.82V181.039H452.619V181.139H452.419V181.24H452.118V181.34H451.918V181.44H451.717V181.54H451.416V181.641H451.216V181.741H451.015V181.841H450.715V181.941H450.514V182.042H450.213V182.142H450.013V182.242H449.812V182.342H449.512V182.443H449.311V182.543H449.111V182.643H448.81V182.743H448.609V182.844H448.308V182.944H448.108V183.044H447.907V183.144H447.607V183.245H447.406V183.345H447.206V183.445H446.905V183.545H446.704V183.646H446.504V183.746H446.203V183.846H446.003V183.946H445.702V184.047H445.501V184.147H445.301V184.247H445V184.347H444.8V184.448H444.599V184.548H444.298V184.648H444.098V184.748H443.797V184.849H443.596V184.949H443.396V185.049H443.095V185.149H442.895V185.25H442.694V185.35H442.393V185.45H442.193V185.551H441.992V185.651H441.692V185.751H441.491V185.851H441.19V185.952H440.99V186.052H440.789V186.152H440.489V186.252H440.288V186.353H440.088V186.453H439.787V186.553H439.586V186.653H439.286V186.754H439.085V186.854H438.885V186.954H438.584V187.054H438.383V187.155H438.183V187.255H437.882V187.355H437.681V187.455H437.481V187.556H437.18V187.656H436.98V187.756H436.679V187.856H436.478V187.957H436.278V188.057H435.977V188.157H435.777V188.257H435.576V188.358H435.275V188.458H435.075V188.558H434.874V188.658H434.574V188.759H434.373V188.859H434.072V188.959H433.872V189.059H433.671V189.16H433.37V189.26H433.17V189.36H432.969V189.46H432.669V189.561H432.468V189.661H432.167V189.761H431.967V189.861H431.766V189.962H431.466V190.062H431.265V190.162H431.065V190.263H430.764V190.363H430.563V190.463H430.363V190.563H430.062V190.664H429.862V190.764H429.561V190.864H429.36V190.964H429.16V191.065H428.859V191.165H428.659V191.265H428.458V191.365H428.157V191.466H427.957V191.566H427.656V191.666H427.455V191.766H427.255V191.867H426.954V191.967H426.754V192.067H426.553V192.167H426.252V192.268H426.052V192.368H425.851V192.468H425.551V192.568H425.35V192.669H425.049V192.769H424.849V192.869H424.648V192.969H424.348V193.07H424.147V193.17H423.947V193.27H423.646V193.37H423.445V193.471H423.144V193.571H422.944V193.671H422.743V193.771H422.443V193.872H422.242V193.972H422.042V194.072H421.741V194.172H421.54V194.273H421.34V194.373H421.039V194.473H420.839V194.573H420.538V194.674H420.337V194.774H420.137V194.874H419.836V194.974H419.636V195.075H419.435V195.175H419.134V195.275H418.934V195.376H418.733V195.476H418.432V195.576H418.232V195.676H417.931V195.777H417.731V195.877H417.53V195.977H417.229V196.077H417.029V196.178H416.828V196.278H416.528V196.378H416.327V196.478H416.026V196.579H415.826V196.679H415.625V196.779H415.325V196.879H415.124V196.98H414.924V197.08H414.623V197.18H414.422V197.28H414.222V197.381H413.921V197.481H413.721V197.581H413.42V197.681H413.219V197.782H413.019V197.882H412.718V197.982H412.517V198.082H412.317V198.183H412.016V198.283H411.816V198.383H411.515V198.483H411.314V198.584H411.114V198.684H410.813V198.784H410.111ZM370.811 186.152V186.052H370.611V185.952H370.31V185.851H370.11V185.751H369.809V185.651H369.608V185.551H369.408V185.45H369.107V185.35H368.907V185.25H368.706V185.149H368.405V185.049H368.205V184.949H367.904V184.849H367.703V184.748H367.503V184.648H367.202V184.548H367.002V184.448H366.801V184.347H366.5V184.247H366.3V184.147H366.099V184.047H365.799V183.946H365.598V183.846H365.297V183.746H365.097V183.646H364.896V183.545H364.596V183.445H364.395V183.345H364.195V183.245H363.894V183.144H363.693V183.044H363.392V182.944H363.192V182.844H362.991V182.743H362.691V182.643H362.49V182.543H362.29V182.443H361.989V182.342H361.788V182.242H361.588V182.142H361.287V182.042H361.087V181.941H360.786V181.841H360.585V181.741H360.385V181.641H360.084V181.54H359.884V181.44H359.683V181.34H359.382V181.24H359.182V181.139H358.981V181.039H358.681V180.939H358.48V180.839H358.179V180.738H357.979V180.638H357.778V180.538H357.477V180.438H357.277V180.337H357.076V180.237H356.776V180.137H356.575V180.036H356.274V179.936H356.074V179.836H355.873V179.736H355.673V179.635H355.573V179.535H355.472V179.435H355.372V155.675H355.472V155.474H355.573V155.374H355.673V155.273H355.873V155.173H356.074V155.073H356.274V154.973H356.475V154.872H356.675V154.772H356.876V154.672H357.076V154.572H357.277V154.471H357.477V154.371H357.578V154.271H357.778V154.171H357.979V154.07H358.179V153.97H358.38V153.87H358.58V153.77H358.681V153.669H358.881V153.569H359.082V153.469H359.282V153.369H359.483V153.268H359.583V153.168H359.783V153.068H359.984V152.968H360.184V152.867H360.385V152.767H360.585V152.667H360.686V152.567H360.886V152.466H361.087V152.366H361.287V152.266H361.488V152.166H361.588V152.065H361.788V151.965H361.989V151.865H362.189V151.765H362.39V151.664H362.59V151.564H362.691V151.464H362.891V151.364H363.092V151.263H363.292V151.163H363.493V151.063H363.593V150.963H363.794V150.862H363.994V150.762H364.094V150.662H364.295V150.562H364.495V150.461H364.596V150.361H364.796V150.261H364.997V150.16H365.097V150.06H365.297V149.96H365.398V149.86H365.598V149.759H365.799V149.659H365.899V149.559H366.099V149.459H366.3V149.358H366.4V149.258H366.601V149.158H366.801V149.058H366.901V148.957H367.102V148.857H367.302V148.757H367.403V148.657H367.603V148.556H367.804V148.456H367.904V148.356H368.104V148.256H368.305V148.155H368.405V148.055H368.606V147.955H368.806V147.855H368.907V147.754H369.107V147.654H369.308V147.554H369.408V147.454H369.608V147.353H369.709V147.253H369.909V147.153H370.11V147.053H370.21V146.952H370.41V146.852H370.511V146.752H370.711V146.652H370.811V146.551H371.413V146.652H371.613V146.752H371.714V185.952H371.613V186.052H371.413V186.152H370.811ZM340.935 173.52V173.42H340.635V173.319H340.434V173.219H340.133V173.119H339.933V173.019H339.732V172.918H339.432V172.818H339.231V172.718H339.031V172.618H338.73V172.517H338.529V172.417H338.329V172.317H338.028V172.217H337.827V172.116H337.527V172.016H337.326V171.916H337.126V171.816H336.825V171.715H336.624V171.615H336.424V171.515H336.123V171.415H335.923V171.314H335.622V171.214H335.421V171.114H335.221V171.014H334.92V170.913H334.72V170.813H334.519V170.713H334.218V170.613H334.018V170.512H333.817V170.412H333.516V170.312H333.316V170.211H333.015V170.111H332.815V170.011H332.614V169.911H332.313V169.81H332.113V169.71H331.912V169.61H331.612V169.51H331.411V169.409H331.211V169.309H330.91V169.209H330.709V169.109H330.409V169.008H330.208V168.908H330.008V168.808H329.707V168.708H329.506V168.607H329.306V168.507H329.005V168.407H328.805V168.307H328.504V168.206H328.303V168.106H328.103V168.006H327.802V167.906H327.601V167.805H327.401V167.705H327.1V167.605H326.9V167.505H326.799V167.404H327.1V167.304H327.401V167.204H327.702V167.104H328.002V167.003H328.303V166.903H328.504V166.803H328.805V166.703H329.105V166.602H329.406V166.502H329.607V166.402H329.907V166.302H330.208V166.201H330.509V166.101H330.81V166.001H331.01V165.901H331.311V165.8H331.612V165.7H331.912V165.6H332.113V165.5H332.414V165.399H332.714V165.299H333.015V165.199H333.316V165.098H333.516V164.998H333.817V164.898H334.118V164.798H334.319V164.697H334.619V164.597H334.82V164.497H335.121V164.397H335.421V164.296H335.622V164.196H335.923V164.096H336.123V163.996H336.424V163.895H336.624V163.795H336.925V163.695H337.126V163.595H337.426V163.494H337.727V163.394H337.928V163.294H338.228V163.194H338.429V163.093H338.73V162.993H338.93V162.893H339.231V162.793H339.432V162.692H339.732V162.592H340.033V162.492H340.234V162.392H340.434V162.291H340.735V162.191H340.935V162.091H341.437V162.191H341.637V162.291H341.737V162.492H341.838V173.119H341.737V173.319H341.637V173.42H341.437V173.52H340.935ZM325.897 166.703V166.602H325.697V166.502H325.596V166.402H325.496V67.0491H325.596V66.9488H325.697V66.8486H325.797V66.7483H325.997V66.6481H326.198V66.5478H326.398V66.4475H326.599V66.3473H326.799V66.247H326.9V66.1468H327.1V66.0465H327.301V65.9463H327.501V65.846H327.702V65.7458H327.902V65.6455H328.103V65.5452H328.303V65.445H328.504V65.3447H328.704V65.2445H328.905V65.1442H329.105V65.044H329.306V64.9437H329.406V64.8435H329.607V64.7432H329.807V64.643H330.008V64.5427H330.208V64.4424H330.409V64.3422H330.609V64.2419H330.81V64.1417H331.01V64.0414H331.211V63.9412H331.411V63.8409H331.612V63.7407H331.812V63.6404H331.912V63.5401H332.113V63.4399H332.313V63.3396H332.514V63.2394H332.714V63.1391H332.915V63.0389H333.115V62.9386H333.316V62.8384H333.516V62.7381H333.717V62.6379H333.918V62.5376H334.118V62.4373H334.319V62.3371H334.419V62.2368H334.619V62.1366H334.82V62.0363H335.02V61.9361H335.221V61.8358H335.421V61.7356H335.622V61.6353H335.822V61.535H336.023V61.4348H336.223V61.3345H336.424V61.2343H336.624V61.134H336.725V61.0338H336.925V60.9335H337.126V60.8333H337.326V60.733H337.527V60.6328H337.727V60.5325H337.928V60.4322H338.128V60.332H338.329V60.2317H338.529V60.1315H338.73V60.0312H338.93V59.931H339.131V59.8307H339.231V59.7305H339.432V59.6302H339.632V59.5299H339.833V59.4297H340.033V59.3294H340.234V59.2292H340.434V59.1289H340.635V59.0287H340.835V58.9284H341.036V58.8282H341.236V58.7279H341.437V58.6277H341.637V58.5274H341.737V58.4271H341.938V58.3269H342.138V58.2266H342.339V58.1264H342.539V58.0261H342.74V57.9259H342.94V57.8256H343.141V57.7254H343.341V57.6251H343.542V57.5248H343.743V57.4246H343.943V57.3243H344.144V57.2241H344.244V57.1238H344.444V57.0236H344.645V56.9233H344.845V56.8231H345.046V56.7228H345.246V56.6226H345.447V56.5223H345.647V56.422H345.848V56.3218H346.048V56.2215H346.249V56.1213H346.449V56.021H346.55V55.9208H346.75V55.8205H346.951V55.7203H347.151V55.62H347.352V55.5197H347.552V55.4195H347.753V55.3192H347.953V55.219H348.154V55.1187H348.354V55.0185H348.555V54.9182H348.755V54.818H348.956V54.7177H349.056V54.6175H349.257V54.5172H349.457V54.4169H349.658V54.3167H349.858V54.2164H350.059V54.1162H350.259V54.0159H350.46V53.9157H350.66V53.8154H350.861V53.7152H351.061V53.6149H351.262V53.5146H351.462V53.4144H351.562V53.3141H351.763V53.2139H351.963V53.1136H352.164V53.0134H352.364V52.9131H352.565V52.8129H352.765V52.7126H352.966V52.6123H353.166V52.5121H353.367V52.4118H353.567V52.3116H353.768V52.2113H353.969V52.1111H354.069V52.0108H354.269V51.9106H354.47V51.8103H354.67V51.7101H354.871V51.6098H355.071V51.5095H355.272V51.4093H355.472V51.309H355.673V51.2088H355.873V51.1085H356.074V51.0083H356.274V50.908H356.475V50.8078H356.575V50.7075H356.776V50.6072H356.976V50.507H357.177V50.4067H357.377V50.3065H357.578V50.2062H357.778V50.106H357.979V50.0057H358.179V49.9055H358.38V49.8052H358.58V49.705H358.781V49.6047H358.881V49.5044H359.082V49.4042H359.282V49.3039H359.483V49.2037H359.683V49.1034H359.884V49.0032H360.084V48.9029H360.285V48.8027H360.485V48.7024H360.686V48.6021H360.886V48.5019H361.087V48.4016H361.287V48.3014H361.387V48.2011H361.588V48.1009H361.788V48.0006H361.989V47.9004H362.189V47.8001H362.39V47.6999H362.59V47.5996H362.791V47.4993H362.991V47.3991H363.192V47.2988H363.392V47.1986H363.593V47.0983H363.794V46.9981H363.894V46.8978H364.094V46.7976H364.295V46.6973H364.495V46.597H364.696V46.4968H364.896V46.3965H365.097V46.2963H365.297V46.196H365.498V46.0958H365.698V45.9955H365.899V45.8953H366.099V45.795H366.3V45.6948H366.4V45.5945H366.601V45.4942H366.801V45.394H367.002V45.2937H367.202V45.1935H367.403V45.0932H367.603V44.993H367.804V44.8927H368.004V44.7925H368.205V44.6922H368.405V44.5919H368.606V44.4917H368.806V44.3914H368.907V44.2912H369.107V44.1909H369.308V44.0907H369.508V43.9904H369.709V43.8902H369.909V43.7899H370.11V43.6897H370.31V43.5894H370.511V43.4891H370.711V43.3889H370.912V43.2886H371.112V43.1884H371.212V43.0881H371.413V42.9879H371.613V42.8876H371.814V42.7874H372.014V42.6871H372.215V42.5868H372.415V42.4866H372.616V42.3863H372.816V42.2861H373.017V42.1858H373.217V42.0856H373.418V41.9853H373.618V41.8851H373.719V41.7848H373.919V41.6846H374.12V41.5843H374.32V41.484H374.521V41.3838H374.721V41.2835H374.922V41.1833H375.122V41.083H375.323V40.9828H375.523V40.8825H375.724V40.7823H375.924V40.682H376.125V40.5817H376.225V40.4815H376.426V40.3812H376.626V40.281H376.827V40.1807H377.027V40.0805H377.228V39.9802H377.428V39.88H377.629V39.7797H377.829V39.6795H378.03V39.5792H378.23V39.4789H378.431V39.3787H378.631V39.2784H378.732V39.1782H378.932V39.0779H379.133V38.9777H379.333V38.8774H379.534V38.7772H379.734V38.6769H379.935V38.5766H380.135V38.4764H380.336V38.3761H380.536V38.2759H380.737V38.1756H380.937V38.0754H381.138V37.9751H381.238V37.8749H381.438V37.7746H381.639V37.6744H381.839V37.5741H382.04V37.4738H382.24V37.3736H382.441V37.2733H382.641V37.1731H382.842V37.0728H383.042V36.9726H383.243V36.8723H383.443V36.7721H383.544V36.6718H383.744V36.5715H383.945V36.4713H384.145V36.371H384.346V36.2708H384.546V36.1705H384.747V36.0703H384.947V35.97H385.148V35.8698H385.348V35.7695H385.549V35.6693H385.749V35.569H385.95V35.4687H386.05V35.3685H386.251V35.2682H386.451V35.168H386.652V35.0677H386.852V34.9675H387.053V34.8672H387.253V34.767H387.454V34.6667H387.654V34.5664H387.855V34.4662H388.055V34.3659H388.256V34.2657H388.456V34.1654H388.556V34.0652H388.757V33.9649H388.958V33.8647H389.158V33.7644H389.359V33.6641H389.559V33.5639H389.76V33.4636H389.96V33.3634H390.161V33.2631H390.361V33.1629H390.562V33.0626H390.762V32.9624H390.963V32.8621H391.063V32.7619H391.263V32.6616H391.464V32.5613H391.664V32.4611H391.865V32.3608H392.065V32.2606H392.266V32.1603H392.466V32.0601H392.667V31.9598H392.867V31.8596H393.068V31.7593H393.268V31.659H393.469V31.5588H393.569V31.4585H393.77V31.3583H393.97V31.258H394.171V31.1578H394.371V31.0575H394.572V30.9573H394.772V30.857H394.973V30.7568H395.173V30.6565H395.374V30.5562H395.574V30.456H395.775V30.3557H395.875V30.2555H396.076V30.1552H396.276V30.055H396.477V29.9547H396.677V29.8545H396.878V29.7542H397.078V29.6539H397.279V29.5537H397.479V29.4534H397.68V29.3532H397.88V29.2529H398.081V29.1527H398.281V29.0524H398.381V28.9522H398.582V28.8519H398.783V28.7517H398.983V28.6514H399.184V28.5511H399.384V28.4509H399.585V28.3506H399.785V28.2504H399.986V28.1501H400.186V28.0499H400.387V27.9496H400.587V27.8494H400.788V27.7491H401.489V27.8494H401.59V27.9496H401.69V108.755H401.59V108.956H401.489V109.056H401.389V109.256H401.289V109.357H401.189V109.557H401.088V109.657H400.988V109.758H400.888V109.958H400.788V110.058H400.687V110.259H400.587V110.359H400.487V110.46H400.387V110.66H400.286V110.76H400.186V110.861H400.086V111.061H399.986V111.161H399.885V111.262H399.785V111.462H399.685V111.562H399.585V111.663H399.484V111.763H399.384V111.963H399.284V112.064H399.184V112.164H399.083V112.364H398.983V112.465H398.883V112.565H398.783V112.765H398.682V112.866H398.582V112.966H398.482V113.166H398.381V113.267H398.281V113.367H398.181V113.567H398.081V113.668H397.98V113.768H397.88V113.968H397.78V114.069H397.68V114.169H397.579V114.269H397.479V114.47H397.379V114.57H397.279V114.67H397.178V114.77H397.078V114.971H396.978V115.071H396.878V115.171H396.777V115.272H396.677V115.472H396.577V115.573H396.477V115.673H396.376V115.773H396.276V115.974H396.176V116.074H396.076V116.174H395.975V116.274H395.875V116.375H395.775V116.575H395.675V116.675H395.574V116.776H395.474V116.876H395.374V117.076H395.274V117.177H395.173V117.277H395.073V117.377H394.973V117.578H394.873V117.678H394.772V117.778H394.672V117.878H394.572V118.079H394.472V118.179H394.371V118.279H394.271V118.38H394.171V118.48H394.071V118.68H393.97V118.781H393.87V118.881H393.77V118.981H393.67V119.081H393.569V119.182H393.469V119.282H393.369V119.482H393.268V119.583H393.168V119.683H393.068V119.783H392.968V119.883H392.867V119.984H392.767V120.184H392.667V120.284H392.567V120.385H392.466V120.485H392.366V120.585H392.266V120.686H392.166V120.786H392.065V120.986H391.965V121.087H391.865V121.187H391.765V121.287H391.664V121.387H391.564V121.488H391.464V121.588H391.364V121.788H391.263V121.889H391.163V121.989H391.063V122.089H390.963V122.189H390.862V122.29H390.762V122.39H390.662V122.59H390.562V122.691H390.461V122.791H390.361V122.891H390.261V122.991H390.161V123.092H390.06V123.192H389.96V123.292H389.86V123.392H389.76V123.493H389.659V123.693H389.559V123.793H389.459V123.894H389.359V123.994H389.258V124.094H389.158V124.194H389.058V124.295H388.958V124.395H388.857V124.495H388.757V124.595H388.657V124.696H388.556V124.796H388.456V124.896H388.356V124.996H388.256V125.197H388.155V125.297H388.055V125.397H387.955V125.498H387.855V125.598H387.754V125.698H387.654V125.799H387.554V125.899H387.454V125.999H387.353V126.099H387.253V126.2H387.153V126.3H387.053V126.4H386.952V126.5H386.852V126.601H386.752V126.701H386.652V126.801H386.551V126.901H386.451V127.002H386.351V127.102H386.251V127.202H385.649V127.102H385.549V127.002H385.449V126.901H385.348V55.219H385.248V55.0185H385.148V54.9182H385.048V54.818H384.546V54.9182H384.346V55.0185H384.145V55.1187H383.945V55.219H383.744V55.3192H383.544V55.4195H383.443V55.5197H383.243V55.62H383.042V55.7203H382.842V55.8205H382.641V55.9208H382.441V56.021H382.24V56.1213H382.04V56.2215H381.839V56.3218H381.639V56.422H381.438V56.5223H381.238V56.6226H381.138V56.7228H380.937V56.8231H380.737V56.9233H380.536V57.0236H380.336V57.1238H380.135V57.2241H379.935V57.3243H379.734V57.4246H379.534V57.5248H379.333V57.6251H379.133V57.7254H378.932V57.8256H378.732V57.9259H378.631V58.0261H378.431V58.1264H378.23V58.2266H378.03V58.3269H377.829V58.4271H377.629V58.5274H377.428V58.6277H377.228V58.7279H377.027V58.8282H376.827V58.9284H376.626V59.0287H376.426V59.1289H376.325V59.2292H376.125V59.3294H375.924V59.4297H375.724V59.5299H375.523V59.6302H375.323V59.7305H375.122V59.8307H374.922V59.931H374.721V60.0312H374.521V60.1315H374.32V60.2317H374.12V60.332H373.919V60.4322H373.819V60.5325H373.618V60.6328H373.418V60.733H373.217V60.8333H373.017V60.9335H372.816V61.0338H372.616V61.134H372.415V61.2343H372.215V61.3345H372.014V61.4348H371.914V61.535H371.814V61.8358H371.714V140.235H371.613V140.436H371.413V140.536H371.313V140.636H371.212V140.737H371.112V140.837H370.912V140.937H370.811V141.037H370.711V141.138H370.611V141.238H370.41V141.338H370.31V141.438H370.21V141.539H370.009V141.639H369.909V141.739H369.809V141.839H369.608V141.94H369.508V142.04H369.408V142.14H369.207V142.24H369.107V142.341H369.007V142.441H368.806V142.541H368.706V142.641H368.505V142.742H368.405V142.842H368.305V142.942H368.104V143.042H368.004V143.143H367.904V143.243H367.703V143.343H367.603V143.443H367.503V143.544H367.302V143.644H367.202V143.744H367.102V143.844H366.901V143.945H366.801V144.045H366.701V144.145H366.5V144.245H366.4V144.346H366.2V144.446H366.099V144.546H365.999V144.646H365.799V144.747H365.698V144.847H365.598V144.947H365.398V145.047H365.297V145.148H365.197V145.248H364.997V145.348H364.896V145.449H364.796V145.549H364.596V145.649H364.495V145.749H364.395V145.85H364.195V145.95H364.094V146.05H363.894V146.15H363.794V146.251H363.593V146.351H363.493V146.451H363.392V146.551H363.192V146.652H363.092V146.752H362.891V146.852H362.791V146.952H362.59V147.053H362.49V147.153H362.29V147.253H362.189V147.353H361.989V147.454H361.889V147.554H361.688V147.654H361.588V147.754H361.387V147.855H361.287V147.955H361.087V148.055H360.986V148.155H360.786V148.256H360.686V148.356H360.485V148.456H360.385V148.556H360.184V148.657H360.084V148.757H359.884V148.857H359.783V148.957H359.583V149.058H359.483V149.158H359.382V149.258H359.182V149.358H359.082V149.459H358.881V149.559H358.781V149.659H358.58V149.759H358.48V149.86H358.279V149.96H358.179V150.06H357.979V150.16H357.878V150.261H357.678V150.361H357.578V150.461H357.377V150.562H357.277V150.662H357.076V150.762H356.876V150.862H356.776V150.963H356.575V151.063H356.475V151.163H356.174V151.263H355.873V151.163H355.673V151.063H355.472V150.862H355.372V70.7585H355.272V70.558H355.172V70.4577H354.871V70.3575H354.771V70.4577H354.57V70.558H354.37V70.6583H354.169V70.7585H353.969V70.8588H353.768V70.959H353.567V71.0593H353.367V71.1595H353.166V71.2598H352.966V71.36H352.765V71.4603H352.565V71.5605H352.465V71.6608H352.264V71.7611H352.064V71.8613H351.863V71.9616H351.663V72.0618H351.462V72.1621H351.262V72.2623H351.061V72.3626H350.861V72.4628H350.66V72.5631H350.46V72.6634H350.259V72.7636H350.059V72.8639H349.958V72.9641H349.758V73.0644H349.557V73.1646H349.357V73.2649H349.156V73.3651H348.956V73.4654H348.755V73.5657H348.555V73.6659H348.354V73.7662H348.154V73.8664H347.953V73.9667H347.753V74.0669H347.652V74.1672H347.452V74.2674H347.251V74.3677H347.051V74.4679H346.85V74.5682H346.65V74.6685H346.449V74.7687H346.249V74.869H346.048V74.9692H345.848V75.0695H345.647V75.1697H345.447V75.27H345.246V75.3702H345.146V75.4705H344.946V75.5708H344.745V75.671H344.545V75.7713H344.344V75.8715H344.144V75.9718H343.943V76.072H343.743V76.1723H343.542V76.2725H343.341V76.3728H343.141V76.473H342.94V76.5733H342.84V76.6736H342.64V76.7738H342.439V76.8741H342.239V76.9743H342.038V77.0746H341.938V77.2751H341.838V159.284H341.737V159.484H341.637V159.584H341.437V159.685H341.236V159.785H341.036V159.885H340.835V159.985H340.635V160.086H340.434V160.186H340.234V160.286H340.033V160.387H339.833V160.487H339.632V160.587H339.432V160.687H339.231V160.788H339.031V160.888H338.83V160.988H338.63V161.088H338.429V161.189H338.228V161.289H338.028V161.389H337.727V161.489H337.527V161.59H337.326V161.69H337.126V161.79H336.925V161.89H336.725V161.991H336.524V162.091H336.324V162.191H336.123V162.291H335.923V162.392H335.722V162.492H335.522V162.592H335.321V162.692H335.02V162.793H334.82V162.893H334.619V162.993H334.419V163.093H334.218V163.194H334.018V163.294H333.817V163.394H333.617V163.494H333.316V163.595H333.115V163.695H332.915V163.795H332.714V163.895H332.414V163.996H332.213V164.096H332.013V164.196H331.812V164.296H331.511V164.397H331.311V164.497H331.11V164.597H330.91V164.697H330.609V164.798H330.409V164.898H330.208V164.998H330.008V165.098H329.707V165.199H329.506V165.299H329.306V165.399H329.105V165.5H328.805V165.6H328.604V165.7H328.403V165.8H328.103V165.901H327.902V166.001H327.702V166.101H327.501V166.201H327.2V166.302H327V166.402H326.699V166.502H326.499V166.602H326.098V166.703H325.897ZM410.212 94.1179V94.0177H410.011V93.9174H409.911V93.7169H409.811V28.0499H409.911V27.9496H410.011V27.8494H410.111V27.7491H410.913V27.8494H411.014V27.9496H411.214V28.0499H411.415V28.1501H411.615V28.2504H411.816V28.3506H412.016V28.4509H412.217V28.5511H412.417V28.6514H412.618V28.7517H412.818V28.8519H413.019V28.9522H413.219V29.0524H413.319V29.1527H413.52V29.2529H413.721V29.3532H413.921V29.4534H414.122V29.5537H414.322V29.6539H414.523V29.7542H414.723V29.8545H414.924V29.9547H415.124V30.055H415.325V30.1552H415.525V30.2555H415.726V30.3557H415.826V30.456H416.026V30.5562H416.227V30.6565H416.427V30.7568H416.628V30.857H416.828V30.9573H417.029V31.0575H417.229V31.1578H417.43V31.258H417.63V31.3583H417.831V31.4585H418.031V31.5588H418.132V31.659H418.332V31.7593H418.533V31.8596H418.733V31.9598H418.934V32.0601H419.134V32.1603H419.335V32.2606H419.535V32.3608H419.736V32.4611H419.936V32.5613H420.137V32.6616H420.337V32.7619H420.538V32.8621H420.638V32.9624H420.839V33.0626H421.039V33.1629H421.24V33.2631H421.44V33.3634H421.641V33.4636H421.841V33.5639H422.042V33.6641H422.242V33.7644H422.443V33.8647H422.643V33.9649H422.844V34.0652H423.044V34.1654H423.144V34.2657H423.345V34.3659H423.545V34.4662H423.746V34.5664H423.947V34.6667H424.147V34.767H424.348V34.8672H424.548V34.9675H424.749V35.0677H424.949V35.168H425.15V35.2682H425.35V35.3685H425.45V35.4687H425.651V35.569H425.851V35.6693H426.052V35.7695H426.252V35.8698H426.453V35.97H426.653V36.0703H426.854V36.1705H427.054V36.2708H427.255V36.371H427.455V36.4713H427.656V36.5715H427.856V36.6718H427.957V36.7721H428.157V36.8723H428.358V36.9726H428.558V37.0728H428.759V37.1731H428.959V37.2733H429.16V37.3736H429.36V37.4738H429.561V37.5741H429.761V37.6744H429.962V37.7746H430.162V37.8749H430.263V37.9751H430.463V38.0754H430.664V38.1756H430.864V38.2759H431.065V38.3761H431.265V38.4764H431.466V38.5766H431.666V38.6769H431.867V38.7772H432.067V38.8774H432.268V38.9777H432.468V39.0779H432.669V39.1782H432.769V39.2784H432.969V39.3787H433.17V39.4789H433.37V39.5792H433.571V39.6795H433.772V39.7797H433.972V39.88H434.173V39.9802H434.373V40.0805H434.574V40.1807H434.774V40.281H434.975V40.3812H435.175V40.4815H435.275V40.5817H435.476V40.682H435.676V40.7823H435.877V40.8825H436.077V40.9828H436.278V41.083H436.478V41.1833H436.679V41.2835H436.879V41.3838H437.08V41.484H437.28V41.5843H437.481V41.6846H437.581V41.7848H437.782V41.8851H437.982V41.9853H438.183V42.0856H438.383V42.1858H438.584V42.2861H438.784V42.3863H438.985V42.4866H439.185V42.5868H439.386V42.6871H439.586V42.7874H439.787V42.8876H439.987V42.9879H440.088V43.0881H440.288V43.1884H440.489V43.2886H440.689V43.3889H440.89V43.4891H441.09V43.5894H441.291V43.6897H441.491V43.7899H441.692V43.8902H441.892V43.9904H442.093V44.0907H442.293V44.1909H442.494V44.2912H442.594V44.3914H442.794V44.4917H442.995V44.5919H443.195V44.6922H443.396V44.7925H443.596V44.8927H443.797V44.993H443.998V45.0932H444.198V45.1935H444.399V45.2937H444.599V45.394H444.8V45.4942H444.9V45.5945H445.1V45.6948H445.301V45.795H445.501V45.8953H445.702V45.9955H445.902V46.0958H446.103V46.196H446.303V46.2963H446.504V46.3965H446.704V46.4968H446.905V46.597H447.105V46.6973H447.306V46.7976H447.406V46.8978H447.607V46.9981H447.807V47.0983H448.008V47.1986H448.208V47.2988H448.409V47.3991H448.609V47.4993H448.81V47.5996H449.01V47.6999H449.211V47.8001H449.411V47.9004H449.612V48.0006H449.712V48.1009H449.913V48.2011H450.113V48.3014H450.314V48.4016H450.514V48.5019H450.715V48.6021H450.915V48.7024H451.116V48.8027H451.316V48.9029H451.517V49.0032H451.717V49.1034H451.918V49.2037H452.118V49.3039H452.218V49.4042H452.419V49.5044H452.619V49.6047H452.82V49.705H453.02V49.8052H453.221V49.9055H453.421V50.0057H453.622V50.106H453.823V50.2062H454.023V50.3065H454.224V50.4067H454.424V50.507H454.625V50.6072H454.725V50.7075H454.925V50.8078H455.126V50.908H455.326V51.0083H455.527V51.1085H455.727V51.2088H455.928V51.309H456.128V51.4093H456.329V51.5095H456.529V51.6098H456.73V51.7101H456.93V51.8103H457.031V51.9106H457.231V52.0108H457.432V52.1111H457.632V52.2113H457.833V52.3116H458.033V52.4118H458.234V52.5121H458.434V52.6123H458.635V52.7126H458.835V52.8129H459.036V52.9131H459.236V53.0134H459.437V53.1136H459.537V53.2139H459.738V53.3141H459.938V53.4144H460.139V53.5146H460.339V53.6149H460.54V53.7152H460.74V53.8154H460.941V53.9157H461.141V54.0159H461.342V54.1162H461.542V54.2164H461.743V54.3167H461.843V54.4169H462.043V54.5172H462.244V54.6175H462.444V54.7177H462.645V54.818H462.845V54.9182H463.046V55.0185H463.246V55.1187H463.447V55.219H463.648V55.3192H463.848V55.4195H464.049V55.5197H464.249V55.62H464.349V55.7203H464.55V55.8205H464.75V55.9208H464.951V56.021H465.151V56.1213H465.352V56.2215H465.552V56.3218H465.753V56.422H465.953V56.5223H466.154V56.6226H466.354V56.7228H466.555V56.8231H466.755V56.9233H466.856V57.0236H467.056V57.1238H467.257V57.2241H467.457V57.3243H467.658V57.4246H467.858V57.5248H468.059V57.6251H468.259V57.7254H468.46V57.8256H468.66V57.9259H468.861V58.0261H469.061V58.1264H469.162V58.2266H469.362V58.3269H469.563V58.4271H469.763V58.5274H469.964V58.6277H470.164V58.7279H470.365V58.8282H470.565V58.9284H470.766V59.0287H470.966V59.1289H471.167V59.2292H471.367V59.3294H471.568V59.4297H471.668V59.5299H471.868V59.6302H472.069V59.7305H472.269V59.8307H472.47V59.931H472.67V60.0312H472.871V60.1315H473.071V60.2317H473.272V60.332H473.472V60.4322H473.673V60.5325H473.874V60.6328H474.074V60.733H474.174V60.8333H474.375V60.9335H474.575V61.0338H474.776V61.134H474.976V61.2343H475.177V61.3345H475.377V61.4348H475.578V61.535H475.778V61.6353H475.979V61.7356H476.179V61.8358H476.38V61.9361H476.48V62.0363H476.681V62.1366H476.881V62.2368H477.082V62.3371H477.282V62.4373H477.483V62.5376H477.683V62.6379H477.884V62.7381H478.084V62.8384H478.285V62.9386H478.485V63.0389H478.686V63.1391H478.886V63.2394H478.987V63.3396H479.187V63.4399H479.388V63.5401H479.588V63.6404H479.789V63.7407H479.989V63.8409H480.19V63.9412H480.39V64.0414H480.591V64.1417H480.791V64.2419H480.992V64.3422H481.192V64.4424H481.292V64.5427H481.493V64.643H481.693V64.7432H481.894V64.8435H482.094V64.9437H482.295V65.044H482.495V65.1442H482.696V65.2445H482.896V65.3447H483.097V65.445H483.297V65.5452H483.498V65.6455H483.699V65.7458H483.799V65.846H483.999V65.9463H484.2V66.0465H484.4V66.1468H484.601V66.247H484.801V66.3473H485.002V66.4475H485.202V66.5478H485.403V66.6481H485.603V66.7483H485.804V66.8486H485.904V66.9488H486.004V67.1493H486.105V84.5937H486.004V84.7942H485.904V84.8945H485.804V84.9947H485.603V85.095H485.303V84.9947H485.002V84.8945H484.801V84.7942H484.601V84.694H484.501V84.5937H484.3V84.4934H484.1V84.3932H483.899V84.2929H483.699V84.1927H483.498V84.0924H483.297V83.9922H483.097V83.8919H482.896V83.7917H482.696V83.6914H482.495V83.5912H482.295V83.4909H482.094V83.3906H481.994V83.2904H481.794V83.1901H481.593V83.0899H481.393V82.9896H481.192V82.8894H480.992V82.7891H480.791V82.6889H480.591V82.5886H480.39V82.4883H480.19V82.3881H479.989V82.2878H479.789V82.1876H479.688V82.0873H479.488V81.9871H479.287V81.8868H479.087V81.7866H478.886V81.6863H478.686V81.5861H478.485V81.4858H478.285V81.3855H478.084V81.2853H477.884V81.185H477.683V81.0848H477.483V80.9845H477.282V80.8843H477.182V80.784H476.981V80.6838H476.781V80.5835H476.58V80.4832H476.38V80.383H476.179V80.2827H475.979V80.1825H475.778V80.0822H475.578V79.982H475.377V79.8817H475.177V79.7815H474.976V79.6812H474.876V79.581H474.676V79.4807H474.475V79.3804H474.275V79.2802H474.074V79.1799H473.874V79.0797H473.673V78.9794H473.472V78.8792H473.272V78.7789H473.071V78.6787H472.871V78.5784H472.67V78.4781H472.57V78.3779H472.37V78.2776H472.169V78.1774H471.969V78.0771H471.768V77.9769H471.568V77.8766H471.367V77.7764H471.167V77.6761H470.966V77.5759H470.766V77.4756H470.565V77.3753H470.365V77.2751H470.164V77.1748H470.064V77.0746H469.863V76.9743H469.663V76.8741H469.462V76.7738H469.262V76.6736H469.061V76.5733H468.861V76.473H468.66V76.3728H468.46V76.2725H468.259V76.1723H468.059V76.072H467.858V75.9718H467.758V75.8715H467.557V75.7713H467.357V75.671H467.156V75.5708H466.956V75.4705H466.755V75.3702H466.555V75.27H466.354V75.1697H466.154V75.0695H465.953V74.9692H465.753V74.869H465.552V74.7687H465.352V74.6685H465.252V74.5682H465.051V74.4679H464.851V74.3677H464.65V74.2674H464.45V74.1672H464.249V74.0669H464.049V73.9667H463.848V73.8664H463.648V73.7662H463.447V73.6659H463.246V73.5657H463.046V73.4654H462.946V73.3651H462.745V73.2649H462.545V73.1646H462.344V73.0644H462.144V72.9641H461.943V72.8639H461.743V72.7636H461.542V72.6634H461.342V72.5631H461.141V72.4628H460.941V72.3626H460.74V72.2623H460.64V72.1621H460.439V72.0618H460.239V71.9616H460.038V71.8613H459.838V71.7611H459.637V71.6608H459.437V71.5605H459.236V71.4603H459.036V71.36H458.835V71.2598H458.635V71.1595H458.434V71.0593H458.234V70.959H458.133V70.8588H457.933V70.7585H457.732V70.6583H457.532V70.558H457.331V70.4577H457.131V70.3575H456.93V70.2572H456.73V70.157H456.529V70.0567H456.329V69.9565H456.128V69.8562H455.928V69.756H455.828V69.6557H455.627V69.5554H455.427V69.4552H455.226V69.3549H455.026V69.2547H454.825V69.1544H454.625V69.0542H454.424V68.9539H454.224V68.8537H454.023V68.7534H453.823V68.6532H453.622V68.5529H453.421V68.4526H453.321V68.3524H453.121V68.2521H452.92V68.1519H452.72V68.0516H452.519V67.9514H452.319V67.8511H452.118V67.7509H451.918V67.6506H451.717V67.5503H451.517V67.4501H451.316V67.3498H451.116V67.2496H451.015V67.1493H450.815V67.0491H450.614V66.9488H450.414V66.8486H450.213V66.7483H450.013V66.6481H449.812V66.5478H449.612V66.4475H449.411V66.3473H449.211V66.247H449.01V66.1468H448.81V66.0465H448.609V65.9463H448.509V65.846H448.308V65.7458H448.108V65.6455H447.907V65.5452H447.707V65.445H447.506V65.3447H447.306V65.2445H447.105V65.1442H446.905V65.044H446.704V64.9437H446.504V64.8435H446.303V64.7432H446.203V64.643H446.003V64.5427H445.802V64.4424H445.602V64.3422H445.401V64.2419H445.201V64.1417H445V64.0414H444.8V63.9412H444.599V63.8409H444.399V63.7407H444.198V63.6404H443.998V63.5401H443.897V63.4399H443.697V63.3396H443.496V63.2394H443.296V63.1391H443.095V63.0389H442.895V62.9386H442.694V62.8384H442.494V62.7381H442.293V62.6379H442.093V62.5376H441.892V62.4373H441.692V62.3371H441.491V62.2368H441.391V62.1366H441.19V62.0363H440.99V61.9361H440.789V61.8358H440.589V61.7356H440.388V61.6353H440.188V61.535H439.987V61.4348H439.787V61.3345H439.586V61.2343H439.386V61.134H439.185V61.0338H439.085V60.9335H438.885V60.8333H438.684V60.733H438.483V60.6328H438.283V60.5325H438.082V60.4322H437.882V60.332H437.681V60.2317H437.481V60.1315H437.28V60.0312H437.08V59.931H436.879V59.8307H436.679V59.7305H436.579V59.6302H436.378V59.5299H436.178V59.4297H435.977V59.3294H435.777V59.2292H435.576V59.1289H435.376V59.0287H435.175V58.9284H434.975V58.8282H434.774V58.7279H434.574V58.6277H434.373V58.5274H434.273V58.4271H434.072V58.3269H433.872V58.2266H433.671V58.1264H433.471V58.0261H433.27V57.9259H433.07V57.8256H432.869V57.7254H432.669V57.6251H432.468V57.5248H432.268V57.4246H432.067V57.3243H431.967V57.2241H431.766V57.1238H431.566V57.0236H431.365V56.9233H431.165V56.8231H430.964V56.7228H430.764V56.6226H430.563V56.5223H430.363V56.422H430.162V56.3218H429.962V56.2215H429.761V56.1213H429.561V56.021H429.461V55.9208H429.26V55.8205H429.06V55.7203H428.859V55.62H428.659V55.5197H428.458V55.4195H428.257V55.3192H428.057V55.219H427.856V55.1187H427.656V55.0185H427.455V54.9182H427.255V54.818H427.155V54.7177H426.954V54.6175H426.754V54.5172H426.453V54.6175H426.252V54.7177H426.152V54.818H426.052V55.219H425.952V55.62H425.851V56.021H425.751V56.422H425.651V56.7228H425.551V57.1238H425.45V57.5248H425.35V57.8256H425.25V58.2266H425.15V58.6277H425.049V58.9284H424.949V59.3294H424.849V59.7305H424.749V60.0312H424.648V60.4322H424.548V60.733H424.448V61.134H424.348V61.4348H424.247V61.7356H424.147V62.1366H424.047V62.4373H423.947V62.7381H423.846V63.0389H423.746V63.4399H423.646V63.7407H423.545V64.0414H423.445V64.4424H423.345V64.7432H423.245V65.044H423.144V65.445H423.044V65.7458H422.944V66.0465H422.844V66.3473H422.743V66.6481H422.643V66.9488H422.543V67.2496H422.443V67.5503H422.342V67.8511H422.242V68.1519H422.142V68.4526H422.042V68.7534H421.941V69.0542H421.841V69.2547H421.741V69.5554H421.641V69.8562H421.54V70.157H421.44V70.4577H421.34V70.7585H421.24V71.0593H421.139V71.36H421.039V71.5605H420.939V71.8613H420.839V72.1621H420.738V72.3626H420.638V72.6634H420.538V72.9641H420.438V73.1646H420.337V73.4654H420.237V73.7662H420.137V73.9667H420.037V74.2674H419.936V74.5682H419.836V74.7687H419.736V75.0695H419.636V75.3702H419.535V75.5708H419.435V75.8715H419.335V76.072H419.235V76.3728H419.134V76.5733H419.034V76.8741H418.934V77.0746H418.834V77.3753H418.733V77.5759H418.633V77.7764H418.533V78.0771H418.432V78.2776H418.332V78.5784H418.232V78.7789H418.132V79.0797H418.031V79.2802H417.931V79.581H417.831V79.7815H417.731V79.982H417.63V80.2827H417.53V80.4832H417.43V80.6838H417.33V80.9845H417.229V81.185H417.129V81.3855H417.029V81.5861H416.929V81.8868H416.828V82.0873H416.728V82.2878H416.628V82.4883H416.528V82.7891H416.427V82.9896H416.327V83.1901H416.227V83.3906H416.127V83.5912H416.026V83.8919H415.926V84.0924H415.826V84.2929H415.726V84.4934H415.625V84.7942H415.525V84.9947H415.425V85.1952H415.325V85.3957H415.224V85.5963H415.124V85.7968H415.024V85.9973H414.924V86.1978H414.823V86.3983H414.723V86.5988H414.623V86.7993H414.523V86.9998H414.422V87.2003H414.322V87.5011H414.222V87.7016H414.122V87.9021H414.021V88.1026H413.921V88.3031H413.821V88.5036H413.721V88.7042H413.62V88.9047H413.52V89.1052H413.42V89.3057H413.319V89.5062H413.219V89.7067H413.119V89.9072H413.019V90.1077H412.918V90.3082H412.818V90.5088H412.718V90.7093H412.618V90.9098H412.517V91.01H412.417V91.2105H412.317V91.411H412.217V91.6116H412.116V91.8121H412.016V92.0126H411.916V92.2131H411.816V92.4136H411.715V92.6141H411.615V92.8146H411.515V93.0151H411.415V93.1154H411.314V93.3159H411.214V93.5164H411.114V93.7169H411.014V93.9174H410.913V94.0177H410.713V94.1179',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M199.73 60.1108C199.73 60.0598 199.71 60.0109 199.674 59.9748C199.638 59.9387 199.589 59.9185 199.538 59.9185C199.487 59.9185 199.438 59.9387 199.402 59.9748C199.366 60.0109 199.346 60.0598 199.346 60.1108C199.346 60.1618 199.366 60.2108 199.402 60.2468C199.438 60.2829 199.487 60.3032 199.538 60.3032C199.589 60.3032 199.638 60.2829 199.674 60.2468C199.71 60.2108 199.73 60.1618 199.73 60.1108Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M151.193 30.7043C151.038 30.4822 150.84 30.2933 150.611 30.1488C150.382 30.0042 150.126 29.907 149.859 29.8628C149.747 29.8708 149.641 29.915 149.556 29.9888C149.472 30.0625 149.413 30.1618 149.39 30.2715C149.39 30.4038 149.474 30.524 149.619 30.5C149.763 30.4759 150.051 30.5841 150.015 30.8246C149.979 31.065 149.607 31.1251 149.402 30.9328C149.198 30.7404 149.054 31.0049 149.138 31.1371C149.241 31.2756 149.373 31.3903 149.524 31.4732C149.676 31.5562 149.843 31.6056 150.015 31.618C150.18 31.6372 150.346 31.6075 150.494 31.5327C150.641 31.4578 150.763 31.3412 150.845 31.1972C150.977 31.2574 151.314 30.9087 151.193 30.7043Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M147.207 33.2772C147.292 33.2772 147.364 33.169 147.364 33.0487C147.364 32.9285 147.292 32.8203 147.207 32.8203C147.123 32.8203 147.039 32.9285 147.039 33.0487C147.039 33.169 147.111 33.2772 147.207 33.2772Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M150.587 31.6782C150.278 31.8288 149.935 31.8968 149.591 31.8758C149.248 31.8547 148.916 31.7452 148.627 31.558C148.279 31.3536 148.231 31.4979 148.219 31.7504C148.207 32.0028 147.798 32.4116 147.57 32.5799C147.341 32.7482 147.57 32.8324 147.786 32.7482C148.002 32.664 148.639 32.3635 148.591 32.1832C148.936 32.2621 149.259 32.4162 149.538 32.6344C149.816 32.8526 150.043 33.1295 150.202 33.4455H150.443C150.409 33.1778 150.436 32.906 150.521 32.6501C150.607 32.3942 150.748 32.1607 150.936 31.9668C151.116 31.7624 150.936 31.4258 150.587 31.6782Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M152.942 33.9145C153.047 34.4193 153.196 34.914 153.387 35.3932C153.543 35.5375 154.012 35.6697 154.108 35.5134C154.204 35.3571 153.651 34.5276 153.483 34.3112C153.332 34.1501 153.228 33.9505 153.182 33.7341C153.158 33.5779 152.834 33.662 152.942 33.9145Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M147.439 34.5991C151.012 36.7012 154.991 38.0206 159.112 38.4702C159.365 38.4702 159.485 38.3981 159.569 38.0615C159.693 37.6184 159.766 37.1626 159.786 36.703C159.786 36.4505 159.581 36.5467 159.497 36.8232C159.413 37.0997 159.208 37.6888 159.124 38.0254C158.401 38.0869 157.673 38.001 156.984 37.7729C154.991 37.1313 153.217 35.9444 151.863 34.3466C151.647 34.0461 151.43 34.2865 151.466 34.4909C151.527 34.7595 151.603 35.0245 151.695 35.2844C151.712 35.3083 151.72 35.3382 151.715 35.3675C151.71 35.3968 151.695 35.4231 151.671 35.4406C151.647 35.4582 151.617 35.4655 151.587 35.461C151.558 35.4565 151.532 35.4405 151.514 35.4166C151.075 35.151 150.714 34.7735 150.468 34.3226C150.384 34.0701 150.072 34.1423 150.096 34.3226C150.12 34.5029 150.096 35.068 149.302 34.8756C148.509 34.6833 147.944 34.4548 147.535 34.3346C147.343 34.3346 147.246 34.4909 147.439 34.5991Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M155.95 34.8644C155.95 34.9102 155.967 34.9544 155.998 34.9879C156.029 35.0214 156.072 35.0417 156.118 35.0447C156.164 35.0417 156.207 35.0214 156.238 34.9879C156.269 34.9544 156.286 34.9102 156.286 34.8644C156.286 34.8407 156.282 34.8173 156.273 34.7954C156.264 34.7735 156.25 34.7536 156.233 34.7369C156.217 34.7202 156.197 34.7069 156.175 34.6978C156.153 34.6887 156.13 34.6841 156.106 34.6841C156.084 34.6856 156.062 34.6915 156.042 34.7014C156.023 34.7113 156.005 34.725 155.99 34.7418C155.976 34.7585 155.965 34.778 155.958 34.799C155.951 34.8201 155.948 34.8423 155.95 34.8644V34.8644Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M196.314 54.7485C196.068 55.1809 195.774 55.5842 195.437 55.9507C195.353 56.0469 195.305 56.071 195.365 56.3355C195.521 57.0688 195.834 56.8885 195.93 56.6721C196.026 56.4557 196.314 55.8425 196.23 55.6021C196.146 55.3617 196.363 55.1092 196.555 54.9168L196.314 54.7485Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M148.036 28.7686C148.036 28.8228 148.057 28.8748 148.095 28.9132C148.134 28.9515 148.186 28.973 148.24 28.973C148.293 28.9701 148.343 28.9477 148.381 28.91C148.419 28.8722 148.441 28.8219 148.444 28.7686C148.444 28.7133 148.423 28.66 148.385 28.6197C148.347 28.5795 148.295 28.5553 148.24 28.5522C148.212 28.5522 148.184 28.5579 148.159 28.5689C148.133 28.5799 148.11 28.596 148.091 28.6163C148.072 28.6366 148.057 28.6605 148.047 28.6867C148.038 28.7129 148.034 28.7408 148.036 28.7686Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M154.549 33.6616C154.453 33.6616 154.381 33.7939 154.381 33.9622C154.381 34.1305 154.453 34.2507 154.549 34.2507C154.645 34.2507 154.705 34.1185 154.705 33.9622C154.705 33.8059 154.633 33.6616 154.549 33.6616Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M160.517 39.9253C160.571 39.7034 160.547 39.4694 160.449 39.2633C160.35 39.0571 160.183 38.8917 159.976 38.7952C159.723 38.7111 159.663 39.1799 159.807 39.2521C159.952 39.3242 160.096 39.8411 160.06 40.0095C160.024 40.1778 160.348 40.4903 160.517 39.9253Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M117.202 122.626C117.202 122.325 117.202 122.025 117.202 121.724C116.842 121.724 115.796 121.616 115.423 121.255L115.303 121.412C115.687 121.977 116.577 122.47 117.202 123.299C117.202 123.059 117.202 122.842 117.202 122.626Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M104.916 94.8539C106.852 100.192 112.213 107.177 116.854 112.514H117.203C112.394 106.672 107.405 100.095 105.181 94.6855L104.916 94.8539Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M117.159 123.659C116.87 123.659 115.957 123.431 115.837 123.07L115.656 123.166C115.998 123.831 116.449 124.432 116.991 124.946C117.063 124.513 117.123 124.08 117.159 123.659Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M148.087 27.2417C148.036 27.2417 147.987 27.262 147.951 27.298C147.915 27.3341 147.895 27.383 147.895 27.4341C147.895 27.4851 147.915 27.534 147.951 27.5701C147.987 27.6061 148.036 27.6264 148.087 27.6264C148.138 27.6264 148.187 27.6061 148.223 27.5701C148.259 27.534 148.279 27.4851 148.279 27.4341C148.279 27.383 148.259 27.3341 148.223 27.298C148.187 27.262 148.138 27.2417 148.087 27.2417V27.2417Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M119.722 113.008L120.191 113.104C117.932 110.508 115.805 107.799 113.819 104.989C113.208 104.096 112.537 103.244 111.811 102.44C109.921 99.6945 108.264 96.795 106.858 93.7725L106.666 93.8807C107.219 95.9605 111.739 103.498 112.22 104.845C112.701 106.191 118.676 112.058 119.722 113.008Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M115.408 126.521C115.673 126.677 116.166 127.723 116.418 127.807C116.418 127.494 116.562 127.05 116.671 126.605C116.49 126.497 115.661 126.545 115.468 126.46L115.408 126.521Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M145.745 29.8384C145.841 29.9947 146.406 31.0407 146.598 31.2931C146.674 31.4085 146.781 31.5001 146.906 31.5576C147.032 31.615 147.171 31.6358 147.308 31.6177C147.447 31.6382 147.589 31.613 147.712 31.5458C147.836 31.4786 147.934 31.373 147.993 31.245C148.214 30.6569 148.608 30.1496 149.123 29.7904C149.398 29.6124 149.723 29.5248 150.05 29.5399C150.378 29.555 150.692 29.672 150.95 29.8745C151.443 30.2592 152.068 30.7882 152.333 31.0166C152.421 31.1048 152.535 31.1628 152.658 31.1823C152.781 31.2017 152.907 31.1816 153.018 31.1248C153.162 31.0286 153.09 30.7521 152.946 30.8243C152.802 30.8964 152.73 30.9685 152.573 30.7161C152.417 30.4636 151.912 29.3095 151.371 29.045C151.371 29.045 151.371 28.8406 151.143 28.6963C150.621 28.5573 150.067 28.6084 149.58 28.8406C148.778 29.2614 148.027 29.7737 147.344 30.3674C147.127 30.5718 146.839 30.0068 147.091 29.9106C147.344 29.8144 147.837 29.3816 147.813 29.045C147.788 28.7084 147.5 28.8166 147.464 29.045C147.428 29.2734 147.332 29.3095 147.211 29.2253C147.091 29.1412 146.887 29.2253 146.755 29.2253C146.5 29.334 146.234 29.4146 145.961 29.4658C145.793 29.5018 145.637 29.6942 145.745 29.8384Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M156.43 33.3255C156.481 33.3255 156.529 33.3052 156.566 33.2691C156.602 33.2331 156.622 33.1841 156.622 33.1331C156.619 33.0842 156.597 33.0383 156.561 33.0048C156.526 32.9713 156.479 32.9527 156.43 32.9528C156.401 32.9455 156.371 32.9448 156.343 32.9508C156.314 32.9568 156.287 32.9692 156.264 32.9872C156.241 33.0052 156.222 33.0282 156.209 33.0545C156.196 33.0809 156.189 33.1098 156.189 33.1391C156.189 33.1685 156.196 33.1974 156.209 33.2237C156.222 33.2501 156.241 33.2731 156.264 33.2911C156.287 33.3091 156.314 33.3215 156.343 33.3275C156.371 33.3334 156.401 33.3327 156.43 33.3255V33.3255Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M146.73 27.7354C146.974 27.4906 147.253 27.2839 147.559 27.1223C147.614 27.0957 147.661 27.0565 147.698 27.008C147.734 26.9596 147.759 26.9031 147.769 26.8433C147.78 26.7835 147.776 26.722 147.758 26.664C147.741 26.6059 147.709 26.5528 147.667 26.5092C147.559 26.3649 147.439 26.2447 147.355 26.2567C147.271 26.2687 147.186 26.3889 147.186 26.5332C147.186 26.6775 146.73 27.2305 146.585 27.3627C146.441 27.495 146.261 27.8316 146.333 27.9037C146.405 27.9759 146.537 27.9518 146.73 27.7354Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M197.016 63.5484C196.931 63.368 196.499 63.6205 196.583 63.873C196.667 64.1254 196.378 64.3899 196.21 64.4861C196.042 64.5823 196.126 64.9068 196.438 64.8227C196.569 64.7906 196.691 64.7291 196.795 64.643C196.898 64.5569 196.981 64.4485 197.037 64.3257C197.092 64.203 197.119 64.0693 197.116 63.9346C197.112 63.8 197.078 63.6679 197.016 63.5484V63.5484Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M196.643 65.3642C196.531 65.4116 196.439 65.496 196.382 65.6033C196.325 65.7105 196.307 65.8341 196.33 65.9533C196.33 66.2538 196.438 66.5544 196.679 66.5544C196.919 66.5544 197.088 66.0735 197.1 65.785C197.112 65.4964 196.931 65.244 196.643 65.3642Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.767 33.6622C157.991 33.4574 158.146 33.1888 158.212 32.8927C158.255 32.8055 158.276 32.7097 158.276 32.6127C158.276 32.5158 158.253 32.4202 158.21 32.3332C158.167 32.2463 158.105 32.1703 158.028 32.111C157.952 32.0517 157.862 32.0107 157.767 31.9911C157.539 31.8949 157.431 31.9911 157.491 32.1714C157.61 32.626 157.655 33.097 157.623 33.566C157.575 33.6622 157.719 33.6622 157.767 33.6622Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M150.502 39.5164C150.634 39.4323 150.622 39.2399 150.502 39.0836C150.382 38.9273 150.225 38.8552 150.105 38.9394C149.985 39.0235 149.997 39.2159 150.105 39.3721C150.213 39.5284 150.382 39.6006 150.502 39.5164Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M198.523 62.214C198.667 62.0818 198.631 61.9255 198.355 61.9856C197.941 62.1018 197.539 62.2547 197.153 62.4425C194.748 60.2665 194.977 55.5778 195.157 54.3636C195.166 54.3158 195.159 54.2665 195.138 54.2228C195.117 54.1791 195.082 54.1432 195.039 54.1204C194.997 54.0977 194.948 54.0891 194.9 54.0961C194.851 54.1031 194.807 54.1252 194.772 54.1592C194.576 54.383 194.406 54.6291 194.267 54.8926C194.051 54.3648 194.051 53.7733 194.267 53.2455C194.4 53.0291 194.075 52.9089 193.979 53.0051C193.883 53.1013 193.378 53.3057 193.077 52.7767C192.771 52.2046 192.51 51.6097 192.296 50.9974C192.224 50.757 191.995 50.793 192.031 51.1657C192.151 52.3078 194.231 59.7375 196.84 62.719C197.008 62.9233 197.141 62.9714 197.309 62.8993C197.477 62.8272 198.367 62.3463 198.523 62.214Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M197.543 58.2471C197.584 58.2471 197.624 58.2307 197.654 58.2014C197.683 58.1721 197.699 58.1323 197.699 58.0909C197.699 58.0494 197.683 58.0097 197.654 57.9803C197.624 57.951 197.584 57.9346 197.543 57.9346C197.502 57.9346 197.462 57.951 197.432 57.9803C197.403 58.0097 197.387 58.0494 197.387 58.0909C197.387 58.1323 197.403 58.1721 197.432 58.2014C197.462 58.2307 197.502 58.2471 197.543 58.2471V58.2471Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M195.12 49.8676C195.12 49.5189 194.676 49.6752 194.664 49.8676C194.301 49.9272 193.932 49.9272 193.57 49.8676C193.437 49.8676 193.317 49.9998 193.57 50.1561C193.822 50.3124 194.447 50.4687 194.555 50.5649L194.748 50.4446C194.999 51.1069 194.999 51.8382 194.748 52.5004L194.976 52.6808C195.13 52.4883 195.326 52.3339 195.549 52.2296C195.772 52.1253 196.016 52.074 196.262 52.0797C196.563 52.1638 196.96 51.7911 196.467 51.6469C196.103 51.4995 195.785 51.2562 195.548 50.9429C195.311 50.6297 195.163 50.2581 195.12 49.8676V49.8676Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M196.576 50.4927C196.395 50.4927 196.275 50.4085 196.239 50.1681C196.239 50.1075 196.215 50.0494 196.172 50.0066C196.129 49.9637 196.071 49.9397 196.011 49.9397C195.95 49.9397 195.892 49.9637 195.849 50.0066C195.806 50.0494 195.782 50.1075 195.782 50.1681C195.71 50.9014 196.071 51.4665 197.201 51.5747C197.489 51.5747 197.537 51.5026 197.574 51.2741C197.653 50.8246 197.603 50.3618 197.429 49.9397C197.361 49.8169 197.249 49.7234 197.116 49.6769C196.984 49.6304 196.838 49.6341 196.708 49.6872C196.673 49.7054 196.643 49.733 196.622 49.7669C196.602 49.8009 196.591 49.8398 196.591 49.8796C196.591 49.9193 196.602 49.9583 196.622 49.9922C196.643 50.0261 196.673 50.0537 196.708 50.0719C196.75 50.0989 196.783 50.1391 196.8 50.1863C196.817 50.2335 196.818 50.2851 196.803 50.333C196.788 50.3809 196.758 50.4225 196.716 50.4513C196.675 50.4802 196.626 50.4948 196.576 50.4927V50.4927Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M197.387 56.0475C197.267 55.8552 196.954 56.1317 196.774 56.6126C196.663 56.8741 196.629 57.1621 196.678 57.4421C196.762 57.6946 196.978 57.4421 197.062 57.37C197.147 57.2978 197.062 56.9492 197.147 56.6847C197.231 56.4202 197.507 56.2279 197.387 56.0475Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M198.81 50.1085C198.485 49.5355 198.01 49.0622 197.436 48.7401C196.862 48.418 196.21 48.2592 195.552 48.2811C194.614 48.1969 195.287 47.704 195.552 47.8243C195.722 47.8849 195.902 47.9098 196.082 47.8973C196.262 47.8849 196.438 47.8355 196.598 47.7521C196.826 47.5958 196.598 47.4395 196.43 47.4636C196.231 47.4381 196.045 47.3496 195.901 47.2111C195.78 47.0909 195.047 46.7062 194.987 46.586C194.927 46.4658 194.59 46.4417 194.602 46.7182C194.614 46.9947 194.145 47.668 194.037 47.9204C193.929 48.1729 194.242 48.2691 193.953 48.5696C193.869 48.6418 194.109 48.9543 194.23 49.0986C194.36 49.215 194.517 49.2969 194.687 49.3368C194.857 49.3767 195.035 49.3733 195.203 49.327C195.574 49.1938 195.972 49.1537 196.362 49.2103C196.752 49.2669 197.122 49.4184 197.439 49.6516C197.703 50.0036 197.888 50.4074 197.983 50.8365C198.079 51.2655 198.082 51.7099 197.992 52.1402C197.884 52.9457 198.305 53.138 198.365 53.1861C198.425 53.2342 198.762 53.0298 198.582 52.9337C198.494 52.8458 198.445 52.7269 198.445 52.603C198.445 52.4791 198.494 52.3603 198.582 52.2724C198.931 51.6067 199.013 50.8325 198.81 50.1085V50.1085Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M159.307 32.7235C159.114 32.5552 158.778 32.7235 158.946 33.0722C159.043 33.3235 159.043 33.6022 158.946 33.8536C158.946 34.0099 159.03 34.1541 159.162 34.0339C159.331 33.8209 159.484 33.5959 159.619 33.3607C159.619 33.3607 159.691 33.2284 159.619 33.1804C159.54 33.0126 159.434 32.8584 159.307 32.7235V32.7235Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M159.752 36.1625C159.969 36.1625 159.993 36.0062 160.029 35.886C160.065 35.7657 160.029 35.5373 159.885 35.5133C159.74 35.4892 159.632 35.6816 159.584 35.8379C159.536 35.9942 159.548 36.1505 159.752 36.1625Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M158.692 34.7192C158.692 34.765 158.709 34.8092 158.74 34.8427C158.772 34.8761 158.814 34.8965 158.86 34.8995C158.908 34.8995 158.954 34.8805 158.988 34.8467C159.021 34.8129 159.04 34.767 159.04 34.7192C159.041 34.6702 159.022 34.623 158.988 34.5873C158.955 34.5515 158.909 34.5299 158.86 34.5269C158.836 34.5284 158.813 34.5346 158.792 34.5451C158.771 34.5556 158.752 34.5702 158.736 34.5881C158.72 34.6059 158.708 34.6267 158.701 34.6492C158.693 34.6717 158.69 34.6955 158.692 34.7192V34.7192Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.377 34.2395C157.37 34.2628 157.369 34.2873 157.374 34.3111C157.378 34.3348 157.388 34.3573 157.403 34.3766C157.417 34.3959 157.436 34.4116 157.458 34.4223C157.479 34.4331 157.503 34.4387 157.527 34.4387C157.552 34.4387 157.575 34.4331 157.597 34.4223C157.619 34.4116 157.638 34.3959 157.652 34.3766C157.667 34.3573 157.677 34.3348 157.681 34.3111C157.685 34.2873 157.684 34.2628 157.678 34.2395C157.678 34.1313 157.606 34.0352 157.533 34.0352C157.461 34.0352 157.377 34.1313 157.377 34.2395Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M147.936 38.3385C148.056 38.2664 148.044 38.062 147.936 37.9057C147.828 37.7494 147.671 37.6893 147.551 37.7735C147.431 37.8576 147.431 38.0379 147.551 38.1942C147.671 38.3505 147.876 38.4707 147.936 38.3385Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M161.957 40.8757C162.077 40.6833 161.62 40.0101 161.452 39.95C161.417 39.932 161.378 39.9214 161.339 39.919C161.299 39.9166 161.26 39.9223 161.222 39.9358C161.185 39.9494 161.151 39.9704 161.122 39.9977C161.094 40.0249 161.071 40.0578 161.055 40.0942V40.0942C160.911 40.4549 160.947 40.515 161.164 40.6833C161.38 40.8516 161.825 41.0801 161.957 40.8757Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M164.52 39.2884C164.518 39.2351 164.495 39.1848 164.457 39.1471C164.42 39.1093 164.369 39.0869 164.316 39.084C164.261 39.0839 164.207 39.105 164.167 39.1431C164.127 39.1811 164.103 39.2331 164.1 39.2884C164.1 39.3168 164.105 39.3449 164.116 39.3712C164.127 39.3974 164.143 39.4213 164.163 39.4414C164.183 39.4615 164.207 39.4774 164.233 39.4883C164.259 39.4992 164.288 39.5048 164.316 39.5048C164.371 39.5017 164.423 39.4775 164.461 39.4373C164.499 39.397 164.52 39.3437 164.52 39.2884Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M161.796 38.2185C162.409 38.4485 162.994 38.7469 163.539 39.1081C163.72 39.2404 164.044 39.1081 163.768 38.8316C163.491 38.5551 162.457 37.7015 162.157 37.9299C161.508 37.5332 161.58 38.1463 161.796 38.2185Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M154.748 34.8643C154.88 35.0086 155.085 35.2971 155.301 35.1529C155.518 35.0086 155.301 34.7321 155.181 34.6479C155.061 34.5638 154.844 34.2512 154.664 34.3714C154.484 34.4916 154.616 34.696 154.748 34.8643Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.917 85.7537C157.994 85.749 158.068 85.7218 158.13 85.6754C158.192 85.6291 158.239 85.5656 158.266 85.4928C158.292 85.4201 158.297 85.3412 158.279 85.2658C158.261 85.1905 158.221 85.1221 158.165 85.069C158.109 85.0159 158.038 84.9804 157.962 84.967C157.886 84.9535 157.807 84.9627 157.736 84.9933C157.665 85.0239 157.604 85.0746 157.562 85.1392C157.519 85.2038 157.496 85.2795 157.496 85.3569C157.496 85.4111 157.507 85.4648 157.528 85.5145C157.55 85.5643 157.581 85.6091 157.621 85.6463C157.66 85.6835 157.707 85.7122 157.758 85.7307C157.809 85.7491 157.863 85.757 157.917 85.7537V85.7537Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M159.89 82.147C160.13 81.8104 160.094 81.4017 159.746 81.6782C159.397 81.9547 159.481 82.2192 158.688 82.5438C157.894 82.8684 157.702 82.5438 157.69 82.3754C157.678 82.2071 157.474 82.111 157.353 82.3754C157.281 82.5163 157.25 82.6749 157.265 82.8326C157.28 82.9902 157.34 83.1403 157.438 83.2651C157.63 83.4695 157.702 83.2651 157.846 83.2651C158.573 82.9817 159.26 82.606 159.89 82.147V82.147Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.862 80.7998C157.73 80.7998 157.67 81.0402 157.718 81.2687C157.766 81.4971 157.922 81.6654 158.054 81.6414C158.186 81.6173 158.259 81.3889 158.211 81.1605C158.162 80.932 157.994 80.7637 157.862 80.7998Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.344 77.446C157.464 77.2657 157.176 77.1094 157.08 77.2056C157.024 77.2619 156.957 77.3066 156.884 77.3372C156.811 77.3677 156.732 77.3834 156.653 77.3834C156.574 77.3834 156.495 77.3677 156.422 77.3372C156.349 77.3066 156.282 77.2619 156.226 77.2056C156.13 77.1214 155.853 77.3619 156.01 77.5783C156.091 77.6684 156.192 77.739 156.304 77.7848C156.417 77.8306 156.538 77.8504 156.659 77.8427C156.794 77.8269 156.925 77.7835 157.043 77.7153C157.16 77.647 157.263 77.5554 157.344 77.446Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.713 79.7545C157.909 79.76 158.1 79.8182 158.266 79.9228C158.482 80.1139 158.731 80.2645 159 80.3677C159.384 80.4398 159.625 80.2715 159.637 80.1513C159.648 80.0972 159.647 80.0414 159.633 79.988C159.619 79.9346 159.593 79.8851 159.557 79.8433C159.521 79.8015 159.476 79.7685 159.425 79.7468C159.374 79.7252 159.319 79.7155 159.264 79.7185C158.893 79.7151 158.528 79.6289 158.194 79.466C158.038 79.3818 157.521 79.3097 157.341 79.5261C157.16 79.7425 156.824 79.6343 156.691 79.6463C156.559 79.6584 156.343 79.8627 156.403 80.1993C156.463 80.536 156.86 80.3797 156.848 80.2595C156.836 80.1392 157.028 79.9228 157.184 79.9469C157.341 79.9709 157.485 79.7425 157.713 79.7545Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M159.414 95.9239C159.571 95.8638 159.414 95.6234 159.414 95.5152C159.414 95.407 159.414 95.2627 159.258 95.2627C159.102 95.2627 159.054 95.4551 159.102 95.6113C159.15 95.7676 159.27 95.984 159.414 95.9239Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M158.39 88.7592C159.216 88.7163 160.039 88.6239 160.855 88.4827C161.732 88.3144 161.6 87.545 161.516 87.0882C161.347 87.0882 161.287 86.8958 161.287 86.6554C161.287 86.4149 161.287 86.1264 161.107 85.9941C160.927 85.8619 160.867 85.9941 160.855 85.9941C160.842 85.9941 160.65 86.6433 160.614 86.7876C160.578 86.9319 160.265 87.004 160.205 86.7876C160.145 86.5712 159.821 85.6696 159.809 85.5854C159.789 85.5329 159.783 85.4766 159.79 85.4211C159.797 85.3656 159.817 85.3127 159.849 85.2667C159.881 85.2207 159.923 85.1831 159.973 85.157C160.022 85.1308 160.077 85.117 160.133 85.1165C160.518 85.1165 160.867 84.8641 160.818 84.6597C160.77 84.4553 160.229 84.3712 159.616 84.4794L159.472 83.9624L158.979 84.0706C158.979 84.5274 159.448 86.475 159.508 86.7996C159.568 87.1242 159.508 87.1843 159.292 87.2324C159.075 87.2805 159.051 87.3526 158.991 87.0521C158.931 86.7515 158.474 86.7636 158.33 86.8477H158.053C157.885 86.5351 157.597 86.8477 157.621 87.4488C157.705 87.4488 157.849 87.6893 157.813 88.2182C157.777 88.7472 158.15 88.7592 158.39 88.7592Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M160.243 97.9797C160.255 98.0679 160.3 98.1481 160.369 98.204C160.439 98.2599 160.527 98.2872 160.616 98.2802C160.697 98.2432 160.762 98.1772 160.798 98.0949C160.833 98.0127 160.837 97.9202 160.808 97.8354C160.793 97.7462 160.745 97.6658 160.674 97.6101C160.603 97.5545 160.513 97.5276 160.423 97.5349C160.342 97.5718 160.278 97.6385 160.244 97.7213C160.211 97.8041 160.21 97.8965 160.243 97.9797V97.9797Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M159.437 92.041C159.533 92.1492 159.714 92.2093 160.195 92.1733C160.422 92.129 160.639 92.0391 160.831 91.9089C161.023 91.7788 161.187 91.611 161.313 91.4159C161.481 91.1394 161.084 90.959 161.024 91.2115C160.948 91.4228 160.797 91.5991 160.6 91.7075C160.403 91.8159 160.174 91.849 159.954 91.8006C159.967 91.7109 159.954 91.6194 159.917 91.5367C159.88 91.4541 159.82 91.3835 159.745 91.3333C159.669 91.283 159.581 91.2551 159.491 91.2527C159.4 91.2503 159.311 91.2735 159.233 91.3197C158.944 91.1754 158.752 91.5842 158.92 91.8968C159.089 92.2093 159.341 91.9328 159.437 92.041Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M160.668 96.7414C160.737 96.7337 160.807 96.7428 160.872 96.7679C160.937 96.7931 160.995 96.8334 161.041 96.8857C161.122 96.9426 161.218 96.9731 161.317 96.9731C161.416 96.9731 161.513 96.9426 161.594 96.8857C161.666 96.8135 161.774 96.7654 161.846 96.8857C161.918 97.0059 162.183 96.9818 162.171 96.5731C162.159 96.1643 161.942 95.9239 161.798 95.9479C161.654 95.972 161.642 96.1523 161.642 96.2365C161.649 96.3103 161.633 96.3846 161.596 96.4491C161.56 96.5136 161.504 96.5653 161.437 96.5971C161.366 96.639 161.282 96.6523 161.202 96.6344C161.122 96.6166 161.051 96.5689 161.004 96.501C160.944 96.4279 160.858 96.3806 160.764 96.3687C160.687 96.3674 160.613 96.3932 160.553 96.4416C160.494 96.49 160.454 96.5579 160.439 96.6332C160.439 96.7294 160.62 96.7414 160.668 96.7414Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M159.891 74.4286C160.023 74.5127 160.36 74.4286 159.891 73.7914C159.662 73.4788 159.482 73.4548 159.482 73.7914C159.459 73.9293 159.489 74.0708 159.564 74.1885C159.64 74.3062 159.756 74.3917 159.891 74.4286V74.4286Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M160.397 72.8784C160.397 72.638 160.397 72.3615 160.553 72.2653C160.709 72.1691 160.553 71.9167 160.385 71.9527C160.288 72.0045 160.205 72.0783 160.143 72.1681C160.08 72.2579 160.039 72.3612 160.024 72.4697C159.945 72.6706 159.945 72.8939 160.024 73.0948C160.192 73.179 160.409 73.1189 160.397 72.8784Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M161.247 75.4386C161.443 75.4151 161.627 75.3339 161.777 75.2056C161.927 75.0772 162.035 74.9073 162.088 74.7173C162.293 74.2025 162.364 73.6439 162.293 73.0943C162.221 72.8418 161.98 72.938 162.016 73.0943C162.096 73.6573 161.968 74.2302 161.656 74.7053C161.427 74.9818 161.247 74.9217 161.151 74.8375C161.054 74.7534 160.91 74.9217 160.91 75.09C160.913 75.1795 160.949 75.2648 161.011 75.3293C161.073 75.3937 161.157 75.4327 161.247 75.4386V75.4386Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.63 76.4124C157.63 76.6048 157.402 76.8693 157.306 76.9654C157.209 77.0616 157.45 77.1698 157.522 77.1217C157.594 77.0736 157.979 76.725 157.979 76.4845C157.979 76.2441 157.63 76.2201 157.63 76.4124Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M155.779 73.8156C156.007 73.5271 155.646 73.6473 155.49 73.7435C155.43 73.77 155.383 73.8186 155.358 73.8791C155.334 73.9397 155.334 74.0074 155.358 74.0681C155.382 74.1523 155.538 74.1162 155.779 73.8156Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.226 78.3364C157.189 78.3364 157.152 78.3439 157.117 78.3586C157.083 78.3732 157.052 78.3946 157.026 78.4216C157 78.4486 156.98 78.4805 156.967 78.5154C156.954 78.5504 156.948 78.5876 156.949 78.625C156.949 78.6613 156.957 78.6972 156.971 78.7308C156.984 78.7643 157.005 78.7948 157.03 78.8205C157.056 78.8462 157.087 78.8665 157.12 78.8804C157.154 78.8943 157.19 78.9015 157.226 78.9015C157.263 78.9031 157.301 78.8971 157.335 78.884C157.37 78.8708 157.402 78.8507 157.429 78.8249C157.456 78.799 157.478 78.768 157.492 78.7336C157.507 78.6993 157.515 78.6623 157.515 78.625C157.515 78.5484 157.484 78.475 157.43 78.4209C157.376 78.3668 157.303 78.3364 157.226 78.3364V78.3364Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M156.87 75.5947C157.015 75.6909 157.207 75.3543 157.027 75.2822C156.767 75.1746 156.485 75.1337 156.206 75.1631C155.927 75.1925 155.659 75.2913 155.428 75.4505C155.199 75.6789 155.5 76.1958 155.692 75.8953C155.824 75.7172 156.013 75.59 156.228 75.5352C156.443 75.4805 156.67 75.5015 156.87 75.5947V75.5947Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M157.769 74.2367C157.926 74.1406 157.877 73.9121 157.769 73.6957C157.661 73.4793 157.517 73.311 157.336 73.4433C157.156 73.5755 157.216 73.828 157.336 73.9722C157.457 74.1165 157.625 74.3449 157.769 74.2367Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M171.416 106.781C171.62 107.021 171.849 107.334 172.053 107.599L172.318 107.382C172.089 107.106 171.861 106.841 171.62 106.577L171.416 106.781Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M191.392 127.603C191.688 127.635 191.981 127.688 192.27 127.759C192.522 127.759 192.462 127.615 192.27 127.554C192.077 127.494 191.368 127.374 191.067 127.326L190.418 126.629L189.637 126.46L190.598 127.663L191.416 127.735L191.392 127.603Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M193.234 132.051C193.208 132.051 193.182 132.059 193.16 132.074C193.139 132.088 193.122 132.109 193.112 132.133C193.102 132.157 193.099 132.184 193.104 132.209C193.109 132.235 193.122 132.259 193.14 132.277C193.159 132.296 193.182 132.308 193.208 132.313C193.234 132.318 193.26 132.316 193.284 132.306C193.309 132.296 193.329 132.279 193.344 132.257C193.358 132.235 193.366 132.21 193.366 132.184C193.366 132.148 193.352 132.115 193.327 132.09C193.303 132.065 193.269 132.051 193.234 132.051V132.051Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M188.902 125.03H188.457L189.106 125.823L189.804 126.004L188.902 125.03Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M193.654 132.845C193.654 132.845 193.594 132.977 193.654 133.145C193.714 133.313 193.906 133.518 194.002 133.458C194.098 133.398 194.002 133.121 193.894 133.001C193.786 132.881 193.702 132.784 193.654 132.845Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M187.303 123.346L187.82 124.02H188.024L187.411 123.334L187.303 123.346Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M114.952 115.905L115.157 115.76C110.444 110.603 104.661 103.474 102.269 97.1382L102.064 97.2945C103.519 102.416 110.167 111.505 114.952 115.905Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M100.99 98.6409C102.192 105.349 110.103 113.933 111.81 115.171C113.517 116.41 115.994 118.309 116.859 119.151C116.968 119.259 116.992 119.571 116.775 119.535C116.077 119.475 115.404 119.244 114.816 118.862L114.695 119.066C115.596 119.826 116.429 120.663 117.184 121.567C117.135 120.444 117.24 119.319 117.497 118.225C117.917 118.129 118.146 118.008 118.086 117.744C118.026 117.48 117.797 117.467 117.485 117.48C117.172 117.492 115.008 117.311 112.051 114.726C109.093 112.142 102.914 105.037 101.231 98.4966L100.99 98.6409Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M194.296 133.998C194.745 134.714 195.116 135.475 195.402 136.27L196.1 136.595H196.184C195.717 135.635 195.149 134.728 194.489 133.89C194.38 133.71 194.212 133.794 194.296 133.998Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M203.794 138.375C203.796 138.124 203.725 137.877 203.59 137.665C202.135 134.744 195.078 128.288 194.754 127.819C193.186 125.395 191.861 122.822 190.798 120.137C189.798 117.373 188.414 114.762 186.687 112.383C186.355 111.889 186.084 111.356 185.881 110.796C185.653 110.267 183.573 103.414 181.986 99.5553L182.395 99.3029L182.852 97.3793C185.064 96.7662 186.182 90.4426 186.458 88.3267C187.228 87.8939 187.228 84.4435 187.264 83.2894L187.011 82.6883C188.105 79.7068 187.48 68.0333 187.228 66.3863C187.146 64.1941 187.178 61.9991 187.324 59.8102C186.23 58.4998 186.23 54.4844 186.122 53.3063C186.119 52.2633 186.307 51.2285 186.675 50.2526C186.835 49.9376 186.89 49.5793 186.831 49.2308L187.805 49.7838C187.779 49.6569 187.786 49.5256 187.824 49.4018C187.861 49.278 187.929 49.1655 188.021 49.0745C188.202 48.8821 187.925 48.8581 187.733 48.822C187.54 48.7859 187.336 48.9182 187.047 48.6417C186.759 48.3652 186.927 47.7641 187.047 47.5717L186.266 46.7061L186.639 48.8821L186.146 49.6034C186.092 49.4009 186.019 49.2038 185.929 49.0144C185.773 48.6657 185.485 48.8821 185.545 49.0144C185.702 49.8081 185.702 50.625 185.545 51.4188C185.484 50.8923 185.309 50.3856 185.03 49.9347C184.752 49.4838 184.377 49.0998 183.934 48.81L183.814 49.0625C184.21 49.1586 184.523 50.0964 184.427 50.2647C184.249 50.7607 184.116 51.2717 184.03 51.7915L183.501 50.8297L183.309 50.986L184.03 52.6691C184.03 53.0658 184.246 54.4003 184.342 55.4943C184.186 55.2779 183.405 53.9074 183.14 53.5707L182.96 53.691C184.255 55.9919 185.338 58.4064 186.194 60.9042C186.014 60.7479 185.761 60.9042 185.701 61.0605C185.232 60.219 183.826 57.3818 183.2 56.5402L182.984 56.6965C184.142 58.8468 185.173 61.0626 186.074 63.3327C184.663 62.1619 183.33 60.901 182.082 59.5578L181.77 59.714C182.527 60.1829 185.509 64.5229 186.35 65.9776C186.074 65.5688 184.703 64.607 184.078 63.7655H183.886L182.575 62.2627H182.058C183.71 64.0907 185.139 66.1086 186.314 68.2738C185.725 67.6246 183.801 66.194 182.707 64.8836H182.287C182.84 65.4726 185.016 68.4902 186.699 70.7624L186.603 70.8585C186.034 70.182 185.398 69.5657 184.703 69.0192C183.88 68.4492 183.174 67.7268 182.623 66.8912H182.034C183.236 68.394 185.388 71.3875 186.663 73.287V73.5034C186.501 73.2753 186.302 73.0762 186.074 72.9143C185.5 72.4775 184.997 71.9543 184.583 71.3635C184.018 70.582 183.092 70.3416 182.635 69.5722L182.275 69.8006C183.176 71.2312 186.134 74.8138 186.639 75.8117C185.569 74.8138 182.022 71.64 181.529 71.135L181.337 71.3875L182.311 72.3493C182.846 73.2998 183.47 74.1975 184.174 75.0302C185.07 75.9584 185.801 77.0315 186.338 78.2041C183.693 75.7996 182.443 75.1504 180.832 73.2269L180.736 73.3832C181.505 74.4171 185.064 78.4806 185.965 80.0675C183.946 78.4565 182.575 76.9538 181.758 76.3046L181.601 76.4248C181.113 75.8424 180.586 75.2923 180.027 74.7778C180.254 73.4925 180.414 72.1964 180.507 70.8946C179.089 69.2455 177.474 67.7759 175.699 66.5186L175.614 66.6027C177.528 68.1348 179.008 70.1407 179.906 72.4214L179.822 73.0105C178.945 72.0848 176.143 68.6946 173.895 67.5044L173.811 67.5885C176.208 69.588 178.151 72.0758 179.51 74.886L179.425 75.2827C178.019 73.4553 174.34 69.6203 172.068 68.4782L171.996 68.6104C174.713 70.3416 178.079 75.1264 178.74 76.6893C179.065 77.4467 178.584 77.086 178.235 76.8095C177.887 76.533 173.114 71.3635 171.311 70.2094L171.178 70.3656C172.537 71.5678 176.42 75.7275 177.021 77.2663C174.641 75.7217 172.433 73.9284 170.433 71.9165L170.277 72.1569C171.619 73.561 172.883 75.0379 174.064 76.5811C172.592 75.8305 171.174 74.9789 169.82 74.0324C169.639 73.828 169.327 73.6357 169.219 73.6717C169.11 73.7078 168.425 72.9504 168.425 72.9504L168.245 73.1187L168.906 73.828C168.906 73.9122 168.906 74.1406 169.171 74.3329C164.879 73.2149 160.611 70.041 160.298 69.3317C161.278 68.5623 162.074 67.5851 162.631 66.4705C163.128 66.4036 163.59 66.1719 163.94 65.8124C164.291 65.4529 164.511 64.9862 164.566 64.4868C165.275 64.2704 166.333 62.1545 166.442 60.8802C167.212 60.3118 167.848 59.5813 168.305 58.7403C169.627 58.3916 170.373 56.5041 171.058 54.0877C174.4 52.104 172.417 48.9062 172.08 46.2373C171.743 43.5683 171.924 41.8492 173.691 40.2262C173.258 40.9821 173.013 41.8305 172.976 42.7005C172.938 43.5706 173.109 44.437 173.475 45.2274C174.039 46.5859 174.086 48.1044 173.607 49.4952C173.378 49.8559 173.607 49.9882 173.763 49.8319C174.984 48.8948 175.811 47.5358 176.083 46.0209C176.101 45.2323 176.343 44.4651 176.781 43.8088C176.863 44.1119 176.863 44.4314 176.781 44.7345C176.781 45.0471 176.853 45.2514 177.153 44.9629C178.279 44.0774 179.243 43.0036 180.003 41.7891C180.411 40.8033 180.82 41.4164 180.856 41.6809C180.892 41.9454 181.625 42.0295 181.625 41.8131C181.625 38.4109 184.499 35.0447 186.518 33.6381C187.165 33.1499 187.926 32.8378 188.729 32.7325C189.532 32.6271 190.349 32.732 191.099 33.037C191.292 33.0254 191.484 33.0663 191.655 33.1552C191.827 33.244 191.971 33.3777 192.073 33.5419C192.205 33.8304 192.554 33.6381 192.626 33.7703C193.189 34.8112 193.675 35.8921 194.08 37.0043C194.08 37.1606 194.008 38.0141 193.996 38.3027C193.984 38.5912 193.708 38.6633 193.684 38.4589C193.621 38.1951 193.493 37.9512 193.311 37.7496C193.186 36.8177 192.879 35.9192 192.409 35.1048C192.145 34.6479 191.592 34.5998 191.52 34.3113C191.399 33.7944 190.125 33.1091 187.997 34.2031C185.983 35.2591 184.463 37.0635 183.765 39.2284C183.669 40.1911 183.288 41.1033 182.671 41.8492C182.371 42.1497 182.443 42.5104 182.756 42.2339C183.068 41.9574 185.641 40.1781 186.362 39.565C186.55 39.9398 186.661 40.3487 186.687 40.7672C186.687 41.1038 187.288 41.5607 187.997 41.8492C187.714 41.5691 187.495 41.2306 187.356 40.8574C187.217 40.4842 187.161 40.0851 187.192 39.6881C187.223 39.291 187.34 38.9055 187.535 38.5582C187.73 38.211 187.999 37.9105 188.322 37.6775C189.909 36.3431 191.928 36.5594 192.073 37.4611C191.596 37.3287 191.094 37.3143 190.61 37.419C190.126 37.5237 189.675 37.7444 189.296 38.0622C188.918 38.4232 188.644 38.8798 188.504 39.3835C188.365 39.8872 188.364 40.4193 188.502 40.9235C188.622 41.224 189.199 41.9814 189.512 41.1038C189.657 40.6716 189.896 40.277 190.212 39.9485C190.528 39.62 190.913 39.3658 191.339 39.2043C191.628 39.1081 192.001 39.3486 191.496 39.6612C190.794 40.2503 190.26 41.013 189.945 41.8732C189.861 42.1016 189.861 42.2459 190.053 42.2339C189.976 42.6825 189.94 43.1372 189.945 43.5924C189.945 43.6338 189.961 43.6736 189.991 43.7029C190.02 43.7322 190.06 43.7487 190.101 43.7487C190.143 43.7487 190.182 43.7322 190.212 43.7029C190.241 43.6736 190.257 43.6338 190.257 43.5924C190.294 43.225 190.383 42.8647 190.522 42.5224C190.606 42.3661 190.522 42.3421 190.522 42.318C190.197 42.1618 191.532 40.671 192.001 40.3103C192.469 39.9497 192.77 40.13 192.373 40.4426C192.17 40.6398 192.01 40.8777 191.904 41.1407C191.799 41.4038 191.749 41.6861 191.76 41.9694L192.061 42.0536C192.097 41.7 192.206 41.3577 192.379 41.0476C192.553 40.7375 192.788 40.4662 193.071 40.2502C193.383 40.0459 193.491 40.1541 193.299 40.4185C193.165 40.6915 193.087 40.9887 193.071 41.2924C193.054 41.596 193.099 41.8999 193.203 42.1858H193.455C193.551 40.647 197.062 36.9562 197.567 36.4272C198.072 35.8982 198.276 36.0185 198.372 36.2349C198.576 37.582 198.456 38.9583 198.024 40.2502C197.635 40.5252 197.345 40.9168 197.194 41.3683C196.665 41.2962 196.677 41.7169 197.014 41.753C197.776 41.849 198.488 42.1859 199.046 42.7148C199.046 42.7989 199.406 42.7148 199.358 42.5585C199.13 41.8612 200.212 38.0983 199.106 35.5255C201.45 36.5114 200.224 41.3322 200.067 41.9694C200.027 42.2226 199.915 42.459 199.744 42.6506C199.574 42.8423 199.352 42.9814 199.106 43.0514C198.733 43.1235 196.172 43.4842 195.8 43.5443C195.427 43.6044 195.679 43.917 195.956 43.8569C196.947 43.6792 197.969 43.8312 198.865 44.2897C199.298 44.5061 199.935 45.0952 199.478 44.999C195.03 44.1334 192.265 46.9946 191.291 47.8242C191.291 47.1389 190.895 47.2591 190.895 47.4395C190.841 47.8307 190.683 48.2002 190.438 48.5094C190.053 48.9783 189.933 48.5094 189.728 48.6417C189.524 48.7739 189.26 48.2449 189.007 48.2449C189.152 47.7531 189.177 47.2336 189.079 46.7302C188.947 46.4536 188.731 46.4777 188.731 46.7302C188.692 47.3918 188.612 48.0503 188.49 48.7018L189.356 49.4712C188.973 50.0793 188.67 50.7338 188.454 51.4188C188.454 51.6352 188.574 51.8396 188.731 51.515C189.055 51.097 189.4 50.6957 189.764 50.3127C189.897 50.433 189.909 50.6013 190.029 50.7215C190.185 51.9237 191.231 58.0309 192.433 60.2671C192.433 60.4835 192.433 60.8802 192.337 61.2168C192.241 61.5534 191.82 61.9622 191.628 61.3731C191.487 60.6325 191.447 59.8763 191.508 59.125C191.508 58.8124 191.111 58.8725 191.111 58.9927C191.111 59.1129 190.919 60.0747 190.834 60.7239C190.75 61.3731 190.402 61.4092 190.245 60.7239C190.114 59.7439 190.07 58.7542 190.113 57.7665C190.113 57.3577 189.873 57.2375 189.776 57.4178C189.55 57.9896 189.377 58.5812 189.26 59.1851C189.163 59.7621 188.887 59.7381 188.827 59.1851C188.798 57.8903 188.911 56.5962 189.163 55.326C189.38 54.773 188.887 54.7008 188.767 54.9533C188.452 55.819 188.203 56.7071 188.021 57.6102C187.961 58.079 187.865 58.055 187.805 57.6102C187.613 55.8308 187.805 54.0308 188.37 52.3325C188.514 52.0319 188.298 52.0199 188.141 52.2002C187.217 53.667 186.776 55.3866 186.879 57.1173C186.879 60.1348 188.454 61.0365 190.738 62.1185C193.022 63.2005 194.345 64.6311 194.405 65.4486C194.444 65.9794 194.664 66.4805 195.03 66.8672C194.814 70.2334 194.934 70.4738 195.21 70.9187C195.391 70.9187 195.487 71.4837 196.725 71.628C196.915 71.7023 197.125 71.7023 197.314 71.628C197.495 71.4717 197.495 71.2793 197.194 71.3755C196.785 71.404 196.38 71.2845 196.052 71.0389C195.997 70.6712 195.857 70.3214 195.643 70.017C195.836 69.8607 195.86 68.8148 195.92 68.2618C195.98 67.7087 196.413 68.1295 196.449 68.5022C196.485 68.8749 196.569 69.2115 196.821 69.2115C197.074 69.2115 197.098 69.6804 196.966 69.9809C196.605 69.6203 196.365 69.8006 196.449 70.0531C196.566 70.3054 196.753 70.5194 196.987 70.6704C197.221 70.8214 197.493 70.9033 197.771 70.9066C198.24 70.9066 198.613 70.1372 198.613 69.7044C199.899 70.9788 200.921 71.099 201.294 70.7263C201.774 70.2174 202.35 69.8088 202.989 69.5241C203.344 69.3195 203.64 69.0277 203.851 68.6764C204.061 68.325 204.178 67.9257 204.191 67.5164C204.359 66.0659 204.64 64.6309 205.033 63.2245C205.086 62.991 205.086 62.7486 205.033 62.5152C204.965 62.4551 204.917 62.3757 204.895 62.2876C204.874 62.1995 204.88 62.1069 204.912 62.0223C204.967 61.8808 204.986 61.7284 204.969 61.5778C204.953 61.4272 204.9 61.2828 204.816 61.1567C204.936 61.0605 204.6 60.8441 204.419 60.9403C204.078 61.0539 203.721 61.1147 203.361 61.1206C203.085 61.1206 202.989 61.5174 202.965 61.854C201 62.0727 199.134 62.8253 197.567 64.03C197.807 64.7032 198.18 64.7032 198.336 64.3426C198.526 64.0175 198.79 63.7416 199.106 63.5371C200.308 64.0901 199.911 64.583 199.815 64.7994C199.719 65.0158 200.031 65.2683 200.248 64.8956C200.63 64.3137 201.087 63.7842 201.606 63.3207C201.979 63.0442 202.003 62.6354 201.702 62.5152C202.097 62.4051 202.499 62.3207 202.905 62.2627L202.833 62.9119C203.236 63.0713 203.566 63.3745 203.759 63.763C203.953 64.1516 203.995 64.5979 203.878 65.0158C203.782 65.7731 203.741 66.5367 203.758 67.3L203.085 67.8891L202.953 67.4202L203.542 66.771C203.511 66.5027 203.459 66.2374 203.386 65.9776C203.301 65.7011 202.808 65.9776 202.833 66.1579C202.857 66.3382 202.219 66.5546 202.063 66.6268C201.866 66.4067 201.733 66.137 201.678 65.8467C201.623 65.5565 201.648 65.2567 201.751 64.9797C202.099 64.2464 202.279 64.8956 202.496 65.3524C202.712 65.8093 202.772 65.6289 203.265 65.2683C203.423 65.1794 203.543 65.0373 203.605 64.8676C203.666 64.6979 203.665 64.5116 203.602 64.3426C203.469 64.0371 203.304 63.7469 203.109 63.477C203.07 63.4189 203.019 63.3698 202.96 63.333C202.9 63.2961 202.833 63.2724 202.764 63.2633C202.695 63.2542 202.624 63.2599 202.557 63.2802C202.49 63.3005 202.428 63.3348 202.376 63.3808C201.782 64.0556 201.31 64.8285 200.981 65.665C200.933 65.9459 200.95 66.2341 201.031 66.5073C201.113 66.7805 201.256 67.0312 201.45 67.2399C201.666 67.4563 202.4 68.1656 202.063 68.6946C201.726 69.2235 200.488 68.7907 200.091 68.4782L199.935 68.6585C200.116 68.911 200.825 69.4039 200.392 69.8607C199.959 70.3175 199.009 69.3678 198.913 68.8388C198.783 68.199 198.556 67.5828 198.24 67.0115C198.348 66.7524 198.403 66.4746 198.403 66.194C198.403 65.9134 198.348 65.6355 198.24 65.3765C198.048 65.3765 197.831 65.2202 197.651 65.7251C197.362 66.5186 197.314 67.1076 196.112 67.0716C195.605 66.657 195.279 66.0616 195.203 65.411C195.126 64.7605 195.306 64.1058 195.703 63.5852C195.956 63.3447 196.256 63.0562 195.884 62.8759C193.744 61.842 190.762 51.9237 190.522 50.5893C190.592 50.4343 190.628 50.2663 190.628 50.0963C190.628 49.9264 190.592 49.7584 190.522 49.6034L191.111 49.0745C191.544 49.0745 191.508 48.6176 191.387 48.3411C195.126 45.2154 197.038 45.4678 198.601 45.4678L198.877 45.8045L198.697 46.2373C198.96 47.0104 199.022 47.8379 198.877 48.6417C198.625 48.6417 198.505 49.0384 198.661 49.1105C199.418 49.4351 199.43 51.8876 199.743 52.1642C199.743 52.8975 199.839 54.5686 199.839 54.8812C199.839 55.1937 200.055 55.2779 200.019 55.4342C199.992 55.5526 199.995 55.6758 200.026 55.7932C200.057 55.9105 200.117 56.0184 200.2 56.1074C199.863 56.1074 199.803 56.5642 199.863 56.8167C199.683 56.8167 199.214 56.9369 199.683 57.2134C200.152 57.49 200.572 56.7927 200.729 56.6123C200.787 56.5366 200.819 56.4436 200.819 56.3478C200.819 56.2521 200.787 56.1591 200.729 56.0834C200.575 55.8257 200.461 55.5459 200.392 55.2538C200.355 54.3951 200.387 53.5347 200.488 52.6811C201.378 53.2101 201.57 54.9653 201.63 55.6506C201.63 55.6506 201.378 55.8189 201.474 56.0353C201.57 56.2517 202.556 59.0408 202.676 59.4496C202.796 59.8583 202.772 60.1228 202.556 60.243C202.174 60.4751 201.771 60.6723 201.354 60.8321C201.005 60.9283 201.258 61.325 201.414 61.2529C201.895 61.0124 202.544 60.6157 202.881 60.7119C203.195 60.7619 203.518 60.7025 203.794 60.5436C203.86 60.5 203.91 60.436 203.936 60.3613C203.962 60.2867 203.963 60.2055 203.938 60.1304C203.914 60.0553 203.865 59.9903 203.8 59.9455C203.735 59.9006 203.657 59.8785 203.578 59.8824C204.059 59.6299 203.217 57.8987 203.313 56.1435L202.82 55.5063C203.097 54.5325 203.566 52.633 203.638 52.3445C203.71 52.056 203.422 51.7915 203.277 51.515C203.133 51.2385 202.075 47.9083 201.979 47.2471C202.4 47.3914 203.446 46.3455 203.866 44.5902C204.287 42.835 204.359 40.2502 203.241 40.7431C203.429 39.9833 203.333 39.1811 202.973 38.4864C202.612 37.7917 202.011 37.252 201.282 36.9682C201.438 35.4534 199.43 34.0468 198.685 34.7201C197.711 33.3976 196.461 32.8326 195.679 33.602C195.198 32.2676 193.143 31.6063 192.421 32.3998C191.81 32.0067 191.112 31.7666 190.388 31.6996C189.665 31.6327 188.935 31.7409 188.262 32.0151C187.625 31.5582 185.388 31.3178 182.888 33.3015C182.084 33.2165 181.271 33.3151 180.511 33.59C179.751 33.8649 179.063 34.3089 178.5 34.8884C177.682 34.5878 175.999 36.0906 175.134 36.8119C174.977 36.9442 175.037 37.413 175.037 37.8338C174.316 39.2644 173.511 39.036 173.366 39.6371C171.407 39.8415 169.579 43.1476 169.387 44.6022C168.173 45.5237 167.322 46.8431 166.983 48.3291C165.78 48.7619 165.119 50.8177 165.119 51.3827C164.109 51.6352 163.917 53.6188 163.917 54.3882C163.123 54.7832 162.447 55.3803 161.957 56.1194C161.06 53.3524 159.282 50.9546 156.896 49.2909C155.365 46.8236 153.023 44.9661 150.272 44.0372C150.392 43.7968 150.272 43.5683 149.791 43.3399C148.228 42.6494 146.866 41.5716 145.836 40.2084C144.805 38.8453 144.139 37.2418 143.9 35.5496L144.525 35.4294C144.723 36.1515 145.058 36.829 145.511 37.425C145.667 37.6294 145.884 37.5573 145.764 37.3168C145.572 36.8551 145.443 36.37 145.379 35.8742C145.379 35.5255 145.547 35.5616 145.679 35.6217C146.761 36.1627 152.292 39.8415 154.624 39.9737C154.852 40.2502 155.081 40.5628 155.285 40.8393C155.489 41.1158 155.405 41.5366 155.021 41.3803C154.304 41.0857 153.667 40.6289 153.157 40.0459C152.929 39.7694 152.628 39.8776 152.76 40.0459C152.893 40.2142 153.758 41.2481 153.963 41.5246C154.167 41.8011 154.047 42.1497 153.482 41.8492C152.634 41.4183 151.882 40.8214 151.27 40.0939C150.945 39.6612 150.572 39.8776 150.741 40.2262C151.16 40.9309 151.639 41.5985 152.171 42.2219C152.376 42.4383 152.328 42.6426 152.075 42.4503C150.817 41.4621 149.661 40.3506 148.625 39.1322C148.42 38.8316 148.228 39.1322 148.252 39.3366C148.662 40.0739 149.141 40.7703 149.683 41.4164C149.935 41.729 150.2 42.0055 149.683 41.753C148.186 40.8084 146.947 39.5072 146.076 37.966C145.98 37.7256 145.655 37.7737 145.776 37.966C148.829 44.5662 152.76 43.4361 154.552 42.5104C155.928 41.7581 157.5 41.4436 159.06 41.6087C159.829 41.729 160.358 42.3782 161.08 42.2098C161.813 42.9312 163.316 44.6143 164.169 44.6143C164.503 44.5945 164.83 44.5077 165.129 44.359C165.429 44.2102 165.695 44.0027 165.913 43.7487C166.141 43.4481 165.913 43.1836 165.768 43.3399C165.513 43.6852 165.149 43.9349 164.734 44.0492C163.989 44.0492 163.232 43.0875 162.631 42.4262C162.029 41.765 163.039 41.8612 163.34 42.294C163.369 42.3315 163.406 42.3618 163.449 42.3826C163.492 42.4035 163.539 42.4143 163.586 42.4143C163.634 42.4143 163.681 42.4035 163.723 42.3826C163.766 42.3618 163.804 42.3315 163.833 42.294C164.001 42.1016 164.506 42.0295 164.53 42.6306C164.073 42.7268 164.133 42.9913 164.53 43.0634C164.774 43.103 165.024 43.0808 165.257 42.9989C165.49 42.917 165.699 42.778 165.864 42.5946C166.105 42.1978 165.756 41.7049 165.456 41.2721C166.79 41.0437 167.572 40.7672 167.752 40.2743C167.815 40.1193 167.842 39.9518 167.829 39.7849C167.816 39.618 167.765 39.4563 167.68 39.3125C167.812 39.3125 167.908 38.4229 167.908 38.0502C168.077 38.0502 168.149 37.2567 168.016 36.9201C167.884 36.5835 167.379 35.7179 167.115 35.6337C166.198 34.6185 165.347 33.5464 164.566 32.4238C164.434 32.2195 164.434 32.0151 164.097 32.0151C163.946 32.0452 163.79 32.0173 163.658 31.9372C163.527 31.857 163.43 31.7303 163.388 31.5823C163.196 31.1615 162.582 31.1255 162.474 31.3899C162.374 31.6964 162.233 31.9876 162.053 32.2555C161.813 32.5801 161.849 32.8446 162.174 33.0129C161.275 34.6864 160.681 36.5058 160.418 38.3868L161.116 38.5792L161.224 38.2906C160.984 37.4852 160.875 36.9682 161.476 36.7999C161.687 36.7576 161.905 36.7867 162.096 36.8825C162.288 36.9783 162.442 37.1354 162.534 37.3289C162.703 37.5573 163.015 37.4371 162.907 36.9922C162.632 36.3867 162.476 35.7334 162.45 35.0687C162.45 34.2752 161.957 34.4075 161.753 34.708C161.933 34.2579 162.15 33.8236 162.402 33.4097C162.594 33.614 162.943 33.9386 163.28 33.7463C163.502 33.6596 163.743 33.6297 163.98 33.659C164.217 33.6884 164.443 33.7762 164.638 33.9146C164.999 34.1791 165.997 35.3693 166.454 35.766C166.91 36.1627 166.718 36.9682 166.622 37.3289C166.454 37.0111 166.375 36.6539 166.393 36.295C166.396 36.1269 166.341 35.9631 166.239 35.8299C166.136 35.6968 165.991 35.6023 165.828 35.5616C165.299 35.3693 165.263 35.5616 165.299 35.766C165.324 36.1198 165.304 36.4752 165.239 36.8239C164.941 36.805 164.652 36.7142 164.397 36.5592C164.141 36.4043 163.927 36.1899 163.773 35.9343C163.412 35.2971 164.398 35.6698 164.53 35.7059C164.568 35.7187 164.608 35.7235 164.648 35.72C164.688 35.7165 164.726 35.7048 164.761 35.6856C164.796 35.6664 164.827 35.6401 164.851 35.6084C164.876 35.5767 164.893 35.5403 164.903 35.5015C164.998 35.1879 164.998 34.8533 164.903 34.5397C164.77 34.2031 163.845 34.0108 163.472 34.0709C163.099 34.131 162.979 34.4436 163.015 34.8764C163.109 35.5378 163.321 36.177 163.64 36.7638C163.781 37.0086 163.977 37.2168 164.213 37.3714C164.449 37.526 164.718 37.6227 164.999 37.6535C165.432 37.6535 166.658 37.4852 166.826 38.1223C166.995 38.7595 165.828 39.2163 165.528 39.3245C165.227 39.4327 165.336 39.577 165.528 39.577C167.151 39.577 166.598 40.4306 166.093 40.5869C165.669 40.6969 165.219 40.6455 164.831 40.4426C164.506 40.2502 163.737 39.7573 163.184 39.9136C162.895 39.4734 162.523 39.0936 162.09 38.7956C161.957 38.7234 161.657 39.0841 161.789 39.2524C161.921 39.4207 162.486 40.4546 162.15 41.0076C161.813 41.5607 161.356 41.4885 160.695 41.4044C159.721 41.2841 159.048 39.8776 159.036 39.3606C159.024 38.8437 158.663 38.8797 158.291 38.9519C155.405 39.5049 146.473 35.7179 145.319 34.3834C145.282 34.1645 145.282 33.9411 145.319 33.7222C145.679 33.2534 145.511 33.0971 145.018 32.9889C144.862 28.0839 146.112 26.9778 147.242 25.7756C147.663 25.3067 147.903 25.6794 147.867 25.8477C147.831 26.0161 148.36 26.1483 148.625 26.2805C148.889 26.4128 150.103 27.2904 149.995 27.4226C149.887 27.5549 149.647 27.9997 150.476 27.9035C151.306 27.8073 154.083 29.9834 155.393 31.1856C155.718 31.0533 156.115 31.5462 156.355 31.4741C156.187 31.7145 156.355 32.2074 156.619 32.1714C156.451 32.2435 156.379 32.6402 156.619 32.6402C156.86 32.6402 157.148 32.1473 157.112 31.8107C157.076 31.4741 156.992 31.0774 156.752 31.0774C155.958 31.0774 154.347 29.5986 153.806 28.9374C155.189 28.6369 156.391 29.791 156.98 30.0555C156.98 30.2478 156.98 30.5123 157.353 30.5845C158.372 30.8659 159.376 31.203 160.358 31.5943C161.164 31.9069 160.791 32.9648 160.599 33.5659C160.503 33.8545 160.791 33.9146 160.911 33.6261C161.084 33.0261 161.352 32.4578 161.705 31.943C162.078 31.5703 161.705 31.3058 161.5 31.1735C160.37 30.5566 159.282 29.8658 158.242 29.1057H157.485C156.802 28.2319 156.168 27.3208 155.586 26.3767C155.489 26.2084 155.333 26.1723 155.165 26.1122C153.638 25.6917 152.177 25.0605 150.825 24.2368C151.234 23.7679 150.825 22.1089 149.935 20.8946C149.046 19.6804 147.531 18.1656 146.797 18.9471C146.338 18.3776 145.707 17.9725 144.998 17.7925C144.289 17.6126 143.541 17.6676 142.866 17.9492C142.001 17.4683 140.053 17.0956 139.404 18.4782C138.117 18.37 136.999 18.5383 136.639 19.8728C136.334 19.7709 136.012 19.7343 135.692 19.7655C135.373 19.7966 135.063 19.8948 134.784 20.0537C134.505 20.2125 134.263 20.4283 134.073 20.6872C133.882 20.946 133.749 21.242 133.681 21.5559C133.005 21.7787 132.387 22.1487 131.872 22.6394C131.356 23.13 130.956 23.729 130.7 24.3931C129.774 24.7778 129.197 25.6554 127.225 28.4205C125.688 31.0811 123.67 33.4332 121.274 35.3572C120.974 35.5857 120.974 35.8742 121.347 35.9343C122.511 35.9193 123.666 35.7288 124.773 35.3693C123.796 36.6591 122.57 37.7386 121.166 38.5431C120.433 38.8917 120.758 39.1202 121.286 39.024C122.832 38.8114 124.315 38.2748 125.638 37.4491C124.601 39.3118 122.875 40.6931 120.83 41.2962C120.733 41.2962 120.601 41.3563 120.83 41.5486C122.307 42.1154 123.949 42.0765 125.398 41.4404C125.398 42.859 123.354 45.1673 120.373 45.2995C121.082 46.3334 122.453 46.7662 125.663 45.7564C124.706 47.1352 123.575 48.3839 122.296 49.4712C122.916 49.6609 123.574 49.6864 124.206 49.5452C124.838 49.404 125.423 49.1009 125.903 48.6657C125.178 50.1386 124.12 51.4227 122.813 52.4166V52.5849C123.571 52.6384 124.332 52.5322 125.046 52.2734C125.761 52.0145 126.413 51.6087 126.961 51.0822C126.179 52.5867 125.114 53.9257 123.823 55.0254V55.3019C124.715 55.4268 125.624 55.3236 126.465 55.0019C127.306 54.6803 128.051 54.1506 128.632 53.4625C127.573 55.7188 126.197 57.8119 124.544 59.678L124.629 59.9064C125.599 59.8927 126.554 59.6582 127.42 59.2208C128.287 58.7834 129.042 58.1545 129.63 57.3818C129.053 59.3041 128.137 61.1078 126.925 62.7075L127.045 62.936C127.869 62.8444 128.664 62.5835 129.382 62.1697C130.1 61.7559 130.725 61.1982 131.217 60.5315C130.984 62.206 130.192 63.7526 128.969 64.9196L129.137 65.124C130.339 64.7513 132.611 63.6333 133.321 61.9862C133.481 63.1029 133.413 64.2405 133.119 65.3297C132.826 66.419 132.313 67.4371 131.613 68.3219V68.5864C132.628 68.4229 133.588 68.0174 134.413 67.4043C135.237 66.7911 135.902 65.9883 136.35 65.0639C136.341 66.9283 135.986 68.7748 135.304 70.5099L135.677 71.7121C134.978 72.9781 133.969 74.0466 132.746 74.818C131.523 75.5895 130.124 76.0388 128.68 76.1242C124.917 75.7876 120.024 75.992 117.079 77.2543C101.234 76.3767 95.6673 81.8828 92.9503 83.8785C92.534 84.1482 92.0362 84.2631 91.5438 84.2031C90.9787 84.2031 83.6212 83.9266 79.9665 85.6818C74.6767 88.2185 69.1466 96.0208 68.4613 105.061C68.3892 106.119 68.9542 106.107 69.6635 105.987C71.7313 105.626 74.5685 103.859 76.8768 99.2788C78.6681 95.7563 80.3391 93.2678 83.2124 91.3803C87.8049 88.4108 94.4772 87.2086 102.087 86.7758C107.293 83.5419 114.698 78.2882 121.323 77.1581C124.34 76.6412 131.986 77.7111 138.154 77.1581C142.451 76.8746 146.699 76.0671 150.801 74.7537C151.131 74.6171 151.501 74.6092 151.837 74.7316C152.173 74.854 152.451 75.0978 152.616 75.4149C153.742 77.1517 154.556 79.0721 155.021 81.0894C154.516 80.4161 153.674 79.25 153.001 78.2882L152.748 78.4926C153.289 79.25 154.72 81.3779 155.946 83.3014L156.319 85.5255C154.767 83.2396 153.102 81.0328 151.33 78.9134L151.077 79.0696C152.279 80.5003 155.105 84.5157 156.487 86.4512L156.86 88.7955C156.439 88.0021 151.642 81.6664 149.971 79.7309L149.743 79.9112C151.041 81.5462 155.946 88.495 156.956 90.3825L157.16 92.3541C154.566 88.2287 151.694 84.2844 148.565 80.5484L148.276 80.7167C151.63 84.5758 155.225 90.9355 157.413 94.494L157.653 96.3815C155.73 92.0295 149.406 84.2872 146.894 81.5222L146.629 81.7025C149.767 85.0927 156.151 96.0449 157.87 99.0624C157.87 99.0624 157.954 100.156 157.93 100.12C156.319 96.9585 148.312 85.249 145.259 82.4358L145.054 82.6041C148.072 85.8742 155.141 97.9323 157.87 101.996L158.038 104.256C155.73 98.1367 144.97 84.8643 143.539 83.2774L143.287 83.4457C145.463 85.6217 153.975 99.904 156.235 102.681C157.437 104.256 157.87 105.158 157.786 106.035C157.413 105.747 156.656 106.035 156.271 104.953C155.886 103.871 152.664 98.4132 151.919 97.0667C151.173 95.7203 144.357 87.1726 141.399 83.8424L141.195 84.0107C145.126 88.6272 151.246 98.8821 152.376 100.553C153.506 102.224 155.477 104.328 156.439 106.564L155.862 106.949C155.441 106.648 154.732 106.336 154.564 105.939C151.546 98.9903 139.56 84.2993 136.002 79.8871L135.797 80.1035C139.777 85.0446 144.465 91.2841 145.595 93.6284C146.413 95.3115 150.873 102.176 151.378 102.837C152.729 104.385 153.966 106.029 155.081 107.754L154.54 108.007C153.706 107.599 152.997 106.977 152.484 106.204C152.195 105.699 149.683 100.926 147.507 97.6558C145.331 94.3858 136.506 83.2293 133.91 79.9713L133.681 80.1156C138.705 86.4743 143.281 93.1747 147.374 100.168C148.757 102.429 152.183 106.372 152.989 108.295L152.448 108.512C151.855 108.274 151.323 107.906 150.89 107.436C150.458 106.966 150.136 106.405 149.947 105.795C147.447 99.5193 134.499 83.5299 131.65 80.0434L131.397 80.2118C137.3 87.0884 147.651 103.991 151.246 108.945L150.284 109.149C149.02 108.259 148.062 106.999 147.543 105.542C146.341 102.441 135.797 87.8698 131.818 82.7003C130.959 81.8981 130.196 80.9984 129.546 80.0194L129.341 80.2358C136.555 89.1081 144.333 102.056 145.595 103.847C146.437 105.049 147.459 106.696 148.108 107.863C148.347 108.247 148.556 108.649 148.733 109.065L148.276 109.149C147.603 108.812 146.773 108.584 145.8 106.3C143.924 101.864 134.162 89.0119 132.443 86.5354C131.877 85.4853 131.173 84.515 130.351 83.6501C129.304 82.8115 128.444 81.7631 127.827 80.5724L127.622 80.7167C128.464 82.6041 137.047 93.941 138.262 95.7924C139.476 97.6438 143.708 104.46 144.08 104.881C145.195 106.123 146.053 107.574 146.605 109.149H146.22C145.101 108.389 144.181 107.37 143.539 106.18C142.121 102.849 131.036 87.7616 130.387 86.8119C129.636 85.7642 128.764 84.8079 127.79 83.9626C127.185 83.3545 126.66 82.6718 126.228 81.9309L126.011 82.1233C127.778 85.1769 138.105 98.5334 139.019 100.385C139.933 102.236 143.924 107.598 144.381 108.969H144.092C142.601 107.852 141.37 106.425 140.486 104.785C139.452 102.561 128.632 86.5594 125.783 84.2632C125.377 83.8756 125.061 83.4037 124.857 82.8807L124.605 83.085C125.278 84.9725 137.925 102.465 139.308 104.148C140.527 105.4 141.404 106.944 141.856 108.632C139.272 107.694 134.511 98.2329 129.245 90.9114H128.909C127.561 88.7163 125.945 86.6972 124.1 84.9004C123.859 84.8162 123.559 84.0228 123.306 83.5659L123.138 83.7342C124.503 86.5065 126.016 89.2033 127.67 91.8131L127.165 92.0175C125.875 89.9509 124.402 88.0036 122.765 86.1988C122.303 85.7541 121.946 85.212 121.719 84.6118L121.503 84.7801C121.888 85.9824 125.651 92.8109 126.372 94.0372L126.228 95.4438C125.044 92.7512 123.551 90.2054 121.779 87.8578C121.076 87.234 120.539 86.4449 120.217 85.5616L120.012 85.7299C121.363 89.7701 123.418 93.5392 126.083 96.8624C127.286 98.5334 127.971 100.758 128.56 101.467C129.805 103.146 130.674 105.073 131.109 107.117C131.109 107.225 131.109 107.851 131.012 107.706C130.594 106.888 130.022 106.158 129.329 105.554C128.416 104.953 123.799 98.4253 122.02 96.4416L122.152 96.3334C122.873 97.1269 127.43 101.599 129.125 103.342H129.221C128.209 102.391 127.439 101.212 126.973 99.904C126.516 98.1487 122.32 92.5344 121.19 90.5748C120.289 89.024 119.014 87.9059 118.582 86.5234L118.293 86.5594C118.594 87.3529 120.697 92.835 121.647 94.8787C120.854 94.1814 117.247 88.8677 116.838 87.0523L116.574 87.1846C116.706 88.0141 118.978 93.5202 119.712 95.1432C117.853 93.0785 116.347 90.723 115.251 88.1704L115.059 88.3748C115.324 89.1923 117.728 94.9749 118.293 96.67C116.452 94.6269 114.987 92.2744 113.965 89.7212L113.737 89.9256C114.791 92.9135 115.995 95.8466 117.343 98.7138C115.756 96.7662 112.883 92.835 112.534 91.2721L112.306 91.4404C112.727 93.4962 116.201 99.6755 116.694 101.226L116.598 101.395C115.612 99.6755 111.476 94.2536 110.984 92.7989L110.779 92.9312C111.277 94.2408 111.897 95.5007 112.631 96.6941C113.499 99.2155 114.687 101.615 116.165 103.835L116.069 104.232C114.422 102.116 111.969 98.3531 111.645 98.4493C110.666 96.7883 109.771 95.079 108.964 93.3279L108.723 93.4962C109.096 94.6984 113.28 103.114 113.989 104.508C114.266 105.037 114.65 105.037 114.963 105.41C117.462 108.349 120.24 111.039 123.258 113.441C121.214 114.403 118.449 113.441 115.72 112.239C112.029 110.592 106.103 101.948 103.698 95.6241L103.494 95.7563C104.696 99.8559 110.142 107.983 111.777 110.183C113.412 112.383 117.439 116.194 118.125 116.963C118.81 117.733 121.178 120.173 121.611 120.822C122.005 121.564 122.549 122.215 123.21 122.734L123.09 123.287C121.557 122.163 120.084 120.959 118.678 119.68L118.521 119.897C118.798 120.173 119.94 121.183 120.926 122.205L120.794 122.481C121.695 123.287 121.779 124.453 122.525 124.886L122.152 125.403C121.503 125.006 119.038 122.013 118.269 121.496L118.185 121.772C119.387 122.974 121.383 126.148 121.791 126.365L121.539 127.014C120.469 126.389 118.798 124.177 117.932 123.84L117.812 124.08C119.212 125.237 120.32 126.708 121.046 128.372L120.866 128.673C120.433 128.3 119.05 126.641 118.858 126.521C118.666 126.401 118.497 126.665 118.618 126.797C118.738 126.93 119.423 127.627 119.603 127.867V128.276C119.863 128.554 120.1 128.851 120.313 129.166C120.589 129.599 120.433 129.911 120.156 129.599C119.707 129.131 119.446 128.515 119.423 127.867L118.497 128.336C117.103 131.57 120.192 133.602 122.873 135.273C123.487 135.658 123.27 134.72 123.27 134.311C125.182 135.417 130.375 138.026 132.118 138.88C133.862 139.733 136.831 141.008 137.6 142.27C137.392 142.426 137.139 142.51 136.879 142.51C136.619 142.51 136.366 142.426 136.158 142.27C135.545 141.909 130.051 138.88 127.057 137.641V137.834C129.714 138.88 135.593 142.546 136.675 143.135C136.989 143.07 137.315 143.099 137.612 143.219C137.91 143.339 138.165 143.544 138.346 143.809C138.586 144.398 139.548 144.482 140.257 144.482C140.786 144.511 141.292 144.709 141.7 145.047C141.88 145.167 142.133 145.324 141.953 145.624C141.52 146.333 140.75 146.586 140.75 146.826C140.75 147.067 141.76 146.694 142.469 146.91V147.403C141.757 147.776 140.965 147.97 140.161 147.968C139.115 148.053 139.668 146.67 139.945 146.357C140.221 146.045 140.378 145.372 139.356 145.564C136.122 146.153 135.112 145.251 134.15 144.073C134.955 144.686 135.919 145.053 136.927 145.131C137.384 145.131 137.384 144.662 137.047 144.578C136.272 144.467 135.55 144.118 134.98 143.58C133.2 141.861 124.605 137.413 118.594 134.732C116.345 133.722 116.033 129.743 116.189 128.144C115.66 127.687 115.263 127.747 114.987 128.084C115.31 128.489 115.54 128.962 115.66 129.466L115.564 129.719L114.494 129.25L114.398 129.502C114.518 129.659 115.384 130.705 115.54 131.005L115.42 131.354C114.747 131.188 114.094 130.95 113.472 130.645L113.316 130.837C114.172 131.491 114.976 132.21 115.72 132.989C116.045 133.374 115.72 133.229 115.72 133.229C115.72 133.229 113.532 132.796 112.859 131.714L112.667 131.871C112.953 132.782 113.501 133.588 114.242 134.191C112.799 133.818 110.875 131.666 112.39 130.368C116.778 126.605 114.398 119.548 113.376 117.733C113.256 117.516 113.22 117.3 112.919 117.144C112.619 116.987 108.519 114.21 107.677 113.549V113.164C106.733 112.294 105.837 111.371 104.997 110.399C103.835 108.647 102.783 106.824 101.847 104.941C99.7789 101.106 99.6707 95.8165 101.173 91.1278L100.765 90.9114C98.0477 92.4382 94.3569 96.3094 93.4793 102.837C92.8422 107.646 93.7679 110.532 93.4793 113.657C93.0962 116.021 92.1794 118.266 90.7984 120.221C93.8403 116.682 95.3917 112.101 95.1263 107.442C94.7416 101.431 96.4488 97.3673 97.8674 95.4197C95.6072 99.7477 95.6313 102.741 95.8236 107.442C96.016 112.01 95.3668 117.36 91.8563 120.462C89.3798 122.65 88.9951 122.542 88.7546 122.349C88.1896 123.347 86.771 124.621 86.1699 124.297C85.3539 125.835 84.0088 127.027 82.3829 127.651C81.4368 129.307 80.2174 130.79 78.7763 132.039C76.7531 133.914 75.1191 136.169 73.9674 138.675C73.6629 138.183 73.4603 137.635 73.3715 137.063C73.2827 136.491 73.3096 135.907 73.4505 135.345C72.8214 135.951 72.3205 136.677 71.9777 137.481C71.6348 138.284 71.457 139.148 71.4548 140.022C72.4262 140.693 73.2454 141.562 73.8592 142.57C73.6923 142.946 73.4825 143.301 73.2341 143.628C73.0732 143.811 72.9647 144.034 72.9203 144.273C72.8758 144.512 72.897 144.759 72.9816 144.987C73.1826 145.923 73.3272 146.871 73.4144 147.824L81.349 147.584C80.8724 145.281 79.6969 143.182 77.9828 141.573C78.4757 141.248 77.9227 140.082 77.5861 139.661C77.9467 139.661 78.091 139.252 78.091 138.916C78.5155 137.118 79.3008 135.424 80.3993 133.939C82.1924 131.581 84.3091 129.489 86.6868 127.723C92.6979 123.131 93.9001 122.914 101.955 121.003C104.947 120.165 107.712 118.665 110.046 116.615C110.983 117.029 111.86 117.567 112.655 118.214C113.737 120.293 114.686 123.828 114.025 126.004C113.63 127.459 112.789 128.754 111.621 129.707C111.044 130.079 110.984 130.729 111.32 131.775C111.657 132.821 112.402 134.516 113.725 134.888C122.224 137.293 133.537 144.698 134.523 145.901C134.691 146.113 134.908 146.283 135.154 146.395C135.401 146.508 135.671 146.561 135.941 146.55C136.622 146.536 137.3 146.448 137.961 146.285C138.15 146.267 138.34 146.312 138.499 146.415C138.659 146.518 138.779 146.672 138.84 146.851C138.901 147.031 138.9 147.226 138.837 147.405C138.773 147.583 138.651 147.735 138.49 147.836C138.382 147.905 138.297 148.005 138.246 148.123C138.194 148.241 138.179 148.371 138.202 148.497C138.202 148.774 138.057 151.238 138.009 151.707C140.586 152.533 143.363 152.482 145.908 151.563C145.768 149.886 145.4 148.236 144.814 146.658C144.063 145.336 143.091 144.153 141.94 143.16C140.403 141.49 138.536 140.155 136.458 139.24C136.382 139.041 136.253 138.866 136.086 138.733C135.919 138.6 135.72 138.513 135.509 138.483C132.343 137.113 129.346 135.382 126.576 133.325C125.374 132.388 122.465 131.258 124.172 126.341C126.023 121.039 128.392 118.731 129.462 115.088C130.399 111.914 131.589 110.111 131.962 108.223C132.644 108.148 133.305 107.944 133.91 107.622C137.721 108.235 142.085 109.51 147.134 109.786C151.225 109.822 155.237 108.66 158.675 106.444C158.868 106.913 159.529 106.853 160.238 106.672C160.947 106.492 162.739 105.891 163.111 105.783C163.349 105.723 163.556 105.579 163.696 105.378C163.835 105.177 163.897 104.932 163.869 104.689C165.78 103.967 167.788 103.487 168.269 106.396C168.75 109.305 169.471 113.958 167.56 118.214C166.497 121.932 164.876 125.466 162.751 128.697C162.551 128.818 162.397 129.001 162.312 129.218C162.227 129.436 162.217 129.675 162.282 129.899C162.282 130.38 162.775 132.905 162.041 133.506C161.308 134.107 160.515 133.806 160.37 133.241C159.075 133.76 157.882 134.505 156.848 135.441C156.547 137.461 158.218 142.126 158.543 142.655C158.723 143.003 159.156 143.135 159.817 142.655C160.479 142.174 164.686 137.545 166.273 136.331C166.994 135.582 167.533 134.677 167.848 133.686C168.281 132.592 170.457 125.571 172.248 122.013C173.378 119.777 174.136 116.386 175.314 113.597C176.63 114.757 178.069 115.769 179.606 116.615C180.202 116.923 180.658 117.448 180.88 118.081C181.83 120.077 184.355 124.092 186.41 125.776C186.603 126.978 189.055 129.514 190.017 130.837C191.373 132.732 192.438 134.819 193.179 137.028C193.792 139.108 195.968 138.675 197.627 139.06C198.103 139.62 198.507 140.238 198.829 140.899C197.94 141.128 198.589 144.398 198.685 145.107C200.44 146.406 205.898 146.309 207.569 145.299C206.776 142.979 204.936 138.952 203.794 138.375ZM189.825 39.1442C189.454 39.7151 189.121 40.3095 188.827 40.9235C188.238 39.9978 189.32 39.1442 189.668 38.9398C189.825 38.8557 189.945 39.012 189.825 39.1442ZM188.875 36.0665C187.156 36.7518 185.124 39.9497 183.958 40.3224C185.28 36.5955 189.296 32.7003 191.989 35.9343C191.493 35.7221 190.956 35.6239 190.417 35.6467C189.878 35.6696 189.351 35.8131 188.875 36.0665ZM201.185 51.0822C200.945 51.0822 200.681 50.974 200.729 50.7455C200.808 50.5034 200.808 50.2424 200.729 50.0002C200.44 49.5073 200.488 48.9783 200.729 48.9663C200.969 48.9542 201.041 49.363 201.27 49.9401C201.498 50.5171 201.426 51.01 201.185 51.0461V51.0822ZM203.169 43.6285C202.929 44.5542 202.7 45.7083 202.087 45.9006C201.474 46.093 201.51 45.3957 201.702 44.5902L202.628 43.388C202.977 42.9071 203.361 42.7148 203.169 43.6285ZM200.584 42.5946C200.669 42.1016 201.354 39.9136 201.474 39.0961C201.474 38.7956 201.546 38.6032 201.859 39.0961C202.31 39.7193 202.536 40.477 202.502 41.2456C202.467 42.0142 202.172 42.7482 201.666 43.3279C200.825 44.3979 200.476 43.0995 200.548 42.5946H200.584ZM196.509 33.8785C196.713 33.8785 196.845 33.7463 197.218 34.119C197.783 34.684 197.819 35.1048 197.483 35.5015C197.146 35.8982 196.713 35.9944 196.581 35.5736C196.449 35.1529 196.28 33.9867 196.473 33.8785H196.509ZM194.177 33.061C194.519 33.1935 194.833 33.3893 195.102 33.6381C195.198 33.7703 195.703 34.8403 196.028 35.6818L195.415 37.401L194.862 36.4513C194.765 35.9839 194.607 35.5313 194.393 35.1048C194.225 34.7321 194.116 34.8042 193.936 34.5397C193.747 34.2474 193.605 33.9268 193.515 33.59C193.407 32.9528 193.876 32.9769 194.141 33.061H194.177ZM177.79 43.2798C177.971 41.741 177.418 40.4787 178.764 39.3967C179.101 39.1322 179.377 39.2885 179.353 39.6251C179.368 40.3105 179.237 40.9912 178.967 41.6215C178.698 42.2518 178.296 42.8172 177.79 43.2798ZM186.206 32.5681C184.727 33.3015 181.048 37.0884 181.289 41.1639C178.921 37.6174 182.575 32.2435 186.23 32.6162L186.206 32.5681ZM174.064 41.0798C174.436 39.3366 175.807 36.6917 177.105 36.2709C176.206 37.7046 175.586 39.2954 175.278 40.9595C175.17 41.2962 175.434 41.3803 175.338 41.5126C175.242 41.6448 174.989 42.0896 174.857 42.2459C174.725 42.4022 174.244 43.0514 175.013 42.6547C175.783 42.2579 176.336 40.4546 176.552 39.2885C176.955 38.1223 177.552 37.0329 178.319 36.0665C178.87 35.5051 179.483 35.009 180.147 34.5878C180.808 34.1791 181.145 34.684 180.7 35.0567C180.422 35.2929 180.194 35.5829 180.031 35.9093C179.867 36.2358 179.772 36.5919 179.75 36.9562C179.322 37.5617 178.852 38.1362 178.343 38.6753C177.837 38.9785 177.426 39.4173 177.156 39.9421C176.886 40.4669 176.769 41.0567 176.817 41.6448C176.6 42.2339 174.953 43.953 175.17 45.1673C175.386 46.3815 175.17 46.8504 174.797 47.3072C174.806 46.9554 174.723 46.6073 174.556 46.2974C173.859 44.6666 173.695 42.8574 174.088 41.1279L174.064 41.0798ZM158.435 40.683C158.519 40.7792 158.531 40.8513 158.435 40.8393C158.227 40.8196 158.018 40.8196 157.81 40.8393L157.197 40.1661C157.438 40.1533 157.68 40.1978 157.901 40.296C158.123 40.3942 158.318 40.5433 158.471 40.7311L158.435 40.683ZM155.934 40.0939C156.115 40.2502 156.619 40.8874 156.415 40.9235C156.211 40.9595 155.79 40.6229 155.441 40.0579L155.934 40.0939ZM152.243 26.6172C152.475 26.7589 152.686 26.933 152.869 27.1341C153.061 27.3625 152.869 27.9396 152.46 27.4347C152.051 26.9297 151.775 27.3024 151.739 27.074C151.702 26.8456 151.558 26.7013 151.053 26.2565C150.548 25.8117 151.907 26.4489 152.279 26.6652L152.243 26.6172ZM148.721 20.8105C149.063 21.2939 149.373 21.8 149.647 22.3253C149.804 22.6755 149.858 23.0634 149.803 23.4433C149.803 23.7198 149.731 23.8641 149.466 23.7198C149.051 23.4299 148.75 23.005 148.613 22.5176C148.615 22.0111 148.555 21.5063 148.432 21.0149C148.384 20.7504 148.517 20.558 148.757 20.8586L148.721 20.8105ZM70.5291 101.791C71.8876 95.3235 75.4341 88.8076 80.1468 86.2348C80.5744 86.0771 81.0122 85.9485 81.4572 85.8501C78.7162 87.978 74.833 90.1661 70.5291 101.791ZM82.5512 85.6337C83.1042 85.5496 83.6813 85.4654 84.2704 85.4053C80.0906 88.0217 76.6673 91.6854 74.3401 96.0328C75.7734 91.7075 78.6849 88.0256 82.5632 85.6337H82.5512ZM105.009 84.5036L101.402 81.1976L101.077 81.3538L103.939 85.1889L103.47 85.5015L99.7789 82.0992L99.5024 82.2435L102.448 86.1867L102.123 86.4272L98.2761 83.073L98.0237 83.2654L100.512 86.5594H99.7789L96.9778 84.0107L96.6772 84.2031L98.3603 86.7037L97.4346 86.8119L95.5351 85.1288L95.2346 85.2731L96.4368 86.9321L95.1263 87.1004L94.3569 86.3551L94.1526 86.4993L94.5493 87.1726C92.7219 87.437 90.9427 87.7256 89.8366 88.0261C90.8758 87.3981 92.014 86.951 93.2028 86.7037V86.4993C90.041 86.2228 85.9895 88.507 84.4267 90.1059C83.9819 90.5628 84.1742 90.106 84.3064 89.9617C85.874 87.9341 88.0606 86.4736 90.5339 85.802V85.6698C86.242 86.872 82.3829 88.4469 79.8222 93.5202C80.243 90.5027 83.537 87.5092 85.677 86.5234V86.4512C83.2765 87.4625 81.1729 89.0679 79.5639 91.1164C77.955 93.1649 76.8938 95.5891 76.48 98.1608L75.9992 98.858C76.1869 95.8761 77.2254 93.0104 78.9918 90.6005C80.7582 88.1907 83.1783 86.3377 85.9655 85.261C88.6945 85.0446 91.2552 85.0446 91.7 85.0446C92.0056 85.0924 92.3176 85.0775 92.6173 85.0011C92.9169 84.9246 93.1979 84.7881 93.4433 84.5998C96.0328 82.4009 98.992 80.6791 102.183 79.5145H102.267L105.622 84.155L105.009 84.5036ZM106.559 83.5058L102.52 79.3462C103.001 79.1899 103.53 79.0456 104.071 78.9254L107.16 83.085L106.559 83.5058ZM108.242 82.4238L104.552 78.8172C105.045 78.721 105.562 78.6369 106.079 78.5767L108.808 82.0391L108.242 82.4238ZM109.781 81.4741L106.704 78.5287C107.233 78.5287 107.786 78.4205 108.315 78.3844L110.382 81.1014L109.781 81.4741ZM111.488 80.4402L109.084 78.3363H110.539L112.15 80.1156L111.488 80.4402ZM113.135 79.4664L111.933 78.2642H112.835L113.749 79.1298L113.135 79.4664ZM114.746 78.5888L114.326 78.3123H115.227L114.746 78.5888ZM99.3101 108.56C99.1297 110.063 99.2139 116.134 97.0138 119.825C97.3745 118.117 98.5767 111.181 99.3101 108.56ZM100.981 107.442C101.113 111.674 100.464 116.579 98.9494 119.332C99.0816 117.288 100.392 110.604 100.981 107.442ZM100.981 119.019C100.981 118.562 101.101 116.326 101.185 115.412C101.792 113.275 102.27 111.103 102.616 108.909C102.843 112.359 102.284 115.816 100.981 119.019V119.019ZM103.181 117.817C102.857 115.196 103.734 111.445 103.83 110.495C104.246 112.951 104.023 115.473 103.181 117.817ZM105.129 117.228C105.067 115.716 105.16 114.201 105.405 112.708C105.887 114.211 105.788 115.841 105.129 117.276V117.228ZM139.548 150.818L139.175 150.349L139.957 150.072C140.534 150.072 143.251 150.072 143.9 150.072C142.525 150.651 141.039 150.922 139.548 150.866V150.818ZM140.197 149.399L139.644 149.026C139.754 148.883 139.9 148.773 140.067 148.708C140.235 148.642 140.417 148.623 140.594 148.654C141.183 148.654 143.191 148.473 143.744 148.473C142.635 149.023 141.431 149.354 140.197 149.447V149.399ZM116.742 105.061C116.742 104.761 116.742 104.208 116.742 103.967C117.139 104.364 119.363 106.781 119.82 107.249C118.922 105.72 117.926 104.25 116.838 102.849C116.91 102.224 117.031 101.503 117.139 100.998C119.311 104.039 121.723 106.902 124.352 109.558C123.162 109.101 118.81 107.406 116.742 105.061ZM125.158 111.433C125.061 111.614 124.953 111.89 124.857 112.058L124.34 111.601C124.045 110.981 123.7 110.386 123.306 109.822V109.822C124.064 110.411 125.146 111.433 125.146 111.433H125.158ZM122.188 112.058C120.847 110.703 119.639 109.221 118.582 107.634L119.784 108.392C121.755 110.64 122.765 111.301 123.186 111.265C123.39 111.577 124.388 112.335 124.593 112.623C124.341 112.89 124.054 113.121 123.739 113.309C123.739 113.309 123.739 113.309 123.655 113.236C123.137 112.876 122.643 112.483 122.176 112.058H122.188ZM122.693 114.282C123.715 115.088 124.46 116.146 124.184 116.687C123.787 116.194 122.501 114.956 122.14 114.379L122.693 114.282ZM119.339 114.282C120.255 114.992 121.224 115.631 122.236 116.194C123.013 117.049 123.679 117.998 124.22 119.019L124.088 119.151C122.17 117.754 120.462 116.09 119.014 114.21L119.339 114.282ZM114.205 112.155L114.302 112.046C115.768 113.657 120.036 116.723 120.794 117.432C121.96 118.561 122.924 119.883 123.643 121.339L123.511 121.52C121.864 120.414 115.059 113.008 114.205 112.155ZM124.184 133.109H124.1C122.489 131.727 122.044 128.505 122.561 126.401L123.174 126.749C122.853 127.82 122.782 128.95 122.965 130.052C123.149 131.154 123.582 132.2 124.232 133.109H124.184ZM123.246 126.497L122.621 125.968C122.738 125.41 122.89 124.859 123.078 124.321L123.775 124.898C123.586 125.422 123.426 125.956 123.294 126.497H123.246ZM123.955 124.441L123.33 123.455L123.595 122.77L124.28 123.708C124.208 123.948 124.112 124.201 124.003 124.441H123.955ZM124.749 122.722L123.967 121.724L124.328 120.979C124.595 121.358 124.829 121.761 125.025 122.181C125.025 122.361 124.893 122.542 124.797 122.722H124.749ZM125.699 120.967L124.845 120.005L125.194 119.211L126.011 120.414L125.699 120.967ZM126.901 118.923L126.672 119.332L125.879 118.129L126.143 116.999L127.093 118.526C127.033 118.683 126.961 118.803 126.901 118.923ZM127.634 117.408L126.552 116.41C126.624 115.797 126.624 115.208 126.72 114.559C127.328 115.036 127.797 115.667 128.079 116.386C127.935 116.735 127.778 117.084 127.634 117.408ZM128.428 115.509L127.694 114.944C127.262 113.76 126.614 112.668 125.783 111.722L125.927 111.085L126.889 111.842V112.07C127.591 112.932 128.177 113.882 128.632 114.896L128.428 115.509ZM129.161 113.513C128.704 113.309 124.653 109.161 123.631 108.271C122.609 107.382 117.307 100.457 117.307 100.457C117.496 99.778 117.737 99.1148 118.028 98.4733C119.508 101.937 121.801 104.993 124.713 107.382C125.845 108.236 126.849 109.248 127.694 110.387C128.283 111.085 128.896 112.635 129.305 113.104C129.257 113.236 129.293 113.573 129.161 113.513ZM129.822 111.553C129.317 110.688 125.747 107.778 125.013 106.648C123.635 104.642 122.099 102.749 120.421 100.986C119.466 100.206 118.718 99.2029 118.245 98.0646C118.489 97.6482 118.758 97.2467 119.05 96.8624C119.748 97.752 121.611 100.998 122.332 102.152C123.704 104.01 125.246 105.737 126.937 107.31C128.167 108.328 129.216 109.547 130.039 110.916L129.822 111.553ZM130.556 109.149C128.319 108.091 126.24 104.977 125.35 103.583C124.404 102.193 123.351 100.878 122.2 99.6515C121.479 98.8941 119.363 96.4777 119.363 96.4777C119.626 96.2056 119.926 95.971 120.253 95.7804C121.347 96.646 123.234 100.409 124.388 101.371C126.697 103.591 128.813 106.004 130.712 108.584C130.796 108.776 130.556 109.173 130.556 109.173V109.149ZM131.193 102.693H131.301C131.589 103.27 134.33 106.18 134.355 106.877C132.876 105.871 131.766 104.411 131.193 102.717V102.693ZM129.317 97.2831H129.437C130.039 98.317 133.044 102.176 133.838 103.126C135.128 104.56 136.249 106.137 137.18 107.827C134.811 106.805 131.097 100.445 129.317 97.3072V97.2831ZM135.148 102.958C134.116 101.144 132.908 99.4366 131.541 97.8602C130.964 97.1389 129.437 94.5181 129.005 93.8568L129.149 93.7487C131.226 96.8239 133.482 99.7744 135.905 102.585C137.637 104.593 139.26 107.394 139.308 108.199C137.572 106.769 136.155 104.992 135.148 102.982V102.958ZM160.611 140.467C159.998 139.15 159.612 137.74 159.469 136.295C160.233 137.56 160.629 139.013 160.611 140.491V140.467ZM162.017 139.156C161.606 138.057 161.315 136.916 161.152 135.754C161.476 136.415 162.378 138.327 162.017 139.18V139.156ZM201.077 135.85C199.999 135.577 198.895 135.415 197.783 135.369C197.471 134.876 197.11 134.371 196.725 133.842C197.921 134.114 199.092 134.488 200.224 134.96L201.077 135.85ZM201.859 137.185C200.87 137.442 199.838 137.491 198.829 137.329C198.631 136.848 198.398 136.382 198.132 135.934C199.45 136.059 200.724 136.478 201.859 137.16V137.185ZM197.759 132.845L198.432 133.542C197.726 133.373 197.006 133.272 196.28 133.241C195.884 132.724 195.463 132.207 195.018 131.678C195.984 131.919 196.908 132.304 197.759 132.821V132.845ZM189.945 121.496C189.311 121.474 188.682 121.381 188.069 121.219C187.865 121.015 187.432 120.606 187.18 120.305C186.927 120.005 186.831 119.849 187.264 119.933C188.238 120.137 190.606 121.496 189.945 121.496ZM190.57 123.059L189.56 122.938L188.875 121.928C189.467 122.275 190.041 122.652 190.594 123.059H190.57ZM186.651 119.344C186.422 119.115 185.725 118.382 185.569 118.142C185.412 117.901 185.064 117.468 186.002 117.673C187.244 118.192 188.409 118.879 189.464 119.716C188.851 119.68 187.18 119.452 186.675 119.344H186.651ZM182.383 104.593C181.036 104.196 175.927 104.905 175.362 105.049C175.097 105.122 175.11 105.446 175.458 105.434C178.969 105.374 181.469 105.687 182.671 106.468C180.673 106.376 178.671 106.554 176.72 106.997C176.372 107.141 176.42 107.358 176.72 107.358C177.021 107.358 182.082 107.911 183.645 108.235C182.003 108.192 180.361 108.337 178.752 108.668C178.247 108.8 178.343 109.149 178.572 109.173C180.328 109.36 182.074 109.637 183.801 110.003C182.798 110.221 181.775 110.333 180.748 110.339C180.459 110.339 180.471 110.616 180.748 110.688C181.024 110.76 183.261 111.048 184.186 111.217C185.112 111.385 184.896 111.65 184.499 111.698C184.102 111.746 183.056 111.806 183.056 111.806L182.78 112.106L183.008 112.431C183.947 112.453 184.87 112.679 185.713 113.092L185.857 113.417C185.172 113.346 184.48 113.399 183.814 113.573L183.886 113.85C184.556 113.882 185.21 114.064 185.801 114.382C186.392 114.701 186.904 115.147 187.3 115.689C186.476 115.375 185.608 115.188 184.727 115.136L184.799 115.461C185.701 115.737 187.697 116.663 188.214 117.685C185.461 117.685 184.823 116.783 184.222 116.194C183.874 115.833 184.018 115.461 184.475 115.437L184.27 115.16H184.21C183.453 115.16 183.008 114.391 182.828 114.042L183.381 113.97V113.826L182.419 113.489C181.761 112.534 180.99 111.662 180.123 110.892C179.137 110.664 177.622 110.303 177.237 109.498C177.334 109.317 176.095 107.959 175.795 107.778C174.725 107.117 173.246 104.364 172.789 102.97C172.775 102.564 172.869 102.163 173.061 101.805C173.253 101.448 173.537 101.149 173.883 100.938C174.208 100.794 176.131 100.06 176.961 99.7357C178.017 99.6834 179.072 99.864 180.051 100.265C178.713 100.058 177.344 100.224 176.095 100.746C175.583 100.987 175.052 101.188 174.508 101.347C174.136 101.455 174.28 101.779 174.581 101.731C176.952 101.525 179.341 101.782 181.613 102.489C179.247 102.388 176.878 102.573 174.556 103.042C174.172 103.138 174.208 103.487 174.556 103.45C177.22 103.146 179.917 103.54 182.383 104.593ZM167.103 94.7224C166.73 94.8667 165.997 94.0011 165.792 93.7006C165.373 92.9534 165.085 92.1403 164.939 91.2961C164.422 90.6349 163.845 89.7693 162.859 88.5431V88.4229C163.52 89.1562 167.5 93.941 167.728 94.2776C167.956 94.6142 168.437 94.8186 168.81 95.3356C169.825 96.7389 170.938 98.0686 172.14 99.3149H172.429L173.475 100.337C173.081 100.458 172.679 100.55 172.272 100.613C171.209 99.355 169.998 98.2289 168.666 97.2591L167.644 96.0569L168.161 95.035C167.8 94.6984 167.512 94.5782 167.103 94.7224ZM183.465 90.5989C182.443 89.6251 179.425 86.9922 179.017 86.4993H178.848C178.848 86.4993 178.055 85.5856 177.766 85.2971L177.851 84.9244L176.961 84.2031L178.512 84.684C179.257 85.3572 181.722 88.5551 183.513 90.5989H183.465ZM179.762 85.0567L181.024 85.3813C181.904 86.2323 182.708 87.1574 183.429 88.1463C182.972 87.6053 180.411 85.5856 179.81 85.0567H179.762ZM177.286 86.1627V86.7518C176.805 86.2228 174.244 83.8545 173.679 83.1451L175.037 83.626C175.855 83.9987 176.817 85.79 177.334 86.1627H177.286ZM177.286 88.6393L177.418 89.3125C176.624 88.5791 169.916 82.0992 169.159 81.3178L172.02 82.52C173.607 83.4096 175.831 86.9562 177.31 88.6393H177.286ZM177.658 91.4765L177.79 91.9934C175.771 89.9977 169.736 84.2872 169.291 83.8785C168.823 83.5384 168.457 83.0769 168.233 82.544C167.578 81.5362 166.766 80.6393 165.828 79.8871L168.113 80.873C170.397 82.9528 177.081 90.7431 177.682 91.4765H177.658ZM178.271 94.7825C178.44 94.6503 178.68 94.5902 178.764 94.6623C178.848 94.7345 180.808 97.0668 181.241 97.4755H181.157C180.41 96.9626 179.727 96.3611 179.125 95.6842L178.62 95.9487C178.62 95.9487 178.476 95.7443 178.187 95.2875C178.142 95.2288 178.118 95.157 178.118 95.0831C178.118 95.0092 178.142 94.9374 178.187 94.8787V94.8787C176.107 92.6667 172.813 90.1661 172.032 89.036C171.395 88.1508 170.683 87.3223 169.904 86.5594C169.35 86.2051 168.885 85.7279 168.545 85.1649C168.289 84.5035 167.876 83.9138 167.343 83.4457C166.357 82.52 163.184 80.368 161.332 77.8194L163.737 79.0216C168.101 83.085 176.396 92.4983 178.295 94.7825H178.271ZM164.987 82.3517C165.448 82.9285 165.942 83.4784 166.466 83.9987C167.211 84.6118 176.216 94.9989 177.117 96.0208C177.249 95.9487 177.358 95.9126 177.394 96.0208C177.43 96.129 179.209 98.0886 179.954 98.858L179.786 98.9422C179.329 98.5214 178.247 97.6077 177.983 97.2952C177.718 96.9826 177.502 97.211 177.394 97.3793C177.151 97.1567 176.923 96.9199 176.708 96.67C176.6 96.5378 176.708 96.3695 176.877 96.2372C175.675 94.8908 171.948 92.1738 170.589 90.8633L171.07 90.2983C169.676 87.1966 161.2 81.1134 160.659 78.5166L160.803 78.2882C161.633 78.8172 164.554 81.979 164.987 82.3517ZM169.796 90.8754C171.171 91.8026 172.311 93.0374 173.126 94.482L173.042 94.6503C173.462 95.2274 174.821 96.7181 175.362 97.3673L175.663 97.0187C176.441 97.5475 177.108 98.2258 177.622 99.0143L177.49 99.1225C177.122 98.7877 176.719 98.4935 176.288 98.2449L175.831 98.5815L174.953 97.8482L175.146 97.6198C173.943 96.4176 171.683 93.917 170.878 93.941L169.351 92.3781L169.688 91.753C169.459 89.8174 163.196 84.6118 162.294 83.5299L161.44 81.2336C162.534 82.2675 169.219 89.8054 169.844 90.8754H169.796ZM169.122 92.8951C169.351 93.0153 170.325 93.7006 170.481 94.1814C170.685 94.9749 173.354 97.7881 173.811 98.5094L174.148 98.305L175.518 99.5072L174.184 99.6515L173.294 98.7979L173.511 98.6657C172.909 97.7881 171.178 96.8744 170.229 95.6361C170 95.3476 169.736 95.4919 169.567 95.4919L168.521 94.1935C168.639 93.7804 168.792 93.3782 168.978 92.9913C168.391 92.2992 167.765 91.6409 167.103 91.0196C166.874 90.8754 166.91 91.3322 166.91 91.4765C166.905 91.5477 166.876 91.6152 166.83 91.6693C166.783 91.7233 166.72 91.7611 166.651 91.7772C166.581 91.7933 166.508 91.7868 166.442 91.7586C166.377 91.7305 166.322 91.6822 166.285 91.6207L165.516 90.7431L165.889 90.3344C166.201 90.6469 167.091 90.8273 166.538 90.142C165.985 89.4568 162.931 86.307 162.691 86.0785L162.558 85.2731C163.496 86.0785 168.365 91.8492 169.171 92.8951H169.122ZM183.801 95.5399C182.695 94.47 180.363 92.7869 178.933 91.3923L178.74 91.5847C180.049 93.2997 181.492 94.9077 183.056 96.3935L182.828 96.6219C181.237 95.715 179.783 94.5856 178.512 93.2678C177.767 90.8495 177.477 88.3139 177.658 85.79L178.969 87.1846C179.449 88.7234 182.407 91.248 183.946 93.0754L183.826 93.2437C183.285 92.6667 179.738 89.4568 179.017 88.9518L178.788 89.1442C180.233 91.4143 181.985 93.4736 183.994 95.2634L183.801 95.5399ZM179.942 75.1024C180.775 75.8882 181.547 76.7362 182.251 77.639C182.792 78.2762 183.838 79.5986 184.523 80.5965C183.525 79.779 180.844 77.8554 179.882 76.9898L179.63 77.2182C180.203 77.8523 180.729 78.5274 181.205 79.238C180.832 79.0456 180.003 78.8292 179.678 78.6729L179.281 78.168C179.593 77.1568 179.83 76.1242 179.99 75.0783L179.942 75.1024ZM186.17 82.8686C185.965 83.0129 185.941 83.3495 185.773 83.5178C185.605 83.6861 185.184 83.7943 185.052 84.3474C184.981 84.7834 184.864 85.2106 184.703 85.6217L185.088 86.0184C185.172 86.1026 185.316 86.0184 185.424 85.8982C185.533 85.778 185.485 85.4534 185.424 85.4173C185.364 85.3813 185.256 85.2851 185.424 85.0807C185.593 84.8763 186.146 84.1911 186.254 84.0107C186.254 84.6599 186.05 85.8742 186.014 86.2108C185.977 86.5474 185.893 87.0764 185.316 86.6676C183.116 85.1408 179.437 83.8304 173.126 81.7025C173.908 81.3312 174.649 80.88 175.338 80.356C175.638 80.0555 175.855 79.8391 175.675 79.3462C175.414 78.6167 175.08 77.9158 174.677 77.2543C176.191 77.651 184.571 80.6085 186.218 82.8446L186.17 82.8686ZM172.188 76.3887C173.126 76.7575 173.899 77.4536 174.364 78.3483C175.025 79.6708 174.496 80.1396 173.535 80.7527C172.573 81.3659 171.96 81.438 171.683 81.3058L170.481 80.8249C170.623 80.7773 170.753 80.7002 170.863 80.5987C170.973 80.4971 171.06 80.3734 171.118 80.2358C171.238 79.9953 171.839 78.5166 172.032 78.0838C172.289 77.5494 172.361 76.9445 172.236 76.3647L172.188 76.3887ZM172.392 40.8754C171.683 41.783 171.218 42.8579 171.043 43.9969C170.868 45.1359 170.989 46.3007 171.395 47.3794C171.839 48.8821 173.499 50.6854 171.491 52.7172C171.304 50.9029 170.926 49.1135 170.361 47.3794C169.856 45.6001 170.493 42.2219 172.392 40.8754ZM169.267 45.6842C169.362 46.9222 169.646 48.1384 170.108 49.2909C170.518 50.4511 170.745 51.6677 170.782 52.8975C170.866 54.0997 170.12 53.5347 169.676 53.1379C169.533 52.0296 169.312 50.9328 169.014 49.8559C168.173 47.5477 168.75 46.4416 169.267 45.7804V45.6842ZM167.92 47.5356L168.197 47.9564C168.207 49.3084 168.426 50.6506 168.846 51.9357C169.11 53.2221 170.301 55.7708 168.642 57.4659L168.425 56.2637C168.629 55.8039 168.65 55.284 168.485 54.809C167.103 50.3608 167.415 48.6898 167.92 47.6318V47.5356ZM166.381 50.3729C166.574 50.4931 166.826 50.7095 167.139 51.7674C167.451 52.8254 169.219 58.4397 166.225 60.0867L166.081 59.7982C166.192 59.2962 166.379 58.8139 166.634 58.3676C166.634 54.9172 167.319 55.5063 166.754 54.4844C166.414 53.861 166.206 53.1744 166.142 52.4673C166.078 51.7601 166.159 51.0473 166.381 50.3729V50.3729ZM165.179 52.4888C165.834 53.49 166.245 54.6304 166.381 55.8189L165.901 58.62C164.109 53.4505 164.987 52.8975 165.239 52.4888H165.179ZM164.554 62.8518C164.655 61.9964 164.581 61.1294 164.338 60.3031C163.97 59.0758 163.97 57.7675 164.338 56.5402C165.239 57.7063 166.357 61.8299 164.614 62.8518H164.554ZM164.085 55.5424C163.292 57.0119 163.016 58.706 163.304 60.3512C163.592 62.0343 164.049 64.8355 162.246 65.7371C162.792 64.1111 162.727 62.3422 162.066 60.76C161.729 59.666 161.837 56.2276 164.145 55.5424H164.085ZM158.952 68.9591C160.041 67.0187 160.85 64.9343 161.356 62.7677C162.21 64.2824 160.719 69.2716 159.012 68.9591H158.952ZM159.481 56.5041C158.411 57.3216 155.225 58.9086 153.626 59.8703C153.959 59.4478 154.189 58.954 154.299 58.4277L154.804 58.1271C154.804 58.2954 155.117 58.3195 155.333 58.1271C155.441 58.0592 155.531 57.9654 155.594 57.8542C155.657 57.7429 155.691 57.6178 155.694 57.49C156.064 57.2789 156.473 57.144 156.896 57.0932C156.896 57.0932 156.968 57.0932 156.896 57.0932V57.1654C157.168 57.0598 157.458 57.0067 157.75 57.0091C158.278 56.7051 158.872 56.532 159.481 56.5041V56.5041ZM146.256 65.653L147.218 65.136C148.403 65.4207 149.57 65.7699 150.717 66.1819L151.474 66.783C152.912 67.5878 154.238 68.5781 155.417 69.7285C156.367 70.9307 155.417 70.7624 155.261 70.6301C154.056 69.7249 152.93 68.7195 151.895 67.6246C151.69 67.6246 151.222 67.4202 151.294 67.2279C149.572 66.8461 147.884 66.3275 146.244 65.677L146.256 65.653ZM153.987 67.0716C153.842 66.9153 153.386 66.7229 153.277 66.5787C153.206 66.4337 153.094 66.3125 152.956 66.2293C152.817 66.1462 152.657 66.1047 152.496 66.1098C151.24 65.8119 150.102 65.1464 149.226 64.1983L149.827 63.7174C152.075 64.1021 156.656 68.1295 157.04 68.6946C157.425 69.2596 157.425 69.452 156.884 69.1514C156.343 68.8509 154.131 67.2399 153.975 67.0956L153.987 67.0716ZM151.582 63.9699C150.789 63.5371 150.873 63.1884 151.222 62.8879C151.433 62.7231 151.693 62.6336 151.961 62.6336C152.229 62.6336 152.489 62.7231 152.7 62.8879C154.468 64.2499 156.081 65.802 157.509 67.5164C156.415 66.9273 152.424 64.4267 151.63 63.9939L151.582 63.9699ZM153.301 57.8025C153.698 58.608 152.592 60.3632 151.955 60.9764C151.835 61.0846 151.702 61.1086 151.594 60.9042C151.486 60.6999 150.296 58.0911 149.923 57.5621C149.827 57.4419 149.538 57.1293 150.164 57.0331C150.789 56.9369 152.977 57.0812 153.349 57.8266L153.301 57.8025ZM151.847 53.7992C151.522 53.1184 151.059 52.5125 150.488 52.0199C151.558 52.4398 152.525 53.0833 153.325 53.9074C153.59 54.3642 153.53 54.8571 152.376 54.4363C152.352 54.0997 152.159 53.8232 151.895 53.8232L151.847 53.7992ZM156.295 64.4027C155.826 64.1021 153.422 62.9239 152.905 62.4551C152.388 61.9862 152.796 61.5895 153.301 61.7578C154.472 62.4512 155.503 63.3563 156.343 64.4267L156.295 64.4027ZM155.598 60.796C156.938 61.4137 158.028 62.4696 158.687 63.7895C157.362 63.2034 156.285 62.1691 155.646 60.8682L155.598 60.796ZM156.8 59.4616C157.341 59.6299 158.122 60.784 158.387 61.2769C157.792 60.8422 157.174 60.4409 156.535 60.0747C156.283 59.9665 156.283 59.3534 156.8 59.5337V59.4616ZM155.081 56.3478L155.598 56.1074C155.633 56.1903 155.699 56.2559 155.783 56.2897C155.866 56.3235 155.96 56.3228 156.042 56.2877C156.125 56.2527 156.191 56.1861 156.225 56.1027C156.259 56.0193 156.258 55.9258 156.223 55.8429L156.607 55.7107C156.683 55.8265 156.735 55.9565 156.76 56.0928C156.785 56.2291 156.782 56.369 156.752 56.5041L155.465 57.2014C155.465 57.0091 155.309 56.8648 155.153 56.973C154.996 57.0812 154.972 57.2134 155.033 57.4659L154.395 57.9107C154.317 57.5664 154.174 57.24 153.975 56.949L154.636 56.4801C155.081 57.1052 155.285 56.6484 155.081 56.3478ZM158.375 55.1456C158.375 55.2538 158.158 55.5183 158.002 55.6626C157.846 55.8069 157.726 55.7467 157.665 55.5664C157.605 55.3861 157.521 55.2899 157.665 55.2418C157.81 55.1937 158.351 55.0735 158.387 55.1817L158.375 55.1456ZM157.665 53.5948C157.665 53.5948 157.738 53.5948 157.665 53.6669C157.425 53.9468 157.159 54.2043 156.872 54.4363C156.777 54.3732 156.668 54.3346 156.555 54.3241C156.442 54.3136 156.327 54.3315 156.223 54.3762C155.802 54.5445 156.066 54.821 156.223 54.8331C155.751 55.2248 155.234 55.5597 154.684 55.8309C154.637 55.7371 154.556 55.6656 154.457 55.6318C154.357 55.598 154.249 55.6048 154.155 55.6506C154.1 55.6806 154.057 55.7276 154.031 55.7845C154.005 55.8414 153.998 55.9052 154.012 55.9662C154.025 56.0272 154.058 56.0822 154.106 56.1228C154.153 56.1635 154.213 56.1876 154.275 56.1916L153.626 56.6484C153.446 56.6484 153.037 56.5041 152.736 56.42C152.436 56.3358 152.4 56.0954 152.736 55.9151C154.228 54.8542 155.903 54.0797 157.677 53.6309L157.665 53.5948ZM144.561 19.2356C145.34 19.2886 146.072 19.6267 146.617 20.1853C148.06 21.5919 147.819 22.8422 147.471 23.2149C147.162 23.1046 146.888 22.9137 146.677 22.6619C146.497 22.3974 144.73 19.8848 144.573 19.6804C144.417 19.476 144.333 19.2356 144.561 19.2356ZM139.26 19.6804C139.386 20.0678 139.439 20.4756 139.416 20.8826H138.851C138.356 20.5841 137.885 20.2464 137.444 19.8728C137.693 19.665 137.995 19.5312 138.316 19.4866C138.637 19.4419 138.964 19.4883 139.26 19.6203V19.6804ZM135.485 21.0269C135.867 20.8745 136.276 20.8009 136.687 20.8105C137.346 20.9688 137.992 21.1737 138.622 21.4236C138.755 21.6039 139.163 22.3493 139.26 22.5056C139.356 22.6619 139.368 23.1668 138.586 22.7941C137.584 22.3952 136.545 22.0932 135.485 21.8925C135.16 21.4957 135.148 21.111 135.485 20.9668V21.0269ZM130.952 27.3625C130.969 26.4934 131.229 25.6463 131.703 24.9175C132.177 24.1887 132.846 23.6072 133.633 23.2389C133.838 23.0318 134.087 22.8751 134.363 22.7812C134.638 22.6873 134.932 22.6588 135.22 22.6979C136.648 22.8054 137.991 23.4193 139.007 24.4291C139.199 24.7177 139.272 25.1865 138.743 24.886C136.146 23.3952 135.593 23.5996 134.932 23.828C134.647 23.7395 134.341 23.7429 134.059 23.8379C133.776 23.9328 133.53 24.1145 133.357 24.357C131.157 26.8215 132.527 32.0872 133.838 33.4097C134.309 33.9246 134.6 34.5785 134.667 35.2731C134.667 35.4654 134.98 35.6818 134.956 35.2731C134.823 33.578 135.425 32.0752 135.22 30.9331C135.449 31.0774 136.074 31.2457 136.422 31.4741C136.771 31.7025 137.336 31.4741 137.625 31.4741C137.913 31.4741 138.081 31.1615 137.697 31.1134C137.299 31.1369 136.901 31.0673 136.535 30.91C136.169 30.7528 135.844 30.5122 135.588 30.2076C135.331 29.9029 135.149 29.5425 135.056 29.155C134.963 28.7675 134.961 28.3637 135.052 27.9757C135.082 27.3855 135.278 26.8158 135.619 26.3328C135.959 25.8498 136.43 25.4732 136.975 25.2466C137.456 25.0062 137.516 25.2466 137.288 25.439C136.865 25.7033 136.523 26.0783 136.298 26.5234C136.074 26.9684 135.975 27.4666 136.014 27.9636C136.11 29.2861 137.132 30.4642 137.576 30.3681C137.723 30.3145 137.88 30.2964 138.034 30.3152C138.189 30.334 138.337 30.3892 138.466 30.4763C138.695 30.5965 138.959 30.4161 138.622 30.1517C137.745 29.4424 137.913 27.3265 138.226 26.8456C138.538 26.3647 138.755 26.533 138.646 26.9778C138.523 27.8668 138.658 28.7725 139.035 29.5868C139.413 30.4011 140.016 31.0897 140.774 31.5703L140.834 31.2216C140.246 30.6466 139.83 29.919 139.633 29.1205C139.435 28.322 139.464 27.4842 139.716 26.7013C139.757 27.4185 140.031 28.1027 140.498 28.6489L140.702 28.4445C140.451 28.1026 140.272 27.7129 140.177 27.2994C140.082 26.886 140.073 26.4574 140.149 26.0401C140.397 26.7285 140.889 27.3019 141.532 27.6511L141.7 27.3986C140.57 26.4729 140.149 20.8345 140.149 20.3176C140.149 19.8006 140.402 19.9208 140.558 20.029C141.222 20.5139 141.846 21.0527 142.421 21.64C142.744 21.9905 142.994 22.4016 143.157 22.8494C143.32 23.2971 143.393 23.7728 143.371 24.2488C143.311 24.5373 143.251 24.9341 143.588 24.6215C144.115 24.1829 144.75 23.8925 145.427 23.7799C145.92 23.6958 145.727 23.2991 145.511 23.1548C144.814 22.722 142.602 19.8607 140.414 18.8268C144.02 18.2257 145.92 22.9865 146.016 23.3231C146.112 23.6597 146.148 23.8401 145.92 24.0444C145.213 24.8313 144.633 25.7236 144.201 26.6893L144.429 26.8215C144.846 26.1048 145.437 25.5052 146.148 25.0783C147.098 24.5854 147.242 24.7297 147.435 24.9942C144.754 27.3986 144.441 29.0576 144.441 32.9408L144.02 32.6763L143.852 32.9408C144.862 33.9627 144.453 34.4796 144.225 34.7441C143.996 35.0086 143.6 34.8523 143.479 35.0807C143.143 34.708 142.83 34.167 142.614 34.1069L142.025 33.9627C141.928 33.9627 141.82 34.0468 142.025 34.2031C142.445 34.5518 143.395 35.4775 143.347 35.4053C143.349 35.6674 143.374 35.9287 143.419 36.1868C143.143 36.0545 143.01 35.9583 142.878 35.9103C142.746 35.8622 142.421 35.9824 142.65 36.2349C143.129 36.7082 143.535 37.2513 143.852 37.8458C143.479 37.7737 142.59 37.0403 141.965 36.8961C141.339 36.7518 141.039 36.8961 141.087 37.0644C141.135 37.2327 141.327 37.1726 141.472 37.1606C141.703 37.1517 141.93 37.2236 142.115 37.3639C142.299 37.5043 142.429 37.7044 142.481 37.93C142.573 38.3908 142.739 38.8335 142.974 39.2404L142.169 38.7835C142.061 38.7114 141.88 38.9278 142.013 39.0721C142.145 39.2163 143.407 39.8054 143.575 40.0218C144.122 40.7119 144.721 41.3589 145.367 41.9574C144.742 41.6382 144.095 41.365 143.431 41.1399C143.335 41.1399 143.287 41.3443 143.431 41.3683C145.809 42.4967 148.096 43.807 150.272 45.2875C150.116 45.2875 149.971 45.5159 149.947 45.6722C149.163 45.3407 148.41 44.9383 147.699 44.47C147.459 44.2776 146.942 44.2776 145.295 43.5082L145.162 43.6645C145.769 44.0015 146.396 44.3026 147.038 44.5662C147.108 44.5716 147.174 44.5972 147.23 44.6399C147.285 44.6826 147.327 44.7405 147.35 44.8066C147.35 44.8908 147.783 45.0952 147.976 45.2154C148.168 45.3356 153.073 47.6198 154.708 49.7357C153.841 49.147 152.924 48.636 151.967 48.2089C151.811 48.2089 151.534 47.9925 151.366 47.8242C151.198 47.6559 148.024 46.3815 147.615 46.2132L147.471 46.3575C149.875 47.74 154.023 50.0362 155.441 51.8035C155.826 52.2964 155.333 52.092 155.153 51.9598C153.538 50.8077 151.79 49.8551 149.947 49.1226C149.695 49.1226 149.707 49.3269 149.947 49.3991C151.747 50.4159 153.407 51.6604 154.888 53.1019C155.225 53.5707 154.636 53.6068 154.468 53.5106C153.12 52.7467 151.717 52.0837 150.272 51.527C148.577 49.339 143.9 45.1913 143.852 44.8427C142.281 43.6986 140.973 42.231 140.017 40.5388H139.776C139.307 40.2576 138.817 40.0124 138.31 39.8054L138.238 39.9978C139.007 40.326 139.675 40.8529 140.173 41.5246V41.9814C140.354 42.1497 140.762 42.4383 140.979 42.6306C140.862 42.6823 140.731 42.6939 140.607 42.6634C140.483 42.633 140.373 42.5622 140.293 42.4623H140.041C139.692 42.318 139.007 42.0776 138.839 41.9814L138.767 42.2219C139.912 42.7456 141.006 43.3734 142.037 44.0973C142.277 44.2296 142.313 44.5181 142.638 44.6864C143.442 45.1561 144.175 45.7392 144.814 46.4176C144.238 46.0484 143.604 45.78 142.938 45.6241C142.537 45.3519 142.082 45.1676 141.604 45.0831C141.303 44.9148 140.594 44.5902 140.474 44.5181C140.354 44.446 140.005 44.6143 140.257 44.7585C140.605 44.9392 140.962 45.0998 141.327 45.2394C141.327 45.3476 141.496 45.4919 141.808 45.4919C142.608 45.8969 143.376 46.3632 144.104 46.8864C144.489 47.163 148.192 49.387 148.913 50.6013C148.375 50.1534 147.781 49.7775 147.146 49.4832C146.305 49.1346 144.104 48.0406 143.948 47.9324C143.792 47.8242 143.431 48.0045 143.503 48.1127C143.575 48.2209 145.908 49.6155 147.194 50.5772C147.741 50.9372 148.26 51.3391 148.745 51.7794C149.737 52.3832 150.637 53.1284 151.414 53.9915C151.558 54.1598 151.414 54.256 151.33 54.1598C150.275 53.4481 149.174 52.8055 148.036 52.2363C147.074 51.515 143.227 49.892 142.938 49.6876C142.938 49.6876 142.818 49.6876 142.806 49.7718C142.694 49.7325 142.588 49.6757 142.494 49.6034C142.361 49.5193 142.205 49.7477 142.337 49.88C142.469 50.0122 143.792 50.5652 144.044 50.6975C144.297 50.8297 144.153 51.0341 144.489 51.1663C146.598 52.3822 148.586 53.7951 150.428 55.3861C150.608 55.5784 150.572 55.7347 150.212 55.5303C149.851 55.326 148.372 54.5205 148.216 54.4964C147.889 54.2605 147.523 54.0854 147.134 53.9795C146.664 53.6369 146.14 53.3767 145.583 53.2101C144.982 52.6931 143.359 52.4166 142.95 52.104C142.794 51.9838 142.71 52.3084 142.878 52.4166C143.364 52.7399 143.875 53.0253 144.405 53.2702V53.4145L144.633 53.6549H144.79C146.343 54.466 147.848 55.3651 149.298 56.3478C149.671 56.5883 149.611 56.961 149.07 56.973C148.565 56.829 148.081 56.6231 147.627 56.3599C147.28 56.0966 146.86 55.9494 146.425 55.9391C146.088 55.6207 145.673 55.3967 145.223 55.2899C144.554 55.0276 143.9 54.7307 143.263 54.4003C143.143 54.3041 143.01 54.4003 143.191 54.7369C143.355 54.9521 143.596 55.0945 143.864 55.1336C143.936 55.1336 144.213 54.9172 144.201 55.2418C144.189 55.5664 144.201 55.4221 144.369 55.4823C144.537 55.5424 147.423 57.3818 147.615 57.526C147.807 57.6703 147.879 57.8506 147.615 58.055C147.35 58.2594 147.17 58.3796 146.761 58.1872C146.353 57.9949 145.367 57.5621 145.138 57.49C144.74 57.2682 144.365 57.0064 144.02 56.7085C144.02 56.7806 143.816 56.9249 143.419 56.7085C143.239 56.5883 143.071 56.9009 143.215 56.985C143.359 57.0692 144.129 57.1774 144.08 57.4539C144.809 57.8365 145.505 58.2789 146.16 58.7763C146.244 58.8845 146.256 58.8965 146.16 58.9807L145.583 59.3293C145.5 59.3657 145.41 59.3845 145.319 59.3845C145.228 59.3845 145.138 59.3657 145.054 59.3293C144.79 59.2692 143.479 58.9206 143.335 58.9206C143.191 58.9206 143.059 59.1009 143.227 59.137C143.649 59.2268 144.054 59.3808 144.429 59.5938C144.455 59.6526 144.493 59.7054 144.541 59.7489C144.589 59.7923 144.645 59.8255 144.706 59.8463C144.802 59.8463 144.766 59.9184 144.706 59.9785C142.7 61.2511 140.473 62.1361 138.141 62.5873C138.082 60.5067 137.595 58.4605 136.711 56.5763C136.711 55.5905 135.833 53.8953 135.256 51.7674C136.374 48.3051 133.609 46.9586 130.544 45.3837C129.434 44.8466 128.503 44.0003 127.863 42.9467C127.224 41.8931 126.902 40.677 126.937 39.4448C127.246 40.4832 127.793 41.4355 128.533 42.2263C129.274 43.0171 130.189 43.6247 131.205 44.0011C131.909 44.2122 132.562 44.5684 133.121 45.0466C133.68 45.5249 134.133 46.1147 134.451 46.7782C134.523 47.1509 134.775 47.0067 134.799 46.646C134.855 45.2112 134.432 43.7985 133.597 42.6306C132.744 41.8852 132.395 41.224 132.395 40.5989C132.539 40.7912 132.864 41.1038 132.948 41.224C133.032 41.3443 133.321 41.4525 133.357 41.224C133.484 39.7506 133.279 38.2674 132.756 36.884C132.443 36.2469 133.092 36.4032 133.405 36.4272C133.717 36.4512 134.21 36.0185 133.705 35.6578C131.89 34.2392 130.748 29.8872 130.952 27.3024V27.3625ZM137.913 30.0555C136.711 29.779 136.927 28.4926 137.047 27.9396H137.312C137.353 28.6807 137.559 29.4034 137.913 30.0555ZM134.126 29.6588C134.198 30.2599 134.739 32.0632 134.294 33.1812C133.248 31.3178 132.647 28.2642 133.092 26.7855C133.23 26.2327 133.51 25.7256 133.905 25.3145C134.299 24.9033 134.794 24.6022 135.34 24.4412C135.773 24.3209 135.893 24.4412 135.605 24.6455C134.09 25.6193 133.994 28.5768 134.126 29.6227V29.6588ZM136.531 58.5118C136.591 58.8004 136.603 59.2211 136.218 58.7643C134.908 57.2615 132.167 55.6385 131.157 54.4484C131.157 54.232 130.628 52.8855 130.471 52.5729C133.537 54.3762 136.29 57.3337 136.531 58.5239V58.5118ZM130.423 51.6953L129.738 50.4931C130.531 50.8898 134.691 52.5729 135.016 54.3642C135.016 54.5806 135.016 54.7249 134.715 54.5806C134.415 54.4363 131.036 51.9598 130.423 51.6953ZM130.88 38.0983C130.519 37.6688 130.33 37.1203 130.351 36.5594C130.351 36.2349 130.351 35.8381 130.88 36.1267C131.408 36.5722 131.837 37.1232 132.139 37.7443C132.441 38.3655 132.61 39.043 132.635 39.7333C132.09 39.1363 131.503 38.578 130.88 38.0622V38.0983ZM130.303 26.3407C129.101 28.9735 131.205 34.3594 133.273 35.6337C129.341 35.3933 127.286 28.2401 130.303 26.3046V26.3407ZM127.069 35.1769C127.35 36.6624 127.958 38.0668 128.848 39.2885C129.053 39.6131 129.57 40.2382 129.81 40.2983C129.81 40.5267 129.978 40.9956 130.015 41.188C130.051 41.3803 130.327 41.5246 130.399 41.188C130.43 40.7204 130.363 40.2516 130.204 39.811C130.044 39.3703 129.796 38.9673 129.474 38.6273C128.521 37.4311 127.877 36.0192 127.598 34.5157C127.584 33.5982 127.649 32.6812 127.79 31.7746C127.79 31.3779 128.295 31.6063 128.355 31.9309C128.527 32.5987 128.756 33.2504 129.041 33.8785C129.394 34.6542 129.555 35.5038 129.51 36.3551C129.439 36.7237 129.455 37.1038 129.557 37.4649C129.66 37.8261 129.845 38.1583 130.099 38.4349C130.363 38.9639 130.964 39.2043 131.133 40.5147C131.157 40.9638 131.286 41.4009 131.509 41.7913C131.733 42.1816 132.044 42.5143 132.419 42.7629C132.732 42.9509 133.001 43.2037 133.209 43.5044C133.416 43.805 133.557 44.1466 133.621 44.5061C133.362 44.1676 133.005 43.916 132.599 43.7847C129.846 42.7388 128.067 41.0557 126.841 36.5715C126.865 36.3671 127.057 35.4173 127.069 35.1408V35.1769ZM126.745 41.9213C126.904 42.7246 127.229 43.4859 127.698 44.1565C128.168 44.8272 128.773 45.3926 129.474 45.8165C130.676 46.7782 131.722 46.7302 132.852 47.3072C133.366 47.5915 133.8 48.0002 134.115 48.4959C134.43 48.9916 134.616 49.5584 134.655 50.1444C133.236 48.822 132.01 48.5575 129.57 46.9706C128.695 46.4446 127.964 45.7105 127.442 44.8338C126.92 43.957 126.622 42.9648 126.576 41.9454L126.745 41.9213ZM122.753 35.3813C123.889 34.6074 124.909 33.6765 125.783 32.6162C126.336 31.8949 126.636 31.9189 126.444 32.52C126.252 33.1211 126.167 33.59 125.987 34.3233C125.016 34.9388 123.902 35.291 122.753 35.3452V35.3813ZM125.29 37.3048C124.43 37.7454 123.523 38.0843 122.585 38.3147C123.568 37.6285 124.503 36.8775 125.386 36.0665C125.783 35.6458 125.915 35.5255 125.795 36.331C125.675 37.1365 125.614 37.1245 125.29 37.2688V37.3048ZM125.29 40.9115C124.762 41.2539 124.169 41.4822 123.548 41.5816C122.926 41.681 122.291 41.6493 121.683 41.4885C122.448 41.3823 123.184 41.1232 123.847 40.7266C124.51 40.3301 125.087 39.8042 125.542 39.1803C125.747 38.8196 125.843 38.9278 125.843 39.1803C125.843 39.4327 125.843 40.0699 125.771 40.1901C125.75 40.3327 125.698 40.4686 125.616 40.5875C125.535 40.7063 125.427 40.8048 125.302 40.8754L125.29 40.9115ZM121.551 45.8886C122.441 45.7203 124.941 44.7946 125.638 43.4842C125.638 43.8809 125.638 45.0951 125.723 45.3115C124.398 45.8173 122.973 46.0026 121.563 45.8525L121.551 45.8886ZM123.426 49.2909C124.556 48.6029 125.488 47.6336 126.131 46.4777C126.131 46.7422 126.408 47.4755 126.468 47.6799C125.658 48.5358 124.589 49.1019 123.426 49.2909V49.2909ZM124.436 52.1281C125.381 51.2592 126.192 50.2543 126.841 49.1466L127.346 50.3488C126.487 51.113 125.503 51.7231 124.436 52.1521V52.1281ZM125.458 54.5325C126.503 53.7784 127.375 52.8114 128.019 51.6953L128.512 52.8133C127.666 53.6589 126.613 54.2681 125.458 54.5806V54.5325ZM126.444 58.8124C127.457 57.4943 128.346 56.0858 129.101 54.6046C129.233 55.1216 129.498 56.0473 129.582 56.3118C128.713 57.372 127.648 58.2539 126.444 58.9086V58.8124ZM128.776 48.5695L127.827 46.7181C129.288 47.7186 130.832 48.5914 132.443 49.3269C133.223 49.7415 133.926 50.2864 134.523 50.9379C134.655 51.1783 134.691 51.2745 134.403 51.4308C134.176 51.5329 133.938 51.6056 133.693 51.6472C132.239 50.998 129.269 48.9062 128.776 48.6176V48.5695ZM128.704 61.6256C129.533 60.411 130.162 59.0717 130.568 57.6583C130.817 58.0829 131.102 58.4852 131.421 58.8605C130.729 59.9835 129.802 60.9433 128.704 61.6736V61.6256ZM130.628 63.6453C131.528 62.6218 132.09 61.3455 132.239 59.9906C132.431 60.1949 132.852 60.772 133.08 61.0485C132.441 62.0871 131.609 62.9932 130.628 63.7174V63.6453ZM133.176 67.2519C134.138 65.6807 134.489 63.8111 134.162 61.9982C134.821 62.5776 135.429 63.2132 135.978 63.8977C135.773 64.6209 135.417 65.2926 134.935 65.8687C134.452 66.4447 133.853 66.912 133.176 67.2399V67.2519ZM133.441 58.9086C132.909 58.2569 132.445 57.5519 132.058 56.8047C131.854 56.5282 132.058 56.4561 132.227 56.5522C133.346 57.1745 134.347 57.9883 135.184 58.9567C136.002 60.0026 137.06 62.2988 136.747 62.9961C135.872 61.4643 134.756 60.084 133.441 58.9086V58.9086ZM143.636 75.7395C142.451 74.6573 141.153 73.706 139.764 72.9023C139.596 72.8422 139.211 73.0225 139.644 73.2269C140.712 73.9025 141.596 74.8318 142.217 75.9319L141.315 76.2084C140.504 75.3991 139.581 74.7108 138.574 74.1646L138.358 74.393C139.392 75.0062 140.762 76.3647 140.51 76.4368C140.257 76.5089 138.791 76.4368 138.791 76.4368C138.349 76.0215 137.861 75.6584 137.336 75.3548L137.108 75.5953C137.431 75.803 137.705 76.0776 137.913 76.4007H135.509C135.509 76.1723 135.172 75.9319 135.1 75.8357L134.896 76.004C135.04 76.2084 134.896 76.3406 134.896 76.4729V76.6051L133.02 76.2565C134.65 75.3106 135.932 73.8646 136.675 72.1329C136.807 71.9085 136.995 71.7221 137.22 71.5915C137.446 71.461 137.701 71.3907 137.961 71.3875C139 71.4651 140.026 71.671 141.015 72.0006C142.293 72.8812 143.421 73.9609 144.357 75.1985C144.525 75.3909 143.72 75.8117 143.612 75.7395H143.636ZM145.86 75.0903C145.643 74.8739 142.638 72.4936 142.181 72.193C142.908 72.3513 143.614 72.5933 144.285 72.9143C145.076 73.4906 145.795 74.1607 146.425 74.91L145.86 75.0903ZM151.654 69.7044C151.402 69.3678 151.258 69.0793 150.813 69.0793C148.869 68.5631 146.962 67.9206 145.102 67.1557C144.117 67.2746 143.123 67.3027 142.133 67.2399V67.3721C143.951 67.6326 145.702 68.2408 147.29 69.1634C147.206 69.5481 146.99 70.5339 146.93 70.7023C146.87 70.8706 147.122 71.123 147.242 70.9066C147.516 70.4354 147.884 70.0261 148.324 69.7044C148.709 69.9088 150.031 70.558 150.969 71.1711C151.907 71.7842 151.979 72.7701 151.234 73.2509L151.053 73.1427C151.167 72.9475 151.205 72.7175 151.161 72.4961C151.116 72.2747 150.993 72.0771 150.813 71.9405C150.681 71.8684 149.911 71.3875 149.731 71.3034C149.55 71.2192 149.298 71.3034 149.43 71.4957C149.596 71.7248 149.669 72.0084 149.635 72.2892L148.793 71.7722C148.913 71.4717 149.214 70.9908 148.793 70.7744C148.372 70.558 148.24 71.0389 148.264 71.4957C148.12 71.3875 148.024 71.3034 147.747 71.4957C147.471 71.6881 147.651 71.8924 147.747 72.0006C147.843 72.1088 149.262 72.9023 149.466 73.0586C149.671 73.2149 149.899 73.3231 149.671 73.5275C149.442 73.7318 149.286 73.6357 149.082 73.5275C148.877 73.4193 148.685 73.2509 148.493 73.6477C148.3 74.0444 148.192 74.2127 148.829 74.5614L148.084 74.7657C147.779 74.5213 147.462 74.2926 147.134 74.0805C146.389 73.5876 146.497 73.0105 146.737 72.3012C146.882 71.8564 146.545 71.8684 146.449 72.0487C146.256 72.4229 146.039 72.7843 145.8 73.1307C143.645 71.8334 141.281 70.9183 138.815 70.4257C138.404 70.351 137.982 70.3706 137.58 70.483C137.178 70.5955 136.807 70.7979 136.494 71.0749C136.494 70.3897 137.072 67.7448 137.156 67.1076C137.564 67.1076 137.444 64.9196 138.045 64.1863C138.061 63.9742 138.061 63.7612 138.045 63.5491C140.326 62.9124 142.512 61.9787 144.549 60.772L145.042 61.6256C145.114 61.7338 145.439 61.6256 145.391 61.4332C145.333 61.2335 145.265 61.0369 145.186 60.8441C145.223 60.6491 145.284 60.4593 145.367 60.2791C146.569 59.5097 147.615 58.7883 148.541 58.2473C148.829 58.079 148.937 58.079 149.022 58.2473C149.106 58.4157 150.584 61.2889 150.729 61.6015C150.873 61.9141 150.801 62.0343 150.608 62.1906C149.6 62.9939 148.498 63.6721 147.326 64.2103C147.231 64.0427 147.083 63.9116 146.906 63.8376C146.677 63.7535 146.353 63.2365 146.196 62.936C146.04 62.6354 145.788 62.936 145.848 63.1403C145.908 63.3447 146.353 64.2344 146.521 64.595C145.21 65.2029 143.856 65.7133 142.469 66.1218C141.928 66.2661 142.013 66.4945 142.385 66.5787C142.758 66.6628 144.008 66.8311 144.321 66.5787C144.633 66.3262 145.427 66.6989 146.136 66.4705C146.846 66.2421 148.661 67.2399 149.875 67.8891C149.875 68.2858 153.614 70.7263 154.107 71.1471C154.6 71.5678 154.107 71.9165 153.734 71.6039C152.991 71.0015 152.288 70.3509 151.63 69.6563L151.654 69.7044ZM157.485 89.1802C157.485 88.6633 156.896 85.1649 156.788 84.3714C157.318 84.0477 157.913 83.8465 158.531 83.7823C159.06 83.7823 158.856 83.4457 158.531 83.4457C157.906 83.4729 157.284 83.5412 156.668 83.6501C156.079 80.8489 154.576 76.2204 153.193 74.7657C152.28 73.804 153.073 73.5034 153.41 73.3351C155.011 72.5308 156.505 71.5292 157.858 70.3536C158.011 70.167 158.23 70.0466 158.47 70.0175C158.709 69.9884 158.951 70.0528 159.144 70.1973C161.45 71.6036 163.862 72.8295 166.357 73.8641C166.138 74.4703 165.954 75.0884 165.804 75.7155L166.093 75.8718C166.526 74.6696 167.007 74.5854 167.139 74.2007C167.427 74.3209 170.625 75.6674 170.962 75.8357C171.299 76.004 171.731 76.2324 171.563 76.7013C171.395 77.1702 170.361 79.5265 170.18 79.9473C170 80.368 169.712 80.5003 169.098 80.2719C168.485 80.0434 166.117 79.0696 165.432 78.709C165.651 78.0723 165.784 77.4093 165.828 76.7374C165.828 76.4609 165.588 76.3526 165.516 76.569C165.444 76.7854 164.891 78.0237 164.674 78.4685C162.352 77.4325 160.167 76.112 158.17 74.5373L158.026 74.6696C159.459 77.2265 160.493 79.9874 161.092 82.8566C160.515 83.0249 159.89 83.2053 159.541 83.3135C159.192 83.4217 159.445 83.6501 159.649 83.59C160.173 83.4893 160.712 83.4893 161.236 83.59C161.44 84.3113 161.849 86.9922 161.957 87.7616C162.066 88.5311 161.801 89.048 161.08 89.2043C160.671 89.2884 158.783 89.5289 158.218 89.565C157.906 89.613 157.485 89.6852 157.485 89.1802ZM157.689 90.4786C157.806 90.572 157.943 90.6369 158.089 90.6682C158.235 90.6995 158.386 90.6963 158.531 90.659C158.94 90.659 160.731 90.3825 161.056 90.3344C161.492 90.2256 161.875 89.9658 162.138 89.601C162.289 90.3194 162.267 91.0634 162.075 91.7719C161.883 92.4804 161.525 93.1331 161.032 93.6765C160.875 93.8022 160.69 93.8867 160.493 93.9224C160.295 93.9581 160.092 93.9438 159.902 93.8809C159.257 93.5662 158.709 93.0847 158.313 92.4864C157.918 91.8881 157.69 91.1948 157.653 90.4786H157.689ZM162.582 105.338C162.138 105.518 160.37 105.999 160.106 106.071C159.962 106.088 159.816 106.075 159.677 106.034C159.538 105.994 159.408 105.925 159.296 105.833C159.184 105.741 159.091 105.628 159.024 105.499C158.957 105.371 158.916 105.23 158.904 105.086C158.808 104.22 158.447 97.1749 158.062 92.8951C158.685 93.5887 159.374 94.2208 160.118 94.7825C160.455 95.0591 160.839 95.0591 161.32 94.5662C161.747 94.1104 162.107 93.5963 162.39 93.0393C162.667 95.023 163.232 104.124 163.232 104.472C163.227 104.672 163.158 104.864 163.035 105.02C162.911 105.177 162.739 105.288 162.546 105.338H162.582ZM163.376 91.8131V91.7049C164.061 92.6426 170.325 100.12 172.368 101.611L172.284 101.888C171.827 101.515 170.373 101.142 169.88 100.782C169.769 100.706 169.664 100.622 169.567 100.529L169.712 100.385C168.706 99.4647 167.828 98.4133 167.103 97.2591C167.187 97.0307 167.019 96.4536 166.526 96.5378C166.261 96.1771 163.496 92.0776 163.34 91.8131H163.376ZM163.773 95.1192C165.441 97.3248 167.235 99.4322 169.147 101.431L168.197 101.659C166.507 99.6356 164.998 97.4673 163.688 95.1793L163.773 95.1192ZM165.143 103.258C164.538 102.652 164.096 101.904 163.857 101.082C164.302 102.008 165.588 102.669 165.732 103.078L165.143 103.258ZM165.311 134.72C164.725 133.337 164.403 131.857 164.362 130.356C164.698 131.041 165.564 134.047 165.275 134.72H165.311ZM166.646 133.866C165.915 131.686 165.479 129.418 165.348 127.122C166.297 129.755 167.103 132.436 166.61 133.866H166.646ZM167.56 131.149C166.947 129.022 166.545 126.839 166.357 124.633C167.367 127.519 168.065 129.635 167.524 131.149H167.56ZM168.87 128.036C168.296 125.887 167.894 123.696 167.668 121.484C168.581 124.405 169.507 126.593 168.834 128.036H168.87ZM169.748 124.429C169.152 122.766 168.803 121.024 168.714 119.26C169.463 120.867 169.806 122.634 169.712 124.405L169.748 124.429ZM170.565 121.4C170.029 120.044 169.716 118.611 169.639 117.156C170.217 118.863 170.709 120.558 170.529 121.424L170.565 121.4ZM170.385 115.052C170.849 116.171 171.18 117.341 171.371 118.538C170.809 117.444 170.462 116.253 170.349 115.028L170.385 115.052ZM171.587 113.85C171.719 114.21 172.068 115.581 172.152 115.929C171.768 115.305 171.549 114.594 171.515 113.862L171.587 113.85ZM198.036 138.182C197.784 137.805 197.404 137.532 196.966 137.413C196.521 137.293 195.247 137.497 194.718 136.379C192.974 132.741 190.829 129.309 188.322 126.148C186.927 124.549 182.491 116.687 181.457 115.328C180.502 114.157 179.259 113.254 177.851 112.708C176.642 112.229 175.575 111.451 174.749 110.447C174.088 109.498 173.373 108.587 172.609 107.718L172.344 107.947C174.148 110.255 175.951 112.756 177.225 113.297C180.387 114.631 181.133 116.242 183.236 119.68L183.152 119.752C182.01 117.937 180.447 114.944 177.995 113.994C173.306 112.082 169.579 106.444 167.692 103.727C165.816 102.837 164.181 99.4471 163.785 98.0766C164.801 99.6534 166.059 101.061 167.512 102.248C168.065 101.852 170.313 102.248 170.649 102.369C170.986 102.489 172.729 103.871 172.657 104.4C171.599 103.006 168.654 102.477 167.848 102.585C167.499 102.585 167.548 103.114 167.848 103.042C169.471 102.2 172.537 105.446 174.124 107.959C176.288 111.361 178.175 111.962 179.462 112.118C181.421 113.862 189.74 124.141 191.484 126.305C191.868 126.906 193.467 128.613 193.972 129.31C193.47 129.241 192.977 129.111 192.506 128.925L191.892 128.228L190.991 128.084L192.121 129.466L193.131 129.623L192.938 129.406L194.489 129.947L195.98 131.39L194.537 131.161C194.177 130.741 193.804 130.392 193.431 129.959L192.409 129.851C194.198 131.953 195.806 134.201 197.218 136.571C197.891 137.954 199.562 138.014 201.414 138.218C200.883 138.468 200.304 138.601 199.717 138.607C199.13 138.614 198.548 138.493 198.012 138.255L198.036 138.182ZM201.258 141.008C202.052 141.181 202.854 141.313 203.662 141.404C202.691 141.871 201.608 142.059 200.536 141.945C199.839 141.777 200.476 141.404 201.234 141.02L201.258 141.008ZM200.62 143.292C200.62 143.051 201.005 142.811 201.823 142.727C202.195 142.727 203.626 143.051 204.528 143.099C201.967 143.941 200.644 143.556 200.596 143.304L200.62 143.292Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M162.183 98.8695C161.991 98.8695 161.305 98.7613 161.173 98.8695C161.019 99.0197 160.835 99.1345 160.632 99.2061C160.545 99.2162 160.457 99.2051 160.375 99.1737C160.294 99.1422 160.221 99.0915 160.163 99.0258C160.079 98.8815 159.899 98.7132 159.742 98.7252C159.586 98.7372 159.466 98.8935 159.454 99.2181C159.442 99.5427 159.574 99.687 159.658 99.6269C159.742 99.5668 159.827 99.5067 159.947 99.6269C160.035 99.6775 160.134 99.7042 160.235 99.7042C160.337 99.7042 160.436 99.6775 160.524 99.6269C160.608 99.5547 160.752 99.4946 160.836 99.5668C160.862 99.5972 160.895 99.6216 160.931 99.6384C160.967 99.6552 161.007 99.6638 161.047 99.6638C161.087 99.6638 161.126 99.6552 161.163 99.6384C161.199 99.6216 161.231 99.5972 161.257 99.5668C161.365 99.3864 161.51 99.3023 161.714 99.5668C161.918 99.8312 162.111 99.7351 162.255 99.5066C162.399 99.2782 162.375 98.9296 162.183 98.8695Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M162.174 103.391C162.042 103.391 162.03 103.559 162.066 103.775C162.102 103.992 162.15 104.076 161.657 104.352C161.249 104.016 160.792 103.559 160.455 104.088L160.155 104.557C160.155 104.557 160.058 104.449 160.034 104.388C160.01 104.328 159.71 104.088 159.602 104.725C159.493 105.362 159.722 105.434 160.01 105.398C160.299 105.362 160.599 105.182 160.984 104.641C161.104 104.841 161.287 104.997 161.504 105.084C161.721 105.171 161.961 105.184 162.186 105.122C162.691 104.954 162.595 104.268 162.559 104.004C162.523 103.739 162.403 103.391 162.174 103.391Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M116.944 125.163C116.669 125.021 116.404 124.86 116.151 124.682L115.826 125.066C116.178 125.426 116.481 125.83 116.728 126.269C116.8 125.956 116.872 125.559 116.944 125.163Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M159.896 102.381C159.776 102.285 159.583 102.501 159.608 102.645C159.619 102.858 159.619 103.07 159.608 103.282C159.608 103.391 160.149 103.799 160.124 103.355C160.1 102.91 160.605 102.79 160.978 102.705C161.222 102.637 161.48 102.637 161.723 102.705C161.723 102.705 161.88 102.946 162.108 102.705C162.207 102.597 162.262 102.455 162.262 102.309C162.262 102.162 162.207 102.02 162.108 101.912C161.916 101.575 161.711 101.696 161.651 101.912C161.591 102.128 161.315 102.297 160.798 102.393C160.281 102.489 160.004 102.477 159.896 102.381Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M160.06 97.0061C160.052 96.9314 160.06 96.8558 160.085 96.785C160.11 96.7141 160.151 96.6499 160.205 96.5973C160.373 96.4771 160.036 95.7918 159.603 96.5011C159.411 96.2847 159.183 96.5011 159.303 96.7656C159.423 97.0301 159.159 97.2345 159.543 97.3547C159.6 97.3786 159.663 97.388 159.724 97.382C159.786 97.3759 159.845 97.3547 159.896 97.3201C159.947 97.2855 159.989 97.2386 160.018 97.1838C160.047 97.129 160.061 97.0679 160.06 97.0061V97.0061Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M161 101.394C161 101.178 161.06 100.997 160.88 100.877C160.7 100.757 160.58 100.877 160.519 101.094C160.459 101.31 160.519 101.599 160.652 101.647C160.691 101.653 160.732 101.652 160.771 101.643C160.81 101.634 160.847 101.617 160.879 101.594C160.912 101.57 160.939 101.541 160.96 101.506C160.981 101.472 160.994 101.434 161 101.394V101.394Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M170.434 105.698C170.638 105.902 170.866 106.155 171.071 106.383L171.287 106.215L170.602 105.494L170.434 105.698Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M169.516 104.773L169.9 105.11L170.057 104.917C169.919 104.789 169.775 104.668 169.624 104.557L169.516 104.773Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M179.262 52.2358L179.178 52.4643C179.754 52.9332 180.201 53.5415 180.476 54.2315L180.572 53.414C180.226 52.9307 179.779 52.5286 179.262 52.2358V52.2358Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M175.348 55.2056C175.348 55.2471 175.364 55.2868 175.393 55.3161C175.423 55.3454 175.462 55.3619 175.504 55.3619C175.545 55.3619 175.585 55.3454 175.614 55.3161C175.644 55.2868 175.66 55.2471 175.66 55.2056C175.66 55.1642 175.644 55.1244 175.614 55.0951C175.585 55.0658 175.545 55.0493 175.504 55.0493C175.462 55.0493 175.423 55.0658 175.393 55.0951C175.364 55.1244 175.348 55.1642 175.348 55.2056V55.2056Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M168.442 67.7807C168.31 67.5763 168.19 67.4801 168.19 67.396C168.19 67.3118 167.901 67.1074 167.769 67.2397C167.732 67.2621 167.701 67.2938 167.679 67.3318C167.658 67.3697 167.646 67.4125 167.646 67.4561C167.646 67.4996 167.658 67.5425 167.679 67.5804C167.701 67.6183 167.732 67.65 167.769 67.6725C167.917 67.7693 168.054 67.8822 168.178 68.0091C168.31 68.1053 168.586 67.9971 168.442 67.7807Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M169.508 69.0068C169.423 69.103 169.508 69.1631 169.592 69.3074C169.676 69.4516 169.856 69.5358 169.952 69.4276C170.049 69.3194 169.952 69.2352 169.856 69.091C169.76 68.9467 169.64 68.9106 169.508 69.0068Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M168.795 70.9306C168.891 70.8224 168.795 70.7383 168.687 70.594C168.579 70.4497 168.423 70.4137 168.351 70.4978C168.278 70.582 168.29 70.6661 168.423 70.7984C168.555 70.9306 168.699 71.0749 168.795 70.9306Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M171.583 68.0571C171.679 67.9489 171.583 67.8647 171.487 67.7205C171.391 67.5762 171.222 67.5401 171.138 67.6243C171.054 67.7085 171.078 67.7926 171.222 67.9249C171.367 68.0571 171.487 68.1533 171.583 68.0571Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M171.117 62.9357C171.646 63.1881 171.442 62.7673 171.358 62.6351C171.274 62.5029 170.745 61.5411 170.48 62.1542C170.372 62.4067 170.588 62.6832 171.117 62.9357Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M171.096 65.3278C171.139 65.3313 171.182 65.3183 171.215 65.2915C171.249 65.2646 171.271 65.226 171.277 65.1835C171.277 65.1114 171.193 65.0513 171.096 65.0513C171 65.0513 170.916 65.0513 170.916 65.1835C170.916 65.3158 170.988 65.3278 171.096 65.3278Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M170.469 64.5224C170.649 64.3781 170.313 64.0776 170.241 63.9934C170.169 63.9093 170.241 63.5726 170.096 63.5606C170.041 63.5486 169.984 63.5523 169.931 63.5715C169.877 63.5906 169.831 63.6244 169.796 63.6688C169.724 63.8371 169.531 64.0415 169.712 64.2098C169.892 64.3781 170.277 64.6666 170.469 64.5224Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M170.05 71.9767C170.147 71.8805 170.05 71.6641 169.894 71.5318C169.738 71.3996 169.365 71.2433 169.293 71.3275C169.221 71.4116 169.413 71.6641 169.546 71.8084C169.678 71.9526 169.954 72.133 170.05 71.9767Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M168.966 66.1215C169.149 66.1794 169.32 66.2689 169.471 66.3859C169.58 66.4581 169.772 66.3138 169.616 66.0974C169.443 65.8985 169.283 65.6897 169.135 65.4723C169.063 65.34 168.81 65.3881 168.786 65.6045C168.762 65.8209 168.762 66.1215 168.966 66.1215Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M181.3 71.279C181.396 71.1828 181.396 71.1347 181.3 71.0025C181.262 70.9643 181.21 70.9429 181.156 70.9429C181.102 70.9429 181.05 70.9643 181.012 71.0025C180.952 71.0025 180.903 71.0987 181.012 71.2429C181.12 71.3872 181.204 71.3872 181.3 71.279Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M181.71 66.5184C181.806 66.4102 181.71 66.326 181.614 66.1818C181.518 66.0375 181.349 66.0014 181.265 66.0976C181.181 66.1938 181.205 66.2539 181.349 66.3982C181.494 66.5424 181.614 66.6146 181.71 66.5184Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M182.062 69.5717C182.158 69.4635 182.062 69.3794 181.966 69.2351C181.869 69.0909 181.701 69.0548 181.617 69.1389C181.533 69.2231 181.617 69.3073 181.701 69.4395C181.785 69.5717 181.966 69.728 182.062 69.5717Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M181.338 58.9804C181.434 59.1607 181.53 59.2809 181.662 59.2088C181.794 59.1367 181.746 59.0285 181.662 58.8602C181.578 58.6918 181.458 58.6077 181.362 58.6678C181.265 58.7279 181.253 58.8121 181.338 58.9804Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M175.989 53.2701C175.938 52.8486 175.742 52.4579 175.436 52.1641C175.338 52.4295 175.205 52.6803 175.039 52.9094C175.267 53.1739 175.508 53.3062 175.568 53.4264C175.628 53.5466 176.085 53.739 175.989 53.2701Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M182.028 46.2248C182.028 46.0805 181.884 45.9723 181.824 45.9843C181.764 45.9963 181.679 46.1286 181.703 46.2728C181.727 46.4171 181.848 46.5373 181.92 46.5253C181.992 46.5133 182.064 46.381 182.028 46.2248Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M181.363 61.4568C181.267 61.565 181.303 61.613 181.435 61.7573C181.567 61.9016 181.712 61.9857 181.808 61.8775C181.904 61.7693 181.808 61.6852 181.7 61.5529C181.591 61.4207 181.435 61.3125 181.363 61.4568Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M181.4 64.1023C181.304 64.2105 181.4 64.2706 181.472 64.4029C181.544 64.5351 181.748 64.6313 181.845 64.5351C181.941 64.4389 181.845 64.3428 181.736 64.1985C181.628 64.0542 181.532 64.0182 181.4 64.1023Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M173.448 64.7996C173.544 64.7034 173.448 64.6072 173.339 64.475C173.231 64.3427 173.075 64.2946 173.003 64.3788C172.931 64.4629 172.943 64.5351 173.075 64.6793C173.207 64.8236 173.351 64.9198 173.448 64.7996Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M174.993 66.3382L175.234 66.0977C175.005 65.8813 174.488 65.5447 174.284 65.3403L174.176 65.4966C174.434 65.7907 174.707 66.0716 174.993 66.3382V66.3382Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M174.317 53.6182L174.076 53.9788L174.401 54.3275C174.4 54.428 174.434 54.5258 174.497 54.604C174.667 54.7909 174.852 54.9638 175.05 55.1209L175.218 54.9526C175.072 54.4209 174.755 53.952 174.317 53.6182V53.6182Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M167.6 72.5052C167.696 72.397 167.6 72.3129 167.492 72.1686C167.383 72.0243 167.227 71.9883 167.155 72.0844C167.083 72.1806 167.155 72.2407 167.227 72.385C167.299 72.5293 167.504 72.6014 167.6 72.5052Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M174.553 58.4756C174.532 58.4755 174.51 58.4799 174.491 58.4885C174.471 58.4971 174.453 58.5097 174.438 58.5255C174.424 58.5413 174.412 58.56 174.405 58.5804C174.398 58.6008 174.395 58.6224 174.397 58.6439C174.397 58.6853 174.413 58.7251 174.443 58.7544C174.472 58.7837 174.512 58.8002 174.553 58.8002C174.575 58.8018 174.596 58.799 174.617 58.7919C174.637 58.7848 174.656 58.7736 174.672 58.7589C174.687 58.7442 174.7 58.7264 174.709 58.7066C174.717 58.6868 174.722 58.6655 174.722 58.6439C174.722 58.5993 174.704 58.5564 174.672 58.5249C174.641 58.4933 174.598 58.4756 174.553 58.4756Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M172.133 61.313C172.205 61.3972 172.398 61.1447 172.133 60.8682C172.004 60.7183 171.895 60.5527 171.808 60.3753C171.736 60.219 171.388 59.8584 171.171 60.2551C170.955 60.6518 171.171 60.7841 171.328 60.7961C171.631 60.9076 171.905 61.084 172.133 61.313V61.313Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M164.377 71.0989C164.377 71.1189 164.381 71.1387 164.389 71.157C164.397 71.1753 164.409 71.1918 164.423 71.2054C164.438 71.2189 164.455 71.2293 164.474 71.2358C164.493 71.2423 164.513 71.2448 164.533 71.2431C164.554 71.2448 164.574 71.2423 164.594 71.236C164.614 71.2296 164.632 71.2194 164.647 71.206C164.663 71.1926 164.676 71.1762 164.685 71.1578C164.694 71.1395 164.7 71.1194 164.702 71.0989C164.7 71.0783 164.694 71.0583 164.685 71.0399C164.676 71.0215 164.663 71.0051 164.647 70.9917C164.632 70.9783 164.614 70.9681 164.594 70.9618C164.574 70.9554 164.554 70.953 164.533 70.9546C164.494 70.9545 164.456 70.9693 164.427 70.996C164.398 71.0228 164.38 71.0595 164.377 71.0989V71.0989Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M175.185 56.8528C175.185 56.8145 175.17 56.7778 175.143 56.7508C175.116 56.7237 175.079 56.7085 175.041 56.7085C175.003 56.7085 174.966 56.7237 174.939 56.7508C174.912 56.7778 174.896 56.8145 174.896 56.8528C174.896 56.8712 174.9 56.8894 174.908 56.9063C174.915 56.9232 174.926 56.9383 174.939 56.9508C174.953 56.9632 174.969 56.9727 174.986 56.9786C175.004 56.9845 175.022 56.9867 175.041 56.985C175.077 56.9851 175.112 56.9716 175.139 56.9471C175.165 56.9226 175.182 56.8889 175.185 56.8528Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M167.286 69.4399C167.382 69.3317 167.286 69.1634 167.142 69.0192C166.998 68.8749 166.853 68.8028 166.781 68.8869C166.709 68.9711 166.781 69.0913 166.877 69.2356C166.974 69.3798 167.19 69.5361 167.286 69.4399Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M165.556 69.9207C165.472 70.0289 165.496 70.089 165.64 70.2212C165.785 70.3535 165.905 70.4497 166.001 70.3535C166.097 70.2573 166.001 70.1611 165.905 70.0169C165.809 69.8726 165.64 69.8365 165.556 69.9207Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M206.372 85.0802C206.203 84.7316 205.891 83.7578 205.362 83.8059C204.304 82.3031 203.727 80.6801 203.426 80.4998C200.709 78.9489 191.404 71.3389 191.404 71.3389L188.627 71.2788C188.627 72.481 188.627 76.0877 188.627 77.0614C193.508 77.1576 198.245 83.0725 198.557 83.5414C198.87 84.0102 198.99 84.0824 199.255 84.0583C199.765 84.0003 200.282 84.0624 200.764 84.2399C201.246 84.4173 201.68 84.7051 202.032 85.0802C202.21 85.3531 202.285 85.68 202.246 86.0033C202.206 86.3266 202.054 86.6256 201.815 86.8474C201.815 86.8474 201.551 88.218 201.467 88.9994C201.412 89.3257 201.475 89.6608 201.644 89.9449C201.814 90.229 202.079 90.4436 202.392 90.5503L208.403 92.041C208.716 89.9251 206.552 85.4409 206.372 85.0802ZM192.222 74.4647L193.147 74.9095H191.524L192.222 74.4647ZM192.847 76.0516L193.857 75.6549L194.47 76.0035L192.847 76.0516ZM196.189 77.0254L196.946 77.374H194.866L196.189 77.0254ZM195.888 78.8768L197.475 78.2156L198.569 78.7806L195.888 78.8768ZM197.427 80.2353L199.363 79.526L200.421 80.0549C199.442 80.2956 198.428 80.3567 197.427 80.2353V80.2353ZM199.194 81.5096L200.649 80.6801C200.817 80.6801 201.707 80.8123 201.972 81.0768C201.066 81.3282 200.134 81.4735 199.194 81.5096V81.5096ZM201.346 82.5676C201.643 82.2925 202.025 82.1288 202.429 82.1047C202.832 82.0806 203.232 82.1975 203.558 82.4353L201.346 82.5676ZM204.881 84.5512C204.577 84.7495 204.232 84.8763 203.871 84.9221C203.511 84.9679 203.145 84.9315 202.801 84.8157C203.097 84.599 203.443 84.461 203.807 84.4148C204.171 84.3685 204.54 84.4155 204.881 84.5512ZM203.174 88.6989C203.756 88.5905 204.356 88.6211 204.924 88.7883C205.492 88.9554 206.013 89.2543 206.444 89.6606C205.279 89.6956 204.134 89.3588 203.174 88.6989V88.6989ZM203.402 87.0638C203.947 86.9641 204.507 86.98 205.045 87.1105C205.584 87.241 206.089 87.4831 206.528 87.8212C205.807 87.6409 203.775 87.5928 203.426 87.0638H203.402Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M173.226 59.6898C172.865 59.2329 172.528 58.6559 172.384 58.4875C172.048 58.1389 171.591 58.6679 171.939 59.0285C172.288 59.3892 172.577 59.3652 173.142 59.822L173.226 59.6898Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M174.818 63.6089C174.734 63.6089 174.674 63.7291 174.674 63.8614C174.674 63.9936 174.734 64.1138 174.818 64.1138C174.902 64.1138 174.962 63.9936 174.962 63.8614C174.962 63.7291 174.902 63.6089 174.818 63.6089Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M181.226 47.8002C181.226 47.692 180.961 47.7041 180.973 47.8964C180.985 48.0888 180.973 48.5096 181.25 48.5697C181.526 48.6298 181.454 48.3893 181.406 48.3412C181.312 48.1741 181.251 47.9904 181.226 47.8002V47.8002Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M172.521 66.1211C172.617 66.0129 172.521 65.9287 172.413 65.7844C172.305 65.6402 172.16 65.6041 172.076 65.6883C171.992 65.7724 172.076 65.8566 172.148 66.0008C172.22 66.1451 172.425 66.2653 172.521 66.1211Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M172.828 61.8774C172.866 61.8774 172.903 61.8622 172.93 61.8351C172.957 61.8081 172.972 61.7714 172.972 61.7331C172.972 61.6949 172.957 61.6582 172.93 61.6311C172.903 61.6041 172.866 61.5889 172.828 61.5889C172.79 61.5889 172.753 61.6041 172.726 61.6311C172.699 61.6582 172.684 61.6949 172.684 61.7331C172.684 61.7714 172.699 61.8081 172.726 61.8351C172.753 61.8622 172.79 61.8774 172.828 61.8774V61.8774Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M173.875 58.0424C173.575 57.6576 172.781 56.4314 172.673 56.8401C172.565 57.2489 172.793 57.5014 173.767 58.1626L173.875 58.0424Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M174.452 56.1309C174.223 55.8079 173.966 55.5061 173.683 55.2293C173.611 55.1331 173.478 55.073 173.406 55.2293C173.334 55.3856 173.406 55.5899 173.611 55.8063C173.611 56.0348 174.127 56.2632 174.248 56.3113C174.368 56.3594 174.56 56.3113 174.452 56.1309Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M173.778 60.4108C173.822 60.4108 173.865 60.3931 173.897 60.3615C173.928 60.33 173.946 60.2872 173.946 60.2425C173.946 60.1979 173.928 60.1551 173.897 60.1235C173.865 60.092 173.822 60.0742 173.778 60.0742C173.733 60.0742 173.69 60.092 173.659 60.1235C173.627 60.1551 173.609 60.1979 173.609 60.2425C173.609 60.2872 173.627 60.33 173.659 60.3615C173.69 60.3931 173.733 60.4108 173.778 60.4108Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M198.251 45.7438L198.083 45.6235C197.527 45.8319 196.931 45.9101 196.34 45.852C196.836 46.1954 197.42 46.3913 198.023 46.417C198.251 46.417 198.191 46.0804 198.251 45.7438Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M191.152 43.5684C191.249 43.5684 191.321 43.4482 191.321 43.3159C191.321 43.1837 191.249 43.0635 191.152 43.0635C191.056 43.0635 190.996 43.1717 190.996 43.3159C190.996 43.4602 191.044 43.5684 191.152 43.5684Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M192.8 44.9386C192.968 44.8304 193.533 44.59 193.737 44.4818C193.942 44.3736 193.918 44.0129 193.641 44.1211C193.313 44.253 192.996 44.4098 192.691 44.59C192.355 44.7943 192.643 45.0468 192.8 44.9386Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M190.419 45.1309H189.998C190.035 45.7054 190.136 46.2739 190.299 46.826C190.874 46.3061 191.476 45.8165 192.102 45.3593V45.0227L191.765 45.1309C191.607 44.7405 191.478 44.3386 191.381 43.9287L191.032 44.0008C191.064 44.4956 191.141 44.9864 191.26 45.4675L190.683 45.8763C190.537 45.6524 190.447 45.3969 190.419 45.1309V45.1309Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M190.142 56.6359C190.347 56.6359 190.467 56.6359 190.539 56.3834C190.611 56.131 190.539 56.0107 190.371 55.9506C190.203 55.8905 190.046 56.0107 189.986 56.2031C189.926 56.3954 189.95 56.5638 190.142 56.6359Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M182.504 47.2587C182.504 47.2178 182.492 47.1778 182.469 47.144C182.446 47.1102 182.413 47.0841 182.375 47.069C182.337 47.054 182.296 47.0507 182.256 47.0596C182.216 47.0685 182.179 47.0892 182.151 47.119C182.123 47.1488 182.105 47.1863 182.098 47.2267C182.092 47.2671 182.098 47.3085 182.115 47.3456C182.132 47.3827 182.16 47.4137 182.195 47.4346C182.231 47.4556 182.271 47.4655 182.312 47.4631C182.364 47.46 182.413 47.4371 182.449 47.3991C182.485 47.3611 182.505 47.3109 182.504 47.2587V47.2587Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M186.041 45.6841C185.92 44.4819 186.269 42.9551 185.572 42.9551C185.223 42.9551 184.923 43.6043 185.764 45.7202L186.041 45.6841Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M183.039 50.4933C183.039 50.6496 183.099 50.7698 183.183 50.7698C183.267 50.7698 183.316 50.6496 183.316 50.4933C183.316 50.337 183.316 50.2168 183.183 50.2168C183.051 50.2168 183.039 50.349 183.039 50.4933Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M182.513 53.0413C182.586 53.0413 182.646 52.9211 182.646 52.7648C182.646 52.6085 182.646 52.4883 182.513 52.4883C182.381 52.4883 182.369 52.6205 182.369 52.7648C182.369 52.9091 182.429 53.0413 182.513 53.0413Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M185.002 47.9322C184.87 48.0404 184.906 48.1727 185.002 48.3049C185.025 48.3305 185.053 48.351 185.084 48.365C185.115 48.3791 185.148 48.3863 185.183 48.3863C185.217 48.3863 185.25 48.3791 185.281 48.365C185.313 48.351 185.34 48.3305 185.363 48.3049C185.483 48.1967 185.459 48.0645 185.363 47.9443C185.267 47.824 185.146 47.824 185.002 47.9322Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M197.453 37.3291C196.984 37.798 194.916 40.7554 194.531 41.2122L195.637 41.5248C196.407 41.2122 197.789 38.375 197.453 37.3291Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M200.469 59.8937C201.238 59.8937 201.443 59.5812 201.358 59.1123C201.298 58.8358 201.034 58.7396 200.962 58.944C200.89 59.1484 200.445 59.5691 200.24 59.5691C200.036 59.5691 200.048 59.9298 200.469 59.8937Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M200.979 57.4295C200.979 57.2251 200.811 57.1049 200.655 57.3213C200.351 57.732 199.981 58.0895 199.561 58.3792V58.5115C199.877 58.5117 200.19 58.4547 200.486 58.3432C200.579 58.3156 200.665 58.2701 200.74 58.2093C200.814 58.1484 200.876 58.0734 200.922 57.9886C200.968 57.9037 200.997 57.8106 201.006 57.7147C201.016 57.6188 201.007 57.5218 200.979 57.4295V57.4295Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M199.332 61.7932C199.513 61.7211 199.645 61.5888 199.609 61.4926C199.573 61.3965 199.392 61.3604 199.212 61.4205C199.032 61.4806 198.9 61.6129 198.936 61.7211C198.972 61.8293 199.152 61.8533 199.332 61.7932Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M199.107 58.9086C199.215 58.9086 199.288 58.7523 199.251 58.6802C199.215 58.608 199.095 58.572 198.975 58.62C198.855 58.6681 198.795 58.7763 198.831 58.8485C198.867 58.9206 198.987 58.9086 199.107 58.9086Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M189.36 54.099C189.552 54.1952 189.696 54.099 189.78 53.8947C189.865 53.6903 189.853 53.534 189.66 53.4498C189.468 53.3657 189.336 53.4498 189.251 53.6542C189.167 53.8586 189.179 53.9548 189.36 54.099Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M188.751 45.0236C188.793 44.3857 188.898 43.7535 189.064 43.1361C189.22 42.523 189.22 42.1984 188.871 42.1743C188.186 42.1743 188.186 44.3984 188.607 45.0236H188.751Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M199.577 66.6986C199.577 66.4221 199.577 65.3762 199.577 65.1117C199.577 64.8472 199.18 64.8231 199.18 64.5587C199.18 63.9215 198.579 64.4024 198.867 64.8231C199.065 65.4486 199.194 66.0935 199.252 66.7467C199.252 67.0593 199.577 66.9631 199.577 66.6986Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M198.833 112.142C198.665 112.587 198.556 113.176 199.23 113.452C200.288 113.897 204.255 115.364 204.7 115.496C205.145 115.628 205.541 115.893 205.674 115.208C205.866 114.15 205.577 109.497 204.628 108.259C204.34 107.826 204.155 107.332 204.087 106.816C203.834 105.104 203.1 103.499 201.971 102.188C200.336 100.384 194.337 91.428 193.904 90.8148C193.56 90.1494 193.018 89.6074 192.353 89.264C191.608 88.9634 189.768 88.3383 187.737 87.7612C187.352 88.9634 186.679 93.2553 186.102 94.7581C186.846 94.6437 187.582 94.475 188.302 94.2532C188.465 94.1904 188.644 94.1775 188.815 94.216C188.986 94.2545 189.142 94.3427 189.263 94.4696C191.352 96.2147 193.192 98.2371 194.733 100.481C195.671 102.179 196.475 103.947 197.138 105.77C197.237 106.149 197.469 106.478 197.791 106.699C198.113 106.92 198.505 107.017 198.893 106.973C199.422 106.973 199.999 107.369 199.999 107.682C199.975 108.259 199.911 108.833 199.807 109.401C199.395 110.281 199.069 111.199 198.833 112.142V112.142ZM200.997 112.587C202.372 112.485 203.737 112.891 204.832 113.729C203.558 113.777 201.442 113.332 200.997 112.587ZM204.784 111.878C203.774 111.878 201.742 111.697 200.817 110.772C202.227 110.67 203.629 111.061 204.784 111.878V111.878ZM201.346 108.439H203.293C203.173 108.968 201.839 109.016 201.346 108.439ZM201.346 107.117H202.716C202.628 107.211 202.522 107.286 202.404 107.337C202.287 107.388 202.159 107.414 202.031 107.414C201.902 107.414 201.775 107.388 201.657 107.337C201.539 107.286 201.433 107.211 201.346 107.117V107.117ZM188.037 91.5602C188.772 91.1604 189.604 90.9775 190.439 91.0328C191.273 91.0882 192.075 91.3795 192.75 91.8728C192.353 92.3056 189.047 91.5121 188.037 91.5602ZM190.502 93.1952C191.332 92.7255 192.277 92.4965 193.231 92.534L193.844 93.5439C192.718 93.6687 191.578 93.5498 190.502 93.1952V93.1952ZM194.108 93.9406L194.866 95.1428C193.944 95.1907 193.02 95.1016 192.125 94.8783L194.108 93.9406ZM195.13 95.5516L196.104 97.0423L193.579 96.2729L195.13 95.5516ZM194.685 97.956L196.284 97.2827L197.162 98.7014L194.685 97.956ZM197.402 98.9418L198.436 100.457L195.876 99.4588L197.402 98.9418ZM196.885 101.262L198.737 100.913L199.939 102.633L196.885 101.262ZM200.36 103.21L201.37 104.58C200.173 104.272 199.033 103.777 197.991 103.113C198.617 103.15 200.324 103.246 200.324 103.246L200.36 103.21ZM198.701 105.145H201.73L202.572 106.347C201.226 106.121 199.914 105.729 198.665 105.181L198.701 105.145Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M178.559 51.4785C178.539 51.4784 178.519 51.4825 178.501 51.4905C178.482 51.4985 178.466 51.5102 178.452 51.5249C178.439 51.5396 178.428 51.557 178.422 51.5759C178.415 51.5948 178.413 51.6149 178.415 51.6348C178.415 51.6731 178.43 51.7098 178.457 51.7368C178.484 51.7639 178.521 51.7791 178.559 51.7791C178.597 51.7791 178.634 51.7639 178.661 51.7368C178.688 51.7098 178.703 51.6731 178.703 51.6348C178.705 51.6149 178.702 51.5948 178.696 51.5759C178.689 51.557 178.679 51.5396 178.665 51.5249C178.652 51.5102 178.635 51.4985 178.617 51.4905C178.599 51.4825 178.579 51.4784 178.559 51.4785Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M181.065 49.4707H180.74C180.762 49.5475 180.767 49.6282 180.754 49.707C180.742 49.7859 180.712 49.8611 180.668 49.9275L180.836 50.2762C180.996 50.0388 181.076 49.7566 181.065 49.4707V49.4707Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M182.537 56.0707C182.657 56.0707 182.705 56.0707 182.777 55.8664C182.849 55.662 182.777 55.5778 182.777 55.5538C182.777 55.5298 182.524 55.5538 182.512 55.7221C182.5 55.8904 182.416 56.0227 182.537 56.0707Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M178.78 54.2672C179.27 54.8104 179.788 55.328 180.331 55.818V55.253C179.85 54.7972 179.322 54.3942 178.756 54.0508L178.78 54.2672Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M179.31 48.3403C179.201 48.3403 179.117 48.4606 179.117 48.6048C179.117 48.7491 179.201 48.8693 179.31 48.8693C179.374 48.8579 179.433 48.8238 179.475 48.7731C179.517 48.7224 179.539 48.6585 179.538 48.5928C179.54 48.5612 179.535 48.5296 179.524 48.4998C179.514 48.47 179.497 48.4426 179.476 48.4192C179.455 48.3957 179.429 48.3767 179.401 48.3632C179.372 48.3496 179.341 48.3419 179.31 48.3403V48.3403Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M178.298 53.6304C178.226 53.6304 178.178 53.7386 178.178 53.8708C178.178 54.0031 178.178 54.1113 178.298 54.1113C178.418 54.1113 178.43 54.0031 178.43 53.8708C178.43 53.7386 178.37 53.6304 178.298 53.6304Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M177.241 57.3452C177.195 57.3512 177.153 57.3745 177.124 57.4103C177.095 57.4461 177.081 57.4916 177.084 57.5376C177.084 57.6578 177.157 57.7419 177.241 57.7419C177.325 57.7419 177.397 57.6578 177.397 57.5376C177.401 57.4916 177.386 57.4461 177.357 57.4103C177.328 57.3745 177.286 57.3512 177.241 57.3452V57.3452Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M177.926 58.2466C179.07 59.4545 180.019 60.8336 180.739 62.3341C180.739 61.8532 180.643 61.2401 180.595 60.8794C179.835 59.8745 178.999 58.93 178.094 58.0542L177.926 58.2466Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M177.519 55.2295C177.447 55.2295 177.387 55.3257 177.387 55.4339C177.387 55.5421 177.387 55.6382 177.519 55.6382C177.651 55.6382 177.663 55.5541 177.663 55.4339C177.663 55.3136 177.603 55.2295 177.519 55.2295Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M177.436 60.3634C178.683 61.817 179.816 63.3644 180.826 64.9919C180.826 64.499 180.826 63.5613 180.754 63.1405C180.381 62.9121 178.013 60.5557 177.604 60.147L177.436 60.3634Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M178.279 56.095C178.64 56.4436 179.974 58.2589 180.323 58.4994V57.7059C179.986 57.3453 178.688 56.1671 178.52 56.0469L178.279 56.095Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M176.07 63.8253C176.07 63.8827 176.093 63.9377 176.134 63.9783C176.174 64.0189 176.229 64.0417 176.287 64.0417C176.344 64.0417 176.399 64.0189 176.44 63.9783C176.48 63.9377 176.503 63.8827 176.503 63.8253C176.503 63.7679 176.48 63.7128 176.44 63.6723C176.399 63.6317 176.344 63.6089 176.287 63.6089C176.229 63.6089 176.174 63.6317 176.134 63.6723C176.093 63.7128 176.07 63.7679 176.07 63.8253Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M176.799 62.0699L176.486 61.6011L176.258 61.7694L176.606 62.2863L176.799 62.0699Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M180.508 73.0945C180.508 73.123 180.516 73.1509 180.532 73.1746C180.548 73.1983 180.571 73.2168 180.597 73.2277C180.623 73.2387 180.652 73.2415 180.68 73.236C180.708 73.2304 180.734 73.2166 180.754 73.1965C180.774 73.1763 180.788 73.1506 180.794 73.1226C180.799 73.0946 180.796 73.0656 180.785 73.0393C180.774 73.0129 180.756 72.9904 180.732 72.9745C180.709 72.9587 180.681 72.9502 180.652 72.9502C180.614 72.9502 180.577 72.9654 180.55 72.9925C180.523 73.0195 180.508 73.0562 180.508 73.0945Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M176.873 64.4868L176.717 64.607C178.407 66.3274 179.732 68.3722 180.612 70.6181C180.612 70.3897 180.78 68.947 180.792 68.5383C179.557 67.1207 178.249 65.7684 176.873 64.4868V64.4868Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M180.49 47.259C180.563 47.259 180.599 47.1147 180.575 46.9585C180.551 46.8022 180.466 46.694 180.394 46.706C180.322 46.718 180.286 46.8623 180.31 47.0065C180.334 47.1508 180.43 47.271 180.49 47.259Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M163.188 75.2468C163.231 75.2452 163.273 75.2353 163.312 75.2175C163.351 75.1998 163.386 75.1745 163.415 75.1433C163.444 75.112 163.466 75.0753 163.481 75.0353C163.496 74.9953 163.503 74.9528 163.501 74.9102C163.504 74.8666 163.499 74.8227 163.485 74.7813C163.471 74.7399 163.448 74.7018 163.419 74.6692C163.39 74.6367 163.354 74.6104 163.315 74.5918C163.275 74.5733 163.232 74.563 163.188 74.5615C163.109 74.5766 163.036 74.619 162.985 74.6816C162.933 74.7441 162.904 74.8229 162.904 74.9042C162.904 74.9854 162.933 75.0642 162.985 75.1267C163.036 75.1893 163.109 75.2318 163.188 75.2468Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M180.832 65.8452C179.894 64.9916 177.947 62.8757 177.129 62.1304L176.961 62.2506C178.537 63.9703 179.835 65.9253 180.808 68.0452C180.82 67.6125 180.844 66.2299 180.832 65.8452Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M177.073 59.7735L176.881 59.3647L176.652 59.6172L176.917 59.9659L177.073 59.7735Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M138.816 36.8119C138.871 36.812 138.924 36.7908 138.965 36.7528C139.005 36.7148 139.029 36.6628 139.032 36.6075C139.032 36.5501 139.009 36.4951 138.969 36.4545C138.928 36.4139 138.873 36.3911 138.816 36.3911C138.76 36.3942 138.708 36.4183 138.67 36.4586C138.632 36.4988 138.611 36.5521 138.611 36.6075C138.614 36.6608 138.637 36.7111 138.674 36.7488C138.712 36.7865 138.762 36.809 138.816 36.8119V36.8119Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M74.304 112.503C72.645 114.378 72.2362 116.025 71.8154 118.682C71.4569 121.063 70.6838 123.362 69.5312 125.475C71.5265 123.64 72.897 121.227 73.4504 118.574C74.0331 116.233 74.9782 113.998 76.2516 111.95C76.9644 110.714 77.5063 109.388 77.8626 108.007C78.3434 106.107 79.9544 103.895 80.5796 101.996C77.8145 107.069 71.5029 110.171 65.8164 108.115C66.7181 110.086 71.9958 112.311 77.1172 107.249C76.5065 109.157 75.5532 110.937 74.304 112.503V112.503Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M70.5174 113.933C71.6234 113.5 73.4147 111.529 74.5328 110.23C72.7535 111.757 66.9348 112.935 63.7129 110.471C65.5446 112.334 67.9333 113.549 70.5174 113.933Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M73.0234 131.546C80.9941 127.049 81.3427 119.728 81.3187 112.202C83.4586 123.467 78.9864 127.831 76.0169 131.438C74.7796 133.044 74.1266 135.024 74.1655 137.052C75.2156 134.922 76.6363 132.997 78.3613 131.365C80.1317 129.511 81.492 127.304 82.3536 124.889C83.2153 122.474 83.559 119.904 83.3625 117.348C82.8455 107.73 81.9318 102.356 84.9013 94.9985C82.1451 99.6844 80.3432 104.869 79.5995 110.255C79.0585 114.607 80.7537 125.739 73.0234 131.546Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M86.8187 106.769C88.61 114.487 88.4657 118.274 86.5181 123.443C90.6778 117.24 89.9685 112.696 89.0428 107.634C88.117 102.573 88.9225 94.2296 90.9543 91.8853C88.646 93.6765 85.0394 99.0504 86.8187 106.769Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M61.0879 124.26C62.2851 124.836 63.6455 124.976 64.935 124.657C65.4005 124.144 65.8379 123.606 66.2454 123.046L65.9929 122.878C65.3265 123.454 64.5418 123.876 63.6942 124.115C62.8466 124.354 61.9568 124.403 61.0879 124.26V124.26Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M63.3516 114.366C63.9647 115.568 65.6959 117.011 69.026 117.083C69.9825 116.306 70.8173 115.39 71.5026 114.366C70.3244 115.412 67.2347 116.771 63.3516 114.366Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M89.8947 108.126C89.5461 101.49 93.2128 91.2954 96.6632 88.8188C92.6478 90.8746 87.5143 95.1184 89.8947 108.126Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M70.7034 117.816C69.7176 120.353 66.5557 128.228 62.1797 128.805C66.2432 130.103 69.958 125.366 70.7034 117.816Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M60.2109 118.069C60.8683 119.024 61.7533 119.801 62.7861 120.327C63.8189 120.854 64.9668 121.115 66.1258 121.087C67.9171 121.087 68.5302 119.368 69.2756 118.19C67.899 119.003 66.3252 119.422 64.7264 119.401C63.1276 119.379 61.5655 118.919 60.2109 118.069V118.069Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M100.346 90.6469C101.247 90.2742 100.646 89.7933 100.346 89.4446C100.045 89.096 100.033 89.0599 99.3598 89.3244C93.2525 91.7289 91.4252 98.4612 91.0284 106.672C90.7399 112.599 90.3792 117.492 88.4316 121.916C91.5574 118.67 92.8197 115.677 92.3869 106.612C91.9301 96.0328 99.0111 91.1999 100.346 90.6469Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M84.1605 111.89C85.8797 118.707 85.0862 123.912 83.2949 126.317C85.7955 124.441 87.6469 121.279 86.9016 115.268C86.3125 110.279 85.8436 107.67 85.6032 106.312C85.0687 102.558 85.2977 98.7347 86.2764 95.0713C83.4889 100.215 82.7337 106.217 84.1605 111.89V111.89Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M79.4656 107.081C75.4622 118.971 70.8578 128.096 65.0391 130.164C74.8251 129.082 77.8186 115.521 79.4656 107.081Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M137.833 36.2104C137.941 36.2945 138.35 36.4748 138.025 35.9819C137.941 35.8617 137.773 35.8016 137.701 35.8978C137.629 35.994 137.725 36.1382 137.833 36.2104Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M138.255 37.9655C138.376 38.017 138.475 38.1111 138.532 38.23C138.55 38.2485 138.571 38.2632 138.595 38.2733C138.619 38.2834 138.644 38.2886 138.67 38.2886C138.696 38.2886 138.721 38.2834 138.745 38.2733C138.769 38.2632 138.79 38.2485 138.808 38.23C138.868 38.1696 138.91 38.0938 138.929 38.0109C138.948 37.9281 138.944 37.8416 138.916 37.7611C138.916 37.5567 138.808 37.2201 138.628 37.3043C138.447 37.3884 138.556 37.6409 138.628 37.8332C138.532 37.7491 138.231 37.5928 138.159 37.6769C138.087 37.7611 138.135 37.8933 138.255 37.9655Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M137.147 37.5686C137.243 37.6647 137.411 37.7729 137.46 37.6768C137.508 37.5806 137.363 37.4243 137.291 37.3522C137.219 37.28 137.087 37.2199 137.051 37.3522C137.015 37.4844 137.051 37.4844 137.147 37.5686Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M136.516 74.8258C136.383 74.7416 136.251 74.7055 136.191 74.8258C136.131 74.946 136.191 75.0301 136.347 75.1143C136.503 75.1984 136.624 75.2465 136.684 75.1143C136.744 74.982 136.66 74.9219 136.516 74.8258Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M164.222 77.3625C164.678 77.651 164.715 77.0739 164.45 76.9417C164.534 76.3526 163.945 76.3406 164.041 76.7373C163.825 76.9417 163.765 77.0739 164.222 77.3625Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M137.217 39.2881C137.185 39.3251 137.168 39.3719 137.168 39.4204C137.168 39.4688 137.185 39.5157 137.217 39.5526C137.217 39.6849 137.397 39.8411 137.481 39.781C137.565 39.7209 137.481 39.5165 137.481 39.4083C137.481 39.3001 137.289 39.216 137.217 39.2881Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M147.403 62.0463C147.353 62.0413 147.302 62.0464 147.253 62.0613C147.204 62.0761 147.159 62.1005 147.12 62.1329C147.081 62.1653 147.049 62.2052 147.025 62.2501C147.001 62.2951 146.987 62.3443 146.982 62.3949C146.987 62.4451 147.001 62.4938 147.025 62.5382C147.049 62.5826 147.082 62.6217 147.121 62.6532C147.16 62.6846 147.205 62.7078 147.254 62.7213C147.303 62.7347 147.353 62.7382 147.403 62.7315C147.503 62.7417 147.604 62.7121 147.682 62.6492C147.761 62.5863 147.812 62.495 147.824 62.3949C147.812 62.294 147.761 62.2015 147.683 62.1366C147.605 62.0717 147.505 62.0394 147.403 62.0463V62.0463Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M146.757 61.2048C147.123 60.9837 147.5 60.783 147.888 60.6037C148.08 60.5196 148.429 60.9523 148.2 61.1207C147.972 61.289 148.032 61.3731 148.08 61.5414C148.154 61.7093 148.242 61.8702 148.344 62.0223C148.387 62.1144 148.462 62.1869 148.556 62.2249C148.65 62.2629 148.755 62.2635 148.849 62.2267C149.078 62.1065 149.499 61.83 149.763 61.6857C149.869 61.6105 149.942 61.4972 149.967 61.3696C149.991 61.2419 149.966 61.1097 149.895 61.0004C149.787 60.8081 149.222 59.5337 149.054 59.2452C148.885 58.9567 148.573 58.9567 148.14 59.2452C147.707 59.5337 146.409 60.2671 146.241 60.3512C146.072 60.4354 145.952 60.5797 146.156 60.9403C146.361 61.301 146.529 61.313 146.757 61.2048Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M137.72 73.6716C137.576 73.5755 137.432 73.5394 137.36 73.6716C137.288 73.8039 137.36 73.9001 137.54 73.9962C137.72 74.0924 137.841 74.1405 137.901 73.9962C137.961 73.852 137.877 73.7678 137.72 73.6716Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M138.867 72.2162C138.711 72.108 138.567 72.072 138.494 72.2162C138.422 72.3605 138.494 72.4326 138.675 72.5288C138.855 72.625 138.975 72.6851 139.047 72.5288C139.12 72.3725 139.023 72.3124 138.867 72.2162Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.045 30.4397C141.141 30.4998 141.249 30.5118 141.309 30.4397C141.37 30.3676 141.309 30.2594 141.213 30.1872C141.176 30.1559 141.129 30.1387 141.081 30.1387C141.033 30.1387 140.986 30.1559 140.949 30.1872C140.901 30.2714 140.961 30.3796 141.045 30.4397Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M139.35 35.2491C139.35 35.2076 139.333 35.1679 139.304 35.1385C139.275 35.1092 139.235 35.0928 139.193 35.0928C139.152 35.0928 139.112 35.1092 139.083 35.1385C139.054 35.1679 139.037 35.2076 139.037 35.2491C139.037 35.2905 139.054 35.3303 139.083 35.3596C139.112 35.3889 139.152 35.4053 139.193 35.4053C139.214 35.4053 139.234 35.4013 139.253 35.3935C139.272 35.3856 139.289 35.3741 139.304 35.3596C139.318 35.3451 139.33 35.3278 139.338 35.3089C139.346 35.2899 139.35 35.2696 139.35 35.2491V35.2491Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M139.097 39.2038C138.892 39.3361 139.097 39.5645 139.097 39.7689C139.097 39.9732 139.193 40.1175 139.301 40.0334C139.409 39.9492 139.421 39.6607 139.301 39.4563C139.181 39.2519 139.217 39.1077 139.097 39.2038Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.75 31.5703C142.918 31.6424 142.75 32.3998 142.569 32.2796C141.908 31.943 141.776 32.1834 142.016 32.4118C142.319 32.6201 142.632 32.8127 142.954 32.9889C143.062 33.0731 143.231 32.9889 143.255 32.7124C143.279 32.4359 143.255 31.1736 143.255 30.8129L142.978 30.7047L142.846 31.0293C142.473 30.9115 142.111 30.7627 141.764 30.5845C141.608 30.5845 141.439 30.6686 141.656 30.897C141.997 31.1571 142.364 31.3827 142.75 31.5703V31.5703Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.953 35.5131C141.868 35.3809 141.664 35.3208 141.58 35.429C141.551 35.4947 141.545 35.5681 141.562 35.6377C141.58 35.7073 141.62 35.7692 141.676 35.8137C141.856 35.8858 142.193 35.9098 141.953 35.5131Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M140.657 33.2416C140.933 33.434 140.921 33.0733 140.789 32.9411C140.277 32.4077 139.795 31.8457 139.346 31.258C139.154 30.9214 138.565 31.3542 138.854 31.7509C139.398 32.3127 140.003 32.8126 140.657 33.2416Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M29.4668 77.2787L29.8034 76.8219C29.6168 76.4748 29.4121 76.1377 29.1903 75.812L28.7695 76.4011L29.4668 77.2787Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M27.7617 77.8437C28.0502 78.2404 28.3508 78.6371 28.6393 79.0459L28.8918 78.565C28.6153 78.1563 28.3508 77.7355 28.1224 77.3628L27.7617 77.8437Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.8526 81.4736L29.1651 81.0168C28.8411 80.6968 28.5436 80.351 28.2755 79.9829L27.8066 80.4277C28.137 80.7942 28.4861 81.1433 28.8526 81.4736V81.4736Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.2622 82.8803C31.8261 82.5912 31.3184 82.4289 30.7955 82.4115L30.4108 82.1229L30.2064 82.3273C30.1102 82.3994 29.9299 82.3273 30.0742 82.2311L30.2545 82.0147C29.9179 81.7502 29.6173 81.4978 29.3528 81.2573L28.9922 81.6541C29.4731 82.0989 29.966 82.4956 30.3387 82.8563L32.2622 82.8803Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M50.7053 148.269C50.5436 148.242 50.3781 148.248 50.2189 148.287C50.0597 148.327 49.9102 148.398 49.7796 148.497C49.5851 148.621 49.4462 148.816 49.3924 149.04C49.3386 149.264 49.374 149.501 49.4911 149.7C49.5905 149.838 49.7371 149.935 49.9032 149.973C50.0693 150.01 50.2434 149.986 50.3928 149.904C50.4319 149.886 50.4625 149.853 50.4781 149.813C50.4938 149.772 50.4934 149.728 50.4769 149.688C50.4695 149.665 50.4571 149.645 50.4409 149.628C50.4246 149.612 50.4048 149.599 50.3828 149.591C50.3609 149.583 50.3375 149.58 50.3142 149.582C50.291 149.584 50.2685 149.591 50.2485 149.603C50.1697 149.646 50.0785 149.659 49.9907 149.642C49.903 149.624 49.8241 149.577 49.7676 149.507C49.7052 149.38 49.6929 149.234 49.7329 149.098C49.773 148.963 49.8626 148.847 49.984 148.774C50.078 148.705 50.185 148.655 50.2986 148.628C50.4123 148.601 50.5302 148.598 50.6452 148.618C50.7869 148.649 50.9202 148.71 51.0362 148.798C51.1523 148.885 51.2485 148.995 51.3185 149.123C51.4251 149.304 51.4553 149.52 51.4026 149.724C51.3237 150.038 51.131 150.312 50.8616 150.493C50.4877 150.678 50.0764 150.773 49.6594 150.773C49.2425 150.773 48.8311 150.678 48.4572 150.493C47.9061 150.265 47.3016 150.198 46.714 150.301C46.6749 150.319 46.6443 150.352 46.6286 150.392C46.613 150.432 46.6134 150.477 46.6298 150.517C46.6505 150.557 46.6854 150.588 46.7277 150.604C46.77 150.619 46.8166 150.618 46.8583 150.601C47.3475 150.555 47.8408 150.621 48.3009 150.794C48.7256 151.009 49.1952 151.121 49.6714 151.121C50.1477 151.121 50.6172 151.009 51.042 150.794C51.3908 150.565 51.64 150.213 51.7392 149.808C51.7808 149.661 51.7915 149.507 51.7708 149.356C51.7501 149.205 51.6985 149.06 51.619 148.93C51.52 148.763 51.3879 148.619 51.2307 148.505C51.0736 148.391 50.8948 148.311 50.7053 148.269V148.269Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M46.3488 151.226C46.0427 151.04 45.681 150.968 45.327 151.022C45.1346 150.529 44.8942 150.348 44.4493 150.421C44.0045 150.493 43.9084 150.805 43.8843 151.298C43.1269 151.575 42.9826 151.959 43.0187 152.26C43.025 152.373 43.0563 152.484 43.1104 152.583C43.1644 152.683 43.2399 152.77 43.3313 152.837C43.5683 152.997 43.8517 153.073 44.1368 153.053C44.2063 153.233 44.3225 153.391 44.4734 153.51C44.5758 153.571 44.6899 153.608 44.8082 153.621C44.9264 153.633 45.0459 153.62 45.1587 153.582C45.2591 153.566 45.3549 153.529 45.4398 153.473C45.5248 153.417 45.5969 153.344 45.6516 153.258C45.7267 153.118 45.7601 152.959 45.7477 152.801C46.421 152.597 46.6374 152.284 46.6013 151.731C46.5999 151.633 46.5765 151.537 46.5328 151.45C46.4891 151.362 46.4262 151.286 46.3488 151.226V151.226ZM43.5357 152.56C43.4816 152.519 43.4373 152.467 43.4061 152.407C43.375 152.346 43.3576 152.28 43.3553 152.212C43.3553 152.007 43.5236 151.815 43.8843 151.659C43.8843 151.803 43.8843 151.959 43.8843 152.116C43.8843 152.272 43.9444 152.536 43.9805 152.717C43.8219 152.701 43.6693 152.647 43.5357 152.56V152.56ZM44.5215 150.757C44.6778 150.757 44.81 150.757 44.9783 151.058H44.5455L44.2329 151.13C44.269 150.853 44.3892 150.781 44.4854 150.757H44.5215ZM44.3772 152.681C44.3282 152.475 44.292 152.266 44.269 152.056C44.269 151.851 44.269 151.671 44.269 151.527L44.6657 151.43L45.1466 151.358C45.1466 151.491 45.2308 151.635 45.2909 151.827C45.3538 152.056 45.402 152.289 45.4352 152.524L44.8942 152.633C44.7233 152.662 44.5505 152.678 44.3772 152.681V152.681ZM45.363 153.065C45.3285 153.111 45.2852 153.15 45.2357 153.179C45.1861 153.207 45.1313 153.226 45.0745 153.234C45.0113 153.266 44.9412 153.283 44.8701 153.283C44.799 153.283 44.7289 153.266 44.6657 153.234C44.599 153.188 44.5451 153.126 44.5095 153.053H44.9062L45.4111 152.957C45.4 153.003 45.3839 153.047 45.363 153.089V153.065ZM45.7237 152.428C45.7237 152.236 45.6395 152.007 45.5674 151.743C45.4953 151.479 45.4832 151.454 45.4472 151.322C45.6849 151.301 45.9234 151.351 46.1324 151.466C46.1732 151.498 46.2062 151.538 46.2292 151.583C46.2521 151.629 46.2642 151.68 46.2647 151.731C46.2767 152.056 46.2406 152.272 45.6876 152.452L45.7237 152.428Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M27.2028 68.442L26.2891 67.7808L26.1328 68.0092C26.4454 68.2376 26.758 68.454 27.0585 68.6464L27.2028 68.442Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.7787 117.998C33.7787 117.877 33.5142 117.998 33.5503 118.202C33.5863 118.406 33.6945 118.466 33.7787 118.394C33.8628 118.322 33.8628 118.25 33.7787 117.998Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.1223 73.3951L28.3747 73.1426C28.1944 72.9503 27.99 72.7699 27.7736 72.5776L27.3168 72.1929L26.9922 72.3612C27.3529 72.6858 27.7496 73.0344 28.1223 73.3951Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.0056 70.7142C27.5968 70.4137 27.1881 70.1131 26.8034 69.8486L26.623 70.1011L27.8253 70.9426L28.0056 70.7142Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M53.5139 136.487C53.1427 134.152 52.0605 131.989 50.4146 130.291C48.7688 128.594 46.6395 127.445 44.317 127.002L44.2448 127.483C46.8955 128.071 49.2419 129.603 50.8471 131.793C52.4523 133.982 53.2068 136.681 52.97 139.386C52.7332 142.091 51.5213 144.617 49.56 146.495C47.5987 148.372 45.0218 149.473 42.3093 149.592C39.8088 149.552 37.3992 148.648 35.4902 147.033C33.5812 145.417 32.2906 143.191 31.838 140.731L31.3691 140.815C31.8319 143.638 33.3533 146.178 35.6236 147.918C37.8938 149.658 40.742 150.468 43.588 150.181C46.434 149.894 49.0637 148.534 50.9414 146.376C52.8191 144.218 53.8035 141.426 53.6942 138.567C53.6925 138.045 53.6604 137.523 53.598 137.004C53.5464 136.907 53.5138 136.801 53.5019 136.692C53.4991 136.623 53.5031 136.555 53.5139 136.487V136.487Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M54.1589 146.153C54.4715 145.491 54.3994 145.095 53.9545 144.746C53.876 144.679 53.7834 144.63 53.6836 144.603C53.5838 144.576 53.4792 144.571 53.3775 144.59C53.0506 144.69 52.7643 144.893 52.56 145.167C52.4035 145.106 52.2306 145.103 52.0721 145.159C51.9137 145.214 51.7798 145.323 51.6944 145.467C51.6015 145.6 51.5628 145.764 51.5862 145.924C51.6274 146.094 51.71 146.251 51.8266 146.381C51.4059 147.247 51.3578 147.896 51.7184 148.148C51.7989 148.202 51.8892 148.239 51.9841 148.258C52.079 148.276 52.1767 148.276 52.2714 148.256C52.6957 148.123 53.0636 147.852 53.3174 147.487C53.7622 147.703 54.219 147.788 54.5196 147.391C54.5823 147.308 54.6274 147.212 54.6522 147.111C54.677 147.01 54.681 146.905 54.6638 146.802C54.5688 146.537 54.3919 146.31 54.1589 146.153ZM53.4376 144.95C53.4908 144.943 53.5448 144.947 53.5965 144.962C53.6481 144.976 53.6963 145.001 53.7381 145.035C53.9786 145.227 54.1229 145.407 53.8824 145.96L53.4977 145.696L52.8846 145.335C53.0252 145.148 53.2174 145.006 53.4376 144.926V144.95ZM51.9468 145.708C52.0671 145.551 52.1512 145.455 52.3316 145.491L52.0911 145.864L51.9709 146.08C51.9386 146.024 51.9143 145.963 51.8988 145.9C51.8877 145.863 51.8864 145.824 51.8948 145.786C51.9032 145.748 51.9211 145.713 51.9468 145.684V145.708ZM52.1753 147.956C52.0825 147.992 51.9795 147.992 51.8867 147.956C51.7545 147.86 51.7304 147.451 52.055 146.754C52.2471 146.925 52.4521 147.082 52.6682 147.223L52.9928 147.439C52.596 147.788 52.3316 147.872 52.1753 147.932V147.956ZM53.1971 147.078L52.8605 146.862C52.6332 146.708 52.4163 146.539 52.2113 146.357C52.2113 146.249 52.3195 146.153 52.3917 146.044C52.4712 145.892 52.5637 145.748 52.6682 145.612L53.3174 145.984C53.4595 146.072 53.596 146.168 53.7261 146.273C53.5723 146.555 53.3954 146.825 53.1971 147.078V147.078ZM54.183 147.235C54.183 147.307 54.0146 147.475 53.5097 147.235L53.7622 146.862C53.8463 146.73 53.9305 146.597 53.9906 146.477C54.1286 146.584 54.2296 146.731 54.2791 146.898C54.2862 146.954 54.2813 147.011 54.2648 147.065C54.2482 147.119 54.2203 147.168 54.183 147.211V147.235Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M56.1736 139.036C56.0051 138.968 55.8235 138.939 55.6423 138.952C55.4612 138.964 55.2852 139.017 55.1276 139.108C54.9862 139.19 54.8651 139.302 54.7735 139.438C54.6819 139.573 54.6221 139.727 54.5987 139.889C54.5633 139.989 54.5488 140.095 54.5559 140.201C54.563 140.307 54.5916 140.411 54.64 140.505C54.6884 140.6 54.7555 140.683 54.8373 140.751C54.919 140.819 55.0137 140.869 55.1156 140.899C55.256 140.936 55.4052 140.922 55.5356 140.858C55.666 140.794 55.7688 140.684 55.8249 140.55C55.8349 140.53 55.8407 140.508 55.8419 140.485C55.843 140.462 55.8396 140.439 55.8317 140.418C55.8238 140.397 55.8117 140.377 55.7961 140.361C55.7805 140.344 55.7616 140.331 55.7408 140.322C55.6975 140.308 55.6508 140.311 55.609 140.328C55.5672 140.346 55.533 140.378 55.5123 140.418C55.4858 140.478 55.4379 140.526 55.3779 140.553C55.3179 140.579 55.2501 140.583 55.1878 140.562C54.9593 140.562 54.8632 140.286 54.9233 139.949C54.9499 139.847 54.9965 139.75 55.0605 139.666C55.1244 139.581 55.2044 139.51 55.2959 139.456C55.4169 139.402 55.548 139.374 55.6807 139.374C55.8133 139.374 55.9444 139.402 56.0654 139.456C56.6184 139.637 56.6184 140.322 56.5342 140.659C56.402 141.26 56.0533 141.789 54.8271 142.366C53.9876 142.631 53.2575 143.163 52.7473 143.88C52.7298 143.898 52.7166 143.92 52.7085 143.943C52.7003 143.967 52.6975 143.992 52.7002 144.017C52.7029 144.041 52.7111 144.065 52.7241 144.086C52.7372 144.108 52.7547 144.126 52.7756 144.139C52.7964 144.153 52.82 144.162 52.8447 144.165C52.8694 144.168 52.8945 144.166 52.9182 144.159C52.942 144.151 52.9637 144.139 52.982 144.122C53.0002 144.105 53.0145 144.084 53.0238 144.061C53.5121 143.405 54.1929 142.917 54.9714 142.666C56.1736 142.125 56.6785 141.572 56.8708 140.743C56.9396 140.585 56.9761 140.415 56.9781 140.243C56.9801 140.072 56.9477 139.901 56.8827 139.742C56.8177 139.583 56.7214 139.438 56.5996 139.317C56.4778 139.196 56.333 139.1 56.1736 139.036V139.036Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.0601 83.9267C36.4167 83.6771 36.6825 83.3185 36.8175 82.9048C36.6732 82.9889 36.3366 83.1572 36.2164 83.2053C36.1752 83.4385 36.1024 83.665 36 83.8786L36.0601 83.9267Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.6035 83.3732H37.6877C38.2655 82.8151 38.7741 82.1894 39.2025 81.5098C38.9259 81.654 38.1084 82.1469 38.0002 82.2191C37.9345 82.6235 37.8004 83.0138 37.6035 83.3732V83.3732Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M41.3014 80.5479C41.121 80.6681 40.4478 80.9686 40.2554 81.0648C40.1384 81.6958 39.8794 82.2919 39.498 82.808L39.5942 82.8681C40.2295 82.1457 40.8007 81.3693 41.3014 80.5479V80.5479Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.2307 145.756C32.0023 145.335 31.4012 144.878 30.9203 145.131C30.7695 145.211 30.6524 145.342 30.5906 145.501C30.5288 145.66 30.5263 145.836 30.5837 145.997C30.5892 146.019 30.5992 146.04 30.6133 146.059C30.6274 146.077 30.6452 146.093 30.6655 146.104C30.6859 146.115 30.7083 146.122 30.7315 146.125C30.7546 146.127 30.778 146.124 30.8001 146.117C30.8417 146.101 30.8759 146.069 30.8959 146.029C30.9158 145.989 30.9203 145.943 30.9083 145.9C30.8786 145.815 30.879 145.722 30.9097 145.636C30.9403 145.551 30.9992 145.479 31.0766 145.431C31.3291 145.299 31.7498 145.588 31.9302 145.912C32.0155 146.085 32.0658 146.272 32.0782 146.464C32.0906 146.656 32.0648 146.849 32.0023 147.03C31.9763 147.11 31.9308 147.181 31.8698 147.238C31.8088 147.294 31.7345 147.335 31.6536 147.355C30.9924 147.547 30.5236 146.766 30.4514 146.526C30.1197 145.535 30.1197 144.463 30.4514 143.472C30.8162 142.761 30.9346 141.949 30.7881 141.164C30.7718 141.122 30.7407 141.088 30.7007 141.068C30.6607 141.048 30.6147 141.043 30.5717 141.055C30.5316 141.074 30.499 141.105 30.4793 141.144C30.4596 141.184 30.454 141.229 30.4635 141.272C30.6197 141.681 30.5236 142.246 30.1389 143.364C29.7478 144.426 29.7182 145.589 30.0547 146.67C30.211 146.97 30.8001 147.872 31.7017 147.68C31.8327 147.643 31.9532 147.576 32.0535 147.484C32.1537 147.392 32.2309 147.278 32.2788 147.151C32.3645 146.927 32.4044 146.688 32.3961 146.449C32.3879 146.209 32.3316 145.973 32.2307 145.756V145.756Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M41.5098 81.9542C42.1888 81.2581 42.7821 80.4831 43.277 79.646C42.8624 79.7985 42.4604 79.9834 42.0748 80.199C42.3513 80.5477 41.8704 81.4012 41.5098 81.9182V81.9542Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M38.3269 78.9492C38.1744 79.1137 38.0096 79.2665 37.834 79.4061C38.0504 79.5624 38.5553 79.9951 38.6034 80.2236C38.9444 79.985 39.2975 79.7643 39.6613 79.5623L39.3969 79.346C39.2461 79.4423 39.0709 79.4935 38.8919 79.4935C38.713 79.4935 38.5378 79.4423 38.387 79.346L38.5553 79.2137L38.3269 78.9492Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M20.9684 85.0919C18.6494 86.1863 16.4045 87.4313 14.248 88.8187V88.939C15.8109 88.2297 20.5236 86.222 20.9804 86.0296C21.9295 85.633 22.9627 85.4801 23.986 85.5848C22.2697 85.8317 20.6284 86.4513 19.1771 87.4001C21.305 87.5564 24.7434 85.5968 26.8112 85.9214C24.7984 86.0741 22.9021 86.9245 21.4493 88.3258C20.6838 89.1078 19.7324 89.6828 18.6842 89.9969C19.67 90.069 21.2089 89.2395 22.7597 88.3018C24.3106 87.3641 26.0898 86.799 29.8047 86.811C38.0639 86.811 42.1514 83.2044 44.5919 81.7257L44.5077 81.6055C41.6384 83.2585 38.5076 84.4092 35.2507 85.0077C32.0288 85.4646 26.1259 84.8034 23.445 84.587C22.5875 84.5036 21.7248 84.6795 20.9684 85.0919V85.0919Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.3613 80.801L37.0848 80.5486L36.8203 80.7529L37.2651 81.2218L37.6378 80.9092L38.0345 80.5726L37.8061 80.4043L37.3613 80.801Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.3536 139.782C30.5559 139.76 30.7415 139.66 30.8699 139.502C30.9983 139.345 31.0591 139.142 31.0389 138.94C31.0461 138.768 30.9857 138.6 30.8706 138.471C30.6791 138.327 30.4488 138.243 30.2094 138.231C29.9689 137.377 29.5241 137.185 29.1514 137.197C29.0445 137.191 28.9376 137.209 28.838 137.248C28.7384 137.288 28.6485 137.348 28.5744 137.425C28.3937 137.707 28.3133 138.042 28.3459 138.375C27.853 138.531 27.5645 138.808 27.5765 139.144C27.5735 139.258 27.5957 139.371 27.6414 139.475C27.6871 139.579 27.7553 139.671 27.841 139.746C28.0359 139.901 28.2773 139.985 28.5263 139.986C28.6705 140.611 28.935 140.912 29.5001 140.924C29.6063 140.925 29.7114 140.901 29.8072 140.855C29.903 140.81 29.9872 140.742 30.0531 140.659C30.2441 140.406 30.3493 140.099 30.3536 139.782V139.782ZM30.6301 138.712C30.6806 138.772 30.7064 138.849 30.7023 138.928C30.7023 139.168 30.7023 139.313 30.3536 139.421C30.3536 139.265 30.3536 139.108 30.3536 138.928C30.3536 138.748 30.3536 138.7 30.3536 138.591C30.4531 138.612 30.5473 138.653 30.6301 138.712V138.712ZM28.0574 139.493C28.0096 139.446 27.9721 139.39 27.9472 139.328C27.9224 139.266 27.9108 139.199 27.9132 139.132C27.9132 139 28.0574 138.844 28.358 138.736C28.358 138.856 28.358 138.988 28.358 139.12C28.358 139.253 28.358 139.481 28.4301 139.637C28.2915 139.613 28.1625 139.551 28.0574 139.457V139.493ZM28.8509 137.654C28.911 137.57 29.0072 137.545 29.1755 137.533C29.3438 137.521 29.7405 137.834 29.8607 138.219H29.1154C28.9754 138.206 28.8345 138.206 28.6946 138.219C28.6897 138.019 28.7441 137.822 28.8509 137.654V137.654ZM29.8006 140.467C29.7668 140.509 29.7221 140.542 29.6713 140.561C29.6205 140.58 29.5655 140.585 29.5121 140.575C29.2356 140.575 29.0312 140.575 28.8869 139.986H29.3318L30.017 139.89C29.9989 140.1 29.9195 140.301 29.7886 140.467H29.8006ZM29.2837 139.613H28.8148C28.8148 139.457 28.7547 139.265 28.7307 139.048V138.603H29.1635C29.4357 138.586 29.7087 138.586 29.981 138.603C29.981 138.736 29.981 138.868 30.0411 139C30.1012 139.132 30.0411 139.385 30.0411 139.541L29.2837 139.613Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M41.4251 151.274C41.0611 151.173 40.6722 151.221 40.3431 151.406C40.2645 151.449 40.1953 151.508 40.1396 151.578C40.0839 151.648 40.0427 151.728 40.0185 151.815C39.9224 152.224 40.2109 152.608 40.7519 152.753C40.7947 152.761 40.839 152.753 40.8766 152.731C40.9142 152.709 40.9425 152.674 40.9563 152.632C40.9635 152.611 40.9661 152.588 40.9639 152.566C40.9616 152.544 40.9545 152.522 40.9431 152.503C40.9317 152.483 40.9162 152.466 40.8977 152.454C40.8792 152.441 40.8582 152.432 40.836 152.428C40.5595 152.344 40.283 152.163 40.3431 151.899C40.3781 151.812 40.4417 151.74 40.5235 151.695C40.7726 151.556 41.0664 151.522 41.341 151.598C41.4756 151.636 41.6008 151.701 41.7084 151.79C41.8161 151.88 41.9039 151.99 41.9661 152.115C42.0101 152.209 42.0329 152.312 42.0329 152.416C42.0329 152.52 42.0101 152.622 41.9661 152.716C41.8426 152.943 41.6498 153.123 41.4161 153.231C41.1823 153.339 40.92 153.37 40.6677 153.318C40.2223 153.213 39.8067 153.008 39.4525 152.718C39.0984 152.429 38.815 152.062 38.624 151.647C38.2098 150.946 37.6577 150.336 37.001 149.855C36.9853 149.839 36.9666 149.827 36.946 149.818C36.9253 149.809 36.9032 149.805 36.8808 149.805C36.8584 149.805 36.8362 149.809 36.8156 149.818C36.7949 149.827 36.7762 149.839 36.7605 149.855C36.7449 149.87 36.7324 149.888 36.7239 149.907C36.7153 149.927 36.7109 149.948 36.7109 149.969C36.7109 149.991 36.7153 150.012 36.7239 150.032C36.7324 150.051 36.7449 150.069 36.7605 150.084C37.3826 150.531 37.903 151.104 38.2873 151.767C38.5022 152.235 38.8241 152.647 39.2271 152.969C39.6301 153.29 40.103 153.513 40.6076 153.618C40.9323 153.685 41.2701 153.641 41.5666 153.492C41.8631 153.344 42.1012 153.1 42.2426 152.801C42.3078 152.664 42.3416 152.514 42.3416 152.362C42.3416 152.21 42.3078 152.06 42.2426 151.923C42.1639 151.76 42.0496 151.617 41.908 151.505C41.7665 151.393 41.6014 151.314 41.4251 151.274V151.274Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M26.8567 66.1218L26.2196 65.6289L25.9551 65.8333L26.6403 66.3502L26.8567 66.1218Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M34.7246 82.6401L34.929 82.7483C35.2627 82.645 35.5818 82.4996 35.8787 82.3155C35.7104 82.1472 35.2656 82.3155 34.9651 82.3155C34.8852 82.3251 34.8045 82.3251 34.7246 82.3155V82.6401Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.5843 81.4497L36.2477 81.642L35.5624 81.2573L35.334 81.4737L36.1635 82.1229C36.3679 81.9907 36.5723 81.8344 36.8127 81.642L36.5843 81.4497Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M35.1902 148.256C35.1739 148.136 35.1323 148.02 35.068 147.916C35.0038 147.812 34.9184 147.724 34.8175 147.655C34.759 147.604 34.6898 147.567 34.6148 147.546C34.5399 147.525 34.4612 147.521 34.3847 147.535C34.1501 147.587 33.9365 147.709 33.7716 147.884C33.2065 147.571 32.7858 147.571 32.5694 147.884C32.5014 147.955 32.4491 148.041 32.416 148.134C32.3829 148.227 32.3696 148.326 32.377 148.425C32.4407 148.746 32.6204 149.033 32.8819 149.23C32.5814 149.735 32.4972 150.096 32.7737 150.348C32.8429 150.412 32.9245 150.461 33.0134 150.492C33.1024 150.523 33.1967 150.536 33.2907 150.529C33.572 150.478 33.8316 150.344 34.036 150.144C34.553 150.493 34.9137 150.589 35.3104 150.144C35.3854 150.076 35.4439 149.992 35.4814 149.898C35.5189 149.805 35.5344 149.704 35.5268 149.603C35.4853 149.301 35.3306 149.026 35.094 148.833C35.1778 148.653 35.2111 148.454 35.1902 148.256V148.256ZM34.4328 147.872C34.4592 147.86 34.4879 147.854 34.5169 147.854C34.546 147.854 34.5746 147.86 34.6011 147.872C34.718 147.94 34.8036 148.051 34.8395 148.181C34.8755 148.311 34.8589 148.451 34.7934 148.569L34.4087 148.256L34.0841 148.028C34.1832 147.944 34.3041 147.89 34.4328 147.872ZM32.6655 148.365C32.6655 148.365 32.6655 148.22 32.7737 148.088C32.8819 147.956 33.1825 147.968 33.5431 148.088C33.4604 148.183 33.3841 148.283 33.3147 148.389C33.2065 148.545 33.0983 148.701 33.0142 148.845C32.8495 148.727 32.7273 148.558 32.6655 148.365V148.365ZM33.2065 150.168C33.1601 150.17 33.1137 150.163 33.0702 150.146C33.0268 150.13 32.9872 150.104 32.9541 150.072C32.8459 149.976 32.9541 149.747 33.0863 149.435L33.3508 149.651L33.7115 149.915C33.5714 150.047 33.3958 150.135 33.2065 150.168V150.168ZM33.9639 149.687L33.5552 149.374C33.4541 149.3 33.3578 149.22 33.2666 149.134L33.6033 148.629L33.8317 148.317C33.9574 148.392 34.0779 148.477 34.1923 148.569C34.343 148.677 34.4875 148.793 34.6251 148.918L34.4087 149.206C34.2693 149.374 34.1208 149.535 33.9639 149.687V149.687ZM35.1661 149.687C35.171 149.74 35.1626 149.792 35.1416 149.841C35.1205 149.889 35.0876 149.931 35.0459 149.964C34.8536 150.156 34.7213 150.204 34.2765 149.964C34.4087 149.831 34.541 149.675 34.6852 149.507C34.758 149.422 34.8262 149.334 34.8896 149.242C35.0092 149.353 35.0964 149.494 35.1421 149.651L35.1661 149.687Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M35.6478 73.6234C35.5275 73.5512 35.4794 73.6234 35.3833 73.6234C35.1997 73.7106 35.0433 73.8463 34.931 74.0157C34.8188 74.1852 34.7548 74.382 34.7461 74.5851C34.7461 74.8857 34.8062 75.054 34.9745 75.054C35.1428 75.054 35.2991 74.7534 35.3232 74.6212C35.3472 74.489 35.4193 74.3327 35.7199 74.2966C36.0204 74.2605 35.9964 74.513 35.9363 74.6452C35.8762 74.7775 36.5614 74.9698 36.3571 74.3447C36.1709 74.0595 35.9298 73.8142 35.6478 73.6234V73.6234Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.0527 62.7679L31.0506 63.5252C31.0506 63.5252 30.9905 63.6094 31.1588 63.7296L31.9522 64.2346L32.2768 63.7416C32.0965 63.6334 31.9522 63.5012 31.9282 63.393C31.6517 63.1646 31.279 63.393 30.3172 62.5635L30.0527 62.7679Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M22.75 133.133C22.75 133.614 22.9904 133.686 23.1347 133.698C23.279 133.71 23.5555 133.289 23.5555 132.928C23.5555 131.726 25.3588 129.742 26.2725 129.153L26.1883 128.997C25.3107 129.466 22.8462 131.293 22.75 133.133Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M52.905 106.829C53.8183 107.096 54.6603 107.565 55.3696 108.199C55.5259 108.379 55.7663 108.091 55.6341 107.911C55.3959 107.566 55.183 107.204 54.9969 106.829C54.9969 106.672 54.6843 106.288 53.7947 106.071C53.1816 105.915 51.3061 105.867 50.8853 105.446C50.7892 105.338 50.4766 105.53 50.6329 105.759C51.3318 106.228 52.0979 106.589 52.905 106.829V106.829Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M53.2832 105.193C53.6799 105.193 54.6296 105.049 55.1225 105.842C55.3029 106.131 55.6395 105.674 55.5674 105.457C55.3783 105.072 55.1071 104.732 54.7727 104.462C54.4383 104.192 54.0489 103.998 53.6318 103.895C52.8744 103.678 52.2613 103.798 52.2132 104.412C52.1651 105.025 52.8985 105.193 53.2832 105.193Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M26.6676 126.557C26.355 126.725 26.0545 126.906 25.7539 127.086L25.8862 127.422C26.2107 127.266 26.5474 127.098 26.896 126.954C29.2269 125.803 31.1028 123.902 32.2218 121.556H31.9092C30.639 123.66 28.8293 125.387 26.6676 126.557V126.557Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M21.1543 132.244C21.2505 132.989 21.8035 132.845 21.6953 132.244C21.6637 131.78 21.7382 131.314 21.9132 130.883C22.0882 130.452 22.359 130.066 22.7051 129.755L22.5008 129.563C22.0903 129.881 21.7563 130.287 21.5233 130.751C21.2902 131.215 21.1642 131.725 21.1543 132.244V132.244Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.304 128.36L24.1357 128.156L23.5586 128.577L23.6908 128.805C23.8832 128.637 24.0515 128.504 24.304 128.36Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M23.4276 129.022L23.2593 128.83C23.0429 129.01 22.8385 129.178 22.6582 129.359L22.8265 129.575C23.0157 129.379 23.2164 129.194 23.4276 129.022Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.8357 115.412C38.6523 114.664 39.3175 113.766 39.7953 112.767C40.0357 112.322 39.627 112.19 39.4947 112.454C39.0481 113.464 38.4114 114.378 37.6193 115.147C37.5111 115.135 37.6554 115.412 37.8357 115.412Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.8458 63.5849C25.5272 64.2638 26.2586 64.8908 27.0338 65.4603C27.3765 65.4695 27.7192 65.4413 28.0557 65.3762L27.9355 65.1117C27.3104 65.292 25.4469 63.7652 25.0742 63.3925C24.9059 63.2122 24.7016 63.4166 24.8458 63.5849Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.6459 117.564C37.4656 117.708 37.4055 117.732 37.4175 117.78C37.4295 117.828 37.5978 117.78 37.7301 117.78C37.8623 117.78 37.9224 117.636 37.9104 117.564C37.8984 117.492 37.7301 117.492 37.6459 117.564Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.4268 115.809C37.535 115.809 37.6311 115.556 37.535 115.496C37.4871 115.464 37.4306 115.446 37.3727 115.446C37.3148 115.446 37.2582 115.464 37.2104 115.496C37.0661 115.58 37.006 115.713 37.0661 115.785C37.1262 115.857 37.2705 115.869 37.4268 115.809Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M46.392 106.708C46.5362 106.708 46.6084 106.36 46.2717 106.456L45.875 106.6L45.9471 106.864L46.392 106.708Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M39.5741 114.21C39.3177 115.164 38.863 116.052 38.2396 116.819C38.1074 116.963 38.2396 117.299 38.6003 116.939C39.234 116.208 39.7236 115.363 40.0429 114.45C40.2113 113.849 39.6823 113.524 39.5741 114.21Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M50.9739 111.265C51.026 111.262 51.0749 111.239 51.1107 111.201C51.1465 111.163 51.1664 111.113 51.1663 111.061C51.1663 111.009 51.146 110.961 51.1099 110.924C51.0739 110.888 51.0249 110.868 50.9739 110.868C50.9217 110.868 50.8715 110.888 50.8335 110.924C50.7955 110.959 50.7726 111.008 50.7695 111.061C50.7724 111.114 50.7949 111.164 50.8326 111.202C50.8703 111.24 50.9206 111.262 50.9739 111.265V111.265Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M45.5767 106.997L45.4444 106.756C45.228 106.853 45.0116 106.949 44.7832 107.069L44.9034 107.321L45.5767 106.997Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M25.6387 127.554L25.4584 127.266L24.9414 127.59L25.0857 127.855L25.6387 127.554Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M42.294 122.192C38.1423 122.418 34.2351 124.227 31.3762 127.246C28.5172 130.265 26.9238 134.264 26.9238 138.422C26.9238 142.58 28.5172 146.58 31.3762 149.599C34.2351 152.618 38.1423 154.426 42.294 154.652C46.4456 154.426 50.3528 152.618 53.2118 149.599C56.0707 146.58 57.6641 142.58 57.6641 138.422C57.6641 134.264 56.0707 130.265 53.2118 127.246C50.3528 124.227 46.4456 122.418 42.294 122.192V122.192ZM42.294 154.171C38.4419 154.09 34.7554 152.589 31.9423 149.957C29.1293 147.324 27.3879 143.745 27.0525 139.906C26.7171 136.068 27.8114 132.241 30.1252 129.16C32.439 126.079 35.8093 123.962 39.589 123.214C39.7355 123.159 39.8896 123.127 40.0458 123.118H40.1661C40.8709 123.017 41.5819 122.965 42.294 122.962C46.439 122.962 50.4142 124.608 53.3452 127.539C56.2761 130.47 57.9227 134.446 57.9227 138.591C57.9227 142.736 56.2761 146.711 53.3452 149.642C50.4142 152.573 46.439 154.219 42.294 154.219V154.171Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.8736 61.5405C30.7654 61.6126 30.7774 61.6967 30.8736 61.7569C30.9698 61.817 31.1501 61.9612 31.2102 61.9131C31.2703 61.8651 31.2102 61.6366 31.126 61.5765C31.1118 61.5576 31.094 61.5416 31.0737 61.5296C31.0533 61.5175 31.0307 61.5096 31.0073 61.5062C30.9838 61.5029 30.96 61.5042 30.937 61.51C30.9141 61.5159 30.8925 61.5263 30.8736 61.5405V61.5405Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M44.6416 79.1416C44.4132 79.2137 43.9684 79.358 43.776 79.4422C43.6639 80.0944 43.4183 80.7165 43.0547 81.2695V81.2695C43.7409 80.6923 44.284 79.9639 44.6416 79.1416V79.1416Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.3516 81.7501C33.6641 82.0026 33.9887 82.243 34.3013 82.4474L34.4336 82.1348C34.1261 81.9631 33.8362 81.7618 33.568 81.5337L33.3516 81.7501Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M26.4403 61.313C26.3442 61.313 26.284 61.5053 26.3682 61.5775C26.4524 61.6496 26.6688 61.5775 26.6327 61.3851C26.5966 61.1928 26.5485 61.313 26.4403 61.313Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M54.7765 134.78C54.2836 134.9 54.1633 135.309 54.1754 135.85C53.7786 135.982 53.5622 136.175 53.5141 136.487C53.466 136.8 53.5742 136.836 53.5983 137.004C53.6366 137.089 53.6943 137.163 53.7666 137.221C53.9514 137.357 54.1741 137.433 54.4038 137.437C54.6562 138.339 55.1011 138.447 55.3655 138.411C55.4598 138.403 55.5513 138.375 55.6342 138.33C55.717 138.284 55.7893 138.222 55.8464 138.146C56.0106 137.88 56.0903 137.57 56.0748 137.257C56.6279 137.064 56.8803 136.752 56.8202 136.295C56.8119 136.191 56.7832 136.09 56.7358 135.997C56.6883 135.904 56.6231 135.822 56.5437 135.754C56.3304 135.626 56.0826 135.567 55.8344 135.586C55.7883 135.299 55.6333 135.04 55.4016 134.864C55.3102 134.805 55.2067 134.766 55.0985 134.752C54.9904 134.737 54.8804 134.747 54.7765 134.78V134.78ZM53.983 136.956C53.9397 136.922 53.9051 136.878 53.8821 136.828C53.8591 136.778 53.8484 136.723 53.8508 136.668C53.8508 136.475 53.8508 136.331 54.1994 136.199L54.2715 136.752C54.2649 136.864 54.2649 136.976 54.2715 137.088C54.1662 137.068 54.0673 137.023 53.983 136.956V136.956ZM56.3874 136.031C56.4316 136.07 56.4672 136.118 56.492 136.172C56.5168 136.226 56.5303 136.284 56.5317 136.343C56.5317 136.451 56.5317 136.704 56.1109 136.896C56.1109 136.728 56.1109 136.56 56.0508 136.367C56.0319 136.217 56.0038 136.069 55.9666 135.922C56.0975 135.929 56.2251 135.966 56.3393 136.031H56.3874ZM55.618 137.942C55.5906 137.981 55.5547 138.013 55.5131 138.036C55.4714 138.059 55.4251 138.072 55.3776 138.074C55.1371 138.074 54.9448 137.882 54.8125 137.449C54.9929 137.449 55.2093 137.449 55.4497 137.449H55.7743C55.7494 137.628 55.679 137.798 55.5699 137.942H55.618ZM55.618 135.934C55.618 136.079 55.6781 136.235 55.7022 136.415C55.7262 136.596 55.7022 136.824 55.7623 136.992H55.4016C55.1694 137.007 54.9365 137.007 54.7043 136.992C54.6976 136.86 54.6976 136.728 54.7043 136.596C54.7043 136.355 54.6803 136.151 54.6322 135.982L55.1612 135.874L55.618 135.934ZM55.2573 135.141C55.388 135.264 55.4799 135.423 55.5218 135.598H55.053L54.5601 135.694C54.5601 135.285 54.6442 135.117 54.8967 135.057C55.0117 135.041 55.1282 135.072 55.2213 135.141H55.2573Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M52.0573 130.091C51.9745 130.299 51.9444 130.524 51.9696 130.747C51.9947 130.969 52.0744 131.182 52.2015 131.366C52.3259 131.565 52.506 131.724 52.7197 131.822C52.9334 131.921 53.1712 131.954 53.4037 131.919C53.5052 131.875 53.5944 131.808 53.6636 131.722C53.7328 131.636 53.7798 131.534 53.8005 131.426C53.8284 131.267 53.8142 131.103 53.7594 130.951C53.7045 130.8 53.611 130.665 53.4879 130.56C53.4722 130.544 53.4535 130.531 53.4329 130.523C53.4122 130.514 53.3901 130.51 53.3677 130.51C53.3453 130.51 53.3231 130.514 53.3025 130.523C53.2818 130.531 53.2631 130.544 53.2475 130.56C53.2144 130.594 53.1959 130.639 53.1959 130.686C53.1959 130.734 53.2144 130.779 53.2475 130.813C53.3303 130.874 53.3945 130.957 53.4327 131.052C53.4709 131.148 53.4817 131.252 53.4639 131.354C53.4576 131.404 53.439 131.453 53.4097 131.495C53.3803 131.537 53.3411 131.571 53.2956 131.594C53.1287 131.623 52.9571 131.598 52.8057 131.522C52.6543 131.446 52.531 131.324 52.454 131.173C52.3549 131.041 52.2918 130.885 52.2707 130.72C52.2497 130.556 52.2714 130.389 52.3338 130.236C52.3996 130.091 52.5019 129.967 52.6304 129.874C52.759 129.781 52.9095 129.724 53.0671 129.707C53.3115 129.697 53.5536 129.757 53.7661 129.878C53.9785 129.999 54.1529 130.177 54.2693 130.392C54.462 130.8 54.562 131.245 54.562 131.696C54.562 132.147 54.462 132.593 54.2693 133.001L54.1972 133.193C53.9334 133.701 53.774 134.257 53.7283 134.828C53.7299 134.85 53.7357 134.872 53.7456 134.892C53.7555 134.911 53.7693 134.929 53.786 134.944C53.8028 134.958 53.8222 134.969 53.8433 134.976C53.8643 134.983 53.8866 134.986 53.9087 134.984C53.9544 134.978 53.996 134.955 54.0251 134.919C54.0542 134.883 54.0684 134.838 54.065 134.792C54.1244 134.277 54.275 133.776 54.5098 133.313L54.5819 133.133C54.7962 132.678 54.9073 132.181 54.9073 131.678C54.9073 131.175 54.7962 130.679 54.5819 130.224C54.4249 129.941 54.1891 129.709 53.9031 129.558C53.6171 129.406 53.2933 129.341 52.971 129.37C52.77 129.403 52.5808 129.487 52.421 129.613C52.2612 129.739 52.136 129.904 52.0573 130.091V130.091Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.3142 82.9526C33.6859 82.9909 34.0606 82.9909 34.4323 82.9526C34.0769 82.7157 33.6571 82.594 33.2301 82.604C33.0273 82.5768 32.8315 82.5115 32.653 82.4116C32.5465 82.4958 32.434 82.5722 32.3164 82.64L32.8694 83.0007L33.3142 82.9526Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.7784 120.895C33.6943 120.811 33.4899 120.895 33.562 121.015C33.8687 121.551 34.3412 121.973 34.9085 122.217C35.1489 122.097 35.4014 121.977 35.6539 121.881C34.9241 121.809 34.2512 121.455 33.7784 120.895V120.895Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.0446 81.9793C31.7345 81.7876 31.441 81.5705 31.167 81.3301L30.9746 81.5345C31.247 81.7701 31.5319 81.9908 31.8282 82.1957L32.0446 81.9793Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.9691 80.9449C32.6926 80.6805 32.4161 80.404 32.1637 80.1274L31.9473 80.428C32.1877 80.6805 32.4642 80.9449 32.7527 81.1974L32.9691 80.9449Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M15.123 136.692C15.123 137.016 15.3996 137.136 15.6761 136.968C15.5641 136.369 15.6617 135.749 15.9526 135.213H15.7362C15.431 135.658 15.2222 136.161 15.123 136.692Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M29.3178 74.5371L29.5583 74.2967C29.2938 74.0081 28.9692 73.6715 28.5965 73.2988L28.332 73.5513C28.6927 73.936 29.0293 74.2726 29.3178 74.5371Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M39.2601 124.32C38.5868 124.525 38.2262 124.837 38.2622 125.438C38.2661 125.515 38.2864 125.59 38.3216 125.659C38.3568 125.727 38.4063 125.787 38.4666 125.835C38.797 126.015 39.1808 126.07 39.5486 125.991C39.613 126.32 39.7868 126.616 40.0415 126.833C40.1365 126.889 40.242 126.926 40.3515 126.94C40.461 126.955 40.5723 126.947 40.6787 126.917C41.1716 126.809 41.2437 126.34 41.1956 125.715C41.917 125.474 42.2055 125.054 42.1574 124.705C42.1476 124.618 42.1202 124.533 42.0768 124.457C42.0334 124.38 41.9749 124.313 41.9049 124.26C41.61 124.091 41.2692 124.02 40.9311 124.056C40.7147 123.395 40.4743 123.142 40.1617 123.118L39.5847 123.226C39.5606 123.229 39.5374 123.237 39.5167 123.249C39.4959 123.262 39.4781 123.279 39.4644 123.298C39.2795 123.605 39.2073 123.966 39.2601 124.32V124.32ZM38.683 125.523C38.657 125.506 38.6363 125.483 38.6235 125.455C38.6107 125.427 38.6063 125.397 38.6109 125.366C38.6109 125.078 38.6109 124.837 39.2961 124.621C39.2961 124.765 39.2961 124.921 39.3562 125.09C39.4164 125.258 39.4284 125.45 39.4644 125.607C39.2067 125.678 38.9331 125.665 38.683 125.571V125.523ZM41.7006 124.477C41.7354 124.502 41.7643 124.534 41.7851 124.571C41.8058 124.609 41.8181 124.65 41.8208 124.693C41.8208 124.873 41.6525 125.126 41.1716 125.306C41.1716 125.162 41.1716 125.006 41.1716 124.849V124.681C41.1783 124.565 41.1783 124.449 41.1716 124.332C41.3613 124.351 41.5433 124.417 41.7006 124.525V124.477ZM40.5945 126.532C40.5379 126.558 40.4764 126.572 40.4142 126.572C40.3519 126.572 40.2904 126.558 40.2339 126.532C40.0593 126.379 39.9409 126.172 39.8972 125.943H40.2819H40.4503C40.5925 125.933 40.7335 125.909 40.871 125.871C40.871 126.232 40.871 126.532 40.5945 126.581V126.532ZM40.7508 124.729V124.897C40.7508 125.09 40.7508 125.258 40.7508 125.414C40.612 125.446 40.4715 125.47 40.33 125.487H40.1617H39.7169C39.7169 125.334 39.6808 125.154 39.6087 124.946C39.5755 124.783 39.5514 124.618 39.5366 124.453L40.0295 124.344L40.5945 124.272C40.6617 124.436 40.714 124.605 40.7508 124.777V124.729ZM39.7289 123.443C39.7848 123.37 39.8668 123.323 39.9574 123.311C40.1377 123.311 40.4022 123.503 40.5825 124.02L40.0535 124.092L39.5967 124.188C39.5738 123.948 39.6197 123.706 39.7289 123.491V123.443Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M8.66257 91.368C8.66257 91.4095 8.67904 91.4492 8.70835 91.4785C8.73766 91.5078 8.77741 91.5243 8.81886 91.5243C8.84037 91.526 8.862 91.5232 8.88237 91.516C8.90274 91.5089 8.92142 91.4977 8.93723 91.483C8.95304 91.4683 8.96564 91.4505 8.97423 91.4307C8.98283 91.4109 8.98723 91.3896 8.98717 91.368C8.98717 91.3234 8.96944 91.2806 8.93787 91.249C8.90631 91.2174 8.8635 91.1997 8.81886 91.1997C8.79728 91.1996 8.77593 91.204 8.75614 91.2126C8.73635 91.2212 8.71855 91.2338 8.70387 91.2497C8.68919 91.2655 8.67794 91.2841 8.67083 91.3045C8.66373 91.3249 8.66091 91.3465 8.66257 91.368V91.368Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.6826 60.5786L37.4902 60.7589L37.8389 61.0355L37.9831 60.8431L37.6826 60.5786Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M12.5805 90.2501C12.5805 90.2738 12.5852 90.2973 12.5943 90.3191C12.6033 90.341 12.6166 90.3609 12.6334 90.3776C12.6501 90.3944 12.67 90.4077 12.6919 90.4167C12.7137 90.4258 12.7372 90.4305 12.7609 90.4305C12.7846 90.4305 12.808 90.4258 12.8299 90.4167C12.8518 90.4077 12.8716 90.3944 12.8884 90.3776C12.9051 90.3609 12.9184 90.341 12.9275 90.3191C12.9365 90.2973 12.9412 90.2738 12.9412 90.2501C12.9412 90.2265 12.9365 90.203 12.9275 90.1811C12.9184 90.1592 12.9051 90.1394 12.8884 90.1226C12.8716 90.1059 12.8518 90.0926 12.8299 90.0835C12.808 90.0745 12.7846 90.0698 12.7609 90.0698C12.7367 90.068 12.7125 90.0714 12.6898 90.0799C12.6671 90.0883 12.6465 90.1015 12.6294 90.1186C12.6123 90.1357 12.599 90.1564 12.5906 90.1791C12.5822 90.2018 12.5787 90.226 12.5805 90.2501V90.2501Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.1251 59.9907L36.8125 60.2672L37.0289 60.4235L37.2934 60.1711C37.2312 60.1169 37.1748 60.0564 37.1251 59.9907Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M45.8336 83.3252L45.4609 83.4454L45.509 83.6859L45.8577 83.5777L45.8336 83.3252Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M6.82422 91.5124C6.82422 91.6566 6.82422 91.7768 6.94444 91.7889C7.06466 91.8009 7.12477 91.7047 7.14882 91.5604C7.16645 91.5059 7.16403 91.4469 7.14199 91.394C7.11994 91.3411 7.07973 91.2978 7.02859 91.2719C6.94444 91.2599 6.84826 91.3681 6.82422 91.5124Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M10.4805 91.0558C10.4805 91.1036 10.4995 91.1495 10.5333 91.1833C10.5671 91.2172 10.613 91.2362 10.6608 91.2362C10.7086 91.2362 10.7545 91.2172 10.7883 91.1833C10.8221 91.1495 10.8411 91.1036 10.8411 91.0558C10.8411 91.008 10.8221 90.9621 10.7883 90.9283C10.7545 90.8945 10.7086 90.8755 10.6608 90.8755C10.613 90.8755 10.5671 90.8945 10.5333 90.9283C10.4995 90.9621 10.4805 91.008 10.4805 91.0558V91.0558Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M42.1327 126.846C41.8244 126.827 41.5153 126.827 41.207 126.846V127.303C41.5076 127.303 41.8081 127.303 42.1207 127.303L42.1327 126.846Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.4668 77.2543L24.6952 77.5068C24.8395 77.2182 24.9837 76.8816 25.128 76.545L24.8996 76.3286C24.7553 76.6412 24.6111 76.9417 24.4668 77.2543Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M23.4361 79.7543C23.425 79.8903 23.425 80.027 23.4361 80.163L23.8929 80.2833C23.8182 80.1161 23.7734 79.937 23.7607 79.7543C23.7607 79.6701 23.7607 79.5379 23.7607 79.3816L23.4962 79.0811C23.4414 79.301 23.4211 79.5281 23.4361 79.7543V79.7543Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M44.1242 126.965C43.6224 126.89 43.1165 126.846 42.6094 126.833V127.313C43.1009 127.321 43.5912 127.365 44.0761 127.446L44.1242 126.965Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.215 78.3955C24.2977 78.2672 24.3739 78.1348 24.4434 77.9988L24.215 77.7944C24.1188 77.9988 24.0346 78.1551 23.9865 78.2393C23.9384 78.3234 23.8182 78.5278 23.7461 78.6841L23.9625 78.9005C24.032 78.7252 24.1165 78.5563 24.215 78.3955Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M49.1102 128.733C49.1808 128.805 49.2652 128.86 49.3582 128.898C49.4513 128.935 49.551 128.953 49.6511 128.95C49.8567 128.916 50.0484 128.824 50.2042 128.685C50.8053 129.102 51.2741 129.15 51.6108 128.83C51.6826 128.761 51.7398 128.679 51.7791 128.588C51.8183 128.498 51.8388 128.4 51.8392 128.301C51.7754 127.909 51.5701 127.554 51.2621 127.303C51.296 127.148 51.296 126.988 51.2621 126.834C51.2236 126.627 51.1075 126.442 50.9375 126.317C50.8049 126.204 50.6366 126.142 50.4626 126.142C50.2887 126.142 50.1203 126.204 49.9878 126.317C49.7801 126.151 49.5198 126.066 49.2544 126.077C49.141 126.087 49.0313 126.122 48.9335 126.18C48.8356 126.239 48.7522 126.318 48.6894 126.413C48.4008 126.75 48.5692 127.147 48.9298 127.615C48.8206 127.792 48.7787 128.003 48.8118 128.208C48.8449 128.413 48.9508 128.6 49.1102 128.733V128.733ZM49.6271 128.601C49.5729 128.606 49.5183 128.598 49.468 128.577C49.4178 128.556 49.3734 128.523 49.3386 128.481C49.2397 128.403 49.1737 128.29 49.1537 128.165C49.1336 128.041 49.161 127.913 49.2304 127.808C49.3346 127.928 49.4548 128.048 49.591 128.168L49.9277 128.469C49.8469 128.554 49.7421 128.613 49.6271 128.637V128.601ZM51.0938 127.639C51.3018 127.812 51.4458 128.049 51.5026 128.313C51.5014 128.365 51.489 128.417 51.4662 128.465C51.4434 128.513 51.4107 128.555 51.3703 128.589C51.1539 128.794 50.8053 128.673 50.4566 128.445L50.8894 127.94C50.9629 127.844 51.0312 127.743 51.0938 127.639V127.639ZM50.7933 126.594C50.8902 126.663 50.9586 126.766 50.9856 126.882C50.9911 126.934 50.9911 126.986 50.9856 127.038C50.7872 126.847 50.5785 126.666 50.3605 126.497C50.4927 126.413 50.649 126.497 50.7933 126.594ZM50.0719 126.702C50.1921 126.798 50.3244 126.894 50.4687 127.026L50.8534 127.387C50.7869 127.505 50.7105 127.618 50.6249 127.724C50.4874 127.905 50.3388 128.077 50.1801 128.241L49.8195 127.916L49.4107 127.507C49.4949 127.375 49.6031 127.231 49.7353 127.062L50.0719 126.702ZM49.002 126.581C49.0828 126.472 49.2038 126.398 49.3386 126.377C49.4964 126.378 49.6507 126.424 49.7834 126.509L49.4828 126.846C49.3742 126.972 49.2738 127.104 49.1823 127.243C48.9298 126.918 48.8938 126.726 49.002 126.581Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M43.7539 125.571C43.977 125.629 44.2136 125.6 44.4165 125.491C44.6194 125.382 44.7735 125.2 44.8479 124.982C44.8784 124.815 44.8494 124.643 44.7658 124.496C44.6823 124.349 44.5497 124.236 44.3911 124.176C44.3699 124.167 44.347 124.161 44.3237 124.161C44.3004 124.161 44.2773 124.165 44.2558 124.174C44.2343 124.183 44.2149 124.197 44.1989 124.213C44.1829 124.23 44.1706 124.25 44.1627 124.272C44.147 124.314 44.1483 124.36 44.1663 124.4C44.1843 124.441 44.2176 124.473 44.2589 124.489C44.3434 124.519 44.4148 124.577 44.4609 124.654C44.507 124.731 44.5248 124.821 44.5113 124.91C44.4577 125.039 44.3579 125.144 44.2312 125.204C44.1046 125.264 43.9602 125.275 43.8261 125.234C43.6973 125.214 43.575 125.165 43.4686 125.09C43.3622 125.015 43.2747 124.916 43.2129 124.801C43.16 124.695 43.1324 124.578 43.1324 124.459C43.1324 124.34 43.16 124.223 43.2129 124.116C43.3251 123.907 43.5063 123.744 43.7256 123.654C43.9449 123.564 44.1887 123.553 44.4152 123.623C45.1929 123.946 45.8111 124.565 46.1343 125.342L46.507 126.112C46.771 126.903 47.286 127.587 47.9737 128.059C48.0171 128.077 48.0656 128.078 48.1098 128.063C48.1541 128.047 48.1912 128.016 48.2141 127.975C48.2312 127.933 48.232 127.887 48.2164 127.845C48.2008 127.802 48.17 127.767 48.13 127.747C47.5263 127.305 47.0866 126.675 46.8797 125.955L46.483 125.186C46.3072 124.757 46.046 124.369 45.7153 124.045C45.3846 123.72 44.9913 123.466 44.5594 123.299C44.2596 123.211 43.9385 123.23 43.6511 123.353C43.3638 123.475 43.1281 123.694 42.9845 123.972C42.9074 124.125 42.8672 124.294 42.8672 124.465C42.8672 124.636 42.9074 124.805 42.9845 124.958C43.0623 125.108 43.171 125.241 43.3036 125.347C43.4362 125.452 43.5897 125.529 43.7539 125.571Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M44.8973 81.5222C44.9934 81.5222 45.4262 81.3539 45.4262 81.3539L45.1497 81.1855L44.7891 81.4019L44.8973 81.5222Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M25.8066 99.892C25.5521 99.6963 25.2733 99.5347 24.977 99.4111L24.8809 99.6516C25.1644 99.75 25.4381 99.8748 25.6984 100.024L25.8066 99.892Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.7729 44.2415C32.7729 44.0612 32.5806 43.8208 32.3882 44.0973C32.1958 44.3738 32.1598 44.2295 32.0275 44.2656C31.8953 44.3017 31.9314 44.6383 32.0997 44.6743C32.268 44.7104 32.4603 45.011 32.5325 45.1312L32.7729 45.023C32.6527 44.7104 32.7969 44.482 32.7729 44.2415Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.0576 45.5757C30.0066 45.5757 29.9576 45.596 29.9216 45.632C29.8855 45.6681 29.8652 45.717 29.8652 45.768C29.8652 45.8191 29.8855 45.868 29.9216 45.9041C29.9576 45.9401 30.0066 45.9604 30.0576 45.9604C30.1086 45.9604 30.1575 45.9401 30.1936 45.9041C30.2297 45.868 30.2499 45.8191 30.2499 45.768C30.2499 45.717 30.2297 45.6681 30.1936 45.632C30.1575 45.596 30.1086 45.5757 30.0576 45.5757Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.4564 42.7262C30.4582 42.7021 30.4547 42.6778 30.4463 42.6551C30.4379 42.6324 30.4247 42.6118 30.4075 42.5947C30.3904 42.5776 30.3698 42.5644 30.3471 42.5559C30.3244 42.5475 30.3002 42.5441 30.276 42.5459C30.2282 42.5459 30.1823 42.5649 30.1485 42.5987C30.1147 42.6325 30.0957 42.6784 30.0957 42.7262C30.0957 42.774 30.1147 42.8199 30.1485 42.8537C30.1823 42.8875 30.2282 42.9065 30.276 42.9065C30.3239 42.9065 30.3697 42.8875 30.4035 42.8537C30.4374 42.8199 30.4564 42.774 30.4564 42.7262V42.7262Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M26.4431 46.1769C26.4431 45.9846 26.371 45.8403 26.1305 45.6961C25.8901 45.5518 25.5294 45.4195 25.3491 45.5758C24.8562 45.9605 25.9141 47.1267 25.9983 47.5114C26.0824 47.8961 26.5273 47.3671 26.3349 47.1387L26.0704 46.7901C26.2672 46.6398 26.4003 46.4209 26.4431 46.1769V46.1769Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M29.1621 46.598C29.1621 46.6426 29.1798 46.6854 29.2114 46.717C29.243 46.7485 29.2858 46.7663 29.3304 46.7663C29.3571 46.7733 29.3851 46.7742 29.4122 46.7687C29.4392 46.7633 29.4647 46.7517 29.4866 46.7349C29.5085 46.718 29.5262 46.6964 29.5384 46.6716C29.5506 46.6468 29.5569 46.6196 29.5569 46.592C29.5569 46.5643 29.5506 46.5371 29.5384 46.5123C29.5262 46.4875 29.5085 46.4659 29.4866 46.449C29.4647 46.4322 29.4392 46.4206 29.4122 46.4152C29.3851 46.4097 29.3571 46.4106 29.3304 46.4176C29.2847 46.4207 29.2419 46.441 29.2106 46.4745C29.1793 46.508 29.162 46.5521 29.1621 46.598V46.598Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M21.3602 120.594C21.5165 120.594 21.6487 120.486 21.6367 120.425C21.6247 120.365 21.4804 120.317 21.3241 120.341C21.1679 120.365 21.0356 120.437 21.0476 120.51C21.0597 120.582 21.2039 120.618 21.3602 120.594Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M23.1641 61.5774L23.6209 62.0582L23.8493 61.8779C23.7291 61.7336 23.5608 61.5413 23.3564 61.3369L23.1641 61.5774Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.384 62.7318C24.2998 62.7318 24.2397 62.9242 24.384 62.9843C24.5282 63.0444 24.5643 63.1285 24.6364 63.0564C24.666 63.0052 24.6815 62.9472 24.6815 62.8881C24.6815 62.829 24.666 62.7709 24.6364 62.7198C24.5763 62.6476 24.4801 62.6717 24.384 62.7318Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M21.4304 118.658C21.5987 118.658 21.7189 118.55 21.7069 118.478C21.6949 118.406 21.5626 118.381 21.3943 118.405C21.226 118.43 21.1178 118.502 21.1298 118.574C21.1418 118.646 21.2741 118.682 21.4304 118.658Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M21.4238 122.156C21.2555 122.156 21.1353 122.253 21.1473 122.325C21.1593 122.397 21.2916 122.433 21.4599 122.409C21.6282 122.385 21.7364 122.313 21.7244 122.24C21.7124 122.168 21.6402 122.132 21.4238 122.156Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.3143 81.1256C24.3143 81.0295 24.1701 80.8371 24.0859 80.6327L23.5449 80.4043C23.6651 80.777 23.9056 81.0896 24.0258 81.3901C24.1573 81.82 24.1656 82.2782 24.0499 82.7126H25.1679V82.3639H24.4105C24.521 81.9523 24.4871 81.5152 24.3143 81.1256V81.1256Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M35.6577 61.7699L35.7779 61.5174C35.6554 61.4379 35.5388 61.3495 35.4293 61.2529L35.2129 61.4092L35.6577 61.7699Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M19.8747 96.7895C19.9832 96.7262 20.0956 96.67 20.2114 96.6212L20.1032 96.4048C19.9829 96.4048 19.8507 96.513 19.7305 96.5851L19.8747 96.7895Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.422 87.8813C34.4044 89.2037 32.8656 89.3239 29.0065 89.6365C25.8807 89.8889 24.943 90.4299 24.9791 90.7425C25.0151 91.0551 26.7824 91.2474 29.1628 90.8387C32.9301 90.0536 36.5963 88.8437 40.0909 87.2321C40.9204 86.8954 41.0045 87.2321 40.6679 87.8452C40.2186 88.8911 39.4481 89.7669 38.4679 90.3458C38.2755 90.0813 38.5641 89.4201 38.6963 89.1436L38.4679 88.9632C37.8788 90.1655 37.0132 91.2234 36.2678 91.3677C36.4994 90.8578 36.704 90.3361 36.881 89.8048L36.6165 89.7327C36.2856 90.6466 35.6704 91.4303 34.8612 91.9688C34.4284 92.2813 34.4405 91.8966 34.5246 91.7524C34.6501 91.4714 34.7234 91.17 34.741 90.8627H34.5607C34.3746 91.3301 34.0905 91.7522 33.7276 92.1006C33.3647 92.4489 32.9314 92.7156 32.4568 92.8825C32.1923 92.9666 32.0721 92.8825 32.2284 92.4977L32.6492 91.5961H32.3847C32.187 92.058 31.8636 92.455 31.4512 92.742C31.0389 93.0289 30.5542 93.1942 30.0524 93.2191C30.1938 92.8308 30.3709 92.4566 30.5814 92.101H30.3529C30.1268 92.5222 29.7703 92.8587 29.3368 93.0602C28.9034 93.2618 28.4163 93.3175 27.9485 93.2191C28.213 92.8464 28.3212 92.6661 28.3212 92.6661L28.1409 92.5338C27.896 92.8411 27.5649 93.0683 27.19 93.1861C26.8152 93.3039 26.4137 93.307 26.037 93.195C26.1887 93.0341 26.3218 92.8567 26.4337 92.6661L26.3015 92.5098L25.5441 93.195C24.9009 93.2203 24.2568 93.1841 23.6206 93.0868C22.7069 93.6398 17.9341 95.1787 15.2051 97.7755C16.5756 96.97 20.0139 94.8421 22.7309 94.5535C25.3065 94.2865 27.898 94.2061 30.4852 94.3131C32.8896 94.4333 35.5826 93.1109 38.9007 91.1513C39.5165 90.8042 40.0273 90.2975 40.3794 89.6846C41.5816 88.1457 42.88 84.8757 45.1882 83.938V83.5894C44.0958 84.1645 42.9627 84.6587 41.798 85.0681C41.7619 85.5971 39.9105 86.7993 37.422 87.8813Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M19.0203 97.3797L19.4892 97.007L19.369 96.7305C19.1686 96.8427 18.9642 96.9629 18.7559 97.0911L19.0203 97.3797Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M14.6555 95.3838C14.8432 95.2811 15.0204 95.1603 15.1845 95.0231L15.0042 94.8428C14.6546 95.0166 14.2578 95.0715 13.8741 94.9991C13.7178 94.9991 13.6216 95.2635 13.8741 95.2635C14.1368 95.2877 14.3977 95.3279 14.6555 95.3838V95.3838Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M34.3092 128.36C34.483 128.417 34.6676 128.434 34.8488 128.409C35.0301 128.384 35.2032 128.318 35.3551 128.216C35.5595 128.102 35.7121 127.913 35.7815 127.689C35.8508 127.466 35.8316 127.224 35.7278 127.014C35.636 126.87 35.4956 126.764 35.3322 126.716C35.1689 126.667 34.9935 126.679 34.8381 126.749C34.8154 126.756 34.7943 126.766 34.776 126.781C34.7578 126.796 34.7429 126.815 34.7322 126.836C34.7216 126.857 34.7155 126.88 34.7143 126.903C34.7131 126.927 34.7168 126.95 34.7253 126.972C34.7337 126.994 34.7467 127.014 34.7633 127.031C34.78 127.047 34.7999 127.06 34.8219 127.069C34.8439 127.077 34.8673 127.081 34.8909 127.08C34.9144 127.079 34.9374 127.073 34.9584 127.062C35.0412 127.023 35.135 127.015 35.2231 127.04C35.3112 127.064 35.3879 127.119 35.4392 127.194C35.4871 127.326 35.4854 127.47 35.4345 127.601C35.3837 127.731 35.2871 127.839 35.1627 127.903C35.0558 127.979 34.9326 128.028 34.803 128.047C34.6735 128.066 34.5413 128.054 34.4174 128.012C34.3066 127.97 34.2074 127.902 34.1279 127.814C34.0485 127.727 33.9911 127.621 33.9605 127.507C33.8963 127.259 33.9129 126.997 34.0081 126.759C34.1032 126.521 34.2719 126.32 34.4895 126.184C34.8401 125.968 35.2439 125.854 35.6556 125.854C36.0674 125.854 36.4711 125.968 36.8218 126.184L37.0502 126.305C37.3647 126.52 37.7037 126.698 38.0601 126.834C38.1062 126.841 38.1532 126.829 38.1913 126.803C38.2294 126.776 38.2557 126.735 38.2644 126.689C38.2678 126.667 38.2668 126.645 38.2613 126.623C38.2559 126.601 38.2462 126.581 38.2327 126.563C38.2193 126.545 38.2024 126.53 38.1831 126.518C38.1638 126.507 38.1424 126.5 38.1202 126.497C37.8059 126.364 37.5041 126.203 37.2185 126.016L37.0021 125.884C36.5966 125.636 36.1307 125.505 35.6556 125.505C35.1806 125.505 34.7147 125.636 34.3092 125.884C34.0246 126.058 33.8048 126.32 33.6833 126.63C33.5617 126.94 33.5451 127.282 33.6359 127.603C33.6787 127.774 33.7623 127.932 33.8796 128.064C33.9968 128.196 34.1442 128.298 34.3092 128.36V128.36Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.3404 130.055C30.9797 130.716 31.0278 131.101 31.4486 131.474C31.5236 131.544 31.6128 131.598 31.7103 131.631C31.8078 131.664 31.9112 131.676 32.0136 131.666C32.3411 131.593 32.6362 131.416 32.8552 131.161C32.9372 131.219 33.0296 131.259 33.1273 131.28C33.225 131.302 33.3259 131.303 33.4242 131.285C33.5226 131.268 33.6164 131.23 33.7003 131.176C33.7842 131.122 33.8566 131.051 33.9131 130.969C33.9725 130.912 34.0184 130.843 34.0476 130.766C34.0767 130.689 34.0883 130.606 34.0815 130.524C34.0402 130.279 33.9122 130.057 33.7208 129.899C34.0935 129.094 33.8049 128.697 33.6366 128.589C33.5539 128.511 33.4546 128.453 33.3463 128.42C33.238 128.387 33.1235 128.379 33.0115 128.396C32.7405 128.447 32.4923 128.581 32.3022 128.781C31.4847 128.3 31.1 128.492 30.9677 128.685C30.9051 128.756 30.8588 128.841 30.8318 128.932C30.8048 129.023 30.7979 129.12 30.8114 129.214C30.8907 129.545 31.0765 129.84 31.3404 130.055V130.055ZM31.9776 131.33C31.9226 131.335 31.8671 131.328 31.8151 131.309C31.7631 131.291 31.716 131.261 31.677 131.221C31.6082 131.174 31.551 131.111 31.5094 131.038C31.4678 130.965 31.4429 130.884 31.4366 130.801C31.4493 130.621 31.5072 130.447 31.6049 130.296L31.9656 130.584L32.5426 130.981C32.3949 131.153 32.1975 131.275 31.9776 131.33V131.33ZM33.7448 130.548C33.7454 130.584 33.7382 130.62 33.7237 130.654C33.7092 130.687 33.6877 130.716 33.6607 130.741C33.4924 130.933 33.3962 131.029 33.0836 130.897C33.1798 130.777 33.276 130.644 33.3721 130.5C33.4379 130.412 33.4981 130.319 33.5525 130.224C33.6504 130.308 33.718 130.422 33.7448 130.548V130.548ZM33.0596 128.733C33.1249 128.722 33.1919 128.728 33.2547 128.748C33.3176 128.769 33.3744 128.805 33.4202 128.853C33.6006 128.997 33.6126 129.286 33.4202 129.659L32.8552 129.19L32.5667 128.973C32.7 128.841 32.8733 128.757 33.0596 128.733V128.733ZM32.3503 129.214C32.4642 129.29 32.5726 129.375 32.6749 129.466C32.9153 129.647 33.1317 129.815 33.3 129.971C33.2408 130.089 33.1725 130.201 33.0956 130.308L32.7831 130.729C32.6148 130.632 32.4224 130.488 32.1699 130.308C32.0315 130.212 31.899 130.107 31.7732 129.995C31.8574 129.875 31.9415 129.743 32.0617 129.586C32.1491 129.456 32.2455 129.331 32.3503 129.214V129.214ZM31.2322 128.901C31.3284 128.769 31.6169 128.793 32.0617 129.033C31.9638 129.145 31.8715 129.261 31.7852 129.382L31.5207 129.755C31.3349 129.605 31.2039 129.398 31.1481 129.166V129.166C31.1447 129.116 31.1527 129.067 31.1715 129.021C31.1902 128.975 31.2192 128.934 31.2563 128.901H31.2322Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M25.2422 75.6678L25.4586 75.8722C25.5667 75.5747 25.6511 75.2692 25.711 74.9585L25.5668 74.8623C25.4725 75.1362 25.3642 75.4051 25.2422 75.6678V75.6678Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.1933 134.78L31.7846 134.696C31.7846 134.829 31.7004 134.961 31.6523 135.105L32.0611 135.213C32.0972 135.069 32.1453 134.925 32.1933 134.78Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.3419 138.446C32.4197 140.402 33.0707 142.291 34.2139 143.879C35.3571 145.467 36.942 146.684 38.7714 147.379C40.6009 148.073 42.5942 148.214 44.5032 147.785C46.4123 147.355 48.1529 146.373 49.5085 144.962C50.8641 143.551 51.7748 141.772 52.1274 139.848C52.48 137.923 52.2589 135.937 51.4916 134.137C50.7242 132.337 49.4446 130.802 47.8118 129.723C46.1789 128.645 44.2651 128.07 42.3083 128.071C40.9726 128.098 39.6552 128.387 38.4313 128.923C37.2075 129.459 36.1013 130.231 35.1757 131.194C34.2502 132.158 33.5236 133.294 33.0374 134.538C32.5511 135.783 32.3148 137.111 32.3419 138.446V138.446ZM33.3879 138.446C33.3879 138.254 33.3879 138.062 33.3879 137.881C34.1551 137.917 34.9213 137.79 35.636 137.509C36.0756 137.336 36.5487 137.266 37.0194 137.304C37.4901 137.341 37.9462 137.485 38.353 137.725C38.3359 138.045 38.3359 138.366 38.353 138.687C37.6192 138.989 36.8221 139.104 36.0327 139.023C35.1643 138.937 34.2877 138.99 33.436 139.18C33.3999 138.999 33.3879 138.747 33.3879 138.506V138.446ZM33.7004 140.923L38.8339 140.418L39.0142 140.731C38.1767 141.395 37.5023 142.242 37.0426 143.207C36.7594 143.869 36.2703 144.421 35.648 144.782C34.7146 143.678 34.0371 142.38 33.6644 140.983L33.7004 140.923ZM35.9606 145.131C36.671 144.615 37.2178 143.905 37.5355 143.087C37.9492 142.289 38.5417 141.598 39.2667 141.067C40.2044 142.185 38.918 143.219 38.341 143.772C37.6835 144.372 37.1558 145.101 36.7901 145.912C36.5008 145.687 36.2239 145.446 35.9606 145.191V145.131ZM42.7411 147.607C42.7411 147.703 42.5126 147.824 42.5367 148.064C40.7099 148.056 38.9299 147.485 37.4393 146.429C37.8028 145.323 38.5266 144.37 39.4951 143.724C40.0322 143.308 40.499 142.809 40.8776 142.245C41.2213 142.366 41.5755 142.455 41.9356 142.51C41.8513 143.58 41.9863 144.656 42.3323 145.672C42.6178 146.297 42.7576 146.98 42.7411 147.667V147.607ZM43.0536 148.052C43.2263 147.274 43.1288 146.459 42.7771 145.744C42.4496 144.961 42.3056 144.114 42.3564 143.267C42.7303 143.474 43.0401 143.78 43.2521 144.151C43.4641 144.522 43.5701 144.944 43.5586 145.371C43.5862 146.262 43.8609 147.128 44.352 147.872C43.9239 147.975 43.4904 148.055 43.0536 148.112V148.052ZM45.2056 147.643C44.884 147.312 44.6439 146.91 44.5041 146.47C44.3643 146.03 44.3287 145.563 44.4001 145.107C44.477 144.087 44.2645 143.066 43.787 142.161C44.1818 141.95 44.5596 141.709 44.9171 141.44C45.3575 142.251 46.0495 142.896 46.8887 143.279C47.8272 143.608 48.6277 144.243 49.1609 145.083C48.0997 146.293 46.7341 147.198 45.2056 147.703V147.643ZM49.5937 144.566C48.9433 143.809 48.1179 143.223 47.1893 142.858C46.5518 142.632 46.0012 142.211 45.6144 141.656C45.5062 141.488 45.9029 141.091 46.0832 141.103C46.2636 141.115 46.9007 141.103 47.1652 141.44C48.0892 142.334 49.0955 143.139 50.1707 143.844C49.9664 144.121 49.786 144.373 49.5937 144.626V144.566ZM50.7959 142.594C50.1587 142.943 49.0767 142.426 48.2111 141.199C47.9531 140.835 47.6222 140.528 47.2393 140.299C46.8564 140.069 46.43 139.921 45.987 139.865L46.0592 139.661C47.1291 139.504 50.868 138.819 51.6855 138.819C51.6385 140.143 51.3365 141.445 50.7959 142.654V142.594ZM48.7161 136.884C49.194 136.956 49.6818 136.927 50.1477 136.798C50.6137 136.67 51.0475 136.445 51.421 136.138C51.5431 136.684 51.6235 137.239 51.6615 137.797C50.88 137.545 50.303 137.725 49.0286 138.242C48.1419 138.553 47.1931 138.643 46.2635 138.506C46.2635 138.338 46.1553 137.4 46.1553 137.4C46.9355 136.971 47.8355 136.81 48.7161 136.944V136.884ZM45.8428 132.315C46.4575 131.712 46.9013 130.957 47.1291 130.127C47.5451 130.411 47.9464 130.716 48.3314 131.041C47.6335 131.56 47.1264 132.296 46.8887 133.133C46.5106 134.086 45.8786 134.917 45.0613 135.537C44.9171 135.393 44.2438 134.9 44.2438 134.9C44.4435 133.888 45.0137 132.988 45.8428 132.375V132.315ZM41.5749 128.877C41.5467 129.534 41.6573 130.189 41.8995 130.8C42.2501 131.915 42.3446 133.094 42.176 134.251C42.176 134.251 41.611 134.251 41.4427 134.335C40.8449 133.377 40.5787 132.249 40.6853 131.125C40.782 130.432 40.6467 129.726 40.3006 129.117C40.6011 129.093 41.2383 128.985 41.5749 128.937V128.877ZM42.2963 134.768C43.015 134.739 43.726 134.926 44.3378 135.304C44.9495 135.682 45.4342 136.235 45.7294 136.891C46.0246 137.547 46.117 138.276 45.9945 138.985C45.8721 139.694 45.5405 140.35 45.0423 140.869C44.5441 141.388 43.9022 141.746 43.1989 141.897C42.4956 142.049 41.7632 141.986 41.0957 141.718C40.4282 141.45 39.8562 140.988 39.4532 140.392C39.0501 139.796 38.8345 139.094 38.8339 138.374C38.8305 137.447 39.1916 136.556 39.8393 135.892C40.4869 135.229 41.3693 134.847 42.2963 134.828V134.768ZM39.6153 135.321C39.4663 135.473 39.3258 135.634 39.1945 135.802C38.9438 135.8 38.6983 135.729 38.4852 135.597C37.6918 135.188 36.0808 132.868 35.1792 132.736C35.3867 132.431 35.6157 132.142 35.8644 131.87C36.2852 132.243 39.3989 133.674 39.6754 135.381L39.6153 135.321Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.2536 140.419L31.6985 140.31C31.6136 139.794 31.5654 139.271 31.5542 138.748H31.1094C31.1189 139.307 31.1671 139.866 31.2536 140.419V140.419Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M45.8722 78.7211V78.3965C45.6527 78.6159 45.3963 78.7949 45.1148 78.9255C45.0306 79.1539 44.8503 79.5746 44.9825 79.5867C45.1148 79.5987 45.6918 78.9375 45.8722 78.7211Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M29.122 136.223C29.2819 136.298 29.4564 136.337 29.633 136.337C29.8096 136.337 29.984 136.298 30.1439 136.223C30.2985 136.157 30.436 136.056 30.5463 135.929C30.6566 135.802 30.7369 135.652 30.7811 135.49C30.8616 135.276 30.8565 135.039 30.7669 134.828C30.6774 134.618 30.5102 134.45 30.3002 134.36C30.1388 134.303 29.9621 134.31 29.8058 134.38C29.6495 134.449 29.5254 134.575 29.4587 134.732C29.4483 134.752 29.4419 134.774 29.4399 134.796C29.4379 134.818 29.4403 134.84 29.447 134.862C29.4537 134.883 29.4646 134.903 29.479 134.92C29.4933 134.937 29.511 134.951 29.5308 134.961C29.5711 134.979 29.6166 134.981 29.6587 134.968C29.7008 134.955 29.7366 134.926 29.7592 134.889C29.7941 134.804 29.8586 134.736 29.9405 134.696C30.0225 134.656 30.1163 134.648 30.204 134.672C30.3268 134.741 30.4203 134.852 30.4668 134.985C30.5133 135.118 30.5096 135.263 30.4565 135.393C30.4226 135.508 30.3642 135.613 30.2853 135.703C30.2064 135.792 30.1089 135.863 29.9997 135.91C29.8867 135.963 29.7636 135.99 29.639 135.99C29.5144 135.99 29.3913 135.963 29.2783 135.91C29.0689 135.764 28.9117 135.554 28.8295 135.312C28.7474 135.07 28.7445 134.808 28.8215 134.564C28.9506 134.17 29.1844 133.819 29.4978 133.548C29.8112 133.277 30.1925 133.096 30.6008 133.025L31.0215 132.953C31.3387 132.917 31.6499 132.841 31.9472 132.725C31.9861 132.7 32.014 132.661 32.0251 132.616C32.0363 132.572 32.03 132.524 32.0073 132.484C31.9763 132.455 31.9355 132.439 31.8931 132.439C31.8508 132.439 31.81 132.455 31.7789 132.484C31.5137 132.576 31.2398 132.64 30.9614 132.676L30.5166 132.761C30.0509 132.843 29.6167 133.052 29.2608 133.363C28.9048 133.675 28.6407 134.077 28.4969 134.528C28.4091 134.84 28.4222 135.172 28.5345 135.477C28.6468 135.781 28.8524 136.042 29.122 136.223V136.223Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.4227 135.994L31.3145 136.583L31.7352 136.655L31.8434 136.09L31.4227 135.994Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.655 137.352L31.2342 137.256C31.2342 137.568 31.1741 137.869 31.1621 138.182H31.6069C31.619 137.881 31.631 137.617 31.655 137.352Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M13.5755 95.7555C13.2028 95.7555 11.4837 95.8637 11.2793 95.8637V96.032C11.9101 96.0485 12.5345 96.162 13.1307 96.3687L13.7198 95.9839C13.7198 95.9839 13.7559 95.7315 13.5755 95.7555Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.7188 92.2813C28.8051 92.2813 28.8751 92.2113 28.8751 92.125C28.8751 92.0387 28.8051 91.9688 28.7188 91.9688C28.6325 91.9688 28.5625 92.0387 28.5625 92.125C28.5625 92.2113 28.6325 92.2813 28.7188 92.2813Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M21.4578 67.5646C21.3496 67.216 21.2173 66.8794 21.0971 66.5908H20.8086C21.0731 66.9996 21.3015 67.3963 21.3857 67.5646H21.4578Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.9838 91.5364C30.9838 91.4981 30.9686 91.4614 30.9416 91.4343C30.9145 91.4073 30.8778 91.3921 30.8396 91.3921C30.8013 91.3921 30.7646 91.4073 30.7376 91.4343C30.7105 91.4614 30.6953 91.4981 30.6953 91.5364C30.6953 91.5746 30.7105 91.6113 30.7376 91.6384C30.7646 91.6654 30.8013 91.6806 30.8396 91.6806C30.8778 91.6806 30.9145 91.6654 30.9416 91.6384C30.9686 91.6113 30.9838 91.5746 30.9838 91.5364Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.8292 91.0549C32.8309 91.0366 32.8287 91.0181 32.8229 91.0006C32.817 90.9831 32.8075 90.9671 32.795 90.9535C32.7826 90.9399 32.7674 90.9291 32.7505 90.9217C32.7337 90.9143 32.7154 90.9106 32.697 90.9106C32.6587 90.9106 32.622 90.9258 32.595 90.9529C32.5679 90.9799 32.5527 91.0166 32.5527 91.0549C32.5527 91.0733 32.5564 91.0916 32.5638 91.1085C32.5712 91.1253 32.582 91.1405 32.5956 91.1529C32.6092 91.1654 32.6252 91.1749 32.6427 91.1808C32.6602 91.1866 32.6787 91.1888 32.697 91.1871C32.7321 91.1871 32.7657 91.1732 32.7905 91.1484C32.8153 91.1236 32.8292 91.09 32.8292 91.0549V91.0549Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M14.549 89.6966C14.5489 89.7456 14.5675 89.7928 14.601 89.8285C14.6345 89.8643 14.6804 89.8859 14.7293 89.889C14.7803 89.889 14.8293 89.8687 14.8653 89.8326C14.9014 89.7965 14.9217 89.7476 14.9217 89.6966C14.9289 89.6682 14.9296 89.6385 14.9237 89.6098C14.9177 89.5811 14.9053 89.5541 14.8873 89.5309C14.8693 89.5078 14.8463 89.489 14.8199 89.4761C14.7936 89.4632 14.7646 89.4565 14.7353 89.4565C14.706 89.4565 14.6771 89.4632 14.6507 89.4761C14.6244 89.489 14.6014 89.5078 14.5834 89.5309C14.5654 89.5541 14.5529 89.5811 14.547 89.6098C14.541 89.6385 14.5417 89.6682 14.549 89.6966V89.6966Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M38.9592 88.6623C39.0313 88.5421 39.0313 88.4099 38.9592 88.3618C38.8871 88.3137 38.7669 88.3618 38.6947 88.5061C38.6226 88.6503 38.6226 88.7585 38.6947 88.8066C38.7669 88.8547 38.8871 88.7826 38.9592 88.6623Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.1631 89.3597C37.1773 89.3341 37.1854 89.3056 37.1869 89.2764C37.1884 89.2472 37.1832 89.2181 37.1718 89.1912C37.1603 89.1643 37.1429 89.1404 37.1208 89.1213C37.0987 89.1021 37.0726 89.0882 37.0443 89.0807C37.0161 89.0732 36.9865 89.0722 36.9578 89.0778C36.9292 89.0834 36.9021 89.0955 36.8788 89.1131C36.8555 89.1307 36.8365 89.1534 36.8233 89.1795C36.81 89.2055 36.8029 89.2343 36.8025 89.2635C36.7928 89.2887 36.7883 89.3156 36.7892 89.3426C36.79 89.3696 36.7962 89.3962 36.8074 89.4208C36.8186 89.4454 36.8345 89.4675 36.8543 89.4859C36.8741 89.5043 36.8973 89.5186 36.9227 89.528C36.9766 89.5353 37.0312 89.522 37.0758 89.4908C37.1203 89.4596 37.1515 89.4128 37.1631 89.3597V89.3597Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M34.9475 90.3463C34.9475 90.3144 34.9348 90.2838 34.9123 90.2613C34.8897 90.2387 34.8591 90.2261 34.8273 90.2261C34.7963 90.2288 34.7672 90.2423 34.7453 90.2643C34.7233 90.2863 34.7097 90.3153 34.707 90.3463C34.707 90.3782 34.7197 90.4088 34.7422 90.4313C34.7648 90.4538 34.7954 90.4665 34.8273 90.4665C34.8435 90.4684 34.86 90.4667 34.8755 90.4613C34.8909 90.456 34.905 90.4471 34.9165 90.4356C34.9281 90.424 34.9369 90.41 34.9423 90.3945C34.9476 90.379 34.9494 90.3625 34.9475 90.3463V90.3463Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M40.8816 138.399C41.0221 138.421 41.1556 138.474 41.2723 138.556C41.3889 138.637 41.4855 138.743 41.5549 138.867C41.5677 138.905 41.5946 138.937 41.63 138.955C41.6653 138.974 41.7065 138.978 41.745 138.968C41.7835 138.957 41.8164 138.932 41.8369 138.898C41.8575 138.863 41.8641 138.822 41.8554 138.783C41.6199 138.331 41.3065 137.924 40.9297 137.581C40.7494 137.497 40.545 137.677 40.509 137.906C40.3767 138.326 40.509 138.363 40.8816 138.399Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M39.6704 139.24C39.8311 139.814 40.1731 140.321 40.6454 140.685C41.1177 141.049 41.695 141.25 42.2912 141.259C43.0194 141.225 43.7055 140.908 44.2038 140.376C44.7021 139.844 44.9734 139.139 44.9601 138.41C44.9539 137.745 44.7069 137.104 44.2648 136.607C43.8228 136.11 43.2157 135.789 42.5557 135.705C42.4475 135.705 42.2792 136.03 42.5557 136.114C42.9185 136.157 43.2608 136.305 43.5406 136.54C43.8203 136.775 44.0254 137.086 44.1306 137.436C43.3492 137.436 42.6639 137.893 42.724 138.638C42.724 139.083 43.0246 138.807 43.0967 138.638C43.1688 138.47 43.5776 138.326 44.1667 138.458C44.145 138.774 44.054 139.081 43.9003 139.357C43.7465 139.633 43.5337 139.872 43.277 140.057C42.9765 139.817 42.5076 139.588 42.4595 139.155C42.4114 138.723 42.0628 139.155 42.0508 139.276C42.0406 139.378 42.0084 139.478 41.9566 139.567C41.9047 139.656 41.8344 139.733 41.7502 139.793C41.5819 139.865 41.7502 140.322 41.8704 140.31C42.2242 140.29 42.5787 140.334 42.9164 140.442C42.6204 140.48 42.3413 140.601 42.1109 140.79C41.6976 140.748 41.3025 140.598 40.9641 140.357C40.6257 140.116 40.3555 139.791 40.18 139.415C40.0044 139.038 39.9294 138.623 39.9623 138.208C39.9952 137.794 40.1349 137.396 40.3677 137.052C40.3904 137.008 40.3969 136.958 40.386 136.911C40.3752 136.863 40.3476 136.821 40.3084 136.792C40.2692 136.763 40.2209 136.749 40.1723 136.753C40.1236 136.756 40.0778 136.777 40.0431 136.811C39.8148 137.167 39.6637 137.568 39.5995 137.986C39.5353 138.404 39.5595 138.831 39.6704 139.24V139.24Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M18.1178 91.1755C18.1845 91.1658 18.2463 91.1348 18.2939 91.0871C18.3416 91.0395 18.3726 90.9777 18.3823 90.911C18.3823 90.7667 18.3823 90.6465 18.25 90.6465C18.1178 90.6465 18.0336 90.7667 17.9855 90.911C17.9374 91.0552 18.0336 91.1755 18.1178 91.1755Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M15.7488 94.4099C15.7488 94.5061 15.9051 94.5782 16.0734 94.5662C16.2417 94.5542 16.374 94.458 16.3619 94.3618C16.3499 94.2656 16.2056 94.1935 16.0373 94.2176C15.869 94.2416 15.7368 94.3137 15.7488 94.4099Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M40.8695 136.523C41.1273 136.385 41.3921 136.261 41.663 136.151C41.9034 136.054 41.8794 135.682 41.663 135.742C41.346 135.838 41.0398 135.967 40.7493 136.127C40.4728 136.307 40.7613 136.619 40.8695 136.523Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M42.0828 137.461C42.153 137.461 42.2203 137.433 42.2699 137.383C42.3195 137.334 42.3473 137.266 42.3473 137.196C42.3473 137.126 42.3195 137.059 42.2699 137.009C42.2203 136.96 42.153 136.932 42.0828 136.932C42.0127 136.932 41.9454 136.96 41.8958 137.009C41.8462 137.059 41.8184 137.126 41.8184 137.196C41.8184 137.266 41.8462 137.334 41.8958 137.383C41.9454 137.433 42.0127 137.461 42.0828 137.461V137.461Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M23.0831 90.2375C23.3781 89.7184 23.7865 89.2726 24.2777 88.9333C24.769 88.594 25.3305 88.37 25.9203 88.2779C27.5433 88.0495 32.4604 88.2779 35.1413 87.0757C32.9481 87.3496 30.7329 87.4019 28.5291 87.232C27.5969 87.1179 26.6511 87.2002 25.7525 87.4735C24.8539 87.7468 24.0224 88.2051 23.3115 88.8189C22.331 89.8561 21.1431 90.6754 19.8251 91.2233C20.318 90.5982 20.0776 90.1173 19.8852 90.502C19.6858 90.9146 19.3909 91.2737 19.0251 91.5497C18.6592 91.8256 18.2329 92.0105 17.7814 92.0889C17.8752 91.9109 17.9439 91.7207 17.9857 91.5239L17.7453 91.4397C17.1994 92.2444 16.3714 92.815 15.425 93.0387C16.162 92.2924 16.6672 91.3487 16.8797 90.3217H16.6152C16.4477 91.0101 16.1417 91.6572 15.716 92.2236C15.2902 92.7899 14.7535 93.2636 14.1387 93.6157L14.2709 93.9523C15.7737 93.1108 19.3683 93.0988 22.0252 91.5479C22.4941 91.2194 22.8609 90.7652 23.0831 90.2375Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M20.137 45.0114C20.4496 45.0114 21.195 45.0114 21.3392 44.6988C21.3772 44.5394 21.3715 44.3726 21.3229 44.2161C21.2742 44.0596 21.1844 43.919 21.0627 43.8092C20.8824 43.6168 20.642 43.8092 20.6299 44.0015C20.6467 44.1733 20.6014 44.3454 20.5021 44.4865C20.4028 44.6277 20.2562 44.7286 20.0889 44.7709C19.8004 44.8431 19.9447 45.0114 20.137 45.0114Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M10.0625 51.6946C10.0625 51.7231 10.071 51.751 10.0868 51.7747C10.1027 51.7984 10.1252 51.8169 10.1516 51.8278C10.1779 51.8388 10.2069 51.8416 10.2349 51.8361C10.2629 51.8305 10.2886 51.8167 10.3088 51.7966C10.329 51.7764 10.3427 51.7507 10.3483 51.7227C10.3538 51.6947 10.351 51.6657 10.34 51.6393C10.3291 51.613 10.3106 51.5905 10.2869 51.5746C10.2632 51.5588 10.2353 51.5503 10.2068 51.5503C10.1685 51.5503 10.1318 51.5655 10.1048 51.5925C10.0777 51.6196 10.0625 51.6563 10.0625 51.6946Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.5157 43.1958H24.2032C24.2067 43.6295 24.1541 44.0619 24.0469 44.4822H24.3595C24.4739 44.0633 24.5265 43.6299 24.5157 43.1958Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M21.2228 43.5082C21.2228 43.7486 21.7758 44.2415 21.9321 43.5923C21.9695 43.2933 21.9175 42.9899 21.7827 42.7203C21.6479 42.4507 21.4364 42.2271 21.1747 42.0775C20.8501 41.9213 20.8021 42.2098 20.9463 42.33C21.082 42.4907 21.1778 42.6812 21.2258 42.8859C21.2739 43.0907 21.2728 43.3039 21.2228 43.5082Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.3382 70.3051L37.5426 69.9685C37.2746 69.8288 37.0342 69.6414 36.8333 69.4155L36.6169 69.127L36.4727 69.3914C36.5555 69.4878 36.6281 69.5925 36.6891 69.704C36.8544 69.9533 37.077 70.1594 37.3382 70.3051V70.3051Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M14.2842 45.9604C14.2321 45.9635 14.1831 45.9864 14.1473 46.0244C14.1116 46.0624 14.0917 46.1126 14.0918 46.1648C14.0918 46.2158 14.1121 46.2648 14.1481 46.3008C14.1842 46.3369 14.2331 46.3572 14.2842 46.3572C14.3352 46.3572 14.3841 46.3369 14.4202 46.3008C14.4562 46.2648 14.4765 46.2158 14.4765 46.1648C14.4766 46.1126 14.4567 46.0624 14.421 46.0244C14.3852 45.9864 14.3362 45.9635 14.2842 45.9604V45.9604Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.5316 42.6179C24.5443 42.3696 24.5443 42.1209 24.5316 41.8726L24.207 41.9327C24.207 42.1731 24.207 42.5217 24.207 42.6299L24.5316 42.6179Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M20.3206 43.2793C20.3617 43.2793 20.4023 43.2712 20.4403 43.2555C20.4782 43.2398 20.5126 43.2167 20.5417 43.1877C20.5707 43.1587 20.5937 43.1242 20.6094 43.0863C20.6251 43.0484 20.6332 43.0077 20.6332 42.9667C20.6333 42.8826 20.6007 42.8018 20.5424 42.7413C20.4841 42.6808 20.4046 42.6452 20.3206 42.6421C20.2786 42.6421 20.2369 42.6505 20.1982 42.667C20.1595 42.6834 20.1244 42.7075 20.0953 42.7378C20.0661 42.7682 20.0433 42.8041 20.0283 42.8434C20.0133 42.8827 20.0064 42.9246 20.0081 42.9667C20.0064 43.0082 20.0133 43.0496 20.0284 43.0883C20.0435 43.127 20.0665 43.1621 20.0958 43.1915C20.1252 43.2209 20.1604 43.2438 20.199 43.2589C20.2377 43.274 20.2791 43.281 20.3206 43.2793V43.2793Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M19.3667 44.1572C19.4869 44.2294 19.6432 44.1572 19.7514 43.8567C19.8596 43.5561 19.9197 43.5561 19.7514 43.4239C19.5831 43.2916 19.3546 43.5201 19.2945 43.6764C19.2344 43.8326 19.2344 44.0851 19.3667 44.1572Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M24.2766 44.7583L23.9761 44.6621C23.8374 45.0658 23.6166 45.4364 23.3276 45.7506C23.0385 46.0647 22.6875 46.3155 22.2967 46.4872C21.9058 46.6589 21.4837 46.7477 21.0568 46.7481C20.6299 46.7485 20.2076 46.6604 19.8164 46.4895L19.6602 46.79C20.09 47.0112 20.5637 47.1335 21.0469 47.1482C21.53 47.1628 22.0103 47.0694 22.4527 46.8747C22.8951 46.6799 23.2885 46.3889 23.604 46.0227C23.9196 45.6566 24.1494 45.2246 24.2766 44.7583V44.7583Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M20.8707 47.7633C20.8677 47.7144 20.8461 47.6685 20.8103 47.635C20.7746 47.6015 20.7274 47.5829 20.6784 47.583C20.6306 47.583 20.5847 47.602 20.5509 47.6358C20.517 47.6696 20.498 47.7155 20.498 47.7633C20.498 47.8112 20.517 47.857 20.5509 47.8909C20.5847 47.9247 20.6306 47.9437 20.6784 47.9437C20.7274 47.9438 20.7746 47.9252 20.8103 47.8916C20.8461 47.8581 20.8677 47.8122 20.8707 47.7633V47.7633Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M19.8101 44.7706C19.807 44.7344 19.7905 44.7008 19.7638 44.6763C19.7371 44.6517 19.7021 44.6382 19.6658 44.6383C19.646 44.6322 19.625 44.6307 19.6046 44.6341C19.5841 44.6376 19.5648 44.6457 19.548 44.658C19.5313 44.6703 19.5177 44.6864 19.5084 44.7049C19.499 44.7234 19.4941 44.7438 19.4941 44.7646C19.4941 44.7853 19.499 44.8058 19.5084 44.8243C19.5177 44.8428 19.5313 44.8588 19.548 44.8711C19.5648 44.8834 19.5841 44.8916 19.6046 44.895C19.625 44.8984 19.646 44.897 19.6658 44.8908C19.7002 44.8913 19.7337 44.8794 19.7602 44.8574C19.7866 44.8353 19.8043 44.8045 19.8101 44.7706V44.7706Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M18.2344 44.6499L18.0781 44.7581C18.2293 45.4966 18.6385 46.1572 19.2322 46.6215L19.4847 46.2969C18.8891 45.91 18.447 45.3276 18.2344 44.6499V44.6499Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M18.5282 44.0492C18.4951 43.8339 18.5468 43.6141 18.6725 43.4361L18.384 43.2798C18.3201 43.4194 18.2871 43.5711 18.2871 43.7246C18.2871 43.8781 18.3201 44.0298 18.384 44.1694L18.5282 44.0492Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M18.8746 46.9826C18.8508 46.9918 18.829 47.0058 18.8106 47.0235C18.7922 47.0413 18.7776 47.0626 18.7675 47.0861C18.7574 47.1096 18.7521 47.1349 18.752 47.1604C18.7518 47.186 18.7567 47.2114 18.7664 47.235C18.772 47.2607 18.7828 47.285 18.7981 47.3063C18.8134 47.3277 18.8329 47.3457 18.8554 47.3592C18.878 47.3727 18.903 47.3814 18.9291 47.3849C18.9551 47.3884 18.9816 47.3865 19.0069 47.3793C19.0308 47.3703 19.0525 47.3563 19.0706 47.3383C19.0887 47.3203 19.1027 47.2986 19.1118 47.2747C19.1209 47.2509 19.1248 47.2253 19.1233 47.1998C19.1218 47.1743 19.1149 47.1495 19.103 47.1268C19.067 47.0066 18.9708 46.9465 18.8746 46.9826Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M11.7676 46.7663L12.0441 47.6439C12.2845 47.5477 13.078 47.2592 13.2463 47.2231L13.2223 46.4897C12.7295 46.5346 12.2424 46.6272 11.7676 46.7663V46.7663Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M7.56078 43.135C7.60223 43.135 7.64198 43.1186 7.67129 43.0893C7.7006 43.06 7.71707 43.0202 7.71707 42.9788C7.71714 42.9587 7.71305 42.939 7.70506 42.9206C7.69707 42.9023 7.68535 42.8858 7.67066 42.8722C7.65596 42.8587 7.6386 42.8483 7.61969 42.8418C7.60077 42.8353 7.58071 42.8328 7.56078 42.8345C7.52252 42.8345 7.48583 42.8497 7.45877 42.8767C7.43172 42.9038 7.41652 42.9405 7.41652 42.9788C7.41485 42.9987 7.41735 43.0187 7.42385 43.0377C7.43035 43.0566 7.44071 43.0739 7.45427 43.0886C7.46784 43.1033 7.48431 43.115 7.50265 43.123C7.52099 43.131 7.54078 43.1351 7.56078 43.135Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M7.83238 43.4958C7.90451 43.4958 7.97664 43.4958 8.01271 43.4958C8.03553 43.4713 8.04822 43.4391 8.04822 43.4056C8.04822 43.3721 8.03553 43.3399 8.01271 43.3154C7.94058 43.3154 7.85642 43.3154 7.83238 43.3154C7.80956 43.3399 7.79688 43.3721 7.79688 43.4056C7.79688 43.4391 7.80956 43.4713 7.83238 43.4958Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M7.60156 44.8545C7.60149 44.8745 7.60558 44.8943 7.61357 44.9126C7.62156 44.9309 7.63328 44.9474 7.64798 44.961C7.66267 44.9745 7.68003 44.9849 7.69894 44.9914C7.71786 44.9979 7.73792 45.0004 7.75785 44.9987C7.79611 44.9987 7.83281 44.9835 7.85986 44.9565C7.88692 44.9294 7.90212 44.8927 7.90212 44.8545C7.90219 44.836 7.89842 44.8178 7.89103 44.8009C7.88365 44.784 7.87282 44.7689 7.85923 44.7564C7.84565 44.744 7.82962 44.7345 7.81216 44.7286C7.7947 44.7227 7.7762 44.7206 7.75785 44.7222C7.73889 44.7206 7.7198 44.7227 7.70166 44.7285C7.68353 44.7342 7.66671 44.7435 7.65218 44.7558C7.63766 44.7681 7.62571 44.7832 7.61702 44.8001C7.60833 44.817 7.60308 44.8355 7.60156 44.8545V44.8545Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M9.34574 39.7451C9.32581 39.7435 9.30575 39.746 9.28684 39.7525C9.26792 39.759 9.25056 39.7693 9.23587 39.7829C9.22117 39.7965 9.20945 39.8129 9.20146 39.8313C9.19347 39.8496 9.18938 39.8694 9.18945 39.8894C9.18945 39.9308 9.20592 39.9706 9.23523 39.9999C9.26454 40.0292 9.30429 40.0457 9.34574 40.0457C9.38719 40.0457 9.42694 40.0292 9.45625 39.9999C9.48556 39.9706 9.50203 39.9308 9.50203 39.8894C9.5021 39.8694 9.49801 39.8496 9.49002 39.8313C9.48203 39.8129 9.47031 39.7965 9.45562 39.7829C9.44092 39.7693 9.42356 39.759 9.40465 39.7525C9.38573 39.746 9.36567 39.7435 9.34574 39.7451V39.7451Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M38.844 70.6302C38.5555 70.51 38.2429 70.3537 37.9544 70.2095L37.75 70.5461C38.0265 70.7024 38.3271 70.8466 38.6036 70.9789L38.844 70.6302Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M10.8186 38.7113C10.9148 38.6392 10.9508 38.543 10.9148 38.4829C10.8787 38.4228 10.8186 38.4708 10.6743 38.4708C10.5301 38.4708 10.5421 38.6512 10.5781 38.6993C10.6142 38.7474 10.7344 38.7834 10.8186 38.7113Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M38.3861 68.5986L37.1839 68.0576C37.1839 68.1538 37.0757 68.25 37.0156 68.3341L38.2178 68.8992L38.3861 68.5986Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M8.12699 41.1281C8.21115 41.1281 8.27126 41.1281 8.27126 41.0079C8.27126 40.8877 8.27126 40.8877 8.12699 40.8877C7.98273 40.8877 7.9707 40.8877 7.9707 41.0079C7.9707 41.1281 8.04284 41.1281 8.12699 41.1281Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M8.23771 41.3678C8.22095 41.3661 8.20401 41.368 8.18801 41.3732C8.172 41.3785 8.15729 41.3871 8.14482 41.3985C8.13235 41.4098 8.1224 41.4236 8.11562 41.439C8.10885 41.4545 8.10539 41.4712 8.10547 41.488C8.10547 41.5231 8.1194 41.5567 8.1442 41.5815C8.169 41.6063 8.20264 41.6203 8.23771 41.6203C8.27279 41.6203 8.30642 41.6063 8.33122 41.5815C8.35602 41.5567 8.36996 41.5231 8.36996 41.488C8.37004 41.4712 8.36658 41.4545 8.3598 41.439C8.35302 41.4236 8.34308 41.4098 8.33061 41.3985C8.31814 41.3871 8.30342 41.3785 8.28742 41.3732C8.27142 41.368 8.25448 41.3661 8.23771 41.3678V41.3678Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M8.07031 45.9848C8.03459 45.951 7.98726 45.9321 7.93807 45.9321C7.88887 45.9321 7.84155 45.951 7.80582 45.9848C7.78191 46.0342 7.77861 46.0911 7.79665 46.143C7.81468 46.1948 7.85258 46.2374 7.902 46.2613C7.95142 46.2852 8.00832 46.2885 8.06017 46.2705C8.11203 46.2524 8.1546 46.2146 8.17851 46.1651C8.1816 46.1275 8.17283 46.0899 8.15342 46.0576C8.13401 46.0252 8.10494 45.9998 8.07031 45.9848Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M9.12473 50.2646C9.08647 50.2646 9.04978 50.2798 9.02272 50.3069C8.99567 50.334 8.98047 50.3707 8.98047 50.4089C8.98349 50.4451 9.00001 50.4787 9.02675 50.5032C9.05348 50.5277 9.08847 50.5413 9.12473 50.5412C9.15981 50.5412 9.19344 50.5272 9.21824 50.5024C9.24305 50.4776 9.25698 50.444 9.25698 50.4089C9.25865 50.3906 9.25647 50.3721 9.25058 50.3546C9.24469 50.3371 9.23522 50.3211 9.22277 50.3075C9.21031 50.2939 9.19516 50.2831 9.17828 50.2757C9.1614 50.2683 9.14316 50.2646 9.12473 50.2646V50.2646Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M7.73411 47.1269C7.70382 47.1293 7.67487 47.1404 7.6508 47.1589C7.62672 47.1774 7.60857 47.2026 7.59857 47.2313C7.58856 47.2599 7.58713 47.2909 7.59445 47.3204C7.60177 47.3499 7.61752 47.3766 7.63979 47.3973C7.66205 47.4179 7.68985 47.4317 7.71979 47.4368C7.74974 47.4419 7.78053 47.4382 7.80839 47.4261C7.83625 47.414 7.85999 47.394 7.87669 47.3687C7.89339 47.3433 7.90233 47.3136 7.90242 47.2832C7.90248 47.2616 7.89808 47.2403 7.88948 47.2205C7.88089 47.2007 7.86829 47.1829 7.85248 47.1682C7.83667 47.1535 7.81799 47.1423 7.79762 47.1352C7.77724 47.1281 7.75562 47.1253 7.73411 47.1269Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M7.38095 44.6261C7.4123 44.5892 7.4295 44.5423 7.4295 44.4939C7.4295 44.4454 7.4123 44.3985 7.38095 44.3616C7.34724 44.3286 7.30192 44.3101 7.25472 44.3101C7.20752 44.3101 7.1622 44.3286 7.12849 44.3616C7.08957 44.3905 7.06299 44.433 7.05407 44.4806C7.04515 44.5283 7.05454 44.5775 7.08036 44.6186C7.10618 44.6596 7.14654 44.6893 7.19335 44.7019C7.24017 44.7144 7.28999 44.7088 7.33286 44.6862L7.38095 44.6261Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M7.60663 45.8276C7.5709 45.7937 7.52358 45.7749 7.47438 45.7749C7.42519 45.7749 7.37786 45.7937 7.34214 45.8276C7.32423 45.8434 7.30989 45.8628 7.30006 45.8846C7.29024 45.9063 7.28516 45.9299 7.28516 45.9538C7.28516 45.9777 7.29024 46.0013 7.30006 46.0231C7.30989 46.0448 7.32423 46.0642 7.34214 46.08C7.37786 46.1139 7.42519 46.1327 7.47438 46.1327C7.52358 46.1327 7.5709 46.1139 7.60663 46.08C7.63305 46.0432 7.64726 45.9991 7.64726 45.9538C7.64726 45.9085 7.63305 45.8644 7.60663 45.8276V45.8276Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M29.8903 62.2263C29.8903 62.2074 29.8866 62.1886 29.8794 62.1711C29.8721 62.1536 29.8615 62.1377 29.8481 62.1243C29.8347 62.1109 29.8188 62.1003 29.8013 62.093C29.7838 62.0858 29.765 62.082 29.7461 62.082C29.7099 62.0851 29.6763 62.1016 29.6517 62.1283C29.6272 62.155 29.6137 62.19 29.6138 62.2263C29.6122 62.2446 29.6143 62.2631 29.6202 62.2806C29.6261 62.2981 29.6356 62.3141 29.648 62.3277C29.6605 62.3413 29.6756 62.3521 29.6925 62.3595C29.7094 62.3669 29.7276 62.3706 29.7461 62.3706C29.765 62.3706 29.7838 62.3668 29.8013 62.3596C29.8188 62.3523 29.8347 62.3417 29.8481 62.3283C29.8615 62.3149 29.8721 62.299 29.8794 62.2815C29.8866 62.264 29.8903 62.2452 29.8903 62.2263V62.2263Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M81.9667 15.9534C79.2908 16.9383 76.5516 17.7416 73.7676 18.3578C73.2747 18.466 73.5151 18.8387 73.7676 18.8627C74.0201 18.8868 76.2682 19.1633 76.2682 19.1633L68.6582 24.1645C65.28 16.4703 61.4449 12.6713 56.7804 10.5434C53.813 9.34841 50.7133 8.51293 47.5474 8.05482C39.6729 6.63621 32.8443 3.60664 31.7142 0L31.3896 1.33446L29.6705 0.300553C30.2824 1.43684 31.0974 2.45142 32.0749 3.29406V5.69849L32.2913 6.07117L31.7263 37.3287H32.2312L32.8563 6.22746L33.0006 6.15533V4.13561C35.6815 6.28757 40.2139 8.65593 47.2348 9.77398C59.7498 11.7456 62.8034 17.4201 66.1215 24.5732C65.5445 24.6814 65.0275 25.2104 65.5926 26.1842L40.7549 42.4862C39.0163 42.265 37.2524 42.6018 35.7176 43.4479C34.7077 44.1092 30.9088 46.5977 29.9831 47.1508C29.0574 47.7038 28.7808 47.3431 28.2519 47.2469C28.0715 47.4513 26.4846 47.8721 25.8474 48.1606C25.7784 47.7893 25.6397 47.4344 25.4387 47.1147C25.1983 46.7901 24.5491 45.9125 24.9698 45.3595C25.3906 44.8064 26.5568 45.3595 26.8693 45.5999C26.9866 45.6984 27.0768 45.8252 27.1315 45.9682C27.1861 46.1112 27.2035 46.2658 27.1819 46.4174C26.8212 46.6458 27.4584 47.1267 27.6027 47.0786C27.7469 47.0305 27.6027 46.7059 27.3863 46.3813C27.5185 46.3813 27.5185 46.0327 27.5065 45.8644C27.795 45.8644 28.336 46.3573 28.7087 46.5256C29.0814 46.6939 28.9972 46.4174 28.9131 46.3333C28.8289 46.2491 28.5524 46.0087 28.2038 45.7201V44.9748C28.4562 45.0709 29.2497 45.4556 29.406 45.5398C29.5623 45.624 29.6825 45.4436 29.5262 45.3114C29.1268 45.0042 28.7709 44.6443 28.4683 44.2414L28.348 43.4119L28.841 43.6884C29.081 43.6461 29.3124 43.5649 29.5262 43.4479C29.971 43.2315 29.7907 42.8829 29.394 42.931C29.1606 42.5745 29.043 42.1546 29.0574 41.7288C29.0574 41.5605 29.1415 41.4763 29.3098 41.5244C29.4712 41.5663 29.6416 41.5564 29.797 41.496C29.9524 41.4355 30.0848 41.3277 30.1754 41.1878C30.1754 41.1878 30.3678 41.308 30.4519 41.4162C30.2596 42.4982 30.6323 42.1135 30.9689 41.825C31.1252 41.9452 31.3776 42.1976 31.3776 42.366C30.7525 42.6425 30.6803 43.9048 30.7525 44.3135C30.6202 44.3135 30.4159 44.4578 30.4159 44.566C30.4159 44.6742 30.7645 44.6982 30.8607 44.6862C30.9563 44.6364 31.0388 44.5647 31.1014 44.4769C31.1641 44.3892 31.2052 44.2879 31.2213 44.1813C31.2416 43.8523 31.345 43.5337 31.5219 43.2556L31.8345 43.4479C31.7153 43.5776 31.6215 43.7285 31.558 43.8928C31.2694 43.9889 31.558 44.1933 31.6421 44.1332C31.8326 43.9737 32.0678 43.8771 32.3153 43.8567C32.7361 43.7725 32.4356 43.3518 32.3875 43.1835C32.8804 42.8949 33.6738 43.6283 33.8301 43.7725C33.9864 43.9168 34.0706 43.8687 34.1547 43.7725C34.2389 43.6764 34.311 43.496 34.5635 43.5201C34.8159 43.5441 34.7438 43.5201 34.852 43.3277C34.3317 43.0447 33.7936 42.7957 33.2411 42.5824C32.9131 42.4459 32.5623 42.3724 32.2071 42.366C32.3033 41.6927 30.7525 40.6227 30.4159 40.3102C30.4929 39.9034 30.679 39.5253 30.9542 39.2161C31.2295 38.907 31.5836 38.6784 31.9787 38.5549C32.3394 38.3866 32.4356 38.1342 32.111 37.9779C30.4818 37.4197 28.7223 37.3653 27.0617 37.8216C24.3483 38.4374 21.681 39.2408 19.079 40.226C18.9727 40.1855 18.8582 40.1712 18.7451 40.1842C18.6321 40.1972 18.5239 40.2373 18.4296 40.3009C18.3353 40.3646 18.2576 40.45 18.2033 40.5499C18.1489 40.6499 18.1194 40.7615 18.1172 40.8752C17.5448 41.2159 17.0493 41.6718 16.6623 42.214C16.2753 42.7562 16.0052 43.3729 15.8691 44.025C15.3689 44.2113 14.84 44.3089 14.3062 44.3135C14.1018 44.3135 13.9456 44.6982 13.8374 44.9026C13.3925 44.9026 11.7094 45.107 11.1204 45.1791C11.2906 44.3622 11.5196 43.5586 11.8056 42.7747C11.9499 42.3539 11.9499 42.3539 11.7094 42.1496L10.8198 41.5485C11.7526 39.7114 13.3331 38.2851 15.256 37.5451C15.1838 36.8358 14.1619 36.2347 13.1641 36.403C12.833 36.1863 12.4354 36.0951 12.0431 36.1458C11.6507 36.1965 11.2893 36.3858 11.0242 36.6795C10.7597 36.1024 9.07659 36.3549 8.61975 37.2325C8.04269 36.8718 6.64812 37.5451 6.53993 39.0238C5.57816 38.7473 4.97705 40.1058 5.09727 41.2719C4.36392 41.2719 3.89506 42.7146 4.58032 43.6764C4.37006 43.8449 4.20403 44.0622 4.09658 44.3093C3.98913 44.5564 3.94349 44.826 3.96362 45.0947C3.98374 45.3634 4.06902 45.6232 4.21208 45.8516C4.35515 46.0799 4.55168 46.27 4.7847 46.4054C3.89506 46.718 4.00326 48.4011 5.15738 48.9901C4.50819 50.0361 5.15738 51.8634 6.1432 52.0077C6.1432 53.3061 7.34541 54.1717 7.69405 54.0034C7.69405 54.7968 9.06457 55.9269 9.60556 55.6264C9.73781 56.4318 11.5652 56.9728 12.7554 56.0592C12.8636 55.975 13.0198 55.7586 12.7554 55.41L11.5892 53.6187L12.5871 52.8973C12.7794 52.7771 12.8034 52.5607 12.5871 52.3082L11.2045 49.9639L14.4505 48.8579C14.4505 49.0983 14.7631 49.0382 14.9314 49.0382C15.0997 49.0382 16.5303 48.8579 17.0352 48.7858C18.0419 49.6295 19.2599 50.1824 20.5577 50.3847C19.3555 52.164 14.1379 55.1936 11.7936 56.9728C9.44928 58.7521 8.93233 62.0462 9.20884 62.6593C9.48534 63.2724 12.6472 65.5927 18.9708 63.597C20.4615 63.1282 20.9184 63.8254 21.255 64.7271C21.5916 65.6288 23.2988 68.6944 24.2124 69.2234C25.0186 70.878 25.968 72.4589 27.0497 73.9481C27.2187 74.2427 27.2953 74.5813 27.2696 74.92C27.2439 75.2587 27.117 75.5818 26.9054 75.8476C26.6157 76.614 26.5007 77.4354 26.5688 78.252C26.5688 78.8771 26.677 81.0652 26.1841 81.6302C26.0363 81.9282 25.97 82.26 25.9917 82.592C26.7251 82.6641 28.2759 82.7362 29.7907 82.8084C29.5275 82.5236 29.1672 82.3477 28.7808 82.3155C28.2442 82.029 27.7966 81.6004 27.487 81.0767C27.1775 80.553 27.0179 79.9543 27.0256 79.346C27.1856 79.7157 27.4049 80.0568 27.6748 80.3559L28.0956 79.8149C27.4992 78.927 27.143 77.8998 27.0617 76.8334C27.23 77.1219 27.4344 77.4225 27.6508 77.735C27.7914 77.5175 27.9045 77.2832 27.9874 77.0378C27.6982 76.5287 27.5489 75.9521 27.5546 75.3667L27.6508 75.1863C27.999 75.5005 28.3169 75.8467 28.6005 76.2202L28.9852 75.559C28.5928 75.0315 28.1081 74.5794 27.5546 74.2246C27.0463 73.2783 26.476 72.3666 25.8474 71.4956C26.2021 71.7372 26.5432 71.998 26.8693 72.277L27.0977 72.0486C25.925 71.339 25.0204 70.261 24.525 68.9829C24.1826 68.7454 23.899 68.4329 23.6955 68.0692C24.0994 68.4203 24.525 68.7455 24.9698 69.043L25.1983 68.7906C23.7676 67.5884 22.0485 65.4364 21.9162 64.3905C22.7397 65.2968 23.6408 66.1295 24.6092 66.8791L24.8256 66.5905C24.2393 66.0705 23.7329 65.467 23.3228 64.7992C24.2475 65.2698 25.2669 65.5247 26.3043 65.5446L26.0037 65.2441C24.7237 64.9406 23.6116 64.1518 22.902 63.044C21.9159 61.4475 20.585 60.0919 19.0069 59.0767C20.5047 59.4205 21.868 60.1983 22.9261 61.3128L23.1665 61.1084C22.1992 60.113 21.1756 59.1737 20.1009 58.2953C20.3053 58.4155 20.2211 58.1991 20.2211 58.1991C21.2017 58.7905 22.2266 59.305 23.2867 59.7379C23.6234 60.0986 25.0179 61.433 25.2704 61.6615L25.4147 61.409C25.0128 61.0254 24.6503 60.6025 24.3327 60.1467C24.8616 60.339 25.3786 60.4953 25.8715 60.6396L26.2442 61.1445L26.4125 61.0002L26.3283 60.7478C28.1317 61.2223 29.995 61.4289 31.8585 61.3609C32.9228 62.3423 34.1797 63.0916 35.5493 63.561C36.1013 63.7514 36.6912 63.8051 37.2685 63.7172C37.6295 63.7306 37.9829 63.8251 38.3024 63.9937L39.168 64.3664L39.3603 64.0659L37.7493 63.4047C37.4961 63.3177 37.2211 63.3177 36.9679 63.4047C36.5716 63.3695 36.1848 63.2637 35.8258 63.0921C34.6276 62.7041 33.5282 62.0601 32.6039 61.2046C33.1135 61.1027 33.6125 60.9538 34.0946 60.7598C34.5635 61.1205 34.7679 60.9281 34.4673 60.6035C34.9826 60.3643 35.4772 60.0829 35.946 59.762C36.2161 59.8628 36.4709 60.0003 36.7034 60.1707L37.0641 59.8702C36.9183 59.6931 36.7819 59.5085 36.6553 59.3171L37.1843 58.8843C38.1131 59.1566 38.9654 59.6424 39.6729 60.303C40.5992 61.0445 41.6861 61.5591 42.8467 61.8057C42.0741 62.0889 41.2417 62.1691 40.4292 62.0386C39.6167 61.9081 38.8513 61.5713 38.2062 61.0604L38.11 61.3128L38.7352 61.7697C39.5331 62.2328 40.365 62.6347 41.2237 62.9719C41.4747 62.9343 41.7182 62.8572 41.9451 62.7434L42.5943 63.1282L42.7866 63.7172C43.4586 64.0451 44.056 64.5075 44.5418 65.0757C43.2129 64.2849 41.8357 63.5783 40.4183 62.9598C39.9704 62.8773 39.5132 62.8571 39.0598 62.8997C38.7133 62.8687 38.3732 62.7877 38.0499 62.6593C37.4179 62.421 36.8101 62.1232 36.2346 61.7697L36.0542 62.0221C36.8951 62.5901 37.8039 63.0505 38.7592 63.3926C39.1275 63.5051 39.521 63.5051 39.8893 63.3926C40.0844 63.3642 40.2835 63.4023 40.4543 63.5008C41.3217 63.8978 42.1306 64.4115 42.8587 65.0277C42.8587 65.2441 42.8587 65.4725 43.2314 65.737C43.7631 66.0724 44.2482 66.4767 44.6741 66.9392C43.8446 66.4703 41.3199 64.8834 40.5625 64.5347L39.5767 64.138L39.3964 64.4506C40.6205 64.9507 41.7538 65.6493 42.7505 66.5184C42.6423 67.2397 44.1211 68.0332 44.3615 68.3938C42.8587 67.5042 41.4882 66.7709 40.2259 66.1337C40.2259 66.2299 40.1057 66.3621 40.0215 66.5184C40.9462 66.9975 41.8415 67.5314 42.7025 68.1173C42.5943 68.5742 42.7986 68.995 44.097 69.8245V70.0529C42.6404 69.0924 41.1268 68.2212 39.5647 67.4441C39.4926 67.5643 39.4324 67.6845 39.3723 67.8048C40.8511 68.6223 42.0533 69.3436 42.4139 69.6201C42.2937 69.9447 43.3396 70.8223 43.9407 71.1108V71.3633C42.991 70.7382 42.3298 70.3414 42.0773 70.5097C41.7527 70.3054 41.0073 69.8846 40.0456 69.3917L39.6729 69.7283C40.406 70.1388 41.109 70.6008 41.7768 71.1108C41.9932 71.8081 43.1473 72.3131 43.6762 72.6978V73.0103C42.4342 72.237 41.1315 71.5656 39.7811 71.0026L39.1078 70.7502L38.8914 71.1108L39.3603 71.3152C40.2019 71.6759 42.5582 73.0464 42.3538 73.4552C42.5462 73.5874 44.0489 74.8738 44.1692 75.006V75.1984C42.0981 73.8498 39.9371 72.6448 37.7013 71.5917C37.1432 71.5064 36.5727 71.6078 36.0783 71.8803L36.1865 72.0967L36.7515 71.9043C38.8001 72.7762 40.7538 73.8559 42.5822 75.1262C42.5822 75.5109 42.9429 75.9077 44.1451 76.7733V77.0618C41.4287 75.1849 38.5187 73.605 35.4651 72.3491C35.3297 72.3076 35.187 72.2947 35.0463 72.3113C34.9055 72.3278 34.7698 72.3735 34.6476 72.4453C34.3832 72.5415 33.7219 72.7218 33.4454 72.842L33.746 73.1065C33.9984 73.0464 35.0925 72.6617 35.0925 72.6617C37.8092 73.8097 40.3702 75.2962 42.7145 77.0858C42.6183 77.4104 42.8467 77.6389 43.0511 77.8553H42.5341C41.933 77.5186 39.5767 76.1241 38.9275 75.7754C38.8281 75.4518 38.6994 75.1379 38.5428 74.8377H38.4707C38.4749 75.2418 38.5192 75.6445 38.6029 76.0399C38.7472 76.3765 38.7592 76.3525 38.9996 76.5088C39.9032 77.0436 40.778 77.6254 41.6205 78.252C41.2824 78.4473 40.918 78.5931 40.5385 78.6848L38.8674 77.8312L38.7712 77.194H38.5067L38.4707 78.1438C39.102 78.3877 39.6519 78.8043 40.0576 79.346C41.5092 78.5889 43.1011 78.1387 44.7342 78.0236C45.1069 78.0236 45.2872 77.8072 45.2872 77.1459C45.2872 76.8815 45.2872 76.4006 45.2872 75.8836V75.6913V75.3787C45.2943 74.9353 45.2168 74.4946 45.0588 74.0803C44.7703 73.5754 44.9025 72.0846 45.2872 70.0769C45.6525 68.2171 45.7858 66.3192 45.6839 64.4265C45.5517 63.573 45.2632 60.9401 45.1429 59.6177L39.216 55.3018C38.7712 55.7225 39.0958 56.0351 38.7231 56.504C37.9417 57.598 35.2728 60.3751 32.7121 60.8199C29.6585 61.3369 23.5392 59.1368 21.231 57.2854C25.1983 59.6898 30.2956 60.5554 32.2673 59.3292V59.257C28.4683 60.2789 24.9698 56.4799 22.4692 54.4482C24.0169 55.028 25.468 55.8387 26.7732 56.8526H28.0956L27.6508 56.3717C28.0829 56.2909 28.4927 56.1187 28.853 55.8668L28.7448 55.6865C27.8998 55.8584 27.0212 55.7219 26.2682 55.3018C25.7753 55.0252 25.9917 54.8449 26.4005 54.8329C27.7141 54.7527 29.0297 54.9535 30.2596 55.422L30.7404 55.0252C30.0311 53.5706 27.7349 50.8175 27.4825 50.3366C27.23 49.8557 27.2781 49.6514 27.8431 49.7475C28.4082 49.8437 28.5644 50.1443 28.5404 50.3847C28.541 50.453 28.5566 50.5204 28.586 50.5821C28.6154 50.6438 28.658 50.6983 28.7106 50.7418C28.7633 50.7853 28.8249 50.8168 28.891 50.834C28.9571 50.8512 29.0262 50.8538 29.0934 50.8416C29.0638 50.913 29.0572 50.9919 29.0744 51.0673C29.0916 51.1427 29.1319 51.2108 29.1896 51.2623C29.3733 51.3068 29.5657 51.3001 29.7459 51.2428C29.9261 51.1856 30.0871 51.0801 30.2115 50.9377C30.3317 51.1661 30.9328 51.1902 31.2213 50.7574C31.4978 50.7574 31.9667 50.5771 32.0629 49.3749V50.9738C32.0629 51.3585 32.1831 51.635 32.5558 51.4547L38.5669 47.4754C39.804 46.5204 40.7221 45.2125 41.1997 43.7245L65.821 27.6509C65.9893 28.781 65.2199 30.1635 65.1598 30.9089C63.6137 32.1331 62.2318 33.5513 61.0482 35.1286C59.8649 36.5289 58.4791 37.7445 56.9366 38.7353C54.86 40.0803 53.1957 41.9735 52.1278 44.2053C49.6675 45.5931 47.3129 47.1602 45.0828 48.894C44.5233 49.2469 43.9102 49.5067 43.2675 49.6634C43.0454 49.742 42.8081 49.7676 42.5744 49.7384C42.3406 49.7092 42.1169 49.6259 41.921 49.4951C41.3199 49.0623 40.1057 48.9901 39.3363 50.541C39.1057 50.4649 38.8585 50.455 38.6226 50.5124C38.3867 50.5698 38.1717 50.6921 38.0018 50.8656C37.8478 50.7461 37.667 50.6658 37.4751 50.6318C37.2831 50.5977 37.0858 50.6108 36.9 50.6699C36.7143 50.7291 36.5457 50.8325 36.4088 50.9713C36.272 51.1101 36.1709 51.2801 36.1143 51.4667C35.6214 51.2743 35.5854 49.7235 34.1547 50.7814L36.2586 52.3924C36.6433 51.6831 37.1002 51.2864 37.3166 51.3104C37.5329 51.3345 37.5931 52.1039 36.9679 52.9454L37.4368 53.3061C37.6828 52.7518 37.9639 52.2137 38.2783 51.6951C38.4106 51.4907 38.7712 51.2383 38.9876 51.5989C39.204 51.9596 38.8554 52.5126 38.651 52.8012L38.9516 52.9815C39.1193 52.7883 39.354 52.666 39.6084 52.6392C39.8628 52.6125 40.1178 52.6832 40.3221 52.8372C40.5185 53.0338 40.6467 53.2882 40.6879 53.563C40.729 53.8378 40.6808 54.1186 40.5505 54.364C40.3985 54.6833 40.1388 54.9387 39.8171 55.0854L45.0828 59.1488C45.0124 58.6216 45.0782 58.0852 45.2739 57.5906C45.4696 57.096 45.7887 56.6598 46.2009 56.3236C47.4752 55.1936 55.482 47.4994 56.3476 47.4273C57.2132 47.3551 57.1771 46.8742 57.3815 46.6699C57.5858 46.4655 59.1728 44.8786 60.2067 44.0491C61.6032 42.7391 62.8419 41.2705 63.8975 39.673C64.3904 38.9637 65.0997 37.8216 65.7729 36.7035C66.4461 35.5855 67.444 34.6718 67.985 33.8783C68.5754 33.7695 69.1578 33.6209 69.7282 33.4335C70.0648 33.8543 70.5096 33.9865 70.8462 34.5035C73.1664 37.7506 74.2881 41.7022 74.0201 45.6841C73.5873 51.623 67.2516 57.0931 65.7969 58.4756C62.1903 61.974 59.8941 66.0135 59.7859 69.8846C59.2296 69.5405 58.6919 69.1673 58.1749 68.7665C58.1028 68.1053 57.7541 68.1414 57.5979 68.3578L45.2992 59.2089V59.8101L57.2612 68.6944C57.2427 68.7399 57.236 68.7894 57.242 68.8381C57.2479 68.8869 57.2662 68.9334 57.2951 68.9731C57.3239 69.0128 57.3625 69.0445 57.4071 69.0652C57.4517 69.0858 57.5008 69.0948 57.5498 69.0911C57.658 69.2114 58.752 70.0168 59.1006 70.2933C59.1737 70.372 59.2635 70.4333 59.3633 70.4728C59.4632 70.5123 59.5706 70.529 59.6777 70.5218C59.7107 71.3904 59.8562 72.2512 60.1105 73.0825C60.1105 73.2388 60.3149 73.3229 60.411 73.0825C60.5072 72.842 60.7236 71.8803 60.7236 71.8803C61.5531 72.3972 61.6974 72.0967 61.5531 71.6518C61.0602 70.0529 61.2045 64.8714 66.7948 59.9543C75.9797 51.8755 78.9131 43.5561 73.1785 33.169C73.2747 32.3996 72.9742 31.4619 72.4211 31.4739C72.7698 30.8848 72.6496 29.7067 72.0845 29.4782C72.6015 29.0094 71.832 28.276 71.4594 28.0356C71.7359 27.6869 71.279 26.9536 70.7861 26.6651C70.6419 26.2202 70.2932 25.5831 69.5839 25.7153V25.2465L76.9535 20.4376L76.4245 22.4333C76.3283 22.6617 76.6289 22.9623 76.7972 22.6737C78.4392 20.3992 80.2475 18.2493 82.2071 16.2419C82.3875 15.9894 82.147 15.8692 81.9667 15.9534ZM27.7469 82.2674H26.9415L26.677 81.522L26.7972 81.2575C26.9415 81.4499 27.6508 82.1351 27.7469 82.2674ZM44.65 63.4888C44.3856 63.3205 43.7364 62.8997 43.1593 62.5872L43.2555 62.4068C43.5483 62.485 43.8226 62.6211 44.0621 62.8069C44.3016 62.9927 44.5015 63.2246 44.65 63.4888V63.4888ZM39.3363 56.6723C40.1685 57.0059 40.9219 57.5096 41.5483 58.151C41.6565 58.2592 41.9691 58.6559 42.1014 58.5237C42.2336 58.3914 42.8587 59.0887 43.5079 59.7259C42.5381 59.4629 41.6548 58.9487 40.9472 58.2352C40.4106 57.7165 39.7775 57.3081 39.0838 57.0329L39.3363 56.6723ZM38.3505 57.8745C39.1425 58.1341 39.8517 58.5987 40.4062 59.221C41.4247 59.9303 42.4981 60.5575 43.6161 61.0964C42.7059 61.0041 41.8076 60.8188 40.9352 60.5434C40.7068 60.4352 40.4784 60.1467 40.3101 60.1467C40.1417 60.1467 39.5647 59.5696 39.3122 59.245C38.9519 58.8226 38.5256 58.4613 38.0499 58.175L38.3505 57.8745ZM50.3726 9.78601C43.4839 8.58379 39.0117 7.09305 36.5231 5.39793C40.1297 7.20125 45.6479 8.53571 50.601 9.4013C60.2187 11.0844 65.0275 17.8168 67.9128 24.6453L67.3238 25.006C64.6428 18.5261 59.7859 11.3489 50.3245 9.76196L50.3726 9.78601ZM66.1215 25.0661C66.3259 24.994 66.4822 25.2705 66.5784 25.547L66.1456 25.8355C66.0254 25.5831 65.8811 25.1383 66.1215 25.0661ZM39.9975 42.919L39.6609 43.1955L38.639 43.0151L39.9975 42.919ZM37.5931 43.3277L38.5789 43.8206L38.5067 43.9288L36.9198 43.8447L36.7635 43.4119L37.5931 43.3277ZM35.8979 44.1933L37.1963 44.7343L37.0521 44.8425H35.2608L35.0684 44.3616L35.8979 44.1933ZM34.2389 45.2152L35.6094 45.7562L35.4772 45.8524H33.734L33.4815 45.4076L34.2389 45.2152ZM32.7962 46.213L33.9984 46.8622H32.4716L32.0148 46.3573L32.7962 46.213ZM27.5305 42.4621C27.3743 42.5343 27.3983 42.9791 27.5305 43.1233L27.0737 43.2436C26.9895 42.6545 27.2661 42.1375 27.5907 42.1375C27.9153 42.1375 27.8311 42.366 27.8431 42.5703C27.7229 42.4381 27.6508 42.414 27.5305 42.4621ZM28.7328 40.8512C28.2879 40.9353 28.2398 41.4763 28.2519 41.7047C28.2639 41.9332 28.1076 41.8971 28.0836 41.7047C28.0435 41.4615 28.0858 41.2119 28.2038 40.9954C28.3751 40.7723 28.5203 40.5303 28.6366 40.2741C28.7663 40.2931 28.8986 40.2825 29.0235 40.2429C29.1485 40.2033 29.2628 40.1359 29.3579 40.0457C29.366 40.235 29.308 40.4212 29.194 40.5725C29.08 40.7238 28.9169 40.8308 28.7328 40.8752V40.8512ZM19.4036 47.9322C19.2473 47.8 19.103 47.8601 19.1752 48.0885C19.3545 48.5374 19.4601 49.0124 19.4877 49.4951C18.7009 48.6627 18.0879 47.6818 17.6844 46.6098C17.5762 46.3693 17.444 46.4294 17.456 46.7059C17.468 46.9824 17.6363 48.3049 17.6965 48.6054C16.7363 47.642 16.1667 46.3572 16.0975 44.9988H16.0013C15.8632 45.9967 16.0091 47.0133 16.4221 47.9322L14.8352 48.4131L14.5467 47.0305C14.4745 46.7059 14.0537 46.6939 14.1259 47.1147L14.2581 48.1967L10.2307 49.6153L11.8657 52.6449L10.8198 53.4023C10.8198 54.1236 11.0122 55.422 11.8056 55.7466V55.9029C10.6034 56.0351 9.47332 54.0394 10.1826 52.152L9.94218 52.0438C9.4434 52.9401 9.23743 53.97 9.3531 54.9892C9.3531 55.0613 9.23288 55.0854 9.1367 54.9892C8.7104 54.3723 8.46823 53.647 8.43844 52.8977C8.40864 52.1485 8.59243 51.4062 8.96839 50.7574L8.83615 50.6011C8.07365 51.3883 7.64318 52.4386 7.63394 53.5345C7.3731 53.1984 7.18389 52.8125 7.078 52.4005C6.9721 51.9884 6.95175 51.5591 7.01822 51.1389C7.08468 50.7187 7.23655 50.3166 7.46444 49.9574C7.69233 49.5981 7.99142 49.2894 8.34324 49.0503V48.9421C7.78622 49.1512 7.2855 49.4872 6.88071 49.9232C6.47592 50.3593 6.17815 50.8836 6.01095 51.4547C5.21749 50.9017 5.42187 48.7257 7.50169 48.1606V47.9683C6.75232 48.0439 6.02937 48.2863 5.3858 48.6776C5.07323 48.4732 4.59234 47.7639 5.00109 47.271C5.40985 46.7781 6.80441 47.1387 7.10496 47.271L7.1771 47.0305C5.66231 46.5737 4.06337 45.8283 4.36392 44.8185C4.43605 44.6021 4.97705 44.4097 5.56613 44.8185C5.85466 45.0349 6.91261 45.7321 7.09294 45.8283L7.21316 45.5278C6.3665 44.9336 5.60942 44.221 4.96503 43.4119C4.66447 42.943 4.49616 42.378 4.73661 42.0894C4.97705 41.8009 5.26558 42.1856 5.39782 42.378C5.53007 42.5703 6.80441 44.0851 6.97272 44.2654L7.11699 44.037C6.44913 43.2478 5.93898 42.3377 5.61422 41.3561C5.43389 40.7309 5.45793 39.9255 5.74647 39.7331C6.035 39.5408 6.20331 40.0938 6.27544 40.3102C6.34757 40.5266 7.16508 42.4381 7.29732 42.7146L7.47765 42.6064C6.92957 41.3899 6.70988 40.0511 6.84048 38.7233C7.00486 38.2365 7.32086 37.8151 7.74214 37.521C7.92247 37.4369 8.04269 37.6653 7.9946 37.9779C7.94651 38.2905 7.91045 40.0337 7.9946 40.6588L8.16291 40.5987C8.18932 39.4395 8.47698 38.3012 9.00446 37.2686C9.31727 36.9743 9.71905 36.7925 10.1466 36.7516C10.387 36.7516 10.2548 37.1363 10.1466 37.3888C9.80132 38.0805 9.51576 38.8005 9.29299 39.5408H9.52141C9.95668 38.5792 10.55 37.6974 11.2766 36.932C11.6373 36.6194 12.1663 36.3068 12.6231 36.5713C12.1343 37.1538 11.6039 37.7003 11.0362 38.2063L11.1684 38.3506C12.9718 36.932 13.6931 36.3308 14.7029 37.2205C12.8395 37.7735 10.411 39.6249 9.8941 41.2239L10.8198 42.0774C10.1981 43.2804 9.85308 44.6071 9.80994 45.9606C10.94 45.7802 13.4166 45.4677 13.9095 45.4436L14.3783 44.8064L16.2057 44.4818C16.2057 43.2796 17.1915 41.849 17.9609 41.7889C17.9282 42.0818 17.834 42.3645 17.6844 42.6184L17.7806 42.7987C18.4178 42.2457 18.8145 40.8872 19.2112 40.5987C19.4402 41.0307 19.4961 41.5336 19.3675 42.0053L19.5358 42.0894C19.7831 41.8425 19.9736 41.5447 20.094 41.2166C20.2144 40.8886 20.2619 40.5382 20.2331 40.19C20.7019 40.545 21.0739 41.0121 21.3151 41.5485H21.4474C21.4921 41.043 21.4719 40.5339 21.3872 40.0337H21.6758C22.2505 40.5797 22.6341 41.2964 22.7698 42.0774H23.0102C22.9896 41.2297 22.8229 40.3919 22.5173 39.6009L22.6736 39.5287C23.3836 39.9993 23.8968 40.7134 24.1163 41.5364L24.4288 41.4403C24.3327 40.8151 24.2004 39.5648 24.1523 39.0358H24.3567C24.4889 39.4085 24.513 39.7932 25.0179 39.7331C25.2152 40.2195 25.329 40.7357 25.3545 41.2599L25.5709 41.1878C25.6537 40.6268 25.6859 40.0594 25.6671 39.4927C25.8777 39.4559 26.0833 39.3954 26.2802 39.3123C26.446 39.6114 26.5407 39.9446 26.5568 40.2861H26.7611C26.9447 39.9498 27.0669 39.5834 27.1218 39.2041L27.7229 38.9637V38.6151C26.9881 38.8317 26.2359 38.9845 25.4748 39.0719L25.2463 38.6872C26.2019 38.4144 27.1736 38.2016 28.1557 38.05C28.0914 38.3077 27.9902 38.5547 27.8551 38.7834L27.9273 39.0839C28.336 38.7473 29.2617 37.8817 30.3317 38.2183C27.6508 39.0118 25.9436 43.2796 26.4486 44.9988C25.8234 44.7103 25.2463 44.5179 24.7655 44.8906C24.2846 45.2633 24.2726 45.8403 24.5851 46.5016C24.8977 47.1628 25.4988 48.0524 25.3545 48.4131C24.6841 48.0298 24.1375 47.4624 23.7796 46.7781C23.6474 46.5256 23.419 46.6819 23.5512 46.9704C23.767 47.4702 23.9478 47.9844 24.0922 48.5093C24.0922 48.6415 23.972 48.8098 23.7436 48.6535C23.2315 48.3568 22.7952 47.9453 22.4692 47.4513C22.4091 47.307 22.1687 47.4513 22.2168 47.6196C22.4034 48.034 22.564 48.4596 22.6977 48.894C22.6977 49.1344 22.5774 49.3027 22.1807 49.0503C21.831 48.8036 21.4977 48.5346 21.1829 48.2448C21.0626 48.1606 20.9064 48.2448 21.0025 48.4732C21.0716 48.7166 21.1159 48.9663 21.1348 49.2186C21.1348 49.4951 21.0386 49.7596 20.6178 49.4229C20.1971 49.0863 19.5599 48.0885 19.4036 47.9322ZM16.4582 63.561C16.1336 63.6451 15.8931 63.561 15.3882 63.1282C14.8833 62.6954 15.1478 62.6112 15.3882 62.515C15.5309 62.4599 15.6876 62.4523 15.8349 62.4935C15.9822 62.5346 16.1123 62.6223 16.2057 62.7434C16.4942 62.9238 16.8309 63.4167 16.4582 63.5008V63.561ZM18.0331 62.9478C17.7325 63.02 17.5041 62.9478 17.1434 62.6232C16.7828 62.2986 16.7948 62.0822 16.9631 62.0221C17.1153 61.9931 17.2724 62.0032 17.4196 62.0516C17.5668 62.0999 17.6993 62.185 17.8047 62.2986C18.0331 62.515 18.2855 62.8637 18.0331 62.9478ZM18.7544 62.0943C18.6926 62.1086 18.6285 62.1097 18.5663 62.0972C18.5041 62.0848 18.4452 62.0592 18.3937 62.0221C18.2976 61.95 18.2735 61.8057 18.3937 61.7576C18.4441 61.7323 18.4997 61.7191 18.556 61.7191C18.6124 61.7191 18.668 61.7323 18.7183 61.7576C18.7424 61.8658 18.7905 62.0462 18.6943 62.0943H18.7544ZM21.5916 62.0943C22.4096 63.1875 23.3909 64.1485 24.501 64.9435C23.1214 64.3805 21.9059 63.4792 20.9665 62.3227C20.2654 61.393 19.3606 60.6363 18.3216 60.1106C19.5517 60.4936 20.6589 61.1945 21.5315 62.1423L21.5916 62.0943ZM23.2507 53.1378C22.9261 53.2941 22.902 52.9574 22.9621 52.8733C23.0223 52.7891 23.455 52.5006 23.4791 52.4164C23.5031 52.3323 23.4791 52.2241 23.6594 52.2241C23.8787 52.2015 24.0958 52.1613 24.3086 52.1039L25.042 52.6689C24.4054 52.762 23.7833 52.9357 23.1906 53.1859L23.2507 53.1378ZM29.7907 54.5323C29.4432 54.56 29.0943 54.5008 28.7754 54.3602C28.4564 54.2196 28.1774 54.002 27.9633 53.7269C27.2705 52.7169 26.6938 51.6321 26.2442 50.4929C27.7815 51.4846 28.9938 52.9059 29.7306 54.5804L29.7907 54.5323ZM28.9852 50.2645C29.0051 50.1379 28.9749 50.0085 28.9011 49.9038C28.866 49.8108 28.866 49.7083 28.9011 49.6153C28.3977 49.3968 27.8743 49.2277 27.3382 49.1104C27.0617 49.1104 26.6169 49.6634 26.136 49.9519C25.4013 50.3657 24.5747 50.5889 23.7316 50.6011C23.7047 50.5363 23.661 50.4797 23.6052 50.4372C23.5493 50.3948 23.4831 50.3679 23.4135 50.3593C23.3438 50.3508 23.2731 50.3608 23.2086 50.3885C23.1441 50.4162 23.0881 50.4605 23.0463 50.517V51.2864L23.5753 51.0459C23.8277 50.9137 23.7917 51.0459 23.7316 51.1782C23.6714 51.3104 23.3829 51.635 23.0944 51.9716C22.8299 51.7913 22.7698 51.6951 22.8419 51.5869C22.9141 51.4787 22.9261 51.3946 22.8419 51.3224C22.7578 51.2503 22.4332 51.4787 22.325 51.635C22.2932 51.6735 22.2749 51.7214 22.2729 51.7713C22.271 51.8212 22.2854 51.8704 22.314 51.9113C22.3427 51.9523 22.384 51.9827 22.4315 51.9979C22.4791 52.0131 22.5303 52.0123 22.5774 51.9957C22.5774 51.9957 22.9141 52.2241 22.8299 52.3443C22.7457 52.4645 22.349 52.9214 22.2047 53.0777C22.1177 53.0081 22.0469 52.9205 21.9971 52.8208C21.9473 52.7212 21.9197 52.6119 21.9162 52.5006C21.9162 52.3082 21.7118 52.3203 21.5315 52.5006C21.3512 52.6809 21.3151 52.8012 21.5315 52.8733C21.7325 52.9963 21.9014 53.1652 22.0244 53.3662L21.279 54.2438C21.0611 54.0897 20.8971 53.871 20.8102 53.6187C20.726 53.4023 20.5216 53.5105 20.4375 53.6187C20.3533 53.7269 20.2451 53.787 20.4375 53.9312C20.6722 54.1161 20.8823 54.3302 21.0626 54.5684C20.8703 54.7968 20.6178 55.0613 20.3894 55.3859C20.0528 55.1575 19.9686 54.7487 19.8725 54.6526C19.8489 54.6286 19.8209 54.6095 19.7899 54.5965C19.759 54.5835 19.7257 54.5768 19.6921 54.5768C19.6585 54.5768 19.6253 54.5835 19.5943 54.5965C19.5634 54.6095 19.5353 54.6286 19.5118 54.6526C19.4156 54.7608 19.3555 55.0012 19.5118 55.0493C19.7813 55.2081 20.0314 55.3978 20.2572 55.6143C20.0768 55.8427 19.7041 56.3597 19.4998 56.6362C19.2474 56.3925 19.0576 56.0914 18.9468 55.7586C18.8626 55.5422 18.6702 55.5302 18.4538 55.7586C18.2374 55.987 18.2374 56.2635 18.4538 56.3236C18.7939 56.4432 19.088 56.666 19.2954 56.9608C19.0521 57.3094 18.8274 57.6706 18.6222 58.0428C18.303 57.681 18.0359 57.2763 17.8287 56.8406C17.6724 56.504 17.468 56.6482 17.2757 56.8406C17.2257 56.8689 17.1841 56.9099 17.1551 56.9596C17.1262 57.0092 17.1109 57.0656 17.1109 57.1231C17.1109 57.1806 17.1262 57.237 17.1551 57.2866C17.1841 57.3363 17.2257 57.3773 17.2757 57.4056C17.7419 57.6451 18.1517 57.9812 18.4779 58.3914C18.3216 58.704 18.0691 59.2089 17.9489 59.4133C17.5402 59.1849 17.1795 58.3914 16.9751 58.0308C16.7707 57.6701 16.5183 57.7422 16.35 57.8865C16.1817 58.0308 15.9052 58.3794 16.35 58.5958C16.8727 58.9241 17.3428 59.3294 17.7445 59.798C17.566 60.1205 17.348 60.4193 17.0953 60.6877C16.5167 60.1337 15.9783 59.5391 15.4844 58.9084C15.3521 58.6559 15.2199 58.6559 14.9193 58.9084C14.6188 59.1609 14.6068 59.3652 14.8472 59.4855C15.4924 59.9022 16.0822 60.3991 16.6024 60.9642C16.3469 61.2196 16.0601 61.4418 15.7489 61.6254C15.1614 61.1024 14.6656 60.4848 14.2822 59.798C14.1379 59.6057 13.8854 59.5576 13.5849 59.798C13.5375 59.8255 13.4981 59.8649 13.4707 59.9124C13.4434 59.9599 13.4289 60.0137 13.4289 60.0685C13.4289 60.1233 13.4434 60.1772 13.4707 60.2246C13.4981 60.2721 13.5375 60.3116 13.5849 60.339C14.2551 60.7697 14.8621 61.2916 15.3882 61.8899C15.0404 62.0618 14.673 62.191 14.2942 62.2746C13.8403 61.8055 13.4373 61.2897 13.092 60.7358C12.9718 60.4352 12.7073 60.4953 12.539 60.5915C12.3707 60.6877 12.1783 60.88 12.3466 61.0002C12.8988 61.3749 13.3929 61.8285 13.8133 62.3467C13.5452 62.3661 13.276 62.3661 13.0078 62.3467C12.7433 62.3467 13.1641 62.7194 13.2723 62.7194C13.5819 62.715 13.8903 62.7596 14.186 62.8516C14.3182 62.8516 14.9554 63.5489 14.6669 63.7293C14.3783 63.9096 13.4046 63.7293 12.9237 62.6352C12.6712 62.6352 12.5149 62.503 12.2985 62.6352C12.0821 62.7675 12.4909 63.2604 12.8275 63.3446L12.6231 63.609C12.2758 63.54 11.94 63.4227 11.6253 63.2604C11.6253 63.1642 11.7094 63.02 11.3969 63.02C10.8217 63.05 10.2479 62.9386 9.72579 62.6954C9.62432 62.6169 9.55002 62.5085 9.51335 62.3856C9.47669 62.2627 9.47951 62.1313 9.52141 62.0101C9.61759 61.6735 10.1105 58.7401 12.022 57.7062C12.022 57.9106 11.5772 58.8242 11.5171 59.1849C11.5171 59.2691 11.5171 59.3292 11.5892 59.257C11.8417 58.9685 12.551 57.4537 12.7914 57.2614C13.0949 56.8753 13.5176 56.6005 13.9936 56.4799C13.9936 56.8887 13.5729 57.5739 13.5248 57.8625C13.4767 58.151 13.5248 58.2111 13.6089 58.0067C14.0927 57.3126 14.5343 56.5899 14.9314 55.8428L15.9052 55.2897C15.8527 55.6078 15.725 55.9087 15.5325 56.1674C15.4363 56.3477 15.5325 56.4799 15.6767 56.2395C16.0491 55.79 16.3791 55.3071 16.6625 54.7968C16.8068 54.4722 17.5522 54.1837 17.5522 54.1837C17.4632 54.3477 17.383 54.5162 17.3117 54.6886C17.3117 54.8209 17.3719 54.9531 17.456 54.8088C18.8356 53.1208 20.3428 51.5413 21.9643 50.0842C22.2047 49.9279 23.1064 49.5672 23.3949 49.4229C23.3949 49.2186 23.7796 49.1224 23.9359 49.1224C24.8543 48.9715 25.7589 48.7464 26.6409 48.4491C26.7876 48.388 26.9449 48.3565 27.1038 48.3565C27.2627 48.3565 27.42 48.388 27.5666 48.4491C27.9991 48.7296 28.4534 48.9748 28.9251 49.1825C29.2136 49.2907 29.2738 49.3388 29.2738 49.459C29.2738 49.5792 29.2738 49.9639 29.3459 50.2885C29.418 50.6131 28.9131 50.4929 28.9251 50.3126L28.9852 50.2645ZM31.0891 48.5694C31.0091 48.504 30.9168 48.4554 30.8177 48.4265C30.7185 48.3976 30.6146 48.3889 30.512 48.4011C30.6443 48.5814 31.0049 48.918 31.2334 49.1945C31.4618 49.471 31.2334 49.8557 31.2334 50.024C31.2334 50.1924 30.9809 50.3847 30.9568 50.565C30.9328 50.7454 30.5962 50.6612 30.7164 50.3727C30.7926 50.1951 30.8491 50.0096 30.8847 49.8197C30.7878 49.6503 30.7302 49.4613 30.7164 49.2667C30.3494 48.8918 29.9468 48.5536 29.5142 48.2568C29.394 48.2568 28.9972 48.1486 29.2858 48.4251C29.5743 48.7016 30.1874 49.1705 30.2596 49.2546C30.3734 49.3412 30.4608 49.4578 30.512 49.5912C30.5527 49.6741 30.5686 49.7669 30.5579 49.8586C30.5473 49.9502 30.5105 50.0369 30.4519 50.1082C30.2875 50.3408 30.1351 50.5815 29.9951 50.8295C29.9109 50.9497 29.8147 50.8295 29.7667 50.6732C29.7186 50.517 30.0311 50.1322 30.0672 50.0601C30.1091 49.9957 30.1314 49.9205 30.1314 49.8437C30.1314 49.7669 30.1091 49.6917 30.0672 49.6273C29.3539 48.8499 28.4174 48.3123 27.3863 48.0885C27.8342 47.8674 28.3297 47.7601 28.8289 47.7759C29.3371 47.8665 29.8253 48.0455 30.2716 48.3049C30.4235 48.2657 30.5827 48.2639 30.7355 48.2995C30.8883 48.335 31.0302 48.407 31.1492 48.5093C31.3416 48.6535 31.0891 48.6896 31.029 48.6175L31.0891 48.5694ZM31.0891 47.2349H31.7022L32.4235 47.6918H31.594L31.0891 47.2349ZM39.2641 46.2852C38.8313 46.0087 38.5548 46.5256 38.4947 46.8382L37.6051 47.4393C37.6051 47.3551 37.5329 47.1628 37.3406 47.1628C37.1482 47.1628 36.8958 47.3311 36.8477 48.0284L35.91 48.6175C35.6335 48.2688 35.3089 48.6175 35.2007 49.1705C34.9506 49.3733 34.6807 49.5505 34.3952 49.6994C34.0465 49.3268 33.6017 49.6273 33.5055 50.2885L32.664 50.8776V49.1104C32.9405 48.9421 33.2771 48.7136 33.6738 48.4491C33.6738 48.7377 33.7941 49.0623 34.0105 48.9541C34.2269 48.8459 34.2389 48.4011 34.2269 48.1005L35.4291 47.3431C35.4291 47.6677 35.5132 47.9562 35.6695 47.8721C35.8258 47.7879 35.922 47.3551 35.922 47.0305L37.1242 46.2491C37.1843 46.5256 37.3406 46.8983 37.5209 46.8021C37.7013 46.7059 37.7493 46.177 37.7614 45.8403L38.9636 45.083C38.9636 45.2753 39.1319 45.4797 39.3002 45.3474C39.4685 45.2152 39.4685 44.9627 39.4685 44.7584L40.9352 43.8206C40.4943 44.7592 39.8875 45.6105 39.1439 46.3333L39.2641 46.2852ZM40.9232 52.1159L40.6226 52.3563C39.1319 51.6951 40.3581 50.1202 40.815 49.8197L41.2598 49.988C40.919 50.6606 40.7615 51.4111 40.803 52.164L40.9232 52.1159ZM44.2894 56.7925C43.6304 56.4791 42.9956 56.1174 42.3899 55.7105C42.1998 55.1814 41.8461 54.7266 41.38 54.4121C41.2478 54.328 41.2478 54.1837 41.38 54.2438C42.5696 54.7024 43.6067 55.4855 44.3735 56.504C44.4817 56.7444 44.3254 56.9247 44.1692 56.8406L44.2894 56.7925ZM45.4916 55.5903C45.1429 55.8187 45.1189 55.6624 45.0227 55.5182C44.0771 55.3072 43.2524 54.7329 42.7265 53.9192L42.8467 53.6187C42.441 53.337 42.0872 52.9872 41.8008 52.5848C41.6686 52.3924 41.7287 52.4525 41.8008 52.4886C43.1938 53.1222 44.4449 54.0299 45.4796 55.1575C45.5277 55.3619 45.7441 55.422 45.3834 55.6384L45.4916 55.5903ZM68.0451 32.7483C67.5908 32.6667 67.1551 32.5038 66.7587 32.2674C66.4822 32.0269 66.4101 32.2674 66.5784 32.4958C66.7467 32.7242 67.3478 33.1089 67.5642 33.2652C67.5045 33.3303 67.4484 33.3985 67.3959 33.4696C66.992 33.4922 66.587 33.4557 66.1937 33.3614C65.9653 33.3614 65.821 33.5417 65.6887 33.674L65.821 33.8663C66.0013 33.71 66.0975 33.4816 67.0232 34.0587C66.8789 34.251 66.7226 34.4554 66.5664 34.6838C66.1186 34.7126 65.6691 34.6762 65.2319 34.5756C65.0928 34.5306 64.942 34.5389 64.8087 34.5988C64.6753 34.6588 64.5691 34.7663 64.5106 34.9002L64.7029 35.0685C64.7858 34.9652 64.9029 34.8951 65.033 34.8708C65.1632 34.8465 65.2978 34.8698 65.4122 34.9363C65.6729 35.0068 65.9045 35.1584 66.0735 35.3691L65.7489 35.8259C65.1744 36.0194 64.5558 36.0403 63.9696 35.886C63.6811 35.7658 63.5007 36.0784 63.2843 36.3068L63.4406 36.4751C63.645 36.2948 63.8614 36.1024 64.1499 36.2467C64.4384 36.391 64.9193 36.4992 65.1117 36.7516L64.6909 37.3407C64.0257 37.58 63.2939 37.5541 62.6472 37.2686C62.3105 37.0041 62.01 37.5812 61.9138 37.6893L62.1062 37.8216C62.2504 37.6413 62.3947 37.4369 62.7073 37.5691C63.0198 37.7014 63.6209 37.9178 63.9696 38.1101L63.5248 38.7353C62.9232 38.8489 62.3026 38.8075 61.7214 38.6151C61.2406 38.3987 61.1083 38.8916 60.94 39.0719L61.1324 39.2282C61.3968 38.9276 61.6012 38.8194 61.9138 38.9396C62.2264 39.0599 62.7433 39.2041 62.9116 39.5888C62.8034 39.7211 62.7073 39.8654 62.6111 39.9976L62.4788 40.1539C61.8959 40.2063 61.3087 40.1282 60.7597 39.9255C60.5313 39.7812 60.4471 40.0577 60.2067 40.4304L60.399 40.5987C60.5793 40.4063 60.7957 40.1659 61.1324 40.3583C61.4004 40.5201 61.6268 40.7425 61.7936 41.0075L61.3608 41.5124C61.1267 41.5846 60.8805 41.6091 60.6368 41.5843C60.3931 41.5595 60.1569 41.486 59.9422 41.3681C59.4974 41.1157 59.2689 41.5605 58.9924 41.8971L59.2449 42.0534C59.5815 41.6566 59.7138 41.5485 59.9061 41.6567C60.0657 41.7146 60.2095 41.8088 60.3264 41.9319C60.4432 42.055 60.5298 42.2036 60.5793 42.366L60.0985 42.8468C59.5617 42.9527 59.0056 42.8983 58.4995 42.6905C58.223 42.5343 57.8263 42.955 57.67 43.1233L57.8383 43.2676C58.1629 43.0512 58.5837 42.919 58.8602 43.2075C59.0046 43.3565 59.1189 43.5321 59.1968 43.7245L58.752 44.1332C58.4851 44.2257 58.2009 44.2575 57.9201 44.2263C57.6394 44.1952 57.3691 44.1017 57.129 43.9529C56.9727 43.8567 56.588 44.1572 56.1913 44.2654V44.6141C56.5176 44.5446 56.833 44.4314 57.129 44.2775L57.9104 44.8786L57.3694 45.3354C56.7744 45.3508 56.1858 45.2099 55.6623 44.9267C55.4219 44.7343 55.1694 44.9868 55.0492 45.095C54.9693 45.1448 54.8803 45.1779 54.7873 45.1924C54.6943 45.2068 54.5994 45.2023 54.5082 45.1791L54.4481 45.3474C54.6082 45.4261 54.7868 45.4599 54.9646 45.4451C55.1425 45.4302 55.313 45.3674 55.4579 45.2633C55.8535 45.4428 56.2029 45.7101 56.4798 46.0447L56.1913 46.2611C55.1404 46.2757 54.1042 46.0146 53.1857 45.5037C52.7289 45.0709 52.801 45.0709 52.789 45.0228L52.5726 45.1431C52.6788 45.415 52.7318 45.7047 52.7289 45.9966L52.9814 46.0808L53.1136 45.8524C53.8885 46.0435 54.5728 46.4983 55.0492 47.1387L54.953 47.2109C54.2507 47.307 53.5357 47.1941 52.8972 46.8863L52.9693 46.4775H52.7049C52.7049 46.6338 52.5005 47.1988 52.4404 47.3551L52.6808 47.5355L52.8131 47.3191C53.2855 47.5125 53.7367 47.7543 54.1595 48.0404L53.7267 48.4251C53.0568 48.4964 52.3852 48.3069 51.8513 47.8961L51.2141 48.3409C51.2141 48.3409 51.2141 48.4491 51.5387 48.4491C52.0755 48.4873 52.5819 48.7128 52.9693 49.0863L52.3322 49.6514C51.7148 49.6521 51.1207 49.4154 50.6731 48.9901C50.5048 48.7377 50.1441 49.0983 50.072 49.1585C49.9999 49.2186 50.072 49.3628 50.4327 49.4109C50.9086 49.5991 51.3573 49.8498 51.7671 50.1563L51.13 50.7213C50.8027 50.7237 50.4789 50.6538 50.1817 50.5167C49.8846 50.3795 49.6213 50.1785 49.4108 49.9279C49.2665 49.7596 49.0141 49.8678 48.8097 49.9279C48.6053 49.988 48.8097 50.1563 48.966 50.2645C49.1223 50.3727 50.2764 50.9257 50.625 51.1661L50.0359 51.6951L49.0381 51.5869C48.8578 51.4066 48.1605 50.8295 47.9922 50.6612C47.8239 50.7574 47.6195 51.0459 47.4392 51.1301L47.5955 51.3585L47.8239 51.2263C48.3048 51.4907 49.0982 51.8995 49.2906 52.3443L48.8578 52.717C48.4876 52.7027 48.1257 52.603 47.8004 52.4257C47.475 52.2485 47.1951 51.9984 46.9823 51.6951C46.7659 51.3585 46.3211 51.8634 45.9484 52.1279L46.1648 52.2962C46.4053 52.1039 46.4654 51.9837 46.7299 52.188C47.2615 52.4689 47.7381 52.8436 48.1365 53.2941L47.6556 53.7028C47.3398 53.723 47.0229 53.6905 46.7178 53.6066C46.3193 53.2823 45.9456 52.9287 45.5998 52.5487C45.4675 52.4285 44.9987 52.5487 44.3976 52.729V52.9574C45.1189 52.9574 45.2271 52.9574 45.3113 52.9574C45.8632 53.3866 46.3891 53.8483 46.8862 54.34L46.5736 54.5925L45.5757 54.5203C44.7222 53.6667 43.7484 53.1498 43.4599 52.705C43.4599 52.5727 43.556 52.4285 43.6161 52.2962C43.3757 52.0798 42.0773 50.9858 41.7647 50.6853L41.8729 50.529C42.4628 51.0432 43.1382 51.4501 43.8686 51.7312C44.0078 51.4788 44.1603 51.234 44.3254 50.9978C44.3254 50.6372 44.1932 50.4809 43.4238 50.0361L43.6402 49.9038C43.9915 50.124 44.3719 50.2939 44.7703 50.4088C45.1703 49.9257 45.5999 49.468 46.0566 49.0382L46.6096 49.1224C46.778 49.1224 46.7539 49.1224 46.7058 49.0382C46.6065 48.9325 46.4979 48.8359 46.3812 48.7497C46.5736 48.5814 46.7539 48.4131 46.9583 48.2568C47.1627 48.1005 47.6796 48.3169 47.7998 48.3289C47.9201 48.3409 47.9321 48.3289 47.872 48.2448L47.355 47.9322L48.2086 47.283C48.3785 47.3621 48.5623 47.407 48.7496 47.4152C48.9299 47.4152 48.9299 47.3431 48.8578 47.283L48.5452 47.0546C49.8991 46.1077 51.3171 45.2561 52.789 44.5059C53.8404 42.244 55.5068 40.3235 57.5979 38.9637C58.8208 38.1831 59.926 37.2317 60.8799 36.1385C63.4286 33.0368 64.7029 32.087 65.6887 31.7264C65.6114 31.5169 65.6114 31.2867 65.6887 31.0772C66.7106 28.5285 66.362 28.6728 66.4101 28.2279C66.4582 27.7831 66.6505 27.5908 66.6625 28.0236C66.6746 28.4564 66.8188 28.793 67.0593 28.805C67.0504 28.9647 67.0734 29.1246 67.1271 29.2753C67.1808 29.426 67.264 29.5645 67.3718 29.6826C67.3718 30.1996 67.3718 30.981 67.1074 31.1373C66.8429 31.2936 67.0352 31.3417 67.1074 31.3898C67.5761 31.6873 68.015 32.0295 68.4178 32.4116C68.2243 32.4918 68.0575 32.6252 67.9369 32.7963L68.0451 32.7483ZM69.8965 31.9788C69.8244 31.7023 69.8965 31.6182 70.2812 31.4619C70.6659 31.3056 70.8342 31.3176 70.8703 31.4619C70.9063 31.6062 70.6899 31.9187 70.4495 31.9909C70.2091 32.063 69.8604 32.3034 69.7883 32.0269L69.8965 31.9788ZM72.0244 33.3253C74.537 36.8478 79.406 46.7059 68.8265 56.8286C73.8157 51.5509 77.9874 44.3135 71.3512 33.698C70.4375 33.5537 69.8003 32.8685 70.9665 32.0269C71.4113 31.6903 72.7578 32.0029 71.9162 33.3734L72.0244 33.3253ZM69.9326 26.629C70.0768 26.629 70.2692 26.8935 70.2331 27.0498C70.3549 27.0823 70.4679 27.1418 70.5636 27.2239C70.6594 27.3059 70.7354 27.4085 70.7862 27.5239C70.837 27.6393 70.8612 27.7647 70.857 27.8907C70.8528 28.0167 70.8204 28.1402 70.7621 28.252C70.9064 28.2723 71.0439 28.3269 71.1628 28.4112C71.2818 28.4954 71.3789 28.6069 71.446 28.7364C71.513 28.8658 71.5482 29.0094 71.5484 29.1552C71.5486 29.301 71.514 29.4448 71.4473 29.5744C71.6061 29.7691 71.7394 29.9832 71.8441 30.2116C71.9162 30.3318 71.8441 30.428 71.6758 30.416C71.0949 30.3918 70.5134 30.4403 69.9446 30.5602C69.6695 30.6271 69.4268 30.7889 69.2593 31.0171C69.2304 31.0611 69.1889 31.0955 69.1403 31.1158C69.0917 31.1361 69.0381 31.1415 68.9864 31.1311C68.9348 31.1208 68.8874 31.0953 68.8503 31.0578C68.8132 31.0203 68.7882 30.9727 68.7784 30.9209C68.7301 30.691 68.7301 30.4535 68.7784 30.2236C68.9717 29.9906 69.2195 29.8089 69.4998 29.6946C69.894 29.5973 70.2965 29.5369 70.702 29.5143C70.9063 29.5143 70.8222 29.4181 70.702 29.3941C70.2795 29.3361 69.854 29.304 69.4276 29.2979C69.1271 29.2979 68.6582 29.7187 68.4659 29.899C68.2735 30.0793 67.997 30.0313 68.0691 29.5624C68.1119 29.345 68.2033 29.1401 68.3366 28.9632C68.4698 28.7862 68.6414 28.6417 68.8385 28.5405C69.1889 28.428 69.5529 28.3633 69.9205 28.3482C70.161 28.3482 70.1369 28.1197 69.8484 28.0717C69.5021 28.04 69.153 28.0643 68.8145 28.1438C68.4995 28.307 68.2116 28.5179 67.9609 28.7689C67.7806 28.9493 67.6844 28.9012 67.6844 28.6968C67.6641 28.3633 67.7573 28.0328 67.9489 27.7591C68.4572 27.3651 69.0852 27.1572 69.7282 27.17C69.2906 27.0711 68.8394 27.0467 68.3937 27.0979C68.2045 27.1645 68.0333 27.2741 67.8935 27.418C67.7538 27.5619 67.6493 27.7363 67.5882 27.9274C67.5161 28.1438 67.1074 28.0476 67.2396 27.6509C67.5762 26.4487 68.6101 26.5208 69.8244 26.6771L69.9326 26.629ZM76.9535 21.8201C77.0737 21.3633 77.5185 19.9207 77.6267 19.572C77.7349 19.2234 77.5305 19.2234 77.3021 19.3676L31.6541 49.1224L31.4978 48.8699L77.0737 19.2955C77.4344 19.043 77.0737 18.9348 76.7972 18.8988L74.1283 18.5982C75.1862 18.4419 78.853 17.8048 79.6344 17.6485C79.3459 18.1053 77.5666 20.7261 76.8453 21.9163L76.9535 21.8201Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.865 55.8788C30.9448 56.369 29.9559 56.7176 28.9316 56.9127C33.5121 57.2252 36.6979 55.3378 37.7318 54.0634L36.722 53.306C35.9045 54.4241 33.6323 56.2755 31.9131 56.4077C33.2596 56.0831 35.7602 53.4022 36.1088 52.7169L35.0509 51.8153C34.7891 53.0683 34.0523 54.1712 32.9951 54.893C32.6345 54.3039 31.7087 51.8153 31.5044 51.2863C31.3 50.7573 31.1317 51.2022 31.2038 51.3705C31.276 51.5388 32.0814 54.1476 32.2618 54.6525C32.4421 55.1574 32.4541 55.458 31.865 55.8788Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.6657 58.728C33.3892 58.9444 33.0286 59.3652 32.9083 59.4613C35.1688 58.3873 37.1733 56.8419 38.7871 54.929L38.1981 54.4722C37.3009 55.6486 36.1328 56.5908 34.7931 57.2188C33.4535 57.8467 31.9821 58.1418 30.5039 58.0788C31.4729 58.2494 32.4536 58.3459 33.4373 58.3673C33.7739 58.3673 33.9663 58.4996 33.6657 58.728Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M39.6708 53.2573C39.5401 53.2113 39.3997 53.1993 39.263 53.2224C39.1263 53.2455 38.9977 53.3031 38.8894 53.3895C38.7091 53.5819 38.8894 53.8103 39.1419 54.0027C39.3943 54.195 39.6949 54.2912 39.8271 54.195C39.9594 54.0989 39.9954 53.5579 39.6708 53.2573Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M19.5391 66.951C19.7074 67.1674 19.8757 67.3959 20.032 67.6363H20.4047C20.2724 67.3838 20.1281 67.1314 19.9839 66.8789L19.5391 66.951Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M18.457 65.5928C18.6494 65.8453 18.8297 66.0617 18.9499 66.2059C19.0159 66.2686 19.0763 66.337 19.1303 66.4103L19.6713 66.3262C19.5871 66.1939 19.503 66.0497 19.4188 65.9294C19.3346 65.8092 19.2024 65.5928 19.1182 65.4365L18.457 65.5928Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M20.3165 65.0879L19.8477 65.2442C19.9735 65.4437 20.11 65.6363 20.2564 65.8212L20.5209 66.1819L20.8816 66.1098C20.7853 65.9032 20.6769 65.7025 20.557 65.5087C20.4969 65.4005 20.4367 65.2562 20.3165 65.0879Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M20.5078 68.3458C20.7122 68.6824 20.8925 68.971 20.9887 69.1753H21.0849C21.0116 68.8787 20.9026 68.5921 20.7603 68.3218L20.5078 68.3458Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M18.0332 139.709C18.0332 139.805 18.1414 139.878 18.2616 139.878C18.3818 139.878 18.49 139.805 18.49 139.709C18.4742 139.661 18.4436 139.619 18.4026 139.59C18.3616 139.56 18.3123 139.544 18.2616 139.544C18.211 139.544 18.1616 139.56 18.1206 139.59C18.0796 139.619 18.049 139.661 18.0332 139.709Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.2315 53.5699C33.3156 53.4978 33.3998 53.2934 33.3276 53.2213C33.2555 53.1492 33.1112 53.2213 33.0151 53.2934C32.9189 53.3656 32.8708 53.4978 32.9429 53.5699C32.961 53.5904 32.9832 53.6068 33.0081 53.618C33.0329 53.6292 33.0599 53.635 33.0872 53.635C33.1145 53.635 33.1415 53.6292 33.1663 53.618C33.1912 53.6068 33.2134 53.5904 33.2315 53.5699V53.5699Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M19.2305 63.9338C19.2812 64.2894 19.4084 64.6298 19.6032 64.9316L20.1201 64.7874C19.9775 64.5054 19.9231 64.187 19.9638 63.8737C19.8437 63.8344 19.717 63.8195 19.5911 63.8298C19.4652 63.8402 19.3426 63.8755 19.2305 63.9338Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M16.252 139.781C16.252 139.889 16.4082 139.986 16.6126 139.986C16.817 139.986 16.9733 139.889 16.9733 139.781C16.9733 139.673 16.817 139.589 16.6126 139.589C16.4082 139.589 16.252 139.673 16.252 139.781Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M19.7637 139.625C19.7696 139.664 19.7904 139.7 19.8216 139.724C19.8529 139.749 19.8924 139.761 19.932 139.757C19.9535 139.764 19.9762 139.765 19.9984 139.761C20.0205 139.757 20.0414 139.748 20.0594 139.735C20.0774 139.721 20.0921 139.704 20.1021 139.684C20.1122 139.663 20.1175 139.641 20.1175 139.619C20.1175 139.596 20.1122 139.574 20.1021 139.554C20.0921 139.534 20.0774 139.517 20.0594 139.503C20.0414 139.49 20.0205 139.481 19.9984 139.477C19.9762 139.473 19.9535 139.474 19.932 139.481C19.9114 139.479 19.8908 139.481 19.8712 139.488C19.8516 139.494 19.8335 139.504 19.8178 139.518C19.8022 139.531 19.7893 139.548 19.7801 139.566C19.7708 139.584 19.7652 139.604 19.7637 139.625V139.625Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.568 53.0656C34.0697 52.674 34.5327 52.2352 34.9506 51.7552L34.3374 51.2983C34.1199 51.8765 33.8114 52.4163 33.4237 52.8973C33.4237 52.8973 33.3035 53.27 33.568 53.0656Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.7949 53.5103L38.1195 53.7868C38.5884 53.4983 38.6485 52.8972 37.7949 53.5103Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M26.5114 69.7285L25.9704 69.3799C25.7917 69.2734 25.6192 69.157 25.4535 69.0312L25.2852 69.2717L26.3191 69.969L26.5114 69.7285Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M17.7598 64.3543C17.85 64.7017 18.014 65.0256 18.2406 65.304L18.9379 65.1237C18.7548 64.83 18.6474 64.4954 18.6254 64.1499L17.7598 64.3543Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M11.3633 61.5416L12.0846 62.1668L12.301 61.9384C12.1808 61.7821 11.8562 61.3974 11.736 61.2651L11.3633 61.5416Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M34.1238 66.5899C34.1639 66.4541 34.1624 66.3094 34.1196 66.1744C34.0767 66.0394 33.9944 65.9203 33.8833 65.8325L33.6309 65.9527C33.727 66.085 33.9795 66.3855 33.9314 66.626C33.8833 66.8664 34.0637 66.7342 34.1238 66.5899Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.834 67.0229L39.0362 67.624L39.1925 67.3235L37.9903 66.7344C37.9542 66.8065 37.8941 66.9147 37.834 67.0229Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.237 68.6824C35.9816 68.4865 35.6787 68.3621 35.3594 68.3218C35.6299 68.4881 35.8766 68.6903 36.0927 68.9229L36.237 68.6824Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M35.3928 67.3239C35.0923 67.2037 34.7917 67.0835 34.5032 66.9873L34.2988 67.2758L35.2005 67.6004L35.3928 67.3239Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M34.753 65.1962C34.2 64.9558 33.7792 64.7875 33.5508 64.7153L33.659 65.1481C33.9475 65.2443 34.2481 65.3645 34.5606 65.4968L34.753 65.1962Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M39.959 66.0136L38.7568 65.4365C38.6967 65.5447 38.6366 65.6529 38.5645 65.7611L39.7667 66.3742L39.959 66.0136Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M26.5267 63.0916C27.1693 63.8555 27.9634 64.4778 28.8589 64.9189C28.6679 65.0041 28.4654 65.0608 28.2578 65.0872L28.4021 65.3157C28.8479 65.2639 29.2801 65.1293 29.6765 64.9189C28.5792 64.4338 27.5618 63.7853 26.6589 62.9954C26.5146 62.8752 26.4545 62.9593 26.5267 63.0916Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M39.7758 69.2953L38.766 68.7783C38.7059 68.8865 38.6578 68.9947 38.5977 69.0909L39.5594 69.6199L39.7758 69.2953Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.7756 67.8405L35.9822 67.5039C35.9389 67.6024 35.8908 67.6987 35.8379 67.7924L36.5953 68.117L36.7756 67.8405Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M25.9166 67.4924L25.0269 66.7471L24.8105 67.0116C25.1231 67.264 25.4477 67.5045 25.7723 67.7449L25.9166 67.4924Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.9649 63.0679C28.9649 63.0265 28.9485 62.9867 28.9191 62.9574C28.8898 62.9281 28.8501 62.9116 28.8086 62.9116C28.7672 62.9116 28.7274 62.9281 28.6981 62.9574C28.6688 62.9867 28.6523 63.0265 28.6523 63.0679C28.6523 63.1094 28.6688 63.1491 28.6981 63.1784C28.7274 63.2077 28.7672 63.2242 28.8086 63.2242C28.8501 63.2242 28.8898 63.2077 28.9191 63.1784C28.9485 63.1491 28.9649 63.1094 28.9649 63.0679V63.0679Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M29.0719 63.5608C29.3512 63.8538 29.6811 64.0941 30.0457 64.2701L29.7331 64.6067L29.9255 64.799L30.4424 64.4023C30.7945 64.5891 31.1321 64.8021 31.4523 65.0395L31.7649 64.7029C31.4162 64.4384 31.0796 64.2099 30.8872 64.0897L31.1157 63.8974L31.0075 63.7892C30.6107 64.0897 29.6129 63.5247 29.2763 63.3323C28.9397 63.14 28.9276 63.3924 29.0719 63.5608Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M27.7754 65.6172L28.7011 66.2785L28.8694 66.0621L28.2322 65.5571L27.7754 65.6172Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M55.219 110.868C55.219 110.868 55.1349 111.001 55.219 111.157C55.3032 111.313 55.4715 111.337 55.5196 111.289C55.5677 111.241 55.5196 111.097 55.5196 110.976C55.5196 110.856 55.3032 110.82 55.219 110.868Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M51.4495 107.297C50.9926 107.177 51.0046 107.562 51.4495 107.658C51.8943 107.754 51.9063 107.406 51.4495 107.297Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M58.3256 117.059C58.3256 117.192 58.4698 117.132 58.4097 116.963C58.3204 116.743 58.2559 116.513 58.2174 116.278C58.2174 113.982 57.5201 110.471 55.2479 108.716C55.0771 108.59 54.8758 108.511 54.6646 108.488C54.4535 108.465 54.2399 108.498 54.0457 108.584C53.9191 108.692 53.8291 108.837 53.7882 108.998C53.7473 109.16 53.7574 109.33 53.8173 109.486C53.5565 109.28 53.3531 109.01 53.2267 108.702C53.1004 108.395 53.0554 108.06 53.0959 107.73C53.0959 107.49 52.7473 107.73 52.6992 108.127C52.7286 108.536 52.8623 108.931 53.0874 109.274C53.3126 109.617 53.6218 109.897 53.9856 110.087C54.0303 110.031 54.093 109.992 54.163 109.976C54.2331 109.961 54.3062 109.97 54.3703 110.002C54.4474 110.014 54.5262 110.005 54.5988 109.977C54.6714 109.948 54.7353 109.901 54.784 109.841C54.8327 109.78 54.8645 109.707 54.8763 109.63C54.8881 109.553 54.8794 109.474 54.8512 109.401C57.3758 110.904 57.5081 114.559 57.6644 116.11C57.9588 116.368 58.1858 116.694 58.3256 117.059V117.059Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M50.9961 116.615C50.7677 116.447 50.6114 116.723 50.7797 116.843C50.948 116.964 51.2125 116.771 50.9961 116.615Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M51.0865 114.21C51.2788 114.402 51.8559 114.378 51.8559 114.21C51.8559 114.041 51.8559 113.957 52.0242 113.969C53.2264 114.041 54.0078 115.616 54.1882 116.205C54.2723 116.482 54.5128 116.35 54.4527 116.085C54.1881 115.296 53.7806 114.563 53.2504 113.921C53.0133 113.688 52.7231 113.516 52.4049 113.42C52.0866 113.323 51.7497 113.306 51.4231 113.368C51.3311 113.379 51.2439 113.415 51.1704 113.472C51.097 113.528 51.0401 113.603 51.0057 113.689C50.9713 113.775 50.9607 113.869 50.9749 113.961C50.9891 114.052 51.0276 114.138 51.0865 114.21V114.21Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M50.4879 107.201C48.0834 107.045 44.0801 108.404 44.0801 112.01C44.0801 112.167 44.1763 112.287 44.2845 112.287C44.4877 112.269 44.6889 112.233 44.8856 112.179C44.9938 112.179 45.0418 112.359 45.114 112.323C45.1861 112.287 45.4145 112.323 45.2582 111.998C44.3927 110.339 45.9555 108.957 46.9413 108.524C45.3063 109.726 45.5468 110.928 45.7391 111.313C45.7731 111.435 45.8309 111.549 45.9094 111.648C45.9878 111.747 46.0853 111.829 46.196 111.89C46.196 111.89 46.4965 111.89 46.4124 111.565C45.8594 109.51 48.937 107.466 50.7524 107.598C50.8966 107.574 50.6802 107.225 50.4879 107.201Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M51.041 117.011C50.7886 116.939 50.7645 117.264 50.9088 117.324C51.0252 117.366 51.1203 117.452 51.1733 117.564C51.2454 117.709 51.5339 117.564 51.4738 117.384C51.4365 117.292 51.3778 117.21 51.3025 117.145C51.2272 117.081 51.1376 117.035 51.041 117.011V117.011Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M56.4155 112.395C56.3286 112.16 56.198 111.944 56.0308 111.757C55.9105 111.649 55.634 111.673 55.7542 111.902C55.8745 112.13 56.1029 112.515 56.151 112.671C56.1991 112.827 56.4996 112.731 56.4155 112.395Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.9813 73.1543C31.5338 73.2523 31.0703 73.2523 30.6228 73.1543L30.4785 73.2745C30.5771 73.3841 30.6472 73.5162 30.6829 73.6592C31.1143 73.5018 31.5618 73.3929 32.0173 73.3346L31.9813 73.1543Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.8262 65.3156C32.1053 65.5263 32.363 65.7638 32.5956 66.0249C32.7519 66.2293 33.0765 66.1932 32.9322 65.7965C32.685 65.4354 32.3708 65.1252 32.0065 64.8828L31.8262 65.3156Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.7693 81.3539L30.9496 81.1135C30.777 80.9488 30.6163 80.772 30.4687 80.5845L30.1802 80.2358L29.9277 80.5604C30.1939 80.8397 30.4748 81.1046 30.7693 81.3539V81.3539Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M56.8137 113.248C56.7416 113.104 56.3088 113.116 56.4531 113.477C56.6445 114.18 56.7653 114.901 56.8137 115.629C56.8137 115.905 57.2225 115.785 57.2225 115.557C57.2509 114.767 57.1116 113.98 56.8137 113.248V113.248Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.6566 80.1276L31.873 79.815C31.6085 79.5144 31.356 79.2259 31.1516 78.9614L30.9473 79.2379C31.0194 79.3461 31.0915 79.4303 31.1396 79.5144C31.1877 79.5986 31.4522 79.8992 31.6566 80.1276Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M31.123 66.23C31.2192 66.3261 31.5679 66.7349 31.8804 66.7709C32.193 66.807 32.1449 66.5305 31.9886 66.4704C31.7427 66.3492 31.5091 66.2042 31.2914 66.0376L31.123 66.23Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M33.0716 64.1258L32.5186 63.8613L32.1699 64.3422C32.5426 64.5706 32.8792 64.7991 32.9634 64.8592L33.0716 64.1258Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M40.5621 115.918C40.3817 115.785 40.2254 115.533 40.1293 115.918C39.9809 116.691 39.655 117.419 39.1773 118.045C38.6995 118.671 38.083 119.177 37.3762 119.524C37.2199 119.596 37.3762 120.065 37.7729 119.921C38.97 119.113 39.9454 118.018 40.6101 116.735C40.7785 116.314 40.7424 116.062 40.5621 115.918Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M44.7017 107.429L44.5815 107.177C43.2018 107.819 42.0066 108.799 41.1071 110.026C40.9508 110.375 41.3596 110.615 41.5519 110.266C42.3482 109.072 43.4311 108.097 44.7017 107.429Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M43.53 116.074C42.9313 115.589 42.4644 114.962 42.1724 114.25C41.8803 113.538 41.7725 112.763 41.8589 111.998H41.7266C41.2097 114.294 41.7266 116.098 43.1813 117.288C43.2248 117.32 43.2775 117.337 43.3316 117.337C43.3857 117.337 43.4384 117.32 43.4819 117.288C43.578 117.144 44.4076 116.747 43.53 116.074Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M43.3431 109.75C42.3212 111.469 42.5737 114.271 44.1005 115.353C44.3409 115.521 44.7136 114.992 44.4371 114.727C43.8162 114.096 43.4038 113.29 43.2555 112.417C43.1071 111.544 43.23 110.647 43.6076 109.846C43.6557 109.75 43.5354 109.402 43.3431 109.75Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M41.0025 110.603C40.961 110.603 40.9213 110.62 40.8919 110.649C40.8626 110.679 40.8462 110.718 40.8462 110.76C40.8445 110.781 40.8473 110.803 40.8544 110.823C40.8615 110.844 40.8728 110.862 40.8875 110.878C40.9021 110.894 40.9199 110.907 40.9397 110.915C40.9595 110.924 40.9809 110.928 41.0025 110.928C41.0471 110.928 41.0899 110.91 41.1215 110.879C41.153 110.847 41.1708 110.804 41.1708 110.76C41.1708 110.738 41.1664 110.717 41.1578 110.697C41.1492 110.677 41.1366 110.659 41.1208 110.645C41.105 110.63 41.0863 110.619 41.066 110.612C41.0456 110.605 41.024 110.602 41.0025 110.603V110.603Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.3824 116.097C36.2622 116.097 36.1901 116.314 36.3824 116.35C36.5748 116.386 36.6589 115.989 36.3824 116.097Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M50.4906 111.265C50.4691 111.263 50.4474 111.266 50.4271 111.273C50.4067 111.28 50.388 111.292 50.3722 111.306C50.3564 111.321 50.3438 111.339 50.3352 111.359C50.3266 111.378 50.3222 111.4 50.3223 111.421C50.3223 111.466 50.34 111.509 50.3716 111.54C50.4031 111.572 50.4459 111.59 50.4906 111.59C50.5122 111.59 50.5335 111.585 50.5533 111.577C50.5731 111.568 50.5909 111.556 50.6056 111.54C50.6202 111.524 50.6315 111.505 50.6386 111.485C50.6457 111.465 50.6485 111.443 50.6469 111.421C50.6469 111.401 50.6428 111.381 50.635 111.362C50.6271 111.343 50.6156 111.325 50.6011 111.311C50.5866 111.296 50.5693 111.285 50.5504 111.277C50.5314 111.269 50.5111 111.265 50.4906 111.265V111.265Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.8936 119.897C36.7494 119.969 36.6412 120.161 36.8936 120.221C37.1461 120.282 37.3986 120.137 37.2663 119.909C37.1341 119.68 37.0259 119.825 36.8936 119.897Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.3196 75.2587L29.9469 74.7778L29.7305 75.0063L30.0911 75.415L30.3196 75.2587Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M47.9684 116.145C47.6799 116.362 47.9684 116.602 48.2088 116.446C48.5185 116.274 48.8707 116.194 49.2242 116.216C49.5776 116.237 49.9177 116.359 50.2045 116.566C50.3849 116.734 50.6493 116.566 50.3969 116.193C50.0584 115.909 49.6329 115.75 49.1911 115.741C48.7494 115.732 48.3179 115.875 47.9684 116.145Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M49.188 112.924C49.198 113.167 49.1267 113.407 48.9851 113.605C48.8436 113.803 48.64 113.948 48.4065 114.018C48.2623 114.09 48.2983 114.511 48.4907 114.463C48.7519 114.367 49.0329 114.338 49.3082 114.378C49.4404 114.451 49.5366 114.222 49.5847 114.186C49.6276 114.131 49.6509 114.063 49.6509 113.994C49.6509 113.924 49.6276 113.856 49.5847 113.801C49.514 113.692 49.4659 113.57 49.4432 113.442C49.4205 113.314 49.4236 113.183 49.4524 113.056C49.5486 112.803 49.224 112.719 49.188 112.924Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M49.4697 112.562C49.5077 112.562 49.5449 112.551 49.5766 112.53C49.6082 112.509 49.6328 112.479 49.6474 112.444C49.662 112.409 49.6658 112.37 49.6584 112.333C49.6509 112.295 49.6326 112.261 49.6057 112.234C49.5788 112.207 49.5445 112.189 49.5072 112.181C49.4699 112.174 49.4312 112.178 49.3961 112.192C49.3609 112.207 49.3309 112.232 49.3098 112.263C49.2886 112.295 49.2773 112.332 49.2773 112.37C49.2773 112.421 49.2976 112.47 49.3337 112.506C49.3698 112.542 49.4187 112.562 49.4697 112.562V112.562Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M47.6541 116.53C47.6257 116.523 47.596 116.522 47.5673 116.528C47.5386 116.534 47.5116 116.547 47.4885 116.565C47.4653 116.583 47.4466 116.606 47.4337 116.632C47.4208 116.659 47.4141 116.687 47.4141 116.717C47.4141 116.746 47.4208 116.775 47.4337 116.801C47.4466 116.828 47.4653 116.851 47.4885 116.869C47.5116 116.887 47.5386 116.899 47.5673 116.905C47.596 116.911 47.6257 116.91 47.6541 116.903C47.7031 116.903 47.7503 116.885 47.7861 116.851C47.8218 116.818 47.8434 116.772 47.8465 116.723C47.8465 116.672 47.8262 116.623 47.7901 116.587C47.7541 116.551 47.7051 116.53 47.6541 116.53V116.53Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M47.5326 115.484C47.5326 115.34 47.5326 115.039 47.8331 114.919C48.1337 114.799 47.8331 114.582 47.6648 114.655C47.4347 114.833 47.2699 115.082 47.196 115.364C47.1479 115.58 47.4965 115.616 47.5326 115.484Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M45.681 117.119C45.5993 117.098 45.5138 117.096 45.4315 117.115C45.3492 117.133 45.2724 117.171 45.2077 117.225C45.143 117.279 45.0922 117.348 45.0595 117.426C45.0268 117.504 45.0132 117.588 45.0197 117.672C45.0197 117.949 45.0197 118.454 44.6711 118.586C44.5146 118.68 44.3321 118.721 44.1503 118.704C43.9686 118.687 43.7971 118.612 43.6612 118.49L43.541 118.67C43.7 118.795 43.8829 118.887 44.0784 118.939C44.2739 118.991 44.4779 119.003 44.6781 118.974C44.8783 118.944 45.0705 118.875 45.2429 118.769C45.4153 118.663 45.5643 118.523 45.681 118.358C46.0296 117.877 46.0536 117.215 45.681 117.119Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.9922 66.4586L29.99 67.228L30.0141 66.9034L29.1365 66.2422L28.9922 66.4586Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M45.7562 80.6087C45.9747 80.6904 46.1687 80.8265 46.3199 81.0041C46.4711 81.1817 46.5745 81.395 46.6202 81.6237C46.6659 81.8525 46.6526 82.0891 46.5813 82.3112C46.51 82.5333 46.3833 82.7335 46.213 82.8929C47.4152 82.9891 48.3049 83.9389 46.3332 86.0548C44.5299 87.9903 43.1233 89.3608 42.7266 89.8057C42.4741 90.0581 42.5823 90.3226 42.967 90.0341C43.5646 89.5978 44.1867 89.1964 44.8305 88.8319C44.6162 89.7811 44.2893 90.7013 43.8567 91.5729C42.8348 92.6789 39.4446 96.6823 35.1046 95.997C37.6849 95.2662 39.956 93.7128 41.5725 91.5729L41.4402 91.3685C39.9375 93.1358 34.8521 95.8768 30.2717 96.1052C26.0038 96.3096 23.4071 96.1052 21.4354 96.8626C19.7458 97.7005 18.1701 98.751 16.7468 99.9884C17.3902 99.1237 18.1105 98.319 18.8988 97.584L18.5982 97.2834C17.3853 98.0579 16.2499 98.9476 15.208 99.9403C14.3304 100.842 12.4188 100.89 11.1205 98.3293L11.4931 98.0047L11.2888 97.8244C10.7688 98.0714 10.1886 98.1632 9.61769 98.0889C9.13063 98.029 8.63806 98.029 8.151 98.0889C8.33446 97.7982 8.54368 97.5246 8.77615 97.2714C10.2669 96.9949 11.4451 97.1993 11.5172 97.4998C11.8853 97.3164 12.2354 97.0991 12.5631 96.8506L12.3948 96.7064C12.0702 96.7064 9.74994 96.8506 9.17287 96.8626C10.1905 95.9398 11.3315 95.163 12.5631 94.5544C13.9937 93.8451 14.8473 91.2122 14.8834 90.2865C14.8834 90.0461 14.655 90.0461 14.6309 90.2865C14.5347 91.2483 13.3566 94.2899 10.9161 94.8069C12.0665 93.7768 12.7624 92.3331 12.8516 90.7915H12.5631C12.427 91.8515 11.9867 92.8493 11.2954 93.6644C10.6042 94.4794 9.69153 95.0767 8.66795 95.3839C9.83513 94.3803 10.5995 92.9882 10.8199 91.4647H10.4953C10.3255 92.4457 9.87343 93.3559 9.19445 94.084C8.51547 94.812 7.63901 95.3264 6.67227 95.5642C7.81896 94.6747 8.59098 93.388 8.83626 91.9576L8.58379 91.8735C8.32988 92.7686 7.85747 93.5867 7.20903 94.254C6.5606 94.9213 5.75647 95.417 4.86896 95.6965C5.84455 94.8995 6.52582 93.7993 6.80452 92.5707H6.55205C6.24173 93.343 5.73627 94.0216 5.08512 94.5399C4.43396 95.0583 3.65941 95.3989 2.83722 95.5282C5.24164 94.4702 6.01106 91.9215 5.63837 89.3849C5.57826 88.9521 5.79466 88.7237 6.08319 88.892C7.033 89.4523 8.08212 89.8237 9.17287 89.986C10.4408 89.7842 11.6365 89.2629 12.6473 88.4712C13.7052 87.6657 20.9906 82.8569 23.6836 82.8569C23.7557 81.9793 23.1666 81.6547 22.854 80.5847C22.7513 80.1113 22.7574 79.6208 22.8719 79.1501C22.9865 78.6794 23.2065 78.2409 23.5153 77.8677C24.2606 76.6655 25.2344 74.3693 24.9459 73.3354C24.6574 72.3015 23.7437 71.8446 21.8322 71.1594C20.8343 70.7987 20.4616 70.5583 20.137 69.9571C19.3441 68.4274 18.3931 66.985 17.2998 65.6532C17.1974 65.5062 17.1291 65.3381 17.1 65.1613C17.0709 64.9845 17.0816 64.8035 17.1315 64.6313L16.2659 64.7035C16.288 65.1869 16.4284 65.6575 16.6747 66.074C16.9993 66.627 19.0791 68.9593 19.7884 70.3419C20.2552 70.92 20.8892 71.3399 21.6037 71.5441C22.806 72.0129 24.441 72.4337 24.441 73.5758C24.441 74.7179 22.842 77.3027 22.4573 78.0721C22.1249 78.7807 22.0321 79.5782 22.1928 80.3443C22.3707 81.0175 22.5875 81.6798 22.842 82.3279C21.2551 82.5804 16.9752 84.7323 12.6112 87.6777C10.5977 88.0784 8.54079 88.2158 6.49194 88.0865C5.28973 87.9422 5.04929 88.6876 5.16951 89.4811C5.37389 90.8396 5.27771 95.1555 0.0480885 95.0954L0 95.4561C3.16652 96.4075 6.52534 96.5235 9.74994 95.7927C8.4304 96.6997 7.34976 97.9123 6.60014 99.3272C7.20788 98.9827 7.87901 98.7646 8.57318 98.6861C9.26736 98.6076 9.97024 98.6702 10.6396 98.8703C11.8418 100.698 13.8375 101.467 15.22 100.553C16.0736 100 16.5304 100.481 17.2998 100.553C17.5741 100.579 17.8503 100.532 18.1011 100.418C18.352 100.304 18.5688 100.127 18.7305 99.9042C19.031 99.5556 20.8704 97.031 23.5393 97.055C23.2868 99.76 23.2628 103.787 23.2628 104.725C23.0391 106.54 22.4677 108.296 21.5797 109.895C19.1031 113.501 18.9949 122.602 19.1753 125.932C15.4105 129.605 11.2354 132.832 6.73238 135.55C5.92671 135.928 5.2665 136.559 4.85206 137.347C4.43762 138.134 4.29159 139.036 4.43616 139.914C4.60672 140.692 5.0605 141.379 5.70929 141.841C6.35807 142.303 7.15552 142.507 7.94662 142.414L25.3306 141.729L25.1142 140.274C25.1142 140.274 15.3162 141.537 12.2265 140.274L15.6408 140.082V139.661C14.2703 139.661 12.3347 139.926 11.1685 138.7C12.6593 138.447 23.383 137.702 25.006 137.594C25.006 137.93 25.006 138.231 25.006 138.579C24.963 140.908 25.3798 143.222 26.2324 145.39C27.0851 147.557 28.3569 149.535 29.9751 151.21C31.5932 152.885 33.5259 154.224 35.6624 155.151C37.7989 156.078 40.0973 156.575 42.426 156.613C44.7548 156.575 47.0532 156.078 49.1897 155.151C51.3262 154.224 53.2589 152.885 54.877 151.21C56.4952 149.535 57.767 147.557 58.6197 145.39C59.4723 143.222 59.8891 140.908 59.8461 138.579C59.8461 138.026 59.8461 137.485 59.7619 136.944C64.691 135.502 65.1719 134.841 67.7687 130.933C67.9009 130.729 67.7687 130.537 67.3719 130.717C66.0621 131.204 64.6425 131.316 63.2724 131.042C63.7893 130.645 64.679 129.839 64.9194 129.587L64.8353 129.431C63.2097 129.728 61.532 129.523 60.0264 128.841C62.3347 128.577 64.9315 126.75 65.2921 125.583C62.6352 125.656 61.3489 125.355 59.7138 123.924C61.7078 123.772 63.6484 123.207 65.4123 122.265C63.3085 121.905 59.7379 119.861 59.1488 117C61.7696 118.034 64.9675 118.947 67.3479 118.202C66.0543 117.77 64.8795 117.042 63.9173 116.075C62.955 115.109 62.2319 113.931 61.8057 112.636C63.5609 114.102 65.9173 115.268 68.0572 114.631C65.5446 113.429 63.2484 111.734 62.5751 109.281C64.3884 110.383 66.4646 110.977 68.5862 111.001C66.5665 110.568 65.244 108.452 64.7752 106.865C65.5827 107.223 66.4143 107.524 67.2637 107.767C66.5228 107.013 65.9564 106.106 65.6047 105.11L68.0091 105.795C67.6124 104.052 66.3741 100.914 67.2157 99.2911C67.2157 99.2911 67.432 95.5522 66.6747 95.5282C66.6747 94.0495 66.6747 91.092 67.4801 91.092L67.3479 88.0023C67.8528 87.5936 67.4801 84.2394 67.4801 82.3519C63.573 83.3137 58.3433 89.3368 55.6504 91.7653C54.7487 92.5707 53.246 93.9292 51.3344 95.3719C51.2187 94.142 50.8459 92.9502 50.2404 91.8735C49.8076 90.9478 48.0163 87.1608 47.271 85.5618C47.8961 84.8766 48.4732 83.2776 46.9464 82.6765C47.15 82.3234 47.21 81.9053 47.1137 81.5091C47.0175 81.1129 46.7724 80.769 46.4294 80.5486C47.1988 79.4546 46.8622 76.7617 45.2272 75.4032V75.9081C46.3453 77.0141 47.0065 79.5508 45.7562 80.6087ZM11.3248 88.5674C11.0049 88.7702 10.6715 88.9509 10.327 89.1084C9.84495 88.9812 9.37755 88.8039 8.93243 88.5794L11.3248 88.5674ZM8.00673 88.5674C8.60244 88.9558 9.25564 89.2479 9.94229 89.433C9.41037 89.5694 8.85125 89.5575 8.32563 89.3985C7.80001 89.2396 7.32798 88.9396 6.96081 88.5313L8.00673 88.5674ZM62.8877 116.002C62.9237 116.536 62.8995 117.072 62.8156 117.601L62.2746 117.445C62.5582 117.001 62.7655 116.514 62.8877 116.002V116.002ZM33.9144 97.0911C35.1506 96.9897 36.393 96.9897 37.6292 97.0911C38.4004 96.9462 39.1432 96.6783 39.8293 96.2976C40.5386 97.6922 42.3058 99.1709 43.2315 100.349C41.4889 101.16 39.6168 101.656 37.7014 101.816C34.9884 107.152 31.664 112.155 27.7951 116.723C28.0805 114.816 28.1169 112.881 27.9033 110.965C27.8792 110.589 27.9306 110.213 28.0545 109.858C28.1784 109.502 28.3723 109.176 28.6247 108.897C29.6259 107.264 30.3947 105.5 30.9089 103.655C31.2575 102.381 33.3614 98.4015 33.9144 97.0911ZM30.7045 98.7982C30.3133 98.1971 29.8621 97.6372 29.358 97.1271C29.7485 97.1916 30.1017 97.3976 30.35 97.7058C30.5984 98.014 30.7245 98.4029 30.7045 98.7982V98.7982ZM28.3001 97.3435C29.1957 98.1683 29.9438 99.14 30.5121 100.217C29.6225 99.3753 27.5547 97.1752 26.5929 96.9468C26.8893 96.85 27.207 96.8392 27.5092 96.9159C27.8114 96.9925 28.0856 97.1533 28.3001 97.3796V97.3435ZM27.4224 97.9206C28.7548 99.0397 29.7324 100.523 30.2356 102.188H30.1635C29.7187 101.431 26.7252 98.2813 25.2585 97.8124C25.9197 97.1872 26.5208 97.1872 27.4224 97.9206V97.9206ZM20.2813 124.369C20.011 124.533 19.7537 124.718 19.5119 124.922C19.4645 124.463 19.5711 124.002 19.8148 123.61C20.0586 123.218 20.4257 122.919 20.8584 122.758V122.482C20.5939 122.59 19.8605 122.927 19.596 123.071C19.588 122.628 19.6945 122.191 19.9051 121.801C20.1157 121.411 20.4234 121.083 20.7983 120.847L20.7141 120.715L19.6321 121.159C19.6144 120.722 19.7213 120.288 19.9406 119.91C20.1598 119.531 20.4823 119.222 20.8704 119.019L20.7742 118.815C20.4692 119.012 20.1243 119.139 19.7644 119.188C19.7644 119.007 19.8726 118.31 19.9447 117.985C20.2516 117.467 20.7027 117.049 21.2431 116.783V116.663C20.8307 116.816 20.4291 116.997 20.0409 117.204L20.2092 116.122C20.6357 115.546 21.1559 115.047 21.748 114.643C21.2765 114.773 20.8268 114.971 20.4136 115.232C20.4136 115.076 20.654 114.15 20.7382 113.802C21.1229 113.501 21.6398 113.032 22.2169 112.6C22.0365 112.6 21.2311 113.008 20.9065 113.141C20.9636 112.698 21.1254 112.275 21.3783 111.907C21.6313 111.539 21.9682 111.237 22.3611 111.025C22.1085 111.015 21.8583 111.078 21.6398 111.205C21.736 111.073 22.842 109.233 23.1306 108.801C23.0664 107.689 23.3253 106.583 23.8759 105.615C23.8759 103.21 23.9721 98.9906 24.9339 98.2211C26.1825 98.6701 27.2921 99.4377 28.1526 100.448C29.013 101.458 29.5943 102.676 29.8389 103.98C29.4505 103.762 29.1141 103.463 28.8531 103.102C28.2037 102.012 27.3506 101.057 26.3405 100.289L26.2803 100.481C26.3405 100.481 26.617 100.878 27.0017 101.263V101.696C27.9125 102.41 28.6074 103.363 29.0094 104.449C29.0064 104.62 29.0402 104.791 29.1087 104.948C29.1771 105.106 29.2785 105.247 29.4061 105.362L29.3099 105.615C28.2931 104.749 27.4523 103.696 26.8334 102.513L26.7733 103.643C27.285 103.984 27.7224 104.425 28.0592 104.939C28.396 105.454 28.6251 106.031 28.7329 106.637C28.7329 106.877 28.7329 106.925 28.5165 106.793C28.3001 106.661 27.747 105.819 27.5787 105.591C26.9185 105.139 26.1302 104.911 25.3306 104.942V105.11C27.4465 106.192 27.8673 107.514 27.9154 107.767C27.9634 108.019 27.8432 108.067 27.711 107.983C26.8411 107.371 26.0173 106.696 25.2464 105.963L25.1022 106.06C25.6792 106.949 27.8432 108.656 27.206 109.342L25.4989 107.935C25.3066 107.755 24.8738 107.658 25.3066 108.151C26.5088 109.51 27.0979 110.351 26.8574 110.736C26.7492 110.916 26.0159 110.363 25.547 109.835C25.0706 109.256 24.4539 108.809 23.7557 108.536C24.1189 109.136 24.592 109.662 25.1503 110.087C25.8951 110.588 26.4795 111.294 26.8334 112.119C26.8935 112.215 26.7612 112.648 26.7612 112.648C25.8115 111.902 25.006 111.037 24.9459 110.424H24.7295C24.6688 110.761 24.6287 111.103 24.6093 111.445C25.2143 111.796 25.7293 112.283 26.1133 112.867C26.4973 113.451 26.7398 114.117 26.8213 114.812C25.9918 114.162 24.4169 112.407 24.5732 112.011L24.441 111.938C24.3147 112.327 24.2458 112.732 24.2366 113.141C25.3567 113.893 26.2009 114.991 26.641 116.266C26.641 116.266 26.641 116.519 26.5328 116.483H26.4366C25.4186 115.917 24.6126 115.035 24.1404 113.97H24.0442L23.912 114.992C25.0453 115.795 25.8485 116.983 26.1721 118.334L26.112 118.418C25.5587 118.167 25.061 117.808 24.6482 117.362C24.2353 116.916 23.9155 116.393 23.7076 115.822L23.5273 117.024C23.9814 117.327 24.3699 117.718 24.6694 118.175C24.9689 118.631 25.1733 119.143 25.2705 119.681L25.1142 119.861C24.7037 119.675 24.3447 119.391 24.0682 119.035C23.7917 118.679 23.606 118.261 23.5273 117.817H23.3469C23.3895 118.261 23.3895 118.708 23.3469 119.152C23.5482 119.253 23.7572 119.337 23.9721 119.404C23.9721 119.621 24.2486 120.149 24.465 120.462L23.8519 121.123C23.7392 121.025 23.6495 120.902 23.5893 120.765C23.529 120.628 23.4997 120.48 23.5032 120.33L23.1666 120.077V120.979L23.7076 121.316C22.301 122.806 20.8824 124.237 19.4638 125.583C19.584 125.451 20.0288 124.718 20.3534 124.55L20.2813 124.369ZM13.3085 137.798C12.7194 137.798 11.962 137.606 12.4309 136.331L13.573 135.646C13.3092 136.318 13.2183 137.046 13.3085 137.762V137.798ZM42.2938 155.567C37.7925 155.448 33.5154 153.576 30.3736 150.35C27.2318 147.125 25.4737 142.8 25.4737 138.297C25.4737 133.794 27.2318 129.469 30.3736 126.243C33.5154 123.017 37.7925 121.146 42.2938 121.027C46.7951 121.146 51.0722 123.017 54.214 126.243C57.3558 129.469 59.1139 133.794 59.1139 138.297C59.1139 142.8 57.3558 147.125 54.214 150.35C51.0722 153.576 46.7951 155.448 42.2938 155.567ZM59.2931 124.393C59.1127 124.61 58.7521 125.139 58.716 125.187C58.6799 125.235 58.5958 125.187 58.6559 125.03C58.716 124.874 59.1608 123.997 59.2931 123.828H59.4013L59.2811 124.141L59.2931 124.393ZM62.0341 122.782C62.0341 122.65 62.4308 121.809 62.7194 121.724C62.8035 122.013 62.4068 122.626 62.2625 122.842C62.1183 123.059 61.986 122.927 62.0341 122.782ZM61.3128 120.883C61.3202 120.919 61.3202 120.955 61.3128 120.991C61.2121 121.391 61.0323 121.767 60.7838 122.097L60.6997 122.241L60.3029 123.131C60.1707 123.131 59.9783 123.131 59.9663 122.999C59.9062 122.626 60.9401 121.424 61.3128 120.883ZM60.5314 120.101C59.7024 121.766 58.6989 123.338 57.5378 124.79H57.4296C57.7182 124.045 59.7499 120.282 60.0264 119.584C60.1106 119.657 60.4111 119.993 60.4833 120.101H60.5314ZM59.3291 118.575L59.4854 118.815C59.1083 119.281 58.707 119.726 58.2832 120.149C58.1149 120.318 58.0548 120.342 58.0548 120.558C57.7231 121.953 57.0683 123.25 56.1433 124.345L55.47 123.84C55.9028 123.359 57.1291 120.354 57.2493 120.234C57.2558 119.523 57.2197 118.812 57.1411 118.106C57.0449 117.529 56.6963 117.829 56.7324 118.106C56.7684 118.382 57.3215 119.933 54.6646 123.407L54.2799 123.179C54.5023 122.545 54.7674 121.926 55.0733 121.328C56.8766 117.925 56.4679 113.85 54.8569 112.107C54.7817 112.008 54.6762 111.937 54.5568 111.905C54.4373 111.872 54.3104 111.88 54.1957 111.926C53.8631 111.557 53.4513 111.268 52.9912 111.081C52.5311 110.894 52.0346 110.813 51.5388 110.844C51.4547 110.844 51.1902 111.217 51.623 111.169C52.8252 111.025 53.3662 111.998 53.8951 112.371C53.8951 112.515 53.8951 112.672 54.1476 113.032C56.9728 116.531 54.8689 121.087 53.3662 122.518C53.2219 122.662 52.9935 122.866 52.7771 122.602C52.5607 122.338 52.6448 122.205 52.7771 122.073C53.4975 121.377 54.0397 120.517 54.3577 119.567C54.6758 118.617 54.7604 117.605 54.6044 116.615C54.6044 116.35 54.2799 116.326 54.3039 116.615C54.3304 117.342 54.1777 118.065 53.8591 118.719C53.9169 117.427 53.5309 116.154 52.7651 115.112C52.4525 114.836 52.5487 115.473 52.6088 115.773C52.4405 115.617 52.0558 115.533 52.0678 115.701C51.8153 115.473 51.106 115.557 52.0678 116.218C52.5508 116.847 52.8778 117.581 53.022 118.361C53.1662 119.14 53.1234 119.943 52.8973 120.702C52.5512 121.309 52.0018 121.773 51.3465 122.013L51.0699 121.664C51.4248 121.161 51.6647 120.585 51.7728 119.979C51.8808 119.372 51.8543 118.749 51.6951 118.154C51.623 117.865 51.1421 117.733 51.2623 118.154C51.3851 118.782 51.3384 119.432 51.1271 120.036C50.9159 120.64 50.5476 121.177 50.0601 121.592C49.9138 121.609 49.7665 121.569 49.6497 121.479C49.533 121.389 49.4559 121.257 49.4349 121.111C49.7278 120.833 49.9242 120.468 49.9955 120.07C50.0669 119.672 50.0095 119.262 49.8317 118.899C49.8317 118.815 49.4229 118.899 49.447 119.043C49.4548 119.283 49.4117 119.522 49.3205 119.743C49.2293 119.965 49.0921 120.165 48.918 120.33C48.3529 120.967 47.848 121.364 47.1267 121.099C46.4054 120.835 46.5977 119.813 47.1267 119.356C47.2797 119.193 47.3649 118.978 47.3649 118.755C47.3649 118.532 47.2797 118.317 47.1267 118.154C46.9584 117.937 46.742 117.998 46.6819 118.154C46.4892 118.643 46.2601 119.117 45.9966 119.572C45.7263 119.895 45.3902 120.157 45.0108 120.339C44.6314 120.521 44.2175 120.621 43.7966 120.63C43.472 120.63 42.943 120.57 42.5944 120.57C42.2457 120.57 42.1375 119.669 42.6665 119.067L42.0774 118.659C41.6415 119.567 40.9014 120.294 39.9856 120.715C39.5768 120.715 39.1801 120.847 38.7833 120.931C39.6923 120.195 40.5443 119.391 41.332 118.526C41.5364 118.286 41.8129 118.094 41.5484 117.517C41.2839 116.94 41.0315 117.408 40.9113 117.697C40.1674 119.184 38.9837 120.405 37.521 121.195C36.8849 121.381 36.2623 121.61 35.6576 121.881H35.8259L34.9603 122.205C31.6853 123.824 28.9899 126.415 27.2421 129.623C26.0839 130.722 25.2518 132.12 24.8377 133.662C24.7656 134.239 25.1382 134.48 25.4869 134.275C25.3229 134.977 25.2024 135.687 25.1262 136.403C24.8374 136.723 24.4376 136.921 24.0082 136.956C23.798 136.953 23.5948 136.88 23.4298 136.75C23.2648 136.619 23.147 136.439 23.0945 136.235C23.0408 135.928 23.068 135.613 23.1734 135.32C23.2788 135.027 23.4588 134.766 23.6956 134.564L23.4912 134.456C22.782 135.132 22.3529 136.051 22.289 137.029L20.7502 137.149C20.5995 136.548 20.6415 135.914 20.8701 135.338C21.0988 134.763 21.5026 134.273 22.0245 133.939L21.9043 133.783C21.2767 134.133 20.7426 134.63 20.3472 135.23C19.9517 135.831 19.7065 136.518 19.6321 137.233L18.6824 137.305C18.49 135.778 18.8867 133.698 20.642 132.833L20.5218 132.64C19.6037 132.91 18.8179 133.51 18.3162 134.325C17.8145 135.14 17.6323 136.111 17.8048 137.053C17.5645 137.33 17.257 137.541 16.9117 137.665C16.5664 137.789 16.195 137.823 15.8331 137.762C15.7129 137.69 15.4484 137.257 14.9435 137.678C14.4386 138.098 13.7413 137.678 13.8855 136.476C13.9484 135.936 14.2025 135.437 14.6017 135.069C15.0008 134.7 15.5188 134.487 16.0615 134.468C16.855 132.063 18.9589 131.883 20.1851 131.607C19.7042 129.984 22.5174 127.844 23.1907 127.339C25.2323 125.977 27.1913 124.496 29.0575 122.903C30.5762 121.252 31.7348 119.303 32.4597 117.18C33.1575 116.409 33.7776 115.572 34.3111 114.679C34.1308 116.663 34.9363 117.649 35.9461 118.046L36.0663 117.697C33.4335 116.098 35.8019 113.429 37.2686 111.686L36.7997 111.289L37.2686 110.604C37.4729 110.808 38.0019 111.53 38.3626 110.315C37.7374 109.822 37.7134 109.558 38.3626 109.005C38.579 109.822 39.0599 109.81 39.0599 109.81C39.0599 109.81 39.9615 109.089 39.3243 109.005C38.6872 108.921 38.7232 107.719 39.9014 106.432C39.7331 107.827 40.214 108.945 40.4785 108.728C40.9473 108.32 41.2719 107.827 40.7189 107.827C40.1659 107.827 40.4304 106.264 41.1397 105.35C41.4763 104.917 41.7769 105.23 41.7769 105.446C41.6464 106.172 41.606 106.911 41.6566 107.646L42.0774 107.983C42.1433 106.988 42.3919 106.014 42.8108 105.11C43.0272 104.701 43.4239 104.641 43.4239 104.917C43.4239 105.194 43.3277 105.999 43.3277 105.999H43.8927C44.02 105.391 44.2606 104.812 44.602 104.292L45.2272 104.148C45.1551 104.978 45.9365 104.833 45.8524 103.872C47.1628 103.595 50.7454 101.467 52.9815 100C57.2133 97.1872 60.8199 93.1238 63.1161 91.5849C61.4808 93.7483 59.6541 95.7601 57.6581 97.596C56.6886 98.5017 56.0248 99.6865 55.7586 100.986C55.7618 100.431 55.802 99.8769 55.8788 99.3272C55.9389 99.0627 55.8788 98.8343 55.5422 98.9304C54.2782 99.6979 53.0727 100.558 51.9355 101.503C51.3854 101.882 50.9396 102.394 50.6391 102.99C50.3387 103.587 50.1933 104.25 50.2164 104.917C50.2164 105.338 50.529 105.182 50.529 104.917C50.5227 104.315 50.718 103.727 51.084 103.248C51.4499 102.768 51.9654 102.425 52.5487 102.273C52.9485 102.586 53.4481 102.744 53.9553 102.717C54.3069 102.739 54.6482 102.845 54.9498 103.027C55.2513 103.209 55.5041 103.462 55.6864 103.763C55.9149 104.088 56.2875 104.016 56.2755 103.583C56.1914 101.082 56.8526 98.6419 58.6078 97.5719C58.4586 98.2217 58.3502 98.8802 58.2832 99.5436C57.6741 100.282 57.225 101.139 56.9642 102.059C56.7035 102.98 56.6368 103.945 56.7684 104.893C56.7684 105.158 56.9969 105.11 57.069 104.893C57.5739 103.463 58.4034 101.287 60.0024 100.782C59.6808 101.362 59.519 102.018 59.5335 102.681C59.1409 102.88 58.7945 103.16 58.517 103.502C58.2394 103.843 58.0369 104.24 57.9226 104.665C57.5859 104.665 57.2854 106.036 57.2854 106.733C57.2854 106.54 56.9728 105.687 56.9488 105.531C56.9247 105.374 56.8406 105.182 56.6242 105.531C56.4078 105.879 55.9149 107.069 56.1793 107.502C57.0503 108.967 57.8215 110.49 58.4876 112.059C58.9388 113.806 58.9676 115.636 58.5718 117.396C58.4996 117.685 58.3674 117.577 58.2111 117.3C58.0548 117.024 57.4056 116.23 57.1892 116.302C57.3455 116.615 57.8384 118.502 57.8865 118.707C57.9346 118.911 57.9827 119.031 58.139 118.983C58.2952 118.935 58.5477 119.152 58.6319 119.104C58.716 119.055 59.0647 118.743 59.245 118.575H59.3291ZM25.1262 125.463C26.3284 124.261 30.5121 119.657 31.3777 118.49C30.1057 121.458 27.8748 123.913 25.0421 125.463H25.1262ZM64.9194 90.6232C65.0783 91.2733 65.0191 91.9575 64.7511 92.5707C64.5828 92.5707 64.3424 92.4145 64.3063 92.9795C64.1175 93.4776 63.8231 93.9289 63.4433 94.3025C63.0635 94.676 62.6074 94.9629 62.1063 95.1435C62.4477 94.2595 63.1024 93.532 63.9456 93.0997C63.8612 92.6372 63.9077 92.1603 64.0797 91.7227C64.2518 91.2852 64.5426 90.9043 64.9194 90.6232V90.6232ZM55.422 101.215C55.422 101.575 55.5302 102.321 55.6143 102.693C55.3979 102.477 54.4121 101.852 54.4121 101.852L55.422 101.215ZM54.0033 101.551C53.6908 101.443 53.0055 101.804 52.5968 101.72C53.0055 101.467 55.0012 100.169 55.3378 100.024V100.746C55.3017 100.842 54.1717 101.443 53.9913 101.551H54.0033ZM60.0144 116.675L59.3772 116.423C59.7288 115.159 59.9978 113.874 60.1827 112.576C60.3665 113.943 60.2972 115.333 59.9783 116.675H60.0144ZM61.2166 117.048L60.6275 116.819C61.0297 115.995 61.3091 115.116 61.4571 114.211C61.5036 115.168 61.394 116.126 61.1325 117.048H61.2166ZM63.1642 112.624C61.428 111.808 59.833 110.72 58.4395 109.402C58.596 109.28 58.7174 109.119 58.7914 108.936C58.8653 108.752 58.8891 108.552 58.8603 108.356C59.81 110.003 62.3707 111.866 63.08 112.624H63.1642ZM62.6713 111.229C59.4614 108.224 60.2669 102.814 62.9117 100.602C60.904 105.302 61.3849 109.269 62.5871 111.229H62.6713ZM65.6768 100.65C65.4852 100.275 65.1613 99.9857 64.7681 99.8368C64.3748 99.688 63.9403 99.6906 63.5489 99.8441C64.3063 98.5818 66.0375 98.6419 65.5927 100.65H65.6768ZM53.4744 94.3861C57.634 90.9478 62.9839 85.5378 66.6025 84.1913C62.2625 87.5381 58.135 91.1518 54.2438 95.0112C52.9521 96.242 51.5608 97.3639 50.0841 98.3654L50.3005 98.702C52.722 97.1535 55.0356 95.4425 57.2253 93.5806C59.5696 91.4647 64.4385 86.728 66.6626 86.3673C64.15 87.834 59.9423 91.9336 55.47 96.4419C50.8835 100.997 45.0821 104.136 38.7593 105.482C36.1866 111.494 24.7896 127.784 10.0866 136.956L9.61769 136.415L11.5533 135.009L11.2647 134.648C10.3892 135.32 9.43175 135.877 8.41548 136.307L8.47559 136.596C8.97389 136.724 9.41154 137.022 9.71245 137.44C10.0134 137.857 10.1585 138.367 10.1226 138.88C10.1355 139.208 10.0834 139.535 9.96933 139.843C9.85528 140.15 9.68152 140.432 9.45806 140.672C9.23459 140.913 8.96583 141.106 8.66724 141.242C8.36864 141.378 8.04611 141.454 7.7182 141.465C7.39259 141.493 7.0647 141.451 6.75692 141.341C6.44914 141.231 6.16871 141.056 5.93476 140.827C5.70082 140.599 5.51886 140.323 5.40132 140.018C5.28378 139.713 5.23341 139.386 5.25366 139.06C5.2341 138.393 5.4134 137.735 5.76875 137.17C6.1241 136.605 6.63947 136.158 7.24934 135.886C15.0156 131.907 31.6903 116.531 38.1462 102.225C42.1495 101.888 49.4229 97.7282 53.4744 94.3861ZM49.7235 95.7806C49.3027 95.5282 45.5398 94.2779 45.119 94.1937C45.4151 94.4836 45.696 94.7886 45.9605 95.1074C47.3118 95.2163 48.6159 95.6538 49.7595 96.3818L49.0142 96.8506C48.1577 96.4887 47.2829 96.1716 46.3933 95.9009L47.0065 96.7544L48.6415 97.067V97.2473C47.1164 98.3017 45.5081 99.2305 43.8326 100.024C43.9408 99.6999 44.2654 98.8222 44.3977 98.5337C44.5299 98.2452 44.3015 97.9326 44.0971 98.3534C43.8927 98.7742 43.6523 99.3632 43.484 99.5556L43.1113 99.0747C43.0837 98.2248 43.3142 97.3865 43.7725 96.6703L43.484 96.4539C43.0779 97.0129 42.7653 97.6341 42.5583 98.2933C42.5052 97.1433 42.7539 95.9994 43.2796 94.9752C43.4479 94.8069 43.2796 94.5063 43.0512 94.7588C42.7073 95.1193 42.4122 95.5235 42.1736 95.961C42.2713 95.4636 42.4728 94.9924 42.7648 94.5781C43.0569 94.1638 43.4331 93.8157 43.8687 93.5566C44.0927 93.4618 44.3388 93.4318 44.579 93.4701C44.8191 93.5083 45.0438 93.6133 45.2272 93.773C45.8927 93.7523 46.5584 93.8087 47.2109 93.9413C48.2229 94.2863 49.1757 94.7851 50.036 95.42C50.4929 95.7205 50.1803 96.0572 49.7235 95.7806ZM49.8557 94.1336C49.4067 94.1995 48.9482 94.137 48.5333 93.9533C47.3053 93.4017 45.9919 93.0642 44.6501 92.9555C44.4526 92.8159 44.2332 92.7103 44.0009 92.6429C45.065 92.3981 46.1708 92.3981 47.2349 92.6429C48.5453 92.9795 49.5792 93.4363 49.8557 94.1336ZM49.1945 92.4626L49.1344 92.6789C48.3289 92.4625 46.1769 91.8254 45.8043 91.7172C45.7318 91.5809 45.6222 91.4679 45.4881 91.3913C45.3541 91.3147 45.2011 91.2776 45.0469 91.2844V91.056C45.4899 91.112 45.9383 91.112 46.3813 91.056C47.431 91.2559 48.4047 91.7428 49.1945 92.4626V92.4626ZM48.365 90.8275C47.3091 90.8114 46.2908 90.4337 45.4797 89.7576C45.8163 89.8538 46.5737 89.9499 46.754 90.0221C46.9343 90.0942 48.0885 90.7073 48.365 90.8275V90.8275Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.6605 67.3243C30.617 67.2871 30.5615 67.2666 30.5042 67.2666C30.4469 67.2666 30.3915 67.2871 30.3479 67.3243C30.2758 67.4445 30.3479 67.5287 30.4321 67.6129C30.5163 67.697 30.6846 67.7211 30.7687 67.6129C30.8529 67.5047 30.7807 67.4686 30.6605 67.3243Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M37.1738 65.0877L38.2558 65.6046L38.4722 65.3041L37.3301 64.7871C37.27 64.9194 37.27 64.9795 37.1738 65.0877Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M29.8283 65.0273L29.5879 65.2077C29.8043 65.3159 30.4775 65.8088 30.7901 65.9651L30.9825 65.7607C30.6279 65.4717 30.2405 65.2256 29.8283 65.0273V65.0273Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.1973 67.6368L29.0027 68.286C29.2312 68.4663 29.4957 68.1898 29.3033 68.0455L28.3896 67.3242L28.1973 67.6368Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.0653 119.861C35.6776 119.808 35.3056 119.674 34.9739 119.467C34.6423 119.26 34.3586 118.984 34.1417 118.658C34.0456 118.502 33.9374 118.562 33.8532 118.658C33.769 118.755 33.8532 119.368 34.5144 119.861C34.9984 120.195 35.5931 120.329 36.1735 120.233C36.3057 120.125 36.2937 119.897 36.0653 119.861Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.8574 79.2255L29.4465 79.9588L29.6749 80.2353L29.9274 79.8747C29.6749 79.5501 29.4104 79.1894 29.1339 78.8047L28.8574 79.2255Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M35.1133 65.7248L36.063 66.1215C36.063 66.0254 36.1712 65.9292 36.2313 65.833L35.2575 65.3882L35.1133 65.7248Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.0568 72.9495L30.2372 72.7692C30.0419 72.533 29.8332 72.3082 29.612 72.096L29.2514 71.7593L28.7705 71.3506L28.5781 71.555L29.071 71.9637C29.4233 72.2678 29.7528 72.5972 30.0568 72.9495V72.9495Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M35.7676 64.4744C36.1162 64.6066 36.4649 64.7629 36.8015 64.9192L36.9578 64.6307L35.9239 64.1738L35.7676 64.4744Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M32.3533 62.2511C32.2451 62.2511 32.0408 62.3834 31.4517 61.9746L31.1992 62.1429C31.4749 62.4044 31.7726 62.6417 32.0889 62.8522V63.1768C32.5784 63.4696 33.0842 63.7345 33.6036 63.9703L33.7359 63.7058C34.2528 63.8741 34.7938 64.0785 35.3348 64.2829L35.5031 64.0064L33.8681 63.3331C33.3997 62.9239 32.8924 62.5615 32.3533 62.2511V62.2511Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M30.7866 78.5049C30.6703 78.3502 30.5619 78.1897 30.462 78.024L30.1013 77.3628L29.8008 77.7114L30.6063 78.7814L30.7866 78.5049Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M34.6234 81.0171C34.7195 80.9209 34.6234 80.8127 34.3469 80.6564C34.0704 80.5001 34.2867 80.8848 34.2387 80.8007C34.1906 80.7165 34.419 81.2215 34.6234 81.0171Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.5371 66.374L37.4508 66.8189C37.5109 66.7227 37.583 66.6265 37.6431 66.5183L36.6934 66.1216C36.6333 66.1216 36.5852 66.2779 36.5371 66.374Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M47.3177 100.505L47.1253 100.205C46.6445 100.477 46.1756 100.73 45.7188 100.962L45.851 101.287C46.3319 101.046 46.8849 100.782 47.3177 100.505Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M13.623 133.073C13.3946 133.265 13.3104 133.385 13.3825 133.505C13.4547 133.626 13.5028 133.614 13.8274 133.337C14.152 133.061 14.0918 132.988 14.0317 132.916C13.9716 132.844 13.8394 132.88 13.623 133.073Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M49.9885 98.8936L49.7841 98.5811C49.171 98.9898 48.5819 99.3745 47.9688 99.7833L48.1371 100.096C48.7622 99.663 49.3874 99.2783 49.9885 98.8936Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M12.2052 133.951C11.8686 134.215 11.8085 134.42 11.8806 134.516C11.9527 134.612 12.2292 134.516 12.5418 134.348C12.8544 134.179 12.9506 133.891 12.8784 133.747C12.8063 133.602 12.5538 133.699 12.2052 133.951Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.6277 71.1945C28.5223 71.1211 28.4219 71.0408 28.3271 70.9541L28.1348 71.1825L28.4113 71.3989L28.6277 71.1945Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M7.2843 137.604C7.24923 137.604 7.21559 137.618 7.19079 137.643C7.16599 137.668 7.15206 137.701 7.15206 137.736C7.15206 137.771 7.16599 137.805 7.19079 137.83C7.21559 137.855 7.24923 137.869 7.2843 137.869C7.75316 137.869 8.06574 138.722 7.84934 139.275C7.63294 139.828 7.1761 139.961 6.92364 139.852C6.67117 139.744 6.64713 140.009 6.70724 140.105C6.90223 140.294 7.15055 140.42 7.41892 140.465C7.68728 140.509 7.96287 140.471 8.20876 140.354C8.45465 140.238 8.65908 140.049 8.79467 139.813C8.93026 139.578 8.99053 139.306 8.9674 139.035C8.96859 138.824 8.9237 138.616 8.83589 138.425C8.74808 138.234 8.61948 138.064 8.4591 137.927C8.29872 137.791 8.11045 137.692 7.9075 137.636C7.70455 137.58 7.49184 137.569 7.2843 137.604V137.604Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M44.8271 97.5356C44.7761 97.5356 44.7272 97.5559 44.6911 97.592C44.655 97.6281 44.6348 97.677 44.6348 97.728C44.6348 97.779 44.655 97.8279 44.6911 97.864C44.7272 97.9001 44.7761 97.9204 44.8271 97.9204C44.8524 97.9204 44.8774 97.9154 44.9007 97.9057C44.9241 97.896 44.9453 97.8819 44.9631 97.864C44.981 97.8462 44.9952 97.8249 45.0048 97.8016C45.0145 97.7783 45.0195 97.7533 45.0195 97.728C45.0195 97.7027 45.0145 97.6777 45.0048 97.6544C44.9952 97.631 44.981 97.6099 44.9631 97.592C44.9453 97.5741 44.9241 97.56 44.9007 97.5503C44.8774 97.5406 44.8524 97.5356 44.8271 97.5356V97.5356Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M28.5767 69.2836C28.2642 69.1153 27.9396 68.9109 27.6029 68.7065L27.4707 68.9109C27.7757 69.1181 28.0929 69.3068 28.4204 69.476L28.5767 69.2836Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M45.1251 101.647L45.0048 101.323C44.7524 101.455 44.4999 101.563 44.2715 101.671L44.3917 101.996L45.1251 101.647Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M44.0882 93.9174C44.0281 93.8573 43.8838 93.9174 43.7876 94.0015C43.6915 94.0857 43.6554 94.254 43.7275 94.3141C43.7997 94.3742 43.9319 94.3141 44.0401 94.23C44.1483 94.1458 44.1603 93.9775 44.0882 93.9174Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M43.8986 95.9962C43.8385 96.1044 43.8385 96.2367 43.8986 96.2848C43.9587 96.3329 44.091 96.2848 44.1631 96.1646C44.2352 96.0443 44.2232 95.9241 44.1631 95.876C44.1119 95.8645 44.0584 95.87 44.0106 95.8917C43.9629 95.9134 43.9235 95.9501 43.8986 95.9962V95.9962Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M26.918 66.6263L27.8797 67.3837L28.0961 67.1192L27.1103 66.3618L26.918 66.6263Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M43.2847 102.452L43.1885 102.188L42.8398 102.32L42.9721 102.621L43.2847 102.452Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M41.9257 102.909V102.597L41.541 102.705V103.005L41.9257 102.909Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.066 31.7018C141.066 31.7619 141.066 31.9422 141.223 31.8821C141.379 31.822 141.367 32.1586 141.427 32.0865C141.458 32.0583 141.483 32.024 141.5 31.9857C141.517 31.9474 141.525 31.9059 141.525 31.864C141.525 31.8222 141.517 31.7807 141.5 31.7424C141.483 31.7041 141.458 31.6698 141.427 31.6416C141.223 31.4854 141.114 31.6416 141.066 31.7018Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M145.471 64.1736C145.529 64.1141 145.567 64.0391 145.582 63.9578C145.597 63.8766 145.588 63.7928 145.555 63.7168C145.555 63.6086 145.279 63.4883 145.147 63.6206C145.014 63.7528 145.147 63.9091 145.147 64.0414C145.147 64.1736 145.375 64.2578 145.471 64.1736Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M138.027 41.6328C138.018 41.6869 138.026 41.7426 138.049 41.7921C138.073 41.8417 138.112 41.8826 138.16 41.9093C138.268 41.9814 138.436 42.0175 138.472 41.9093C138.508 41.8011 138.376 41.6688 138.292 41.6087C138.208 41.5486 138.039 41.5246 138.027 41.6328Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M144.351 70.089C144.284 70.1394 144.238 70.2129 144.223 70.2951C144.207 70.3774 144.223 70.4624 144.267 70.5338C144.27 70.5785 144.283 70.6219 144.307 70.6601C144.33 70.6983 144.363 70.7303 144.401 70.7532C144.44 70.7761 144.483 70.7892 144.528 70.7916C144.573 70.7939 144.618 70.7853 144.658 70.7665C144.699 70.7477 144.735 70.7193 144.762 70.6837C144.789 70.6481 144.807 70.6064 144.815 70.5622C144.823 70.518 144.819 70.4726 144.805 70.43C144.792 70.3873 144.768 70.3487 144.735 70.3174C144.651 70.1371 144.471 70.0289 144.351 70.089Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M144.964 71.3635C144.748 71.3635 144.736 71.8444 145.108 71.8324C145.298 71.8147 145.481 71.752 145.642 71.6496C145.803 71.5471 145.938 71.4079 146.034 71.2433C146.271 70.6489 146.271 69.9863 146.034 69.3919C145.818 68.911 145.433 69.1755 145.553 69.488C145.72 69.9627 145.72 70.4801 145.553 70.9547C145.409 71.154 145.201 71.2982 144.964 71.3635V71.3635Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M147.753 73.4547C147.795 73.4543 147.836 73.4443 147.874 73.4253C147.912 73.4063 147.945 73.379 147.97 73.3453C147.996 73.3116 148.013 73.2726 148.022 73.2311C148.03 73.1896 148.028 73.1468 148.017 73.106C148.017 72.9257 147.801 72.6612 147.62 72.6732C147.44 72.6853 147.308 72.9377 147.344 73.1301C147.365 73.2223 147.418 73.3045 147.492 73.3634C147.566 73.4223 147.658 73.4545 147.753 73.4547V73.4547Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M143.648 70.6294C143.591 70.3431 143.647 70.0458 143.804 69.7999C143.932 69.6744 144.085 69.5766 144.252 69.5125C144.42 69.4484 144.599 69.4194 144.778 69.4272C145.006 69.4272 145.066 69.343 145.066 69.2589C145.066 69.1747 144.958 69.0425 144.682 68.9944C144.457 68.9684 144.229 69.0018 144.02 69.0912C143.812 69.1806 143.631 69.323 143.495 69.5041C143.359 69.6852 143.272 69.8988 143.244 70.1236C143.216 70.3484 143.248 70.5767 143.335 70.7857C143.361 70.816 143.397 70.8367 143.436 70.8445C143.475 70.8524 143.516 70.8469 143.552 70.829C143.588 70.8111 143.617 70.7817 143.634 70.7456C143.651 70.7094 143.656 70.6686 143.648 70.6294V70.6294Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.558 69.7282C142.558 69.644 142.654 69.62 142.714 69.6079C142.741 69.5995 142.765 69.5828 142.781 69.56C142.798 69.5373 142.807 69.5099 142.807 69.4817C142.807 69.4535 142.798 69.4261 142.781 69.4034C142.765 69.3806 142.741 69.3639 142.714 69.3555C142.606 69.3555 142.426 69.3555 142.354 69.3555C142.316 69.4172 142.297 69.4878 142.297 69.5598C142.297 69.6319 142.316 69.7025 142.354 69.7642C142.354 69.7642 142.558 69.8123 142.558 69.7282Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.255 64.2341C142.255 64.3783 142.327 64.739 142.255 64.8232C142.195 64.8839 142.161 64.966 142.161 65.0516C142.161 65.1371 142.195 65.2192 142.255 65.28C142.411 65.4964 142.652 65.1958 142.772 64.8833C142.824 64.7745 142.852 64.6553 142.852 64.5346C142.852 64.4139 142.824 64.2948 142.772 64.186C142.724 64.1614 142.683 64.1257 142.651 64.0818C142.62 64.0378 142.599 63.987 142.592 63.9335C142.568 63.7968 142.514 63.6673 142.432 63.5548C142.351 63.4423 142.245 63.3498 142.123 63.2843C141.81 63.1761 141.666 63.4166 141.786 63.5007C141.857 63.5311 141.918 63.5792 141.964 63.6403C142.011 63.7014 142.041 63.7734 142.051 63.8494C142.003 64.0417 142.207 64.1018 142.255 64.2341Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M164.268 76.0033C164.308 75.7768 164.4 75.5628 164.538 75.3789C164.676 75.195 164.855 75.0465 165.062 74.9454C165.483 74.7169 165.062 74.5486 164.785 74.6448C164.538 74.7716 164.33 74.9623 164.182 75.197C164.034 75.4317 163.952 75.7019 163.944 75.9793C163.932 76.2558 164.232 76.2197 164.268 76.0033Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M166.918 78.2157C167.195 78.2157 167.483 77.9993 167.435 77.6747C167.387 77.3501 167.027 77.3021 166.774 77.3261C166.624 77.3499 166.489 77.4307 166.397 77.5517C166.305 77.6726 166.264 77.8244 166.281 77.9753C166.329 78.2638 166.654 78.2518 166.918 78.2157Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M166.987 76.2924C167.239 76.4367 168.514 76.9656 168.838 77.1099C169.163 77.2542 169.343 77.4706 169.007 77.8433L168.37 77.5908C168.251 77.9313 168.08 78.2516 167.865 78.5405C167.708 78.7449 167.672 79.0094 167.925 79.1056L168.85 79.5023C169.037 79.547 169.233 79.5182 169.399 79.422C169.564 79.3257 169.687 79.1693 169.74 78.9854C169.993 78.4203 170.437 77.2542 170.558 76.9656C170.602 76.8183 170.592 76.6601 170.53 76.5192C170.469 76.3783 170.359 76.2638 170.221 76.1962C169.944 76.064 168.935 75.6913 168.935 75.6913L168.742 76.2563C168.406 76.1481 167.913 76.064 167.949 75.4388C167.985 74.8137 167.191 75.0782 167.035 75.6913C166.983 75.72 166.938 75.7614 166.906 75.8116C166.873 75.8618 166.854 75.9192 166.849 75.9789C166.844 76.0385 166.854 76.0984 166.878 76.1531C166.902 76.2078 166.94 76.2557 166.987 76.2924V76.2924Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M143.445 63.777C143.625 63.777 143.794 63.6447 143.842 63.4163C143.836 63.3539 143.813 63.2942 143.776 63.2441C143.738 63.1939 143.687 63.1552 143.629 63.1324C143.571 63.1096 143.507 63.1036 143.445 63.115C143.384 63.1264 143.326 63.1547 143.28 63.1969C143.234 63.2391 143.2 63.2934 143.183 63.3536C143.166 63.4139 143.166 63.4778 143.183 63.5381C143.2 63.5984 143.234 63.6527 143.28 63.6949C143.326 63.7371 143.383 63.7655 143.445 63.777V63.777Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.167 68.5974C141.167 68.8138 141.48 68.7657 141.564 68.6816C141.607 68.644 141.642 68.5979 141.667 68.5462C141.692 68.4945 141.706 68.4383 141.708 68.381C141.708 68.2488 141.48 67.9482 141.335 68.0083C141.191 68.0685 141.119 68.369 141.167 68.5974Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M139.013 67.9849C138.856 67.9849 138.82 68.1291 138.82 68.2614C138.794 68.5583 138.712 68.8478 138.58 69.1149C138.484 69.3313 138.376 69.1871 138.159 69.2231C138.109 69.2383 138.064 69.2658 138.027 69.303C137.991 69.3403 137.964 69.3861 137.95 69.4363C137.935 69.4865 137.934 69.5396 137.945 69.5905C137.956 69.6415 137.98 69.6888 138.015 69.7281C138.087 69.8002 138.303 69.8844 138.592 69.7281C138.891 69.3062 139.089 68.8206 139.169 68.3095C139.169 68.1291 139.157 67.9849 139.013 67.9849Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.191 65.4965C141.238 65.4825 141.279 65.4516 141.306 65.4095C141.333 65.3675 141.343 65.3172 141.335 65.2681C141.326 65.2191 141.299 65.1754 141.258 65.1463C141.218 65.1171 141.168 65.1048 141.119 65.1118C141.094 65.1173 141.072 65.1277 141.052 65.1424C141.032 65.1571 141.015 65.1758 141.003 65.1972C140.99 65.2186 140.983 65.2424 140.98 65.267C140.977 65.2916 140.979 65.3165 140.986 65.3402C140.995 65.3869 141.021 65.4287 141.059 65.4575C141.096 65.4864 141.143 65.5003 141.191 65.4965V65.4965Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M144.521 63.4652C144.906 63.6215 145.207 63.2849 144.702 62.9242C144.736 62.681 144.736 62.4341 144.702 62.1908C144.63 61.7821 144.293 61.9264 144.257 62.1908C144.227 62.5388 144.227 62.8888 144.257 63.2368C144.257 63.2368 144.269 63.357 144.521 63.4652Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.001 69.3918C140.942 69.5796 140.942 69.7811 141.001 69.9689C141.001 70.2093 141.338 70.1492 141.542 69.8607C141.747 69.5722 141.795 69.2836 141.711 69.2355C141.626 69.1874 141.122 69.1754 141.001 69.3918Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M139.09 66.1219C139.056 66.1576 139.037 66.205 139.037 66.2542C139.037 66.3034 139.056 66.3507 139.09 66.3864C139.106 66.4043 139.125 66.4187 139.147 66.4285C139.169 66.4383 139.192 66.4434 139.216 66.4434C139.24 66.4434 139.263 66.4383 139.285 66.4285C139.307 66.4187 139.326 66.4043 139.342 66.3864C139.36 66.3695 139.375 66.3491 139.385 66.3263C139.395 66.3036 139.4 66.279 139.4 66.2542C139.4 66.2293 139.395 66.2048 139.385 66.182C139.375 66.1593 139.36 66.1388 139.342 66.1219C139.307 66.0915 139.262 66.0747 139.216 66.0747C139.17 66.0747 139.125 66.0915 139.09 66.1219V66.1219Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M140.655 64.1143C140.655 63.97 140.655 63.7175 140.426 63.7776C140.198 63.8378 140.102 64.1143 140.102 64.3667C140.11 64.4736 140.14 64.5777 140.189 64.6728C140.239 64.7678 140.307 64.8518 140.39 64.9197C140.498 64.9919 140.679 64.9197 140.679 64.7875C140.658 64.5637 140.65 64.3389 140.655 64.1143V64.1143Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M139.865 69.1758C139.793 69.2719 139.937 69.6086 140.01 69.6086C140.082 69.6086 140.31 69.2599 140.274 69.1998C140.238 69.1397 139.913 69.1036 139.865 69.1758Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M173.499 103.499C173.343 103.499 173.211 103.571 173.211 103.655C173.211 103.739 173.343 103.823 173.499 103.823C173.656 103.823 173.788 103.751 173.788 103.655C173.788 103.559 173.656 103.499 173.499 103.499Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M182.337 83.7102C182.71 83.4698 182.746 82.0992 183.023 81.8107C183.431 82.0151 183.636 81.5342 183.467 81.426C183.095 81.1856 182.554 80.9932 182.121 80.7407C181.977 80.6566 181.929 81.1134 182.121 81.2336C182.297 81.3494 182.459 81.4868 182.602 81.6424C182.494 81.8588 182.445 82.7364 182.349 82.9288C182.169 83.3375 181.736 83.6741 180.895 83.1932L180.582 83.4938C181.003 83.6741 181.904 84.0829 182.109 84.131C182.161 84.1401 182.215 84.1327 182.262 84.1097C182.31 84.0867 182.349 84.0493 182.374 84.0028C182.4 83.9563 182.41 83.903 182.403 83.8505C182.396 83.798 182.373 83.7489 182.337 83.7102V83.7102Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M178.109 81.4377C178.158 81.4471 178.208 81.4455 178.256 81.4332C178.304 81.4209 178.349 81.3982 178.387 81.3666C178.425 81.335 178.456 81.2954 178.477 81.2505C178.498 81.2057 178.509 81.1567 178.509 81.1071C178.509 81.0575 178.498 81.0086 178.477 80.9637C178.456 80.9189 178.425 80.8793 178.387 80.8477C178.349 80.8161 178.304 80.7933 178.256 80.781C178.208 80.7687 178.158 80.7672 178.109 80.7765C178.032 80.7912 177.963 80.8323 177.913 80.8927C177.863 80.953 177.836 81.0288 177.836 81.1071C177.836 81.1854 177.863 81.2613 177.913 81.3216C177.963 81.3819 178.032 81.423 178.109 81.4377Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M179.133 82.1833C178.232 82.3036 178.268 82.6161 178.292 82.7724C178.316 82.9287 178.677 83.0609 179.121 82.7724C179.566 82.4839 180.324 81.991 179.891 81.2937C179.458 80.5964 179.602 80.1756 179.891 80.2598C180.179 80.344 180.251 80.0915 180.059 79.9352C179.867 79.7789 179.374 79.4543 179.133 79.6948C178.893 79.9352 179.061 80.5724 179.133 80.7647C179.302 81.1494 180.191 82.027 179.133 82.1833Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M180.923 82.3991C180.959 82.4148 180.997 82.4233 181.036 82.4239C181.074 82.4245 181.113 82.4173 181.149 82.4027C181.185 82.3881 181.217 82.3664 181.245 82.339C181.272 82.3115 181.293 82.2788 181.308 82.2429C181.319 82.2058 181.322 82.1668 181.318 82.1284C181.313 82.09 181.301 82.0529 181.282 82.0192C181.263 81.9856 181.237 81.9561 181.207 81.9326C181.176 81.909 181.141 81.8919 181.103 81.8822C181.068 81.8665 181.03 81.8581 180.991 81.8575C180.952 81.8568 180.914 81.864 180.878 81.8786C180.842 81.8932 180.809 81.9149 180.782 81.9424C180.755 81.9698 180.733 82.0025 180.719 82.0385C180.708 82.0756 180.705 82.1145 180.709 82.1529C180.713 82.1913 180.725 82.2285 180.745 82.2621C180.764 82.2957 180.789 82.3252 180.82 82.3488C180.851 82.3723 180.886 82.3894 180.923 82.3991V82.3991Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M171.916 80.1272C171.988 80.3075 172.638 80.3917 173.119 79.7185C173.371 79.3097 172.914 79.3337 172.878 79.466C172.824 79.5719 172.733 79.6545 172.623 79.6987C172.512 79.7429 172.389 79.7457 172.277 79.7064C171.976 79.5862 171.832 79.9469 171.916 80.1272Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M151.338 58.3435C151.529 58.43 151.685 58.5782 151.782 58.7642C151.768 58.9712 151.719 59.1743 151.638 59.3654C151.618 59.4189 151.616 59.4779 151.633 59.5325C151.651 59.5871 151.686 59.6342 151.734 59.6659C151.818 59.738 151.951 59.8102 152.143 59.6058C152.335 59.4014 152.444 59.2331 152.215 58.6681C152.084 58.3514 151.901 58.0589 151.674 57.8025C151.59 57.7063 151.446 57.5861 151.241 57.8626C151.037 58.1391 151.109 58.2353 151.338 58.3435Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M175.876 81.8104C176.177 81.9426 176.549 81.8104 176.441 81.4738C176.333 81.1371 176.934 80.3677 177.102 80.1994C177.271 80.0311 177.8 79.6704 177.379 79.1535C176.958 78.6365 176.549 79.1535 176.802 79.406C176.844 79.4515 176.876 79.5055 176.895 79.5643C176.914 79.6232 176.921 79.6855 176.914 79.747C176.907 79.8085 176.887 79.8679 176.855 79.9211C176.823 79.9742 176.781 80.0199 176.73 80.0552C176.597 80.1513 176.441 80.1634 176.393 80.512C176.345 80.8606 176.032 80.9809 175.756 81.1612C175.479 81.3415 175.588 81.6782 175.876 81.8104Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M183.399 83.1929C183.35 83.1928 183.303 83.2114 183.267 83.2449C183.232 83.2784 183.21 83.3243 183.207 83.3732C183.207 83.4242 183.227 83.4731 183.263 83.5092C183.299 83.5453 183.348 83.5656 183.399 83.5656C183.448 83.5625 183.494 83.5409 183.528 83.5051C183.561 83.4694 183.58 83.4222 183.58 83.3732C183.58 83.3495 183.575 83.3261 183.566 83.3042C183.557 83.2823 183.544 83.2624 183.527 83.2457C183.51 83.2289 183.49 83.2157 183.468 83.2066C183.447 83.1975 183.423 83.1929 183.399 83.1929V83.1929Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M172.979 78.9618C172.979 79.1662 173.207 79.1662 173.255 78.9618C173.379 78.6615 173.421 78.3337 173.375 78.012C173.279 77.6514 172.859 77.8077 172.943 78.0842C173.019 78.3705 173.031 78.6702 172.979 78.9618Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.193 56.5037C142.554 56.5879 142.999 56.8404 143.083 56.6961C143.167 56.5518 143.083 56.3234 142.398 56.2393L142.193 56.5037Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M66.8867 106.649C69.6398 109.462 76.8651 107.935 80.0389 99.796C80.7621 98.0187 81.6264 96.302 82.6237 94.6626C81.2042 96.3346 79.9595 98.1473 78.9088 100.073C76.8771 103.523 72.1404 108.524 66.8867 106.649Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M173.427 101.719C173.282 101.827 173.198 101.995 173.27 102.08C173.343 102.164 173.499 102.152 173.655 102.08C173.811 102.007 173.884 101.803 173.823 101.719C173.763 101.635 173.583 101.611 173.427 101.719Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.975 26.5571L141.711 26.7495C141.711 26.8216 141.795 27.0621 141.855 27.0861L142.144 26.7976L141.975 26.5571Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M78.9109 112.587C77.2278 122.072 71.5053 129.803 67.1172 133.025C78.5021 128.408 78.5382 118.442 78.9109 112.587Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M113.134 140.214C113.363 139.901 112.81 139.264 112.545 138.904C112.104 138.197 111.702 137.467 111.343 136.716C110.704 135.702 109.941 134.773 109.071 133.95C108.025 132.953 101.028 125.535 100.259 122.505C98.4794 123.143 94.6203 123.708 92.9492 124.91C97.6859 128.925 102.387 132.123 104.478 136.403C104.747 136.966 105.165 137.445 105.686 137.788C106.207 138.132 106.812 138.326 107.436 138.351C108.205 139.12 108.289 140.034 107.748 140.442C107.207 140.851 107.436 142.751 107.388 144.049C109.594 144.417 111.844 144.449 114.06 144.145C114.011 142.787 113.697 141.451 113.134 140.214Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M174.64 105.122C174.583 105.122 174.528 105.144 174.487 105.185C174.447 105.226 174.424 105.281 174.424 105.338C174.424 105.395 174.447 105.45 174.487 105.491C174.528 105.532 174.583 105.554 174.64 105.554C174.698 105.554 174.753 105.532 174.793 105.491C174.834 105.45 174.857 105.395 174.857 105.338C174.857 105.281 174.834 105.226 174.793 105.185C174.753 105.144 174.698 105.122 174.64 105.122V105.122Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M178.064 108.933C178.208 108.933 178.328 108.86 178.328 108.764C178.328 108.668 178.208 108.608 178.064 108.608C177.919 108.608 177.787 108.68 177.787 108.764C177.787 108.848 177.931 108.933 178.064 108.933Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M176.153 107.286C176.197 107.286 176.24 107.268 176.272 107.236C176.303 107.205 176.321 107.162 176.321 107.117C176.321 107.096 176.317 107.074 176.308 107.054C176.3 107.035 176.287 107.017 176.271 107.002C176.255 106.988 176.237 106.976 176.216 106.969C176.196 106.962 176.174 106.959 176.153 106.961C176.111 106.961 176.072 106.977 176.042 107.007C176.013 107.036 175.997 107.076 175.997 107.117C175.995 107.139 175.998 107.16 176.005 107.181C176.012 107.201 176.023 107.22 176.038 107.236C176.053 107.251 176.07 107.264 176.09 107.273C176.11 107.281 176.131 107.286 176.153 107.286V107.286Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M183.454 85.1289C183.839 85.4054 184.031 85.1289 184.139 84.9966C184.632 84.5638 184.343 84.4436 184.043 84.4076C184.026 84.2591 184.045 84.1088 184.097 83.9689C184.149 83.8289 184.234 83.7032 184.343 83.6021C184.476 83.6742 184.596 83.6021 185.065 83.1693C185.534 82.7365 185.546 82.2556 184.584 82.3397C184.531 82.7583 184.32 83.1409 183.995 83.4097C183.835 83.5808 183.724 83.7908 183.671 84.0187C183.618 84.2466 183.626 84.4843 183.694 84.7081C183.346 84.5278 183.069 84.8524 183.454 85.1289Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M143.202 29.839C143.298 29.839 143.395 29.7669 143.455 29.6346C143.515 29.5024 143.455 29.3341 143.455 29.298C143.455 29.2619 143.262 29.3701 143.214 29.5144C143.166 29.6587 143.118 29.8029 143.202 29.839Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.939 54.0995C142.148 54.2322 142.349 54.3767 142.541 54.5323C142.559 54.547 142.581 54.557 142.604 54.5613C142.627 54.5657 142.651 54.5642 142.674 54.5571C142.697 54.5499 142.717 54.5374 142.734 54.5205C142.75 54.5036 142.762 54.4828 142.769 54.4601C142.775 54.3999 142.765 54.339 142.74 54.284C142.714 54.229 142.675 54.1818 142.625 54.1476C142.517 54.1476 142.156 53.9913 142.024 53.9312L141.939 54.0995Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M144.164 27.5181C144.185 27.4979 144.202 27.4736 144.214 27.4467C144.225 27.4199 144.231 27.391 144.231 27.3618C144.231 27.3326 144.225 27.3037 144.214 27.2768C144.202 27.2499 144.185 27.2257 144.164 27.2055C144.068 27.1454 143.948 27.2055 143.876 27.3377C143.804 27.47 143.876 27.5902 143.876 27.6383C143.876 27.6864 144.104 27.6503 144.164 27.5181Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M144.387 43.5086C144.387 43.4124 144.291 43.2561 144.219 43.172C144.147 43.0878 144.015 43.0517 143.979 43.172C143.942 43.2922 143.979 43.3162 144.075 43.4124C144.171 43.5086 144.339 43.6048 144.387 43.5086Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.506 41.1161C142.506 41.0199 142.422 40.8636 142.35 40.7915C142.278 40.7194 142.145 40.6713 142.109 40.7915C142.073 40.9117 142.109 40.9478 142.206 41.044C142.302 41.1401 142.458 41.2123 142.506 41.1161Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.992 29.8874C142.011 29.9081 142.034 29.9247 142.06 29.936C142.086 29.9474 142.114 29.9532 142.142 29.9532C142.17 29.9532 142.198 29.9474 142.224 29.936C142.25 29.9247 142.273 29.9081 142.292 29.8874C142.292 29.7912 142.292 29.683 142.196 29.6109C142.178 29.5883 142.155 29.5701 142.129 29.5576C142.103 29.5451 142.075 29.5386 142.046 29.5386C142.017 29.5386 141.988 29.5451 141.962 29.5576C141.936 29.5701 141.914 29.5883 141.896 29.6109C141.859 29.707 141.859 29.8152 141.992 29.8874Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.624 30.0553C142.637 30.0813 142.656 30.1041 142.679 30.1222C142.702 30.1403 142.729 30.1532 142.757 30.16C142.786 30.1669 142.816 30.1675 142.844 30.1619C142.873 30.1562 142.9 30.1445 142.924 30.1274C142.951 30.1182 142.976 30.1035 142.997 30.0842C143.017 30.065 143.034 30.0416 143.045 30.0156C143.057 29.9896 143.062 29.9615 143.062 29.9332C143.062 29.9048 143.056 29.8768 143.044 29.8509C143.031 29.8261 143.013 29.8046 142.99 29.7878C142.968 29.771 142.942 29.7593 142.914 29.7536C142.887 29.7478 142.858 29.7482 142.831 29.7546C142.804 29.7611 142.778 29.7734 142.756 29.7908C142.624 29.8749 142.576 29.9711 142.624 30.0553Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.241 25.776C142.458 25.5596 142.698 25.4514 142.602 25.0186C142.506 24.5858 142.698 24.2372 142.494 23.6962C142.145 22.7825 140.943 21.5682 141.099 21.2917C141.256 21.0152 140.799 20.8229 140.811 21.1956C140.81 21.5515 140.884 21.9037 141.027 22.2295C141.027 22.6983 141.64 25.223 141.688 25.6918C141.736 26.1607 142.037 25.9804 142.241 25.776Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.417 38.8439C141.525 38.94 141.694 39.0603 141.754 38.9521C141.814 38.8439 141.657 38.6756 141.573 38.5914C141.489 38.5073 141.345 38.4592 141.309 38.5914C141.273 38.7236 141.321 38.7357 141.417 38.8439Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.243 51.4663C141.205 51.4979 141.177 51.54 141.163 51.5872C141.149 51.6345 141.149 51.685 141.163 51.7323C141.177 51.7797 141.205 51.8219 141.242 51.8536C141.28 51.8854 141.326 51.9054 141.376 51.9111C141.567 51.9259 141.754 51.9747 141.929 52.0554C142.025 52.1155 142.301 51.9472 142.157 51.8029C142.013 51.6587 141.76 51.6587 141.7 51.5024C141.68 51.4604 141.65 51.4245 141.611 51.3982C141.573 51.3718 141.528 51.356 141.482 51.3524C141.436 51.3487 141.389 51.3573 141.347 51.3773C141.306 51.3973 141.27 51.428 141.243 51.4663V51.4663Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M140.97 47.1144C141.186 47.2106 141.27 47.2106 141.342 47.1144C141.414 47.0182 141.342 46.91 141.15 46.8018C140.958 46.6936 140.849 46.6696 140.777 46.8018C140.705 46.9341 140.765 47.0182 140.97 47.1144Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M141.182 49.2906C141.11 49.3948 141.17 49.4909 141.362 49.5791C141.543 49.6633 141.603 49.6753 141.663 49.5791C141.723 49.4829 141.663 49.3747 141.518 49.3026C141.374 49.2305 141.23 49.2906 141.182 49.2906Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M142.25 47.6433C142.443 47.7275 142.503 47.7395 142.563 47.6433C142.623 47.5471 142.563 47.4149 142.406 47.3548C142.25 47.2947 142.13 47.2706 142.082 47.3548C142.034 47.4389 142.07 47.5591 142.25 47.6433Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M139.516 44.3857C139.709 44.5059 139.769 44.566 139.865 44.4939C139.961 44.4217 139.865 44.2775 139.721 44.1573C139.576 44.037 139.444 43.989 139.36 44.0731C139.276 44.1573 139.324 44.2534 139.516 44.3857Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M146.215 45.9363C146.215 45.8281 146.131 45.6477 146.047 45.5636C145.963 45.4794 145.818 45.4313 145.77 45.5636C145.722 45.6958 145.77 45.7199 145.891 45.8281C146.011 45.9363 146.167 46.0324 146.215 45.9363Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M147.174 47.2472C147.174 47.1511 147.09 46.9828 147.018 46.9106C146.946 46.8385 146.802 46.7904 146.765 46.9106C146.729 47.0309 146.765 47.0669 146.874 47.1631C146.982 47.2593 147.126 47.3314 147.174 47.2472Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M149.071 48.9781C149.131 48.8579 148.951 48.6415 148.855 48.5453C148.758 48.4491 148.578 48.377 148.53 48.5453C148.482 48.7136 148.53 48.7377 148.662 48.8699C148.794 49.0021 148.951 49.1103 149.071 48.9781Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M12.1298 168.309C12.1298 164.558 12.0577 163.993 9.80958 163.813L8.91994 163.741C8.70354 163.596 8.77568 162.959 8.99207 162.851C10.9877 162.923 12.202 162.959 13.6326 162.959C15.0632 162.959 16.2414 162.959 18.0207 162.851C18.2371 162.959 18.3092 163.596 18.0928 163.741L17.2392 163.813C15.1354 163.993 15.0632 164.558 15.0632 168.309V180.74C15.0632 182.988 15.1714 183.926 15.8086 184.599C16.2053 184.996 16.8786 185.417 19.7038 185.417C22.7334 185.417 23.4907 185.272 24.0558 184.96C25.1795 184.036 26.0141 182.81 26.4602 181.425C26.6766 181.245 27.3619 181.425 27.3619 181.63C27.0116 183.338 26.5086 185.012 25.8591 186.631C24.0317 186.559 20.6415 186.523 16.9627 186.523H13.6326C12.1298 186.523 10.9877 186.523 8.99207 186.631C8.87576 186.516 8.80454 186.363 8.7913 186.199C8.77807 186.036 8.82371 185.874 8.91994 185.741L9.98991 185.633C12.0577 185.417 12.1298 184.924 12.1298 181.173V168.309Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M36.6644 168.309C36.6644 164.594 36.5923 164.065 34.4884 163.813L33.9114 163.741C33.707 163.596 33.7791 162.959 33.9835 162.851C35.5223 162.923 36.7366 162.959 38.2033 162.959H44.9116C46.5154 163.005 48.1204 162.969 49.7205 162.851C50.0111 164.441 50.2038 166.047 50.2975 167.66C50.1811 167.774 50.0283 167.844 49.8657 167.857C49.7032 167.87 49.5412 167.826 49.4079 167.732C48.8669 166.049 48.5423 164.799 46.6909 164.342C45.5472 164.152 44.387 164.079 43.2285 164.125H40.6678C39.5978 164.125 39.5978 164.198 39.5978 165.556V172.697C39.5978 173.695 39.706 173.695 40.8 173.695H42.8678C43.8867 173.74 44.9073 173.668 45.9094 173.479C46.3302 173.334 46.5827 173.118 46.763 172.276L47.0515 170.81C47.1813 170.701 47.3452 170.642 47.5144 170.642C47.6836 170.642 47.8475 170.701 47.9772 170.81C47.9772 171.675 47.833 173.07 47.833 174.416C47.833 175.763 47.9772 177.061 47.9772 177.855C47.8475 177.963 47.6836 178.023 47.5144 178.023C47.3452 178.023 47.1813 177.963 47.0515 177.855L46.7269 176.46C46.7043 176.148 46.586 175.849 46.3881 175.606C46.1903 175.363 45.9224 175.187 45.6209 175.102C44.7133 174.935 43.7894 174.874 42.8678 174.921H40.776C39.706 174.921 39.5738 174.921 39.5738 175.883V180.92C39.5738 182.808 39.682 184.022 40.247 184.635C40.8121 185.248 41.4492 185.453 44.575 185.453C47.316 185.453 48.3499 185.308 49.1434 184.924C50.2607 183.974 51.1346 182.77 51.6921 181.413C51.8425 181.33 52.0196 181.308 52.1857 181.353C52.3518 181.398 52.4939 181.506 52.5817 181.654C52.1861 183.351 51.6472 185.012 50.9708 186.619C47.7608 186.547 44.587 186.511 41.3531 186.511H38.2033C36.6644 186.511 35.4502 186.511 33.3944 186.619C33.2781 186.504 33.2069 186.351 33.1936 186.187C33.1804 186.024 33.226 185.862 33.3223 185.729L34.5245 185.621C36.5562 185.441 36.7366 184.912 36.7366 181.161L36.6644 168.309Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M80.1365 182.868C80.1365 184.299 80.3529 185.152 80.99 185.405C81.0191 185.433 81.0422 185.466 81.0581 185.504C81.0739 185.541 81.082 185.581 81.082 185.621C81.082 185.662 81.0739 185.702 81.0581 185.739C81.0422 185.776 81.0191 185.809 80.99 185.838C80.3985 185.879 79.8136 185.988 79.2468 186.162C77.157 186.713 75.0112 187.023 72.851 187.088C68.5952 187.088 64.7121 185.886 61.959 183.121C60.8985 182.058 60.0617 180.793 59.498 179.401C58.9343 178.01 58.6551 176.519 58.677 175.018C58.6395 171.907 59.7871 168.898 61.8869 166.602C64.2913 164.102 67.8138 162.418 73.2117 162.418C74.7376 162.435 76.2571 162.617 77.7441 162.959C78.4668 163.151 79.2089 163.26 79.9561 163.284C80.0233 165.017 80.204 166.744 80.4971 168.454C80.3889 168.742 79.7397 168.778 79.5233 168.562C78.4894 164.703 75.8085 163.5 72.1417 163.5C65.217 163.5 62.1874 168.43 62.1874 173.791C62.1874 180.644 65.7219 186.042 72.8991 186.042C75.1112 186.042 76.4336 185.573 76.8304 184.972C77.1162 184.331 77.2361 183.628 77.179 182.928V181.498C77.179 178.504 77.0708 178.288 74.8587 178.035L73.344 177.807C73.2832 177.748 73.2349 177.678 73.2019 177.601C73.1689 177.523 73.1519 177.44 73.1519 177.356C73.1519 177.272 73.1689 177.188 73.2019 177.111C73.2349 177.033 73.2832 176.963 73.344 176.905C74.3899 176.977 76.3495 177.013 78.4534 177.013C79.8479 177.013 81.0622 177.013 82.2403 176.905C82.3011 176.963 82.3494 177.033 82.3824 177.111C82.4154 177.188 82.4324 177.272 82.4324 177.356C82.4324 177.44 82.4154 177.523 82.3824 177.601C82.3494 177.678 82.3011 177.748 82.2403 177.807H81.6753C80.1725 177.987 80.1365 179.009 80.1365 180.812V182.868Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M102.974 178.227C102.733 177.446 102.589 177.338 101.519 177.338H96.169C95.2794 177.338 95.063 177.446 94.8105 178.191L93.6083 181.942C93.2396 182.9 92.9776 183.896 92.8269 184.912C92.8269 185.333 93.0072 185.549 93.8608 185.621L95.063 185.729C95.1265 185.787 95.1759 185.859 95.2074 185.939C95.2389 186.02 95.2517 186.106 95.2447 186.192C95.2377 186.278 95.2112 186.361 95.1673 186.435C95.1233 186.509 95.0629 186.572 94.9909 186.619C94.0652 186.547 92.9591 186.547 91.276 186.511C90.0738 186.511 88.8716 186.583 87.8497 186.619C87.7356 186.502 87.6659 186.35 87.6527 186.187C87.6395 186.025 87.6837 185.863 87.7776 185.729L88.9798 185.621C89.4739 185.585 89.9446 185.396 90.3277 185.082C90.7107 184.768 90.9873 184.343 91.1198 183.866C91.7689 182.231 92.7668 179.911 94.2695 175.907L97.8762 166.29C98.2905 165.509 98.4974 164.636 98.4773 163.753C99.2186 163.493 99.8668 163.021 100.341 162.394C100.453 162.38 100.566 162.404 100.663 162.463C100.759 162.522 100.832 162.612 100.87 162.719C101.339 164.294 101.904 165.929 102.445 167.528L107.338 181.882C108.371 184.96 108.84 185.489 110.367 185.669L111.341 185.777C111.44 185.904 111.494 186.061 111.494 186.222C111.494 186.383 111.44 186.54 111.341 186.667C109.874 186.595 108.624 186.559 107.013 186.559C105.402 186.559 103.947 186.631 102.913 186.667C102.845 186.617 102.788 186.553 102.747 186.479C102.705 186.405 102.68 186.323 102.673 186.239C102.667 186.154 102.678 186.069 102.707 185.99C102.736 185.91 102.782 185.838 102.841 185.777L103.875 185.669C104.621 185.597 105.077 185.381 105.077 185.032C105.008 184.38 104.85 183.741 104.609 183.132L102.974 178.227ZM95.9045 175.054C95.628 175.871 95.6521 175.907 96.6619 175.907H101.05C102.084 175.907 102.156 175.763 101.831 174.801L99.9079 168.982C99.6194 168.129 99.2948 167.155 99.0904 166.734H99.0183C98.6934 167.42 98.4044 168.122 98.1527 168.838L95.9045 175.054Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M126.831 181.162C126.831 184.912 126.903 185.441 128.983 185.622L130.125 185.73C130.33 185.874 130.257 186.511 130.053 186.62C128.009 186.547 126.795 186.511 125.364 186.511C123.934 186.511 122.695 186.511 120.411 186.62C120.351 186.562 120.303 186.493 120.27 186.417C120.237 186.34 120.22 186.258 120.22 186.175C120.22 186.092 120.237 186.009 120.27 185.933C120.303 185.856 120.351 185.787 120.411 185.73L121.686 185.622C123.729 185.441 123.91 184.912 123.91 181.162V165.196C123.91 164.09 123.91 164.054 122.84 164.054H120.868C119.329 164.054 117.37 164.126 116.48 164.944C115.761 165.63 115.209 166.474 114.869 167.408C114.712 167.496 114.528 167.518 114.355 167.471C114.182 167.424 114.034 167.311 113.943 167.156C114.521 165.419 114.975 163.643 115.302 161.842C115.409 161.798 115.523 161.775 115.638 161.775C115.754 161.775 115.868 161.798 115.975 161.842C116.191 162.984 117.37 162.948 119.017 162.948H133.443C135.367 162.948 135.691 162.876 136.22 161.95C136.401 161.878 136.797 161.95 136.87 162.058C136.458 163.835 136.276 165.657 136.329 167.48C136.196 167.769 135.583 167.769 135.403 167.553C135.379 166.613 135.068 165.702 134.513 164.944C133.251 164.238 131.806 163.928 130.366 164.054H127.829C126.759 164.054 126.795 164.054 126.795 165.256L126.831 181.162Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M163.618 171.916C163.618 169.704 163.546 165.604 162.933 164.522C162.711 164.272 162.436 164.076 162.128 163.947C161.82 163.817 161.487 163.759 161.153 163.777L160.252 163.705C160.16 163.577 160.118 163.421 160.131 163.265C160.144 163.108 160.212 162.962 160.324 162.851C161.682 162.923 163.005 162.959 164.399 162.959C165.794 162.959 166.864 162.959 168.15 162.851C168.271 162.956 168.347 163.104 168.36 163.263C168.374 163.423 168.324 163.581 168.222 163.705L167.369 163.777C167.023 163.762 166.679 163.832 166.367 163.981C166.055 164.129 165.784 164.352 165.577 164.63C165.073 165.833 165.073 169.92 165.073 171.916V175.955C165.073 179.069 164.58 182.351 162.572 184.491C161.669 185.36 160.6 186.039 159.429 186.488C158.258 186.936 157.008 187.144 155.755 187.1C153.366 187.259 150.997 186.564 149.071 185.14C147.172 183.577 146.282 180.968 146.282 176.725V168.309C146.282 164.594 146.21 163.993 144.142 163.813L143.24 163.741C143.149 163.613 143.106 163.457 143.12 163.301C143.133 163.144 143.201 162.998 143.313 162.887C145.104 162.959 146.318 162.995 147.749 162.995C149.179 162.995 150.394 162.995 152.137 162.887C152.353 162.995 152.425 163.596 152.209 163.741L151.355 163.813C149.275 163.993 149.203 164.594 149.203 168.309V176.027C149.203 181.774 150.995 185.561 156.417 185.561C161.586 185.561 163.558 181.485 163.558 176.063L163.618 171.916Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M187.305 176.978C188.135 178.661 188.916 180.296 189.709 181.871H189.782C190.755 180.2 191.645 178.336 192.535 176.521L195.889 169.692C197.5 166.446 198.534 164.475 198.606 162.84C199.497 162.921 200.392 162.957 201.287 162.948C202.176 162.948 203.355 162.948 204.461 162.84C204.556 162.968 204.608 163.124 204.608 163.285C204.608 163.445 204.556 163.601 204.461 163.729L203.715 163.802C201.467 164.018 201.179 164.691 201.215 167.192C201.287 170.979 201.323 177.591 201.611 182.724C201.708 184.516 201.671 185.477 203.355 185.622L204.557 185.73C204.661 185.859 204.711 186.024 204.698 186.189C204.684 186.355 204.608 186.509 204.485 186.62C203.018 186.547 201.563 186.511 200.277 186.511C198.991 186.511 197.416 186.511 195.949 186.62C195.825 186.509 195.749 186.355 195.736 186.189C195.722 186.024 195.773 185.859 195.877 185.73L196.911 185.622C198.666 185.441 198.666 184.876 198.666 182.592L198.558 167.697H198.486C198.233 168.094 196.875 170.943 196.165 172.337L192.991 178.589C191.381 181.727 189.77 185.093 189.132 186.728C189.088 186.779 189.032 186.819 188.97 186.844C188.907 186.869 188.839 186.879 188.772 186.872C188.711 186.872 188.65 186.859 188.594 186.834C188.539 186.809 188.488 186.773 188.447 186.728C187.846 184.84 186.127 181.342 185.309 179.587L182.099 172.698C181.342 171.051 180.597 169.2 179.815 167.553H179.743C179.599 169.765 179.491 171.832 179.382 173.912C179.274 175.992 179.13 179.262 179.13 182.328C179.13 184.973 179.346 185.538 180.741 185.646L182.099 185.754C182.34 185.97 182.304 186.535 182.099 186.644C180.897 186.572 179.491 186.535 178.132 186.535C176.99 186.535 175.728 186.535 174.526 186.644C174.411 186.527 174.342 186.374 174.328 186.212C174.315 186.049 174.359 185.887 174.453 185.754L175.235 185.646C176.738 185.429 177.243 185.213 177.459 182.712C177.675 180.212 177.844 178.396 178.06 174.862C178.24 171.892 178.385 168.851 178.457 166.891C178.529 164.643 178.24 164.114 176.052 163.826L175.475 163.754C175.382 163.614 175.346 163.445 175.372 163.28C175.399 163.115 175.487 162.966 175.62 162.864C176.689 162.936 177.543 162.972 178.445 162.972C179.346 162.972 180.224 162.972 181.402 162.864C181.258 164.258 182.16 166.471 183.266 168.755L187.305 176.978Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M211.237 165.773C211.237 166.363 211.237 166.447 211.573 166.471H211.753C211.753 166.471 211.753 166.591 211.753 166.603H210.239C210.229 166.595 210.221 166.585 210.215 166.574C210.209 166.562 210.207 166.55 210.207 166.537C210.207 166.524 210.209 166.512 210.215 166.5C210.221 166.489 210.229 166.479 210.239 166.471H210.443C210.756 166.471 210.792 166.363 210.792 165.773V163.261C210.792 163.081 210.792 163.081 210.623 163.081H210.311C210.07 163.053 209.827 163.1 209.614 163.213C209.502 163.325 209.416 163.461 209.361 163.609C209.361 163.609 209.241 163.609 209.217 163.609C209.313 163.34 209.385 163.062 209.433 162.78C209.45 162.771 209.469 162.767 209.487 162.767C209.506 162.767 209.525 162.771 209.541 162.78C209.541 162.96 209.758 162.948 210.022 162.948H212.294C212.595 162.948 212.655 162.948 212.739 162.792C212.77 162.78 212.805 162.78 212.835 162.792C212.775 163.076 212.747 163.367 212.751 163.658C212.731 163.675 212.706 163.685 212.679 163.685C212.653 163.685 212.627 163.675 212.607 163.658C212.596 163.511 212.546 163.37 212.463 163.249C212.265 163.14 212.038 163.094 211.814 163.117H211.417C211.249 163.117 211.249 163.117 211.249 163.309L211.237 165.773Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M215.549 165.112C215.682 165.376 215.814 165.641 215.946 165.881C216.09 165.617 216.235 165.328 216.379 165.04L216.908 163.97C217.11 163.636 217.252 163.27 217.329 162.888H218.254C218.254 162.888 218.254 163.008 218.254 163.02H218.146C217.786 163.02 217.737 163.164 217.749 163.561C217.749 164.15 217.749 165.196 217.81 165.965C217.81 166.254 217.81 166.398 218.086 166.422H218.266C218.266 166.422 218.266 166.542 218.266 166.554H216.92C216.92 166.554 216.92 166.446 216.92 166.422H217.088C217.365 166.422 217.365 166.302 217.365 165.941V163.597L217.004 164.33L216.499 165.316C216.247 165.809 215.994 166.338 215.898 166.603C215.802 166.302 215.525 165.749 215.405 165.472L214.9 164.39L214.54 163.573C214.54 163.934 214.54 164.258 214.479 164.583C214.419 164.907 214.479 165.424 214.479 165.905C214.479 166.386 214.479 166.41 214.732 166.422H214.948C214.948 166.422 214.948 166.542 214.948 166.554H213.746C213.746 166.554 213.746 166.446 213.746 166.422H213.866C214.107 166.422 214.179 166.362 214.215 165.965C214.251 165.569 214.275 165.28 214.311 164.763C214.347 164.246 214.311 163.813 214.311 163.561C214.311 163.308 214.311 163.116 213.938 163.068H213.842C213.825 163.05 213.816 163.027 213.816 163.002C213.816 162.977 213.825 162.954 213.842 162.936H214.756C214.782 163.262 214.881 163.578 215.044 163.861L215.549 165.112Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d: 'M204.738 195.924H8.63281V196.729H204.738V195.924Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M11.5866 210.303C11.5866 206.937 11.5145 206.396 9.63904 206.24L8.84558 206.167C8.65323 206.047 8.72536 205.47 8.91771 205.374C10.5046 205.446 11.5866 205.47 12.9211 205.47C14.2555 205.47 15.2654 205.47 16.8643 205.374C17.0567 205.47 17.1168 206.047 16.9244 206.167L16.131 206.24C14.2555 206.396 14.1954 206.937 14.1954 210.303V221.628C14.1954 224.994 14.1954 225.439 16.131 225.667L16.9244 225.764C17.1168 225.884 17.0567 226.461 16.8643 226.557C15.2654 226.485 14.1954 226.461 12.9211 226.461C11.6467 226.461 10.5167 226.461 8.91771 226.557C8.81315 226.455 8.74843 226.319 8.7352 226.174C8.72198 226.028 8.76112 225.883 8.84558 225.764L9.63904 225.667C11.5145 225.439 11.5866 224.994 11.5866 221.628V210.303Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M43.4393 221.05C43.4393 222.012 43.4393 225.787 43.5355 226.617C43.4863 226.734 43.3994 226.832 43.2884 226.895C43.1775 226.959 43.0488 226.983 42.9224 226.965C42.5497 226.424 41.624 225.318 38.8589 222.156L31.4773 213.741C30.6238 212.755 28.4598 210.134 27.7986 209.449H27.7264C27.5894 210.125 27.5369 210.816 27.5701 211.505V218.442C27.5701 219.932 27.5701 224.068 28.1472 225.018C28.3396 225.378 28.9647 225.559 29.7702 225.631L30.756 225.727C30.8455 225.844 30.8878 225.991 30.8744 226.138C30.8611 226.285 30.7931 226.421 30.6839 226.52C29.2532 226.448 28.1472 226.424 26.969 226.424C25.7909 226.424 24.769 226.424 23.663 226.52C23.5538 226.421 23.4858 226.285 23.4724 226.138C23.459 225.991 23.5013 225.844 23.5908 225.727L24.4564 225.631C25.1898 225.535 25.6586 225.342 25.851 224.994C26.2958 223.791 26.2718 219.968 26.2718 218.442V209.257C26.3231 208.845 26.2865 208.428 26.1642 208.032C26.0419 207.636 25.8368 207.271 25.5624 206.96C25.001 206.507 24.3112 206.242 23.5908 206.203L23.0498 206.131C22.9546 206.016 22.9087 205.868 22.9222 205.719C22.9358 205.571 23.0076 205.433 23.122 205.337C24.4564 205.434 26.1395 205.434 26.7286 205.434C27.2153 205.441 27.7018 205.409 28.1833 205.337C28.8204 206.96 32.5713 211.156 33.6293 212.334L36.707 215.797C38.907 218.201 40.4579 220.028 41.9486 221.555H42.0688C42.1982 221.123 42.2391 220.669 42.189 220.221V213.416C42.189 211.926 42.189 207.79 41.5519 206.84C41.3715 206.552 40.8546 206.359 39.5802 206.203L39.0513 206.131C38.8228 205.951 38.8589 205.434 39.1114 205.337C40.5661 205.41 41.648 205.434 42.8623 205.434C44.0765 205.434 45.0503 205.434 46.1323 205.337C46.2467 205.433 46.3185 205.571 46.332 205.719C46.3455 205.868 46.2997 206.016 46.2044 206.131L45.7596 206.203C44.7377 206.359 44.1006 206.612 43.9683 206.864C43.4393 208.066 43.4994 211.95 43.4994 213.416L43.4393 221.05Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M58.2992 226.966C56.5679 227.002 54.8569 226.588 53.334 225.763C52.8239 224.333 52.536 222.833 52.4805 221.315C52.6368 221.099 53.1176 221.027 53.2379 221.219C53.7187 222.842 55.0292 225.956 58.7079 225.956C59.2119 226.008 59.7213 225.954 60.2028 225.796C60.6844 225.638 61.1273 225.381 61.5027 225.041C61.8782 224.7 62.1777 224.285 62.3818 223.821C62.5859 223.357 62.69 222.856 62.6872 222.349C62.7196 221.436 62.4915 220.533 62.0295 219.746C61.5675 218.958 60.8908 218.318 60.0784 217.901L57.0609 215.929C56.0695 215.367 55.2352 214.565 54.6345 213.597C54.0337 212.629 53.6858 211.525 53.6226 210.387C53.6226 207.37 56.027 204.917 60.1145 204.917C61.113 204.936 62.1058 205.073 63.0719 205.326C63.4298 205.441 63.8021 205.506 64.178 205.518C64.5534 206.779 64.7477 208.086 64.755 209.401C64.6228 209.594 64.1179 209.69 63.9616 209.497C63.5408 207.971 62.6872 205.891 59.6336 205.891C56.58 205.891 55.8467 207.959 55.8467 209.425C55.9381 210.25 56.2332 211.039 56.7054 211.721C57.1776 212.403 57.8121 212.957 58.5516 213.332L61.1003 214.919C63.096 216.122 65.0676 218.009 65.0676 221.027C65.0676 224.585 62.4348 226.966 58.2992 226.966Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M82.4228 221.688C82.4228 225.03 82.495 225.499 84.3343 225.667L85.3562 225.763C85.5486 225.883 85.4765 226.46 85.2841 226.556C83.4808 226.484 82.3988 226.46 81.1244 226.46C79.8501 226.46 78.72 226.46 76.7003 226.556C76.6472 226.505 76.605 226.443 76.5762 226.375C76.5474 226.307 76.5326 226.234 76.5326 226.16C76.5326 226.086 76.5474 226.013 76.5762 225.944C76.605 225.876 76.6472 225.815 76.7003 225.763L77.9025 225.667C79.7058 225.499 79.8621 225.03 79.8621 221.688V207.477C79.8621 206.492 79.8621 206.456 78.9124 206.456H77.1211C75.7506 206.456 74.0073 206.528 73.2019 207.249C72.5688 207.868 72.0803 208.619 71.7712 209.449C71.6998 209.492 71.62 209.519 71.5372 209.529C71.4544 209.539 71.3705 209.531 71.2909 209.506C71.2114 209.481 71.138 209.44 71.0758 209.384C71.0135 209.329 70.9637 209.261 70.9297 209.185C71.4469 207.638 71.8487 206.054 72.1319 204.448C72.3248 204.37 72.5401 204.37 72.733 204.448C72.9254 205.47 73.9352 205.434 75.438 205.434H88.3377C90.0569 205.434 90.3454 205.434 90.8263 204.544C90.9826 204.544 91.3312 204.544 91.3913 204.64C91.0335 206.217 90.876 207.833 90.9225 209.449C90.8107 209.556 90.6622 209.615 90.5077 209.615C90.3533 209.615 90.2047 209.556 90.0929 209.449C90.0714 208.613 89.7945 207.803 89.2995 207.129C88.1779 206.497 86.8909 206.22 85.6087 206.335H83.3485C82.3988 206.335 82.4228 206.335 82.4228 207.417V221.688Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M99.78 210.303C99.78 206.937 99.78 206.396 97.8324 206.24L97.039 206.167C96.8586 206.047 96.9187 205.47 97.1111 205.374C98.698 205.446 99.78 205.47 101.114 205.47C102.449 205.47 103.519 205.47 105.058 205.374C105.25 205.47 105.31 206.047 105.058 206.167L104.264 206.24C102.389 206.396 102.329 206.937 102.329 210.303V221.628C102.329 224.994 102.329 225.439 104.264 225.667L105.058 225.764C105.25 225.884 105.19 226.461 105.058 226.557C103.471 226.485 102.389 226.461 101.114 226.461C99.8401 226.461 98.71 226.461 97.1111 226.557C97.0087 226.454 96.9454 226.318 96.9323 226.173C96.9191 226.028 96.9568 225.884 97.039 225.764L97.8324 225.667C99.7199 225.439 99.78 224.994 99.78 221.628V210.303Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M122.272 221.687C122.272 225.029 122.332 225.498 124.172 225.667L125.194 225.763C125.386 225.883 125.326 226.46 125.194 226.556C123.378 226.484 122.296 226.46 121.022 226.46C119.747 226.46 118.617 226.46 116.61 226.556C116.555 226.505 116.512 226.444 116.482 226.376C116.452 226.308 116.437 226.234 116.437 226.159C116.437 226.085 116.452 226.011 116.482 225.943C116.512 225.875 116.555 225.813 116.61 225.763L117.812 225.667C119.627 225.498 119.784 225.029 119.784 221.687V207.477C119.784 206.491 119.784 206.455 118.834 206.455H116.958C115.588 206.455 113.845 206.527 113.051 207.249C112.413 207.863 111.924 208.616 111.621 209.449C111.48 209.527 111.314 209.547 111.159 209.504C111.004 209.462 110.872 209.36 110.791 209.22C111.308 207.673 111.71 206.09 111.993 204.484C112.19 204.405 112.409 204.405 112.606 204.484C112.799 205.505 113.809 205.469 115.311 205.469H128.187C129.894 205.469 130.183 205.469 130.664 204.58C130.82 204.58 131.168 204.58 131.241 204.676C130.874 206.251 130.712 207.868 130.76 209.485C130.648 209.591 130.499 209.651 130.345 209.651C130.191 209.651 130.042 209.591 129.93 209.485C129.834 208.691 129.618 207.513 129.137 207.164C128.016 206.531 126.728 206.254 125.446 206.371H123.186C122.236 206.371 122.272 206.371 122.272 207.453V221.687Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M154.742 213.453C154.742 211.481 154.682 207.827 154.141 206.877C153.944 206.649 153.697 206.47 153.42 206.354C153.143 206.237 152.842 206.185 152.542 206.204L151.749 206.143C151.663 206.029 151.624 205.887 151.637 205.745C151.65 205.603 151.716 205.471 151.821 205.374C153.023 205.446 154.225 205.47 155.427 205.47C156.63 205.47 157.627 205.47 158.77 205.374C158.875 205.471 158.94 205.604 158.951 205.747C158.963 205.89 158.919 206.031 158.83 206.143L158.072 206.204C157.763 206.189 157.454 206.251 157.175 206.386C156.896 206.52 156.655 206.722 156.473 206.973C156.028 208.019 156.028 211.674 156.028 213.453V217.06C156.028 219.825 155.584 222.746 153.804 224.657C153.004 225.42 152.061 226.018 151.03 226.416C149.998 226.814 148.899 227.005 147.793 226.978C145.646 227.129 143.515 226.511 141.782 225.235C140.099 223.828 139.306 221.508 139.306 217.733V210.219C139.306 206.913 139.306 206.372 137.394 206.216L136.601 206.155C136.52 206.039 136.484 205.898 136.497 205.758C136.51 205.617 136.572 205.485 136.673 205.386C138.26 205.458 139.342 205.482 140.616 205.482C141.89 205.482 143.021 205.482 144.523 205.386C144.616 205.493 144.666 205.63 144.666 205.771C144.666 205.912 144.616 206.049 144.523 206.155L143.766 206.216C141.915 206.372 141.854 206.913 141.854 210.219V217.096C141.854 222.205 143.441 225.583 148.31 225.583C152.915 225.583 154.67 221.977 154.67 217.168L154.742 213.453Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M174.929 221.688C174.929 225.03 175.001 225.499 176.84 225.667L177.862 225.763C178.055 225.883 177.982 226.46 177.79 226.556C175.987 226.484 174.905 226.46 173.63 226.46C172.356 226.46 171.226 226.46 169.206 226.556C169.153 226.505 169.111 226.443 169.082 226.375C169.053 226.307 169.039 226.234 169.039 226.16C169.039 226.086 169.053 226.013 169.082 225.944C169.111 225.876 169.153 225.815 169.206 225.763L170.409 225.667C172.212 225.499 172.38 225.03 172.38 221.688V207.477C172.38 206.492 172.38 206.456 171.418 206.456H169.675C168.305 206.456 166.561 206.528 165.756 207.249C165.126 207.87 164.638 208.621 164.325 209.449C164.255 209.488 164.177 209.512 164.097 209.52C164.017 209.527 163.936 209.519 163.859 209.494C163.783 209.469 163.712 209.429 163.652 209.376C163.591 209.322 163.542 209.257 163.508 209.185C164.025 207.638 164.427 206.054 164.71 204.448C164.903 204.37 165.118 204.37 165.311 204.448C165.503 205.47 166.513 205.434 168.016 205.434H180.892C182.611 205.434 182.899 205.434 183.38 204.544C183.537 204.544 183.885 204.544 183.945 204.64C183.588 206.217 183.43 207.833 183.477 209.449C183.365 209.556 183.216 209.615 183.062 209.615C182.907 209.615 182.759 209.556 182.647 209.449C182.625 208.613 182.349 207.803 181.854 207.129C180.732 206.497 179.445 206.22 178.163 206.335H175.903C174.953 206.335 174.977 206.335 174.977 207.417L174.929 221.688Z',
              fill: '#1B1B32',
            }),
            (0, t.jsx)('path', {
              d:
                'M192.253 210.243C192.253 206.937 192.181 206.456 190.306 206.24L189.801 206.167C189.609 206.047 189.681 205.47 189.861 205.374C191.231 205.446 192.265 205.47 193.612 205.47H199.623C201.054 205.511 202.487 205.479 203.915 205.374C204.165 206.774 204.333 208.187 204.42 209.606C204.315 209.706 204.179 209.767 204.034 209.778C203.889 209.789 203.745 209.75 203.626 209.666C203.145 208.175 202.857 207.069 201.222 206.648C200.201 206.481 199.166 206.416 198.132 206.456H195.848C194.898 206.456 194.898 206.528 194.898 207.73V214.09C194.898 214.98 194.994 214.98 195.944 214.98H197.784C198.69 215.022 199.598 214.958 200.489 214.787C200.873 214.667 201.09 214.475 201.258 213.681L201.51 212.371C201.625 212.269 201.772 212.213 201.925 212.213C202.078 212.213 202.226 212.269 202.34 212.371C202.34 213.128 202.208 214.367 202.208 215.581C202.208 216.795 202.34 217.985 202.34 218.634C202.224 218.733 202.077 218.788 201.925 218.788C201.773 218.788 201.626 218.733 201.51 218.634L201.222 217.432C201.2 217.155 201.094 216.891 200.918 216.676C200.742 216.461 200.504 216.305 200.236 216.23C199.443 216.085 198.636 216.033 197.832 216.074H195.956C195.006 216.074 194.91 216.074 194.91 216.927V221.412C194.91 223.095 195.006 224.177 195.511 224.718C196.016 225.259 196.557 225.451 199.358 225.451C201.763 225.451 202.725 225.319 203.422 224.97C204.415 224.143 205.19 223.087 205.682 221.892C205.748 221.852 205.821 221.826 205.897 221.815C205.974 221.804 206.051 221.809 206.126 221.829C206.2 221.85 206.269 221.885 206.329 221.933C206.39 221.981 206.439 222.041 206.476 222.109C206.129 223.623 205.65 225.103 205.045 226.533C202.184 226.461 199.358 226.437 196.533 226.437H193.66C192.301 226.437 191.256 226.437 189.344 226.533C189.241 226.429 189.179 226.293 189.168 226.147C189.157 226.002 189.198 225.857 189.284 225.739L190.33 225.643C192.145 225.475 192.301 225.006 192.301 221.664L192.253 210.243Z',
              fill: '#1B1B32',
            }),
          ],
        });
      }
      var B = H(25770),
        i = H(97023),
        a = H(53290),
        Z = H(22328),
        s = H(84272),
        M = H(48860),
        p = (H(11208), H(68608)),
        e = H(58804),
        d = H(8880),
        r = H(41664);
      var f = e.ZP.div.withConfig({
          displayName: 'MapLinkBlock__MapLinkBlockGraphic',
          componentId: 'sc-1v68oeq-0',
        })([
          'width:100% !important;max-height:15rem !important;transition:transform 640ms cubic-bezier(0.46,0.03,0.52,0.96);',
        ]),
        h = (0, e.ZP)(d.Z).withConfig({
          displayName: 'MapLinkBlock__MapLinkBlockAnchor',
          componentId: 'sc-1v68oeq-1',
        })(['&:not(:hover) ', '{transform:scale(0.95);}'], f),
        j = function (C) {
          var V = C.href,
            H = C.eyebrow,
            l = C.heading,
            L = C.graphic,
            B = C.text;
          return (0, t.jsx)(r.default, {
            href: V,
            as: V,
            passHref: !0,
            children: (0, t.jsxs)(h, {
              children: [
                (0, t.jsx)(M.Z, {
                  variant: 'eyebrow',
                  color: 'purple060',
                  children: H,
                }),
                (0, t.jsx)(M.Z, { variant: 'largeHeading', children: l }),
                (0, t.jsx)(a.Z, {
                  marginY: 5,
                  children:
                    (null === L || void 0 === L ? void 0 : L[0]) &&
                    (0, t.jsx)(f, {
                      children: (0, t.jsx)(s.Z, { asset: L[0] }),
                    }),
                }),
                (0, t.jsx)(p.Z, { rawHtml: B }),
              ],
            }),
          });
        };
      function x(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function n(C) {
        for (var V = 1; V < arguments.length; V++) {
          var H = null != arguments[V] ? arguments[V] : {};
          V % 2
            ? x(Object(H), !0).forEach(function (V) {
                (0, l.Z)(C, V, H[V]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(H))
            : x(Object(H)).forEach(function (V) {
                Object.defineProperty(
                  C,
                  V,
                  Object.getOwnPropertyDescriptor(H, V)
                );
              });
        }
        return C;
      }
      var o = function (C) {
          var V = C.homepageMapSectionLinks,
            H = V[0],
            l = V[1];
          return (0, t.jsx)(Z.Z, {
            children: (0, t.jsxs)(B.Z, {
              rowGap: null,
              textAlign: { _: 'center' },
              paddingY: [10, 10, 13],
              children: [
                (0, t.jsx)(i.Z, {
                  width: [1, 1, 0.5],
                  borderRight: { md: '1px solid' },
                  borderRightColor: { md: 'purple020' },
                  children: (0, t.jsx)(B.Z, {
                    rowGap: null,
                    justifyContent: 'center',
                    children: (0, t.jsx)(i.Z, {
                      width: [1, 8 / 12, 10 / 12, 8 / 12],
                      children: (0, t.jsx)(
                        j,
                        n(
                          {
                            href: '/maps/state-by-state',
                            as: '/maps/state-by-state',
                          },
                          H
                        )
                      ),
                    }),
                  }),
                }),
                (0, t.jsx)(i.Z, {
                  display: { md: 'none' },
                  paddingY: 10,
                  children: (0, t.jsx)(a.Z, {
                    borderBottom: '1px solid',
                    borderBottomColor: 'purple020',
                  }),
                }),
                (0, t.jsx)(i.Z, {
                  width: [1, 1, 0.5],
                  children: (0, t.jsx)(B.Z, {
                    rowGap: null,
                    justifyContent: 'center',
                    children: (0, t.jsx)(i.Z, {
                      width: [1, 8 / 12, 10 / 12, 8 / 12],
                      children: (0, t.jsx)(
                        j,
                        n(
                          {
                            href: '/maps/county-by-county',
                            as: '/maps/county-by-county',
                          },
                          l
                        )
                      ),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        c = H(40694),
        u = H(10219),
        b = ['typeHandle'];
      function g(C, V) {
        var H = C.typeHandle,
          l = (0, u.Z)(C, b);
        switch (H) {
          case 'entry':
            return { href: V, as: '/'.concat(l.entry[0].uri) };
          case 'url':
            return { href: l.externalUrl };
        }
      }
      var y = H(91785),
        O = H(31024),
        m = H(58676),
        v = H(74388),
        w = H(57294);
      function P(C, V) {
        var H = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(C);
          V &&
            (l = l.filter(function (V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })),
            H.push.apply(H, l);
        }
        return H;
      }
      function k(C) {
        for (var V = 1; V < arguments.length; V++) {
          var H = null != arguments[V] ? arguments[V] : {};
          V % 2
            ? P(Object(H), !0).forEach(function (V) {
                (0, l.Z)(C, V, H[V]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(H))
            : P(Object(H)).forEach(function (V) {
                Object.defineProperty(
                  C,
                  V,
                  Object.getOwnPropertyDescriptor(H, V)
                );
              });
        }
        return C;
      }
      var D = !0,
        _ = function (C) {
          var V = C.entry,
            H = C.articles,
            l = V.homepageHeaderText,
            e = V.homepageHeaderImage,
            d = V.pageBanners;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(a.Z, {
                backgroundColor: 'white',
                paddingTop: 8,
                children: (0, t.jsx)(Z.Z, {
                  children: (0, t.jsxs)(B.Z, {
                    justifyContent: 'center',
                    alignItems: 'center',
                    children: [
                      (0, t.jsxs)(i.Z, {
                        width: [1, 8 / 12, 0.5],
                        textAlign: ['center', null, 'left'],
                        mb: 8,
                        children: [
                          (0, t.jsx)(p.Z, { rawHtml: l }),
                          (0, t.jsx)(a.Z, {
                            width: [3 / 4, 2 / 3, 0.5],
                            mx: ['auto', null, 'inherit'],
                            mt: 8,
                            children: (0, t.jsx)(L, {}),
                          }),
                        ],
                      }),
                      (0, t.jsx)(i.Z, {
                        width: [1, 10 / 12, 0.5],
                        marginTop: [8, null, 0],
                        children: (0, t.jsx)(s.Z, {
                          asset: (0, w.Z)(e),
                          variant: 'imageWidescreenVariant',
                          priority: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)(o, k({}, V)),
              (0, t.jsx)(v.Z, { banners: d }),
              (0, t.jsxs)(m.Z, {
                children: [
                  (0, t.jsx)(M.Z, {
                    variant: 'largeHeading',
                    marginBottom: 6,
                    children: 'Insights + Events',
                  }),
                  (0, t.jsx)(y.Z, {
                    children: H.map(function (C) {
                      return (0, t.jsx)(O.Z, k({}, C), C.id);
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)(a.Z, {
                overflow: 'hidden',
                backgroundColor: 'purple100',
                position: 'relative',
                children: [
                  (0, t.jsx)(s.Z, {
                    asset: V.homepageAboutImage[0],
                    variant: 'imageStandardVariant',
                    wrap: !1,
                  }),
                  (0, t.jsx)(Z.Z, {
                    paddingY: [10, 13],
                    position: 'relative',
                    children: (0, t.jsxs)(B.Z, {
                      children: [
                        (0, t.jsx)(i.Z, {
                          display: ['none', null, 'block'],
                          width: 1 / 12,
                          minHeight: 1,
                        }),
                        (0, t.jsx)(i.Z, {
                          width: [1, 0.75, 0.5, 5 / 12],
                          children: (0, t.jsxs)(a.Z, {
                            padding: 7,
                            borderRadius: 2,
                            backgroundColor: 'white',
                            children: [
                              (0, t.jsx)(p.Z, { rawHtml: V.homepageAboutText }),
                              (0, t.jsx)(
                                r.default,
                                k(
                                  k(
                                    {},
                                    g(V.homepageAboutButton[0], '/about/[slug]')
                                  ),
                                  {},
                                  {
                                    passHref: !0,
                                    children: (0, t.jsx)(c.Z, {
                                      variant: 'muted',
                                      marginTop: 7,
                                      children: 'Read more',
                                    }),
                                  }
                                )
                              ),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    33685: function (C, V, H) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return H(55188);
        },
      ]);
    },
  },
  function (C) {
    C.O(0, [885, 675, 827, 774, 888, 179], function () {
      return (V = 33685), C((C.s = V));
      var V;
    });
    var V = C.O();
    _N_E = V;
  },
]);
