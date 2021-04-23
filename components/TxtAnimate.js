

const TxtAnimate = () => {
    
    
    
    return ( 
        <div className="container z-20 animate__animated animate__fadeInUp">
            <span className="animate__animated animate__fadeInUp">Línea Euro</span>
            <span className="text2">Diseño compacto que armoniza con tu hogar.</span>
            <style jsx>{`
    
    .container {
        txt-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

    }

    .container span {
          display: block;
        }
    
    .text1 {
        
        color: black;
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 8px;
        margin-bottom: 20px;
        background: white;
        position: relative;
        // animation-delay: 10s;
        // animation: text 0.5s 1;
    }

    .text2 {
        color: black;
        font-size: 60px;
    }

    // @keyframes text {
    //     0% {
    //         visibility: hidden;
    //         margin-bottom: -40px;
    //     }
    //     100% {
    //         visibility: visible;
    //     }
    // }


      `}</style>
        </div>
     );
}
 
export default TxtAnimate;