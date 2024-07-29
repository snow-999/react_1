import style from './style.module.css'

export default function Contact() {
    return <>
        <div className="title mt-5 flex justify-center items-center flex-col">
            <h2 className={`text-4xl ${style.color} ${style.mainfont}`}>CONATCT SECTION</h2>
            <div className={`spliter mt-5 w-full flex justify-center items-center gap-5 ${style.color}`}>
                <div className={`w-1/12 h-1 text-center ${style.bgMain}`}></div>
                <i className="fa-solid fa-star"></i>
                <div className={`w-1/12 h-1 text-center ${style.bgMain}`}></div>
            </div>
        </div>
        <section className={`Contact ${style.height} flex flex-col justify-center items-center`}>
            <div className="Form  w-1/2 my-6">
                <div className='border-b-2 h-12 rounded-md w-full'>
                    <input className='w-full h-full' type="text" name="userName" id="userName" placeholder="userName" />
                </div>
                <div className='border-b-2 rounded-md h-12 w-full'>
                    <input className='w-full h-full' type="number" name="userAge" id="userAge" placeholder="userAge" />
                </div>
                <div className='border-b-2 rounded-md h-12 w-full'>
                    <input className='w-full h-full' type="email" name="userEmail" id="userEmail" placeholder="userEmail" />
                </div>
                <div className='border-b-2 rounded-md h-12 w-full'>
                    <input className='w-full h-full' type="password" name="userPass" id="userPass" placeholder="userPass" />
                </div>
                <button className={`my-4 text-white ${style.btnBG} p-2 rounded-md`}>Send Message</button>
            </div>
        </section>
    </>
}
