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
import { AddRing4 } from "../icons/AddRing4";
import "./cpuCard.css";

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

interface CpuCardProps {
  handleCardClickCpuCard: (selectedData: RepoCpu) => void;
}

async function getData(): Promise<RepoCpu[]> {
  const res = await fetch("/api/getCpuPath");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch dataCpu");
  }

  return res.json();
}

export default async function CpuCard({
  handleCardClickCpuCard,
}: CpuCardProps) {
  const dataCpu: RepoCpu[] = await getData();
  console.log(dataCpu);

  return (
    <main>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={1}>
          {dataCpu.map((dataCpu, index) => (
            <Grid item xs={6} md={3} key={index}>
              {/* ปรับให้เป็น typeData */}

              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => handleCardClickCpuCard(dataCpu as RepoCpu)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={dataCpu.CpuImg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div style={{ textAlign: "center" }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {dataCpu.CpuName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {dataCpu.CpuNumberOfCores} Cores /{" "}
                        {dataCpu.CpuNumberOfThreads} Threads <br />
                        Frequency {parseInt(dataCpu.CpuFrequency) / 1000} GHz
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        14,000 บาท
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
