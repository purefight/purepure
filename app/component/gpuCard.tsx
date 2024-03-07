import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { AddRing4 } from "../icons/AddRing4";
import "./cpuCard.css";

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

interface GpuCardProps {
  handleCardClickGpuCard: (selectedData: RepoGpu) => void;
}

export default async function GpuCard({
  handleCardClickGpuCard,
}: GpuCardProps) {
  const [dataGpu, setDataGpu] = useState<RepoGpu[]>([]);

  async function getData(): Promise<void> {
    const res = await fetch("/api/getGpiPath");

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch dataGpu");
    }

    setDataGpu(await res.json());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={1}>
          {dataGpu.map((dataGpu, index) => (
            <Grid item xs={6} md={3} key={index}>
              {/* ปรับให้เป็น typeData */}

              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => handleCardClickGpuCard(dataGpu)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={dataGpu.imgGpu}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div style={{ textAlign: "center" }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {dataGpu.GpuName}
                      </Typography>

                      <Typography gutterBottom variant="h6" component="div">
                        {dataGpu.priceGpu} บาท
                      </Typography>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <CardActions>
                        <Button className="button-select-card">
                          <div className="rectangle-button-card" />
                          <div className="text-name-select-card">เลือก</div>
                          <AddRing4 className="add-ring-card" />
                        </Button>
                      </CardActions>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
