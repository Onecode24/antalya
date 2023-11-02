"use client";
import { ReactElement, useState } from "react";
import Icon from "./icondisplay";
import Link from "next/link";


function Dropdown(props: {children: ReactElement, contents : Array<string> }){
    let [isOpen,setIsOpen] = useState(false);
    return (
        <div>
            <div className="dropButton" onClick={()=>{setIsOpen(!isOpen)}} onBlur={()=>{setIsOpen(false)}}>
                {{...props.children}}
            </div>
            {
                isOpen ? (
                    <div  className="dropdown-content absolute  w-min mt-" >
                    <ul className="">
                        {props.contents.map((item, index) => (
                                <Link
                                 href={item} key={index}
                                >
                                    <ListItem text={item} 
                                onClick={()=>{
                                    setIsOpen(false);
                                }}
                                ></ListItem>
                                </Link>
                            
                        ))}
                    </ul>
                </div>
                ) : (
                    <div></div>
                )
            }

        </div>
        
    )
}

function ListItem(props: {text: string,icon?: string, onClick?: () => void}){
    return(
        <li onClick={props.onClick} >
            <div className="flex items-center bg-white text-lg px-5 py-2">
                <div className="">
                    {props.text}
                </div>
                {
                    props.icon ? (
                        <div className="pl-2">
                            <Icon name={props.icon} width={18} ></Icon>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
                
            </div>
        </li>
    )
}

export default Dropdown