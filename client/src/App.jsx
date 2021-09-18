import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
// import Axios from "axios"; // to make API calls

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Projects data={landingPageData.Projects} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      
    </div>
  )
}


// Form related: merged from another React App that was using .js

// export function AppForm() {
  
//   const [name,setName] = useState('');
//   const [email,setEmail] = useState('');

//   delete process.env['http_proxy'];
// delete process.env['HTTP_PROXY'];
// delete process.env['https_proxy'];
// delete process.env['HTTPS_PROXY'];

//   useEffect(() => {
//     Axios.get('http://localhost:8080/api/get').then((res) => {
//       console.log(res);
//     })
//   },[]) // Axios is not working


//   const submitProject = () => {
//      // POST REQ
//      Axios.post('http://localhost:8080/api/insert', {
//        project_name : name, 
//        email_id:email,
//       }).then(() => {
//         alert("Successful insert!");
//       }).catch(function(error) {
//         throw(error);
//       });
//   }

//   return (
//     <div className="App">
//       <nav>
//         <div className="iajes_nav">
//         <a href="https://iajes-frugal.netlify.app/" className="logo">   
//         <h1 className =""> IAJES </h1>
//         </a>
//         </div>
//       </nav>
//       {/* <h1> IAJES React CRUD App</h1> */}
//       <div className = "add_project_div">
//         <h3>Add a new project</h3>
//         <form className="add_project_form">
//         <div className="in_container">
//           *Required fields
//         </div>
//           <div className="in_container">
//             <label /*htmlFor="p_name"*/>Project Name*</label>
//             <input type="text" name="ProjectName" onChange={(e) => {
//               setName(e.target.value)
//             }} required/>
//           </div>
//           <div className="in_container">
//             <label /*htmlFor="p_email"*/>Email of point of contact*</label>
//             <input type="text" name="Email" onChange={(e) => {
//               setEmail(e.target.value)
//              }} required/>
//           </div>
//           <div className="in_container">
//             <label htmlFor="university">University*</label>
//             <input type="text" name="University" id="university" required/>
//           </div>
//           <div className="in_container">
//             <label htmlFor="faculty">Principal investigator/Faculty member (Give full name)*</label>
//             <input type="text" id="faculty" name="Faculty" required/>
//           </div>
//           <div className="in_container">
//             <label htmlFor="summary">Project Executive Summary (250 Characters)* </label>
//             <div className="">
//               <textarea name="summary"  id="summary" name="Summary" rows="8" cols="80" maxlength="250" required></textarea>
//             </div>
//           </div>
//           <div className="in_container">
//             <label htmlFor="region">The region where the project is taking place</label>
//             <select id="region" name="Region">
//               <option value="Asia">Asia</option>
//               <option value="Latin America">Latin America</option>
//               <option value="Europe">Europe</option>
//               <option value="Africa">Africa</option>
//               <option value="North America">North America</option>
//             </select>
//           </div>
//           <div className="in_container">
//             <label htmlFor="countryId">Project Country*</label>
//             <select name="country" className="countries" id="countryId">
//                 <option>Select Country</option>
//             </select>
//           </div>
//           <div className="in_container">
//             <label htmlFor="stateId">Project State/Province*</label>
//             <select name="state" className="states" id="stateId">
//               <option>Select State</option>
//           </select>
//           </div>
//           <div className="in_container">
//             <label htmlFor="cityId">Project City*</label>
//             <select name="city" className="cities" id="cityId">
//               <option>Select City</option>
//           </select>
//           </div>
//           <div className="in_container rb_container">
//             <label htmlFor="isContinue">Status of the project*</label>
//             <div id="isContinue" className="">
//               <input type="radio" id="isContinueYes" name="isContinue" value="Yes" required/><label htmlFor="isContinueYes">Ongoing</label>
//               <input type="radio" id="isContinueNo" name="isContinue" value="No" required/><label htmlFor="isContinueNo">Completed</label>
//             </div>

//           </div>
//           <div className="in_container" id="p_year_container">
//             <label htmlFor="p_year">Year of project conclusion* </label>
//             <input type="number" id="p_year" name="Year" min={1900} placeholder="YYYY"/>
//           </div>
//           <div className="in_container">
//             <label htmlFor="partner">Partner Organizations involved with the project</label>
//             <input id="partner" type="text" name="Partner"/>
//           </div>
          

