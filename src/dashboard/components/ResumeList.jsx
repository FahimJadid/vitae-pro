const ResumeList = () => {
  // Mock data for resumes
  const resumes = [
    { id: 1, name: "1st Resume" },
    { id: 2, name: "2nd Resume" },
    { id: 3, name: "3rd Resume" },
    { id: 4, name: "4th Resume" },
    { id: 5, name: "5th Resume" },
  ];

  return (
    <>
      {resumes.slice().reverse().map((resume) => (
        <div key={resume.id} className="p-6 h-[280px] bg-[#FFF7CC] rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-md flex flex-col justify-between cursor-pointer">
          <h3 className="font-bold text-xl mb-4">{resume.name}</h3>
          <div className="flex justify-between">
            <button className="text-blue-500">Edit</button>
            <button className="text-red-500">Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResumeList;