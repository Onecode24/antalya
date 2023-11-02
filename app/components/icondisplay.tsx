import { getIconUrl } from '../utils/image'
import Image from 'next/image'


 function  IconDisplay(props: { name: string, width?: number, height?: number }){
    return(
        <div className="flex flex-col items-center justify-center">
            <Image
                src={getIconUrl(props.name)}
                alt={props.name}
                width={props.width ?? 24}
                height={props.height ?? 24}
            ></Image>
        </div>
    )
}

export default IconDisplay