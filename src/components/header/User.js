import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"


export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://th.bing.com/th/id/R.51f6d2954c4461ce86108e407d7c84bf?rik=l4jt2ruNZ0z6Sg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-ehCP6kkYSrQ%2fVe2OfIHiSJI%2fAAAAAAAAM0E%2faSt0yz9wEWU%2fs1600%2flord-ganesha-HD-wallpaper-free-HQ-Lord-Ganapathi01-naveengfx.jpg&ehk=wPArzHmj2jKDpgzW1vFtAPeXbkoSXpKz%2fn6aVla4yR8%3d&risl=&pid=ImgRaw&r=0' alt='' />
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  <Link to='/'>
                    <div className='img'>
                      <img src='https://th.bing.com/th/id/R.51f6d2954c4461ce86108e407d7c84bf?rik=l4jt2ruNZ0z6Sg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-ehCP6kkYSrQ%2fVe2OfIHiSJI%2fAAAAAAAAM0E%2faSt0yz9wEWU%2fs1600%2flord-ganesha-HD-wallpaper-free-HQ-Lord-Ganapathi01-naveengfx.jpg&ehk=wPArzHmj2jKDpgzW1vFtAPeXbkoSXpKz%2fn6aVla4yR8%3d&risl=&pid=ImgRaw&r=0' alt='' />
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>Amarnath</h4>
                    <label htmlFor=''>INDIA,SE</label>
                  </div>
                </div>
                <Link to='/Account'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
