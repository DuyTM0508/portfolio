import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "../types";

interface UseSectionInViewProps {
  sectionName: SectionName;
  threshold?: number;
}

const useSectionInView = ({
  sectionName,
  threshold,
}: UseSectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold: threshold || 0.75,
  });
  const { setActiveLink, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveLink(sectionName);
    }
  }, [inView, setActiveLink, timeOfLastClick, sectionName]);

  return { ref };
};

export default useSectionInView;
