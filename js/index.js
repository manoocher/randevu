var username = "sa";
var password = "sa";
var url = "http://volls.meddatam.com:6950/datasnap/rest/TServerMethodrandevu/";
var loaded = false;

$(function() {
    var selectedDate;
    var tarih = new Date();
    var today = new Date(tarih.getFullYear(), tarih.getMonth(), tarih.getDate());
    $("#tarih")
        .datepicker({
            language: "tr",
            todayHighlight: true,
            startDate: today,
            endDate: 0,
            format: "YYYY/MM/DD",
            daysOfWeekDisabled: "0",
            daysOfWeekHighlighted: "0,6",
            orientation: "auto top"
        })
        .on("changeDate", function(e) {

            //  console.log(currentDate);
            if ($(".bolum")[0].selectedIndex <= 0) {
                // console.log(" bolum is not  selected"); do nothing
            } else if ($(".dr")[0].selectedIndex <= 0) {
                // console.log(" opetion for Dr not selected"); do nothing
            } else if ($(".kurum")[0].selectedIndex <= 0) {
                //        console.log(" opetion for kurum not selected"); do nothing
            } else {
                // console.log(" all options are Selected");

                selectedDate = e.format(0, "yyyy-mm-dd");
                var selectedDept = $(".bolum").val();
                var selectedDr = $(".dr").val();
                var urlrand = "get_randevu_list/1/" + selectedDept + "/" + selectedDr + "/0/0/" + selectedDate + "/";
                $.ajax({
                    type: "GET",
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader(
                            "Authorization",
                            "Basic " + btoa(username + ":" + password)
                        );
                    },
                    url: url + urlrand,
                    dataType: "json",
                    async: true,
                    success: randevuSucess

                });

                function randevuSucess(randevu) {

                    var getRand = JSON.parse(randevu.result[0]);
                    var randList = getRand.randevu_list;
                    // console.log(getRand.randevu_list);
                    if (randList <= 0) {
                        console.log('there is no available Randevu on this Day');
                        if (!$('#next1').hasClass('invisible')) {
                            $('#next1').addClass('invisible');
                        }
                    } else {
                        console.log('here we have randevu --- enable the button');
                        $("#next1").removeClass('invisible').on('click', function() {
                            var selectSira = $(".sira");
                            selectSira.empty()
                                .append(
                                    "<option disabled='disabled' SELECTED>Saat Seçiniz</option>"
                                );
                            $.each(randList, function(i, val) {
                                $("<option/>", {
                                    value: val.sira_no,
                                    text: val.saat
                                }).appendTo(selectSira);
                            });

                            var selectDr = $(".dr option:selected").text();
                            var selectBo = $(".bolum option:selected").text();
                            var selectedFullDate = e.format(0, "dd-MM-yyyy");
                            console.log(selectDr);
                            console.log(selectedFullDate + "'de mevcut randevular");
                            console.log(selectBo);
                            $('.detail').text(selectedFullDate + "'de mevcut randevular");
                            $('.doktor').text(selectDr + ', ' + selectBo);

                        });

                        // $.each(randList, function(i, val) {
                        //     console.log('Sira No: ' + val.sira_no + '\n' + 'Saat: ' + val.saat);
                        // });
                    }

                }

            }
        });

    jQuery.validator.addMethod("checktc", function(value, element) {
        if (/^[1-9]{1}[0-9]{9}{0,2,4,6,8]{1}/.test(value)) {
            return false; // FAIL validation when REGEX matches
        } else {
            return true; // PASS validation otherwise
        };
    }, "wrong nic number");

    $("#randevuform").validate({
        messages: {

            name: {
                required: "İsim gerekli"
            },
            last: {
                required: "Soyadı gerekli"
            },
            tcid: {
                required: "please enter TC for me"
            },
            telno: {
                required: "Telefon numarası yanlış"
            },
            eposta: {
                required: "e-posta yanlış"
            },
            resmi: {
                required: "Bu alan gereklidir"
            },
            kvkk: {
                required: ""
            }
        },
        rules: {
            name: "required",
            last: "required",
            tcid: {
                checktc: true
            },
            resmi: "required",
            telno: "required"

        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
        }

    })


    //submit for getting the list of randevu

    $('#next3').on('click', function() {

        if (!$("#randevuform").valid()) {
            event.preventDefault();
            return;
        }
        // var randForm = $('#randevuform');
        //  if (!(randForm.valid())) return false;
        console.log(selectedDate);




    });



}); //end of main function



var urlendBolum = "get_bolum_list/1/0/";
$.ajax({
    type: "GET",
    beforeSend: function(xhr) {
        xhr.setRequestHeader(
            "Authorization",
            "Basic " + btoa(username + ":" + password)
        );
    },
    url: url + urlendBolum,

    dataType: "json",
    // jsonpCallback: 'callbackFnc',
    async: true,
    //data: '{"username": "' + username + '", "password" : "' + password + '"}',
    success: handleDataBolum
});

function handleDataBolum(data) {
    var obj = JSON.parse(data.result[0]);
    var dept = obj.bolum_list;
    var selectElmBolum = $(".bolum");
    $.each(dept, function(i, val) {
        $("<option/>", {
            value: val.bolum_kodu,
            text: val.bolum_adi
        }).appendTo(selectElmBolum);
    });
}

// function to get data for drlist
function handleDataDr(data) {
    var obj = JSON.parse(data.result);
    var drlist = obj.dr_list;

    var selectElmDr = $(".dr");
    selectElmDr
        .empty()
        .append(
            "<option disabled='disabled' SELECTED>Lütfen Doktor Seçiniz</option>"
        );
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
    $('#tarih').datepicker('update', '');

    // console.log(slectedDept);
    var urlendDr = "get_dr_list/1/" + slectedDept + "/0";
    //   console.log(slectedDept);
    $.ajax({
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " + btoa(username + ":" + password)
            );
        },
        url: url + urlendDr,

        dataType: "json",
        // jsonpCallback: 'callbackFnc',
        async: true,
        data: '{"username": "' + username + '", "password" : "' + password + '"}',
        success: handleDataDr
    });
});

$(".dr").on("change", function() {
    // var slectedDept = $(".bolum").val();
    // console.log(slectedDept);
    var urlendKr = "get_kurum_list/1/0";
    //   console.log(slectedDept);

    if (loaded) return;
    $.ajax({
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " + btoa(username + ":" + password)
            );
        },
        url: url + urlendKr,

        dataType: "json",
        // jsonpCallback: 'callbackFnc',
        async: true,
        data: '{"username": "' + username + '", "password" : "' + password + '"}',
        success: handleDataKr
    });

    loaded = true;
});

// function to get data for Kurum list
function handleDataKr(data) {
    var obj = JSON.parse(data.result);
    var krlist = obj.kurum_list;

    var selectElmKr = $(".kurum");
    selectElmKr
        .empty()
        .append(
            "<option disabled='disabled' SELECTED>Lütfen Kurum Seçiniz</option>"
        );
    $.each(krlist, function(i, val) {
        console.log(val.kurum_kodu);
        $("<option/>", {
            value: val.kurum_kodu,
            text: val.kurum_adi
        }).appendTo(selectElmKr);
    });
}

$('.sira').on('change', function(e) {
    if (($('#next2').hasClass('invisible'))) {
        $('#next2').removeClass('invisible');
    }
});