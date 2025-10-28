import {
    getAstByJs,
    readFile, getJsByAst, writeFile
} from "../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import {fileURLToPath} from "url";

const traverse = traverseModule.default || traverseModule;

function y(N, W) {
    const M = R();
    return y = function (O, T) {
        O = O - 308;
        let B = M[O];
        if (y.fMXGtx === undefined) {
            var Y = function (d) {
                const G = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let z = "",
                    S = "",
                    a = z + Y;
                for (let l = 0, F, t, g = 0; t = d.charAt(g++); ~t && (F = l % 4 ? F * 64 + t : t, l++ % 4) ? z += a.charCodeAt(g + 10) - 10 !== 0 ? String.fromCharCode(255 & F >> (-2 * l & 6)) : l : 0) {
                    t = G.indexOf(t);
                }
                for (let C = 0, Z = z.length; C < Z; C++) {
                    S += "%" + ("00" + z.charCodeAt(C).toString(16)).slice(-2);
                }
                return decodeURIComponent(S);
            };
            const A = function (d, G) {
                let z = [],
                    S = 0,
                    a,
                    l = "";
                d = Y(d);
                let F;
                for (F = 0; F < 256; F++) {
                    z[F] = F;
                }
                for (F = 0; F < 256; F++) {
                    S = (S + z[F] + G.charCodeAt(F % G.length)) % 256, a = z[F], z[F] = z[S], z[S] = a;
                }
                F = 0, S = 0;
                for (let t = 0; t < d.length; t++) {
                    F = (F + 1) % 256, S = (S + z[F]) % 256, a = z[F], z[F] = z[S], z[S] = a, l += String.fromCharCode(d.charCodeAt(t) ^ z[(z[F] + z[S]) % 256]);
                }
                return l;
            };
            y.KuLLrv = A, N = arguments, y.fMXGtx = !![];
        }
        const x = M[0],
            I = O + x,
            w = N[I];
        if (!w) {
            if (y.jddRuC === undefined) {
                const d = function (G) {
                    this.XOgowW = G, this.DURrIM = [1, 0, 0], this.RGNXIZ = function () {
                        return "newState";
                    }, this.EorVRU = "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*", this.WVPgVA = "[\x27|\x22].+[\x27|\x22];?\x20*}";
                };
                d.prototype.bTcNvY = function () {
                    const G = new RegExp(this.EorVRU + this.WVPgVA),
                        z = G.test(this.RGNXIZ.toString()) ? --this.DURrIM[1] : --this.DURrIM[0];
                    return this.ptBJaa(z);
                }, d.prototype.ptBJaa = function (G) {
                    if (!Boolean(~G)) return G;
                    return this.oMCdqD(this.XOgowW);
                }, d.prototype.oMCdqD = function (G) {
                    for (let z = 0, S = this.DURrIM.length; z < S; z++) {
                        this.DURrIM.push(Math.round(Math.random())), S = this.DURrIM.length;
                    }
                    return G(this.DURrIM[0]);
                }, new d(y).bTcNvY(), y.jddRuC = !![];
            }
            B = y.KuLLrv(B, T), N[I] = B;
        } else B = w;
        return B;
    }, y(N, W);
}


