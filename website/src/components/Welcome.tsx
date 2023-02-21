import banner from './../assets/banner.jpg';


export default function Welcome(){


    return (
        <div className="m-8 flex flex-col justify-center align-center gap-4">
            <img src={banner} alt="banner" className='mx-auto rounded-md shadow-md' />
            <div className="">
                <h1 className="font-bold lg:text-5xl">Pixel Art Emojis </h1>
                <h1 className="font-regular lg:text-lg mt-3" >This project is open source pixel art of emojis. All pixel arts are made in 32x32 canvas. It has a MIT License so you can use it as you like. You can directly download these Pixel Art Emojis from this Website. </h1>
                <h1 className="font-regular lg:text-lg mt-3" >We welcome contributors warmly, we are encouraging everyone to contribute as much as possible. Even a little bit change of text is acceptable. Help us to grow this project. </h1>
                <h1 className="font-regular lg:text-lg mt-3" >Don't forget to give a Star 🌟.  </h1>
            </div>
        </div>
    )
}