import React from 'react';

const updates = [
  { id: 1, text: 'Meeting regarding project 1', link: '#' },
  { id: 2, text: 'Meeting regarding project 2', link: '#' },
  { id: 3, text: 'Holiday Schedule update', link: '#' },
  { id: 4, text: 'Performance Review R...', link: '#' },
  { id: 5, text: 'New Company Policy', link: '#' },
];

const NoticeBoard = () => {
  return (
    <div style={styles.noticeBoard}>
      <h2 style={styles.title}>Notice</h2>
      <p style={styles.subtitle}>Latest Updates</p>
      {updates.map((update) => (
        <div key={update.id} style={styles.updateItem}>
          <span style={styles.updateText}>{update.text}</span>
          <a href={update.link} style={styles.downloadLink}>
            <i style={styles.downloadIcon}>⬇</i>
          </a>
        </div>
      ))}
    </div>
  );
};

const styles = {
  noticeBoard: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '24px',
    textAlign: 'center',
  },
  subtitle: {
    margin: '0 0 20px 0',
    fontSize: '14px',
    color: '#888',
    textAlign: 'center',
  },
  updateItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  updateText: {
    fontSize: '14px',
  },
  downloadLink: {
    textDecoration: 'none',
    color: '#000',
  },
  downloadIcon: {
    fontSize: '16px',
  },
};

export default NoticeBoard;
