import * as React from "react"

import LtbIcon from "../images/ltbicon.svg";
import SoundCloudIcon from "../images/soundcloudicon.svg";
import TwitterIcon from "../images/twittericon.svg";
import TwitchIcon from "../images/twitchicon.svg";
import InstaIcon from "../images/instagramicon.svg";


const arrayLinks = [
    {
        name: 'Letterboxd',
        link: 'https://letterboxd.com/Monsieur_/',
        desc: 'Letterboxd icon',
        image: <LtbIcon height="44px" width="44px" className="ltbIconStyle" />
    },
    {
        name: 'Soundcloud',
        link: 'https://soundcloud.com/monsie_ur',
        desc: 'Soundcloud icon',
        image: <SoundCloudIcon height="44px" className="soundCloudIconStyle" />
    },    
    {
        name: 'Twitter',
        link: 'https://twitter.com/Monsie_ur',
        desc: 'Twitter icon',
        image: <TwitterIcon height="44px" className="twitterIconStyle" />
    },
    {
        name: 'Twitch',
        link: 'https://www.twitch.tv/monsieur_',
        desc: 'Twitch icon',
        image: <TwitchIcon height="44px" width="44px"  className="twitchIconStyle" />
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/monsie_ur',
        desc: 'Instagram icon',
        image: <InstaIcon height="44px" className="instaIconStyle" />
    }
]

const SocialLinks = () => {
    return(
        <section className="socialLinksSection">
            <ul>
                {
                    arrayLinks.map(elem => (
                        <li><a href={elem.link} alt={elem.desc} title={elem.name}>{elem.image}</a></li>
                    ))
                }
            </ul>
        </section>
    )
}

export default SocialLinks;