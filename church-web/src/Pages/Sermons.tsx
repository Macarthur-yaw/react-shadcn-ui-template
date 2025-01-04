import React from 'react';
import { Button } from '../Components/ui/button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Sermons: React.FC = () => {
  const popularSermons = [
    { title: 'The Power of Faith', preacher: 'Pastor John Doe' },
    { title: 'Living a Godly Life', preacher: 'Pastor Jane Smith' },
    { title: 'The Grace of God', preacher: 'Pastor James Brown' },
   
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto p-6 gap-10 pt-20 max-w-7xl">
     
      <div className="sermons-list w-full">
        <h2 className="text-4xl font-bold text-[#403765] mb-10 pl-4">Popular Sermons</h2>
        <ul className="space-y-6 w-[90%] mx-auto">
          {popularSermons.map((sermon, index) => (
            <li
              key={index}
              className="bg-white border shadow-sm hover:shadow-lg transform transition duration-300 rounded-lg p-5 cursor-pointer hover:bg-[#f9f7fd] flex flex-col gap-2"
            >
              <h3 className="text-2xl font-semibold text-[#403765]">{sermon.title}</h3>
              <p className="text-sm text-gray-600">Preacher: {sermon.preacher}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 pl-8  w-fit mx-auto md:w-auto">
          <Button className="px-6 py-3 text-lg bg-[#403765] text-white flex items-center gap-2 hover:bg-[#5a4b90]">
            More Sermons <ArrowForwardIcon sx={{ fontSize: '20px' }} />
          </Button>
        </div>
      </div>

     
      <div className="sermons-list w-full">
        <h2 className="text-4xl font-bold text-[#403765] mb-10 pl-4">Church Doctrines</h2>
        <ul className="space-y-6 w-[90%] mx-auto">
          {popularSermons.map((sermon, index) => (
            <li
              key={index}
              className="bg-white border shadow-sm hover:shadow-lg transform transition duration-300 rounded-lg p-5 cursor-pointer hover:bg-[#f9f7fd] flex flex-col gap-2"
            >
              <h3 className="text-2xl font-semibold text-[#403765]">{sermon.title}</h3>
              <p className="text-sm text-gray-600">Preacher: {sermon.preacher}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 pl-8 w-fit md:w-auto mx-auto">
          <Button className="px-6 py-3 text-lg bg-[#403765] text-white flex items-center gap-2 hover:bg-[#5a4b90]">
            More Doctrines <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sermons;
