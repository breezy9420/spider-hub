import { readFile, writeFile, getJsByAst, getAstByJs,decryptHexStr } from "../../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import { fileURLToPath } from "url";
import { isNil } from "lodash-es";

const traverse = traverseModule.default || traverseModule;

var window = {};

const variableMap = {
  _0x2ba6ea26: "Object",
  _0x2ba6ea27: "decodeURIComponent",
  _0x2ba6ea28: "escape",
  _0x2ba6ea29: "atob",
  _0x2ba6ea30: "String",
  _0x2ba6ea31: "window",
  _0x2ba6ea32: "console",
  _0x2ba6ea33: "URLSearchParams",
  _0x2ba6ea34: "document",
  _0x2ba6ea35: "isNaN",
  _0x2ba6ea36: "parseInt",
  _0x2ba6ea37: "location",
  _0x2ba6ea38: "Array",
  _0x2ba6ea39: "Math",
  _0x2ba6ea40: "setInterval",
  _0x2ba6ea41: "setTimeout",
  _0x2ba6ea42: "performance",
  _0x2ba6ea43: "Set",
  _0x2ba6ea44: "fetch",
  _0x2ba6ea45: "Error",
  _0x2ba6ea46: "JSON",
  _0x2ba6ea47: "NaN",
  _0x2ba6ea48: "Date",
};

