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
  
  type RepoCooling = {
    idCooling: number;
    nameCooling:string;
    priceCooling:string;
    imgCooling: string;
  };
  
  interface CoolingCardProps {
    handleCardClickCoolingCard: (selectedData: RepoCooling) => void;
  }
  
  export default async function CoolingCard({
    handleCardClickCoolingCard,
  }: CoolingCardProps) {
    const [dataCooling, setDataCooling] = useState<RepoCooling[]>([]);
  
    async function getData(): Promise<void> {
      const res = await fetch("/api/getCoolingPath");
  
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch dataCooling");
      }
  
      setDataCooling(await res.json());
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={2} mt={1}>
            {dataCooling.map((dataCooling, index) => (
              <Grid item xs={6} md={3} key={index}>
                {/* ปรับให้เป็น typeData */}
  
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardClickCoolingCard(dataCooling)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={dataCooling.imgCooling}
                      alt="green iguana"
                    />
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          {dataCooling.nameCooling}
                        </Typography>
  
                        <Typography gutterBottom variant="h6" component="div">
                          {dataCooling.priceCooling} บาท
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
  