import { faCertificate, faStream } from "@fortawesome/fontawesome-free-solid";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "react";

export default function App() {
  return (
    <div className="app">
      <div id="navigation" className="navigation">
        <div className="navbar">
          <div className="navbar-left">Sparkle Studios</div>
          <div className="navbar-right">
            <div className="navbar-anchor">
              <a href="#about">about us</a>
            </div>
            <div className="navbar-anchor">
              <a href="#team">team</a>
            </div>
            <div className="navbar-anchor">
              <a href="#about">services</a>
            </div>
            <div className="navbar-anchor">
              <a href="#about">contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="intro-content">
          <div className="intro-text">
            <div className="intro-title">Sparkle Studios</div>
            <div className="intro-line"></div>
            <div className="intro-description">
              Boost your business with us.
            </div>
          </div>

          <div className="intro-stats">
            <div className="stats-container">
              <div className="stat">
                <FontAwesomeIcon icon={faCertificate} className="stat-icon" />
                <div className="stat-text">+5 years of experience</div>
              </div>
              <div className="stat">
                <FontAwesomeIcon icon={faStream} className="stat-icon" />
                <div className="stat-text">+50 projects realized</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow intro"></div>
      </div>

      <div className="about" id="about">
        <div className="about-content">
          <div className="about-title">About us</div>
          <div className="about-text">
            At Sparkle Studios, our success is built on the success of our
            clients. We take the time to listen, learn, and understand your
            goals, enabling us to craft tailor-made strategies that align with
            your vision. Our integrated approach combines the art of
            storytelling with the science of data, ensuring every decision we
            make is rooted in valuable insights and measurable outcomes.
          </div>
        </div>
        <div className="overflow about"></div>
      </div>
      <div className="team" id="team">
        <div className="team-content">
          <div className="team-title">Meet the team</div>
          <div className="team-members">
            <div className="team-member">
              <div className="team-text">
                <div className="team-name">Batuhan</div>
                <div className="team-function">CEO</div>
              </div>
              <div className="team-links">
                <a href="https://twitter.com" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-text">
                <div className="team-name">Maruthan</div>
                <div className="team-function">CTO</div>
              </div>
              <div className="team-links">
                <a href="https://twitter.com" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-text">
                <div className="team-name">Erzhan</div>
                <div className="team-function">CMO</div>
              </div>
              <div className="team-links">
                <a href="https://twitter.com" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow team"></div>
      </div>
      <div className="services" id="services">
        <div className="overflow services"></div>
      </div>
      <div className="contact" id="contact">
        <div className="overflow contact"></div>
      </div>
      <div className="footer" id="footer"></div>
    </div>
  );
}
