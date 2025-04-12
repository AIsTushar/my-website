function Card({ data }) {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-md border-b border-gray-800 px-4 py-8 transition duration-400 ease-in-out hover:bg-gray-800">
      <h2 className="text-xl text-gray-200">{data.title}</h2>
      <p className="text-lg text-gray-500">{data.date}</p>
    </div>
  );
}

export default Card;
