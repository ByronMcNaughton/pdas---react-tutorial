import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App(){
    return(
        <div>
            <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">
                    Personal Digital Assistants
                </p>
            </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by amazon and helps you buy things"/>
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was made by microsoft"/>
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri was made by apple"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App