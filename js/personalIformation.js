$(document).ready(() => {
    //after our DOM loaded    

    $(document).on('click', '.personal-button', function (e) {
        //it's function that work after edit info in table
        let users = JSON.parse(localStorage.getItem('user'))
        //take user array from localStorage
        for (let i = 0; i < $('.personal-button').length; i++) {
            if (i == e.target.value) {
                //check value of button that was clicked with i
                //if true we show all information about user
                $('#infoModal').modal('show')
                $('.modal-avatar').attr('src', $('.avatar').eq(i).attr('src'))
                $('.modal-name-main').text($('.name').eq(i).text())
                $('.modal-email-main').text($('.email').eq(i).text())
                $('.modal-phone-main').text($('.phone').eq(i).text())
                for (let j = 0; j < users.length; j++) {
                    if (users[j].name == $('.modal-name-main').eq(i).text()) {
                        //find user location and sex, if we have that user
                        $('.modal-sex-main').text(users[j].sex)
                        $('.modal-location-main').text(users[j].location)
                        
                    }
                }
                break;
            }
            

        }
    })
}
)