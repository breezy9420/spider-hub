import axios from "axios";
import {logger} from "../../util/logUtil.js";
import {sleep} from "../../util/index.js";
import CryptoJs from "crypto-js";

var window = global;
var Y = {
    "JRVIF": "sfGUa",
    "ivsVn": "(((.+)+)+)" + "+$",
    "OtbMK": function (p, v) {
        return p !== v;
    },
    "hBnHQ": "YmpED",
    "gTJhf": "0|4|2|1|3",
    "JfqPw": function (p, v) {
        return p < v;
    },
    "ldgNJ": function (p, v) {
        return p >> v;
    },
    "thzAk": function (p, v) {
        return p << v;
    },
    "xYhMS": function (p, v) {
        return p & v;
    },
    "agDTJ": function (p, v) {
        return p / v;
    },
    "ynGCK": function (p, v) {
        return p * v;
    },
    "MKdaU": function (p, v) {
        return p - v;
    },
    "Qivrc": function (p, v) {
        return p >> v;
    },
    "zfggV": function (p, v) {
        return p < v;
    },
    "rlniE": function (p, v) {
        return p === v;
    },
    "MaJwA": "SZkWU",
    "VJfjK": function (p, v) {
        return p(v);
    },
    "qFTbm": function (p, v) {
        return p + v;
    },
    "sXudK": function (p, v) {
        return p + v;
    },
    "ixdvH": "return (fu" + "nction() ",
    "uPJhQ": "{}.constru" + "ctor(\"retu" + "rn this\")(" + "\x20)",
    "JzUaT": function (p, v) {
        return p === v;
    },
    "gelEG": function (p, v) {
        return p(v);
    },
    "eOMDf": function (p, v, L, j) {
        return p(v, L, j);
    },
    "UNyEI": "QOSBH",
    "mSUio": "trMcG",
    "FgysG": "yzmFD",
    "XSfXk": "bRbsQ",
    "MhZul": "warn",
    "UOiiP": "info",
    "jUpNr": "exception",
    "ZErCv": "trace",
    "tBmhV": function (p, v) {
        return p < v;
    },
    "bICUC": function (p, v) {
        return p + v;
    },
    "sHyFP": function (p, v) {
        return p & v;
    },
    "PzEkN": function (p, v) {
        return p | v;
    },
    "SNWBG": function (p, v) {
        return p + v;
    },
    "Ojybj": function (p, v) {
        return p >> v;
    },
    "cXYer": function (p, v) {
        return p | v;
    },
    "TjHlL": function (p, v) {
        return p >>> v;
    },
    "rkFsh": function (p, v) {
        return p !== v;
    },
    "ZkAHc": "yaDgC",
    "wZgjz": function (p, v, L) {
        return p(v, L);
    },
    "MjdHC": function (p, v, L) {
        return p(v, L);
    },
    "liimd": function (p, v, L, j, E, b, H) {
        return p(v, L, j, E, b, H);
    },
    "WoFjQ": function (p, v) {
        return p & v;
    },
    "EaViz": "3|1|0|4|2",
    "qtBDM": function (p, v) {
        return p >> v;
    },
    "cIQBV": function (p, v) {
        return p << v;
    },
    "oeqKU": function (p, v) {
        return p % v;
    },
    "FDCwr": function (p, v) {
        return p + v;
    },
    "MgQnQ": function (p, v) {
        return p << v;
    },
    "HgmQz": function (p, v) {
        return p >>> v;
    },
    "bBrzR": function (p, v) {
        return p + v;
    },
    "tzQvI": function (p, v) {
        return p < v;
    },
    "tkSIh": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "vRFLm": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "QzAju": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "tJBLM": function (p, v) {
        return p + v;
    },
    "PFiGQ": function (p, v) {
        return p + v;
    },
    "nVcFB": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "oqhce": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "esvjL": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "CXCKd": function (p, v) {
        return p + v;
    },
    "Tfgng": function (p, v) {
        return p + v;
    },
    "mzqLY": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "LsmzR": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "gZniF": function (p, v) {
        return p + v;
    },
    "vLLgy": function (p, v) {
        return p + v;
    },
    "yoncq": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "OgfIQ": function (p, v) {
        return p + v;
    },
    "HcUKR": function (p, v) {
        return p + v;
    },
    "fWQVe": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "wZqjp": function (p, v) {
        return p + v;
    },
    "CzoNy": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "wmMXU": function (p, v) {
        return p + v;
    },
    "LLkLg": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "woOgP": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "Aqkko": function (p, v) {
        return p + v;
    },
    "qEiDy": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "Pxlkx": function (p, v) {
        return p + v;
    },
    "wlGJx": function (p, v) {
        return p + v;
    },
    "MQKYE": function (p, v) {
        return p + v;
    },
    "PEeiy": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "vMghD": function (p, v) {
        return p + v;
    },
    "IAtCS": function (p, v) {
        return p + v;
    },
    "WTxKj": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "OeUPc": function (p, v) {
        return p + v;
    },
    "bRepp": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "NOpHR": function (p, v) {
        return p + v;
    },
    "llFgu": function (p, v) {
        return p + v;
    },
    "RYPvZ": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "SEQdv": function (p, v) {
        return p + v;
    },
    "WaYIj": function (p, v) {
        return p + v;
    },
    "MLFhj": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "CEsGm": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "hURGh": function (p, v) {
        return p + v;
    },
    "iybnR": function (p, v) {
        return p + v;
    },
    "NHAfr": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "LhudU": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "sCWCj": function (p, v) {
        return p + v;
    },
    "mGVbN": function (p, v, L) {
        return p(v, L);
    },
    "VYdcH": function (p, v, L) {
        return p(v, L);
    },
    "NUMzD": function (p, v) {
        return p === v;
    },
    "SWgqI": "kKbOH",
    "dDsTl": function (p, v) {
        return p & v;
    },
    "ITlWs": function (p, v) {
        return p ^ v;
    },
    "GxadT": function (p, v) {
        return p !== v;
    },
    "NqpiH": function (p, v) {
        return p | v;
    },
    "hCATJ": "1|4|0|2|3",
    "nYdpw": function (p, v) {
        return p < v;
    },
    "cxVKP": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "xWCBx": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "YsZWM": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "XOzPD": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "pcSgc": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "emqSw": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "AoIih": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "uYXIU": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "aiUFT": function (p, v) {
        return p + v;
    },
    "BobaN": function (p, v) {
        return p + v;
    },
    "JAskn": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "ZgGJm": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "CWDTd": function (p, v) {
        return p + v;
    },
    "AOOse": function (p, v) {
        return p + v;
    },
    "WySLl": function (p, v) {
        return p + v;
    },
    "rtemr": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "hvVZK": function (p, v) {
        return p + v;
    },
    "gNAzv": function (p, v) {
        return p + v;
    },
    "IAllZ": function (p, v) {
        return p + v;
    },
    "txapw": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "DSgnr": function (p, v) {
        return p + v;
    },
    "pPhYS": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "DWThP": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "SFbQB": function (p, v) {
        return p + v;
    },
    "XRnUX": function (p, v) {
        return p + v;
    },
    "ZSrHi": function (p, v) {
        return p + v;
    },
    "AAeOs": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "caQVd": function (p, v) {
        return p + v;
    },
    "mBvFI": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "bXtUP": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "BhPEA": function (p, v) {
        return p + v;
    },
    "ruQis": function (p, v) {
        return p + v;
    },
    "phRWA": function (p, v) {
        return p + v;
    },
    "JVTbo": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "jDbag": function (p, v) {
        return p + v;
    },
    "fpWGu": function (p, v) {
        return p + v;
    },
    "PhUUA": function (p, v) {
        return p + v;
    },
    "vhAgy": function (p, v) {
        return p + v;
    },
    "lXZae": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "RyzCJ": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "PbGJv": function (p, v) {
        return p + v;
    },
    "uVbpb": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "iYCqt": function (p, v) {
        return p + v;
    },
    "KfUog": function (p, v) {
        return p + v;
    },
    "SySGO": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "xadfr": function (p, v) {
        return p + v;
    },
    "OsmbE": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "FhDuY": function (p, v, L, j, E, b, H, m) {
        return p(v, L, j, E, b, H, m);
    },
    "uRcxe": function (p, v) {
        return p + v;
    },
    "uLzGT": function (p, v, L) {
        return p(v, L);
    },
    "kWyrK": function (p, v) {
        return p >> v;
    },
    "ATgfM": function (p, v) {
        return p << v;
    },
    "iyyac": function (p, v) {
        return p + v;
    },
    "uSVeF": function (p, v) {
        return p >>> v;
    },
    "BzDwE": function (p, v) {
        return p * v;
    },
    "KEIUP": function (p, v) {
        return p < v;
    },
    "wTsaA": function (p, v) {
        return p | v;
    },
    "JTMeO": "FYKEm",
    "ElgMw": function (p, v) {
        return p < v;
    },
    "SFqDI": function (p, v) {
        return p * v;
    },
    "YzuWL": function (p, v) {
        return p < v;
    },
    "RMtRl": function (p, v) {
        return p & v;
    },
    "xBLkI": function (p, v) {
        return p % v;
    },
    "raOfI": "0123456789" + "abcdef",
    "WiaXr": function (p, v) {
        return p < v;
    },
    "ZCEup": function (p, v) {
        return p + v;
    },
    "qkKmG": "xialuo",
    "UgKCF": function (p, v) {
        return p(v);
    },
    "ZTMZo": "xxoo",
    "bVPIz": "Jytnr",
    "pDFRR": function (p, v) {
        return p(v);
    },
    "HdkMg": function (p, v) {
        return p * v;
    },
    "sPhVZ": function (p, v, L, j, E, b, H) {
        return p(v, L, j, E, b, H);
    },
    "zNqgl": function (p, v) {
        return p & v;
    },
    "bcIlu": "QpPKj",
    "ZbpZT": function (p, v) {
        return p(v);
    },
    "fzbNL": function (p, v) {
        return p + v;
    },
    "KolHP": function (p, v) {
        return p(v);
    },
    "nwzaU": function (p, v) {
        return p !== v;
    },
    "VZaxT": "GQQHL",
    "pGDyu": "jeVyI",
    "HXwzI": function (p, v) {
        return p(v);
    },
    "CFpTC": function (p, v) {
        return p < v;
    },
    "QkSgK": function (p, v) {
        return p % v;
    },
    "dFbAj": "feEbr",
    "sXfDl": function (p, v, L) {
        return p(v, L);
    },
    "AEPZB": function (p, v, L) {
        return p(v, L);
    },
    "GSknF": function (p) {
        return p();
    }
};
var y = {};
const T = {};

