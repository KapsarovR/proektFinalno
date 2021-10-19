$(document).ready(function () {

    $('#KreirajLet').click(function () {

        var FistName = $('#FistName').val()
        var LastName = $('#LastName').val()
        var Birth = $('#Birth').val()
        var Passport_Number = $('#Passport_Number').val()


        var podatociKreirajLet = {
            'First_Name': FistName,
            'Last_Name': LastName,
            'Birth': Birth,
            'Passport_Number': Passport_Number,
        }

        $.post({
            url: 'https://proektna-api.herokuapp.com/api/create-passenger/',
            data: podatociKreirajLet,
            success: function (result) {
                console.log("Uspesno kreiran patnik")
            }
        })
    })
})
$(document).ready(function () {
    $('#KreirajLet1').click(function () {

        var Flight_Number = $('#BrojLet').val()
        var Departure = $('#vreme').val()
        var Destination = $('#Destination').val()
        var Departure_date = $('#poletuvajne').val()
        var Return_date = $('#sletuvanje').val()
        var CarryOn = $('#bagas').val()
        var Trolley = $('#trolley').val()
        var PassangerId = $('#PassangerId').val()
        var CheckIn = $('#CheckIn').val()

        var podatociLet = {
            "Flight_Number": Flight_Number,
            "Departure": Departure,
            "Destination": Destination,
            "Departure_date": Departure_date,
            "Return_date": Return_date,
            "CarryOn": CarryOn,
            "Trolley": Trolley,
            "CheckIn": CheckIn,
            "PassangerId": PassangerId,
           
        }
        $.post({
            url: 'https://proektna-api.herokuapp.com/api/create-flight/',
            data: podatociLet,
            success: function (result) {
                console.log("Uspeshno Kreiravte Let")
                console.log(result.id)
            }
        })
    })
})