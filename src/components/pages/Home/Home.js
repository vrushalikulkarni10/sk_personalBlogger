import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TechIcon from '@mui/icons-material/Computer';
import CookingIcon from '@mui/icons-material/Restaurant';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'; // Icon for Traveling

const Home = () => {
  const blogs = [
    {
      title: 'Tech Trends',
      content: 'Explore the latest trends in technology, including AI, blockchain, and the Internet of Things.',
      detailedInfo: 'Stay ahead with insights into how these technologies can transform industries and everyday life. Learn about advancements in AI-driven automation, the implications of blockchain for security and transparency, and how IoT devices are making our homes smarter and our cities more efficient. From tech start-ups to major corporations, discover how innovation shapes the future.',
      relatedText: 'Stay updated with the cutting-edge innovations.',
      avatar: <TechIcon />,
      topic: 'Tech',
    },
    {
      title: 'Delicious Recipes',
      content: 'Learn to cook amazing dishes with these recipes, including appetizers, mains, and desserts.',
      detailedInfo: 'Find step-by-step guides and tips to enhance your culinary skills. Explore a variety of cuisines from around the world, discover the secrets to perfecting your favorite dishes, and learn about food presentation to impress your guests. Whether you are a beginner or an experienced cook, these recipes will inspire you to create delicious meals for any occasion.',
      relatedText: 'Perfect your culinary skills with these tips.',
      avatar: <CookingIcon />,
      topic: 'Cooking',
    },
    {
      title: 'Traveling Adventures',
      content: 'Discover breathtaking destinations around the world, from bustling cities to serene landscapes.',
      detailedInfo: 'Get travel tips, itineraries, and advice on how to make the most of your adventures. Learn how to pack efficiently, navigate through foreign cities, and immerse yourself in different cultures. From planning solo trips to family vacations, uncover the best places to visit, must-try local cuisines, and hidden gems off the beaten path. Traveling is not just about the destination; it’s about the experiences you create along the way.',
      relatedText: 'Explore new cultures and experiences.',
      avatar: <AirplanemodeActiveIcon />,
      topic: 'Traveling',
    },
  ];

  return (
    <Grid container spacing={2} sx={{ marginTop: 4, paddingX: 2 }}>
      {blogs.map((blog, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', marginBottom: 1 }}>
              {blog.avatar}
            </Avatar>
            <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
              {blog.content}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
              {blog.detailedInfo}  {/* Enhanced detailed info */}
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ marginBottom: 1 }}>
              Topic: {blog.topic}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.relatedText}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
