const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  },
  {
    id: 11,
    title: "Web Component II Fundamentals",
    slug: "web-components-shadow-dom-2",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const roles = [
    {id: 1, name: 'admin', description: ''}
  , {id: 2, name: 'manager', description: ''}
  , {id: 3, name: 'doctor', description: ''}
  , {id: 4, name: 'technician', description: ''}
  , {id: 5, name: 'clerk', description: ''}
  , {id: 6, name: 'nurse', description: ''}
  , {id: 7, name: 'accountant', description: ''}
  , {id: 8, name: 'helper', description: ''}
];
const staff = [
      {id: 1, initials: '', firstName: 'Muammed' , surname: 'Asif'     , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'1', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 2, initials: '', firstName: 'Hashim'  , surname: 'Ansari'   , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'2', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 3, initials: 'Dr', firstName: 'Faheem', surname: 'Zaman'    , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: true,  designation:'General Physician', qualification:'MBBS'}
  ,   {id: 4, initials: 'Dr', firstName: 'Kareem', surname: 'Aleem'    , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: true,  designation:'General Physician', qualification:'MBBS'}
  ,   {id: 5, initials: '', firstName: 'Mubashir', surname: 'Rana'     , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'4', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 6, initials: '', firstName: 'Javaid'  , surname: 'Saleem'   , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'8', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 7, initials: '', firstName: 'Muhammed', surname: 'Faiyaz'   , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'8', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 8, initials: '', firstName: 'Samreen' , surname: 'Hussain'  , dateOfBirth: '', gender: 'F', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 9, initials: '', firstName: 'Mehwish' , surname: 'Khan'     , dateOfBirth: '', gender: 'F', mobileNo: '', locationId:'1', roleId:'6', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 10, initials: '', firstName: 'Shahbaz', surname: 'Qureshi'  , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'7', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 11, initials: 'Dr', firstName: 'Isha' , surname: 'Kareem'   , dateOfBirth: '', gender: 'F', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: true,  designation:'General Physician', qualification:'MBBS'}
  ,   {id: 12, initials: '', firstName: 'Mahmood', surname: 'Chaudhry' , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'5', centreId: 1, isDoctor: false, designation:'', qualification:''}
];

const doctors =  [
    {id: 1, staffId: 3, designation: 'General Physician', qualification: 'MBBS', detail: '', centreId: 1}
  , {id: 2, staffId: 4, designation: 'General Physician', qualification: 'MBBS', detail: '', centreId: 1}
  , {id: 3, staffId: 11, designation: 'General Physician', qualification: 'MBBS', detail: '', centreId: 1}
]
const newDoctor = {id: 0, staffId: 0, designation: '', qualification: '', detail: ''}

const locations = [
    {id: 1, address: 'Zia Colony Block 1', region: 'Gulshan',                               areaId: 104, city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 2, address: 'Block 5 Clifton', region: 'Clifton',                                  areaId: 13,  city: 'Karachi', postcode: '75600', state: 'Sindh', country: 'Pakistan', phone:'+92 331 2768450'}
  , {id: 3, address: 'E38, 2 Allama Shabbir Ahmed Usmani Rd, Block 4 ', region: 'Gulshan',  areaId: 104, city: 'Karachi', postcode: '75300', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 4, address: 'Iqbal Kiran Hospital Rd, Zehra Nagar', region: 'Gulshan',             areaId: 110, city: 'Karachi', postcode: '75280', state: 'Sindh', country: 'Pakistan', phone:'+92 345 8940437'}
  , {id: 5, address: 'Saddar Karach', region: 'City Central' ,                              areaId: 26,  city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 6, address: 'Allama Shabbir Ahmed Usmani Rd', region: 'Gulshan' ,                  areaId: 104, city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:'+92 21 34981242'}
  , {id: 7, address: 'Plot 8c 4th Sunset St, Phase 2 Commercial Area', region: 'DHA' ,      areaId: 2,   city: 'Karachi', postcode: '75500', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 8, address: 'Gulzar-e-Hijri Block 2/2', region: 'Gulshan' ,                        areaId: 110, city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 9, address: '5/c 31st St, Tauheed Commercial Area Defence V ', region: 'DHA' ,     areaId: 5,   city: 'Karachi', postcode: '75500', state: 'Sindh', country: 'Pakistan', phone:'+92 21 35820113'}
  , {id: 10, address: 'Gulbahar', region: 'Gulshan' ,                                       areaId: 118, city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 11, address: 'Plot 871, Federal B Area Hussainabad Block 3', region: 'Central' ,   areaId: 94,  city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 12,address: "C-11, Block-4,، Shahrah-e-Pakistan، Block 4",region: "Central",       areaId: 94,city: "Karachi",postcode: "",state: "Sindh",country: "Pakistan",phone: "",createdAt: 1611072707423  }
  , {id: 13,address: "419/A Amir Khusro Rd, near Muhammad Ali society, Block B Adamjee Nagar Society",region: "Society",areaId: 131,city: "Karachi",postcode: "",state: "Sindh",country: "Pakistan",phone: "123456",updatedAt: "2021-01-19T18:17:22.700Z"}
  , {id: 14,address: "Block 1 Jalalabad",region: "Central",                                 areaId: 91,city: "Karachi",postcode: "",state: "Sindh",country: "Pakistan",phone: "123"}
];
const newLocation = {id: 0, address: '', region: '' , areaId: 0, city: '', postcode: '', state: '', country: '', phone:''}

const centres = [
    {id: 1, name: 'The Clinic', typeId: 1, areaId: 104, locationId: 1}
  , {id: 2, name: 'Noor Clinic', typeId: 1, areaId: 13, locationId: 2}
  , {id: 3, name: 'Zubaida Machiyara Trust Clinic', typeId: 1, areaId: 104, locationId: 3}
  , {id: 4, name: 'Poly Clinic', typeId: 1, areaId: 110, locationId: 4}
  , {id: 5, name: 'Shahrukh clinic saddar', typeId: 1, areaId: 26, locationId: 5}
  , {id: 6, name: 'ZMT Clinic Head Office', typeId: 1, areaId: 104, locationId: 6}
  , {id: 7, name: 'Clinic5', typeId: 1, areaId: 2, locationId: 7}
  , {id: 8, name: 'Fatima Clinic', typeId: 1, areaId: 110, locationId: 8}
  , {id: 9, name: 'Dr.Aliya s Haqqani Clinic', typeId: 1, areaId: 5, locationId: 9}
  , {id: 10, name: 'Maryam Clinic', typeId: 1, areaId: 118, locationId: 10}
  , {id: 11, name: 'Fatima Clinic and Maternity Hospital', typeId: 2, areaId: 94, locationId: 11}
  , {id: 12, name: "Tahir Clinic",typeId: 2,areaId: 2,locationId: 7}
  , {id: 13,name: "Zainab Medical Centre",typeId: 2,areaId: 94,locationId: 12,createdAt: 1611072850384}
  , {id: 14,name: "Tahir Clinic-Adamjee Nagar",typeId: 2,areaId: 131,locationId: 13,createdAt: 1611076112722}
  , {id: 15,name: "Bushra Clinic",typeId: 1,areaId: 91,locationId: 14,createdAt: 1611082325321}
];

const centreTypes = [
    {id: 1, name: 'Family Clinic'         , iconURL: '', romanUrdu:''}
  , {id: 2, name: 'Maternity Hospital'    , iconURL: '', romanUrdu:''}
  , {id: 3, name: 'Pediatrition Hospital' , iconURL: '', romanUrdu:''}
  , {id: 4, name: 'Skin Clinic'           , iconURL: '', romanUrdu:''}
  , {id: 5, name: 'Eye Hospital'          , iconURL: '', romanUrdu:''}
  , {id: 6, name: 'Bone & Joint Hospital' , iconURL: '', romanUrdu:''}
  , {id: 7, name: 'General Hospital'      , iconURL: '', romanUrdu:''}
]
const centreAreas = [
  {id:	1	,region:'DHA',name:'Phase1',city:'Karachi', state:'Sindh'}
  ,{id:	2	,region:'DHA',name:'Phase2',city:'Karachi', state:'Sindh'}
  ,{id:	3	,region:'DHA',name:'Phase3',city:'Karachi', state:'Sindh'}
  ,{id:	4	,region:'DHA',name:'Phase4',city:'Karachi', state:'Sindh'}
  ,{id:	5	,region:'DHA',name:'Phase5',city:'Karachi', state:'Sindh'}
  ,{id:	6	,region:'DHA',name:'Phase6',city:'Karachi', state:'Sindh'}
  ,{id:	7	,region:'DHA',name:'Phase7',city:'Karachi', state:'Sindh'}
  ,{id:	8	,region:'DHA',name:'Phase8',city:'Karachi', state:'Sindh'}
  ,{id:	9	,region:'Clifton',name:'Beach Area	',city:'Karachi', state:'Sindh'}
  ,{id:	10	,region:'Clifton',name:'Gizri	',city:'Karachi', state:'Sindh'}
  ,{id:	11	,region:'Clifton',name:'Block 1	',city:'Karachi', state:'Sindh'}
  ,{id:	12	,region:'Clifton',name:'Block 4	',city:'Karachi', state:'Sindh'}
  ,{id:	13	,region:'Clifton',name:'Block 5	',city:'Karachi', state:'Sindh'}
  ,{id:	14	,region:'Clifton',name:'Block 6	',city:'Karachi', state:'Sindh'}
  ,{id:	15	,region:'Clifton',name:'Askari 2	',city:'Karachi', state:'Sindh'}
  ,{id:	16	,region:'Clifton',name:'Civil Lines',city:'Karachi', state:'Sindh'}
  ,{id:	17	,region:'Clifton',name:'Karachi Cantonment',city:'Karachi', state:'Sindh'}
  ,{id:	18	,region:'Clifton',name:'Block 8 Teen Talwar',city:'Karachi', state:'Sindh'}
  ,{id:	19	,region:'Clifton',name:'Saba Commercial Area',city:'Karachi', state:'Sindh'}
  ,{id:	20	,region:'Clifton',name:'Kehkashan	',city:'Karachi', state:'Sindh'}
  ,{id:	21	,region:'Clifton',name:'Darakhshan Commercial Area',city:'Karachi', state:'Sindh'}
  ,{id:	22	,region:'Clifton',name:'Navy Housing Scheme',city:'Karachi', state:'Sindh'}
  ,{id:	23	,region:'Clifton',name:'Sultanabad',city:'Karachi', state:'Sindh'}
  ,{id:	24	,region:'Clifton',name:'Shah Rasool Colony',city:'Karachi', state:'Sindh'}
  ,{id:	25	,region:'Clifton',name:'Naval Officers Res Estate',city:'Karachi', state:'Sindh'}
  ,{id:	26	,region:'City Central',name:'Saddar	',city:'Karachi', state:'Sindh'}
  ,{id:	27	,region:'City Central',name:'Lalazar	',city:'Karachi', state:'Sindh'}
  ,{id:	28	,region:'City Central',name:'New Chali	',city:'Karachi', state:'Sindh'}
  ,{id:	29	,region:'City Central',name:'Jutt Lanes	',city:'Karachi', state:'Sindh'}
  ,{id:	30	,region:'City Central',name:'Jacob Lanes	',city:'Karachi', state:'Sindh'}
  ,{id:	31	,region:'City Central',name:'Khudad Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	32	,region:'City Central',name:'Burns Road	',city:'Karachi', state:'Sindh'}
  ,{id:	33	,region:'City Central',name:'City Railway Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	34	,region:'City Central',name:'Garden West	',city:'Karachi', state:'Sindh'}
  ,{id:	35	,region:'City Central',name:'Garden East	',city:'Karachi', state:'Sindh'}
  ,{id:	36	,region:'City Central',name:'Parsi Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	37	,region:'City Central',name:'Soldier Bazar	',city:'Karachi', state:'Sindh'}
  ,{id:	38	,region:'City Central',name:'Light House	',city:'Karachi', state:'Sindh'}
  ,{id:	39	,region:'Old City/South',name:'Bhorapir	',city:'Karachi', state:'Sindh'}
  ,{id:	40	,region:'Old City/South',name:'Marwari Lane	',city:'Karachi', state:'Sindh'}
  ,{id:	41	,region:'Old City/South',name:'Mithadar	',city:'Karachi', state:'Sindh'}
  ,{id:	42	,region:'Old City/South',name:'Kharadar	',city:'Karachi', state:'Sindh'}
  ,{id:	43	,region:'Old City/South',name:'Old Haji Camp	',city:'Karachi', state:'Sindh'}
  ,{id:	44	,region:'Old City/South',name:'Nayabad	',city:'Karachi', state:'Sindh'}
  ,{id:	45	,region:'Old City/South',name:'Chakiwara	',city:'Karachi', state:'Sindh'}
  ,{id:	46	,region:'Old City/South',name:'West Wharf	',city:'Karachi', state:'Sindh'}
  ,{id:	47	,region:'Old City/South',name:'East Wharf	',city:'Karachi', state:'Sindh'}
  ,{id:	48	,region:'Old City/South',name:'Keamari	',city:'Karachi', state:'Sindh'}
  ,{id:	49	,region:'Old City/South',name:'Macchar Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	50	,region:'South West',name:'Lyari	',city:'Karachi', state:'Sindh'}
  ,{id:	51	,region:'South West',name:'Noorani Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	52	,region:'South West',name:'Bihar Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	53	,region:'South West',name:'Naval Flats	',city:'Karachi', state:'Sindh'}
  ,{id:	54	,region:'South West',name:'Singo Lane	',city:'Karachi', state:'Sindh'}
  ,{id:	55	,region:'South West',name:'Shershah	',city:'Karachi', state:'Sindh'}
  ,{id:	56	,region:'South West',name:'Gulbai	',city:'Karachi', state:'Sindh'}
  ,{id:	57	,region:'South West',name:'Haroonabad	',city:'Karachi', state:'Sindh'}
  ,{id:	58	,region:'South West',name:'Maripur	',city:'Karachi', state:'Sindh'}
  ,{id:	59	,region:'South West',name:'Pak colony	',city:'Karachi', state:'Sindh'}
  ,{id:	60	,region:'South West',name:'Golimar	',city:'Karachi', state:'Sindh'}
  ,{id:	61	,region:'South West',name:'Masroor	',city:'Karachi', state:'Sindh'}
  ,{id:	62	,region:'South West',name:'Budhni Goth	',city:'Karachi', state:'Sindh'}
  ,{id:	63	,region:'South West',name:'SITE	',city:'Karachi', state:'Sindh'}
  ,{id:	64	,region:'South West',name:'Labor Square	',city:'Karachi', state:'Sindh'}
  ,{id:	65	,region:'South West',name:'Labor Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	66	,region:'South West',name:'Keamari	',city:'Karachi', state:'Sindh'}
  ,{id:	67	,region:'South West',name:'EOBI Housing Society	',city:'Karachi', state:'Sindh'}
  ,{id:	68	,region:'South West',name:'KDA Scheme 42	',city:'Karachi', state:'Sindh'}
  ,{id:	69	,region:'South West',name:'Goth Haji Usman	',city:'Karachi', state:'Sindh'}
  ,{id:	70	,region:'South West',name:'Mohterma Benazir Bhutto Town	',city:'Karachi', state:'Sindh'}
  ,{id:	71	,region:'Orangi',name:'Baldia	',city:'Karachi', state:'Sindh'}
  ,{id:	72	,region:'Orangi',name:'Chishti Nagar	',city:'Karachi', state:'Sindh'}
  ,{id:	73	,region:'Orangi',name:'Sadiqabad	',city:'Karachi', state:'Sindh'}
  ,{id:	74	,region:'Orangi',name:'Mominabad	',city:'Karachi', state:'Sindh'}
  ,{id:	75	,region:'Orangi',name:'Farooq-e-Azam Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	76	,region:'Orangi',name:'Ghaziabad	',city:'Karachi', state:'Sindh'}
  ,{id:	77	,region:'Orangi',name:'Gulshan E Tauheed	',city:'Karachi', state:'Sindh'}
  ,{id:	78	,region:'Orangi',name:'Gulshan E Haseen	',city:'Karachi', state:'Sindh'}
  ,{id:	79	,region:'Orangi',name:'Gulshan E Raheem	',city:'Karachi', state:'Sindh'}
  ,{id:	80	,region:'Orangi',name:'Hazratabad	',city:'Karachi', state:'Sindh'}
  ,{id:	81	,region:'Orangi',name:'Gul Mohammad Qalandrani Goth	',city:'Karachi', state:'Sindh'}
  ,{id:	82	,region:'Orangi',name:'Samama City	',city:'Karachi', state:'Sindh'}
  ,{id:	83	,region:'Orangi',name:'Areesha City	',city:'Karachi', state:'Sindh'}
  ,{id:	84	,region:'Orangi',name:'Baloch Goth	',city:'Karachi', state:'Sindh'}
  ,{id:	85	,region:'Orangi',name:'Banaras Town	',city:'Karachi', state:'Sindh'}
  ,{id:	86	,region:'Orangi',name:'Orangi Town	',city:'Karachi', state:'Sindh'}
  ,{id:	87	,region:'Central',name:'Nazimabad	',city:'Karachi', state:'Sindh'}
  ,{id:	88	,region:'Central',name:'North Nazimabad	',city:'Karachi', state:'Sindh'}
  ,{id:	89	,region:'Central',name:'F B Area	',city:'Karachi', state:'Sindh'}
  ,{id:	90	,region:'Central',name:'Essa Nagri	',city:'Karachi', state:'Sindh'}
  ,{id:	91	,region:'Central',name:'Liaquetabad	',city:'Karachi', state:'Sindh'}
  ,{id:	92	,region:'Central',name:'Nafeesabad	',city:'Karachi', state:'Sindh'}
  ,{id:	93	,region:'Central',name:'Qasba Town	',city:'Karachi', state:'Sindh'}
  ,{id:	94	,region:'Central',name:'Gulberg Town	',city:'Karachi', state:'Sindh'}
  ,{id:	95	,region:'Central',name:'Buffer Zone	',city:'Karachi', state:'Sindh'}
  ,{id:	96	,region:'Central',name:'Memon Nagar	',city:'Karachi', state:'Sindh'}
  ,{id:	97	,region:'Central',name:'Old Golimar	',city:'Karachi', state:'Sindh'}
  ,{id:	98	,region:'Central',name:'Hussainabad	',city:'Karachi', state:'Sindh'}
  ,{id:	99	,region:'North',name:'North Karachi	',city:'Karachi', state:'Sindh'}
  ,{id:	100	,region:'North',name:'New Karachi	',city:'Karachi', state:'Sindh'}
  ,{id:	101	,region:'North',name:'Surjani Town	',city:'Karachi', state:'Sindh'}
  ,{id:	102	,region:'North',name:'Gulistan E Hameed	',city:'Karachi', state:'Sindh'}
  ,{id:	103	,region:'Gulshan',name:'Civic Centre	',city:'Karachi', state:'Sindh'}
  ,{id:	104	,region:'Gulshan',name:'Gulshan E Iqbal	',city:'Karachi', state:'Sindh'}
  ,{id:	105	,region:'Gulshan',name:'KDA Officers Club	',city:'Karachi', state:'Sindh'}
  ,{id:	106	,region:'Gulshan',name:'Nipa Chorangi	',city:'Karachi', state:'Sindh'}
  ,{id:	107	,region:'Gulshan',name:'Gulastan E Johar	',city:'Karachi', state:'Sindh'}
  ,{id:	108	,region:'Gulshan',name:'Karachi University	',city:'Karachi', state:'Sindh'}
  ,{id:	109	,region:'Gulshan',name:'Mehran Banglows Town	',city:'Karachi', state:'Sindh'}
  ,{id:	110	,region:'Gulshan',name:'Gulshan E Hijri	',city:'Karachi', state:'Sindh'}
  ,{id:	111	,region:'Gulshan',name:'Gulshan E Kaneez Fatima	',city:'Karachi', state:'Sindh'}
  ,{id:	112	,region:'Gulshan',name:'PCSIR Society	',city:'Karachi', state:'Sindh'}
  ,{id:	113	,region:'Gulshan',name:'Azeemabad	',city:'Karachi', state:'Sindh'}
  ,{id:	114	,region:'Gulshan',name:'New Sabzi Mandi	',city:'Karachi', state:'Sindh'}
  ,{id:	115	,region:'Gulshan',name:'PAF Housing	',city:'Karachi', state:'Sindh'}
  ,{id:	116	,region:'Gulshan',name:'Gulshan E Umair	',city:'Karachi', state:'Sindh'}
  ,{id:	117	,region:'Gulshan',name:'Gulshan E Jamal	',city:'Karachi', state:'Sindh'}
  ,{id:	118	,region:'Gulshan',name:'Gulbahar	',city:'Karachi', state:'Sindh'}
  ,{id:	119	,region:'Airport',name:'PNS Juahar	',city:'Karachi', state:'Sindh'}
  ,{id:	120	,region:'Airport',name:'New Naval Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	121	,region:'Airport',name:'Bangladesh Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	122	,region:'Airport',name:'Askari IV	',city:'Karachi', state:'Sindh'}
  ,{id:	123	,region:'Airport',name:'CAA Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	124	,region:'Airport',name:'Faisal Cantonment	',city:'Karachi', state:'Sindh'}
  ,{id:	125	,region:'Airport',name:'Airport	',city:'Karachi', state:'Sindh'}
  ,{id:	126	,region:'Airport',name:'Tariq Bin Ziyad Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	127	,region:'Society',name:'PECHS	',city:'Karachi', state:'Sindh'}
  ,{id:	128	,region:'Society',name:'SMCHS	',city:'Karachi', state:'Sindh'}
  ,{id:	129	,region:'Society',name:'Tariq Road	',city:'Karachi', state:'Sindh'}
  ,{id:	130	,region:'Society',name:'Bahadurabad	',city:'Karachi', state:'Sindh'}
  ,{id:	131	,region:'Society',name:'Dhoraji	',city:'Karachi', state:'Sindh'}
  ,{id:	132	,region:'Society',name:'Karsaz	',city:'Karachi', state:'Sindh'}
  ,{id:	133	,region:'Society',name:'CP & Barar Society	',city:'Karachi', state:'Sindh'}
  ,{id:	134	,region:'Society',name:'KDA Scheme # 1	',city:'Karachi', state:'Sindh'}
  ,{id:	135	,region:'Society',name:'KDA Scheme # 1 Extension	',city:'Karachi', state:'Sindh'}
  ,{id:	136	,region:'Society',name:'Overseas Housing Society	',city:'Karachi', state:'Sindh'}
  ,{id:	137	,region:'Society',name:'Rohail Khalid Society	',city:'Karachi', state:'Sindh'}
  ,{id:	138	,region:'Society',name:'Hill Park	',city:'Karachi', state:'Sindh'}
  ,{id:	139	,region:'Society',name:'Karachi Memon Society	',city:'Karachi', state:'Sindh'}
  ,{id:	140	,region:'Society',name:'Banglore Town	',city:'Karachi', state:'Sindh'}
  ,{id:	141	,region:'Society',name:'Alhamra Society	',city:'Karachi', state:'Sindh'}
  ,{id:	142	,region:'Society',name:'Kokan CHS	',city:'Karachi', state:'Sindh'}
  ,{id:	143	,region:'Society',name:'Dawood CHS	',city:'Karachi', state:'Sindh'}
  ,{id:	144	,region:'Society',name:'Maniya Society	',city:'Karachi', state:'Sindh'}
  ,{id:	145	,region:'Society',name:'Modern Society	',city:'Karachi', state:'Sindh'}
  ,{id:	146	,region:'Society',name:'New Town	',city:'Karachi', state:'Sindh'}
  ,{id:	147	,region:'Society',name:'Al Hilal CHS	',city:'Karachi', state:'Sindh'}
  ,{id:	148	,region:'Society',name:'Nursery	',city:'Karachi', state:'Sindh'}
  ,{id:	149	,region:'Korangi',name:'Shah Faisal Town	',city:'Karachi', state:'Sindh'}
  ,{id:	150	,region:'Korangi',name:'Mehmoodabad	',city:'Karachi', state:'Sindh'}
  ,{id:	151	,region:'Korangi',name:'Azam Basti	',city:'Karachi', state:'Sindh'}
  ,{id:	152	,region:'Korangi',name:'Dadabhoy Town	',city:'Karachi', state:'Sindh'}
  ,{id:	153	,region:'Korangi',name:'Shah Faisal Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	154	,region:'Korangi',name:'Landhi Town	',city:'Karachi', state:'Sindh'}
  ,{id:	155	,region:'Korangi',name:'Landhi Industrial Area	',city:'Karachi', state:'Sindh'}
  ,{id:	156	,region:'Korangi',name:'Quaidabad	',city:'Karachi', state:'Sindh'}
  ,{id:	157	,region:'Korangi',name:'Ibrahim Hydri	',city:'Karachi', state:'Sindh'}
  ,{id:	158	,region:'Korangi',name:'Shah Latif Town	',city:'Karachi', state:'Sindh'}
  ,{id:	159	,region:'Korangi',name:'Badar Town	',city:'Karachi', state:'Sindh'}
  ,{id:	160	,region:'Korangi',name:'Abdullah Goth	',city:'Karachi', state:'Sindh'}
  ,{id:	161	,region:'Korangi',name:'Qasimabad	',city:'Karachi', state:'Sindh'}
  ,{id:	162	,region:'Korangi',name:'Gulshan E Hadeed	',city:'Karachi', state:'Sindh'}
  ,{id:	163	,region:'Korangi',name:'Dhabeji	',city:'Karachi', state:'Sindh'}
  ,{id:	164	,region:'Malir',name:'Modal Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	165	,region:'Malir',name:'Malir Cantonment	',city:'Karachi', state:'Sindh'}
  ,{id:	166	,region:'Malir',name:'Kachi Colony	',city:'Karachi', state:'Sindh'}
  ,{id:	167	,region:'Malir',name:'Moinabad	',city:'Karachi', state:'Sindh'}
  ,{id:	168	,region:'Malir',name:'Gilanabad	',city:'Karachi', state:'Sindh'}
  ,{id:	169	,region:'Malir',name:'Hashim Jokhio	',city:'Karachi', state:'Sindh'}
  ,{id:	170	,region:'Malir',name:'Abbottabad Lines	',city:'Karachi', state:'Sindh'}
  ,{id:	171	,region:'Malir',name:'Al Harmain Complex	',city:'Karachi', state:'Sindh'}
  ,{id:	172	,region:'Malir',name:'Gulshan E Elahi	',city:'Karachi', state:'Sindh'}
  ,{id:	173	,region:'Malir',name:'Noman Lake Villas	',city:'Karachi', state:'Sindh'}
  ,{id:	174	,region:'Malir',name:'Mehrab Keshkaily Goth	',city:'Karachi', state:'Sindh'}
  ,{id:	175	,region:'Malir',name:'Fine City	',city:'Karachi', state:'Sindh'}
  ,{id:	176	,region:'Malir',name:'Sherwani Royal City	',city:'Karachi', state:'Sindh'}
  ,{id:	177	,region:'Malir',name:'Gadap	',city:'Karachi', state:'Sindh'}
  ,{id:	178	,region:'Malir',name:'Usman Takri Goth	',city:'Karachi', state:'Sindh'}
]						
              
const patients = [
  {id:1, firstName:'Muhammed Naeem', surname:'Siddiqi', dateOfBirth: '1990-12-15', gender: 'M', nextToKin:'Tahira Siddiqi', kinRelationship: 'Spouse', medicalProblems:'', areaId:1} 
  ,{id:2, firstName:'Fatima', surname:'Khan',     dateOfBirth: '1995-05-29', gender: 'F', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:3, firstName:'Ferhan', surname:'Kareem',   dateOfBirth: '1985-05-29', gender: 'M', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:4, firstName:'Moin', surname:'Siddiqui',   dateOfBirth: '1975-05-29', gender: 'M', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:5, firstName:'Mehar', surname:'Farooqi',   dateOfBirth: '2005-05-29', gender: 'F', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:6, firstName:'Ebrahim', surname:'Saleem',  dateOfBirth: '1998-05-29', gender: 'M', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:7, firstName:'Murtaza', surname:'Rafeeq',  dateOfBirth: '1997-05-29', gender: 'M', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:8, firstName:'Faheem', surname:'Mirza',    dateOfBirth: '1988-05-29', gender: 'M', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:9, firstName:'Shameem', surname:'Sial',    dateOfBirth: '1987-05-29', gender: 'F', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:10, firstName:'Nighat', surname:'Chaudhry',dateOfBirth: '1977-05-29', gender: 'F', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:11, firstName:'Kareem', surname:'Sultan',  dateOfBirth: '1965-05-29', gender: 'M', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
  ,{id:12, firstName:'Raihana', surname:'Qadri',  dateOfBirth: '1999-05-29', gender: 'F', nextToKin:'Hameed Khan', kinRelationship: 'Father', medicalProblems:'', areaId:1} 
];

const newPatient =   {id:0, firstName:'', surname:'', dateOfBirth: '', gender: 'M', nextToKin:'', kinRelationship: '', medicalProblems:'', areaId:0} 

const events = [
   {id: 1, date: '2021-01-05', startTime: '09:00', endTime: '13:00', centreId: 1, locationId: 1, roomNo: '12', staffId: 3, maxAppointments: 24, description: ''}
  ,{id: 2, date: '2021-01-05', startTime: '14:00', endTime: '19:00', centreId: 1, locationId: 1, roomNo: '8', staffId: 4, maxAppointments: 24, description: ''}
  ,{id: 3, date: '2021-01-05', startTime: '17:00', endTime: '22:00', centreId: 1, locationId: 1, roomNo: '8', staffId: 11, maxAppointments: 24, description: ''}
];
const newEvent =    {id: 0, date: '', startTime: '', endTime: '', centreId: 0, locationId: 0, roomNo: '', staffId: 0, maxAppointments: 0, description: ''};

const appointments = [
    {id:1, eventId: 1,  patientId: 1,  centreId: 1, staffId: 3, startTime: '09:20', duration: '10', disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:7}
  , {id:2, eventId: 2,  patientId: 2,  centreId: 1, staffId: 4, startTime: '14:10', duration: '5',  disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:6}
  , {id:3, eventId: 2,  patientId: 3,  centreId: 1, staffId: 4, startTime: '14:15', duration: '5',  disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:5}
  , {id:4, eventId: 2,  patientId: 4,  centreId: 1, staffId: 4, startTime: '14:20', duration: '10', disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:4}
  , {id:5, eventId: 2,  patientId: 5,  centreId: 1, staffId: 4, startTime: '14:30', duration: '10', disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:3}
  , {id:6, eventId: 2,  patientId: 6,  centreId: 1, staffId: 4, startTime: '14:40', duration: '10', disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:4}
  , {id:7, eventId: 2,  patientId: 7,  centreId: 1, staffId: 4, startTime: '14:50', duration: '5',  disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:3}
  , {id:8, eventId: 2,  patientId: 8,  centreId: 1, staffId: 4, startTime: '14:55', duration: '10', disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:4}
  , {id:9, eventId: 2,  patientId: 9,  centreId: 1, staffId: 4, startTime: '15:05', duration: '5',  disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:2}
  , {id:10, eventId: 2, patientId: 10, centreId: 1, staffId: 4, startTime: '15:10', duration: '15', disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:1}
  , {id:11, eventId: 2, patientId: 11, centreId: 1, staffId: 4, startTime: '15:25', duration: '10', disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:5}
  , {id:12, eventId: 2, patientId: 12, centreId: 1, staffId: 4, startTime: '15:35', duration: '5',  disease: '', injury: '', symptoms: '', description: '', createdById: 0, createdOn: '', updatedById: 0, updatedOn: '', statusId:2}
];

const diseases = [
    {id: 'D001', engName: 'Eczema', iconURL: '', romanUrdu: 'Khaarish', description: ''}
  , {id: 'D002', engName: 'Dyspepsia', iconURL: '', romanUrdu: 'zoaf maidaa', description: ''}
  , {id: 'D003', engName: 'Catarrh', iconURL: '', romanUrdu: 'nazlaa', description: ''}
  , {id: 'D004', engName: 'Cough', iconURL: '', romanUrdu: 'khaansi', description: ''}
  , {id: 'D005', engName: 'Dysentery', iconURL: '', romanUrdu: 'paichus', description: ''}
  , {id: 'D006', engName: 'Diarrhea', iconURL: '', romanUrdu: 'asbaal', description: ''}
  , {id: 'D007', engName: 'Diabetes', iconURL: '', romanUrdu: 'ziya baitis', description: ''}
  , {id: 'D008', engName: 'Cromp', iconURL: '', romanUrdu: 'aakran', description: ''}
  , {id: 'D009', engName: 'Constipation', iconURL: '', romanUrdu: 'qabz', description: ''}
  , {id: 'D010', engName: 'Colic pain ', iconURL: '', romanUrdu: 'dard qolanj', description: ''}
  , {id: 'D011', engName: 'Cholera', iconURL: '', romanUrdu: 'haizaa', description: ''}
  , {id: 'D012', engName: 'Cataract', iconURL: '', romanUrdu: 'motiya band', description: ''}
  , {id: 'D013', engName: 'Cancer', iconURL: '', romanUrdu: 'sartaan', description: ''}
  , {id: 'D014', engName: 'Bruise', iconURL: '', romanUrdu: 'kharaash', description: ''}
  , {id: 'D015', engName: 'Bronchitis', iconURL: '', romanUrdu: 'narkharay ki naalion ka warm', description: ''}
  , {id: 'D016', engName: 'Burn', iconURL: '', romanUrdu: 'chhalaa', description: ''}
];

const newAppointment = {
    id:0
  , eventId: 0
  , patientId: 0
  , doctorId: 0
  , startTime: ''
  , duration: ''
  , disease: ''
  , injury: ''
  , symptoms: ''
  , description: ''
  , createdById: 0
  , createdOn: ''
  , updatedById: 0
  , updatedOn: ''
};

const newCentre = {id:0, name: '', typeId: 0, areaId: 0, locationId: 0};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  newCentre,
  newAppointment,
  newPatient,
  newEvent,
  newDoctor,
  newLocation,
  courses,
  authors,
  doctors,
  roles,
  staff,
  locations,
  centres,
  centreTypes,
  centreAreas,
  diseases,
  patients,
  events,
  appointments
};
