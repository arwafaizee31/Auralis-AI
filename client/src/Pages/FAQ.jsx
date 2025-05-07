import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Fade,
} from '@mui/material';
import { Link } from 'react-router-dom'; // for navigation links
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
  },
  typography: {
    fontFamily: `'Segoe UI', 'Roboto', 'Helvetica', sans-serif`,
  },
});

// Define the FAQ data
const faqs = [
  {
    question: "What is this AI music generator?",
    answer:
      "Our AI music generator uses advanced models to create original music based on your text prompts or preferences.",
  },
  {
    question: "How do I generate a music track?",
    answer:
      "Go to the 'Generate Music' page, enter your prompt (e.g. 'relaxing lo-fi beats'), and click 'Generate'. Our system will process and deliver your music.",
  },
  {
    question: "Is the generated music royalty-free?",
    answer:
      "Yes, all music generated using our AI is royalty-free and can be used for personal or commercial projects.",
  },
  {
    question: "How long does it take to generate a track?",
    answer:
      "Usually it takes between 10 to 30 seconds, depending on the complexity of your prompt and server load.",
  },
  {
    question: "Can I download the generated tracks?",
    answer:
      "Absolutely! Once generated, you'll have the option to download the track in MP3 format.",
  },
  {
    question: "What kind of music styles are supported?",
    answer:
      "Our AI supports a wide range of styles including lo-fi, classical, cinematic, pop, ambient, and more.",
  },
];

// FaqPage component
export default function FaqPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Main Content Section */}
      <Box
        sx={{
          py: 5,
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #1e1e1e, #2a2a40)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              color: '#90caf9',
              fontWeight: 'bold',
              textShadow: '0 0 8px rgba(144,202,249,0.3)',
              mb: 5,
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Fade in={true} timeout={500 + index * 100} key={index}>
              <Accordion
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  color: '#fff',
                  mb: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#90caf9' }} />}>
                  <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Fade>
          ))}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
