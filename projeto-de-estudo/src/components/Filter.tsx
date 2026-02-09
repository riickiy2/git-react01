import { Search } from "lucide-react";

type Filterprops = {
    title : string;
    placeholder?: string 
}
{/* O ponto de interrogação no final faz dele ser opcional */}
function Filter({title, placeholder}: Filterprops) {
  return (
    <div className="flex flex-col items-center">
      <p className=" font-bold text-[#00A2F7] text-xl mt-10">{title}</p>
      <p className="text-sm text-[#09A3FB] ">
        Conteúdo exclusivo todos os dias
      </p>

      <div className="flex items-center mt-2">
        <input
          type="text"
          placeholder={placeholder}
          className="bg=white border border-[#F2F2F2] rounded-md w-153.75 h-9.25 text-sm px-2"
        />{/*===Area de pesquisa===*/}
        
        <div className="h-8.75 w-8.75 flex justify-center items-center rounded-md bg-[#E1F4FF] cursor-pointer"> {/*===Área de tráz da Lupa===*/}
          
          <Search size={16} className="text-[#00A2F7] " /> {/*===Lupa=== */}
        </div>
      </div>
    </div>
  );
}

export default Filter;
