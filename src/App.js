
import Restraurant from "./components/basics/Restraurant";
import Navigation from "./components/basics/navigation";
import Footer from "./components/basics/footer";
import Comp from "./components/basics/component1";
import CustomerReviews from "./components/basics/CoutomerReviews";
import Subscription from "./components/basics/Subscription";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
  
     <>
      <Navigation/>
      <Comp/>
      <Subscription/>
     <Restraurant/>
     < CustomerReviews />
      <Footer/>
      </>
    
  );
};

export default App
