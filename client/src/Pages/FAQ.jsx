import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Fade,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { styled } from "@mui/system";
import "./FAQ.css";

// Styled Accordion
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: "20px",
  marginBottom: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  "&::before": {
    display: "none",
  },
}));

// Styled Summary with reduced height and responsive padding
const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  minHeight: "40px !important",
  padding: "8px 16px",
  "&.Mui-expanded": {
    minHeight: "40px",
  },
  "& .MuiTypography-root": {
    fontWeight: 600,
    fontSize: "clamp(0.9rem, 1vw, 1.05rem)",
  },
  justifyContent: "space-between",
  alignItems: "center",
}));

// Responsive IconButton
const CircleIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "50%",
  width: "28px",
  height: "28px",
  "& svg": {
    fontSize: "1rem",
  },
  "&:hover": {
    backgroundColor: "#333",
  },
}));

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
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <Box sx={{ py: 4, minHeight: "100vh", backgroundColor: "rgba(3,3,3,255)" }}>
      <Container maxWidth="md">
        <div className="gradient-heading">Frequently Asked Questions</div>

        {faqs.map((faq, index) => (
          <Fade in={true} timeout={500 + index * 100} key={index}>
            <StyledAccordion
              expanded={expandedIndex === index}
              onChange={handleToggle(index)}
            >
              <StyledAccordionSummary
                expandIcon={
                  <CircleIconButton>
                    {expandedIndex === index ? <Remove /> : <Add />}
                  </CircleIconButton>
                }
              >
                <Typography className="faq-question">
                  {faq.question}
                </Typography>
              </StyledAccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0 16px 12px",
                }}
              >
                <Typography
                  className="faq-answer"
                  sx={{
                    fontSize: "clamp(0.85rem, 1vw, 1rem)",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Fade>
        ))}
      </Container>
    </Box>
  );
}
