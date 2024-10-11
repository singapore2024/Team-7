export default function EducationPage() {
    return (
      <div className="container mx-auto py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Learn About Sustainable Gardening</h2>
  
          {/* YouTube Video */}
            <div style={{width:'100%'}} className="mt-4">
                <iframe
                    src="https://www.youtube.com/embed/XTMrfLJUcDs"
                    title="Sustainable Gardening Tips"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
  
          {/* Informational content */}
          <p className="text-lg mt-4">
            This video will guide you through the basics of sustainable gardening, from choosing the right soil to watering techniques.
            Learn how to maintain a healthy garden while being eco-friendly!
          </p>
        </div>
      </div>
    );
  }
  