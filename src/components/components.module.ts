import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { IonicModule } from 'ionic-angular';
import { PickerComponent } from './picker/picker';
import { ModalComponent } from './modal/modal';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition';

@NgModule({
  declarations: [
    AccordionComponent,
    PickerComponent,
    ModalComponent,
    SpeechRecognitionComponent,
  ],
  imports: [IonicModule],
  exports: [
    AccordionComponent,
    PickerComponent,
    ModalComponent,
    SpeechRecognitionComponent,
  ],
  schemas: [],
  entryComponents: [
    PickerComponent,
    ModalComponent,
    SpeechRecognitionComponent
  ],

})
export class ComponentsModule { }
