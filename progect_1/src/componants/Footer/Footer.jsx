import style from './footer.module.css'
export default function Footer() {
    return <>
        <footer className="flex p-5 md:flex-row gap-5 flex-col text-center text-white footer justify-evenly">
            <div className="">
                <h2 className={style.main}>LOCATION</h2>
                <p className='my-2'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div>
                <h2 className={style.main}>AROUND THE WEB</h2>
                <div className="iconGroup my-3 flex justify-center items-center">
                    <div className="icon flex justify-center items-center">
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="icon flex justify-center items-center">
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="icon flex justify-center items-center">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="icon flex justify-center items-center">
                        <i className="fa-solid fa-globe"></i>
                    </div>
                </div>
            </div>
            <div>
                <h2 className={style.main}>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </footer>
    </>
}
