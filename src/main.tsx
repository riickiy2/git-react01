import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Info from "./components/Info"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col h h-screen bg-[#F4FBFF]">
      <Header />
      <main className="flex-1 max-w-250 w-full m-auto">
        <Filter
          title="Busque o conteúdo que deseja assistir hoje"
          placeholder="Busque seu curso"
        />

        <div className="bg-white roundet-md py-2 mt-3 ">
          <p className="text-[#00A2F7] font-bold text-center">Os cursos mais buscados</p>

          <div className="grid grid-cols-5 gap-2">
            <Card title= "Fundamentos do React.Js " img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"/>
            <Card title= "Fundamentos do Node.Js" img="./node.png"/>
            <Card title= "Fundamentos do Next.Js" img="./Next.png"/>
            <Card title= "Fundamentos do TailwindCSS" img="./TailwindCSS.png"/>
            <Card title= "Fundamentos do Vue.Js" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"/>
            
          </div>
        </div>
        <Info/>
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  </StrictMode>,
);
