import Header from "@/components/Header/Header";
import HOME from "@/components/Home/Home";
import ABOUT from "@/components/About/About";
import SKILL from "@/components/Skill/Skill";
import Footer from "@/components/conatact/contact";
export default function Home() {
  return (
    <div className="">
     <Header></Header>
     <HOME></HOME>
     <ABOUT></ABOUT>
     <SKILL></SKILL>
     <Footer></Footer>
    </div>
  );
}
