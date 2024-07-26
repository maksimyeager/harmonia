const Banner = () => {
    return (
        <div className="relative banner flex items-center justify-center">
            <div className="banner--overlay w-full h-full absolute z-10 top-0 left-0 bottom-0 right-0"></div>
            <div className="flex justify-center h-full py-4">
                <div className="container text-center">
                    <h1 className="absolute z-10 top-1/2 translate-minus-y-1/2 left-0 bottom-0 right-0 text-white text-5xl lg:text-6xl font-medium">
                        Discover the Harmony with Harmonia
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
