(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [346],
  {
    56755: function (e) {
      e.exports = (function () {
        'use strict';
        var e = /^(b|B)$/,
          r = {
            iec: {
              bits: [
                'b',
                'Kib',
                'Mib',
                'Gib',
                'Tib',
                'Pib',
                'Eib',
                'Zib',
                'Yib',
              ],
              bytes: [
                'B',
                'KiB',
                'MiB',
                'GiB',
                'TiB',
                'PiB',
                'EiB',
                'ZiB',
                'YiB',
              ],
            },
            jedec: {
              bits: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'],
              bytes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            },
          },
          t = {
            iec: [
              '',
              'kibi',
              'mebi',
              'gibi',
              'tebi',
              'pebi',
              'exbi',
              'zebi',
              'yobi',
            ],
            jedec: [
              '',
              'kilo',
              'mega',
              'giga',
              'tera',
              'peta',
              'exa',
              'zetta',
              'yotta',
            ],
          },
          n = { floor: Math.floor, ceil: Math.ceil };
        function o(o) {
          var i,
            c,
            a,
            s,
            l,
            u,
            p,
            f,
            d,
            b,
            h,
            g,
            j,
            O,
            y,
            v,
            w,
            m,
            P,
            Z,
            x,
            D =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            S = [],
            k = 0;
          if (isNaN(o)) throw new TypeError('Invalid number');
          if (
            ((a = !0 === D.bits),
            (y = !0 === D.unix),
            (g = !0 === D.pad),
            (c = D.base || 2),
            (j = void 0 !== D.round ? D.round : y ? 1 : 2),
            (p = void 0 !== D.locale ? D.locale : ''),
            (f = D.localeOptions || {}),
            (v = void 0 !== D.separator ? D.separator : ''),
            (w = void 0 !== D.spacer ? D.spacer : y ? '' : ' '),
            (P = D.symbols || {}),
            (m = (2 === c && D.standard) || 'jedec'),
            (h = D.output || 'string'),
            (l = !0 === D.fullform),
            (u = D.fullforms instanceof Array ? D.fullforms : []),
            (i = void 0 !== D.exponent ? D.exponent : -1),
            (Z = n[D.roundingMethod] || Math.round),
            (d = (b = Number(o)) < 0),
            (s = c > 2 ? 1e3 : 1024),
            (x = !1 === isNaN(D.precision) ? parseInt(D.precision, 10) : 0),
            d && (b = -b),
            (-1 === i || isNaN(i)) &&
              (i = Math.floor(Math.log(b) / Math.log(s))) < 0 &&
              (i = 0),
            i > 8 && (x > 0 && (x += 8 - i), (i = 8)),
            'exponent' === h)
          )
            return i;
          if (0 === b)
            (S[0] = 0), (O = S[1] = y ? '' : r[m][a ? 'bits' : 'bytes'][i]);
          else {
            (k = b / (2 === c ? Math.pow(2, 10 * i) : Math.pow(1e3, i))),
              a && (k *= 8) >= s && i < 8 && ((k /= s), i++);
            var C = Math.pow(10, i > 0 ? j : 0);
            (S[0] = Z(k * C) / C),
              S[0] === s && i < 8 && void 0 === D.exponent && ((S[0] = 1), i++),
              (O = S[1] =
                10 === c && 1 === i
                  ? a
                    ? 'kb'
                    : 'kB'
                  : r[m][a ? 'bits' : 'bytes'][i]),
              y &&
                ((S[1] =
                  'jedec' === m
                    ? S[1].charAt(0)
                    : i > 0
                    ? S[1].replace(/B$/, '')
                    : S[1]),
                e.test(S[1]) && ((S[0] = Math.floor(S[0])), (S[1] = '')));
          }
          if (
            (d && (S[0] = -S[0]),
            x > 0 && (S[0] = S[0].toPrecision(x)),
            (S[1] = P[S[1]] || S[1]),
            !0 === p
              ? (S[0] = S[0].toLocaleString())
              : p.length > 0
              ? (S[0] = S[0].toLocaleString(p, f))
              : v.length > 0 && (S[0] = S[0].toString().replace('.', v)),
            g && !1 === Number.isInteger(S[0]) && j > 0)
          ) {
            var E = v || '.',
              M = S[0].toString().split(E),
              N = M[1] || '',
              B = N.length,
              I = j - B;
            S[0] = ''
              .concat(M[0])
              .concat(E)
              .concat(N.padEnd(B + I, '0'));
          }
          return (
            l &&
              (S[1] = u[i]
                ? u[i]
                : t[m][i] + (a ? 'bit' : 'byte') + (1 === S[0] ? '' : 's')),
            'array' === h
              ? S
              : 'object' === h
              ? { value: S[0], symbol: S[1], exponent: i, unit: O }
              : S.join(w)
          );
        }
        return (
          (o.partial = function (e) {
            return function (r) {
              return o(r, e);
            };
          }),
          o
        );
      })();
    },
    40694: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = t(67294),
        c = t(48860),
        a = t(53290),
        s = t(58804),
        l = t(75980),
        u = t(85893),
        p = ['children'];
      function f(e, r) {
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
      function d(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var b = (0, i.forwardRef)(function (e, r) {
        var t = e.children,
          n = (0, o.Z)(e, p);
        return (0,
        u.jsx)(h, d(d({ ref: r }, n), {}, { children: (0, u.jsx)(c.Z, { variant: 'eyebrow', children: t }) }));
      });
      b.defaultProps = {
        as: 'a',
        display: 'inline-block',
        paddingY: 4,
        paddingX: 6,
        borderRadius: 1,
        variant: 'purple',
      };
      var h = (0, s.ZP)(a.Z).withConfig({
        displayName: 'Button__Wrapper',
        componentId: 'sc-opf8cr-0',
      })(
        ['', ''],
        (0, l.bU)({
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
      r.Z = b;
    },
    76310: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = (t(67294), t(73396)),
        i = t(53290),
        c = t(40694),
        a = t(85893);
      function s(e, r) {
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
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? s(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function u(e) {
        var r = e.createURL,
          t = e.refine,
          n = e.page;
        return {
          href: r(n),
          onClick: function (e) {
            e.preventDefault(), t(n);
          },
        };
      }
      var p = (0, o.Z)(function (e) {
        var r = e.currentRefinement,
          t = e.nbPages,
          n = (e.createURL, r - 1),
          o = n >= 1,
          s = r + 1,
          p = s <= t;
        return (0,
        a.jsx)(a.Fragment, { children: (o || p) && (0, a.jsxs)(i.Z, { display: 'flex', children: [o && (0, a.jsx)(c.Z, l(l({}, u(l({ page: n }, e))), {}, { children: 'Previous' })), p && (0, a.jsx)(c.Z, l(l({}, u(l({ page: s }, e))), {}, { marginLeft: 'auto', children: 'Next' }))] }) });
      });
      (p.defaultProps = {}), (r.Z = p);
    },
    91504: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = (t(67294), t(74575)),
        c = t(53290),
        a = t(37947),
        s = t(58804),
        l = t(44315),
        u = (0, s.ZP)(c.Z).withConfig({
          displayName: 'BaseButton',
          componentId: 'sc-vejhed-0',
        })([
          'border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;border-radius:inherit;color:inherit;font:inherit;text-align:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;&::-moz-focus-inner{border:0;padding:0;}',
        ]);
      u.defaultProps = { as: 'button' };
      var p = u,
        f = t(11029),
        d = t(85893),
        b = ['currentRefinement', 'isSearchStalled', 'refine', 'inputProps'];
      function h(e, r) {
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
      function g(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? h(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var j = (0, i.Z)(function (e) {
          var r = e.currentRefinement,
            t = e.isSearchStalled,
            n = e.refine,
            i = e.inputProps,
            a = (0, o.Z)(e, b);
          return (0, d.jsx)(
            c.Z,
            g(
              g({}, a),
              {},
              {
                children: (0, d.jsxs)('form', {
                  noValidate: !0,
                  action: '',
                  role: 'search',
                  children: [
                    (0, d.jsxs)(c.Z, {
                      position: 'relative',
                      children: [
                        (0, d.jsx)(
                          O,
                          g(
                            {
                              as: 'input',
                              type: 'search',
                              placeholder: 'Search here\u2026',
                              value: r,
                              onChange: function (e) {
                                return n(e.currentTarget.value);
                              },
                            },
                            i
                          )
                        ),
                        r &&
                          (0, d.jsx)(y, {
                            children: (0, d.jsxs)(p, {
                              as: 'button',
                              color: 'purple070',
                              onClick: function () {
                                return n('');
                              },
                              children: [
                                (0, d.jsx)(f.Z, { children: 'Reset' }),
                                (0, d.jsx)(l.Z, { color: 'purple050' }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    t
                      ? (0, d.jsx)(c.Z, {
                          marginBottom: 4,
                          children: 'Loading\u2026',
                        })
                      : '',
                  ],
                }),
              }
            )
          );
        }),
        O = (0, s.ZP)(c.Z).withConfig({
          displayName: 'CustomSearchBox__SearchInput',
          componentId: 'sc-j8a6tu-0',
        })(
          [
            "width:100%;color:inherit;font-family:inherit;font-size:inherit;background-color:transparent;border:0;background-image:url(\"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'%3E%3Cg stroke='%23D1D0DC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath clip-rule='evenodd' d='M8.50001 16C12.6421 16 16 12.6421 16 8.50001 16 4.35787 12.6421 1 8.50001 1 4.35787 1 1 4.35787 1 8.50001 1 12.6421 4.35787 16 8.50001 16z'/%3E%3Cpath d='M21.0004 21l-6.8305-6.8304'/%3E%3C/g%3E%3C/svg%3E\");background-position:left center;background-size:1.375rem;background-repeat:no-repeat;padding:1.875rem 1.875rem 1.875rem 2.625rem;appearance:none;",
            " &:focus{outline:none;background-image:url(\"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'%3E%3Cg stroke='%23A6A6BD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath clip-rule='evenodd' d='M8.50001 16C12.6421 16 16 12.6421 16 8.50001 16 4.35787 12.6421 1 8.50001 1 4.35787 1 1 4.35787 1 8.50001 1 12.6421 4.35787 16 8.50001 16z'/%3E%3Cpath d='M21.0004 21l-6.8305-6.8304'/%3E%3C/g%3E%3C/svg%3E\");}",
          ],
          (0, a.ZP)({ fontWeight: 'medium' })
        );
      j.defaultProps = {};
      var y = (0, s.ZP)(c.Z).withConfig({
        displayName: 'CustomSearchBox___StyledBox',
        componentId: 'sc-j8a6tu-1',
      })({
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
      });
    },
    72421: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = (t(67294), t(53290)),
        i = t(85893);
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
        return (0, i.jsx)(
          o.Z,
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
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = t(58804),
        c = t(37947),
        a = t(56755),
        s = t.n(a),
        l = t(27361),
        u = t.n(l),
        p = (t(67294), t(53290)),
        f = t(79968),
        d = t(8880),
        b = t(40984),
        h = t(25770),
        g = t(97023),
        j = t(89358),
        O = t(84272),
        y = t(68608),
        v = t(48860),
        w = t(85893),
        m = ['asset', 'getTitle'];
      function P(e, r) {
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
            ? P(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (r) {
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
          n = void 0 === t ? f.S : t,
          i = (0, o.Z)(e, m),
          a = r.downloadDescription,
          l = r.downloadImage,
          d = r.size,
          P = r.url,
          S = r.kind,
          k = u()(l, [0]),
          C = { href: P, target: '_blank', display: 'block' };
        return (0, w.jsxs)(
          h.Z,
          Z(
            Z(
              {
                display: 'flex',
                alignItems: [null, null, 'center'],
                rowGap: 5,
              },
              i
            ),
            {},
            {
              children: [
                (0, w.jsxs)(g.Z, {
                  width: [0.25, 0.25, 2 / 7],
                  children: [
                    k &&
                      (0, w.jsx)(O.Z, {
                        asset: k,
                        variant: 'imageDownloadVariant',
                        borderRadius: 1,
                      }),
                    !k &&
                      (0, w.jsx)(p.Z, {
                        paddingBottom: '133.333333%',
                        backgroundColor: 'purple020',
                        position: 'relative',
                        borderRadius: 1,
                        children: (0, w.jsx)(x, {
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
                (0, w.jsxs)(g.Z, {
                  width: [0.75, 0.75, 5 / 7],
                  children: [
                    (0, w.jsx)(v.Z, { variant: 'heading', children: n(r) }),
                    (0, w.jsx)(
                      D,
                      Z(
                        Z({}, C),
                        {},
                        {
                          $_css: (0, c.ZP)({
                            color: 'purple070',
                            '&:hover': { color: 'purple090' },
                          }),
                          children: (0, w.jsxs)(p.Z, {
                            display: 'flex',
                            alignItems: 'center',
                            children: [
                              (0, w.jsx)(b.Z, { marginRight: 3 }),
                              (0, w.jsxs)(v.Z, {
                                fontSize: 1,
                                fontWeight: 'medium',
                                lineHeight: 2,
                                children: [
                                  'Download ',
                                  S.toUpperCase(),
                                  ' ',
                                  (0, w.jsxs)(j.Z, {
                                    children: ['(', s()(d), ')'],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }
                      )
                    ),
                    a && (0, w.jsx)(y.Z, { rawHtml: a, marginTop: 7 }),
                  ],
                }),
              ],
            }
          )
        );
      };
      var x = (0, i.ZP)(v.Z).withConfig({
          displayName: 'Download___StyledText',
          componentId: 'sc-11esowo-0',
        })({ transform: 'translate(-50%, -50%)', userSelect: 'none' }),
        D = (0, i.ZP)(d.Z).withConfig({
          displayName: 'Download___StyledAnchor',
          componentId: 'sc-11esowo-1',
        })(['', ''], function (e) {
          return e.$_css;
        });
    },
    40984: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = (t(67294), t(53290)),
        i = t(85893);
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
        return (0, i.jsx)(
          o.Z,
          a(
            a({ width: '1.375rem', height: '1.375rem' }, e),
            {},
            {
              children: (0, i.jsxs)('svg', {
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 22 22',
                children: [
                  (0, i.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M6.29289 10.2929c.39053-.39053 1.02369-.39053 1.41422 0L11 13.5858l3.2929-3.2929c.3905-.39053 1.0237-.39053 1.4142 0 .3905.3905.3905 1.0237 0 1.4142l-4 4c-.3905.3905-1.0237.3905-1.4142 0l-4.00001-4c-.39052-.3905-.39052-1.0237 0-1.4142z',
                    fill: 'currentColor',
                  }),
                  (0, i.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M11 2c-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9 4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9zM0 11C0 4.92487 4.92487 0 11 0c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11-6.07513 0-11-4.9249-11-11z',
                    fill: 'currentColor',
                  }),
                  (0, i.jsx)('path', {
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
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = t(67294),
        c = t(97023),
        a = t(25770),
        s = t(85893),
        l = ['children'];
      function u(e, r) {
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
            ? u(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
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
          t = (0, o.Z)(e, l);
        return (0, s.jsx)(
          a.Z,
          p(
            p({ rowGap: 5 }, t),
            {},
            {
              children: i.Children.map(r, function (e, r) {
                return (0,
                s.jsx)(c.Z, { width: [1, 1, 7 / 9], children: e }, r);
              }),
            }
          )
        );
      };
    },
    37231: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = (t(67294), t(80516)),
        c = t(2002),
        a = t(68810),
        s = t(91247),
        l = t(76310),
        u = (t(91504), t(72421), t(77359)),
        p = t(4117),
        f = t(25770),
        d = t(97023),
        b = t(85893),
        h = ['perPage', 'getAssetTitle'];
      function g(e, r) {
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
      function j(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? g(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var O = (0, a.Z)(function (e) {
        var r = e.hits,
          t = e.getAssetTitle;
        return (0, b.jsx)(p.Z, {
          children: r.map(function (e) {
            var r = e.data.asset;
            return (0, b.jsx)(u.Z, { asset: r, getTitle: t }, r.id);
          }),
        });
      });
      r.Z = function (e) {
        var r = e.perPage,
          t = void 0 === r ? 12 : r,
          n = e.getAssetTitle,
          a = (0, o.Z)(e, h);
        return (0, b.jsxs)(
          i.Z,
          j(
            j({ searchClient: s.Jw }, a),
            {},
            {
              children: [
                (0, b.jsx)(c.Z, { hitsPerPage: t }),
                (0, b.jsxs)(f.Z, {
                  rowGap: [5, 5, 8],
                  children: [
                    (0, b.jsx)(d.Z, {
                      children: (0, b.jsx)(O, { getAssetTitle: n }),
                    }),
                    (0, b.jsx)(d.Z, { children: (0, b.jsx)(l.Z, {}) }),
                  ],
                }),
              ],
            }
          )
        );
      };
    },
    25416: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = (t(67294), t(77853)),
        i = t(33597),
        c = t(3892),
        a = t(23720),
        s = t(53290),
        l = t(85893);
      function u(e, r) {
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
            ? u(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
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
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(i.Z, p({ getLinkProps: o.vq }, e)),
            (0, l.jsx)(s.Z, {
              marginBottom: 4,
              children: (0, l.jsx)(a.Z, {
                href: '/downloads/state-profiles',
                as: '/downloads/state-profiles',
                passHref: !0,
                children: (0, l.jsx)(c.Z, { children: 'State Profiles' }),
              }),
            }),
            (0, l.jsx)(s.Z, {
              marginBottom: 4,
              children: (0, l.jsx)(a.Z, {
                href: '/downloads/county-profiles',
                as: '/downloads/county-profiles',
                passHref: !0,
                children: (0, l.jsx)(c.Z, { children: 'County Profiles' }),
              }),
            }),
          ],
        });
      };
    },
    89358: function (e, r, t) {
      'use strict';
      t(67294);
      var n = t(58804).ZP.span.withConfig({
        displayName: 'NoWrap',
        componentId: 'sc-14ydv6x-0',
      })(['white-space:nowrap;']);
      r.Z = n;
    },
    84272: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = (t(67294), t(53290)),
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
      function u(e) {
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
      var p = {
        imageDownloadVariant: 4 / 3,
        imageSquareVariant: 1,
        imageWidescreenVariant: 9 / 16,
      };
      function f(e) {
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
          d = e.quality,
          b = void 0 === d ? 100 : d,
          h = e.wrap,
          g = void 0 === h || h,
          j = (0, o.Z)(e, s);
        if (!t) return null;
        var O = t.title,
          y = t.width,
          v = t.height,
          w = t.focalPoint,
          m = void 0 === w ? [0.5, 0.5] : w,
          P = t.mimeType,
          Z = null !== (r = p[n]) && void 0 !== r ? r : v / y,
          x = t.url.replace(
            'legatuminstitute-uspiwebsite.s3',
            'legatuminstitute-uspiwebsite-2.s3'
          ),
          D = 'image/svg+xml' === P || 'image/svg' === P;
        D && (g = !1);
        var S = D
            ? { width: y, height: v, unoptimized: !0 }
            : { layout: 'fill', objectFit: 'cover' },
          k = (0, a.jsx)(
            c.default,
            u(
              u(
                {
                  src: x,
                  alt: O,
                  objectPosition: m
                    .map(function (e) {
                      return ''.concat(100 * e, '%');
                    })
                    .join(' '),
                  priority: l,
                  quality: b,
                },
                S
              ),
              {},
              { loader: f }
            )
          );
        return g
          ? (0, a.jsx)(
              i.Z,
              u(
                u(
                  {
                    position: 'relative',
                    paddingBottom: ''.concat(100 * Z, '%'),
                    overflow: 'hidden',
                  },
                  j
                ),
                {},
                { children: k }
              )
            )
          : k;
      };
    },
    93493: function (e, r, t) {
      'use strict';
      t(67294);
      var n = t(25770),
        o = t(97023),
        i = t(22328),
        c = t(85893);
      function a(e) {
        var r = e.title,
          t = e.sidebar,
          a = e.children;
        return (0, c.jsx)(i.Z, {
          paddingY: [7, 10, 13],
          children: (0, c.jsxs)(n.Z, {
            rowGap: [5, 5, 8],
            children: [
              r && (0, c.jsx)(o.Z, { children: r }),
              (0, c.jsx)(o.Z, {
                children: (0, c.jsxs)(n.Z, {
                  children: [
                    (0, c.jsx)(o.Z, {
                      width: [1, 1, 0.25],
                      display: ['none', null, 'block'],
                      children: t,
                    }),
                    (0, c.jsx)(o.Z, { width: [1, 1, 0.75], children: a }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      (a.defaultProps = {}), (r.Z = a);
    },
    77029: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = (t(67294), t(97023)),
        c = t(48860),
        a = t(25770),
        s = t(85893),
        l = ['children'];
      function u(e, r) {
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
            ? u(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
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
          t = (0, o.Z)(e, l);
        return (0, s.jsxs)(
          a.Z,
          p(
            p({}, t),
            {},
            {
              children: [
                (0, s.jsx)(i.Z, { width: [1, 1, 0.25] }),
                (0, s.jsx)(i.Z, {
                  width: [1, 1, 0.75],
                  children: (0, s.jsx)(c.Z, { variant: 'title', children: r }),
                }),
              ],
            }
          )
        );
      };
    },
    3892: function (e, r, t) {
      'use strict';
      t(67294);
      var n = t(58804),
        o = t(8880),
        i = t(37947),
        c = (0, n.ZP)(o.Z).withConfig({
          displayName: 'SidebarAnchor',
          componentId: 'sc-1ydih4z-0',
        })(
          ['', ' ', ''],
          (0, i.ZP)({
            fontSize: 4,
            fontWeight: 'medium',
            lineHeight: 3,
            '&:hover': { color: 'inherit' },
          }),
          function (e) {
            return !e.active && (0, i.ZP)({ color: 'purple070' });
          }
        );
      r.Z = c;
    },
    33597: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = (t(67294), t(59444)),
        i = t(3892),
        c = t(85893);
      function a(e, r) {
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
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (r) {
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
        return (0, c.jsx)(
          o.Z,
          s(
            s({ itemProps: { marginBottom: 4 } }, e),
            {},
            {
              children: function (e) {
                var r = e.title;
                return (0, c.jsx)(i.Z, { children: r });
              },
            }
          )
        );
      };
    },
    17483: function (e, r, t) {
      'use strict';
      t.d(r, {
        Z: function () {
          return i;
        },
      });
      var n = t(11163),
        o = t(67294);
      function i(e) {
        var r = e.initialSearchState,
          t = e.getRouteFromState,
          i = (0, n.useRouter)(),
          c = (0, o.useState)(r),
          a = c[0],
          s = c[1];
        return (
          (0, o.useEffect)(
            function () {
              var e = t(a),
                r = e.href,
                n = e.as;
              n && i.asPath !== n && i.push(r, n, { shallow: !0 });
            },
            [a]
          ),
          { searchState: a, setSearchState: s }
        );
      }
    },
    91247: function (e, r, t) {
      'use strict';
      t.d(r, {
        Jw: function () {
          return a;
        },
        s1: function () {
          return s;
        },
      });
      var n = t(24955),
        o = t.n(n),
        i = t(34155),
        c = '1I9B6FFYTV',
        a =
          (o()(c, i.env.ALGOLIA_ADMIN_API_KEY),
          o()(c, '64c36ae3bd45f7a63c2e6939c05156f6'));
      function s(e) {
        return ''.concat('production', '_').concat(e);
      }
    },
    79968: function (e, r, t) {
      'use strict';
      t.d(r, {
        S: function () {
          return o;
        },
        v: function () {
          return i;
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
        o = function (e) {
          return e.title;
        },
        i = function (e) {
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
    79630: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          __N_SSG: function () {
            return c;
          },
        });
      t(67294);
      var n = t(22328),
        o = t(48860),
        i = t(85893);
      var c = !0;
      r.default = function () {
        return (0, i.jsxs)(n.Z, {
          paddingY: [7, 10, 13],
          children: [
            (0, i.jsx)(o.Z, {
              as: 'h1',
              variant: 'largeHeading',
              children: '404',
            }),
            (0, i.jsx)(o.Z, {
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
