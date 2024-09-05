import CreateTemplate from './components/CreateTemplate';
import CreateResume from './components/CreateResume';
import ResumeList from './components/ResumeList';



const Dashboard = () => {

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl mb-8">My Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CreateTemplate />
        <CreateResume />
        <ResumeList />
      </div>
    </div>
  );
};

export default Dashboard;