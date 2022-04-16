import {
  Images,
  selected_spa_CategoriesIcons,
  spa_CategoriesIcons,
} from './images';

export const workouts = [
  {title: 'Best For You', selected: true},
  {title: 'Muscle Build', selected: false},
  {title: 'Workout Focus', selected: false},
  {title: 'Equipment', selected: false},
];
export const classes = [
  {
    title: 'Body Pump',
    isLive: true,
    timing: '3 Times a week',
    img: require('../assets/images/2.jpg'),
  },
  {
    title: 'Core',
    isLive: false,
    timing: 'Every Day',
    img: require('../assets/images/1.jpg'),
  },
  {
    title: 'Core',
    isLive: false,
    timing: 'Every Day',
    img: require('../assets/images/5.jpg'),
  },
];

export const classCategory = [
  {title: 'Show All Classes'},
  {title: 'Live'},
  {title: 'Upcoming'},
  {title: 'Old Classes'},
];
export const trainers = [
  {
    title: 'Coach Gazalla',
    category: 'Swimming',
    img: require('../assets/images/3.jpg'),
    rating: 3,
    age: 24,
    height: 178,
    description: `Dedicated fitness professional with a passion for improving client health, wellness and quality of life. Deliver high-energy training using the latest techniques in exercise science, cardio programs and strength training.`,
    specialised: [
      'Weight Loss',
      'Muscle Gain',
      'Corrective Exercise',
      'Pain Control',
    ],
  },
  {
    title: 'Coach Deema',
    category: 'Body',
    img: require('../assets/images/6.jpg'),
    rating: 5,
    age: 24,
    height: 150,
    description: `Dedicated fitness professional with a passion for improving client health, wellness and quality of life. Deliver high-energy training using the latest techniques in exercise science, cardio programs and strength training.`,
    specialised: [
      'Corrective Exercise',
      'Pain Control',
      'Weight Loss',
      'Muscle Gain',
    ],
  },
  {
    title: 'Coach Anna',
    category: 'Core',
    img: require('../assets/images/1.jpg'),
    rating: 4,
    age: 32,
    height: 180,
    description: `Dedicated fitness professional with a passion for improving client health, wellness and quality of life. Deliver high-energy training using the latest techniques in exercise science, cardio programs and strength training.`,
    specialised: [
      'Corrective Exercise',
      'Pain Control',
      'Weight Loss',
      'Muscle Gain',
    ],
  },
];
export const trainersCategory = [
  {title: 'Show All Coaches'},
  {title: 'Swimming'},
  {title: 'Body'},
  {title: 'Core'},
];

export const spa_categories = [
  {
    category: 'Massage',
    icon: spa_CategoriesIcons.massage,
    selectedIcon: selected_spa_CategoriesIcons.massage_selected,
  },
  {
    category: 'Pedicure Manicure',
    icon: spa_CategoriesIcons.pedicure,
    selectedIcon: selected_spa_CategoriesIcons.pedicure_selected,
  },
  {
    category: 'Moroccan Bath',
    icon: spa_CategoriesIcons.bath,
    selectedIcon: selected_spa_CategoriesIcons.bath_selected,
  },
  {
    category: 'Ladies Saloon',
    icon: spa_CategoriesIcons.saloon,
    selectedIcon: selected_spa_CategoriesIcons.saloon_selected,
  },
];

export const spaList = [
  {
    name: 'Shoulder Massage',
    img: require('../assets/images/8.jpg'),
    category: spa_categories[0].category,
    description:
      'A shoulder massage focuses on the muscles located around the shoulder region. There are many different techniques commonly used during a shoulder massage including acupressure, kneading, effleurage and skin rolling. A shoulder massage effectively reduces pain, stress, tension and tightness in the shoulder muscles.',
    date: '',
    persons: '',
  },
  {
    name: 'Natural Skin Care',
    img: require('../assets/images/10.jpg'),
    category: spa_categories[3].category,
    description:
      'Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. They can include nutrition, avoidance of excessive sun exposure and appropriate use of emollients.',
    date: '',
    persons: '',
  },
  {
    name: 'Head Massage',
    img: require('../assets/images/9.jpg'),
    category: spa_categories[0].category,
    description:
      'A head massage is a deep style massage that focuses on the head, neck and shoulders. A head massage applies a range of techniques to help reduce stress and release tension in the upper body. Massaging the scalp can help stimulate nerves and blood vessels around the area and begin to calm muscle tension around the head.',
    date: '',
    persons: '',
  },
];
