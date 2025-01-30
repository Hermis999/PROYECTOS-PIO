import MangaForm from "./components/MangaForm"
import Mangasindex from "./components/Mangasindex"
import HeaderApp from "./components/Layout/HeaderApp"
import FooterApp from "./components/Layout/FooterApp"
import NavbarApp from "./components/Layout/NavbarApp"


function App() {
  return (
    <>
      <HeaderApp/>
      <NavbarApp/>
      <div className="bg-zinc-800  h-screen text-white flex  items-center justify-center">
        <div className="bg-gray-950 p-4 w-2/5">
              <h1 className="text-center font-bold text-4x1 my-2">
                  APP Activities
              </h1>
              <MangaForm/>
              <Mangasindex/>
        </div>
      </div>
      <FooterApp/>
      
    </>
  )
}
export default App
