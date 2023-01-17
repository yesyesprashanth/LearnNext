import { useRouter } from "next/router";
function Dox(){
    const router = useRouter();
    const {params = []} = router.query;
    console.log(params);

    if(params.length===2){
        return <h1>view 2 docs</h1>
    }
    else{
        return <h1>view 1 docs</h1>
    }

    return<>
        <h1>Docs home Page {params}</h1>
    </>
}

export default Dox;