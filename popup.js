var data = document.getElementById('data');
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function (tabs) {
    if (tabs[0].url.startsWith('://blocked.goguardian.com/', 5)) {
        showdata(tabs[0].url);
    } else {
        document.body.style.minWidth = "275px";
        document.body.style.maxWidth = "275px";
        data.innerHTML = `<h1 style="text-align: center;">This page isn't blocked.</h1>`
    }
});
const ctxprops = {
    oi: "orgID",
    ou: "originalURL",
    st: "sourceType",
    rs: "reason",
    sci: "siteCategoryID",
    api: "adminPolicyID",
    afi: "adminFilterID",
    pfi: "parentFilterID",
    x3rpi: "x3ReportPublicID",
    tsi: "teacherSceneID",
    tsfi: "teacherSceneFilterID",
    tsans: "teacherSessionAdminNames",
    v: "v"
};
const rsprops = {
    BlockWebProxies: "BlockWebProxies",
    BLOCK_WEB_PROXIES: "BlockWebProxies",
    BLOCK_DIRECT_IP_ACCESS: "BlockDirectIPAccess",
    BLOCK_CONSUMER_ACCOUNTS: "BlockConsumerAccounts",
    ADMIN_SITE_FILTER: "AdminSiteFilter",
    ADMIN_SITE_CATEGORY_FILTER: "AdminSiteCategoryFilter",
    ADMIN_SAFE_MODE: "AdminSafeMode",
    PARENT_SITE_FILTER: "ParentSiteFilter",
    PARENT_PAUSE: "ParentPause",
    PARENT_SCHEDULED_PAUSE: "ParentScheduledPause",
    X3_REPORT: "X3Report",
    TEACHER_SCENE: "TeacherScene",
    UNKNOWN: "Unknown"
}

function showdata(taburl) {
    var ctx = new URLSearchParams(atob(decodeURI(new URLSearchParams(taburl.split('?')[1]).get('ctx'))));
    var tmpdata = '';
    for (var pair of ctx.entries()) {
        tmpdata += `<strong>${ctxprops[pair[0]] ? ctxprops[pair[0]] : pair[0]}: </strong>${pair[0] == 'ou' ? decodeURI(pair[1]) : pair[0] == 'rs' ? rsprops[pair[1]] : pair[1]}<br>`;
    }
    data.innerHTML = `<p id="prefix" style="font-weight: 500;"><strong style="font-weight: bold;">GoGuardian Blocked Page Info</strong></p><div id="innerdatacontainer">${tmpdata}</div>`;
}