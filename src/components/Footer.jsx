import React from 'react'

const Footer = () => {
   let footerStyle ={
    position: "absolute",
    marginTop: "13rem",
    width: "100%"
   }
   let al ={
    textAlign: "center"
   }
  return (
    <footer>
      <div className="bg-dark text-light py-2" style={footerStyle}>
        <p style={al} >Copyright  &copy; MTodosList.com</p>
      </div>
    </footer>
  )
}

export default Footer
