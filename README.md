# Convo Announcement Viewer

This is a lightweight web application for Convo employees to watch announcement videos in various sign languages.

## Features

- View announcements with titles and dates
- Select preferred sign language
- Watch announcement videos in the selected language
- Paginated list of announcements

## Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## API Integration

The `api.js` file currently contains simulated data. To integrate with Google Sheets:

1. Set up a Google Sheet with columns for announcement title, date, content, and video URLs for each language
2. Use the Google Sheets API to fetch this data in the `fetchAnnouncements` function in `api.js`
3. Replace the simulated data with actual API calls

## Customization

- Modify the color scheme in `AnnouncementViewer.js` to match your brand
- Adjust the `announcementsPerPage` variable in `AnnouncementViewer.js` to change the number of announcements displayed per page

## Dependencies

- React
- react-player

