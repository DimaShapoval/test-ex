$(document).ready(()=>{
    const VALID_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const VALID_NUMBER = /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/; 
    let user;
    let userArray = [];
    if(localStorage.length > 0){
            userArray = JSON.parse(localStorage.getItem('user'))
            //if localStorage no empty we add array from this in userArray
        }
    console.log(localStorage);

    $('#create-customer').click(()=>{
        $('#createCustomerModal').modal('show')
    })
    $('#drop-avatar').on('change', function(){ //inpuit type file witch drop picture
        let maxSize = 2
        if(!$('#drop-avatar').prop('files')[0].type.match(/^image\//)){ // if type of file not image this function show error
            alert("Ви маєте право завантажувати лише зображення. Будь ласка оберіть інший файл")
            $('#drop-avatar').val(null) 
            return false;
        }
        if($('#drop-avatar').prop('files')[0].size / 1024 / 1024 > maxSize){ // if size of image bigger that 2mb function show error
            alert("Максимальный розмір файлу 2МБ. Оберіть інший файл")
            $('#drop-avatar').val(null) 
            return false;
        }
        


        
    })
    $('#customer-create').click((e)=>{
        if(VALID_NUMBER.test($('#phoneInput').val().trim()) && VALID_EMAIL.test($('#emailInput').val()) && $('#nameInput').val() != '') {
            $('#emailInput').removeClass('border-danger-subtle')
            $('#nameInput').removeClass('border-danger-subtle')
            $('#phoneInput').removeClass('border-danger-subtle')

            $('#emailInput').removeClass('border-1')
            $('#nameInput').removeClass('border-1')
            $('#phoneInput').removeClass('border-1')
      
            $('#emailInput').addClass('border-0')
            $('#nameInput').addClass('border-0')
            $('#phoneInput').addClass('border-0')

            user = {
                name: $('#nameInput').val(),
                avatar: $('.modal-avatar-img').attr('src'),
                phone: $('#phoneInput').val(),
                email: $('#emailInput').val(),
                location: $('#locationInput').val(),
                sex: $('#sex-select-modal').val(),

            }
            console.log(user);

            let data = new FormData(); //create from like obj or html from that in post method have look like name:...,email:....
        // console.log($('#drop-avatar').prop('files')[0]);
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
                `)//add new cunstomer loader in start of table
                for (let i = 0; i < $('.table-item').length; i++) {
                    //change info about new customer in table
                    $('.number').eq(i).text(i + 1)
                    $('.name').eq(0).text(user.name)
                    $('.email').eq(0).text(user.email)
                    $('.phone').eq(0).text(user.phone)
                    if(user.avatar == ''){
                        user.avatar = 'images/default-user-icon.jpg'
                    }
                    $('.avatar').eq(0).attr('src', user.avatar)    
                    $('.personal-button').eq(i).val(i)
                   
                }
                userArray.unshift(user)
                localStorage.setItem('user', JSON.stringify(userArray))
                $('#createCustomerModal').modal('hide')
                 //show window that customer add
                 $('#randomTrue').modal('show')
                 setTimeout(() => {
                     //function that after 1.5s will remove window in user display
                     $('#randomTrue').modal('hide')
                 }, 1500)
        //         console.log($('#drop-avatar')[0].files[0]);
        // data.append('file', $('#drop-avatar')[0].files[0]) ////add in start our file and give name "file"
        // $.ajax({
        //     url: 'php/image.php',  ////url for php file
        //     type: "post",
        //     data: data,  ////here argument data because after that it was created like form by FormData
        //     cache: false,
        //     dataType: 'json',
        //     processData: false, ////stop all process that was work
        //     contentType : false,
        //     success: function(data){
        //         if( data.error == '' ){   ////if error have undefinded 
        //             // change src for tag image '.avatar'
        //             console.log(data.success);
                    
    
        //             // $('.avatar').eq(0).attr('src', files_path );
        //         }
        //     }

        // })
        }
        if($('#nameInput').val() == ''){
            $('#nameInput').addClass('border-danger-subtle')
            $('#nameInput').addClass('border-1')
            $('#nameInput').removeClass('border-0')
        }
        else{
            $('#nameInput').removeClass('border-danger-subtle')
            $('#nameInput').removeClass('border-1')
            $('#nameInput').addClass('border-0')
        }
        if(!VALID_EMAIL.test($('#emailInput').val())){
            $('#emailInput').addClass('border-danger-subtle')
            $('#emailInput').addClass('border-1')
            $('#emailInput').removeClass('border-0')
        }
        else{
            $('#emailInput').removeClass('border-danger-subtle')
            $('#emailInput').removeClass('border-1')
            $('#emailInput').addClass('border-0')
        }
        if(!VALID_NUMBER.test($('#phoneInput').val().trim())){
            $('#phoneInput').addClass('border-danger-subtle')
            $('#phoneInput').addClass('border-1')
            $('#phoneInput').removeClass('border-0')
        }
        else{
            $('#phoneInput').removeClass('border-danger-subtle')
            $('#phoneInput').removeClass('border-1')
            $('#phoneInput').addClass('border-0')
        }
        
        
        
    })
    
    
    
})