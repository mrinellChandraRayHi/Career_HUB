const Job = ({job}) => {
    console.log(job);
    const {logo, title, companyName, jobCategory, location, salary}=job;
    return (
        <div className="card  flex-1 bg-slate-200">
            <div className="card-body">
                <img className="flex-grow w-56" src={logo} alt="" />
                <h2 className="card-title">{title}</h2>
                <h3>{companyName}</h3>
                <button className="btn btn-active w-[10rem] btn-primary"><p>{jobCategory}</p></button>
                <div className="flex items-center justify-between">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <button className="btn w-[10rem]">View Details</button>
            </div>
        </div>
    );
};

export default Job;