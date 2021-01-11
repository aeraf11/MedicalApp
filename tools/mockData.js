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
  , {id: 3, name: 'expert', description: ''}
  , {id: 4, name: 'technician', description: ''}
  , {id: 5, name: 'clerk', description: ''}
  , {id: 6, name: 'nurse', description: ''}
  , {id: 7, name: 'accountant', description: ''}
  , {id: 8, name: 'helper', description: ''}
];
const staff = [
      {id: 1, initials: '', firstName: 'Muammed' , surname: 'Asif'     , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'1', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 2, initials: '', firstName: 'Hashim'  , surname: 'Ansari'   , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'2', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 3, initials: 'Dr', firstName: 'Faheem'  , surname: 'Zaman'    , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: true, designation:'General Physician', qualification:'MBBS'}
  ,   {id: 4, initials: 'Dr', firstName: 'Kareem'  , surname: 'Aleem'    , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: true, designation:'General Physician', qualification:'MBBS'}
  ,   {id: 5, initials: '', firstName: 'Mubashir', surname: 'Rana'     , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'4', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 6, initials: '', firstName: 'Javaid'  , surname: 'Saleem'   , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'8', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 7, initials: '', firstName: 'Muhammed', surname: 'Faiyaz'   , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'8', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 8, initials: '', firstName: 'Samreen' , surname: 'Hussain'  , dateOfBirth: '', gender: 'F', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 9, initials: '', firstName: 'Mehwish' , surname: 'Khan'     , dateOfBirth: '', gender: 'F', mobileNo: '', locationId:'1', roleId:'6', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 10, initials: '', firstName: 'Shahbaz' , surname: 'Qureshi'  , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'7', centreId: 1, isDoctor: false, designation:'', qualification:''}
  ,   {id: 11, initials: 'Dr', firstName: 'Isha'    , surname: 'Kareem'   , dateOfBirth: '', gender: 'F', mobileNo: '', locationId:'1', roleId:'3', centreId: 1, isDoctor: true, designation:'General Physician', qualification:'MBBS'}
  ,   {id: 12, initials: '', firstName: 'Mahmood' , surname: 'Chaudhry' , dateOfBirth: '', gender: 'M', mobileNo: '', locationId:'1', roleId:'5', centreId: 1, isDoctor: false, designation:'', qualification:''}
];

const doctors =  [
    {id: 1, staffId: 3, designation: 'General Physician', qualification: 'MBBS', detail: '', centreId: 1}
  , {id: 2, staffId: 4, designation: 'General Physician', qualification: 'MBBS', detail: '', centreId: 1}
  , {id: 3, staffId: 11, designation: 'General Physician', qualification: 'MBBS', detail: '', centreId: 1}
]
const newDoctor = {id: 0, staffId: 0, designation: '', qualification: '', detail: ''}

