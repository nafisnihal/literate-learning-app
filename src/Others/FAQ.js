import React from 'react';
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
    return (
      <div className="w-75 mx-auto my-5">
        <h3 className="w-50 mx-auto text-center text-light py-4 my-5 bg-dark">
          Frequently Asked Questions
        </h3>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Can I Enroll Multiple Courses ?</Accordion.Header>
            <Accordion.Body>
              Yes. You can enroll as many courses as you like.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How Can I Use My Newsletters ?</Accordion.Header>
            <Accordion.Body>
              You will receive newsletters about courses. There are the “Course
              of the week”, “Courses Spotlight Instructor dedicated email”, “Hot
              List and Now Submitting Email” and an other one “About our
              Association”. You are highly recommended to choose your prefer
              course among these newsletters. You can follow the news on Crayon
              Magique. You should buy and enroll these courses easily to improve
              your skills.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Is online education as effective as face-to-face instruction?
            </Accordion.Header>
            <Accordion.Body>
              Online education may seem relatively new, but years of research
              suggests it can be just as effective as traditional coursework,
              and often more so. According to a U.S. Department of Education
              analysis of more than 1,000 learning studies, online students tend
              to outperform classroom-based students across most disciplines and
              demographics. Another major review published the same year found
              that online students had the advantage 70 percent of the time, a
              gap authors projected would only widen as programs and
              technologies evolve.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What technical skills do online students need?
            </Accordion.Header>
            <Accordion.Body>
              Online learning platforms are typically designed to be as
              user-friendly as possible: intuitive controls, clear instructions,
              and tutorials guide students through new tasks. However, students
              still need basic computer skills to access and navigate these
              programs. These skills include: using a keyboard and a mouse;
              running computer programs; using the Internet; sending and
              receiving email; using word processing programs; and using forums
              and other collaborative tools. Most online programs publish such
              requirements on their websites. If not, an admissions adviser can
              help.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default FAQ;