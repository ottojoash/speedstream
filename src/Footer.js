import React from 'react';

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-10 mx-auto">
          {/* Social */}
          <h3 style={styles.heading}>Follow us on social media</h3>
          <div style={styles.socialIcons}>
            <span style={styles.icon}>Facebook</span>
            <span style={styles.icon}>Twitter</span>
            <span style={styles.icon}>Instagram</span>
          </div>
        </div>
        <div className="col-md-4 col-10 mx-auto">
          {/* Location */}
          <h3 style={styles.heading}>Our Location</h3>
          <p style={styles.paragraph}>123 Main Street, City, Country</p>
        </div>
        <div className="col-md-4 col-10 mx-auto">
          {/* Contact */}
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.paragraph}>Email: info@example.com</p>
          <p style={styles.paragraph}>Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  socialIcons: {
    display: 'flex',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '10px',
  },
  paragraph: {
    marginBottom: '5px',
  },
};

export default Footer;
