import React from "react";
import { Grid, Card, CardContent, Typography, CardActionArea, Box } from "@mui/material";
import "./cards.css"; // add this import

const headers = [
  "Mission",
  "Vision",
  "Core Values",
  "Motto",
  "Autism",
  "Cerebral Palsy",
];
const content = [
  "A Society in which All Challenged Individuals are an Integral Part.",
  "To enable persons with Cerebral Palsy, Intellectual Disabilities, Autism and Multiple Disabilities realize their rights and potential and become contributing members of the Society.",
  "Disciplined Approach · Commitment · Team Work · Accountability · Transparency",
  "A society for all can be achieved THROUGH INCLUSION",
  "Autism is a lifelong neurological condition, a developmental disorder that typically occurs in the first three years of life.",
  "It describes a group of disorders of development of movement and posture, causing activity limitation, that occur in the developing foetal or infant brain.",
];

const emojis = ["🎯", "🔭", "🤝", "📜", "🧠", "🩺"];
const gradients = [
  "linear-gradient(135deg,#0B63C6 0%, #4AA1FF 100%)",
  "linear-gradient(135deg,#7B4E2A 0%, #E9A03F 100%)",
  "linear-gradient(135deg,#0FB19A 0%, #34D1B0 100%)",
  "linear-gradient(135deg,#FF7A90 0%, #FFB3C7 100%)",
  "linear-gradient(135deg,#FFB36B 0%, #FF8C6B 100%)",
  "linear-gradient(135deg,#6C5CE7 0%, #8E7FFF 100%)",
];

export function EightCards() {
  return (
      <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 0, sm: 3, md: 3 }}
     sx={{ px: "10px", py: { xs: 2, md: 6 } }} 
    >
      {headers.map((title, index) => (
        // ensure full-width Grid items on mobile by letting the Grid columnSpacing handle gutters
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card className="attractive-card" elevation={2}>
            <CardActionArea>
              <Box className="card-header" style={{ background: gradients[index % gradients.length] }}>
                <div className="card-emoji" aria-hidden>
                  {emojis[index]}
                </div>
                <Typography variant="h6" component="div" className="card-title">
                  {title}
                </Typography>
              </Box>

              <CardContent>
                <Typography variant="body2" className="card-body">
                  {content[index]}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  
  );
}
