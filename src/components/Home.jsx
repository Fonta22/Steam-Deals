import { useEffect, useState } from 'react';

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
            return (<>
                <div class="card" style={{ width: '18rem' }}>
                    <img src={item.header_image} className="card-img-top" alt="Header Image" href={'https://store.steampowered.com/app/' + item.id} />
                    <div className="card-body shadow">
                        <h5 className="card-title">{item.name}</h5>
                        <span className="card-text"><strike>{(item.original_price / 100).toFixed(2)} €</strike> <span className='badge text-bg-success'>-{item.discount_percent} %</span></span>
                        <h5 className='mt-1'>{(item.final_price / 100).toFixed(2)} €</h5>
                        <a href={'https://store.steampowered.com/app/' + item.id} className="btn btn-primary mt-1">View in Steam&trade;</a>
                    </div>
                </div>
                <br />
                {/*<div>
                    <img src={item.header_image} alt="Header" key={i} />
                    <p key={i}>{item.name}</p>
                </div>*/}
            </>)
        })}
    </>);
}

export default Home;
