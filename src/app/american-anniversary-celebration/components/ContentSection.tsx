interface ContentSectionProps {
  title: string;
  description: string;
  features?: string[];
}

export default function ContentSection({ title, description, features = [] }: ContentSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-black w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {title}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        {features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Feature Cards */}
            {features.map((feature, index) => {
              // Alternate card colors for visual interest
              const colors = [
                {
                  bg: "from-gray-900 to-blue-900/50",
                  accent: "bg-red-600",
                  hover: "hover:shadow-blue-500/20"
                },
                {
                  bg: "from-gray-900 to-red-900/50",
                  accent: "bg-blue-600",
                  hover: "hover:shadow-red-500/20"
                },
                {
                  bg: "from-gray-900 to-purple-900/50",
                  accent: "bg-white text-blue-600",
                  hover: "hover:shadow-purple-500/20"
                }
              ];
              
              const colorSet = colors[index % colors.length];
              
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${colorSet.bg} rounded-2xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl ${colorSet.hover}`}
                >
                  <div className={`w-16 h-16 ${colorSet.accent} rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${colorSet.accent.includes('white') ? '' : 'text-white'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">
                    {feature.split(':')[0] || feature}
                  </h3>
                  {feature.includes(':') && (
                    <p className="text-white/70">
                      {feature.split(':')[1].trim()}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
} 