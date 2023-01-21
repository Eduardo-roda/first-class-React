import pic from './images/image-avatar.png';
import qr from '.images/image-equilibrium.jpg';
import './card.css'

const Card = ()=>{
    return(
        <main className="main-container">
            <article className="article">
                <div className="img-container">
                    <img src={qr} alt="cube img" />
                </div>
                <div className="img-descripcion">
                    <h1>Equilibrium #3429</h1>
                    <p>Our Equilibrium collection promotes balkance and calm.</p>
                </div>
                <div className="content">
                    <div className="content-div1">
                        <svg width="11" height="18" xmlns="https://w3.org/2000/svg">
                            <path d="M11 1.216 5.5 18 0 10.21615.5 3.263 5.5-3.262ZM5.5 015.469 9.169L5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"></path>
                        </svg>
                        <span className="ethereum">0.041 ETH</span>
                    </div>
                    <div className="content-div2">
                        <svg width="17" height="17" xmlns="https://w3.org/2000/svg">
                            <path></path>
                        </svg>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Card