//           <div className="in_container checkHighlight">
//             <h3>Choose the project's category </h3>
//               <div className="cb_container">
//                 <input type="checkbox" id="Poverty" value="Poverty" name="Poverty"/>
//                   <label htmlFor="Poverty">Poverty</label>
//               </div>


//           <div className="cb_container">
//               <input type="checkbox" id="Hunger" value="Hunger" name="Hunger"/>
//                 <label htmlFor="Hunger">Hunger</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="HealthWellbeing" value="HealthWellbeing" name="HealthWellbeing"/>
//                 <label htmlFor="HealthWellbeing">Health and well being</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="Education" value="Education" name="Education"/>
//                 <label htmlFor="Education">Education</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="GenderEquality" value="GenderEquality" name="GenderEquality"/>
//                 <label htmlFor="GenderEquality">Gender Equality</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="CleanWaterSanitation" value="CleanWaterSanitation" name="CleanWaterSanitation"/>
//                 <label htmlFor="CleanWaterSanitation">Clean Water and Sanitation</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="AfhtmlFordableCleanEnergy" value="AfhtmlFordableCleanEnergy" name="AfhtmlFordableCleanEnergy"/>
//                 <label htmlFor="AfhtmlFordableCleanEnergy">Affordable and Clean Energy</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="DecentWorkEconomicGrowth" value="DecentWorkEconomicGrowth" name=" DecentWorkEconomicGrowth"/>
//                 <label htmlFor="DecentWorkEconomicGrowth"> Decent Work and Economic Growth</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="IndustryInnovationInfrastructure" value=" IndustryInnovationInfrastructure" name=" IndustryInnovationInfrastructure"/>
//                 <label htmlFor="IndustryInnovationInfrastructure"> Industry, Innovation, and Infrastructure</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="ReducedInequality" value=" ReducedInequality" name=" ReducedInequality"/>
//                 <label htmlFor="ReducedInequality"> Reduced Inequality</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="SustainableCitiesCommunities" value=" SustainableCitiesCommunities" name=" SustainableCitiesCommunities"/>
//                 <label htmlFor="SustainableCitiesCommunities"> Sustainable Cities and Communities</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="ResponsibleConsumptionProduction" value=" ResponsibleConsumptionProduction" name=" ResponsibleConsumptionProduction"/>
//                 <label htmlFor="ResponsibleConsumptionProduction"> Responsible Consumption and Production</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="ClimateAction" value="ClimateAction" name="ClimateAction"/>
//                 <label htmlFor="ClimateAction">Climate Action</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="EnvironmentUnderwater" value="EnvironmentUnderwater" name="EnvironmentUnderwater"/>
//                 <label htmlFor="EnvironmentUnderwater">Environment (Underwater</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="EnvironmentOnLand" value="EnvironmentOnLand" name="EnvironmentOnLand"/>
//                 <label htmlFor="EnvironmentOnLand">Environment (On Land</label>
//             </div>
//             <div className="cb_container">
//               <input type="checkbox" id="PeaceJustice" value="PeaceJustice" name="PeaceJustice"/>
//                 <label htmlFor="PeaceJustice">Peace and Justice</label>
//             </div>
            
//           </div>


//           <div className="in_container checkHighlight">

