import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import faluda from '../../assets/ALL FALODA.pdf'; // Import your PDF files
import orydeepfoods from '../../assets/orydeep.pdf';
import sause from '../../assets/ALL SAUCE.pdf';
import ketchap from '../../assets/TOMATOKETCHUP.pdf';
const Hero = () => {
  const handleDownload = () => {
    // Array of PDF paths in your project
    const pdfPaths = [
      orydeepfoods,
    ];

    // Loop through each PDF path and create a download link
    pdfPaths.forEach((pdfPath) => {
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `brochure.pdf`; // Set the download filename to 'brochure'
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up after download
    });
};

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Ory Deep Foods</h1>
        <p>Ory Deep Foods stands as a premier manufacturer in the realm of Indian cuisine. Since its inception in 2016, it has been dedicated to delighting the palates of Indian food aficionados. With a commitment to authenticity, Deep Foods presents a delectable array of offerings including pickles, papads, soya chunks, and other culinary specialties.</p>
        <button className='btn' onClick={handleDownload}>Download PDF <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
