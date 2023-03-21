import FunFact from "@/components/FunFact/FunFact";
import { getFunFacts } from "@/lib/getfunFacts";

const FunFacts = async () => {
  const data = await getFunFacts();
  //console.log("FunFacts:", data);

  return (
    <div>
      <FunFact data={data} />
    </div>
  );
};

export default FunFacts;
