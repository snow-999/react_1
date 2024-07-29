import logo from '../../img/img.svg'

export default function Home() {
    return <>
        <div className="Home flex justify-center items-center flex-col text-center">
            <img className='w-1/4' src={logo} alt="HomeIcon" />
            <h1 className="my-4">START FRAMEWORK</h1>
            <div className="spliter my-4 w-1/2 flex justify-center items-center gap-5">
                <div className="w-1/6 bg-white h-1 text-center"></div>
                <i className="fa-solid fa-star"></i>
                <div className="w-1/6 bg-white h-1 text-center"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>

    </>
}
