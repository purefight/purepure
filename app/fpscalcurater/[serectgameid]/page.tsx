"use client";
// pure
import { useEffect, useState } from "react";

import { CardActionArea } from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";
import { AddRing4 } from "../../icons/AddRing4";
import "./buttonCalcurate.css";
import "./selection.css";

type Repo = {
  encodingId: string;
  gameName: string;
  image: string;
};

type RepoCpu = {
  CpuNameId: number;
  CpuName: string;
  CpuNumberOfCores: string;
  CpuNumberOfThreads: string;
  CpuBaseClock: string;
  CpuCacheL1: string;
  CpuCacheL2: string;
  CpuCacheL3: string;
  CpuDieSize: string;
  CpuFrequency: string;
  CpuMultiplier: string;
  CpuMultiplierUnlocked: string;
  CpuProcessSize: string;
  CpuTDP: string;
  CpuNumberOfTransistors: string;
  CpuTurboClock: string;
  CpuImg: string;
};

type RepoGpu = {
  GpuNameId: number;
  GpuName: string;
  GpuArchitecture: string;
  GpuBandwidth: string;
  GpuBaseClock: string;
  GpuBoostClock: string;
  GpuBusInterface: string;
  GpuNumberOfComputeUnits: string;
  GpuDieSize: string;
  GpuDirectX: string;
  GpuNumberOfExecutionUnits: string;
  GpuFP32Performance: string;
  GpuMemoryBus: string;
  GpuMemorySize: string;
  GpuMemoryType: string;
  GpuOpenCL: string;
  GpuOpenGL: string;
  GpuPixelRate: string;
  GpuProcessSize: string;
  GpuNumberOfROPs: string;
  GpuShaderModel: string;
  GpuNumberOfShadingUnits: string;
  GpuNumberOfTMUs: string;
  GpuTextureRate: string;
  GpuNumberOfTransistors: string;
  GpuVulkan: string;
  priceGpu: string;
  imgGpu: string;
};

