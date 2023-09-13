export type D_Type = {
    id: number;
    name: string;
    currency: string;
    description: string;
    travelCost: number;
    imgUrl: string;
    details: string;
};
  
export const destinations: D_Type[] = [
    {
        id: 1,
        name: 'Machu Picchu, Peru',
        currency: 'Peruvian sol',
        description: 'Ancient Incan citadel set high in the Andes Mountains', 
        travelCost: 1500,
        imgUrl: '/images/1.jpg',
        details: 'A majestic archaeological site and one of the New Seven Wonders of the World, Machu Picchu is a must-see for adventurous travelers and nature lovers.'
    },
    {
        id: 2,
        name: 'Swiss Alps, Switzerland', 
        currency: 'Swiss franc',
        description: 'Glacier-carved mountains with scenic alpine villages',
        travelCost: 1200,
        imgUrl: '/images/2.jpg',
        details: 'With towering snow-capped peaks, lush green meadows, and quaint mountain villages, the magnificent Swiss Alps offer breathtaking alpine scenery.'
    },
    {
        id: 3,
        name: 'Banff National Park, Canada',
        currency: 'Canadian dollar', 
        description: 'Iconic park with glacial lakes and rugged mountains',
        travelCost: 1500,
        imgUrl: '/images/3.jpg',
        details: 'Located in the Rocky Mountains, Banff National Park is known for its pristine lakes, natural hot springs, and wildlife like bears and elk.'
    },
    {
        id: 4,
        name: 'Fiordland National Park, New Zealand',
        currency: 'New Zealand dollar',
        description: 'Coastal fjords and rainforests on the South Island',
        travelCost: 2000,
        imgUrl: '/images/4.jpg',
        details: 'This rugged wilderness area is home to breathtaking fiords, waterfalls, and ancient rainforests along the southwest coast of New Zealand\'s South Island.'
    },
    {
        id: 5,
        name: 'Isle of Skye, Scotland',
        currency: 'British pound',
        description: 'Misty isle with dramatic sea cliffs and medieval castles',
        travelCost: 1200,
        imgUrl: '/images/5.jpg',
        details: 'The Isle of Skye offers quintessential Scottish scenery, from craggy coastlines to rolling green hills. Don\'t miss photographing its iconic castles.'
    },
    {
        id: 6,
        name: 'Halong Bay, Vietnam',
        currency: 'Vietnamese dong',
        description: 'Seascape with limestone pillars rising from the sea',
        travelCost: 500,
        imgUrl: '/images/6.jpg',
        details: 'With its turquoise waters dotted with over 1,600 limestone islands and islets, Halong Bay is one of Vietnam\'s most breathtaking seascapes.'
    },
    {
        id: 7,
        name: 'Torres del Paine, Chile',
        currency: 'Chilean peso',
        description: 'Rugged national park with mountains, glaciers and lakes',
        travelCost: 1800,
        imgUrl: '/images/7.jpg',
        details: 'Located at the southern tip of Chilean Patagonia, Torres del Paine is renowned for its soaring mountains, electric-blue icebergs, and abundant wildlife like guanacos.'
    }
];
  