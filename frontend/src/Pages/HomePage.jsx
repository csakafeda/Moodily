import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../Tools/userTools.js";
import homepic from "../pictures/home_pic.jpg";

const homepicStyle = {
    position: "relative",
    width: "100%",
    height: "auto",
    margin: "0 auto",
    zIndex: -1,
};

const overlayStyle = {
    marginTop: "6.5rem",
    position: "absolute",
    top: "100%",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
};

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}>
            <Container sx={{ padding: "2rem" }}>
                <Container>
                    <img src={homepic} alt="Leafs" style={homepicStyle} />
                    <Typography>
                        Navigating challenges like anxiety, mood fluctuations, and more can be tough. Let Moodily be your guide.
                        <br />
                        Ever felt like your emotions are all over the place? One moment you&rsquo;re on cloud nine, and the next,
                        you&rsquo;re in the depths of despair. We get it; life&rsquo;s a rollercoaster, and we&rsquo;re here to help
                        you ride it with grace.
                    </Typography>
                </Container>

                <div style={overlayStyle}></div>
                <Container style={{ position: "absolute", top: "120%" }}>
                    <Typography>
                        <strong style={{ fontSize: "1.5rem" }}>Why Moodify?</strong>
                    </Typography>

                    <ul>
                        <li>
                            🎈 Daily Fragmentation Begone: Say goodbye to the fragmentation of your thoughts and emotions! With
                            Moodily, you&rsquo;ll have a safe space to collect the scattered pieces of your day and make sense of
                            them.
                        </li>
                        <li>
                            🌈 Track Your Mood: Our user-friendly interface makes it a breeze to log your daily emotions. Whether
                            you&rsquo;re over the moon, feeling meh, or having a tough day, Moodily has got your back.
                        </li>
                        <li>
                            📊 Visualize Your Journey: Watch your mood evolve over time with our beautiful, easy-to-read graphs and
                            charts. It&rsquo;s like creating a masterpiece out of your daily experiences.
                        </li>
                        <li>
                            🌟 Positive Vibes Only: Receive personalized tips and inspirational quotes to boost your spirits. We&rsquo;re
                            all about spreading positivity, one mood at a time.
                        </li>
                        <li>
                            🤝 Community Connection: Connect with like-minded Moodiliers in our supportive community. Share your
                            journey, lend an ear, and find solace in the fact that you&rsquo;re not alone in this emotional rollercoaster.
                        </li>
                        <li>
                            🔒 Privacy First: Your mood is your business. We take privacy seriously, ensuring your data is secure and
                            only seen by you.
                        </li>
                    </ul>
                </Container>

                <Container style={{ position: "absolute", top: "220%" }}>
                    <p>
                        <strong>How it works:</strong>
                    </p>
                    <ul>
                        <li>Log In: Sign up and create your Moodify account. It&rsquo;s quick and easy.</li>
                        <li>
                            Check-In: Share your mood for the day. Use emojis, words, or even doodles; it&rsquo;s all about expressing
                            yourself!
                        </li>
                        <li>Track Progress: Watch your mood history unfold. Gain insights into patterns and triggers.</li>
                        <li>Celebrate the Wins: Celebrate those days when your mood is on point, and get support on the tougher ones.</li>
                        <li>
                            Grow Together: Join our community, where we uplift and support one another through life&rsquo;s ups and downs.
                        </li>
                    </ul>

                    <p>
                        Ready to start your mood-tracking adventure and bring some order to life&rsquo;s delightful chaos? Join Moodily
                        today and let&rsquo;s create a brighter, more balanced you, one mood at a time. 🌞✨
                    </p>

                    <p>Sign up now and let&rsquo;s ride the waves of life together! 🌊🚀</p>
                </Container>
            </Container>
            {getUserId() !== null ? (
                <Container align="center" sx={{ padding: "2rem" }}>
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