function V(p) {
    var v, L = "", j = Y.BzDwE(32, p.length);
    for (v = 0; Y.KEIUP(v, j); v += 8) L += String["fromCharCo" + "de"](Y.xYhMS(Y.uSVeF(p[v >> 5], Y.oeqKU(v, 32)), 255));
    return L;
}

function S(p, v, L, j, E, b, H) {
    return Y.liimd(z, Y.cXYer(Y.WoFjQ(v, L), ~v & j), p, v, E, b, H);
}

function F(p, v, L, j, E, b, H) {
    if (Y.NUMzD("EZsLO", Y.SWgqI)) {
        const Q = Y.EaViz.split("|");
        let U = 0;
        while (!![]) {
            switch (Q[U++]) {
                case "0":
                    var D = 1732584193,
                        J = -271733879,
                        N0 = -1732584194,
                        N1 = 271733878;
                    continue;
                case "1":
                    Wl[Y.qtBDM(WF, 5)] |= Y.cIQBV(128, Y.oeqKU(Wt, 32)), Wg[Y.FDCwr(14, Y.MgQnQ(Y.HgmQz(Y.bBrzR(WC, 64), 9), 4))] = WZ;
                    continue;
                case "2":
                    return [D, J, N0, N1];
                case "3":
                    var N2, N3, N4, N5, N6;
                    continue;
                case "4":
                    for (N2 = 0; Y.tzQvI(N2, Wo.length); N2 += 16) J = Wu(J = Y.tkSIh(Wn, J = Y.vRFLm(Wr, J = Y.tkSIh(WX, J = WV(J = Y.vRFLm(Ws, J = Y.QzAju(WP, J = Wf(J = Y.tkSIh(Wk, J = Y.QzAju(Wq, J = WK(J = Wp(J = Wv(J = Y.tkSIh(Wi, J = Y.tkSIh(WL, J = Y.tkSIh(Wj, N4 = J, N0 = WE(N5 = N0, N1 = Y.vRFLm(Wb, N6 = N1, D = We(N3 = D, J, N0, N1, WH[N2], 7, -680876936), J, N0, Wm[Y.tJBLM(N2, 1)], 12, -389564586), D, J, Wh[Y.PFiGQ(N2, 2)], 17, 606105819), N1, D, WQ[N2 + 3], 22, -1044525330), N0 = Y.nVcFB(Wc, N0, N1 = Y.oqhce(WU, N1, D = Y.esvjL(WD, D, J, N0, N1, WJ[Y.CXCKd(N2, 4)], 7, -176418897), J, N0, M0[Y.Tfgng(N2, 5)], 12, 1200080426), D, J, M1[N2 + 6], 17, -1473231341), N1, D, M2[Y.bICUC(N2, 7)], 22, -45705983), N0 = Y.tkSIh(M3, N0, N1 = Y.mzqLY(M4, N1, D = Y.LsmzR(M5, D, J, N0, N1, M6[Y.gZniF(N2, 8)], 7, 1770035416), J, N0, M7[Y.vLLgy(N2, 9)], 12, -1958414417), D, J, M8[N2 + 10], 17, -42063), N1, D, M9[N2 + 11], 22, -1990404162), N0 = Y.yoncq(MN, N0, N1 = Y.QzAju(MW, N1, D = MM(D, J, N0, N1, MO[N2 + 12], 7, 1804603682), J, N0, MR[Y.PFiGQ(N2, 13)], 12, -40341101), D, J, MT[Y.OgfIQ(N2, 14)], 17, -1502002290), N1, D, My[Y.HcUKR(N2, 15)], 22, 1236535329), N0 = MB(N0, N1 = Y.QzAju(MY, N1, D = Y.fWQVe(Mx, D, J, N0, N1, MI[Y.wZqjp(N2, 1)], 5, -165796510), J, N0, Mw[N2 + 6], 9, -1069501632), D, J, MA[Y.gZniF(N2, 11)], 14, 643717713), N1, D, Md[N2], 20, -373897302), N0 = Y.CzoNy(MG, N0, N1 = Y.CzoNy(Mz, N1, D = Y.esvjL(MS, D, J, N0, N1, Ma[Y.wmMXU(N2, 5)], 5, -701558691), J, N0, Ml[Y.wmMXU(N2, 10)], 9, 38016083), D, J, MF[N2 + 15], 14, -660478335), N1, D, Mt[Y.OgfIQ(N2, 4)], 20, -405537848), N0 = Y.LLkLg(Mg, N0, N1 = Y.woOgP(MC, N1, D = MZ(D, J, N0, N1, Mo[Y.SNWBG(N2, 9)], 5, 568446438), J, N0, Mu[Y.CXCKd(N2, 14)], 9, -1019803690), D, J, Mn[Y.OgfIQ(N2, 3)], 14, -187363961), N1, D, Mr[Y.Aqkko(N2, 8)], 20, 1163531501), N0 = Y.qEiDy(MX, N0, N1 = Y.qEiDy(MV, N1, D = Ms(D, J, N0, N1, MP[Y.vLLgy(N2, 13)], 5, -1444681467), J, N0, Mf[Y.SNWBG(N2, 2)], 9, -51403784), D, J, Mk[Y.Pxlkx(N2, 7)], 14, 1735328473), N1, D, Mq[Y.wlGJx(N2, 12)], 20, -1926607734), N0 = Y.QzAju(MK, N0, N1 = Y.LLkLg(Mp, N1, D = Y.qEiDy(Mv, D, J, N0, N1, Mi[N2 + 5], 4, -378558), J, N0, ML[N2 + 8], 11, -2022574463), D, J, Mj[Y.SNWBG(N2, 11)], 16, 1839030562), N1, D, ME[Y.MQKYE(N2, 14)], 23, -35309556), N0 = Mb(N0, N1 = Y.vRFLm(Me, N1, D = Y.PEeiy(MH, D, J, N0, N1, Mm[Y.tJBLM(N2, 1)], 4, -1530992060), J, N0, Mh[N2 + 4], 11, 1272893353), D, J, MQ[Y.vMghD(N2, 7)], 16, -155497632), N1, D, Mc[Y.IAtCS(N2, 10)], 23, -1094730640), N0 = MU(N0, N1 = Y.fWQVe(MD, N1, D = Y.WTxKj(MJ, D, J, N0, N1, O0[Y.Aqkko(N2, 13)], 4, 681279174), J, N0, O1[N2], 11, -358537222), D, J, O2[Y.OeUPc(N2, 3)], 16, -722521979), N1, D, O3[N2 + 6], 23, 76029189), N0 = O4(N0, N1 = O5(N1, D = Y.bRepp(O6, D, J, N0, N1, O7[N2 + 9], 4, -640364487), J, N0, O8[Y.NOpHR(N2, 12)], 11, -421815835), D, J, O9[Y.llFgu(N2, 15)], 16, 530742520), N1, D, ON[N2 + 2], 23, -995338651), N0 = Y.RYPvZ(OW, N0, N1 = Y.RYPvZ(OM, N1, D = Y.vRFLm(OO, D, J, N0, N1, OR[N2], 6, -198630844), J, N0, OT[Y.SEQdv(N2, 7)], 10, 1126891415), D, J, Oy[Y.tJBLM(N2, 14)], 15, -1416354905), N1, D, OB[N2 + 5], 21, -57434055), N0 = OY(N0, N1 = Ox(N1, D = OI(D, J, N0, N1, Ow[Y.bICUC(N2, 12)], 6, 1700485571), J, N0, OA[Y.FDCwr(N2, 3)], 10, -1894986606), D, J, Od[Y.WaYIj(N2, 10)], 15, -1051523), N1, D, OG[Y.FDCwr(N2, 1)], 21, -2054922799), N0 = Y.MLFhj(Oz, N0, N1 = Y.CEsGm(OS, N1, D = Y.oqhce(Oa, D, J, N0, N1, Ol[N2 + 8], 6, 1873313359), J, N0, OF[Y.hURGh(N2, 15)], 10, -30611744), D, J, Ot[Y.iybnR(N2, 6)], 15, -1560198380), N1, D, Og[Y.Tfgng(N2, 13)], 21, 1309151649), N0 = Y.NHAfr(OC, N0, N1 = Y.LhudU(OZ, N1, D = Y.bRepp(Oo, D, J, N0, N1, Ou[Y.OgfIQ(N2, 4)], 6, -145523070), J, N0, On[Y.sCWCj(N2, 11)], 10, -1120210379), D, J, Or[N2 + 2], 15, 718787259), N1, D, OX[N2 + 9], 21, -343485551), D = Y.mGVbN(OV, D, N3), J = Os(J, N4), N0 = Y.VYdcH(OP, N0, N5), N1 = Y.VYdcH(Of, N1, N6);
                    continue;
            }
            break;
        }
    } else return z(Y.PzEkN(Y.dDsTl(v, j), L & ~j), p, v, E, b, H);
}

