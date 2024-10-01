import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { fetchAnnouncements } from './api';
import './AnnouncementViewer.css';

const AnnouncementViewer = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('Auslan');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 5;

  useEffect(() => {
    const getAnnouncements = async () => {
      const data = await fetchAnnouncements();
      setAnnouncements(data);
    };
    getAnnouncements();
  }, []);

  const languages = ['Auslan', 'ASL', 'BSL', 'SASL', 'International Sign'];

  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleExpand = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  return (
    <div className="announcement-viewer">
      <header className="header">
        <h1 className="logo">convo</h1>
        <div>
          <button className="header-button">View all</button>
          <button className="header-button">Copy link</button>
        </div>
      </header>

      <div className="main-card">
        <h2 className="announcement-title">{selectedAnnouncement ? selectedAnnouncement.title : "Select an announcement"}</h2>
        <p>{selectedAnnouncement ? selectedAnnouncement.date : ""}</p>
        <div className="language-selector">
          <p>Select your language</p>
          <div>
            {languages.map((lang) => (
              <button
                key={lang}
                className={`language-button ${selectedLanguage === lang ? "active" : ""}`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
        {selectedAnnouncement && (
          <div className="video-container">
            <ReactPlayer
              url={selectedAnnouncement.videos[selectedLanguage]}
              controls
              width="100%"
              height="100%"
            />
          </div>
        )}
        {selectedAnnouncement && (
          <div>
            <h3 className="font-bold mb-2">Announcement Details:</h3>
            <p>{selectedAnnouncement.content}</p>
          </div>
        )}
      </div>

      {currentAnnouncements.map((announcement) => (
        <div key={announcement.id} className="announcement-list-item">
          <div>
            <h3 className="font-semibold">{announcement.title}</h3>
            <p className="text-sm">{announcement.date}</p>
          </div>
          <button 
            className="expand-button"
            onClick={() => handleExpand(announcement)}
          >
            Expand
          </button>
        </div>
      ))}

      <div className="pagination">
        {[...Array(Math.ceil(announcements.length / announcementsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`page-button ${currentPage === number + 1 ? "active" : ""}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementViewer;
