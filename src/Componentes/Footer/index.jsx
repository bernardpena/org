import "./Footer.css"

const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='https://web.facebook.com/bernardo5'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://twitter.com/bernardpena'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://www.instagram.com/bernardpena5/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img className="logo" src='/img/bernardo5skull.png' alt='org' /> 
        <strong>Desarrollado por @Bernardo5</strong>
    </footer>
}
export default Footer;