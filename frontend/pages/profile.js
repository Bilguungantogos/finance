import { FaUserEdit, FaUser } from "react-icons/fa";
import { MdOutlineLockReset } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";

import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Records() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  // if (!user) {
  //   router.push("/");
  // }
  return (
    <div>
      <Header />
      <main className="h-screen px-[120px] pt-[100px] bg-[#F3F4F6] flex justify-center items-start">
        <div className="w-full bg-white rounded-2xl">
          <div className="flex justify-between px-12 py-10 bg-[#97afff] rounded-2xl">
            <div className="flex items-center gap-2">
              <FaUser />
              <h2>Profile</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaUserEdit />
              <h2>Edit Profile</h2>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineLockReset />
              <h2>Reset Password</h2>
            </div>
            <div className="flex items-center gap-2">
              <RxActivityLog />
              <h2>Activity Log</h2>
            </div>
          </div>
          <div className=" flex px-12 py-10">
            <div className="flex flex-col items-center py-10 px-14 gap-2 ">
              <img src="/avatar.png" className="w-40" />
              <h2 className="">{user?.name}</h2>
              <p>{user?.email}</p>
              <p>Mongolia</p>
            </div>
            <div className="w-full px-10 flex flex-col justify-between">
              <div className="flex justify-between">
                <p>Name</p>
                <p>:</p>
                <p>{user?.name}</p>
              </div>
              <div className="flex justify-between">
                <p>Role</p>
                <p>:</p>
                <p>User</p>
              </div>
              <div className="flex justify-between">
                <p>Email</p>
                <p>:</p>
                <p>{user?.email}</p>
              </div>
              <div className="flex justify-between">
                <p>Email verification</p>
                <p>:</p>
                <p>Pending</p>
              </div>
              <div className="flex justify-between">
                <p>Contact</p>
                <p>:</p>
                <p>Empty</p>
              </div>
              <div className="flex justify-between">
                <p>Status</p>
                <p>:</p>
                <p>Active</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
