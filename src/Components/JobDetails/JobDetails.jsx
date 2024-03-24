import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const job = jobs.find(job=> job.id === idInt);
    console.log(job);
    return (
        <div className="text-center">
            <button className="btn btn-primary text-white">Apply Now</button>
        </div>
    );
};

export default JobDetails;