const _0x2ba6ea51 = [
  "Hw==",
  "HA==",
  "FA==",
  "6K6W5LqT56Go55WVFg==",
  "AxkNARcWAQgC6L60",
  "6KC/6ZmC5ouN",
  "BBEa",
  "Hi8KDAQeCAADCA==",
  "Fg==",
  "Bg==",
  "HRQMAgw=",
  "HRUN",
  "BCoR",
  "IwY=",
  "KiI=",
  "PSY=",
  "Hhs=",
  "XAM=",
  "FhNYSwQCDUoOBxIcBQELFQFKBAEaBEZbBhoFCQEKHQ==",
  "FBU2EBwCAVg=",
  "Fh4KCwEXMTck",
  "MB8=",
  "HgAGCgAcEA==",
  "GQM=",
  "HQ==",
  "GA==",
  "FgIb",
  "AQ==",
  "OyQ9",
  "Iw==",
  "Uw==",
  "AAQIEA==",
  "AA==",
  "SQ==",
  "BgM9AR0=",
  "Bw==",
  "XAMMB1RdBRUEQBAYCAgJFw==",
  "HRcMSxUTAwBCUBAYCA==",
  "HxwMCgIXOxEUHxZN",
  "HRMGAAAnNiwuAB4ABgoA",
  "HQQ=",
  "VQAIAw==",
  "Tg==",
  "GQ==",
  "HB4=",
  "FgI=",
  "HAI=",
  "OyQ=",
  "JyA=",
  "BxEd",
  "BgM=",
  "AAQI",
  "BwUa",
  "JxUREA==",
  "XAMMB1RdBRUEQBAYCAgJFwoCCEAABQs=",
  "Hhkd",
  "XA==",
  "PA==",
  "ICQ=",
  "Eg==",
  "AwAFDQYT",
  "BxkGCkoYFwoD",
  "BwI=",
  "Gh4ODQML",
  "AB8=",
  "AQI=",
  "Ow==",
  "JyQ5",
  "AAQ=",
  "EgQ=",
  "BxEdERYmAR0=",
  "BREF",
  "GhQIEAAiBQIIIRIGAA==",
  "FBEdDQoc",
  "BRE=",
  "HxkNBREXNAQ=",
  "FBUnBRMbAwQZBhwe",
  "BREFDQETEAA9DhQVJwUTGw==",
  "FBEdDQo=",
  "AxEO",
  "LB4IEgwVBREEAB0=",
  "Nw==",
  "BxU=",
  "BA==",
  "AR8b",
  "KCA=",
  "EhcMKgQEDQIMGxofBzlF576J6aCR6aup6K6s5aWe",
  "6LWWSg==",
  "HBMIEA==",
  "Gh8H",
  "ABU=",
  "EgIK",
  "Gw==",
  "EBgICA==",
  "HxUHAw==",
  "Fi8dHRUX",
  "CgA=",
  "GxUIAAAAOwYF",
  "FhM=",
  "6K6E5rCy",
  "5aWH5qKw5rSi5o21",
  "5omr",
  "5Yub5oGx",
  "5pSD5ayn",
  "5rCx5ZO85o245om8",
  "OSPmtp7mtqI=",
  "6KaQ5p+g5o24",
  "JA==",
  "MiMk",
  "5o2i5omo",
  "AgUMFhw=",
  "IBU=",
  "HxUKEAoA",
  "XRMB",
  "HxwMCgIXSREEGx8V",
  "Gh4=",
  "HRUbLA==",
  "Jz0l",
  "8KO/n0nkup/li4RIROmGoumaq+i+tkI=",
  "Q0DpoJznm6DlhI3pgprmlJTlrLLvvaHor47nr6Tli5Dlk6XluJLmjrXku5bnurfmn7lR",
  "EQJGWlkBCQQBA01Y",
  "Wkw=",
  "AB0ICAlM",
  "AgUMFhwhAQ==",
  "FhMdCxc=",
  "XQA=",
  "EhcM",
  "XgQAEAkX",
  "Gg==",
  "HR4MFi0mKQ==",
  "Pw==",
  "77+9",
  "ABk=",
  "CQ==",
  "AAU=",
  "EBMMFw==",
  "5o2i",
  "5omr5Ymt",
  "5aa45Y2m5om55Yu7Xw==",
  "5Ymu",
  "5aa45Y2m",
  "5L6S5oCfUw==",
  "Hg==",
  "AAMIAwA=",
  "GxEaOxUTFxYI",
  "Fy8L",
  "FhYGFgA=",
  "5o6j",
  "56WJ",
  "SVA=",
  "HhU=",
  "AAM=",
  "HRY=",
  "Aw==",
  "LBQIEAQ=",
  "5aWC6LWV",
  "EBM=",
  "FgMa",
  "AxEOAQ==",
  "LBQIEA==",
  "AQIG",
  "6I+E5Y6m5pSZ",
  "5oyd5aWB",
  "6LWW",
  "6I+E",
  "5Y6l5pSA5oyH",
  "5aWC6LWVUw==",
  "FgMaBQ==",
  "FBU=",
  "HRMFEQE=",
  "FgM=",
  "6K6E",
  "5YS755iL",
  "5bym",
  "HhUaFwQ=",
  "EBwcAAA=",
  "HRU=",
  "Fy8ACgwG",
  "5o2i5omo5p2D5Ym55aau",
  "5Y2l7728",
  "5qyQ5Z2Y6Yak5peU5Ym45aa55Y2yS0NB",
  "EBw=",
  "EgI=",
  "6I+E5Y6m",
  "5pSD5oye5aWY6LWBXw==",
  "BzUFAQ==",
  "HhUHECcLLQE=",
  "HQU=",
  "HhI=",
  "FgIaIxcbAA==",
  "Gh4H",
  "FgIh",
  "TxQAEkURCAQeHE5SBxEIEAEXQA0cCEtEFgYdCQ==",
  "Fk1LBQsbCQQZBhweRAAAHgUc",
  "UQ==",
  "TQ==",
  "T18N",
  "BU4=",
  "",
  "KQ==",
  "Fw==",
  "HxU=",
  "HRc=",
  "Bxg=",
  "AxEOATo=",
  "BQ==",
  "GhUe",
  "HRcd",
  "5YuT6LyN6aCc6ZyG5pSV5oyc5aWV",
  "5YuT6LyN",
  "6aCG6ZyS",
  "5pSD5oye5aWY6LWB",
  "AR8=",
  "Jw==",
  "FgY=",
  "Pg==",
  "Cw==",
  "Bh4NAQ==",
  "FRk=",
  "Fgg=",
  "FgQsCAAf",
  "Fh4dJhw7AA==",
  "EAU=",
  "AQIMChE=",
  "IxEOASsHCQ==",
  "BxURECYdChEI",
  "FgQsCAA=",
  "Bx8dBQk=",
  "IxE=",
  "FBUa",
  "BxURECYd",
  "Fh4d",
  "EB8FCA==",
  "FhMd",
  "FhQ5BQIXFw==",
  "BxUREA==",
  "MB8H",
  "BxUHEA==",
  "CRU=",
  "BzUFAQgXChEvFjo=",
  "AxEODQsTEA==",
  "Gh8HLQsU",
  "BxUR",
  "BzMGChE=",
  "562f",
  "6aCG77285YSY",
  "U+mghQ==",
  "UwxJ5by35Yio6aCH6ZyG5Y2g",
  "5ZGYUA==",
  "U+S5mg==",
  "5pSD",
  "5ayk",
  "FBUdIQkXCQAD",
  "BzI=",
  "CjkN",
  "MB8HEBcdCBY=",
  "eVBJREVSRA==",
  "U1BVBhAGEAoDTxAcCA==",
  "AANURhUTAwBADQceS0QKHAcJBAwYTUsHDRMKAgg/EhcMTEICFgAbSFpSSQ==",
  "GgMIBgkX",
  "TeKHoEnkua7kuaXpoIdYSg8=",
  "BgQdCwtMbg==",
  "U1BJRA==",
  "TxIcEBEdCkUOAxI=",
  "AANURhU=",
  "EhcMSQcGCkU=",
  "EAQA",
  "BRU=",
  "UVA=",
  "HB4KCAwRD1hP",
  "EBgICgIXNAQKCls=",
  "Wg==",
  "T18L",
  "BgQd",
  "HB5X",
  "TxIcEBEdCkUOAxIDGllHAgU=",
  "FBVEBhEc",
  "EA==",
  "BxkfAQ==",
  "HB4KCAwRD1hPDBsRBwMAIgUC",
  "Flg=",
  "Tw==",
  "XBIcEBE=",
  "TwMZBQtSBwkMHABNSxQEFQFICQ==",
  "HAQaRltcSks=",
  "T18aFAQcWg==",
  "TxIcEBEdCkUO",
  "HxEaF1g=",
  "UQAIAwBfBhEDTVMfBwcJGwcOUE0QGAgKAhc0BAoKWw==",
  "T18LERE=",
  "Bx8=",
  "HU4=",
  "TxIcEBEdCkUOAxIDGllHAgUC",
  "Fl0LEAtQRAoDDB8ZCg9YUAcNDAEUFQ==",
  "IxEOAU1DTUdTXk9fCxERBgsLUw==",
  "TwMZ",
  "Eh5JBwkTFw==",
  "AE1LFAQVAUgJAAcDS1pLXEpZQhwDEQda",
  "TxIcEBEdCkUOAxIDGllHAgUCCEIR",
  "HVA=",
  "EAQ=",
  "GgYM",
  "Ux8HBwkbBw5QTRAY",
  "Eh4OATUTAwBF",
  "T18LEQ==",
  "BwQGCg==",
  "TxIcEBEdCkUOAxIDGllHAgUCCEI=",
  "EQQHRkUdCgYBBhAbVEYGGgULCgojEQ4BTUNNR1NeT18LEQ==",
  "BwQGCls=",
  "TwMZBQtSBwkMHABNSxQ=",
  "EhcMSQEdEBZPUV1eR1hKAQ==",
  "AxEHWg==",
  "EQQH",
  "EhMd",
  "UVAGCgYeDQYGUlE=",
  "EBgICgIXNAQKCg==",
  "Ww==",
  "T18=",
  "EQUd",
  "Bx8HWg==",
  "TwMZBQtSBwkMHABNSxQEFQFICQAHA0ta",
  "XV4=",
  "XUxGFxUTCls=",
  "AANURhUTAwBADQceS0Q=",
  "HB4KCAwRD1hPDBsRBwMAIgUCCEc=",
  "EQUdEAo=",
  "eVBJREVSREVNUxEFHRAKHEQGAQ4AA1RGFRMDAEANBx5LRAocBwkEDBhNSwcNEwoCCD8SFwxMQhw=",
  "FggdQw==",
  "WlJJ",
  "Qg==",
  "Qw==",
  "FxkaBQ==",
  "ERwM",
  "TeS5u+S5qQ==",
  "6aCGUOKHu1hK",
  "EQUdEAocWm9NT1NQ",
  "HRUbLDE=",
  "Pjw=",
  "FBUdIQkX",
  "HQQrHSwW",
  "HQMeARc7ChU=",
  "BgQ=",
  "Ehwc",
  "ARk=",
  "EgIa",
  "FjkHEA==",
  "EBUaFw==",
  "GgM=",
  "LBM=",
  "HAIbAQYG",
  "4py/",
  "GgM2",
  "EB8bFg==",
  "5qyQ",
  "56Cd",
  "6ZWq",
  "6K6c",
  "eVBJREVSREVNT1NQSURFUkQ=",
  "TwMdFgoc",
  "FE4=",
  "56yn",
  "5qC7",
  "772yTEYXEQALCwpRTxIbS1t4REVN",
  "U1BJREVSREU=",
  "U1BJREXmjqLku4DnrLHmoKVVUw==",
  "BhIEDREGAQEy",
  "Eh4aEwAA",
  "TxIb",
  "XE5jREVSREVNT1NQSURFUkRF",
  "U+W2guivlumWiumgkOmckF5F",
  "TxIbS1t4REVNT1NQSURF",
  "U1BJREVSROaNtOaJtQ==",
  "57CI5Z+7U0Q=",
  "EBgICAkXCg==",
  "FBU2EBw=",
  "AxU=",
  "TxIbS1t4REVNT1NQSURFUkRF",
  "U1BJROaOtQ==",
  "5LuX5paG6ZadXkU=",
  "AAUL",
  "HhkdEAAWOw==",
  "Bx8lCwYTCAA=",
  "IAQbDQs=",
  "TxIbS1t4REU=",
  "U1A=",
  "LAIMFAATEDoeGhAT",
  "TxIbSw==",
  "Te+/vQ==",
  "77+9UA==",
  "GgM2Bwo=",
  "XE4=",
  "8KO/ukk=",
  "HhUaFw==",
  "TxIbS1vwo7K5ReW6l+ivgUlQ5Lq957qi5qKl5p6X6K+F",
  "56+k6L6356mi772o5Y6K5LqX6Yap5peV5o695LuL56yn5qC4",
  "772y",
  "LBMGFhcXBxE=",
  "AAUK",
  "FgQsCAAfAQsZ",
  "MQkgAA==",
  "Eh4=",
  "AAcMFiw=",
  "HQAcEA==",
  "HwU=",
  "FBUdIQk=",
  "Fh0M",
  "Eh4aEw==",
  "ATkHFBAG",
  "FQ==",
  "HBMc",
  "HhkdOwQc",
  "AAcMFg==",
  "AAULCQwG",
  "BxUNOwQ=",
  "HQMeARc=",
  "MgI=",
  "Egk=",
  "HB0=",
  "LBMGFhc=",
  "GgM2FgACAQQ=",
  "By8aEQYR",
  "ABEOAQ==",
  "5o6j5LuU",
  "5qC75aWB6LWMXg==",
  "BhQMFw==",
  "5o6j5LuU56y95qCs",
  "6K6E6L+j5YSM56yw",
  "IRU=",
  "FDU=",
  "CwA=",
  "LQ==",
  "LxQ=",
  "WFQ=",
  "56yn5qC45qGV5b2r6ZW86K6d772o6K6S6L++",
  "5YSW57uf5pSZ",
  "5ayk772x",
  "HhUHEA==",
  "FgMcCBE/ARYeDhQ=",
  "Gh4HARc=",
  "OyQk",
  "ChwM",
  "Fxk=",
  "AAAF",
  "EQ==",
  "Hx8K",
  "UBRd",
  "FhQN",
  "UBY=",
  "SxReAA==",
  "UA==",
  "F0EMBwM=",
  "UBM=",
  "QBVf",
  "EBI=",
  "RhNfBwc=",
  "UBIMAQ==",
  "Rg==",
  "FhI=",
  "Cg==",
  "EhMCAxcdEQsJ",
  "MB8FCxc=",
  "Bwk=",
  "ER8b",
  "Awg=",
  "UwMGCAwWRA==",
  "Chw=",
  "EB8F",
  "UEdb",
  "QhNb",
  "Rw==",
  "UEFcUVI=",
  "QQ==",
  "QxNcUA==",
  "RUA=",
  "6KC/5LmK6K+Z",
  "NxE=",
  "FgQsCA==",
  "Fh0MChEwHSwJ",
  "Hx8IAAwc",
  "FD8fARceBQ==",
  "AAQQ",
  "AAAFBQ==",
  "Hx8IAAwcAyob",
  "FgIFBQ==",
  "Fxka",
  "AxwI",
  "EhQNIQ==",
  "BRUHECkbFxE=",
  "Fh4MFg==",
  "GBUQFA==",
  "ARU=",
  "Ng==",
  "HQQM",
  "BxE=",
  "FBUd",
  "Eh4a",
  "BBUbLQs=",
  "AwUd",
  "5byg",
  "5Yi+5o2h",
  "5omr57CL5Z+iXg==",
  "Bh4NAQMb",
  "Bx86EBc=",
  "FQUHBxE=",
  "Gh8HRBETBgkIR1pQEkQ+HAURBBkWUAoLARc5",
  "Uw0=",
  "FhY=",
  "GwQd",
  "AwNTS0oBFAwJCgESBhxLEQpKUhoHHTYXCgcWBghSAAAAAAAA",
  "FxUECw==",
  "HBQ=",
  "5qKz5rS75YmZ6LGn6K6w",
  "54+c",
  "5aOw77286aCc6ZyG5baX6KOZ5L655ouB44Gv",
  "Kx0=",
  "PgYL",
  "ERw=",
  "Bx86",
  "BwIACg==",
  "NQUHBxEb",
  "AR8dCxELFA==",
  "EBE=",
  "GwQdFBZIS0oeHw==",
  "GhQMFgcdHEsOAVxPHBAILRcKGB0QFVQXFRsA",
  "FgINAQgd",
  "ER8=",
  "54+c5aOz772l6aCR6ZyH5baA",
  "6KOY5L6t5ouN44Gm",
  "ND8=",
  "Fz4l",
  "CwY6Ig==",
  "GzQI",
  "FhE=",
  "HCMdFg==",
  "Gh4O",
  "FQUHBxEbCwtNDB8=",
  "FhEbTExSH0U2ARIEABI=",
  "FlAKCwEXOUUQ",
  "GwQdFBY=",
  "SV9GFxUbAAAfDRwIRwcLXVsQGQIsAwYRFxEBWB4=",
  "AxkNARcWAQgC",
  "5qKz5rS75YmZ6LGn6K6w54+d",
  "5aOw77286aCc6ZyG5baX",
  "Bx86EBcb",
  "Bh4KEAwdCkUBABRYQEQeUj8LDBsaBgxEBh0AADA=",
  "GwI=",
  "GwQdFBZIS0oeHxoUDBYHHRxL",
  "EB5GWw==",
  "BgQEOxYdERcOCk4DGQ0BFxYBCAIc",
  "FgIhMA==",
  "5qKz",
  "5rS45YmA6LGq6K6x54+K5aOx772o",
  "6aCG6ZyS5bab6KOP5L645ouW44Gm",
  "ARkHAw==",
  "FQUHBxEbCwtNHBYEIAoRFxYT",
  "EhxBTUUJRD4DDgcZHwFFEQ==",
  "HBQMOUUP",
  "GwQdFBZIS0oeHxoUDBYHHRxLDgFcTxwQCA==",
  "LAMGERcRAVgeHxoUDBYB",
  "Fh0G",
  "ATg9KSk=",
  "5qKz5rS75YmZ6LGn",
  "6K6m54+f5aOq772o",
  "BwIA",
  "FQUHBxEbCwtNHBYEPQ0=",
  "HhUGERFaTUUW",
  "UysHBREbEgBNDBwUDDlFDw==",
  "GwQdFBZIS0oeHxoUDBYHHRxLDgFc",
  "TAUdCToBCxAf",
  "EBVUFxUbAAAfCxYdBg==",
  "HRUbLDE/",
  "5qKz5rS7",
  "5YmD6LGz6K6854+L",
  "HCM=",
  "BwIACgI=",
  "NQ==",
  "Bh4KEAwd",
  "Bx8dHRUX",
  "Hxw=",
  "BwQZF19dSxYdBhcVGwYKCkoGA0A=",
  "TAUdCToBCxAfDBZNGhQMFgEXCQoeHw==",
  "OyQkKA==",
  "5YmD6LGz6K6854+L5aOm772+6aCR6ZyH5baf6KOE5L6u5ouU",
  "44Gx",
  "NQU=",
  "HRMd",
  "AwI=",
  "HAQGEBwC",
  "GwQdFBZIS0oeHxo=",
  "FxUbBgoKSgYDQEwFHQk6AQsQHwwWTRoUDBYB",
  "ARQMCQo=",
  "Gh4HAQ==",
  "ATg9",
  "5qKz5rS75YmZ6LGn6K6w54+d5aOn772p6aCY6ZyN5baB",
  "6KOY5L6t5ouN",
  "FQUHBxEbCw==",
  "HVAHCxJaTUUWTygeCBAMBAFF",
  "EB8NAThSGQ==",
  "GwQdFBZIS0oeHxoUDBYH",
  "HAhHBwtdWxAZAiwDBhEXEQE=",
  "TgMZDQEXFgEIAhw=",
  "Fwk=",
  "HRUb",
  "5qKz5rS75YmZ6LGn6K6w54+d5aOn",
  "772/",
  "FQUHBxEbCwtNARwHQU0=",
  "Uws=",
  "FxUbBgoKSgYDQEw=",
  "5aOw77286aCc6ZyG5baX6KOZ",
  "5L6u5ouU44Gr",
  "Bh4NAQM=",
  "FSI=",
  "FCkF",
  "GwQdFBZI",
  "XF8aFAwWARcPAAteCgpKTRERADAAHw==",
  "BgIKAVgBFAwJCgEUDAkK",
  "5qKz5rS75YmZ",
  "6LGw6K6l54+G5aOn772p",
  "Mg==",
  "AQII",
  "HBIDAQ==",
  "PhE=",
  "Fx8E",
  "BxIs",
  "CiY=",
  "EhI=",
  "EQUOAwAAOwEIGxYTHQEB",
  "SV9GFxUbAAAfDRwIRwcLXVsQGQIsAwY=",
  "HR4MFi0=",
  "6LGw",
  "6K6m54+f5aOq772o6aCQ6ZyQ5baW6KOO5L6w5ouL44Gx",
  "Fh4dKAwBEAADCgE=",
  "Nz8kJw==",
  "HB4dAQsG",
  "Px8IAAAW",
];