const locations = [
    {id: 1, address: 'Zia Colony Block 1', town: 'Gulshan-e-Iqbal', city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 2, address: 'Block 5 Clifton', town: 'Clifton', city: 'Karachi', postcode: '75600', state: 'Sindh', country: 'Pakistan', phone:'+92 331 2768450'}
  , {id: 3, address: 'E38, 2 Allama Shabbir Ahmed Usmani Rd, Block 4 ', town: 'Gulshan-e-Iqbal', city: 'Karachi', postcode: '75300', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 4, address: 'Iqbal Kiran Hospital Rd, Zehra Nagar', town: 'Zohra Nagar Gulzar E Hijri Scheme 33', city: 'Karachi', postcode: '75280', state: 'Sindh', country: 'Pakistan', phone:'+92 345 8940437'}
  , {id: 5, address: 'Saddar Karach', town: 'Saddar', city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 6, address: 'Allama Shabbir Ahmed Usmani Rd', town: 'Block 4 Gulshan-e-Iqbal', city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:'+92 21 34981242'}
  , {id: 7, address: 'Plot 8c 4th Sunset St, Phase 2 Commercial Area', town: 'Defence Housing Authority', city: 'Karachi', postcode: '75500', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 8, address: 'Gulzar-e-Hijri Block 2/2', town: 'Metrovil Colony', city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 9, address: '5/c 31st St, Phase V Tauheed Commercial Area Defence V ', town: 'Defence Housing Authority', city: 'Karachi', postcode: '75500', state: 'Sindh', country: 'Pakistan', phone:'+92 21 35820113'}
  , {id: 10, address: 'Gulbahar', town: 'Nao Bahar Colony', city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
  , {id: 11, address: 'Plot No 871, Federal B Area Hussainabad Block 3', town: 'Gulberg Town', city: 'Karachi', postcode: '', state: 'Sindh', country: 'Pakistan', phone:''}
];
const centres = [
    {id: 1, name: 'The Clinic', typeId: 1, areaId: 1, locationId: 1}
  , {id: 2, name: 'Noor Clinic', typeId: 1, areaId: 2, locationId: 2}
  , {id: 3, name: 'Zubaida Machiyara Trust Clinic', typeId: 1, areaId: 1, locationId: 3}
  , {id: 4, name: 'Poly Clinic', typeId: 1, areaId: 8, locationId: 4}
  , {id: 5, name: 'Shahrukh clinic saddar', typeId: 1, areaId: 9, locationId: 5}
  , {id: 6, name: 'ZMT Clinic Head Office', typeId: 1, areaId: 1, locationId: 6}
  , {id: 7, name: 'Clinic5', typeId: 1, areaId: 4, locationId: 7}
  , {id: 8, name: 'Fatima Clinic', typeId: 1, areaId: 10, locationId: 8}
  , {id: 9, name: 'Dr.Aliya s Haqqani Clinic', typeId: 1, areaId: 7, locationId: 9}
  , {id: 10, name: 'Maryam Clinic', typeId: 1, areaId: 11, locationId: 10}
  , {id: 11, name: 'Fatima Clinic and Maternity Hospital', typeId: 2, areaId: 12, locationId: 11}
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
  {id: 	1	, name: 'Ibraheem Hyderi Uc-01',    region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	2	, name: 'Rehri Uc-02',            region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	3	, name: 'Cattle Colony Uc-03',    region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	4	, name: 'Quaidabad Uc-04',        region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	5	, name: 'Landhi Uc-05',           region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	6	, name: 'Gulshan-E-Hadeed Uc-06', region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	7	, name: 'Gaghar-07',              region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	8	, name: 'Murad Memon Goth Uc-01', region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	9	, name: 'Darsano Chana Uc-02',    region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	10	, name: 'Gadap Uc-03',          region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	11	, name: 'Gujro Uc-04',          region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	12	, name: 'Songal Uc-05',         region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	13	, name: 'Maymarabad Uc-06',     region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	14	, name: 'Yousuf Goth Uc-07',    region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	15	, name: 'Mangopir Uc-08',       region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	16	, name: 'Model Colony Uc-01',   region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	17	, name: 'Kala Board Uc-02',     region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	18	, name: 'Saudabad Uc-03',       region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	19	, name: 'Khokarapar Uc-04',     region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	20	, name: 'Jafar-E-Tayyar Uc-05', region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	21	, name: 'Gharibabad Uc-06',     region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	22	, name: 'Ghazi Brohi Goth Uc-07', region: 'Malir', city: 'Karachi', state: 'Sindh'}
  ,{id: 	23	, name: 'Azizabad Uc-01',       region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	24	, name: 'Karimabad Uc-02',      region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	25	, name: 'Aisha Manzil Uc-03',   region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	26	, name: 'Ancholi Uc-04',        region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	27	, name: 'Nasirabad Uc-05',      region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	28	, name: 'Yaseenabad Uc-06',     region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	29	, name: 'Water Pump Uc-07',     region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	30	, name: 'Shafeeque Mill Colony Uc-08', region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	31	, name: 'Rizvia Society Uc-01',   region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	32	, name: 'Firdos Colony Uc-02',    region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	33	, name: 'Super Market Uc-03',     region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	34	, name: 'Dak Khana Uc-04',        region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	35	, name: 'Qasiambad Uc-05',        region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	36	, name: 'Bandhani Colony Uc-06',  region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	37	, name: 'Sharifabad Uc-07',       region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	38	, name: 'Commercial Area Uc-08',  region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	39	, name: 'Mujahid Colony Uc-09',   region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	40	, name: 'Nazimabad No.01 Uc-10',  region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	41	, name: 'Abbasi Shaheed Uc-11',   region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	42	, name: 'Kalyana Uc-01',          region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	43	, name: 'Sir Syed Uc-02',         region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	44	, name: 'Fatima Jinnah Colony Uc-03', region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	45	, name: 'Godhra Uc-04',           region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	46	, name: 'Abu Zar Ghaffari Uc-05', region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	47	, name: 'Hakeem Ahsan Uc-06',     region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	48	, name: 'Madina Colony Uc-07',    region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	49	, name: 'Faisal Uc-08',           region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	50	, name: 'Khameeso Goth Uc-09',    region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	51	, name: 'Mustufa Colony Uc-10',   region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	52	, name: 'Khawaja Ajmeer Nagri Uc-11', region: 'Central	', city: 'Karachi', state: 'Sindh'}
  ,{id: 	53	, name: 'Gulshan-e-Saeed Uc-12',  region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	54	, name: 'Shah Nawaz Bhutto Colony Uc-13', region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	55	, name: 'Paposh Nagar Uc-01',     region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	56	, name: 'Pahar Ganj Uc-02',       region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	57	, name: 'Khando Goth Uc-03',      region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	58	, name: 'Haidery Uc-04',          region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	59	, name: 'Sakhi Hasan Uc-05',      region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	60	, name: 'Farooq-e-Azam Uc-06',    region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	61	, name: 'Nusrat Bhutto Colony Uc-07', region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	62	, name: 'Shadman Town Uc-08',     region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	63	, name: 'Buffer Zone Uc-09',      region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	64	, name: 'Buffer zone-1 Uc-10',    region: 'Central', city: 'Karachi', state: 'Sindh'}
  ,{id: 	65	, name: 'Agra Taj Colony Uc-01',  region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	66	, name: 'Darya Abad Uc-02',       region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	67	, name: 'Nawabad Uc-03',          region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	68	, name: 'Khada Memon Society Uc-04', region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	69	, name: 'Baghdadi Uc-05',         region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	70	, name: 'Shah Baig Line Uc-06',   region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	71	, name: 'Behar Colony Uc-07',     region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	72	, name: 'Ragiwara Uc-08',         region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	73	, name: 'Singo Line Uc-09',       region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	74	, name: 'Chakiwara Uc-10',        region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	75	, name: 'Allama Iqbal Colony Uc-11', region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	76	, name: 'Old Haji Camp Uc-01',    region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	77	, name: 'Garden Uc-02',           region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	78	, name: 'Kharadar Uc-03',         region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	79	, name: 'City Railway Station Uc-04', region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	80	, name: 'Nanak Wara Uc-05',       region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	81	, name: 'Gazdarabad Uc-06',       region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	82	, name: 'Millat Nagar/Islam Pura Uc-07', region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	83	, name: 'Saddar Uc-08',           region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	84	, name: 'Civil Line Uc-09',       region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	85	, name: 'Clifton Uc-10',          region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	86	, name: 'Kehkashan Uc-11',        region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	87	, name: 'Bhutta Village Uc-01',   region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	88	, name: 'Sultanabad Uc-02',       region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	89	, name: 'Kemari Uc-03',           region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	90	, name: 'Baba Bhit Uc-04',        region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	91	, name: 'Machar Colony Uc-05',    region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	92	, name: 'Maripur Uc-06',          region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	93	, name: 'Shershah Uc-07',         region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	94	, name: 'Gabo Pat Uc-08',         region: 'South', city: 'Karachi', state: 'Sindh'}
  ,{id: 	95	, name: 'Gulshan-E-Ghazi Uc-01',  region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	96	, name: 'Itahad Town Uc-02',      region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	97	, name: 'Islam Nagar Uc-03',      region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	98	, name: 'Nai Abbadi Uc-04',       region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	99	, name: 'Saeedabad Uc-05',        region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	100	, name: 'Muslim Mujahid Colony Uc-06', region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	101	, name: 'Muhajir Camp Uc-07',     region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	102	, name: 'Rasheedabad Uc-08',      region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	103	, name: 'Mominabad Uc-01',        region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	104	, name: 'Haryana Colony Uc-02',   region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	105	, name: 'Hanifabad Uc-03',        region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	106	, name: 'Mohammad Nagar Uc-04',   region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	107	, name: 'Madina Colony Uc-05',    region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	108	, name: 'Ghaziabad Uc-06',        region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	109	, name: 'Chisti Nagar Uc-07',     region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	110	, name: 'Bilal Colony Uc-08',     region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	111	, name: 'Iqbal Baloch Colony Uc-09', region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	112	, name: 'Ghabool Town Uc-10',     region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	113	, name: 'Data Nagar Uc-11',       region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	114	, name: 'Mujahidabad Uc-12',      region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	115	, name: 'Baloch Goth Uc-13',      region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	116	, name: 'Pak Colony Uc-01',       region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	117	, name: 'Old Golimar Uc-02',      region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	118	, name: 'Jahanabad Uc-03',        region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	119	, name: 'Metrovil Uc-04',         region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	120	, name: 'Pathan Colony Uc-05',    region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	121	, name: 'Frontier Colony Uc-06',  region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	122	, name: 'Banaras Colony Uc-07',   region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	123	, name: 'Qasba Colony Uc-08',     region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	124	, name: 'Islamia Colony Uc-09',   region: 'West', city: 'Karachi', state: 'Sindh'}
  ,{id: 	125	, name: 'Akhtar Colony Uc-01',    region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	126	, name: 'Manzoor Colony Uc-02',   region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	127	, name: 'Azam Basti Uc-03',       region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	128	, name: 'Chanesar Goth Uc-04',    region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	129	, name: 'Mehmoodabad Uc-05',      region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	130	, name: 'Pechs I Uc-6',           region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	131	, name: 'PechsII Uc-07',          region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	132	, name: 'Jut Line Uc-08',         region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	133	, name: 'Central Jacob Lines Uc-09', region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	134	, name: 'Jamshed Quarter Uc-10',  region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	135	, name: 'Garden East Uc-11',      region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	136	, name: 'Soldier Bazar Uc-12',    region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	137	, name: 'Pakistan Quarters Uc-13', region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	138	, name: 'Delhi Mercentile Society Uc-01', region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	139	, name: 'Civic Centre Uc-02',     region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	140	, name: 'P.I.B. Colony Uc-03',    region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	141	, name: 'Essa Nagri Uc-04',        region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	142	, name: 'Gulshan-E-Iqbal I Uc-05', region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	143	, name: 'Gillani Railway Station Uc-06', region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	144	, name: 'Shanti Nagar Uc-07',     region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	145	, name: 'Jamil Colony Uc-08',     region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	146	, name: 'Gulshan-E-Iqbal II Uc-09', region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	147	, name: 'Pehlwan Goth Uc-10',     region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	148	, name: 'Metrovill Uc-11',        region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	149	, name: 'Gulzar-E-Hijri Uc-12',   region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	150	, name: 'Safoora Goth Uc-13',     region: 'East', city: 'Karachi', state: 'Sindh'}
  ,{id: 	151	, name: 'Bilal Colony Uc-01',     region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	152	, name: 'Nasir Colony Uc-02',     region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	153	, name: 'Chakra Goth Uc-03',      region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	154	, name: 'Mustafa Taj Colony Uc-04', region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	155	, name: '100 Quarters Uc-05',     region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	156	, name: 'Gulzar Colony Uc-06',    region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	157	, name: 'Korangi Sector 33 Uc-07', region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	158	, name: 'Zaman Town Uc-08',       region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	159	, name: 'Hasrat Mohani Colony Uc-09', region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	160	, name: 'Muzaffarabad Colony Uc-01', region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	161	, name: 'Muslimabad Uc-02',       region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	162	, name: 'Daud Colony Uc-03',      region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	163	, name: 'Moinabad Uc-04',         region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	164	, name: 'Shirafi Goth Uc-05',     region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	165	, name: 'Bhutto Nagar Uc-06',     region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	166	, name: 'Khawaja Ajmer Nagri Uc-07', region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	167	, name: 'Landhi Uc-O8',           region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	168	, name: 'Awami Colony Uc-09',     region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	169	, name: 'Burmi Colony Uc-10',     region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	170	, name: 'Korangi Uc-11',          region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	171	, name: 'Sherabad Uc-12',         region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	172	, name: 'Natha Khan Goth Uc-01',  region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	173	, name: 'Pak Sadat Colony Uc-02', region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	174	, name: 'Drigue Colony Uc-03',    region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	175	, name: 'Reta Plot Uc-04',        region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	176	, name: 'Moria Goth Uc-05',       region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	177	, name: 'Rifah Aam Uc-06',        region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ,{id: 	178	, name: 'Al Falah Society Uc-07', region: 'Korangi', city: 'Karachi', state: 'Sindh'}
  ]						
              
    
// const centreAreas = [
//   {id: 1, name: 'Gulshan-e-Iqbal', iconURL: '', romanUrdu:''}
// , {id: 2, name: 'Clifton', iconURL: '', romanUrdu:''}
// , {id: 3, name: 'Defence Housing Authority Phose I' , iconURL: '', romanUrdu:''}
// , {id: 4, name: 'Defence Housing Authority Phose II', iconURL: '', romanUrdu:''}
// , {id: 5, name: 'Defence Housing Authority Phose III', iconURL: '', romanUrdu:''}
// , {id: 6, name: 'Defence Housing Authority Phose IV', iconURL: '', romanUrdu:''}
// , {id: 7, name: 'Defence Housing Authority Phose V' , iconURL: '', romanUrdu:''}
// , {id: 8, name: 'Gulzar E Hijri Scheme 33'      , iconURL: '', romanUrdu:''}
// , {id: 9, name: 'Saddar', iconURL: '', romanUrdu:''}
// , {id: 10, name: 'Metrovil Colony', iconURL: '', romanUrdu:''}
// , {id: 11, name: 'Bahar Colony', iconURL: '', romanUrdu:''}
// , {id: 12, name: 'Hussainabad', iconURL: '', romanUrdu:''}
// ];

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
