import {useState, useEffect} from 'react';

export default function Dashboard(){
    const [isLoading, setIsLoading] = useState(false);
    const [dashboardData, setDashboardData] = useState({});

    useEffect(()=>{
        setIsLoading(pv=>true);
        async function getDashboarData(){
            const response = await fetch('http://localhost:4000/dashboard');    
            const data = await response.json();

            setDashboardData(pv=>data);
            setIsLoading(pv=>false);
        }
        

        getDashboarData();
    }, [])
 
    if(isLoading){
        return<>
            <h1>Loading</h1>
        </>
    }
     return<>
        <h1>Dashboard Data</h1>    
        <h2>Posts: {dashboardData.posts}</h2>
        <h2>Likes: {dashboardData.likes}</h2>
        <h2>Followers: {dashboardData.followers}</h2>
        <h2>Following: {dashboardData.following}</h2>
    </>
}