import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.sass']
})
export class SpeechComponent implements OnInit {

  recognition: any;
  constructor() { 
    
  }
  
  speechText: any = '';
  ngOnInit() {
    
    console.log(window.speechSynthesis.speak)
    // (window as any).SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition ;
    // this.recognition = new (window as any).SpeechRecognition();
  
    // this.recognition.interimResults = true;
    // this.recognition.maxAlternatives = 10;
    // this.recognition.continuous = true;
    
    // this.recognition.onresult = (event) => {
    //   this.speechText  = event.results[0][0].transcript;
    //   console.log(this.speechText);
    // };
    // this.recognition.start();
  }
  

  speech() {
    var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ';
(window as any).SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition ;
this.recognition = new (window as any).SpeechRecognition();
var speechRecognitionList = new (window as any).SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
this.recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
this.recognition.lang = 'en-US';
this.recognition.interimResults = false;
this.recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

this.recognition.start();
document.body.onclick = function() {
  console.log('Ready to receive a color command.');
}

this.recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color;
  bg.style.backgroundColor = color;
}
  }
}
