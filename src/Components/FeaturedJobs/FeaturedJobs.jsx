import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs]=useState([]);
    const [dataLength, setDataLength]=useState(4)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const res=await fetch('fakeData.json');
                const data = await res.json();
                setJobs(data);
                console.log(jobs);
            }catch{
                console.log("Data not found");
            }
        }
        fetchData();
    },[])
    return (
        <div className="">
            <h1>This is Featureds: {jobs.length}</h1>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map((job, id)=><Job key={id} job={job}/>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
            <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary text-white">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;