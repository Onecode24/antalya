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
    </main>
  )
}