//             <h3>  <label htmlFor="taskhtmlForces">Choose the project's Task force(s)</label> </h3>
//               <div className="cb_container">
//                 <input type="checkbox" id = "EngineeringSocialJustice" value="EngineeringSocialJustice"/>
//                   <label htmlFor= "EngineeringSocialJustice">Engineering and Social Justice </label>
//               </div>
//               <div className="cb_container">
//                 <input type="checkbox" id = "HumanitarianEngineering" value="HumanitarianEngineering"/>
//                   <label htmlFor= "HumanitarianEngineering">Humanitarian Engineering </label>
//               </div>
//               <div className="cb_container">
//                 <input type="checkbox" id = "EngineeringScienceReligionSpirituality" value="EngineeringScienceReligionSpirituality"/>
//                   <label htmlFor= "EngineeringScienceReligionSpirituality">Engineering-Science & Religion-Spirituality </label>
//               </div>
//               <div className="cb_container">
//                 <input type="checkbox" id = "HealthCare" value="HealthCare"/>
//                   <label htmlFor= "HealthCare">Health Care </label>
//               </div>
//               <div className="cb_container">
//                 <input type="checkbox" id = "Energy" value="Energy"/>
//                   <label htmlFor= "Energy">Energy </label>
//               </div>
//               <div className="cb_container">
//                 <input type="checkbox" id = "ArtificialIntelligenceHumanity" value="ArtificialIntelligenceHumanity"/>
//                   <label htmlFor= "ArtificialIntelligenceHumanity">Artificial Intelligence & Humanity </label>
//               </div>
//               <div className="cb_container">
//                 <input type="checkbox" id = "Infrastructure" value="Infrastructure"/>
//                   <label htmlFor= "Infrastructure"> Infrastructure </label>
//               </div>
//               <div className="cb_container">
//                 <input type="checkbox" id = "ResearchAcademicCooperation" value="ResearchAcademicCooperation"/>
//                   <label htmlFor= "ResearchAcademicCooperation"> Research & Academic Co-operation </label>
//               </div>
// </div>



//           <div className="in_container">
//             <label htmlFor="p_photos">Upload Project Photos(highly recommended)</label>
//             <input id="p_photos" type="file" name="Photos"/>
//           </div>

//           <div className="in_container">
//             <label htmlFor="more_link">Share any link for more information about the project(Videos or Documents)</label>
//             <input type="link" id="more_link" name="MoreLink"/>
//           </div>

//           <div className="in_container cb_container">
//             <button onClick={submitProject}>Submit</button>
//             {/* <button type="reset" id="p_reset" name="Resetbutton">Reset Form</button> */}
//             <span>(Project details will be validated before added, it will take some time.)</span>
//           </div>
//         </form>
//       </div>
//     </div>
        
// //          {/* BEGIN ADD FORM */}

// //          <!-- add project form begins: -->

// //   <div class="add_project_div" style="display:block;float:left">
// //     <h2 style='color:rgba(45, 125, 210, 1); font-weight:bold'>Add another project</h2>
// //     <!-- <br> -->

// //   <div class="in_container">
// //     *Required fields
// //   </div>

// //     <form class="add_project_form" action="POST" method="post" enctype=”multipart/form-data” name="Add_Project" data-netlify="true">
// //       <div class="in_container">
// //         <label for="p_name">Project Name*</label>
// //         <input id="p_name" type="text" name="Name" value="" required>
// //       </div>

// //       <div class="in_container">
// //         <label for="p_email">Email of point of contact*</label>
// //         <input id="p_email" type="email" name="Email" value="" required>
// //       </div>

// //       <div class="in_container">
// //         <label for="university">University*</label>
// //         <input type="text" name="University" id="university" value="" required>
// //       </div>


// //       <div class="in_container">
// //         <label for="faculty">Principal investigator/Faculty member (Give full name)*</label>
// //         <input type="text" id="faculty" name="Faculty" value="" required>
// //       </div>




// //       <div class="in_container">
// //         <label for="summary">Project Executive Summary (250 Characters)* </label>
// //         <div class="">
// //           <textarea name="summary"  id="summary" name="Summary" rows="8" cols="80" maxlength="250" required></textarea>
// //         </div>

// //       </div>


// //       <div class="in_container">
// //         <label for="region">The region where the project is taking place</label>
// //         <select id="region" name="Region">
// //           <option value="Asia">Asia</option>
// //           <option value="Latin America">Latin America</option>
// //           <option value="Europe">Europe</option>
// //           <option value="Africa">Africa</option>
// //           <option value="North America">North America</option>
// //         </select>
// //       </div>


// //       <!-- <div class="in_container">
// //         <label for="p_email">Email of contact point*</label>
// //         <input id="p_email" type="email" name="Email" value="" required>
// //       </div> -->


// //       <div class="in_container">
// //         <label for="countryId">Project Country*</label>
// //         <select name="country" class="countries" id="countryId">
// //             <option value="">Select Country</option>
// //         </select>
// //       </div>

// //       <div class="in_container">
// //         <label for="stateId">Project State/Province*</label>
// //         <select name="state" class="states" id="stateId">
// //           <option value="">Select State</option>
// //       </select>
// //       </div>
// //       <div class="in_container">
// //         <label for="cityId">Project City*</label>
// //         <select name="city" class="cities" id="cityId">
// //           <option value="">Select City</option>
// //       </select>
// //       </div>



