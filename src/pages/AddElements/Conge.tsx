import React from 'react'
import {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
export default function Conge() {
    const navigate = useNavigate() ;
    const [conge , setConge]:any = useState({
        matricule:"" ,
        debut:"" ,
        fin:""
    })
    const handleChangeInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setConge((prevState) => ({ ...prevState, [name]: value }));
      };
    
      const CreateConge = async (event, matricule, debut , fin) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://127.0.0.1:8000/api/conge', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
              matricule,
              debut,
              fin,
            }),
          });
    
          if (!response.ok) {
            alert("echec de l'ajout du conge");
    
            throw new Error("Échec de l'ajout");
          }
    
          console.log('ok');
          alert("Congé Ajoutée") ;
          navigate('/add/conge');
          setConge({
            matricule:"" ,
            debut:"" ,
            fin:""
        })
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
          <div className="mx-auto">
            <Breadcrumb pageName="Ajouter un Congé" />
    
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-5 xl:col-span-5">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Ajouter une Conge
                    </h3>
                  </div>
                  <div className="p-7">
                    <form
                      onSubmit={(e) =>
                        CreateConge(
                          e,
                          conge.matricule,
                          conge.debut,
                          conge.fin,
                        )
                      }

                      onReset={()=>
                        setConge({
                            matricule:"" ,
                            debut:"" ,
                            fin:""
                        })
                      }
    
                      
                    >
                      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="year"
                          >
                            Matricule
                          </label>
    
                          <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="matricule"
                            onChange={(e) => handleChangeInput(e)}
                            value={conge.matricule}
                            placeholder="Entrer le matricule de l'emplyé "
                          />
                        </div>
                      
    
                        <div className="w-full sm:w-1/3">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="street"
                          >
                            Date du début
                          </label>
                          <input
                            type="date"
                            name="debut"
                            onChange={(e) => handleChangeInput(e)}
                            value={conge.debut}
                            className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full sm:w-1/3">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="street"
                          >
                            Date de fin
                          </label>
                          <input
                            type="date"
                            name="fin"
                            onChange={(e) => handleChangeInput(e)}
                            value={conge.fin}
                            className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                        
                      </div>
    
                      <div className="flex justify-end gap-4.5">
                        <button
                          className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                          type="reset"
                        >
                          Annuler
                        </button>
                        <button
                          className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                          type="submit"
                        >
                          Ajouter
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
}