function C(p, v, L, j, E, b, H) {
    return z(Y.ITlWs(Y.ITlWs(v, L), j), p, v, E, b, H);
}

function G(p, v) {
    var L = Y.bICUC(Y.sHyFP(65535, p), Y.xYhMS(65535, v));
    return Y.PzEkN(Y.SNWBG(Y.ldgNJ(p, 16), Y.Ojybj(v, 16)) + (L >> 16) << 16, 65535 & L);
}

function z(p, v, L, j, E, b) {
    const H = {
        "RPGBl": function (m, Q) {
            return Y.cXYer(m, Q);
        },
        "bwfps": function (m, Q) {
            return m << Q;
        },
        "zUuYu": function (m, Q) {
            const RD = y;
            return Y.TjHlL(m, Q);
        }
    };
    if (Y.rkFsh(Y.ZkAHc, Y.ZkAHc)) I(x); else return Y.wZgjz(G, function (Q, U) {
        return H.RPGBl(H.bwfps(Q, E), H.zUuYu(Q, 32 - E));
    }(Y.wZgjz(G, Y.wZgjz(G, v, p), Y.MjdHC(G, j, b))), L);
}

function Z(p, v, L, j, E, b, H) {
    if (Y.GxadT("gNXxx", "gNXxx")) B.success(Y, x, I); else return z(L ^ Y.NqpiH(v, ~j), p, v, E, b, H);
}

