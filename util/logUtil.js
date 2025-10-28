import log4js from "log4js";

// 日志配置
log4js.configure({
    appenders: {
        // 控制台输出
        consoleAppender: {
            type: "console",
        },
        // 文件输出
        fileAppender: {
            type: "dateFile",
            filename: "./logs/run",
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            encoding: "utf-8",
            maxLogSize: 1024 * 1024 * 10,
        },
    },
    categories: {
        app: {
            appenders: ["consoleAppender", "fileAppender"],
            level: "all",
        },
        default: {
            appenders: ["consoleAppender"],
            level: "all",
        },
    },
});

export const logger = log4js.getLogger("app");
export const loggerNoFile = log4js.getLogger("default");
