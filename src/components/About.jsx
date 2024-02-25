import { MaskContainer } from "../components/ui/svg-mask-effect";

const About = () => {
  return (
    <div className="h-[70vh]  w-full flex items-center justify-center overflow-hidden bg-[#0F172A] select-none">
        <MaskContainer
          revealText={
            <p className="w-full mx-auto px-16 text-slate-200 text-center text-5xl font-bold">
              Greetings! I'm a <span className="text-orange-400">frontend</span> wizard who brings designs and ideas
              to life with a blend of creativity and code.
            </p>
          }
          className="h-screen"
        >
        I'm not quite Tony Stark, but I can code up frontend like Iron Man builds his suits (minus the explosions, hopefully).
        </MaskContainer>
      </div>
  )
}

export default About
