// "use client"; // This is a client component

// // Import necessary dependencies
// import axios from 'axios';
// import React, { useState } from 'react';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';


// type Repo = {
//   GpuNameId: number,
//   GpuName: string,
//   GpuArchitecture: string,
//   GpuBandwidth: string,
//   GpuBaseClock: string,
//   GpuBoostClock: string,
//   GpuBusInterface: string,
//   GpuNumberOfComputeUnits: string,
//   GpuDieSize: string,
//   GpuDirectX: string,
//   GpuNumberOfExecutionUnits: string,
//   GpuFP32Performance: string,
//   GpuMemoryBus: string,
//   GpuMemorySize: string,
//   GpuMemoryType: string,
//   GpuOpenCL: string,
//   GpuOpenGL: string,
//   GpuPixelRate: string,
//   GpuProcessSize: string,
//   GpuNumberOfROPs: string,
//   GpuShaderModel: string,
//   GpuNumberOfShadingUnits: string,
//   GpuNumberOfTMUs: string,
//   GpuTextureRate: string,
//   GpuNumberOfTransistors: string,
//   GpuVulkan: string,
//   priceGpu: string,
//   imgGpu: string
// }


// export default  function PredictionComponent( { params }: { params: { serectgameid: string , cpuNameId:string , GpuNameId :string } } ){

//   // Define state to store the prediction result
//   const [predictions, setPredictions] = useState<number[]>([]);

//   // get id
//   const serectgameid = params.serectgameid
//   const cpuNameId = params.cpuNameId
//   const GpuNameId = params.GpuNameId

//   // get paramiter 
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const selectedOption = urlParams.get('option')
  

//   async function getData(): Promise<Repo[]> {
//     const res = await fetch(`api/getCpuPath/${cpuNameId}`)
  
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
  
//     return res.json()
//   }


//   // Define a function to fetch data from the API
//   const fetchPredictions = async () => {
//     try {
//       // Make a POST request to the API endpoint
//       const response = await axios.post('http://45.91.133.121:80/predict', {
//         // Provide the data in the required format
//         // Adjust the data according to the format expected by the API
//         CpuName: 3,
//         CpuNumberOfCores: 8,
//         CpuNumberOfThreads: 16,
//         CpuBaseClock: 100,
//         CpuCacheL1: 512,
//         CpuCacheL2: 2048,
//         CpuCacheL3: 16,
//         CpuDieSize: 2,
//         CpuFrequency: 3600,
//         CpuMultiplier: 36,
//         CpuMultiplierUnlocked: 1,
//         CpuProcessSize: 14,
//         CpuTDP: 95,
//         CpuNumberOfTransistors: 2,
//         CpuTurboClock: 5000,
//         GpuName: 26,
//         GpuArchitecture: 5,
//         GpuBandwidth: 616000,
//         GpuBaseClock: 1350,
//         GpuBoostClock: 1545,
//         GpuBusInterface: 0,
//         GpuNumberOfComputeUnits: 4,
//         GpuDieSize: 0.000754,
//         GpuDirectX: 1,
//         GpuNumberOfExecutionUnits: 0,
//         GpuFP32Performance: 13450000,
//         GpuMemoryBus: 352,
//         GpuMemorySize: 11000,
//         GpuMemoryType: 2,
//         GpuOpenCL: 2,
//         GpuOpenGL: 4.6,
//         GpuPixelRate: 136000,
//         GpuProcessSize: 12,
//         GpuNumberOfROPs: 88,
//         GpuShaderModel: 6.5,
//         GpuNumberOfShadingUnits: 4352,
//         GpuNumberOfTMUs: 272,
//         GpuTextureRate: 420200,
//         GpuNumberOfTransistors: 18600,
//         GpuVulkan: 1.2,
//         GameName: 5,
//         GameResolution: 1080,
//         GameSetting: 1
//       });

//       // Extract and set the predictions from the response
//       setPredictions(response.data.predictions);
//     } catch (error) {
//       // Handle errors, e.g., log them or show an error message to the user
//       console.error('Error fetching predictions:', error);
//     }
//   };

//   // Call the fetchPredictions function when the component mounts
//   React.useEffect(() => {
//     fetchPredictions();
//   }, []); // The empty dependency array ensures it runs only once when the component mounts

//   // Render the component
//   return (
//     <Container maxWidth="md">

//         <h1>Predictions:</h1>
//         <ul>
//           {predictions.map((prediction, index) => (
//             <li key={index}>{
//               // Round off decimals
//               prediction.toFixed(0)
//               }</li>
//           ))}
//         </ul>

//     </Container>
//   );
// };

"use client"; // This is a client component

// Import necessary dependencies
import axios from 'axios';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Define the component
const PredictionComponent: React.FC = () => {

  // Define state to store the prediction result
  const [predictions, setPredictions] = useState<number[]>([]);

  // Define a function to fetch data from the API
  const fetchPredictions = async () => {
    try {
      // Make a POST request to the API endpoint
      const response = await axios.post('http://45.91.133.121:80/predict', {
        // Provide the data in the required format
        // Adjust the data according to the format expected by the API
        CpuName: 3,
        CpuNumberOfCores: 8,
        CpuNumberOfThreads: 16,
        CpuBaseClock: 100,
        CpuCacheL1: 512,
        CpuCacheL2: 2048,
        CpuCacheL3: 16,
        CpuDieSize: 2,
        CpuFrequency: 3600,
        CpuMultiplier: 36,
        CpuMultiplierUnlocked: 1,
        CpuProcessSize: 14,
        CpuTDP: 95,
        CpuNumberOfTransistors: 2,
        CpuTurboClock: 5000,
        GpuName: 26,
        GpuArchitecture: 5,
        GpuBandwidth: 616000,
        GpuBaseClock: 1350,
        GpuBoostClock: 1545,
        GpuBusInterface: 0,
        GpuNumberOfComputeUnits: 4,
        GpuDieSize: 0.000754,
        GpuDirectX: 1,
        GpuNumberOfExecutionUnits: 0,
        GpuFP32Performance: 13450000,
        GpuMemoryBus: 352,
        GpuMemorySize: 11000,
        GpuMemoryType: 2,
        GpuOpenCL: 2,
        GpuOpenGL: 4.6,
        GpuPixelRate: 136000,
        GpuProcessSize: 12,
        GpuNumberOfROPs: 88,
        GpuShaderModel: 6.5,
        GpuNumberOfShadingUnits: 4352,
        GpuNumberOfTMUs: 272,
        GpuTextureRate: 420200,
        GpuNumberOfTransistors: 18600,
        GpuVulkan: 1.2,
        GameName: 5,
        GameResolution: 1080,
        GameSetting: 1
      });

      // Extract and set the predictions from the response
      setPredictions(response.data.predictions);
    } catch (error) {
      // Handle errors, e.g., log them or show an error message to the user
      console.error('Error fetching predictions:', error);
    }
  };

  // Call the fetchPredictions function when the component mounts
  React.useEffect(() => {
    fetchPredictions();
  }, []); // The empty dependency array ensures it runs only once when the component mounts

  // Render the component
  return (
    <Container maxWidth="md">

        <h1>Predictions:</h1>
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>{
              // Round off decimals
              prediction.toFixed(0)
              }</li>
          ))}
        </ul>

    </Container>
  );
};

export default PredictionComponent;
