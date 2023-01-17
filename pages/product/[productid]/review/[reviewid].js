import { useRouter } from "next/router";

function ReviewDetails(){
    const router = useRouter();
    const {reviewid, productid} = router.query;
    return<>
        <h1>Review {reviewid} of Product {productid}</h1>
    </>
}

export default ReviewDetails;