import './header.css'

const Banner = ({dg_title, dg_desc}) => {
    return <div className='banner_sect'>
        <h2>{dg_title}</h2>
        <p>{dg_desc}</p>

    </div>;
}

export default Banner;