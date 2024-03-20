import Breadcrumb from '../components/Breadcrumb';
import TableConges from '../components/TableConges';



const ListingPresence = () => {
  return (
    <>
      <Breadcrumb pageName="Liste des Congés" />

      <div className="flex flex-col gap-10">
     
       
        < TableConges/>
      </div>
    </>
  );
};

export default ListingPresence;
