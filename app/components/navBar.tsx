import Icon from "./icon";
function NavBar(){
    return (
        <nav className="bg-white w-max h-[100vh] ">
            <div className="flex items-center px-5 pt-5">
                <img
                src="https://d31u7wi7mdb5z3.cloudfront.net/public/agency/MQ%3D%3D/theme/logo/9fefe-rsity.webp"
                alt="Antalya Logo"
                width={150}
                ></img>
                <div className="">
                    <span>
                        <Icon
                        name="arrow-left"
                        width={20}
                        height={20}
                        ></Icon>
                    </span>
                </div>
            </div>
            <div className="flex flex-col ">
                <NavBarItem text="Home" icon="home"></NavBarItem>
                <NavBarItem text="Search" icon="search" title="UNIVERSITY"></NavBarItem>
                <NavBarItem text="Event" icon="event" title="EVENT MANAGEMENT"></NavBarItem>
            </div>
        </nav>
    )
}

function NavBarItem(props: {text: string, icon: string, title?: string}){
    return (
        <div className="public-sans mt-3">
            {
                props.title && (
                    <div className="title flex items-center">
                        <hr className="w-1/12" />
                        <p className=" pl-3 text-gray-base text-xs">{props.title}</p>
                    </div>
                )
            }
            <div className="flex items-center mt-2 py-2 hover:bg-[#04b8d06a] mx-2 rounded-lg">
                <span className="px-3">
                    <Icon
                    name={props.icon}
                    width={25}
                    ></Icon>
                </span>
                <span className="text-lg text-gray">{props.text}</span>
            </div>
        </div>
    )
}


export default NavBar;