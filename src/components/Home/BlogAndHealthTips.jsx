import React from 'react';

const BlogAndHealthTips = () => {
  const articles = [
    {
      title: 'How to Prevent Sports Injuries',
      excerpt: 'Learn about common sports injuries and effective prevention strategies...',
      link: '/blog/prevent-sports-injuries', // Link to full article
      image: '/images/sports-injury.jpg' // Replace with actual image paths
    },
    {
      title: 'Best Diet Plan for Athletes',
      excerpt: 'Discover the optimal diet for peak athletic performance...',
      link: '/blog/athlete-diet',
      image: '/images/athlete-diet.jpg'
    },
    {
      title: 'Latest Sports Medicine Research',
      excerpt: 'Stay updated on the cutting-edge advancements in sports medicine...',
      link: '/blog/sports-medicine-research',
      image: '/images/sports-medicine.jpg'
    },
    // ... more articles
  ];

  const videos = [
    {
      title: 'Expert Interview: Injury Prevention',
      videoUrl: 'https://www.youtube.com/embed/YOUR_ATHLETE_1_VIDEO_ID',
      thumbnail: '/images/injury-prevention-thumbnail.jpg'
    },
    {
      title: "Athlete's Diet Tips", // Corrected: Double quotes used here
      videoUrl: 'https://www.youtube.com/embed/YOUR_ATHLETE_2_VIDEO_ID',
      thumbnail: '/images/diet-tips-thumbnail.jpg'
    },
    // ... more videos
  ];

  return (
    <section className="section-class">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Blog & Health Tips</h2>

        {/* Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Articles & Tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-semibold text-xl mb-2">{article.title}</h4>
                  <p className="text-gray-600 line-clamp-3">{article.excerpt}</p> {/* Truncate text */}
                  <a
                    href={article.link}
                    className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Blogs & Expert Interviews */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Video Blogs & Interviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-video"> {/* Maintain aspect ratio */}
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                   {video.thumbnail && ( // Conditionally render thumbnail
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-semibold">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndHealthTips;