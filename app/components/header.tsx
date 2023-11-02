import Icon from "./icondisplay"
import DropDown from "./dropdown"
import Button from "./button"

function Header(){
    return(
        <nav className="flex border w-full justify-between items-center bg-white px-5 py-3 rounded-md">
            <div>
                <Icon name="menu" ></Icon>
            </div>
            <div className="flex justify-between w-1/2">
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
                        <div className="p-2 bg-[#04B8D0] rounded-lg shadow-lg text-white public-sans-medium">
                            <Button 
                            text="LOGIN"
                            icon="arrow-bottom"
                            ></Button>
                            </div>
                    </DropDown>
                </div>
            </div>
        </nav>
    )
}

export default Header