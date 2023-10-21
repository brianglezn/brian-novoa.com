import './Hero.css';

function Hero() {
    return (
        <main className='hero' >
            <div className='hero__text'>
                <p>Hi, mi name is</p>
                <h1>BRIAN </h1>
                <p>Freelance Web Developer</p>
            </div>
            <div className='hero__contact'>
                <button><a href='mailto:brianglezn@gmail.com'>Contact</a></button>
            </div>
        </main>
    );
}

export default Hero;