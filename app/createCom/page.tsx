// <!-- ******************************************************************* -->
// <!-- Write by Pop Siriprapha Computer conponents page -->
// <!-- ******************************************************************* -->
"use client";

import React from "react";
import { useState, useEffect } from 'react'
import { AddRing4 } from "../icons/AddRing4";
import { Refresh1 } from "../icons/Refresh1";
import { Search1 } from "../icons/Search1";
import { Button, CardActionArea, CardActions } from '@mui/material';
import dynamic from "next/dynamic";
import "./component.css";

type RepoCpu = {
  CpuNameId: number,
  CpuName: string,
  CpuNumberOfCores: string,
  CpuNumberOfThreads: string,
  CpuBaseClock: string,
  CpuCacheL1: string,
  CpuCacheL2: string,
  CpuCacheL3: string,
  CpuDieSize: string,
  CpuFrequency: string,
  CpuMultiplier: string,
  CpuMultiplierUnlocked: string,
  CpuProcessSize: string,
  CpuTDP: string,
  CpuNumberOfTransistors: string,
  CpuTurboClock: string,
  CpuImg: string
}

type RepoGpu = {
  GpuNameId: number,
  GpuName: string,
  GpuArchitecture: string,
  GpuBandwidth: string,
  GpuBaseClock: string,
  GpuBoostClock: string,
  GpuBusInterface: string,
  GpuNumberOfComputeUnits: string,
  GpuDieSize: string,
  GpuDirectX: string,
  GpuNumberOfExecutionUnits: string,
  GpuFP32Performance: string,
  GpuMemoryBus: string,
  GpuMemorySize: string,
  GpuMemoryType: string,
  GpuOpenCL: string,
  GpuOpenGL: string,
  GpuPixelRate: string,
  GpuProcessSize: string,
  GpuNumberOfROPs: string,
  GpuShaderModel: string,
  GpuNumberOfShadingUnits: string,
  GpuNumberOfTMUs: string,
  GpuTextureRate: string,
  GpuNumberOfTransistors: string,
  GpuVulkan: string,
  priceGpu: string,
  imgGpu: string
}

type RepoMainboard = {
  idMainboard: number;
  nameMainboard:string;
  priceMainboard:string;
  imgMainboard: string;
};

type RepoHhd = {
  idHhd: number;
  nameHhd:string;
  priceHhd:string;
  imgHhd: string;
};


type RepoCooling = {
  idCooling: number;
  nameCooling:string;
  priceCooling:string;
  imgCooling: string;
};


type RepoRam = {
  idRam: number;
  nameRam:string;
  priceRam:string;
  imgRam: string;
};

type RepoSsd = {
  idSsd: number;
  nameSsd:string;
  priceSsd:string;
  imgSsd: string;
};

type RepoMonitor = {
  idMonitor: number;
  nameMonitor:string;
  priceMonitor:string;
  imgMonitor: string;
};

type RepoCase = {
  idCase: number;
  nameCase:string;
  priceCase:string;
  imgCase: string;
};

type RepoPower = {
  idPower: number;
  namePower:string;
  pricePower:string;
  imgPower: string;
};

