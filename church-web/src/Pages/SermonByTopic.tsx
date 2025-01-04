import { Button } from "../Components/ui/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ImageOne from "../assets/pexels-tara-winstead-8383497.jpg";

export default function SermonByTopic() {
  const topics = [
    { id: 1, title: "Faith", image: ImageOne },
    { id: 2, title: "Prayer", image: ImageOne },
    { id: 3, title: "Love", image: ImageOne },
    { id: 4, title: "Forgiveness", image: ImageOne },
    { id: 5, title: "Hope", image: ImageOne },
    { id: 6, title: "Wisdom", image: ImageOne },
  ];

  return (
    <div className="bg-[rgba(3,29,68,.05)] mt-10 md:p-10">
     
      <header className="flex flex-row px-2 py-4   sm:flex-row items-center justify-between md:p-4 mb-4 md:mb-10">
        <h1 className="md:text-3xl text-md font-medium text-[#403765] ">Sermons By Topic</h1>
        <Button className="bg-[#403765] md:px-6 md:py-3 text-sm flex items-center gap-2 md:mt-4 sm:mt-0">
          All Sermon Topics <ArrowForwardIcon />
        </Button>
      </header>

      
      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#403765] mb-2">
                {topic.title}
              </h2>
              <p className="text-gray-600 text-sm">
                Explore sermons on {topic.title} to grow spiritually.
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
