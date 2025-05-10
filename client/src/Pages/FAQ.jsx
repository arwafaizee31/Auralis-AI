import React, { useState } from "react";
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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

// Custom Theme
const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#802BB1",
    },
    background: {
      default: "#0e0923",
      paper: "#4C495D",
    },
    text: {
      primary: "#D1D7E0",
      secondary: "#564F6F",
    },
  },
  typography: {
    fontFamily: `'Segoe UI', 'Roboto', 'Helvetica', sans-serif`,
  },
});

// Gradient Heading Style
const GradientHeading = styled(Typography)({
  fontWeight: "bold",
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "2rem",
  background: "linear-gradient(90deg, #29abe2, #8e98df, #cda9e8, #f2bbb7, #fff893)",

  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

// Styled Accordion Summary with rotating icon
const StyledAccordionSummary = styled(AccordionSummary)(({ expand }) => ({
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: expand === "true" ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
    color: "#D1D7E0",
  },
}));

// FAQ content
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

export default function FaqPage() {
  const [expandedStates, setExpandedStates] = useState(
    Array(faqs.length).fill(false)
  );

  const handleAccordionToggle = (index) => (event, isExpanded) => {
    const newStates = [...expandedStates];
    newStates[index] = isExpanded;
    setExpandedStates(newStates);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box
        sx={{
          py: 5,
          minHeight: "100vh",
          backgroundColor: customTheme.palette.background.default,
        }}
      >
        <Container maxWidth="md">
          <GradientHeading>
            Frequently Asked Questions
          </GradientHeading>

          {faqs.map((faq, index) => (
            <Fade in={true} timeout={500 + index * 100} key={index}>
              <Accordion
                expanded={expandedStates[index]}
                onChange={handleAccordionToggle(index)}
                sx={{
                  backgroundColor: "#4C495D",
                  borderRadius: 2,
                  color: "#D1D7E0",
                  mb: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              >
                <StyledAccordionSummary
                  expand={expandedStates[index] ? "true" : "false"}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                    {faq.question}
                  </Typography>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ opacity: 0.9, fontSize: "0.95rem" }}>
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