function T(N, W) {
    const M = R();
    return T = function (O, y) {
        O = O - 308;
        let B = M[O];
        if (T.fZRWjg === undefined) {
            var Y = function (A) {
                const d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let G = "",
                    z = "",
                    S = G + Y;
                for (let a = 0, l, F, t = 0; F = A.charAt(t++); ~F && (l = a % 4 ? l * 64 + F : F, a++ % 4) ? G += S.charCodeAt(t + 10) - 10 !== 0 ? String.fromCharCode(255 & l >> (-2 * a & 6)) : a : 0) {
                    F = d.indexOf(F);
                }
                for (let g = 0, C = G.length; g < C; g++) {
                    z += "%" + ("00" + G.charCodeAt(g).toString(16)).slice(-2);
                }
                return decodeURIComponent(z);
            };
            T.oOvROE = Y, N = arguments, T.fZRWjg = !![];
        }
        const x = M[0],
            I = O + x,
            w = N[I];
        if (!w) {
            const A = function (d) {
                this.bFlGYa = d, this.kFdkIF = [1, 0, 0], this.lJYsxr = function () {
                    return "newState";
                }, this.UEndpS = "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*", this.cLlcyX = "[\x27|\x22].+[\x27|\x22];?\x20*}";
            };
            A.prototype.rRRNBk = function () {
                const d = new RegExp(this.UEndpS + this.cLlcyX),
                    G = d.test(this.lJYsxr.toString()) ? --this.kFdkIF[1] : --this.kFdkIF[0];
                return this.PmpdcA(G);
            }, A.prototype.PmpdcA = function (d) {
                if (!Boolean(~d)) return d;
                return this.AKcqZX(this.bFlGYa);
            }, A.prototype.AKcqZX = function (d) {
                for (let G = 0, z = this.kFdkIF.length; G < z; G++) {
                    this.kFdkIF.push(Math.round(Math.random())), z = this.kFdkIF.length;
                }
                return d(this.kFdkIF[0]);
            }, new A(T).rRRNBk(), B = T.oOvROE(B), N[I] = B;
        } else B = w;
        return B;
    }, T(N, W);
}

