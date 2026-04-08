import { ClipboardCheck, Calculator, Wrench, ShieldCheck } from "lucide-react";
import "../../styles/components/home/process.scss";

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: <ClipboardCheck size={32} />,
      title: "Darmowy audyt",
      desc: "Przyjeżdżamy na miejsce, oceniamy budynek i dobieramy optymalne rozwiązanie do Twoich potrzeb.",
    },
    {
      id: 2,
      icon: <Calculator size={32} />,
      title: "Projekt i wycena",
      desc: "Otrzymujesz przejrzystą ofertę finansową oraz szczegółowy projekt instalacji.",
    },
    {
      id: 3,
      icon: <Wrench size={32} />,
      title: "Profesjonalny montaż",
      desc: "Nasze certyfikowane ekipy instalują sprzęt szybko, czysto i zgodnie ze sztuką.",
    },
    {
      id: 4,
      icon: <ShieldCheck size={32} />,
      title: "Serwis i opieka",
      desc: "Uruchamiamy system, szkolimy z obsługi i zapewniamy pełne wsparcie posprzedażowe.",
    },
  ];

  return (
    <section className="process">
      <div className="process_container">
        <div className="process_header">
          <span className="process_label">Jak działamy?</span>
          <h2 className="process_title">Prosty proces, pełne wsparcie</h2>
        </div>

        <div className="process_grid">
          {steps.map((step, index) => (
            <div key={step.id} className="process_item">
              <div className="process_icon_wrapper">
                <div className="process_number">0{index + 1}</div>
                <div className="process_icon">{step.icon}</div>
              </div>
              <h3 className="process_item_title">{step.title}</h3>
              <p className="process_item_desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
