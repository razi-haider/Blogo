// Purpose: Create Blog page component
import React, { useState } from "react";

// Create Blog page component
function CreateBlog() {
  // Form data
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      tags: tags.split(",").map((tag) => tag.trim()),
      link,
      text
    };
    // For testing
    console.log(newBlog);
    // Send newBlog to server
    setSubmitted(true);
  };

  // Conditionally render form or thank you message
  return (
    <div className="text-center">
      <p className="text-bg-dark text-center p-1"> Create new blog post</p>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          {/* Tags */}
          <label>
            Tags:
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          {/* Link */}
          <label>
            Link:
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          {/* Text */}
          <label>
            Text:
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              rows="10"
              cols="25"
            />
          </label>
          <br />
          <br />
          {/* Submit Button functionality */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ) : (
        <p>Thank you for Creating Blog!</p> // Thank you message
      )}
    </div>
  );
}

// Export Create Blog page component
export default CreateBlog;