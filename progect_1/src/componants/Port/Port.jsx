
import pic1 from '../../img/poert1.png'
import pic2 from '../../img/port2.png'
import pic3 from '../../img/port3.png'
import style from './Port.module.css'
export default function Port() {
    return <>
        <section className="Port flex gap-4 flex-col items-center">
            <div className="title mt-5 w-1/2 flex justify-center items-center flex-col">
                <h2 className={`text-4xl ${style.color} ${style.mainfont}`}>PORTFOLIO COMPONENT</h2>
                <div className={`spliter mt-5 w-full flex justify-center items-center gap-5 ${style.color}`}>
                    <div className={`w-1/12 h-1 text-center ${style.bgMain}`}></div>
                    <i className="fa-solid fa-star"></i>
                    <div className={`w-1/12 h-1 text-center ${style.bgMain}`}></div>
                </div>
            </div>
            <div className="myWorks gap-4 my-4  w-11/12 flex justify-evenly items-center flex-wrap">
                <div className={`sm:w-full md:w-96 myWork relative`}>
                    <img className={`${style.imgWidth} rounded-md`} src={pic1} alt="work1" />
                    <div className="layer justify-center items-center flex">
                        <i className={`fa-solid fa-plus text-white ${style.iconSize}`}></i>
                    </div>
                </div>
                <div className={`sm:w-full md:w-96 myWork relative`}>
                    <img className={`${style.imgWidth} rounded-md`} src={pic2} alt="work1" />
                    <div className="layer justify-center items-center flex">
                        <i className={`fa-solid fa-plus text-white ${style.iconSize}`}></i>
                    </div>
                </div>
                <div className={`sm:w-full md:w-96 myWork relative`}>
                    <img className={`${style.imgWidth} rounded-md`} src={pic3} alt="work1" />
                    <div className="layer justify-center items-center flex">
                        <i className={`fa-solid fa-plus text-white ${style.iconSize}`}></i>
                    </div>
                </div>
                <div className={`sm:w-full md:w-96 myWork relative`}>
                    <img className={`${style.imgWidth} rounded-md`} src={pic1} alt="work1" />
                    <div className="layer justify-center items-center flex">
                        <i className={`fa-solid fa-plus text-white ${style.iconSize}`}></i>
                    </div>
                </div>
                <div className={`sm:w-full md:w-96 myWork relative`}>
                    <img className={`${style.imgWidth} rounded-md`} src={pic2} alt="work1" />
                    <div className="layer justify-center items-center flex">
                        <i className={`fa-solid fa-plus text-white ${style.iconSize}`}></i>
                    </div>
                </div>
                <div className={`sm:w-full md:w-96 myWork relative`}>
                    <img className={`${style.imgWidth} rounded-md`} src={pic3} alt="work1" />
                    <div className="layer justify-center items-center flex">
                        <i className={`fa-solid fa-plus text-white ${style.iconSize}`}></i>
                    </div>
                </div>
            </div>
        </section >

    </>
}
