function validate (){
    let fullNameInput = document.getElementById('full-name').value
    // let swimInput = document.getElementById('swimming').checked
    // let danceInput = document.getElementById('dancing').checked
    // let readInput = document.getElementById('reading').checked
    // let singInput = document.getElementById('singing').checked
    let hob = document.getElementById('swimming').checked || document.getElementById('dancing').checked || document.getElementById('reading').checked || document.getElementById('singing').checked
    let genderInput = document.getElementById('gender').value
    let error = false

    let hobby = []
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
    for (var checkbox of markedCheckbox) {  
        hobby.push(checkbox.value);  
    }  
     

    if(fullNameInput.length >= 5 && fullNameInput.includes(' '))//(firstNameInput.length >=1 and contains a space)
    {
        document.getElementById('full-name-valid').style.display = 'block'
        document.getElementById('full-name-invalid').style.display = 'none' //(valid details are passed so it will display nothing)
    }
    else{
        document.getElementById('full-name-invalid').style.display = 'block'
        document.getElementById('full-name-valid').style.display = 'none'
        error = true
    }
    
    if(genderInput !== 'None'){
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    }
    else{
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }

    if(hob){
        document.getElementById('hobbie-invalid').style.display = 'none'
    }
    else{
        document.getElementById('hobbie-invalid').style.display = 'block'
        error = true
    }

    // if(swimInput || danceInput || readInput || singInput){
    //     document.getElementById('hobbie-invalid').style.display = 'none'
    // }
    // else{
    //     document.getElementById('hobbie-invalid').style.display = 'block'
    //     error = true
    // }

    if(!error){
        alert('Hobbies of '+ fullNameInput +'('+ genderInput +') are' + ' ' + hobby.join(' and '))
        document.getElementById('full-name').value = ''
        document.getElementById('gender').value = 'None'
        
        document.getElementById('reading').checked = false
        document.getElementById('dancing').checked = false
        document.getElementById('singing').checked = false
        document.getElementById('swimming').checked = false

        document.getElementById('gender-valid').style.display = 'none'
        document.getElementById('full-name-valid').style.display = 'none'
    }
}