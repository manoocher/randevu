$(function() {
    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $('#tarih div').datepicker({
        language: "tr",
        todayHighlight: true,
        startDate: today,
        endDate: 0,
        format: 'YYYY/MM/DD',
        daysOfWeekDisabled: "0",
        daysOfWeekHighlighted: "0,6",
        orientation: "auto top"
    });
});

var username = 'sa';
var password = 'sa';
var url = 'http://volls.meddatam.com:6950/datasnap/rest/TServerMethodrandevu/';
var proxy = 'https://cors-anywhere.herokuapp.com/';
var finalurl = proxy + url;

var urlendBolum = 'get_bolum_list/1/0/'
$.ajax({
    type: "GET",
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
    },
    url: url + urlendBolum,

    dataType: 'json',
    // jsonpCallback: 'callbackFnc',
    async: false,
    data: '{"username": "' + username + '", "password" : "' + password + '"}',
    success: handleDataBolum
});

function handleDataBolum(data) {
    var obj = JSON.parse(data.result[0]);
    var dept = obj.bolum_list;
    var sonuc = obj.sonuc;
    var selectElmBolum = $(".bolum");
    $.each(dept, function(i, val) {
        $("<option/>", {
            value: val.bolum_kodu,
            text: val.bolum_adi
        }).appendTo(selectElmBolum);
    });
}

// function to get data for dr list
function handleDataDr(data) {
    var obj = JSON.parse(data.result);
    var drlist = obj.dr_list;

    var selectElmDr = $(".dr");
    selectElmDr.empty().append("<option disabled='disabled' SELECTED>Lütfen Doktor Seçiniz</option>");
    $.each(drlist, function(i, val) {
        //  console.log(val.dr_kodu);
        $("<option/>", {
            value: val.dr_kodu,
            text: val.dr_adi
        }).appendTo(selectElmDr);

    });
}


$(".bolum").on("change", function() {
    var slectedDept = $(".bolum").val();
    // console.log(slectedDept);
    var urlendDr = 'get_dr_list/1/' + slectedDept + '/0';
    //   console.log(slectedDept);
    $.ajax({
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        },
        url: url + urlendDr,

        dataType: 'json',
        // jsonpCallback: 'callbackFnc',
        async: false,
        data: '{"username": "' + username + '", "password" : "' + password + '"}',
        success: handleDataDr


    })
})

$(".bolum").on("change", function() {
    // var slectedDept = $(".bolum").val();
    // console.log(slectedDept);
    var urlendKr = 'get_kurum_list/1/0';
    //   console.log(slectedDept);
    $.ajax({
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        },
        url: url + urlendKr,

        dataType: 'json',
        // jsonpCallback: 'callbackFnc',
        async: false,
        data: '{"username": "' + username + '", "password" : "' + password + '"}',
        success: handleDataKr


    })
})

// function to get data for Kurum list
function handleDataKr(data) {
    var obj = JSON.parse(data.result);
    var krlist = obj.kurum_list;

    console.log(krlist);


    var selectElmKr = $(".kurum");
    selectElmKr.empty().append("<option disabled='disabled' SELECTED>Lütfen Kurum Seçiniz</option>");;
    $.each(krlist, function(i, val) {
        console.log(val.kurum_kodu);
        $("<option/>", {
            value: val.kurum_kodu,
            text: val.kurum_adi
        }).appendTo(selectElmKr);

    });
}