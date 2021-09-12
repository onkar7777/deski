import logo1 from '../../assets/inf1.png'
import logo2 from '../../assets/02.png'
import logo3 from '../../assets/03.png'

const info = [
    {
        logo:logo1,
        classname:"bg-01",
        heading:"Core Wp",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat enim, nesciunt perferendis !"
    },
    {
        logo:logo2,
        classname:"bg-02",
        heading:"Easy Customizable",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat enim, nesciunt perferendis !"
    },
    {
        logo:logo3,
        classname:"bg-03",
        heading:"Fast Support",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat enim, nesciunt perferendis !"
    }
]
const Componennt = ({data})=>{
    let {logo, classname, heading, text} = data;
    return (
        <div className="box" >
        <div className={`logobox ${classname}`} >
            <img src={logo} alt="" />
        </div>
        <h2>{heading}</h2>
        <p>{text}</p>
        </div>
    )
}

export const AboveFooter = ()=>{
    return (
        <>
            <div className="info" >
               {
                   info.map((item, i)=> <Componennt data={item} key={i} /> )
               }
            </div>
        </>
    )
}