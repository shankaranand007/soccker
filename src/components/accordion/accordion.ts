import { Component, ViewChild, OnInit, Renderer, Input, OnChanges } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit, OnChanges {

  @Input('accordionExpanded') accordionExpanded: boolean = false;
  @Input('disableClick') disableClick: boolean = false;
  @Input('isDisabled') isDisabled: boolean = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;

  public icon: string = "arrow-down";

  constructor(public renderer: Renderer, public events: Events) {
  }

  ngOnInit() {
    this.renderer.setElementStyle(
      this.cardContent.nativeElement,
      "webkitTransition",
      "max-height 500ms, padding 500ms"
    );
    this.initAccordion();
    this.collapseAllEvent();
  }

  initAccordion() {

    if (!this.accordionExpanded) {
      return;
    }

    this.expand();
  }

  toggleAccordion() {

    if (this.isDisabled || this.disableClick) {
      return;
    }

    let tempaccordionExpanded = this.accordionExpanded;
    this.events.publish('collapseAll');

    if (tempaccordionExpanded) {
      return this.collapse();
    }

    this.expand();
  }

  resetAccordion() {
    if (this.isDisabled) {
      return;
    }

    let tempaccordionExpanded = this.accordionExpanded;
    this.events.publish('collapseAll');

    if (tempaccordionExpanded) {
      return this.expand();
    }

    // this.collapse();
  }

  public setCollapseMeta() {
    this.accordionExpanded = false;
    this.icon = "arrow-down";
  }

  public setExpandMeta() {
    this.accordionExpanded = true;
    this.icon = "arrow-up";
  }

  private collapseAllEvent() {
    this.events.subscribe('collapseAll', () => {
      this.collapse();
    });
  }

  private collapse() {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
    this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px");
    this.setCollapseMeta();
  }

  private expand() {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "2000px");
    this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "unset");
    this.setExpandMeta();
  }

  public ngOnChanges(changes: any) {
    if (changes['accordionExpanded'].isFirstChange()) {
      return;
    }

    if (!changes['accordionExpanded'].currentValue) {
      return;
    }

    this.resetAccordion();
  }

}
