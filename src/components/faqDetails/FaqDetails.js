import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FaqDetails.css";

function FaqDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="faq__details__title">
        <h5>We have put together the most common questions for you</h5>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq__details">
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">
                  How long does Hair Transplantation take
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Duration depends on the number of grafts. It can take anyware
                  between 6 to 10 hours.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel2a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">
                  Can I do sports activities after the Hair Transplant surgery
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  The Patients should not do any sport activity during the first
                  month, after 1 month they can engage in all sports activities
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel3a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel4a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel5a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel6a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel7a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel8a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel9a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel9a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel9a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel9a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel9a-header"
            >
              <Typography component={"span"} variant={"body2"}>
                <div className="question">Accordion 1</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                <div className="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* -------------------2-------------------- */}
        </div>
      </div>
    </>
  );
}

export default FaqDetails;
