$(document).ready(() => {
    let url = 'https://randomuser.me/api/?results=1&nat=UA'
    let avatar = []
    let count = -1;
    $('#next-avatar').click(() => {
            $('.modal-avatar-img').attr('src', 'https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif')

        
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function (data) {
                let dataAvatart = data.results[0].picture.large
                avatar.push(dataAvatart)
                count++;
                $('.avatar-image-wrapper').removeClass('fade')
                $('.modal-avatar-img').attr('src', avatar[count])

            }
        })

    })
    $('#prev-avatar').click(() => {
        if(avatar.length > 0 && count == 0){
            $('.modal-avatar-img').attr('src', 'https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif')
            $('.avatar-image-wrapper').removeClass('fade')
            $('.modal-avatar-img').attr('src', avatar[count])
        }
        else if(count <= 0 ){
            return false;
        }
        else{
            count--;
            $('.modal-avatar-img').attr('src', 'https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif')
            $('.avatar-image-wrapper').removeClass('fade')
            $('.modal-avatar-img').attr('src', avatar[count])
        
        }
        

        





    })
    $('#without-avatar').click(()=>{
        $('.modal-avatar-img').attr('src', 'images/default-user-icon.jpg');
        $('.avatar-image-wrapper').removeClass('fade')
    })

})