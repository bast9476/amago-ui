export const initialStats = [
  { label: 'Users', value: 6 },
  { label: 'Properties', value: 6 },
  { label: 'Outlets', value: 6 },
];

export const initialActivities = [
  { title: 'New user added', time: '2 hours ago', tint: '#F0FDF4' },
  { title: 'Outlet registered', time: '1 day ago', tint: '#EFF6FF' },
  { title: 'Property added', time: '3 days ago', tint: '#FAF5FF' },
];

export const initialFeatures = [
  { label: 'Hotel' },
  { label: 'Car' },
  { label: 'Tour' },
  { label: 'Doctor', highlight: true },
  { label: 'Fees' },
  { label: 'Flight', locked: true },
  { label: 'Services', locked: true },
];

export const initialTasks = [
  'Order a product and receive delivery',
  'Write a review after delivery',
];

export const initialTiers = [
  { title: 'Bronze Star', color: '#FBECD6', requirements: ['3 Users', '1 Properties', '2 Outlets'] },
  { title: 'Silver Star', color: '#E5E7EB', requirements: ['5 Users', '3 Properties', '4 Outlets'] },
  { title: 'Gold Star', color: '#FDC700', requirements: ['7 Users', '5 Properties', '6 Outlets'] },
  { title: 'Platinum Star', color: '#E5E7EB', requirements: ['9 Users', '7 Properties', '8 Outlets'] },
  { title: 'Diamond Star', color: '#E5E7EB', requirements: ['11 Users', '9 Properties', '10 Outlets'] },
];

export const initialProgressTasks = [
  { label: 'Earn 500 points', current: 350, total: 500, icon: 'clock' },
  { label: 'Daily check-in for 15 days straight', current: 12, total: 15, icon: 'flame' },
  { label: 'Visit hotel, car, and tour modules', current: 2, total: 3, icon: 'pin' },
];

export const initialEntityProgress = [
  { label: 'Users Added', current: 6, total: 9, icon: 'users' },
  { label: 'Properties Added', current: 4, total: 7, icon: 'building' },
  { label: 'Outlets Added', current: 5, total: 8, icon: 'store' },
];