function R() {
    const B0 = [
        "yLH0vva",
        "C1H1zeS",
        "WOFdP3/dJCk6",
        "W5VcHgFdV8kG",
        "W5eycmo7ECo1W7D8WR/dKa",
        "W6TRqvTo",
        "yuDJq2O",
        "zxHJzxb0Aw9U",
        "D29pz1a",
        "we96ueq",
        "q3PVtNK",
        "rKrdD3i",
        "uK10uMW",
        "y8kVjMX2",
        "WP3cM3VcUmkCCSkTWPyvW6i",
        "Ew1fEuK",
        "z2DAv3C",
        "W4ffDhTB",
        "CeDeExu",
        "W63cH3ldNCk7",
        "vMvut1O",
        "WRRcP8kGW6HV",
        "CgfYC2u",
        "gSkMCSkrWQO",
        "Dg9tDhjPBMC",
        "WPhdU8k0hSoG",
        "AhzwwKS",
        "q2nVDg8",
        "ACo5WRO7",
        "gI3cTvJcPq",
        "W7NdSSoyW7hcQa",
        "t8kYiSo7wq",
        "C0nxq2O",
        "q0jd",
        "WP/cK8oMiMjA",
        "z1PUAuy",
        "W7fkoNr1",
        "DgfIBgu",
        "W5GIzSoArSonW5ZdKuhcVG",
        "yCkljcNcS2FdV8oLpmkl",
        "qSkzaKrjAG",
        "lbBdOmoDka",
        "WOixWRbGbSkBW54",
        "mxW0Fdb8mNWZ",
        "z2v0vgLTzq",
        "tvflwuu",
        "tciyWPVdTq",
        "BePiuMi",
        "yNLsBNy",
        "y2BcSSoBWP4",
        "W7RdSIiLWQi",
        "W7bBWR/dTdK",
        "z05bENy",
        "twHADwW",
        "y2HHCKnVzgvbDa",
        "b8kYWR51WPq",
        "t8otWQVdHhq",
        "uMv3y3m",
        "W5tdIZJdVCkj",
        "W5NdUriPWRC",
        "DuX6r1q",
        "WPhdOSkZa8ou",
        "xCkihKPtztOwWOS",
        "wxnAv00",
        "nZiZmJuWnxPmtMjgDa",
        "b8kvFSkxWPS",
        "yLjLCha",
        "WOldOSkqjSov",
        "W494xhjU",
        "WPLYzmoy",
        "B0jRs3u",
        "zw5J",
        "rfDuAfa",
        "sCo/WR7dN1u",
        "zSoKWRy",
        "qNPeD0u",
        "g8kYrmkSWQK",
        "W5BcOsKMlq",
        "5OIr55UV552a5l2G5zgI5Bcp5A2q",
        "s2zfBMK",
        "wfjUvvG",
        "W5ldVHZdVmkU",
        "W6HbWPddLqi",
        "vCkbqKbsBcaeWOddUW",
        "W6VdNIJdG8kN",
        "W6VcHhlcNWG",
        "uwL2CMm",
        "vmkyfCoAAq",
        "y25XEeO",
        "pqhcHx3cGG",
        "y0LrqLy",
        "AejUsfe",
        "orVdKa",
        "BgrKq2u",
        "Bg9N",
        "sNDnCgG",
        "ntr0y1vKuNK",
        "sMrZqLG",
        "WQBdUeRcVa",
        "WO/cQH3dVgi",
        "s8kpgKLX",
        "WPldP8ooW5FcV2dcGSk0hg8",
        "ALvWtNi",
        "dJVcUx/cRa",
        "WQf9W5hdTCkf",
        "jCkwFmklWQm",
        "rLJcPSoyWRVdHNLMWPe",
        "WPddO0ldP8kZzW",
        "W73cL2ldMCk5",
        "txj0CgS",
        "pSk4CmkeWPK",
        "zCkqiCoNEa",
        "WPPzx8osqW",
        "D1PNANO",
        "W73cM03dKa",
        "tdywWRBdIa",
        "q3LKD3e",
        "vtmdWOddRW",
        "tmkukgXr",
        "WPxcHc3dMMG",
        "D21nwfu",
        "q0vZr20",
        "W5nZFMPu",
        "WRZcKCoUdeC",
        "W6q8FSomwq",
        "CMD1BwvUDhnBma",
        "W5TAqu9F",
        "W47cM1xdHSkR",
        "z8kPWPdcVdq",
        "CgXyBxa",
        "DLjgtg0",
        "W5xcRNpcIYG",
        "uLLqDLO",
        "wx8Igmoq",
        "ugjhsNy",
        "svrXy1i",
        "B2WieCod",
        "WRW6D8kkW5L7",
        "x04KbCot",
        "W708ldej",
        "wKjTvMq",
        "sGiTWOpdLW",
        "pCkfWQTfWQrw",
        "jSk0C8oFjSkHtmownW",
        "smkddbRcOq",
        "eSkWWRNdIem",
        "dmkTx8knWO1i",
        "W6RdO8oTW4RcVSo4WQ/cJ8o/WOK",
        "W7PYohD4",
        "W6fzWQ93hCkpbCkcWRu",
        "BeXTu0q",
        "W4dcSbKe",
        "vu9PAva",
        "WP1CW4ldUSk+",
        "W77dTqqsWPW",
        "EfDdqNG",
        "wKvYq3y",
        "sufSBfO",
        "W4mEjYWn",
        "b8kUECkjWQa",
        "Aw5MBW",
        "WRDLWRGBnW",
        "W6P1WRr4ma",
        "WOK0r8kiW70",
        "WPmQrCkQW4a",
        "l8kUWOtdQNy",
        "uNL6q0O",
        "zLDrvMu",
        "y29UC3rYDwn0BW",
        "ugGMcW",
        "u0zXreK",
        "sujxyKe",
        "EhPNEeO",
        "WOFcVmokcvS",
        "qLzODe8",
        "gmkUDSkKWPq",
        "ACoRWR3dLfK",
        "Ew9Uy3e",
        "q8kyhrNcQa",
        "EhDurxK",
        "mJJdMSoWia",
        "WPRdP8ksh8ot",
        "ywDeveO",
        "WOVcUtpdQX4HgW",
        "WRqYzmkvW4K",
        "sNL0BNi",
        "WOSDWRnUmG",
        "u3VcHCoNWRa",
        "qMHqrue",
        "etRdPSoZhG",
        "sgnvs1i",
        "wMDhsM0",
        "tvjwAgS",
        "mdeYmZq1nJC4oq",
        "orddLSoF",
        "xsSI",
        "WQPCqmojFa",
        "uu9tqKG",
        "W5X0WOXCnq",
        "s2D5AuO",
        "WRqHmvaY",
        "W5evEHKmWP5zamkjlW",
        "W63dNCoaW6ZcTG",
        "y3rVCIGICMv0Dq",
        "WOldQSkNW4/cOG",
        "WP44v8kUW48",
        "y29Uy2f0",
        "mtb2yw9HzKu",
        "vwTIvxi",
        "BxPXtfK",
        "suf0q1m",
        "C3vJy2vZCW",
        "yLzqsxO",
        "ELv1wxu",
        "WPZcKYJdMg4",
        "W7/dUaK0WR/dI8ku",
        "wKTqzwu",
        "W6RdVWFdTmkO",
        "kSkUvSkJWPS",
        "D3vUywm",
        "ddBcPwxcJa",
        "x8k3hYBcUq",
        "pCkuWQTdWRjnE1qGWQm",
        "WRudu8k8pG",
        "WR/cGW3dLW",
        "w1NdSsy",
        "W7e0D8o0zW",
        "yxbWBhK",
        "s29Ssfa",
        "umk3W77cPu8",
        "DxLPDNG",
        "uKfbwvi",
        "C2zhvwe",
        "Be4IfNG",
        "B3fOy2u",
        "DejTAfy",
        "WRNdJv/dR8k8",
        "zNjVBunOyxjdBW",
        "zM9YrwfJAa",
        "WOjpW6JdTCkr",
        "BmkNp8omxW",
        "WQpdQmkXmSo7",
        "Bef3z1i",
        "B2vXs1u",
        "ySoUWRehW7icW7vWW6uA",
        "WPhcU8kdW4no",
        "twDrBLe",
        "WRNdHSkRamoG",
        "ACkzWQpcSYq",
        "aKZcRG",
        "q8k3W5tcQfuBxvRcTWC",
        "prlcH0ZcQW",
        "fspdG8oidW",
        "WQFdJmoimCoXEG",
        "WOpdH07dRCkh",
        "WRZdTCkliSot",
        "WOi0B8kvW6S",
        "EKjIwui",
        "vmk4W7VcOvq",
        "DKXmz3K",
        "twPKsem",
        "AxHKDKG",
        "W7eOkSocxG",
        "WO/cUtZdQa87",
        "D21wr3G",
        "WRSPqa",
        "dmoUf8o/DsajAW",
        "q1Devgq",
        "fG/dPSoBhW",
        "ufLWDM4",
        "rNtcOCovWP4",
        "v8k5lmoiEW",
        "z1PdvKG",
        "q0zWvem",
        "WQ/cTmkwW693",
        "vgzNBMC",
        "W4ZdJYVdQSkjyCkk",
        "mZi3otu4meDgrejZDW",
        "ba7cV1VcUG",
        "u05xqKC",
        "W4JcPKlcKa0",
        "W4aSnHSe",
        "WPrIW4ZdRCkf",
        "W69qtNXK",
        "W4ddRJNdMSka",
        "tLrSsge",
        "mZKXnLHoAhLdCq",
        "t8o5WRGVW4u",
        "nCk4ESkrWPK",
        "DMHbz3K",
        "B8kdb8o/Aa",
        "WQxdO8kuW47cOq",
        "WQqweMeH",
        "u0HbmJu2",
        "W5ZcTrKVeG",
        "yKLdvum",
        "W5RcQ8okE8kBhtyIWPXJ",
        "EMvPrvy",
        "y2LWAgvYDgv4Da",
        "EhHVBW",
        "WRTfAMVdOq",
        "m3WXFdb8nhWY",
        "W6BcGJ0iha",
        "W6eQa8oSBG",
        "pSk3yCkPWR8",
        "zxjYB3i",
        "bCk3DSk8WOvrga",
        "WR/dImkgnmoL",
        "eWBdNSoydG",
        "zenAqMO",
        "thG7bhHs",
        "W4OMD8ocsG",
        "vu55ruK",
        "u0vrzhy",
        "vwDlq0y",
        "W4/dVSoihSon",
        "WRPIWRmInG",
        "WRj9W6ldKmkhWPCeuWJdTq",
        "vmoAWPJdV0y",
        "s0vjvva",
        "W6iClIGn",
        "W6eeuCoNDq",
        "dJNdT2lcGwxdTaNdQSkJ",
        "pmoZWO3dVHjeEKZdLZddTZC",
        "r3fivha",
        "W5SHpSoOsG",
        "W6pdOSoOW7ZcVSo5WQW",
        "WOzVWOC8ea",
        "y1Hzzxi",
        "W5juux18",
        "kYhdGmoBcG",
        "y0feEMu",
        "zwvLzq",
        "sSkLW5ZcGNa",
        "fCkaWPVdGvS",
        "y2HHCKf0",
        "pmk7ySkPWQm",
        "AHGHWRldUa",
        "mty0mwnoufb3Ca",
        "zeDoqvu",
        "ExPTrKq",
        "DgH6qwS",
        "tunVqvy",
        "W6fMv0GfWOzIW43dNxy",
        "vKPMAKS",
        "W7WYnqi3",
        "zwPNyLa",
        "twfkD0e",
        "DCk3W4NcOW",
        "ChvZAa",
        "EfLOtvm",
        "qw9jAwG",
        "EYONWPddRCokhqKl",
        "wmkeWONcPX4",
        "W7VdPmoAW7/cUa",
        "wgvMCuq",
        "Ee4Zo2C",
        "p8khvmkhWPu",
        "vMTxu0O",
        "qujdrevg",
        "DwPVwMu",
        "BCoRWONdGuS",
        "zezIqwO",
        "A0TIt0G",
        "WPlcHSo4kw8",
        "tg9hEeK",
        "WPTBzKnuW4zMo8kViKHB",
        "tMfks1O",
        "Ew5hq0S",
        "uxPbANu",
        "vxrMoa",
        "yKjYELi",
        "BunqBvG",
        "vNzeDhi",
        "D1PXANa",
        "WRPJs8oDqG",
        "ymoIWRqNW5qEW6f6W4OD",
        "EejmA0K",
        "WQu9WPe",
        "CmkNnCoMDCk+fq",
        "ww1Wruq",
        "W6iygZeZ",
        "CvHRDuy",
        "uevLAxK",
        "B8kOc0vW",
        "wLrnwM8",
        "W6/cTMxdPSkA",
        "xhxcL8oaWQe",
        "r8kYbSojyq",
        "uSkwW4lcGeS",
        "z2vSruC",
        "xt0qWRBdUW",
        "W65cWQhdLcG",
        "n8oYWOldVXudE0FdQcpdMa",
        "sw50zxjJzxb0BW",
        "wMjWwLq",
        "wuvzAMe",
        "WPhdQCkKz8kHomoRW5/dJ8oa",
        "W5xdGmoinCov",
        "WQnEWOOGba",
        "BLLKChC",
        "W7XpWRH9f8ksxG",
        "ySkuguDO",
        "WR7dJ8kjgCox",
        "rLLlrw0",
        "sLzuyM8",
        "tvDSuuG",
        "yMvbBxe",
        "W4TCbxD4",
        "CMTgC2G",
        "WO9uCwFdSq",
        "ANz1tey",
        "B29VB29V",
        "WRqxumk0W74",
        "W5GJzmonvSonW7S",
        "b8keW67cHYxdVI0odJpcIIa",
        "cSkWq8kbWP4",
        "WRa4rCkVW4q",
        "neTbwgnPEa",
        "W6i2amooAW",
        "W7PluhD+",
        "AMvwEuK",
        "WPZcHG7dJMu",
        "vwXOBg4",
        "ChHAweq",
        "C3bSAxq",
        "ESkBpspcIMS",
        "cCoRuCkVfhfTjCktWQ4",
        "WOBdQmkXhmoy",
        "CgfK",
        "wLnYsgK",
        "ote3ntm2shHivNPN",
        "wvjzzNO",
        "i3hcQH9v",
        "zxn2AKW",
        "DvzICgi",
        "mJa4ndrXsxn3rvu",
        "W43dRsyTWQu",
        "WRXMBmobva",
        "W4OzcmoLt8o1",
        "W5aIc8o6AW",
        "v3LttgW",
        "DgTtswG",
        "Dhjny0C",
        "WPfYAContZ0",
        "qvrNzK0",
        "WOldOmkaW4C",
        "E8kRkatcMW",
        "W7ZcINxdV8ky",
        "W6TxCvLE",
        "s3DnExC",
        "E8kxWOdcQbO",
        "W57cHuZcVI4",
        "tuXgAgO",
        "BgvUz3rO",
        "zxPuEMW",
        "cmk2rmkjWQq",
        "BSk3W77cM1C",
        "sgDTuxO",
        "nmk9WOtdIwOgWOXharW",
        "svrSv3m",
        "DePcte0",
        "W47cGNpdV8kI",
        "y29UC29Szq",
        "WRb8W5BdPmkq",
        "u0zIuui",
        "WP1Az0HwW4aFdSk3feLOWRm",
        "rwfwAxO",
        "m8kyzSktWQ8",
        "Bw9Kzq",
        "W6RdTCoOW6JcRa",
        "CfbOwvm",
        "tdC5WQRdKW",
        "WRC8t8khW5y",
        "C3LqD0C",
        "r1nRBKy",
        "W7VcTgBcIqldIq",
        "WP/dQuldO8kMEW",
        "WRdcLKldGmkPDSoV",
        "W7/dTCoOW7VcVG",
        "rxjYB3iGzMv0yW",
        "ESkTkCoeymk1",
        "WRtcPSklW7fX",
        "DKLvuKO",
        "WRP0D1RdOa",
        "WOrtWPe/mW",
        "WONdOe9xkfG7W4e9WOi",
        "WQzXs2BdNW",
        "CeTIAvu",
        "CXW2WRRdSa",
        "mmkWEG",
        "wufWtK4",
        "W67dUWKUWPu",
        "ywntz1i",
        "vwewe8oJ",
        "W4vEv11R",
        "Cxrcre0",
        "W73cK0RcVYu",
        "WRpdGSkhgSod",
        "WQJdGmkNimoa",
        "Cmo6WRK8W6m",
        "ywrKuMvXDwvZDa",
        "Buj2rKK",
        "CuvPrhK",
        "vCk2jCo7vq",
        "W6D1WPddTYxcPa",
        "mtmYotC2te9uEgn1",
        "cqhcRxfSDaP6yL0",
        "AxLIBLi",
        "n8kbWO5qWOq",
        "A8kwkctcUxhcP8k1nCkr",
        "mZdcSv/cUa",
        "WOXhDu7dGG",
        "zgD5seO",
        "igBcNtLk",
        "BgLPBwq",
        "DePIyLe",
        "B8oiWPZdNf8",
        "WPFdK8kjW4NcRq",
        "s0OSeuC",
        "WQWpv8kqbG",
        "W5hdICoVnSofEsS",
        "WPmSzmkrfW",
        "WOebD8kDia",
        "dZpdGSo+aG",
        "thnTELi",
        "BuDwyK4",
        "BKzqA1y",
        "amkqu8ktWO0"
    ];
    R = function () {
        return B0;
    };
    return R();
}