function X(p, L) {
    const
        j = Y.hCATJ.split("|");
    let E = 0;
    while (!![]) {
        switch (j[E++]) {
            case "0":
                var b = 1732584193,
                    H = -271733879,
                    m = -1732584194,
                    Q = 271733878;
                continue;
            case "1":
                var U, D, J, N0, N1;
                continue;
            case "2":
                for (U = 0; Y.nYdpw(U, p.length); U += 16) H = Z(H = Y.cxVKP(Z, H = Y.xWCBx(Z, H = Y.mzqLY(Z, H = Y.cxVKP(C, H = C(H = Y.YsZWM(C, H = Y.woOgP(C, H = F(H = F(H = Y.XOzPD(F, H = Y.pcSgc(F, H = Y.vRFLm(S, H = Y.RYPvZ(S, H = Y.emqSw(S, H = Y.AoIih(S, J = H, m = Y.uYXIU(S, N0 = m, Q = Y.woOgP(S, N1 = Q, b = Y.nVcFB(S, D = b, H, m, Q, p[U], 7, -680876936), H, m, p[Y.aiUFT(U, 1)], 12, -389564586), b, H, p[U + 2], 17, 606105819), Q, b, p[Y.tJBLM(U, 3)], 22, -1044525330), m = S(m, Q = Y.esvjL(S, Q, b = Y.esvjL(S, b, H, m, Q, p[Y.BobaN(U, 4)], 7, -176418897), H, m, p[U + 5], 12, 1200080426), b, H, p[Y.SEQdv(U, 6)], 17, -1473231341), Q, b, p[U + 7], 22, -45705983), m = Y.esvjL(S, m, Q = Y.JAskn(S, Q, b = Y.ZgGJm(S, b, H, m, Q, p[Y.HcUKR(U, 8)], 7, 1770035416), H, m, p[Y.CWDTd(U, 9)], 12, -1958414417), b, H, p[Y.AOOse(U, 10)], 17, -42063), Q, b, p[Y.WySLl(U, 11)], 22, -1990404162), m = Y.ZgGJm(S, m, Q = Y.rtemr(S, Q, b = Y.LsmzR(S, b, H, m, Q, p[Y.hvVZK(U, 12)], 7, 1804603682), H, m, p[Y.gNAzv(U, 13)], 12, -40341101), b, H, p[Y.IAllZ(U, 14)], 17, -1502002290), Q, b, p[Y.Tfgng(U, 15)], 22, 1236535329), m = Y.pcSgc(F, m, Q = Y.MLFhj(F, Q, b = Y.txapw(F, b, H, m, Q, p[Y.DSgnr(U, 1)], 5, -165796510), H, m, p[U + 6], 9, -1069501632), b, H, p[Y.wlGJx(U, 11)], 14, 643717713), Q, b, p[U], 20, -373897302), m = Y.pPhYS(F, m, Q = Y.DWThP(F, Q, b = F(b, H, m, Q, p[Y.SFbQB(U, 5)], 5, -701558691), H, m, p[Y.XRnUX(U, 10)], 9, 38016083), b, H, p[Y.ZSrHi(U, 15)], 14, -660478335), Q, b, p[U + 4], 20, -405537848), m = F(m, Q = F(Q, b = Y.AAeOs(F, b, H, m, Q, p[Y.FDCwr(U, 9)], 5, 568446438), H, m, p[Y.vMghD(U, 14)], 9, -1019803690), b, H, p[Y.caQVd(U, 3)], 14, -187363961), Q, b, p[U + 8], 20, 1163531501), m = Y.mBvFI(F, m, Q = F(Q, b = Y.bXtUP(F, b, H, m, Q, p[Y.BhPEA(U, 13)], 5, -1444681467), H, m, p[Y.ruQis(U, 2)], 9, -51403784), b, H, p[Y.Tfgng(U, 7)], 14, 1735328473), Q, b, p[Y.phRWA(U, 12)], 20, -1926607734), m = Y.JVTbo(C, m, Q = Y.esvjL(C, Q, b = C(b, H, m, Q, p[U + 5], 4, -378558), H, m, p[U + 8], 11, -2022574463), b, H, p[Y.MQKYE(U, 11)], 16, 1839030562), Q, b, p[Y.jDbag(U, 14)], 23, -35309556), m = Y.mBvFI(C, m, Q = Y.WTxKj(C, Q, b = C(b, H, m, Q, p[Y.WySLl(U, 1)], 4, -1530992060), H, m, p[Y.DSgnr(U, 4)], 11, 1272893353), b, H, p[Y.fpWGu(U, 7)], 16, -155497632), Q, b, p[Y.PhUUA(U, 10)], 23, -1094730640), m = Y.esvjL(C, m, Q = Y.xWCBx(C, Q, b = Y.PEeiy(C, b, H, m, Q, p[U + 13], 4, 681279174), H, m, p[U], 11, -358537222), b, H, p[Y.vhAgy(U, 3)], 16, -722521979), Q, b, p[Y.BhPEA(U, 6)], 23, 76029189), m = Y.cxVKP(C, m, Q = C(Q, b = Y.lXZae(C, b, H, m, Q, p[Y.llFgu(U, 9)], 4, -640364487), H, m, p[U + 12], 11, -421815835), b, H, p[Y.vhAgy(U, 15)], 16, 530742520), Q, b, p[Y.vMghD(U, 2)], 23, -995338651), m = Y.AoIih(Z, m, Q = Y.RyzCJ(Z, Q, b = Y.mBvFI(Z, b, H, m, Q, p[U], 6, -198630844), H, m, p[U + 7], 10, 1126891415), b, H, p[U + 14], 15, -1416354905), Q, b, p[Y.PbGJv(U, 5)], 21, -57434055), m = Y.ZgGJm(Z, m, Q = Z(Q, b = Y.uVbpb(Z, b, H, m, Q, p[Y.jDbag(U, 12)], 6, 1700485571), H, m, p[Y.iYCqt(U, 3)], 10, -1894986606), b, H, p[Y.KfUog(U, 10)], 15, -1051523), Q, b, p[U + 1], 21, -2054922799), m = Y.SySGO(Z, m, Q = Z(Q, b = Z(b, H, m, Q, p[Y.hvVZK(U, 8)], 6, 1873313359), H, m, p[Y.wlGJx(U, 15)], 10, -30611744), b, H, p[Y.xadfr(U, 6)], 15, -1560198380), Q, b, p[Y.vLLgy(U, 13)], 21, 1309151649), m = Y.OsmbE(Z, m, Q = Y.bXtUP(Z, Q, b = Y.FhDuY(Z, b, H, m, Q, p[Y.SFbQB(U, 4)], 6, -145523070), H, m, p[Y.uRcxe(U, 11)], 10, -1120210379), b, H, p[Y.OeUPc(U, 2)], 15, 718787259), Q, b, p[Y.ruQis(U, 9)], 21, -343485551), b = G(b, D), H = Y.mGVbN(G, H, J), m = Y.VYdcH(G, m, N0), Q = Y.uLzGT(G, Q, N1);
                continue;
            case "3":
                return [b, H, m, Q];
            case "4":
                p[Y.kWyrK(L, 5)] |= Y.ATgfM(128, Y.oeqKU(L, 32)), p[Y.iyyac(14, Y.MgQnQ(Y.uSVeF(L + 64, 9), 4))] = L;
                continue;
        }
        break;
    }
}

