import { useEffect, useState } from "react";
import DeptCard from "../components/deptCard/DeptCard";
import { v4 as uuidv4 } from "uuid";
import { Box, Modal, Typography } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 14,
  p: 4,
  borderRadius: 2,
};

const DebtsPage = () => {
  let toLend = JSON.parse(localStorage.getItem("toLend"));

  const [depts, setDepts] = useState(toLend);
  const [dept, setDept] = useState({
    name: "",
    dept: "",
    currency: "",
    date: "",
    number: "",
  });

  const [open, setOpen] = useState(false);

  const [changeDept, setChangeDept] = useState(false);

  useEffect(() => {
    if (depts == null) {
      setDepts([]);
    }
    localStorage.setItem("toLend", JSON.stringify(depts));
  }, [depts]);

  const handleOpen = () => {
    setDept({ name: "", dept: "", currency: "", date: "", number: "" });
    setOpen(true);
  };
  const handleClose = () => {
    setChangeDept(false);
    setOpen(false);
  };

  const handleChange = (e) => {
    setDept({ ...dept, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (changeDept) {
      let newDept = depts.map((el) => {
        if (el.id === changeDept) {
          return dept;
        }
        return el;
      });
      setDepts(newDept);
    } else {
      setDepts([...depts, { ...dept, id: uuidv4() }]);
    }

    setDept({ name: "", dept: "", currency: "", date: "", number: "" });
    handleClose(true);
    setChangeDept(false);
  };

  const editDept = (id) => {
    handleOpen(true);
    setChangeDept(id);
    let thisDept = depts.find((el) => el.id === id);
    setDept(thisDept);
  };

  const deleteDept = (id) => {
    setDepts(depts.filter((el) => el.id !== id));
  };

  console.log(depts);

  return (
    <section className="py-10">
      <div className="flex justify-around">
        <h1 className="text-2xl font-semibold">
          All the debts I have given <br />
          <span className="text-lg font-normal">(Men bergan barcha qarzlar)</span>
        </h1>
        <div>
          <button
            className="bg-green-500 p-2 cursor-pointer rounded-md text-white hover:font-semibold"
            onClick={handleOpen}
          >
            Add debt
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex justify-end">
                <span
                  onClick={handleClose}
                  className="bg-red-500 cursor-pointer w-3.5 h-3.5 block rounded-[50%]"
                ></span>
              </div>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Qarz olganingizni qo'shing
              </Typography>
              <form
                onSubmit={submit}
                className="flex gap-5 justify-between py-5"
                action=""
              >
                <div className="flex gap-4 flex-col">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={handleChange}
                      className="bg-gray-200 rounded-sm border-none p-1.5 w-full"
                      type="text"
                      placeholder="Name"
                      required
                      value={dept.name}
                      id="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="dept"> Debt</label>
                    <input
                      onChange={handleChange}
                      className="bg-gray-200 rounded-sm border-none  p-1.5 w-full"
                      type="number"
                      id="dept"
                      placeholder="Debt"
                      required
                      value={dept.dept}
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      className="bg-gray-200 rounded-sm border-none  p-1.5 w-full"
                      type="date"
                      id="date"
                      required
                      value={dept.date}
                    />
                  </div>
                </div>
                <div className="flex gap-4 flex-col">
                  <div>
                    <label htmlFor="number">Phone number</label>
                    <input
                      onChange={handleChange}
                      className="bg-gray-200 rounded-sm border-none  p-1.5 w-full"
                      type="number"
                      id="number"
                      placeholder="901234567"
                      required
                      value={dept.number}
                    />
                  </div>
                  <div>
                    <label htmlFor="currency">Currency</label>
                    <select
                      onChange={handleChange}
                      className="bg-gray-200 rounded-sm border-none  p-1.5 w-full"
                      name="asdf"
                      id="currency"
                      value={dept.currency}
                      required
                    >
                      <option value="">Choose</option>
                      <option value="UZS">UZS</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-blue-600 h-9 rounded-md text-white font-semibold text-xl font-serif"
                  >
                    {changeDept ? "Change" : "Add"} Dept
                  </button>
                </div>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
      <div>
        {depts == false ? (
          <p className="text-2xl font-semibold text-center my-20">
            Hozircha hech kimga qarz berganing yo'q...
          </p>
        ) : depts ? (
          <div className="w-[90%] bg-gray-200 mx-auto rounded-md p-10 mt-10 shadow-[0_0_10px] shadow-gray-500">
            {depts.map((el, index) => (
              <DeptCard
                deleteDept={deleteDept}
                editDept={editDept}
                {...el}
                serialNumber={index + 1}
                key={index}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default DebtsPage
