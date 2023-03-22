import FunFact from "@/components/FunFact/FunFact";
import { getFunFacts, getFunFactsData } from "@/lib/getFunFactsData";

const FunFacts = async () => {
  const data = await getFunFactsData();
  //console.log("FunFacts:", data);

  return (
    <div>
      <FunFact data={data} />
    </div>
  );
};

export default FunFacts;
