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
import "./FAQ.css";

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
    <Box className="faq-background">
      <Container maxWidth="md">
        <Typography className="faq-heading">Frequently Asked Questions</Typography>

        {faqs.map((faq, index) => (
          <Fade in={true} timeout={500 + index * 100} key={index}>
            <Accordion
              className="faq-accordion"
              expanded={expandedIndex === index}
              onChange={handleToggle(index)}
            >
              <AccordionSummary
                className="faq-summary"
                expandIcon={
                  <IconButton className="faq-icon">
                    {expandedIndex === index ? <Remove /> : <Add />}
                  </IconButton>
                }
              >
                <Typography className="faq-question">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className="faq-details">
                <Typography className="faq-answer">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Fade>
        ))}
      </Container>
    </Box>
  );
}
