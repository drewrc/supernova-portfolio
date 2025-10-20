"use client"

// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

// --- Styles for the components ---
const styles = {
  // Main container: Centered and full-height, with the light green background
container: {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1rem',
  // --- NEW GRADIENT ---
  background: 'linear-gradient(180deg, #F0E6FF 0%, #E6C8E6 100%)', // Light Purple to Light Pink
  // --------------------
  fontFamily: 'sans-serif',
  color: '#333',
},
  // Profile picture
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid white', // White border around the image
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  // Username and description text
  username: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  description: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#555',
  },
  // Container for the buttons/links
  linksContainer: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', // Spacing between buttons
  },
  // Individual link button style
  linkButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    borderRadius: '1.5rem', // Rounded corners
    border: '2px solid #000000',
    backgroundColor: 'white',
    color: 'black',
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '4px 4px 0px 0px #000000', // The key "3D" shadow effect
    transition: 'transform 0.1s, box-shadow 0.1s',
    cursor: 'pointer',
  },
  // Button hover effect (optional, but nice)
  linkButtonHover: {
    transform: 'translate(2px, 2px)',
    boxShadow: '2px 2px 0px 0px #000000',
  },
// Update this to control the icon and text alignment
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px', // INCREASED GAP for better separation
    width: '100%',
    justifyContent: 'center',
  },
  
  // CRITICAL: New style object for the icon image
  iconImage: {
    width: '24px',  // Enforce a fixed small size for consistency
    height: '24px', 
    flexShrink: 0,  // Prevents the icon from shrinking on small screens
    objectFit: 'contain', // Ensures large icons like Facebook scale down properly
  },
  
  // New style for the link text to push it to the center
  linkText: {
    flexGrow: 1, // Allows the text container to take up available space
    textAlign: 'center', // Centers the text within its space
    paddingRight: '20px', // Balances the left padding
    textAlign: 'center',
  }
};

// --- Data for the links ---
const links = [
  // IMPORTANT: The 'icon' value is now the URL path to the PNG image
  { text: 'Soundcloud', url: 'https://soundcloud.com/supanovasounds', icon: 'soundcloud-black.png', alt: 'Soundcloud'},
  { text: 'Instagram', url: 'https://www.instagram.com/supanova.music/', icon: 'ig-black.svg', alt: 'Instagram' },
  { text: 'Facebook', url: 'https://www.facebook.com/people/Supanova/61582109542271/', icon: 'fb-blue.png', alt: 'Facebook' },
];

// ... rest of the file ...

// --- Main Next.js Component ---
const Socials = () => {
  return (
    <div style={styles.container}>
      <Head>
        <title>@SUPANOVA | Social Links</title>
      </Head>

      {/* Profile Section */}
      <Image
        src="pfp.jpg" 
        alt="@supanova"
        style={styles.profileImage}
      />
      <h1 style={styles.username}>@SUPANOVA</h1>
      <p style={styles.description}>
        Producer
      </p>
      <p style={styles.description}>
       ✨ Radiate Positivity ✨
      </p>

      {/* Links Section */}
      <div style={styles.linksContainer}>
        {links.map((link) => (
          <a
            key={link.text}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkButton}
            onMouseEnter={(e) => { e.currentTarget.style.transform = styles.linkButtonHover.transform; e.currentTarget.style.boxShadow = styles.linkButtonHover.boxShadow; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = styles.linkButton.boxShadow; }}
          >
            <span style={styles.buttonContent}>

                      <Image 
                        src={link.icon} 
                        alt={`${link.alt} icon`} 
                        style={styles.iconImage} // Apply the fixed size and object-fit
                      />
  
              {link.text}
              {/* Optional: Add a small dropdown arrow for Pinterest as in the image */}
              {link.dropdown && <span style={{ marginLeft: 'auto' }}>⌄</span>}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
