import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SpeechRecognitionComponent } from '../../../components/speech-recognition/speech-recognition';

@Component({
  selector: 'page-speech-recognition',
  templateUrl: 'speech-recognition.html',
})
export class SpeechRecognitionPage {

  public responseText: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
  }

  public testSpeechRecognition() {
    let VoiceSearchModel = this.modalCtrl.create(SpeechRecognitionComponent, {});
    VoiceSearchModel.onDidDismiss(selectedItems => {
      if (selectedItems === 'cancel') {
        return;
      }
      this.responseText = selectedItems[0]; //get first response
    });
    VoiceSearchModel.present();
  }

  pop(){
    this.navCtrl.pop();
  }
}
