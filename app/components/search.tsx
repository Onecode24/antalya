import Icon from "./icon";


function Search(props: {sectors: Array<string>, placeholder: string}, icon: string){
    return (
        <div className="custom-select w-full md:w-1/2 text-black border-none outline-0 flex bg-white pr-2 mx-auto">

            <select name="sector" id="sector-select" className="w-full bg-white style-select" >
                {
                    props.sectors.map((item, index)=>{
                        return (
                            <option value={item} key={index} className="px-5" >{item}</option>
                        )
                    })
                }
                
            </select>
            <Icon
            name="search"
            width={26}
            ></Icon>
            
        </div>
    )
}

export default Search;