function NewsUpdates() {
  const news = [
    {
      title: 'New MRI Machine Installed',
      date: 'Nov 1, 2024',
      description: 'We are excited to offer enhanced diagnostic capabilities with our new state-of-the-art MRI machine.',
    },
    {
      title: 'Flu Vaccination Drive',
      date: 'Oct 15, 2024',
      description: 'Get vaccinated this season. Join our flu vaccination drive for all ages.',
    },
    {
      title: 'Wellness Webinar Series',
      date: 'Sep 30, 2024',
      description: 'Attend free online wellness webinars conducted by our health experts.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">News & Updates</h2>
        <p className="text-lg text-gray-600 mt-2">Stay informed about the latest hospital news and events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsUpdates;
