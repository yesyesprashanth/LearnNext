import { useRouter } from "next/router";

function RealEstate(){
    const router = useRouter();
    const {params = []} = router.query;

    if(params.length>0){
        return<>
            <h1>There is a parameter</h1>
            {                                
                params.map(item=>(
                    <h2>{item}</h2>
                ))
            }
        </>
    }

    return<>
            <h1>Real Estate {params}</h1>
        </>
}

export default RealEstate;