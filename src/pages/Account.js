import Button from "../components/Button"
import Logo from "../img/logo_jumia.svg"
import Icon from "../img/JumiaIcon.svg"

function Account() {
    return (
        <div className="account">
            <div className="inner">
                <img src={Icon} alt="" className="img"/>
                <h3>Welcome to Jumia</h3>
                <p>Type your e-mail or phone number to log in or create a Jumia account.</p>
                <div>
                    <div className="div">
                        <input type="text" placeholder="Email or Mobile Number" />
                    </div>
                    <div className="div">
                        <Button title="Continue" btnBg="#E07E1B" classN="continue"></Button>
                    </div>
                </div>
                <div className="div facebook">
                    <Button title="Log in with Facebook" btnBg="blue" classN="facebookBtn"></Button>
                </div>
                <p>For further support, you may visit the Help Center or contact our customer service team.
                </p>
                <img src={Logo} alt="" className="img"/>
            </div>
        </div>
    )
}

export default Account