import {Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getUserId} from "../../Tools/userTools.js";
import "./HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);

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

            <Container className="why-moodily"  data-aos="zoom-in">
                <div className="divider"></div>
                <Typography variant="h4" className="section-title">
                    Why Moodily?
                </Typography>
                <div className="divider"></div>
                <div>
                    <div className="feature-row">
                        <div className="feature-left" data-aos="fade-right">
                            <span className="home-icons">🎈 </span>
                            <strong> Daily Fragmentation Begone</strong>
                            <p>Say goodbye to the fragmentation of your thoughts and emotions!
                                With Moodily, you&rsquo;ll have a safe space to collect the scattered pieces of your day
                                and
                                make sense of them.</p>
                        </div>
                        <div className="feature-right" data-aos="fade-left">
                            <span className="home-icons"> 🌈 </span>
                            <strong> Track Your Mood</strong>
                            <p>Our user-friendly interface makes it a breeze to log your daily emotions.
                                Whether you&rsquo;re over the moon, feeling meh, or having a tough day, Moodily has got
                                your
                                back.</p>
                        </div>
                    </div>
                    <div className="feature-row">
                        <div className="feature-left" data-aos="fade-right">
                            <span className="home-icons">📊 </span>
                            <strong> Visualize Your Journey</strong>
                            <p>Watch your mood evolve over time with our beautiful, easy-to-read
                                graphs and charts. It&rsquo;s like creating a masterpiece out of your daily
                                experiences.</p>
                        </div>
                        <div className="feature-right" data-aos="fade-left">
                            <span className="home-icons"> 🤝 </span>
                            <strong> Community Connection</strong>
                            <p>Connect with like-minded Moodiliers in our supportive community. Share
                                your journey, lend an ear, and find solace in the fact that you&rsquo;re not alone in
                                this
                                emotional rollercoaster.</p>
                        </div>
                    </div>
                    <div className="feature-row">
                        <div className="feature-left" data-aos="fade-right">
                            <span className="home-icons">🌟 </span>
                            <strong>Set Personal Goals</strong>
                            <p>Define your aspirations and goals, both big and small, and track your progress
                                with Moodily. Stay motivated and take meaningful steps towards achieving the life you
                                desire.</p>
                        </div>
                        <div className="feature-right" data-aos="fade-left">
                            <span className="home-icons"> 💌 </span>
                            <strong>Journal Your Thoughts</strong>
                            <p>Express yourself freely through our digital journal. Write down your thoughts,
                                reflections, and dreams. Let Moodily be your trusted companion in your personal growth
                                journey.</p>
                        </div>
                    </div>
                    <div className="feature-row">
                        <div className="feature-left" data-aos="fade-right">
                            <span className="home-icons">🌞 </span>
                            <strong>Start Your Day Positively</strong>
                            <p>Begin each day with positivity by setting daily affirmations and intentions.
                                Moodily helps you start your day with a smile and a positive mindset, ready to conquer
                                any challenges.</p>
                        </div>
                        <div className="feature-right" data-aos="fade-left">
                            <span className="home-icons"> 📈 </span>
                            <strong>Track Progress & Achievements</strong>
                            <p>Celebrate your victories, no matter how small, and see how far you&rsquo;ve come.
                                Moodily&rsquo;s tracking features allow you to visualize your personal growth journey and
                                cherish your accomplishments.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="how-it-works"  data-aos="zoom-in">
                <div className="divider" ></div>
                <Typography variant="h4" className="section-title how-it-work">
                    <span>How it works: </span>
                </Typography>
                <div className="divider"></div>
                <div className="section section-list" data-aos="zoom-in"  >
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
                    <p className="section-text">
                        Ready to start your mood-tracking adventure and bring some order to life&rsquo;s delightful
                        chaos?
                        Join Moodily today and let&rsquo;s create a brighter, more balanced you, one mood at a time. 🌞✨
                    </p>
                    <p className="section-text">
                        <a href={"/signup"}>Sign up</a> now and let&rsquo;s ride the waves of life together! 🌊🚀
                    </p>
                </div>
            </Container>

        </div>
    );
}
