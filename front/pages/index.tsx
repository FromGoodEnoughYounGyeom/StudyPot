import React, { useEffect } from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import HotStudy from "@components/HotStudy";
import MainJoinBox from "@components/MainJoinBox";
import Footer from "@components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { loadUserByToken } from "./../lib/slices/UserSlice";


import * as jwt from "jsonwebtoken";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserByToken(null));
  }, []);
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     console.log("토큰");
  //     try {
  //       // 내정보 불러오기 api 호출
  //       dispatch(loadUserByToken(null));
  //     } catch (e) {
  //       // acc토큰 만료
  //       console.log("ref호출");
  //       async () => {
  //         // ref토큰 으로 acc 토큰 재반환 api 호출
  //         await dispatch(refreshAccessToken(null));
  //         // acc 토큰 호출
  //         await dispatch(loadUserByToken(null));
  //       };
  //     }
  //   }
  // }, [dispatch]);
  return (
    <>
      <Header />
      <Main/>
      <HotStudy/>
      <MainJoinBox/>
      <Footer/>
    </>
  );
}
