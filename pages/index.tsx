import type { NextPage } from 'next'

import Head from "next/head";

import { useRouter } from 'next/router'
import { useEffect } from "react"

import Link from "next/link"


const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}


const Home: NextPage = () => {

  const router = useRouter();

  useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
  useScript("/scripts/index.js")
  useScript("/plugins/testimonial/index.js")
  useScript("/plugins/bottom-nav/script.js")
  return (
    <>

      <Head>
        <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />

        <link rel="stylesheet" href="/plugins/carousel/styles.css" />
        <link rel="stylesheet" href="/plugins/testimonial/styles.css" />
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/wave_btn.css" />
        <link rel="stylesheet" href="/plugins/bottom-nav/style.css" />



        {/* <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script> */}

        {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> */}


        {/* <script type="text/javascript" src="/scripts/index.js"></script>
        <script type="text/javascript" src="/plugins/testimonial/index.js"></script>
        <script type="text/javascript" src="/plugins/bottom-nav/script.js"></script> */}
      </Head>

      <main>
        <nav id="main-nav">
          <div className="nav-branding"> <img src="./images/LOGO OF COFB1 1@2x.png" alt="" /></div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">Online Giving</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><Link href="/register">Register</Link></li>
            <li><button onClick={(ev) => {
              ev.preventDefault();
              router.push("/login")
            }} className="btn primary-btn">Sign In</button></li>
          </ul>
        </nav>

        <section className="mobile-welcome">

          <h1>Welcome to The Transformation Arena <br /> Youth Church</h1>

          <div className="carousel-buttons">
            <button className=" btn primary-btn">Get Started</button>

            <button className="btn glass-btn">Watch live</button>

          </div>
        </section>

        <section className="photo_slider">
          <input type="radio" name="slider" className="slide-radio1" checked id="slider_1" />
          <input type="radio" name="slider" className="slide-radio2" id="slider_2" />
          <div className="slider-pagination">
            <label htmlFor="slider_1" className="page1"></label>
            <label htmlFor="slider_2" className="page2"></label>
          </div>
          <div className="next control">
            <label htmlFor="slider_1" className="numb1"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z" />
            </svg> </label>
            <label htmlFor="slider_2" className="numb2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z" />
            </svg> </label>
          </div>
          <div className="previous control">
            <label htmlFor="slider_1" className="numb1"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z" />
            </svg> </label>
            <label htmlFor="slider_2" className="numb2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z" />
            </svg> </label>
          </div>
          <div className="slider slide_img_01">


            <div className="carousel-box">
              <h1>Welcome to The Transformation Arena <br /> Youth Church</h1>

              <div className="carousel-buttons">
                <button className=" btn primary-btn">Get Started</button>

                <button className="btn glass-btn">Watch live</button>
              </div>
            </div>
          </div>
          <div className="slider slide_img_02">
            <div className="carousel-box">
              <h1>Welcome to The Transformation Arena <br /> Youth Church</h1>

              <div className="carousel-buttons">
                <button className=" btn primary-btn">Get Started</button>

                <button className="btn glass-btn">Watch live</button>
              </div>
            </div>
          </div>
        </section>


        <section id="section-two" className="container">

          <div id="welcome">
            <h1>Welcome To Church God Bless You</h1>
            <p>Welcome to this great family of God where greatness shines</p>
          </div>

          <ul className="card-list">
            <li className="card-list-item">
              <img src="./images/Icon.png" />
              <h2>Our Mission</h2>

              <p>To make heaven.
                To take as many as possible with us.
                To have a member of RCCG in every family of all nation</p>
            </li>
            <li className="card-list-item">
              <img src="./images/Icon.png" />
              <h2>Our Vision</h2>
              <p>To make heaven.
                To take as many as possible with us.
                To have a member of RCCG in every family of all nation</p>
            </li>
            <li className="card-list-item">
              <img src="./images/Icon.png" />
              <h2>Our Belief</h2>

              <p>To make heaven.
                To take as many as possible with us.
                To have a member of RCCG in every family of all nation</p>
            </li>
          </ul>
        </section>

        <section id="section-four">

          <img className="dot-pattern" src="./images/vectors/Dot Pattern.svg" />
          <img className="ellipse" src="./images/vectors/Ellipse 184.svg" />

          <div className="flex-section container">



            <div className="item">

              <div className="image-right-border-radius">
              </div>
            </div>

            <div className="item">
              <h2>Discover the Presence of God</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ut praesentium hic non officiis officia!Quibusdam
                rerum cum et libero repellat corporis maiores est, dicta ab, eius odio sed, debitis quaerat nemo?Laborum quas
                doloremque inventore laudantium exercitationem sit aspernatur corrupti animi fugiat repudiandae ex, culpa
                alias
                eaque sequi omnis nihil aperiam totam excepturi reiciendis cum vel?Nihil praesentium sequi modi quod
                doloribus</p>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ut praesentium hic non officiis officia!Quibusdam
                rerum cum et libero repellat corporis maiores est, dicta ab, eius odio sed, debitis quaerat nemo?Laborum quas
                doloremque inventore laudantium exercitationem sit aspernatur corrupti animi fugiat repudiandae ex, culpa
                alias
              </p>

              <div className="person-name">
                <h3>PASTOR BIODUN AKA PST.B</h3>
              </div>

              <div className="learn-more">
                <button className="btn primary-btn">Learn More</button>
              </div>
            </div>


          </div>
        </section>

        <section id="section-five">

          <img className="dot-pattern" src="./images/vectors/Dot Pattern.svg" />
          <div className="container flex-section article-and-cards">
            <div className="item article">
              <h3>Our services</h3>
              <h2>What we do at The Transformation Arena</h2>
              <p className="article-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat porro autem saepe tempore velit
                accusantium temporibus eos architecto, ex ut deserunt quod blanditiis consequuntur quis repellendus similique
                dolores quae magnam, explicabo molestiae dignissimos? Optio ullam eveniet omnis quibusdam sunt asperiores,
                recusandae in quae. Quibusdam repellendus repudiandae vel nostrum facere.
              </p>

              <div className="learn-more">
                <button className="btn primary-btn">Learn More</button>
              </div>
            </div>
            <div className="item cards">
              <div className="card">
                <img src="./images/Icon.png" />
                <h2>Pray</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam in ea minus soluta voluptatibus sint
                  explicabo,
                </p>
              </div>

              <div className="card">
                <img src="./images/Icon.png" />
                <h2>Praise</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam in ea minus soluta voluptatibus sint
                  explicabo,
                </p>
              </div>
              <div className="card">
                <img src="./images/Icon.png" />
                <h2>Worship</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam in ea minus soluta voluptatibus sint
                  explicabo,
                </p>
              </div>
              <div className="card">
                <img src="./images/Icon.png" />
                <h2>Give</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam in ea minus soluta voluptatibus sint
                  explicabo,
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="banner">
          <div className="banner-box">
            <h2 className="banner-heading">Join us this sunday</h2>
            <h2 className="banner-heading">Live @8am</h2>

            <button className="btn primary-btn">Watch us live</button>
          </div>
        </section>


        <section className="container testimonial">

          <div className="testimonial-article">
            <h2>Testimonies from our members</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vitae, labore obcaecati totam quas deleniti?
              Repudiandae id illum quam ex.
            </p>

          </div>


          <div className="slider-row">

            <div className="slider-controls">

              <button className="testi-control" id="testi-prev"></button>
              <button className="testi-control" id="testi-next"></button>
            </div>
            <div className="items">
              <div className="testimonial-card testi-card">
                <img className="testimonial-profile" src="./images/AOP_3259 1.png" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non repudiandae ad expedita molestiae
                  quasi
                  eum eaque sint labore assumenda?</p>


                <hr />
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum dolor. </p>
              </div>


              <div className="testimonial-card testi-card">
                <img className="testimonial-profile" src="./images/AOP_3259 1.png" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non repudiandae ad expedita molestiae
                  quasi
                  eum eaque sint labore assumenda?</p>


                <hr />
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum dolor. </p>
              </div>


              <div className="testimonial-card testi-card">
                <img className="testimonial-profile" src="./images/AOP_3259 1.png" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non repudiandae ad expedita molestiae
                  quasi
                  eum eaque sint labore assumenda?</p>


                <hr />
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum dolor. </p>
              </div>


              <div className="testimonial-card testi-card">
                <img className="testimonial-profile" src="./images/AOP_3259 1.png" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non repudiandae ad expedita molestiae
                  quasi
                  eum eaque sint labore assumenda?</p>


                <hr />
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum dolor. </p>
              </div>

              <div className="testimonial-card testi-card">
                <img className="testimonial-profile" src="./images/AOP_3259 1.png" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non repudiandae ad expedita molestiae
                  quasi
                  eum eaque sint labore assumenda?</p>
                <hr />
                <h4>Lorem, ipsum.</h4>
                <p>Lorem, ipsum dolor. </p>
              </div>

            </div>

          </div>
        </section>


        <button className="menu__button">
          <div>
            <div></div>
          </div> Menu
        </button>
        <section className="menu__body" hidden={true}>
          <div className="menu__header">
            <label>
              <div></div>
            </label>
            <p>Menu</p>
            <button title="Close">
              <div></div>
            </button>
          </div>
          <div className="menu__links">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Program</a>
            <a href="#">Online Giving</a>
            <a href="#">Resources</a>
            <a href="#">Contact Us</a>
            <Link href="/login">Sign In</Link>

          </div>


          <div className="menu__contact"><a href="#0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z">
              </path>
            </svg><span>Call</span></a><a href="#0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
                </path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg><span>Email</span></a><a href="#0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z">
                </path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg><span>Directions</span></a>
          </div>
        </section>
        <div className="menu__overlay" hidden={true}></div>



      </main>

    </>
  )
}

export default Home
