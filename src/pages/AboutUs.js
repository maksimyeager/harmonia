import image from "./../assets/images/image.jpg"

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="title-1">About Us</h1>
                <p className="text-lg text-gray-600 font-medium">
                    Welcome to Harmonia, your number one source for all things guitar.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
                <img 
                    src={image}
                    alt="About Us" 
                    className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
                />
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-700 mb-4">
                        Founded in 2023, Harmonia has come a long way from its beginnings in a home office. When we first started out, our passion for providing the best guitars drove us to start our own business.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-4">
                        We aim to offer our customers a variety of the latest guitars. We've come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <p className="text-gray-700 mb-4">
                        We always keep an eye on the latest trends in the guitar industry and put our customers' wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the guitar industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;