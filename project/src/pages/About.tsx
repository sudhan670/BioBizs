
export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">About BioBiz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              BioBiz is a pioneering division of Energy Alternatives India (EAI), dedicated to
              transforming India's bioeconomy landscape. Our mission is to harness the nation's
              rich biodiversity and abundant biomass resources to create sustainable solutions
              and business opportunities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work closely with diverse stakeholders including farmers, rural communities,
              industries, entrepreneurs, startups, and investors to develop innovative
              bio-based solutions and create value chains that benefit all participants.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Core Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm mr-3 mt-1">1</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Sustainability First</h3>
                  <p className="text-gray-600">Promoting environmentally conscious solutions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm mr-3 mt-1">2</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Innovation</h3>
                  <p className="text-gray-600">Driving technological advancement in bioeconomy</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm mr-3 mt-1">3</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Collaboration</h3>
                  <p className="text-gray-600">Building strong partnerships across sectors</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}