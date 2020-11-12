import Ajv from 'ajv';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

// NOTE:  Uniforms tutorial omitted this line below, needed to compile
import {LongTextField, DateField} from 'uniforms-semantic';

const formValues = {
activityTypes: [
    'Account Planning [Management]',
    'Amazon\'s Culture of Innovation [Workshops]',
    'AOD/SME [Thought Leadership]',
    'Architecture Review [Architecture]',
    'AWSome Days [Workshops]',
    'Billing / Trusted Advisor [Cost]',
    'Blog [Thought Leadership]',
    'Cloud Adoption Framework [Architecture]',
    'Competitive Awareness [Management]',
    'Cost Optimization [Cost]',
    'DB Freedom [Architecture]',
    'Demo [Architecture]',
    'Digital Innovation [Workshops]',
    'EBC Support - own accounts [Management]',
    'Game Day [Workshops]',
    'General Tech Content [Thought Leadership]',
    'Hackathon [Workshops]',
    'Meeting / Office Hours [Management]',
    'Immersion Day [Workshops]',
    'Migration Acceleration Program Support [Management]',
    'Migration Readiness Assessment [Architecture]',
    'Other Thought Leadership [Thought Leadership]',
    'Other Workshops [Workshops]',
    'Partner Feedback Loop [Management]',
    'PR-FAQ [Thought Leadership]',
    'Prototype/PoC Support [Architecture]',
    'Prototype Lab [Management]',
    'Public Speaking Conference [Thought Leadership]',
    'RFI and RFP response [Workshops]',
    'Well Architected [Architecture]',
    'White Papers [Thought Leadership]',
    'CSM- Account Planning [Program Execution]'
  ],
  activityTopics: [
    '.NET',
    'AMD',
    'APA',
    'API Gateway',
    'AWS Backup',
    'AWS Budgets',
    'AWS Chatbot',
    'AWS Global Accelerator',
    'AWS Managed Services (AMS)',
    'AWS Systems Manager',
    'AWS Tookits',
    'AWS Transfer for SFTP',
    'Active Directory',
    'Airline MRO (Maintenance, Repair and Operational Supplies)',
    'Airline Operations (Flight, Ground and Crew)',
    'Airline Payments, Settlements and Rev Accounting',
    'Alexa Voice Service over IoT Core',
    'Alexa for Business',
    'Amazon Keyspaces (for Apache Cassandra)',
    'Analytics',
    'App Mesh',
    'AppFlow',
    'Application Development',
    'Application Discovery Service',
    'Application Load Balancer',
    'Appstream',
    'Appsync',
    'Artifact',
    'Athena',
    'Augmented AI',
    'Automotive - Connected Mobility',
    'Automotive - Functional Safety',
    'Automotive - In-vehicle Edge',
    'Autonomous Vehicle - Data Ingestion',
    'Autonomous Vehicle - Data Lake & Analytics',
    'Autonomous Vehicle - Labeling',
    'Autonomous Vehicle - Machine Learning',
    'Autonomous Vehicle - Model Training',
    'Autonomous Vehicle - Simulations',
    'Autoscaling',
    'Batch',
    'Blockchain',
    'Braket',
    'Builders Library',
    'CDK',
    'Certificate Manager',
    'Chime',
    'Citrix on AWS',
    'Classic Load Balancer',
    'Cloud Directory',
    'Cloud Map',
    'Cloud9',
    'CloudEndure Disaster Recovery',
    'CloudEndure Migration',
    'CloudFront',
    'CloudHSM',
    'Cloudformation',
    'Cloudsearch',
    'Cloudtrail',
    'Cloudwatch',
    'CodeArtifact',
    'CodeBuild',
    'CodeCommit',
    'CodeDeploy',
    'CodeGuru',
    'CodePipeline',
    'CodeStar',
    'Cognito',
    'Commercial Cloud Services (CS2)',
    'Communication Applications',
    'Comprehend',
    'Comprehend Medical',
    'Compute',
    'Compute Optimizer',
    'Config',
    'Connect',
    'Containers',
    'Control Tower',
    'Core SAP (ERP/S/4Hana/BusSuite)',
    'Cost Explorer',
    'Cost and Usage Reports',
    'DCA',
    'DMS',
    'DUE',
    'Data Exchange',
    'Data Pipeline',
    'DataSync',
    'Deep Learning AMI',
    'DeepComposer',
    'DeepLens',
    'DeepRacer',
    'Detective',
    'DevOps Cultural Transformation',
    'Developer Experience',
    'Device Farm',
    'Direct Connect',
    'Direct Connect Gateway',
    'DocumentDB',
    'DynamoDB',
    'EBS',
    'EC2',
    'EC2 Image Builder',
    'ECR (EC2 Container Registry)',
    'ECS (EC2 Container Service)',
    'EFS',
    'EKS (EC2 Kubernetes Service)',
    'EMR',
    'Edge Services',
    'Elastic Beanstalk',
    'Elastic Fabric Adapter',
    'Elastic Inference',
    'Elastic Load Balancer',
    'Elastic Search',
    'Elasticache',
    'Electronic Design Automation (EDA)',
    'End User Compute',
    'Establishing Operational Capability',
    'EventBridge',
    'Exchange',
    'FSx for Lustre',
    'FSx for Windows',
    'Fargate',
    'FinServe - Banking',
    'FinServe - Capital Markets',
    'FinServe - Insurance',
    'FinServe - Payments',
    'Firecracker',
    'Forecast',
    'Fraud Detector',
    'FreeRTOS',
    'GPU',
    'Game Development',
    'Game Lift',
    'Game Operations',
    'Game Sparks',
    'GeoSpatial',
    'Getting started on AWS',
    'Glacier',
    'Glue',
    'GovCloud',
    'Graviton',
    'Greengrass',
    'Ground Station',
    'Guardduty',
    'HCLS - Compliance/Privacy/Security',
    'HCLS - Interoperability (data exchange)',
    'HCLS - Population Health',
    'HPC',
    'Healthcare - Imaging',
    'Healthcare - Medical Devices',
    'Honeycode',
    'IPv6',
    'ITAR',
    'ITSM Connector',
    'Identify Access Management (IAM)',
    'Industrial IoT',
    'Inferentia',
    'Inspector',
    'Instance Store',
    'Intelligence Community (IC)',
    'IoT',
    'IoT 1 Click',
    'IoT Analytics',
    'IoT Core',
    'IoT Device Defender',
    'IoT Device Management',
    'IoT Events',
    'IoT SiteWise',
    'IoT Things Graph',
    'Kendra',
    'Key Management Service (KMS)',
    'Kinesis Analytics',
    'Kinesis Firehose',
    'Kinesis Streams',
    'Kinesis Video',
    'LCK',
    'Lake Formation',
    'Lambda',
    'Lambda at the Edge',
    'Landing Zone',
    'Lex',
    'License Manager',
    'Life Sciences - Clinical Trials',
    'Life Sciences - Genomics',
    'Life Sciences - Manufacturing',
    'Life Sciences - Research/Connected Lab/RWE',
    'Lightsail',
    'Local Zones',
    'Lumberyard',
    'MAP',
    'MQ',
    'MXNet',
    'Machine Learning / Artificial Intelligence',
    'Macie',
    'Managed Streaming for Kafka',
    'Management Tools',
    'Manufacturing Business Operations (ERP)',
    'Manufacturing Data Lake',
    'Manufacturing Operations (MES)',
    'Manufacturing Product and Production Design (CAD,CAM,CAE)',
    'Manufacturing Service Chain, Smart Products',
    'Marketplace',
    'Media Broadcast',
    'Media Content Production',
    'Media Data Science & Analytics',
    'Media Direct to Consumer',
    'Media Service (Elemental)',
    'Media Supply Chain & Archive',
    'MediaConnect',
    'MediaConvert',
    'MediaLive',
    'MediaPackage',
    'MediaStore',
    'MediaTailor',
    'Microsoft',
    'Microsoft Dynamics',
    'Microsoft Windows Server',
    'Migration Factory',
    'Migration Hub',
    'Migration Readiness Assessment',
    'Migrations',
    'Mobile',
    'Mobile Analytics',
    'Mobile Hub',
    'Mobile SDK & Amplify',
    'Modernizing ERP workloads',
    'Modernizing legacy stack',
    'Modernizing windows stack',
    'Multi-Account Strategy/Establishing Foundations',
    'NAT Gateway',
    'NICE DCV',
    'NatSec - US',
    'Neptune',
    'Networking',
    'Nitro Enclaves',
    'Oil & Gas - Downstream',
    'Oil & Gas - Industrial Automation',
    'Oil & Gas - Midstream',
    'Oil & Gas - OSDU',
    'Oil & Gas - Retail',
    'Oil & Gas - Trading',
    'Oil & Gas - Upstream',
    'Operations Review',
    'Opsworks',
    'Oracle Applications',
    'Oracle Industry Applications',
    'Oracle Middleware Products',
    'Oracle Workloads',
    'Organizations',
    'Outposts',
    'Partner Migration Program',
    'Partner Solution',
    'Personal Health Dashboard',
    'Personalize',
    'Pinpoint',
    'Polly',
    'Power & Utilities - Customer Care, Retailing',
    'Power & Utilities - Distribution, DERMS, DER',
    'Power & Utilities - Generation, Sourcing',
    'Power & Utilities - Meter to Cash',
    'Power & Utilities - Transmission',
    'PrivateLink',
    'PyTorch',
    'Quantum Ledger Database',
    'Quicksight',
    'RDS Aurora MySQL',
    'RDS Aurora PostgreSQL',
    'RDS MariaDB',
    'RDS MySQL',
    'RDS Oracle',
    'RDS PostgreSQL',
    'RDS SQL Server',
    'Redshift',
    'Reinforcement Learning',
    'Rekognition',
    'Reource Access Manager',
    'Retail - Advanced Retail Data Science',
    'Retail - Core Retail Business Apps',
    'Retail - Corporate Merchandising and Planning',
    'Retail - Customer Engagement (Pre and Post Purchase)',
    'Retail - Physical, Digital and Virtual Store',
    'Retail - Supply Chain and Distribution',
    'RoboMaker',
    'Robotics',
    'Robotics',
    'Route 53',
    'S3',
    'S3-TA',
    'S3/Glacier Select',
    'SAP',
    'SAP BusinessObjects',
    'SAP Commerce',
    'SC2S',
    'SES',
    'SNS',
    'SQS',
    'SSO',
    'SWF',
    'SageMaker',
    'SageMaker Ground Truth',
    'SageMaker Neo',
    'Secret/Top Secret',
    'Secrets Manager',
    'Security - Compliance',
    'Security - Data Protection',
    'Security - Identity',
    'Security - Infrastructure and Network',
    'Security - Threat Detection Response',
    'Security Hub',
    'Semiconductors',
    'Server Migration Service',
    'Serverless',
    'Serverless Repository',
    'Service Catalog',
    'Service Now',
    'Sharepoint',
    'Shield',
    'Skype for business',
    'Snowball',
    'Snowball Edge',
    'Snowmobile',
    'Spot',
    'Starfruit',
    'Step Functions',
    'Storage',
    'Storage Gateway',
    'Sumerian',
    'Supply Chain',
    'TC2S',
    'TSO',
    'Telecom - 5G Edge',
    'Telecom - OSS / BSS',
    'Telecom - Telco Analytics',
    'Telecom - Telephony VoIP / CaaS',
    'Telecom - Wavelength',
    'Telecom - vEPC',
    'Tensorflow',
    'Textract',
    'Thinkbox/Deadline',
    'Timestream',
    'Transcribe',
    'Transit Gateway',
    'Transit VPC',
    'Translate',
    'Travel Data Platforms (ODS, MDM, CDP, Big Data)',
    'Travel Digital Customer Engagement',
    'Travel Pricing, Shopping and Revenue Management',
    'Travel Retailing and Distribution',
    'Trusted Advisor',
    'UC2S',
    'VM Import/Export',
    'VMware Cloud on AWS',
    'VPC',
    'VPN',
    'Value Maps',
    'WAF/Firewall Manager',
    'Well-Architected',
    'Workdocs',
    'Worklink',
    'Workmail',
    'Workspaces',
    'X-Ray',
    'Other'
  ],
  activityDomains: [
    'Analytics',
    'Automotive',
    'Blockchain',
    'Builder Experience',
    'Communication Applications',
    'Compute/HPC',
    'Containers',
    'Database',
    'Digital Advertising',
    'Edge Services',
    'End User Compute',
    'Enterprise Transformation',
    'Financial Services',
    'Games',
    'GeoSpatial',
    'GovCloud',
    'Greenfield',
    'Healthcare and Life Sciences',
    'IoT',
    'Machine Learning',
    'Management & Governance',
    'Manufacturing',
    'Marketplace',
    'Media & Entertainment',
    'Microsoft',
    'Migrations',
    'Mobile',
    'Modernization',
    'NatSec',
    'Networking',
    'Oil & Gas',
    'Outposts',
    'Power & Utilities',
    'Retail',
    'SAP',
    'Security',
    'Semiconductors',
    'Serverless',
    'Spatial Computing',
    'Storage',
    'Telecom',
    'Travel',
    'VMware',
    'Other'
  ],
    activityComplexity: [
        '100: Introductory and overview engagement',
        '200: Intermediate engagement; requires specific details about the topic',
        '300: Advanced material; requires in-depth understanding of features in a real-world environment',
        '400: Expert engagement; requires expert-to-expert interaction and coverage of specialized topics'
    ],
    activityInteractionType: [
        'Virtual Meeting',
        'Onsite Meeting',
        'Email'
    ],
    activityPriority:[
        'Low',
        'Moderate',
        'High'
    ],
    routeToGroup: [
    'AutoRoute (Automatically route to the appropriate team)',
    'Central SA',
    'Capture and Proposal Team'
    ],
};

