chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getDawla") {
        sendResponse({ success: true, message: "Done" });
    }
    return true;
});
