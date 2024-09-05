import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../../service/GlobalApi";
import { useEffect, useState } from "react";
import ResumeCardItem from "./ResumeCardItem";

const ResumeList = () => {
  const { user } = useUser();
  const [resumes, setResumes] = useState([])

  useEffect(() => {
    user && getResumeList();
  }, [user]);

  const getResumeList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (res) => setResumes(res.data.data)
    );
  };

  return (
    <>
      {
        resumes.length > 0 && resumes.slice().reverse().map((resume) => (
          <ResumeCardItem resume={resume} key={resume.id}/>
        ))
      }
    </>
  );
};

export default ResumeList;
