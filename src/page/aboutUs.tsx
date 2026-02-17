//import instax1 from '@/media/instax1.png'
import bride from '@/media/bride.jpg'
import groom from '@/media/groom.jpg'
import flowers from '@/media/flowers.jpg'
import {Laptop, Hospital} from 'lucide-react'


function AboutUs() {
    return <section id="about">
        <div className="section-content section-grey preFadeIn">
            <div className="about-us-title text-center mb-5 preFadeIn">
                <h1 className="pl-0 sm:pl-2 pr-0 sm:pr-2 preFadeIn">About Us</h1>
            </div>
            <div className="about-us-content-web hidden sm:block sm:w-[90%] sm:flex sm:flex-row sm:pt-5 sm:mb-10">
                <div className="about-us-left w-[33%]">
                    <div className="groom-image-wrapper h-[75%]">
                        <img src={groom} alt="groom" className="rounded-2xl h-full mx-auto drop-shadow-[-30px_-30px_0px_rgb(255,255,255,0.75)] preFadeIn" />
                    </div>
                    <div className="groom-spacer h-[25%]"></div>
                </div>
                <div className="about-us-center w-[33%]">
                    <div className="groom-desc h-[50%] preFadeIn">
                        <div className="icon-wrapper">
                            <Hospital className="size-10 ml-[100px] mb-2" />
                        </div>
                        <h2 className="font-bold">The Groom</h2>
                        <ul>
                            <li>Will (or William)</li>
                            <li>Medical Student</li>
                            <li>Loves tools, design, & anything handcrafted</li>
                            <li>Spirit Animal - Bear</li>
                        </ul>
                    </div>
                    <div className="bride-desc text-right h-[50%] pt-15 preFadeIn">
                        <div className="icon-wrapper">
                            <Laptop className="size-10 ml-auto mr-[75px] mb-2" />
                        </div>
                        <h2 className="font-bold">
                            The Bride
                        </h2>
                        <ul>
                            <li>Kristine (sometimes Honey)</li>
                            <li>Software Engineer</li>
                            <li>Late bloomer tennis player & big reader</li>
                            <li>Spirit Animal - Otter</li>
                        </ul>
                    </div>
                </div>
                <div className="about-us-right w-[33%]">
                    <div className="bride-spacer h-[25%]">
                    </div>
                    <div className="bride-image-wrapper h-[75%]">
                        <img src={bride} alt="bride" className="rounded-2xl mx-auto h-full drop-shadow-[30px_30px_0px_rgb(255,255,255,0.75)] preFadeIn"/>
                    </div>
                </div>
            </div>
            <div className="about-us-content-mobile sm:hidden flex flex-col items-center pt-5 mb-10 preFadeIn">
                <div className="about-us-img-wrapper w-[80%] mb-5 preFadeIn">
                    <img src={flowers} alt="flowers" className="opacity-90 rounded-[50%] drop-shadow-lg sepia-25"/>
                </div>
                <div className="groom-desc-mobile text-center mb-5 preFadeIn">
                    <h2 className="font-bold">The Groom</h2>
                    <ul>
                        <li>Will (or William)</li>
                        <li>Medical Student</li>
                        <li>Loves tools, design, & anything handcrafted</li>
                        <li>Spirit Animal - Bear</li>
                    </ul>
                </div>
                <div className="brid-desc-mobile text-center preFadeIn">
                    <h2 className="font-bold">
                        The Bride
                    </h2>
                    <ul>
                        <li>Kristine (sometimes Honey)</li>
                        <li>Software Engineer</li>
                        <li>Late bloomer tennis player & big reader</li>
                        <li>Spirit Animal - Otter</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  }
  
  export default AboutUs