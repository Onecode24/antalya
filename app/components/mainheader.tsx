'use client';
import { useState } from "react";
import Button from "./button";
import Icon from "./icon";
import DropDown from "./dropdown"


function MainHeader(){
    const [navbarOpen, setNavbarOpen] = useState(false)
    return(
        <section>
        {/* header */}  
        <header className="flex border justify-between md:justify-end items-center bg-white px-5 py-3 rounded-md fixed  w-[90%]  md:w-[95vw] lg:w-[98vw] ">
            <div className="md:hidden" onClick={()=>{setNavbarOpen(true)}}>
                <Icon name="menu" ></Icon>
            </div>
            <div className="flex justify-between w-2/3 md:w-1/3">
                <DropDown
                contents={["عربي","English","Français","Türkçe"]}
                >
                    <Button
                    text=""
                    icon="translate"
                ></Button>
                </DropDown>
                <Icon name="mode-night" width={20} height={20} ></Icon>
                <div>
                    <DropDown
                    contents={["Students","Partner"]}
                    >
                        <div className="py-2 px-4 bg-[#04B8D0] rounded-lg shadow-lg text-white public-sans-medium">
                            <Button 
                            text="LOGIN"
                            icon="arrow-bottom"
                            ></Button>
                            </div>
                    </DropDown>
                </div>
            </div>
        </header>
        {/* NavBar */}
        <nav className={ !navbarOpen ? 'absolute left-[-60vw] top-0 duration-700 md:left-[-170px]' : 'md:left-0 absolute left-0 top-0 duration-700 w-full' }
        onClick={()=>{setNavbarOpen(!navbarOpen)}} 
        >
            <div className="bg-white w-max h-[100vh] ">
                <div className="flex items-center px-5 pt-5">
                    <img
                    src="https://d31u7wi7mdb5z3.cloudfront.net/public/agency/MQ%3D%3D/theme/logo/9fefe-rsity.webp"
                    alt="Antalya Logo"
                    width={150}
                    ></img>
                    <div className=" p-2 bg-white rounded-full fixed ml-[150px]">
                        <span className="p-1 bg-[#04B8D0] block rounded-full">
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
            </div>
        </nav>
        </section>
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

export default MainHeader;