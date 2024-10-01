// This is a placeholder for the actual API call to Google Sheets
export const fetchAnnouncements = async () => {
  // Simulated data
  const data = [
    { 
      id: 1, 
      title: 'New Product Launch', 
      date: '01 October 2024',
      content: 'We are excited to announce our new product line...',
      videos: {
        Auslan: 'https://example.com/auslan-video-1',
        ASL: 'https://example.com/asl-video-1',
        BSL: 'https://example.com/bsl-video-1',
        SASL: 'https://example.com/sasl-video-1',
        'International Sign': 'https://example.com/is-video-1'
      }
    },
    { 
      id: 2, 
      title: 'Company Picnic', 
      date: '15 October 2024',
      content: 'Join us for our annual company picnic...',
      videos: {
        Auslan: 'https://example.com/auslan-video-2',
        ASL: 'https://example.com/asl-video-2',
        BSL: 'https://example.com/bsl-video-2',
        SASL: 'https://example.com/sasl-video-2',
        'International Sign': 'https://example.com/is-video-2'
      }
    },
    // ... more announcements
  ];

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return data;
};
