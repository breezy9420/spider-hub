import axios from "axios"
import { getSign } from "./fixEnvDewu.js"

function getDetailV5() {
    const reqData = {
        extDatas: [{ name: "source", value: "wxmini" }],
        abTests: [
            { name: "572_consolegame", value: "1" },
            { name: "536_Labelgeneration", value: "3" },
            { name: "540_GoodsStory", value: "1" },
            { name: "540_FirstContent", value: "5" },
            { name: "2024_detail_20", value: "11" },
            { name: "536_Labelgeneration", value: "11" },
        ],
        dressUpReqMap: {
            source: 0,
            limit: 12,
            productId: 1921830,
            cSpuPropertyValueId: 0,
            firstSpuId: 0,
            firstPropertyValueId: 0,
            ab539CdjxBodyinfo: "0",
            ab540Deletesidebar: "0",
            switchoverMinPic: "",
            ab525JingXuanMerge: "2",
            ab534DpVideo: "0",
        },
        appraiseReqMap: {
            spuId: 1921830,
            propertyValueId: 0,
            abFields: { v535LV6wd: "0", abDetailpageSize: "0", v544NewDpModel: "0" },
        },
        buyLayerReq: {
            bizDetailReq: {
                openId: "ouhDM4mnlPZd6d3poaSRhVrSR2kw",
                appId: "wxapp",
                extraMap: { app_type: "wxapp" },
            },
            extMap: { appId: "wxapp" },
            anchorId: 0,
            extBodys: [
                { name: "gmfcpmd492", value: "0" },
                { name: "550_shixiao", value: "1" },
                { name: "detail2023promo", value: "0" },
                { name: "5.30_fenqiWenan", value: "0" },
                { name: "543_price", value: "0" },
                { name: "543_lmsd", value: "0" },
                { name: "544youhui", value: "0" },
                { name: "545dingzi", value: "0" },
                { name: "544xdk", value: "0" },
                { name: "scene", value: "commodityDetail" },
                { name: "businessDetailVersion", value: "V2" },
            ],
            mainSpuId: 0,
            sourceFrom: "",
            spuId: 1921830,
        },
        propertyValueId: 67622071,
        spuId: 1921830,
        openId: "ouhDM4mnlPZd6d3poaSRhVrSR2kw",
        isFirst: true,
    };

}