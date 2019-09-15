/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function check(form)
{
    if(form.username.value === "123" && form.password.value === "123" )
    {
        window.location.href = "main.html" ; 
    }
    return false;
    
}

