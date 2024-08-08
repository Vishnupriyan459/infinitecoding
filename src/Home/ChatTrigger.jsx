import ChatObj from './ChatObj';
import Feedback from './Feedback';

const details = {
  body: "Infinite Coding perfectly translated our learning needs into a practical, engaging experience. The hands-on approach and expert guidance helped me gain confidence in Java programming.",
  name: "Nadir",
  title: "Founder of ava",
  img: 'bg-nadirprofile'
};

const ChatTrigger = () => {
  return (
    <div className=' h-[500px]  md:h-[600px] md:w-auto  lg:h-[700px] lg:w-[450px] flex flex-col gap-9  items-center'>
      <ChatObj />
      <Feedback details={details} />
      <ChatObj />
    </div>
  );
};

export default ChatTrigger;
