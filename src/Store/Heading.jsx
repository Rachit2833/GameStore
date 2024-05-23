import { useNavigate, useSearchParams } from "react-router-dom"

function Heading({heading}) {
    const navigate =useNavigate()
    const [searchParams ,setSearchParams]= useSearchParams()
    // function handleOnClick(){
    //     const head = heading.split(' ')[0];


    //     searchParams.set("cat",head)
    //     setSearchParams(searchParams)
    //     navigate(`/collection?${searchParams.toString()}`);
    // }
    return (
        
        <div class="Store-head">
            <h2 class="Store-sec-head">{heading}</h2>
            <a class="Store-anchor">See More</a>

        </div>
    )
}

export default Heading
