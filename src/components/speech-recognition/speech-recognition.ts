import { Component, ChangeDetectorRef } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

@Component({
  selector: 'speech-recognition',
  templateUrl: 'speech-recognition.html'
})

export class SpeechRecognitionComponent {
  public voiceSearchKey: any;
  public isRecording: boolean = false;
  public defaultText: string = "Speak now";
  private idle: boolean = false;
  private interval: any;

  constructor(
    private speechRecognition: SpeechRecognition,
    public viewCtrl: ViewController,
    public changeDetectorRef: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private openNativeSettings: OpenNativeSettings,
  ) { }

  ionViewDidLoad() {
    this.startListening();
  }

  private async startListening() {

    try {
      if (!await this.checkPermission()) {
        await this.requestPermission();
      }
      this.voiceSearchKey = await this.start();
    } catch (err) {
      this.openAppSetting(err);
    }
  }

  private openAppSetting(msg) {
    let pMsg=msg=="User denied access to microphone"?"microphone":"speech recognition"
    const prompt = this.alertCtrl.create({
      title: 'Enable Permission',
      message: "To search with your voice, tab on settings to let Colors use your "+pMsg,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Settings',
          handler: data => {
            this.openNativeSettings.open("application_details").then((data) => {
            }, (error) => { console.log('failed to open settings', error); });
          }
        }
      ]
    });
    prompt.present();
  }

  private async checkPermission() {
    return await this.speechRecognition.hasPermission();
  }

  private async requestPermission() {
    return await this.speechRecognition.requestPermission();
  }

  private start() {
    this.checkVoice();
    this.isRecording = true;
    let option = {
      language: "en-US",
      matches: 1,
      showPartial: true
    }
    this.speechRecognition.startListening(option)
      .subscribe(
        (matches: Array<string>) => {
          this.voiceSearchKey = matches;
          try {
            if (!this.changeDetectorRef['destroyed']) {
              this.changeDetectorRef.detectChanges();
            }

            this.idle = false;
          } catch (error) { }
        }
      );
  }

  checkVoice() {
    this.interval = setInterval(() => {
      if (this.idle === false) {
        return this.idle = true;
      }

      if (this.voiceSearchKey && this.voiceSearchKey.length > 0) {
        clearInterval(this.interval);
        this.dismiss('search')
      }

    }, 1500)
  }

  private async stop(cancelled = false) {
    this.isRecording = false;
    await this.speechRecognition.stopListening();

    if (cancelled) {
      return;
    }
 }

  async dismiss(option) {
    if (option === "cancel") {
      this.voiceSearchKey = "";
      this.stop(true);
      this.viewCtrl.dismiss('cancel');
      return;
    }

    await this.stop();
    this.viewCtrl.dismiss(this.voiceSearchKey);
  }

}
