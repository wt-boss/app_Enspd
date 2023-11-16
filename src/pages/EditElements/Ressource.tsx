import Breadcrumb from '../../components/Breadcrumb';
import fireToast from '../../hooks/fireToast';

import { useState, useEffect } from "react";
const editSanction = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className="mx-auto max-w-270">

                <Breadcrumb pageName="Edit Ressource" />

                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5 xl:col-span-3">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                Ressource Informations
                                </h3>
                            </div>
                            <div className="p-7">
                                <form action="#">
                                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="year"
                                            >
                                                Nom departement
                                            </label>


                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="year"
                                                id="year"
                                                placeholder="Name department"
                                                defaultValue="TTIC"
                                            />

                                        </div>
                                       
                                       
                                    </div>
                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                       
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="NameEtudiant"
                                            >
                                                Name Ressource
                                            </label>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="NameEtudiant"
                                                id="NameEtudiant"
                                                placeholder="Enter full name Ressource"
                                                defaultValue="Ressource 1"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="street"
                                            >
                                                Status
                                            </label>
                                          
                                                    <div className="mb-3 block text-sm font-medium text-black dark:text-white">

                                                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                                            <option value="">Available</option>
                                                            <option value="">Reserved</option>
                                                            <option value="">Overdue</option>
                                                            <option value="">Release</option>
                                                            <option value="">Confirmer</option>
                                                        </select>

                                                    </div>
                                    
                                        </div>
                                    </div>
                                  

                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="region"
                                            >
                                               Quantite totale
                                            </label>

                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="Price"
                                                id="Price"
                                                placeholder="total quantity "
                                                defaultValue="25"
                                            />

                                        </div>

                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="city"
                                            >
                                                Quantite disponible
                                            </label>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="Price"
                                                id="Price"
                                                placeholder="available quantity"
                                                defaultValue="5"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/3">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="street"
                                            >
                                              Latest Edit Date 
                                            </label>
                                            <input
                                                type="date"
                                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
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
                                            Edit
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

export default editSanction;
