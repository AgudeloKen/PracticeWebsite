type props = {
  image: string;
};

const Card = ({ image }: props) => {
  return (
    <div className="w-full border shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
      <p className="text-center text-4xl font-bold">$149</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor sit amet.</p>
        <p className="py-2 border-b mx-8">Lorem ipsum dolor sit amet.</p>
        <p className="py-2 border-b mx-8">Lorem ipsum dolor sit amet.</p>
      </div>
      <button className="w-[200px] bg-[#00df9a] font-medium rounded-md my-6 mx-auto px-6 py-3 text-black">
        Start Trial
      </button>
    </div>
  );
};

export default Card;