// 字符串解密
function encryptStrY(path, name) {
    if (types.isIdentifier(path.node.init, {name})) {
        const leftName = path.node.id.name;
        const binding = path.scope.getBinding(leftName);
        if (binding) {
            const {referencePaths} = binding;
            for (const p of referencePaths) {
                if (types.isCallExpression(p.parentPath)) {
                    const [param1, param2] = p.parentPath.node.arguments;
                    const plainText = y(param1.value, param2?.value);
                    p.parentPath.replaceWith(types.stringLiteral(plainText));
                    console.log(`${leftName}('${param1.value}') => ${plainText}`);
                } else {
                    encryptStrY(p.parentPath, leftName);
                }
            }
        }
    }
}

function encryptStrT(path, name) {
    if (types.isIdentifier(path.node.init, {name})) {
        const leftName = path.node.id.name;
        const binding = path.scope.getBinding(leftName);
        if (binding) {
            const {referencePaths} = binding;
            for (const p of referencePaths) {
                if (types.isCallExpression(p.parentPath)) {
                    const [param1, param2] = p.parentPath.node.arguments;
                    const plainText = T(param1.value);
                    p.parentPath.replaceWith(types.stringLiteral(plainText));
                    console.log(`${leftName}('${param1.value}') => ${plainText}`);
                } else {
                    encryptStrT(p.parentPath, leftName);
                }
            }
        }
    }
}

