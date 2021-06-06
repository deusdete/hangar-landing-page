import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainFeature from "./components/MainFeature";
import MainServices from "./components/MainServices";
import Portfolio from './components/Portfolio'

export default function Home() {
  return (
    <div>
      <Header/>
      <MainFeature/>
      <MainServices/>
      <Portfolio/>
      <BlogPosts/>
      <Footer/>
    </div>
  )
}
