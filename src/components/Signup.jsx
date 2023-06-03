import { Line } from "rc-progress";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { userSignup } from "../services/Api";
const Signup = () => {
  const navigate = useNavigate();
  const dets = [
    {
      id: 1,
      title: "Create Account",
      active: 1,
      form: [
        {
          id: 1,
          text: "Name",
          type: "text",
        },
        {
          id: 2,
          text: "Email",
          type: "email",
        },
      ],
      button: "Get OTP",
      ind: 25,
    },
  ];
  const [fdets, setFdets] = useState({
    Name: "",
    Email: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFdets({ ...fdets, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (fdets.Email === "" || !fdets.Email.includes("@")) {
      toast.error("Please enter valid Email Id");
      return;
    }
    if (fdets.Name === "") {
      toast.error("Please enter your Name");
      return;
    }

    const res = await userSignup(fdets);

    if (res.status === 200) {
      setFdets({ ...fdets, Name: "", Email: "" });
      toast.success("OTP sent to the Email!");
      setTimeout(() => {
        navigate(`/otp/${res.data._id}`);
      }, 2000);
    }
    else{
      toast.error(res.response.data.error);
    }
  };

  return (
    <div className="signup h-[100vh] w-screen p-3 relative">
      <div className="circle absolute top-28 left-48 bg-[#00ff66] w-[80px] h-[80px] rounded-full"></div>
      <div className="circle absolute top-1/2 left-48 bg-[#00ff66] w-[100px] h-[100px] rounded-full"></div>
      <div className="circle absolute top-36 right-4 bg-[#00ff66] w-[100px] h-[100px] rounded-full"></div>
      <div className="circle absolute lg:flex hidden bottom-32 right-1/2 bg-[#00ff66] w-[120px] h-[120px] rounded-full"></div>
      <div className="circle absolute bottom-32 right-28 bg-[#00ff66] w-[120px] h-[120px] rounded-full"></div>
      <div className="wrapper h-fit mt-20 lg:mt-32 w-full p-3 flex items-center rounded-3xl">
        <div className="content w-full">
          {dets.map((d) => (
            <div
              className="dets flex flex-col lg:flex-row gap-10 lg:justify-between w-full items-center"
              key={d.id}
            >
              <div className="top flex flex-col gap-3 order-1 lg:order-2 lg:w-[40%] lg:h-fit lg:bg-[#171717] lg:rounded-3xl lg:p-10 lg:justify-center">
                <div className="login lg:flex justify-end hidden">
                  <h1>
                    Have an account?{" "}
                    <a href="login" className="underline ml-3">
                      Sign In
                    </a>
                  </h1>
                </div>
                <h1 className="title font-bold text-3xl text-[#00ff66]">
                  {d.title}
                </h1>
                <p className="text-sm">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem ipsum has been the industry&apos; standard dummy text
                  ever since the 1500&apos;s, when an unknown
                </p>
              </div>

              <div className={`bottom lg:w-[50%] order-2 lg:order-1`}>
                <form>
                  <div
                    className={`formitems w-full h-[54vh] p-5 rounded-3xl border border-gray-500 lg:border-none flex flex-col
                     justify-between gap-5`}
                  >
                    <div className="progressbar h-[20px] w-[90%] mx-auto">
                      <div className="steps flex justify-between items-center relative">
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <div className="progress-bar">
                          {/* <span
                                className={`indicator ${
                                  active == 1 ? "w-[20%]" : "w-[60%]"
                                } transition-all ease-linear duration-300`}
                              ></span> */}
                          <Line
                            percent={100 - 100 / d.active + 20}
                            strokeWidth={1}
                            strokeColor="#00ff66"
                            className="indicator transition-all ease-linear duration-300"
                          ></Line>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`bottomform flex flex-col justify-evenly h-full`}
                    >
                      <div className="formitems flex flex-col gap-3">
                        {d.form.map((f) => (
                          <div className="formitem w-full" key={f.id}>
                            <input
                              type={f.type}
                              placeholder={f.text}
                              name={f.text}
                              onChange={handleChange}
                              className="w-full rounded-xl p-3 border-2 border-[#393939] bg-transparent outline-none"
                            />
                          </div>
                        ))}
                      </div>

                      <button
                        type="submit"
                        className={`p-3 rounded-3xl text-black font-semibold bg-[#00ff66] hover:bg-[#171717] hover:text-[#00ff66] hover:border hover:border-[#00ff66] transition-all ease-in-out duration-300`}
                        onClick={handleClick}
                      >
                        {d.button}
                      </button>
                    </div>
                    <div className="login mx-auto lg:hidden">
                      <h1>
                        Have an account ?{" "}
                        <a href="login" className="underline">
                          Sign In
                        </a>
                      </h1>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer autoClose={1000} theme="dark" />
    </div>
  );
};

export default Signup;