// 常量计算出具体数值
function computedCommon(path) {
    if (types.isBinaryExpression(path.node.left)) {
        computedCommon(path.get("left"));
    }

    if (types.isBinaryExpression(path.node.right)) {
        computedCommon(path.get("right"));
    }

    if (types.isLiteral(path.node.left) && types.isLiteral(path.node.right)) {
        const leftVal = path.node.left.value;
        const rightVal = path.node.right.value;
        const operator = path.node.operator;
        if (!isNaN(leftVal) && !isNaN(rightVal)) {
            path.replaceWith(types.numericLiteral(eval(leftVal + operator + rightVal)));
        }
    }

    if (types.isLiteral(path.node.left) && types.isUnaryExpression(path.node.right)) {
        const leftVal = path.node.left.value;
        const rightVal = eval(path.node.right.operator + path.node.right.argument.value);
        const operator = path.node.operator;
        if (!isNaN(leftVal) && !isNaN(rightVal)) {
            path.replaceWith(types.numericLiteral(eval(leftVal + operator + rightVal)));
        }
    }

    if (types.isUnaryExpression(path.node.left) && types.isUnaryExpression(path.node.right)) {
        const leftVal = eval(path.node.left.operator + path.node.left.argument.value);
        const rightVal = eval(path.node.right.operator + path.node.right.argument.value);
        const operator = path.node.operator;
        if (!isNaN(leftVal) && !isNaN(rightVal)) {
            path.replaceWith(types.numericLiteral(eval(leftVal + operator + rightVal)));
        }
    }

    if (types.isUnaryExpression(path.node.left) && types.isLiteral(path.node.right)) {
        const leftVal = eval(path.node.left.operator + path.node.left.argument.value);
        const rightVal = path.node.right.value;
        const operator = path.node.operator;
        if (!isNaN(leftVal) && !isNaN(rightVal)) {
            path.replaceWith(types.numericLiteral(eval(leftVal + operator + rightVal)));
        }
    }
}


