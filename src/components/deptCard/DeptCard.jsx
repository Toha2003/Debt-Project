import PropTypes from "prop-types";

const DeptCard = ({number, name, dept, date, id, currency,serialNumber, editDept,deleteDept }) => {
  return (
    <div className="flex justify-between py-2.5 border-b border-gray-500 items-center">
      <div className="flex gap-5">
        <h3 className="font-semibold">
          {serialNumber}. {name}
        </h3>
        <p>
          {dept} (<span>{currency}</span>)
        </p>
        <p><span className="font-semibold">Date: </span>{date}</p>
      </div>
      <div>
        <p><span className="font-semibold">Tell: </span>{number}</p>
      </div>
      <div className="flex gap-5">
        <button onClick={()=>deleteDept(id)} className="bg-red-500 text-white rounded-sm p-2 cursor-pointer">
          Delete
        </button>
        <button onClick={()=>editDept(id)} className="bg-blue-500 text-white rounded-sm p-2 cursor-pointer">
          Change
        </button>
      </div>
    </div>
  );
};

DeptCard.propTypes = {
    name:PropTypes.string,
    dept:PropTypes.string,
    date:PropTypes.string,
    id:PropTypes.number,
    currency:PropTypes.string,
    number:PropTypes.string,
    serialNumber:PropTypes.number,
    editDept:PropTypes.func,
    deleteDept:PropTypes.func,

}

export default DeptCard;
