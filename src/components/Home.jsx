import { useEffect, useState } from 'react'

function Home() {
    const [specials, setSpecials] = useState([]);
    const getData = async (language) => {
        const response = await fetch(`/api/featuredcategories/?l=${language}`);
        const data = await response.json();
        setSpecials(data.specials.items);
    }

    useEffect(() => {
        getData('english');
    });

    return (<>
        <h1>Steam&trade; deals of the week</h1>
        <h2>Special offers</h2>
        {specials.map((item, i) => {
            return <p key={i}>{item.name}</p>
        })}
    </>);
}

export default Home;
