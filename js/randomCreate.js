$(document).ready(() => {
    let staticUrl = 'https://randomuser.me/api/?results=1&nat=UA'
    let url;
    let user;
    let userArray = [];
    if(localStorage.length > 0){
            userArray = JSON.parse(localStorage.getItem('user'))
            //if localStorage no empty we add array from this in userArray
        }
        
   $(document).on('click', '#random-create',function(){ //it's function that work after edit info in table
    //in this function we create a random customer and add his in LocalStorage
        if ($('.form-select').val()) {
            //if form where we choose gender of customer have Male or Female
            url = staticUrl + '&gender=' + $('.form-select').val()
        }
        else {
            url = staticUrl
        }
        $('.table-group-divider').prepend(`<tr class="table-item">
        <th class="number" scope="row">
            <img  class="loader" src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" width="50" alt="avatar"/>
        </th>
        <td >
            <img  class="avatar" src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" width="50" alt="avatar"/>
        </td>
        <td class="name">
            <img  class="loader" src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" width="50" alt="avatar"/></td>
        <td class="email">
            <img  class="loader" src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" width="50" alt="avatar"/></td>
        <td class="phone">
            <img  class="loader" src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" width="50" alt="avatar"/></td>
        <td>
            <button type="button" value="" class="btn btn-outline-secondary personal-button">Детальніше</button>
        </td>
      </tr>
                `)
        $.ajax({
            url: url,
            method: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                let dataName = data.results[0].name;
                let dataEmail = data.results[0].email;
                let dataPhone = data.results[0].phone;
                let dataAvatart = data.results[0].picture.large;
                let dataLocation = data.results[0].location.country + "(" + data.results[0].location.city + ")"
                let dataSex = data.results[0].gender
                //create obj that we add at localStorage
                user = {
                    name: dataName.first + " " + dataName.last,
                    avatar: dataAvatart,
                    phone: dataPhone,
                    email: dataEmail,
                    location: dataLocation,
                    sex: dataSex,

                }
                userArray.unshift(user)
                //add in start of array that have info from localStorage
                
                
                    localStorage.setItem('user', JSON.stringify(userArray))
                    //add for localStorage our array in JSON string
                



                for (let i = 0; i < $('.table-item').length; i++) {
                    //change info about new customer in table
                    $('.number').eq(i).text(i + 1)
                    $('.name').eq(0).text(user.name)
                    $('.email').eq(0).text(user.email)
                    $('.phone').eq(0).text(user.phone)
                    $('.avatar').eq(0).attr('src', user.avatar)
                    $('.personal-button').eq(i).val(i)
                }
                //show window that customer add
                $('#randomTrue').modal('show')
                setTimeout(() => {
                    //function that after 1.5s will remove window in user display
                    $('#randomTrue').modal('hide')
                }, 1500)


            }

        })


    })
    $(document).ajaxError(function () {
        //if we fail add customer this function show window with error
        $('#errorModal').modal('show')
        setTimeout(() => {
            $('#errorModal').modal('hide')
            //after 1.5s window with error will remove from display
        }, 1500)
        $('.table-item').eq(0).remove()
        //remove new row in table that we created for new customer
    })
})