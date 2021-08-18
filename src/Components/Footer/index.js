import React from 'react'
import {AiFillGithub,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import './style.css'

export default function Footer({theme,state}) {
    const profile = [
        {
            id: 0,
            name: 'github',
            url: 'https://github.com/benjamin-bala'
        },
        {
            id: 1,
            name: 'twitter',
            url: 'https://twitter.com/benjeee_'
        },
        {
            id: 2,
            name: 'instagram',
            url: 'https://www.instagram.com/benjiee._'
        }
    ]
    return (
        <div className="footer">
            <div class="sponsors">
                <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAdCAYAAACjQS76AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARDSURBVHgB7ZrBbtNAEIZ/p3Avx0pI3d4qOJBW3GuegPIENU9A+wQ1T9D2CVKeoOUJEu6oLRKquGVvPSZcEAeI8ci2Ml6PHRJ7nTTaTxrVu2uvd3Znd8aTAg6Hw+FwOBwOh8PhcKwCKpV1RKF53bqxbGIFCGOJ5pAe2uGMvfMIixNiPv1IfNiF63aMZuin/Q2RGNdS6GB1od3GJ/sd1guuW50Nk+FjuhFULB+wJBY1qp+wzzgWzcojrBeaXd+hPtTHmJW/YIVRyLuFIdqLcVQs50jcV9NxQuYq2nTnHIXmdSOXR7o05U6tQUbUZqzRFss2qrVllvs7Rf5U+hjLwLiHFqSfihkcbrK2/oznuuk1GfF2es8Zu+cQ7SKNPUive8K9NFfDVG4xjWl4H9vsGa5bwOq7rP7KeG/WN71foUjZWvis/oyN95b1mdVLSPplY6ha/wI+im5Pgp9kvtGmjD7KniOFRqycTT4/TQI0y6yTSiE/9lN2zTdI1xg7l1ujvF3y/pDV+8jPeb+kbykMKVuLwHhuWDFeaR6GFWMYme8sO6moox4rUwD4BvagGGAlcisVhEKdQnKa8LGPMQ2Y637WK0yNQwtti8ROClNj1EZbV+izj/IYmuoL61ZmVKcouj0Nu9BCXKTvauPrchEGSMb4KS2b83QSy7NUKAWiUR8dyw4T/qX4FotB43/G+tSs7RW7DpDX7yJ9zotlD3PoF2C+RGcT7k86ygl+9Adolnnd35VwD9chFNp91HN/JOZpd8jaRhXj8Vl9YDyjjOdCyK79f+ao4P6eCDedsrJGcnLY5gI1d/XD/osAnnfgeRj/mUTfnt/cX6JZToQ6xa6vhfYB6kGnt5nD4uVFQgZ6Xht1uuRexa4/C+06lZzhm0bVMzp6D/tuj6iV/HvYf9mLD+SArqN4v2zElhUb2fbWzX2TG0IbZXNBy5KzYyweL46xOpTpUBgjj6nohPJZWUofzPviuoHqTJITSnCNnhc+vN71YQ8ekBN7wj0Kq/8BUgXf7EdCu4KQt+ywxpDVa8gxwiwO2DVN5hksM4kiv6wtmni2jZpPOumqWJn0v8Ljhv/U4yPxZNl/QVC5Lz2UGZUZhCnIeQkpaOMvPsY0OVgWfDeK53nLdBHcvSokeR4ypEx/6ye1ZS6Rd/sBEh3J1ZemGpr4L4VLo+ynLydrtr7gXqdzLdZH3tibRNewywB5wyKd6esswFT/VYqL5iXLT+qSdo0ZMdWiDCDnZLJ6q2x9/T6Ij6tcQE4GFW1MTrbufmjYJ4T8QTNAsiCP2agIjSSXRTrSJh2kf2nOKY4s6OehWRSSHarR8mQ+dHfVZONptxP93fw9+XW9c6eXsZiku0Lx33bWFYXEHWYfI5QYfeybyNECZDAUI/pCPcWPVb8bOhwiZgafAnSeubf1i4djjTlHdSag7Ccqh6MSOq0uMU0nkNBpJblF/ANqkrHSvAMviQAAAABJRU5ErkJggg=="
                        alt="zuri" />
                </a>
                <a href="https://ingressive.org/" target="_blank" rel="noreferrer">
                    <img src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png" alt="i4G" />
                </a>
                <a href="https://hng.tech/" target="_blank" rel="noreferrer">
                    <img src="https://hng.tech/img/brand-logo.png" alt="HNG" />
                </a>
                
            </div>
            <section>
                <div className="profile">
                    <span>
                        {
                            profile.map(item => {
                                return(
                                    <a 
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                        color: state.isDark ? theme.fontDark900 : '#000',   
                                        }}
                                    >
                                        {
                                            item.name === 'github' ?
                                                <AiFillGithub size={25}/>
                                            :
                                            item.name === 'twitter' ?
                                            <AiOutlineTwitter size={25} />
                                            :
                                            <AiOutlineInstagram size={25} />
                                        }
                                    </a>
                                )
                            })
                        }
                    </span>
                </div>
            </section>
        </div>
    )
}
