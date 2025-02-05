import Header from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import AuthHandler from "@/handlers/auth-handlers"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
  return (
    <div className="w-full">
        {/*handler to store the user data*/}
        <AuthHandler/>
        <Header/>
          
        <Outlet/>

        <Footer/>
        
    </div>
  )
}
