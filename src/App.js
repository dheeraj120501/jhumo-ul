import React from "react";
import MobileDetect from "mobile-detect";
import {
  RotatingSquare,
  CirclesWithBar,
  Audio,
  BallTriangle,
  Bars,
} from "react-loader-spinner";

export default function App() {
  const redirect = (url) => {
    window.location = url;
  };

  React.useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.os() === "AndroidOS")
      setTimeout(
        () =>
          redirect(
            "https://play.google.com/store/apps/details?id=com.jhumoradio.jhumo"
          ),
        500
      );
    else if (md.is("iPhone"))
      setTimeout(
        () =>
          redirect(
            "https://apps.apple.com/app/jhumo-radio/id6443639299"
          ),
        500
      );
    else setTimeout(() => redirect("https://jhumoradio.com/"), 500);
  }, []);

  const spinners = [
    <RotatingSquare
      height="100"
      width="100"
      color="#f0ea41"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />,
    <CirclesWithBar
      height="100"
      width="100"
      color="#f0ea41"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />,
    <Audio
      height="100"
      width="100"
      color="#f0ea41"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />,
    <BallTriangle
      height="100"
      width="100"
      color="#f0ea41"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />,
    <Bars
      height="100"
      width="100"
      color="#f0ea41"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />,
  ];

  return (
    <div className="App">
      {spinners[Math.floor(Math.random() * spinners.length)]}
    </div>
  );
}
