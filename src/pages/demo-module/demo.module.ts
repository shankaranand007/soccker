import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng4-charts/ng4-charts';

import { AccordionPage } from './accordion/accordion';
import { ChartPage } from './chart/chart';
import { EventsPage } from './events/events';
import { DeeplinksPage } from './deeplinks/deeplinks';
import { InfiniteScrollerPage } from './infinite-scroller/infinite-scroller';
import { PickerModalPage } from './picker-modal/picker-modal';
import { SharePage } from './share/share';
import { ComponentsModule } from './../../components/components.module';
import { SpeechRecognitionPage } from './speech-recognition/speech-recognition';
import { DemoPage } from './demo/form';

@NgModule({
  declarations: [
    AccordionPage,
    ChartPage,
    EventsPage,
    DeeplinksPage,
    DemoPage,
    InfiniteScrollerPage,
    PickerModalPage,
    SharePage,
    SpeechRecognitionPage
  ],
  entryComponents: [
    AccordionPage,
    ChartPage,
    EventsPage,
    DeeplinksPage,
    DemoPage,
    InfiniteScrollerPage,
    PickerModalPage,
    SharePage,
    SpeechRecognitionPage
  ],
  imports: [
    ComponentsModule,
    ChartsModule,
    IonicModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class DemoModule { }
