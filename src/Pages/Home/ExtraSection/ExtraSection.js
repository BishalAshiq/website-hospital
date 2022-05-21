import { Container } from "@mui/material";
import React from "react";
import './ExtraSection.css';
import extraimg from "../../../Images/Extra-section/jc-gellidon-uhXlRnt9dTw-unsplash.jpg";

const ExtraSection = () => {
  return (
      <Container className="extra-section">
         <div>
            <img src={extraimg} alt=""/>
         </div>
         <div>
          <h2>Special Cardiologist</h2>
          <p>Cardiology is a specialty of internal medicine. To be a cardiologist in the United States, a three-year residency in internal medicine is followed by a three-year fellowship in cardiology. It is possible to specialize further in a sub-specialty. Recognized sub-specialties in the United States by the ACGME are cardiac electrophysiology, echocardiography, interventional cardiology, and nuclear cardiology. Cardiac electrophysiology is the science of elucidating, diagnosing, and treating the electrical activities of the heart. The term is usually used to describe studies of such phenomena by invasive (intracardiac) catheter recording of spontaneous activity as well as of cardiac responses to programmed electrical stimulation (PES). These studies are performed to assess complex arrhythmias, elucidate symptoms, evaluate abnormal electrocardiograms, assess risk of developing arrhythmias in the future, and design treatment. These procedures increasingly include therapeutic methods (typically radiofrequency ablation, or cryoablation) in addition to diagnostic and prognostic procedures.</p>
         </div>
         
      </Container>
  );
};

export default ExtraSection;
