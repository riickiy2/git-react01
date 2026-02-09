const Info = () => {
  function mostrarInfo() {
    alert("Estamos trabalhando nisso ainda. Aguarde...");
  }

  return (
    <div className="mt-6 flex w-full justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[#00A2F7]">Pratique com projetos reais</p>
        <p className="w-175 text-sm text-[#09A3FB]">
          Em vez de apenas ensinar teoria, focamos em código real para inspirar
          seu próximo projeto. Aprender não precisa ser chato.
        </p>
        <button
          className="w-37.5 h-8 bg-[#00A2F7] text-white rounded-md cursor-pointer"
          onClick={mostrarInfo}
        >
          Ver biblioteca
        </button>
      </div>

      <div className="flex flex-col gap-1 text-[#00A2F7] bg-white rounded-md p-2">
        <p className="font-bold text-md">Curso rápido</p>
        <p className="text-sm">Cursos práticos de curta duração</p>
        <button
          className="w-36 border py-0.5 rounded-md cursor-pointer"
          onClick={mostrarInfo}
        >
          Assistir
        </button>
      </div>
    </div>
  );
};

export default Info;
