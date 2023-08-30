import {Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getUserId} from "../Tools/userTools.js";
import homepic from "../pictures/home_pic.jpg";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{fontFamily: "Arial, sans-serif", fontSize: "1.5rem"}}>
            <Container sx={{padding: "2rem"}}>
                <Container style={{
                    position: "relative",
                    color: "black",
                    backgroundImage: `url(${homepic})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "40rem",
                    padding: "2rem"
                }}>
                    <Container style={{
                        color: "#fff",
                        textShadow: "2px 2px #000",
                        margin: "25px auto 0",
                        maxWidth: "600px",
                        borderRadius: "10px",
                        padding: "25px",
                        backgroundColor: "hsla(149,51%,42%,0.67)",
                        boxShadow: "5px 5px 10px rgba(33,100,65,0.67)",
                        fontSize: "1.5rem"
                    }}>
                        <Typography
                            style={{fontSize: "3rem", color: "#038c4c", textAlign: "center"}}>
                            Overcoming <br/> challenges is possible
                        </Typography>
                        <Typography style={{paddingTop: "2rem", fontSize: "1.3rem"}}>
                            Monitor your mental health effortlessly.
                        </Typography>
                        <Typography style={{ fontSize: "1.3rem"}}>
                            Track your daily mood, log a brief description, and access curated music to uplift your
                            spirits.
                        </Typography>
                        <div
                            style={{
                                background:
                                    "linear-gradient(180deg, rgb(255, 106.25, 204.43) 0%, rgb(80.15, 67.34, 131.4) 100%)",
                                borderRadius: "30px",
                                height: "60px",
                                width: "196px",
                                margin: "2rem auto"
                            }}
                        >
                            <Button
                                style={{
                                    color: "rgba(255,255,255,0.67)",
                                    fontFamily: "Sahitya-Regular, Helvetica",
                                    fontSize: "1.5rem",
                                    fontWeight: "200",
                                    letterSpacing: "0",
                                    lineHeight: "normal",
                                    textAlign: "center",
                                    width: "100%"
                                }}
                                onClick={ getUserId() !== null
                                    ? () => navigate("/createPost")
                                    : () => navigate("/login")}
                            >
                                Get started now!
                            </Button>
                        </div>

                    </Container>

                </Container>

                <Container style={{position: "relative", padding: "10rem 5rem 10rem 5rem"}}>
                    <Typography>
                        <strong style={{fontSize: "1.5rem"}}>Why Moodily?</strong>
                    </Typography>

                    <ul>
                        <li>
                            🎈 Daily Fragmentation Begone: Say goodbye to the fragmentation of your thoughts and
                            emotions! With Moodily, you&rsquo;ll have a safe space to collect the scattered pieces
                            of your day and make sense of them.
                        </li>
                        <li>
                            🌈 Track Your Mood: Our user-friendly interface makes it a breeze to log your daily emotions.
                            Whether you&rsquo;re over the moon, feeling meh, or having a tough day,
                            Moodily has got your back.
                        </li>
                        <li>
                            📊 Visualize Your Journey: Watch your mood evolve over time with our beautiful,
                            easy-to-read graphs and charts. It&rsquo;s like creating a masterpiece out of your daily
                            experiences.
                        </li>
                        <li>
                            🤝 Community Connection: Connect with like-minded Moodiliers in our supportive community.
                            Share your journey, lend an ear, and find solace in the fact that you&rsquo;re not alone
                            in this emotional rollercoaster.
                        </li>
                        <li>
                            🔒 Privacy First: Your mood is your business. We take privacy seriously, ensuring your data
                            is secure and only seen by you.
                        </li>
                    </ul>
                </Container>

                <Container style={{position: "relative", padding: "10rem 5rem 10rem 5rem"}}>
                    <p>
                        <strong>How it works:</strong>
                    </p>
                    <ul>
                        <li>Log In: Sign up and create your Moodily account. It&rsquo;s quick and easy.</li>
                        <li>
                            Check-In: Share your mood for the day. Use emojis, words, or even doodles; it&rsquo;s all
                            about expressing yourself!
                        </li>
                        <li>
                            Track Progress: Watch your mood history unfold. Gain insights into patterns and triggers.
                        </li>
                        <li>
                            Celebrate the Wins: Celebrate those days when your mood is on point, and get support on the
                            tougher ones.
                        </li>
                        <li>
                            Grow Together: Join our community, where we uplift and support one another through
                            life&rsquo;s ups and downs.
                        </li>
                    </ul>

                    <p>
                        Ready to start your mood-tracking adventure and bring some order to life&rsquo;s delightful
                        chaos? Join Moodily
                        today and let&rsquo;s create a brighter, more balanced you, one mood at a time. 🌞✨
                    </p>

                    <p>Sign up now and let&rsquo;s ride the waves of life together! 🌊🚀</p>
                </Container>
            </Container>
            {getUserId() !== null ? (
                <Container align="center" sx={{padding: "2rem"}}>
                    <Button size="large" onClick={() => navigate("/createPost")}>
                        +
                    </Button>
                </Container>
            ) : (
                <></>
            )}
        </div>
    );
}
