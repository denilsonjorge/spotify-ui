import {
  ChevronLeft,
  ChevronRight,
  House,
  Library,
  MicVocal,
  MonitorSpeaker,
  Play,
  Repeat,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  SquarePlay,
  Volume2,
  WrapText,
} from "lucide-react";

function App() {
  return (
    <div className="h-screen flex flex-col text-white">
      <div className="flex flex-1">
        <aside className="w-48 min-w-48 max-w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
              href=""
            >
              <House /> Home
            </a>
            <a
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
              href=""
            >
              <Search /> Search
            </a>
            <a
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
              href=""
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="flex overflow-y-auto flex-col gap-2 mt-6 pt-6 border-t border-zinc-800">
            <a className="text-sm text-zinc-400 hover:text-zinc-200" href="">
              My Playlist
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-200" href="">
              Eminem
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-200" href="">
              MHRAP
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-200" href="">
              Orochi
            </a>
          </nav>
        </aside>
        <main className="flex-1 bg-zinc-800 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/20 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-5">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 group  hover:bg-white/20 items-center flex gap-4 rounded overflow-hidden">
              <img
                src="/albun.png"
                alt="capa do albun"
                width={70}
                height={70}
              />
              <strong>Cor D'Água</strong>
              <button className="bg-green-400 text-black ml-auto mr-8 rounded-full h-12 w-12 flex justify-center items-center pl-auto invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group  hover:bg-white/20 items-center flex gap-4 rounded overflow-hidden">
              <img
                src="/albun.png"
                alt="capa do albun"
                width={70}
                height={70}
              />
              <strong>Cor D'Água</strong>
              <button className="bg-green-400 text-black ml-auto mr-8 rounded-full h-12 w-12 flex justify-center items-center pl-auto invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group  hover:bg-white/20 items-center flex gap-4 rounded overflow-hidden">
              <img
                src="/albun.png"
                alt="capa do albun"
                width={70}
                height={70}
              />
              <strong>Cor D'Água</strong>
              <button className="bg-green-400 text-black ml-auto mr-8 rounded-full h-12 w-12 flex justify-center items-center pl-auto invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group  hover:bg-white/20 items-center flex gap-4 rounded overflow-hidden">
              <img
                src="/albun.png"
                alt="capa do albun"
                width={70}
                height={70}
              />
              <strong>Cor D'Água</strong>
              <button className="bg-green-400 text-black ml-auto mr-8 rounded-full h-12 w-12 flex justify-center items-center pl-auto invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group  hover:bg-white/20 items-center flex gap-4 rounded overflow-hidden">
              <img
                src="/albun.png"
                alt="capa do albun"
                width={70}
                height={70}
              />
              <strong>Cor D'Água</strong>
              <button className="bg-green-400 text-black ml-auto mr-8 rounded-full h-12 w-12 flex justify-center items-center pl-auto invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group  hover:bg-white/20 items-center flex gap-4 rounded overflow-hidden">
              <img
                src="/albun.png"
                alt="capa do albun"
                width={70}
                height={70}
              />
              <strong>Cor D'Água</strong>
              <button className="bg-green-400 text-black ml-auto mr-8 rounded-full h-12 w-12 flex justify-center items-center pl-auto invisible group-hover:visible">
                <Play/>
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Made for Denilson Jorge</h1>
            <div className="grid grid-cols-6 mt-4 gap-4">
              <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-sm hover:bg-white/10">
              <img src="/albun.png" className="w-full" width={120} height={120} alt="" />  
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girls in red and more</span>
             </a>
             <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-sm hover:bg-white/10">
              <img src="/albun.png" className="w-full" width={120} height={120} alt="" />  
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girls in red and more</span>
             </a>
             <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-sm hover:bg-white/10">
              <img src="/albun.png" className="w-full" width={120} height={120} alt="" />  
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girls in red and more</span>
             </a>
             <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-sm hover:bg-white/10">
              <img src="/albun.png" className="w-full" width={120} height={120} alt="" />  
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girls in red and more</span>
             </a>
             <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-sm hover:bg-white/10">
              <img src="/albun.png" className="w-full" width={120} height={120} alt="" />  
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girls in red and more</span>
             </a>
             <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-sm hover:bg-white/10">
              <img src="/albun.png" className="w-full" width={120} height={120} alt="" />  
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girls in red and more</span>
             </a>
            </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t flex justify-between items-center border-zinc-700 p-6">
       <div className="flex items gap-3">
        <img src="/albun.png"  width={56} height={56} alt="" />
        <div className="flex flex-col">
          <stron className="font-normal">Rope</stron>
          <span className="text-xs text-zinc-400">Foo Fighters</span>
        </div>
       </div>
       <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <Shuffle className="hover:text-green-500 cursor-pointer"/>
          <SkipBack className="hover:text-green-500 cursor-pointer"/>
          <button className="w-10 h-10  flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
          <Play/>
          </button>
          <SkipForward className="hover:text-green-500 cursor-pointer" />
          <Repeat className="hover:text-green-500 cursor-pointer"/>
        </div>
       </div>
       <div>
        <div className="flex gap-3">
        <SquarePlay className="hover:text-green-500 cursor-pointer" />
        <MicVocal className="hover:text-green-500 cursor-pointer" />
        <WrapText className="hover:text-green-500 cursor-pointer" />
        <MonitorSpeaker className="hover:text-green-500 cursor-pointer" />
        <div className="flex justify-center items-center gap-1 cursor-pointer">
        <Volume2 />
        <div className="w-16 h-1 rounded bg-zinc-500 relative">
          <div className="w-[50%] rounded-full h-full bg-white "></div>
        </div>
        </div>
        </div>
       </div>
      </footer>
    </div>
  );
}

export default App;
