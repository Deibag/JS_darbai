async function getUserAsync() 
{
  let response = await fetch('https://randomuser.me/api/');
  let data = await response.json()
  return data;
}

getUserAsync()
  .then(data => {
      console.log(data);
      document.getElementById('name').innerText = data.results[0].name.first;
      document.getElementById('email').innerText = data.results[0].email;
      document.getElementById('phone').innerText = data.results[0].cell;
  }); 






