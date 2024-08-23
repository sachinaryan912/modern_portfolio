import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ image,category, title, description,type }) {
  return (
    <Card sx={{ maxWidth: "35vw" , width: "34vw"}} className='card'>
      <CardMedia
        sx={{ height: 240 }}
        image={image}
        title={title}
      />
      <CardContent className='card-body'>
      <Typography className='cat_txt' component="p">
          {category}
        </Typography>
        <Typography className='title_txt_home' component="p">
          {title}
        </Typography>
        {type === 'project' && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
      
    </Card>
  );
}
