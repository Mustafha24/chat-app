import Sidebar from "../components/sidebar/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";

const Home = () => {
  return (
    <div data-theme="sunset" className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-0 border-2 border-amber-700 hover:border-stone-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-103'>
      <Sidebar className='sm:w-1/3' /> {/* Adjust width for sidebar on small screens */}
      <MessageContainer className='sm:w-2/3' /> {/* Adjust width for message container on small screens */}
    </div>
  );
};

export default Home;
