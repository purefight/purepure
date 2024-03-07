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
  
  type RepoMoitor = {
    idMoitor: number;
    nameMoitor:string;
    priceMoitor:string;
    imgMoitor: string;
  };
  
  interface MoitorCardProps {
    handleCardClickMoitorCard: (selectedData: RepoMoitor) => void;
  }
  
  export default async function MoitorCard({
    handleCardClickMoitorCard,
  }: MoitorCardProps) {
    const [dataMoitor, setDataMoitor] = useState<RepoMoitor[]>([]);
  
    async function getData(): Promise<void> {
      const res = await fetch("/api/getMoitorPath");
  
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch dataMoitor");
      }
  
      setDataMoitor(await res.json());
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={2} mt={1}>
            {dataMoitor.map((dataMoitor, index) => (
              <Grid item xs={6} md={3} key={index}>
                {/* ปรับให้เป็น typeData */}
  
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => handleCardClickMoitorCard(dataMoitor)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={dataMoitor.imgMoitor}
                      alt="green iguana"
                    />
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          {dataMoitor.nameMoitor}
                        </Typography>
  
                        <Typography gutterBottom variant="h6" component="div">
                          {dataMoitor.priceMoitor} บาท
                        </Typography>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <CardActions>
                          <Button className="button-select">
                            <div className="rectangle-button" />
                            <div className="text-name-select">เลือก</div>
                            <AddRing4 className="add-ring" />
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
  