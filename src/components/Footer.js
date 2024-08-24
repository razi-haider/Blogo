// Purpose: Footer component
import React from 'react'

// Footer component
function Footer() {
  return (
    <>
      {/* Using Bootstrap for styling */}
      <footer className="text-center text-white fixed-bottom">
        <div className="container p-1"></div>
        <div className="text-center p-2" style={{ backgroundColor: 'rgb(43, 48, 53)' }}>
          © 2023 Copyright <a className="text-white" href="https://github.com/Daniyal-Murtaza">Daniyal Murtaza</a>
        </div>
      </footer>
    </>
  )
}

// Export Footer component
export default Footer;
