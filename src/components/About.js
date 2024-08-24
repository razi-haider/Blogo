// Purpose: About page component
import React from "react";

// About page component
const AboutScreen = () => {
  return (
    // Used Bootstrap to style page
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 mb-4">About BlogO</h1>
          {/* Used ChatGPT to generate text */}
          <p className="lead">
            Welcome to our blogging site! We are a group of passionate writers and bloggers who aim to share our insights, knowledge, and experiences with our readers.

            Our site covers a wide range of topics, including travel, food, lifestyle, technology, and more. We believe that there is always something new to learn, and we are committed to providing informative, engaging, and entertaining content that our readers will love.

            We believe that blogging is not just about sharing our thoughts and experiences, but also about building a community of like-minded individuals who can learn from each other.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            // Using image from picsum
            src="https://picsum.photos/seed/picsum/600/400"
            alt="placeholder"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

// Export About page component
export default AboutScreen;
