import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const dets = [
    {
      id: 1,
      title: "",
      active :3,
      form: [
        {
          id: 1,
          text: "Successful",
        },
      ],
    },
  ];
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/login");
    },2000)
  })

  return (
    <div className="signup h-[100vh] w-screen p-3 relative">
      <div className="circle absolute top-28 left-48 bg-[#00ff66] w-[80px] h-[80px] rounded-full"></div>
      <div className="circle absolute top-1/2 left-48 bg-[#00ff66] w-[100px] h-[100px] rounded-full"></div>
      <div className="circle absolute top-36 right-4 bg-[#00ff66] w-[100px] h-[100px] rounded-full"></div>
      <div className="circle absolute lg:flex hidden bottom-32 right-1/2 bg-[#00ff66] w-[120px] h-[120px] rounded-full"></div>
      <div className="circle absolute bottom-32 right-28 bg-[#00ff66] w-[120px] h-[120px] rounded-full"></div>
      <div className="circle absolute top-52 right-1/3 bg-[#00ff66] w-[120px] h-[120px] rounded-full"></div>
      <div className="wrapper h-fit mt-20 lg:mt-32 w-full p-3 flex items-center rounded-3xl">
        <div className="content w-full">
          {dets.map((d) => (
            <div
              className="dets flex flex-col lg:flex-row gap-10 lg:justify-between w-full items-center"
              key={d.id}
            >
              <div
                className={`bottom lg:w-[50%] order-2 lg:order-1 ${
                  d.active === 3 && "mx-auto"
                } `}
              >
                <form>
                  <div
                    className={`formitems w-full h-[54vh] p-5 rounded-3xl border border-gray-500 lg:border-none flex flex-col
                     justify-between gap-5`}
                  >
                    <div
                      className={`bottomform flex flex-col justify-evenly h-full`}
                    >
                      <div className="formitems flex flex-col gap-3">
                        {d.form.map((f) => (
                          <div className="formitem w-full" key={f.id}>
                            <div className="w-full">
                              <div className="success lg:w-fit lg:mx-auto w-full rounded-xl p-3 lg:p-5 bg-black text-[#00ff66] font-bold text-3xl lg:text-5xl text-center">
                                Successful
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