const simpleRequestSchema = new SimpleSchema({
    accountLink: { label: 'Salesforce Account Link', type: String },
    accountName: { label: 'Account Name', type: String },
    activityRequester: {label: 'Requester Alias', type: String},
    accountOpportunity: { label: 'Salesforce Opportunity Link', type: String },
    activityType: { label: 'Activity Type', type: String, allowedValues: formValues.activityTypes },
    activityTopic: { label: 'Topic', type: String, allowedValues: formValues.activityTopics },
    activityDomain: { label: 'Domain', type: String, allowedValues: formValues.activityDomains },
    activityComplexity: { label: 'Complexity', type: String, allowedValues: formValues.activityComplexity },
    activityDetails: { label: 'Describe your Request', type: String },
    activityFromDate: { label: 'Date Range From:', type: Date, defaultValue: new Date() },
    activityToDate: { label: 'Date Range To:', type: Date, defaultValue: new Date() },
    activityLocation: { label: 'Activity Location', type: String },
    activityInteractionType: { label: 'Interaction Type', type: String, allowedValues: formValues.activityInteractionType },
    activityLanguage: {label: 'Language', optional: true, type: String},
    activityAM: {label: 'Account Owner', optional: true, type: String},
    activityrequestedSA: {label: 'Requested SA(if any)', optional: true, type: String},
    activityRegion: {label: 'Region', type: String},
    activitySubregion: {label: 'Sub-Region', type: String},
    activityTerritory: {label: 'Territory', type: String},
    activityWatchers: {label: 'Watchers', optional: true, type: String},
    activitySubtopic: {label: 'Sub-Topic', optional: true, type: String},
    activityGeo: {label: 'Geo', type: String},
    activityTerritorySegment: {label: 'Territory Segment', type: String},
    activityBusinessUnit: {label: 'Business Unit', type: String},
    activityRoute: { label: 'Route To Group', type: String, allowedValues: formValues.routeToGroup, defaultValue:'AutoRoute (Automatically route to the appropriate team)'},
});


const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema) {
    const validator = ajv.compile(schema);

    return model => {
        validator(model);

        if (validator.errors && validator.errors.length) {
            throw { details: validator.errors };
        }
    };
}

const schemaValidator = createValidator(simpleRequestSchema);

const bridge = new SimpleSchema2Bridge(simpleRequestSchema, schemaValidator);

export default bridge;