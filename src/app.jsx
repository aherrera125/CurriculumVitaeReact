import Img from "../img/alePicture.png"
import "../styles/styles.css"

export default function App() {
    return (
        <div className="container">
            <Picture />
            <PersonalData
                name="Alejandro Herrera"
                dateOfBirth="25 Oct 1984"
                nationality="Argentina"
                gender="Male"
                phoneNumber="+35677143011"
                email="j.alejandroherrera@gmail.com"
                address="161 Triq Is-Swieqi"
                linkedIn="https://www.linkedin.com/in/alejandro-herrera-23910a52/"
            />
            <AboutMe />
        </div>
    )
}

function Picture() {
    return (
        <div className="left">
            <img src={Img} alt={"image"}/>
        </div>
    );
}

function PersonalData(Prop) {
    return (
        <div className="right">
            <div className="margins">
                <div className="margin-inherit">
                    <h1>Prop.name</h1>
                    <h4><b>Date of birth:</b>Prop.dateOfBirth</h4>
                    <h4><b>Nationality: </b>Prop.nationality</h4>
                    <h4><b>Gender: </b>Prop.gender</h4>
                    <h4><b>Phone number: </b>Prop.phoneNumber</h4>
                    <h4><b>Email address: </b>Prop.email</h4>
                    <h4><b>LinkeddIn: </b><a
                        href="https://www.linkedin.com/in/alejandro-herrera-23910a52/">Prop.linkedIn</a>
                    </h4>
                    <h4><b>Address: </b>Prop.address</h4>
                </div>
            </div>
        </div>
    );
}

function AboutMe() {
    return (
        <div className="margins">
            <div className="margin-inherit">
                <h1>ABOUT ME</h1>
                <h4>More than 10 years of working in customer service and management combined. Strong leader, dedicated
                    worker. Proactive and dedicated professional on the functions and tasks that are assigned to me.
                    Willing to provide support in any situation that may arise in order to provide quality to the team.
                    My goal is
                    to grow as a person and as a professional; contributing with my experience and skills to the company
                    I work
                    for. Dedicated Customer Service providing skills to prioritize and multi-task in fast-paced working
                    environment. Successfully works as part of team to reach personal and business goals. .
                    Highly-motivated with
                    desire to take on new challenges. Worth ethic, adaptability and interpersonal skills. Adapt at
                    working
                    effectively unsupervised and quickly mastering new skills. I am a hardwork employee with Excellent
                    customer
                    service, multitasking and time management abilities. Devoted to giving every customer a positive and
                    memorable experience.
                </h4>
                <h1>WORK EXPERIENCE</h1>
                <h4>
                    <h4>29 MAY 2023 – 14 MAR 2024 Texas, United States</h4>
                    <h2>QA AUTOMATION DEVELOPER JBK CONSULTING</h2>
                    <h3>As a QA Automation Engineer I have written scripts and created automation environments for
                        repeated testing. Using different automation tools that test effective solutions.
                        With this I have managed to automate as much of the testing effort as possible with a minimal
                        set of code.
                    </h3>
                </h4>
                <h4>
                    <h4>1 JUN 2022 – 29 MAY 2023 Texas, United States</h4>
                    <h2>TEAM LEADER JBK CONSULTING</h2>
                    <h3>As Team Leader I have led and managed a team of four employees. Among my duties I have
                        established the workload of the team, trained team members and ensured that employees work to
                        achieve the
                        goals and objectives of the company. I was in charge of planning software tests to demonstrate
                        the correct functioning. Execution of
                        test cases and process documentation.
                        Identification of software risks to detect and report bugs. Direct communication in English
                        language with the client, both oral and written.
                        Use of the following technologies: Jira, Selenium Automation, Postman, Confluence.
                    </h3>
                </h4>
                <h4>
                    <h4>1 AUG 2019 – 30 MAY 2022 Texas, United States</h4>
                    <h2>QA TEST ENGINEER JBK CONSULTING</h2>
                    <h3>In my performance as a Manual QA Tester I have performed the execution of test cases, thoroughly
                        documenting the process and the results obtained.
                        Identifying software risks to detect and report bugs. I have maintained in this process direct
                        communication in English language with the client, both oral and written.
                        Use of the following technologies: Jira, Selenium Automation, Postman, Confluence.
                    </h3>
                </h4>
                <h4>
                    <h4>1 FEB 2014 – 31 DEC 2018 Texas, United States</h4>
                    <h2>SOFTWARE DEVELOPER JBK CONSULTING</h2>
                    <h3>Software developer to the company clients. Knowledge in developing technologies JavaScript,
                        HTML5, CSS, C#, JAVA, Data base SQL Server.
                        Storage platform and version control as Github and Git.
                        Technologies to tracking project as Jira and Target Process.
                        Direct communication with the client in the English Language, both oral and written.
                    </h3>
                </h4>
            </div>
        </div>
    );
}