const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const { uploadFile, getFileStream } = require('./s3')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)


const db = mysql.createConnection({
host:'iajes.cun8oakszl0w.us-west-2.rds.amazonaws.com',
user:'admin',
password:'IAJES123fih!',
database:'iajes_db'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });





app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/api/get",(req,res)=>{
  const sqlSELECT = "SELECT * FROM Project_details;";
  db.query(sqlSELECT,(err,result)=>{
    //console.log(result)
    res.send(result);
  })
})



app.post("/api/insert", (req,res) => {


});



//Download images from S3 Bucket and make it available at /images/key
app.get('/images/:key', (req, res) => {

  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})


//Upload images to S3 Bucket

app.post('/images', upload.single('image'), async (req,res)=>{
  const file = req.file
  console.log(file);
  //can resize here
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log("Result from S3")
  console.log(result)
  res.send({imagePath: `/images/${result.Key}`})
  console.log("Location : "+result.Location)
  //testing

  const project_Name= req.body.enteredName
  const enteredSummary = req.body.enteredSummary
  const enteredCompleted= req.body.enteredCompleted
  const enteredOngoing =  req.body.enteredOngoing
  const approval = req.body.approval
  const catPoverty  = req.body.catPoverty ;
  const catHunger  = req.body.catHunger ;
  const catHealthWell  = req.body.catHealthWell ;
  const catEducation  = req.body.catEducation ;
  const catGenderEq  = req.body.catGenderEq ;
  const catCleanWater  = req.body.catCleanWater ;
  const catAffordEnergy = req.body.catAffordEnergy;
  const catEcoGrowth = req.body.catEcoGrowth;
  const catIndInnoInfra = req.body.catIndInnoInfra;
  const catReducedInequality = req.body.catReducedInequality;
  const catSusCity = req.body.catSusCity;
  const catRespConsumption = req.body.catRespConsumption;
  const catClimateAction  = req.body.catClimateAction;
  const catEnvUnderWater  = req.body.catEnvUnderWater;
  const catEnvOnLand  = req.body.catEnvOnLand;
  const catPeaceJustice  = req.body.catPeaceJustice;
  const enteredEmail  = req.body.enteredEmail;
  const enteredUniversity  = req.body.enteredUniversity;
  const enteredInvestigator  = req.body.enteredInvestigator;
  const enteredPartnerOrg = req.body.enteredPartnerOrg;
  const enteredCountry = req.body.enteredCountry;
  const enteredState = req.body.enteredState;
  const enteredCity = req.body.enteredCity;
  const enteredLink = req.body.enteredLink;
  const aws_link = result.Key;
  const t_EngAndSocial = req.body.t_EngAndSocial;
  const t_HumEng = req.body.t_HumEng;
  const t_EngSci = req.body.t_EngSci;
  const t_HealthCare = req.body.t_HealthCare;
  const t_Energy = req.body.t_Energy;
  const t_AiAndHum = req.body.t_AiAndHum;
  const t_Infra = req.body.t_Infra;
  const t_ResearchAndAca = req.body.t_ResearchAndAca;

  const enteredRegion = req.body.enteredRegion;

  const sqlInsert = "INSERT INTO `iajes_db`.`Project_details` (`project_name`, `project_summary`, `completed`, `ongoing`, `approval`,`cat_poverty`, `cat_hunger`, `cat_health_and_wellbeing`, `cat_education`, `cat_gender_equality`, `cat_clean_water_and_sanitation`,`cat_affordable_clean_energy`, `cat_decent_work_eco_growth`, `cat_industry_innovation_infra`, `cat_reduced_inequality`, `cat_sustainable_cities_communities`, `cat_responsible_consumption_production`,`cat_climate_action`, `cat_env_under_water`, `cat_env_on_land`, `cat_peace_and_justice`, `email`, `university`, `investigator`,`partner_org`, `country`, `state`, `city`, `video_media_link`, `aws_image_link`,`tsk_engineering_social_justice`, `tsk_humanitarian_engineering`, `tsk_eng_science_religion_spirituality`, `tsk_health_care`, `tsk_energy`, `tsk_ai_and_humanity`, `tsk_infrastructure`, `tsk_research_academic_coop`,`region`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"

  db.query(sqlInsert, [project_Name, enteredSummary,enteredCompleted,enteredOngoing,
    approval,catPoverty,catHunger,catHealthWell,catEducation,catGenderEq,catCleanWater,
    catAffordEnergy,catEcoGrowth,catIndInnoInfra, catReducedInequality,catSusCity,catRespConsumption,
    catClimateAction,catEnvUnderWater,catEnvOnLand,catPeaceJustice,enteredEmail, enteredUniversity, enteredInvestigator,
    enteredPartnerOrg,enteredCountry,enteredState,enteredCity,enteredLink,aws_link,
    t_EngAndSocial,t_HumEng,t_EngSci,t_HealthCare,t_Energy,t_AiAndHum,t_Infra,t_ResearchAndAca,enteredRegion], (err,result) => {
    console.log("Right record inserted");
    console.log(err);
  });

})



app.listen(3001,()=>{
    console.log('Running on port 3001');
});

