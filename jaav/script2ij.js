document.getElementById('controleerleeftijd').addEventListener('click', function() {
  let geboortedatum = new Date(document.getElementById('verjaardag').value);
  let now = new Date();
  let age = now.getFullYear() - geboortedatum.getFullYear();
  
  if (age >= 12) {
      document.getElementById('result').textContent = "Je bent oud genoeg! Veel plezier!";
      setTimeout(function() {
          window.location.href = "ijshome.html";
      }, 1500); 
  } else {
      document.getElementById('result').textContent = "Je bent nog te jong.";
  }
});

