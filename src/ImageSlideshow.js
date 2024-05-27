import React, { useState, useEffect } from 'react';

// Array of interns with their images and corresponding LinkedIn URLs
const internProfiles = [
    { img: 'Alena.jpg', link: 'https://www.linkedin.com/in/alena-raza' },
    { img: 'Anthony.jpg', link: 'https://www.linkedin.com/in/anthony-plascencia-a59b07265' },
    { img: 'Araceli.jpg', link: 'https://www.linkedin.com/in/araceli-ramirez78' },
    { img: 'BethanyA.jpg', link: 'https://www.linkedin.com/in/bethany-merino-a2961a22' },
    { img: 'BethanyM.jpg', link: 'https://www.linkedin.com/in/bethany-stone-9a8207237' },
    { img: 'Brian.jpg', link: 'https://www.linkedin.com/in/brian-richardson-250596227' },
    { img: 'Damber.jpg', link: 'https://www.linkedin.com/in/damber-lama-7b4952168' },
    { img: 'Emily.jpg', link: 'https://www.linkedin.com/in/emily-piccirillo-1b0640236' },
    { img: 'Eric.jpg', link: 'https://www.linkedin.com/in/eric-provencio-5bb142266' },
    { img: 'Kat.jpg', link: 'https://www.linkedin.com/in/katharinkerau' },
    { img: 'Max.jpg', link: 'https://www.linkedin.com/in/iammaxlichter' },
    { img: 'Michael.jpg', link: 'https://www.linkedin.com/in/michael-crock-106a7b225' },
    { img: 'Molly.jpg', link: 'https://www.linkedin.com/in/molly-myrantle-1750b6247' },
    { img: 'Ojaswi.jpg', link: 'https://www.linkedin.com/in/ojaswistha' },
    { img: 'Riley.jpg', link: 'https://www.linkedin.com/in/riley-jengylan' },
    { img: 'Savana.jpg', link: 'https://www.linkedin.com/in/savana-bickelhaupt-222825202' },
    { img: 'Sophia.jpg', link: 'https://www.linkedin.com/in/sophia-estrade-0591b2207' },
    { img: 'Zeeshan.jpg', link: 'https://www.linkedin.com/in/zeeshan-syed-0519b11b0' }
];

function ImageSlideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % internProfiles.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(timer);
    }, []);

    const getAltText = (filename) => {
        return filename.replace(/\.\w+$/, '').replace(/[\W_]+/g, ' ');
    };

    return (
        <div className="image-slideshow" style={{ maxWidth: '600px', width: '70vw', margin: 'auto' }}>
            <a href={internProfiles[index].link} target="_blank" rel="noopener noreferrer">
                <img
                    src={require(`./AboutPhotos/${internProfiles[index].img}`)}
                    alt={getAltText(internProfiles[index].img)}
                    style={{ width: '100%', height: 'auto', maxHeight: '400px', border: '5px solid black' }}
                />
            </a>
        </div>
    );
}

export default ImageSlideshow;