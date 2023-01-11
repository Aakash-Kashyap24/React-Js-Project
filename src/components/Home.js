
import vg from '../assets/2.webp'
import React from 'react'
import '../Styles/Home.scss';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Tech Star</h1>
          <p>Solution to all Your problems</p>
        </main>
      </div>

      <div className="home2 ">
        <img src={vg} alt="Graphics" />

        <div>
          <p>We are your one and only solutions to the tech problems you fontVariantNumeric
            every day. We are leading tech companies whose aim to increase the problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3 " id='about'>
        <div>
          <h1>Who Are We?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas exercitationem cumque fugit vero nesciunt voluptates beatae odio natus neque sed quaerat voluptate ipsum nam inventore eaque, hic sequi! Minus hic ut, molestias commodi alias libero possimus explicabo dolor nihil, eos minima vel consequuntur eius laboriosam repellendus rem, doloremque odio quaerat error culpa tempora provident repudiandae! Eveniet accusantium, quod deserunt similique excepturi illum at, laudantium veniam placeat pariatur dolorum porro hic a unde! Provident minima assumenda quas, necessitatibus quod nisi quaerat deserunt quasi laudantium labore temporibus ullam, perspiciatis cupiditate blanditiis molestias velit expedita rerum. Nesciunt aut, harum sapiente architecto nisi ad.
          </p>
        </div>
      </div>
      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle />

              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillAmazonCircle />

              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiFillYoutube />

              <p>youtube</p>
            </div>

            <div style={{
              animationDelay: "1s",
            }}>
              <AiFillInstagram />

              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>
    </>
  )
}

export default Home