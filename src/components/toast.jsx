import { Link } from "react-router";

export default function({ message, show })  {

  return (
    <div
      className={`z-[999]  fixed bottom-4 right-5 z-50 transform transition-all duration-[3000] ${
        show ? "opacity-90 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
        <span>{message}</span>
      </div>
    </div>
  );
};


