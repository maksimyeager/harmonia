import React from 'react';

import image1 from "./../assets/images/image-1.jpg"
import image2 from "./../assets/images/image-2.jpg"
import image3 from "./../assets/images/image-3.jpg"
import image4 from "./../assets/images/image-4.webp"
import image5 from "./../assets/images/image-5.jpg"
import image6 from "./../assets/images/image-6.webp"

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: "New Guitar Models Released",
            date: "2024-01-15",
            description: "We are excited to announce the release of our new guitar models. Check them out in our store!",
            image: image2
        },
        {
            id: 2,
            title: "Spring Sale Starts Now",
            date: "2024-03-10",
            description: "Our spring sale is live! Get amazing discounts on selected guitars.",
            image: image1
        },
        {
            id: 3,
            title: "Exclusive Interview with Famous Guitarist",
            date: "2024-04-05",
            description: "Read our exclusive interview with the famous guitarist John Doe.",
            image: image4
        },
        {
            id: 4,
            title: "Guitar Maintenance Tips",
            date: "2024-05-20",
            description: "Learn how to maintain your guitar with our expert tips and tricks.",
            image: image3
        },
        {
            id: 5,
            title: "Upcoming Guitar Workshops",
            date: "2024-06-15",
            description: "Join our upcoming workshops to improve your guitar skills.",
            image: image5
        },
        {
            id: 6,
            title: "Customer Appreciation Day",
            date: "2024-07-01",
            description: "We are celebrating Customer Appreciation Day with special events and discounts.",
            image: image6
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="title-1">News</h1>
                <p className="text-lg text-gray-600 font-medium">
                    Stay updated with the latest news from Harmonia.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.reverse().map(news => (
                    <div key={news.id} className="bg-white border rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
                            <p className="text-gray-500 mb-2">{news.date}</p>
                            <p className="text-gray-700 mb-4">{news.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;