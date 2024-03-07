"use client";

import { CardActionArea, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import './fpscalcurater.css'

type Repo = {
  encodingId: string;
  gameName: string;
  image: string; ///////
};

export default function SelectGame() {
  const [data, setData] = useState<Repo[]>([]);

  async function getData() {
    const res = await fetch("/api/getgamepath");

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    setData(await res.json());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className="square-linear">
      <Container maxWidth="lg">
        <h2 className="center">เลือกเกมเพื่อคำนวนเฟรมเรท</h2>
        <Grid container spacing={2} mt={1}>
          {data.map((data, index) => (
            <Grid item xs={6} md={4} key={index}>
              {/* ปรับให้เป็น typeData */}

              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <Link href={`/fpscalcurater/${data.encodingId}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={data.image}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.gameName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
    </main>
  );
}
