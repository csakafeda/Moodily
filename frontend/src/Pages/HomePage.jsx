import {Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getUserId} from "../Tools/userTools.js";
import "./HomePage.css"; // Import a CSS file for additional styles

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <Container className="hero-container">
                <Container className="hero">
                    <Container className="hero-content">
                        <Typography className="hero-title">
                            Overcoming <br/> challenges is possible
                        </Typography>
                        <Typography className="hero-subtitle">
                            Monitor your mental health effortlessly.
                        </Typography>
                        <Typography className="hero-subtitle">
                            Track your daily mood, log a brief description, and access curated music to uplift your
                            spirits.
                        </Typography>
                        <div className="cta-button">
                            <Button
                                onClick={() => (getUserId() !== null ? navigate("/createPost") : navigate("/login"))}
                                className="get-started-button"
                            >
                                Get started!
                            </Button>
                        </div>
                    </Container>
                </Container>
            </Container>

            <Container className="section why-moodily">
                <Typography variant="h4" className="section-title">
                    Why Moodily?
                </Typography>
                <ul className="section-list">
                    <li>
                        🎈 Daily Fragmentation Begone: Say goodbye to the fragmentation of your thoughts and emotions!
                        With Moodily, you&rsquo;ll have a safe space to collect the scattered pieces of your day and
                        make sense of them.
                    </li>
                    <li>
                        🌈 Track Your Mood: Our user-friendly interface makes it a breeze to log your daily emotions.
                        Whether you&rsquo;re over the moon, feeling meh, or having a tough day, Moodily has got your
                        back.
                    </li>
                    <li>
                        📊 Visualize Your Journey: Watch your mood evolve over time with our beautiful, easy-to-read
                        graphs and charts. It&rsquo;s like creating a masterpiece out of your daily experiences.
                    </li>
                    <li>
                        🤝 Community Connection: Connect with like-minded Moodiliers in our supportive community. Share
                        your journey, lend an ear, and find solace in the fact that you&rsquo;re not alone in this
                        emotional rollercoaster.
                    </li>
                    <li>
                        🔒 Privacy First: Your mood is your business. We take privacy seriously, ensuring your data is
                        secure and only seen by you.
                    </li>
                </ul>
            </Container>

            <Container className="section how-it-works">
                <Typography variant="h4" className="section-title">
                    How it works:
                </Typography>
                <ul className="section-list">
                    <li>
                        Log In: Sign up and create your Moodily account. It&rsquo;s quick and easy.
                    </li>
                    <li>
                        Check-In: Share your mood for the day. Use emojis, words, or even doodles; it&rsquo;s all about
                        expressing yourself!
                    </li>
                    <li>
                        Track Progress: Watch your mood history unfold. Gain insights into patterns and triggers.
                    </li>
                    <li>
                        Celebrate the Wins: Celebrate those days when your mood is on point, and get support on the
                        tougher ones.
                    </li>
                    <li>
                        Grow Together: Join our community, where we uplift and support one another through life&rsquo;s
                        ups and downs.
                    </li>
                </ul>
                <p className="section-text">
                    Ready to start your mood-tracking adventure and bring some order to life&rsquo;s delightful chaos?
                    Join Moodily today and let&rsquo;s create a brighter, more balanced you, one mood at a time. 🌞✨
                </p>
                <p className="section-text">
                    Sign up now and let&rsquo;s ride the waves of life together! 🌊🚀
                </p>
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
