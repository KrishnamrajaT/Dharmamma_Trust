import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const headers = [
  "Mission",
  "Vision",
  "Core Values",
  "Motto",
  "Austim",
  "cerebrel Palsy",
];
const content = [
  "“A Society in which All Challenged Individuals are an Integral Part.”",
  "To enable persons with Cerebral Palsy, Intellectual Disabilities, Autism and Multiple Disabilities realize their rights and potential and become contributing members of the Society.",
  "Disciplined Approach Commitment Team Work Accountability Transparency",
  "“A society for all can be achieved  THROUGH INCLUSION”",
  "Autism is a lifelong neurological condition, a developmental disorder that typically occurs in the first three years of life.",
  "It describes a group of disorders of development of movement and posture, causing activity limitation, that occur in the developing foetal or infant brain.",
];

export function EightCards() {
  return (
    <Grid container sx={{ padding: 10, mt: 3 }} spacing={2}>
      {[...Array(6)].map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card sx={{minHeight:200}}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {headers[index]}
              </Typography>
              <Typography variant="body1">{content[index]}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
