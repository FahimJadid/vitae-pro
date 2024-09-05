import { NotebookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeCardItem = ({ resume }) => {
    const {id, resumeId, title} = resume
  return (
    <Link to={`/dashboard/resume/${resumeId}/edit`}
      key={id}
      className="p-6 h-[280px] bg-[#FFF7CC] rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-md flex flex-col justify-between cursor-pointer"
    >
      <h3 className="font-thin text-xl mb-4">{title}</h3>
      <div className="flex flex-grow items-center justify-center">
        <NotebookText size={48} color="gray" />
      </div>
      <div className="flex justify-between mt-4">
        <button className="text-blue-500">Edit</button>
        <button className="text-red-500">Delete</button>
      </div>
    </Link>
  );
};

export default ResumeCardItem;