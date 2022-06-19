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

document.getElementById('infobutton').addEventListener('click', function () {
    if (document.getElementById('info').style.display != "none") {
        document.getElementById('info').style.display = "none";
    } else {
        document.getElementById('info').style.display = "block";
    }
});

document.getElementById('closeicon').addEventListener('click', function () {
    document.getElementById('info').style.display = "none";
});

var ctxdata = new URLSearchParams(location.search);
var ctxdataencoded = ctxdata.get('ctx');
var ctxdatadecoded = window.atob(ctxdataencoded);
var ctxdataurlsearchparams = new URLSearchParams(ctxdatadecoded);
var afitxt = ctxdataurlsearchparams.get('afi');
var afi = "";
if (afitxt != null) {
    afi = `<strong>Admin Filter ID: </strong>${ctxdataurlsearchparams.get('afi')}<br>`;
}
var apitxt = ctxdataurlsearchparams.get('api');
var api = "";
if (apitxt != null) {
    api = `<strong>API ID: </strong>${ctxdataurlsearchparams.get('api')}<br>`;
}
var tsitext = ctxdataurlsearchparams.get('tsi');
var tsi = "";
if (tsitext != null) {
    tsi = `<strong>Teacher Scene ID: </strong>${ctxdataurlsearchparams.get('tsi')}<br>`;
}
var organizationid = `<strong>Orgaization ID: </strong>${ctxdataurlsearchparams.get('oi')}<br>`;
var blockedurl = `<strong>Blocked URL: </strong>${decodeURI(ctxdataurlsearchparams.get('ou'))}<br>`;

var blockedreasonone = ctxdataurlsearchparams.get('rs');
var blockedreason;
var categoryid;
if (blockedreasonone == "ADMIN_SITE_CATEGORY_FILTER") {
    categoryid = `<strong>Category ID: </strong>${ctxdataurlsearchparams.get('sci')}<br>`;
    blockedreason = "<strong>Blocked Reason: </strong>GoGuardian Admin Site Categoty Filter Lists<br>";
} else if (blockedreasonone == "ADMIN_SITE_FILTER") {
    blockedreason = "<strong>Blocked Reason: </strong>GoGuardian Admin Custom Site Filter List<br>";
} else if (blockedreasonone == "BLOCK_CONSUMER_ACCOUNTS") {
    blockedreason = "<strong>Blocked Reason: </strong>GoGuardian Admin Block Consumer Accounts<br>";
} else if (blockedreasonone == "TEACHER_SCENE") {
    blockedreason = "<strong>Blocked Reason: </strong>Teacher Scene<br>";
} else {
    blockedreason = `<strong>Blocked Reason: </strong>${blockedreasonone}<br>`;
}

var browser = `<strong>Browser: </strong>${ctxdataurlsearchparams.get('st')}<br>`;
var priority = `<strong>Priority: </strong>${ctxdataurlsearchparams.get('v')}`;
var prefix = "<p id='prefix' style='font-weight: 500;'><strong style='font-weight: bold;'>GoGuardian Blocked Page Info</strong></p>"
var full;
full = `${prefix}<div id="innerdatacontainer">${afi}${api}${organizationid}${blockedurl}${blockedreason}${tsi}${categoryid == undefined ? '' : categoryid}${browser}${priority}</div>`;
document.getElementById('data').innerHTML = full;