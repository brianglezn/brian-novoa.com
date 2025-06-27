import "./Linktree.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// Importing components
import Footer from "../components/Footer";

// Importing linktree data
import { linktreeUsers } from "./data/linktreeData";

// Main component for displaying the linktree
export default function Linktree() {
  const { userId } = useParams();
  const userData = linktreeUsers.find((user) => user.path === userId);

  // Add animation effect when component mounts
  useEffect(() => {
    const links = document.querySelectorAll(".linktreeLink");
    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add("appear");
      }, 100 * index);
    });
  }, []);

  // Check if user data is found
  if (!userData) {
    return <div className="user-not-found">User not found</div>;
  }

  return (
    <>
      <section className="linktree">
        <div className="decoration-bg"></div>

        <div className="linktreeContainer">
          <div className="linktreeHeader">
            <div className="avatar-container">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="avatar"
              />
            </div>
            <h1>{userData.name}</h1>
            <p className="role">{userData.role}</p>
          </div>

          <div className="linktreeLinks">
            {userData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="linktreeLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">{link.icon}</div>
                <div className="link-content">
                  <h2>{link.title}</h2>
                  <p>{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
