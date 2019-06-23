import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { HelpDetailPage } from './../help-detail/help-detail';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  public mailLink = "mailto:contact@iff.com";
  public questions: any = [
    {
      'title': 'How to search?',
      'key': 'search',
      'steps': [
        `Enter keywords on <span class="blackBold">Search input box</span> from home page or result page`,
        `Click on <span class="blackBold">Search </span> icon`,
        `Results will be shown`,
      ]
    },
    {
      'title': 'How to filter results?',
      'key': 'filterResults',
      'steps': [
        `Click on <span class="blackBold">Filter icon</span> from right top corner`,
        `Apply filters and click on <span class="blackBold">Tick mark icon </span> from right top corner`,
        `Results will be filtered`
      ]
    },
    {
      'title': 'How to logout?',
      'key': 'logout',
      'steps': [
        `Click on <span class="blackBold">Menu Icon</span> from left top corner`,
        `Click on <span class="blackBold">Logout </span> option`
      ]
    }
  ];
  public viewQuestions: any = [];

  constructor(
    private navCtrl: NavController,
    private emailComposer: EmailComposer
  ) {
    this.viewQuestions = this.questions;
  }

  ionViewDidLoad() {

  }

  public pop() {
    this.navCtrl.pop();
  }

  openHelpDetailedPage(key, steps) {
    this.navCtrl.push(HelpDetailPage, {
      'content': {
        title: key,
        steps: steps
      }
    }
    );
  }

  public filterQuestions(searchTerm: string) {
    this.viewQuestions = [];
    this.questions.map(question => {
      if (question.title.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
        this.viewQuestions.push(question);
      }
    });
  }

  sendEmail() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        let email = {
          to: 'help@iff.com',
          cc: 'admin@iff.com',
          bcc: ['admin2@iff.com'],
          attachments: [],
          subject: 'Demo Subject',
          body: 'This is demo for email composer.',
          isHtml: true
        }
        // Send a text message using default options
        this.emailComposer.open(email);
      }
    });

  }
}
