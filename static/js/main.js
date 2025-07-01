document.getElementById('user-input').addEventListener('keypress', function(e) {
         if (e.key === 'Enter') {
             sendMessage();
         }
     });

     function sendMessage() {
         const userInput = document.getElementById('user-input').value;
         if (!userInput) return;

         const chatBox = document.getElementById('chat-box');
         chatBox.innerHTML += `<div><strong style="color: black;">User: </strong>${userInput}</div>`;

         fetch('/chat/', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'X-CSRFToken': getCookie('csrftoken')
             },
             body: JSON.stringify({ message: userInput })
         })
         .then(response => response.json())
         .then(data => {
         if (data.response) {
             const { intent, confidence, response } = data;
             chatBox.innerHTML += `<div><strong style="color: black;">${intent}(${(confidence * 100).toFixed(2)}%): </strong>${response}</div>`;
         } else {
             chatBox.innerHTML += `<div>Bot: Error: ${data.error}</div>`;
         }
             chatBox.scrollTop = chatBox.scrollHeight;
             document.getElementById('user-input').value = '';
         })
         .catch(error => {
             console.error('Error:', error);
             chatBox.innerHTML += `<div>Bot: Error occurred while fetching response.</div>`;
         });
     }

     function getCookie(name) {
         let cookieValue = null;
         if (document.cookie && document.cookie !== '') {
             const cookies = document.cookie.split(';');
             for (let i = 0; i < cookies.length; i++) {
                 const cookie = cookies[i].trim();
                 if (cookie.substring(0, name.length + 1) === (name + '=')) {
                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                     break;
                 }
             }
         }
         return cookieValue;
     }