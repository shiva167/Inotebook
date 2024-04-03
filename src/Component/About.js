import React, { useContext, useEffect } from "react"
import noteContext from "../Context/Notes/noteContext"
import '../App.css'
import od from '../img/Odxj.gif'
const About = () => {
  //     const a = useContext(noteContext);
  //    useEffect(()=>{
  //     a.update();
  //eslint-disable-next-line
  // },[]);
  const footer_item = [{title:"Account",items:[{item1:"Sign in",path:"/login"},{item1:"Join free",path:"/signup"}]},
  {title:"Services",items:[{item1:"Your Note",path:"/login"},{item1:"Newnote",path:"/signup"}]},
  {title:"Other Projects",items:[{item1:"Text_Analyzer",path:"https://shiva167.github.io/TextUtils_React_App/"},{item1:"PortFolio",path:"https://shiva167.github.io/MyPortfoliowebsite.github.io/"},{item1:"NewsApp",path:"https://github.com/shiva167/news_tiger"}]}
  ]
  return (
    <> 
      <div className="about">
        <p className="display-4">Welcome EvenNote</p>
        <h1 className="aboutp"><span>Notes Create</span></h1> <h1><span className="annotate">Annotate Organise</span></h1>
        </div>
      <div className="about_padding">
        <div className="background_bg ">
          <div className="container">
            <div className="about_section layout_padding">
              <div className="row">
                <div className="col col-md-4">
                  <div className="about_taital">
                    <p className="true_text fs-5 m-2">EvenBook is an easy-to-use digital notebook app where you can quickly add, update, and delete notes. Your information is securely stored on the web, making it accessible across different devices. Organize your notes with titles, descriptions, and tags effortlessly, and enjoy the convenience of cross-device syncing. The app values your privacy, providing a rich text editor for customization and ensuring reliable service.</p>
                    <div className="redmore_bt m-3"><a href="#">Read More...</a></div>
                  </div>
                </div>
                <div className="col col-md-4 ml-8 book">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pencil_main">
        <div className="col-md-6 p-0">
          <div className="pencil">
<img src={od} alt="" />
          </div>
        </div>
        <div className="col fs-2 ">
          <h4 className="fs-1 mb-5 pl-3">Your digital Hub for EffortLess Note Storage </h4>
          <p className="fs-5  mb-5">
            Experience the simplicity of offline access and enhance your note-taking with NoteBook App.
            Evernote is a versatile platform designed to facilitate the storage, updating, and deletion of notes through a seamless integration with local and cloud-based storage systems. 

            {/* The platform's local storage capability ensures that users have quick and reliable access to their notes directly from their devices, providing a convenient solution for those who prefer to keep their data on-premises. Simultaneously, Evernote's cloud integration empowers users to access their notes from anywhere with an internet connection, fostering a sense of accessibility and flexibility.

            One of Evernote's key strengths lies in its intuitive interface, allowing users to seamlessly update their notes with minimal effort. Whether it's a quick addition to an existing note or a comprehensive revision, the platform accommodates various note-editing needs. The integration of cloud storage further enhances the collaborative aspect of Evernote, as users can effortlessly sync their notes across multiple devices, ensuring that the latest information is always at their fingertips.

            Additionally, Evernote recognizes the importance of efficient organization, offering features such as notebooks, tags, and search functionalities. These tools enable users to categorize and retrieve their notes effortlessly, contributing to an overall streamlined and personalized note-taking experience. Furthermore, the platform's commitment to user convenience is evident in its straightforward note deletion process, ensuring that users can manage their content with ease.

            In summary, Evernote serves as a comprehensive solution for individuals seeking a dynamic and user-friendly platform for note storage, updating, and deletion. With its seamless integration of local and cloud-based storage, intuitive interface, and robust organizational features, Evernote remains a valuable tool for those looking to enhance their note-taking and management capabilities. */}

 </p></div>
 </div>      
  <footer className="footer">

          <section className="bg-none text-light py-6 py-md-5 py-xl-10 border-top border-light">
            <div className="container ">
              <div className="row gy-4 gy-lg-0 justify-content-xl-between">

                <div className="col-10 col-md-4 col-lg-3 col-xl-2">
                  <div className="widget">
                    <h4 className="widget-title mb-4">Get in Touch</h4>
                    <address className="mb-4">KNIT, Sultanpur, UP, India</address>
                    <p className="mb-1">
                      <a className="link-secondary text-decoration-none" href="tel:+15057922430">(91)+7456048309</a>
                    </p>
                    <div className="flex-coloum">
                    <p>
                        <a className="link-secondary text-decoration-none fs-6" href="mailto:demo@yourdomain.com">agrawalshiva871@.com</a>
                      </p>
                      </div>
                    
                   
                  </div>
                </div>
                {/* <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div className="widget">
                    <h4 className="widget-title mb-4">Account</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a href="#!" className="link-secondary text-decoration-none">Sign in</a>
                      </li>
                      <li className="mb-0">
                        <a href="#!" className="link-secondary text-decoration-none">Join Free</a>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div className="widget">
                    <h4 className="widget-title mb-4">Services</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a href="#!" className="link-secondary text-decoration-none">Your Notes</a>
                      </li>
                      <li className="mb-0">
                        <a href="#!" className="link-secondary text-decoration-none">Newnote</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div className="widget">
                    <h4 className="widget-title mb-4">Other project</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a href="#!" className="link-secondary text-decoration-none">Text_Analyzer</a>
                      </li>
                      <li className="mb-2">
                        <a href="#!" className="link-secondary text-decoration-none">PortFolio</a>
                      </li>
                      <li className="mb-0">
                        <a href="#!" className="link-secondary text-decoration-none">NewsApp</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {                footer_item.map((item,index)=>(
    
    <div className="col-12 col-md-4 col-lg-3 col-xl-2" key={index}>
    <div className="widget">
      <h4 className="widget-title mb-4">{item.title}</h4>
      <ul className="list-unstyled">
        {item.items.map((subitem,subindex)=>(
        <li key={subindex} className="mb-2">
        <a href={subitem.path} className="link-secondary text-decoration-none">{subitem.item1}</a>
      </li>          
        ))

        }
      </ul>
    </div>
  </div>

))}
                <div className="col-12 col-lg-3 col-xl-4">
                  <div className="widget">
                    <h4 className="widget-title mb-4">Our Newsletter</h4>
                    <div  className="mb-4 fs-6 d-block">

                    <p>Subscribe to our newsletter to get our news & discounts delivered to you.</p>
                    </div>
                
                  </div>
                </div>

              </div>
            </div>
          </section>

          <div className="bg-light text-dark container-fluid py-4 h-50% py-md-2 py-xl-8 border-top border-light-subtle">
            <div className="container">
              <div className="row gy-4 gy-md-0">
                <div className="col-xs-12 col-md-7 order-1 order-md-0">
                  <div className="copyright text-center text-md-start">
                    &copy; 2023. All Rights Reserved.
                  </div>
                  <div className="credits text-secondary text-center text-md-start mt-2 fs-7">
                    Built by <a href="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">BootstrapBrain</a> with <span className="text-primary">&#9829;</span>
                  </div>
                </div>

                <div className="col-xs-12 col-md-5 order-0 order-md-1">
                  <ul className="nav justify-content-center justify-content-md-end">
                    <li className="nav-item">
                      <a className="nav-link link-dark" href="https://www.facebook.com/shiva.agarwal.39545/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link link-dark" href="https://www.linkedin.com/in/shiva-agrawal/">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link link-dark" href="https://github.com/shiva167">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link link-dark" href="https://www.instagram.com/_____shiva.agrawal/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </footer>


    </>

  )
}

export default About
