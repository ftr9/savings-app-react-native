//@ts-ignore
import ChildrenImage from '../../assets/images/illustrations/children-remove-bg-preview.png';
//@ts-ignore
import RetirementImage from '../../assets/images/illustrations/retirement-removebg-preview.png';
//@ts-ignore
import TravellingImage from '../../assets/images/illustrations/travelling-remove-bg-preview.png';

export interface IUserData {
  name: string;
  price: string;
  id: number;
  avatar: any;
  colors: string[];
}

export const USER_DATA: IUserData[] = [
  {
    id: 0,
    name: 'Retirement',
    price: '12,284.00',
    avatar: RetirementImage,
    colors: ['#ffa3bd', '#DD3FDB', '#3f50d3'],
  },
  {
    id: 1,
    name: 'Travelling',
    price: '1,420.00',
    avatar: TravellingImage,
    colors: ['#2715FC', '#D64DB6', '#f3e7f6'],
  },
  {
    id: 2,
    name: 'Children',
    price: '3,019.00',
    avatar: ChildrenImage,
    colors: ['#f3e7f6', '#D64DB6', 'rgb(176, 169, 255)'],
  },
];
