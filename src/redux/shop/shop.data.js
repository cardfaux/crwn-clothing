import eleaf2 from '../../assets/img/shop-data/eleaf/eleaf2.jpeg';
import eleaf3 from '../../assets/img/shop-data/eleaf/eleaf3.jpeg';
import eleaf4 from '../../assets/img/shop-data/eleaf/eleaf4.jpeg';
import eleaf5 from '../../assets/img/shop-data/eleaf/eleaf5.jpeg';
import eleaf6 from '../../assets/img/shop-data/eleaf/eleaf6.jpeg';
import joyetech2 from '../../assets/img/shop-data/joyetech/joyetech2.jpeg';
import joyetech3 from '../../assets/img/shop-data/joyetech/joyetech3.jpeg';
import joyetech4 from '../../assets/img/shop-data/joyetech/joyetech4.jpeg';
import joyetech5 from '../../assets/img/shop-data/joyetech/joyetech5.jpeg';
import joyetech6 from '../../assets/img/shop-data/joyetech/joyetech6.jpeg';
import kangertech2 from '../../assets/img/shop-data/kangertech/kangertech2.png';
import kangertech3 from '../../assets/img/shop-data/kangertech/kangertech3.jpeg';
import kangertech4 from '../../assets/img/shop-data/kangertech/kangertech4.jpeg';
import kangertech5 from '../../assets/img/shop-data/kangertech/kangertech5.jpeg';
import kangertech6 from '../../assets/img/shop-data/kangertech/kangertech6.jpeg';
import smok2 from '../../assets/img/shop-data/smok/smok2.jpg';
import smok3 from '../../assets/img/shop-data/smok/smok3.jpg';
import smok4 from '../../assets/img/shop-data/smok/smok4.jpg';
import smok5 from '../../assets/img/shop-data/smok/smok5.jpg';
import smok6 from '../../assets/img/shop-data/smok/smok6.jpg';
import vaporesso2 from '../../assets/img/shop-data/vaporesso/vaporesso2.jpeg';
import vaporesso3 from '../../assets/img/shop-data/vaporesso/vaporesso3.jpeg';
import vaporesso4 from '../../assets/img/shop-data/vaporesso/vaporesso4.jpeg';
import vaporesso5 from '../../assets/img/shop-data/vaporesso/vaporesso5.jpeg';
import vaporesso6 from '../../assets/img/shop-data/vaporesso/vaporesso6.jpeg';

const SHOP_DATA = [
    {
      id: 1,
      title: 'Eleaf',
      routeName: 'eleaf',
      items: [
        {
          id: 1,
          name: 'Eleaf Vortex',
          imageUrl: eleaf2,
          price: 78
        },
        {
          id: 2,
          name: 'SnowWolf VFeng',
          imageUrl: eleaf3,
          price: 89
        },
        {
          id: 3,
          name: 'VaporFI VAOI',
          imageUrl: eleaf4,
          price: 125
        },
        {
          id: 4,
          name: 'FreeMax Twizz',
          imageUrl: eleaf5,
          price: 85
        },
        {
          id: 5,
          name: 'VGOD STIGG',
          imageUrl: eleaf6,
          price: 99
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'JoyEtech',
      routeName: 'joyetech',
      items: [
        {
          id: 10,
          name: 'ExCeed X',
          imageUrl: joyetech2,
          price: 89
        },
        {
          id: 11,
          name: 'Teros One1',
          imageUrl: joyetech3,
          price: 120
        },
        {
          id: 12,
          name: 'Exceed Grip',
          imageUrl: joyetech4,
          price: 110
        },
        {
          id: 13,
          name: 'Exceed D19',
          imageUrl: joyetech5,
          price: 160
        },
        {
          id: 14,
          name: 'eGo AIO',
          imageUrl: joyetech6,
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'KangerTech',
      routeName: 'kangertech',
      items: [
        {
          id: 18,
          name: 'Kanger GEM',
          imageUrl: kangertech2,
          price: 125
        },
        {
          id: 19,
          name: 'Kanger SubBox',
          imageUrl: kangertech3,
          price: 90
        },
        {
          id: 20,
          name: 'Kanger Ranger',
          imageUrl: kangertech4,
          price: 90
        },
        {
          id: 21,
          name: 'Kanger Ripple',
          imageUrl: kangertech5,
          price: 165
        },
        {
          id: 22,
          name: 'Kanger CX II',
          imageUrl: kangertech6,
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Smok',
      routeName: 'smok',
      items: [
        {
          id: 23,
          name: 'G-Prim-V',
          imageUrl: smok2,
          price: 135
        },
        {
          id: 24,
          name: 'NOVO2',
          imageUrl: smok3,
          price: 205
        },
        {
          id: 25,
          name: 'Nord-K',
          imageUrl: smok4,
          price: 180
        },
        {
          id: 26,
          name: 'Morph 219',
          imageUrl: smok5,
          price: 180
        },
        {
          id: 27,
          name: 'Trinity',
          imageUrl: smok6,
          price: 145
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'VaporesSo',
      routeName: 'vaporesso',
      items: [
        {
          id: 30,
          name: 'Avenger',
          imageUrl: vaporesso2,
          price: 125
        },
        {
          id: 31,
          name: 'SwagX',
          imageUrl: vaporesso3,
          price: 120
        },
        {
          id: 32,
          name: 'SwitcherMax',
          imageUrl: vaporesso4,
          price: 125
        },
        {
          id: 33,
          name: 'Aurora',
          imageUrl: vaporesso5,
          price: 125
        },
        {
          id: 34,
          name: 'Revenger-M',
          imageUrl: vaporesso6,
          price: 140
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  