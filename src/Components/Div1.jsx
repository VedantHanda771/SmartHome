import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = () => {

  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <>
    
    <div className="group-1 group">
    <div className="row-6 group">
      <img
        className="vector-smart-object-double-click-to-edit-16"
        src="images/vector_smart_object_doubl_12.png"
        alt=""
        width={96}
        height={82}
      />
      <nav className="nav">
        <ul className="nav-list group">
          <li>
            <p className="nav-item-1">
              <a href="#1">Home</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-2">
              <a href="#2">About</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-3">
              <a href="#3">Access Control</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-3">
              <a href="#4">Digital</a>
            </p>
          </li>
        </ul>
      </nav>
      <button className="menu-btn" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
      <div className="social-media">
        <div className="icon group">
          <img src="images/instagram.png" alt="" width={28} height={28} />
          <img src="images/facebook.png" alt="" width={28} height={28} />
          <img src="images/twitter.png" alt="" width={28} height={28} />
          <img src="images/whatsapp.png" alt="" width={28} height={28} />
        </div>
      </div>
      <div className="button-copy-holder">
            <input type="text" placeholder="Search" />
        </div>
    </div>
    <div className="row-7 group">
      <div className="col-19">
        <p className="sub-7">
          FUTURE
          <br />
          IS NOW
        </p>
        <p className="title-4">SMART HOME</p>
        <p className="body-text-29">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <button className="button-holder-2-transparent">See More</button>

      </div>
      <img
        className="vector-smart-object-double-click-to-edit-17"
        src="images/vector_smart_object_doubl_18.png"
        alt=""
        width={546}
        height={540}
      />
    </div>
  </div>



    </>
  )
}

export default Div1
