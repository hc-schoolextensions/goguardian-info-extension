var ctx = new URLSearchParams(atob(new URLSearchParams(location.search).get('ctx')));
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
var container = document.createElement('div');
container.innerHTML = `<div id="innercontainer">
<div id="infobutton">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 30px; fill: white;"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
</div>
<div id="info" style="display: none;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 20px;" id="closeicon"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
    <p id="data">

    </p>
</div>
</div>`;
container.id = "container";
document.body.appendChild(container);
var infobutton = document.getElementById('infobutton');
var infodiv = document.getElementById('info');
var closeicon = document.getElementById('closeicon');
var dataP = document.getElementById('data');
var tmpdata = '';
infobutton.addEventListener('click', function () {
    infodiv.style.display = infodiv.style.display != 'none' ? 'none' : 'block';
});
closeicon.addEventListener('click', function () {
    infodiv.style.display = 'none';
});
for (var pair of ctx.entries()) {
    tmpdata += `<strong>${ctxprops[pair[0]] ? ctxprops[pair[0]] : pair[0]}: </strong>${pair[0] == 'ou' ? decodeURI(pair[1]) : pair[0] == 'rs' ? rsprops[pair[1]] : pair[1]}<br>`;
}
dataP.innerHTML = `<p id="prefix" style="font-weight: 500;"><strong style="font-weight: bold;">GoGuardian Blocked Page Info</strong></p><div id="innerdatacontainer">${tmpdata}</div>`;