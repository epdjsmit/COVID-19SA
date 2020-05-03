import { useState } from 'react';
export function useStats() {
    const [stats, setStats] = useState();
    useEffect(() => {
        async function fetchData() {
            console.log('Fetching Data');
            const data = await fetch('https://github.com/NovelCOVID/API').then(data => data.json());
        }
        fetchData();
    }, []);
}
