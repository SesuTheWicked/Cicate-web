import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import './style.css'
import block1 from '../../assets/block-1.png'
import block2 from '../../assets/block-2.png'
import block3 from '../../assets/block-3.png'
import block4 from '../../assets/block-4.png'
import block5 from '../../assets/block-5.png'
import cross from '../../assets/group-678.png'
import xicon from '../../assets/xicon.svg'
import zicon from '../../assets/zicon.svg'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import gradient from '../../assets/gradient.svg'
import Footer from '../../components/containers/footer/footer'

const TestFormat = () => {
  return (
    <div className='wrapper_main'>
      <div>
    <Navbar/>
      </div>
      <div className='top_boxone'>
     <div className='new1'>
      
    
     </div>
      </div>

      <div className='top_abiities'>
        <div className='abilities'>Test Your Abilities <br />
to Success!</div>
      </div>

      <div className='top_heades'>
        <div className='grey_heades'>Discover our innovative test formats <br /> designed to assess your competencies and <br />unlock exciting opportunities</div>
      </div>
      <div className='top_bl'>
        <a href="/gate" className='bl_black'>GATE TEST</a>
        <a href="/gate" className='bl_green'>POCAS TEST</a>
        <a href="/gate" className='bl_black'>LISA TEST</a>
      </div>

      <div className='top_empower'>
        <div className='empower_box'></div>
       
        <div className=''>
            <p className='empower'>Empowering <br />
Individuals With <br />
Reliable Tests</p>
            <p className='cicate_offerz'>CICATE offers cutting-edge testing solutions like <br />
            G.A.T.E and CCA, ensuring accurate evaluations <br />
             for your success. Discover how our products can <br />
              propel you towards your goals.</p>
        </div>
      </div>

    <div className='top_our'>
        <div className='our_test'>Our Test Products</div>
    </div>

    <div className='top_bl_white'>
        <div className='bl_white'>
            <div className='inside_black_bl'></div>
            <div className='to_apply_flex'>  <p className='bl_tests'>G.A.T.E</p> </div>
           
            <p className='bl_para'>This trusted evaluation covers language proficiency, academic aptitude, and job-specific 
             skills, boosting your chances for visa approval 
             and showcasing your competence for studying 
              or working abroad.</p>
              <div className='to_apply_flex1'> <a href="/gate" className='bl_to_apply'>How to Apply</a> </div>
        </div>

        <div className='bl_white3'>
        <div className='inside_black_bl'></div>
        <div className='to_apply_flex'>  <p className='bl_tests'>P.O.C.A.S</p> </div>
            <p className='bl_para'>This trusted evaluation covers language proficiency, academic aptitude,and job-specific 
             skills, boosting your chances for visa approval 
             and showcasing your competence for studying 
              or working abroad.</p>
              <div className='to_apply_flex1'> <a href="/pocas" className='bl_to_apply'>How to Apply</a> </div>
             
        </div>
    </div>
<div className='top_bl_white2'>
<div className='bl_white2'>
        <div className='bl_block'></div>

        <div>
            <div className='to_apply_flex'><p className='bl_tests'>LISA</p></div>
            <p className='bl_para'>This trusted evaluation covers language <br />
             proficiency, academic aptitude, and job-specific <br /> 
             skills, boosting your chances for visa approval <br />
              and showcasing your competence for studying <br />
               or working abroad.</p>
               <a href="/lisa" className='bl_to_apply'>How to Apply</a>
        </div>
    </div>
</div>
   <div className='top_reasons'>
    <div className='reasons_to'>Reasons <br /> To Test <br />Yourself</div>


    <div className='img_fl'><img src={block1} alt="img" className='all_img' />
    <div className='find_the'>Find the  <br /> <span className='right_test'>Right Test <br />for You</span></div>
    </div>
   </div>

   <div className='the_bar'>
    <div className='img_fl'> <div className='find_the'>Find <br /> <span className='right_test'>Qualified <br />Applicants</span></div><img src={block3} alt="img" className='all_img'/></div>


    <div className='img_fl'><img src={block2} alt="img" className='all_img'/><div className='find_the'>show your  <br /> <span className='right_test'>Linguistic <br />Ability</span></div></div>
   </div>



   <div className='the_bar'>
    <div className='img_fl'> <div className='find_the'>Collabo <br /> <span className='right_test'>With ETS</span></div><img src={block4} alt="img" className='all_img'/></div>


    <div className='img_fl'><img src={block5} alt="img" className='all_img'/><div className='find_the'>Gain Your  <br /> <span className='right_test'>Teaching <br />Licence</span></div></div>
   </div>


<div className='if_flex'>
    <div className='if_reasons'>If reasons are good enough</div>
</div>
  
  <div className='why_flex'>
    <div><img src={cross} alt="img" className='cross__img'/></div>
    <div className='why__not'>Why not <br /> Create <br /> Account?</div>
  </div>

  <div className='app_flex'>
<div className='app_line'>
    <img src={xicon} alt="img" className='img_right' /> 
    <p className='applicant_black'>Applicant</p> 
    <p className='applicant_opac'>Log in to your <br /> dashboard</p>
    <a href="/" className='app_button'>Login</a>
</div>

<div className='app_line1'>
<img src={zicon} alt="img" className='img_right' /> 
    <p className='applicant_black'>Institution</p> 
    <p className='applicant_opac'>Log in to your <br /> dashboard</p>
    <a href="/" className='app_button'>Login</a>
</div>
  </div>

  <div className='gradient_div'><img src={gradient} alt="img" className='gradient_design'/></div>
 <div className='set_black'>
    <div className='links_board'>
        <div className='follow__us'>Follow Us</div>
        <div className='flex_links'>
            <img src={instagram} alt="img" className='links__img' />
            <img src={linkedin} alt="img" className='links__img' />
            <img src={youtube} alt="img" className='links__img'/>
            <img src={facebook} alt="img" className='links__img'/>
            </div>
    </div>
 </div>

<Footer/>
</div>



  )
}

export default TestFormat
