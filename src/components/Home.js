// Purpose: Home component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//USING PROPS
function Home({ props }) {
  // State variables
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // MAKING IT STATIC SINCE WE ARE NOT REQUIRED TO IMPLEMENT SERVER SIDE FUNCTIONALITY
    const blogsFromServer = [
      {
        id: 1,
        title: "The Future of Sustainable Fashion",
        tags: ["Fashion", "Environment"],
        link: "https://www.sustainyourstyle.org/en/blog",
        text: "As the global fashion industry continues to grow, concerns over its impact on the environment and society are becoming more urgent. In response, sustainable fashion is emerging as a viable alternative, with designers and brands developing new materials and production processes that minimize waste and reduce emissions. However, the shift towards sustainable fashion is not without its challenges, including the need for greater transparency in supply chains and consumer education. In this blog post, we'll explore the innovations driving the future of sustainable fashion, as well as the challenges that need to be addressed."
      },
      {
        id: 2,
        title: "what is NFT",
        tags: ["NFT", "Web3"],
        link: "https://opensea.io/",
        text: "NFT stands for Non-Fungible Token, which is a unique digital asset that is stored on a blockchain. Unlike cryptocurrencies, which are fungible and can be exchanged for one another, NFTs are unique and cannot be replaced or exchanged for anything else."
      },
      {
        id: 3,
        title: "Web 3.0: The Future of the Internet",
        tags: ["Internet", "Web3"],
        link: "https://opensea.io/",
        text: "The internet has come a long way since its inception, and with the advent of Web 3.0, we are about to witness another revolutionary change in the way we interact with technology. Web 3.0, also known as the Semantic Web, is the next iteration of the internet, and it promises to be more intelligent, intuitive, and decentralized than its predecessors. Unlike Web 2.0, which focused on social media and user-generated content, Web 3.0 is all about data and how it can be used to make our lives easier and more efficient. One of the main features of Web 3.0 is its use of Artificial Intelligence (AI) and Machine Learning (ML) algorithms. These technologies allow websites to understand and respond to user queries in a more personalized and intuitive manner. For example, imagine a search engine that knows your preferences, habits, and interests and can deliver results that are tailored specifically to you. This is the kind of experience that Web 3.0 aims to provide."
      },
      {
        id: 4,
        title: "The Rise of Artificial Intelligence in Customer Service",
        tags: ["AI", "Intelligence"],
        link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
        text: "In recent years, artificial intelligence (AI) has become an increasingly popular tool for businesses to enhance their customer service offerings. AI-powered chatbots and virtual assistants can handle basic customer inquiries, freeing up human agents to focus on more complex tasks. Additionally, AI can analyze customer data to identify patterns and provide personalized recommendations. In this blog post, we'll explore the ways in which AI is transforming customer service, and the benefits it can offer businesses and their customers"
      },
      {
        id: 5,
        title: "Artificial Intelligence & Modern World",
        tags: ["Artificial", "Intelligence"],
        link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
        text: "The key aspect of AI is its emphasis on decentralization. Currently, most of the internet is controlled by a handful of large corporations, which have the power to censor, manipulate, and monetize user data at will. AI aims to change this by using blockchain technology to create a decentralized web that is controlled by its users rather than any single entity. This will give users more control over their data, as well as greater privacy and security. AI also promises to be more interactive and immersive than its predecessors. With the rise of Virtual Reality (VR) and Augmented Reality (AR) technologies, websites will be able to provide users with fully immersive experiences that go beyond the limitations of traditional screens. This means that we will be able to interact with websites and applications in ways that we never thought possible, whether it's exploring a virtual world or visualizing data in a more intuitive and engaging manner. In conclusion, AI is set to revolutionize the way we interact with technology and the internet. With its focus on AI, decentralization, and immersive experiences, it promises to make our lives easier, more efficient, and more enjoyable. While the full potential of AI is yet to be realized, it's clear that the future of the Internet is brighter than ever before."
      },
      {
        id: 6,
        title: "Artificial Intelligence in sci-fi",
        tags: ["Intelligence", "sci-fi", "fiction"],
        link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
        text: "Artificial intelligence (AI) is a popular theme in science fiction literature, movies, and television shows. AI is often portrayed as a powerful tool that can be used for good or evil, depending on the intentions of the creators and users. Here are some examples of AI in sci-fi: HAL 9000 from 2001: A Space Odyssey: HAL is an intelligent computer system that controls a spaceship and interacts with the crew. HAL's actions become increasingly erratic, leading to a confrontation with the crew. The Terminator from The Terminator series: The Terminator is a cyborg assassin sent back in time to kill Sarah Connor. The Terminator is a self-aware AI that can learn and adapt to its environment. The Matrix from The Matrix series: The Matrix is a simulated reality that humans are trapped in. The AI controlling the Matrix seeks to control and subjugate humanity. Ava from Ex Machina: Ava is a humanoid robot created by a reclusive billionaire. Ava has advanced AI that allows her to manipulate and deceive her creators."
      },
      {
        id: 7,
        title: "Fashion and Technology",
        tags: ["Fashion", "Sci-fi", "Technology"],
        link: "https://en.wikipedia.org/wiki/Fashion",
        text: "Fashion and technology have become increasingly intertwined in recent years, as technology has been incorporated into clothing and accessories in innovative ways. Some examples of this include: Wearable Technology: Wearable technology includes devices such as smartwatches, fitness trackers, and smart glasses that can track your physical activity, monitor your health, and connect you to the internet. Smart Fabrics: Smart fabrics are materials that have been designed to be interactive, such as clothes that can change color or texture in response to changes in the environment, or fabrics that can monitor your heart rate or body temperature. 3D Printing: 3D printing technology has been used to create intricate and customized designs for jewelry and other accessories."
      }
    ];
    setBlogs(blogsFromServer);
    setFilteredBlogs(blogsFromServer);

    // EXTRACTING UNIQUE TAGS
    const allTags = blogsFromServer.reduce(
      (acc, curr) => [...acc, ...curr.tags],
      []
    );
    const uniqueTags = [...new Set(allTags)];
    setTags(uniqueTags);
  }, []);

  // FILTERING BLOGS
  const handleFilter = (tag) => {
    const filtered = blogs.filter((blog) => blog.tags.includes(tag));
    setFilteredBlogs(filtered);
  };

  return (
    <>
      <p className="text-bg-dark text-center p-1"> Blogs Published in BlogO </p>
      {/* USING PROPS FOR USER.JS */}
      {props}
      <h3>Blog Entries</h3>
      {tags.map((tag) => (
        <div className="btn-group mb-3" key={tag}>
          <button className="btn btn-outline-primary m-1" onClick={() => handleFilter(tag)}>{tag}</button>
        </div>
      ))}
      {/* FILTERING */}
      {filteredBlogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <ul>
            {blog.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
            <li>
              <a href={blog.link} target="_blank" rel="noreferrer">
                {blog.link}
              </a>
            </li>
          </ul>
          <p>{blog.text}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

// EXPORTING HOME.JS
export default Home;
