let form = document.getElementById('my-form');

form.addEventListener('submit', storeData);

function storeData(e) {
    e.preventDefault();

    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPhone = document.getElementById('phone').value;

    let obj = {
        name: userName,
        email: userEmail,
        phone: userPhone
    };

    axios.post('http://localhost:3000/users', obj)
        .then(res => {
            appendDataToList(userName, userEmail, userPhone, res.data.id) 
           console.log(res.data.id)})
        .catch(err => alert(err));

    
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
// Append data 
function appendDataToList(Name, Email, Phone, id) {

    let data = document.createElement('li');
    data.appendChild(document.createTextNode('Name:'+ Name + ' ' + 'Email:' +Email + ' ' + 'Phone:' +Phone));

    // //Edit Button
    // let editButton = document.createElement('button');
    // editButton.innerText = 'Edit';
    // editButton.addEventListener('click', function () {
    //     document.getElementById('name').value = Name;
    //     document.getElementById('email').value = Email;
    //     document.getElementById('phone').value = Phone;
    //     form.removeChild(data);
    //     axios.delete(`http://localhost:3000/users/${id}`)
    //     .then(res => console.log('Edit Now', res.data))
    //     .catch(err => alert(err));

    // });

    //Delete Button
    
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.style.marginLeft = '1px';
    deleteButton.addEventListener('click', function () {
        form.removeChild(data);
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(res => console.log('User deleted seccessfully', res.data))
        .catch(err => alert(err));
    });


    data.appendChild(deleteButton); // Add the delete button to the li element
    // data.appendChild(editButton);  //Add the edit button to the li element
    form.appendChild(data);
}


// Get Data
axios.get('http://localhost:3000/users')
    .then(res => printData(res.data))
    .catch(err => alert(err));

function printData(obj) {
    for (let i = 0; i < obj.length; i++) {

        const d = obj[i];
        appendDataToList(d.name, d.email, d.phone, d._id);
    }
}