import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';

export const topics = [
  {
    name: 'Development',
    icon: <BsCode />,
  },
  {
    name: 'Comedy',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'Games',
    icon: <FaGamepad />,
  },
  {
    name: 'Food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'Dance',
    icon: <GiGalaxy />,
  },
  {
    name: 'Beauty',
    icon: <GiLipstick />,
  },
  {
    name: 'Anumals',
    icon: <FaPaw />,
  },
  {
    name: 'Sport',
    icon: <FaMedal />,
  },
];

export const footerList1 = ['About', 'Actions']
export const footerList2 = [ 'Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy' ]