import { useState, useEffect } from "react";
import Axios from "axios"; // to make API calls
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";




async function postImage({ image, enteredName, enteredSummary,enteredCompleted,enteredOngoing, approval,
  catPoverty,catHunger,catHealthWell,catEducation,catGenderEq,catCleanWater,catAffordEnergy, catEcoGrowth,
  catIndInnoInfra,catReducedInequality,catSusCity,catRespConsumption,
  catClimateAction,catEnvUnderWater,catEnvOnLand,catPeaceJustice,enteredEmail, enteredUniversity, enteredInvestigator,
  enteredPartnerOrg,enteredCountry,enteredState,enteredCity,enteredLink,
  t_EngAndSocial,t_HumEng,t_EngSci,t_HealthCare,t_Energy,t_AiAndHum,t_Infra,t_ResearchAndAca,enteredRegion }) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("enteredName", enteredName);
  formData.append("enteredSummary",enteredSummary);
  formData.append("enteredCompleted",enteredCompleted);
  formData.append("enteredOngoing",enteredOngoing);
  formData.append("approval",approval);
  formData.append("catPoverty",catPoverty);
  formData.append("catHunger",catHunger);
  formData.append("catHealthWell",catHealthWell);
  formData.append("catEducation",catEducation);
  formData.append("catGenderEq",catGenderEq);
  formData.append("catCleanWater",catCleanWater);
  formData.append("catAffordEnergy",catAffordEnergy);
  formData.append("catEcoGrowth",catEcoGrowth);
  formData.append("catIndInnoInfra",catIndInnoInfra);
  formData.append("catReducedInequality",catReducedInequality);
  formData.append("catSusCity",catSusCity);
  formData.append("catRespConsumption",catRespConsumption);
  formData.append("catClimateAction",catClimateAction);
  formData.append("catEnvUnderWater",catEnvUnderWater);
  formData.append("catEnvOnLand",catEnvOnLand);
  formData.append("catPeaceJustice",catPeaceJustice);
  formData.append("enteredEmail",enteredEmail);
  formData.append("enteredUniversity",enteredUniversity);
  formData.append("enteredInvestigator",enteredInvestigator);
  formData.append("enteredPartnerOrg",enteredPartnerOrg);
  formData.append("enteredCountry",enteredCountry);
  formData.append("enteredState",enteredState);
  formData.append("enteredCity",enteredCity);
  formData.append("enteredLink",enteredLink);
  formData.append("t_EngAndSocial",t_EngAndSocial);
  formData.append("t_HumEng",t_HumEng);
  formData.append("t_EngSci",t_EngSci);
  formData.append("t_HealthCare",t_HealthCare);
  formData.append("t_Energy",t_Energy);
  formData.append("t_AiAndHum",t_AiAndHum);
  formData.append("t_Infra",t_Infra);
  formData.append("t_ResearchAndAca",t_ResearchAndAca);
  formData.append("enteredRegion",enteredRegion);
  const result = await Axios.post("http://localhost:3001/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
}



