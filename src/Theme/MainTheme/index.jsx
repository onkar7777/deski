import { Header } from '../../component/ThemeComponent/Header'
import { Footer } from '../../component/ThemeComponent/Footer'
export const MainTheme = ({children})=>{
    return (
        <>
        <Header />
        { children }
        <Footer />
        </>
    )
}

