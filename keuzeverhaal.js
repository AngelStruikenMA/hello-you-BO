const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});
 
function startStory() {
  rl.question("je ligt in bed te tukken terwijl je scrolt op tiktok wat ga je doen.\nKeuze: A) naar de woonkamer gaan B)je ligt in bed te tukken terwijl je scrolt op tiktok\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part2();
    } else if (choice.toUpperCase() === 'B') {
      part3c();
    }
  });
}
 
function part2() {rl.question("je gaat naar de woonkamer en hoort geklop op het raam het geklop gaat door voor 10 minuten\nKeuze: A) gaat kijken wie aan het raam klopt B)je blijft het negeren\n", function(choice) {
  if (choice.toUpperCase() === 'A') {
    part3c();
  } else if (choice.toUpperCase() === 'B') {
    part3c();
  }
});
}
  

 
function part3c()  {rl.question("je word opeens aangevallen door ruimte molratten je probeert jezelf te verdedigen maar het lukt niet de molratten zijn te sterk je gaat knock-out. je word wakker vastebonden terwijl de molratten om je heen in een kring staan ze zeggen steeds een naam Benjamin williams jaydequan the third je kijkt verbaast want je weet niet wie dat is uitendelijk spreekt de baas molrat je aan hij zegt waar is hij we weten dat je hem hebt je kijkt verbaast en je vraagt waar is wie? de baas molrat word boos en schopt je hard in je buik hij zegt BENJAMIN je kijkt in pijn naar hem wat ga je doen\nKeuze: A)je zegt dat je het niet hebt  B)je vraagt wie ze zijn en wat ze willen\n", function(choice) {
  if (choice.toUpperCase() === 'A') {
    part4a();
  } else if (choice.toUpperCase() === 'B') {
    part5a();
  }
});
}
function part4a() {

  console.log("Einde :1 de baas molrat word boos en vermoord je");

  rl.close();

}
function part5a() {
  rl.question("de baas molrat legt uit dat ze ruimte molratten zijn die van de maan komen ze zijn hier naar toe gekomen omdat een van hun gangmembers benjamin is gekidnapped door de rivalen gang de water piraten dolfijnen de gps zei dat benjamin hier zou moeten zijn. de molrat baas kijkt je nog een keer aan en vraagt je of je weet waar hij is en of je de gang in wil wat ga je doen\nKeuze: A) je zegt dat je het niet weet maar je wilt de gang in B)je zegt dat je de gang niet in wilt\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part6();
    } else if (choice.toUpperCase() === 'B') {
      part7();
    }
  
  });
}
  function part6() {
    rl.question("de baas molrat accepteert je offer en laat je de gang in je bent officieel een lid van de ruimte molratten gang je krijgt je uniform en jullie gaan meteen aan de slag met het zoeken jullie beginnen de buurt te verkennen omdat zijn locatie zei dat hij in de buurt was maar helaas geen geluk met vinden de molratten geven de hoop op todat de gps een beep afgeeft het laat zien dat benjamin in de oceaan zit de molratten zijn blij om dit te weten maar hoe gaan ze hem ooit halen ze kunnen niet zwemmen plots kijken de molratten allemaal aan jou je weet al wat er aan de hand is jij moet benjamin redden zegt de baas molrat je kijkt verbaast en ben geschokeerd wat ga je doen\nKeuze: A)je gaat het doen\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part9();
      
      }
    });
  }
  function part7() {
    rl.question("je weigert de molratten worden boos en proberen je aan te vallen een paar vuisten raken je maar je ontsnapt net je bent gewond en zoekt voor hulp maar er is niemand je geeft de hoop op en besluit om in het water te springen om het te eindigen je ligt in het water met alle hoop veloren je ogen gaan dicht... maar plotseling zit je op een boot en dolfijnen omsingelen je je kijkt verbaast en vraagt wat er aan de hand is de grote dolfijn spreekt we hebben je gered uit het water je bedankt de dolfijnen en vraagt wie ze zijn ze zeggen dat ze piraat dolfijnen zijn en dat ze op missie zijn om de een lid van de ruimte molratten te ontvoeren en te brengen naar de opper dolfijn je kijkt verbaast en verbind de gebeurtenissen je komt erachter dat de de rivalen gang is van de  molratten die je ontsnapt ben je hebt een grijns op je gezicht en zegt tegen de baas dolfijn dat je weet waar de molratten zijn de baas dolfijn kijkt geinteresseert en vraagt of je de gang in wil wat ga je doen\nKeuze: A) je word lid B)je weigert oom te vertellen waar de molratten zijn\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part10();
      } else if (choice.toUpperCase() === 'B') {
        part10();
      }
    });
  }
  function part9() {rl.question("je bent lid geworden je gaat op je eerste missie je bent bang je trilt van de schrikt maar je gaat toch jullie gaan op de zelfgemaakte booot die je hebt gemnaakt toen je 10 was naar de coordinaten van benjamin na 5 uur zie je eindelijk het schip de molratten wensen je veel succes je gaat op de boot maar je ziet dat iedereen een costuum heeft je pakt een van de handlangers en steelt zijn outfit\nKeuze: A) je gaat door\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part10();
    
    }
  });
  }
  function part10() {
    rl.question("Je infiltreert het ruimteschip van de ruimtemolratten in je gestolen uniform. Het blijkt een gevaarlijke onderneming te zijn, maar je gaat dapper door. wat ga je doen\nKeuze: A)je zoekt benjamin\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part11();
      
      }
    });
  }
  function part11() {
    rl.question("Je probeert Benjamin stilletjes te vinden en te redden zonder ontdekt te worden. wat ga je doen\nKeuze: A)je kijkt veder\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part12();
      
      }
    });
  }
  function part12() {
    rl.question("Je slaagt erin om Benjamin te vinden en bevrijdt hem uit zijn benarde situatie.\nKeuze: A)jullie ontsnappen\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part13();
      
      }
    });
  }
  function part13() {
    rl.question("Jij en Benjamin slagen erin om onopgemerkt van het schip te ontsnappen en keren veilig terug naar de aarde.\nKeuze: A)je gaat terug naar de molratten en vertelt alles\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part14();
      
      }
    });
  }
  function part14() {
    rl.question("Je vertelt Benjamin over de piraatdolfijnen en hun missie om ruimtemolratten te ontvoeren.\nKeuze: A)jullie maken een plan\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part15();
      
      }
    });
  }
  function part15() {
    rl.question(" Jullie bedenken een slim ontsnappingsplan en weten met moeite aan de ruimtemolratten te ontsnappen. wat ga je doen\nKeuze: A)jullie gaan naar aarde\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part16();
      
      }
    });
  }
  function part16() {
    rl.question("Na een spannende achtervolging in de ruimte, slagen jullie erin om veilig terug te keren naar de aarde. Jullie zijn opgelucht en dankbaar dat het avontuur voorbij is.\nKeuze: A)gaat veder\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part17();
      
      }
    });
  }
  function part17() 
  {console.log("\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                  \r\n    \u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588                            \r\n        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588                        \r\n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588                    \r\n  \u2588\u2588  \u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588                \r\n      \u2588\u2588\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588        \r\n    \u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588        \r\n    \u2588\u2588\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591  \u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588        \r\n  \u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591  \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \r\n  \u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592  \u2588\u2588\r\n  \u2588\u2588\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\r\n  \u2588\u2588\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591      \u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591  \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591  \u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2588\u2588                \u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588  \r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2588\u2588                    \u2588\u2588    \r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2591\u2591\u2588\u2588                \u2588\u2588      \r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591  \u2588\u2588            \u2588\u2588        \r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591\u2591\u2591    \u2588\u2588\u2588\u2588      \u2588\u2588          \r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591          \u2588\u2588\u2588\u2588\u2588\u2588            \r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588                  \u2588\u2588          \r\n\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588                \u2588\u2588  \u2588\u2588        \r\n\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588          \u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588      \r\n\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2591\u2591                      \u2588\u2588      \r\n\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588                          \u2588\u2588    \r\n  \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2588\u2588\u2592\u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2588\u2588\u2592\u2592\u2588\u2588\u2591\u2591                          \u2588\u2588    \r\n  \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591                          \u2588\u2588    \r\n  \u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                        \u2588\u2588      \r\n    \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588                  \u2588\u2588      \r\n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2588\u2588            \u2588\u2588        \r\n      \u2588\u2588\u2588\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588      \u2588\u2588\u2588\u2588          \r\n        \u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588            \r\n        \u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2592\u2592\u2588\u2588            \r\n        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2588\u2588\u2593\u2593\u2593\u2593\u2588\u2588\u2588\u2588\u2588\u2588            \r\n")
    rl.question("Gefeliciteerd, jij en Benjamin hebben met succes de dolfijnen verslagen en zijn veilig teruggekeerd naar de aarde\nKeuze: A)jullie verzamelen informatie over de dolfijnen\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part18();
      
      }
    });
  }
  function part18() {
    rl.question("Jullie besluiten om jullie kennis en ervaringen te gebruiken om de dolfijnen te blijven bestrijden. Samen vormen jullie een geheime organisatie om de vrede in de ruimte te bewaren.nKeuze: A)jullie gaan op meer missies\n", function(choice) {
      if (choice.toUpperCase() === 'A') {
        part19();
      
      }
    });
  }
  function part19() {rl.question("Na vele avonturen en missies in de ruimte hebben jij en Benjamin de ruimtemolratten uiteindelijk verslagen en de vrede hersteld. Jullie worden geprezen als helden en genieten van een leven vol avonturen en ontdekkingen.\nKeuze: A) jullie gaan veder met missies B)jullie blijven achter de dolfijnen aan gaan\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part20();
    } else if (choice.toUpperCase() === 'B') {
      part21();
    }
  });
  }
  function part20() {

    console.log("Einde :2 Gefeliciteerd, jij en Benjamin hebben met vastberadenheid en teamwork de ruimtemolratten verslagen en de vrede in de ruimte hersteld. Samen bouwen jullie een onvergetelijk leven vol avonturen en uitdagingen.");
  
    rl.close();
  }
  function part21() {

    console.log("Einde :3 Jullie blijven vluchten voor de ruimtemolratten en moeten voortdurend naar nieuwe schuilplaatsen zoeken. Het avontuur lijkt nooit te eindigen, en jullie kunnen nooit meer een rustig leven leiden.");
  
    rl.close();
  
  }

 

startStory();

