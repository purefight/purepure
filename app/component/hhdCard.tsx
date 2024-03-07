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
  
  type RepoHhd = {
    idHhd: number;
    nameHhd:string;
    priceHhd:string;
    imgHhd: string;
  };
  
  interface HhdCardProps {
    handleCardClickHhdCard: (selectedData: RepoHhd) => void;
  }
  
  export default async function HhdCard({
    handleCardClickHhdCard,
  }: HhdCardProps) {
    const [dataHhd, setDataHhd] = useState<RepoHhd[]>([]);
  
    async function getData(): Promise<void> {
      const res = await fetch("/api/getHhdPath");
  
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch dataHhd");
      }
  
      setDataHhd(await res.json());
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={2} mt={1}>
            {dataHhd.map((dataHhd, index) => (
              <Grid item xs={6} md={3} key={index}>
                {/* ปรับให้เป็น typeData */}
  
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardClickHhdCard(dataHhd)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={dataHhd.imgHhd}
                      alt="green iguana"
                    />
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          {dataHhd.nameHhd}
                        </Typography>
  
                        <Typography gutterBottom variant="h6" component="div">
                          {dataHhd.priceHhd} บาท
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
  