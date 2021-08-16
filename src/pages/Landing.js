
const Home = () => {
    return (
        <>
           <div className ="hero py-16">
    <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
            <h1 className="py-3 text-3xl md:text-5xl">Welcome to <em className="text-blue-600">Landkit.</em><br></br>Develop Anything.</h1>
            <p className="py-2 text-gray-400 text-lg font-medium">Build a beautiful,modern website with flexible</p>
            <p className="text-gray-400 text-lg font-medium">Bootstarap components built from scratch.</p>
            <button className=" px-9 py-3 rounded-lg text-white font-bold mt-4 bg-blue-600 hover:bg-yellow-600">View All Pages  ➡ </button>
            <button className=" mt-16 px-9 py-3 rounded-lg text-blue-600 font-bold ml-2 bg-gray-300 hover:bg-yellow-600">Documentation</button>
        </div>
        <div className="w-1/2">
            <img className="w-4/5" src={"../images/Image1.png"} alt="Meeting Image" />
        </div>

    </div>
    <div className= " mt-8 container mx-auto flex items-center justify-between">
            <div className="w-1/3">
                <h2 className="mb-6 text-lg font-medium">Built for Developers</h2>
                <p className="text-gray-400">Landkit is built to make your life easier.</p>
                <p className="text-gray-400">Vaiables,build tooling,documentation<br></br>and reusable components.</p>
            </div>
            <div className="w-1/3">
                <h2 className="mb-6 text-lg font-medium">Design to be modern</h2>
                <p className="text-gray-400">Designed with the latest design trends in<br></br>
              mind.Landkit feels modern,minimal<br></br> and beautiful.</p>
            </div>
            <div className="w-1/3">
                <h2 className="mb-6 text-lg font-medium">Documentation for everything</h2>
                <p className="text-gray-400">Landkit is built to make your life easier.</p>
                <p className="text-gray-400">Vaiables,build tooling,documentation<br></br>and reusable components.</p>
            </div>
    </div>
    <div className= "mt-8 container mx-auto flex items-center justify-between">
        <div className="w-1/6">
            <img  src="./images/Airbnb-logo.png" alt="Airbnb Logo" />
        </div>
        <div className="w-1/6 px-2">
            <img src="./images/coinbase-logo.png" alt="Coinbase Logo" />
        </div>
        <div className="w-1/6 px-2">
            <img src="./images/dribbble-logo.png" alt="Dribbble Logo" />
        </div>
        <div className="w-1/6 px-2">
            <img src="./images/instagram-logo.png" alt="Insta Logo" />
        </div>
        <div className="w-1/6 px-2">
            <img src="./images/netfix-logo.png" alt="Netflix Logo" />
        </div>
        <div className="w-1/6">
            <img src="./images/printerest.png" alt="Printerest Logo" />
        </div>

    </div>
    <div className= "mt-8 container mx-auto flex items-center justify-between bg-gray-50">
        <div className="w-1/2">
        <img src="./images/loginImage2.png" alt="Login Image" />
        </div>
        <div className="w-1/2">
                <h1 className="text-lg font-medium">The most useful resource
                <h1 className="text-green-500 text-lg font-medium">ever created for dev|</h1></h1>
                <p className="mt-4 text-gray-400">Using Landkit to build your site means never worrying<br></br>about designing another page or cross browser<br></br>compatibility. Our ever growing library of components<br></br> and pre-designed layouts will make your life easier.</p>
                <ul className="mt-2  divide x-2">
                    <li className="text-green-600 list-disc">Lifetime Updates</li>
                    <li className="mt-2 text-green-600 list-disc">Tech Support</li>
                    <li className="mt-2 text-green-600 list-disc">Tech Support</li>
                    <li className="mt-2 text-green-600 list-disc">Integration ready</li>
                </ul>

        </div>
        </div>
    <div className="container mx-auto flex items-center justify-between  mt-16">
        <div className="w-1/2">
            <h1 className="text-lg font-medium">We have lots of experience<h1 className="text-blue-600">building Bootstrap themes.</h1>
            </h1>
            <p className="mt-2 text-gray-400">We've built well over adonen bootstrap themes and sold tens <br/> of thousands of copies.</p>
            <img  className="float-left mt-3 px-2" style={{height:20}} src="./images/rev.png" alt="reverse icon" />
           <div className="px-4">
            <h1 className="mt-2 text-lg">Bootstrap users since the beginning</h1>
                <p className="mt-2 text-gray-400 ">We've been developing with bootstrap since it was <br />publicly relased in 2011.</p>
           </div>
           <img  className="float-left mt-3 px-2" style={{height:20}} src="./images/code-tags.png" alt="code-tags" />
        <div  className="px-4">
        <h1 className="mt-2 text-lg">Deep understanding of Bootstrap</h1>
            <p className="mt-2 text-gray-400">We have watched Bootstrap grow up over the years and <br />understand it better than almost anyone.</p>
        </div>
        </div>
    <div className="w-1/2">
        <img src="./images/graph.png" alt="Graph Image" />
    </div>
    </div>

 
</div>
        </>
    )
}

export default Home;
