import Sidebar from "../components/sidebar/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";

const Home = () => {
  return (
    <div data-theme="sunset" className='flex sm:flex-row md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-0 border-2 border-amber-700 hover:border-stone-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-103'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
