import type { Item, User, Announcement } from './definitions';
import Image from 'next/image';

export const mockUsers: User[] = [
  { id: '1', name: 'Kumar Satyam', email: 'Satyam@gmail.com', collegeId: '0103CA241133', avatarUrl: 'https://picsum.photos/seed/user1/100/100' },
  { id: '2', name: 'Kashish Gupta', email: 'Kashish@gmail.com', collegeId: '0103CA241126', avatarUrl: 'https://picsum.photos/seed/user2/100/100' },
  { id: '3', name: 'Chiranjeev Gupta', email: 'Chiranjeev@gmail.com', collegeId: '0103CA241011', avatarUrl: 'https://picsum.photos/seed/user3/100/100' },
  { id: '4', name: 'Prince Raj', email: 'Prince@gmail.com', collegeId: '0103AL241136', avatarUrl: 'https://picsum.photos/seed/user4/100/100' },
  { id: '5', name: 'Khushi Singh', email: 'Khushi@gmail.com', collegeId: '0103Cs241003', avatarUrl: 'https://picsum.photos/seed/user5/100/100' },
];

export const mockItems: Item[] = [
  {
    id: '1',
    name: 'Lost: Brown Leather Wallet',
    description: 'A earphone containing a student ID for Kumar Satyam and some cash. Last seen near the college canteen.',
    category: 'lost',
    date: '2024-07-20T14:00:00Z',
    location: 'Library',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681589453747-53fd893fa420?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'wallet',
    userId: '1',
    userName: 'Raghav Sharma',
    userAvatarUrl: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Found: Set of Keys',
    description: 'Found a set of keys on a MCA room 201. Has a bike key and two smaller keys. Found on a bench.',
    category: 'found',
    date: '2024-07-21T10:30:00Z',
    location: 'Main Quad',
    imageUrl: 'https://media.istockphoto.com/id/184399717/photo/keys.webp?a=1&b=1&s=612x612&w=0&k=20&c=cvedgyZ6Z2yQKfY0X_4mSBKDcb_tXgu7_KcGhgyTvSQ=',
    imageHint: 'keys',
    userId: '2',
    userName: 'Shubham Kumar',
    userAvatarUrl: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: '3',
    name: 'Lost: Blue Backpack',
    description: 'Lost a blue Jansport backpack, probably in the science building, room 204. It has a laptop and textbooks inside.',
    category: 'lost',
    date: '2024-07-19T16:00:00Z',
    location: 'Science Building',
    imageUrl: 'https://media.istockphoto.com/id/2167588905/photo/blue-backpack-isolated-on-white-knapsack-schoolbag-single-object.webp?a=1&b=1&s=612x612&w=0&k=20&c=NOnH2MpkFxOhOHm_Cm7ITYcQerdftGN1ZPlOy4oXMUY=',
    imageHint: 'backpack',
    userId: '3',
    userName: 'Charlie Brown',
    userAvatarUrl: 'https://picsum.photos/seed/user3/100/100'
  },
  {
    id: '4',
    name: 'Found: iPhone 14',
    description: 'Found an iPhone 14 in a clear case. The lock screen shows a picture of a dog. It was on a table in the student union cafeteria.',
    category: 'found',
    date: '2024-07-22T12:00:00Z',
    location: 'Student Union',
    imageUrl: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D',
    imageHint: 'smartphone',
    userId: '1',
    userName: 'Alice Johnson',
    userAvatarUrl: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '5',
    name: 'Lost: Wireless Headphones',
    description: 'Lost my Sony WH-1000XM4 headphones. They are black and were in a hard case. I think I left them at the gym.',
    category: 'lost',
    date: '2024-07-22T18:00:00Z',
    location: 'Gymnasium',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww',
    imageHint: 'headphones',
    userId: '2',
    userName: 'Bob Williams',
    userAvatarUrl: 'https://picsum.photos/seed/user2/100/100'
  },
    {
    id: '6',
    name: 'Found: Calculus Textbook',
    description: 'Found a copy of "Calculus: Early Transcendentals" in lecture hall B. No name inside.',
    category: 'found',
    date: '2024-07-21T15:00:00Z',
    location: 'Lecture Hall B',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1667251758769-398dca4d5f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsdXMlMjB0ZXh0Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    imageHint: 'book',
    userId: '3',
    userName: 'Charlie Brown',
    userAvatarUrl: 'https://picsum.photos/seed/user3/100/100'
  },
  {
    id: '7',
    name: 'Found: Reusable Water Bottle',
    description: 'A metal water bottle with a lot of stickers on it. Left on the soccer field.',
    category: 'found',
    date: '2024-07-20T11:00:00Z',
    location: 'Soccer Field',
    imageUrl: 'https://picsum.photos/seed/bottle/400/300',
    imageHint: 'water bottle',
    userId: '1',
    userName: 'Alice Johnson',
    userAvatarUrl: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '8',
    name: 'Lost: MacBook Pro Charger',
    description: 'Lost my laptop charger, it has a sticker of a cat on the power brick. Probably in the 24-hour study area of the library.',
    category: 'lost',
    date: '2024-07-22T02:00:00Z',
    location: 'Library',
    imageUrl: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMGNoYXJnZXJ8ZW58MHx8MHx8fDA%3D',
    imageHint: 'laptop charger',
    userId: '2',
    userName: 'Bob Williams',
    userAvatarUrl: 'https://picsum.photos/seed/user2/100/100'
  }
];

export const mockAnnouncements: Announcement[] = [
    {
        id: '1',
        title: 'End of Semester Item Claim',
        content: 'All items in the lost and found office must be claimed by the end of the semester. Unclaimed items will be donated to charity.',
        createdAt: '2024-07-15T09:00:00Z'
    },
    {
        id: '2',
        title: 'New Drop-off Location',
        content: 'A new lost and found drop-off box has been installed at the entrance of the student gym.',
        createdAt: '2024-07-10T11:00:00Z'
    }
];

export const getItems = () => mockItems;

export const getUsers = () => mockUsers;

export const getAnnouncements = () => mockAnnouncements.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const getRecentItems = (count = 4) => mockItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);

export const getLostItems = () => mockItems.filter(item => item.category === 'lost');

export const getFoundItems = () => mockItems.filter(item => item.category === 'found');

export const getItemById = (id: string) => mockItems.find(item => item.id === id);
