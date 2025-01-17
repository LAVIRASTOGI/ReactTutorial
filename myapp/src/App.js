import AgeComponent from "./AgeComponent";
import HeadingComponent from "./HeadingComponent";
import HeroImg from "./images/images1.jpg";

function App() {
  let user = {
    name: "Lavi",
    age: 24,
    city: "Delhi",
  };
  return (
    <div>
      <img src={HeroImg} alt="HeroImg" width={100} height={100} />
      <h1>
        Welcome {user.name} and he is {user?.age > 22 ? "adult" : "child"}
      </h1>
      {/* props example pass object,data,function anything as a prop */}
      <HeadingComponent heading="Our first React component" />
      <HeadingComponent heading="Our first React component" />
      <HeadingComponent heading="Our first React component" />
      <HeadingComponent heading="Our first React component" />
      <AgeComponent user={user} />
    </div>
  );
}

export default App;
