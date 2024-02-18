import { MaskContainer } from "../components/ui/svg-mask-effect";

const About = () => {
  return (
    <div className="h-[70vh]  w-full flex items-center justify-center overflow-hidden bg-[#0F172A] select-none">
        <MaskContainer
          revealText={
            <p className="w-full mx-auto px-16 text-slate-200 text-center text-5xl font-bold">
              Greetings! I'm a <span className="text-orange-400">frontend</span> wizard who brings designs
              to life with a blend of creativity and code.
            </p>
          }
          className="h-screen"
        >
          Greetings! I'm a frontend wizard who brings good code from
          google and blend it into my code.
        </MaskContainer>
      </div>
  )
}

export default About
