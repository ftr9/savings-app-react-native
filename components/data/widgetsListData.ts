interface IWidgetListData {
  type: string;
  iconName: string;
  color: string;
}

export const WIDGET_LIST_DATA: IWidgetListData[] = [
  {
    type: 'Credit Card',
    iconName: 'card',
    color: '#F79B16',
  },
  {
    type: 'Earnings',
    iconName: 'arrow-up-outline',
    color: '#17D778',
  },
  {
    type: 'Goals',
    iconName: 'flag',
    color: '#59DADB',
  },
  {
    type: 'Spendings',
    iconName: 'arrow-down',
    color: '#FD3262',
  },
  {
    type: 'History',
    iconName: 'stats-chart',
    color: '#000000',
  },
  {
    type: 'Transactions',
    iconName: 'swap-vertical',
    color: '#F189F9',
  },
  {
    type: 'Investment',
    iconName: 'wallet',
    color: '#EF162F',
  },
  {
    type: 'Overview',
    iconName: 'grid',
    color: '#0265FF',
  },
];
