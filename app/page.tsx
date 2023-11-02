import Link from "next/link";
import Search from "./components/search";

export default function Home() {
  return (
    <main className="mt-20 ">
      <div className="card text-center py-10 px-10  text-white bg-card rounded-lg public-sans">
        <h1 className="text-2xl ">Find Your Dream Programs</h1>
        <p className="text-lg py-5">Study any topic, anytime. Choose from thousands of expert-led programs now</p>
        <div>
          {/* <input type="text" placeholder="What do you want to search?"></input>
          <button>Search</button> */}
          <Search
          placeholder="What do you want to search?"
          sectors={["Accounting","computer science","Business","Engineering","Marketing","Medicine","Law","Art","Design","Architecture","Economics","Finance","Mathematics","Physics","Chemistry","Biology","Pharmacy","Dentistry","Nursing","Psychology","Education","Humanities","Social Sciences","Languages","Literature","History","Philosophy","Religious Studies","Theology","Agriculture","Veterinary","Environmental Sciences","Hospitality","Tourism","Sports","Leisure","Transportation","Logistics","Media","Communication","Journalism","Information Technology","Other"]}
          />
        </div>
      </div>
      <div className="bg-white mt-5 rounded-xl">
        <h2 className="text-center text-xl text-base-gray py-5">Complete Your Profile And Apply Your Dream University 🚀</h2>
        <hr  />
        <div className="md:flex w-full justify-around md:py-3">
            <StepItem title="Sign Up" description="Sign up and take your first step" link="register" active={true}></StepItem>
            <StepItem title="Information" description="Fill in the information" link="register"></StepItem>
            <StepItem title="Documents" description="Upload your documents" link="register"></StepItem>
            <StepItem title="Apply" description="You can apply and start your adventure" link="register"></StepItem>

        </div>
      </div>
    </main>
  )
}

function StepItem(props: { title: string, description: string, link: string, active? : boolean }) {
  return(
    <div className="flex bg-white px-4 py-2 items-center justify-around md:block md:text-center">
      <CircleStep link={props.link} active={props.active}></CircleStep>
      <h3 className={props.active ?  "w-1/3 text-xl text-blue-flat font-bold md:w-full" : " w-1/3 text-xl text-base-gray font-semibold md:w-full" }>{props.title}</h3>
      <p className="w-1/3 text-gray-base md:w-full">{props.description}</p>
    </div>
  );
}

function CircleStep(props: {link: string, active? : boolean}){
  return(
    <Link
    href={props.link}
    className={ props.active ? "p-2 rounded-full border-blue-flat  w-6 h-6 border-4 md:hidden" : " p-2 rounded-full border-blue-flat  w-6 h-6 border-2 md:hidden"}
    ></Link>
  );
}
