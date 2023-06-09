import { googleLogout, GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { GrLogout } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../utils/logo.png";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { addUser, userProfile, removeUser } = useAuthStore();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    if(searchValue) {
      router.push(`/search/${searchValue}`)
    }
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            height={50}
            width={50}
            className="cursor-pointer"
            src={Logo}
            alt="logo"
          />
        </div>
      </Link>
      <div className="relative hidden md:block">
        <form className="absolute md:static top-10 -left-20 bg-white rounded-full" onClick={handleSearch}>
          <input className="bg-primary p-3 md:text-md font-medium border-2 border-x-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Поиск видео и аккаунтов"/>
          <button onClick={handleSearch} className="absolute md:right-5 right-6 top-4 border-1-2 border-gray-300 pl-4 text-2xl text-gray-400">
            <BiSearch />
          </button>
        </form>
      </div>
      <div>
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href={"/upload"}>
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />{" "}
                <span className="hidden md:block">Загрузить</span>
              </button>
            </Link>
            { userProfile.image && (
              <Link href={"/"}>
                <>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer "
                    src={userProfile.image}
                    alt="profile photo"
                  />
                </>
              </Link>
            )}
            <button
              type="button"
              className="px-2"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <GrLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
