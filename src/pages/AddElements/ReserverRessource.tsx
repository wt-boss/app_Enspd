import Breadcrumb from '../../components/Breadcrumb';
import userThree from '../../images/user/nanche.png';
import fireToast from '../../hooks/fireToast';
import { Table } from "../../components/TableSettings";

import { useState, useEffect } from "react";
const ReserverRessource = () => {
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <>
            <div className="mx-auto max-w-270">

                <Breadcrumb pageName="ReserverRessource" />

                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5 xl:col-span-3">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                Reserver ressource
                                </h3>
                            </div>
                            <div className="p-7">
                                <form action="#">
                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="fullName"
                                            >
                                                Title ressource
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4.5 top-4">
                                                    <svg
                                                        className="fill-current"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g opacity="0.8">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                                                fill=""
                                                            />
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                                                fill=""
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <input
                                                    className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                    type="text"
                                                    name="fullName"
                                                    id="fullName"
                                                    placeholder="nom ressource"
                                                    defaultValue="ressource1"
                                                />
                                            </div>
                                        </div>

                                        
                                    </div>
                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                    <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="NameEtudiant"
                                            >
                                                Name Etudiant
                                            </label>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="NameEtudiant"
                                                id="NameEtudiant"
                                                placeholder="NANCHE OLGA VANESSA"
                                                defaultValue="NANCHE OLGA VANESSA"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="Matricule"
                                            >
                                                Matricule
                                            </label>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="Matricule"
                                                id="Matricule"
                                                placeholder="Matricule"
                                                defaultValue="19G00062"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="region"
                                            >
                                               filiere
                                            </label>

                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="Price"
                                                id="Price"
                                                placeholder="filiere "
                                                defaultValue="GI"
                                            />

                                        </div>

                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="city"
                                            >
                                                contact etudiant
                                            </label>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="contact"
                                                id="contact"
                                                placeholder="CONTACT"
                                                defaultValue="676685519"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="street"
                                            >
                                                Quantite reserver
                                            </label>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="contact"
                                                id="contact"
                                                placeholder="quantite Reserver"
                                                defaultValue="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                   
                                   <div className="w-full sm:w-1/2">
                                       <label
                                           className="mb-3 block text-sm font-medium text-black dark:text-white"
                                           htmlFor="city"
                                       >
                                           Nom du cours
                                       </label>
                                       <input
                                           className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                           type="text"
                                           name="nameCours"
                                           id="nameCours"
                                           placeholder="Enter Nom cours"
                                           defaultValue="Audit et securite des SI"
                                       />
                                   </div>

                                   <div className="w-full sm:w-1/2">
                                       <label
                                           className="mb-3 block text-sm font-medium text-black dark:text-white"
                                           htmlFor="city"
                                       >
                                           Nom  salle
                                       </label>
                                       <input
                                           className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                           type="text"
                                           name="CompteDestinataire"
                                           id="CompteDestinataire"
                                           placeholder="Enter Nom salle"
                                           defaultValue="15BS1"
                                       />
                                   </div>

                                  
                               </div>
                             
                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                    <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="street"
                                            >
                                               Date debut
                                            </label>
                                            <input
                                                type="date"
                                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="street"
                                            >
                                               Date fin
                                            </label>
                                            <input
                                                type="date"
                                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="street"
                                            >
                                                Status
                                            </label>
                                          
                                                    <div className="mb-3 block text-sm font-medium text-black dark:text-white">

                                                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                                        
                                                            <option value="">Reserved</option>
                                                            <option value="">Overdue</option>
                                                            
                                                            <option value="">Release</option>
                                                            <option value="">Confirmer</option>
                                                        </select>

                                                    </div>
                                    
                                        </div>
                                    </div>
                                  
                                    <div className="flex justify-end gap-4.5">
                                        <button
                                            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                                            type="submit"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                                            type="submit"
                                            onClick={fireToast}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default ReserverRessource;
