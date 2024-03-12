const CardTwo = () => {
return (
<div
    className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        
    <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary dark:fill-white" width="18" height="22" viewBox="0 0 448 512"><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
        
    </div>

    <div className="mt-4 flex items-end justify-between">
        <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
                26
            </h4>
            <span className="text-sm font-medium">Personnel Administratif</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
            4.35%
            <svg className="fill-meta-3" width="10" height="11" viewBox="0 0 10 11" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                    fill="" />
            </svg>
        </span>
    </div>
</div>
);
};

export default CardTwo;