// //       <div class="in_container rb_container">
// //         <label for="isContinue">Status of the project*</label>
// //         <div id="isContinue" class="">
// //           <input type="radio" id="isContinueYes" name="isContinue" value="Yes" required><label for="isContinueYes">Ongoing</label>
// //           <input type="radio" id="isContinueNo" name="isContinue" value="No" required><label for="isContinueNo">Completed</label>
// //         </div>

// //       </div>

// //       <div class="in_container" id="p_year_container">
// //         <label for="p_year">Year of project conclusion* </label>
// //         <input type="number" id="p_year" name="Year" value="" min=1900 placeholder="YYYY">
// //       </div>

// //       <div class="in_container">
// //         <label for="partner">Partner Organizations involved with the project</label>
// //         <input id="partner" type="text" name="Partner" value="">
// //       </div>

// //       <!-- <div class="in_container">
// //         <label for="category">Choose the project's category (Hold Ctrl or Command key to select multiple)</label>
// //         <select id="category" name="Category" multiple>
// //           <option value="Poverty">Poverty</option>
// //           <option value="Hunger">Hunger</option>
// //           <option value="HealthWellbeing">Health and well being</option>
// //           <option value="Education">Education</option>
// //           <option value="GenderEquality">Gender Equality</option>
// //           <option value="CleanWaterSanitation">Clean Water and Sanitation</option>
// //           <option value="AffordableCleanEnergy">Affordable and Clean Energy</option>
// //           <option value=" DecentWorkEconomicGrowth"> Decent Work and Economic Growth</option>
// //           <option value=" IndustryInnovationInfrastructure"> Industry, Innovation, and Infrastructure</option>
// //           <option value=" ReducedInequality"> Reduced Inequality</option>
// //           <option value=" SustainableCitiesCommunities"> Sustainable Cities and Communities</option>
// //           <option value=" ResponsibleConsumptionProduction"> Responsible Consumption and Production</option>
// //           <option value="ClimateAction">Climate Action</option>
// //           <option value="EnvironmentUnderwater">Environment (Underwater)</option>
// //           <option value="EnvironmentOnLand">Environment (On Land)</option>
// //           <option value="PeaceJustice">Peace and Justice</option>
// //         </select>
// //         </div> -->

// //       <div class="in_container checkHighlight">
// //         <h3>Choose the project's category </h3>
// //           <div class="cb_container">
// //             <input type="checkbox" id="Poverty" value="Poverty" name="Poverty">
// //               <label for="Poverty">Poverty</label>
// //           </div>


// //       <div class="cb_container">
// //           <input type="checkbox" id="Hunger" value="Hunger" name="Hunger">
// //             <label for="Hunger">Hunger</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="HealthWellbeing" value="HealthWellbeing" name="HealthWellbeing">
// //             <label for="HealthWellbeing">Health and well being</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="Education" value="Education" name="Education">
// //             <label for="Education">Education</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="GenderEquality" value="GenderEquality" name="GenderEquality">
// //             <label for="GenderEquality">Gender Equality</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="CleanWaterSanitation" value="CleanWaterSanitation" name="CleanWaterSanitation">
// //             <label for="CleanWaterSanitation">Clean Water and Sanitation</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="AffordableCleanEnergy" value="AffordableCleanEnergy" name="AffordableCleanEnergy">
// //             <label for="AffordableCleanEnergy">Affordable and Clean Energy</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="DecentWorkEconomicGrowth" value="DecentWorkEconomicGrowth" name=" DecentWorkEconomicGrowth">
// //             <label for="DecentWorkEconomicGrowth"> Decent Work and Economic Growth</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="IndustryInnovationInfrastructure" value=" IndustryInnovationInfrastructure" name=" IndustryInnovationInfrastructure">
// //             <label for="IndustryInnovationInfrastructure"> Industry, Innovation, and Infrastructure</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="ReducedInequality" value=" ReducedInequality" name=" ReducedInequality">
// //             <label for="ReducedInequality"> Reduced Inequality</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="SustainableCitiesCommunities" value=" SustainableCitiesCommunities" name=" SustainableCitiesCommunities">
// //             <label for="SustainableCitiesCommunities"> Sustainable Cities and Communities</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="ResponsibleConsumptionProduction" value=" ResponsibleConsumptionProduction" name=" ResponsibleConsumptionProduction">
// //             <label for="ResponsibleConsumptionProduction"> Responsible Consumption and Production</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="ClimateAction" value="ClimateAction" name="ClimateAction">
// //             <label for="ClimateAction">Climate Action</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="EnvironmentUnderwater" value="EnvironmentUnderwater" name="EnvironmentUnderwater">
// //             <label for="EnvironmentUnderwater">Environment (Underwater</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="EnvironmentOnLand" value="EnvironmentOnLand" name="EnvironmentOnLand">
// //             <label for="EnvironmentOnLand">Environment (On Land</label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id="PeaceJustice" value="PeaceJustice" name="PeaceJustice">
// //             <label for="PeaceJustice">Peace and Justice</label>
// //         </div>
// //       </div>

