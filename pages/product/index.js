import Link from 'next/link';
export default function index({productid = 100}){
    return<>
        <h2>Product 1</h2>
        <h2>
        <Link href={`/product/${productid}`}>Product 3</Link>
        </h2>
        <h2>
            <Link href={`/product/${productid}`} replace>Product 3</Link>
        </h2>
        <Link href = '/'>Home page</Link>
    </>
}