function s(p) {
    const v = {
        "FChtm": function (b, H, m, Q, U, D, J) {
            return b(H, m, Q, U, D, J);
        },
        "dgyHJ": function (b, H) {
            const Tw = y;
            return Y.wTsaA(b, H);
        }
    };
    if ("FYKEm" === Y.JTMeO) {
        var L,
            j = [];
        for (j[Y.MKdaU(Y.Qivrc(p.length, 2), 1)] = void 0, L = 0; Y.ElgMw(L, j.length); L += 1) j[L] = 0;
        var E = Y.SFqDI(8, p.length);
        for (L = 0; Y.YzuWL(L, E); L += 8) j[Y.ldgNJ(L, 5)] |= Y.ATgfM(Y.RMtRl(255, p.charCodeAt(Y.agDTJ(L, 8))), Y.xBLkI(L, 32));
        return j;
    } else return v.FChtm(A, K ^ v.dgyHJ(G, ~z), S, s, q, F, j);
}

function P(p) {
    var v,
        L,
        j = Y.raOfI,
        E = "";
    for (L = 0; Y.WiaXr(L, p.length); L += 1) v = p.charCodeAt(L), E += j.charAt(Y.dDsTl(Y.HgmQz(v, 4), 15)) + j.charAt(15 & v);
    return E;
}

