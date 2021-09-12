import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { navPath } from '../../utils/constant'

export const Header = ()=>{

    return (
    
          <div className="header" >
            <div className="logo" >
                <img src={ logo } alt="logo" />
            </div>
            <div className="navigation" >
                <nav>
                   {
                       navPath.map((item)=> <Link to={item.path} className={item.classname} key={item.name} > {item.name} </Link> )
                   }
                </nav>
            </div>
            <div className="download-btn" >
                <button>Download  </button>
            </div>
        </div>

       
    )
}