// //       <!-- <div class="in_container">
// //         <label for="taskForces">Choose the project's Task Force(s) (Hold Ctrl or Command key to select multiple)</label>
// //         <select id="taskForces" name="TaskForcea" multiple>
// //           <option value="EngineeringSocialJustice">Engineering and Social Justice</option>
// //           <option value="HumanitarianEngineering">Humanitarian Engineering</option>
// //           <option value="EngineeringScienceReligionSpirituality">Engineering-Science & Religion-Spirituality</option>
// //           <option value="HealthCare">Health Care</option>
// //           <option value="Energy">Energy</option>
// //           <option value="ArtificialIntelligenceHumanity">Artificial Intelligence & Humanity</option>
// //           <option value="Infrastructure"> Infrastructure</option>
// //           <option value="ResearchAcademicCooperation"> Research & Academic Co-operation</option>
// //         </select>

// //       </div> -->

// //       <div class="in_container checkHighlight">

// //       <h3>  <label for="taskForces">Choose the project's Task Force(s)</label> </h3>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "EngineeringSocialJustice" value="EngineeringSocialJustice">
// //             <label for= "EngineeringSocialJustice">Engineering and Social Justice </label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "HumanitarianEngineering" value="HumanitarianEngineering">
// //             <label for= "HumanitarianEngineering">Humanitarian Engineering </label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "EngineeringScienceReligionSpirituality" value="EngineeringScienceReligionSpirituality">
// //             <label for= "EngineeringScienceReligionSpirituality">Engineering-Science & Religion-Spirituality </label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "HealthCare" value="HealthCare">
// //             <label for= "HealthCare">Health Care </label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "Energy" value="Energy">
// //             <label for= "Energy">Energy </label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "ArtificialIntelligenceHumanity" value="ArtificialIntelligenceHumanity">
// //             <label for= "ArtificialIntelligenceHumanity">Artificial Intelligence & Humanity </label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "Infrastructure" value="Infrastructure">
// //             <label for= "Infrastructure"> Infrastructure </label>
// //         </div>
// //         <div class="cb_container">
// //           <input type="checkbox" id = "ResearchAcademicCooperation" value="ResearchAcademicCooperation">
// //             <label for= "ResearchAcademicCooperation"> Research & Academic Co-operation </label>
// //         </div>
// //       </div>



// //       <div class="in_container">
// //         <label for="p_photos">Upload Project Photos(highly recommended)</label>
// //         <input id="p_photos" type="file" name="Photos" value="">
// //       </div>

// //       <div class="in_container">
// //         <label for="more_link">Share any link for more information about the project(Videos or Documents)</label>
// //         <input type="link" id="more_link" name="MoreLink" value="">
// //       </div>



// //       <div class="in_container">
// //         <button type="submit" id="p_submit" name="Submitbutton">Submit</button>
// //         <button type="reset" id="p_reset" name="Resetbutton">Reset Form</button>
// //         <span>(Project details will be validated before added, it will take some time.)</span>
// //       </div>




// //     </form>

// //   </div>

// // <!-- add project form ends. --> */}

//     //     {/* END ADD FORM */}


//     //   {/* </div> */} {/*extra */}
      
//     //   {/* <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header> */}
//     // {/* </div> */} {/*extra*/}
//   );
// }

export default App
