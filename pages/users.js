import User from '../components/User'
export default function Users({users}){
    return<>
        <h1>List of Users {users.length}</h1>    
        {
            users.map(user=>(
                <User user = {user} />
            ))
        }
    </>
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props:{
            users: data,
        },
    }
}