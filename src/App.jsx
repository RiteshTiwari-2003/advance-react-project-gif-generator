import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return <div classname="w-full h-screen flex flex-col background relative overflow-x-hidden items-center"><h1 classname=" bg-white rounded-lg w-11/12 text-center mt-[40px]   px-10 py-2 text-4xl font-bold ">Random GIF</h1>
  <div classname="flex flex-col w-full items-center gap-y-10 mt-[30px]">
    <Random/>
    <Tag/>
  </div>
  </div>;
}