function restoreGlobals(path) {
  if (types.isIdentifier(path.node.init)) {
    const name = path.node.init.name;
    if (Object.values(variableMap).includes(name)) {
      const key = Object.keys(variableMap).find((key) => variableMap[key] === name);
      const binding = path.scope.getBinding(key);
      if (binding) {
        const { referencePaths } = binding;
        for (const p of referencePaths) {
          const newName = variableMap[key];
          p.replaceWith(types.identifier(newName));
          // console.log(`restoreGlobals: ${key} -> ${name}`);
        }
      }
    }
  }
}

// 去除未引用代码
function removeUnusedCode(path) {
  const binding = path.scope.getBinding(path.node.name);
  if (binding) {
    const { referencePaths } = binding;
    if (referencePaths.length === 0) {
      if (types.isVariableDeclarator(path.parentPath)) {
        path.parentPath.remove();
        // console.log(`remove ${path.node.name}`);
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

  const { confident, value } = path.evaluate();
  if (confident) {
    let val;
    try {
      val = eval(value).toString();
    } catch (error) {
      val = value.toString();
    }
    console.log(`computedCommon: ${val}`);
    path.replaceWith(types.stringLiteral(val));
  }
}

function encryptStr(path, name) {
  if (types.isIdentifier(path.node.id, { name })) {
    const leftName = path.node.id.name;
    const binding = path.scope.getBinding(leftName);
    if (binding) {
      const { referencePaths } = binding;
      for (const p of referencePaths) {
        if (types.isMemberExpression(p.parentPath)) {
          const index = p.parentPath.node.property.value;
          const plainText = _0x2ba6ea51[index];
          if (!isNil(index) && !isNil(plainText)) {
            // console.log(`字符串解密${name}:${leftName}['${index}'] => ${plainText}`);
            p.parentPath.replaceWith(types.stringLiteral(plainText));
          }
        } else {
          encryptStr(p.parentPath, leftName);
        }
      }
    }
  }
}

function _0x2ba6ea10(_0x2ba6ea50) {
  var [_0x2ba6ea64, _0x2ba6ea65] = _0x2ba6ea50;
  try {
    var xorEncrypted;
    xorEncrypted = decodeURIComponent(escape(atob(_0x2ba6ea64)));
    var result = "";
    for (var i = 0; i < xorEncrypted.length; i++) {
      result += String.fromCharCode(xorEncrypted.charCodeAt(i) ^ _0x2ba6ea65.charCodeAt(i % _0x2ba6ea65.length));
    }
    return result;
  } catch (e) {
    return String["fromCharCode"](0x0);
  }
}
function encrypt_0x2ba6ea50(path) {
  if (types.isIdentifier(path.node.init, { name: "_0x2ba6ea50" })) {
    const bindings = path.scope.getBinding("_0x2ba6ea50");
    for (const p of bindings?.constantViolations) {
      const right = p.get("right");
      if (types.isArrayExpression(right.node)) {
        const [_0x2ba6ea51, _0x2ba6ea52] = right.node.elements;
        if (types.isLiteral(_0x2ba6ea51) && types.isLiteral(_0x2ba6ea52)) {
          const _0x2ba6ea53 = _0x2ba6ea10([_0x2ba6ea51.value, _0x2ba6ea52.value]);
          // if (_0x2ba6ea53) {
          //   right.replaceWith(types.stringLiteral(_0x2ba6ea53));
          // }
          if (_0x2ba6ea53 && types.isSequenceExpression(p.parentPath.node)) {
            p.parentPath.replaceWith(types.stringLiteral(_0x2ba6ea53));
          }
        }
      }
    }
  }
}

async function main() {
  const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./4_wasm_challenge.js");
  let jsCode = await readFile(encryptJsPath);
  // jsCode = decryptHexStr(jsCode);
  const ast = getAstByJs(jsCode);
  traverse(ast, {
    BinaryExpression(path) {
      computedCommon(path);
    },
  });
  traverse(ast, {
    VariableDeclarator(path) {
      encryptStr(path, "_0x2ba6ea51");
    },
  });
  traverse(ast, {
    VariableDeclarator(path) {
      restoreGlobals(path);
    },
  });

  traverse(ast, {
    VariableDeclarator(path) {
      encrypt_0x2ba6ea50(path);
    },
  });
  traverse(ast, {
    BinaryExpression(path) {
      computedCommon(path);
    },
  });

  let newAst = getAstByJs(getJsByAst(ast));
  traverse(newAst, {
    Identifier(path) {
      removeUnusedCode(path);
    },
  });
  let newJsCode = getJsByAst(newAst);
  newJsCode = decryptHexStr(newJsCode);
  const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./4_wasm_challenge_decrypt.js");
  await writeFile(outputJsPath, newJsCode);
  console.log("还原结束");
}

main().catch((err) => console.error(err));
