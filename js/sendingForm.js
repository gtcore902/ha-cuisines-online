// Form Management
window.addEventListener('load', () => {

  let form = document.querySelector('form');
  let checkRobot = document.getElementById('checkRobot');
  let nom = document.getElementById('nom');
  let telephone = document.getElementById('telephone');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  // Entries management
  // Nom
  nom.addEventListener('input', function() {
    if (nom.value.length >= 50) {
      document.getElementById('helpNom').innerHTML = '50 caractères max';
    } else {
      document.getElementById('helpNom').innerHTML = '✅';
    }
  });

  // Téléphone
  telephone.addEventListener('input', function() {
    let regexTelephone = /[0]{1}[1-7]{1}[0-9]{8}/;
    let telEntry = String(document.getElementById('telephone').value);
    for (var i = 0; i < telEntry.length; i++) {
      telEntry = telEntry.replace(" ", "");
    }
    if (!telEntry.match(regexTelephone)) {
      document.getElementById('helpTel').innerHTML = 'Numéro de téléphone incorrect';
    } else {
      document.getElementById('helpTel').innerHTML = '✅';
    }
  });

  // Adresse mail
  email.addEventListener('input', function() {
    let regexMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let mailEntry = email.value;
    // console.log(mailEntry);
    if (!mailEntry.match(regexMail)) {
      document.getElementById('helpMail').innerHTML = 'Adresse email incorrect';
    } else {
      document.getElementById('helpMail').innerHTML = '✅';
    }
  });

  // Message
  message.addEventListener('input', function() {
    if (message.value.length >= 3000) {
      document.getElementById('helpMessage').innerHTML = 'Votre message ne doit pas dépasser 3000 caractères';
    } else {
      document.getElementById('helpMessage').innerHTML = '✅';
    }
  });

  // Anti robot
  checkRobot.addEventListener('input', function() {
    if (checkRobot.value != 7) {
      document.getElementById('helpRobot').innerHTML = 'Résultat de l\'opération incorrect';
      } else {
        document.getElementById('helpRobot').innerHTML = '✅';
        }

      });

      form.addEventListener('submit', function(e) {

        e.preventDefault();

        if (checkRobot.value == 7) {
          let dataToSend = {
            nom: nom.value,
            telephone: telephone.value,
            email: email.value,
            message: message.value,
            checkRobot: checkRobot.value
          }
          // console.log(dataToSend);

          let sendingData = new XMLHttpRequest();
          sendingData.open('POST', '../data/sendForm.php', true);
          sendingData.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

          sendingData.onreadystatechange = function() {
            // console.log(this.readyState + ' ' + this.status);
            if (this.readyState == 4 && this.status == 200) {
              // sweetAlert
                swal("Envoyé!", this.responseText, "success")
                .then((value) => {
                  form.reset();
                  document.getElementById('helpNom').innerHTML = "";
                  document.getElementById('helpTel').innerHTML = "";
                  document.getElementById('helpMail').innerHTML = "";
                  document.getElementById('helpMessage').innerHTML = "";
                  document.getElementById('helpRobot').innerHTML = "";
                });
            } else {
              swal("Oups!", this.responseText, "error");
            }
          }
          sendingData.send(
            "nom=" + dataToSend.nom+'&'+
            "telephone=" + dataToSend.telephone+'&'+
            "email=" + dataToSend.email+'&'+
            "message=" + dataToSend.message+'&'+
            "checkRobot=" + dataToSend.checkRobot
          );
        };
      })
    });
