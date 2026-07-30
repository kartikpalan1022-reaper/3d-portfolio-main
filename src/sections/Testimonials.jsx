import { aboutMe } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
    return (
        <section id="aboutMe" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get to Know Me"
                    sub="👋 About Me"
                />
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">

                    {/* Left Side */}
                    <div className="flex justify-center">
                        <img src={aboutMe.profileImg} alt="Kartik Palan" className="w-[320px] md:w-[380px] rounded-3xl object-cover border border-[#2b2b2b] shadow-2xl transition-all duration-300 hover:scale-105"/>
                    </div>

                    {/* Right Side */}
                    <GlowCard card={aboutMe}>
                        <div className="space-y-8">
                            {/* Sections */}

                            {aboutMe.sections.map((section, index) => (

                                <div key={index}>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item, idx) => (

                                            <li key={idx} className="text-white-50 flex items-start gap-2">
                                                <span className="text-[#839CB5] mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                    </GlowCard>
                </div>
            </div>
        </section>
    );
};


export default Testimonials;
