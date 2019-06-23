import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-accordion',
  templateUrl: 'accordion.html',
})

export class AccordionPage {

  public projectTab: string = "currentProjects";
  public currentProjects = [
    {
      id: "8012424",
      customerName: "Nature's Kitchen",
      accordionStatus: true,
      orders: [
        {
          id: '5232791',
          date: '1-Jan-2019',
          currentStatus: 'Ready for Shipment',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '878232',
          date: '3-Jan-2019',
          currentStatus: 'Shipped',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '982328',
          date: '5-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '292328',
          date: '7-Jan-2019',
          currentStatus: 'Ready for Shipment',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
      ],
    }, {
      id: "2332322",
      accordionStatus: false,
      customerName: "Nature's Kitchen",
      orders: [
        {
          id: '5232791',
          date: '1-Jan-2019',
          currentStatus: 'Ready for Shipment',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '878232',
          date: '3-Jan-2019',
          currentStatus: 'Shipped',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '982328',
          date: '5-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '292328',
          date: '7-Jan-2019',
          currentStatus: 'Ready for Shipment',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
      ],
    }, {
      id: "9012444",
      customerName: "Nature's Kitchen",
      accordionStatus: false,
      orders: [
        {
          id: '5232791',
          date: '1-Jan-2019',
          currentStatus: 'Ready for Shipment',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '878232',
          date: '3-Jan-2019',
          currentStatus: 'Shipped',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '982328',
          date: '5-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '292328',
          date: '7-Jan-2019',
          currentStatus: 'Ready for Shipment',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
      ],
    }];
  public completedProjects = [
    {
      id: "8012424",
      customerName: "Nature's Kitchen",
      accordionStatus: false,
      orders: [
        {
          id: '5232791',
          date: '1-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '878232',
          date: '3-Jan-2019',
          currentStatus: 'Shipped',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '982328',
          date: '5-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '292328',
          date: '7-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
      ],
    }, {
      id: "2332322",
      accordionStatus: false,
      customerName: "Nature's Kitchen",
      orders: [
        {
          id: '5232791',
          date: '1-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '878232',
          date: '3-Jan-2019',
          currentStatus: 'Shipped',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '982328',
          date: '5-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '292328',
          date: '7-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
      ],
    }, {
      id: "9012444",
      customerName: "Nature's Kitchen",
      accordionStatus: false,
      orders: [
        {
          id: '5232791',
          date: '1-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '878232',
          date: '3-Jan-2019',
          currentStatus: 'Shipped',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '982328',
          date: '5-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '292328',
          date: '7-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
      ],
    }, {
      id: "5012987",
      customerName: "Nature's Kitchen",
      accordionStatus: false,
      orders: [
        {
          id: '5232791',
          date: '1-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '878232',
          date: '3-Jan-2019',
          currentStatus: 'Shipped',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '982328',
          date: '5-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        },
        {
          id: '292328',
          date: '7-Jan-2019',
          currentStatus: 'Delivered',
          status: [
            {
              name: 'Review',
              date: '01 Dec',
              status: 'COMPLETED'
            },
            {
              name: 'Make',
              date: '3 Dec',
              status: 'IN_PROGRESS'
            },
            {
              name: 'Ship',
              date: '15 Dec',
              status: 'NOT_INITIATED'
            },
            {
              name: 'Delivery',
              date: '20 Dec',
              status: 'NOT_INITIATED'
            },
          ],
          meta: {
            date: {
              day: '03',
              month: 'Dec'
            },
            comment: 'Sample send to manufacturing unit',
            location: 'Hazlet',
            time: '4:30PM',
          },
        }
      ],
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }


  pop() {
    this.navCtrl.pop();
  }

}
