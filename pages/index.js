import {useState, useEffect} from 'react';


function useStats(){
    const [stats, setStats] = useState();
    useEffect(() => {
    async function fetchData(){
        console.log('Fetch Data');
        const data = await fetch('https://disease.sh/v2/countries/South%20Africa?yesterday=true&strict=truel').then(res => res.json()
        );
        setStats(data);  
    }
    fetchData();
  }, []);
  return stats;
}

function Stats() {
   const stats = useStats();
   console.log(stats);
    return (
       <div>
           <p>STats</p>
       </div>
   );
}





export default function IndexPage(){
    return (
        <div>
            <Stats></Stats>
        </div>
    );
}    