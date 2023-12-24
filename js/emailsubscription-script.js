const scriptURL = 'https://script.google.com/macros/s/AKfycbw-Iki_7h9BrB1OfkE2SUSBRf3CsdWfUnSR8XxLqoq_x1Txg4YpyBkd2MiiIiHy93L7GQ/exec';

const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for Subscribing!";
        setTimeout(() => {
          msg.innerHTML = ""
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  });





