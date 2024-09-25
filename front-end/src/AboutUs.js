import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({ message: '', image: '' });

  useEffect(() => {
    // Fetching the data from the back-end
    fetch('http://localhost:5002/about')
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error('Error fetching the about data:', error));
  }, []);

  return (
    <div>
        <h1> About Me </h1>
        <p> {aboutData.message} </p>
        <img src={`${aboutData.image}`}></img>
    </div>
  );
};

export default AboutUs;