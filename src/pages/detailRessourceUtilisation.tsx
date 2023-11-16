import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';


const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="detail Utilisation Ressource 1 " />

      <div className="flex flex-col gap-10">
        
        <TableOne/>
       
      </div>
    </>
  );
};

export default Tables;
