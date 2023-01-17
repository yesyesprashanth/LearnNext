import {useState} from 'react'
import {useRouter} from 'next/router';
function Events({events}){
    const [eventList, setEventList] = useState(events);
    const router = useRouter();
    
    const clickHandler = async()=>{
        const response = await fetch('http://localhost:4000/events?category=Sports');
        const data = await response.json();
        setEventList(pv=>data);
        router.push('/events?category=Sports', undefined, {shallow:true});
    }
    return<>
        <h1>Event list</h1>
        <button onClick={clickHandler}>Sports</button>
        <hr />
        <br />
        {
            eventList.map(event=>(
                <div key={event.id}>
                    <h2>Event Name:{event.title}</h2>
                    <h3>description: {event.description}</h3>
                    <h3>Category:{event.category}</h3>
                    <h4>Date: {event.date}</h4>
                    <br />
                    <hr />
                </div>
            ))
        }
    </>
}

export default Events;

export async function getServerSideProps(context){
    const {query} = context; 
    const {category} = query;
    const querystring = category?('category=Sports'):'';
    const response = await fetch(`http://localhost:4000/events?${querystring}`);
    const data = await response.json();

    return{
        props:{
            events:data,
        }
    }
}