// 去除未引用代码
function removeUnusedCode(path) {
    const binding = path.scope.getBinding(path.node.name);
    if (binding) {
        const {referencePaths} = binding;
        if (referencePaths.length === 0) {
            if (types.isVariableDeclarator(path.parentPath)) {
                path.parentPath.remove();
                console.log(`remove ${path.node.name}`);
            }
        }
    }
}


async function main() {
    const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./page8.js");
    // const encryptJsPath = "./input.js";
    let jsCode = await readFile(encryptJsPath);
    const ast = getAstByJs(jsCode);
    // 字符串解密
    traverse(ast, {
        VariableDeclarator(path) {
            encryptStrY(path, "y");
            encryptStrT(path, "T");
        },
        MemberExpression(path) {
            if (types.isMemberExpression(path.node) && types.isLiteral(path.node.property)) {
                path.node.property = types.identifier(path.node.property.value);
                path.node.computed = false;
            }
        },
        BinaryExpression(path) {
            computedCommon(path);
        },
    });
    let newAst = getAstByJs(getJsByAst(ast));
    traverse(newAst, {
        Identifier(path) {
            removeUnusedCode(path);
        }
    });
    const newJsCode = getJsByAst(ast);
    const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./page7_decrypt.js");
    writeFile(outputJsPath, newJsCode);
    // writeFile("./input_decrypt.js", newJsCode);
}

main();
