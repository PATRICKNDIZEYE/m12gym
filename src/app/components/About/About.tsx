import { Parallax } from '../Parallax/Parallax'

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <Parallax>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About MU12 Fitness</h2>
            <p className="text-gray-600 mb-6">
              Located at NYABYONDO (kwa Kirangi), MU12 Fitness Gym is more than just a gym – 
              it's a community dedicated to transforming lives through fitness. Our 
              state-of-the-art facility offers the latest in exercise equipment and 
              expert guidance to help you achieve your fitness goals.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're just starting your fitness journey or you're an experienced 
              athlete, our certified trainers provide personalized attention and 
              support to ensure you get the most out of every workout.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                <p className="text-gray-600">Professional guidance for optimal results</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
                <p className="text-gray-600">Latest fitness technology and machines</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Flexible Hours</h3>
                <p className="text-gray-600">Open daily with convenient timing</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
} 