export const Projects = (props) => {
  //Temporary Approved status:
  const approval = 1;
  //Variables
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUniversity, setEnteredUniversity] = useState("");
  const [enteredInvestigator, setEnteredInvestigator] = useState("");
  const [enteredSummary, setEnteredSummary] = useState("");
  //Project Location
  const [enteredRegion, setEnteredRegion] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredState, setEnteredState] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  //Project Status
  const [enteredOngoing, setEnteredOngoing] = useState("");
  const [enteredCompleted, setEnteredCompleted] = useState("");
  //Partner Org
  const [enteredPartnerOrg, setEnteredPartnerOrg] = useState("");
  //Project Category
  const [catPoverty, setCatPoverty] = useState(0);
  const [catHunger, setCatHunger] = useState(0);
  const [catHealthWell, setCatHealthWell] = useState(0);
  const [catEducation, setCatEducation] = useState(0);
  const [catGenderEq, setCatGenderEq] = useState(0);
  const [catCleanWater, setCatCleanWater] = useState(0);
  const [catAffordEnergy, setCatAffordEnergy] = useState(0);
  const [catEcoGrowth, setCatEcoGrowth] = useState(0);
  const [catIndInnoInfra, setCatIndInnoInfra] = useState(0);
  const [catReducedInequality, setCatReducedInequality] = useState(0);
  const [catSusCity, setCatSusCity] = useState(0);
  const [catRespConsumption, setCatRespConsumption] = useState(0);
  const [catClimateAction, setCatClimateAction] = useState(0);
  const [catEnvUnderWater, setCatEnvUnderWater] = useState(0);
  const [catEnvOnLand, setCatEnvOnLand] = useState(0);
  const [catPeaceJustice, setCatPeaceJustice] = useState(0);
  //Project Taskforce
  const [t_EngAndSocial, setT_EngAndSocial] = useState(0);
  const [t_HumEng, setT_HumEng] = useState(0);
  const [t_EngSci, setT_EngSci] = useState(0);
  const [t_HealthCare, setT_HealthCare] = useState(0);
  const [t_Energy, setT_Energy] = useState(0);
  const [t_AiAndHum, setT_AiAndHum] = useState(0);
  const [t_Infra, setT_Infra] = useState(0);
  const [t_ResearchAndAca, setT_ResearchAndAca] = useState(0);
  //Project Link
  const [enteredLink, setEnteredLink] = useState("");
  //Images load
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  //submit Msg
  const [submitMsg, setSubmitMsg] = useState("");
  const [defaultChecking, setDefaultChecking] = useState(false);
  //Response from DB
  const [projectList, setProjectList] = useState([]);

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProjectList(response.data);
    });
  }, []);

  const submit_for_review = async (event) => {
    event.preventDefault();
    const projectDetails = {
      final_project_name: enteredName,
      final_email: enteredEmail,
      final_summary: enteredSummary,
    };

  const result = await postImage({ image: file, enteredName,enteredSummary,enteredCompleted,enteredOngoing, 
    approval,catPoverty,catHunger,catHealthWell,catEducation,catGenderEq,catCleanWater,catAffordEnergy, catEcoGrowth,
    catIndInnoInfra,catReducedInequality,catSusCity,catRespConsumption,
     catClimateAction,catEnvUnderWater,catEnvOnLand,catPeaceJustice,enteredEmail, enteredUniversity, enteredInvestigator,
     enteredPartnerOrg,enteredCountry,enteredState,enteredCity,enteredLink,
     t_EngAndSocial,t_HumEng,t_EngSci,t_HealthCare,t_Energy,t_AiAndHum,t_Infra,t_ResearchAndAca,
     enteredRegion});
  
    setImages([result.image, ...images]);

    setSubmitMsg("Form Submitted!");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredUniversity("");
    setEnteredInvestigator("");
    setEnteredSummary("");
    setEnteredRegion("");
    setEnteredCountry("");
    setEnteredState("");
    setEnteredCity("");
    setEnteredPartnerOrg("");
    setCatPoverty(0);
    setCatHunger(0);
    setEnteredLink("");
    //unCheck();

// refresh page
window.location.reload(false);

  };

  //  const unCheck = () =>{
  //    let x = document.getElementsByName("Poverty")
  //    s.getCheck
  //    console.log(x)

  // }

  return (
    <div>
      <div id="projects" className="App">
        <div className="add_project_div container">
          <div className="col-md-8">
            <div className="row">
              <div
                className="section-title"
                style={{ margin: 150, paddingLeft: 350 }}
              >
                <h2>Projects</h2>
                <button
                  type="button"
                  className="btn btn-custom btn-lg"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@getbootstrap"
                >
                  Add Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Update begining */}
        <div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    * Required Fields
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {/*Adding Form start*/}
                  <form
                    onSubmit={submit_for_review}
                    className="add_project_form"
                  >
                    <div className="in_container form-group">
                      <label style={{ fontSize: 15 }}>Project Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="ProjectName"
                        value={enteredName}
                        onChange={(e) => {
                          setEnteredName(e.target.value);
                          setSubmitMsg("Form not Yet Submitted");
                        }}
                        required
                      />
                    </div>

                    <div className="in_container form-group">
                      <label style={{ fontSize: 15 }}>
                        Email of point of contact* 
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        value={enteredEmail}
                        onChange={(e) => {
                          setEnteredEmail(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="in_container form-group">
                      <label htmlFor="university" style={{ fontSize: 15 }}>
                        University*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="University"
                        id="university"
                        value={enteredUniversity}
                        onChange={(e) => {
                          setEnteredUniversity(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="in_container form-group">
                      <label htmlFor="faculty" style={{ fontSize: 15 }}>
                        Principal investigator/Faculty member (Give full name)*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="faculty"
                        name="Faculty"
                        value={enteredInvestigator}
                        onChange={(e) => {
                          setEnteredInvestigator(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="in_container form-group">
                      <label htmlFor="summary" style={{ fontSize: 15 }}>
                        Project Executive Summary (250 Characters)*{" "}
                      </label>
                      <div className="">
                        <textarea
                          className="form-control"
                          id="summary"
                          name="Summary"
                          rows="8"
                          cols="80"
                          maxLength="300"
                          value={enteredSummary}
                          onChange={(e) => {
                            setEnteredSummary(e.target.value);
                          }}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="in_container form-group">
                      <label
                        className="noFloat"
                        htmlFor="region"
                        style={{ fontSize: 15 }}
                      >
                        Project Region* :
                      </label>
                      <div>
                        <select
                          className="form-select form-select-lg mb-3"
                          id="region"
                          name="Region"
                          style={{ fontSize: 15 }}
                          value={enteredRegion}
                          onChange={(e) => {
                            setEnteredRegion(e.target.value);
                          }}
                          required
                        >
                          <option value = "">Select Region</option>
                          <option value="Asia">Asia</option>
                          <option value="Latin America">Latin America</option>
                          <option value="Europe">Europe</option>
                          <option value="Africa">Africa</option>
                          <option value="North America">North America</option>
                        </select>
                      </div>
                    </div>

                    <div className="in_container form-group">
                      <label
                        className="noFloat"
                        htmlFor="countryId"
                        style={{ fontSize: 15 }}
                      >
                        Project Country* :
                      </label>
                      <CountryDropdown
                        className="form-select form-select-lg mb-3 countries"
                        style={{ fontSize: 15 }}
                        value={enteredCountry}
                        onChange={(e) => setEnteredCountry(e)}
                        required
                      />
                    </div>
                    <div className="in_container form-group">
                      <label
                        className="noFloat"
                        htmlFor="stateId"
                        style={{ fontSize: 15 }}
                      >
                        Project State/Province* :
                      </label>

                      <RegionDropdown
                        className="form-select form-select-lg mb-3 states"
                        style={{ fontSize: 15 }}
                        country={enteredCountry}
                        value={enteredState}
                        onChange={(e) => setEnteredState(e)}
                        required
                      />
                    </div>

                    <div className="in_container form-group">
                      <label htmlFor="city" style={{ fontSize: 15 }}>
                        City*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="City"
                        id="city"
                        value={enteredCity}
                        onChange={(e) => {
                          setEnteredCity(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="in_container form-group rb_container">
                      <label
                        htmlFor="isContinue"
                        className="noFloat"
                        style={{ fontSize: 15 }}
                      >
                        Status of the project* :
                      </label>
                      <div
                        id="isContinue"
                        className="form-check"
                        style={{ fontSize: 15 }}
                      >
                        <div>
                          {" "}
                          <input
                            type="radio"
                            id="isContinueYes"
                            className="form-check-input"
                            name="isContinue"
                            value={enteredOngoing}
                            onChange={(e) => {
                              setEnteredOngoing("1");
                              setEnteredCompleted("0");
                            }}
                            required
                          />
                          <label
                            className="form-check-label noFloat"
                            htmlFor="isContinueYes"
                          >
                            Ongoing
                          </label>{" "}
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="isContinueNo"
                            className="form-check-input"
                            name="isContinue"
                            value={enteredCompleted}
                            onChange={(e) => {
                              setEnteredOngoing("0");
                              setEnteredCompleted("1");
                            }}
                            required
                          />
                          <label
                            className="form-check-label noFloat"
                            htmlFor="isContinueNo"
                          >
                            Completed
                          </label>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="in_container form-group">
                      <label htmlFor="partner" style={{ fontSize: 15 }}>
                        Partner Organizations involved with the project :
                      </label>
                      <input
                        id="partner"
                        className="form-control"
                        type="text"
                        name="Partner"
                        value={enteredPartnerOrg}
                        onChange={(e) => {
                          setEnteredPartnerOrg(e.target.value);
                        }}
                      />
                    </div>

                    <div
                      className="in_container form-group checkHighlight"
                      style={{ fontSize: 25 }}
                    >
                      <div style={{ fontSize: 15 }}>
                        Choose Project Category :{" "}
                      </div>
                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="Poverty"
                          className="form-check-input"
                          defaultChecked={defaultChecking}
                          value={catPoverty}
                          name="Poverty"
                          onChange={(e) => {
                            if (catPoverty === 0) setCatPoverty(1);
                            else setCatPoverty(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="Poverty"
                        >
                          {" "}
                          Poverty
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="Hunger"
                          value={catHunger}
                          name="Hunger"
                          onChange={() => {
                            if (catHunger === 0) setCatHunger(1);
                            else setCatHunger(0);
                          }}
                        />
                        <label
                          htmlFor="Hunger"
                          className="form-check-label noFloat"
                        >
                          Hunger
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="HealthWellbeing"
                          value={catHealthWell}
                          name="HealthWellbeing"
                          onChange={() => {
                            if (catHealthWell === 0) setCatHealthWell(1);
                            else setCatHealthWell(0);
                          }}
                        />
                        <label
                          htmlFor="HealthWellbeing"
                          className="form-check-label noFloat"
                        >
                          Health and well being
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="Education"
                          value={catEducation}
                          name="Education"
                          onChange={() => {
                            if (catEducation === 0) setCatEducation(1);
                            else setCatEducation(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="Education"
                        >
                          Education
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="GenderEquality"
                          value={catGenderEq}
                          name="GenderEquality"
                          onChange={() => {
                            if (catGenderEq === 0) setCatGenderEq(1);
                            else setCatGenderEq(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="GenderEquality"
                        >
                          Gender Equality
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="CleanWaterSanitation"
                          value={catCleanWater}
                          name="CleanWaterSanitation"
                          onChange={() => {
                            if (catCleanWater === 0) setCatCleanWater(1);
                            else setCatCleanWater(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="CleanWaterSanitation"
                        >
                          Clean Water and Sanitation
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="AfhtmlFordableCleanEnergy"
                          value={catAffordEnergy}
                          name="AfhtmlFordableCleanEnergy"
                          onChange={() => {
                            if (catAffordEnergy === 0) setCatAffordEnergy(1);
                            else setCatAffordEnergy(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="AfhtmlFordableCleanEnergy"
                        >
                          Affordable and Clean Energy
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="DecentWorkEconomicGrowth"
                          value={catEcoGrowth}
                          name=" DecentWorkEconomicGrowth"
                          onChange={() => {
                            if (catEcoGrowth === 0) setCatEcoGrowth(1);
                            else setCatEcoGrowth(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="DecentWorkEconomicGrowth"
                        >
                          {" "}
                          Decent Work and Economic Growth
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="IndustryInnovationInfrastructure"
                          value={catIndInnoInfra}
                          name=" IndustryInnovationInfrastructure"
                          onChange={() => {
                            if (catIndInnoInfra === 0) setCatIndInnoInfra(1);
                            else setCatIndInnoInfra(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="IndustryInnovationInfrastructure"
                        >
                          {" "}
                          Industry, Innovation, and Infrastructure
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="ReducedInequality"
                          value={catReducedInequality}
                          name=" ReducedInequality"
                          onChange={() => {
                            if (catReducedInequality === 0)
                              setCatReducedInequality(1);
                            else setCatReducedInequality(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="ReducedInequality"
                        >
                          {" "}
                          Reduced Inequality
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="SustainableCitiesCommunities"
                          value={catSusCity}
                          name=" SustainableCitiesCommunities"
                          onChange={() => {
                            if (catSusCity === 0) setCatSusCity(1);
                            else setCatSusCity(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="SustainableCitiesCommunities"
                        >
                          {" "}
                          Sustainable Cities and Communities
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="ResponsibleConsumptionProduction"
                          value={catRespConsumption}
                          name=" ResponsibleConsumptionProduction"
                          onChange={() => {
                            if (catRespConsumption === 0)
                              setCatRespConsumption(1);
                            else setCatRespConsumption(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="ResponsibleConsumptionProduction"
                        >
                          {" "}
                          Responsible Consumption and Production
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="ClimateAction"
                          value={catClimateAction}
                          name="ClimateAction"
                          onChange={() => {
                            if (catClimateAction === 0) setCatClimateAction(1);
                            else setCatClimateAction(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="ClimateAction"
                        >
                          Climate Action
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="EnvironmentUnderwater"
                          value={catEnvUnderWater}
                          name="EnvironmentUnderwater"
                          onChange={() => {
                            if (catEnvUnderWater === 0) setCatEnvUnderWater(1);
                            else setCatEnvUnderWater(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="EnvironmentUnderwater"
                        >
                          Environment (Underwater)
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="EnvironmentOnLand"
                          value={catEnvOnLand}
                          name="EnvironmentOnLand"
                          onChange={() => {
                            if (catEnvOnLand === 0) setCatEnvOnLand(1);
                            else setCatEnvOnLand(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="EnvironmentOnLand"
                        >
                          Environment (On Land)
                        </label>
                      </div>

                      <div className="cb_container form-check">
                        <input
                          type="checkbox"
                          id="PeaceJustice"
                          value={catPeaceJustice}
                          name="PeaceJustice"
                          onChange={() => {
                            if (catPeaceJustice === 0) setCatPeaceJustice(1);
                            else setCatPeaceJustice(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="PeaceJustice"
                        >
                          Peace and Justice
                        </label>
                      </div>
                    </div>

                    <div
                      className="in_container form-group checkHighlight"
                      style={{ fontSize: 25 }}
                    >
                      <div style={{ fontSize: 15 }}>
                        Choose Project's Task force(s) :
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="EngineeringSocialJustice"
                          value={t_EngAndSocial}
                          onChange={() => {
                            if (t_EngAndSocial === 0) setT_EngAndSocial(1);
                            else setT_EngAndSocial(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="EngineeringSocialJustice"
                        >
                          Engineering and Social Justice{" "}
                        </label>
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="HumanitarianEngineering"
                          value={t_HumEng}
                          onChange={() => {
                            if (t_HumEng === 0) setT_HumEng(1);
                            else setT_HumEng(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="HumanitarianEngineering"
                        >
                          Humanitarian Engineering{" "}
                        </label>
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="EngineeringScienceReligionSpirituality"
                          value={t_EngSci}
                          onChange={() => {
                            if (t_EngSci === 0) setT_EngSci(1);
                            else setT_EngSci(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="EngineeringScienceReligionSpirituality"
                        >
                          Engineering-Science & Religion-Spirituality{" "}
                        </label>
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="HealthCare"
                          value={t_HealthCare}
                          onChange={() => {
                            if (t_HealthCare === 0) setT_HealthCare(1);
                            else setT_HealthCare(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="HealthCare"
                        >
                          Health Care{" "}
                        </label>
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="Energy"
                          value={t_Energy}
                          onChange={() => {
                            if (t_Energy === 0) setT_Energy(1);
                            else setT_Energy(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="Energy"
                        >
                          Energy{" "}
                        </label>
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="ArtificialIntelligenceHumanity"
                          value={t_AiAndHum}
                          onChange={() => {
                            if (t_AiAndHum === 0) setT_AiAndHum(1);
                            else setT_AiAndHum(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="ArtificialIntelligenceHumanity"
                        >
                          Artificial Intelligence & Humanity{" "}
                        </label>
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="Infrastructure"
                          value={t_Infra}
                          onChange={() => {
                            if (t_Infra === 0) setT_Infra(1);
                            else setT_Infra(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="Infrastructure"
                        >
                          {" "}
                          Infrastructure{" "}
                        </label>
                      </div>

                      <div className="cb_container">
                        <input
                          type="checkbox"
                          id="ResearchAcademicCooperation"
                          value={t_ResearchAndAca}
                          onChange={() => {
                            if (t_ResearchAndAca === 0) setT_ResearchAndAca(1);
                            else setT_ResearchAndAca(0);
                          }}
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="ResearchAcademicCooperation"
                        >
                          {" "}
                          Research and Academic Co-operation{" "}
                        </label>
                      </div>
                    </div>

                    <div style={{ fontSize: 15, paddingBottom: 10 }}>
                      Upload Photo *
                    </div>

                    <input
                      onChange={fileSelected}
                      type="file"
                      accept="image/*"
                      required
                    ></input>
                    <br></br>

                    <div className="in_container form-group">
                      <label htmlFor="more_link" style={{ fontSize: 15 }}>
                        Share Link for more Project information (Videos /
                        Documents) :
                      </label>
                      <input
                        type="link"
                        id="more_link"
                        name="MoreLink"
                        value={enteredLink}
                        className="form-control"
                        onChange={(e) => setEnteredLink(e.target.value)}
                      />
                    </div>

                    <div className="in_container form-group cb_container">
                      <button
                        className="btn btn-custom btn-lg"
                        style={{ marginRight: 4 }}
                        type="submit"
                      >
                        Submit to Review Committee*
                      </button>
                      <button
                        type="button"
                        className="btn btn-custom btn-lg"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                    <div>
                      <b>{submitMsg}</b>
                    </div>
                  </form>

                  {/*Form code end*/}
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr></hr>
      {projectList.map((val) => {
        const img_link = "http://localhost:3001/images/"+val.aws_image_link
        return (
          <div>
            <div>
              <img src={img_link} width="259" height="194" ></img>
            <p><b>{val.project_name} </b><br></br> {val.project_summary} </p>
            
            
            <br></br>
            </div>
          </div>
        );
      })}
    </div>
  );
};
