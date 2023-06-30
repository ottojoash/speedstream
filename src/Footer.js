import React from 'react';

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-10 mx-auto">
          {/* Social */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Follow us on social media</h3>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.iconLink}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/speedstream275" style={styles.iconLink}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/_speedstream275?igshid=MzRIODBiNWFIZA==" style={styles.iconLink}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-10 mx-auto">
          {/* Location */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Our Location</h3>
            <p style={styles.paragraph}>123 Main Street, City, Country</p>
          </div>
        </div>
        <div className="col-md-4 col-10 mx-auto">
          {/* Contact */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Contact Us</h3>
            <p style={styles.paragraph}>Email: speedstream275@gmail.com</p>
            <p style={styles.paragraph}>Phone: +256-764-994674</p>
            <p style={styles.paragraph}>Phone: +256-753979253</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    padding: '20px',
    borderRadius: '5px',
    margin: '20px',
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  socialIcons: {
    display: 'flex',
    marginBottom: '10px',
  },
  iconLink: {
    marginRight: '10px',
    color: '#333',
    fontSize: '24px',
  },
  container: {
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: "30%",
  },
  paragraph: {
    marginBottom: '5px',
  },
};

export default Footer;
