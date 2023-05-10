$(document).ready(() => {
    
    if(localStorage.length > 0){
        let users = JSON.parse(localStorage.getItem('user'))//create array from localStorage
        for(let i=0;i<users.length;i++){
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
            <td >
                <button type="button" value="" class="btn btn-outline-secondary personal-button">Детальніше</button>
            </td>
          </tr>
                    `) //add selectors in table
        }   
        for (let i = 0; i < users.length; i++) {
            //changing information in table
            $('.number').eq(i).text(i + 1)
            $('.name').eq(i).text(users[i].name)
            $('.email').eq(i).text(users[i].email)
            $('.phone').eq(i).text(users[i].phone)
            $('.avatar').eq(i).attr('src', users[i].avatar)
            $('.personal-button').eq(i).val(i)
        } 
        
    }
    
   
    
})