export default function MainComponent() {
 
  const CpuCard = dynamic(() => import("../component/cpuCard"), {
    ssr: true,
  });


  const GpuCard = dynamic(() => import("../component/gpuCard"), {
    ssr: true,
  });

  const MainboardCard = dynamic(() => import("../component/mainboardCard"), {
    ssr: true,
  });

  const HhdCard = dynamic(() => import("../component/hhdCard"), {
    ssr: true,
  });

  const CoolingCard = dynamic(() => import("../component/coolingCard"), {
    ssr: true,
  });

  const PowerCard = dynamic(() => import("../component/powerCard"), {
    ssr: true,
  });


  const RamCard = dynamic(() => import("../component/ramCard"), {
    ssr: true,
  });

  const SsdCard = dynamic(() => import("../component/ssdCard"), {
    ssr: true,
  });

  const MonitorCard = dynamic(() => import("../component/monitorCard"), {
    ssr: true,
  });

  const CaseCard = dynamic(() => import("../component/caseCard"), {
    ssr: true,
  });

  // Set cpu
  const [showCpuCard, setShowCpuCard] = useState(false);
  const [selectedCpu, setSelectedCpu] = useState<RepoCpu | null>(null);
  const handleCardClickCpuCard = (selectedData: RepoCpu) => {
    setSelectedCpu(selectedData);
  };
  // set show cpu card
  const handleSelectCpu = (selectedCpu: RepoCpu) => {
    setSelectedCpu(selectedCpu);
    setShowCpuCard(true);
    setShowGpuCard(false);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowRamCard(false);
    setShowMonitorCard(false);
    setShowCoolingCard(false);
    setShowMainboardCard(false);
    setShowSsdCard(false);
    setShowHhdCard(false);
  };

  // set gpu
  const [showGpuCard, setShowGpuCard] = useState(false);
  const [selectedGpu, setSelectedGpu] = useState<RepoGpu | null>(null);
  const handleCardClickGpuCard = (selectedGpu: RepoGpu) => {
    setSelectedGpu(selectedGpu);
  };
  // set show Gpu card
  const handleSelectGpu = (selectedGpu: RepoGpu) => {
    setSelectedGpu(selectedGpu);
    setShowCpuCard(false);
    setShowGpuCard(true);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowRamCard(false);
    setShowMonitorCard(false);
    setShowCoolingCard(false);
    setShowMainboardCard(false);
    setShowSsdCard(false);
    setShowHhdCard(false);
  };


  const [showMainboardCard, setShowMainboardCard] = useState(false);
  const [selectedMainboard, setSelectedMainboard] = useState<RepoMainboard | null>(null);
  const handleCardClickMainboardCard = (selectedMainboard: RepoMainboard) => {
    setSelectedMainboard(selectedMainboard);
  };
  // set show Gpu card
  const handleSelectMainboard = (selectedMainboard: RepoMainboard) => {
    setSelectedMainboard(selectedMainboard);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowRamCard(false);
    setShowMonitorCard(false);
    setShowCoolingCard(false);
    setShowMainboardCard(true);
    setShowSsdCard(false);
    setShowHhdCard(false);
  };

  const [showHhdCard, setShowHhdCard] = useState(false);
  const [selectedHhd, setSelectedHhd] = useState<RepoHhd | null>(null);
  const handleCardClickHhdCard = (selectedHhd: RepoHhd) => {
    setSelectedHhd(selectedHhd);
  };
  // set show Gpu card
  const handleSelectHhd = (selectedHhd: RepoHhd) => {
    setSelectedHhd(selectedHhd);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowRamCard(false);
    setShowMonitorCard(false);
    setShowCoolingCard(false);
    setShowHhdCard(true);
    setShowMainboardCard(false);
    setShowSsdCard(false);
    
  };

  const [showCoolingCard, setShowCoolingCard] = useState(false);
  const [selectedCooling, setSelectedCooling] = useState<RepoCooling | null>(null);
  const handleCardClickCoolingCard = (selectedCooling: RepoCooling) => {
    setSelectedCooling(selectedCooling);
  };
  // set show Gpu card
  const handleSelectCooling = (selectedCooling: RepoCooling) => {
    setSelectedCooling(selectedCooling);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowRamCard(false);
    setShowMonitorCard(false);
    setShowMainboardCard(false);
    setShowCoolingCard(true);
    setShowSsdCard(false);
    setShowHhdCard(false);
  };
  
  const [showRamCard, setShowRamCard] = useState(false);
  const [selectedRam, setSelectedRam] = useState<RepoRam | null>(null);
  const handleCardClickRamCard = (selectedRam: RepoRam) => {
    setSelectedRam(selectedRam);
  };
  // set show Gpu card
  const handleSelectRam = (selectedRam: RepoRam) => {
    setSelectedRam(selectedRam);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowMainboardCard(false);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowRamCard(true);
    setShowCoolingCard(false);
    setShowMonitorCard(false);
    setShowSsdCard(false);
    setShowHhdCard(false);
  };

  const [showSsdCard, setShowSsdCard] = useState(false);
  const [selectedSsd, setSelectedSsd] = useState<RepoSsd | null>(null);
  const handleCardClickSsdCard = (selectedSsd: RepoSsd) => {
    setSelectedSsd(selectedSsd);
  };
  // set show Gpu card
  const handleSelectSsd = (selectedSsd: RepoSsd) => {
    setSelectedSsd(selectedSsd);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowMainboardCard(false);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowSsdCard(true);
    setShowRamCard(false);
    setShowCoolingCard(false);
    setShowMonitorCard(false);
    setShowSsdCard(true);
    setShowHhdCard(false);
  };
  
  const [showMonitorCard, setShowMonitorCard] = useState(false);
  const [selectedMonitor, setSelectedMonitor] = useState<RepoMonitor | null>(null);
  const handleCardClickMonitorCard = (selectedMonitor: RepoMonitor) => {
    setSelectedMonitor(selectedMonitor);
  };
  // set show Gpu card
  const handleSelectMonitor = (selectedMonitor: RepoMonitor) => {
    setSelectedMonitor(selectedMonitor);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowMainboardCard(false);
    setShowCaseCard(false);
    setShowPowerCard(false);
    setShowRamCard(false);
    setShowCoolingCard(false);
    setShowMonitorCard(true);
    setShowSsdCard(false);
    setShowHhdCard(false);
  };

  const [showCaseCard, setShowCaseCard] = useState(false);
  const [selectedCase, setSelectedCase] = useState<RepoCase | null>(null);
  const handleCardClickCaseCard = (selectedCase: RepoCase) => {
    setSelectedCase(selectedCase);
  };
  // set show Gpu card
  const handleSelectCase = (selectedCase: RepoCase) => {
    setSelectedCase(selectedCase);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowMainboardCard(false);
    setShowRamCard(false);
    setShowMonitorCard(false);
    setShowPowerCard(false);
    setShowCoolingCard(false);
    setShowCaseCard(true);
    setShowSsdCard(false);
    setShowHhdCard(false);
  };

  // set gpu
  const [showPowerCard, setShowPowerCard] = useState(false);
  const [selectedPower, setSelectedPower] = useState<RepoPower | null>(null);
  const handleCardClickPowerCard = (selectedPower: RepoPower) => {
    setSelectedPower(selectedPower);
  };
  // set show Gpu card
  const handleSelectPower = (selectedPower: RepoPower) => {
    setSelectedPower(selectedPower);
    setShowCpuCard(false);
    setShowGpuCard(false);
    setShowPowerCard(false);
    setShowCaseCard(false);
    setShowRamCard(false);
    setShowMonitorCard(false);
    setShowMainboardCard(false);
    setShowCoolingCard(false);
    setShowPowerCard(true);
    setShowHhdCard(false);
  };
  

  return (
    <div className="desktop">
      <div className="square-linear"></div>
      <h1 className="text-header">ประกอบคอมพิวเตอร์ตามสไตล์ของคุณ</h1>
      <div className="container">
        <header className="header">
          <div className="square-white">
            <div className="container2">
              {/* Selection CPU */}
              <div className="cpu">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">ซีพียู</div>
                    <img className="image-icon-pc" src="https://img.icons8.com/color/96/electronics.png" />
                  <div className="rectangle-blue"></div>
                  </div>
                </div>
                
                <CardActionArea onClick={() => handleSelectCpu({
                            CpuNameId: 0,
                            CpuName: 'กำลังเลือก...',
                            CpuNumberOfCores: '',
                            CpuNumberOfThreads: '',
                            CpuBaseClock: '',
                            CpuCacheL1: '',
                            CpuCacheL2: '',
                            CpuCacheL3: '',
                            CpuDieSize: '',
                            CpuFrequency: '',
                            CpuMultiplier: '',
                            CpuMultiplierUnlocked: '',
                            CpuProcessSize: '',
                            CpuTDP: '',
                            CpuNumberOfTransistors: '',
                            CpuTurboClock: '',
                            CpuImg:'data:image/png;base64,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',
                        })}>
                          <div className="selectionOption">
                            {selectedCpu ? (
                                    <div className="button-select-afterSelected">
                                      <div className='container-Img-aftreselected'>
                                        <img src={selectedCpu.CpuImg} className='img-after-selected'></img>
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
                  
             

              <div className="mainboard">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">เมนบอร์ด</div>
                    <img className="image-icon-pc" width="96" height="96" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Motherboard-computer-hardware-goofy-flat-kerismaker.png" alt="external-Motherboard-computer-hardware-goofy-flat-kerismaker"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                <CardActionArea onClick={() => handleSelectMainboard({
                        idMainboard: 1,
                        nameMainboard:'',
                        priceMainboard:'',
                        imgMainboard:'data:image/png;base64,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',
                    })}>
                      {/* {selectedGpu ?  */}
                      <div className="selectionOption">
                          {selectedMainboard ? (
                              <div className="button-select-afterSelected">
                                <div className='container-Img-aftreselected'>
                                  <img src={selectedMainboard.imgMainboard} className='img-after-selected'></img>
                                </div>
                                  <div className="rectangle-button-afterSelected" />
                                  <div className="text-name-select">{selectedMainboard.nameMainboard}</div>
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

              <div className="ram">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">แรม</div>
                    <img className='image-icon-pc' width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-ram-mobile-app-development-flaticons-lineal-color-flat-icons.png" alt="external-ram-mobile-app-development-flaticons-lineal-color-flat-icons"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                  <CardActionArea onClick={() => handleSelectRam({
                          idRam: 1,
                          nameRam:'',
                          priceRam:'',
                          imgRam:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAACuCAMAAABOUkuQAAAA8FBMVEX///+iuhXDlnzM1i6fuACctgCatADDlXuhuQy/jnHCk3jAkHTI0wDM1iqhuQeetgDK1BfBzoTe5MPT3Kzh5snF0YzL1pru8ePc47/X37T6+vjQ2ab19vDn69W4yG2twE+ovD+9y3ro3tngyr7w8uewwlijuSalujLm18/bwbPTs6K0xWPO2Z26yXOwwlbMqJTy6uXi56nc4o7M1jvm6rnT22Lr7snw8tfO11Dg5Z3BnIjq5uTbz8nHp5XOuKzHurTBjnzIyj/Eq2S9slK+nYzIw0TDoXDFvUy1nGLc16Tv6d/Y33nO1lbb4Ybh5qPX3nLW03RGAAAPGElEQVR4nO1cZ0PizBamJIEklCgiEMACqIC64NpZ9d1b3veWLf7/f3MnZZIzJZMMorkxPF92FzjMnIfTZ7KFQsYxN0oJUNFX39LeaToYGYkIMktPae80HdjPeiUBP4Y5TnunKWGmJzEgQ3+x097pehhN37bxp0QOVtGfM8pP4Q/dNEsv46flegpMS2YSBzMzHKBXjoKGYZr6avU8expJaTJaJeKnomc5QFcCFSsVl6jSPKnbjVaJAnTJKGXXgBCe6ShSMZA5zeJZmibkp2Q+f4Qe7web5ygOS4uRSGxaSshPSX/5KFXeDeOKyctGhiD7jJPF509CEMJ0oesGq7JhTnmftl/MxPyUMh2jCSzHC1NnbEl/XtIf/DZPVB96qOhCV80cltO5YZK2ZFBOMlpI8IPC2eciyAUiiaQANlNPJW7EiiSolNUyOgb0HMPQx46mUuHnkxA0GI1ns7GL2XyxmM8QpsvljLETQ1/MZMKPR5CRRYJsezn1GFmskN6maThltPuHU1F7/+Km/mTzH4KgQdraroGZrnusOApLeYw0KiaTBbMA811JIWBmsxXTP4wgPZsEFd7Zs7JPUGGUtNvMK0HOkQQuaSrvyFWGCSo4XbnLT2k1fz+CPkerMWLrwi1BIezxSqrByhlB01mJNwzaEuTCni508/3oyfjAbDmelyS7c3mCuEPJTGA5W+nGexqPC2OWtp7rYYSM5x0jD4CexXkHwupdIw9AZq92rCL48QZC7nzI3ASJFSNtTdfFE9XSe5zo5mo2exmPx09TB/OKMzoypQdlABkO04tgLoQsRtfn09FotGQGXPZyOXqazQ19zSmSsUhDtw3hRffMxljMprGjv+V0LYIyPre3R8iRRklVWKwTk7Ld0MvBXmcUmfVuQwrjNQKRntVEvxaYWW18MW5+igseSbGknKyiz+crQ2evPQCC5mlv+kNBHkob/k2r5XI6i5py54wgwoQM/QVUB/aKa0af4w5VckATMudUgcA7TspXkCZNiO1EB2whYGZ04rE2YJvLGWYwTwDlK4shTIGRVErs+yOqVjIyfhNYHoR5cHp1qt7mkfi5MQUmUlnxPkEylKdmzAPoWSs694YUwVCmTzbWQxinKya3FSWSmZGvStFF8JBHZcUflRBumLsghBAc5ked68DT/lwNPDACE4nK4ouQoUxPXddGUFFHMQTCUP7ymAvceBn8UhmEoTyGaQe4q4iIQ6Aa0DN5G/jtwBNY/nNToK3NqwkFbsS/Lw761ryaUMAQlwB7a0KAIV7BCE0o08eHb8HYiLYhaEJ5mwqFwDUzLw5BE8ricz+bQcAQm8tgIsvb5BUgYIjtuUBLZuY2CoFszzIU9hv5G70CfNOjmi4Qp3Pakfmgctng7uqm4/5tGbRk/PFsbuDP0PxHDL/WLMuqvTphJ2xaczkXCuET4cahzrVVdmBdI4qmwXAtz1HIgfPgWcWdUj/W6mUP1iu4VZTbjgwDVdUVxNC3wYNVDlC7Cbwsn6NFiIGOCKp8v7DqZYDaYCqotnOGZ6PyvfQ3q0yg/vMPI/flNMY3/fvf6/UyBesf33Pe1AP880+L5seh6C+3Fsp9FEK4v2YMyPWz68o2kbn4WuMShCj61/eSntvRYgBcJPJg/buSswt5HDxGGZBnRbnuWB1MYJFYrqOWjOSrfpv2DlPGFSSkXnt9vHmkfM76T9p7TBP2LWFAD94k+qZGUFT7b8q7TBF3hEfVy/j1e4Ki+kOae0wVP8gQbd0E7/wi37hKcZMp4r5M5XgLvEe+Veukt830wBSJ0JlskqH6dXr7TAucIrH+M3zbps3ra3pbTQe/eUVitJchP7tPb7MpgJgkAoaiInUZ5rk84Caiy6hb+GCezPYefT9S3fOH4iurPqbo2vOlG56J1e5S3veH4SqSIKfruP199fsn1wfrVl4GjZaoked0ruFbOWlhmSyVHDkprbkxJiFqk7R3/xG4k2KIPP7IRwtrCwI1A+v6ugZJsh7T3v5H4FdyI3IK6fuvdRC6c1FaD7i5ql5DOYxuZV89ibvXGpbJRwt7x/GzenmArKVcI9gDPnXz4L+Vj3z2g/Wz+i/3nfvHa0CSBavoyaNrYvkI1oUy42dhNdj5jc2FTu4dl1iL+bbPCLYxJeLL5OrWIYlu591as17/0J2mhq+Mn9XIDwxubq0ymbe8qT+O3p8ezD2G2HL5lzcyyUW6d9Ch/cwSzzbu/aFtLT/T2Ct6EC3M4v7Jfh1MIT8/fpJ+JhrV45N96+H/oXO1EQYOJggdhKGLPQe7u12EXq+3a0cJDQRC5LNPA+q8JzoCX/kGVJNrypxNSQlgqcj3JpenGoIaB0VRVO3YFxocSwhdEouTh/OR7cTgFl9AD04Vu+3Ly4OD8/Pzk5MvhwhHCGenCBoBVdW04wlPyJc6ixC65JtqS1OqxcRQTl1te3JCTcKMyNI6ohK8sXwDCrxwr+jw7aLhoBqCs6TWdYWGp1JCLc5O9rTkmrrfcu6sKyt0CJe0iU6Vf/D86hmaVQ+S/J4m8ZsgaEN3o5JCe+xWTuW+An0JMsUjaSGCBqK0tjiFzl3dNyBwElSUXFP5soZ21SNmLx1V7iuKRbVbmEgLKaT5wtKak8h/4RwPaqVd6TU1u7AnL8Q8UtuVV7a/xsLKPrksKK2ZdI+LROsWBvh9RXZNtVPoywsNaYZa0t+BGOq9mSFQWtPpHheJNbKUPFhH2WN5ISYQ9cTfoTgJm3rpIs7weEJtat3fgZ+R6T6ySLwUb7SKkhWt7LCwIy8kx1BVO9jt7O1oDULZGIaq2jkSamvEFzMMFR7CeRl4NbpIFDOkFo8vDqifJZYhhSckxVC16mUg+wh+KIahatP35ENCiGFoEPhZ2N2HRSKb34QMaT1XvE3sK44hr/ix94nKRd2VYShM0TBpopAiYigMdWdQiGEoLK2DdM8WiQCikKLhNftwYzEMBUJEVJViCERXmLzQy4LMq+wEQkOV+3KA1zqZ7tkiMSFDKHdgnIBPIYcRMAS0g0lA7UowpIIqrwm+ui1iCGbLGIZwae2dbPCKxIQMaeGn4E+JGGoLtAsLH/hTsgwJHEYD5QgoomMYAhXXSRjheQzh0yF3mM8rEhMyVD0DrIOgghwmmqHqKfhuKCTDEFT2jGBIUDGqIElDWo/phR34p7DWj99lXCRG/i8x0Q4DOwUbmsM6DCk9emGROYSJD/40yBxEDO3yF+YyhEvrusUtEhMyVFTDT1EOI/KyUAh2XlIMKSfBp2DJL2aoEXbxF1Dokqs22cIKJ4kiZfe4n0IMCVoV4E6EdgxDohZLxe0mMexADA1FQjhHdAghPkOFx7C0jpkkChgKAxGxUTFD1SIWIjeagCH4K+y4wZqoMhyHYRkC8zT12BVqqXDwoBxEKI4fEeIViUkZKiqHXvgaNok1u4QZM0JHnskOibGKwszQGIbUyyZIQer55XmTXIbHkHoAiHWE4L+FDKEqqI5Q+yXmh9PbK6CvaWjt3d3uAfGjOObAMASFqlq7ywrFMoRM0yaKYaa34zCkItM8As0bEqImV9EMFe5erx9e448LaYZQCIBNhuKMxKk1e8z0Q+0X9mOEGIYoZd3MORHOWBFD1NjNjQMDYb8vYCghKHNwh8Hi4QbLkJtGYrrZPr0wxZCXFoS9Owq6tJCb4YUDb1ehTTLk9YxnjYj13DUZhryC/0hEURxDOFe3BRQhhkgbwhXbvkhowwy5Q2jHcAVzaMQQOR/0tbObIqEYhoLK4jCaZ+QwJENBZXEuEHozQ6Q54PZPZLgopLS4QqKTmhiGQP0ezTNtQ6Atij6O2DBDjS/45QtBxUsxFGrXEghdCBkCLUP0GQhtQ2pYY0WfgTRO6IXfxBCYIEQbLs0Q0C56HCdmCDbJ0dN6xBBkgmgBI3uYzTLUgAeUkUdizpEDECK0iwzxYobIGW0Uz8hhIEPkuCAqlYZusQmGiCObQVRUoRgitLMjhRiGgMMQJBfCrFhVmzBlkAyF7Y2HQ74Q8au/lSHqy8LaRCHG8khZwBClXRjiKSHq2IpgiB4eDbxorZx2CkNwDwA5DGBIpWpQ2/tkozgsdEDg5pz2SgKEFPo8wm/ZqkprD05hSYZo7fzapKr292AoYwfqIUOsEi7P3mUPkCCRw4T1MxGFXLifbBSdVhI0zZtkiLVH13CrzUmBKFOQOYQMsRtwyay6o2ZAkYghdspf6GtV5dRrm9twgyFDKjMsKLSQUNET2hfQL4tQWfbg2EY/iUcQNnyfodAB2XOwwqniE4TkQyGGocBhWGtA6J+d47Fo0M5WAUN0FPJ0OTvHo7DgF6VjnDwChnhkd4raqX/uAAIMYIinXedUa/pCoYuwA/WAIXaETSJIGWiHAUN0FKIRpIwNMBSsybnig9QN/hakU3jkwNcuFApchGUIKxuvAt4iYgjPy7kmRKCb+OuTflPjKO6TuEACDMUvj4c30QxxAgoN/+DNYUhLZkKFYEDB9WEpYIb4JgSBEwQ4lIlzkNBFIhlKpIEXz5w4oCU0oQL+RTfGUJKQ70+NQ4aSrO67CHso4zMUT3IBx7OQoQQmhH/RtzPkO0y8CRXw2XTIUCLtPBfhMCSjgDsJDRhKZEJ+MbwphpJVDV6cDBhKGARdF2EZ8kIKW2tHr+ysp/k7SARtgwwpSazBLw2CYyv2hCd6hSiGEjSWzu17yobie61Q6M0MeebAKWt56K/DkEcrezjshV+leOLdcz9y77l7l9aLxWaTuLbueeo5Lh8bxS+u0FG80Ns7VzyE2O8htFqtPsLFxT5Cu93e2dk5Pj6+dC7fO7fvz1TfMfyOoQqF+heejC90jIWOsGvSwDm8oVBX1nmX1nF8xocMiYXY4aY0cDpOgGoQ1FVpIdaNZe/kN5z4LHsnv9p8M0GiKTh/TcexZS/DcrPPjtTVX8VrEEXnGhwhdQP/Jd5E7gGEhnteNJATqmpMV+xqqwFbEz/po2k7/rWrvqYmFzreyH8gNNQUz6Edz45xGVU98n6UjpTQWcQvafecANZq9Vq9Xrfb3d3ddZ4P8x4VGzpPjU0mE/cpsgHUFAv1WKFOpNDbsO8lhcPDLycotJ4fHFxeOrEWhVwn8jpR+8LbVKsX2kLfETp0hU4SC22xxRZbbLHFFltsscUWW2yxxRZbfHb8DyUCcGNO7FzzAAAAAElFTkSuQmCC',
                      })}>
                        {/* {selectedGpu ?  */}
                        <div className="selectionOption">
                            {selectedRam ? (
                                <div className="button-select-afterSelected">
                                  <div className='container-Img-aftreselected'>
                                    <img src={selectedRam.imgRam} className='img-after-selected'></img>
                                  </div>
                                    <div className="rectangle-button-afterSelected" />
                                    <div className="text-name-select">{selectedRam.nameRam}</div>
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
                <img className="image-icon-pc" width="80" height="80" src="https://img.icons8.com/office/80/video-card.png" alt="video-card"/>
              <div className="rectangle-blue"></div>
              </div>
            </div>
            <CardActionArea onClick={() => handleSelectGpu({
                        GpuNameId: 0,
                        GpuName: 'กำลังเลือก...',
                        GpuArchitecture: '',
                        GpuBandwidth: '',
                        GpuBaseClock: '',
                        GpuBoostClock: '',
                        GpuBusInterface: '',
                        GpuNumberOfComputeUnits: '',
                        GpuDieSize: '',
                        GpuDirectX: '',
                        GpuNumberOfExecutionUnits: '',
                        GpuFP32Performance: '',
                        GpuMemoryBus: '',
                        GpuMemorySize: '',
                        GpuMemoryType: '',
                        GpuOpenCL: '',
                        GpuOpenGL: '',
                        GpuPixelRate: '',
                        GpuProcessSize: '',
                        GpuNumberOfROPs: '',
                        GpuShaderModel: '',
                        GpuNumberOfShadingUnits: '',
                        GpuNumberOfTMUs: '',
                        GpuTextureRate: '',
                        GpuNumberOfTransistors: '',
                        GpuVulkan: '',
                        priceGpu: '',
                        imgGpu:'data:image/png;base64,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',
                    })}>
                      {/* {selectedGpu ?  */}
                      <div className="selectionOption">
                          {selectedGpu ? (
                              <div className="button-select-afterSelected">
                                <div className='container-Img-aftreselected'>
                                  <img src={selectedGpu.imgGpu} className='img-after-selected'></img>
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

              <div className="case">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">เคสคอมพิวเตอร์</div>
                    <img className='image-icon-pc' width="94" height="94" src="https://img.icons8.com/3d-fluency/94/workstation.png" alt="workstation"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                <CardActionArea onClick={() => handleSelectCase({
                          idCase: 1,
                          nameCase:'',
                          priceCase:'',
                          imgCase:'data:image/png;base64,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',
                      })}>
                        {/* {selectedGpu ?  */}
                        <div className="selectionOption">
                            {selectedCase ? (
                                <div className="button-select-afterSelected">
                                  <div className='container-Img-aftreselected'>
                                    <img src={selectedCase.imgCase} className='img-after-selected'></img>
                                  </div>
                                    <div className="rectangle-button-afterSelected" />
                                    <div className="text-name-select">{selectedCase.nameCase}</div>
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

              <div className="power-supply">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">เพาเวอร์ซัพพลาย</div>
                    <img className='image-icon-pc' width="64" height="64" src="https://img.icons8.com/arcade/64/electrical.png" alt="electrical"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                <CardActionArea onClick={() => handleSelectPower({
                        idPower: 1,
                        namePower:'',
                        pricePower:'',
                        imgPower:'data:image/png;base64,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',
                    })}>
                      {/* {selectedGpu ?  */}
                      <div className="selectionOption">
                          {selectedPower ? (
                              <div className="button-select-afterSelected">
                                <div className='container-Img-aftreselected'>
                                  <img src={selectedPower.imgPower} className='img-after-selected'></img>
                                </div>
                                  <div className="rectangle-button-afterSelected" />
                                  <div className="text-name-select">{selectedPower.namePower}</div>
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

              <div className="monitor">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">มอนิเตอร์</div>
                    <img className='image-icon-pc' width="96" height="96" src="https://img.icons8.com/fluency/96/monitor--v2.png" alt="monitor--v2"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                <CardActionArea onClick={() => handleSelectMonitor({
                          idMonitor: 1,
                          nameMonitor:'',
                          priceMonitor:'',
                          imgMonitor:'data:image/png;base64,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',
                      })}>
                        {/* {selectedGpu ?  */}
                        <div className="selectionOption">
                            {selectedMonitor ? (
                                <div className="button-select-afterSelected">
                                  <div className='container-Img-aftreselected'>
                                    <img src={selectedMonitor.imgMonitor} className='img-after-selected'></img>
                                  </div>
                                    <div className="rectangle-button-afterSelected" />
                                    <div className="text-name-select">{selectedMonitor.nameMonitor}</div>
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

              <div className="cooling">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">ชุดระบายความร้อน</div>
                    <img className='image-icon-pc' width="64" height="64" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/external-cooler-car-parts-and-service-icongeek26-outline-gradient-icongeek26.png" alt="external-cooler-car-parts-and-service-icongeek26-outline-gradient-icongeek26"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                <CardActionArea onClick={() => handleSelectCooling({
                        idCooling: 1,
                        nameCooling:'',
                        priceCooling:'',
                        imgCooling:'data:image/png;base64,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',
                    })}>
                      {/* {selectedGpu ?  */}
                      <div className="selectionOption">
                          {selectedCooling ? (
                              <div className="button-select-afterSelected">
                                <div className='container-Img-aftreselected'>
                                  <img src={selectedCooling.imgCooling} className='img-after-selected'></img>
                                </div>
                                  <div className="rectangle-button-afterSelected" />
                                  <div className="text-name-select">{selectedCooling.nameCooling}</div>
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

              <div className="ssd">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">เอสเอสดี</div>
                    <img className='image-icon-pc' width="64" height="64" src="https://img.icons8.com/dusk/64/ssd.png" alt="ssd"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                <CardActionArea onClick={() => handleSelectSsd({
                          idSsd: 1,
                          nameSsd:'',
                          priceSsd:'',
                          imgSsd:'data:image/png;base64,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',
                      })}>
                        {/* {selectedGpu ?  */}
                        <div className="selectionOption">
                            {selectedSsd ? (
                                <div className="button-select-afterSelected">
                                  <div className='container-Img-aftreselected'>
                                    <img src={selectedSsd.imgSsd} className='img-after-selected'></img>
                                  </div>
                                    <div className="rectangle-button-afterSelected" />
                                    <div className="text-name-select">{selectedSsd.nameSsd}</div>
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

              <div className="hard-disk">
                <div className="item-group">
                  <div className="item">
                    <div className="rectangle" />
                    <div className="text-name-component">ฮาร์ดดิสก์</div>
                    <img className='image-icon-pc' width="96" height="96" src="https://img.icons8.com/doodle/96/hdd.png" alt="hdd"/>
                    <div className="rectangle-blue"></div>
                  </div>
                </div>
                <CardActionArea onClick={() => handleSelectHhd({
                        idHhd: 1,
                        nameHhd:'',
                        priceHhd:'',
                        imgHhd:'data:image/png;base64,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',
                    })}>
                      {/* {selectedGpu ?  */}
                      <div className="selectionOption">
                          {selectedHhd ? (
                              <div className="button-select-afterSelected">
                                <div className='container-Img-aftreselected'>
                                  <img src={selectedHhd.imgHhd} className='img-after-selected'></img>
                                </div>
                                  <div className="rectangle-button-afterSelected" />
                                  <div className="text-name-select">{selectedHhd.nameHhd}</div>
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
            </div>
          </div>
          {showCpuCard && <CpuCard handleCardClickCpuCard={handleCardClickCpuCard} />}
          {showGpuCard && <GpuCard handleCardClickGpuCard={handleCardClickGpuCard} />}
          {showMainboardCard && <MainboardCard handleCardClickMainboardCard={handleCardClickMainboardCard} />}
          {showHhdCard && <HhdCard handleCardClickHhdCard={handleCardClickHhdCard} />}
          {showCoolingCard && <CoolingCard handleCardClickCoolingCard={handleCardClickCoolingCard} />}
          {showRamCard && <RamCard handleCardClickRamCard={handleCardClickRamCard} />}
          {showSsdCard && <SsdCard handleCardClickSsdCard={handleCardClickSsdCard} />}
          {showMonitorCard && <MonitorCard handleCardClickMonitorCard={handleCardClickMonitorCard} />}
          {showCaseCard && <CaseCard handleCardClickCaseCard={handleCardClickCaseCard} />}
          {showPowerCard && <PowerCard handleCardClickPowerCard={handleCardClickPowerCard} />}
        </header>

        

        <section className="main"></section>

        <footer className="footer">Footer</footer>
      </div>
    </div>
  );
};

