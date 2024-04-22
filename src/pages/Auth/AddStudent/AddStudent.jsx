import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Bell from "../../../assets/images/bell.svg";

function AddStudent({ student, setStudents }) {
  const date = new Date();
  const navigate = useNavigate();
  const [saveLocal, setSaveLocal] = useState(false)
  const nowDate =
    date.getDate().toString().padStart(2, 0) +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, 0) +
    "-" +
    date.getFullYear();

  const [imgUrl, setImgUrl] = useState(null);
  const chooseImgChange = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    const data = {
      id: student.length ? student[student.length - 1].id + 1 : 1,
      avatarImg: imgUrl,
      name: e.target.name.value,
      email: e.target.email.value,
      gruopID: e.target.class.value,
      gender: e.target.gender.value,
      subject:e.target.subject.value,
      age:e.target.age.value,
      about:e.target.about.value,

      createdAt: nowDate,
    };
    console.log(data);
    if (imgUrl == null) {
      toast.error("You need choose img !");
    } else {
      setStudents([...student, data]);
      toast.success("Saved :)");
      setTimeout(() => {
        navigate("/teachers");
      }, 1000);
    }
    setSaveLocal(!saveLocal)
  };
  useEffect(() => {
  window.localStorage.setItem("student", JSON.stringify(student));

  },[saveLocal])

  return (
    <>
      <header className="pt-[29px] pl-[124px] flex items-center justify-end pr-[200px]">
        <img
          className="mr-[48px]"
          src={Bell}
          alt="Notifications"
          width={28}
          height={28}
        />
        <button className="DashboardGeaderBtn2">Log out</button>
      </header>
      <form
        onSubmit={handleSubmitStudent}
        className="flex flex-col w-[full] rounded-md ml-[48px] mr-[142px]"
      >
        <Toaster position="top-center" reverseOrder={false} />

        <div className="flex w-[100%] items-end justify-between mb-[21px] pl-[48px] pr-[104px]">
          <h3 className="text-[#4F4F4F] text-[20px] font-medium">
            Add teacher
          </h3>
          <div className="flex flex-col space-y-[14px]">
            <button
              className="text-[14] inline-block text-center font-semibold text-white bg-[#509CDB] rounded-[6px] py-[12px] w-[130px] hover:opacity-60 transition-[0.3s]"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex space-x-[60px] ml-[48px]">
          <label className="flex flex-col">
            <span className=" AddTeacherLegend">Full name</span>
            <input
              className="AddTeacherInput outline-none border-[0.5px] border-black"
              name="name"
              required
              type="text"
              placeholder="Full Name"
            />
          </label>
          <label className="flex flex-col">
            <span className=" AddTeacherLegend">Class</span>
            <select
              className="AddTeacherInput outline-none border-[0.5px] border-black"
              name="class"
            >
              <option value="1">React-N1</option>
              <option value="2">React-N2</option>
              <option value="3">React-N3</option>
              <option value="4">React-N4</option>
            </select>
          </label>
        </div>
        <div className="flex space-x-[60px] ml-[48px] mt-[36px]">
          <label className="flex flex-col">
            <span className=" AddTeacherLegend">Email address</span>
            <input
              className="AddTeacherInput outline-none border-[0.5px] border-black"
              name="email"
              required
              type="email"
              placeholder="Email address"
            />
          </label>
          <label className="flex flex-col">
            <span className=" AddTeacherLegend">Gender</span>
            <select
              className="AddTeacherInput outline-none border-[0.5px] border-black"
              name="gender"
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </label>
        </div>
        <div className="flex space-x-[60px] ml-[48px] mt-[36px]">
          <label className="flex flex-col">
            <span className=" AddTeacherLegend">Subject</span>
            <input
              className="AddTeacherInput outline-none border-[0.5px] border-black"
              name="subject"
              required
              type="text"
              placeholder="Subject"
            />
          </label>
          <label className="flex flex-col">
            <span className=" AddTeacherLegend">Age</span>
            <input
              className="AddTeacherInput outline-none border-[0.5px] border-black"
              name="age"
              required
              type="number"
              placeholder="Age"
            />
          </label>
        </div>
        <div className="flex space-x-[60px] ml-[48px] mt-[36px]">
          <label className="flex flex-col">
            <span className=" AddTeacherLegend">Subject</span>
            <textarea
            className="AddTeacherInput outline-none border-[0.5px] border-black"
              name="about"
              cols="30"
              rows="10"
              placeholder="About"
            ></textarea>
          </label>
          <label className='flex flex-col mb-3'>
             <span className='hover:text-blue-500 w-[40%] inline-block'>Choose Img</span>
             <input onChange={chooseImgChange} className='p-1.5 scale-0 opacity-0 outline-none rounded-md' name='chooseFile' required type="file" />
             {imgUrl ?
               <img src={imgUrl} alt="Choose img" width={400} height={400}/>
             :""}
         </label>
        </div>
        {/* <div className='w-[48%]'>
           <label className='flex flex-col mb-3'>
             <span>Name</span>
             <input className='p-1.5 outline-none rounded-md w-full' name='name' required type="text" placeholder='Enter name' />
           </label>
           <label className='flex flex-col mb-3'>
             <span>Email</span>
             <input className='p-1.5 outline-none rounded-md w-full' name='email' required type="text" placeholder='Enter email' />
           </label>
           <label className='flex flex-col mb-3'>
             <span>Phone Number</span>
             <input className='p-1.5 outline-none rounded-md w-full' maxLength={13} defaultValue={"+998"} name='phoneNumber' required type="tel" placeholder='Enter phone number' />
           </label>
         </div>
         <div className='w-[48%]'>
         <label className='flex flex-col mb-3'>
             <span>Enroll Number</span>
             <input className='p-1.5 outline-none rounded-md w-full' name='enrollNumber' required type="number" placeholder='Enter enroll number' />
         </label>
         <label className='flex flex-col mb-3'>
             <span className='hover:text-blue-500 w-[40%] inline-block'>Choose Img</span>
             <input onChange={chooseImgChange} className='p-1.5 scale-0 opacity-0 outline-none rounded-md' name='chooseFile' required type="file" />
             {imgUrl ?
               <img src={imgUrl} alt="Choose img" width={60} height={60}/>
             :""}
         </label>
              <button className='w-full bg-green-500 text-white p-1.5 mt-4 font-semibold rounded-md' type='submit'>Submit</button>
         </div> */}
      </form>
    </>
  );
}

export default AddStudent;
