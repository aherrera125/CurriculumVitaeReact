import Picture from "alePicture.png"
import "./styles.css"

export default function App(){
    return (
        <div class="container">
            <Picture/>
            <PersonalData/>
        </div>
    )
}

function Picture(){
    return(
        <div class="left">
                <img src={Picture} />
            </div>            
    );
}
function PersonalData(){
    return(
        <div class="right">
                <div class="margins">
                    <div class="margin-inherit">
                        <h1 class="">ALEJANDRO HERRERA</h1>
                        <h4><b>Date of birth:</b>25 Oct 1984</h4>
                        <h4><b>Nationality: </b>Argentina</h4>
                        <h4><b>Gender: </b>Male</h4>
                        <h4><b>Phone number: </b>+35677143011</h4>
                        <h4><b>Email address: </b>j.alejandroherrera@gmail.com</h4>
                        <h4><b>LinkeddIn: </b><a
                                href="https://www.linkedin.com/in/alejandro-herrera-23910a52/">https://www.linkedin.com/in/alejandro-herrera-23910a52/</a>
                        </h4>
                        <h4><b>Address: </b>161 Triq Is-Swieqi</h4>
                    </div>
                </div>
            </div>
    );
}