function k(p) {
    if (Y.NUMzD(Y.bVPIz, Y.bVPIz)) return Y.pDFRR(unescape, encodeURIComponent(p)); else {
        let L = new K().getTime(),
            j = G.eeee(Y.ZCEup(Y.qkKmG, L));
        return z.headers = S.headers || {}, s.headers.m = j, q.headers[Y.vhAgy("t", "s")] = L, F.url += "&x=" + Y.UgKCF(z, k.a.SHA256(j + Y.ZTMZo)), C;
    }
}

function q(p) {
    const v = {
        "EHxHB": function (L, j) {
            return L(j);
        },
        "RAAYR": function (L, j) {
            return Y.HdkMg(L, j);
        }
    };
    return function (L) {
        const To = T,
            Tu = T;
        return V(X(v.EHxHB(s, L), v.RAAYR(8, L.length)));
    }(k(p));
}

window.eeee = function (p, v, L) {
    const j = {
        "VimxX": function (E, b) {
            const Ti = T;
            return Y.SFqDI(E, b);
        },
        "Ejzmv": function (E, b) {
            const TL = T;
            return Y.CFpTC(E, b);
        },
        "vtBCF": function (E, b) {
            return E >> b;
        },
        "KmAuC": function (E, b) {
            const Tj = y;
            return Y.QkSgK(E, b);
        },
        "pOijD": function (E, b) {
            const TE = y;
            return Y.GxadT(E, b);
        },
        "hWOyw": Y.dFbAj,
        "NmvPz": function (E, b) {
            const Te = y;
            return Y.HXwzI(E, b);
        },
        "LIAXz": function (E, b) {
            const TH = y;
            return Y.VJfjK(E, b);
        }
    };
    return v ? L ? Y.sXfDl(K, v, p) : function (E, b) {
        const H = {
            "ihWov": function (m, Q, U, D, J, N0, N1) {
                const Th = T;
                return Y.liimd(m, Q, U, D, J, N0, N1);
            },
            "pKbiU": function (m, Q) {
                return Y.ITlWs(m, Q);
            }
        };
        return Y.nwzaU(Y.VZaxT, Y.pGDyu) ? Y.HXwzI(P, Y.MjdHC(K, E, b)) : H.ihWov(A, H.pKbiU(H.pKbiU(K, G), z), S, s, q, F, L);
    }(v, p) : L ? Y.pDFRR(q, p) : function (E) {
        const b = {
            "VvDtr": function (H, m) {
                return j.VimxX(H, m);
            },
            "KfEni": function (H, m) {
                const y0 = y;
                return j.Ejzmv(H, m);
            },
            "yDhCF": function (H, m) {
                return H & m;
            },
            "GqHTp": function (H, m) {
                return j.vtBCF(H, m);
            },
            "Jxyyj": function (H, m) {
                const y1 = y;
                return j.KmAuC(H, m);
            }
        };
        if (j.pOijD(j.hWOyw, j.hWOyw)) {
            var m,
                Q = "",
                U = b.VvDtr(32, x.length);
            for (m = 0; b.KfEni(m, U); m += 8) Q += B["fromCharCo" + "de"](b.yDhCF(Y[b.GqHTp(m, 5)] >>> b.Jxyyj(m, 32), 255));
            return Q;
        } else return j.NmvPz(P, j.LIAXz(q, E));
    }(p);
};
var dd = {
    a: CryptoJs
};
let kkkk = dd.a.enc.Utf8.parse("xxxxxxxxoooooooo");
let iiii = dd.a.enc.Utf8.parse("0123456789ABCDEF");


