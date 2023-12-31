
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import WhyUs from './pages/whyUs/whyUs';
import Research from './pages/research/research';
import Results from './pages/results/results';
import Faq from './pages/faq/faq';
import Pocas from './pages/pocas/Pocas';
import Gate from './pages/gate/Gate';
import Lisa from './pages/lisa/Lisa';
import Prepare from './pages/prepare/prepare';
import Online from './pages/online/Online';
import Onsite from './pages/onsite/Onsite';
import TestFormat from './pages/test_format/TestFormat';
import Institutions from './pages/institutions/Institutions';
import About from './pages/about_us/About';
import Signup from './pages/student/signup/signup';
import Success from './pages/institution/success/Success';
import AdditionalInformation from './pages/institution/additional-information/AdditionalInformation';
import Done from './pages/institution/done/Done';
import PersonalInformation from './pages/institution/personal-information/PersonalInformation';
import UsernamePassword from './pages/institution/user-pass/UsernamePassword';
import AdditionalData from './pages/student/additionaldata/AdditionalData';
import PersonalData from './pages/student/personaldata/personaldata';
import UserPass from './pages/student/username-password/UserPass';
import TimeDate from './pages/student/timedate/TimeDate';
import PhotoValidation from './pages/student/photovalidation/PhotoValidation';
import PaymentPage from './pages/student/paymentpage/PaymentPage';
import PaymentCompletion from './pages/student/paymentcompletion/PaymentCompletion';
import OnlineOfline from './pages/student/onlineofline/OnlineOfline';
import ReviewSubmit from './pages/student/reviewsubmit/ReviewSubmit';
import Cart from './pages/student/cart/cart';
import StudentDashboard from './pages/student/dashboard/dashboard';
import UniversityDashboard from './pages/institution/dashboard/UniversityDashboard';
import Login from './pages/login/login';
import Payment from './pages/student/payment/Payment';
import Review from './pages/student/review/review';
import PurchaseTest from './pages/student/purchasetest/PurchaseTest';
import { RegisterContext } from './auth/Register';
import ReviewInstitution from './pages/institution/review-institution/ReviewInstitution';
import StudentSuccess from './pages/student/success/StudentSuccess';
import Choose from './pages/choose/Choose';




function App() {

  return (
    <div className="App">



     <Router>
     <RegisterContext>
      <Routes>
  
     
        <Route path='/gate' element={<Gate/>}/>
        <Route path='/lisa' element={<Lisa/>}/>
        <Route path='/online' element={<Online/>}/>
        <Route path='/onsite' element={<Onsite/>}/>
        <Route path='/prepare' element={<Prepare/>}/>
        <Route path='/pocas' element={<Pocas/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/institutions' element={<Institutions/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path='/' element={<TestFormat/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/whyUs' element={<WhyUs/>}/>
        <Route path='/institution/additional-information' element={<AdditionalInformation/>}/>
        <Route path='/institution/user-pass' element={<UsernamePassword/>}/>
        <Route path='/institution/university-dashboard' element={<UniversityDashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/institution/personal-information' element={<PersonalInformation/>}/>
        <Route path='/student/signup' element={<Signup/>}/>
        <Route path='/student/student-dashboard' element={<StudentDashboard/>}/>
        <Route path='/student/additionaldata' element={<AdditionalData/>}/>
        <Route path='/student/timedate' element={<TimeDate/>}/>
        <Route path='/student/cart' element={<Cart/>}/>
        <Route path='/student/personaldata' element={<PersonalData/>}/>
        <Route path='/student/onlineofline' element={<OnlineOfline/>}/>
        <Route path='/student/photovalidation' element={<PhotoValidation/>}/>
        <Route path='/student/paymentpage' element={<PaymentPage/>}/>
        <Route path='/student/purchase-test' element={<PurchaseTest/>}/>
        <Route path='/student/paymentcompletion' element={<PaymentCompletion/>}/>
        <Route path='/student/payment' element={<Payment/>}/>
        <Route path='/student/username-password' element={<UserPass/>}/>
        <Route path='/student/reviewsubmit' element={<ReviewSubmit/>}/>
        <Route path='/student/review' element={<Review/>}/>
        <Route path='/student/success' element={<StudentSuccess/>}/>
        <Route path='/institution/success' element={<Success/>}/>

        <Route path='/institution/review-institution' element={<ReviewInstitution/>}/>
        <Route path='/institution/done' element={<Done/>}/>
      
      
      </Routes>
      </RegisterContext>
     </Router>
   
    </div>
  );
}

export default App;
