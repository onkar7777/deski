import logo1 from '../../assets/icon1.png'
import googleLog from '../../assets/googl.png'
import instaLogo from '../../assets/insta.png'
import pinetrestLogo from '../../assets/pintrest.png'
import { Link } from 'react-router-dom'
import googleLogo from '../../assets/google.png'
import appleLogo from '../../assets/apple.png'
// let logoData = [{
//     logo:logo1,
//     classname:"be-01",
// }]


const Left = () => {
    return (
        <div className="left-section" >
            <div className="logoback be-01" >
                <img src={logo1} alt="" />
            </div>
            <div className="logoback be-02" >
                <img src={googleLog} alt="" />
            </div>
            <div className="logoback be-03" >
                <img src={instaLogo} alt="" />
            </div>
            <div className="logoback be-04" >
                <img src={pinetrestLogo} alt="" />
            </div>
        </div>
    )
}

export const BelowHeader = () => {
    return (
        <>
        <div className="below-header" >
            <Left />

            <div className="text-btn-section" >
                <div className="text-area" >
                    <h1> Build your Product </h1>
                    <h1>by Deski App.</h1>
                    <p> Deski delivered blazing fast performance, striking word solution </p>
                </div>
                <div className="social-btns" >
                    <Link to="/" > <img src={googleLogo} alt="" /> </Link>
                    <Link to="/" > <img src={appleLogo} alt="" /> </Link>

                </div>
            </div>

            <Left />
        </div>
        </>

    )
}