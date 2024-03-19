import Breadcrumb from '../components/Breadcrumb';
import TablePresence from '../components/TablePresence';
import TableThree from '../components/TableThree';


const ListingPresence = () => {
  return (
    <>
      <Breadcrumb pageName="Liste des Presences" />

      <div className="flex flex-col gap-10">
     
       
        < TablePresence/>
      </div>
    </>
  );
};

export default ListingPresence;
