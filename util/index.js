import UserAgent from "user-agents";

export function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/*
* @params type: "desktop" | "mobile" | "tablet"
* */
export function getRandomUA(type = "desktop") {
    return new UserAgent({ deviceCategory: type }).toString();
}
