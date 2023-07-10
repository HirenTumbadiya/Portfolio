import React from 'react';

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    
    <div className="max-w-md rounded-3xl overflow-hidden shadow-lg bg-[#E6B000]">
      <img className="h-[307px] flex justify-center w-full" src={data.image} alt="Card" />
      <div className="px-6 py-4">
        <h1 className=" text-lg font-bold">{data.title}</h1>
        <p className="text-gray-700 text-base pt-3">{data.description}</p>
      </div>
    </div>
  );
};

const CardList: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      image: '/about.png',
      title: 'Web Development',
      description: 'Crafting responsive and visually appealing web applications with a focus on usability and excellent user experience.',
    },
    {
      id: 2,
      image: '/about.png',
      title: 'Mobile Development',
      description: 'Designing and developing innovative mobile applications for both Android and iOS platforms.',
    },
    {
      id: 3,
      image: '/about.png',
      title: 'Team Collaboration',
      description: 'Working effectively in diverse teams to enhance productivity and achieve project goals.',
    },
  ];

  return (
    <section className='bg-[#FFC300] px-32 py-12'>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
    </section>
  );
};

export default CardList;
