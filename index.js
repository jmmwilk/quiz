const ileByloPytan = questions.length

function start () {
  document.getElementById('scenawybordzialow');
  document.getElementById('titlebox').innerText = 'Wybierz działy:';

}

function newquestion() {
  if (questions.length === 0) { 
    theend(); 
    return;
  }

  const questionnumber = Math.round(Math.random() * (questions.length -1));
  
  document.getElementById('question').innerText = questions[questionnumber].question;
  
  for (i=0; i<questions[questionnumber].answers.length; i++) {
    document.getElementsByClassName('dupa')[i].innerText = questions[questionnumber].answers[i];
  }

  for (i=0; i<document.getElementsByClassName('dupa').length; i++) {
    document.getElementsByClassName('dupa')[i].onclick = function (event) {
      istrue(event, questionnumber);
    };
    document.getElementsByClassName('dupa')[i].numerkratki = i;
    document.getElementsByClassName('dupa')[i].style.backgroundColor = 'white';
  }


}

function istrue(event, questionnumber) {
  console.log (event.target.numerkratki);
  if (event.target.numerkratki == questions[questionnumber].goodanswer) {
    event.target.style.backgroundColor = 'green';
    setTimeout(function (questionnumber) {
      questions.splice (questionnumber, 1);
      newquestion();
      }, 2000);
  } else {
    event.target.style.backgroundColor = 'red'
  }

}

function theend () {
  document.getElementById('aplikacja').style.display = 'none';
  document.getElementById('scenawynik').style.display = 'flex';
  document.getElementById('scenawynik').innerText = 'Odpowiedziałeś poprawnie na ' + ileByloPytan + ' pytań.';
}


      