function xxxxoooo(encryptedHex) {
    let enccc = dd.a.enc.Hex.parse(encryptedHex);
    let deccc = dd.a.AES["decr" + "ypt"]({ciphertext: enccc}, kkkk, {
        mode: dd.a.mode.CBC, padding: dd.a.pad.Pkcs7, iv: iiii,
    });
    return deccc.toString(dd.a.enc.Utf8);
}

async function parseInfo(i) {
    const url = `https://www.mashangpa.com/api/problem-detail/7/data/`;
    var W = {
        "QCqSI": function (B, Y) {
            return B + Y;
        },
        "uSzcs": function (B, Y) {
            return B(Y);
        },
        "KjfHo": "xxoo"
    };
    let M = new Date().getTime(),
    // let M = 1751906774711,
        O = window.eeee(W.QCqSI("xialuo", M));
    const x = W.uSzcs(encodeURIComponent, dd.a.SHA256(W.QCqSI(O, W.KjfHo)));
    const res = await axios({
        url, method: "get", params: {
            page: i,
            x
        }, headers: {
            m: O,
            ts: M,
            referer: "https://www.mashangpa.com/problem-detail/7/",
            cookie: "sessionid=800maoqstt96gvfp25opcs7tnatftlqc; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1751470911,1751471486,1751472789,1751865884; HMACCOUNT=15A4D224E171B74F; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1751907134",
        },
    });
    const plainText = xxxxoooo(res.data.r);
    return JSON.parse(plainText).current_array;
}

async function main() {
    global.console = logger;
    const max = 20;
    const arr = [];
    for (let i = 1; i <= max; i++) {
        arr.push(...await parseInfo(i));
        console.log(`已爬取第 ${i} 页`);
        await sleep(1000);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}

main();
