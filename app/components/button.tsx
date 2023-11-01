import Icon from "./icon";

function Button(props: {text: string, icon?: string, onClick?: () => void}){
    return(
        <button>
            <div className="flex items-center">
                <div className="">
                    {props.text}
                </div>
                {
                    props.icon ? (
                        <div className="pl-2">
                            <Icon name={props.icon} width={18}></Icon>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
                
            </div>
        </button>
    )
}

export default Button