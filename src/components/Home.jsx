import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getuserdets } from "../services/Api";
const Home = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [dets,setDets] = useState({
    name:"",
    email:"",
    isVerified:"",
  });
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await getuserdets(id);
        setDets({name:res.data.Name, email:res.data.Email, isVerified:res.data.isVerified});        
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  },[])

  const handleClick = (e)=>{
    e.preventDefault();
    navigate("/login");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="circle absolute top-32 left-48 bg-[#00ff66] w-[80px] h-[80px] rounded-full"></div>
      <div className="circle absolute top-1/2 left-48 bg-[#00ff66] w-[100px] h-[100px] rounded-full"></div>
      <div className="circle absolute top-36 right-28 bg-[#00ff66] w-[100px] h-[100px] rounded-full"></div>
      <div className="circle absolute bottom-28 right-1/2 bg-[#00ff66] w-[120px] h-[120px] rounded-full"></div>
      <div className="circle absolute top-52 right-1/3 bg-[#00ff66] w-[120px] h-[120px] rounded-full"></div>
      <div className="return sm:hidden flex justify-start absolute top-5 left-5 items-center gap-3">
        <button
          className="p-3 text-black bg-[#00ff66] rounded-full w-[50px] h-[50px] font-bold"
          onClick={handleClick}
        >
          <ArrowBackIosNewIcon />
        </button>
        <h1 className="text-lg">Back</h1>
      </div>
      <div className="w-[90%] wrapper h-[60%] rounded-3xl border border-gray-500 flex flex-col  sm:p-5 p-2 justify-center">
        <div className="return hidden sm:flex justify-start absolute top-5 left-5 items-center gap-3">
          <button
            className="p-3 text-black bg-[#00ff66] rounded-full w-[70px] h-[70px] font-bold"
            onClick={handleClick}
          >
            <ArrowBackIosNewIcon style={{ color: "black" }} />
          </button>
          <h1 className=" font-semibold text-xl">Back</h1>
        </div>
        <div className="details mx-auto w-fit bg-[#171717] h-fit sm:p-8 p-5 gap-8 rounded-3xl flex flex-col justify-center sm:text-lg text-xs">
          <h1 className="text-[#00ff66] font-semibold">
            Name{" "}
            <span className="text-white font-normal mx-5">{dets.name}</span>{" "}
          </h1>
          <h1 className="text-[#00ff66] font-semibold">
            Email{" "}
            <span className="text-white font-normal mx-5">{dets.email}</span>{" "}
          </h1>
          <h1 className="text-[#00ff66] font-semibold">
            Email Status{" "}
            <span className="text-white font-normal mx-5">
              {dets.isVerified}
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
