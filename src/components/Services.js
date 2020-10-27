import React, { useState } from 'react'
import Title from './Title';
import { FaCocktail ,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

const Services = () => {
    const [services, setservices] = useState([
        {
            icon:<FaCocktail />,
            title:"free cocktails",
            info:'lndlfnd odhfdhf oheohoe ahfahf ajhahjfh ahfkahsfhka  kb  bb of hoehohhghehgohohowhgho  whowehohwheohehohowhowh  owhohhhhghgg '
        },
        {
            icon:<FaHiking />,
            title:"Endless hiking",
            info:'lndlfnd odhfdhf oheohoe ahfahf ajhahjfh ahfkahsfhka  kb  bb of hoehohhghehgohohowhgho  whowehohwheohehohowhowh  owhohhhhghgg '
        },
        {
            icon:<FaShuttleVan />,
            title:"free shuttle",
            info:'lndlfnd odhfdhf oheohoe ahfahf ajhahjfh ahfkahsfhka  kb  bb of hoehohhghehgohohowhgho  whowehohwheohehohowhowh  owhohhhhghgg '
        },
        {
            icon:<FaBeer />,
            title:"strongest beer",
            info:'lndlfnd odhfdhf oheohoe ahfahf ajhahjfh ahfkahsfhka  kb  bb of hoehohhghehgohohowhgho  whowehohwheohehohowhowh  owhohhhhghgg '
        }
    ])
    return (
        <section className='services'>
            <Title title='services' />
            <div className='services-center'>
                {services.map((item,index) =>{
                    return <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            
        </section>
    )
}

export default Services
