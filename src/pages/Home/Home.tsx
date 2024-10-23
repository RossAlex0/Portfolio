import "./home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home_name">
        <div className="animationContainer_name">
          <p>Hello I'm Alex</p>
          <p>,</p>
        </div>
      </div>
      <div className="home_creative">
        <div className="animationContainer_creative">
          <p> a </p>
          <p> creative </p>
          <p> developer</p>
        </div>
      </div>
    </section>
  );
}

// return (
//   <section className="home">
//   <div className="home_name">
//     <p className={leftPositionFirst ? "animationLetter" : ""}>
//       Hello I'm Alex
//     </p>
//     <p className={leftPositionFirst ? "animationLetter" : ""}>,</p>
//   </div>
//   <div className="home_creative">
//     <p className={leftPositionFirst ? "animationLetter" : ""}> a </p>
//     <p className={leftPositionFirst ? "animationCreative" : ""}>
//       {" "}
//       creative{" "}
//     </p>
//     <p className={leftPositionFirst ? "animationLetter" : ""}> developer</p>
//   </div>
// </section>
// );
