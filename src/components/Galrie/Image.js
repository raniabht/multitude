import React, { useState, useRef } from 'react';




function Image() {
  const [Liste, setListe] = useState([
    {
      id: 1,
      img: require('../../img/IMG-20241223-WA0015.jpg'),
      grid: 1,
      sm:'2',
      class:'mural',
    },

    {
      id: 2,
      img: require('../../img/IMG-20241223-WA0093.jpg'),
      grid: 1,
      sm:'2',
      class:'mural',
    },

    {
      id: 3,
      img: require('../../img/IMG-20241223-WA0066.jpg'),
      grid: 1,
      sm:'1',
      class:'collage',
    },

    {
      id: 4,
      img: require('../../img/IMG-20241223-WA0047.jpg'),
      grid: 3,
      sm:'3',
      class:'collage',
    },
    {
      id: 5,
      img: require('../../img/IMG-20241223-WA0044.jpg'),
      grid: 1,
      sm:'1',
      class:'collage',
    },
    {
      id: 6,
      img: require('../../img/IMG-20241223-WA0074.jpg'),
      grid: 1,
      sm:'1',
      class:'collage',
    },
    {
      id: 7,
      img: require('../../img/IMG-20241223-WA0041.jpg'),
      grid: 1,
      sm:'1',
      class:'collage',
    },
    {
      id: 8,
      img: require('../../img/collage.jpg'),
      grid: 1,
      sm:'1',
      class:'collage',
    },
    {
      id: 9,
      img: require('../../img/IMG-20241223-WA0118.jpg'),
      grid: 3,
      sm:'3',
      class:'video',
    },



  ]);

  return (
    <div className="bg-bg grid grid-cols-3 p-2 md:grid-cols-4 md:gap-6 md:p-4">
      {Liste.map((item) => (
        <div
          key={item.id}
          className={`grid-item bg-slate-500 border-2 border-black h-60 md:col-span-${item.sm} md:h-img col-span-${item.grid} ${item.class}`}
        >
          <img src={item.img} className="w-full h-full object-cover" />
        </div>
      ))}

    </div>
  );
}

export default Image;