export default function PureId({
  params,
}: {
  params: { serectgameid: string };
}) {
  const id = params.serectgameid;

  const [data, setData] = useState<Repo>({
    encodingId: "",
    gameName: "",
    image: "",
  });

  const [isLoading, setLoading] = useState(true);
  const [showCpuCard, setShowCpuCard] = useState(false);
  const [showGpuCard, setShowGpuCard] = useState(false);
  const [showFpsCard, setShowFpsCard] = useState(false);

  const [selectedCpu, setSelectedCpu] = useState<RepoCpu | null>(null);
  const [selectedGpu, setSelectedGpu] = useState<RepoGpu | null>(null);

  const [selectedOption, setSelectedOption] = useState("0");

  const [counter, setCounter] = useState(0);

  const handleCardClickCpuCard = (selectedData: RepoCpu) => {
    setSelectedCpu(selectedData);
  };

  // set show cpu card
  const handleSelectCpu = (selectedCpu: RepoCpu) => {
    setSelectedCpu(selectedCpu);
    setShowCpuCard(true);
    setShowGpuCard(false);
    setShowFpsCard(false);
  };

  const handleCardClickGpuCard = (selectedGpu: RepoGpu) => {
    setSelectedGpu(selectedGpu);
  };

  // set show Gpu card
  const handleSelectGpu = (selectedGpu: RepoGpu) => {
    setSelectedGpu(selectedGpu);
    setShowCpuCard(false);
    setShowGpuCard(true);
    setShowFpsCard(false);
  };

  // set show Fps card
  const handleSelectFpsCalcurater: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowFpsCard(true);
  };

  // set select choise
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // Mapping data

  const cpuDieSizeMap = new Map<string, number>([
    ["?", 2],
    ["0.000074", 1],
    ["0.000192", 0],
  ]);

  const cpuNumberOfTransistorsMap = new Map<string, number>([
    ["?", 2],
    ["3800", 1],
    ["4800", 0],
  ]);

  const GpuArchitectureMap = new Map<string, number>([
    ["Turing", 5],
    ["Pascal", 4],
    ["Maxwell 2.0", 3],
    ["RDNA 1.0", 2],
    ["GCN 5.0", 1],
    ["GCN 4.0", 0],
  ]);

  const gpuBusInterfaceMap = new Map<string, number>([
    ["PCIe 3.0 x16", 1],
    ["PCIe 4.0 x16", 0],
  ]);

  const gpuNumberOfComputeUnitsMap = new Map<string, number>([
    ["?", 4],
    ["40", 3],
    ["36", 2],
    ["64", 1],
    ["32", 0],
  ]);

  const gpuDirectXMap = new Map<string, number>([
    ["12 Ultimate", 1],
    ["12", 0],
  ]);

  const gpuNumberOfExecutionUnitsMap = new Map<string, number>([["?", 0]]);

  const gpuMemoryTypeMap = new Map<string, number>([
    ["HBM2", 3],
    ["GDDR6", 2],
    ["GDDR5X", 1],
    ["GDDR5", 0],
  ]);

  const gpuVulkanMap = new Map<string, number>([
    ["1.2.131", 2],
    ["1.1.126", 1],
    ["1.1.125", 0],
  ]);

  const [predictions, setPredictions] = useState<number[]>([]);

  const CpuCard = dynamic(() => import("../../component/cpuCard"), {
    ssr: true,
  });

  const GpuCard = dynamic(() => import("../../component/gpuCard"), {
    ssr: true,
  });

  useEffect(() => {
    fetch("/api/getgamepath/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (selectedCpu && selectedGpu) {
      // Define a function to fetch data from the API
      const fetchPredictions = async () => {
        try {
          // Make a POST request to the API endpoint
          const response = await axios.post("https://ml.warayut.xyz/predict", {
            // Provide the data in the required format
            // Adjust the data according to the format expected by the API
            CpuName: selectedCpu.CpuNameId,
            CpuNumberOfCores: selectedCpu.CpuNumberOfCores,
            CpuNumberOfThreads: selectedCpu.CpuNumberOfThreads,
            CpuBaseClock: selectedCpu.CpuBaseClock,
            CpuCacheL1: selectedCpu.CpuCacheL1,
            CpuCacheL2: selectedCpu.CpuCacheL2,
            CpuCacheL3: selectedCpu.CpuCacheL3,
            CpuDieSize: cpuDieSizeMap.get(selectedCpu.CpuDieSize),
            CpuFrequency: selectedCpu.CpuFrequency,
            CpuMultiplier: selectedCpu.CpuMultiplier,
            CpuMultiplierUnlocked: selectedCpu.CpuMultiplierUnlocked,
            CpuProcessSize: selectedCpu.CpuProcessSize,
            CpuTDP: selectedCpu.CpuTDP,
            CpuNumberOfTransistors: cpuNumberOfTransistorsMap.get(
              selectedCpu.CpuNumberOfTransistors
            ),
            CpuTurboClock: selectedCpu.CpuTurboClock,
            GpuName: selectedGpu.GpuNameId,
            GpuArchitecture: GpuArchitectureMap.get(
              selectedGpu.GpuArchitecture
            ),
            GpuBandwidth: selectedGpu.GpuBandwidth,
            GpuBaseClock: selectedGpu.GpuBaseClock,
            GpuBoostClock: selectedGpu.GpuBoostClock,
            GpuBusInterface: gpuBusInterfaceMap.get(
              selectedGpu.GpuBusInterface
            ),
            GpuNumberOfComputeUnits: gpuNumberOfComputeUnitsMap.get(
              selectedGpu.GpuNumberOfComputeUnits
            ),
            GpuDieSize: selectedGpu.GpuDieSize,
            GpuDirectX: gpuDirectXMap.get(selectedGpu.GpuDirectX),
            GpuNumberOfExecutionUnits: gpuNumberOfExecutionUnitsMap.get(
              selectedGpu.GpuNumberOfExecutionUnits
            ),
            GpuFP32Performance: selectedGpu.GpuFP32Performance,
            GpuMemoryBus: selectedGpu.GpuMemoryBus,
            GpuMemorySize: selectedGpu.GpuMemorySize,
            GpuMemoryType: gpuMemoryTypeMap.get(selectedGpu.GpuMemoryType),
            GpuOpenCL: selectedGpu.GpuOpenCL,
            GpuOpenGL: selectedGpu.GpuOpenGL,
            GpuPixelRate: selectedGpu.GpuPixelRate,
            GpuProcessSize: selectedGpu.GpuProcessSize,
            GpuNumberOfROPs: selectedGpu.GpuNumberOfROPs,
            GpuShaderModel: selectedGpu.GpuShaderModel,
            GpuNumberOfShadingUnits: selectedGpu.GpuNumberOfShadingUnits,
            GpuNumberOfTMUs: selectedGpu.GpuNumberOfTMUs,
            GpuTextureRate: selectedGpu.GpuTextureRate,
            GpuNumberOfTransistors: selectedGpu.GpuNumberOfTransistors,
            GpuVulkan: gpuVulkanMap.get(selectedGpu.GpuVulkan),
            GameName: id,
            GameResolution: 1080,
            GameSetting: selectedOption,
          });

          const predictionsData = response.data.predictions;

          setPredictions(predictionsData);
        } catch (error) {
          // Handle errors, e.g., log them or show an error message to the user
          console.error("Error fetching predictions:", error);
        }
      };

      if (showFpsCard) {
        fetchPredictions();
      }
    }
  }, [selectedCpu, selectedGpu, showFpsCard, selectedOption]);

  useEffect(() => {
    if (selectedCpu && selectedGpu && showFpsCard) {
      let predictionsDataShow = 0; // เริ่มต้นที่ 0

      if (predictions.length > 0 && !isNaN(predictions[0])) {
        predictionsDataShow = parseInt(predictions[0].toFixed(0));
      }

      const intervalId = setInterval(() => {
        if (counter === predictionsDataShow) {
          clearInterval(intervalId);
        } else {
          // เปลี่ยนจากการตรวจสอบเงื่อนไขเพิ่มเติม เช่น counter < predictionsDataShow และ counter > predictionsDataShow
          // เป็นการเพิ่มและลดค่า counter ไปทีละ 1 ตามความต้องการ
          setCounter(
            (prevCounter) =>
              prevCounter + (counter < predictionsDataShow ? 1 : -1)
          );
        }
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, [counter, predictions, selectedCpu, selectedGpu, showFpsCard]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <main>
      <div className="square-linear"></div>
      <h1 className="Firsttext">คำนวณเฟรมเรท (FPS)</h1>

      <div className="square-white">
        <CardActionArea className="card">
          <Link href={`/fpscalcurater`}>
            <div className="containerGameImg">
              <img src={data.image} alt="5 Terre" className="gameImg"></img>
              <div className="textGameName">
                <h3 className="gameName">{data.gameName}</h3>
              </div>
            </div>
          </Link>
        </CardActionArea>

        {/* Selection CPU */}
        <div className="cpu">
          <div className="item-group">
            <div className="item">
              <div className="rectangle" />
              <div className="text-name-component">ซีพียู</div>
              <img className="image-icon" src="https://img.icons8.com/color/96/electronics.png" />
              <div className="rectangle-blue"></div>
            </div>
          </div>
          <CardActionArea
            onClick={() =>
              handleSelectCpu({
                CpuNameId: 0,
                CpuName: "กำลังเลือก...",
                CpuNumberOfCores: "",
                CpuNumberOfThreads: "",
                CpuBaseClock: "",
                CpuCacheL1: "",
                CpuCacheL2: "",
                CpuCacheL3: "",
                CpuDieSize: "",
                CpuFrequency: "",
                CpuMultiplier: "",
                CpuMultiplierUnlocked: "",
                CpuProcessSize: "",
                CpuTDP: "",
                CpuNumberOfTransistors: "",
                CpuTurboClock: "",
                CpuImg:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAACuCAMAAABOUkuQAAAA8FBMVEX///+iuhXDlnzM1i6fuACctgCatADDlXuhuQy/jnHCk3jAkHTI0wDM1iqhuQeetgDK1BfBzoTe5MPT3Kzh5snF0YzL1pru8ePc47/X37T6+vjQ2ab19vDn69W4yG2twE+ovD+9y3ro3tngyr7w8uewwlijuSalujLm18/bwbPTs6K0xWPO2Z26yXOwwlbMqJTy6uXi56nc4o7M1jvm6rnT22Lr7snw8tfO11Dg5Z3BnIjq5uTbz8nHp5XOuKzHurTBjnzIyj/Eq2S9slK+nYzIw0TDoXDFvUy1nGLc16Tv6d/Y33nO1lbb4Ybh5qPX3nLW03RGAAAPGElEQVR4nO1cZ0PizBamJIEklCgiEMACqIC64NpZ9d1b3veWLf7/f3MnZZIzJZMMorkxPF92FzjMnIfTZ7KFQsYxN0oJUNFX39LeaToYGYkIMktPae80HdjPeiUBP4Y5TnunKWGmJzEgQ3+x097pehhN37bxp0QOVtGfM8pP4Q/dNEsv46flegpMS2YSBzMzHKBXjoKGYZr6avU8expJaTJaJeKnomc5QFcCFSsVl6jSPKnbjVaJAnTJKGXXgBCe6ShSMZA5zeJZmibkp2Q+f4Qe7web5ygOS4uRSGxaSshPSX/5KFXeDeOKyctGhiD7jJPF509CEMJ0oesGq7JhTnmftl/MxPyUMh2jCSzHC1NnbEl/XtIf/DZPVB96qOhCV80cltO5YZK2ZFBOMlpI8IPC2eciyAUiiaQANlNPJW7EiiSolNUyOgb0HMPQx46mUuHnkxA0GI1ns7GL2XyxmM8QpsvljLETQ1/MZMKPR5CRRYJsezn1GFmskN6maThltPuHU1F7/+Km/mTzH4KgQdraroGZrnusOApLeYw0KiaTBbMA811JIWBmsxXTP4wgPZsEFd7Zs7JPUGGUtNvMK0HOkQQuaSrvyFWGCSo4XbnLT2k1fz+CPkerMWLrwi1BIezxSqrByhlB01mJNwzaEuTCni508/3oyfjAbDmelyS7c3mCuEPJTGA5W+nGexqPC2OWtp7rYYSM5x0jD4CexXkHwupdIw9AZq92rCL48QZC7nzI3ASJFSNtTdfFE9XSe5zo5mo2exmPx09TB/OKMzoypQdlABkO04tgLoQsRtfn09FotGQGXPZyOXqazQ19zSmSsUhDtw3hRffMxljMprGjv+V0LYIyPre3R8iRRklVWKwTk7Ld0MvBXmcUmfVuQwrjNQKRntVEvxaYWW18MW5+igseSbGknKyiz+crQ2evPQCC5mlv+kNBHkob/k2r5XI6i5py54wgwoQM/QVUB/aKa0af4w5VckATMudUgcA7TspXkCZNiO1EB2whYGZ04rE2YJvLGWYwTwDlK4shTIGRVErs+yOqVjIyfhNYHoR5cHp1qt7mkfi5MQUmUlnxPkEylKdmzAPoWSs694YUwVCmTzbWQxinKya3FSWSmZGvStFF8JBHZcUflRBumLsghBAc5ked68DT/lwNPDACE4nK4ouQoUxPXddGUFFHMQTCUP7ymAvceBn8UhmEoTyGaQe4q4iIQ6Aa0DN5G/jtwBNY/nNToK3NqwkFbsS/Lw761ryaUMAQlwB7a0KAIV7BCE0o08eHb8HYiLYhaEJ5mwqFwDUzLw5BE8ricz+bQcAQm8tgIsvb5BUgYIjtuUBLZuY2CoFszzIU9hv5G70CfNOjmi4Qp3Pakfmgctng7uqm4/5tGbRk/PFsbuDP0PxHDL/WLMuqvTphJ2xaczkXCuET4cahzrVVdmBdI4qmwXAtz1HIgfPgWcWdUj/W6mUP1iu4VZTbjgwDVdUVxNC3wYNVDlC7Cbwsn6NFiIGOCKp8v7DqZYDaYCqotnOGZ6PyvfQ3q0yg/vMPI/flNMY3/fvf6/UyBesf33Pe1AP880+L5seh6C+3Fsp9FEK4v2YMyPWz68o2kbn4WuMShCj61/eSntvRYgBcJPJg/buSswt5HDxGGZBnRbnuWB1MYJFYrqOWjOSrfpv2DlPGFSSkXnt9vHmkfM76T9p7TBP2LWFAD94k+qZGUFT7b8q7TBF3hEfVy/j1e4Ki+kOae0wVP8gQbd0E7/wi37hKcZMp4r5M5XgLvEe+Veukt830wBSJ0JlskqH6dXr7TAucIrH+M3zbps3ra3pbTQe/eUVitJchP7tPb7MpgJgkAoaiInUZ5rk84Caiy6hb+GCezPYefT9S3fOH4iurPqbo2vOlG56J1e5S3veH4SqSIKfruP199fsn1wfrVl4GjZaoked0ruFbOWlhmSyVHDkprbkxJiFqk7R3/xG4k2KIPP7IRwtrCwI1A+v6ugZJsh7T3v5H4FdyI3IK6fuvdRC6c1FaD7i5ql5DOYxuZV89ibvXGpbJRwt7x/GzenmArKVcI9gDPnXz4L+Vj3z2g/Wz+i/3nfvHa0CSBavoyaNrYvkI1oUy42dhNdj5jc2FTu4dl1iL+bbPCLYxJeLL5OrWIYlu591as17/0J2mhq+Mn9XIDwxubq0ymbe8qT+O3p8ezD2G2HL5lzcyyUW6d9Ch/cwSzzbu/aFtLT/T2Ct6EC3M4v7Jfh1MIT8/fpJ+JhrV45N96+H/oXO1EQYOJggdhKGLPQe7u12EXq+3a0cJDQRC5LNPA+q8JzoCX/kGVJNrypxNSQlgqcj3JpenGoIaB0VRVO3YFxocSwhdEouTh/OR7cTgFl9AD04Vu+3Ly4OD8/Pzk5MvhwhHCGenCBoBVdW04wlPyJc6ixC65JtqS1OqxcRQTl1te3JCTcKMyNI6ohK8sXwDCrxwr+jw7aLhoBqCs6TWdYWGp1JCLc5O9rTkmrrfcu6sKyt0CJe0iU6Vf/D86hmaVQ+S/J4m8ZsgaEN3o5JCe+xWTuW+An0JMsUjaSGCBqK0tjiFzl3dNyBwElSUXFP5soZ21SNmLx1V7iuKRbVbmEgLKaT5wtKak8h/4RwPaqVd6TU1u7AnL8Q8UtuVV7a/xsLKPrksKK2ZdI+LROsWBvh9RXZNtVPoywsNaYZa0t+BGOq9mSFQWtPpHheJNbKUPFhH2WN5ISYQ9cTfoTgJm3rpIs7weEJtat3fgZ+R6T6ySLwUb7SKkhWt7LCwIy8kx1BVO9jt7O1oDULZGIaq2jkSamvEFzMMFR7CeRl4NbpIFDOkFo8vDqifJZYhhSckxVC16mUg+wh+KIahatP35ENCiGFoEPhZ2N2HRSKb34QMaT1XvE3sK44hr/ix94nKRd2VYShM0TBpopAiYigMdWdQiGEoLK2DdM8WiQCikKLhNftwYzEMBUJEVJViCERXmLzQy4LMq+wEQkOV+3KA1zqZ7tkiMSFDKHdgnIBPIYcRMAS0g0lA7UowpIIqrwm+ui1iCGbLGIZwae2dbPCKxIQMaeGn4E+JGGoLtAsLH/hTsgwJHEYD5QgoomMYAhXXSRjheQzh0yF3mM8rEhMyVD0DrIOgghwmmqHqKfhuKCTDEFT2jGBIUDGqIElDWo/phR34p7DWj99lXCRG/i8x0Q4DOwUbmsM6DCk9emGROYSJD/40yBxEDO3yF+YyhEvrusUtEhMyVFTDT1EOI/KyUAh2XlIMKSfBp2DJL2aoEXbxF1Dokqs22cIKJ4kiZfe4n0IMCVoV4E6EdgxDohZLxe0mMexADA1FQjhHdAghPkOFx7C0jpkkChgKAxGxUTFD1SIWIjeagCH4K+y4wZqoMhyHYRkC8zT12BVqqXDwoBxEKI4fEeIViUkZKiqHXvgaNok1u4QZM0JHnskOibGKwszQGIbUyyZIQer55XmTXIbHkHoAiHWE4L+FDKEqqI5Q+yXmh9PbK6CvaWjt3d3uAfGjOObAMASFqlq7ywrFMoRM0yaKYaa34zCkItM8As0bEqImV9EMFe5erx9e448LaYZQCIBNhuKMxKk1e8z0Q+0X9mOEGIYoZd3MORHOWBFD1NjNjQMDYb8vYCghKHNwh8Hi4QbLkJtGYrrZPr0wxZCXFoS9Owq6tJCb4YUDb1ehTTLk9YxnjYj13DUZhryC/0hEURxDOFe3BRQhhkgbwhXbvkhowwy5Q2jHcAVzaMQQOR/0tbObIqEYhoLK4jCaZ+QwJENBZXEuEHozQ6Q54PZPZLgopLS4QqKTmhiGQP0ezTNtQ6Atij6O2DBDjS/45QtBxUsxFGrXEghdCBkCLUP0GQhtQ2pYY0WfgTRO6IXfxBCYIEQbLs0Q0C56HCdmCDbJ0dN6xBBkgmgBI3uYzTLUgAeUkUdizpEDECK0iwzxYobIGW0Uz8hhIEPkuCAqlYZusQmGiCObQVRUoRgitLMjhRiGgMMQJBfCrFhVmzBlkAyF7Y2HQ74Q8au/lSHqy8LaRCHG8khZwBClXRjiKSHq2IpgiB4eDbxorZx2CkNwDwA5DGBIpWpQ2/tkozgsdEDg5pz2SgKEFPo8wm/ZqkprD05hSYZo7fzapKr292AoYwfqIUOsEi7P3mUPkCCRw4T1MxGFXLifbBSdVhI0zZtkiLVH13CrzUmBKFOQOYQMsRtwyay6o2ZAkYghdspf6GtV5dRrm9twgyFDKjMsKLSQUNET2hfQL4tQWfbg2EY/iUcQNnyfodAB2XOwwqniE4TkQyGGocBhWGtA6J+d47Fo0M5WAUN0FPJ0OTvHo7DgF6VjnDwChnhkd4raqX/uAAIMYIinXedUa/pCoYuwA/WAIXaETSJIGWiHAUN0FKIRpIwNMBSsybnig9QN/hakU3jkwNcuFApchGUIKxuvAt4iYgjPy7kmRKCb+OuTflPjKO6TuEACDMUvj4c30QxxAgoN/+DNYUhLZkKFYEDB9WEpYIb4JgSBEwQ4lIlzkNBFIhlKpIEXz5w4oCU0oQL+RTfGUJKQ70+NQ4aSrO67CHso4zMUT3IBx7OQoQQmhH/RtzPkO0y8CRXw2XTIUCLtPBfhMCSjgDsJDRhKZEJ+MbwphpJVDV6cDBhKGARdF2EZ8kIKW2tHr+ysp/k7SARtgwwpSazBLw2CYyv2hCd6hSiGEjSWzu17yobie61Q6M0MeebAKWt56K/DkEcrezjshV+leOLdcz9y77l7l9aLxWaTuLbueeo5Lh8bxS+u0FG80Ns7VzyE2O8htFqtPsLFxT5Cu93e2dk5Pj6+dC7fO7fvz1TfMfyOoQqF+heejC90jIWOsGvSwDm8oVBX1nmX1nF8xocMiYXY4aY0cDpOgGoQ1FVpIdaNZe/kN5z4LHsnv9p8M0GiKTh/TcexZS/DcrPPjtTVX8VrEEXnGhwhdQP/Jd5E7gGEhnteNJATqmpMV+xqqwFbEz/po2k7/rWrvqYmFzreyH8gNNQUz6Edz45xGVU98n6UjpTQWcQvafecANZq9Vq9Xrfb3d3ddZ4P8x4VGzpPjU0mE/cpsgHUFAv1WKFOpNDbsO8lhcPDLycotJ4fHFxeOrEWhVwn8jpR+8LbVKsX2kLfETp0hU4SC22xxRZbbLHFFltsscUWW2yxxRZbfHb8DyUCcGNO7FzzAAAAAElFTkSuQmCC",
              })
            }
          >
            <div className="selectionOption">
              {selectedCpu ? (
                <div className="button-select-afterSelected">
                  <div className="container-Img-aftreselected">
                    <img
                      src={selectedCpu.CpuImg}
                      className="img-after-selected"
                    ></img>
                  </div>
                  <div className="rectangle-button-afterSelected" />
                  <div className="text-name-select">{selectedCpu.CpuName}</div>
                </div>
              ) : (
                <div className="button-select">
                  <div className="rectangle-button" />
                  <div className="text-name-select">เลือก</div>
                  <AddRing4 className="add-ring" />
                </div>
              )}
            </div>
          </CardActionArea>
        </div>

        {/* Selection GPU */}
        <div className="gpu">
          <div className="item-group">
            <div className="item">
              <div className="rectangle" />
              <div className="text-name-component">การ์ดจอแสดงผล</div>
              <img className="image-icon" width="80" height="80" src="https://img.icons8.com/office/80/video-card.png" alt="video-card"/>
              <div className="rectangle-blue"></div>
            </div>
          </div>
          <CardActionArea
            onClick={() =>
              handleSelectGpu({
                GpuNameId: 0,
                GpuName: "กำลังเลือก...",
                GpuArchitecture: "",
                GpuBandwidth: "",
                GpuBaseClock: "",
                GpuBoostClock: "",
                GpuBusInterface: "",
                GpuNumberOfComputeUnits: "",
                GpuDieSize: "",
                GpuDirectX: "",
                GpuNumberOfExecutionUnits: "",
                GpuFP32Performance: "",
                GpuMemoryBus: "",
                GpuMemorySize: "",
                GpuMemoryType: "",
                GpuOpenCL: "",
                GpuOpenGL: "",
                GpuPixelRate: "",
                GpuProcessSize: "",
                GpuNumberOfROPs: "",
                GpuShaderModel: "",
                GpuNumberOfShadingUnits: "",
                GpuNumberOfTMUs: "",
                GpuTextureRate: "",
                GpuNumberOfTransistors: "",
                GpuVulkan: "",
                priceGpu: "",
                imgGpu:
                  "data:image/png;base64,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",
              })
            }
          >
            {/* {selectedGpu ?  */}
            <div className="selectionOption">
              {selectedGpu ? (
                <div className="button-select-afterSelected">
                  <div className="container-Img-aftreselected">
                    <img
                      src={selectedGpu.imgGpu}
                      className="img-after-selected"
                    ></img>
                  </div>
                  <div className="rectangle-button-afterSelected" />
                  <div className="text-name-select">{selectedGpu.GpuName}</div>
                </div>
              ) : (
                <div className="button-select">
                  <div className="rectangle-button" />
                  <div className="text-name-select">เลือก</div>
                  <AddRing4 className="add-ring" />
                </div>
              )}
            </div>
          </CardActionArea>
        </div>

        {/* Selection Screen resolution */}
        <div className="resolution">
          <div className="item-group">
            <div className="item">
              <div className="rectangle" />
              <div className="text-name-component">ความละเอียดหน้าจอ</div>
              <img className='image-icon' width="96" height="96" src="https://img.icons8.com/fluency/96/monitor--v2.png" alt="monitor--v2"/>
              <div className="rectangle-blue"></div>
            </div>
          </div>
          <div className="selectionOption">
            <div className="text-name-fix">1920x1080</div>
          </div>
        </div>

        {/* Selection Graphics settings */}
        <div className="graphics-settings">
          <div className="item-group">
            <div className="item">
              <div className="rectangle" />
              <div className="text-name-component">การตั้งค่ากราฟิก</div>
              <img className='image-icon' width="64" height="64" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-fps-gaming-ecommerce-flaticons-flat-flat-icons.png" alt="external-fps-gaming-ecommerce-flaticons-flat-flat-icons"/>
              <div className="rectangle-blue"></div>
            </div>
          </div>
          <CardActionArea>
            <select
              className="selectionOptiongraphic"
              onChange={handleSelectChange}
            >
              <option value="1">ปานกลาง</option> {/* med = 1 */}
              <option value="0">สูงสุด</option> {/* max = 0 */}
            </select>
          </CardActionArea>

          <div className="buttonCalcurater">
            {
              <button className="buttonFps" onClick={handleSelectFpsCalcurater}>
                คำนวณ FPS
              </button>
            }
          </div>
        </div>
      </div>
      <div>
        {showCpuCard && (
          <CpuCard handleCardClickCpuCard={handleCardClickCpuCard} />
        )}
        {showGpuCard && (
          <GpuCard handleCardClickGpuCard={handleCardClickGpuCard} />
        )}
        {showFpsCard && (
          <div className="predictions">
            <div className="square-white-predictions">
              <div className="power">
                <div className="skill">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">FPS: {counter}</div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#DA22FF" />
                        <stop offset="100%" stopColor="#9733EE" />
                      </linearGradient>
                    </defs>
                    <style>
                      {`
                              @keyframes anim {
                                100% {
                                  stroke-dashoffset: ${predictions};
                                }
                              }
                            `}
                    </style>
                    <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="buttonSave">
                  <Link href={`../../login`}>
                    <button className="buttonFps">บันทึก</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* {!isLoading && predictions.length > 0 ? (
              <div>
                <h2>Predictions</h2>
                <p>
                  {predictions.map((prediction, index) => (
                    <li key={index}>{prediction.toFixed(0)}</li>
                  ))}
                </p>
              </div>
            ) : (
              <p>No predictions yet</p>
            )} */}

      {/* {selectedCpu && (
        <>
          <h2>ข้อมูลที่ถูกเลือก</h2>
          <p>id: {selectedCpu.CpuNameId}</p>
          <p>ชื่อ: {selectedCpu.CpuName}</p>
          <p>จำนวน Core: {selectedCpu.CpuNumberOfCores}</p>

        </>
      )}
      {selectedGpu && (
        <>
          <h2>ข้อมูลที่ถูกเลือก</h2>
          <p>id: {selectedGpu.GpuNameId}</p>
          <p>ชื่อ: {selectedGpu.GpuName}</p>
          <p>ราคา: {selectedGpu.priceGpu}</p>


        </>
      )}*/}
      {/* <h1>ค่าที่ถูกเลือก: {selectedOption}</h1>  */}
    </main>
  );
}
